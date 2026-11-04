#!/usr/bin/env python3
"""Match pending EPDP docs against namodaj.ma sitemap URLs by keyword."""
from urllib.parse import unquote
import json

urls = [unquote(u) for u in open('/tmp/namodaj-urls.txt').read().splitlines() if u.strip()]

# doc-id -> list of (keyword fragments that must all appear) OR several alternatives
WANT = {
  "cv": [["سيرة-ذاتية-بالعربية/"]],
  "demande-bourse": [["منحة-دراسية", "طلب"], ["المنح-الدراسية"]],
  "attestation-salaire": [["شهادة-أجر"], ["شهادة-الأجر"], ["شهادة-عمل", "أجر"]],
  "etat-lieux": [["حالة-الأماكن"], ["حالة-مكان"], ["محضر-معاينة", "كراء"], ["état-des-lieux"]],
  "procedure-vignette": [["فينيت"], ["رسوم-السيارة"], ["vignette"]],
  "procedure-mre": [["السجل-العدلي", "عن-بعد"], ["السجل-العدلي", "الخارج"], ["b3"]],
  "demande-conge": [["طلب-رخصة"], ["استفادة-من-رخصة"], ["طلب-إجازة"], ["طلب-اجازة"]],
  "resiliation-assurance": [["فسخ-عقد-تأمين"], ["فسخ-عقد-التأمين"], ["إلغاء-عقد-تأمين"], ["résiliation", "assurance"]],
  "resiliation-internet": [["فسخ-اشتراك"], ["فسخ-عقد-إنترنت"], ["فسخ-عقد-الإنترنت"], ["إلغاء-اشتراك-إنترنت"]],
  "wakala-vente-vehicule": [["وكالة", "بيع", "سيارة"]],
  "wakala-permis": [["وكالة", "رخصة-السياقة"], ["وكالة", "استلام-رخصة"], ["وكالة", "استخراج-رخصة"]],
  "attestation-prise-charge": [["شهادة-تكفل"], ["تكفل-ب"]],
  "attestation-stage": [["شهادة-تدريب"], ["إتمام-التدريب"], ["شهادة-إتمام"]],
  "lettre-recommandation": [["رسالة-توصية"], ["توصية-بـ"], ["lettre-de-recommandation"]],
  "declaration-perte-doc": [["ضياع-وثيقة"], ["تصريح-بالضياع"], ["ضياع-وثائق"]],
}

found = {}
for did, alts in WANT.items():
    hits = []
    for u in urls:
        if not u.startswith("https://namodaj.ma/"): continue
        path = u[len("https://namodaj.ma/"):]
        if "/" not in path: continue  # category root, skip
        for alt in alts:
            if all(k in path for k in alt):
                hits.append(u); break
    found[did] = sorted(set(hits))
    print(f"\n## {did} ({len(found[did])} hits)")
    for h in found[did][:12]: print("  ", h)

json.dump(found, open('/tmp/namodaj-matches.json','w'), ensure_ascii=False, indent=1)
