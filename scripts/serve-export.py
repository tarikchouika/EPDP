#!/usr/bin/env python3
"""Serve .next-export like Cloudflare Pages: /foo -> foo.html (fallback chain).
Usage: python3 scripts/serve-export.py [port]
"""
import http.server
import os
import sys
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..", ".next-export")


class CFHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=os.path.abspath(ROOT), **kw)

    def translate_path(self, path):
        parsed = urllib.parse.urlparse(path)
        rel = urllib.parse.unquote(parsed.path).lstrip("/")
        if not rel:
            return os.path.join(os.path.abspath(ROOT), "index.html")
        candidates = []
        full = os.path.join(os.path.abspath(ROOT), rel)
        if os.path.isfile(full):
            candidates.append(full)
        if not rel.endswith("/"):
            candidates.append(full + ".html")
        candidates.append(os.path.join(full, "index.html"))
        for c in candidates:
            if os.path.isfile(c):
                return c
        return os.path.join(os.path.abspath(ROOT), "404.html")

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8788
    os.makedirs(ROOT, exist_ok=True)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", port), CFHandler)
    print(f"serving {os.path.abspath(ROOT)} on http://127.0.0.1:{port}")
    srv.serve_forever()
