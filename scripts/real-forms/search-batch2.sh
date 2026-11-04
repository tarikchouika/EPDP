#!/bin/bash
cd /home/z/my-project/scripts/real-forms
declare -A Q=(
  [cv]="namodaj.ma سيرة ذاتية جاهزة للنسخ نص"
  [demande-bourse]="namodaj.ma طلب للحصول على منحة دراسية"
  [attestation-salaire]="namodaj.ma شهادة عمل مؤدى عنها أجر"
  [etat-lieux]="namodaj.ma محضر حالة مكان الكراء"
  [procedure-vignette]="namodaj.ma الفيينيت رسم السيارة إجراءات"
  [procedure-mre]="namodaj.ma استخراج السجل العدلي عن بعد المغاربة المقيمين بالخارج"
  [demande-conge]="namodaj.ma طلب رخصة من العمل"
  [resiliation-assurance]="namodaj.ma إلغاء عقد التأمين طلب"
  [resiliation-internet]="namodaj.ma فسخ عقد اشتراك الإنترنت"
  [wakala-permis]="namodaj.ma وكالة لاستخراج رخصة السياقة"
  [attestation-prise-charge]="namodaj.ma شهادة تكفل شخص"
  [attestation-stage]="namodaj.ma شهادة تدريب نموذج"
  [lettre-recommandation]="namodaj.ma رسالة توصية موظف"
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
" > "search/$id.2.txt"
  wc -l < "search/$id.2.txt" | xargs echo "  lines:"
done
