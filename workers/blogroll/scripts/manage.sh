#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKER_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TOML="$WORKER_DIR/wrangler.toml"

usage() {
  echo "Usage: $0 {setup|warm|delete}"
  echo
  echo "  setup   Create KV namespaces, patch wrangler.toml, and deploy the worker"
  echo "  warm    Trigger one scheduled run to populate KV"
  echo "  delete  Delete the deployed worker and its KV namespaces"
  exit 1
}

# ── setup ─────────────────────────────────────────────────────────────────────
cmd_setup() {
  cd "$WORKER_DIR"

  echo "→ Installing dependencies…"
  npm install

  echo "→ Logging into Cloudflare (noop if already logged in)…"
  npx wrangler login

  echo "→ Creating KV namespace BLOGROLL_KV…"
  KV_OUT=$(npx wrangler kv namespace create BLOGROLL_KV 2>&1)
  KV_ID=$(echo "$KV_OUT" | grep -oE '"id":"[^"]+"' | sed 's/"id":"//;s/"//' | head -1)
  # fallback: wrangler text output style  id = "abc123"
  if [[ -z "$KV_ID" ]]; then
    KV_ID=$(echo "$KV_OUT" | grep 'id = "' | grep -v preview | sed 's/.*id = "\([^"]*\)".*/\1/' | head -1)
  fi
  if [[ -z "$KV_ID" ]]; then
    echo "ERROR: could not parse KV namespace ID from wrangler output:"
    echo "$KV_OUT"
    exit 1
  fi
  echo "  production id: $KV_ID"

  echo "→ Creating preview KV namespace…"
  KV_PREVIEW_OUT=$(npx wrangler kv namespace create BLOGROLL_KV --preview 2>&1)
  KV_PREVIEW_ID=$(echo "$KV_PREVIEW_OUT" | grep -oE '"id":"[^"]+"' | sed 's/"id":"//;s/"//' | head -1)
  if [[ -z "$KV_PREVIEW_ID" ]]; then
    KV_PREVIEW_ID=$(echo "$KV_PREVIEW_OUT" | grep 'id = "' | grep -v preview_id | sed 's/.*id = "\([^"]*\)".*/\1/' | head -1)
  fi
  if [[ -z "$KV_PREVIEW_ID" ]]; then
    echo "WARNING: could not create preview KV namespace (--preview may not be supported)."
    echo "  Skipping preview_id — local dev will use the production namespace."
    KV_PREVIEW_ID="$KV_ID"
  fi
  echo "  preview id:    $KV_PREVIEW_ID"

  echo "→ Patching wrangler.toml…"
  sed -i.bak \
    -e "s/PLACEHOLDER_KV_ID/$KV_ID/g" \
    -e "s/PLACEHOLDER_KV_PREVIEW_ID/$KV_PREVIEW_ID/g" \
    "$TOML"
  rm -f "$TOML.bak"

  echo "→ Deploying worker…"
  npx wrangler deploy

  WORKER_URL=$(npx wrangler whoami 2>/dev/null | grep -o 'workers\.dev' | head -1 || true)
  echo
  echo "✓ Worker deployed!"
  echo
  echo "Next step: update the WORKER_URL constant in layouts/blogroll/single.html"
  echo "  Find your worker URL in the Cloudflare dashboard, or run:"
  echo "  npx wrangler deploy (it prints the URL at the end)"
}

# ── warm ──────────────────────────────────────────────────────────────────────
cmd_warm() {
  cd "$WORKER_DIR"

  echo "→ Starting wrangler dev in test-scheduled mode…"
  npx wrangler dev --remote --test-scheduled &
  DEV_PID=$!

  echo "  Waiting for dev server to start…"
  sleep 5

  echo "→ Triggering scheduled run…"
  curl -s "http://localhost:8787/__scheduled?cron=*+*+*+*+*" || true

  echo "  Waiting for run to complete…"
  sleep 3

  echo "→ Stopping dev server…"
  kill "$DEV_PID" 2>/dev/null || true
  wait "$DEV_PID" 2>/dev/null || true

  echo "✓ Scheduled run triggered. KV should now be populated."
}

# ── delete ────────────────────────────────────────────────────────────────────
cmd_delete() {
  cd "$WORKER_DIR"

  # Read current IDs from wrangler.toml
  KV_ID=$(grep -A2 'binding = "BLOGROLL_KV"' "$TOML" | grep 'id = ' | grep -v preview | sed 's/.*id = "\([^"]*\)".*/\1/' | head -1)
  KV_PREVIEW_ID=$(grep 'preview_id' "$TOML" | sed 's/.*preview_id = "\([^"]*\)".*/\1/' | head -1)

  echo "→ Deleting deployed worker…"
  npx wrangler delete --name blogroll-worker || true

  if [[ -n "$KV_ID" && "$KV_ID" != "PLACEHOLDER_KV_ID" ]]; then
    echo "→ Deleting production KV namespace ($KV_ID)…"
    npx wrangler kv namespace delete --namespace-id "$KV_ID" || true
  fi

  if [[ -n "$KV_PREVIEW_ID" && "$KV_PREVIEW_ID" != "PLACEHOLDER_KV_PREVIEW_ID" ]]; then
    echo "→ Deleting preview KV namespace ($KV_PREVIEW_ID)…"
    npx wrangler kv namespace delete --namespace-id "$KV_PREVIEW_ID" || true
  fi

  echo "→ Resetting wrangler.toml to placeholder IDs…"
  sed -i.bak \
    -e "s|id = \"$KV_ID\"|id = \"PLACEHOLDER_KV_ID\"|g" \
    -e "s|preview_id = \"$KV_PREVIEW_ID\"|preview_id = \"PLACEHOLDER_KV_PREVIEW_ID\"|g" \
    "$TOML"
  rm -f "$TOML.bak"

  echo "✓ Worker and KV namespaces deleted. wrangler.toml reset."
}

# ── dispatch ──────────────────────────────────────────────────────────────────
case "${1:-}" in
  setup)  cmd_setup  ;;
  warm)   cmd_warm   ;;
  delete) cmd_delete ;;
  *)      usage      ;;
esac
