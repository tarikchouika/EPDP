#!/usr/bin/env python3
"""Update queue.json statuses for batch 3 round."""
import json, os, datetime

BASE = os.path.dirname(os.path.abspath(__file__))
path = f"{BASE}/queue.json"
q = json.load(open(path, encoding="utf-8"))
today = datetime.date.today().isoformat()

def mark(qid, status, url=None, note=None):
    e = q.setdefault(qid, {"id": qid})
    e["status"] = status
    e["checkedAt"] = today
    if url:
        e["url"] = url
    if note:
        e["note"] = note

fetched = {
    "contrat-cdi": "https://www.namodaj.ma/%D8%B9%D9%82%D9%88%D8%AF/%D8%B9%D9%82%D8%AF-%D8%B9%D9%85%D9%84-%D8%BA%D9%8A%D8%B1-%D9%85%D8%AD%D8%AF%D8%AF-%D8%A7%D9%84%D9%85%D8%AF%D8%A9-cdi",
    "cdd": "https://namodaj.ma/%D8%B9%D9%82%D9%88%D8%AF/%D8%B9%D9%82%D8%AF-%D8%B9%D9%85%D9%84-%D9%85%D8%AD%D8%AF%D8%AF-%D8%A7%D9%84%D9%85%D8%AF%D8%A9-%D9%86%D9%85%D9%88%D8%B0%D8%AC-%D8%B1%D8%B3%D9%85%D9%8A-%D9%85%D8%B9%D8%AA%D9%85%D8%AF",
    "reconnaissance-dette": "https://namodaj.ma/%D9%86%D9%85%D8%A7%D8%B0%D8%AC-%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9/%D8%A7%D8%B9%D8%AA%D8%B1%D8%A7%D9%81-%D8%A8%D8%AF%D9%8A%D9%86-%D9%88%D9%82%D8%B1%D8%B6-%D9%85%D8%A7%D9%84%D9%8A-%D9%85%D8%B9-%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF-%D8%AC%D8%AF%D9%88%D9%84-%D8%A7%D9%84%D8%B3%D8%AF%D8%A7%D8%AF",
    "facture": "https://www.namodaj.ma/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A/%D9%86%D9%85%D9%88%D8%B0%D8%AC-%D9%81%D8%A7%D8%AA%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A-%D9%86%D9%85%D9%88%D8%B0%D8%AC-%D8%B1%D8%B3%D9%85%D9%8A-%D9%85%D8%B9%D8%AA%D9%85%D8%AF",
    "attestation-celibat": "https://namodaj.ma/%D9%88%D8%AB%D8%A7%D8%A6%D9%82/%D8%AA%D8%B5%D8%B1%D9%8A%D8%AD-%D8%A7%D9%84%D8%B9%D8%B2%D9%88%D8%A8%D8%A9",
    "tanazol-vehicule": "https://cdn.namodaj.ma/documents/%D8%AA%D9%86%D8%A7%D8%B2%D9%84%D8%A7%D8%AA/%D8%A8%D9%86%D8%AE%D9%84%D9%88%D9%82.doc",
    "demande-prestations-familiales": "https://namodaj.ma/%D8%A7%D9%84%D8%B5%D9%86%D8%AF%D9%88%D9%82-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%B6%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A-cnss/%D8%B7%D9%84%D8%A8-%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AA%D8%B9%D9%88%D9%8A%D8%B6%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%84%D9%8A%D8%A9-1",
}
for qid, url in fetched.items():
    mark(qid, "fetched", url=url)

# no real template found on the three libraries this round (retry later rounds)
for qid in ["demande-bourse", "etat-lieux", "demande-stage", "demande-permis-conduire",
            "demande-carte-grise", "procedure-vignette", "procedure-mre"]:
    mark(qid, "notfound", note="no matching template on namodaj/katib/onebox in batch-3 round; retry next rounds")

# source exists (onebox) but the site is Cloudflare-blocked for this environment
mark("attestation-salaire", "blocked",
     url="https://onebox.ma/documents/modele-de-attestation-de-salaire-maroc",
     note="onebox.ma Cloudflare-blocked (WebFetch + curl); wayback timeout — retry next round")

json.dump(q, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"queue updated: {len(q)} entries")
