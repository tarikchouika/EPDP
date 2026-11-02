// Additional documents (phase 2 — part B) — extends documents.ts
// Employment, family, associations, construction, business, banking,
// procedures and the cessions/rescissions category.
import type { DocumentItem } from "./documents";
import type { L } from "./categories";

const D = (ar: string, en: string, fr: string, es: string, it: string, de: string, ru: string): L => ({
  ar, en, fr, es, it, de, ru,
});

export const documentsMore2: DocumentItem[] = [
  // ══════════════ amal ══════════════
  {
    id: "lettre-recommandation",
    cat: "amal",
    title: { ar: "رسالة توصية", fr: "Lettre de recommandation" },
    desc: D(
      "رسالة توصية من مسؤول أو أستاذ لدعم ترشيحك لوظيفة أو تكوين.",
      "Recommendation letter from a manager or professor supporting your application.",
      "Lettre de recommandation d'un responsable ou professeur appuyant la candidature.",
      "Carta de recomendación de un responsable o profesor.",
      "Lettera di raccomandazione da un responsabile o docente.",
      "Empfehlungsschreiben eines Vorgesetzten oder Professors.",
      "Рекомендательное письмо от руководителя или преподавателя."
    ),
    where: { ar: "ترفق بملف الترشيح وتوجه للمؤسسة المعنية", fr: "À joindre au dossier de candidature" },
    keywords: ["توصية", "recommandation", "recommendation", "ترشيح", "رأي"],
    templateId: "lettre-recommandation",
    fields: {
      ar: ["اسم الموصي وصفته", "اسم المرشح", "علاقة العمل/الدراسة بينهما", "مؤهلات المرشح", "الجهة الموجهة إليها", "التاريخ والإمضاء"],
      fr: ["Nom et qualité du recommandant", "Nom du candidat", "Relation professionnelle/académique", "Qualités du candidat", "Destinataire", "Date et signature"],
      en: ["Recommender name and title", "Candidate name", "Professional/academic relation", "Candidate qualities", "Recipient", "Date and signature"],
    },
  },
  {
    id: "demande-conge",
    cat: "amal",
    title: { ar: "طلب استفادة من رخصة", fr: "Demande de congé" },
    desc: D(
      "طلب رخصة سنوية أو استثنائية موجه لإدارة المقاولة.",
      "Annual or special leave request addressed to the company administration.",
      "Demande de congé annuel ou exceptionnel adressée à la direction.",
      "Solicitud de permiso anual o excepcional dirigida a la dirección.",
      "Richiesta di ferie o permesso straordinario alla direzione.",
      "Urlaubsantrag an die Unternehmensleitung.",
      "Заявление на ежегодный или особый отпуск."
    ),
    where: { ar: "الموارد البشرية بالمقاولة (مع الاحتفاظ بإشعار القبول)", fr: "Service RH de l'entreprise (conserver l'accusé)" },
    keywords: ["رخصة", "عطلة", "congé", "leave", "رخصة سنوية"],
    templateId: "demande-conge",
    fields: {
      ar: ["الاسم الكامل", "الوظيفة", "نوع الرخصة", "تواريخ البداية والنهاية", "تاريخ آخر رخصة", "التاريخ والإمضاء"],
      fr: ["Nom complet", "Poste", "Type de congé", "Dates de début et de fin", "Date du dernier congé", "Date et signature"],
      en: ["Full name", "Position", "Leave type", "Start and end dates", "Last leave date", "Date and signature"],
    },
  },
  {
    id: "mise-en-demeure-stc",
    cat: "amal",
    title: { ar: "إنذار أداء مستحقات نهاية العمل (STC)", fr: "Mise en demeure de paiement (STC)" },
    desc: D(
      "إنذار موجه للمشغل لأداء مستحقات نهاية العمل بعد انتهاء العلاقة.",
      "Formal notice to the employer to pay end-of-service dues.",
      "Mise en demeure de l'employeur pour le solde de tout compte.",
      "Requerimiento al empleador para el finiquito.",
      "Diffida al datore di lavoro per il saldo finale.",
      "Fristsetzung des Arbeitgebers zur Restzahlung.",
      "Требование работодателю выплатить расчёт при увольнении."
    ),
    where: { ar: "يسلم باليد مقابل وصل أو بالبريد المضمون؛ ولجوء بعده لمفتشية الشغل", fr: "Remise en main propre ou lettre recommandée ; puis inspection du travail" },
    keywords: ["STC", "مستحقات نهاية العمل", "تصفية الحساب", "solde de tout compte", "إنذار"],
    templateId: "mise-en-demeure-stc",
    fields: {
      ar: ["اسم الأجير السابق", "الوظيفة الأخيرة", "اسم المشغل/المقاولة", "تفصيل المستحقات", "الأجل الممنوح للأداء", "التاريخ والإمضاء"],
      fr: ["Nom de l'ancien salarié", "Dernier poste", "Nom de l'employeur", "Détail des sommes dues", "Délai accordé", "Date et signature"],
      en: ["Former employee name", "Last position", "Employer name", "Breakdown of dues", "Granted deadline", "Date and signature"],
    },
  },
  {
    id: "contrat-cdi",
    cat: "amal",
    title: { ar: "عقد عمل غير محدد المدة (CDI)", fr: "Contrat de travail à durée indéterminée" },
    desc: D(
      "عقد عمل دائم مطابق لمدونة الشغل مع بنود الواجبات والأجر.",
      "Permanent employment contract under the labor code with duties and wage clauses.",
      "Contrat de travail permanent conforme au Code du travail.",
      "Contrato de trabajo permanente conforme al Código laboral.",
      "Contratto di lavoro a tempo indeterminato conforme al codice.",
      "Unbefristeter Arbeitsvertrag nach dem Arbeitsgesetzbuch.",
      "Бессрочный трудовой договор по кодексу законов о труде."
    ),
    where: { ar: "يحرر من نسختين ويودع لدى مكتب التشغيل للتأشير", fr: "En deux exemplaires, déposé à l'agence d'emploi pour visa" },
    popular: true,
    keywords: ["CDI", "عقد عمل", "contrat de travail", "employment contract", "عمل دائم"],
    templateId: "contrat-cdi",
    fields: {
      ar: ["اسم المشغل", "اسم الأجير", "رقم بطاقة الأجير", "الوظيفة", "الأجر المتفق عليه", "تاريخ الالتحاق", "مدة التجربة", "التاريخ والإمضاءات"],
      fr: ["Nom de l'employeur", "Nom du salarié", "N° CIN du salarié", "Poste", "Salaire convenu", "Date d'embauche", "Période d'essai", "Date et signatures"],
      en: ["Employer name", "Employee name", "Employee ID number", "Position", "Agreed wage", "Start date", "Probation period", "Date and signatures"],
    },
  },
  {
    id: "contrat-domestique",
    cat: "amal",
    title: { ar: "عقد عمل لخادم(ة) منزلية", fr: "Contrat de travail domestique" },
    desc: D(
      "عقد عمل لمنتوج الخدمات المنزلية وفق القانون المنظم لعمال المنازل.",
      "Employment contract for domestic workers under the household workers law.",
      "Contrat pour les employés de maison selon la loi sur les travaux domestiques.",
      "Contrato para empleados de hogar según la ley correspondiente.",
      "Contratto per i lavoratori domestici secondo la legge.",
      "Arbeitsvertrag für Hauspersonal nach dem Gesetz.",
      "Трудовой договор для домашнего персонала по закону."
    ),
    where: { ar: "التسجيل الإلزامي لدى CNSS بعد التوقيع", fr: "Inscription obligatoire à la CNSS après signature" },
    authority: "cnss",
    keywords: ["خادمة", "عمال المنازل", "domestique", "خدمة منزلية", "عاملة منزلية"],
    templateId: "contrat-domestique",
    fields: {
      ar: ["اسم المشغل", "عنوان السكن", "اسم العامل المنزلي", "رقم بطاقته", "طبيعة المهام", "الأجر والسكن", "راحة الأسبوع", "التاريخ والإمضاءات"],
      fr: ["Nom de l'employeur", "Adresse", "Nom de l'employé(e)", "N° CIN", "Nature des tâches", "Salaire et logement", "Repos hebdomadaire", "Date et signatures"],
      en: ["Employer name", "Home address", "Worker name", "ID number", "Task nature", "Wage and lodging", "Weekly rest", "Date and signatures"],
    },
  },

  // ══════════════ usra ══════════════
  {
    id: "demande-revision-nafaqa",
    cat: "usra",
    title: { ar: "طلب مراجعة النفقة", fr: "Demande de révision de la pension alimentaire" },
    desc: D(
      "مقال لمحكمة الأسرة بزيادة أو تخفيض النفقة المحكوم بها.",
      "Filing to the family court to increase or reduce awarded alimony.",
      "Requête au tribunal de la famille pour augmenter/réduire la pension.",
      "Solicitud al tribunal de familia para aumentar/reducir la pensión.",
      "Ricorso al tribunale della famiglia per aumentare/ridurre gli alimenti.",
      "Antrag beim Familiengericht auf Erhöhung/Reduzierung des Unterhalts.",
      "Ходатайство в семейный суд об изменении размера алиментов."
    ),
    where: { ar: "كتابة ضبط محكمة الأسرة التابعة لمحل الإقامة", fr: "Greffe du tribunal de la famille du lieu de résidence" },
    authority: "justice",
    keywords: ["النفقة", "مراجعة النفقة", "pension alimentaire", "alimony", "زيادة النفقة"],
    templateId: "demande-revision-nafaqa",
    fields: {
      ar: ["اسم الملتمِس", "رقم بطاقته", "اسم الملتمَس ضده", "رقم حكم النفقة", "الغرض (زيادة/تخفيض)", "تعليل الطلب", "التاريخ والإمضاء"],
      fr: ["Nom du demandeur", "N° CIN", "Nom de la partie adverse", "Référence du jugement", "Objet (hausse/baisse)", "Motifs", "Date et signature"],
      en: ["Petitioner name", "ID number", "Other party name", "Judgment reference", "Purpose (increase/reduce)", "Grounds", "Date and signature"],
    },
  },
  {
    id: "demande-acte-deces",
    cat: "usra",
    title: { ar: "طلب نسخة من رسم الوفاة", fr: "Demande d'acte de décès" },
    desc: D(
      "طلب نسخة من رسم وفاة لاستعمالها في التركات والملفات الإدارية.",
      "Request for a death certificate copy for estates and administrative files.",
      "Demande de copie d'acte de décès pour succession et démarches.",
      "Solicitud de acta de defunción para sucesión y trámites.",
      "Richiesta di atto di morte per successione e pratiche.",
      "Antrag auf Sterbeurkunde für Erbschaft und Verwaltung.",
      "Запрос свидетельства о смерти для наследства и дел."
    ),
    where: { ar: "مصلحة الحالة المدنية بجماعة محل الوفاة", fr: "Service d'état civil de la commune du décès" },
    keywords: ["رسم الوفاة", "acte de décès", "وفاة", "death certificate", "التركة"],
    templateId: "demande-acte-deces",
    fields: {
      ar: ["اسم طالب النسخة", "رقم بطاقته", "اسم المتوفى", "تاريخ ومكان الوفاة", "الغرض", "التاريخ والإمضاء"],
      fr: ["Nom du demandeur", "N° CIN", "Nom du défunt", "Date et lieu du décès", "Motif", "Date et signature"],
      en: ["Applicant name", "ID number", "Deceased name", "Death date and place", "Purpose", "Date and signature"],
    },
  },

  // ══════════════ jamaiyat ══════════════
  {
    id: "pv-ag-ordinaire",
    cat: "jamaiyat",
    title: { ar: "محضر جمع عام عادي", fr: "PV d'assemblée générale ordinaire" },
    desc: D(
      "محضر الجمع العام السنوي لتقديم التقارير وتجديد المكتب.",
      "Minutes of the annual general meeting for reports and board renewal.",
      "PV de l'assemblée générale annuelle (rapports et renouvellement).",
      "Acta de la asamblea general anual (informes y renovación).",
      "Verbale dell'assemblea generale ordinaria.",
      "Protokoll der ordentlichen Hauptversammlung.",
      "Протокол годового общего собрания."
    ),
    where: { ar: "يودع بملف الجمعية لدى السلطة المحلية مع النظام الأساسي", fr: "Déposé au dossier de l'association en autorité locale" },
    keywords: ["جمع عام", "محضر", "assemblée générale", "PV", "جمعية"],
    templateId: "pv-ag-ordinaire",
    fields: {
      ar: ["اسم الجمعية", "تاريخ ومكان الانعقاد", "عدد الحاضرين", "نقاط جدول الأعمال", "نتائج التصويت", "أسماء المكتب الجديد", "التاريخ والإمضاءات"],
      fr: ["Nom de l'association", "Date et lieu", "Membres présents", "Points à l'ordre du jour", "Résultats des votes", "Composition du bureau", "Date et signatures"],
      en: ["Association name", "Date and venue", "Members present", "Agenda items", "Vote results", "New board names", "Date and signatures"],
    },
  },
  {
    id: "demande-subvention",
    cat: "jamaiyat",
    title: { ar: "طلب دعم مالي لجمعية", fr: "Demande de subvention pour association" },
    desc: D(
      "طلب دعم مالي موجه للسلطات أو المؤسسات لدعم أنشطة الجمعية.",
      "Funding request to authorities or institutions for the association's activities.",
      "Demande de subvention aux autorités ou fondations.",
      "Solicitud de subvención a autoridades o fundaciones.",
      "Richiesta di finanziamento ad autorità o fondazioni.",
      "Förderantrag an Behörden oder Stiftungen.",
      "Запрос субсидии у властей или фондов."
    ),
    where: { ar: "الجماعة / الأكاديمية / المؤسسة الداعمة حسب طبيعة النشاط", fr: "Commune / académie / fondation selon l'activité" },
    keywords: ["دعم جمعية", "subvention", "تمويل", "منحة جمعية", "جمعية"],
    templateId: "demande-subvention",
    fields: {
      ar: ["اسم الجمعية", "رقم التسجيل", "اسم الرئيس", "وصف الأنشطة", "المبلغ المطلوب", "وجه استعماله", "التاريخ والإمضاء"],
      fr: ["Nom de l'association", "N° d'enregistrement", "Nom du président", "Description des activités", "Montant demandé", "Affectation", "Date et signature"],
      en: ["Association name", "Registration number", "President name", "Activities description", "Amount requested", "Use of funds", "Date and signature"],
    },
  },
  {
    id: "statuts-cooperative",
    cat: "jamaiyat",
    title: { ar: "نظام أساسي لتعاونية", fr: "Statuts d'une coopérative" },
    desc: D(
      "نظام أساسي لتأسيس تعاونية وفق قانون التعاونيات.",
      "Bylaws for founding a cooperative under the cooperatives law.",
      "Statuts pour créer une coopérative selon la loi.",
      "Estatutos para constituir una cooperativa según la ley.",
      "Statuto per costituire una cooperativa secondo la legge.",
      "Satzung zur Gründung einer Genossenschaft nach dem Gesetz.",
      "Устав для создания кооператива по закону."
    ),
    where: { ar: "مكتب تنمية التعاون (ODCO) لتسجيل التعاونية", fr: "Office de développement de la coopération (ODCO) pour l'enregistrement" },
    keywords: ["تعاونية", "statuts coopérative", "cooperative bylaws", "ODCO", "نظام تعاونية"],
    templateId: "statuts-cooperative",
    fields: {
      ar: ["اسم التعاونية", "مقرها", "هدفها", "مبلغ الأسهم", "أسماء الأعضاء المؤسسين", "أجهزة التسيير", "التاريخ والإمضاءات"],
      fr: ["Nom de la coopérative", "Siège", "Objet", "Montant des parts", "Membres fondateurs", "Organes de gestion", "Date et signatures"],
      en: ["Cooperative name", "Headquarters", "Purpose", "Share amount", "Founding members", "Governing bodies", "Date and signatures"],
    },
  },

  // ══════════════ binaa ══════════════
  {
    id: "iltizam-binaa",
    cat: "binaa",
    title: { ar: "التزام بالبناء وفق الرخصة", fr: "Engagement de construire selon le permis" },
    desc: D(
      "التزام بإنجاز البناء مطابقاً لرخصة البناء المسلمة.",
      "Commitment to carry out construction in line with the issued permit.",
      "Engagement de réaliser la construction conformément au permis.",
      "Compromiso de construir conforme al permiso.",
      "Impegno a costruire secondo il permesso.",
      "Verpflichtung, gemäß der Genehmigung zu bauen.",
      "Обязательство строить в соответствии с разрешением."
    ),
    where: { ar: "يقدم ضمن ملف رخصة البناء للوكالة الحضرية/الجماعة", fr: "À joindre au dossier de permis (agence urbaine/commune)" },
    keywords: ["التزام البناء", "رخصة بناء", "permis de construire", "engagement", "بناء"],
    templateId: "iltizam-binaa",
    fields: {
      ar: ["اسم المعني", "رقم بطاقته", "رقم رخصة البناء", "عنوان البقعة", "مدة الإنجاز", "التاريخ والإمضاء"],
      fr: ["Nom", "N° CIN", "N° du permis", "Adresse du lot", "Délai de réalisation", "Date et signature"],
      en: ["Name", "ID number", "Permit number", "Plot address", "Completion deadline", "Date and signature"],
    },
  },
  {
    id: "demande-regularisation",
    cat: "binaa",
    title: { ar: "طلب تسوية بناء غير قانوني", fr: "Demande de régularisation de construction" },
    desc: D(
      "طلب رخصة تسوية بناء أُنجز دون رخصة بناء.",
      "Request for a regularization permit for construction built without a permit.",
      "Demande de permis de régularisation d'une construction sans permis.",
      "Solicitud de permiso de regularización de obra sin licencia.",
      "Richiesta di regolarizzazione di costruzione abusiva.",
      "Antrag auf Legalisierung einer ohne Genehmigung errichteten Baute.",
      "Ходатайство о легализации самовольной постройки."
    ),
    where: { ar: "الوكالة الحضرية أو مصلحة التعمير بالجماعة", fr: "Agence urbaine ou service d'urbanisme de la commune" },
    keywords: ["تسوية بناء", "بناء غير قانوني", "régularisation", "تعمير", "رخصة تسوية"],
    templateId: "demande-regularisation",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة", "عنوان البناء", "وصف البناء ومساحته", "تاريخ الإنجاز", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Adresse de la construction", "Description et superficie", "Date d'achèvement", "Date et signature"],
      en: ["Full name", "ID number", "Construction address", "Description and area", "Completion date", "Date and signature"],
    },
  },

  // ══════════════ muqawalat ══════════════
  {
    id: "reconnaissance-dette",
    cat: "muqawalat",
    title: { ar: "إقرار بالدين", fr: "Reconnaissance de dette" },
    desc: D(
      "وثيقة يقر فيها المدين بدين لصالح الدائن وطرق أدائه.",
      "Instrument whereby the debtor acknowledges a debt and its repayment terms.",
      "Acte par lequel le débiteur reconnaît une dette et ses modalités.",
      "Documento en el que el deudor reconoce una deuda.",
      "Atto con cui il debitore riconosce un debito.",
      "Urkunde, mit der der Schuldner eine Schuld anerkennt.",
      "Документ, которым должник признаёт долг."
    ),
    where: { ar: "يحرر من نسختين ويحتفظ به كل طرف؛ يفضل توثيقه إن كان كبيراً", fr: "En deux exemplaires ; notarié si le montant est important" },
    popular: true,
    keywords: ["دين", "إقرار بالدين", "reconnaissance de dette", "debt", "قرض"],
    templateId: "reconnaissance-dette",
    fields: {
      ar: ["اسم المدين", "رقم بطاقته", "اسم الدائن", "مبلغ الدين", "تاريخ الاستحقاق", "طريقة الأداء", "التاريخ والإمضاء"],
      fr: ["Nom du débiteur", "N° CIN", "Nom du créancier", "Montant", "Échéance", "Modalités de paiement", "Date et signature"],
      en: ["Debtor name", "ID number", "Creditor name", "Amount", "Due date", "Payment method", "Date and signature"],
    },
  },
  {
    id: "avis-legal",
    cat: "muqawalat",
    title: { ar: "إعلان قانوني (تأسيس/تعديل شركة)", fr: "Avis légal (constitution/modification)" },
    desc: D(
      "نص إعلان لنشره بالجريدة الرسمية للإشهار القانوني للشركة.",
      "Announcement text for legal gazette publication of company events.",
      "Texte d'avis pour publication au Bulletin officiel.",
      "Texto de aviso para publicación en el boletín oficial.",
      "Testo di avviso per la pubblicazione in Gazzetta.",
      "Anzeigentext für die Veröffentlichung im Amtsblatt.",
      "Текст объявления для публикации в официальной газете."
    ),
    where: { ar: "يرسل للجرائد المختصة بالنشر القانوني بعد استخراج السجل التجاري", fr: "Aux journaux d'annonces légales après extraction du registre du commerce" },
    authority: "ompic",
    keywords: ["إعلان قانوني", "avis légal", "جريدة رسمية", "تأسيس شركة", "تعديل"],
    templateId: "avis-legal",
    fields: {
      ar: ["اسم الشركة وشكلها القانوني", "رأسمالها", "المقر الاجتماعي", "رقم السجل التجاري", "نوع الإعلان", "أسماء المسيرين", "التاريخ"],
      fr: ["Dénomination et forme juridique", "Capital social", "Siège", "N° RC", "Objet de l'avis", "Gérants", "Date"],
      en: ["Company name and legal form", "Share capital", "Head office", "RC number", "Notice type", "Managers", "Date"],
    },
  },
  {
    id: "pointage",
    cat: "muqawalat",
    title: { ar: "ورقة حضور العمال (البوانتاج)", fr: "Feuille de pointage des ouvriers" },
    desc: D(
      "جدول حضور أسبوعي لعمال الورش مع توقيعهم اليومي.",
      "Weekly attendance sheet for site workers with daily signatures.",
      "Feuille de présence hebdomadaire des ouvriers avec signatures.",
      "Hoja de asistencia semanal de obreros con firmas.",
      "Foglio di presenza settimanale degli operai.",
      "Wochen Anwesenheitsliste für Arbeiter.",
      "Недельный лист посещаемости рабочих."
    ),
    where: { ar: "يراجع أسبوعياً من طرف مسير الورش وتحفظ للأجور", fr: "Visée chaque semaine par le chef de chantier" },
    keywords: ["البوانتاج", "pointage", "حضور العمال", "ورشة", "أجور"],
    templateId: "pointage",
    fields: {
      ar: ["اسم الورش", "الأسبوع المعني", "أسماء العمال", "ساعات العمل", "التوقيعات اليومية", "ملاحظات"],
      fr: ["Nom du chantier", "Semaine", "Noms des ouvriers", "Heures", "Signatures quotidiennes", "Observations"],
      en: ["Site name", "Week", "Worker names", "Hours", "Daily signatures", "Notes"],
    },
  },
  {
    id: "declaration-auto-entrepreneur",
    cat: "muqawalat",
    title: { ar: "تصريح بالشرف للمفوتر الذاتي", fr: "Déclaration sur l'honneur (auto-entrepreneur)" },
    desc: D(
      "تصريح بالنشاط والمبلغ السنوي للمفوتر الذاتي للتصريحات الضريبية.",
      "Activity and annual turnover statement for the auto-entrepreneur's tax filings.",
      "Déclaration d'activité et de chiffre d'affaires pour l'auto-entrepreneur.",
      "Declaración de actividad y facturación del autónomo.",
      "Dichiarazione di attività e fatturato per l'auto-imprenditore.",
      "Erklärung zu Tätigkeit und Umsatz für den Auto-Entrepreneur.",
      "Заявление о деятельности и обороте самозанятого."
    ),
    where: { ar: "بوابة المقاول الذاتي (OMPIC) ومصلحة الضرائب", fr: "Portail auto-entrepreneur (OMPIC) et service des impôts" },
    authority: "ompic",
    keywords: ["مفوتر ذاتي", "auto-entrepreneur", "المقاول الذاتي", "تصريح سنوي"],
    templateId: "declaration-auto-entrepreneur",
    fields: {
      ar: ["الاسم الكامل", "رقم التسجيل كمفوتر ذاتي", "طبيعة النشاط", "المبلغ السنوي للداخل", "الفترة المعنية", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° d'inscription", "Nature de l'activité", "Chiffre d'affaires annuel", "Période", "Date et signature"],
      en: ["Full name", "Registration number", "Activity nature", "Annual turnover", "Period", "Date and signature"],
    },
  },
  {
    id: "fiche-paie",
    cat: "muqawalat",
    title: { ar: "نموذج ورقة الأجر (Bulletin de paie)", fr: "Modèle de bulletin de paie" },
    desc: D(
      "نموذج ورقة أجر شهرية بالبنود القانونية (منها CNSS والضريبة).",
      "Monthly payslip template with legal items (CNSS, tax).",
      "Modèle de bulletin mensuel avec rubriques légales (CNSS, IR).",
      "Modelo de nómina mensual con rubros legales.",
      "Modello di busta paga mensile con voci di legge.",
      "Monatslohnmuster mit gesetzlichen Posten.",
      "Шаблон расчётного листка с законными пунктами."
    ),
    where: { ar: "تصرف للمياجرين شهرياً (إلزام قانوني على المشغل)", fr: "Remis mensuellement aux salariés (obligation légale)" },
    keywords: ["ورقة الأجر", "bulletin de paie", "payslip", "الأجر الشهري", "الراتب"],
    templateId: "fiche-paie",
    fields: {
      ar: ["اسم المقاولة", "اسم الأجير", "رقم تسجيله CNSS", "الوظيفة", "الأجر الأساسي", "الساعات الإضافية", "اقتطاع CNSS والضريبة", "الأجر الصافي"],
      fr: ["Nom de l'entreprise", "Nom du salarié", "N° CNSS", "Poste", "Salaire de base", "Heures supplémentaires", "Retenues CNSS/IR", "Net à payer"],
      en: ["Company name", "Employee name", "CNSS number", "Position", "Base salary", "Overtime", "CNSS/tax deductions", "Net pay"],
    },
  },

  // ══════════════ bank ══════════════
  {
    id: "amo-ald",
    cat: "bank",
    title: { ar: "طلب الاستفادة من ALD (مرض مزمن)", fr: "Demande ALD (maladie chronique)" },
    desc: D(
      "طلب الاستفادة من التغطية الشاملة لأمراض طويلة المدى.",
      "Request for long-term illness (ALD) full coverage.",
      "Demande de prise en charge à 100 % des affections de longue durée.",
      "Solicitud de cobertura de enfermedad de larga duración.",
      "Domanda di copertura per malattia cronica.",
      "Antrag auf Deckung bei chronischer Erkrankung.",
      "Заявление о покрытии хронического заболевания."
    ),
    where: { ar: "وكالة CNSS أو بوابة MaCNSS مع تقرير طبي", fr: "Agence CNSS ou portail MaCNSS avec rapport médical" },
    authority: "cnss",
    keywords: ["ALD", "مرض مزمن", "maladie chronique", "التغطية الصحية", "علاج"],
    templateId: "amo-ald",
    fields: {
      ar: ["الاسم الكامل", "رقم التسجيل CNSS", "المرض المعني", "تقرير الطبيب المعالج", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CNSS", "Affection concernée", "Rapport du médecin traitant", "Date et signature"],
      en: ["Full name", "CNSS number", "Illness concerned", "Treating physician's report", "Date and signature"],
    },
  },
  {
    id: "feuille-soins",
    cat: "bank",
    title: { ar: "ورقة العلاج (تصريح بالمصاريف)", fr: "Feuille de soins (déclaration)" },
    desc: D(
      "نموذج ورقة علاج لتعبئتها وطلب استرجاع المصاريف الطبية.",
      "Care sheet template to fill in and claim medical expense reimbursement.",
      "Feuille de soins à remplir pour le remboursement.",
      "Hoja de cuidados para solicitar el reembolso.",
      "Modulo sanitario per la richiesta di rimborso.",
      "Krankenblatt zur Erstattung der Ausgaben.",
      "Лист лечения для возмещения расходов."
    ),
    where: { ar: "يودع لدى CNSS/CNOPS أو التأمين التكميلي خلال الأجل", fr: "À déposer à la CNSS/CNOPS dans les délais" },
    authority: "cnss",
    keywords: ["ورقة العلاج", "feuille de soins", "استرجاع المصاريف", "تعويض", "علاج"],
    templateId: "feuille-soins",
    fields: {
      ar: ["اسم المؤمن له", "رقم التسجيل", "اسم الطبيب", "وصف العلاج", "المصاريف بالدرهم", "تاريخ العلاج", "التاريخ والإمضاء"],
      fr: ["Nom de l'assuré", "N° d'immatriculation", "Nom du médecin", "Description des soins", "Frais en MAD", "Date des soins", "Date et signature"],
      en: ["Insured name", "Registration number", "Doctor name", "Treatment description", "Costs in MAD", "Treatment date", "Date and signature"],
    },
  },
  {
    id: "demande-pension",
    cat: "bank",
    title: { ar: "طلب معاش الشيخوخة (CNSS)", fr: "Demande de pension de retraite (CNSS)" },
    desc: D(
      "طلب الاستفادة من معاش الشيخوخة أو استرجاع الاشتراكات.",
      "Request for retirement pension or contributions refund.",
      "Demande de pension de vieillesse ou de remboursement des cotisations.",
      "Solicitud de pensión de jubilación o reembolso.",
      "Domanda di pensione o rimborso dei contributi.",
      "Antrag auf Altersrente oder Beitragsrückerstattung.",
      "Заявление на пенсию или возврат взносов."
    ),
    where: { ar: "وكالة CNSS مع ملف الوثائق (رسم الولادة، شهادات العمل...)", fr: "Agence CNSS avec dossier (acte de naissance, attestations...)" },
    authority: "cnss",
    keywords: ["معاش", "شيخوخة", "retraite", "pension", "CNSS"],
    templateId: "demande-pension",
    fields: {
      ar: ["الاسم الكامل", "رقم التسجيل CNSS", "تاريخ الولادة", "آخر مشغل", "مدة الاشتراك", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CNSS", "Date de naissance", "Dernier employeur", "Période de cotisation", "Date et signature"],
      en: ["Full name", "CNSS number", "Birth date", "Last employer", "Contribution period", "Date and signature"],
    },
  },
  {
    id: "demande-prestations-familiales",
    cat: "bank",
    title: { ar: "طلب تعويضات عائلية (إضافة مولود)", fr: "Demande de prestations familiales" },
    desc: D(
      "طلب الاستفادة من التعويضات العائلية بعد ولادة مولود جديد.",
      "Request for family benefits after a new birth.",
      "Demande d'allocations familiales après une naissance.",
      "Solicitud de prestaciones familiares tras un nacimiento.",
      "Domanda di assegni familiari dopo una nascita.",
      "Antrag auf Familienleistungen nach einer Geburt.",
      "Заявление на семейные пособия после рождения ребёнка."
    ),
    where: { ar: "بوابة MaCNSS أو وكالة CNSS مع رسم ولادة المولود", fr: "Portail MaCNSS ou agence avec acte de naissance" },
    authority: "cnss",
    popular: true,
    keywords: ["تعويضات عائلية", "prestations familiales", "إضافة مولود", "allocations", "CNSS مولود"],
    templateId: "demande-prestations-familiales",
    fields: {
      ar: ["اسم المؤمن له", "رقم التسجيل CNSS", "اسم المولود وتاريخ ميلاده", "عدد الأطفال المكفولين", "التاريخ والإمضاء"],
      fr: ["Nom de l'assuré", "N° CNSS", "Nom du nouveau-né et date", "Nombre d'enfants à charge", "Date et signature"],
      en: ["Insured name", "CNSS number", "Newborn name and date", "Dependent children count", "Date and signature"],
    },
  },
  {
    id: "cnops-ayants-droit",
    cat: "bank",
    title: { ar: "طلب إضافة ذوي الحقوق (CNOPS)", fr: "Demande d'ajout d'ayants droit (CNOPS)" },
    desc: D(
      "طلب إضافة الزوج أو الأبناء للتغطية الصحية لموظف قطاع عام.",
      "Request to add spouse or children to a public servant's health coverage.",
      "Demande d'ajout du conjoint/enfants à la couverture CNOPS.",
      "Solicitud de añadir cónyuge/hijos a la cobertura CNOPS.",
      "Richiesta di aggiunta di familiari alla copertura CNOPS.",
      "Antrag auf Aufnahme von Angehörigen in die CNOPS-Deckung.",
      "Заявление о включении родных в покрытие CNOPS."
    ),
    where: { ar: "مصلحة الموارد البشرية للإدارة ثم CNOPS", fr: "Service RH de l'administration puis CNOPS" },
    authority: "cnops",
    keywords: ["CNOPS", "ذوو الحقوق", "ayants droit", "إضافة أبناء", "الزوج"],
    templateId: "cnops-ayants-droit",
    fields: {
      ar: ["اسم الموظف", "رقم التسجيل CNOPS", "أسماء ذوي الحقوق", "صلتهم", "الوثائق المرفقة", "التاريخ والإمضاء"],
      fr: ["Nom du fonctionnaire", "N° CNOPS", "Noms des ayants droit", "Lien de parenté", "Pièces jointes", "Date et signature"],
      en: ["Civil servant name", "CNOPS number", "Beneficiaries names", "Relationship", "Attached documents", "Date and signature"],
    },
  },

  // ══════════════ ijraat ══════════════
  {
    id: "procedure-vignette",
    cat: "ijraat",
    title: { ar: "مسطرة أداء رسوم السيارة (الفيينيت)", fr: "Procédure de paiement de la vignette" },
    desc: D(
      "دليل أداء رسوم السيارة السنوية إلكترونياً أو بالوكالات المعتمدة.",
      "Guide to paying annual vehicle tax electronically or at approved counters.",
      "Guide de paiement de la taxe sur les véhicules en ligne ou en agence.",
      "Guía de pago del impuesto de circulación.",
      "Guida al pagamento della tassa di circolazione.",
      "Anleitung zur Zahlung der Kfz-Steuer.",
      "Порядок оплаты дорожного налога."
    ),
    where: { ar: "بوابة الخزينة العامة tgr.gov.ma أو وكالات أداء المعتمدة قبل 28 فبراير", fr: "Portail TGR (tgr.gov.ma) ou agences agréées avant fin février" },
    authority: "tgr",
    popular: true,
    keywords: ["الفيينيت", "vignette", "رسوم السيارة", "taxe véhicule", "رسوم المركبات"],
    templateId: "procedure-vignette",
    fields: {
      ar: ["اسم المعني", "لوحة المركبة", "نوع الوقود", "قدم المركبة", "المبلغ"],
      fr: ["Nom", "Immatriculation", "Carburant", "Âge du véhicule", "Montant"],
      en: ["Name", "Plate number", "Fuel type", "Vehicle age", "Amount"],
    },
  },
  {
    id: "procedure-societe",
    cat: "ijraat",
    title: { ar: "مسطرة تأسيس شركة (السجل التجاري)", fr: "Procédure de création de société" },
    desc: D(
      "خطوات تأسيس شركة مغربية من التسمية إلى السجل التجاري والضريبة.",
      "Steps to found a Moroccan company from naming to commercial register and tax.",
      "Étapes de création d'une société marocaine jusqu'au RC.",
      "Pasos para crear una sociedad marroquí hasta el RC.",
      "Passi per costituire una società marocchina fino al RC.",
      "Schritte zur Gründung einer marokkanischen Gesellschaft bis zum HR.",
      "Шаги создания марокканской компании до торгового реестра."
    ),
    where: { ar: "منصة OMPIC للتحقق من التسمية والتسجيل، ثم CNSS والضرائب", fr: "Plateforme OMPC pour la dénomination, puis CNSS et impôts" },
    authority: "ompic",
    keywords: ["تأسيس شركة", "création société", "السجل التجاري", "registre commerce", "شركة"],
    templateId: "procedure-societe",
    fields: {
      ar: ["اسم الشركة المقترح", "شكلها القانوني", "رأسمالها", "النشاط", "المقر"],
      fr: ["Dénomination proposée", "Forme juridique", "Capital", "Activité", "Siège"],
      en: ["Proposed name", "Legal form", "Capital", "Activity", "Head office"],
    },
  },
  {
    id: "procedure-mre",
    cat: "ijraat",
    title: { ar: "السجل العدلي للمغاربة بالخارج (B3 عن بعد)", fr: "Casier judiciaire des MRE (B3 à distance)" },
    desc: D(
      "مسطرة طلب السجل العدلي إلكترونياً للمقيمين بالخارج واستلامه بالبريد.",
      "Procedure to request the criminal record online from abroad.",
      "Procédure de demande du B3 en ligne depuis l'étranger.",
      "Procedimiento de solicitud del B3 en línea desde el extranjero.",
      "Procedura di richiesta del B3 online dall'estero.",
      "Verfahren zur Online-Beantragung des B3 aus dem Ausland.",
      "Процедура онлайн-запроса справки о судимости из-за рубежа."
    ),
    where: { ar: "بوابة السجل العدلي الإلكتروني مع بطاقة التعريف أو جواز السفر", fr: "Portail du casier judiciaire avec CIN ou passeport" },
    authority: "casier-judiciaire",
    popular: true,
    keywords: ["السجل العدلي", "MRE", "ب3", "casier judiciaire", "المغاربة بالخارج", "B3"],
    templateId: "procedure-mre",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة أو جواز السفر", "بلد الإقامة", "عنوان التوصيل", "البريد الإلكتروني"],
      fr: ["Nom complet", "N° CIN ou passeport", "Pays de résidence", "Adresse de livraison", "E-mail"],
      en: ["Full name", "ID or passport number", "Country of residence", "Delivery address", "Email"],
    },
  },

  // ══════════════ naulat-fasikh ══════════════
  {
    id: "resiliation-bail",
    cat: "naulat-fasikh",
    title: { ar: "فسخ عقد كراء بالتراضي", fr: "Résiliation amiable du bail" },
    desc: D(
      "اتفاق طرفي عقد الكراء على فسخه بشروط محددة قبل الأجل.",
      "Landlord-tenant agreement to end the lease early on set terms.",
      "Accord des parties pour mettre fin au bail avant terme.",
      "Acuerdo para finalizar el alquiler antes de plazo.",
      "Accordo di recesso consensuale dalla locazione.",
      "Einvernehmliche Aufhebung des Mietvertrags.",
      "Соглашение о досрочном расторжении аренды."
    ),
    where: { ar: "يحرر من نسختين ويحتفظ به الطرفان؛ يخبر به الضامن إن وجد", fr: "En deux exemplaires ; notifier la caution le cas échéant" },
    popular: true,
    keywords: ["فسخ كراء", "إنهاء عقد الكراء", "résiliation bail", "إنهاء الكراء"],
    templateId: "resiliation-bail",
    fields: {
      ar: ["اسم المكري", "اسم المكتري", "عنوان العقار", "تاريخ العقد الأصلي", "تاريخ الفسخ", "ترتيبات الضمان", "التاريخ والإمضاءات"],
      fr: ["Nom du bailleur", "Nom du locataire", "Adresse du bien", "Date du bail initial", "Date de résiliation", "Dispositions sur la caution", "Date et signatures"],
      en: ["Landlord name", "Tenant name", "Property address", "Original lease date", "Termination date", "Deposit arrangements", "Date and signatures"],
    },
  },
  {
    id: "resiliation-travail",
    cat: "naulat-fasikh",
    title: { ar: "فسخ عقد عمل بالتراضي", fr: "Rupture conventionnelle du contrat" },
    desc: D(
      "اتفاق الأجير والمشغل على إنهاء علاقة العمل بشروط مرضية للطرفين.",
      "Agreement of employee and employer to end the relation on mutual terms.",
      "Accord pour rompre le contrat de travail d'un commun accord.",
      "Acuerdo de extinción contractual de común acuerdo.",
      "Accordo di risoluzione consensuale del rapporto.",
      "Aufhebung des Arbeitsvertrags im Einvernehmen.",
      "Расторжение трудового договора по соглашению сторон."
    ),
    where: { ar: "يحرر من نسختين وتؤدى المستحقات (STC) عند التوقيع", fr: "En deux exemplaires avec règlement du STC à la signature" },
    keywords: ["فسخ عقد عمل", "إنهاء عمل", "rupture conventionnelle", "اتفاق عمل"],
    templateId: "resiliation-travail",
    fields: {
      ar: ["اسم الأجير", "اسم المشغل", "الوظيفة", "تاريخ العقد", "تاريخ الفسخ", "التعويضات المتفق عليها", "التاريخ والإمضاءات"],
      fr: ["Nom du salarié", "Nom de l'employeur", "Poste", "Date du contrat", "Date de rupture", "Indemnités convenues", "Date et signatures"],
      en: ["Employee name", "Employer name", "Position", "Contract date", "Termination date", "Agreed compensation", "Date and signatures"],
    },
  },
  {
    id: "resiliation-assurance",
    cat: "naulat-fasikh",
    title: { ar: "فسخ عقد تأمين", fr: "Résiliation de contrat d'assurance" },
    desc: D(
      "طلب فسخ عقد تأمين (سيارة، سكن...) مع استرجاع ما تبقى من الأقساط.",
      "Request to cancel an insurance policy (car, home...) with pro-rata refund.",
      "Demande de résiliation d'assurance avec remboursement au prorata.",
      "Solicitud de anulación de seguro con reembolso proporcional.",
      "Richiesta di recesso dalla polizza con rimborso.",
      "Kündigung eines Versicherungsvertrags mit Erstattung.",
      "Расторжение страхового договора с возвратом части взносов."
    ),
    where: { ar: "يوجه للشركة المؤمنة بالبريد المضمون أو يسلم مقابل وصل", fr: "À l'assureur en recommandé ou contre récépissé" },
    keywords: ["فسخ تأمين", "إلغاء تأمين", "résiliation assurance", "تأمين السيارة"],
    templateId: "resiliation-assurance",
    fields: {
      ar: ["اسم المؤمن له", "رقم العقد", "نوع التأمين", "سبب الفسخ", "تاريخ التوقف المطلوب", "التاريخ والإمضاء"],
      fr: ["Nom de l'assuré", "N° de police", "Type d'assurance", "Motif", "Date d'arrêt demandée", "Date et signature"],
      en: ["Policyholder name", "Policy number", "Insurance type", "Reason", "Requested stop date", "Date and signature"],
    },
  },
  {
    id: "resiliation-internet",
    cat: "naulat-fasikh",
    title: { ar: "فسخ اشتراك الإنترنت/الاتصالات", fr: "Résiliation d'abonnement internet/télécom" },
    desc: D(
      "طلب إيقاف اشتراك الإنترنت أو الهاتف مع تحويل الخط إن رغب.",
      "Request to stop an internet/phone subscription, with number portability if desired.",
      "Demande de résiliation d'abonnement avec portabilité du numéro si souhaité.",
      "Solicitud de baja del servicio con portabilidad opcional.",
      "Richiesta di cessazione del servizio con portabilità.",
      "Kündigung des Anschlusses mit Rufnummernportierung.",
      "Расторжение абонемента с сохранением номера."
    ),
    where: { ar: "وكالة المزود أو بريده الرسمي؛ بعد الأجل يوقف الخط في أجل 10 أيام", fr: "Agence du fournisseur ; la ligne est coupée sous 10 jours" },
    keywords: ["فسخ اشتراك", "إلغاء أنترنت", "résiliation abonnement", "إيقاف الإنترنت"],
    templateId: "resiliation-internet",
    fields: {
      ar: ["اسم المشترك", "رقم الاشتراك", "عنوان التركيب", "سبب الإيقاف", "تاريخ التوقف المطلوب", "التاريخ والإمضاء"],
      fr: ["Nom de l'abonné", "N° d'abonnement", "Adresse d'installation", "Motif", "Date d'arrêt", "Date et signature"],
      en: ["Subscriber name", "Subscription number", "Installation address", "Reason", "Stop date", "Date and signature"],
    },
  },
  {
    id: "tanazol-vehicule",
    cat: "naulat-fasikh",
    title: { ar: "تنازل عن مركبة", fr: "Cession d'un véhicule" },
    desc: D(
      "عقد تنازل عن سيارة أو دراجة لفائدة متنازل له مع تحمل المسؤوليات.",
      "Vehicle cession deed in favor of a transferee with responsibility transfer.",
      "Acte de cession d'un véhicule avec transfert des responsabilités.",
      "Acta de cesión de vehículo con transferencia de responsabilidades.",
      "Atto di cessione di un veicolo con passaggio di responsabilità.",
      "Abtretung eines Fahrzeugs mit Haftungsübergang.",
      "Акт передачи автомобиля с переходом ответственности."
    ),
    where: { ar: "يحرر من نسختين ثم يقدم لوكالة التسجيل خلال أجل 30 يوماً", fr: "En deux exemplaires puis à l'agence d'immatriculation sous 30 jours" },
    popular: true,
    keywords: ["تنازل سيارة", "cession véhicule", "تنازل عن دراجة", "نقل ملكية"],
    templateId: "tanazol-vehicule",
    fields: {
      ar: ["اسم المتنازل", "رقم بطاقته", "اسم المتنازل له", "بيانات المركبة", "الثمن إن وجد", "التاريخ والإمضاءات"],
      fr: ["Nom du cédant", "N° CIN", "Nom du cessionnaire", "Données du véhicule", "Prix le cas échéant", "Date et signatures"],
      en: ["Transferor name", "ID number", "Transferee name", "Vehicle data", "Price if any", "Date and signatures"],
    },
  },
  {
    id: "tanazol-bail"
    ,
    cat: "naulat-fasikh",
    title: { ar: "تنازل عن عقد كراء", fr: "Cession du bail" },
    desc: D(
      "تنازل المكتري عن عقده لمكتري جديد بموافقة المكري.",
      "Tenant's transfer of the lease to a new tenant with landlord consent.",
      "Cession du bail à un nouveau locataire avec accord du bailleur.",
      "Cesión del alquiler a un nuevo inquilino con consentimiento.",
      "Cessione del contratto a un nuovo inquilino col consenso del locatore.",
      "Übertragung des Mietvertrags mit Zustimmung des Vermieters.",
      "Передача аренды новому арендатору с согласия арендодателя."
    ),
    where: { ar: "يوقع من الأطراف الثلاثة ويحتفظ به كل طرف", fr: "Signé par les trois parties" },
    keywords: ["تنازل كراء", "cession bail", "تغيير مكتري", "نقل الكراء"],
    templateId: "tanazol-bail",
    fields: {
      ar: ["اسم المكري", "المكتري الأصلي", "المكتري الجديد", "عنوان العقار", "شروط التنازل", "التاريخ والإمضاءات"],
      fr: ["Nom du bailleur", "Locataire sortant", "Nouveau locataire", "Adresse du bien", "Conditions de la cession", "Date et signatures"],
      en: ["Landlord name", "Outgoing tenant", "New tenant", "Property address", "Cession terms", "Date and signatures"],
    },
  },
  {
    id: "tanazol-droits",
    cat: "naulat-fasikh",
    title: { ar: "تنازل عن مستحقات (نفقة/طلاق)", fr: "Renonciation à des droits (pension/divorce)" },
    desc: D(
      "تنازل كتابي عن مستحقات مالية أو حق الزيارة مع حفظ صلة الرحم.",
      "Written waiver of financial dues or rights (e.g. alimony), keeping family ties.",
      "Renonciation écrite à des droits financiers en gardant les liens familiaux.",
      "Renuncia escrita a derechos económicos manteniendo la relación familiar.",
      "Rinuncia scritta a diritti mantenendo i rapporti familiari.",
      "Schriftlicher Verzicht unter Wahrung der Familienbande.",
      "Письменный отказ от прав с сохранением семейных связей."
    ),
    where: { ar: "يحرر بحضور الطرفين؛ وللنسخة الرسمية يوثق لدى العدول", fr: "Devant les deux parties ; à faire acter chez les adouls pour une version officielle" },
    keywords: ["تنازل عن النفقة", "التنازل عن المستحقات", "renonciation", "نفقة"],
    templateId: "tanazol-droits",
    fields: {
      ar: ["اسم المتنازلة/المتنازل", "رقم بطاقته", "اسم الطرف الآخر", "المستحقات المتنازل عنها", "بقاء حق الزيارة", "التاريخ والإمضاء"],
      fr: ["Nom du renonçant", "N° CIN", "Nom de l'autre partie", "Droits renoncés", "Maintien du droit de visite", "Date et signature"],
      en: ["Waiving party name", "ID number", "Other party name", "Waived dues", "Visitation rights kept", "Date and signature"],
    },
  },
];
