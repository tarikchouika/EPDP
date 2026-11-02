// Full document templates — professional Moroccan administrative wording.
// Keys map to `templateId` in documents.ts

export interface DocTemplate {
  ar: string;
  fr: string;
}

export const templates: Record<string, DocTemplate> = {
  "demande-generale": {
    ar: `المملكة المغربية

[اسم الجهة الموجه إليها الطلب]
[العنوان / المدينة]

من: [الاسم الكامل] — [رقم البطاقة الوطنية: ............]
الساكن(ة) بـ: [العنوان الكامل]
الهاتف: [............]

الموضوع: [تحديد موضوع الطلب بدقة]

تشريفياً،

يتشرف الموقع(ة) أسفله أن يلتمس منكم [عرض الطلب بشكل مفصل وواضح].

وحيث أن [تعليل الطلب: الظروف أو المسوغات أو المراجع]، فإنني أضع رهن إشارتكم جميع الوثائق المرفقة، وأظل رهن توجيهاتكم لأي معلومة إضافية.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:
[الاسم الكامل]

المرفقات: [لائحة الوثائق المرفقة]`,
    fr: `Royaume du Maroc

[Nom du destinataire]
[Adresse / Ville]

De : [Nom complet] — [N° CIN : ............]
Habite à : [Adresse complète]
Téléphone : [............]

Objet : [Préciser l'objet de la demande]

Monsieur / Madame,

Le soussigné a l'honneur de solliciter de votre haute bienveillance [exposé détaillé de la demande].

Attendu que [motifs : circonstances, justificatifs ou références], je mets à votre disposition toutes les pièces jointes et reste à votre disposition pour tout complément d'information.

Veuillez agréer, Monsieur / Madame, l'expression de ma haute considération.

Fait à : [Lieu], le : [Date]

Signature :
[Nom complet]

Pièces jointes : [liste des documents]`,
  },

  "demande-acte-naissance": {
    ar: `المملكة المغربية
وزارة الداخلية
جماعة [اسم الجماعة] — مصلحة الحالة المدنية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [............]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد رئيس جماعة [اسم الجماعة]

الموضوع: طلب تسليم نسخة (كاملة / مطابقة) من رسم الولادة

تشريفياً،

يشرفني أن ألتمس من سيادتكم التكرم بتسليمي [عدد] نسخة (كاملة / مطابقة) من رسم ولادة:
الاسم: [اسم المعني]
تاريخ ومكان الولادة: [............]
اسم الأب: [............] — اسم الأم: [............]

وذلك لأغراض [الغرض: ملف إداري، مدرسي، قنصلي...].

أرفق طلبي هذا بوثائق الإثبات المطلوبة، وأظل رهن إشارتكم لأي توضيح.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
Ministère de l'Intérieur
Commune de [nom] — Service de l'état civil

De : [Nom complet] — N° CIN : [............]
Habite à : [Adresse complète]

À Monsieur le Président de la Commune de [nom]

Objet : Demande de délivrance d'une copie (intégrale / conforme) d'acte de naissance

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance de [nombre] copie(s) (intégrale(s) / conforme(s)) de l'acte de naissance de :
Nom : [nom du concerné]
Date et lieu de naissance : [............]
Nom du père : [............] — Nom de la mère : [............]

Ceci à des fins de [motif : dossier administratif, scolaire, consulaire…].

Je joins à ma demande les pièces justificatives requises et reste à votre disposition.

Veuillez agréer, Monsieur le Président, l'expression de ma haute considération.

Fait à : [Lieu], le : [Date]

Signature :`,
  },

  "chikaya-amma": {
    ar: `المملكة المغربية

[اسم الجهة الموجه إليها الشكاية]
[العنوان / المدينة]

من: [الاسم الكامل] — رقم البطاقة الوطنية: [............]
الساكن(ة) بـ: [العنوان الكامل] — الهاتف: [............]

الموضوع: شكاية بخصوص [تحديد موضوع الشكاية]

تشريفياً،

يتشرف الموقع(ة) أسفله أن يرفع إلى أنظاركم شكايته حول [عرض الوقائع بشكل مفصل وتسلسل زمني: ماذا حدث، متى، أين، ومن المعني].

وقد بادرت إلى [الخطوات السابقة إن وجدت: مراسلة، إنذار، شكاية سابقة...] دون جدوى، مما اضطرني إلى رفع هذه الشكاية إليكم.

لذا ألتمس منكم التكرم بالتدخل و[المرجو: التحقق، إيقاف الضرر، استرجاع حق، تطبيق القانون...]، وأظل رهن إشارتكم لتقديم أي توضيح أو وثيقة إضافية.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:

المرفقات: [الوثائق المثبتة إن وجدت]`,
    fr: `Royaume du Maroc

[Nom du destinataire de la plainte]
[Adresse / Ville]

De : [Nom complet] — N° CIN : [............]
Habite à : [Adresse complète] — Tél : [............]

Objet : Plainte concernant [préciser l'objet]

Monsieur / Madame,

Le soussigné a l'honneur de porter à votre connaissance sa plainte concernant [exposé détaillé et chronologique des faits : quoi, quand, où et qui].

J'ai préalablement [démarches antérieures le cas échéant : courrier, mise en demeure…], sans résultat, ce qui m'amène à saisir votre service.

Je sollicite donc votre intervention afin de [demande : vérification, cessation du préjudice, restitution, application de la loi…], et reste à votre disposition pour tout éclaircissement.

Veuillez agréer l'expression de ma haute considération.

Fait à : [Lieu], le : [Date]

Signature :

Pièces jointes : [justificatifs éventuels]`,
  },

  "attestation-travail": {
    ar: `[شعار المقاولة]
[تسمية المقاولة]
[العنوان — الهاتف — البريد الإلكتروني]

شهادة عمل

نشهد نحن الموقعين أسفله، [مسؤول المقاولة/المدير(ة)]، أن السيد(ة):
الاسم: [............] — رقم البطاقة الوطنية: [............]
يعمل(تعمل) بمقاومتنا منذ [التاريخ] بوظيفة [المسمى الوظيفي]، ضمن إطار [نوع العقد: عقد غير محدد المدة / محدد المدة...]، برقم التسجيل في CNSS: [............].

سلمت لهذه الشهادة بناء على طلبه/طلبها لاستعمالها فيما يراه(تراه) مناسباً من الأغراض، دون أن تتحمل المقاولة أي مسؤولية عن استعمالها.

حرر بـ: [المكان] في: [التاريخ]

[اسم المسؤول وصفته]
الإمضاء والخاتم`,
    fr: `[Logo de l'entreprise]
[Dénomination de l'entreprise]
[Adresse — Tél — E-mail]

ATTESTATION DE TRAVAIL

Nous, soussigné(e) [responsable / directeur(trice)], attestons par la présente que :

Madame / Monsieur
Nom : [............] — N° CIN : [............]
est employé(e) au sein de notre entreprise depuis le [date], en qualité de [intitulé du poste], dans le cadre d'un [type de contrat : CDI / CDD…], immatriculé(e) à la CNSS sous le n° [............].

La présente attestation est délivrée à l'intéressé(e) à sa demande, pour servir et valoir ce que de droit, sans engager la responsabilité de l'entreprise quant à son usage.

Fait à : [Lieu], le : [Date]

[Nom et qualité du responsable]
Signature et cachet`,
  },

  "attestation-residence": {
    ar: `شهادة السكنى

السيد(ة): [الاسم الكامل] — رقم البطاقة الوطنية: [............]

يسكن(تسكن) فعلياً بالعنوان التالي:
[العنوان الكامل: رقم المنزل، الشارع/الدرب، الحي، الجماعة، المدينة، الرمز البريدي]

منذ [تاريخ بداية السكنى أو المدة].

نشهد بصحة ما выше، وقد حررت هذه الشهادة بناء على معاينتنا (معرفة شخصية / تصريح الشاهدين أسفله) لتمكين المعني(ة) من استعمالها في الأغراض الإدارية المشروعة.

حرر بـ: [المكان] في: [التاريخ]

إمضاء المعني(ة): [............]

الشاهد الأول:
الاسم: [............] — رقم البطاقة: [............] — العنوان: [............]
الإمضاء:

الشاهد الثاني:
الاسم: [............] — رقم البطاقة: [............] — العنوان: [............]
الإمضاء:

ملاحظة: بعض الإدارات تطلب تصديق هذه الشهادة من السلطة المحلية (الملحقة الإدارية/القيادة).`,
    fr: `ATTESTATION DE RÉSIDENCE

Madame / Monsieur : [Nom complet] — N° CIN : [............]

réside effectivement à l'adresse suivante :
[Adresse complète : n°, rue, quartier, commune, ville, code postal]

depuis [date de début ou durée].

Nous attestons de l'exactitude des informations ci-dessus, établies de notre connaissance (personnelle / déclaration des deux témoins ci-dessous), pour permettre à l'intéressé(e) de s'en prévaloir à toutes fins administratives licites.

Fait à : [Lieu], le : [Date]

Signature de l'intéressé(e) : [............]

Premier témoin :
Nom : [............] — N° CIN : [............] — Adresse : [............]
Signature :

Deuxième témoin :
Nom : [............] — N° CIN : [............] — Adresse : [............]
Signature :

N.B. : Certaines administrations exigent la légalisation de cette attestation auprès de l'autorité locale (annexe administrative / caïdat).`,
  },

  "attestation-non-travail": {
    ar: `شهادة عدم العمل

السيد(ة): [الاسم الكامل] — ابن(ة): [اسم الأب] — رقم البطاقة الوطنية: [............]
الساكن(ة) بـ: [العنوان الكامل]

نشهد، نحن الموقعين أسفله، أن المعني(ة) بالشهادة لا يمارس(تمارس) أي نشاط مهني مأجور أو مستقل، ولا ينتمي(تنتمي) إلى أي هيئة مشغلة، وذلك إلى تاريخ تحرير هذه الشهادة.

سلمت لهذه الشهادة لتمكين المعني(ة) من استعمالها في الأغراض الإدارية المشروعة.

حرر بـ: [المكان] في: [التاريخ]

الشاهد الأول:
الاسم: [............] — رقم البطاقة: [............] — الإمضاء:

الشاهد الثاني:
الاسم: [............] — رقم البطاقة: [............] — الإمضاء:

إمضاء المعني(ة): [............]`,
    fr: `ATTESTATION DE NON-EMPLOI

Madame / Monsieur : [Nom complet] — Fils/Fille de : [nom du père] — N° CIN : [............]
Habite à : [Adresse complète]

Nous, soussignés, attestons que l'intéressé(e) ci-dessus identifié(e) n'exerce aucune activité professionnelle salariée ou indépendante et n'est affilié(e) à aucun organisme employeur, à la date d'établissement de la présente attestation.

La présente est délivrée pour permettre à l'intéressé(e) de s'en prévaloir à toutes fins administratives licites.

Fait à : [Lieu], le : [Date]

Premier témoin :
Nom : [............] — N° CIN : [............] — Signature :

Deuxième témoin :
Nom : [............] — N° CIN : [............] — Signature :

Signature de l'intéressé(e) : [............]`,
  },

  "declaration-honneur": {
    ar: `المملكة المغربية

تصريح بالشرف

أنا الموقع(ة) أسفله: [الاسم الكامل]
ابن(ة): [اسم الأب] — الحامل(ة) للبطاقة الوطنية رقم: [............]
الساكن(ة) بـ: [العنوان الكامل]

أصرح بشرفي أن: [نص التصريح المطلوب بدقة: واقعة، حالة، التزام...]

وأتعهد بتحمل كامل المسؤولية المترتبة عن هذا التصريح في حالة ثبوت عدم صحته، مع تحملي لكل تبعاتها القانونية.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:
[الاسم الكامل]`,
    fr: `Royaume du Maroc

DÉCLARATION SUR L'HONNEUR

Je, soussigné(e) : [Nom complet]
Fils/Fille de : [nom du père] — titulaire de la CIN n° : [............]
Habite à : [Adresse complète]

Déclare sur l'honneur que : [texte précis de la déclaration]

Je m'engage à assumer l'entière responsabilité découlant de la présente déclaration dans le cas où son inexactitude serait établie, ainsi que toutes ses conséquences légales.

Fait à : [Lieu], le : [Date]

Signature :
[Nom complet]`,
  },

  "declaration-non-emploi-honneur": {
    ar: `المملكة المغربية

تصريح بالشرف بعدم مزاولة أي نشاط مهني

أنا الموقع(ة) أسفله: [الاسم الكامل]
الحامل(ة) للبطاقة الوطنية رقم: [............]
الساكن(ة) بـ: [العنوان الكامل]

أصرح بشرفي أنني لا أمارس(تمارس) أي نشاط مهني مأجور أو حر، ولا أتوفر(أتوفر) على أي مورد من العمل، سواء لدى القطاع العام أو الخاص، وذلك إلى غاية تاريخ هذا التصريح.

وأتحمل كامل المسؤولية في حالة ثبوت خلاف ذلك.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

DÉCLARATION SUR L'HONNEUR DE NON-EXERCICE
D'ACTIVITÉ PROFESSIONNELLE

Je, soussigné(e) : [Nom complet]
Titulaire de la CIN n° : [............]
Habite à : [Adresse complète]

Déclare sur l'honneur ne pas exercer aucune activité professionnelle salariée ou indépendante et ne disposer d'aucun revenu professionnel, ni dans le secteur public ni dans le secteur privé, à la date de la présente déclaration.

J'assume l'entière responsabilité en cas d'inexactitude avérée.

Fait à : [Lieu], le : [Date]

Signature :`,
  },

  "iltizam-sakan": {
    ar: `التزام بالسكن

أنا الموقع(ة) أسفله: [الاسم الكامل للمكري/المتعهد]
الحامل(ة) للبطاقة الوطنية رقم: [............]
الساكن(ة) بـ: [عنوان الملتزم]

ألتزم بموجب هذا التاريخ بتوفير سكن لفائدة:
السيد(ة): [اسم المستفيد] — رقم البطاقة: [............]

بالعنوان التالي: [العنوان الكامل للسكن]
وذلك لمدة: [المدة / السنة الدراسية أو المهمة المعنية]

وأتحمل كامل المسؤولية المترتبة عن هذا الالتزام، وأتعهد بصحة المعلومات أعلاه.

حرر بـ: [المكان] في: [التاريخ]

إمضاء الملتزم: [............]

ملاحظة: ترفق نسخة من البطاقة الوطنية للملتزم، وقد تطلب الجهة توثيق الالتزام.`,
    fr: `ENGAGEMENT DE LOGEMENT

Je, soussigné(e) : [Nom complet du bailleur / garant]
Titulaire de la CIN n° : [............]
Habite à : [adresse du garant]

M'engage par la présente à fournir un logement au profit de :

Madame / Monsieur : [nom du bénéficiaire] — N° CIN : [............]

À l'adresse suivante : [adresse complète du logement]
Pour une durée de : [durée / année concernée]

J'assume l'entière responsabilité découlant du présent engagement et certifie l'exactitude des informations ci-dessus.

Fait à : [Lieu], le : [Date]

Signature du garant : [............]

N.B. : Joindre une copie de la CIN du garant ; légalisation parfois exigée.`,
  },

  "wakala-amma": {
    ar: `وكالة (استعمال إداري مبسط)

أنا الموقع(ة) أسفله: [الاسم الكامل للوكيل المعطي — الموكل]
الحامل(ة) للبطاقة الوطنية رقم: [............]
الساكن(ة) بـ: [العنوان]

أفوّض بموجب هذا النموذج السيد(ة): [الاسم الكامل للوكيل — المفوض إليه]
الحامل(ة) للبطاقة الوطنية رقم: [............]

في: [تحديد التصرف أو الإجراء المفوض بدقة: استلام وثيقة، متابعة ملف، التوقيع على...]

بخصوص: [الوثيقة/الملف/المرجع المعني]

وصلاحية هذه الوكالة سارية من [التاريخ] إلى [التاريخ أو "إلى غاية إنجاز الغرض"].

حرر بـ: [المكان] في: [التاريخ]

إمضاء الموكل: [............]

تنبيه هام:
- هذا النموذج للاستعمالات الإدارية البسيطة غير العقارية؛ التصرفات العقارية والوكالات الرسمية تتطلب وجوباً تحريرها لدى العدول أو موثق معتمد.
- قد تطلب بعض الإدارات تصديق الإمضاء لدى السلطة المحلية.`,
    fr: `PROCURATION (USAGE ADMINISTRATIF SIMPLIFIÉ)

Je, soussigné(e) : [Nom complet du mandant]
Titulaire de la CIN n° : [............]
Habite à : [Adresse]

Donne par la présente procuration à Madame / Monsieur : [Nom complet du mandataire]
Titulaire de la CIN n° : [............]

Pour : [nature précise de l'acte délégué : retrait d'un document, suivi d'un dossier, signature de…]

Concernant : [document / dossier / référence concernée]

La présente procuration est valable du [date] au [date ou « jusqu'à l'accomplissement de sa mission »].

Fait à : [Lieu], le : [Date]

Signature du mandant : [............]

Avertissement important :
- Ce modèle est destiné aux usages administratifs simples non immobiliers ; les actes immobiliers et procurations officielles doivent obligatoirement être dressés devant adouls ou notaire accrédité.
- Certaines administrations exigent la légalisation de la signature auprès de l'autorité locale.`,
  },

  "wakala-istilam": {
    ar: `تفويض للاستلام

أنا الموقع(ة) أسفله: [الاسم الكامل]
الحامل(ة) للبطاقة الوطنية رقم: [............]

أفوّض السيد(ة): [الاسم الكامل للمفوض إليه]
الحامل(ة) للبطاقة الوطنية رقم: [............]

في استلام: [الوثيقة/المستند/الراتب/المستحقات + المرجع]

من: [الجهة المسلمة]

ولا يُستعمل هذا التفويض لأي غرض آخر.

حرر بـ: [المكان] في: [التاريخ]

إمضاء المعطي: [............]

يُرفق: نسخة من بطاقة الطرفين.`,
    fr: `AUTORISATION DE RETRAIT

Je, soussigné(e) : [Nom complet]
Titulaire de la CIN n° : [............]

Autorise Madame / Monsieur : [Nom complet du mandataire]
Titulaire de la CIN n° : [............]

À retirer : [document / salaire / dus + référence]

Auprès de : [organisme détenteur]

La présente autorisation ne peut être utilisée à aucune autre fin.

Fait à : [Lieu], le : [Date]

Signature : [............]

Joindre : copies des CIN des deux parties.`,
  },

  "contrat-bail": {
    ar: `عقد كراء سكني

إنه في يوم [اليوم] [التاريخ]، بين كل من:

الطرف الأول (المؤاجر):
الاسم: [............] — رقم البطاقة الوطنية: [............]
العنوان: [............] — الهاتف: [............]

الطرف الثاني (المكتري):
الاسم: [............] — رقم البطاقة الوطنية: [............]
العنوان: [............] — الهاتف: [............]

تم الاتفاق بين الطرفين على ما يلي:

المادة 1 — موضوع العقد:
كري الطرف الأول للطرف الثاني السكن الكائن بـ: [العنوان الكامل]، المكون من [عدد الغرف والأجزاء]، مع تجهيزاته [مفروش / فارغ].

المادة 2 — المدة:
حددت مدة هذا الكراء بـ [....] سنة/شهر، تبدأ من [التاريخ] وتنتهي في [التاريخ]. وتتجدد صراحة إلا إذا أعلم أحد الطرفين الآخر بالإخلاء أو عدم التجديد قبل [....] يوماً من انتهاء الأجل.

المادة 3 — الكراء:
حدد مبلغ الكراء الشهري في [المبلغ بالدرهم] درهم، يؤدى في [اليوم] من كل شهر [نقداً/تحويلاً بنكياً إلى: ....]، مرفقاً بوصل أداء يحرره المؤاجر.

المادة 4 — الضمان:
أدى المكتري ضماناً مبلغ [المبلغ] درهم يسترجعه عند نهاية العقد بعد معاينة حالة السكن وخصم أي متأخرات أو أضرار.

المادة 5 — التكاليف:
يتحمل المكتري التكاليف المشتركة (الصيانة، الماء، الكهرباء، الأنترنت...) المستهلكة، وتظل الضريبة على المحلات المكراة على عاتق [المؤاجر حسب القانون / الاتفاق].

المادة 6 — التزامات المكتري:
- استعمال السكن سكناً عائلياً فقط دون تغيير وجهته؛
- القيام بالترميمات الاستعمالية البسيطة؛
- عدم الكراء من الباطن أو التنازل دون إذن كتابي؛
- إرجاع السكن بحالته عند الاستلام عادياً.

المادة 7 — التزامات المؤاجر:
- تسليم السكن في حالة صالحة للاستعمال؛
- القيام بالترميمات الكبرى (البناء، السقف، التجهيزات الأساسية)؛
- ضمان المكتري استعمالاً هادئاً للسكن طيلة مدة العقد.

المادة 8 — الفسخ:
يمكن لأي طرف فسخ العقد بإشعار مسبق كتابي لمدة [....] يوماً، مع مراعاة الحالات الخاصة (إخلاء لسبب مشروع). وفي حالة إخلال أحد الطرفين، للطرف الآخر طلب الفسخ والتعويض وفق القانون.

المادة 9 — التسجيل:
يخضع هذا العقد للتسجيل لدى المصلحة الضريبية المختصة حسب التشريع الجاري به العمل، وتحمل رسومه: [الطرف المتفق عليه].

المادة 10 — القانون المطبق والاختصاص:
يخضع هذا العقد للقانون المغربي، وخصوصاً قانون الالتزامات والعقود. وفي حالة النزاع، تُبذل محاولة التسوية الودية أولاً، وإلا فالاختصاص للمحكمة المختصة بمكان السكن.

حرر هذا العقد من [عدد] نسخ بيد كل طرف نسخة للإعمال عند اللزوم.

إمضاء المؤاجر: [............]
إمضاء المكتري: [............]
الشاهد الأول: [............] — الشاهد الثاني: [............]`,
    fr: `CONTRAT DE BAIL D'HABITATION

Le [jour] [date], entre :

La première partie (bailleur) :
Nom : [............] — N° CIN : [............]
Adresse : [............] — Tél : [............]

La seconde partie (locataire) :
Nom : [............] — N° CIN : [............]
Adresse : [............] — Tél : [............]

Il a été convenu ce qui suit :

Article 1 — Objet :
Le bailleur donne en location au locataire le logement sis à : [adresse complète], composé de [nombre de pièces], avec ses équipements [meublé / vide].

Article 2 — Durée :
La présente location est consentie pour une durée de [....] année(s)/mois, courant du [date] au [date]. Elle se renouvelle tacitement sauf dénonciation par l'une des parties [....] jours avant l'échéance.

Article 3 — Loyer :
Le loyer mensuel est fixé à [montant en dirhams] dirhams, payable le [jour] de chaque mois [en espèces / par virement au : ....], contre quittance délivrée par le bailleur.

Article 4 — Dépôt de garantie :
Le locataire verse un dépôt de garantie de [montant] dirhams, restituable à la fin du bail après constat de l'état du logement et déduction d'éventuels arriérés ou dégradations.

Article 5 — Charges :
Le locataire supporte les charges consommées (entretien, eau, électricité, internet…), la taxe sur les locaux loués restant à la charge [du bailleur selon la loi / accord des parties].

Article 6 — Obligations du locataire :
- user du logement à usage d'habitation uniquement ;
- effectuer les réparations locatives simples ;
- ne pas sous-louer ni céder le bail sans autorisation écrite ;
- restituer le logement dans l'état où il l'a reçu.

Article 7 — Obligations du bailleur :
- délivrer le logement en bon état d'usage ;
- prendre en charge les grosses réparations (gros œuvre, toiture, équipements essentiels) ;
- garantir au locataire une jouissance paisible durant tout le bail.

Article 8 — Résiliation :
Chaque partie peut résilier le contrat par préavis écrit de [....] jours, dans le respect des cas prévus. En cas d'inexécution par l'une des parties, l'autre peut demander la résiliation et des dommages selon la loi.

Article 9 — Enregistrement :
Le présent contrat est soumis à l'enregistrement auprès du service fiscal compétent, selon la législation en vigueur.

Article 10 — Droit applicable :
Le présent contrat est régi par le droit marocain, notamment le Code des obligations et des contrats. En cas de litige, une solution amiable sera recherchée d'abord ; à défaut, compétence est attribuée au tribunal du lieu du logement.

Fait en [nombre] exemplaires, dont un pour chaque partie.

Signature du bailleur : [............]
Signature du locataire : [............]
Premier témoin : [............] — Second témoin : [............]`,
  },

  "quittance-loyer": {
    ar: `وصل أداء الكراء

استلمت أنا الموقع(ة) أسفله [اسم المؤاجر] من السيد(ة) [اسم المكتري]، مبلغ [المبلغ] درهم، عن كراء شهر [الشهر/السنة] للسكن الكائن بـ: [العنوان].

وبذلك يعتبر المكتري خالياً من أداء كراء الشهر المذكور.

حرر بـ: [المكان] في: [التاريخ]

إمضاء المؤاجر:
[الاسم]`,
    fr: `QUITTANCE DE LOYER

Je, soussigné(e) [nom du bailleur], déclare avoir reçu de Madame/Monsieur [nom du locataire] la somme de [montant] dirhams, au titre du loyer de [mois/année] du logement sis à : [adresse].

Le locataire est par la présente quitte du loyer susvisé.

Fait à : [Lieu], le : [Date]

Signature du bailleur :
[Nom]`,
  },

  "vente-vehicule": {
    ar: `عقد بيع سيارة

إنه في يوم [اليوم] [التاريخ]، بين كل من:

الطرف الأول (البائع):
الاسم: [............] — رقم البطاقة الوطنية: [............]
العنوان: [............] — الهاتف: [............]

الطرف الثاني (المشتري):
الاسم: [............] — رقم البطاقة الوطنية: [............]
العنوان: [............] — الهاتف: [............]

اتفقا على ما يلي:

المادة 1 — المعروض:
باع الطرف الأول للطرف الثاني سيارة من نوع [الماركة والموديل]، لوحة الترقيم: [رقم اللوحة]، رقم البطاقة الرمادية: [............]، رقم الهيكل (VIN): [............]، سنة الصنع: [....].

المادة 2 — التصريح:
يصرح البائع أن السيارة ملكه الخاص الخالص، غير محملة بأي رهن أو امتياز أو حق للغير، وأن وثائقها المرفقة صحيحة.

المادة 3 — الثمن:
بيعت السيارة بثمن إجمالي قدره [المبلغ] درهم، أدى المشتري كامل المبلغ [نقداً/شيكاً رقم ....../تحويلاً] وبذلك أصبح البائع خالياً من أي حق في الثمن.

المادة 4 — التسليم:
سلم البائع للمشتري السيارة وجميع وثائقها (البطاقة الرمادية، الفحص التقني إن وجد، المفاتيح...) بحالتها المعروضة والمتفق عليها، والمشتري قبلها بعد معاينتها.

المادة 5 — نقل الملكية:
يتعهد المشتري بالقيام بإجراءات نقل الملكية (تغيير البطاقة الرمادية) لدى المصلحة المختصة داخل الآجال القانونية، وتحمل مصاريفها ما لم يتفق على خلاف ذلك.

المادة 6 — الطابع النهائي:
هذا البيع بيع نهائي غير قابل للرجوع، ولا يتحمل البائع أي مسؤولية بعد التسليم إلا عن العيوب الخفية المتعمد إخفاؤها.

حرر هذا العقد من نسختين بيد كل طرف نسخة للإعمال عند اللزوم.

إمضاء البائع: [............]
إمضاء المشتري: [............]
الشاهد الأول: [............] — الشاهد الثاني: [............]`,
    fr: `CONTRAT DE VENTE DE VÉHICULE

Le [jour] [date], entre :

Le vendeur :
Nom : [............] — N° CIN : [............]
Adresse : [............] — Tél : [............]

L'acheteur :
Nom : [............] — N° CIN : [............]
Adresse : [............] — Tél : [............]

Il a été convenu ce qui suit :

Article 1 — Objet :
Le vendeur cède à l'acheteur un véhicule de marque [marque et modèle], immatriculé sous le n° [plaque], carte grise n° [............], n° de châssis (VIN) : [............], année : [....].

Article 2 — Déclarations :
Le vendeur déclare que le véhicule est sa propriété exclusive, libre de tout gage, privilège ou droit de tiers, et que les documents remis sont authentiques.

Article 3 — Prix :
Le véhicule est vendu pour le prix global de [montant] dirhams, payé intégralement par l'acheteur [en espèces / chèque n° ...... / virement], le vendeur reconnaissant en être quitte.

Article 4 — Remise :
Le vendeur remet à l'acheteur le véhicule avec l'ensemble de ses documents (carte grise, contrôle technique le cas échéant, clés…) en l'état inspecté et accepté par l'acheteur.

Article 5 — Transfert :
L'acheteur s'engage à accomplir les formalités de transfert de propriété (changement de carte grise) auprès du service compétent dans les délais légaux, à ses frais sauf accord contraire.

Article 6 — Caractère définitif :
La présente vente est définitive et sans retour ; le vendeur n'encourt aucune responsabilité après la remise, hormis les vices cachés intentionnellement dissimulés.

Fait en deux exemplaires, dont un pour chaque partie.

Signature du vendeur : [............]
Signature de l'acheteur : [............]
Premier témoin : [............] — Second témoin : [............]`,
  },

  "cv": {
    ar: `السيرة الذاتية

[الاسم الكامل]
[المدينة] — [الهاتف] — [البريد الإلكتروني]
[رابط LinkedIn/الأعمال إن وجد]

الملف الشخصي:
[مهني حديث التخرج/ذو خبرة...] في مجال [التخصص]، أمتلك [أبرز المهارات]، أبحث عن فرصة [نوع المنصب المستهدف] ضمن فريق محفز.

المؤهلات الدراسية والتكوينية:
- [الشهادة] — [المؤسسة]، [المدينة] — [السنة]
- [دورة/شهادة مهنية] — [الجهة المانحة] — [السنة]

التجربة المهنية:
- [المنصب] — [المقاولة]، [المدينة] ([من تاريخ] إلى [تاريخ])
  • [إنجاز/مسؤولية بارزة 1]
  • [إنجاز/مسؤولية بارزة 2]

المهارات:
- التقنية: [أدوات ولغات وبرمجيات]
- اللغات: العربية (لغة أم)، الفرنسية [المستوى]، الإنجليزية [المستوى]…
- الشخصية: [العمل الجماعي، التنظيم، التواصل…]

مشاريع وإنجازات:
- [مشروع أو إنجاز له صلة بالمنصب المستهدف]

(ملاحظة: اجعل السيرة في صفحة واحدة، ورتب الخبرات من الأحدث إلى الأقدم، وطابق مفرداتها مع إعلان الوظيفة المستهدفة.)`,
    fr: `CURRICULUM VITAE

[Nom complet]
[Ville] — [Téléphone] — [E-mail]
[Lien LinkedIn/portfolio le cas échéant]

Profil :
[Jeune diplômé(e) / professionnel(le)…] en [domaine], doté(e) de [compétences clés], à la recherche d'un poste de [intitulé visé] au sein d'une équipe dynamique.

Formation :
- [Diplôme] — [Établissement], [ville] — [année]
- [Certification/formation] — [organisme] — [année]

Expérience professionnelle :
- [Poste] — [Entreprise], [ville] (du [date] au [date])
  • [réalisation/mission marquante 1]
  • [réalisation/mission marquante 2]

Compétences :
- Techniques : [outils, langages, logiciels]
- Langues : arabe (langue maternelle), français [niveau], anglais [niveau]…
- Comportementales : [travail d'équipe, organisation, communication…]

Projets et réalisations :
- [projet ou réalisation en lien avec le poste visé]

(Conseil : tenez le CV sur une page, classez les expériences de la plus récente à la plus ancienne et alignez le vocabulaire sur l'offre visée.)`,
  },

  "lettre-motivation": {
    ar: `السيد(ة) [اسم مسؤول التوظيف]
[تسمية المقاولة/الإدارة]
[العنوان]

الموضوع: ترشح لمنصب [اسم المنصب]

تشريفياً،

انطلاقاً من [المصدر: إعلانكم المنشور بتاريخ... / معرفتي بمقاولتكم]، يسعدني أن أترشح لمنصب [المنصب] ضمن مؤسستكم الموقرة.

أحمل [الشهادة/التكوين] وأتمتع بخبرة [المدة] في [المجال]، حيث [أبرز إنجاز أو مسؤولية تتصل بالمنصب]. وقد طورت عبر مساري مهارات [المهارة 1] و[المهارة 2] التي أعتبرها في صميم متطلبات منصبكم المعلن.

ما يدفعني لترشحي لكم تحديداً هو [سبب يتعلق بالمقاولة: قيمها، مشاريعها، سمعتها]، وكوني مقتنع(ة) بأن [ما ستضيفه لهم].

يسرني مناقشة ترشيحي في مقابلة متى رأيتم ذلك مناسباً. تجدون رفق هذا الخطاب سيرتي الذاتية، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

[الاسم الكامل]
[الهاتف] — [البريد الإلكتروني]`,
    fr: `Madame / Monsieur [nom du recruteur]
[Entreprise / Administration]
[Adresse]

Objet : Candidature au poste de [intitulé]

Madame, Monsieur,

Suite à [source : votre annonce parue le… / ma connaissance de votre entreprise], j'ai l'honneur de vous présenter ma candidature au poste de [intitulé] au sein de votre établissement.

Titulaire de [diplôme/formation] et fort(e) d'une expérience de [durée] en [domaine], j'ai notamment [réalisation clé liée au poste]. Au fil de mon parcours, j'ai développé [compétence 1] et [compétence 2], au cœur des exigences du poste annoncé.

Ce qui motive particulièrement ma candidature est [raison liée à l'entreprise : valeurs, projets, réputation], ainsi que ma conviction de pouvoir [votre apport].

Je serais heureux(se) d'échanger avec vous lors d'un entretien, à votre convenance. Vous trouverez ci-joint mon curriculum vitae ; je reste à votre disposition.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations respectueuses.

[Nom complet]
[Téléphone] — [E-mail]`,
  },

  "demission": {
    ar: `إلى السيد(ة) [اسم المسؤول]
[تسمية المقاولة]
[المصلحة/المديرية]

من: [الاسم الكامل] — [الوظيفة]
رقم التسجيل/الملف: [............]

الموضوع: إشعار بالاستقالة

تشريفياً،

أشعركم بموجب هذا الخطاب بقراري تقديم استقالتي من وظيفتي [الوظيفة] بمقاومتكم، التي التحقت بها بتاريخ [تاريخ الالتحاق].

وأحيطكم علماً بأنني سأحترم أجل الإشعار القانوني/الاتفاقي المحدد في [عقد العمل/اتفاقية الشغل/مدونة الشغل] بواقع [المدة]، وسيستمر عملي خلاله بشكل عادي، وذلك إلى غاية [تاريخ نهاية الإشعار].

كما ألتمس منكم التكرم بإعداد [شهادة العمل، تسوية الوضعية الإدارية والمالية، شهادة الخبرة...] عند نهاية المهلة.

أشكركم على ما أحيطت به من تكوين وتعاون طيلة مساري معكم، متمنياً لمقاولتكم مزيداً من التوفيق.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:
[الاسم الكامل]`,
    fr: `À Madame / Monsieur [nom du responsable]
[Entreprise]
[Service / Direction]

De : [Nom complet] — [Poste]
Matricule : [............]

Objet : Démission

Madame, Monsieur,

Par la présente, je vous informe de ma décision de démissionner de mon poste de [poste] au sein de votre entreprise, que j'occupe depuis le [date d'embauche].

Je respecterai le préavis légal/conventionnel prévu par [contrat de travail/convention/Code du travail], soit [durée], durant lequel j'assurerai normalement mes fonctions, et ce jusqu'au [date de fin du préavis].

Je vous remercie de bien vouloir préparer [attestation de travail, solde de tout compte, attestation d'expérience…] à l'issue de cette période.

Je vous remercie pour la formation et la collaboration dont j'ai bénéficié, et souhaite à votre entreprise une pleine réussite.

Veuillez agréer, Madame, Monsieur, l'expression de ma haute considération.

Fait à : [Lieu], le : [Date]

Signature :
[Nom complet]`,
  },

  "cdd": {
    ar: `عقد عمل محدد المدة

إنه في يوم [اليوم] [التاريخ] تم الاتفاق بين كل من:

المشغل:
[تسمية المقاولة] — السيد(ة) [اسم المسؤول]
العنوان: [............] — رقم السجل التجاري: [............] — رقم التسجيل لدى CNSS: [............]

الأجير:
الاسم: [............] — رقم البطاقة الوطنية: [............]
رقم التسجيل لدى CNSS: [............]
العنوان: [............]

وذلك على الشروط التالية:

المادة 1 — التوظيف:
وظفت المقاولة السيد(ة) المذكور(ة) أعلاه لشغل منصب [المسمى الوظيفي] بمصلحة [المصلحة/المديرية].

المادة 2 — المدة:
هذا العقد محدد المدة، يبدأ من [التاريخ] وينتهي في [التاريخ]، وقد أبرم لمدة محددة بسبب [تدعيم موسمي / مهمة مؤقتة / إنجاز شغل معطل...]. ويمكن تجديده بالكيفية المقررة في مدونة الشغل.

المادة 3 — فترة التجربة:
حددت فترة التجربة في [المدة]، يمكن خلالها لكل طرف إنهاء العقد دون إشعار ولا تعويض.

المادة 4 — الأجر:
حدد الأجر الشهري/اليومي في [المبلغ] درهم، خالصاً من الاشتراكات الاجتماعية والضريبية، يؤدى [نهاية كل شهر/...]. مع [التعويضات: تنقل، منح...] كما في النظام الداخلي.

المادة 5 — مدة العمل:
حددت مدة العمل الأسبوعية في [....] ساعة موزعة على [الأيام والأوقات]، وفق النظام الداخلي للمقاولة والتشريع الجاري به العمل.

المادة 6 — الالتزامات:
يلتزم الأجير بأداء المهام المسندة بأمانة، والمحافظة على أسرار المهنة وقواعد النظام الداخلي؛ ويلتزم المشغل بتوفير ظروف العمل القانونية والتغطية الاجتماعية.

المادة 7 — التغطية الاجتماعية:
يصرح به المشغل لدى CNSS ويؤدي عنه الاشتراكات حسب التشريع الجاري به العمل.

المادة 8 — إنهاء العقد:
ينتهي هذا العقد بانتهاء مدته دون تعويض، ويظل الطرفان خاضعين للأحكام الخاصة بالفسخ والإخلال الواردة في مدونة الشغل.

المادة 9 — القانون المطبق:
يخضع هذا العقد لمدونة الشغل المغربية وللنصوص التنظيمية ذات الصلة، ولمحاكم الشغل في ما قد ينشأ عنه من نزاعات.

حرر هذا العقد من نسختين بيد كل طرف نسخة للإعمال عند اللزوم.

إمضاء المشغل: [............]
إمضاء الأجير: [............]`,
    fr: `CONTRAT DE TRAVAIL À DURÉE DÉTERMINÉE (CDD)

Le [jour] [date], il a été convenu entre :

L'employeur :
[Dénomination] — Madame/Monsieur [responsable]
Adresse : [............] — RC n° : [............] — N° CNSS : [............]

Le salarié :
Nom : [............] — N° CIN : [............]
N° CNSS : [............]
Adresse : [............]

Selon les clauses suivantes :

Article 1 — Embauche :
L'entreprise embauche le salarié ci-dessus désigné au poste de [intitulé], au sein du service [service/direction].

Article 2 — Durée :
Le présent contrat est conclu pour une durée déterminée, du [date] au [date], en raison de [surcroît saisonnier / tâche ponctuelle / remplacement…]. Il peut être renouvelé dans les conditions prévues par le Code du travail.

Article 3 — Période d'essai :
La période d'essai est fixée à [durée], durant laquelle chaque partie peut mettre fin au contrat sans préavis ni indemnité.

Article 4 — Rémunération :
Le salaire mensuel/journalier est fixé à [montant] dirhams, nets des cotisations sociales et fiscales, payable [en fin de mois/…], avec [indemnités : transport, primes…] selon le règlement intérieur.

Article 5 — Durée du travail :
La durée hebdomadaire est fixée à [....] heures réparties selon [jours et horaires], conformément au règlement intérieur et à la législation en vigueur.

Article 6 — Engagements :
Le salarié s'engage à accomplir ses tâches avec diligence et à respecter le secret professionnel et le règlement intérieur ; l'employeur garantit des conditions de travail légales et la couverture sociale.

Article 7 — Couverture sociale :
L'employeur déclare le salarié à la CNSS et acquitte les cotisations selon la législation en vigueur.

Article 8 — Fin du contrat :
Le contrat prend fin à l'échéance sans indemnité, les parties restant soumises aux règles de rupture et d'inexécution prévues par le Code du travail.

Article 9 — Droit applicable :
Le présent contrat est régi par le Code du travail marocain et les textes applicables, et relève des tribunaux sociaux pour tout litige.

Fait en deux exemplaires, dont un pour chaque partie.

Signature de l'employeur : [............]
Signature du salarié : [............]`,
  },

  "demande-stage": {
    ar: `المملكة المغربية

إلى السيد(ة) مدير(ة) [تسمية المقاولة/المؤسسة]
[المدينة]

من: [الاسم الكامل]
الطالب(ة) بـ: [المستوى الدراسي/التخصص] بـ[المؤسسة التعليمية]
العنوان: [............] — الهاتف: [............] — البريد: [............]

الموضوع: طلب تدريب

تشريفياً،

في إطار [تحضير شهادة/تكميل التكوين] بمؤسستنا، يسعدني أن ألتمس من سيادتكم قبولي كمتدرب(ة) بمقاولتكم الموقرة خلال الفترة [من تاريخ إلى تاريخ]، بمصلحة [المصلحة المرغوبة].

إن [المهارة/الاهتمام المرتبط بالمجال] وحاجتي إلى تعزيز [الكفايات المستهدفة] تجعلان من هذه الفترة فرصة للاستفادة من خبرة فرقكم المتميزة، وسأبذل قصارى جهدي لإنجاز المهام المسندة بإتقان واحترام تام لقوانينكم الداخلية.

أرفق طلبي هذا [بسيرتي الذاتية / ترشيح من المؤسسة / اتفاقية التدريب]، وأظل رهن إشارتكم لأي مقابلة أو توضيح.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المكان] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

À Madame / Monsieur le Directeur(trice) de [Entreprise]
[Ville]

De : [Nom complet]
Étudiant(e) en [niveau/spécialité] à [établissement]
Adresse : [............] — Tél : [............] — E-mail : [............]

Objet : Demande de stage

Madame, Monsieur,

Dans le cadre de [préparation de diplôme/complément de formation], j'ai l'honneur de solliciter un stage au sein de votre entreprise du [date] au [date], au service [service souhaité].

Mon [compétence/intérêt pour le domaine] et mon souhait de renforcer [objectifs d'apprentissage] font de cette période une réelle opportunité de bénéficier de l'expérience de vos équipes ; je m'engage à accomplir les tâches confiées avec sérieux et dans le respect de votre règlement intérieur.

Je joins à ma demande [mon CV / la lettre de recommandation / la convention de stage] et reste à votre disposition pour un entretien.

Veuillez agréer, Madame, Monsieur, l'expression de ma haute considération.

Fait à : [Lieu], le : [Date]

Signature :`,
  },

  "autorisation-voyage": {
    ar: `إذن أبوي بسفر قاصر

نحن الموقعين أسفله:

الأب: [الاسم الكامل] — رقم البطاقة الوطنية: [............]
الأم: [الاسم الكامل] — رقم البطاقة الوطنية: [............]
العنوان: [............] — الهاتف: [............]

نأذن بموجب هذا الإذن لابننا/ابنتنا:
الاسم: [............] — رقم البطاقة الوطنية/نسخة من رسم الولادة: [............]
المولود(ة) بتاريخ: [............]

في السفر إلى [الوجهة] خلال الفترة من [تاريخ] إلى [تاريخ]، رفقة [اسم المرافق وعلاقته / منفرداً ضمن رحلة منظمة...].

نتحمل كامل المسؤولية القانونية عن هذا الإذن، ونظل رهن إشارة أي جهة معنية لتقديم التوضيحات اللازمة.

حرر بـ: [المكان] في: [التاريخ]

إمضاء الأب: [............]
إمضاء الأم: [............]

تنبيه: بعض شركات النقل والسفارات والحدود تطلب تصديق هذا الإذن لدى السلطة المحلية أو الجهة المختصة — استفسر قبل السفر.`,
    fr: `AUTORISATION PARENTALE DE VOYAGE D'UN MINEUR

Nous, soussignés :

Le père : [Nom complet] — N° CIN : [............]
La mère : [Nom complet] — N° CIN : [............]
Adresse : [............] — Tél : [............]

Autorisons par la présente notre enfant :

Nom : [............] — N° CIN / copie d'acte de naissance : [............]
Né(e) le : [............]

À voyager vers [destination] du [date] au [date], accompagné(e) de [nom de l'accompagnant et lien / seul(e) dans un voyage organisé…].

Nous assumons l'entière responsabilité juridique de la présente autorisation et restons à la disposition de toute partie concernée.

Fait à : [Lieu], le : [Date]

Signature du père : [............]
Signature de la mère : [............]

N.B. : Certaines compagnies, ambassades et frontières exigent la légalisation de cette autorisation auprès de l'autorité locale ou compétente — renseignez-vous avant le départ.`,
  },

  "facture": {
    ar: `[شعار المقاولة]
[تسمية المقاولة / اسم المقاول الذاتي]
العنوان: [............] — الهاتف: [............] — البريد: [............]
السجل التجاري/المقاول الذاتي رقم: [............] — التعريف الضريبي/ICE: [............]
الضمان الاجتماعي (CNSS) إن وجد: [............]

فاتورة رقم: [............]
التاريخ: [............]

العميل:
[التسمية/الاسم] — العنوان: [............]
التعريف الضريبي (إن وجد): [............]

+--------+---------------------------+----------+------------+---------------+
| الرقم  | بيان الخدمة/المنتوج       | الكمية   | الثمن      | المجموع       |
+--------+---------------------------+----------+------------+---------------+
| 1      | [............]            | [....]   | [....]     | [....]        |
| 2      | [............]            | [....]   | [....]     | [....]        |
+--------+---------------------------+----------+------------+---------------+

المجموع الفرعي: [............] درهم
الضريبة على القيمة المضافة [النسبة% / معفى]: [............] درهم
المجموع الإجمالي: [............] درهم

شروط الأداء: [نقداً/تحويل بنكي إلى RIB: ....] خلال [....] يوماً.

تحرر هذه الفاتورة وفق التشريع الجاري به العمل، وتعد وثيقة رسمية للمحاسبة والتصريح الضريبي.

إمضاء وخاتم:
[الاسم]`,
    fr: `[Logo]
[Dénomination / Nom de l'auto-entrepreneur]
Adresse : [............] — Tél : [............] — E-mail : [............]
RC / Auto-entrepreneur n° : [............] — IF / ICE : [............]
CNSS (le cas échéant) : [............]

FACTURE N° : [............]
Date : [............]

Client :
[Dénomination/Nom] — Adresse : [............]
IF (le cas échéant) : [............]

+-------+----------------------------+----------+-------------+---------------+
| N°    | Désignation                | Quantité | Prix        | Total         |
+-------+----------------------------+----------+-------------+---------------+
| 1     | [............]             | [....]   | [....]      | [....]        |
| 2     | [............]             | [....]   | [....]      | [....]        |
+-------+----------------------------+----------+-------------+---------------+

Sous-total : [............] MAD
TVA [taux% / exonéré] : [............] MAD
Total à payer : [............] MAD

Conditions de paiement : [espèces / virement au RIB : ....] sous [....] jours.

La présente facture est établie conformément à la législation en vigueur et vaut pièce officielle de comptabilité et de déclaration fiscale.

Signature et cachet :
[Nom]`,
  },
};
