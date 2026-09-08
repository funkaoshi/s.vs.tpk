#!/usr/bin/env bash
# Read-only health check for the things that have gone wrong here before:
# binaries that escaped git-lfs, pointer files that would ship as images, and
# junk that rsync would publish. Changes nothing. Exits 1 if it finds a problem
# so it can be wired into CI or a pre-push hook later.
set -uo pipefail

cd "$(git rev-parse --show-toplevel)"

problems=0
note() { printf '  %s\n' "$*"; }
fail() { printf '\033[31mFAIL\033[0m  %s\n' "$*"; problems=$((problems + 1)); }
ok()   { printf '\033[32mok\033[0m    %s\n' "$*"; }

# Extensions that belong in LFS. Keep in sync with .gitattributes; the check
# below is exactly "does .gitattributes cover everything in this list".
BINARY_EXTS='png jpg jpeg gif webp avif pdf psd mp4 mov zip'

echo "== git-lfs coverage =="
uncovered=0
for ext in $BINARY_EXTS; do
  # Ask git itself whether a file of this type would be filtered, rather than
  # grepping .gitattributes: git is the authority on pattern precedence.
  if ! git check-attr filter -- "probe.$ext" | grep -q 'filter: lfs'; then
    tracked=$(git ls-files -- "*.$ext" | wc -l | tr -d ' ')
    if [ "$tracked" != "0" ]; then
      fail ".$ext is not tracked by lfs, but $tracked such file(s) are committed"
      uncovered=$((uncovered + 1))
    else
      note ".$ext not covered by .gitattributes (no such files committed yet)"
    fi
  fi
done
[ "$uncovered" = "0" ] && ok "every committed binary type is covered by .gitattributes"

echo
echo "== working tree =="
# A pointer left in the working tree means `git lfs pull` has not run. Hugo
# would copy it into public/ and rsync --delete would publish it as an image.
pointers=$(git lfs ls-files -n | while IFS= read -r f; do
  [ -f "$f" ] || continue
  # `if` rather than `&&`: with pipefail a non-matching grep would make the
  # whole loop exit non-zero and take set -e with it.
  if head -c 45 "$f" 2>/dev/null | grep -q '^version https://git-lfs.github.com/spec/v1'; then
    printf '%s\n' "$f"
  fi
done | wc -l | tr -d ' ')
if [ "${pointers:-0}" != "0" ]; then
  fail "$pointers unresolved lfs pointer(s) in the working tree — run: git lfs pull"
else
  ok "no unresolved lfs pointers"
fi

if [ -d public ]; then
  built=$(find public -type f -size -1024c \
    -exec grep -l '^version https://git-lfs.github.com/spec/v1' {} + 2>/dev/null | wc -l | tr -d ' ')
  if [ "${built:-0}" != "0" ]; then
    fail "$built lfs pointer(s) in public/ — this build must not be deployed"
  else
    ok "public/ is free of lfs pointers"
  fi
fi

echo
echo "== junk that rsync would publish =="
# static/ is copied verbatim into public/ and public/ is rsynced with --delete,
# so anything dropped in static/ ends up on the live web server.
junk=$(find static -name '.DS_Store' -o -name 'Thumbs.db' | wc -l | tr -d ' ')
if [ "$junk" != "0" ]; then
  fail "$junk .DS_Store/Thumbs.db file(s) under static/ would be published"
  find static -name '.DS_Store' -o -name 'Thumbs.db' | sed 's/^/      /'
else
  ok "static/ is clean"
fi

tracked_junk=$(git ls-files | grep -cE '(^|/)(\.DS_Store|Thumbs\.db)$')
if [ "$tracked_junk" != "0" ]; then
  fail "$tracked_junk junk file(s) are committed"
else
  ok "no junk files committed"
fi

echo
echo "== size =="
head_files=$(git lfs ls-files | wc -l | tr -d ' ')
head_mb=$(git lfs ls-files -s | sed -E 's/.*\(([0-9.]+) ([A-Z]+)\)$/\1 \2/' \
  | awk '{u=$2;v=$1; m=(u=="B")?v/1048576:(u=="KB")?v/1024:(u=="MB")?v:(u=="GB")?v*1024:0; t+=m} END{printf "%.0f", t}')
read -r all_count all_bytes < <(bash scripts/lfs-history-bytes.sh)
all_mb=$((all_bytes / 1048576))
note "lfs at HEAD:        ${head_files} files, ${head_mb} MB"
note "lfs all history:    ${all_mb} MB in ${all_count} objects   <- counts against GitHub's 1 GiB free storage"
note "git objects:        $(git count-objects -vH | awk '/size-pack/{print $2, $3}')"
if [ "${all_mb:-0}" -gt 800 ]; then
  fail "lfs storage is close to the 1 GiB free tier"
fi

echo
echo "== branches not on origin =="
git for-each-ref --format='%(refname:short)' refs/heads | while read -r b; do
  git show-ref --quiet "refs/remotes/origin/$b" || note "$b (local only, $(git rev-list --count "origin/master..$b" 2>/dev/null) commit(s) ahead of master)"
done

echo
if [ "$problems" = "0" ]; then
  printf '\033[32mAll checks passed.\033[0m\n'
else
  printf '\033[31m%d problem(s) found.\033[0m  See docs/lfs-cleanup.md.\n' "$problems"
fi
exit $((problems > 0))
