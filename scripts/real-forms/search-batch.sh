#!/bin/bash
# Search namodaj/katib for each pending doc; save raw results
cd /home/z/my-project/scripts/real-forms
mkdir -p search
declare -A Q=(
  [cv]="site:namodaj.ma نموذج سيرة ذاتية بسيطة"
  [demande-bourse]="site:namodaj.ma طلب منحة دراسية"
  [attestation-salaire]="site:namodaj.ma شهادة الأجر"
  [etat-lieux]="site:namodaj.ma محضر حالة الأماكن كراء"
  [procedure-vignette]="site:namodaj.ma رسوم السيارة الفيينيت"
  [procedure-mre]="site:namodaj.ma السجل العدلي B3 المغاربة المقيمين بالخارج"
  [demande-conge]="site:namodaj.ma طلب استفادة من رخصة إدارية"
  [resiliation-assurance]="site:namodaj.ma فسخ عقد تأمين"
  [resiliation-internet]="site:namodaj.ma فسخ اشتراك انترنت اتصالات"
  [wakala-permis]="site:namodaj.ma وكالة استلام رخصة السياقة"
  [attestation-prise-charge]="site:namodaj.ma شهادة تكفل تأشيرة"
  [attestation-stage]="site:namodaj.ma شهادة إتمام فترة التدريب"
  [lettre-recommandation]="site:namodaj.ma رسالة توصية"
  [declaration-perte-doc]="site:namodaj.ma تصريح ضياع وثيقة إدارية"
  [wakala-vente-vehicule]="site:namodaj.ma وكالة سياقة وبيع سيارة"
)
for id in "${!Q[@]}"; do
  echo "=== $id: ${Q[$id]}"
  z-ai function -n web_search -a "{\"query\": \"${Q[$id]}\", \"num\": 8}" 2>/dev/null \
    | python3 -c "
import json, sys
raw = sys.stdin.read()
start = raw.find('[')
try:
    items, _ = json.JSONDecoder().raw_decode(raw[start:])
    for it in items:
        print(it.get('url',''), '||', (it.get('name') or '')[:80])
except Exception as e:
    print('PARSE_ERR', e)
" > "search/$id.txt"
  wc -l < "search/$id.txt" | xargs echo "  lines:"
done
