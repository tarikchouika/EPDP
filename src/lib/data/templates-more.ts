// Templates for documents-more (phase 2 — part A).
// Professional wording authored for EPDP following the standard
// Moroccan administrative letter format. Placeholders use [..] tokens.
import type { DocTemplate } from "./templates";

export const templatesMore: Record<string, DocTemplate> = {
  "demande-passeport": {
    ar: `المملكة المغربية
وزارة الداخلية — المديرية العامة للشرطة الوطنية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]
الهاتف: [الهاتف]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب الحصول على جواز السفر البيومتري

تشريفياً،

يتشرف الموقع(ة) أسفله أن يلتمس من سيادتكم التكرم بقبول طلبه لإصدار جواز سفر بيومتري من نوع [التفاصيل: عادي/استعجالي]، وذلك لأغراض [الغرض من السفر].

أرفق طلبي هذا بالوثائق المطلوبة كاملة، وأظل رهن إشارتكم لأي معلومة إضافية.

وتفضلوا بقبول فائق عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: [الاسم الكامل]`,
    fr: `Royaume du Maroc
Ministère de l'Intérieur — Direction Générale de la Sûreté Nationale

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]
Téléphone : [Téléphone]

À Monsieur/Madame [Destinataire]

Objet : Demande de passeport biométrique

Monsieur/Madame,

Le soussigné a l'honneur de solliciter de votre haute bienveillance l'établissement d'un passeport biométrique de type [Détails : ordinaire/urgent], à des fins de [motif du voyage].

Je joins à ma demande l'ensemble des pièces requises et reste à votre disposition.

Veuillez agréer, Monsieur/Madame, l'expression de ma haute considération.

Fait à : [Ville], le [Date]

Signature : [Nom complet]`,
  },

  "demande-carte-grise": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب البطاقة الرمادية (تسليم/تجديد/نقل الملكية)

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بـ [التفاصيل: تسليم بطاقة رمادية جديدة / تجديدها / نقل ملكيتها] للمركبة التالية:
- النوع والطراز: [نوع المركبة وطرازها]
- رقم البطاقة الرمادية: [رقم البطاقة الرمادية]
- رقم الهيكل: [رقم الهيكل]

وأرفق الوثائق المطلوبة، وأظل رهن إشارتكم لأي توضيح.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]

À Monsieur/Madame [Destinataire]

Objet : Demande de carte grise (délivrance/renouvellement/transfert)

Monsieur/Madame,

Le soussigné sollicite [Détails : délivrance / renouvellement / transfert de propriété] de la carte grise du véhicule suivant :
- Type et marque : [type et marque]
- N° de carte grise : [numéro]
- N° de châssis : [numéro de châssis]

Les pièces requises sont jointes ; je reste à votre disposition.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "demande-permis-conduire": {
    ar: `المملكة المغربية
وزارة التجهيز والنقل

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]
الهاتف: [الهاتف]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب رخصة السياقة (صنف [صنف الرخصة المطلوبة])

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بقبول طلبه للحصول على رخصة سياقة، بعد اجتياز الاختبارات بنجاح ضمن ملف التسجيل رقم [رقم ملف التسجيل].

وأرفق الوثائق المطلوبة، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
Ministère de l'Équipement et du Transport

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]
Téléphone : [Téléphone]

À Monsieur/Madame [Destinataire]

Objet : Demande de permis de conduire (catégorie [catégorie])

Monsieur/Madame,

Le soussigné sollicite l'établissement d'un permis de conduire, après réussite des épreuves du dossier d'inscription n° [numéro de dossier].

Les pièces requises sont jointes ; je reste à votre disposition.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "demande-bourse": {
    ar: `المملكة المغربية

من: الطالب(ة) [الاسم الكامل]
رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
المؤسسة: [المؤسسة والشعبة]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب الاستفادة من المنحة

تشريفياً،

يلتمس الطالب(ة) الموقع(ة) أعلاه الاستفادة من منحة التعليم العالي برسم السنة الجامعية الحالية، علماً أن:
- معدل البكالوريا: [معدل البكالوريا]
- الوضعية الاجتماعية للأسرة: [الوضعية الاجتماعية للأسرة]

وذلك حسب الشروط المنظمة للمنح، مع إرفاق الوثائق المطلوبة.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : l'étudiant(e) [Nom complet]
N° CIN : [N° CIN]
Établissement : [établissement et filière]

À Monsieur/Madame [Destinataire]

Objet : Demande de bourse d'études

Monsieur/Madame,

L'étudiant(e) soussigné(e) sollicite le bénéfice d'une bourse de l'enseignement supérieur pour l'année universitaire en cours, sachant que :
- Moyenne du bac : [moyenne]
- Situation sociale de la famille : [situation]

Conformément à la réglementation des bourses, les pièces requises sont jointes.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "demande-diplome": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب تسليم نسخة مطابقة من دبلوم

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بتسليمه [عدد] نسخة(ات) مطابقة من دبلوم [الدبلوم المطلوب] المحرر سنة [سنة نيله]، وذلك لأغراض [سبب الطلب].

وأظل رهن إشارتكم لأي توضيح.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]

À Monsieur/Madame [Destinataire]

Objet : Demande de copie conforme de diplôme

Monsieur/Madame,

Le soussigné sollicite la délivrance de [nombre] copie(s) conforme(s) du diplôme de [diplôme] obtenu en [année], à des fins de [motif].

Je reste à votre disposition pour tout complément.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "demande-restitution": {
    ar: `المملكة المغربية
[المحكمة الابتدائية لـ ...]

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب استرجاع أشياء محجوزة

تشريفياً،

يلتمس منكم الموقع(ة) أسفله التكرم بالأمر باسترجاع [وصف الأشياء المحجوزة] المحجوزة بموجب [مرجع الحجز]، وذلك بعد زوال أسباب الحجز.

وأظل رهن إشارتكم لأي توضيح.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
[Tribunal de première instance de ...]

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]

À Monsieur/Madame [Destinataire]

Objet : Demande de restitution d'objets saisis

Monsieur/Madame,

Le soussigné sollicite la restitution de [description des objets] saisis en vertu de [référence de la saisie], les causes de la saisie ayant disparu.

Je reste à votre disposition pour tout complément.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "demande-inscription-scolaire": {
    ar: `المملكة المغربية
[اسم المؤسسة التعليمية]

من: ولي التلميذ(ة) [اسم الولي] — رقم البطاقة الوطنية: [رقم بطاقة الولي]
الساكن بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: طلب تسجيل التلميذ(ة) بالمؤسسة

تشريفياً،

يلتمس منكم الوالي الموقع أعلاه التكرم بتسجيل ابنه/ابنته:
- الاسم: [اسم التلميذ وتاريخ ميلاده]
- المستوى: [المستوى الدراسي]

بمؤسستكم برسم السنة الدراسية الحالية، مع إرفاق نسخة من رسم الولادة وشهادة السكنى.

وتفضلوا بقبول عبارات التقدير والاحترام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
[Nom de l'établissement]

De : le tuteur de l'élève [Nom du tuteur] — N° CIN : [numéro]
Habite à : [Adresse complète]

À Monsieur/Madame [Destinataire]

Objet : Demande d'inscription scolaire

Monsieur/Madame,

Le tuteur soussigné sollicite l'inscription de son enfant :
- Nom : [nom et date de naissance]
- Niveau : [niveau]

dans votre établissement pour l'année scolaire en cours, avec copie de l'acte de naissance et attestation de résidence jointes.

Veuillez agréer l'expression de ma considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "chikaya-narsa": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]
الهاتف: [رقم هاتف للتواصل]

إلى السيد(ة) [الجهة الموجهة إليها]

الموضوع: شكاية [وصف المشكل]

تشريفياً،

يشرفني أن أرفع إلى أنظاركم شكاية بشأن [وصف ما وقع] بتاريخ [تاريخ الواقعة]، وأرجو التكرم بالتدخل واتخاذ الإجراءات اللازمة.

وأظل رهن إشارتكم لأي توضيح، مع تحياتي.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]
Téléphone : [numéro]

À Monsieur/Madame [Destinataire]

Objet : Réclamation [objet]

Monsieur/Madame,

J'ai l'honneur de porter à votre connaissance une réclamation concernant [description], survenue le [date], et de solliciter votre intervention et les mesures nécessaires.

Je reste à votre disposition, avec mes salutations distinguées.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "chikaya-internet": {
    ar: `إلى السيد(ة) [الجهة الموجهة إليها]
[اسم مزود الخدمة]

من: [الاسم الكامل] — رقم الاشتراك: [رقم التعاقد/الاشتراك]
العنوان: [العنوان الكامل] — الهاتف: [رقم هاتف للتواصل]

الموضوع: شكاية [وصف الخلل وتاريخه]

تشريفياً،

أحيطكم علماً بأن الخدمة الموضوع اشتراكي المذكور أعلاه تعاني من [وصف العطل] منذ [التاريخ]، رغم تبليغاتي المتكررة لمصلحة الزبائن.

أرجو التكرم بإصلاح الخلل في أجل معقول، وبالتعويض عن مدة الانقطاع، وإلا اضطررت لممارسة حقي في الشكوى لدى الجهات المختصة.

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `À Monsieur/Madame [Destinataire]
[fournisseur]

De : [Nom complet] — N° d'abonnement : [numéro]
Adresse : [Adresse complète] — Téléphone : [numéro]

Objet : Réclamation [panne]

Madame, Monsieur,

Je vous informe que le service objet de mon abonnement connaît [description de la panne] depuis le [date], malgré mes appels répétés au service client.

Je vous demande de remédier au dysfonctionnement dans un délai raisonnable et de compenser la période d'interruption, faute de quoi j'exercerai mon droit de réclamation auprès des instances compétentes.

Veuillez agréer mes salutations distinguées.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "chikaya-consommation": {
    ar: `المملكة المغربية

من: [الاسم الكامل] — الهاتف: [رقم هاتف للتواصل]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد(ة) [الجهة الموجهة إليها] — [اسم المؤسسة وعنوانها]

الموضوع: شكاية [المنتوج/الخدمة المعنية]

تشريفياً،

بتاريخ [التاريخ] اشتريت من مؤسستكم [المنتوج/الخدمة المعنية] بمبلغ [المبلغ] درهم، وقد تبين لي بعد الاستعمال [وصف المشكل].

أرجو التكرم بإرجاع المنتوج أو إصلاحه أو تعويضي، طبقاً للقانون المنظم لحماية المستهلك، وأظل رهن إشارتكم.

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc

De : [Nom complet] — Téléphone : [numéro]
Habite à : [Adresse complète]

À Monsieur/Madame [Destinataire] — [nom et adresse de l'établissement]

Objet : Réclamation [produit/service]

Madame, Monsieur,

Le [date], j'ai acheté chez vous [produit/service] pour [Montant] dirhams, et il s'est révélé après usage : [description du problème].

Je vous demande le retour, la réparation ou le remboursement conformément à la loi sur la protection du consommateur. Je reste à votre disposition.

Veuillez agréer mes salutations distinguées.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "chikaya-cheque": {
    ar: `المملكة المغربية
النيابة العامة — المحكمة الابتدائية لـ [المدينة]

من الدائن: [الاسم الكامل] — رقم البطاقة الوطنية: [رقم البطاقة الوطنية]
الساكن(ة) بـ: [العنوان الكامل]

إلى السيد وكيل الملك

الموضوع: شكاية بشأن شيك بدون رصيد

تشريفياً،

أرفع إلى أنظاركم شكاية ضد السيد(ة) [اسم المسحوب عليه] الذي سحب عليّ بتاريخ [تاريخ الاستحقاق] الشيك رقم [رقم الشيك ومبلغه] درهم عن بنك [اسم البنك].

وقد قدمت الشيك للوفاء فأرجع بدون أداء لإخلال الرصيد، كما يشهد بذلك إشعار عدم الأداء المرفق.

ألتمس من سيادتكم التكرم بالأمر بما ترونه مناسباً لاستيفائي حقي وأداء ما ترتب من تعويض.

وتفضلوا بقبول عبارات التقدير.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `Royaume du Maroc
Parquet — Tribunal de première instance de [Ville]

Du créancier : [Nom complet] — N° CIN : [N° CIN]
Habite à : [Adresse complète]

À Monsieur le Procuteur du Roi

Objet : Plainte pour chèque sans provision

Monsieur le Procuteur,

Je porte à votre connaissance une plainte contre [nom du tiré] qui a tiré sur moi le [date d'échéance] le chèque n° [numéro et montant] dirhams sur la banque [banque].

Présenté au paiement, ce chèque m'a été retourné impayé pour défaut de provision, comme l'atteste le certificat de non-paiement ci-joint.

Je vous prie de bien vouloir ordonner ce qu'il convient pour le recouvrement de mon droit et l'indemnisation y afférente.

Veuillez agréer, Monsieur le Procuteur, l'expression de ma haute considération.

Fait à : [Ville], le [Date]

Signature :`,
  },

  "attestation-salaire": {
    ar: `[تسمية المقاولة]
[العنوان الكامل] — الهاتف: [الهاتف]

إشهاد بالأجر

نشهد نحن الموقعين أدناه، إدارة [تسمية المقاولة]، بأن السيد(ة) [اسم الأجير]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، يمارس لدينا وظيفة [الوظيفة] منذ [تاريخ التوظيف].

وقد بلغ أجره الشهري الإجمالي [المبلغ] درهم (ما يعادل [المبلغ] درهم صافياً بعد الاقتطاعات).

سلم هذا الإشهاد للمعني بالأمر ليقدمه لدى [الجهة الموجهة إليها].

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: [اسم المسؤول والمقاولة]`,
    fr: `[Raison sociale]
[Adresse complète] — Tél : [Téléphone]

ATTESTATION DE SALAIRE

Nous, soussignés, direction de [raison sociale], attestons que [nom du salarié], titulaire de la CIN n° [N° CIN], exerce chez nous en qualité de [poste] depuis [date d'embauche].

Son salaire mensuel brut s'élève à [Montant] dirhams (soit [Montant] dirhams nets après retenues).

La présente attestation est délivrée à l'intéressé(e) pour être présentée à [Destinataire].

Fait à [Ville], le [Date]

Signature : [nom du responsable]`,
  },

  "attestation-prise-charge": {
    ar: `إشهاد بالتكفل

أنا الموقع(ة) أدناه: [اسم المتكفل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، الساكن(ة) بـ [العنوان الكامل]، ومهنتي [مهنة المتكفل].

أشهد وأتعهد بأنني أتكفل كاملاً بمصاريف إقامة وسفر أخي/قريبي [اسم المستفيد وصلته] خلال زيارته لـ [وجهة السفر ومدته]، بما في ذلك التذكرة والإقامة والتأمين إن لزم.

سلم هذا الإشهاد ليقدم ضمن ملف التأشيرة لدى [الجهة الموجهة إليها].

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ATTESTATION DE PRISE EN CHARGE

Je soussigné(e) : [nom du garant], titulaire de la CIN n° [N° CIN], résidant à [Adresse complète], exerçant la profession de [profession].

Atteste et m'engage à prendre entièrement en charge les frais de séjour et de voyage de mon/frère proche [nom du bénéficiaire et lien] lors de son voyage à [destination et durée], y compris billet, hébergement et assurance le cas échéant.

Délivrée pour être présentée au dossier de visa auprès de [Destinataire].

Fait à [Ville], le [Date]

Signature :`,
  },

  "attestation-hebergement": {
    ar: `إشهاد بالاستضافة

أنا الموقع(ة) أدناه: [اسم المضيف]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة المضيف]، الساكن(ة) بـ [عنوان السكن].

أشهد بأن [اسم المستضاف وصلته] يقيم معي بمنزلي المذكور أعلاه منذ [مدة الإقامة]، وذلك لضرورات [الغرض].

سلم هذا الإشهاد للمعني بالأمر ليقدمه لدى [الجهة الموجهة إليها].

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ATTESTATION D'HÉBERGEMENT

Je soussigné(e) : [nom de l'hébergeant], titulaire de la CIN n° [numéro], résidant à [adresse du logement].

Atteste que [nom de l'hébergé et lien] réside à mon domicile depuis [durée], pour [motif].

Délivrée à l'intéressé(e) pour être présentée à [Destinataire].

Fait à [Ville], le [Date]

Signature :`,
  },

  "attestation-celibat": {
    ar: `إشهاد بالحياة الفردية

أنا الموقع(ة) أدناه: [الاسم الكامل]، المولود(ة) بتاريخ [تاريخ ومكان الولادة]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، الساكن(ة) بـ [العنوان الكامل].

أشهد بأنني أعيش حياة فردية ولم أبرم عقد زواج إلى يومنا هذا، وأن هذا التصريح صحيح وأتحمل مسؤوليته.

سلم هذا الإشهاد ليقدم لدى [الغرض من الشهادة].

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ATTESTATION DE CÉLIBAT

Je soussigné(e) : [Nom complet], né(e) le [date et lieu de naissance], titulaire de la CIN n° [N° CIN], résidant à [Adresse complète].

Atteste vivre célibataire et n'avoir contracté aucun mariage à ce jour ; la présente déclaration est sincère et j'en assume la responsabilité.

Délivrée pour être présentée à [motif].

Fait à [Ville], le [Date]

Signature :`,
  },

  "attestation-stage": {
    ar: `[تسمية المقاولة]
[العنوان الكامل]

إشهاد بالتدريب

نشهد نحن الموقعين أدناه، إدارة [تسمية المقاولة]، بأن الطالب(ة) [اسم المتدرب]، المتمدرس(ة) بـ [المؤسسة التكوينية]، قد أنجز(ت) لدينا تدريباً في موضوع [موضوع التدريب] بمدة [مدة التدريب]، وذلك خلال الفترة الممتدة من [التاريخ] إلى [التاريخ].

وقد أبان خلاله عن جدية والتزام، وكنا راضين تماماً عن أدائه.

سلم هذا الإشهاد للمعني بالأمر.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: [اسم المسؤول]`,
    fr: `[Raison sociale]
[Adresse complète]

ATTESTATION DE STAGE

Nous, soussignés, direction de [raison sociale], attestons que l'étudiant(e) [nom du stagiaire], inscrit(e) à [établissement], a effectué chez nous un stage portant sur [sujet du stage], d'une durée de [durée], du [date] au [date].

Il/elle a fait preuve de sérieux et d'engagement, et nous en sommes pleinement satisfaits.

Délivrée à l'intéressé(e) à sa demande.

Fait à [Ville], le [Date]

Signature : [nom du tuteur]`,
  },

  "declaration-perte-cin": {
    ar: `تصريح بالشرف

أنا الموقع(ة) أدناه: [الاسم الكامل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة المفقودة]، الساكن(ة) بـ [العنوان الكامل].

أصرح بشرفي بأنني فقدت بطاقتي الوطنية للتعريف بتاريخ [تاريخ الضياع]، وذلك [ظروف الضياع].

وأتعهد بأن هذا التصريح صحيح، وأتحمل كامل المسؤولية القانونية عنه، وألتمس من سيادتكم التكرم بقبول طلبي لإصدار بدلها.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION SUR L'HONNEUR

Je soussigné(e) : [Nom complet], titulaire de la CIN n° [numéro de la CIN perdue], résidant à [Adresse complète].

Déclare sur l'honneur avoir perdu ma carte nationale d'identité le [date de la perte], [circonstances de la perte].

Je reconnais l'exactitude de la présente déclaration et en assume l'entière responsabilité, et sollicite la délivrance d'un duplicata.

Fait à [Ville], le [Date]

Signature :`,
  },

  "declaration-perte-doc": {
    ar: `تصريح بالشرف

أنا الموقع(ة) أدناه: [الاسم الكامل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، الساكن(ة) بـ [العنوان الكامل].

أصرح بشرفي بأنني فقدت الوثيقة التالية: [الوثيقة المفقودة]، بتاريخ [التاريخ]، وذلك [ظروف الضياع].

وأصرح بأن هذا التصريح صحيح، وأتحمل مسؤوليته كاملة.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION SUR L'HONNEUR

Je soussigné(e) : [Nom complet], titulaire de la CIN n° [N° CIN], résidant à [Adresse complète].

Déclare sur l'honneur avoir perdu le document suivant : [document perdu], le [date], [circonstances].

J'atteste que la présente déclaration est sincère et j'en assume l'entière responsabilité.

Fait à [Ville], le [Date]

Signature :`,
  },

  "declaration-charge-famille": {
    ar: `تصريح بالشرف بالإعالة

أنا الموقع(ة) أدناه: [الاسم الكامل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، الساكن(ة) بـ [العنوان الكامل]، وأمارس مهنة [المهنة والدخل].

أصرح بشرفي بأنني المعيل الوحيد لأسرتي المكونة من [أعداد المكفولين]، وأن دخلها لا يتجاوز ما ذكر أعلاه.

وأصرح بأن هذا التصريح صحيح؛ وقد سلم لي ليقدم لدى [الغرض من التصريح]، وأتحمل مسؤوليته كاملة.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION SUR L'HONNEUR DE PRISE EN CHARGE

Je soussigné(e) : [Nom complet], titulaire de la CIN n° [N° CIN], résidant à [Adresse complète], exerçant la profession de [profession et revenu].

Déclare sur l'honneur être l'unique soutien de ma famille composée de [nombre de personnes à charge], et que ses revenus n'excèdent pas ce qui est indiqué ci-dessus.

La présente déclaration, délivrée pour [motif], est sincère et j'en assume l'entière responsabilité.

Fait à [Ville], le [Date]

Signature :`,
  },

  "declaration-accident": {
    ar: `تصريح بالشرف بظروف حادث

أنا الموقع(ة) أدناه: [الاسم الكامل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، أشتغل في وظيفة [الوظيفة].

أصرح بشرفي بأنه بتاريخ [تاريخ ومكان الحادث] وقع لي الحادث التالي: [وصف ما وقع]، وأن ظروف وقوعه كانت كما ذكرت دون زيادة أو نقصان.

سلم هذا التصريح ليقدم لدى [الجهة الموجهة إليها].

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION SUR L'HONNEUR DES CIRCONSTANCES D'UN ACCIDENT

Je soussigné(e) : [Nom complet], titulaire de la CIN n° [N° CIN], occupant le poste de [poste].

Déclare sur l'honneur que le [date et lieu de l'accident] m'est survenu l'accident suivant : [description], et que les circonstances relatées sont exactes.

Délivrée pour être présentée à [Destinataire].

Fait à [Ville], le [Date]

Signature :`,
  },

  "declaration-changement-situation": {
    ar: `تصريح بتغيير الوضعية العائلية

أنا الموقع(ة) أدناه: [الاسم الكامل]، المسجل(ة) بالضمان الاجتماعي تحت رقم [رقم التسجيل CNSS].

أصرح بتغيير وضعيتي العائلية يوم [تاريخ التغيير]، وذلك بسبب [نوع التغيير: زواج/ولادة/طلاق].

وأرجو التكرم بتحيين ملفي وفق هذا التصريح، الذي أتحمل مسؤوليته كاملة.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `DÉCLARATION DE CHANGEMENT DE SITUATION FAMILIALE

Je soussigné(e) : [Nom complet], immatriculé(e) à la CNSS sous le n° [numéro].

Déclare le changement de ma situation familiale au [date du changement], à raison de [type de changement : mariage/naissance/divorce].

Je vous prie de bien vouloir mettre à jour mon dossier conformément à la présente déclaration, dont j'assume l'entière responsabilité.

Fait à [Ville], le [Date]

Signature :`,
  },

  "iltizam-vehicule": {
    ar: `التزام بالتحمل

أنا الموقع(ة) أدناه: [اسم المشتري]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة المشتري]، الساكن(ة) بـ [العنوان الكامل].

ألتزم بشرفي بتحمل كامل المسؤولية عن المركبة من نوع [بطاقة المركبة ولوحتها] التي اشتريتها من السيد(ة) [اسم البائع] بتاريخ [تاريخ البيع]، إلى حين إتمام مسطرة نقل الملكية باسمي.

وأتحمل ما يترتب عن هذا الالتزام من مسؤولية.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ENGAGEMENT DE RESPONSABILITÉ

Je soussigné(e) : [nom de l'acquéreur], titulaire de la CIN n° [numéro], résidant à [adresse].

M'engage à assumer l'entière responsabilité du véhicule [données et plaque] acheté auprès de [nom du vendeur] le [date de vente], jusqu'à l'accomplissement de la procédure de transfert à mon nom.

J'assume toute responsabilité découlant du présent engagement.

Fait à [Ville], le [Date]

Signature :`,
  },

  "iltizam-nlhafa": {
    ar: `التزام بالنظافة

أنا الموقع(ة) أدناه: [اسم المعني]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم البطاقة الوطنية]، أصوّر محل [نوع النشاط] الكائن بـ [عنوان المحل]، بمقتضى الترخيص رقم [الترخيص المرجعي].

ألتزم بشرفي بـ:
- احترام شروط النظافة وحفظ الصحة داخل المحل وخارجه؛
- التخلص اليومي من النفايات وفق المساطر المعمول بها؛
- خضوع المنتوجين للرقابة الصحية الدورية.

وأتحمل ما يترتب عن الإخلال بهذا الالتزام.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء:`,
    fr: `ENGAGEMENT D'HYGIÈNE

Je soussigné(e) : [nom], titulaire de la CIN n° [numéro], exploitant un local de [type d'activité] sis à [adresse du local], en vertu de l'autorisation n° [référence].

M'engage à :
- respecter les règles d'hygiène et de salubrité à l'intérieur et aux abords du local ;
- éliminer quotidiennement les déchets conformément aux procédures ;
- soumettre les produits au contrôle sanitaire périodique.

J'assume toute conséquence du non-respect du présent engagement.

Fait à [Ville], le [Date]

Signature :`,
  },

  "wakala-vente-vehicule": {
    ar: `وكالة خاصة لبيع مركبة

أنا الموقع(ة) أدناه: [اسم الموكل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الموكل]، الساكن(ة) بـ [العنوان الكامل].

فوضت بمقتضى هذا السند السيد(ة) [اسم الوكيل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الوكيل]، في بيع المركبة من نوع [بيانات المركبة] بالثمن الذي يراه مناسباً، وذلك خلال [حدود الوكالة: أجل الوكالة].

ولهذا الغرض يحق له التوقيع على وصل البيع وتقديم الوثائق لدى وكالة التسجيل، دون أن يحق له التصرف في شيء خارج نطاق هذا التفويض.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: الموكل`,
    fr: `PROCURATION SPÉCIALE DE VENTE DE VÉHICULE

Je soussigné(e) : [nom du mandant], titulaire de la CIN n° [numéro], résidant à [adresse].

Mandate par les présentes [nom du mandataire], titulaire de la CIN n° [numéro], pour vendre en mon nom le véhicule [données] au prix qu'il jugera approprié, durant [limites du mandat].

À cet effet, il est habilité à signer l'acte de vente et à déposer les pièces auprès de l'agence d'immatriculation, sans pouvoir agir au-delà du présent mandat.

Fait à [Ville], le [Date]

Signature : le mandant`,
  },

  "wakala-immobiliere": {
    ar: `وكالة عقارية (تستلزم التحرير لدى العدول)

أنا الموقع(ة) أدناه: [اسم الموكل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الموكل].

فوضت السيد(ة) [اسم الوكيل] في [الغرض من الوكالة: بيع/شراء] العقار المكون من [بيانات العقار] الكائن بـ [العنوان الكامل]، بالثمن الذي يتفق عليه، على أن يحرر العقد النهائي لدى العدول وفق القانون.

ملاحظة: هذا النموذج استرشادي؛ الوكالات العقارية تخضع وجوباً للتحرير والتوثيق لدى العدول.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: الموكل`,
    fr: `PROCURATION IMMOBILIÈRE (à faire acter chez les adouls)

Je soussigné(e) : [nom du mandant], titulaire de la CIN n° [numéro].

Mandate [nom du mandataire] pour [objet : vendre/acheter] le bien composé de [données du bien], sis à [adresse], au prix convenu, l'acte définitif devant être dressé chez les adouls conformément à la loi.

N.B. : modèle indicatif ; les procurations immobilières doivent obligatoirement être dressées et notariées devant adouls.

Fait à [Ville], le [Date]

Signature : le mandant`,
  },

  "wakala-permis": {
    ar: `وكالة لاستلام رخصة السياقة

أنا الموقع(ة) أدناه: [اسم الموكل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الموكل]، الساكن(ة) بـ [العنوان الكامل].

فوضت السيد(ة) [اسم الوكيل]، الحامل(ة) لبطاقة التعريف الوطنية رقم [رقم بطاقة الوكيل]، في استلام رخصة السياقة المسلمة في إطار ملفي رقم [رقم ملف الرخصة]، والتوقيع بالوصل مقابل ذلك.

حرر بـ: [المدينة] في: [التاريخ]

الإمضاء: الموكل`,
    fr: `PROCURATION POUR RETRAIT DU PERMIS

Je soussigné(e) : [nom du mandant], titulaire de la CIN n° [numéro], résidant à [adresse].

Mandate [nom du mandataire], titulaire de la CIN n° [numéro], pour retirer en mon nom le permis de conduire délivré dans le cadre de mon dossier n° [numéro], et signer décharge.

Fait à [Ville], le [Date]

Signature : le mandant`,
  },

  "etat-lieux": {
    ar: `حالة الأماكن — [نوع المحضر: دخول/خروج]

حرر هذا المحضر بمنزل [عنوان العقار] المكرى من السيد(ة) [اسم المكري] لفائدة السيد(ة) [اسم المكتري].

أولاً — الغرف:
[وصف الغرف والتجهيزات: عدد الغرف، الحالة، التجهيزات المرفقة...]

ثانياً — التجهيزات:
[وصف الأثاث والتجهيزات وحالتها...]

ثالثاً — العدادات:
الكهرباء: [قراءة العداد] — الماء: [قراءة العداد]

ملاحظات: [ملاحظات]

حُرر هذا المحضر من نسختين، نسخة لكل طرف، بـ [المدينة] في: [التاريخ]

إمضاء المكري: ____________    إمضاء المكتري: ____________`,
    fr: `ÉTAT DES LIEUX — [type : entrée/sortie]

Établi au logement sis à [adresse], loué par [nom du bailleur] à [nom du locataire].

I. — Pièces :
[description des pièces, état, équipements...]

II. — Équipements :
[description du mobilier et son état...]

III. — Compteurs :
Électricité : [relevé] — Eau : [relevé]

Observations : [notes]

Établi en deux exemplaires, à [Ville], le [Date]

Bailleur : ____________    Locataire : ____________`,
  },

  "promesse-vente": {
    ar: `وعد بالبيع العقاري

الفريق الأول (الواعد): السيد(ة) [اسم الواعد (البائع)] — بطاقة تعريف وطنية رقم [رقم البطاقة الوطنية]
الفريق الثاني (المرجو له): السيد(ة) [اسم المرجو له (المشتري)] — بطاقة تعريف وطنية رقم [رقم البطاقة]

عرض الفريق الأول بيع العقار المكون من [بيانات العقار] المسجل بالرسم العقاري رقم [رقم الرسم العقاري]، فقبل الفريق الثاني ذلك بالشروط التالية:

- الثمن: [الثمن المتفق عليه] درهم منها سلفة [السلفة] درهم أدیت [طريقة الأداء]، والباقي عند تحرير العقد النهائي؛
- أجل تحرير العقد النهائي لدى العدول: [أجل العقد النهائي]؛
- يلتزم المرجو له بأداء الرسوم والتسجيل بالمحافظة العقارية.

في حالة الإخلال يسترجع المتضرر حقه طبقاً للقانون.

حرر بـ: [المدينة] في: [التاريخ]

الواعد: ____________    المرجو له: ____________`,
    fr: `PROMESSE DE VENTE IMMOBILIÈRE

Le promettant : [nom du vendeur] — CIN n° [N° CIN]
Le bénéficiaire : [nom de l'acquéreur] — CIN n° [N° CIN]

Le promettant s'est engagé à vendre au bénéficiaire le bien composé de [données du bien], inscrit au livre foncier sous le n° [numéro], que ce dernier a accepté aux conditions suivantes :

- Prix : [prix convenu] dirhams, dont arrhes de [montant] dirhams versées [modalités], solde à l'acte définitif ;
- Délai de l'acte définitif chez les adouls : [délai] ;
- Les frais d'enregistrement sont à la charge de l'acquérateur.

En cas d'inexécution, chaque partie peut réclamer ses droits conformément à la loi.

Fait à [Ville], le [Date]

Promettant : ____________    Bénéficiaire : ____________`,
  },

  "vente-immobilier": {
    ar: `عقد بيع عقار (مسودة تحرر نهائيتها لدى العدول)

توصل الفريق الأول، السيد(ة) [اسم البائع]، إلى الفريق الثاني، السيد(ة) [اسم المشتري]، في بيع العقار التالي:
[بيانات العقار ورسمه العقاري]، الكائن بـ [العنوان الكامل]، وذلك بثمن إجمالي قدره [الثمن] درهم أدي منها [طريقة الأداء].

وقد انتقلت الملكية إلى الفريق الثاني بهذا البيع، الذي يلتزم فيه البائع بالضمان القانوني، ويحمل المشتري الرسوم والتسجيل بالمحافظة العقارية.

ملاحظة: تحرر الصيغة النهائية لهذا العقد وجوباً لدى العدول ثم يسجل بالمحافظة العقارية ليكون له أثر في مواجهة الغير.

حرر بـ: [المدينة] في: [التاريخ]

البائع: ____________    المشتري: ____________`,
    fr: `ACTE DE VENTE IMMOBILIÈRE (projet à faire acter chez les adouls)

Le vendeur, [nom du vendeur], a vendu à l'acquéreur, [nom de l'acquéreur], le bien suivant :
[données du bien et titre foncier], sis à [adresse], pour un prix total de [prix] dirhams réglés ainsi : [modalités].

La propriété est transférée à l'acquéreur par les présentes ; le vendeur garantit la libre disposition du bien, et l'acquéreur supporte les frais d'enregistrement à la Conservation foncière.

N.B. : la forme définitive doit être dressée chez les adouls puis inscrite à la Conservation foncière pour être opposable aux tiers.

Fait à [Ville], le [Date]

Vendeur : ____________    Acquéreur : ____________`,
  },

  "vente-moto": {
    ar: `وصل بيع دراجة نارية

حرر هذا الوصل بين:
البائع: [اسم البائع] — بطاقة تعريف وطنية رقم [رقم بطاقة البائع]
المشتري: [اسم المشتري] — بطاقة تعريف وطنية رقم [رقم بطاقة المشتري]

بيع البائع للمشتري الدراجة النارية من نوع [بيانات الدراجة ولوحتها] بثمن قدره [الثمن] درهم أدي منها كاملاً [طريقة الأداء].

ويتحمل المشتري مسؤولية الدراجة من هذا التاريخ إلى حين نقل الملكية، ويلتزم الطرفان بتقديم هذا الوصل لوكالة التسجيل خلال الأجل القانوني.

حُرر من نسختين بـ [المدينة] في: [التاريخ]

البائع: ____________    المشتري: ____________`,
    fr: `VENTE DE MOTOCYCLE

Établi entre :
Vendeur : [nom] — CIN n° [numéro]
Acquéreur : [nom] — CIN n° [numéro]

Le vendeur cède à l'acquéreur la motocycle de type [données et plaque], pour le prix de [prix] dirhams réglés intégralement [modalités].

L'acquéreur assume la responsabilité du véhicule dès ce jour jusqu'au transfert de propriété ; les parties s'engagent à présenter ce document à l'agence d'immatriculation dans le délai légal.

Fait en deux exemplaires à [Ville], le [Date]

Vendeur : ____________    Acquéreur : ____________`,
  },
};
