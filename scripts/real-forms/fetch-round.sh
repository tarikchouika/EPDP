#!/bin/bash
# Fetch this round's selected namodaj document pages
cd /home/z/my-project/scripts/real-forms
PY=fetch-namodaj.py

python3 - <<'EOF' > /tmp/urls.py.out
from urllib.parse import quote
def q(s): return '/'.join(quote(seg, safe='') for seg in s.split('/'))
base = "https://namodaj.ma/"
targets = [
 ("wakala-permis", "ar", ["خدمات-أخرى/وكالة-سحب-رخصة-السياقة"]),
 ("attestation-prise-charge", "ar", ["التزامات/تصريح-بالتحمل-العائلي-والتكفل-بمصاريف-العيش-بالخارج"]),
 ("attestation-prise-charge", "fr", ["نماذج-بالفرنسية/attestation-de-prise-en-charge"]),
 ("declaration-perte-doc", "ar", ["تصاريح/ضياع-وثيقة-1", "تصاريح/تصريح-بالضياع-صيغة-قانونية-شاملة"]),
 ("procedure-mre", "ar", ["المغاربة-المقيمون-بالخارج-mre/نسخة-من-بطاقة-السوابق-العدلية-أو-بطاقة-الأوصاف-بالنسبة-للمغاربة-المقيمين-بالخارج"]),
 ("resiliation-internet", "fr", ["نماذج-بالفرنسية/résiliation-d-un-abonnement-internet"]),
 ("resiliation-internet", "ar", ["الحالة-المدنية/طلب-فسخ-عقدة-الهاتف-الثابت"]),
 ("cv", "ar", ["سيرة-ذاتية-بالعربية/03-cv-arabic"]),
 ("demande-stage", "ar", ["طلبات-ومراسلات/طلب-تدريب-مهني"]),
 ("demande-stage", "fr", ["نماذج-بالفرنسية/demande-de-stage"]),
 ("attestation-salaire", "fr", ["نماذج-بالفرنسية/demande-d-attestation-de-salaire-annuel"]),
 ("resiliation-travail", "ar", ["فسخ-العقود/اتفاقية-فسخ-عقدة-عمل-ومخالصة-تامة-للحقوق-Rupture-Conventionnelle"]),
]
for oid, lang, paths in targets:
    for p in paths:
        print(f"{oid}|{lang}|{base}{q(p)}")
EOF

while IFS='|' read -r oid lang url; do
  python3 "$PY" "$oid" "$lang" "$url"
done < /tmp/urls.py.out
