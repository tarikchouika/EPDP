#!/usr/bin/env python3
"""Generate Android icon/splash assets from the EPDP wordmark.
Candidate A: petrol gradient bg + cream wordmark (recolored via alpha)
Candidate B: cream bg + original petrol wordmark
Then, after VLM pick, run with mode: python3 gen-android-icons.py A|B
"""
import os
from PIL import Image, ImageDraw, ImageOps

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "android-assets")
os.makedirs(OUT, exist_ok=True)

LOGO = Image.open(os.path.join(ROOT, "public", "logo.png")).convert("RGBA")

# Brand palette (measured from logo + globals.css identity)
PETROL_DARK = (18, 46, 60)      # #122e3c
PETROL_MID = (31, 78, 107)      # #1f4e6b
PETROL = (36, 90, 114)          # #245a72 --primary
CREAM = (242, 248, 249)         # #f2f8f9 --primary-foreground
GOLD = (168, 130, 31)           # #a8821f --gold-ish


def alpha_recolor(src, color):
    """Keep the artwork shape (alpha), fill with a solid color."""
    a = src.split()[3]
    solid = Image.new("RGBA", src.size, color + (255,))
    solid.putalpha(a)
    return solid


def gradient(size, top, bottom):
    im = Image.new("RGBA", (size, size))
    for y in range(size):
        t = y / (size - 1)
        c = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3)) + (255,)
        for x in range(size):
            im.putpixel((x, y), c)
    return im


def fit_width(im, w):
    r = w / im.width
    return im.resize((w, round(im.height * r)), Image.LANCZOS)


def make_candidate(mode, size=1080, pad_ratio=0.62):
    """mode A: petrol grad + cream mark | mode B: cream + petrol mark"""
    if mode == "A":
        bg = gradient(size, PETROL_MID, PETROL_DARK)
        fg = alpha_recolor(LOGO, CREAM)
    else:
        bg = Image.new("RGBA", (size, size), CREAM + (255,))
        fg = LOGO
    mark = fit_width(fg, int(size * pad_ratio))
    canvas = bg.copy()
    canvas.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    return canvas


def gen_final(mode):
    # 1) adaptive foreground 108dp: mark within safe zone (66% circle)
    for size in (108, 162, 216, 324, 432):
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        mark_src = alpha_recolor(LOGO, CREAM) if mode == "A" else LOGO
        mark = fit_width(mark_src, int(size * 0.62))
        canvas.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
        d = os.path.join(OUT, f"ic_launcher_foreground_{size}.png")
        canvas.save(d); print("saved", d)

    # 2) legacy icons (rounded square + circle), composited on bg
    def legacy(size, mask_shape):
        icon = make_candidate(mode, size, pad_ratio=0.60)
        icon = icon.resize((size * 4, size * 4), Image.LANCZOS).resize((size, size), Image.LANCZOS)
        if mask_shape == "rounded":
            mask = Image.new("L", (size * 4, size * 4), 0)
            ImageDraw.Draw(mask).rounded_rectangle([0, 0, size * 4 - 1, size * 4 - 1], radius=size * 4 * 0.18, fill=255)
            mask = mask.resize((size, size), Image.LANCZOS)
        else:
            mask = Image.new("L", (size * 4, size * 4), 0)
            ImageDraw.Draw(mask).ellipse([0, 0, size * 4 - 1, size * 4 - 1], fill=255)
            mask = mask.resize((size, size), Image.LANCZOS)
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        out.paste(icon, (0, 0), mask)
        return out

    for size in (48, 72, 96, 144, 192):
        legacy(size, "rounded").save(os.path.join(OUT, f"ic_launcher_{size}.png"))
        legacy(size, "circle").save(os.path.join(OUT, f"ic_launcher_round_{size}.png"))
        print("saved legacy", size)

    # 3) monochrome (themed icons, Android 13+): white via alpha
    for size in (108, 162, 216, 324, 432):
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        mark = fit_width(alpha_recolor(LOGO, (255, 255, 255)), int(size * 0.62))
        canvas.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
        canvas.save(os.path.join(OUT, f"ic_launcher_monochrome_{size}.png"))
    print("saved monochrome set")

    # 4) splash wordmark: original full-color logo, wide, centered (used on in-app splash)
    splash = Image.new("RGBA", (1080, 1920), (0, 0, 0, 0))
    mark = fit_width(LOGO, 780)
    # add subtle gold divider under the mark
    splash.alpha_composite(mark, ((1080 - mark.width) // 2, 780))
    d = ImageDraw.Draw(splash)
    d.rounded_rectangle([390, 1130, 690, 1138], radius=4, fill=GOLD + (255,))
    splash.save(os.path.join(OUT, "splash_wordmark.png"))
    print("saved splash wordmark")

    # 5) play store 512
    legacy(512, "rounded").save(os.path.join(OUT, "play_512.png"))
    print("saved play 512")


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] in ("A", "B"):
        mode = sys.argv[1]
        print(f"generating FINAL icon set with mode {mode}")
        gen_final(mode)
    else:
        a = make_candidate("A")
        b = make_candidate("B")
        a.save(os.path.join(OUT, "candidate-A.png"))
        b.save(os.path.join(OUT, "candidate-B.png"))
        sheet = Image.new("RGBA", (2200, 1160), (255, 255, 255, 255))
        sheet.paste(a.resize((1040, 1040)), (40, 60), a.resize((1040, 1040)))
        sheet.paste(b.resize((1040, 1040)), (1120, 60), b.resize((1040, 1040)))
        sheet.convert("RGB").save(os.path.join(OUT, "candidates.png"))
        print("candidates saved:", os.path.join(OUT, "candidates.png"))
