import { XMLParser } from 'fast-xml-parser';

const OPML_URL = 'https://save.vs.totalpartykill.ca/grab-bag/blogroll.opml';
const POSTS_KEY = 'blogroll:posts';
const LAST_RUN_KEY = 'blogroll:last_run';
const FETCH_TIMEOUT_MS = 5000;
const EXCERPT_LENGTH = 280;

// ── helpers ───────────────────────────────────────────────────────────────────

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function stripHtml(html) {
  return decodeEntities((html || '').replace(/<[^>]*>/g, ''));
}

function excerpt(text, maxLen) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= maxLen) return t;
  const cut = t.lastIndexOf(' ', maxLen);
  return t.slice(0, cut > 0 ? cut : maxLen) + '…';
}

function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
}

// Returns the text content of a fast-xml-parser node, handling strings,
// numbers, CDATA sections, and plain text nodes.
function text(node) {
  if (!node && node !== 0) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  return node.__cdata || node['#text'] || '';
}

function toArray(val) {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

// ── XML parser ────────────────────────────────────────────────────────────────

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  textNodeName: '#text',
  cdataPropName: '__cdata',
});

// ── OPML parsing ──────────────────────────────────────────────────────────────

function parseOpml(xml) {
  const doc = parser.parse(xml);
  const feeds = [];

  function walk(outlines) {
    for (const o of toArray(outlines)) {
      if (o.xmlUrl) {
        feeds.push({
          title:   o.title || o.text || o.xmlUrl,
          xmlUrl:  o.xmlUrl,
          htmlUrl: o.htmlUrl || o.url || '',
        });
      }
      if (o.outline) walk(o.outline);
    }
  }

  walk(doc?.opml?.body?.outline);
  if (!feeds.length) throw new Error('No feeds found in OPML');
  return feeds;
}

// ── Feed parsing ──────────────────────────────────────────────────────────────

function parseDate(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function parseFeed(xml, feedMeta) {
  const doc = parser.parse(xml);

  if (doc.feed) {
    // Atom
    const entry = toArray(doc.feed.entry)[0];
    if (!entry) return null;

    const postTitle = text(entry.title);

    const links = toArray(entry.link);
    const linkEl = links.find(l => l.rel === 'alternate') || links[0] || {};
    const postUrl = linkEl.href || text(linkEl) || '';

    const dateStr = text(entry.updated) || text(entry.published);
    const postDate = parseDate(dateStr);

    const rawContent = text(entry.content) || text(entry.summary);
    const postExcerpt = excerpt(stripHtml(rawContent), EXCERPT_LENGTH);

    return {
      blog_title: feedMeta.title,
      blog_url:   feedMeta.htmlUrl,
      post_title: postTitle,
      post_url:   postUrl,
      post_date:  postDate ? postDate.toISOString() : null,
      excerpt:    postExcerpt,
    };
  }

  if (doc.rss) {
    // RSS
    const item = toArray(doc.rss?.channel?.item)[0];
    if (!item) return null;

    const postTitle = text(item.title);
    const postUrl   = text(item.link) || text(item.guid);
    const postDate  = parseDate(text(item.pubDate));
    const postExcerpt = excerpt(stripHtml(text(item.description)), EXCERPT_LENGTH);

    return {
      blog_title: feedMeta.title,
      blog_url:   feedMeta.htmlUrl,
      post_title: postTitle,
      post_url:   postUrl,
      post_date:  postDate ? postDate.toISOString() : null,
      excerpt:    postExcerpt,
    };
  }

  return null;
}

async function fetchAndParseFeed(feedMeta) {
  try {
    const res = await fetchWithTimeout(feedMeta.xmlUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const post = parseFeed(xml, feedMeta);
    if (!post) throw new Error('No parseable entries');
    return post;
  } catch (err) {
    console.warn(`Feed failed [${feedMeta.title}]: ${err.message}`);
    return null;
  }
}

// ── Scheduled handler ─────────────────────────────────────────────────────────

async function handleScheduled(env) {
  let feeds;
  try {
    const res = await fetchWithTimeout(OPML_URL);
    if (!res.ok) throw new Error(`OPML HTTP ${res.status}`);
    const xml = await res.text();
    feeds = parseOpml(xml);
  } catch (err) {
    console.error(`Failed to fetch/parse OPML: ${err.message}`);
    return;
  }

  console.log(`Fetching ${feeds.length} feeds…`);

  const results = await Promise.allSettled(feeds.map(fetchAndParseFeed));

  const posts = results
    .map(r => (r.status === 'fulfilled' ? r.value : null))
    .filter(Boolean)
    .sort((a, b) => {
      const da = a.post_date ? new Date(a.post_date) : new Date(0);
      const db = b.post_date ? new Date(b.post_date) : new Date(0);
      return db - da;
    });

  console.log(`Got ${posts.length} posts from ${feeds.length} feeds`);

  await env.BLOGROLL_KV.put(POSTS_KEY, JSON.stringify(posts), { expirationTtl: 43200 });
  await env.BLOGROLL_KV.put(LAST_RUN_KEY, new Date().toISOString());
}

// ── HTTP handler ──────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Cache-Control': 'public, max-age=3600',
  'Content-Type': 'application/json',
};

async function handleRequest(request, env, ctx) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const url = new URL(request.url);
  if (url.pathname === '/__warm' && request.method === 'POST') {
    ctx.waitUntil(handleScheduled(env));
    return new Response(JSON.stringify({ ok: true }), { status: 202, headers: CORS_HEADERS });
  }

  const [postsJson, lastUpdated] = await Promise.all([
    env.BLOGROLL_KV.get(POSTS_KEY),
    env.BLOGROLL_KV.get(LAST_RUN_KEY),
  ]);

  if (!postsJson) {
    return new Response(
      JSON.stringify({ posts: [], warming: true }),
      { status: 200, headers: CORS_HEADERS }
    );
  }

  return new Response(
    JSON.stringify({ posts: JSON.parse(postsJson), last_updated: lastUpdated || null }),
    { status: 200, headers: CORS_HEADERS }
  );
}

// ── Entry point ───────────────────────────────────────────────────────────────

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(env));
  },

  async fetch(request, env, ctx) {
    return handleRequest(request, env, ctx);
  },
};
