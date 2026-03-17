const OPML_URL = 'https://save.vs.totalpartykill.ca/grab-bag/blogroll.opml';
const POSTS_KEY = 'blogroll:posts';
const LAST_RUN_KEY = 'blogroll:last_run';
const FETCH_TIMEOUT_MS = 5000;
const EXCERPT_LENGTH = 280;

// ── helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html) {
  // Re-parse as HTML, read textContent to strip tags
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  return doc.body ? doc.body.textContent : '';
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

// ── OPML parsing ─────────────────────────────────────────────────────────────

function parseOpml(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.querySelector('parsererror')) throw new Error('OPML parse error');
  const feeds = [];
  doc.querySelectorAll('outline[xmlUrl]').forEach(el => {
    const xmlUrl = el.getAttribute('xmlUrl');
    const title  = el.getAttribute('title') || el.getAttribute('text') || xmlUrl;
    const htmlUrl = el.getAttribute('htmlUrl') || el.getAttribute('url') || '';
    if (xmlUrl) feeds.push({ title, xmlUrl, htmlUrl });
  });
  return feeds;
}

// ── Feed parsing ──────────────────────────────────────────────────────────────

function parseDate(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function parseFeed(xml, feedMeta) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.querySelector('parsererror')) return null;

  const isAtom = !!doc.querySelector('feed');

  if (isAtom) {
    // Atom feed
    const entry = doc.querySelector('entry');
    if (!entry) return null;

    const postTitle = entry.querySelector('title')?.textContent?.trim() || '';
    const linkEl = entry.querySelector('link[rel="alternate"]') || entry.querySelector('link');
    const postUrl = linkEl?.getAttribute('href') || '';
    const dateStr = entry.querySelector('updated')?.textContent ||
                    entry.querySelector('published')?.textContent || '';
    const postDate = parseDate(dateStr);
    const contentEl = entry.querySelector('content') || entry.querySelector('summary');
    const rawContent = contentEl?.textContent || '';
    const text = stripHtml(rawContent);
    const postExcerpt = excerpt(text, EXCERPT_LENGTH);

    return {
      blog_title: feedMeta.title,
      blog_url: feedMeta.htmlUrl,
      post_title: postTitle,
      post_url: postUrl,
      post_date: postDate ? postDate.toISOString() : null,
      excerpt: postExcerpt,
    };
  } else {
    // RSS feed
    const item = doc.querySelector('item');
    if (!item) return null;

    const postTitle = item.querySelector('title')?.textContent?.trim() || '';
    const postUrl   = item.querySelector('link')?.textContent?.trim() ||
                      item.querySelector('guid')?.textContent?.trim() || '';
    const dateStr   = item.querySelector('pubDate')?.textContent || '';
    const postDate  = parseDate(dateStr);
    const descEl    = item.querySelector('description');
    const rawDesc   = descEl?.textContent || '';
    const text      = stripHtml(rawDesc);
    const postExcerpt = excerpt(text, EXCERPT_LENGTH);

    return {
      blog_title: feedMeta.title,
      blog_url: feedMeta.htmlUrl,
      post_title: postTitle,
      post_url: postUrl,
      post_date: postDate ? postDate.toISOString() : null,
      excerpt: postExcerpt,
    };
  }
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
  // 1. Fetch OPML
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

  // 2. Fetch all feeds in parallel
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

  // 3. Write to KV (TTL 12 hours = 43200 seconds)
  await env.BLOGROLL_KV.put(POSTS_KEY, JSON.stringify(posts), { expirationTtl: 43200 });
  await env.BLOGROLL_KV.put(LAST_RUN_KEY, new Date().toISOString());
}

// ── HTTP handler ──────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://save.vs.totalpartykill.ca',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Cache-Control': 'public, max-age=3600',
  'Content-Type': 'application/json',
};

async function handleRequest(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
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

  const body = JSON.stringify({
    posts: JSON.parse(postsJson),
    last_updated: lastUpdated || null,
  });

  return new Response(body, { status: 200, headers: CORS_HEADERS });
}

// ── Entry point ───────────────────────────────────────────────────────────────

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(env));
  },

  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  },
};
