// Templates for documents-more-2 (phase 2 — part B).
// Professional wording authored for EPDP following the standard
// Moroccan administrative format.
import type { DocTemplate } from "./templates";

export const templatesMore2: Record<string, DocTemplate> = {
  "lettre-recommandation": {
    ar: `رسالة توصية

إلى السيد(ة) [الجهة الموجهة إليها]

تشريفياً،

يسرني، بصفتي [اسم الموصي وصفته]، أن أوصي بـ [اسم المرشح] الذي عملت معه [علاقة العمل/الدراسة بينهما].

لقد أبان خلال هذه المدة عن [مؤهلات المرشح: جدية، دقة، روح المسؤولية...]، وهو ما يجعلني مطمئناً تماماً لترشيحه لديكم.

وأناإلى جانب ذلك، أظل رهن إشارتكم لأي توضيح.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: [اسم الموصي وصفته]`,
    fr: `LETTRE DE RECOMMANDATION

À Monsieur/Madame [Destinataire]

Madame, Monsieur,

C'est avec plaisir qu'en ma qualité de [nom et qualité du recommandant], je recommande [nom du candidat], avec qui j'ai travaillé [relation].

Durant cette période, il/elle a démontré [qualités du candidat], ce qui me conduit à le/la recommander pleinement auprès de vous.

Je reste à votre disposition pour tout complément.

Veuillez agréer l'expression de ma haute considération.

Fait à [Ville], le [Date]

Signature : [nom du recommandant]`,
  },

  "demande-conge": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — الوظيفة: [الوظيفة]
إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب الاستفادة من رخصة [نوع الرخصة]

تشريفياً،

يلتمس الموقع(ة) أعلاه التكرم بالترخيص له بعطلة [نوع الرخصة] خلال الفترة الممتدة من [تواريخ البداية والنهاية]، علماً بأن آخر رخصة استفدت منها كانت بتاريخ [تاريخ آخر رخصة].

وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — Poste : [poste]
À Monsieur/Madame [Destinataire]

Objet : Demande de congé [type]

Madame, Monsieur,

Le soussigné sollicite l'octroi d'un congé [type] du [dates de début et de fin], en précisant que mon dernier congé remonte au [date].

Je reste à votre disposition.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "mise-en-demeure-stc": {
    ar: `إنذار أداء

إلى السيد(ة) [اسم المشغل/المقاولة]
[العنوان]

من: السيد(ة) [اسم الأجير السابق] — شغل(ت) لديكم وظيفة [الوظيفة الأخيرة] إلى غاية [التاريخ]

الموضوع: إنذار أداء مستحقات نهاية العمل

سيداي المحترم،

رغم انتهاء علاقة العمل بيننا بتاريخ المذكور أعلاه، لم أوف بعد بمستحقاتي المتمثلة في [تفصيل المستحقات: الأجر، التعويضات، عطلات غير مستهلكة...] والتي تبلغ [المبلغ] درهم.

بناء عليه أنذركم بأداء ما لي في أجل أقصاه [الأجل الممنوح للأداء] من تاريخ هذا الإنذار، وإلا سأضطر لرفع الأمر إلى مفتشية الشغل ثم المحكمة المختصة.

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `MISE EN DEMEURE

À [nom de l'employeur]
[adresse]

De : [nom de l'ancien salarié], ayant occupé le poste de [dernier poste] jusqu'au [date]

Objet : Mise en demeure de paiement du STC

Monsieur,

Malgré la fin de notre relation de travail à la date précitée, mes droits de fin de relation ([détail des sommes dues]) d'un montant de [Montant] dirhams demeurent impayés.

En conséquence, je vous mets en demeure de procéder au paiement dans un délai maximal de [délai accordé], à compter du présent courrier, faute de quoi je saisirai l'inspection du travail puis le tribunal compétent.

Veuillez agréer mes salutations distinguées.

Fait à [Ville], le [Date]

Signature :`,
  },

  "contrat-cdi": {
    ar: `عقد عمل غير محدد المدة

حرر هذا العقد بمدينة [المدينة] في: [التاريخ]، بين:

المشغل: [اسم المشغل]، مقره [العنوان الكامل]، يمثله [الصفة]؛
الأجير: [اسم الأجير]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الأجير]، الساكن(ة) بـ [العنوان الكامل].

المادة 1 — التوظيف: وظف الأجير في منصب [الوظيفة] ابتداء من [تاريخ الالتحاق].
المادة 2 — الأجر: حدد الأجر الشهري الإجمالي في [الأجر المتفق عليه] درهم، وتصرف شهرياً مع مراعاة الاقتطاعات القانونية.
المادة 3 — مدة التجربة: [مدة التجربة] قابلة للتجديد مرة واحدة.
المادة 4 — الواجبات: يؤدي الأجير مهامه بجدية وسرية، ويحترم أنظمة المقاولة.
المادة 5 — التسجيل: يلتزم المشغل بتسجيل الأجير لدى CNSS قبل الالتحاق.
المادة 6 — الراحة: يستفيد الأجير من الراحة الأسبوعية والعطل القانونية.
المادة 7 — إنهاء العقد: يخضع إنهاء العقد لمقتضيات مدونة الشغل.

حُرر من نسختين، نسخة لكل طرف.

المشغل: ____________    الأجير: ____________`,
    fr: `CONTRAT DE TRAVAIL À DURÉE INDÉTERMINÉE

Il a été conclu à [Ville], le [Date], entre :

L'employeur : [nom de l'employeur], siège [adresse], représenté par [qualité] ;
Le salarié : [nom du salarié], CIN n° [numéro], résidant à [adresse].

Art. 1 — Embauche : le salarié est engagé au poste de [poste] à compter du [date].
Art. 2 — Rémunération : le salaire mensuel brut est fixé à [montant] dirhams, versé mensuellement sous déduction des retenues légales.
Art. 3 — Essai : [période d'essai], renouvelable une fois.
Art. 4 — Obligations : exécution sérieuse, confidentialité et respect du règlement intérieur.
Art. 5 — Affiliation : l'employeur immatricule le salarié à la CNSS avant l'embauche.
Art. 6 — Repos : repos hebdomadaire et congés légaux conformément au Code du travail.
Art. 7 — Rupture : conforme aux dispositions du Code du travail.

Établi en deux exemplaires.

Employeur : ____________    Salarié : ____________`,
  },

  "contrat-domestique": {
    ar: `عقد عمل لمنتوج الخدمات المنزلية

حرر هذا العقد بمدينة [المدينة] في: [التاريخ]، بين:

المشغل: [اسم المشغل]، الساكن بـ [عنوان السكن]؛
العامل(ة): [اسم العامل المنزلي]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقته].

المادة 1 — المهام: يؤدي العامل(ة) المهام المنزلية التالية: [طبيعة المهام].
المادة 2 — الأجر: حدد الأجر الشهري في [الأجر والسكن] درهم، مع توفير [السكن/الطعام] حسب الاتفاق.
المادة 3 — الراحة: يستفيد العامل(ة) من راحة أسبوعية لا تقل عن [راحة الأسبوع] والرخص القانونية.
المادة 4 — التسجيل: يلتزم المشغل بتسجيل العامل(ة) بالضمان الاجتماعي.
المادة 5 — الاحترام المتبادل وكرامة العمل.

حُرر من نسختين.

المشغل: ____________    العامل(ة): ____________`,
    fr: `CONTRAT DE TRAVAIL DOMESTIQUE

Conclu à [Ville], le [Date], entre :

L'employeur : [nom], résidant à [adresse] ;
L'employé(e) : [nom], CIN n° [numéro].

Art. 1 — Tâches : [nature des tâches].
Art. 2 — Salaire : fixé à [montant] dirhams mensuels, avec [logement/nourriture] selon accord.
Art. 3 — Repos : repos hebdomadaire d'au moins [durée] et congés légaux.
Art. 4 — L'employeur immatricule l'employé(e) à la sécurité sociale.
Art. 5 — Respect mutuel et dignité du travail.

Établi en deux exemplaires.

Employeur : ____________    Employé(e) : ____________`,
  },

  "demande-revision-nafaqa": {
    ar: `المملكة المغربية
محكمة الأسرة بـ [المدينة]

من: [اسم الملتمِس] — رقم البطاقة الوطنية: [رقم بطاقته]
ضد: [اسم الملتمَس ضده]

الموضوع: طلب مراجعة النفقة المحكوم بها

تشريفياً،

بناءً على الحكم الصادر عن محكمتكم بتاريخ [التاريخ] في الملف رقم [رقم حكم النفقة] القاضي بتحميل النفقة، ألتمس من سيادتكم [الغرض: زيادة/تخفيض] النفقة إلى [المبلغ] درهم شهرياً.

وذلك لتعليل [تعليل الطلب: تغير الظروف المادية، تكاليف الدراسة...].

وأرفق طلبي هذا بالوثائق المثبثة، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
Tribunal de la famille de [Ville]

De : [nom du demandeur] — CIN n° [numéro]
Contre : [nom de la partie adverse]

Objet : Demande de révision de la pension alimentaire

Monsieur le Président,

En application du jugement rendu par votre tribunal le [date], dossier n° [référence], je sollicite la [objet : augmentation/réduction] de la pension à [montant] dirhams mensuels.

Ce, pour les motifs suivants : [motifs].

Les justificatifs sont joints ; je reste à votre disposition.

Veuillez agréer l'expression de ma haute considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "demande-acte-deces": {
    ar: `المملكة المغربية
وزارة الداخلية — مصلحة الحالة المدنية بجماعة [المدينة]

من: [اسم طالب النسخة] — رقم البطاقة الوطنية: [رقم بطاقته]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) رئيس جماعة [المدينة]

الموضوع: طلب تسليم نسخة من رسم الوفاة

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بتسليمه [عدد] نسخة من رسم وفاة:
- اسم المتوفى: [اسم المتوفى]
- تاريخ ومكان الوفاة: [تاريخ ومكان الوفاة]

 وذلك لأغراض [الغرض: تركة، ملف إداري...].

وأرفق طلبي هذا بوثائق الإثبات المطلوبة.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
Ministère de l'Intérieur — État civil de [commune]

De : [nom du demandeur] — CIN n° [numéro]
Habite à : [adresse]

À Monsieur le Président de la commune de [commune]

Objet : Demande d'acte de décès

Monsieur le Président,

Le soussigné sollicite la délivrance de [nombre] copie(s) de l'acte de décès de :
- Nom du défunt : [nom]
- Date et lieu du décès : [date et lieu]

à des fins de [motif : succession, dossier...].

Les pièces justificatives sont jointes.

Veuillez agréer l'expression de ma haute considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "pv-ag-ordinaire": {
    ar: `محضر الجمع العام العادي

جمعية: [اسم الجمعية] — التسجيل رقم [رقم التسجيل]

انعقد الجمع العام العادي لجمعية [اسم الجمعية] بتاريخ [تاريخ ومكان الانعقاد] بمقرها [العنوان الكامل]، بحضور [عدد الحاضرين] عضواً.

وتداول في نقاط جدول الأعمال التالية:
[نقاط جدول الأعمال: تقرير الأمانة العامة، التقرير المالي، انتخاب/تجديد المكتب...]

النتائج:
- المصادقة على التقارير بـ [نتائج التصويت]؛
- انتخاب المكتب الجديد المكون من: [أسماء المكتب الجديد].

حرر هذا المحضر بـ [المدينة] في: [التاريخ]

رئيس الجلسة: ____________    الكاتب العام: ____________`,
    fr: `PROCÈS-VERBAL DE L'ASSEMBLÉE GÉNÉRALE ORDINAIRE

Association : [nom] — enregistrement n° [numéro]

L'assemblée générale ordinaire s'est réunie le [date et lieu] au siège, [adresse], en présence de [membres présents] membres.

Ordre du jour :
[points : rapport moral, rapport financier, renouvellement du bureau...]

Résultats :
- approbation des rapports par [résultats des votes] ;
- élection du bureau : [composition du bureau].

Fait à [Ville], le [Date]

Président de séance : ____________    Secrétaire général : ____________`,
  },

  "demande-subvention": {
    ar: `المملكة المغربية

من: جمعية [اسم الجمعية] — التسجيل رقم [رقم التسجيل]
يمثلها رئيسها: [اسم الرئيس] — الهاتف: [رقم هاتف للتواصل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب دعم مالي لأنشطة الجمعية

تشريفياً،

تلتمس جمعية [اسم الجمعية]، التي تشتغل في مجال [وصف الأنشطة]، من سيادتكم التكرم بمنحها دعماً مالياً بمبلغ [المبلغ المطلوب] درهم لإنجاز برنامجها المتمثل في [وجه استعماله].

وأرفق الطلب بالوثائق المطلوبة، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: الرئيس`,
    fr: `Royaume du Maroc

De : l'association [nom] — enregistrement n° [numéro]
Représentée par son président : [nom] — Tél : [numéro]

À Monsieur/Madame [Destinataire]

Objet : Demande de subvention

Monsieur/Madame,

L'association [nom], active dans [description des activités], sollicite un soutien financier de [montant] dirhams pour la réalisation de son programme [affectation].

Le dossier complet est joint ; je reste à votre disposition.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature : le président`,
  },

  "statuts-cooperative": {
    ar: `النظام الأساسي لتعاونية [اسم التعاونية]

الباب الأول — التأسيس والأهداف
المادة 1: تأسست تعاونية [اسم التعاونية] بمقر [مقرها]، وتهدف إلى [هدفها].

الباب الثاني — العضوية
المادة 2: يمكن الانخراط فيها لكل [الشرائح المعنية]، بعد أداء حصة الأسهم البالغة [مبلغ الأسهم] درهم.

الباب الثالث — الأجهزة
المادة 3: تسيّر التعاونية هيئات: الجمع العام، مجلس الإدارة المكون من [أسماء الأعضاء المؤسسين/الأعضاء]، ورقابة اللجنة.

الباب الرابع — الموارد
المادة 4: تتكون مواردها من حصص الأعضاء وإيرادات الأنشطة والدعم الممنوح.

حرر بـ: [المدينة] في: [التاريخ]

المؤسسون: ____________`,
    fr: `STATUTS DE LA COOPÉRATIVE [nom]

Titre I — Constitution et objet
Art. 1 : la coopérative [nom], siège à [siège], a pour objet [objet].

Titre II — Adhésion
Art. 2 : peut adhérer tout [catégories], après versement de parts de [montant] dirhams.

Titre III — Organes
Art. 3 : elle est administrée par l'assemblée générale, le conseil d'administration composé de [membres], et la commission de contrôle.

Titre IV — Ressources
Art. 4 : ressources composées des parts, des revenus d'activité et des subventions.

Fait à [Ville], le [Date]

Les fondateurs : ____________`,
  },

  "iltizam-binaa": {
    ar: `التزام بالبناء وفق الرخصة

أنا الموقع(ة) أدناه: [اسم المعني]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، مالك(ة) البقعة الكائنة بـ [عنوان البقعة].

ألتزم بشرفي بأن أنجز أشغال البناء طبقاً لرخصة البناء رقم [رقم رخصة البناء] المسلمة بتاريخ [التاريخ]، دون أي تغيير في التصاميم أو الزيادة في الأدوار أو البنية.

كما ألتزم بإنهاء الأشغال داخل أجل [مدة الإنجاز]، واحترام قواعق السلامة والجوار.

وأتحمل ما يترتب عن الإخلال بهذا الالتزام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ENGAGEMENT DE CONSTRUIRE CONFORMÉMENT AU PERMIS

Je soussigné(e) : [nom], CIN n° [numéro], propriétaire du lot sis à [adresse],

m'engage à réaliser les travaux conformément au permis de construire n° [numéro] délivré le [date], sans modification des plans, surélévation ni extension.

Je m'engage également à achever les travaux dans un délai de [délai], dans le respect des règles de sécurité et du voisinage.

J'assume toute conséquence du non-respect du présent engagement.

Fait à [Ville], le [Date]

Signature :`,
  },

  "demande-regularisation": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها] — الوكالة الحضرية/مصلحة التعمير

الموضوع: طلب تسوية بناء غير قانوني

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بقبول طلبه لرخصة تسوية البناء المتمثل في [وصف البناء ومساحته] الكائن بـ [عنوان البناء]، المنجز بتاريخ [تاريخ الإنجاز] دون رخصة بناء.

وذلك تطبيقاً للمساطر الجاري بها العمل في هذا الشأن، مع إرفاق الوثائق المطلوبة.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — CIN n° [N° CIN]
Habite à : [Adresse complète]

À [Destinataire] — Agence urbaine / urbanisme

Objet : Demande de régularisation de construction

Monsieur/Madame,

Le soussigné sollicite un permis de régularisation de la construction décrite comme [description et superficie], sise à [adresse], achevée le [date d'achèvement] sans permis de construire.

Ce, conformément à la réglementation en vigueur, les pièces requises étant jointes.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "reconnaissance-dette": {
    ar: `إقرار بالدين

أنا الموقع(ة) أدناه: [اسم المدين]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقته]، الساكن(ة) بـ [العنوان الكامل].

أقر بأنني مدينة(ة) للسيد(ة) [اسم الدائن] بمبلغ [مبلغ الدين] درهم، وذلك عن [سبب الدين].

أتعهد بأداء هذا المبلغ [طريقة الأداء: دفعة واحدة/أقساط...] في أجل أقصاه [تاريخ الاستحقاق].

وفي حالة التأخر أتحمل ما تقرره الجهات المختصة من إجراءات.

حُرر من نسختين بـ [المدينة] في: [التاريخ]

المدين: ____________    الدائن: ____________`,
    fr: `RECONNAISSANCE DE DETTE

Je soussigné(e) : [nom du débiteur], CIN n° [numéro], résidant à [adresse],

reconnais devoir à [nom du créancier] la somme de [montant] dirhams, à raison de [cause de la dette].

Je m'engage à rembourser ce montant [modalités] au plus tard le [échéance].

En cas de retard, j'accepte les mesures prévues par les autorités compétentes.

Établi en deux exemplaires à [Ville], le [Date]

Débiteur : ____________    Créancier : ____________`,
  },

  "avis-legal": {
    ar: `إعلان قانوني

[اسم الشركة وشكلها القانوني] برأسمال [رأسمالها] درهم، مقرها [المقر الاجتماعي]، مسجلة بالسجل التجاري تحت رقم [رقم السجل التجاري]،يمثلها [أسماء المسيرين].

يعلن بمقتضى هذا الإشهار عن [نوع الإعلان: تأسيس الشركة / تعديل النظام الأساسي / تغيير المسيرين...].

حرر بـ: [المدينة] في: [التاريخ]`,
    fr: `AVIS LÉGAL

[Dénomination et forme juridique], au capital de [capital] dirhams, siège [siège], immatriculée au registre du commerce sous le n° [numéro], représentée par [gérants].

Par le présent avis est porté à la connaissance du public : [objet de l'avis : constitution / modification statutaire / changement de gérance...].

Fait à [Ville], le [Date]`,
  },

  "pointage": {
    ar: `ورقة حضور العمال — الأسبوع من [التاريخ] إلى [التاريخ]
الورش: [اسم الورش]

اليوم | [اسم العامل 1] | [اسم العامل 2] | [اسم العامل 3]
الاثنين: .... | .... | ....
الثلاثاء: .... | .... | ....
الأربعاء: .... | .... | ....
الخميس: .... | .... | ....
الجمعة: .... | .... | ....
السبت: .... | .... | ....

المجموع بالساعات: [ساعات العمل]
ملاحظات: [ملاحظات]

إمضاء العمال: ____________
مسير الورش: ____________`,
    fr: `FEUILLE DE POINTAGE — Semaine du [date] au [date]
Chantier : [nom]

Jour | [ouvrier 1] | [ouvrier 2] | [ouvrier 3]
Lundi : .... | .... | ....
Mardi : .... | .... | ....
Mercredi : .... | .... | ....
Jeudi : .... | .... | ....
Vendredi : .... | .... | ....
Samedi : .... | .... | ....

Total heures : [heures]
Observations : [notes]

Signatures des ouvriers : ____________
Chef de chantier : ____________`,
  },

  "declaration-auto-entrepreneur": {
    ar: `تصريح بالشرف للمفوتر الذاتي

أنا الموقع(ة) أدناه: [الاسم الكامل]، مسجل(ة) في نظام المفوتر الذاتي تحت رقم [رقم التسجيل كمفوتر ذاتي]، ومزاول(ة) نشاط [طبيعة النشاط].

أصرح بشرفي بأن مبلغ الداخل برسم الفترة [الفترة المعنية] بلغ [المبلغ] درهم، وأنني لم أزد سقف النظام المعمول به.

وأتحمل مسؤولية هذا التصريح كاملة.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION SUR L'HONNEUR — AUTO-ENTREPRENEUR

Je soussigné(e) : [Nom complet], inscrit(e) au régime auto-entrepreneur sous le n° [numéro], exerçant l'activité de [activité],

déclare sur l'honneur que le chiffre d'affaires de la période [période] s'élève à [Montant] dirhams, sans dépassement du plafond du régime.

J'assume l'entière responsabilité de la présente déclaration.

Fait à [Ville], le [Date]

Signature :`,
  },

  "fiche-paie": {
    ar: `ورقة الأجر — شهر [التاريخ]
المقاولة: [اسم المقاولة]
الأجير: [اسم الأجير] — رقم CNSS: [رقم تسجيله CNSS] — الوظيفة: [الوظيفة]

الأجر الأساسي: [الأجر الأساسي] درهم
الساعات الإضافية: [الساعات الإضافية] — تعويضات: [المبلغ]
مجموع الإجمالي: [المبلغ] درهم

الاقتطاعات:
- CNSS: [المبلغ] درهم
- الضريبة على الدخل: [اقتطاع CNSS والضريبة] درهم

الصافي للأداء: [الأجر الصافي] درهم

توقيع الأجير: ____________`,
    fr: `BULLETIN DE PAIE — Mois de [Date]
Entreprise : [nom]
Salarié : [nom] — CNSS n° [numéro] — Poste : [poste]

Salaire de base : [montant] MAD
Heures supplémentaires : [heures] — indemnités : [montant]
Total brut : [montant] MAD

Retenues :
- CNSS : [montant] MAD
- Impôt sur le revenu : [montant] MAD

Net à payer : [montant] MAD

Signature du salarié : ____________`,
  },

  "amo-ald": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم التسجيل CNSS: [رقم التسجيل CNSS]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها] — وكالة CNSS

الموضوع: طلب الاستفادة من التغطية الشاملة (ALD)

تشريفياً،

يلتمس منكم الموقع(ة) أسفله الاستفادة من التغطية الشاملة للمرض المزمن المعني بـ [المرض المعني]، وذلك بعد متابعة طويلة مع [تقرير الطبيب المعالج].

وأرفق الطلب بالتقارير الطبية والوثائق المطلوبة، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — N° CNSS : [numéro]
Habite à : [adresse]

À [Destinataire] — Agence CNSS

Objet : Demande de prise en charge ALD

Monsieur/Madame,

Le soussigné sollicite le bénéfice de la couverture intégrale de l'affection de longue durée [maladie], après suivi prolongé auprès de [médecin traitant].

Les rapports médicaux et pièces requises sont joints.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "feuille-soins": {
    ar: `ورقة العلاج

المؤمن له: [اسم المؤمن له] — رقم التسجيل: [رقم التسجيل]

لقد أقدمت بتاريخ [تاريخ العلاج] على العلاج التالي:
- الطبيب المعالج: [اسم الطبيب]
- وصف العلاج: [وصف العلاج]
- المصاريف: [المصاريف بالدرهم] درهم

أرفق بهذه الورقة الفواتير والوصفات، وألتمس التكرم بتعويضي عنها طبقاً للنظام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `FEUILLE DE SOINS

Assuré(e) : [nom] — N° d'immatriculation : [numéro]

J'ai bénéficié le [date des soins] des soins suivants :
- Médecin traitant : [nom du médecin]
- Nature des soins : [description]
- Frais : [montant] dirhams

Factures et ordonnances jointes ; je sollicite le remboursement conformément au régime.

Fait à [Ville], le [Date]

Signature :`,
  },

  "demande-pension": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم التسجيل CNSS: [رقم التسجيل CNSS]
المولود(ة) بتاريخ: [تاريخ الولادة]

إلى السيد(ة) [الجهة الموجهة إليها] — وكالة CNSS

الموضوع: طلب معاش الشيخوخة

تشريفياً،

يلتمس منكم الموقع(ة) أسفله، الذي اشتغل لدى [آخر مشغل] خلال [مدة الاشتراك]، الاستفادة من معاش الشيخوخة طبقاً للنظام.

وأرفق الطلب برسم الولادة وشهادات العمل، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — N° CNSS : [numéro]
Né(e) le : [date de naissance]

À [Destinataire] — Agence CNSS

Objet : Demande de pension de retraite

Monsieur/Madame,

Ayant travaillé chez [dernier employeur] durant [période de cotisation], le soussigné sollicite le bénéfice de la pension de vieillesse conformément au régime.

Acte de naissance et attestations de travail joints.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "demande-prestations-familiales": {
    ar: `المملكة المغربية

من: [اسم المؤمن له] — رقم التسجيل CNSS: [رقم التسجيل CNSS]

إلى السيد(ة) [الجهة الموجهة إليها] — وكالة CNSS

الموضوع: طلب التعويضات العائلية عن مولود جديد

تشريفياً،

يلتمس منكم الموقع(ة) أسفله الاستفادة من التعويضات العائلية، وذلك بعد ولادة [اسم المولود وتاريخ ميلاده]، ليصبح عدد أطفالي المكفولين [عدد الأطفال المكفولين].

وأرفق الطلب برسم ولادة المولود، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [nom de l'assuré] — N° CNSS : [numéro]

À [Destinataire] — Agence CNSS

Objet : Demande de prestations familiales (naissance)

Monsieur/Madame,

Le soussigné sollicite le bénéfice des prestations familiales à la suite de la naissance de [nom du nouveau-né et date], portant le nombre d'enfants à charge à [nombre].

Acte de naissance joint ; je reste à votre disposition.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "cnops-ayants-droit": {
    ar: `المملكة المغربية

من: [اسم الموظف] — رقم التسجيل CNOPS: [رقم التسجيل CNOPS]
الوظيفة: [الوظيفة]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب إضافة ذوي الحقوق للتغطية الصحية

تشريفياً،

يلتمس منكم الموقع(ة) أسفله إضافة ذوي حقوقه التاليين:
[أسماء ذوي الحقوق] — [صلتهم]

إلى ملف التغطية الصحية، وذلك طبقاً للنظام المعمول به لدى CNOPS.

وأرفق الطلب بالوثائق المطلوبة [الوثائق المرفقة].

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [nom du fonctionnaire] — N° CNOPS : [numéro]
Poste : [poste]

À [Destinataire]

Objet : Demande d'ajout d'ayants droit

Monsieur/Madame,

Le soussigné sollicite l'ajout de ses ayants droit :
[noms] — [lien de parenté]

à son dossier de couverture santé, conformément au régime CNOPS.

Les pièces requises [documents] sont jointes.

Veuillez agréer l'expression de ma considération.

Fait à [Ville], le [Date]

Signature :`,
  },

  "procedure-vignette": {
    ar: `مسطرة أداء رسوم السيارة (الفيينيت)

الخطوات:
1) الدخول إلى بوابة الخزينة العامة tgr.gov.ma أو التوجه لوكالة أداء معتمدة؛
2) إدخال لوحة المركبة [لوحة المركبة] وتحميل المبلغ تلقائياً حسب [نوع الوقود] وقدم المركبة ([قدم المركبة])؛
3) الأداء إلكترونياً أو بالوكالة؛ المبلغ: [المبلغ] درهم؛
4) طباعة الوصل وإلصاقه بالزجاج قبل 28 فبراير، تفادياً للغرامة.

ملاحظة: هذه الرسوم سنوية إلزامية عن جميع المركبات ذات محرك.`,
    fr: `PROCÉDURE DE PAIEMENT DE LA VIGNETTE

Étapes :
1) se rendre sur le portail de la TGR (tgr.gov.ma) ou dans une agence agréée ;
2) saisir l'immatriculation [numéro] ; le montant est calculé selon [carburant] et l'âge du véhicule ([âge]) ;
3) payer en ligne ou en agence ; montant : [Montant] dirhams ;
4) imprimer le justificatif et l'apposer au pare-brise avant fin février pour éviter l'amende.

N.B. : taxe annuelle obligatoire pour tout véhicule à moteur.`,
  },

  "procedure-societe": {
    ar: `مسطرة تأسيس شركة مغربية

الخطوات:
1) التحقق من التسمية [اسم الشركة المقترح] عبر منصة OMPIC؛
2) تحرير النظام الأساسي حسب [شكلها القانوني] برأسمال [رأسمالها] لممارسة [النشاط]؛
3) التسجيل بالسجل التجاري عبر OMPIC؛
4) التسجيل الضريبي والانخراط في CNSS؛
5) نشر إعلان قانوني بالجرائد المختصة.

مدة الاستخراج عادة من 24 إلى 48 ساعة عبر المنصة.`,
    fr: `PROCÉDURE DE CRÉATION DE SOCIÉTÉ AU MAROC

Étapes :
1) vérifier la disponibilité de la dénomination [nom] sur la plateforme OMPIC ;
2) rédiger les statuts selon la forme [forme juridique], capital [capital], activité [activité] ;
3) immatriculer au registre du commerce via OMPIC ;
4) enregistrement fiscal et affiliation CNSS ;
5) publier un avis légal dans un journal d'annonces légales.

Délai habituel : 24 à 48 h via la plateforme.`,
  },

  "procedure-mre": {
    ar: `مسطرة السجل العدلي للمغاربة بالخارج (B3)

الخطوات:
1) الدخول إلى بوابة السجل العدلي الإلكتروني casierjudiciaire.justice.gov.ma؛
2) التسجيل بـ [رقم البطاقة أو جواز السفر] و[البريد الإلكتروني]؛
3) تعبئة [بلد الإقامة] و[عنوان التوصيل]؛
4) إرسال الطلب ومتابعته بنفس البوابة؛

يصل السجل بالبريد أو يُحمّل إلكترونياً دون تنقل.
ملاحظة: الخدمة مجانية رسمياً.`,
    fr: `PROCÉDURE DU CASIER JUDICIAIRE DES MRE (B3)

Étapes :
1) accéder au portail casierjudiciaire.justice.gov.ma ;
2) s'inscrire avec le [numéro de pièce] et [email] ;
3) renseigner le pays de résidence et l'adresse de livraison ;
4) envoyer la demande et suivre son traitement sur le même portail.

Le bulletin parvient par courrier ou se télécharge à distance.
N.B. : service officiel et gratuit.`,
  },

  "resiliation-bail": {
    ar: `فسخ عقد كراء بالتراضي

حرر هذا الاتفاق بـ [المدينة] في: [التاريخ]، بين:

المكري: [اسم المكري]؛
المكتري: [اسم المكتري]، الطرفان في عقد كراء السكن/المحل الكائن بـ [عنوان العقار] المؤرخ في [تاريخ العقد الأصلي].

اتفق الطرفان بتراضيهما على:
- فسخ عقد الكراء بتاريخ [تاريخ الفسخ]؛
- تسليم العين مكتراة خالية في نفس التاريخ؛
- [ترتيبات الضمان: تسليم الضمان كاملاً/خصم...].

حُرر من نسختين، نسخة لكل طرف.

المكري: ____________    المكتري: ____________`,
    fr: `RÉSILIATION AMIABLE DU BAIL

Convenue à [Ville], le [Date], entre :

Bailleur : [nom] ;
Locataire : [nom], parties au bail du logement/local sis à [adresse], daté du [date du bail initial].

Les parties conviennent d'un commun accord de :
- résilier le bail à compter du [date de résiliation] ;
- restituer le local vide à cette date ;
- [dispositions sur la caution : restitution intégrale/déduction...].

Établi en deux exemplaires.

Bailleur : ____________    Locataire : ____________`,
  },

  "resiliation-travail": {
    ar: `فسخ عقد عمل بالتراضي

حرر هذا الاتفاق بـ [المدينة] في: [التاريخ]، بين:

المشغل: [اسم المشغل]؛
الأجير: [اسم الأجير] — الوظيفة: [الوظيفة]، الطرفان في عقد عمل مؤرخ في [تاريخ العقد].

اتفق الطرفان على:
- إنهاء علاقة العمل بتاريخ [تاريخ الفسخ]؛
- أداء مستحقات نهاية العمل المتمثلة في [التعويضات المتفق عليها]؛
- تسليم شهادة العمل وكل الوثائق في نفس اليوم.

حُرر من نسختين.

المشغل: ____________    الأجير: ____________`,
    fr: `RUPTURE CONVENTIONNELLE DU CONTRAT DE TRAVAIL

Convenue à [Ville], le [Date], entre :

Employeur : [nom] ;
Salarié : [nom] — poste : [poste], parties au contrat de travail daté du [date].

Les parties conviennent de :
- mettre fin à la relation de travail au [date de rupture] ;
- régler les droits de fin de relation : [indemnités convenues] ;
- remettre le certificat de travail le même jour.

Établi en deux exemplaires.

Employeur : ____________    Salarié : ____________`,
  },

  "resiliation-assurance": {
    ar: `طلب فسخ عقد تأمين

من: [اسم المؤمن له] — رقم العقد: [رقم العقد]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها] — شركة التأمين

الموضوع: فسخ عقد تأمين [نوع التأمين] رقم [رقم العقد]

تشريفياً،

يلتمس منكم الموقع(ة) أسفله فسخ عقد التأمين المذكور ابتداء من [تاريخ التوقف المطلوب]، وذلك لسبب [سبب الفسخ].

كما ألتمس استرجاع ما تبقى من الأقساط عن المدة غير المستعملة، طبقاً للقانون.

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DEMANDE DE RÉSILIATION D'ASSURANCE

De : [nom] — police n° [numéro]
Habite à : [adresse]

À [Destinataire] — compagnie d'assurance

Objet : Résiliation de la police [type] n° [numéro]

Madame, Monsieur,

Le soussigné sollicite la résiliation de la police précitée à compter du [date d'arrêt], pour [motif].

Je demande également le remboursement au prorata des primes de la période non couverte, conformément à la loi.

Veuillez agréer mes salutations distinguées.

Fait à [Ville], le [Date]

Signature :`,
  },

  "resiliation-internet": {
    ar: `طلب فسخ اشتراك الإنترنت/الاتصالات

من: [اسم المشترك] — رقم الاشتراك: [رقم الاشتراك]
عنوان التركيب: [عنوان التركيب]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: إيقاف اشتراك الإنترنت/الهاتف رقم [رقم الاشتراك]

تشريفياً،

يلتمس منكم الموقع(ة) أسفله إيقاف الاشتراك المذكور ابتداء من [تاريخ التوقف المطلوب]، وذلك لسبب [سبب الإيقاف].

كما أطلب تعطيل الفوترة من نفس التاريخ، [وإن رغبت: مع حفظ الرقم/دون حفظ الرقم].

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DEMANDE DE RÉSILIATION D'ABONNEMENT

De : [nom] — abonnement n° [numéro]
Adresse d'installation : [adresse]

À [Destinataire]

Objet : Résiliation de l'abonnement n° [numéro]

Madame, Monsieur,

Le soussigné sollicite la résiliation de l'abonnement précité à compter du [date d'arrêt], pour [motif].

Je demande en outre la cessation de la facturation à la même date, [le cas échéant : avec/sans portabilité du numéro].

Veuillez agréer mes salutations distinguées.

Fait à [Ville], le [Date]

Signature :`,
  },

  "tanazol-vehicule": {
    ar: `عقد تنازل عن مركبة

حرر هذا العقد بـ [المدينة] في: [التاريخ]، بين:

المتنازل: [اسم المتنازل] — بطاقة تعريف وطنية رقم [رقم بطاقته]؛
المتنازل له: [اسم المتنازل له] — بطاقة تعريف وطنية رقم [رقم بطاقة المتنازل له].

تنازل الطرف الأول بمقتضى هذا العقد عن المركبة من نوع [بيانات المركبة] لوحتها [بيانات المركبة]، مقابل [الثمن إن وجد] درهم، وأصبحت ملكاً خالصاً للطرف الثاني.

ويلتزم الطرفان بتقديم هذا العقد لوكالة التسجيل خلال أجل 30 يوماً لنقل الملكية، ويتحمل المتنازل له المسؤولية من هذا التاريخ.

حُرر من نسختين.

المتنازل: ____________    المتنازل له: ____________`,
    fr: `ACTE DE CESSION DE VÉHICULE

Établi à [Ville], le [Date], entre :

Cédant : [nom] — CIN n° [numéro] ;
Cessionnaire : [nom] — CIN n° [numéro].

Le cédant cède par les présentes le véhicule [données], plaque [plaque], contre [prix le cas échéant] dirhams ; il devient la propriété exclusive du cessionnaire.

Les parties s'engagent à présenter l'acte à l'agence d'immatriculation sous 30 jours pour le transfert ; le cessionnaire assume la responsabilité dès ce jour.

Établi en deux exemplaires.

Cédant : ____________    Cessionnaire : ____________`,
  },

  "tanazol-bail": {
    ar: `تنازل عن عقد كراء

حرر هذا العقد بـ [المدينة] في: [التاريخ]، بين:

المكري: [اسم المكري] (الموافق)؛
المكتري الأصلي (المتنازل): [المكتري الأصلي]؛
المكتري الجديد (المتنازل له): [المكتري الجديد].

تنازل الطرف الثاني بموافقة الطرف الأول عن عقد كراء [عنوان العقار] المؤرخ في [التاريخ] لفائدة الطرف الثالث، بشروط [شروط التنازل: تسليم الضمان...].

حُرر من ثلاث نسخ، نسخة لكل طرف.

التواقيع: ____________ ____________ ____________`,
    fr: `CESSION DU BAIL

Établi à [Ville], le [Date], entre :

Bailleur (accordant) : [nom] ;
Locataire sortant (cédant) : [nom] ;
Nouveau locataire (cessionnaire) : [nom].

Le locataire sortant cède, avec l'accord du bailleur, le bail du bien sis à [adresse], daté du [date], au nouveau locataire, aux conditions [conditions de la cession].

Établi en trois exemplaires.

Signatures : ____________ ____________ ____________`,
  },

  "tanazol-droits": {
    ar: `تنازل عن مستحقات

أنا الموقع(ة) أدناه: [اسم المتنازلة/المتنازل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقته]، الساكن(ة) بـ [العنوان الكامل].

تنازلت بمقتضى هذا السند عن [المستحقات المتنازل عنها] المستحقة لي من السيد(ة) [اسم الطرف الآخر]، وذلك بعد [سياق التنازل: صلح، اتفاق...].

مع بقاء [بقاء حق الزيارة: حق الزيارة والاطلاع على الأبناء...] كما هو دون مساس به.

ولا يجوز الرجوع في هذا التنازل إلا بتراضي الطرفين.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `RENONCIATION À DES DROITS

Je soussignée(e) : [nom], CIN n° [numéro], résidant à [adresse],

renonce par les présentes à [droits renoncés] qui me sont dus par [nom de l'autre partie], à la suite de [contexte].

Le droit de [maintien du droit de visite] demeure intact.

La présente renonciation ne peut être remise en cause qu'avec l'accord des deux parties.

Fait à [Ville], le [Date]

Signature :`,
  },
};
