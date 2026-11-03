#!/usr/bin/env python3
"""Discover katib.ma / onebox.ma / namodaj.ma source URLs for our documents.

Uses the z-ai web_search function (scriptable) to map each document's Arabic
title to a real template page on the three public form libraries the platform
is built around. Output: queue.json entries with {id, ar, url, status}.

Run:  python3 scripts/real-forms/discover.py [--limit N] [--site katib.ma]
"""
import json, subprocess, sys, time, os

BASE = os.path.dirname(os.path.abspath(__file__))
CATALOG = f"{BASE}/catalog.json"
QUEUE = f"{BASE}/queue.json"

def search(query: str, n: int = 5) -> list:
    """Call z-ai function web_search; return list of {url, name, snippet}."""
    for attempt in range(3):
        try:
            out = subprocess.run(
                ["z-ai", "function", "-n", "web_search", "-a", json.dumps({"query": query, "num": n})],
                capture_output=True, text=True, timeout=45)
            raw = out.stdout.strip()
            # CLI prints banner lines then JSON (list) — find the first '['
            i = raw.find("[")
            if i == -1:
                raise ValueError("no json")
            return json.loads(raw[i:])
        except Exception as e:
            if attempt == 2:
                print(f"  ! search failed: {e}")
                return []
            time.sleep(3 * (attempt + 1))

def load_queue() -> dict:
    if os.path.exists(QUEUE):
        return json.load(open(QUEUE, encoding="utf-8"))
    return {}

def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 1000
    site = sys.argv[sys.argv.index("--site") + 1] if "--site" in sys.argv else "katib.ma"

    catalog = json.load(open(CATALOG, encoding="utf-8"))
    queue = load_queue()

    # Priority: popular first, then the rest — skip already resolved.
    todo = [d for d in catalog if d["popular"]] + [d for d in catalog if not d["popular"]]
    todo = [d for d in todo if d["id"] not in queue or not queue[d["id"]].get("url")]
    todo = todo[:limit]
    print(f"discovering {len(todo)} docs on {site}…")

    for i, d in enumerate(todo):
        q = f'site:{site} {d["ar"]}'
        results = search(q)
        hit = None
        for r in results:
            u = r.get("url", "")
            if site in u and "/document/" in u:
                hit = u
                break
            if site in u and "/modeles/" in u:
                hit = u  # category page — weaker match, keep as fallback
        if not hit:
            # retry with a trimmed title (long titles pollute the query)
            short = " ".join(d["ar"].split()[:4])
            results = search(f'site:{site} {short}', 5)
            for r in results:
                u = r.get("url", "")
                if site in u and ("/document/" in u or "/modeles/" in u):
                    hit = u
                    break
        prev = queue.get(d["id"], {})
        queue[d["id"]] = {
            "id": d["id"], "ar": d["ar"], "fr": d["fr"],
            "url": hit or prev.get("url"),
            "status": "found" if hit else (prev.get("status") or "notfound"),
        }
        print(f"  [{i+1}/{len(todo)}] {d['ar'][:40]:40s} → {hit or '—'}")
        if (i + 1) % 10 == 0:
            json.dump(queue, open(QUEUE, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        time.sleep(1.2)

    json.dump(queue, open(QUEUE, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    found = sum(1 for v in queue.values() if v.get("url"))
    print(f"done: {found}/{len(queue)} docs have a source URL → queue.json")

if __name__ == "__main__":
    main()
