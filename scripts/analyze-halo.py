#!/usr/bin/env python3
"""Measure halo (just outside mask) vs core (deep inside mask) pixel stats
at full resolution, with correct geometry. Decides refined artwork rule."""
from PIL import Image, ImageFilter
from collections import deque

im = Image.open("upload/1793734903169.jpg").convert("RGB")
W, H = im.size
px = im.load()

SPREAD_T = 26
mask = Image.new("1", (W, H))
mp = mask.load()
for y in range(H):
    for x in range(W):
        r, g, b = px[x, y]
        mp[x, y] = 1 if (max(r, g, b) - min(r, g, b)) >= SPREAD_T else 0

# bg flood fill
bg = Image.new("1", (W, H), 0)
bp = bg.load()
q = deque()
for x in range(W):
    for y in (0, H - 1):
        if not mp[x, y] and not bp[x, y]:
            bp[x, y] = 1; q.append((x, y))
for y in range(H):
    for x in (0, W - 1):
        if not mp[x, y] and not bp[x, y]:
            bp[x, y] = 1; q.append((x, y))
while q:
    x, y = q.popleft()
    for nx, ny in ((x+1,y),(x-1,y),(x,y+1),(x,y-1)):
        if 0 <= nx < W and 0 <= ny < H and not mp[nx, ny] and not bp[nx, ny]:
            bp[nx, ny] = 1; q.append((nx, ny))

# artwork = mask; halo = dilated(mask) - mask ; core = eroded(mask)
al = mask.convert("L")
dil = al.filter(ImageFilter.MaxFilter(13))   # +6px
ero = al.filter(ImageFilter.MinFilter(13))   # -6px
ap = al.load(); dp = dil.load(); ep = ero.load(); bgp = bg.load()

halo, core = [], []
for y in range(H):
    for x in range(W):
        if bgp[x, y]:
            continue  # true background
        r, g, b = px[x, y]
        rec = (max(r, g, b) - min(r, g, b), int(0.299 * r + 0.587 * g + 0.114 * b), r, g, b)
        if ap[x, y]:
            if ep[x, y]:
                core.append(rec)
        else:
            if dp[x, y]:
                halo.append(rec)  # non-bg, non-mask, near mask edge (shadow ring)

def stats(name, lst):
    if not lst:
        print(f"{name}: NONE"); return
    n = len(lst)
    sp = sorted(z[0] for z in lst); lu = sorted(z[1] for z in lst)
    print(f"{name}: n={n}  spread p10/p50/p90 = {sp[n//10]}/{sp[n//2]}/{sp[9*n//10]}  luma p10/p50/p90 = {lu[n//10]}/{lu[n//2]}/{lu[9*n//10]}")
    # how many halo px would survive stricter spread cuts
    for t in (26, 35, 45, 60, 80):
        print(f"   {name} spread>={t}: {sum(1 for z in lst if z[0] >= t)}/{n} ({sum(1 for z in lst if z[0] >= t)*100//n}%)")

stats("HALO(shadows)", halo)
stats("CORE(letters)", core)
