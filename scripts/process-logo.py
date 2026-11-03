#!/usr/bin/env python3
"""Process the EPDP logo (upload/1793734903169.jpg) into public assets.

Steps:
 1. Build an alpha mask: colorful pixels (channel spread >= T) are artwork;
    the smooth light-gray gradient background has spread <= ~14.
 2. Flood-fill from the image border through low-spread pixels -> those are
    background (transparent). Enclosed low-spread pockets (highlights inside
    letters) stay opaque.
 3. Drop tiny opaque specks (noise), feather the mask edge, tight-crop.
 4. Emit: logo.png (transparent), logo-square.png (512, wordmark contained),
    favicon.ico (16/32/48), icon-192.png, icon-512.png,
    apple-touch-icon.png (180, opaque light bg).
 5. Print the crop aspect ratio + sampled gold tone for the CSS palette.
"""
from PIL import Image, ImageFilter
from collections import deque
import os

SRC = "upload/1793734903169.jpg"
OUT = "public"
SPREAD_T = 26          # channel-spread threshold artwork vs gray bg
MIN_SPECK_AREA = 400   # opaque blobs smaller than this are dropped
FEATHER = 1.2

os.makedirs(OUT, exist_ok=True)
im = Image.open(SRC).convert("RGB")
W, H = im.size
px = im.load()

# ---- 1. spread mask --------------------------------------------------------
mask = Image.new("1", (W, H))  # 1 = artwork
mp = mask.load()
for y in range(H):
    for x in range(W):
        r, g, b = px[x, y]
        mp[x, y] = 1 if (max(r, g, b) - min(r, g, b)) >= SPREAD_T else 0

# ---- 2. flood fill from border over NON-artwork -----------------------------
bg = Image.new("1", (W, H), 0)  # 1 = background
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
            bp[nx, ny] = 1
            q.append((nx, ny))

# ---- 3. keep only sizable artwork components --------------------------------
# label connected ARTWORK components (4-neighbour) via BFS.
# NOTE: enclosed low-spread pockets (drop shadows trapped between touching
# letters) are deliberately NOT kept — genuine letter material always has
# spread >= ~47 (measured), while shadow pockets stay <= ~24.
seen = Image.new("1", (W, H), 0)
sp = seen.load()
kept = Image.new("1", (W, H), 0)
kp = kept.load()
for sy in range(H):
    for sx in range(W):
        if mp[sx, sy] and not sp[sx, sy]:
            comp = []
            cq = deque([(sx, sy)])
            sp[sx, sy] = 1
            while cq:
                cx, cy = cq.popleft()
                comp.append((cx, cy))
                for nx, ny in ((cx+1,cy),(cx-1,cy),(cx,cy+1),(cx,cy-1)):
                    if 0 <= nx < W and 0 <= ny < H and not sp[nx, ny] and mp[nx, ny]:
                        sp[nx, ny] = 1
                        cq.append((nx, ny))
            if len(comp) >= MIN_SPECK_AREA:
                for cx, cy in comp:
                    kp[cx, cy] = 1

# ---- 4. feather + tight crop ------------------------------------------------
alpha = kept.convert("L").filter(ImageFilter.GaussianBlur(FEATHER))
# re-hardening: 50%+ stays, edges get partial alpha naturally from blur
bbox = alpha.getbbox()
if not bbox:
    raise SystemExit("mask empty — thresholds failed")
pad = 6
bbox = (max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(W, bbox[2]+pad), min(H, bbox[3]+pad))

rgba = im.convert("RGBA")
rgba.putalpha(alpha)
logo = rgba.crop(bbox)
cw, ch = logo.size
aspect = cw / ch
print(f"tight logo: {cw}x{ch}  aspect={aspect:.4f}")

# ---- 5. gold + teal sampling for the CSS palette -----------------------------
gold_rs, gold_gs, gold_bs = [], [], []
teal_rs, teal_gs, teal_bs = [], [], []
lp = logo.load()
lw, lh = logo.size
for y in range(0, lh, 4):
    for x in range(0, lw, 4):
        r, g, b, a = lp[x, y]
        if a < 200:
            continue
        if r > 130 and (r - b) > 45 and (r - g) > 18:      # gold-ish
            gold_rs.append(r); gold_gs.append(g); gold_bs.append(b)
        elif b > g > r and (b - r) > 25:                    # teal-ish
            teal_rs.append(r); teal_gs.append(g); teal_bs.append(b)
if gold_rs:
    print(f"GOLD sample  #{sum(gold_rs)//len(gold_rs):02x}{sum(gold_gs)//len(gold_gs):02x}{sum(gold_bs)//len(gold_bs):02x}  n={len(gold_rs)}")
else:
    print("GOLD sample  none found")
if teal_rs:
    deep = [t for t in zip(teal_rs, teal_gs, teal_bs) if sum(t) / 3 < 110]
    mid = [t for t in zip(teal_rs, teal_gs, teal_bs) if 110 <= sum(t) / 3 < 165]
    lite = [t for t in zip(teal_rs, teal_gs, teal_bs) if sum(t) / 3 >= 165]
    def avg(lst):
        if not lst: return "-"
        return f"#{sum(c[0] for c in lst)//len(lst):02x}{sum(c[1] for c in lst)//len(lst):02x}{sum(c[2] for c in lst)//len(lst):02x} n={len(lst)}"
    print(f"TEAL deep {avg(deep)} | mid {avg(mid)} | light {avg(lite)}")

# ---- 6. emit assets ----------------------------------------------------------
# 6a. full logo: longest side <= 840, quantized to 192 colors (small file)
scale = 840 / max(cw, ch)
if scale < 1:
    base = logo.resize((round(cw * scale), round(ch * scale)), Image.LANCZOS)
else:
    base = logo.copy()
base.quantize(colors=192, method=Image.FASTOCTREE).save(f"{OUT}/logo.png", optimize=True)
print(f"logo.png {base.size}")

def contain(logo_img, box_px, fill_frac):
    """Scale logo so both dims <= box_px*fill_frac, centered on transparent square canvas."""
    maxw = box_px * fill_frac
    s = min(maxw / logo_img.size[0], maxw / logo_img.size[1])
    w, h = round(logo_img.size[0] * s), round(logo_img.size[1] * s)
    img = logo_img.resize((w, h), Image.LANCZOS)
    canvas = Image.new("RGBA", (box_px, box_px), (0, 0, 0, 0))
    canvas.paste(img, ((box_px - w) // 2, (box_px - h) // 2), img)
    return canvas

sq512 = contain(logo, 512, 0.80)
sq512.save(f"{OUT}/logo-square.png", optimize=True)
sq512.resize((192, 192), Image.LANCZOS).save(f"{OUT}/icon-192.png", optimize=True)
sq512.resize((512, 512), Image.LANCZOS).save(f"{OUT}/icon-512.png", optimize=True)
sq512.save(f"{OUT}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# apple-touch: opaque bg close to the original light-gray backdrop
apple = Image.new("RGBA", (180, 180), (238, 242, 243, 255))
s = min((180 * 0.74) / lw, (180 * 0.74) / lh)
img = logo.resize((round(lw * s), round(lh * s)), Image.LANCZOS)
apple.paste(img, ((180 - img.size[0]) // 2, (180 - img.size[1]) // 2), img)
apple.convert("RGB").save(f"{OUT}/apple-touch-icon.png", optimize=True)

for f in ("logo.png", "logo-square.png", "icon-192.png", "icon-512.png",
          "apple-touch-icon.png", "favicon.ico"):
    print(f"{f}: {os.path.getsize(OUT + '/' + f)//1024} KB")
