#!/usr/bin/env python3
"""Clean fetched real-form texts before apply.py.

Mechanical, reviewable transformations ONLY — every boilerplate word stays
verbatim from the source site:
  1. Filled EXAMPLES (site pages that show a completed document with a sample
     person's data) → blank fillable templates: sample values become dot
     leaders (………), matching the source sites' own blank-template convention.
     Gender forms are neutralised exactly the way the sites' own blank
     templates do it (السيد(ة)، الموقع(ة)).
  2. Fetch artifacts (a swallowed "[m" that broke bracket pairs) are repaired.
  3. cv.json is quarantined (.excluded): the namodaj CV is a visual text-box
     layout, not a linear document template — applying it would degrade the
     existing bilingual CV template. Provenance link is kept via
     sources-only.json.

Run: python3 scripts/real-forms/clean-examples.py
"""
import json, os

BASE = os.path.dirname(os.path.abspath(__file__))
FETCHED = f"{BASE}/fetched"

def patch(fid: str, replacements: list[tuple[str, str]]) -> None:
    path = f"{FETCHED}/{fid}.json"
    d = json.load(open(path, encoding="utf-8"))
    text = d["text"]
    for old, new in replacements:
        if old not in text:
            if new in text:
                continue  # idempotent: already cleaned on a previous run
            raise SystemExit(f"ABORT: [{fid}] expected fragment not found:\n  {old[:120]}")
        text = text.replace(old, new)
    d["text"] = text
    json.dump(d, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"  cleaned {fid}")

# ────────────────────────────────────────────────────────────────────
# 1. attestation-residence — namodaj.ma filled example (2 witnesses)
# ────────────────────────────────────────────────────────────────────
patch("attestation-residence", [
    # witness 1: name / birth date / CIN / address → blanks
    ("السيدة : سجير فاطمة الزهراء المزدادة بتاريخ 23/05/1988 الحاملة لبطاقة التعريف الوطنية رقم: IB172539 والساكنة ب:حي القواسم ساحة المغرب العربي رقم 12 الفقيه بن صالح",
     "السيد(ة): …………… المزداد(ة) بتاريخ: …………… الحامل(ة) لبطاقة التعريف الوطنية رقم: …………… والساكن(ة) بـ: ……………"),
    # witness 2: name / birth date / CIN (address stays the site's own wording)
    ("السيدة : سجير كريمة المزدادة بتاريخ 27/05/1991 الحاملة لبطاقة التعريف الوطنية رقم: IB200522",
     "السيد(ة): …………… المزداد(ة) بتاريخ: …………… الحامل(ة) لبطاقة التعريف الوطنية رقم: ……………"),
    # residence duration
    ("مند أزيد من ثمانية سنوات", "مند ……………"),
    # place + date of signing
    ("حرر بالفقيه بن صالح بتاريخ 07/02/2013", "حرر بـ: …………… بتاريخ: ……………"),
    # signatures
    ("الإمضاءات: سجير فاطمة الزهراء سجير كريمة", "الإمضاءات: ……………"),
    # neutralise the declarant header like the site's blank templates do
    ("نحن الموقعتين أسفله:", "نحن الموقعين أسفله:"),
])

# ────────────────────────────────────────────────────────────────────
# 2. declaration-charge-famille — filled example
# ────────────────────────────────────────────────────────────────────
patch("declaration-charge-famille", [
    ("الفقيه بن صالح في: 19/11/2012", "………… في: ……………"),
    ("أنا الموقعة أسفله: السيدة الليلي فاطمة، الحاملة لبطاقة التعريف الوطنية رقم: IB196753، والساكنة بـ: تجزئة بدر الرقم 131 الفقيه بن صالح.",
     "أنا الموقع(ة) أسفله: السيد(ة): ……………، الحامل(ة) لبطاقة التعريف الوطنية رقم: ……………، والساكن(ة) بـ: ……………."),
    ("أبنائي كل من : شوعا خديجة ، المزدادة بتاريخ: 13/11/2008 وشوعا صلاح المزداد بتاريخ 07/06/2012، الساكنين بنفس العنوان المذكور أعلاه.",
     "أبنائي كل من : ……………، المزداد(ة) بتاريخ: …………… و…………… المزداد(ة) بتاريخ: ……………، الساكنين بنفس العنوان المذكور أعلاه."),
])

# ────────────────────────────────────────────────────────────────────
# 3. declaration-perte-cin — filled example
# ────────────────────────────────────────────────────────────────────
patch("declaration-perte-cin", [
    ("أنا الموقعة أسفله السيدة :حليمة البنزاوي الحاملة لبطاقة التعريف الوطنية رقم I114804 الساكنة ب: لقواسم الجدد زنقة 13 رقم 20 الفقيه بن صالح.",
     "أنا الموقع(ة) أسفله السيد(ة): …………… الحامل(ة) لبطاقة التعريف الوطنية رقم: …………… الساكن(ة) بـ: ……………."),
    ("التي تحمل رقم : I114804", "التي تحمل رقم : ……………"),
])

# NOTE: lettre-motivation.json needed NO repair — the apparent missing
# "[m" was a terminal-display artifact ("[m" rendered as an ANSI escape),
# verified byte-level: the brackets are intact in the file.

# ────────────────────────────────────────────────────────────────────
# 5. cv — quarantine (visual text-box layout, not a linear template)
# ────────────────────────────────────────────────────────────────────
cv = f"{FETCHED}/cv.json"
if os.path.exists(cv):
    os.rename(cv, cv + ".excluded")
    print("  quarantined cv.json → cv.json.excluded (text-box layout; keep base template)")

print("done.")
