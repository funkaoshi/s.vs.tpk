#!/usr/bin/env python3
"""
Compare Jekyll (_site/) and Hugo (public/) build outputs.

Usage:
  python scripts/compare-sites.py urls     # Compare URL sets only (fast)
  python scripts/compare-sites.py local    # Compare URL sets + text content
  python scripts/compare-sites.py live     # Crawl both live sites (needs network)
"""

import os
import re
import sys
import difflib
from pathlib import Path
from html.parser import HTMLParser


JEKYLL_DIR = Path("_site")
HUGO_DIR = Path("public")

PROD_HOST = "https://save.vs.totalpartykill.ca"
BETA_HOST = "https://beta.save.vs.totalpartykill.ca"


# ---------------------------------------------------------------------------
# HTML text extraction (no external deps)
# ---------------------------------------------------------------------------

class TextExtractor(HTMLParser):
    """Extract visible text from HTML, skipping script/style tags."""

    SKIP_TAGS = {"script", "style", "head"}

    def __init__(self):
        super().__init__()
        self._pieces = []
        self._skip_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in self.SKIP_TAGS:
            self._skip_depth += 1

    def handle_endtag(self, tag):
        if tag in self.SKIP_TAGS and self._skip_depth > 0:
            self._skip_depth -= 1

    def handle_data(self, data):
        if self._skip_depth == 0:
            self._pieces.append(data)

    def get_text(self):
        return " ".join(self._pieces)


def extract_text(html_bytes):
    """Return visible text content from HTML bytes."""
    try:
        html = html_bytes.decode("utf-8", errors="replace")
    except Exception:
        html = str(html_bytes)
    extractor = TextExtractor()
    try:
        extractor.feed(html)
    except Exception:
        pass
    text = extractor.get_text()
    # Normalize whitespace
    return re.sub(r"\s+", " ", text).strip()


# ---------------------------------------------------------------------------
# URL collection
# ---------------------------------------------------------------------------

def collect_urls(base_dir):
    """Walk a build directory and return a set of URL paths.

    - index.html -> parent directory path (e.g. /blog/foo/)
    - Other files -> their path (e.g. /rss.xml)
    """
    urls = set()
    base = Path(base_dir)
    if not base.exists():
        print(f"ERROR: {base_dir} does not exist. Build the site first.")
        sys.exit(1)

    for root, dirs, files in os.walk(base):
        # Skip hidden directories and nested build outputs
        rel_root = Path(root).relative_to(base)
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        # Skip Hugo's public/ dir if it ended up inside Jekyll's _site/
        if base_dir == JEKYLL_DIR and str(rel_root) == "." and "public" in dirs:
            dirs.remove("public")
        for f in files:
            filepath = Path(root) / f
            relpath = filepath.relative_to(base)
            url = "/" + str(relpath)

            # Normalize index.html to directory URL
            if f == "index.html":
                parent = str(relpath.parent)
                url = "/" if parent == "." else "/" + parent + "/"

            urls.add(url)
    return urls


def normalize_jekyll_pagination(urls):
    """Jekyll uses /page2/, /page3/ etc. Hugo uses /page/2/, /page/3/.
    Return a mapping from normalized form to original URL."""
    mapping = {}
    for url in urls:
        # Convert /pageN/ -> /page/N/ for comparison
        m = re.match(r"^/page(\d+)/$", url)
        if m:
            mapping[f"/page/{m.group(1)}/"] = url
        else:
            mapping[url] = url
    return mapping


# ---------------------------------------------------------------------------
# Modes
# ---------------------------------------------------------------------------

def mode_urls():
    """Compare URL sets between Jekyll and Hugo builds."""
    jekyll_urls = collect_urls(JEKYLL_DIR)
    hugo_urls = collect_urls(HUGO_DIR)

    # Normalize Jekyll pagination for comparison
    jekyll_norm = normalize_jekyll_pagination(jekyll_urls)
    hugo_norm = normalize_jekyll_pagination(hugo_urls)

    jekyll_set = set(jekyll_norm.keys())
    hugo_set = set(hugo_norm.keys())

    # Filter out asset/image files for the URL comparison (focus on pages)
    def is_page(url):
        return url.endswith("/") or url.endswith(".html") or url.endswith(".xml") or url.endswith(".json")

    jekyll_pages = {u for u in jekyll_set if is_page(u)}
    hugo_pages = {u for u in hugo_set if is_page(u)}

    only_jekyll = sorted(jekyll_pages - hugo_pages)
    only_hugo = sorted(hugo_pages - jekyll_pages)
    shared = sorted(jekyll_pages & hugo_pages)

    print(f"Jekyll pages: {len(jekyll_pages)}")
    print(f"Hugo pages:   {len(hugo_pages)}")
    print(f"Shared:       {len(shared)}")
    print()

    if only_jekyll:
        print(f"=== ONLY in Jekyll ({len(only_jekyll)}) ===")
        for u in only_jekyll:
            orig = jekyll_norm[u]
            suffix = f"  (originally {orig})" if orig != u else ""
            print(f"  {u}{suffix}")
        print()

    if only_hugo:
        print(f"=== ONLY in Hugo ({len(only_hugo)}) ===")
        for u in only_hugo:
            orig = hugo_norm[u]
            suffix = f"  (originally {orig})" if orig != u else ""
            print(f"  {u}{suffix}")
        print()

    if not only_jekyll and not only_hugo:
        print("All page URLs match!")

    # Also check feeds specifically
    feed_urls = ["/rss.xml", "/atom.xml", "/feed.json"]
    print("=== Feed check ===")
    for feed in feed_urls:
        in_j = feed in jekyll_set
        in_h = feed in hugo_set
        status = "OK" if in_j and in_h else f"Jekyll={'yes' if in_j else 'NO'} Hugo={'yes' if in_h else 'NO'}"
        print(f"  {feed}: {status}")
    print()

    return 0 if not only_jekyll else 1


def mode_local():
    """Compare URL sets and text content of shared pages."""
    jekyll_urls = collect_urls(JEKYLL_DIR)
    hugo_urls = collect_urls(HUGO_DIR)

    jekyll_norm = normalize_jekyll_pagination(jekyll_urls)
    hugo_norm = normalize_jekyll_pagination(hugo_urls)

    jekyll_set = set(jekyll_norm.keys())
    hugo_set = set(hugo_norm.keys())

    def is_html_page(url):
        return url.endswith("/")

    jekyll_pages = {u for u in jekyll_set if is_html_page(u)}
    hugo_pages = {u for u in hugo_set if is_html_page(u)}

    only_jekyll = sorted(jekyll_pages - hugo_pages)
    only_hugo = sorted(hugo_pages - jekyll_pages)
    shared = sorted(jekyll_pages & hugo_pages)

    print(f"Jekyll pages: {len(jekyll_pages)}")
    print(f"Hugo pages:   {len(hugo_pages)}")
    print(f"Shared:       {len(shared)}")
    print()

    if only_jekyll:
        print(f"=== ONLY in Jekyll ({len(only_jekyll)}) ===")
        for u in only_jekyll:
            print(f"  {u}")
        print()

    if only_hugo:
        print(f"=== ONLY in Hugo ({len(only_hugo)}) ===")
        for u in only_hugo:
            print(f"  {u}")
        print()

    # Compare text content for shared pages
    def url_to_file(url, base_dir, norm_map):
        """Convert a normalized URL back to the index.html file path."""
        orig = norm_map[url]
        if orig == "/":
            return Path(base_dir) / "index.html"
        return Path(base_dir) / orig.strip("/") / "index.html"

    low_similarity = []
    high_similarity = []
    errors = []

    print("=== Content comparison ===")
    for url in shared:
        jekyll_file = url_to_file(url, JEKYLL_DIR, jekyll_norm)
        hugo_file = url_to_file(url, HUGO_DIR, hugo_norm)

        if not jekyll_file.exists():
            errors.append((url, f"Jekyll file missing: {jekyll_file}"))
            continue
        if not hugo_file.exists():
            errors.append((url, f"Hugo file missing: {hugo_file}"))
            continue

        j_text = extract_text(jekyll_file.read_bytes())
        h_text = extract_text(hugo_file.read_bytes())

        if not j_text and not h_text:
            high_similarity.append((url, 1.0))
            continue

        ratio = difflib.SequenceMatcher(None, j_text, h_text).ratio()

        if ratio < 0.95:
            low_similarity.append((url, ratio))
        else:
            high_similarity.append((url, ratio))

    if low_similarity:
        low_similarity.sort(key=lambda x: x[1])
        print(f"\n  Pages with <95% text similarity ({len(low_similarity)}):")
        for url, ratio in low_similarity:
            print(f"    {url} — {ratio:.1%}")

    if errors:
        print(f"\n  Errors ({len(errors)}):")
        for url, err in errors:
            print(f"    {url} — {err}")

    print(f"\n  Pages with >=95% similarity: {len(high_similarity)}")
    print(f"  Pages with <95% similarity: {len(low_similarity)}")
    print(f"  Errors: {len(errors)}")

    # Show detailed diff for the worst offenders
    if low_similarity:
        print("\n=== Detailed diffs for lowest similarity pages (up to 5) ===")
        for url, ratio in low_similarity[:5]:
            jekyll_file = url_to_file(url, JEKYLL_DIR, jekyll_norm)
            hugo_file = url_to_file(url, HUGO_DIR, hugo_norm)
            j_text = extract_text(jekyll_file.read_bytes())
            h_text = extract_text(hugo_file.read_bytes())

            print(f"\n--- {url} ({ratio:.1%}) ---")
            j_words = j_text.split()
            h_words = h_text.split()
            diff = list(difflib.unified_diff(
                j_words[:200], h_words[:200],
                fromfile=f"jekyll:{url}",
                tofile=f"hugo:{url}",
                lineterm="",
                n=2
            ))
            if diff:
                # Show first 30 lines of diff
                for line in diff[:30]:
                    print(f"  {line}")
                if len(diff) > 30:
                    print(f"  ... ({len(diff) - 30} more diff lines)")

    return 0 if not only_jekyll else 1


def mode_live():
    """Crawl live sites and compare."""
    try:
        import urllib.request
        import urllib.error
        import xml.etree.ElementTree as ET
    except ImportError:
        print("ERROR: requires urllib (should be in stdlib)")
        return 1

    # Fetch production sitemap
    print(f"Fetching sitemap from {PROD_HOST}/sitemap.xml ...")
    try:
        with urllib.request.urlopen(f"{PROD_HOST}/sitemap.xml", timeout=30) as resp:
            sitemap_xml = resp.read()
    except Exception as e:
        print(f"ERROR: Could not fetch production sitemap: {e}")
        return 1

    # Parse sitemap
    root = ET.fromstring(sitemap_xml)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    prod_urls = []
    for url_elem in root.findall(".//sm:url/sm:loc", ns):
        prod_urls.append(url_elem.text)

    if not prod_urls:
        # Try without namespace
        for url_elem in root.findall(".//url/loc"):
            prod_urls.append(url_elem.text)

    print(f"Found {len(prod_urls)} URLs in production sitemap")

    # Also check key URLs not in sitemap
    extra_urls = [
        f"{PROD_HOST}/rss.xml",
        f"{PROD_HOST}/atom.xml",
        f"{PROD_HOST}/feed.json",
        f"{PROD_HOST}/",
        f"{PROD_HOST}/about/",
        f"{PROD_HOST}/awards/",
        f"{PROD_HOST}/tag/osr/",
    ]
    all_urls = list(set(prod_urls + extra_urls))
    all_urls.sort()

    # Check each URL on beta
    ok = 0
    failures = []
    size_mismatches = []

    for i, prod_url in enumerate(all_urls):
        path = prod_url.replace(PROD_HOST, "")
        beta_url = BETA_HOST + path

        try:
            # Get production page size
            req_prod = urllib.request.Request(prod_url, method="HEAD")
            with urllib.request.urlopen(req_prod, timeout=15) as resp:
                prod_size = int(resp.headers.get("content-length", 0))
                prod_status = resp.status
        except urllib.error.HTTPError as e:
            prod_status = e.code
            prod_size = 0
        except Exception as e:
            prod_status = f"ERR: {e}"
            prod_size = 0

        try:
            req_beta = urllib.request.Request(beta_url, method="HEAD")
            with urllib.request.urlopen(req_beta, timeout=15) as resp:
                beta_size = int(resp.headers.get("content-length", 0))
                beta_status = resp.status
        except urllib.error.HTTPError as e:
            beta_status = e.code
            beta_size = 0
        except Exception as e:
            beta_status = f"ERR: {e}"
            beta_size = 0

        if beta_status != 200:
            failures.append((path, prod_status, beta_status))
        elif prod_size > 0 and beta_size > 0:
            ratio = min(prod_size, beta_size) / max(prod_size, beta_size)
            if ratio < 0.5:
                size_mismatches.append((path, prod_size, beta_size))
            ok += 1
        else:
            ok += 1

        # Progress
        if (i + 1) % 25 == 0:
            print(f"  Checked {i + 1}/{len(all_urls)} URLs...")

    print(f"\nResults:")
    print(f"  OK: {ok}")
    print(f"  Failures: {len(failures)}")
    print(f"  Size mismatches: {len(size_mismatches)}")

    if failures:
        print(f"\n=== Failed URLs ({len(failures)}) ===")
        for path, ps, bs in failures:
            print(f"  {path}  prod={ps} beta={bs}")

    if size_mismatches:
        print(f"\n=== Size mismatches ({len(size_mismatches)}) ===")
        for path, ps, bs in size_mismatches:
            print(f"  {path}  prod={ps}b beta={bs}b")

    return 0 if not failures else 1


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    mode = sys.argv[1]

    if mode == "urls":
        sys.exit(mode_urls())
    elif mode == "local":
        sys.exit(mode_local())
    elif mode == "live":
        sys.exit(mode_live())
    else:
        print(f"Unknown mode: {mode}")
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
