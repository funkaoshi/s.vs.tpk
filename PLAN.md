# Implementation Plan: AT Protocol Comments (Option C3)

Custom `ca.totalpartykill.blog.comment` records stored in users' own AT Protocol
repositories, discovered via a Cloudflare Worker that indexes Jetstream. Comments
link directly to blog post URLs — no per-post Bluesky thread required.

See `COMMENTS_RESEARCH.md` for the full option analysis.

---

## Current Status (2026-03-14)

### Completed
- **Phase 0** — all foundations in place: Cloudflare account, KV namespaces, Worker scaffold, lexicon, `client-metadata.json`, `oauth-callback` page, beta subdomain (`beta.save.vs.totalpartykill.ca`), Makefile updated.
- **Phase 1** — Jetstream indexer working and tested end-to-end in production. WebSocket approach used (HTTP streaming not supported by Jetstream). Cursor defaults to 10 min ago on first run.
- **Phase 2** — GitHub Actions workflow exists (`.github/workflows/deploy-worker.yml`). Note: the workflow only triggers from `master`; for now, deploy manually with `cd worker && npx wrangler deploy`.
- **Phase 3** — Complete. Sign-in form renders on all post pages. OAuth flow completes end-to-end: handle entry → Bluesky auth → callback → redirect back to post with session. Key fixes: esbuild output to `static/assets/js/` (not `assets/js/`), `handleResolver` option required by `BrowserOAuthClient.load()`, `make staging` overrides `baseURL` so `client-metadata.json` contains staging URLs.
- **Phase 4** — Partial. Comment form UI renders for authenticated users (textarea, character counter, submit button). Posting is blocked: `session.fetchHandler` → 401 from PDS; `@atproto/api` Agent → "collection must be a valid nsid" (passes local NSID validation; likely a server-side validator difference). Skipping for now.
- **Phase 5** — Complete (code done, partially working). `loadComments()` fires on page load: fetches index from Worker, resolves each commenter's PDS via `plc.directory`, fetches record text and Bluesky profile in parallel, renders HTML into `#atproto-comments`. Worker URL configured via `hugo.toml` `params.commentsWorkerUrl` → passed to JS via `<meta name="worker-url">` in the layout. Worker CORS now allows both production and staging origins.

### In Progress / Next to Debug
- **Phase 5 — Comments not displaying**: Worker returns no comments (says "No comments yet") even though `ca.totalpartykill.blog.comment` records exist in the AT Protocol repo. Two likely causes to investigate:
  1. **`postUrl` mismatch**: comments were posted from staging (`https://beta.save.vs.totalpartykill.ca/...`) but the Worker indexes and queries by URL — the staging URL won't match a production query. To confirm: `curl "https://svtpk-comments.ramanan-287.workers.dev/comments?postUrl=<exact-url-stored-in-record>"` and check what the record's `postUrl` field actually contains.
  2. **Jetstream not indexing the collection**: Worker Jetstream listener may not be receiving `ca.totalpartykill.blog.comment` events. Check Cloudflare Worker logs to see if cron is firing and events are being processed.

### Implementation notes (important departures from original plan)

- **JS build step added:** `@atproto/oauth-client-browser` cannot be loaded from esm.sh CDN (transitive `@atproto-labs/simple-store-memory` dependency fails to resolve). Instead: root-level `package.json` + `esbuild` bundles `assets/js/comments.js` → `static/assets/js/comments.bundle.js`. Run `npm install` then `npm run build` before `make`. The `Makefile` `build` target now runs `npm run build` first automatically.
- **`comments.bundle.js` output goes to `static/assets/js/`** (not `assets/js/`) — Hugo only copies `static/` verbatim; files under `assets/` are only published if processed through Hugo Pipes. The bundle is `.gitignore`'d and regenerated on each build.
- **esbuild flags:** `--bundle --format=esm --platform=browser` (the `--platform=browser` flag is critical; without it, esbuild picks Node.js conditional exports and the bundle fails at runtime).
- **`CLIENT_ID` fallback:** uses `window.location.origin` (not a hardcoded URL) so it works correctly on both staging and production without code changes.
- **`content/oauth-callback.md`** uses Hugo frontmatter `url: "/oauth-callback.html"` served via `layouts/oauth-callback/single.html` to avoid the web server adding a trailing slash redirect.
- **OAuth callback URL:** previously blocked because `init()` returned `undefined`. The fix was switching from Jekyll (trailing slash redirect) to Hugo with `url: "/oauth-callback.html"`. The URL `/oauth-callback.html` is now registered in `client-metadata.json` and the callback page is served at exactly that path. **Not yet tested on staging.**
- **Worker URL** configured in `hugo.toml` as `params.commentsWorkerUrl` — update this to match the actual `workers.dev` URL (or custom domain once Phase 6 is done). Passed to JS via `<meta name="worker-url">` in `layouts/_default/single.html`.
- **Wrangler v4** is in use (not v3 as originally planned). Scheduled endpoint for local testing is `/cdn-cgi/handler/scheduled` (not `/__scheduled`). Deprecated `CF_API_TOKEN`/`CF_ACCOUNT_ID` → `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID`.

### To validate Phase 3

1. Run `npm run build` (first time, or after changing `comments.js`)
2. Deploy to staging: `make && make deploy-staging`
3. Open a post page on `beta.save.vs.totalpartykill.ca` — confirm the sign-in form appears below the post
4. Enter your Bluesky handle and click "Sign in with Bluesky" — confirm redirect to Bluesky's auth page
5. Complete sign-in on Bluesky — confirm redirect back to `/oauth-callback.html`
6. Check browser console on the callback page for `href` and `hash` log lines
7. Confirm redirect back to the original post page with "Signed in as did:plc:…" shown
8. If `init()` returns `undefined` on the callback page: compare `window.location.href` (minus fragment) against the registered `redirect_uri` in `client-metadata.json` character-for-character

---

## Architecture overview

```
[Commenter's browser]
  → AT Protocol OAuth (PKCE, DPoP)
  → com.atproto.repo.createRecord  →  [User's PDS]
                                            ↓
                                     [AT Proto Relay]
                                            ↓ firehose
                                      [Jetstream filter]
                                            ↓ ca.totalpartykill.blog.comment events
[Cloudflare Worker] ←── Cron (every 5 min) ──┘
  stores {did, rkey, cid, createdAt} in KV, keyed by postUrl

[Reader's browser]
  → GET worker/comments?postUrl=…  →  [Cloudflare Worker + KV]  →  [{did, rkey}]
  → GET {pds}/xrpc/com.atproto.repo.getRecord (one per commenter)
  → render comments
```

**Key technology choices:**
- **Cloudflare Worker** — index builder and read API (free tier sufficient)
- **Cloudflare KV** — comment index storage
- **Cloudflare Cron Triggers** — poll Jetstream every 5 min (simpler than Durable Objects; ~5 min comment latency is acceptable for a blog)
- **Wrangler v4** — local dev and deployment
- **`@atproto/oauth-client-browser` + `@atproto/api`** — browser-side OAuth and record creation, loaded as ESM (no build step)
- **TypeScript** — Worker code only; blog JS stays plain ESM

**Worker repo location:** `worker/` subdirectory in this repo (monorepo).

---

## Phase 0: Foundations

_Goal: establish all configuration, credentials, and project structure before writing any functional code. Nothing user-visible yet._

### 0.1 — Cloudflare account setup

- [ ] Create a Cloudflare account (or use existing)
- [ ] Enable **Workers & Pages** and **KV**
- [ ] Create a KV namespace named `COMMENTS` (note the namespace ID)
- [ ] Create a KV namespace named `COMMENTS_PREVIEW` for local dev (note the namespace ID)
- [ ] Create a Cloudflare API token with `Workers Scripts:Edit`, `Workers KV Storage:Edit` permissions
- [ ] Store the token as a GitHub Actions secret: `CLOUDFLARE_API_TOKEN`
- [ ] Store the Cloudflare account ID as a GitHub Actions secret: `CLOUDFLARE_ACCOUNT_ID`

### 0.2 — Worker project scaffold

Create `worker/` in the repo root:

```
worker/
  src/
    index.ts        # Worker entrypoint: router + cron handler
    jetstream.ts    # Jetstream polling logic
    kv.ts           # KV read/write helpers
    types.ts        # Shared types
  wrangler.toml
  package.json
  tsconfig.json
```

**`worker/wrangler.toml`:**
```toml
name = "svtpk-comments"
main = "src/index.ts"
compatibility_date = "2025-01-01"

[triggers]
crons = ["*/5 * * * *"]   # poll Jetstream every 5 minutes

[[kv_namespaces]]
binding = "COMMENTS"
id = "<production-namespace-id>"
preview_id = "<preview-namespace-id>"

[vars]
BLOG_ORIGIN = "https://save.vs.totalpartykill.ca"
JETSTREAM_URL = "https://jetstream2.us-east.bsky.network"
COLLECTION = "ca.totalpartykill.blog.comment"
```

**`worker/package.json`:**
```json
{
  "name": "svtpk-comments-worker",
  "private": true,
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4",
    "typescript": "^5",
    "wrangler": "^4"
  }
}
```

### 0.3 — Lexicon definition

Create `worker/lexicon/ca.totalpartykill.blog.comment.json`:

```json
{
  "lexicon": 1,
  "id": "ca.totalpartykill.blog.comment",
  "defs": {
    "main": {
      "type": "record",
      "description": "A comment on a Save vs. Total Party Kill blog post.",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["postUrl", "text", "createdAt"],
        "properties": {
          "postUrl": {
            "type": "string",
            "format": "uri",
            "description": "Canonical URL of the blog post being commented on."
          },
          "text": {
            "type": "string",
            "maxGraphemes": 3000,
            "maxLength": 30000
          },
          "createdAt": {
            "type": "string",
            "format": "datetime"
          }
        }
      }
    }
  }
}
```

**Author field:** There is no `author` field in the lexicon. In AT Protocol, the commenter's DID is implicit — it is part of the record's AT-URI (`at://{did}/...`) and is delivered by Jetstream in the event envelope, not inside the record payload. Storing it in the record body would be redundant and unverified.

**Evolving the lexicon:** Adding new optional fields to either record type is safe and backward-compatible at any time. The required fields (`postUrl`, `text`, `createdAt` for comments; `subject`, `createdAt` for stars) are permanent. Planned optional additions: `replyTo` (threading), `facets` (rich text), `langs`.

### 0.4 — AT Protocol OAuth client metadata

Create `client-metadata.json` in the site root (served at `https://save.vs.totalpartykill.ca/client-metadata.json`):

```json
{
  "client_id": "https://save.vs.totalpartykill.ca/client-metadata.json",
  "client_name": "Save vs. Total Party Kill Comments",
  "client_uri": "https://save.vs.totalpartykill.ca",
  "redirect_uris": ["https://save.vs.totalpartykill.ca/oauth-callback"],
  "scope": "atproto transition:generic",
  "grant_types": ["authorization_code", "refresh_token"],
  "response_types": ["code"],
  "token_endpoint_auth_method": "none",
  "application_type": "web",
  "dpop_bound_access_tokens": true
}
```

In Hugo: `content/client-metadata.md` with frontmatter `url: "/client-metadata.json"` + `layouts/client-metadata/single.html` renders the JSON directly (no HTML wrapper — template has no `{{ define "main" }}` block).

`content/oauth-callback.md` with frontmatter `url: "/oauth-callback.html"` + `layouts/oauth-callback/single.html` handles the OAuth redirect page.

Both already exist in the Hugo codebase.

---

## Phase 1: Worker — Jetstream indexer

_Goal: Worker polls Jetstream, indexes comment records in KV. Testable by creating a record manually with a Bluesky client and verifying it appears in KV._

### 1.1 — KV data model

**Comment index** (one entry per comment):
- Key: `comment:{postUrl}:{did}:{rkey}`
- Value: `{"did":"...","rkey":"...","cid":"...","postUrl":"...","createdAt":"..."}`

**Comment list** (for efficient retrieval):
- Key: `index:{postUrl}`
- Value: JSON array of `{did, rkey, cid, createdAt}`, sorted by `createdAt` ascending

**Cursor** (for resuming Jetstream polls):
- Key: `cursor`
- Value: string (Jetstream cursor timestamp)

### 1.2 — Jetstream polling (`worker/src/jetstream.ts`)

On each cron trigger:

1. Read `cursor` from KV.
2. Open an HTTP request to Jetstream's REST endpoint (not WebSocket — Workers support HTTP, and Jetstream supports `?cursor=` parameter with `compress=false` for simpler streaming):
   ```
   GET {JETSTREAM_URL}/subscribe
     ?wantedCollections={COLLECTION}
     &cursor={cursor}
   ```
3. Read the response body as a stream, parse newline-delimited JSON events.
4. For each `create` event on the collection:
   - Extract `did`, `rkey`, `cid` (from `commit.cid`), `record.postUrl`, `record.createdAt`
   - Validate that `postUrl` starts with `https://save.vs.totalpartykill.ca/`
   - Write to KV (see 1.1)
5. For each `delete` event on the collection:
   - Remove from KV
6. Store the latest event timestamp as the new `cursor`.
7. Run for at most 25 seconds (Workers have a 30s CPU limit on cron; leave headroom).

### 1.3 — Read API (`worker/src/index.ts`)

Expose a single endpoint:

```
GET /comments?postUrl={url}
```

- Read `index:{postUrl}` from KV
- Return JSON: `{"comments": [{did, rkey, createdAt}, ...]}`
- Set CORS headers: `Access-Control-Allow-Origin: https://save.vs.totalpartykill.ca`

Also handle `OPTIONS` preflight.

### 1.4 — Manual test

After deploying:
1. Use a Bluesky client or `curl` with an AT Protocol session to create a `ca.totalpartykill.blog.comment` record manually.
2. Wait up to 5 minutes for the cron to fire, or trigger it via `wrangler dev` locally.
3. Call `GET /comments?postUrl=https://save.vs.totalpartykill.ca/...` and verify the record appears.

---

## Phase 2: Worker deployment automation

_Goal: the Worker deploys automatically on every push to `master` that touches `worker/`. No manual `wrangler deploy` needed after initial setup._

### 2.1 — GitHub Actions workflow

Create `.github/workflows/deploy-worker.yml`:

```yaml
name: Deploy Comments Worker

on:
  push:
    branches: [master]
    paths:
      - 'worker/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: worker/package-lock.json
      - name: Install dependencies
        working-directory: worker
        run: npm ci
      - name: Type check
        working-directory: worker
        run: npm run type-check
      - name: Deploy to Cloudflare
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          workingDirectory: worker
```

### 2.2 — Local development

Developers (or the author) can run `wrangler dev` from `worker/` to test locally. The preview KV namespace is used automatically.

---

## Phase 3: Comment form — Authentication

_Goal: a "Sign in with Bluesky" button appears on posts (even if `bluesky:` frontmatter isn't set). Clicking it initiates the AT Protocol OAuth flow and returns to the page authenticated. No posting yet._

### 3.1 — `assets/js/comments.js` ✓ Done

A plain ESM module bundled by esbuild. Responsibilities in this phase:
- On page load: check if this is the OAuth callback URL (detected by presence of `#status` element); if so, call `client.init()` to complete the session exchange and redirect back to the post.
- If a session exists, show the user's DID and a sign-out button.
- If no session, show a "Sign in with Bluesky" form that calls `client.signInRedirect()`.

Bundled from `@atproto/oauth-client-browser` (not loaded via esm.sh — see implementation notes).

### 3.2 — Layout changes (`layouts/_default/single.html`) ✓ Done

Replace the existing `{{- with .Params.bluesky }}` block with a block that shows on all posts:

```html
<div id="comments-section">
  <h3>Comments</h3>
  <!-- existing bluesky-comments-tag display (keep for posts with bluesky: frontmatter) -->
  {{- with .Params.bluesky }}
  <bluesky-comments url="{{ . }}"></bluesky-comments>
  <script type="module">import "https://esm.sh/bluesky-comments-tag/load";</script>
  {{- end }}

  <!-- new comment system -->
  <div id="atproto-comments">
    <!-- populated by comments.js -->
  </div>
  <div id="comment-form">
    <!-- populated by comments.js -->
  </div>
  <script type="module" src="/assets/js/comments.bundle.js"></script>
</div>
```

Note: the template already has the `{{- with .Params.bluesky }}` block in place (already implemented in Hugo).

Pass the current page URL to the JS via a `data-` attribute or `<meta>` tag:
```html
<meta name="page-url" content="{{ .Permalink }}">
```

### 3.3 — OAuth callback page ✓ Done

`layouts/oauth-callback/single.html` — a minimal HTML page that imports `comments.bundle.js`, which detects the callback parameters and handles the session exchange, then redirects back to the referring post URL (stored in `sessionStorage` before the redirect). Already existed in the Hugo codebase.

### 3.4 — Root `package.json` ✓ Done

`package.json` does not exist at the repo root (only `package-lock.json` and `node_modules/` are present). Create it:

```json
{
  "name": "svtpk-browser",
  "private": true,
  "scripts": {
    "build": "esbuild assets/js/comments.js --bundle --format=esm --platform=browser --outfile=static/assets/js/comments.bundle.js"
  },
  "dependencies": {
    "@atproto/oauth-client-browser": "^0.3.0"
  },
  "devDependencies": {
    "esbuild": "^0.25.0"
  }
}
```

### 3.5 — Makefile update ✓ Done

The `build` target must run `npm run build` before `hugo`:

```makefile
build:
	npm run build
	hugo
```

(Currently just `hugo`.)

---

## Phase 4: Comment form — Posting

_Goal: authenticated users can write and submit a comment. The record is created in their PDS. The comment appears after the next Worker cron run (up to 5 min)._

### 4.1 — Comment form UI (in `comments.js`)

When authenticated, render:
- A `<textarea>` for comment text
- A character count
- A "Submit" button
- A "Sign out" link

On submit:
1. Call `agent.com.atproto.repo.createRecord` with:
   ```json
   {
     "repo": "{user DID}",
     "collection": "ca.totalpartykill.blog.comment",
     "record": {
       "postUrl": "{current page URL}",
       "text": "{comment text}",
       "createdAt": "{ISO datetime}"
     }
   }
   ```
2. Show a success message: "Your comment will appear within a few minutes."
3. Clear the form.

### 4.2 — Validation

Client-side only (the PDS will reject malformed records anyway):
- Text must not be empty
- Text must be ≤ 3000 graphemes

---

## Phase 5: Comment display

_Goal: comments stored in AT Protocol repos are fetched and displayed on the page, using the Worker as the index._

### 5.1 — Display logic (in `comments.js`)

On page load:
1. Call `GET https://svtpk-comments.{account}.workers.dev/comments?postUrl={pageUrl}`
2. For each `{did, rkey}` in the response:
   - Resolve the user's PDS endpoint via `com.atproto.identity.resolveHandle` or the DID document
   - Call `com.atproto.repo.getRecord?repo={did}&collection=ca.totalpartykill.blog.comment&rkey={rkey}`
   - Fetch the user's profile for display name/avatar: `app.bsky.actor.getProfile?actor={did}` (from `public.api.bsky.app`)
3. Render comments sorted by `createdAt`.

### 5.2 — Display format

Each comment renders:
- Avatar + display name (from Bluesky profile) + handle
- Comment text
- Timestamp (relative: "3 hours ago")
- Link to the AT Protocol record URI (for transparency/portability)

### 5.3 — Empty state and loading

- While fetching: skeleton UI or "Loading comments…" text
- If no comments yet: "No comments yet. Be the first."
- If Worker is unreachable: silent fail, show only the sign-in form

---

## Phase 6: Worker — Custom domain and hardening

_Goal: the Worker is accessible at a stable URL, rate-limited, and monitored._

### 6.1 — Custom domain

Add `comments.save.vs.totalpartykill.ca` as a Worker route in Cloudflare (requires the domain to be managed by Cloudflare DNS, or use a `workers.dev` subdomain if not).

Update `BLOG_ORIGIN` in `wrangler.toml` and `client-metadata.json` accordingly.

Update `layouts/_default/single.html` to use the stable URL.

### 6.2 — Rate limiting

Add basic rate limiting in the Worker's read endpoint:
- Use Cloudflare's built-in rate limiting (WAF rule) or a simple in-memory counter in the Worker (resets per Worker instance, good enough for abuse prevention)
- Limit: 60 requests/minute per IP for the read endpoint
- The write path goes directly to users' PDSes — the Worker doesn't receive comment writes, so no rate limiting needed there

### 6.3 — Monitoring

- Enable Cloudflare Workers **analytics** (built in, free)
- Add a simple health check endpoint: `GET /health` returns `{"ok": true, "cursor": "...", "commentCount": N}`
- Optionally: set up a Cloudflare **Alert** for Worker errors > threshold

---

## Phase 7: Migration and coexistence

_Goal: handle the transition from the current `bluesky-comments-tag` setup gracefully._

### 7.1 — Coexistence strategy

The new system and `bluesky-comments-tag` can coexist indefinitely:
- Posts with `bluesky:` frontmatter continue to show the Bluesky reply thread (existing comments preserved)
- All posts show the new AT Protocol comment form below
- No frontmatter changes required on existing posts

### 7.2 — Future: disable `bluesky-comments-tag`

Once the new system has been running for a while and feels solid, the `bluesky-comments-tag` display can be removed. This is a single-line change in `layouts/_default/single.html`. Not urgent.

---

## Deferred / Out of scope for now

- **Notifications:** emailing the author when a new comment arrives. Could be added as a Worker webhook later.
- **Moderation:** the author can delete spam by calling `com.atproto.repo.deleteRecord` on a commenter's PDS (requires knowing their DID/rkey). Could build a simple admin page later.
- **Reply threading:** the lexicon could gain a `replyTo` field referencing another comment's AT URI. Not needed initially.
- **Durable Objects upgrade:** if 5-minute comment latency becomes annoying, replace the Cron approach with a Durable Object that holds a persistent Jetstream WebSocket. The KV data model and read API don't change.
- **Auto-posting to Bluesky:** when a comment is posted, optionally create a `app.bsky.feed.post` reply to the Bluesky thread (if the post has `bluesky:` frontmatter). This would give commenters social presence on Bluesky too.

---

## Phase 8: Stars

_Goal: authenticated users can star comments. Stars are a separate record type in the star-giver's own repo — they own their star and can delete it. Deferred until all other phases are complete and working._

### 8.1 — Lexicon

Create `worker/lexicon/ca.totalpartykill.blog.commentStar.json`:

```json
{
  "lexicon": 1,
  "id": "ca.totalpartykill.blog.commentStar",
  "defs": {
    "main": {
      "type": "record",
      "description": "A star (like) on a Save vs. Total Party Kill blog comment.",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["subject", "createdAt"],
        "properties": {
          "subject": {
            "type": "object",
            "description": "Strong reference to the comment being starred.",
            "required": ["uri", "cid"],
            "properties": {
              "uri": { "type": "string", "format": "at-uri" },
              "cid": { "type": "string", "format": "cid" }
            }
          },
          "createdAt": { "type": "string", "format": "datetime" }
        }
      }
    }
  }
}
```

This follows the same pattern as `app.bsky.feed.like`. A custom type keeps stars in our namespace and indexed by our Worker (Bluesky's AppView won't index stars on custom record types).

### 8.2 — KV additions

Two new key patterns:
- Key: `stars:{commentAtUri}` → integer count
- Key: `stargivers:{commentAtUri}` → JSON array of DIDs (for deduplication and display)

### 8.3 — Jetstream polling update

Add `ca.totalpartykill.blog.commentStar` to the `wantedCollections` query parameter (a one-line change). On `create` event: validate that `subject.uri` points to a comment on this blog, then increment the count and append the DID. On `delete` event: decrement and remove the DID.

The `cid` stored in KV from Phase 1.1 provides the strong-ref needed to build `subject` without an extra PDS fetch.

### 8.4 — Read API update

Include a `stars` count inline in each comment object returned by `/comments`, so the browser needs no second round-trip:

```json
{"comments": [{"did": "...", "rkey": "...", "cid": "...", "createdAt": "...", "stars": 3}]}
```

### 8.5 — UI

Add a star button (☆ / ★) on each comment. Authenticated users can create or delete a `commentStar` record. The `cid` stored in KV (Phase 1.1) is used to build the strong-ref without an extra PDS fetch.

---

## Summary of files to create/modify

| File | Action | Phase |
|------|---------|-------|
| `worker/src/index.ts` | Create | 1, 2 |
| `worker/src/jetstream.ts` | Create | 1 |
| `worker/src/kv.ts` | Create | 1 |
| `worker/src/types.ts` | Create | 1 |
| `worker/wrangler.toml` | Create | 0 |
| `worker/package.json` | Create | 0 |
| `worker/tsconfig.json` | Create | 0 |
| `worker/lexicon/ca.totalpartykill.blog.comment.json` | Create | 0 |
| `worker/lexicon/ca.totalpartykill.blog.commentStar.json` | Create | 8 |
| `.github/workflows/deploy-worker.yml` | Create | 2 |
| `content/client-metadata.md` | ~~Create~~ **Done** | 0 |
| `layouts/client-metadata/single.html` | ~~Create~~ **Done** | 0 |
| `content/oauth-callback.md` | ~~Create~~ **Done** | 0 |
| `layouts/oauth-callback/single.html` | ~~Create~~ **Done** | 0 |
| `package.json` (root) | **Create** (missing!) | 3 |
| `assets/js/comments.js` | Create | 3, 4, 5 |
| `layouts/_default/single.html` | Modify | 3 |
| `Makefile` | Modify (add `npm run build` to `build` target) | 3 |
| `hugo.toml` | Modify if needed | 0 |

No existing files are removed. Changes to `layouts/_default/single.html` are additive.
