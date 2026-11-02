import type { CategoryId, L } from "./categories";

export interface DocumentItem {
  id: string;
  cat: CategoryId;
  title: { ar: string; fr: string };
  desc: L;
  where: { ar: string; fr: string };
  authority?: string; // official link id
  popular?: boolean;
  keywords: string[];
  templateId?: string;
  fields?: { ar: string[]; fr: string[]; en: string[] };
}

const D = (ar: string, en: string, fr: string, es: string, it: string, de: string, ru: string): L => ({
  ar, en, fr, es, it, de, ru,
});

export const documents: DocumentItem[] = [
  // ══════════════ demandes ══════════════
  {
    id: "demande-generale",
    cat: "demandes",
    title: { ar: "طلب إداري عام", fr: "Demande administrative générale" },
    desc: D(
      "نموذج طلب قابل للتخصيص يوجه لأي إدارة عمومية أو خاصة.",
      "Customizable request template addressed to any public or private body.",
      "Modèle de demande personnalisable adressé à toute administration.",
      "Modelo de solicitud personalizable dirigido a cualquier administración.",
      "Modello di richiesta personalizzabile per qualsiasi amministrazione.",
      "Anpassbare Antragsvorlage für jede Behörde.",
      "Настраиваемый шаблон заявления для любого ведомства."
    ),
    where: { ar: "الإدارة أو المصلحة المعنية بموضوع الطلب", fr: "L'administration ou le service concerné par l'objet de la demande" },
    popular: true,
    keywords: ["طلب", "demande", "request", "طلب إداري", "نموذج طلب"],
    templateId: "demande-generale",
    fields: {
      ar: ["الاسم الكامل للمرسل", "العنوان الكامل", "رقم البطاقة الوطنية", "الجهة الموجه إليها الطلب", "موضوع الطلب وتفاصيله", "التاريخ والإمضاء"],
      fr: ["Nom complet de l'expéditeur", "Adresse complète", "Numéro de la CIN", "Destinataire de la demande", "Objet et détails de la demande", "Date et signature"],
      en: ["Sender's full name", "Full address", "National ID number", "Recipient authority", "Subject and details", "Date and signature"],
    },
  },
  {
    id: "demande-acte-naissance",
    cat: "demandes",
    title: { ar: "طلب نسخة من رسم الولادة", fr: "Demande de copie d'acte de naissance" },
    desc: D(
      "كتابة موجهة لرئيس الجماعة للحصول على نسخة كاملة أو مطابقة من رسم الولادة.",
      "Letter to the commune president for a full or conforming copy of a birth certificate.",
      "Lettre au président de la commune pour une copie intégrale d'acte de naissance.",
      "Carta al presidente de la comuna para una copia del acta de nacimiento.",
      "Lettera al presidente del comune per una copia dell'atto di nascita.",
      "Schreiben an den Bürgermeister für eine Kopie der Geburtsurkunde.",
      "Письмо главе коммуны за копией свидетельства о рождении."
    ),
    where: { ar: "مصلحة الحالة المدنية بالجماعة (البلدية) محل الولادة", fr: "Service d'état civil de la commune du lieu de naissance" },
    popular: true,
    keywords: ["رسم الولادة", "شهادة الميلاد", "acte de naissance", "birth certificate", "الحالة المدنية", "état civil"],
    templateId: "demande-acte-naissance",
    fields: {
      ar: ["اسم المعني ورقم بطاقته", "تاريخ ومكان الولادة", "اسم الأب والأم", "نوع النسخة (كاملة/مطابقة)", "عدد النسخ المطلوبة"],
      fr: ["Nom du concerné et numéro CIN", "Date et lieu de naissance", "Noms du père et de la mère", "Type de copie (intégrale/conforme)", "Nombre de copies"],
      en: ["Applicant's name and ID number", "Date and place of birth", "Parents' names", "Copy type (full/conforming)", "Number of copies"],
    },
  },
  {
    id: "demande-certificat-scolaire",
    cat: "demandes",
    title: { ar: "طلب شهادة مدرسية", fr: "Demande de certificat de scolarité" },
    desc: D(
      "طلب موجه لإدارة المؤسسة التعليمية للحصول على شهادة مدرسية.",
      "Request to the school administration for a school attendance certificate.",
      "Demande à l'établissement scolaire pour un certificat de scolarité.",
      "Solicitud al centro educativo para un certificado de escolaridad.",
      "Richiesta alla scuola per un certificato di frequenza.",
      "Antrag an die Schule für eine Schulbescheinigung.",
      "Заявление в школу для получения справки об обучении."
    ),
    where: { ar: "إدارة المؤسسة التعليمية (المدرسة/الثانوية)", fr: "Direction de l'établissement scolaire" },
    authority: "men",
    keywords: ["شهادة مدرسية", "certificat de scolarité", "school certificate", "مدرسة", "massar", "مسار"],
  },
  {
    id: "demande-raccordement",
    cat: "demandes",
    title: { ar: "طلب ربط بالكهرباء والماء", fr: "Demande de branchement eau et électricité" },
    desc: D(
      "طلب اشتراك وربط العقار بشبكة الكهرباء والماء الصالح للشرب.",
      "Subscription and connection request for electricity and drinking water.",
      "Demande d'abonnement et de branchement à l'électricité et l'eau potable.",
      "Solicitud de suscripción y conexión a la electricidad y el agua.",
      "Richiesta di allacciamento a elettricità e acqua potabile.",
      "Anschlussantrag für Strom und Trinkwasser.",
      "Заявление на подключение электричества и воды."
    ),
    where: { ar: "وكالة المكتب الوطني للكهرباء والماء (ONEE) أو الموزع المعتمد", fr: "Agence ONEE ou distributeur agréé" },
    authority: "one",
    keywords: ["كهرباء", "ماء", "ONEE", "branchement", "electricity", "water", "اشتراك", "abonnement"],
  },
  {
    id: "demande-transfert-medical",
    cat: "demandes",
    title: { ar: "طلب تحويل ملف طبي", fr: "Demande de transfert de dossier médical" },
    desc: D(
      "طلب نقل الملف الطبي من مؤسسة صحية إلى أخرى لمتابعة العلاج.",
      "Request to transfer a medical file from one health facility to another.",
      "Demande de transfert d'un dossier médical vers un autre établissement.",
      "Solicitud de transferencia de historial médico a otro centro.",
      "Richiesta di trasferimento della cartella clinica.",
      "Antrag auf Übermittlung der Patientenakte.",
      "Заявление на перевод медицинской карты."
    ),
    where: { ar: "إدارة المستشفى أو المركز الصحي المعني", fr: "Direction de l'hôpital ou du centre de santé concerné" },
    authority: "sante",
    keywords: ["ملف طبي", "dossier médical", "medical file", "مستشفى", "hôpital", "hospital"],
  },
  {
    id: "demande-releve-bancaire",
    cat: "demandes",
    title: { ar: "طلب كشف حساب بنكي", fr: "Demande de relevé de compte bancaire" },
    desc: D(
      "طلب الحصول على كشف حساب من الوكالة البنكية لأغراض إدارية.",
      "Request for a bank account statement for administrative purposes.",
      "Demande de relevé de compte bancaire à des fins administratives.",
      "Solicitud de extracto de cuenta bancaria.",
      "Richiesta di estratto conto bancario.",
      "Antrag auf Kontoauszug.",
      "Запрос банковской выписки по счёту."
    ),
    where: { ar: "الوكالة البنكية أو البريدية الحامل للحساب", fr: "Agence bancaire ou postale du compte" },
    keywords: ["كشف حساب", "relevé bancaire", "bank statement", "بنك", "banque", "bank"],
  },

  // ══════════════ chikayat ══════════════
  {
    id: "chikaya-amma",
    cat: "chikayat",
    title: { ar: "شكاية عامة", fr: "Plainte générale" },
    desc: D(
      "نموذج شكاية قابل للتخصيص يوجه للإدارة أو المصلحة المعنية.",
      "Customizable complaint template addressed to the concerned authority.",
      "Modèle de plainte personnalisable adressé au service concerné.",
      "Modelo de reclamación personalizable para la autoridad competente.",
      "Modello di reclamo personalizzabile.",
      "Anpassbare Beschwerdevorlage.",
      "Настраиваемый шаблон жалобы."
    ),
    where: { ar: "الإدارة أو المصلحة المعنية بموضوع الشكاية", fr: "L'administration ou le service concerné par l'objet de la plainte" },
    popular: true,
    keywords: ["شكاية", "تظلم", "plainte", "réclamation", "complaint", "شكوى"],
    templateId: "chikaya-amma",
    fields: {
      ar: ["اسم المشتكي وعنوانه", "الجهة الموجهة إليها الشكاية", "عرض تفصيلي للوقائع", "المرجو من الشكاية", "المرفقات إن وجدت", "التاريخ والإمضاء"],
      fr: ["Nom et adresse du plaignant", "Destinataire de la plainte", "Exposé détaillé des faits", "Demande formulée", "Pièces jointes le cas échéant", "Date et signature"],
      en: ["Complainant's name and address", "Recipient authority", "Detailed facts", "Requested action", "Attachments if any", "Date and signature"],
    },
  },
  {
    id: "chikaya-voisinage",
    cat: "chikayat",
    title: { ar: "شكاية إزعاج جار", fr: "Plainte contre un voisin" },
    desc: D(
      "شكاية بخصوص الإزعاج أو البناء أو الترامي على الملك الجار.",
      "Complaint about nuisance, construction or encroachment by a neighbor.",
      "Plainte pour nuisance, construction ou empiétement d'un voisin.",
      "Reclamación por molestias, obras o invasión de un vecino.",
      "Reclamo per molestie, costruzioni o invasione del vicino.",
      "Beschwerde über Belästigung oder Überbau durch Nachbarn.",
      "Жалоба на шум, стройку или посягательство соседа."
    ),
    where: { ar: "المصالح الأمنية أو الجماعة الترابية حسب الحالة", fr: "Services de sécurité ou commune selon le cas" },
    keywords: ["جار", "voisin", "neighbor", "إزعاج", "nuisance", "ترامي"],
  },
  {
    id: "chikaya-fiscale",
    cat: "chikayat",
    title: { ar: "تظلم لدى الضرائب", fr: "Réclamation fiscale" },
    desc: D(
      "تظلم أو شكاية موجهة للمديرية العامة للضرائب بشأن ضريبة أو تصحيح.",
      "Grievance addressed to the DGI concerning a tax or correction.",
      "Réclamation adressée à la DGI concernant un impôt ou une correction.",
      "Reclamación ante la DGI sobre un impuesto o corrección.",
      "Ricorso all DGI riguardo una tassa o correzione.",
      "Einspruch an die DGI wegen einer Steuer.",
      "Претензия в налоговое управление по налогу или исправлению."
    ),
    where: { ar: "المديرية الجهوية للضرائب أو عبر البوابة الرقمية", fr: "Direction régionale des impôts ou en ligne" },
    authority: "tax",
    keywords: ["ضرائب", "تظلم ضريبي", "réclamation fiscale", "tax complaint", "impôts"],
  },
  {
    id: "chikaya-nafaqa",
    cat: "chikayat",
    title: { ar: "شكاية إهمال الأسرة (النفقة)", fr: "Plainte pour abandon de famille" },
    desc: D(
      "شكاية إلى وكيل الملك ضد إهمال الأسرة وعدم أداء النفقة المحكوم بها.",
      "Complaint to the King's prosecutor for family abandonment / unpaid alimony.",
      "Plainte au procureur du Roi pour abandon de famille et pension impayée.",
      "Denuncia al fiscal por abandono familiar y pensión impaga.",
      "Denuncia al procuratore per abbandono familiare.",
      "Strafanzeige wegen Familienverlassung.",
      "Жалоба прокурору об оставлении семьи и неуплате алиментов."
    ),
    where: { ar: "النيابة العامة بالمحكمة الابتدائية المختصة", fr: "Parquet du tribunal de première instance compétent" },
    authority: "justice",
    keywords: ["نفقة", "إهمال الأسرة", "pension alimentaire", "abandon de famille", "alimony", "وكيل الملك"],
  },
  {
    id: "chikaya-travail",
    cat: "chikayat",
    title: { ar: "شكاية لدى مفتشية الشغل", fr: "Plainte auprès de l'inspection du travail" },
    desc: D(
      "شكاية بشأن الأجور أو ظروف العمل أو عدم احترام مدونة الشغل.",
      "Complaint about wages, working conditions or labor code violations.",
      "Plainte concernant les salaires, les conditions de travail ou le code du travail.",
      "Reclamación sobre salarios o condiciones laborales.",
      "Reclamo su salari o condizioni di lavoro.",
      "Beschwerde über Löhne oder Arbeitsbedingungen.",
      "Жалоба на зарплату или условия труда."
    ),
    where: { ar: "مفتشية الشغل التابع لها مقر العمل", fr: "Inspection du travail du lieu de travail" },
    keywords: ["مفتشية الشغل", "inspection du travail", "labour inspection", "أجرة", "salaire", "مدونة الشغل"],
  },

  // ══════════════ ichhadat ══════════════
  {
    id: "attestation-travail",
    cat: "ichhadat",
    title: { ar: "شهادة العمل", fr: "Attestation de travail" },
    desc: D(
      "شهادة يحررها المشغل تثبت انتماء الأجير للمقاولة ووظيفته.",
      "Certificate issued by the employer proving employment and position.",
      "Attestation délivrée par l'employeur prouvant l'emploi et le poste.",
      "Certificado emitido por el empleador que acredita el empleo.",
      "Certificato rilasciato dal datore di lavoro.",
      "Vom Arbeitgeber ausgestellte Arbeitsbescheinigung.",
      "Справка от работодателя о работе и должности."
    ),
    where: { ar: "تُطلب من المشغل (إدارة المقاولة)", fr: "À demander auprès de l'employeur" },
    popular: true,
    keywords: ["شهادة عمل", "attestation de travail", "work certificate", "emploi", "مشغل"],
    templateId: "attestation-travail",
    fields: {
      ar: ["اسم الأجير ورقم بطلته الوطنية", "الوظيفة/المنصب", "تاريخ الالتحاق بالعمل", "نوع العقد", "تسمية المقاولة ومعلوماتها"],
      fr: ["Nom du salarié et CIN", "Poste occupé", "Date d'embauche", "Type de contrat", "Dénomination de l'entreprise"],
      en: ["Employee's name and ID", "Position held", "Hiring date", "Contract type", "Company details"],
    },
  },
  {
    id: "attestation-residence",
    cat: "ichhadat",
    title: { ar: "شهادة السكنى", fr: "Attestation de résidence" },
    desc: D(
      "شهادة تثبت عنوان السكنى، تحرر بتصريح شاهدين أو من المصلحة المختصة.",
      "Certificate proving the home address, drafted with two witnesses or by the competent service.",
      "Attestation prouvant l'adresse de résidence, avec deux témoins ou par le service compétent.",
      "Certificado que acredita el domicilio, con dos testigos o del servicio competente.",
      "Certificato di residenza, con due testimoni o dal servizio competente.",
      "Wohnsitzbescheinigung mit zwei Zeugen oder vom Amt.",
      "Справка о месте жительства с двумя свидетелями или от ведомства."
    ),
    where: { ar: "الملحقة الإدارية/القيادة أو المصلحة المختصة بالجماعة", fr: "Annexe administrative / caïdat ou service communal compétent" },
    popular: true,
    keywords: ["شهادة السكنى", "attestation de résidence", "residence certificate", "سكن", "domicile"],
    templateId: "attestation-residence",
    fields: {
      ar: ["اسم المعني وبياناته", "عنوان السكنى الكامل", "بيانات الشاهدين (الاسم والبطاقة والعنوان)", "مدة السكنى إن لزم", "التاريخ والتوقيعات"],
      fr: ["Nom et données du concerné", "Adresse complète du logement", "Données des deux témoins", "Durée de résidence si requise", "Date et signatures"],
      en: ["Applicant's details", "Full home address", "Two witnesses' details", "Residence duration if needed", "Date and signatures"],
    },
  },
  {
    id: "attestation-non-travail",
    cat: "ichhadat",
    title: { ar: "شهادة عدم العمل", fr: "Attestation de non-emploi" },
    desc: D(
      "شهادة تثبت عدم مزاولة أي عمل لأغراض المنح والدعم الاجتماعي.",
      "Certificate of non-employment for scholarships and social aid purposes.",
      "Attestation de non-emploi pour bourses et aide sociale.",
      "Certificado de no empleo para becas y ayuda social.",
      "Certificato di non occupazione per borse e aiuti sociali.",
      "Bescheinigung über Nichterwerbstätigkeit.",
      "Справка об отсутствии работы для стипендий и соцпомощи."
    ),
    where: { ar: "الملحقة الإدارية/القيادة أو الجماعة حسب الجهة الطالبة", fr: "Annexe administrative ou commune selon l'organisme demandeur" },
    popular: true,
    keywords: ["شهادة عدم العمل", "attestation de non emploi", "non-employment", "عدم الانتماء"],
    templateId: "attestation-non-travail",
    fields: {
      ar: ["اسم المعني ورقم بطاقته", "العنوان الكامل", "تصريح المعني بعدم العمل", "تاريخ التحرير والإمضاء"],
      fr: ["Nom et CIN du concerné", "Adresse complète", "Déclaration de non-emploi", "Date et signature"],
      en: ["Applicant's name and ID", "Full address", "Non-employment declaration", "Date and signature"],
    },
  },
  {
    id: "attestation-revenu",
    cat: "ichhadat",
    title: { ar: "شهادة الدخل", fr: "Attestation de revenu" },
    desc: D(
      "شهادة تحدد الدخل الشهري أو السنوي لأغراض إدارية واجتماعية.",
      "Certificate stating monthly or annual income for administrative purposes.",
      "Attestation indiquant le revenu mensuel ou annuel.",
      "Certificado que indica los ingresos mensuales o anuales.",
      "Certificato che indica il reddito mensile o annuo.",
      "Bescheinigung über das Monatseinkommen.",
      "Справка о доходах для административных целей."
    ),
    where: { ar: "المشغل أو الإدارة المختصة حسب الحالة", fr: "Employeur ou administration compétente selon le cas" },
    keywords: ["شهادة الدخل", "attestation de revenu", "income certificate", "revenu"],
  },
  {
    id: "attestation-vie",
    cat: "ichhadat",
    title: { ar: "شهادة الحياة", fr: "Certificat de vie" },
    desc: D(
      "شهادة تثبت حياة المعني بحضوره الشخصي أمام المصلحة المختصة.",
      "Certificate proving the person is alive, issued in person.",
      "Certificat attestant que la personne est en vie, délivré en présentiel.",
      "Certificado de vida emitido presencialmente.",
      "Certificato di vita rilasciato in presenza.",
      "Lebensbescheinigung, persönlich ausgestellt.",
      "Справка о жизни, выдается при личном присутствии."
    ),
    where: { ar: "بحضور المعني أمام المصلحة المختصة (القيادة/الشرطة)", fr: "En présence du concerné au service compétent" },
    keywords: ["شهادة الحياة", "certificat de vie", "life certificate", "حياة"],
  },

  // ══════════════ tasarih ══════════════
  {
    id: "declaration-honneur",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف", fr: "Déclaration sur l'honneur" },
    desc: D(
      "النموذج الأكثر طلباً: تصريح رسمي يتحمل صاحبه مسؤولية صدقه.",
      "The most requested template: an official declaration signed under responsibility.",
      "Le modèle le plus demandé : déclaration officielle sous la responsabilité du déclarant.",
      "El modelo más solicitado: declaración oficial bajo responsabilidad.",
      "Il modello più richiesto: dichiarazione ufficiale sotto responsabilità.",
      "Die meistgefragte Vorlage: eidesstattliche Erklärung.",
      "Самый востребованный шаблон: официальное заявление под ответственность."
    ),
    where: { ar: "تُرفق أو تُودع مع الملف لدى الجهة الطالبة", fr: "À joindre ou déposer au dossier auprès de l'organisme demandeur" },
    popular: true,
    keywords: ["تصريح بالشرف", "déclaration sur l'honneur", "sworn declaration", "declaration"],
    templateId: "declaration-honneur",
    fields: {
      ar: ["اسم المصرح وبياناته الكاملة", "نص التصريح (الوقائع)", "التزام المصرح بالمسؤولية", "مكان وتاريخ التحرير", "الإمضاء"],
      fr: ["Nom et données complètes du déclarant", "Texte de la déclaration", "Engagement de responsabilité", "Lieu et date", "Signature"],
      en: ["Declarant's full details", "Declaration text", "Responsibility undertaking", "Place and date", "Signature"],
    },
  },
  {
    id: "declaration-non-emploi",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بعدم العمل", fr: "Déclaration sur l'honneur de non-emploi" },
    desc: D(
      "تصريح بعدم مزاولة أي نشاط مهني لأغراض الدعم والمنح.",
      "Declaration of no professional activity for aid and scholarships.",
      "Déclaration d'absence d'activité professionnelle pour aides et bourses.",
      "Declaración de no actividad profesional para ayudas y becas.",
      "Dichiarazione di non attività professionale.",
      "Erklärung über keine Berufstätigkeit.",
      "Заявление об отсутствии профессиональной деятельности."
    ),
    where: { ar: "الجهة الطالبة للتصريح (دعم اجتماعي، منحة…)", fr: "Organisme demandeur (aide sociale, bourse…)" },
    keywords: ["تصريح عدم العمل", "non emploi", "منحة", "دعم", "bourse"],
    templateId: "declaration-non-emploi-honneur",
  },
  {
    id: "declaration-residence",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بالسكنى", fr: "Déclaration sur l'honneur de résidence" },
    desc: D(
      "تصريح رسمي بمكان السكنى الحالي لأغراض إدارية متعددة.",
      "Official declaration of current residence for various purposes.",
      "Déclaration officielle du lieu de résidence actuel.",
      "Declaración oficial del domicilio actual.",
      "Dichiarazione ufficiale di residenza.",
      "Offizielle Wohnsitzerklärung.",
      "Официальное заявление о месте жительства."
    ),
    where: { ar: "الجهة الطالبة للتصريح", fr: "Organisme demandeur" },
    keywords: ["تصريح السكنى", "résidence", "سكن", "domicile"],
  },
  {
    id: "declaration-etudes",
    cat: "tasarih",
    title: { ar: "تصريح بالشرف بمتابعة الدراسة", fr: "Déclaration de poursuite d'études" },
    desc: D(
      "تصريح بمواصلة الدراسة لأغراض التغطية الصحية العائلية والتخفيضات.",
      "Declaration of continued studies for family health coverage and reductions.",
      "Déclaration de poursuite d'études pour couverture santé et réductions.",
      "Declaración de continuación de estudios.",
      "Dichiarazione di prosecuzione degli studi.",
      "Erklärung über Studienfortsetzung.",
      "Заявление о продолжении учёбы."
    ),
    where: { ar: "الجهة الطالبة (CNSS/CNOPS، نقل، اتصالات…)", fr: "Organisme demandeur (CNSS/CNOPS, transport…)" },
    authority: "cnss",
    keywords: ["متابعة الدراسة", "poursuite d'études", "studies", "طالب", "étudiant"],
  },

  // ══════════════ iltizamat ══════════════
  {
    id: "iltizam-sakan",
    cat: "iltizamat",
    title: { ar: "التزام بالسكن", fr: "Engagement de logement" },
    desc: D(
      "التزام يقدمه المكري أو المتعهد بتوفير سكن للطالب أو الموظف.",
      "Commitment by the landlord or sponsor to provide housing.",
      "Engagement du bailleur ou garant de fournir un logement.",
      "Compromiso del arrendador o garante de proporcionar vivienda.",
      "Impegno del locatore o garante a fornire alloggio.",
      "Verpflichtung des Vermieters, Wohnraum bereitzustellen.",
      "Обязательство арендодателя предоставить жильё."
    ),
    where: { ar: "المؤسسة الطالبة (جامعة، إدارة، سفارة…)", fr: "Établissement demandeur (université, administration…)" },
    popular: true,
    keywords: ["التزام السكن", "engagement de logement", "housing commitment", "سكن طالب"],
    templateId: "iltizam-sakan",
    fields: {
      ar: ["بيانات الملتزم الكاملة", "بيانات المستفيد", "عنوان السكن المرجو", "مدة الالتزام", "التاريخ والإمضاء"],
      fr: ["Données complètes du garant", "Données du bénéficiaire", "Adresse du logement", "Durée de l'engagement", "Date et signature"],
      en: ["Sponsor's full details", "Beneficiary's details", "Housing address", "Commitment duration", "Date and signature"],
    },
  },
  {
    id: "iltizam-kafala",
    cat: "iltizamat",
    title: { ar: "التزام بالكفالة والضمان", fr: "Engagement de prise en charge" },
    desc: D(
      "التزام كفيل بتغطية تكاليف إقامة أو دراسة المستفيد بالمغرب أو بالخارج.",
      "Sponsor's commitment to cover stay or study costs.",
      "Engagement du garant de couvrir les frais de séjour ou d'études.",
      "Compromiso del aval de cubrir gastos de estancia o estudios.",
      "Impegno del garante a coprire le spese di soggiorno o studio.",
      "Verpflichtung die Kosten des Aufenthalts zu tragen.",
      "Обязательство поручителя оплатить проживание или учёбу."
    ),
    where: { ar: "السفارة أو الإدارة الطالبة", fr: "Ambassade ou administration demanderesse" },
    keywords: ["كفالة", "prise en charge", "sponsorship", "ضمان", "garant"],
  },
  {
    id: "iltizam-tassdid",
    cat: "iltizamat",
    title: { ar: "التزام بالتسديد", fr: "Engagement de paiement" },
    desc: D(
      "التزام كتابي بأداء مبلغ أو أقساط في آجال محددة.",
      "Written commitment to pay an amount or installments on schedule.",
      "Engagement écrit de payer un montant ou des échéances.",
      "Compromiso escrito de pago de un importe o cuotas.",
      "Impegno scritto di pagamento.",
      "Schriftliche Zahlungsverpflichtung.",
      "Письменное обязательство оплатить сумму или платежи."
    ),
    where: { ar: "الدائن أو الإدارة المعنية", fr: "Créancier ou administration concernée" },
    keywords: ["التزام بالأداء", "engagement de paiement", "payment", "أقساط", "échéances"],
  },

  // ══════════════ wakalat ══════════════
  {
    id: "wakala-amma",
    cat: "wakalat",
    title: { ar: "وكالة (نموذج مبسط)", fr: "Procuration (modèle simplifié)" },
    desc: D(
      "وكالة كتابية للاستعمالات الإدارية البسيطة غير العقارية.",
      "Written power of attorney for simple non-real-estate administrative uses.",
      "Procuration écrite pour usages administratifs simples non immobiliers.",
      "Poder escrito para trámites simples no inmobiliarios.",
      "Procura scritta per usi amministrativi semplici.",
      "Schriftliche Vollmacht für einfache Verwaltungszwecke.",
      "Письменная доверенность для простых адм. целей."
    ),
    where: { ar: "الإدارة المعنية بالإجراء (وتصادق عليها حسب مقتضياتها)", fr: "Administration concernée (à légaliser selon ses exigences)" },
    popular: true,
    keywords: ["وكالة", "procuration", "power of attorney", "تفويض", "mandat"],
    templateId: "wakala-amma",
    fields: {
      ar: ["الاسم الكامل للوكل (المعطي)", "الاسم الكامل للوكيل (المتلقي)", "نوع التصرف المفوض", "الوثيقة أو الملف المعني", "مدة سريان الوكالة", "الإمضاءات"],
      fr: ["Nom complet du mandant", "Nom complet du mandataire", "Nature de l'acte délégué", "Document ou dossier concerné", "Durée de validité", "Signatures"],
      en: ["Principal's full name", "Agent's full name", "Delegated action", "Related document/file", "Validity period", "Signatures"],
    },
  },
  {
    id: "wakala-istilam",
    cat: "wakalat",
    title: { ar: "تفويض لاستلام وثيقة أو مستحقات", fr: "Autorisation de retrait" },
    desc: D(
      "تفويض بسيط لاستلام وثيقة أو راتب أو مستحقات لفائدة الغير.",
      "Simple authorization to collect a document, salary or dues on someone's behalf.",
      "Autorisation simple de retirer un document, un salaire ou des dus.",
      "Autorización simple para retirar un documento o salario.",
      "Autorizzazione semplice al ritiro di documenti o stipendi.",
      "Einfache Vollmacht zum Empfang von Dokumenten.",
      "Простая доверенность на получение документов."
    ),
    where: { ar: "الإدارة أو الجهة مسلمة الوثيقة/المستحقات", fr: "Administration ou organisme détenteur du document" },
    popular: true,
    keywords: ["تفويض استلام", "autorisation de retrait", "collection authorization", "استلام راتب"],
    templateId: "wakala-istilam",
  },
  {
    id: "wakala-suivi",
    cat: "wakalat",
    title: { ar: "تفويض لمتابعة ملف إداري", fr: "Procuration pour suivi de dossier" },
    desc: D(
      "تفويض لمتابعة وإتمام ملف لدى إدارة عمومية أو خاصة.",
      "Authorization to follow up and complete a file with an administration.",
      "Procuration pour suivre et compléter un dossier.",
      "Poder para seguir y completar un expediente.",
      "Procura per seguire e completare una pratica.",
      "Vollmacht zur Aktbearbeitung.",
      "Доверенность на ведение дела в ведомстве."
    ),
    where: { ar: "الإدارة المعنية بالملف", fr: "Administration concernée par le dossier" },
    keywords: ["متابعة ملف", "suivi dossier", "file follow-up"],
  },
  {
    id: "wakala-bancaire",
    cat: "wakalat",
    title: { ar: "تفويض بالتصرف في حساب بنكي/بريدي", fr: "Procuration bancaire" },
    desc: D(
      "تفويض بإجراء عمليات على حساب؛ تُنجز غالباً بصيغة البنك الرسمية.",
      "Authorization for account operations; usually done on the bank's official form.",
      "Procuration pour opérations bancaires ; souvent via le formulaire de la banque.",
      "Poder para operaciones bancarias; suele usar el formulario del banco.",
      "Procura per operazioni bancarie (modulo della banca).",
      "Bankvollmacht (meist über Formular der Bank).",
      "Доверенность на операции по счёту (форма банка)."
    ),
    where: { ar: "الوكالة البنكية أو البريدية الحاملة للحساب", fr: "Agence bancaire ou postale du compte" },
    authority: "poste",
    keywords: ["تفويض بنكي", "procuration bancaire", "bank power", "حساب بريدي"],
  },

  // ══════════════ uqud-kira ══════════════
  {
    id: "contrat-bail",
    cat: "uqud-kira",
    title: { ar: "عقد كراء سكني", fr: "Contrat de bail d'habitation" },
    desc: D(
      "عقد كراء شقق ومنازل بمواد كاملة للواجبات والحقوق والضمانات.",
      "Apartment/house lease contract with full clauses on duties, rights and guarantees.",
      "Contrat de location d'habitation avec clauses complètes.",
      "Contrato de alquiler de vivienda con cláusulas completas.",
      "Contratto di locazione con clausole complete.",
      "Mietvertrag mit vollständigen Klauseln.",
      "Договор аренды жилья с полными условиями."
    ),
    where: { ar: "يوقع بين الطرفين ويُسجل لدى المصلحة الضريبية؛ نسخة للطرفين", fr: "Signé entre les parties et enregistré auprès du service fiscal" },
    authority: "tax",
    popular: true,
    keywords: ["عقد كراء", "contrat de bail", "lease", "كراء سكن", "location", "إيجار", "rent"],
    templateId: "contrat-bail",
    fields: {
      ar: ["بيانات المؤاجر والمكتري الكاملة", "وصف العقار الكراء وعنوانه", "مدة الكراء وتاريخ بدايته", "مبلغ الكراء الشهري وكيفية الأداء", "مبلغ الضمان والتكاليف المشتركة", "شرط الفسخ والتجديد", "إمضاء الطرفين وشاهدين"],
      fr: ["Données complètes du bailleur et du locataire", "Description et adresse du bien", "Durée et date de début", "Montant du loyer et modalités", "Dépôt de garantie et charges", "Clause de résiliation et renouvellement", "Signatures des parties et témoins"],
      en: ["Landlord's and tenant's full details", "Property description and address", "Duration and start date", "Monthly rent and payment method", "Security deposit and charges", "Termination and renewal clause", "Signatures of parties and witnesses"],
    },
  },
  {
    id: "bail-local",
    cat: "uqud-kira",
    title: { ar: "عقد كراء محل تجاري", fr: "Contrat de bail commercial" },
    desc: D(
      "عقد كراء محل تجاري أو مهني مع مواد الاستغلال والضمانات.",
      "Commercial or professional premises lease with operating clauses.",
      "Bail de local commercial ou professionnel.",
      "Contrato de alquiler de local comercial.",
      "Contratto di locazione commerciale.",
      "Gewerbemietvertrag.",
      "Договор аренды коммерческого помещения."
    ),
    where: { ar: "يوقع بين الطرفين ويُسجل لدى المصلحة الضريبية", fr: "Signé et enregistré auprès du service fiscal" },
    authority: "tax",
    keywords: ["كراء محل", "bail commercial", "commercial lease", "محل تجاري"],
  },
  {
    id: "bail-meuble",
    cat: "uqud-kira",
    title: { ar: "عقد كراء مفروش", fr: "Contrat de location meublée" },
    desc: D(
      "عقد كراء سكن مفروش مع لائحة الأثاث والترتيبات.",
      "Furnished rental contract with furniture list and arrangements.",
      "Contrat de location meublée avec inventaire.",
      "Contrato de alquiler amueblado con inventario.",
      "Contratto di locazione ammobiliata.",
      "Mietvertrag für möblierte Wohnung.",
      "Договор аренды с мебелью."
    ),
    where: { ar: "يوقع بين الطرفين", fr: "Signé entre les parties" },
    keywords: ["كراء مفروش", "location meublée", "furnished", "meublé"],
  },
  {
    id: "quittance-loyer",
    cat: "uqud-kira",
    title: { ar: "وصل أداء الكراء", fr: "Quittance de loyer" },
    desc: D(
      "وصل يوثق أداء المكتري لكراء شهر معين، يحرره المؤاجر.",
      "Receipt issued by the landlord documenting rent payment for a month.",
      "Quittance délivrée par le bailleur pour un loyer payé.",
      "Recibo del alquiler emitido por el arrendador.",
      "Ricevuta di affitto rilasciata dal locatore.",
      "Mietquittung des Vermieters.",
      "Квитанция об оплате аренды от арендодателя."
    ),
    where: { ar: "يحتفظ به المكتري كإثبات للأداء", fr: "Conservé par le locataire comme preuve de paiement" },
    popular: true,
    keywords: ["وصل كراء", "quittance de loyer", "rent receipt", "وصل أداء"],
    templateId: "quittance-loyer",
  },

  // ══════════════ uqud-bay ══════════════
  {
    id: "vente-vehicule",
    cat: "uqud-bay",
    title: { ar: "عقد بيع سيارة", fr: "Contrat de vente de véhicule" },
    desc: D(
      "عقد بيع وتفويت سيارة مع بيانات البطاقة الرمادية والأطراف.",
      "Vehicle sale contract with registration card and party details.",
      "Contrat de vente de véhicule avec carte grise et parties.",
      "Contrato de venta de vehículo con tarjeta de circulación.",
      "Contratto di vendita di veicolo.",
      "Kaufvertrag für Fahrzeuge.",
      "Договор купли-продажи автомобиля."
    ),
    where: { ar: "يوقع بين الطرفين؛ ثم تغيير البطاقة الرمادية لدى مكتب تسجيل السيارات التابع له المحل", fr: "Signé entre parties ; puis changement de la carte grise au service d'immatriculation" },
    popular: true,
    keywords: ["بيع سيارة", "vente véhicule", "car sale", "بطاقة رمادية", "carte grise"],
    templateId: "vente-vehicule",
    fields: {
      ar: ["بيانات البائع والمشتري الكاملة", "طبيعة السيارة ولوحتها ورقم بطاقتها الرمادية", "الثمن وطرق الأداء", "تصريح بحالة السيارة", "تسليم الوثائق والمفاتيح", "الإمضاءات"],
      fr: ["Données complètes du vendeur et de l'acheteur", "Type du véhicule, plaque et carte grise", "Prix et modalités de paiement", "Déclaration sur l'état du véhicule", "Remise des documents et clés", "Signatures"],
      en: ["Seller's and buyer's full details", "Vehicle type, plate and registration card", "Price and payment terms", "Vehicle condition statement", "Handover of documents and keys", "Signatures"],
    },
  },
  {
    id: "vente-meubles",
    cat: "uqud-bay",
    title: { ar: "عقد بيع منقولات وأثاث", fr: "Contrat de vente de meubles" },
    desc: D(
      "عقد بيع أثاث ومنقولات مع لائحة المعروض وشروطه.",
      "Furniture and movable property sale contract with item list.",
      "Contrat de vente de meubles avec liste des biens.",
      "Contrato de venta de muebles con lista de bienes.",
      "Contratto di vendita di mobili.",
      "Kaufvertrag für Möbel.",
      "Договор купли-продажи мебели."
    ),
    where: { ar: "يوقع بين الطرفين ويحفظ كإثبات", fr: "Signé entre les parties et conservé comme preuve" },
    keywords: ["بيع أثاث", "vente meubles", "furniture sale", "منقولات"],
  },
  {
    id: "cession-fonds",
    cat: "uqud-bay",
    title: { ar: "عقد تنازل عن محل تجاري", fr: "Acte de cession de fonds de commerce" },
    desc: D(
      "تنازل عن المحل التجاري وحقوقه؛ يخضع للإشهار والسجل التجاري.",
      "Business transfer deed; subject to publication and the commercial register.",
      "Cession de fonds de commerce ; soumise à publicité et registre du commerce.",
      "Cesión de negocio sujeta a publicidad y registro mercantil.",
      "Cessione di azienda soggetta a pubblicità e registro.",
      "Geschäftsübertragung, handelsrechtlich zu veröffentlichen.",
      "Передача бизнеса с регистрацией в торговом реестре."
    ),
    where: { ar: "يحرر غالباً بمساعدة مهنية ويسجل بالسجل التجاري", fr: "Souvent rédigé avec un professionnel et inscrit au registre du commerce" },
    authority: "ompic",
    keywords: ["تنازل محل", "cession fonds de commerce", "business transfer", "محل تجاري"],
  },

  // ══════════════ amal ══════════════
  {
    id: "cv",
    cat: "amal",
    title: { ar: "نموذج سيرة ذاتية", fr: "Modèle de CV" },
    desc: D(
      "سيرة ذاتية احترافية قابلة للتخصيص بالعربية والفرنسية.",
      "Professional customizable CV in Arabic and French.",
      "CV professionnel personnalisable en arabe et français.",
      "Currículum profesional personalizable.",
      "Curriculum professionale personalizzabile.",
      "Professioneller, anpassbarer Lebenslauf.",
      "Профессиональное резюме с настройкой."
    ),
    where: { ar: "تُرسل لطلبات التوظيف والمباريات", fr: "À envoyer pour les candidatures et concours" },
    popular: true,
    keywords: ["سيرة ذاتية", "CV", "resume", "curriculum"],
    templateId: "cv",
  },
  {
    id: "lettre-motivation",
    cat: "amal",
    title: { ar: "رسالة تحفيزية", fr: "Lettre de motivation" },
    desc: D(
      "رسالة مرافقة للسيرة الذاتية تعرض مؤهلاتك ودوافعك.",
      "Cover letter presenting your qualifications and motivation.",
      "Lettre d'accompagnement du CV présentant profil et motivation.",
      "Carta de presentación del currículum.",
      "Lettera di presentazione del CV.",
      "Bewerbungsschreiben zum Lebenslauf.",
      "Сопроводительное письмо к резюме."
    ),
    where: { ar: "تُرفق بالسيرة الذاتية في الطلب", fr: "À joindre au CV dans la candidature" },
    popular: true,
    keywords: ["رسالة تحفيزية", "lettre de motivation", "cover letter", "motivation"],
    templateId: "lettre-motivation",
  },
  {
    id: "candidature",
    cat: "amal",
    title: { ar: "طلب توظيف (ترشح تلقائي)", fr: "Demande d'emploi (candidature spontanée)" },
    desc: D(
      "خطاب ترشح تلقائي لمقاولة أو إدارة لغير الإعلانات المنشورة.",
      "Spontaneous application letter to a company or administration.",
      "Lettre de candidature spontanée à une entreprise.",
      "Carta de candidatura espontánea.",
      "Lettera di candidatura spontanea.",
      "Initiativbewerbung.",
      "Инициативное заявление о приёме на работу."
    ),
    where: { ar: "يوجه للمقاولة أو الإدارة المستهدفة", fr: "Adressée à l'entreprise ou l'administration visée" },
    keywords: ["طلب توظيف", "candidature", "job application", "emploi", "وظيفة"],
  },
  {
    id: "demission",
    cat: "amal",
    title: { ar: "طلب استقالة", fr: "Demande de démission" },
    desc: D(
      "إشعار رسمي بمغادرة العمل مع مراعاة أجل الإشعار القانوني.",
      "Formal resignation notice respecting the legal notice period.",
      "Démission officielle respectant le préavis légal.",
      "Renuncia formal respetando el preaviso legal.",
      "Dimissioni ufficiali rispettando il preavviso.",
      "Kündigung unter Einhaltung der Frist.",
      "Заявление об уходе с соблюдением срока."
    ),
    where: { ar: "يوجه للمشغل ويحفظ إثبات التسلم", fr: "Adressée à l'employeur avec preuve de réception" },
    popular: true,
    keywords: ["استقالة", "démission", "resignation", "مغادرة العمل"],
    templateId: "demission",
  },
  {
    id: "cdd",
    cat: "amal",
    title: { ar: "عقد عمل محدد المدة (CDD)", fr: "Contrat de travail à durée déterminée (CDD)" },
    desc: D(
      "عقد عمل لمدة محددة مطابق لمدونة الشغل المغربية.",
      "Fixed-term employment contract compliant with the Moroccan labor code.",
      "Contrat à durée déterminée conforme au code du travail marocain.",
      "Contrato de trabajo temporal conforme a la ley marroquí.",
      "Contratto a tempo determinato conforme alla legge.",
      "Befristeter Arbeitsvertrag nach marokkanischem Recht.",
      "Срочный трудовой договор по марокканскому законодательству."
    ),
    where: { ar: "يوقع بين المشغل والأجير؛ نسخة لكل طرف وتصريح لدى CNSS", fr: "Signé employeur/salarié ; copie pour chaque partie et déclaration CNSS" },
    authority: "cnss",
    keywords: ["عقد عمل", "CDD", "work contract", "contrat de travail", "أجير"],
    templateId: "cdd",
  },
  {
    id: "demande-stage",
    cat: "amal",
    title: { ar: "طلب تدريب", fr: "Demande de stage" },
    desc: D(
      "طلب تدريب مهني أو تكميلي موجه لمقاولة أو إدارة.",
      "Internship request addressed to a company or administration.",
      "Demande de stage adressée à une entreprise ou administration.",
      "Solicitud de prácticas dirigida a una empresa.",
      "Richiesta di tirocinio.",
      "Praktikumsanfrage.",
      "Заявление на стажировку."
    ),
    where: { ar: "يوجه لإدارة المقاولة أو المؤسسة المستهدفة", fr: "Adressée à la direction de l'entreprise visée" },
    keywords: ["تدريب", "stage", "internship", "تدريب مهني"],
    templateId: "demande-stage",
  },
  {
    id: "attestation-experience",
    cat: "amal",
    title: { ar: "شهادة خبرة مهنية", fr: "Attestation d'expérience professionnelle" },
    desc: D(
      "شهادة من مشغل سابق تثبت الخبرة والمناصب والمهام.",
      "Certificate from a former employer proving experience and roles.",
      "Attestation d'un ancien employeur prouvant l'expérience.",
      "Certificado de experiencia laboral.",
      "Attestato di esperienza professionale.",
      "Erfahrungsbescheinigung des Arbeitgebers.",
      "Справка о профессиональном опыте."
    ),
    where: { ar: "تُطلب من المشغل السابق", fr: "À demander à l'ancien employeur" },
    keywords: ["شهادة خبرة", "expérience professionnelle", "experience certificate", "خبرة"],
  },

  // ══════════════ usra ══════════════
  {
    id: "autorisation-voyage",
    cat: "usra",
    title: { ar: "إذن أبوي بسفر قاصر", fr: "Autorisation parentale de voyage" },
    desc: D(
      "موافقة الوالدين على سفر الابن/الابنة القاصر، قد تتطلب توثيقاً.",
      "Parents' consent for a minor to travel; may require legalization.",
      "Accord parental pour le voyage d'un mineur ; légalisation parfois requise.",
      "Consentimiento de los padres para el viaje de un menor.",
      "Consenso dei genitori per il viaggio di un minore.",
      "Elterliche Einwilligung zur Reise eines Minderjährigen.",
      "Согласие родителей на выезд несовершеннолетнего."
    ),
    where: { ar: "يقدم لشركة النقل أو الحدود؛ وبعض الجهات تطلب تصديق السلطة المحلية", fr: "Présenté au transporteur ou aux frontières ; certaines autorités exigent une légalisation" },
    popular: true,
    keywords: ["إذن سفر", "autorisation de voyage", "travel consent", "قاصر", "mineur"],
    templateId: "autorisation-voyage",
  },
  {
    id: "declaration-naissance",
    cat: "usra",
    title: { ar: "بلاغ الولادة", fr: "Déclaration de naissance" },
    desc: D(
      "تصريح الوالدين أو الطبيب بالولادة لمصلحة الحالة المدنية داخل الأجل.",
      "Declaration of birth by parents or doctor to civil registry within the legal period.",
      "Déclaration de naissance par les parents ou le médecin à l'état civil.",
      "Declaración de nacimiento ante el registro civil.",
      "Dichiarazione di nascita all'anagrafe.",
      "Geburtsanzeige beim Standesamt.",
      "Заявление о рождении в ЗАГС."
    ),
    where: { ar: "مصلحة الحالة المدنية بالجماعة محل الولادة داخل الأجل القانوني", fr: "Service d'état civil de la commune du lieu d'accouchement" },
    keywords: ["بلاغ الولادة", "déclaration de naissance", "birth declaration", "مولود"],
  },
  {
    id: "iltizam-nafaqa",
    cat: "usra",
    title: { ar: "التزام بأداء النفقة", fr: "Engagement de pension alimentaire" },
    desc: D(
      "التزام كتابي بأداء نفقة محددة لفائدة الزوجة أو الأبناء.",
      "Written commitment to pay defined alimony for spouse or children.",
      "Engagement écrit de verser une pension alimentaire.",
      "Compromiso escrito de pagar una pensión alimenticia.",
      "Impegno scritto a versare gli alimenti.",
      "Schriftliche Unterhaltszusage.",
      "Письменное обязательство платить алименты."
    ),
    where: { ar: "الجهة الطالبة أو المحكمة في إطار مسطرة الطلاق/النفقة", fr: "Organisme demandeur ou tribunal dans le cadre de la procédure" },
    keywords: ["نفقة", "pension alimentaire", "alimony", "التزام نفقة"],
  },
  {
    id: "demande-acte-mariage",
    cat: "usra",
    title: { ar: "طلب نسخة من عقد الزواج", fr: "Demande de copie d'acte de mariage" },
    desc: D(
      "طلب استخراج نسخة من عقد الزواج الموثق لدى العدلين.",
      "Request for a copy of the marriage deed authenticated before adouls.",
      "Demande de copie de l'acte de mariage authentifié.",
      "Solicitud de copia del acta de matrimonio.",
      "Richiesta di copia dell'atto di matrimonio.",
      "Antrag auf Kopie der Eheurkunde.",
      "Запрос копии свидетельства о браке."
    ),
    where: { ar: "كتابة الضبط بالمحكمة المصدرة للعقد أو المحكمة الابتدائية", fr: "Greffe du tribunal ayant délivré l'acte" },
    authority: "justice",
    keywords: ["عقد الزواج", "acte de mariage", "marriage certificate", "زواج"],
  },

  // ══════════════ jamaiyat ══════════════
  {
    id: "demande-creation-assoc",
    cat: "jamaiyat",
    title: { ar: "طلب تأسيس جمعية", fr: "Demande de création d'association" },
    desc: D(
      "طلب إحداث جمعية وفق القانون 75.00 يوجه للسلطة الإدارية المحلية.",
      "Association creation request under law 75.00 addressed to the local authority.",
      "Demande de création d'association selon la loi 75.00.",
      "Solicitud de creación de asociación según la ley 75.00.",
      "Domanda di costituzione di associazione.",
      "Antrag auf Vereinsgründung.",
      "Заявление на создание ассоциации."
    ),
    where: { ar: "السلطة الإدارية المحلية (القيادة/العمالة) التابعة لها مقر الجمعية", fr: "Autorité administrative locale du siège de l'association" },
    authority: "interieur",
    keywords: ["تأسيس جمعية", "création association", "association", "قانون 75.00", "جمعية"],
  },
  {
    id: "pv-ag-fondateur",
    cat: "jamaiyat",
    title: { ar: "محضر الجمع العام التأسيسي", fr: "Procès-verbal de l'AG constitutive" },
    desc: D(
      "محضر تأسيسي يوثق مداولات الجمع العام ومسطرة التأسيس.",
      "Founding minutes documenting the general assembly's deliberations.",
      "PV fondateur documentant les délibérations de l'assemblée.",
      "Acta fundacional de la asamblea general.",
      "Verbale dell'assemblea costitutiva.",
      "Protokoll der Gründungsversammlung.",
      "Протокол учредительного собрания."
    ),
    where: { ar: "يرفق بملف التأسيس لدى السلطة المحلية", fr: "À joindre au dossier de création" },
    keywords: ["محضر جمع عام", "PV assemblée", "minutes", "جمع عام تأسيسي"],
  },
  {
    id: "statuts-assoc",
    cat: "jamaiyat",
    title: { ar: "نموذج قانون أساسي لجمعية", fr: "Modèle de statuts d'association" },
    desc: D(
      "هيكل قانون أساسي متكامل: الأهداف، الأجهزة، الموارد والحل.",
      "Complete bylaws structure: goals, bodies, resources and dissolution.",
      "Structure complète de statuts : buts, organes, ressources, dissolution.",
      "Estatutos completos: fines, órganos, recursos.",
      "Statuto completo: scopi, organi, risorse.",
      "Vollständige Satzung: Ziele, Organe, Mittel.",
      "Полный устав: цели, органы, средства."
    ),
    where: { ar: "يعدل حسب خصوصيات الجمعية ويرفق بالملف", fr: "À adapter selon l'association et joindre au dossier" },
    keywords: ["قانون أساسي", "statuts", "bylaws", "جمعية"],
  },

  // ══════════════ binaa ══════════════
  {
    id: "permis-construire",
    cat: "binaa",
    title: { ar: "طلب رخصة البناء", fr: "Demande de permis de construire" },
    desc: D(
      "طلب رخصة بناء وفق مقتضيات التعمير يرفق بالمخططات والوثائق.",
      "Building permit request per urban planning rules, with plans attached.",
      "Demande de permis de construire selon la réglementation d'urbanisme.",
      "Solicitud de licencia de obra según urbanismo.",
      "Richiesta di permesso di costruire.",
      "Baugenehmigungsantrag.",
      "Заявление на разрешение строительства."
    ),
    where: { ar: "الوكالة الحضرية أو الجماعة الترابية التابعة لها العقار", fr: "Agence urbaine ou commune du lieu du bien" },
    keywords: ["رخصة البناء", "permis de construire", "building permit", "بناء", "construction"],
  },
  {
    id: "autorisation-cloture",
    cat: "binaa",
    title: { ar: "طلب ترخيص التسييج", fr: "Demande d'autorisation de clôture" },
    desc: D(
      "طلب ترخيص تسييج أرض أو عقار قبل البناء أو تحويله.",
      "Fencing authorization request for land before building or conversion.",
      "Demande d'autorisation de clôture d'un terrain.",
      "Solicitud de autorización de vallado.",
      "Richiesta di autorizzazione alla recinzione.",
      "Antrag auf Einfriedungsgenehmigung.",
      "Заявление на разрешение ограждения."
    ),
    where: { ar: "الوكالة الحضرية أو الجماعة الترابية", fr: "Agence urbaine ou commune" },
    keywords: ["تسييج", "clôture", "fencing", "ترخيص"],
  },
  {
    id: "declaration-achevement",
    cat: "binaa",
    title: { ar: "تصريح باكتمال الأشغال", fr: "Déclaration d'achèvement des travaux" },
    desc: D(
      "تصريح بانتهاء أشغال البناء لاستخلاص شهادة المطابقة.",
      "Declaration of completed construction works for the conformity certificate.",
      "Déclaration d'achèvement des travaux de construction.",
      "Declaración de finalización de obras.",
      "Dichiarazione di fine lavori.",
      "Fertigstellungsanzeige.",
      "Заявление о завершении строительных работ."
    ),
    where: { ar: "الجماعة أو الوكالة الحضرية المانحة للرخصة", fr: "Commune ou agence urbaine ayant délivré le permis" },
    keywords: ["اكتمال الأشغال", "achèvement des travaux", "completion", "شهادة المطابقة", "conformité"],
  },

  // ══════════════ muqawalat ══════════════
  {
    id: "facture",
    cat: "muqawalat",
    title: { ar: "نموذج فاتورة", fr: "Modèle de facture" },
    desc: D(
      "فاتورة جاهزة للمقاول الذاتي والمهن الحركة بمرجعها الضريبي.",
      "Ready invoice for auto-entrepreneurs and freelancers with tax reference.",
      "Facture prête à l'emploi pour auto-entrepreneurs et indépendants.",
      "Factura lista para autónomos y freelance.",
      "Fattura pronta per auto-imprenditori.",
      "Fertige Rechnung für Selbstständige.",
      "Готовый счёт для самозанятых."
    ),
    where: { ar: "تسلم للعميل وتحفظ نسخة للتصريح الضريبي", fr: "Délivrée au client ; copie conservée pour la déclaration fiscale" },
    authority: "tax",
    popular: true,
    keywords: ["فاتورة", "facture", "invoice", "مقاول ذاتي", "auto-entrepreneur"],
    templateId: "facture",
  },
  {
    id: "devis",
    cat: "muqawalat",
    title: { ar: "نموذج عرض سعر", fr: "Modèle de devis" },
    desc: D(
      "عرض سعر تفصيلي للخدمات أو السلع قبل إبرام الاتفاق.",
      "Detailed quote for services or goods before concluding the agreement.",
      "Devis détaillé pour services ou marchandises.",
      "Presupuesto detallado de servicios o productos.",
      "Preventivo dettagliato.",
      "Detailliertes Angebot.",
      "Детальное коммерческое предложение."
    ),
    where: { ar: "يقدم للعميل للموافقة والتوقيع", fr: "Présenté au client pour accord et signature" },
    keywords: ["عرض سعر", "devis", "quote", "تسعير"],
  },
  {
    id: "contrat-prestation",
    cat: "muqawalat",
    title: { ar: "عقد تقديم خدمات", fr: "Contrat de prestation de services" },
    desc: D(
      "عقد خدمات بين مزود الخدمة والعميل بالالتزامات والتعويضات.",
      "Service contract between provider and client with obligations.",
      "Contrat de prestation entre prestataire et client.",
      "Contrato de servicios entre proveedor y cliente.",
      "Contratto di servizi tra fornitore e cliente.",
      "Dienstleistungsvertrag.",
      "Договор на оказание услуг."
    ),
    where: { ar: "يوقع بين الطرفين", fr: "Signé entre les deux parties" },
    keywords: ["عقد خدمات", "prestation de services", "service contract", "خدمات"],
  },
  {
    id: "recu-paiement",
    cat: "muqawalat",
    title: { ar: "وصل استلام مبلغ", fr: "Reçu de paiement" },
    desc: D(
      "وصل رسمي باستلام مبلغ مالي عن خدمة أو سلعة.",
      "Official receipt for a payment for a service or good.",
      "Reçu officiel d'encaissement d'un montant.",
      "Recibo oficial de pago.",
      "Ricevuta ufficiale di pagamento.",
      "Offizielle Zahlungsquittung.",
      "Официальная квитанция о получении средств."
    ),
    where: { ar: "يحفظ لدى الدافع والمستفيد", fr: "Conservé par le payeur et le bénéficiaire" },
    keywords: ["وصل استلام", "reçu de paiement", "payment receipt", "استلام مبلغ"],
  },

  // ══════════════ mahkama ══════════════
  {
    id: "demande-casier",
    cat: "mahkama",
    title: { ar: "طلب السجل العدلي", fr: "Demande d'extrait de casier judiciaire" },
    desc: D(
      "مسطرة الحصول على البطاقة رقم 3 من السجل العدلي للمحكمة.",
      "Procedure to obtain bulletin no. 3 from the court's criminal record.",
      "Procédure pour obtenir le bulletin n°3 du casier judiciaire.",
      "Procedimiento para obtener el boletín n.º 3.",
      "Procedura per ottenere il certificato del casellario.",
      "Verfahren für Führungszeugnis (Blatt 3).",
      "Процедура получения справки о судимости."
    ),
    where: { ar: "كتابة الضبط بالمحكمة الابتدائية لمحل الإقامة (وبالخلاف عبر القنصليات)", fr: "Greffe du tribunal de première instance de la résidence (à l'étranger via les consulats)" },
    authority: "justice",
    popular: true,
    keywords: ["السجل العدلي", "casier judiciaire", "criminal record", "البطاقة 3", "bulletin 3"],
  },
  {
    id: "plainte-parquet",
    cat: "mahkama",
    title: { ar: "شكاية إلى النيابة العامة", fr: "Plainte auprès du parquet" },
    desc: D(
      "شكاية مباشرة لوكيل الملك بخصوص جنحة أو جناية.",
      "Direct complaint to the King's prosecutor regarding an offense.",
      "Plainte directe au procureur du Roi pour une infraction.",
      "Denuncia directa al fiscal por una infracción.",
      "Denuncia diretta al procuratore.",
      "Direkte Strafanzeige bei der Staatsanwaltschaft.",
      "Прямая жалоба прокурору о правонарушении."
    ),
    where: { ar: "النيابة العامة بالمحكمة الابتدائية المختصة", fr: "Parquet du tribunal de première instance compétent" },
    authority: "justice",
    keywords: ["النيابة العامة", "plainte parquet", "prosecutor complaint", "وكيل الملك", "شكاية مباشرة"],
  },
  {
    id: "demande-copie-jugement",
    cat: "mahkama",
    title: { ar: "طلب نسخة من حكم", fr: "Demande de copie de jugement" },
    desc: D(
      "طلب استخراج نسخة رسمية من حكم قضائي صادر عن المحكمة.",
      "Request for an official copy of a court judgment.",
      "Demande de copie officielle d'un jugement.",
      "Solicitud de copia oficial de sentencia.",
      "Richiesta di copia di sentenza.",
      "Antrag auf Urteilsabschrift.",
      "Запрос официальной копии судебного решения."
    ),
    where: { ar: "كتابة الضبط بالمحكمة المصدرة للحكم", fr: "Greffe du tribunal ayant rendu le jugement" },
    authority: "justice",
    keywords: ["نسخة حكم", "copie de jugement", "judgment copy", "حكم قضائي"],
  },

  // ══════════════ bank ══════════════
  {
    id: "ouverture-compte",
    cat: "bank",
    title: { ar: "طلب فتح حساب بنكي/بريدي", fr: "Demande d'ouverture de compte" },
    desc: D(
      "طلب فتح حساب لدى وكالة بنكية أو بريدية بالوثائق المطلوبة.",
      "Account opening request at a bank or postal agency with required documents.",
      "Demande d'ouverture de compte bancaire ou postal.",
      "Solicitud de apertura de cuenta bancaria o postal.",
      "Richiesta di apertura conto.",
      "Antrag auf Kontoeröffnung.",
      "Заявление на открытие счёта."
    ),
    where: { ar: "الوكالة البنكية أو البريدية", fr: "Agence bancaire ou postale" },
    authority: "poste",
    keywords: ["فتح حساب", "ouverture de compte", "account opening", "حساب بنكي", "barid bank"],
  },
  {
    id: "domiciliation-salaire",
    cat: "bank",
    title: { ar: "طلب تحويل الأجر إلى الحساب", fr: "Demande de domiciliation de salaire" },
    desc: D(
      "طلب تحويل الراتب شهرياً إلى حساب بنكي أو بريدي.",
      "Request for monthly salary transfer to a bank or postal account.",
      "Demande de virement mensuel du salaire.",
      "Solicitud de domiciliación del salario.",
      "Richiesta di accredito dello stipendio.",
      "Antrag auf Gehaltsüberweisung.",
      "Заявление на перевод зарплаты на счёт."
    ),
    where: { ar: "يقدم للمشغل ويعلم البنك/البريد", fr: "Adressée à l'employeur avec information de la banque" },
    keywords: ["تحويل الأجر", "domiciliation salaire", "salary transfer", "راتب"],
  },
  {
    id: "immatriculation-cnss",
    cat: "bank",
    title: { ar: "التسجيل في CNSS والتصريح بالأجير", fr: "Affiliation CNSS et déclaration d'employé" },
    desc: D(
      "مسطرة انخراط الأجراء وأصحاب العمل في الضمان الاجتماعي رقمياً.",
      "Procedure for employee and employer registration with social security.",
      "Procédure d'affiliation des salariés et employeurs à la CNSS.",
      "Procedimiento de afiliación a la seguridad social.",
      "Procedura di iscrizione alla previdenza.",
      "Anmeldeverfahren bei der Sozialversicherung.",
      "Процедура регистрации в системе соцстрахования."
    ),
    where: { ar: "عبر البوابة الرقمية أو وكالة CNSS التابعة لها المقاولة", fr: "En ligne ou auprès de l'agence CNSS de l'entreprise" },
    authority: "cnss",
    popular: true,
    keywords: ["CNSS", "ضمان اجتماعي", "sécurité sociale", "social security", "انخراط", "affiliation"],
  },

  // ══════════════ ijraat ══════════════
  {
    id: "carte-nationale",
    cat: "ijraat",
    title: { ar: "مسطرة البطاقة الوطنية البيومترية", fr: "Procédure de la carte nationale biométrique" },
    desc: D(
      "خطوات استخراج وتجديد البطاقة الوطنية من الملحقة الإدارية.",
      "Steps to obtain and renew the national ID card at the administrative annex.",
      "Étapes pour obtenir et renouveler la CIN à l'annexe administrative.",
      "Pasos para obtener y renovar el DNI.",
      "Passi per ottenere e rinnovare la CIN.",
      "Schritte zum Erhalt des Personalausweises.",
      "Шаги получения и замены удостоверения личности."
    ),
    where: { ar: "الملحقة الإدارية أو القيادة التابعة لمحل الإقامة", fr: "Annexe administrative ou caïdat de la résidence" },
    authority: "interieur",
    popular: true,
    keywords: ["البطاقة الوطنية", "CIN", "national id", "carte nationale", "بطاقة تعريف"],
  },
  {
    id: "passeport-procedure",
    cat: "ijraat",
    title: { ar: "مسطرة جواز السفر البيومتري", fr: "Procédure du passeport biométrique" },
    desc: D(
      "خطوات الحجز الإلكتروني لموعد وإيداع ملف جواز السفر.",
      "Steps for online appointment booking and passport file submission.",
      "Étapes de la prise de rendez-vous en ligne et du dépôt du dossier.",
      "Pasos para la cita en línea y entrega del expediente.",
      "Passi per la prenotazione online e la presentazione.",
      "Schritte zur Online-Terminbuchung und Antragstellung.",
      "Шаги онлайн-записи и подачи документов на паспорт."
    ),
    where: { ar: "حجز الموعد عبر البوابة الرسمية ثم مركز تسليم الجوازات", fr: "Rendez-vous via le portail officiel puis centre de livraison des passeports" },
    authority: "passeport",
    popular: true,
    keywords: ["جواز السفر", "passeport", "passport", "حجز موعد", "rendez-vous"],
  },
  {
    id: "rsu-procedure",
    cat: "ijraat",
    title: { ar: "التسجيل في السجل الاجتماعي الموحد", fr: "Inscription au Registre Social Unifié" },
    desc: D(
      "خطوات تسجيل الأسرة في RSU لحساب مؤشر الاستحقاق للدعم.",
      "Steps to register the family in the RSU for the aid eligibility index.",
      "Étapes d'inscription de la famille au RSU.",
      "Pasos para inscribir a la familia en el RSU.",
      "Passi per iscrivere la famiglia al RSU.",
      "Schritte zur RSU-Familienregistrierung.",
      "Шаги регистрации семьи в RSU."
    ),
    where: { ar: "عبر البوابة الرسمية أو بمراكز خدمات المواطنين والملحقات", fr: "En ligne ou dans les centres de services aux citoyens" },
    authority: "rsu",
    popular: true,
    keywords: ["RSU", "السجل الاجتماعي", "registre social", "social register", "الدعم المباشر", "aide directe"],
  },
  {
    id: "amo-tadamon-procedure",
    cat: "ijraat",
    title: { ar: "التسجيل في AMO تضامن", fr: "Inscription à l'AMO Tadamon" },
    desc: D(
      "مسطرة الاستفادة من التغطية الصحية تضامن: المعرف الرقمي فالسجل فالطلب.",
      "AMO Tadamon procedure: digital ID, register, then application.",
      "Procédure AMO Tadamon : identifiant, registre, puis demande.",
      "Procedimiento AMO Tadamon.",
      "Procedura AMO Tadamon.",
      "Verfahren AMO Tadamon.",
      "Процедура AMO Tadamon."
    ),
    where: { ar: "التسجيل الرقمي ثم إيداع الطلب بالملحقة الإدارية أو القيادة", fr: "Inscription en ligne puis dépôt à l'annexe administrative ou caïdat" },
    authority: "amotadamon",
    popular: true,
    keywords: ["AMO تضامن", "AMO Tadamon", "التغطية الصحية", "couverture santé", "راميد", "RAMED"],
  },
  {
    id: "minhaty-procedure",
    cat: "ijraat",
    title: { ar: "طلب المنحة عبر بوابة منحتي", fr: "Demande de bourse via Minhaty" },
    desc: D(
      "خطوات إيداع طلب منحة التعليم العالي عبر البوابة الرقمية.",
      "Steps to file a higher education scholarship request online.",
      "Étapes du dépôt de la demande de bourse en ligne.",
      "Pasos para solicitar la beca en línea.",
      "Passi per presentare la domanda di borsa.",
      "Schritte zur Online-Stipendiumsbewerbung.",
      "Шаги подачи заявления на стипендию онлайн."
    ),
    where: { ar: "إيداع الطلب عبر البوابة خلال الفترة المحددة سنوياً", fr: "Dépôt via le portail pendant la période annuelle dédiée" },
    authority: "minhaty",
    keywords: ["منحتي", "minhaty", "منحة", "bourse", "scholarship", "منحة الدراسة"],
  },
];

export const getDoc = (id: string) => documents.find((d) => d.id === id);
export const popularDocs = documents.filter((d) => d.popular);
export const docCount = documents.length;
