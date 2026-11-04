#!/usr/bin/env python3
"""Fetch namodaj.ma document pages and extract the exact template text
from the copy-button data-text attribute (site's own copy payload).
Usage: fetch-namodaj.py <out_id> <lang> <url> [<url_fr> ...]
Writes scripts/real-forms/fetched/<out_id>.json  (+ <out_id>.fr.json)
"""
import sys, json, re, html as ihtml, subprocess, os, urllib.parse

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
BASE = os.path.dirname(os.path.abspath(__file__))

def fetch(url):
    r = subprocess.run(["curl", "-s", "--http1.1", "-L", "-A", UA, "--max-time", "30", url],
                       capture_output=True, text=True)
    return r.stdout

def extract(url):
    html = fetch(url)
    if len(html) < 3000 or "Bot Verification" in html:
        return None, f"blocked/empty ({len(html)}B)"
    m = re.search(r'id="copyBtn"[^>]*data-text="(.*?)"\s*>', html, re.S)
    if not m:
        # alternative: data-text before id
        m = re.search(r'data-text="(.*?)"[^>]*id="copyBtn"', html, re.S)
    if not m:
        return None, "no data-text found"
    text = ihtml.unescape(m.group(1))
    text = text.replace("\xa0", " ").strip()
    if len(text) < 40:
        return None, f"text too short ({len(text)}c)"
    return text, "ok"

def main():
    out_id, lang = sys.argv[1], sys.argv[2]
    urls = sys.argv[3:]
    for url in urls:
        text, status = extract(url)
        u = urllib.parse.unquote(url)
        lang_guess = "fr" if ("fr" in os.path.basename(u).lower() or "résiliation" in u or "-de-" in u.lower() or "demande" in u.lower() and "ن" not in u) else lang
        # explicit: if URL path has no arabic chars -> fr
        if not re.search(r'[\u0600-\u06FF]', urllib.parse.unquote(url)):
            lang_guess = "fr"
        else:
            lang_guess = "ar"
        fname = f"{out_id}.json" if lang_guess == lang else f"{out_id}.{lang_guess}.json"
        if text:
            data = {"id": out_id, "source": "namodaj.ma", "url": url, "lang": lang_guess, "text": text}
            path = os.path.join(BASE, "fetched", fname)
            json.dump(data, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
            print(f"OK  {fname}  {len(text)}c  {u[:80]}")
        else:
            print(f"FAIL {out_id} [{status}] {u[:90]}")

if __name__ == "__main__":
    main()
