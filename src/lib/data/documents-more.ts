// Additional documents (phase 2) — extends documents.ts
// Covers the full public-writer catalog breadth: administrative requests,
// complaints, certificates, sworn declarations, commitments, powers of
// attorney and contracts. All wording authored for EPDP.
import type { CategoryId, L } from "./categories";
import type { DocumentItem } from "./documents";

const D = (ar: string, en: string, fr: string, es: string, it: string, de: string, ru: string): L => ({
  ar, en, fr, es, it, de, ru,
});

export const documentsMore: DocumentItem[] = [
  // ══════════════ demandes ══════════════
  {
    id: "demande-passeport",
    cat: "demandes",
    title: { ar: "طلب الحصول على جواز السفر", fr: "Demande de passeport" },
    desc: D(
      "طلب كتابي لاستخراج جواز السفر البيومتري يرفق بملف الطلب.",
      "Written request for a biometric passport, attached to the application file.",
      "Demande écrite de passeport biométrique à joindre au dossier.",
      "Solicitud escrita de pasaporte biométrico para adjuntar al expediente.",
      "Richiesta scritta di passaporto biometrico da allegare alla pratica.",
      "Schriftlicher Antrag auf einen biometrischen Reisepass für die Akte.",
      "Письменное заявление на биометрический паспорт для приложения к делу."
    ),
    where: { ar: "ملحق الشرطة (مركز التسجيل) بعد حجز الموعد إلكترونياً", fr: "Poste de police (centre d'enrôlement) après rendez-vous en ligne" },
    authority: "passeport",
    popular: true,
    keywords: ["جواز السفر", "passeport", "passport", "البيومترية", "سفر"],
    templateId: "demande-passeport",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "العنوان", "الهاتف", "نوع الطلب (عادي/استعجالي)", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Adresse", "Téléphone", "Type de demande (ordinaire/urgent)", "Date et signature"],
      en: ["Full name", "ID number", "Address", "Phone", "Request type (standard/urgent)", "Date and signature"],
    },
  },
  {
    id: "demande-carte-grise",
    cat: "demandes",
    title: { ar: "طلب البطاقة الرمادية (نقل الملكية)", fr: "Demande de carte grise (transfert)" },
    desc: D(
      "طلب تسليم أو تجديد البطاقة الرمادية للمركبة أو نقل ملكيتها.",
      "Request to issue or renew a vehicle registration card or transfer ownership.",
      "Demande de délivrance ou de renouvellement de la carte grise ou de transfert de propriété.",
      "Solicitud de emisión o renovación de la tarjeta gris o transferencia de propiedad.",
      "Richiesta di emissione o rinnovo della carta di circolazione o trasferimento di proprietà.",
      "Antrag auf Ausstellung oder Erneuerung des Fahrzeugscheins bzw. Eigentumsübertragung.",
      "Заявление на выдачу или обмен техпаспорта либо передачу права собственности."
    ),
    where: { ar: "وكالة تسجيل السيارات (NARSA) أو مراكز التسجيل المعتمدة", fr: "Agence d'immatriculation (NARSA) ou centres agréés" },
    keywords: ["بطاقة رمادية", "carte grise", "نقل الملكية", "سيارة", "الرمادية", "immatriculation"],
    templateId: "demande-carte-grise",
    fields: {
      ar: ["اسم البائع السابق", "اسم المشتري", "رقم البطاقة الرمادية", "نوع المركبة وطرازها", "رقم الهيكل", "التاريخ والإمضاء"],
      fr: ["Nom de l'ancien propriétaire", "Nom de l'acquéreur", "N° de carte grise", "Type et marque du véhicule", "N° de châssis", "Date et signature"],
      en: ["Previous owner name", "Buyer name", "Registration card number", "Vehicle type and make", "Chassis number", "Date and signature"],
    },
  },
  {
    id: "demande-permis-conduire"
    ,
    cat: "demandes",
    title: { ar: "طلب رخصة السياقة", fr: "Demande de permis de conduire" },
    desc: D(
      "طلب الحصول على رخصة السياقة أو استبدالها برخصة من صنف آخر.",
      "Request to obtain a driving licence or exchange it for another category.",
      "Demande d'obtention du permis de conduire ou d'échange vers une autre catégorie.",
      "Solicitud de permiso de conducción o canje por otra categoría.",
      "Richiesta di patente di guida o conversione a un'altra categoria.",
      "Antrag auf einen Führerschein oder Umtausch in eine andere Klasse.",
      "Заявление на получение водительского удостоверения или обмен на другую категорию."
    ),
    where: { ar: "مراكز التسجيل والتصريح بالمركبات التابعة لوزارة التجهيز والنقل", fr: "Centres d'immatriculation relevant du Ministère de l'Équipement et du Transport" },
    keywords: ["رخصة السياقة", "permis de conduire", "driving licence", "السياقة", "رخصة"],
    templateId: "demande-permis-conduire",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "صنف الرخصة المطلوبة", "رقم ملف التسجيل", "الهاتف", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Catégorie demandée", "N° de dossier d'inscription", "Téléphone", "Date et signature"],
      en: ["Full name", "ID number", "Requested category", "Registration file number", "Phone", "Date and signature"],
    },
  },
  {
    id: "demande-bourse",
    cat: "demandes",
    title: { ar: "طلب منحة دراسية", fr: "Demande de bourse d'études" },
    desc: D(
      "طلب الاستفادة من منحة التعليم العالي يودع عبر بوابة منحتي.",
      "Higher-education scholarship request filed on the Minhaty portal.",
      "Demande de bourse de l'enseignement supérieur déposée via Minhaty.",
      "Solicitud de beca de educación superior presentada vía Minhaty.",
      "Domanda di borsa di studio presentata via Minhaty.",
      "Stipendienantrag, eingereicht über das Minhaty-Portal.",
      "Заявление на стипендию, поданное через портал Minhaty."
    ),
    where: { ar: "إلكترونياً عبر بوابة منحتي minhaty.ma مع بداية كل موسم جامعي", fr: "En ligne sur minhaty.ma au début de chaque année universitaire" },
    authority: "minhaty",
    popular: true,
    keywords: ["منحة", "منحتي", "bourse", "scholarship", "المنحة الجامعية", "minhaty"],
    templateId: "demande-bourse",
    fields: {
      ar: ["الاسم الكامل للطالب", "رقم البطاقة الوطنية للطالب", "المؤسسة والشعبة", "معدل البكالوريا", "الوضعية الاجتماعية للأسرة", "التاريخ والإمضاء"],
      fr: ["Nom de l'étudiant", "N° CIN de l'étudiant", "Établissement et filière", "Moyenne du bac", "Situation sociale de la famille", "Date et signature"],
      en: ["Student name", "Student ID number", "Institution and program", "Baccalaureate average", "Family social situation", "Date and signature"],
    },
  },
  {
    id: "demande-diplome",
    cat: "demandes",
    title: { ar: "طلب نسخة من دبلوم", fr: "Demande de copie de diplôme" },
    desc: D(
      "طلب تسليم نسخة مطابقة من دبلوم دراسي أو تكويني.",
      "Request for a certified copy of an academic or vocational diploma.",
      "Demande de copie conforme d'un diplôme scolaire ou de formation.",
      "Solicitud de copia compulsada de un diploma académico o de formación.",
      "Richiesta di copia conforme di un diploma scolastico o di formazione.",
      "Antrag auf beglaubigte Kopie eines Schul- oder Fortbildungsdiploms.",
      "Запрос заверенной копии учебного или профессионального диплома."
    ),
    where: { ar: "المؤسسة التي حررت الدبلوم أو الأكاديمية الجهوية", fr: "L'établissement émetteur ou l'académie régionale" },
    keywords: ["دبلوم", "diplôme", "نسخة من الدبلوم", "شهادة دراسية", "diploma"],
    templateId: "demande-diplome",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "الدبلوم المطلوب", "سنة نيله", "المؤسسة", "سبب الطلب", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Diplôme demandé", "Année d'obtention", "Établissement", "Motif", "Date et signature"],
      en: ["Full name", "ID number", "Diploma requested", "Year obtained", "Institution", "Reason", "Date and signature"],
    },
  },
  {
    id: "demande-restitution",
    cat: "demandes",
    title: { ar: "طلب استرجاع أشياء محجوزة", fr: "Demande de restitution d'objets saisis" },
    desc: D(
      "طلب موجز للمحكمة لاسترجاع مركبة أو أشياء محجوزة.",
      "Summary request to the court to recover a seized vehicle or objects.",
      "Requête sommaire au tribunal pour récupérer un véhicule ou des objets saisis.",
      "Solicitud al tribunal para recuperar un vehículo u objetos incautados.",
      "Richiesta al tribunale per recuperare un veicolo o oggetti sequestrati.",
      "Antrag an das Gericht auf Rückgabe eines beschlagnahmten Fahrzeugs oder von Gegenständen.",
      "Ходатайство в суд о возврате изъятого автомобиля или вещей."
    ),
    where: { ar: "كتابة الضبط بالمحكمة الابتدائية المختصة", fr: "Greffe du tribunal de première instance compétent" },
    keywords: ["استرجاع", "محجوزة", "restitution", "حجز", "سيارة محجوزة"],
    templateId: "demande-restitution",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "وصف الأشياء المحجوزة", "مرجع الحجز", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Description des objets saisis", "Référence de la saisie", "Date et signature"],
      en: ["Full name", "ID number", "Description of seized objects", "Seizure reference", "Date and signature"],
    },
  },
  {
    id: "demande-inscription-scolaire",
    cat: "demandes",
    title: { ar: "طلب تسجيل مدرسي", fr: "Demande d'inscription scolaire" },
    desc: D(
      "طلب تسجيل تلميذ بمؤسسة تعليمية عمومية أو خصوصية.",
      "Request to enroll a pupil in a public or private school.",
      "Demande d'inscription d'un élève dans un établissement public ou privé.",
      "Solicitud de inscripción de un alumno en un centro público o privado.",
      "Richiesta di iscrizione di un alunno in una scuola pubblica o privata.",
      "Antrag auf Schulaufnahme eines Kindes in eine öffentliche oder private Einrichtung.",
      "Заявление о зачислении ученика в государственную или частную школу."
    ),
    where: { ar: "إدارة المؤسسة التعليمية (مع شهادة السكنى ونسخة رسم الولادة)", fr: "Administration de l'établissement (avec attestation de résidence et acte de naissance)" },
    authority: "men",
    keywords: ["تسجيل مدرسي", "inscription scolaire", "التسجيل", "مدرسة", "school enrollment"],
    templateId: "demande-inscription-scolaire",
    fields: {
      ar: ["اسم التلميذ وتاريخ ميلاده", "اسم الولي", "رقم بطاقة الولي", "المستوى الدراسي", "المؤسسة المطلوبة", "التاريخ والإمضاء"],
      fr: ["Nom et date de naissance de l'élève", "Nom du tuteur", "N° CIN du tuteur", "Niveau scolaire", "Établissement demandé", "Date et signature"],
      en: ["Pupil name and birth date", "Guardian name", "Guardian ID number", "School level", "Requested institution", "Date and signature"],
    },
  },

  // ══════════════ chikayat ══════════════
  {
    id: "chikaya-narsa",
    cat: "chikayat",
    title: { ar: "شكاية للوكالة الوطنية للسلامة الطرقية", fr: "Réclamation à l'Agence Nationale de la Sécurité Routière" },
    desc: D(
      "شكاية تتعلق بسلامة الطرق أو خروبات المراقبة التقنية.",
      "Complaint related to road safety or technical inspection issues.",
      "Réclamation liée à la sécurité routière ou au contrôle technique.",
      "Reclamación sobre seguridad vial o control técnico.",
      "Reclamo relativo alla sicurezza stradale o alla revisione.",
      "Beschwerde zur Verkehrssicherheit oder technischen Prüfung.",
      "Жалоба на дорожную безопасность или техосмотр."
    ),
    where: { ar: "مصالح الوكالة الوطنية للسلامة الطرقية أو البوابة الوطنية للشكايات", fr: "Services de l'Agence ou portail national des réclamations" },
    keywords: ["السلامة الطرقية", "المراقبة التقنية", "narsa", "sécurité routière", "road safety"],
    templateId: "chikaya-narsa",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "رقم هاتف للتواصل", "وصف المشكل", "تاريخ الواقعة", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Téléphone", "Description du problème", "Date de l'incident", "Date et signature"],
      en: ["Full name", "ID number", "Phone", "Problem description", "Incident date", "Date and signature"],
    },
  },
  {
    id: "chikaya-internet",
    cat: "chikayat",
    title: { ar: "شكاية مزود خدمات الإنترنت", fr: "Réclamation auprès d'un fournisseur d'accès" },
    desc: D(
      "شكاية لضعف خدمات الإنترنت أو الاتصالات أو قطعها دون مبرر.",
      "Complaint about poor or interrupted internet/telecom services.",
      "Réclamation pour services internet/télécom défaillants ou interrompus.",
      "Reclamación por servicios de internet/telecom deficientes.",
      "Reclamo per servizi internet/telefonia deficienti o interrotti.",
      "Beschwerde über mangelhafte oder unterbrochene Internet-/Telefondienste.",
      "Жалоба на плохое качество или перебои интернет/телеком услуг."
    ),
    where: { ar: "خدمة الزبائن لمزود الخدمة، وإذا لم يُجب خلال أجل معقول فعبر البوابة الوطنية للشكايات", fr: "Service client du fournisseur ; à défaut, portail national des réclamations" },
    keywords: ["الإنترنت", "اتصالات", "أنترنت", "fournisseur internet", "réclamation telecom", "انقطاع الأنترنت"],
    templateId: "chikaya-internet",
    fields: {
      ar: ["الاسم الكامل", "رقم التعاقد/الاشتراك", "العنوان", "الهاتف", "وصف الخلل وتاريخه", "التعويض المطلوب", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° de contrat/abonnement", "Adresse", "Téléphone", "Description de la panne et date", "Compensation demandée", "Date et signature"],
      en: ["Full name", "Contract/subscription number", "Address", "Phone", "Fault description and date", "Requested compensation", "Date and signature"],
    },
  },
  {
    id: "chikaya-consommation",
    cat: "chikayat",
    title: { ar: "شكاية مؤسسة تجارية (حماية المستهلك)", fr: "Réclamation commerciale (protection du consommateur)" },
    desc: D(
      "شكاية عن منتوج معيب أو خداع تجاري أو رفض الإرجاع.",
      "Complaint about a defective product, misleading trade or refusal of return.",
      "Réclamation pour produit défectueux, pratique trompeuse ou refus de retour.",
      "Reclamación por producto defectuoso o práctica engañosa.",
      "Reclamo per prodotto difettoso o pratiche commerciali ingannevoli.",
      "Beschwerde über mangelhafte Ware oder irreführende Geschäftspraktiken.",
      "Жалоба на дефектный товар или недобросовестную торговлю."
    ),
    where: { ar: "المؤسسة أولاً كتابةً، ثم مصالح حماية المستهلك بالجماعة", fr: "D'abord l'établissement par écrit, puis services de protection du consommateur" },
    keywords: ["مستهلك", "منتوج", "إرجاع", "consommation", "consumer", "تجارة"],
    templateId: "chikaya-consommation",
    fields: {
      ar: ["الاسم الكامل", "الهاتف", "اسم المؤسسة وعنوانها", "المنتوج/الخدمة المعنية", "مبلغ الثمن", "وصف المشكل", "التاريخ والإمضاء"],
      fr: ["Nom complet", "Téléphone", "Nom et adresse de l'établissement", "Produit/service concerné", "Prix payé", "Description du problème", "Date et signature"],
      en: ["Full name", "Phone", "Business name and address", "Product/service concerned", "Price paid", "Problem description", "Date and signature"],
    },
  },
  {
    id: "chikaya-cheque",
    cat: "chikayat",
    title: { ar: "شكاية شيك بدون رصيد", fr: "Plainte pour chèque sans provision" },
    desc: D(
      "شكاية إلى وكيل الملك بشأن شيك بدون رصيد مع المطالبة بالأداء.",
      "Complaint to the King's prosecutor about an uncovered cheque.",
      "Plainte au procureur du Roi pour chèque sans provision.",
      "Denuncia al fiscal por cheque sin fondos.",
      "Denuncia alla procura per assegno scoperto.",
      "Strafanzeige bei der Staatsanwaltschaft wegen ungedecktem Scheck.",
      "Жалоба прокурору на чек без покрытия."
    ),
    where: { ar: "النيابة العامة بالمحكمة الابتدائية (مع أصل الشيك وإشعار عدم الأداء)", fr: "Parquet du tribunal de première instance (avec le chèque et le certificat de non-paiement)" },
    authority: "justice",
    keywords: ["شيك", "بدون رصيد", "chèque", "cheque", "provision", "بنك"],
    templateId: "chikaya-cheque",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "اسم المسحوب عليه", "رقم الشيك ومبلغه", "اسم البنك", "تاريخ الاستحقاق", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Nom du tiré", "N° et montant du chèque", "Banque", "Date d'échéance", "Date et signature"],
      en: ["Full name", "ID number", "Drawer name", "Cheque number and amount", "Bank", "Due date", "Date and signature"],
    },
  },

  // ══════════════ ichhadat ══════════════
  {
    id: "attestation-salaire",
    cat: "ichhadat",
    title: { ar: "شهادة الأجر", fr: "Attestation de salaire" },
    desc: D(
      "شهادة من المشغل تثبت مبلغ الأجر الشهري، تطلب للقروض والملفات.",
      "Employer certificate stating monthly salary, used for loans and files.",
      "Attestation de l'employeur mentionnant le salaire mensuel (crédits, dossiers).",
      "Certificado del empleador con el salario mensual (créditos, expedientes).",
      "Certificato del datore di lavoro con lo stipendio mensile.",
      "Arbeitgeberbescheinigung zum Monatsgehalt (Kredite, Akten).",
      "Справка работодателя о размере месячной зарплаты (кредиты, дела)."
    ),
    where: { ar: "إدارة الموارد البشرية بالمقاولة (طبقاً لمدونة الشغل)", fr: "Service RH de l'entreprise (conformément au Code du travail)" },
    popular: true,
    keywords: ["شهادة الأجر", "attestation de salaire", "salary certificate", "الأجر", "راتب"],
    templateId: "attestation-salaire",
    fields: {
      ar: ["اسم الأجير", "الوظيفة", "رقم البطاقة الوطنية", "الأجر الشهري بالدرهم", "تاريخ التوظيف", "اسم المسؤول والمقاولة", "التاريخ والتوقيع"],
      fr: ["Nom du salarié", "Poste", "N° CIN", "Salaire mensuel en MAD", "Date d'embauche", "Nom du responsable et entreprise", "Date et signature"],
      en: ["Employee name", "Position", "ID number", "Monthly salary in MAD", "Hiring date", "Manager and company name", "Date and signature"],
    },
  },
  {
    id: "attestation-prise-charge",
    cat: "ichhadat",
    title: { ar: "شهادة تكفل (للتأشيرة)", fr: "Attestation de prise en charge (visa)" },
    desc: D(
      "شهادة يتعهد فيها المتكفل بتغطية نفقات قريبه خلال السفر.",
      "Certificate whereby a sponsor commits to covering a relative's travel expenses.",
      "Attestation par laquelle un garant s'engage à couvrir les frais de voyage d'un proche.",
      "Certificado donde un garante se compromete a cubrir los gastos de viaje de un familiar.",
      "Certificato con cui un garante si impegna a coprire le spese di viaggio di un congiunto.",
      "Bescheinigung, mit der ein Bürge die Reisekosten eines Angehörigen übernimmt.",
      "Справка о спонсорстве: гарант берёт на себя расходы родственника в поездке."
    ),
    where: { ar: "تودع ضمن ملف التأشيرة بالقنصلية أو السفارة المعنية", fr: "À joindre au dossier de visa auprès du consulat/ambassade" },
    keywords: ["تكفل", "prise en charge", "visa", "تأشيرة", "sponsor"],
    templateId: "attestation-prise-charge",
    fields: {
      ar: ["اسم المتكفل", "رقم بطاقة المتكفل", "مهنة ودخل المتكفل", "اسم المستفيد وصلته", "وجهة السفر ومدته", "التاريخ والإمضاء"],
      fr: ["Nom du garant", "N° CIN du garant", "Profession et revenu du garant", "Nom du bénéficiaire et lien", "Destination et durée du voyage", "Date et signature"],
      en: ["Sponsor name", "Sponsor ID number", "Sponsor profession and income", "Beneficiary name and relationship", "Destination and duration", "Date and signature"],
    },
  },
  {
    id: "attestation-hebergement",
    cat: "ichhadat",
    title: { ar: "شهادة استضافة", fr: "Attestation d'hébergement" },
    desc: D(
      "شهادة يؤكد فيها المضيف إقامة قريبه عنده بمنزله.",
      "Certificate whereby a host confirms a relative resides at their home.",
      "Attestation par laquelle l'hébergeant confirme la résidence d'un proche chez lui.",
      "Certificado donde el anfitrión confirma la residencia de un familiar en su casa.",
      "Certificato con cui l'ospite conferma la residenza di un congiunto presso di lui.",
      "Bescheinigung, wonach der Gastgeber bestätigt, dass ein Angehöriger bei ihm wohnt.",
      "Справка о том, что принимающая сторона подтверждает проживание родственника."
    ),
    where: { ar: "تصدق إمضاؤها لدى السلطة المحلية إن طلبت الإدارة ذلك", fr: "Signature légalisée en autorité locale si l'administration l'exige" },
    popular: true,
    keywords: ["استضافة", "hébergement", "hosting", "سكنى قريب", "الضيافة"],
    templateId: "attestation-hebergement",
    fields: {
      ar: ["اسم المضيف", "رقم بطاقة المضيف", "عنوان السكن", "اسم المستضاف وصلته", "مدة الإقامة", "التاريخ والإمضاء"],
      fr: ["Nom de l'hébergeant", "N° CIN de l'hébergeant", "Adresse du logement", "Nom de l'hébergé et lien", "Durée du séjour", "Date et signature"],
      en: ["Host name", "Host ID number", "Home address", "Hosted person name and relationship", "Stay duration", "Date and signature"],
    },
  },
  {
    id: "attestation-celibat",
    cat: "ichhadat",
    title: { ar: "إشهاد بالحياة الفردية (عزوبة)", fr: "Attestation de célibat" },
    desc: D(
      "شهادة تثبت عدم وجود عقد زواج، تطلب لملفات الزواج والقروض.",
      "Certificate of being unmarried, requested for marriage and loan files.",
      "Attestation de célibat demandée pour mariage et dossiers bancaires.",
      "Certificado de soltería solicitado para matrimonio y expedientes.",
      "Certificato di stato libero richiesto per matrimonio e pratiche.",
      "Ledigkeitsbescheinigung, für Heirat und Akten erforderlich.",
      "Справка о незамужестве/неженстве — для брака и дел."
    ),
    where: { ar: "السلطة المحلية (الباشوية/القيادة) أو مصلحة الحالة المدنية", fr: "Autorité locale (pachalik/caïdat) ou service d'état civil" },
    keywords: ["عزوبة", "celibat", "الحياة الفردية", "célibat", "unmarried"],
    templateId: "attestation-celibat",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "تاريخ ومكان الولادة", "جنس الوثيقة (ذكر/أنثى)", "الغرض من الشهادة", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Date et lieu de naissance", "Genre", "Motif de l'attestation", "Date et signature"],
      en: ["Full name", "ID number", "Birth date and place", "Gender", "Purpose", "Date and signature"],
    },
  },
  {
    id: "attestation-stage",
    cat: "ichhadat",
    title: { ar: "شهادة تدريب", fr: "Attestation de stage" },
    desc: D(
      "شهادة من المقاولة تثبت إنجاز تدريب وتقييمه.",
      "Company certificate confirming completion and evaluation of an internship.",
      "Attestation de l'entreprise confirmant le déroulement du stage.",
      "Certificado de empresa que confirma la realización de prácticas.",
      "Certificato aziendale che conferma lo svolgimento dello stage.",
      "Unternehmensbescheinigung über den absolvierten Praktikum.",
      "Справка компании о прохождении стажировки."
    ),
    where: { ar: "إدارة الموارد البشرية بالمقاولة المستقبِلة", fr: "Service RH de l'entreprise d'accueil" },
    keywords: ["تدريب", "stage", "internship", "placement", "مقيام"],
    templateId: "attestation-stage",
    fields: {
      ar: ["اسم المتدرب", "رقم بطاقته", "المؤسسة التكوينية", "موضوع التدريب", "مدة التدريب", "اسم المسؤول", "التاريخ والتوقيع"],
      fr: ["Nom du stagiaire", "N° CIN", "Établissement de formation", "Sujet du stage", "Durée", "Nom du tuteur", "Date et signature"],
      en: ["Intern name", "ID number", "Training institution", "Internship subject", "Duration", "Supervisor name", "Date and signature"],
    },
  },

  // ══════════════ tasarih ══════════════
  {
    id: "declaration-perte-cin",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بضياع البطاقة الوطنية", fr: "Déclaration de perte de la CIN" },
    desc: D(
      "تصريح بالشرف بضياع البطاقة يرفق بطلب استخراج بدلها.",
      "Sworn statement of ID card loss, attached to the replacement request.",
      "Déclaration sur l'honneur de perte de CIN, jointe à la demande de duplicata.",
      "Declaración jurada de pérdida del DNI, adjunta a la solicitud de duplicado.",
      "Dichiarazione giurata di smarrimento della CIN, allegata alla richiesta di duplicato.",
      "Eidesstattliche Erklärung zum Verlust des Ausweises für die Ersatzantragung.",
      "Заявление об утере удостоверения личности для получения дубликата."
    ),
    where: { ar: "الملحقة الإدارية أو القيادة مع تصريح الضياع لدى الشرطة", fr: "Annexe administrative ou caïdat avec déclaration de perte auprès de la police" },
    authority: "cnie",
    popular: true,
    keywords: ["ضياع البطاقة", "فقدان البطاقة", "perte CIN", "lost ID", "بدل مفقود"],
    templateId: "declaration-perte-cin",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة المفقودة", "ظروف الضياع", "تاريخ الضياع", "العنوان", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° de la CIN perdue", "Circonstances de la perte", "Date de la perte", "Adresse", "Date et signature"],
      en: ["Full name", "Lost ID number", "Loss circumstances", "Loss date", "Address", "Date and signature"],
    },
  },
  {
    id: "declaration-perte-doc",
    cat: "tasarih",
    title: { ar: "تصريح بضياع وثيقة إدارية", fr: "Déclaration de perte d'un document" },
    desc: D(
      "تصريح عام بضياع أي وثيقة إدارية قابل للتخصيص (رسم، دبلوم، عقد...).",
      "Customizable statement covering loss of any administrative document.",
      "Déclaration générale de perte de tout document administratif.",
      "Declaración general de pérdida de cualquier documento administrativo.",
      "Dichiarazione generale di smarrimento di qualsiasi documento amministrativo.",
      "Allgemeine Erklärung zum Verlust eines Verwaltungsdokuments.",
      "Общее заявление об утере любого административного документа."
    ),
    where: { ar: "السلطة المحلية أو الشرطة حسب الوثيقة المفقودة", fr: "Autorité locale ou police selon le document perdu" },
    keywords: ["وثيقة مفقودة", "perte document", "ضياع", "فقدان وثيقة", "lost document"],
    templateId: "declaration-perte-doc",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "الوثيقة المفقودة", "ظروف الضياع", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Document perdu", "Circonstances", "Date et signature"],
      en: ["Full name", "ID number", "Lost document", "Circumstances", "Date and signature"],
    },
  },
  {
    id: "declaration-charge-famille",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بالإعالة", fr: "Déclaration de prise en charge familiale" },
    desc: D(
      "تصريح بالمعيل الوحيد لأفراد أسرته، يطلب للمنح والدعم الاجتماعي.",
      "Statement of being the sole provider, requested for scholarships and social support.",
      "Déclaration de parent unique/soutien de famille pour bourses et aide sociale.",
      "Declaración de sustento familiar para becas y ayuda social.",
      "Dichiarazione di sostegno familiare per borse e aiuto sociale.",
      "Erklärung zum Alleinverdiener für Stipendien und Sozialhilfe.",
      "Заявление единственного кормильца для стипендий и соцпомощи."
    ),
    where: { ar: "يقدم للجهة الطالبة (مؤسسة تعليمية، جماعة، مؤسسة دعم)", fr: "À remettre à l'organisme demandeur (établissement, commune, fondation)" },
    popular: true,
    keywords: ["إعالة", "المعيل", "charge famille", "الدعم", "منحة"],
    templateId: "declaration-charge-famille",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "المهنة والدخل", "أعداد المكفولين", "الغرض من التصريح", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Profession et revenu", "Nombre de personnes à charge", "Motif", "Date et signature"],
      en: ["Full name", "ID number", "Profession and income", "Number of dependents", "Purpose", "Date and signature"],
    },
  },
  {
    id: "declaration-accident",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بظروف حادث", fr: "Déclaration des circonstances d'un accident" },
    desc: D(
      "تصريح يوضح ظروف حادث (عمل أو غيره) لتقديمه للتأمين أو CNSS.",
      "Statement of accident circumstances for insurers or CNSS.",
      "Déclaration des circonstances d'un accident (travail ou autre) pour assureur/CNSS.",
      "Declaración de circunstancias de accidente para aseguradora o CNSS.",
      "Dichiarazione delle circostanze di un infortunio per assicurazione/CNSS.",
      "Schilderung der Unfallumstände für Versicherung/CNSS.",
      "Описание обстоятельств несчастного случая для страховки/CNSS."
    ),
    where: { ar: "مصلحة الأجراء بالمقاولة والتأمين أو وكالة CNSS", fr: "Service RH, assureur ou agence CNSS" },
    keywords: ["حادث", "accident", "حادثة عمل", "التأمين", "ورقة حادث"],
    templateId: "declaration-accident",
    fields: {
      ar: ["الاسم الكامل", "رقم البطاقة الوطنية", "الوظيفة", "تاريخ ومكان الحادث", "وصف ما وقع", "الجهة الموجه إليها", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° CIN", "Poste", "Date et lieu de l'accident", "Description", "Destinataire", "Date et signature"],
      en: ["Full name", "ID number", "Position", "Accident date and place", "Description", "Recipient", "Date and signature"],
    },
  },
  {
    id: "declaration-changement-situation",
    cat: "tasarih",
    title: { ar: "تصريح بتغيير الوضعية العائلية", fr: "Déclaration de changement de situation familiale" },
    desc: D(
      "تصريح بالزواج أو الولادة أو الطلاق لتحيين ملف الضمان الاجتماعي.",
      "Statement of marriage, birth or divorce to update the social security file.",
      "Déclaration de mariage, naissance ou divorce pour mise à jour du dossier CNSS/AMO.",
      "Declaración de matrimonio, nacimiento o divorcio para actualizar el expediente.",
      "Dichiarazione di matrimonio, nascita o divorzio per aggiornare la pratica.",
      "Anzeige von Heirat, Geburt oder Scheidung zur Aktualisierung der Akte.",
      "Уведомление о браке, рождении или разводе для обновления дела."
    ),
    where: { ar: "وكالة CNSS أو بوابة MaCNSS أو CNOPS للقطاع العام", fr: "Agence CNSS, portail MaCNSS ou CNOPS (secteur public)" },
    authority: "cnss",
    keywords: ["تغيير الوضعية", "إضافة مولود", "الزواج CNSS", "changement situation", "MISE à jour CNSS"],
    templateId: "declaration-changement-situation",
    fields: {
      ar: ["الاسم الكامل", "رقم التسجيل CNSS", "نوع التغيير (زواج/ولادة/طلاق)", "تاريخ التغيير", "التاريخ والإمضاء"],
      fr: ["Nom complet", "N° immatriculation CNSS", "Type de changement", "Date du changement", "Date et signature"],
      en: ["Full name", "CNSS registration number", "Change type", "Change date", "Date and signature"],
    },
  },

  // ══════════════ iltizamat ══════════════
  {
    id: "iltizam-vehicule",
    cat: "iltizamat",
    title: { ar: "التزام تحمل مسؤولية المركبة", fr: "Engagement de responsabilité du véhicule" },
    desc: D(
      "التزام يتحمل فيه المشتري مسؤولية المركبة من البيع إلى نقل الملكية.",
      "Commitment whereby the buyer assumes vehicle responsibility from sale to ownership transfer.",
      "Engagement par lequel l'acquéreur assume la responsabilité du véhicule entre la vente et le transfert.",
      "Compromiso por el que el comprador asume la responsabilidad del vehículo hasta la transferencia.",
      "Impegno con cui l'acquirente si assume la responsabilità del veicolo fino al trasferimento.",
      "Verpflichtung des Käufers, die Verantwortung bis zur Eigentumsübertragung zu tragen.",
      "Обязательство покупателя нести ответственность за автомобиль до передачи прав."
    ),
    where: { ar: "يحتفظ به الطرفان ويقدم عند نقل الملكية بوكالة التسجيل", fr: "À conserver et présenter lors du transfert à l'agence d'immatriculation" },
    keywords: ["التزام سيارة", "مسؤولية السيارة", "engagement véhicule", "بيع سيارة"],
    templateId: "iltizam-vehicule",
    fields: {
      ar: ["اسم المشتري", "رقم بطاقة المشتري", "بطاقة المركبة ولوحتها", "اسم البائع", "تاريخ البيع", "التاريخ والإمضاء"],
      fr: ["Nom de l'acquéreur", "N° CIN de l'acquéreur", "Carte grise et plaque", "Nom du vendeur", "Date de vente", "Date et signature"],
      en: ["Buyer name", "Buyer ID number", "Vehicle card and plate", "Seller name", "Sale date", "Date and signature"],
    },
  },
  {
    id: "iltizam-nlhafa",
    cat: "iltizamat",
    title: { ar: "التزام محل غذائي بالنظافة", fr: "Engagement d'établissement alimentaire" },
    desc: D(
      "التزام باحترام شروط النظافة وحفظ الصحة في محل غذائي.",
      "Commitment to hygiene and health rules in a food business.",
      "Engagement à respecter les règles d'hygiène dans un local alimentaire.",
      "Compromiso de higiene para un local de alimentación.",
      "Impegno a rispettare le norme igieniche per un'esercizio alimentare.",
      "Verpflichtung zur Einhaltung der Hygienevorschriften für einen Lebensmittelbetrieb.",
      "Обязательство соблюдения санитарных норм для продовольственного заведения."
    ),
    where: { ar: "مصالح النظافة والصحة التابعة للجماعة أو السلطة المحلية", fr: "Services d'hygiène de la commune ou autorité locale" },
    keywords: ["نظافة", "محل غذائي", "hygiène", "الصحة", "مقهى", "مطعم"],
    templateId: "iltizam-nlhafa",
    fields: {
      ar: ["اسم المعني", "رقم بطاقته", "نوع النشاط", "عنوان المحل", "الترخيص المرجعي", "التاريخ والإمضاء"],
      fr: ["Nom", "N° CIN", "Type d'activité", "Adresse du local", "Référence de l'autorisation", "Date et signature"],
      en: ["Name", "ID number", "Activity type", "Premises address", "License reference", "Date and signature"],
    },
  },

  // ══════════════ wakalat ══════════════
  {
    id: "wakala-vente-vehicule",
    cat: "wakalat",
    title: { ar: "وكالة لبيع سيارة", fr: "Procuration pour vendre un véhicule" },
    desc: D(
      "وكالة خاصة تفوض فيها بيع مركبة باسم الموكل (تستحسن فروض العدول).",
      "Special power of attorney to sell a vehicle on the principal's behalf (notarization recommended).",
      "Procuration spéciale pour vendre un véhicule (devant adouls de préférence).",
      "Poder especial para vender un vehículo (preferentemente ante adouls).",
      "Procura speciale per vendere un veicolo (preferibilmente dinanzi agli adoul).",
      "Sondervollmacht zum Verkauf eines Fahrzeugs (vorzugsweise vor Adoul).",
      "Доверенность на продажу автомобиля (желательно у адулей)."
    ),
    where: { ar: "يصدق لدى العدول أو السلطة المحلية ثم يقدم لوكالة التسجيل", fr: "Légalisée chez les adouls/autorité locale puis présentée à l'agence d'immatriculation" },
    keywords: ["وكالة سيارة", "بيع بالوكالة", "procuration véhicule", "تفويض بيع"],
    templateId: "wakala-vente-vehicule",
    fields: {
      ar: ["اسم الموكل", "رقم بطاقة الموكل", "اسم الوكيل", "بيانات المركبة", "حدود الوكالة", "التاريخ والإمضاء"],
      fr: ["Nom du mandant", "N° CIN du mandant", "Nom du mandataire", "Données du véhicule", "Limites du mandat", "Date et signature"],
      en: ["Principal name", "Principal ID number", "Agent name", "Vehicle data", "Mandate limits", "Date and signature"],
    },
  },
  {
    id: "wakala-immobiliere",
    cat: "wakalat",
    title: { ar: "وكالة عقارية", fr: "Procuration immobilière" },
    desc: D(
      "وكالة لبيع أو شراء عقار — تخضع وجوباً للتحرير لدى العدول.",
      "Power of attorney for a property sale/purchase — must mandatorily be notarized.",
      "Procuration pour vente/achat immobilier — obligatoirement devant adouls.",
      "Poder para venta/compra inmobiliaria — obligatoriamente ante adouls.",
      "Procura immobiliare — obbligatoriamente davanti agli adoul.",
      "Immobilien-Vollmacht — zwingend vor Adoul zu beurkunden.",
      "Доверенность на недвижимость — обязательно у адулей."
    ),
    where: { ar: "العدول (فرض حتمي) ثم المحافظة العقارية", fr: "Adouls (exigence légale) puis Conservation foncière" },
    keywords: ["وكالة عقار", "عقارية", "procuration immobilière", "بيع عقار بالوكالة"],
    templateId: "wakala-immobiliere",
    fields: {
      ar: ["اسم الموكل", "رقم بطاقته", "اسم الوكيل", "بيانات العقار", "الغرض من الوكالة", "التاريخ والإمضاء"],
      fr: ["Nom du mandant", "N° CIN", "Nom du mandataire", "Données du bien", "Objet du mandat", "Date et signature"],
      en: ["Principal name", "ID number", "Agent name", "Property data", "Mandate purpose", "Date and signature"],
    },
  },
  {
    id: "wakala-permis",
    cat: "wakalat",
    title: { ar: "وكالة لاستلام رخصة السياقة", fr: "Procuration pour retirer le permis" },
    desc: D(
      "وكالة بسيطة لاستلام رخصة السياقة أو وثيقة من مركز التسجيل.",
      "Simple power of attorney to collect a driving licence from the registration center.",
      "Procuration simple pour retirer le permis de conduire.",
      "Poder simple para retirar el permiso de conducir.",
      "Procura semplice per ritirare la patente.",
      "Einfache Vollmacht zur Abholung des Führerscheins.",
      "Простая доверенность на получение водительского удостоверения."
    ),
    where: { ar: "تصدق إمضاؤها لدى السلطة المحلية ثم تقدم لمركز التسجيل", fr: "Signature légalisée en autorité locale puis présentée au centre" },
    keywords: ["استلام رخصة", "وكالة رخصة", "procuration permis", "retirer permis"],
    templateId: "wakala-permis",
    fields: {
      ar: ["اسم الموكل", "رقم بطاقته", "اسم الوكيل", "رقم ملف الرخصة", "التاريخ والإمضاء"],
      fr: ["Nom du mandant", "N° CIN", "Nom du mandataire", "N° du dossier de permis", "Date et signature"],
      en: ["Principal name", "ID number", "Agent name", "Licence file number", "Date and signature"],
    },
  },

  // ══════════════ uqud-kira ══════════════
  {
    id: "etat-lieux",
    cat: "uqud-kira",
    title: { ar: "حالة الأماكن (دخول/خروج)", fr: "État des lieux (entrée/sortie)" },
    desc: D(
      "محضر وصف حالة السكن عند الدخول أو الخروج لتفادي نزاعات الضمان.",
      "Inventory of the dwelling's condition at entry/exit to avoid deposit disputes.",
      "Constat de l'état du logement à l'entrée/sortie pour éviter les litiges.",
      "Constancia del estado de la vivienda para evitar litigios de fianza.",
      "Verbale di consegna dello stato dell'immobile in entrata/uscita.",
      "Übergabeprotokoll des Wohnzustands bei Ein-/Auszug.",
      "Акт состояния жилья при въезде/выезде для избежания споров."
    ),
    where: { ar: "يحرر من نسختين بين المكري والمكتري عند تسليم المفاتيح", fr: "En deux exemplaires entre bailleur et locataire à la remise des clés" },
    popular: true,
    keywords: ["حالة الأماكن", "état des lieux", "inventory", "الضمان", "الدخول والخروج"],
    templateId: "etat-lieux",
    fields: {
      ar: ["اسم المكري", "اسم المكتري", "عنوان العقار", "نوع المحضر (دخول/خروج)", "وصف الغرف والتجهيزات", "ملاحظات", "التاريخ والإمضاءات"],
      fr: ["Nom du bailleur", "Nom du locataire", "Adresse du bien", "Type (entrée/sortie)", "Description des pièces et équipements", "Observations", "Date et signatures"],
      en: ["Landlord name", "Tenant name", "Property address", "Type (entry/exit)", "Rooms and equipment description", "Notes", "Date and signatures"],
    },
  },

  // ══════════════ uqud-bay ══════════════
  {
    id: "promesse-vente",
    cat: "uqud-bay",
    title: { ar: "عقد وعد بالبيع العقاري", fr: "Promesse de vente immobilière" },
    desc: D(
      "وعد ملزم يحدد شروط بيع عقار قبل العقد النهائي لدى العدول.",
      "Binding promise setting the terms of a property sale before the final deed.",
      "Promesse engageante fixant les conditions de vente avant l'acte définitif.",
      "Promesa que fija las condiciones antes de la escritura definitiva.",
      "Promessa che fissa le condizioni prima dell'atto definitivo.",
      "Bindendes Versprechen mit den Bedingungen vor der endgültigen Urkunde.",
      "Обязывающее обещание с условиями продажи до итогового акта."
    ),
    where: { ar: "العقد النهائي يحرر وجوباً لدى العدول ثم المحافظة العقارية", fr: "L'acte définitif est dressé chez les adouls puis la Conservation foncière" },
    keywords: ["وعد بالبيع", "promesse de vente", "عقد أولي", "بيع عقار"],
    templateId: "promesse-vente",
    fields: {
      ar: ["اسم الواعد (البائع)", "اسم المرجو له (المشتري)", "بيانات العقار", "الثمن المتفق عليه", "السلفة", "أجل العقد النهائي", "التاريخ والإمضاءات"],
      fr: ["Nom du promettant (vendeur)", "Nom du bénéficiaire (acquéreur)", "Données du bien", "Prix convenu", "Arrhes", "Délai de l'acte définitif", "Date et signatures"],
      en: ["Promisor (seller) name", "Beneficiary (buyer) name", "Property data", "Agreed price", "Deposit", "Final deed deadline", "Date and signatures"],
    },
  },
  {
    id: "vente-immobilier",
    cat: "uqud-bay",
    title: { ar: "عقد بيع عقار", fr: "Acte de vente immobilier" },
    desc: D(
      "مسودة عقد بيع عقار تحرر نهائياً لدى العدول والمحافظة العقارية.",
      "Draft property sale deed finalized before adouls and the Land Registry.",
      "Projet d'acte de vente finalisé devant adouls et la Conservation foncière.",
      "Borrador de escritura de venta ante adouls y el Registro.",
      "Bozza di atto di vendita davanti agli adoul e al catasto.",
      "Entwurf des Kaufvertrags vor Adoul und Grundbuch.",
      "Проект акта продажи у адулей и в кадастре."
    ),
    where: { ar: "العدول ثم التسجيل بالمحافظة العقارية (ANCFCC)", fr: "Adouls puis inscription à la Conservation foncière (ANCFCC)" },
    authority: "ancfcc",
    keywords: ["بيع عقار", "acte de vente", "عقد بيع", "عقار", "شقة"],
    templateId: "vente-immobilier",
    fields: {
      ar: ["اسم البائع", "اسم المشتري", "بيانات العقار ورسمه العقاري", "الثمن وطريقة الأداء", "التحملات والحقوق", "التاريخ والإمضاءات"],
      fr: ["Nom du vendeur", "Nom de l'acquéreur", "Bien et titre foncier", "Prix et modalités de paiement", "Charges et servitudes", "Date et signatures"],
      en: ["Seller name", "Buyer name", "Property and land title", "Price and payment terms", "Charges and easements", "Date and signatures"],
    },
  },
  {
    id: "vente-moto",
    cat: "uqud-bay",
    title: { ar: "وصل بيع دراجة نارية", fr: "Vente de motocycle" },
    desc: D(
      "عقد بيع دراجة نارية مع تحديد المسؤولية ونقل الملكية.",
      "Motorcycle sale receipt with responsibility and ownership transfer.",
      "Contrat de vente de motocycle avec responsabilité et transfert.",
      "Contrato de venta de motocicleta con transferencia.",
      "Contratto di vendita di motocicletta con trasferimento.",
      "Motorrad-Kaufvertrag mit Haftungsübergang.",
      "Договор продажи мотоцикла с переходом ответственности."
    ),
    where: { ar: "يحرر من نسختين ثم يقدم لوكالة التسجيل لنقل الملكية", fr: "En deux exemplaires puis présenté à l'agence d'immatriculation" },
    keywords: ["دراجة نارية", "موتو", "vente moto", "motorcycle", "بيع دراجة"],
    templateId: "vente-moto",
    fields: {
      ar: ["اسم البائع", "رقم بطاقة البائع", "اسم المشتري", "رقم بطاقة المشتري", "بيانات الدراجة ولوحتها", "الثمن", "التاريخ والإمضاءات"],
      fr: ["Nom du vendeur", "N° CIN vendeur", "Nom de l'acquéreur", "N° CIN acquéreur", "Données de la moto et plaque", "Prix", "Date et signatures"],
      en: ["Seller name", "Seller ID", "Buyer name", "Buyer ID", "Motorcycle data and plate", "Price", "Date and signatures"],
    },
  },
];
