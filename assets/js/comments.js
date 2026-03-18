import { BrowserOAuthClient } from '@atproto/oauth-client-browser'
import { Agent } from '@atproto/api'

const CLIENT_ID = `${window.location.origin}/client-metadata.json`

async function getClient() {
  return BrowserOAuthClient.load({
    clientId: CLIENT_ID,
    handleResolver: 'https://bsky.social',
  })
}

// --- OAuth callback page ---

async function handleCallback(client) {
  const statusEl = document.getElementById('status')
  try {
    console.log('OAuth callback. href:', window.location.href)
    console.log('hash:', window.location.hash)
    const result = await client.init()
    if (result) {
      const returnUrl = sessionStorage.getItem('comment-return-url') || '/'
      sessionStorage.removeItem('comment-return-url')
      window.location.href = returnUrl
    } else {
      console.error('init() returned undefined on callback page — URL may not match registered redirect_uri')
      if (statusEl) statusEl.innerHTML = '<p>Sign-in failed. Check the browser console for details.</p>'
    }
  } catch (err) {
    console.error('OAuth callback error:', err)
    if (statusEl) statusEl.innerHTML = `<p>Sign-in error: ${err.message}</p>`
  }
}

// --- Post page ---

async function initPostPage(client) {
  loadComments()

  const formEl = document.getElementById('comment-form')
  if (!formEl) return

  const result = await client.init()
  if (result) {
    renderSignedIn(formEl, result.session)
  } else {
    renderSignIn(formEl, client)
  }
}

function renderSignIn(container, client) {
  container.innerHTML = `
    <div class="comment-sign-in">
      <p>Sign in with your Bluesky account to leave a comment.</p>
      <form id="sign-in-form">
        <input type="text" id="handle-input" placeholder="you.bsky.social" autocomplete="username webauthn">
        <button type="submit">Sign in with Bluesky</button>
      </form>
    </div>
  `
  document.getElementById('sign-in-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const handle = document.getElementById('handle-input').value.trim()
    if (!handle) return
    sessionStorage.setItem('comment-return-url', window.location.href)
    try {
      await client.signInRedirect(handle, { scope: 'atproto transition:generic' })
    } catch (err) {
      console.error('Sign-in error:', err)
      alert('Sign-in failed: ' + err.message)
    }
  })
}

function countGraphemes(text) {
  return [...new Intl.Segmenter().segment(text)].length
}

function getPageUrl() {
  return document.querySelector('meta[name="page-url"]')?.content || window.location.href
}

function getWorkerUrl() {
  return document.querySelector('meta[name="worker-url"]')?.content
}

// --- Comment display ---

async function getPdsEndpoint(did) {
  if (did.startsWith('did:plc:')) {
    const resp = await fetch(`https://plc.directory/${did}`)
    if (!resp.ok) throw new Error(`DID resolution failed: ${resp.status}`)
    const doc = await resp.json()
    return doc.service?.find(s => s.type === 'AtprotoPersonalDataServer')?.serviceEndpoint
  } else if (did.startsWith('did:web:')) {
    const domain = did.slice('did:web:'.length)
    const resp = await fetch(`https://${domain}/.well-known/did.json`)
    if (!resp.ok) throw new Error(`DID resolution failed: ${resp.status}`)
    const doc = await resp.json()
    return doc.service?.find(s => s.type === 'AtprotoPersonalDataServer')?.serviceEndpoint
  }
  throw new Error(`Unsupported DID method: ${did}`)
}

async function fetchCommentRecord(did, rkey) {
  const pds = await getPdsEndpoint(did)
  if (!pds) throw new Error(`No PDS found for ${did}`)
  const url = `${pds}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=ca.totalpartykill.blog.comment&rkey=${encodeURIComponent(rkey)}`
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`getRecord failed: ${resp.status}`)
  return resp.json()
}

async function fetchProfile(did) {
  const url = `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(did)}`
  const resp = await fetch(url)
  if (!resp.ok) return null
  return resp.json()
}

function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderComment({ profile, record, did, rkey }) {
  const displayName = escapeHtml(profile?.displayName || profile?.handle || did)
  const handle = escapeHtml(profile?.handle || did)
  const avatar = profile?.avatar
    ? `<img class="comment-avatar" src="${profile.avatar}" alt="" width="40" height="40">`
    : `<span class="comment-avatar comment-avatar--placeholder"></span>`
  const text = escapeHtml(record.value?.text || '').replace(/\n/g, '<br>')
  const createdAt = record.value?.createdAt || ''
  const profileUrl = `https://bsky.app/profile/${encodeURIComponent(did)}`

  return `
    <div class="comment">
      <div class="comment-header">
        ${avatar}
        <span class="comment-author">
          <a href="${profileUrl}" target="_blank" rel="noopener noreferrer"><strong>${displayName}</strong></a>
          <span class="comment-handle">@${handle}</span>
        </span>
        <span class="comment-time" title="${escapeHtml(createdAt)}">${timeAgo(createdAt)}</span>
      </div>
      <div class="comment-body">${text}</div>
    </div>
  `
}

async function loadComments() {
  const workerUrl = getWorkerUrl()
  const container = document.getElementById('atproto-comments')
  if (!container || !workerUrl) return

  container.innerHTML = '<p class="comments-loading">Loading comments…</p>'

  let comments
  try {
    const resp = await fetch(`${workerUrl}/comments?postUrl=${encodeURIComponent(getPageUrl())}`)
    if (!resp.ok) throw new Error(`Worker error: ${resp.status}`)
    const data = await resp.json()
    comments = data.comments || []
  } catch (err) {
    console.error('Failed to load comments:', err)
    container.innerHTML = ''
    return
  }

  if (comments.length === 0) {
    container.innerHTML = '<p class="comments-empty">No comments yet.</p>'
    return
  }

  const results = await Promise.allSettled(
    comments.map(async ({ did, rkey }) => {
      const [recordResult, profileResult] = await Promise.allSettled([
        fetchCommentRecord(did, rkey),
        fetchProfile(did),
      ])
      return renderComment({
        did,
        rkey,
        record: recordResult.status === 'fulfilled' ? recordResult.value : {},
        profile: profileResult.status === 'fulfilled' ? profileResult.value : null,
      })
    })
  )

  const html = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value)
    .join('')

  container.innerHTML = html || '<p class="comments-empty">No comments yet.</p>'
}

function renderSignedIn(container, session) {
  const MAX = 3000
  container.innerHTML = `
    <div class="comment-signed-in">
      <p>Signed in as <strong>${session.did}</strong>. <button id="sign-out-btn">Sign out</button></p>
      <form id="comment-post-form">
        <textarea id="comment-text" rows="4" placeholder="Write a comment…" maxlength="30000"></textarea>
        <div class="comment-form-footer">
          <span id="char-count">0 / ${MAX}</span>
          <button type="submit">Post comment</button>
        </div>
        <p id="comment-status" aria-live="polite"></p>
      </form>
    </div>
  `

  const textarea = document.getElementById('comment-text')
  const charCount = document.getElementById('char-count')
  const status = document.getElementById('comment-status')

  textarea.addEventListener('input', () => {
    const count = countGraphemes(textarea.value)
    charCount.textContent = `${count} / ${MAX}`
    charCount.style.color = count > MAX ? 'red' : ''
  })

  document.getElementById('sign-out-btn').addEventListener('click', async () => {
    await session.signOut()
    window.location.reload()
  })

  document.getElementById('comment-post-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const text = textarea.value.trim()
    if (!text) return
    if (countGraphemes(text) > MAX) {
      status.textContent = `Comment is too long (max ${MAX} graphemes).`
      return
    }

    const submitBtn = e.target.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    status.textContent = 'Posting…'

    try {
      const agent = new Agent(session)
      await agent.com.atproto.repo.createRecord({
        repo: session.did,
        collection: 'ca.totalpartykill.blog.comment',
        record: {
          $type: 'ca.totalpartykill.blog.comment',
          postUrl: getPageUrl(),
          text,
          createdAt: new Date().toISOString(),
        },
      })

      textarea.value = ''
      charCount.textContent = `0 / ${MAX}`
      status.textContent = 'Your comment will appear within a few minutes.'
    } catch (err) {
      console.error('Post comment error:', err)
      status.textContent = `Failed to post: ${err.message}`
    } finally {
      submitBtn.disabled = false
    }
  })
}

// --- Main ---

async function main() {
  const client = await getClient()
  if (document.getElementById('status')) {
    await handleCallback(client)
  } else {
    await initPostPage(client)
  }
}

main().catch(console.error)
