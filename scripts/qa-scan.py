#!/usr/bin/env python3
"""QA scan: find Asian/CJK characters and leftover placeholders anywhere in
src/ and public/. Exits non-zero if anything suspicious is found."""
import os
import re
import sys

ROOTS = ["src", "public"]
SKIP_EXT = {".png", ".ico", ".jpg", ".jpeg", ".webp", ".svg", ".woff", ".woff2", ".ttf"}

# CJK / Hangul / fullwidth ranges — the user explicitly asked to avoid these.
CJK = re.compile(
    "[\u2e80-\u2eff\u2ff0-\u2fff\u3000-\u303f\u3040-\u30ff\u3130-\u318f"
    "\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\uf900-\ufaff"
    "\uff01-\uff60\uffe0-\uffe6\u31c0-\u31ef\u1100-\u11ff]"
)
PLACEHOLDERS = re.compile(r"\bTODO\b|\bFIXME\b|\bXXX\b|【|】|\bNaN\b|____+|\bTBD\b")
# Template data files legitimately use "____" as fill-in signature lines.
PLACEHOLDERS_TPL = re.compile(r"\bTODO\b|\bFIXME\b|\bXXX\b|【|】|\bNaN\b|\bTBD\b")

problems = []
scanned = 0
for root in ROOTS:
    for dirpath, _, files in os.walk(root):
        for fn in files:
            path = os.path.join(dirpath, fn)
            if os.path.splitext(fn)[1].lower() in SKIP_EXT:
                continue
            scanned += 1
            ph = PLACEHOLDERS_TPL if "templates" in path.replace("\\", "/") else PLACEHOLDERS
            try:
                with open(path, encoding="utf-8") as f:
                    for i, line in enumerate(f, 1):
                        m = CJK.search(line)
                        if m:
                            problems.append(f"CJK    {path}:{i}  {m.group()!r}  …{line.strip()[:70]!r}")
                            continue
                        p = ph.search(line)
                        if p:
                            problems.append(f"PLACEHO {path}:{i}  {p.group()!r}  …{line.strip()[:70]!r}")
            except (UnicodeDecodeError, IsADirectoryError):
                continue

print(f"scanned {scanned} text files")
if problems:
    print(f"\n{len(problems)} issue(s):")
    for p in problems[:80]:
        print(" ", p)
    sys.exit(1)
print("CLEAN: no CJK characters, no leftover placeholders")
