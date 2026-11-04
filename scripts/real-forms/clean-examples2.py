#!/usr/bin/env python3
"""Clean fetched real-form texts — round 6 (2026-11-05).

Mechanical, reviewable transformations ONLY — every boilerplate word stays
verbatim from the source site:
  1. Filled EXAMPLES → blank fillable templates: sample values become dot
     leaders (………), matching the source sites' own blank-template convention.
     Gender forms neutralised the way the sites' own blank templates do it.
  2. Legacy-.doc fetch artifacts (binary junk tails, mojibake prefixes) are
     removed mechanically (truncate at first artifact marker / exact-string
     artifact replacements).
  3. Four FR-language files were mislabelled as "ar" (namodaj category slug
     contains Arabic even for FR pages) — lang field corrected.
  4. cv.json re-quarantined (.excluded): namodaj CVs are visual text-box
     layouts, not linear document templates (05-cv-arabic confirmed the
     earlier finding). Provenance stays in sources-only.json.
  5. wakala-permis: second half of the page was an OFF-TOPIC filled wakala
     (agricultural land procedures) — trimmed so the doc keeps only the
     driving-licence procuration variant, exactly as fetched otherwise.

Run: python3 scripts/real-forms/clean-examples2.py
"""
import json, os, glob

BASE = os.path.dirname(os.path.abspath(__file__))
FETCHED = f"{BASE}/fetched"

# Artifact markers emitted by namodaj's legacy .doc conversions (binary junk
# that the site's own copy payload sometimes drags along).
GARBAGE_MARKERS = ["Tableau Normal", "Aucune liste", "Root Entry", "1Table",
                   "WordDocument", "SummaryInformation", "CompObj",
                   "愀", "㔀逖", "厛詃", "敲獬", "؀䬀", "戄¼"]

def garbage_cut(text: str) -> str:
    idx = min((text.find(m) for m in GARBAGE_MARKERS if m in text), default=-1)
    if idx >= 0:
        text = text[:idx]
    return text.rstrip()

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
    text = garbage_cut(text)
    d["text"] = text
    json.dump(d, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"  cleaned {fid} ({len(text)}c)")

def relabel(old_name: str, new_name: str, lang: str) -> None:
    po, pn = f"{FETCHED}/{old_name}", f"{FETCHED}/{new_name}"
    d = json.load(open(po, encoding="utf-8"))
    d["lang"] = lang
    json.dump(d, open(pn, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    os.remove(po)
    print(f"  relabelled {old_name} -> {new_name} (lang={lang})")

# ────────────────────────────────────────────────────────────────────
# 1. lang relabels — FR pages under Arabic category slugs
# ────────────────────────────────────────────────────────────────────
relabel("attestation-prise-charge.ar.json", "attestation-prise-charge.fr.json", "fr")
relabel("attestation-salaire.ar.json", "attestation-salaire.fr.json", "fr")
relabel("demande-stage.ar.json", "demande-stage.fr.json", "fr")
relabel("resiliation-internet.ar.json", "resiliation-internet.fr.json", "fr")

# ────────────────────────────────────────────────────────────────────
# 2. wakala-permis — two filled examples; keep the driving-licence
#    variant (first), trim the off-topic agricultural-land variant,
#    blank all sample personal data.
# ────────────────────────────────────────────────────────────────────
patch("wakala-permis", [
    # declarant of variant 1
    ("أنا الموقع أسفله: عبد الناجي لعلام المزداد بتاريخ 20/07/1992 الحامل للبطاقـة التعريـف الوطنيـة رقـم IN804567. و الساكن بايطاليا.",
     "أنا الموقع أسفله: السيد(ة): …………… المزداد(ة) بتاريخ: …………… الحامل(ة) للبطاقـة التعريـف الوطنيـة رقـم ……………. والساكن بـ: ……………."),
    # the mandated agent
    ("أعين كوكيل عني السيد: يونس لعلام الحامل لبطاقة التعريف الوطنية رقم IN804568 .",
     "أعين كوكيل عني السيد: …………… الحامل لبطاقة التعريف الوطنية رقم …………… ."),
    # signature of variant 1
    ("الإمضاء: عبد الناجي لعلام",
     "الإمضاء: ……………"),
])
# trim the off-topic second variant (kept verbatim up to the trim point)
_p = f"{FETCHED}/wakala-permis.json"
_d = json.load(open(_p, encoding="utf-8"))
_cut = _d["text"].find("وكــــالـــــــة - نحن الموقعين أسفله:")
if _cut > 0:
    _d["text"] = _d["text"][:_cut].rstrip()
    json.dump(_d, open(_p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"  trimmed wakala-permis off-topic variant ({len(_d['text'])}c kept)")

# ────────────────────────────────────────────────────────────────────
# 3. attestation-prise-charge (AR) — filled example + .doc artifacts
# ────────────────────────────────────────────────────────────────────
patch("attestation-prise-charge", [
    ("السيد:الشكدالي العيادي الحامل لبطاقة التعريف الوطنية رقم :21608 والساكن بحي المصلى زنق 59رقم 94 الفقيه بن صالح.",
     "السيد: …………… الحامل لبطاقة التعريف الوطنية رقم : …………… والساكن بـ: ……………."),
    ("Ăā", ""),
    ("الحسين العيادي المزداد بتاريخ 1990/06/09/ الحامل لبطاقة التعريف الوطنية رقم :191364",
     "………………… المزداد بتاريخ: …………… الحامل لبطاقة التعريف الوطنية رقم : ……………"),
    ("في الديار الاسبانية", "في الديار ……………"),
    ("وحرر بالفقه بن صالح في :", "وحرر بـ: …………… في: ……………"),
])

# ────────────────────────────────────────────────────────────────────
# 4. resiliation-travail — filled example + .doc artifacts
# ────────────────────────────────────────────────────────────────────
patch("resiliation-travail", [
    ("شركة STE DOUKKAGRI SERVICE مقرها مركز 508 بالفقيه بن صالح.",
     "شركة …………… مقرها ……………."),
    ("السيد : سميرة أيت اخلف الحامل لبطاقة التعريف الوطنية رقمI 495991 والساكنة بدوار اعطارن تموليلت افورار ازيلال .",
     "السيد(ة): …………… الحامل(ة) لبطاقة التعريف الوطنية رقم …………… والساكن(ة) بـ: …………… ."),
    ("بتاريخ 06/03/2008 لإدارة الشركة المذكورة أعلاه",
     "بتاريخ …………… لإدارة الشركة المذكورة أعلاه"),
    ("ЄĀāبمقتضى", "بمقتضى"),
])

# ────────────────────────────────────────────────────────────────────
# 5. resiliation-internet (AR, هاتف ثابت) — filled city/phone + artifacts
# ────────────────────────────────────────────────────────────────────
patch("resiliation-internet", [
    ("الفقيه بن صالح في: من السيدة:", "………… في: من السيدة:"),
    ("العنوان: الفقيه بن صالح إلى السيد:", "العنوان: …………… إلى السيد:"),
    ("للاتصالات المغرب بالفقيه بن صالح الموضوع", "للاتصالات المغرب بـ: …………… الموضوع"),
    ("الهاتف الثابت 023 43 97 73", "الهاتف الثابت ……………"),
    ("ሂعلاقة", "علاقة"),
])

# ────────────────────────────────────────────────────────────────────
# 6. cv — re-quarantine (visual text-box layout, same as round 3)
# ────────────────────────────────────────────────────────────────────
_cv = f"{FETCHED}/cv.json"
if os.path.exists(_cv):
    d = json.load(open(_cv, encoding="utf-8"))
    json.dump(d, open(f"{FETCHED}/cv.json.excluded", "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    os.remove(_cv)
    print("  quarantined cv.json -> cv.json.excluded")

print("done.")
