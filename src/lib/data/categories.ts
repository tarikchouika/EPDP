import type { Locale } from "@/lib/i18n/types";

export type CategoryId =
  | "demandes"
  | "dgi"
  | "cnss"
  | "chikayat"
  | "ichhadat"
  | "tasarih"
  | "iltizamat"
  | "wakalat"
  | "uqud-kira"
  | "uqud-bay"
  | "amal"
  | "usra"
  | "jamaiyat"
  | "binaa"
  | "muqawalat"
  | "mahkama"
  | "bank"
  | "ijraat"
  | "naulat-fasikh";

export type L = Record<Locale, string>;

export interface Category {
  id: CategoryId;
  icon: string; // lucide icon name key
  name: L;
  desc: L;
}

const N = (ar: string, fr: string, en: string, es: string, it: string, de: string, ru: string): L => ({
  ar, fr, en, es, it, de, ru,
});

export const categories: Category[] = [
  {
    id: "demandes",
    icon: "mail",
    name: N(
      "طلبات رسمية",
      "Demandes officielles",
      "Official requests",
      "Solicitudes oficiales",
      "Richieste ufficiali",
      "Offizielle Anträge",
      "Официальные заявления"
    ),
    desc: {
      ar: "نماذج طلبات موجهة للإدارات والجماعات والمؤسسات العمومية.",
      en: "Request templates addressed to administrations, communes and public institutions.",
      fr: "Modèles de demandes adressées aux administrations, communes et institutions publiques.",
      es: "Modelos de solicitudes dirigidas a administraciones, comunas e instituciones públicas.",
      it: "Modelli di richieste indirizzate ad amministrazioni, comuni e istituzioni pubbliche.",
      de: "Antragsvorlagen an Behörden, Gemeinden und öffentliche Einrichtungen.",
      ru: "Шаблоны заявлений для ведомств, коммун и государственных учреждений.",
    },
  },
  {
    id: "dgi",
    icon: "coins",
    name: N(
      "ضرائب DGI",
      "Impôts (DGI)",
      "Taxes (DGI)",
      "Impuestos (DGI)",
      "Imposte (DGI)",
      "Steuern (DGI)",
      "Налоги (DGI)"
    ),
    desc: {
      ar: "التصريحات والطلبات الضريبية: TVA وIR وIS، الإعفاءات، شهادات الذمة والتظلمات لدى المديرية العامة للضرائب.",
      en: "Tax filings and requests: VAT, IR, corporate tax, exemptions, clearance certificates and claims at the DGI.",
      fr: "Déclarations et demandes fiscales : TVA, IR, IS, exonérations, attestations et réclamations auprès de la DGI.",
      es: "Declaraciones y solicitudes fiscales: IVA, IR, IS, exenciones, certificados y reclamaciones ante la DGI.",
      it: "Dichiarazioni e richieste fiscali: IVA, IR, imposte societarie, esenzioni, certificati e reclami alla DGI.",
      de: "Steuererklärungen und Anträge: MwSt, ESt, KSt, Befreiungen, Bescheinigungen und Einsprüche bei der DGI.",
      ru: "Налоговые декларации и заявления: НДС, НДФЛ, налог на прибыль, освобождения, справки и возражения в DGI.",
    },
  },
  {
    id: "cnss",
    icon: "heart-pulse",
    name: N(
      "الضمان الاجتماعي CNSS",
      "Sécurité sociale (CNSS)",
      "Social security (CNSS)",
      "Seguridad social (CNSS)",
      "Previdenza sociale (CNSS)",
      "Sozialversicherung (CNSS)",
      "Соцобеспечение (CNSS)"
    ),
    desc: {
      ar: "نماذج CNSS وAMO وCNOPS: التسجيل، التصريحات، التعويضات العائلية والصحية ومعاشات التقاعد.",
      en: "CNSS, AMO and CNOPS forms: registration, filings, family and health benefits, pensions.",
      fr: "Formulaires CNSS, AMO et CNOPS : immatriculation, déclarations, prestations familiales et santé, retraites.",
      es: "Formularios de CNSS, AMO y CNOPS: registro, declaraciones, prestaciones familiares y de salud, pensiones.",
      it: "Moduli CNSS, AMO e CNOPS: iscrizione, denunce, prestazioni familiari e sanitarie, pensioni.",
      de: "CNSS-, AMO- und CNOPS-Formulare: Anmeldung, Meldungen, Familien- und Gesundheitsleistungen, Renten.",
      ru: "Формы CNSS, AMO и CNOPS: регистрация, отчётность, семейные и медицинские выплаты, пенсии.",
    },
  },
  {
    id: "chikayat",
    icon: "scale",
    name: N(
      "شكايات وتظلمات",
      "Plaintes et réclamations",
      "Complaints & grievances",
      "Quejas y reclamaciones",
      "Reclami e lamentele",
      "Beschwerden",
      "Жалобы и претензии"
    ),
    desc: {
      ar: "نماذج شكايات وتظلمات موجهة للإدارات والمصالح المختصة.",
      en: "Complaint and grievance templates for the competent administrations.",
      fr: "Modèles de plaintes et réclamations adressés aux administrations compétentes.",
      es: "Modelos de reclamaciones para las administraciones competentes.",
      it: "Modelli di reclami per le amministrazioni competenti.",
      de: "Beschwerde- und Einspruchsvorlagen für die zuständigen Behörden.",
      ru: "Шаблоны жалоб и претензий для компетентных ведомств.",
    },
  },
  {
    id: "ichhadat",
    icon: "badge-check",
    name: N(
      "إشهادات وشهادات",
      "Attestations et certificats",
      "Attestations & certificates",
      "Constancias y certificados",
      "Attestati e certificati",
      "Bescheinigungen",
      "Справки и свидетельства"
    ),
    desc: {
      ar: "شهادات العمل والسكنى والدخل وسائر الإشهادات الإدارية.",
      en: "Work, residence, income certificates and other administrative attestations.",
      fr: "Attestations de travail, de résidence, de revenu et autres certificats administratifs.",
      es: "Certificados de trabajo, residencia, ingresos y otras constancias administrativas.",
      it: "Certificati di lavoro, residenza, reddito e altre attestazioni amministrative.",
      de: "Arbeits-, Wohn- und Einkommensbescheinigungen sowie weitere Nachweise.",
      ru: "Справки о работе, проживании, доходах и другие административные свидетельства.",
    },
  },
  {
    id: "tasarih",
    icon: "file-signature",
    name: N(
      "تصاريح",
      "Déclarations",
      "Declarations",
      "Declaraciones",
      "Dichiarazioni",
      "Erklärungen",
      "Декларации"
    ),
    desc: {
      ar: "تصاريح بالشرف وتصاريح إدارية رسمية متنوعة.",
      en: "Sworn declarations and various official administrative statements.",
      fr: "Déclarations sur l'honneur et diverses déclarations administratives.",
      es: "Declaraciones juradas y diversas declaraciones administrativas.",
      it: "Dichiarazioni giurate e varie dichiarazioni amministrative.",
      de: "Eidesstattliche Erklärungen und weitere amtliche Deklarationen.",
      ru: "Письменные заявления под присягой и другие официальные декларации.",
    },
  },
  {
    id: "iltizamat",
    icon: "handshake",
    name: N(
      "التزامات",
      "Engagements",
      "Commitments",
      "Compromisos",
      "Impegni",
      "Verpflichtungen",
      "Обязательства"
    ),
    desc: {
      ar: "التزامات مكتوبة بالسكن والضمان والتسديد والكفالة.",
      en: "Written commitments for housing, guarantee, payment and sponsorship.",
      fr: "Engagements écrits de logement, de garantie, de paiement et de parrainage.",
      es: "Compromisos escritos de vivienda, garantía, pago y aval.",
      it: "Impegni scritti di alloggio, garanzia, pagamento e sponsorship.",
      de: "Schriftliche Verpflichtungen für Wohnung, Bürgschaft, Zahlung und Garantie.",
      ru: "Письменные обязательства по жилью, поручительству, оплате и спонсорству.",
    },
  },
  {
    id: "wakalat",
    icon: "stamp",
    name: N(
      "وكالات وتفويضات",
      "Procurations",
      "Powers of attorney",
      "Poderes",
      "Procure",
      "Vollmachten",
      "Доверенности"
    ),
    desc: {
      ar: "وكالات وتفويضات للاستلام ومتابعة الملفات والإجراءات البسيطة.",
      en: "Powers of attorney for collection, file follow-up and simple procedures.",
      fr: "Procurations pour le retrait, le suivi des dossiers et les démarches simples.",
      es: "Poderes para cobro, seguimiento de expedientes y trámites sencillos.",
      it: "Procure per ritiro, seguito pratiche e procedure semplici.",
      de: "Vollmachten für Empfang, Aktverfolgung und einfache Verfahren.",
      ru: "Доверенности на получение, ведение дел и простые процедуры.",
    },
  },
  {
    id: "uqud-kira",
    icon: "home",
    name: N(
      "عقود الكراء",
      "Contrats de bail",
      "Lease contracts",
      "Contratos de alquiler",
      "Contratti di locazione",
      "Mietverträge",
      "Договоры аренды"
    ),
    desc: {
      ar: "عقود كراء السكنى والمحلات المرفقة بوصولات الأداء.",
      en: "Residential and commercial lease contracts with payment receipts.",
      fr: "Contrats de bail d'habitation et de locaux avec quittances.",
      es: "Contratos de alquiler de vivienda y locales con recibos de pago.",
      it: "Contratti di locazione residenziale e commerciale con ricevute.",
      de: "Mietverträge für Wohn- und Gewerberäume mit Zahlungsquittungen.",
      ru: "Договоры аренды жилья и помещений с квитанциями об оплате.",
    },
  },
  {
    id: "uqud-bay",
    icon: "arrow-left-right",
    name: N(
      "عقود البيع والشراء",
      "Contrats de vente",
      "Sale contracts",
      "Contratos de venta",
      "Contratti di vendita",
      "Kaufverträge",
      "Договоры купли-продажи"
    ),
    desc: {
      ar: "عقود بيع السيارات والمنقولات والتنازل عن المحلات التجارية.",
      en: "Sale contracts for vehicles, movable property and business transfers.",
      fr: "Contrats de vente de véhicules, de meubles et cession de fonds de commerce.",
      es: "Contratos de venta de vehículos, bienes muebles y cesión de negocios.",
      it: "Contratti di vendita di veicoli, beni mobili e cessione di attività.",
      de: "Kaufverträge für Fahrzeuge, bewegliche Güter und Geschäftsübertragungen.",
      ru: "Договоры купли-продажи авто, движимого имущества и передачи бизнеса.",
    },
  },
  {
    id: "amal",
    icon: "briefcase",
    name: N(
      "عمل وتوظيف",
      "Travail et emploi",
      "Work & employment",
      "Trabajo y empleo",
      "Lavoro e impiego",
      "Arbeit & Beschäftigung",
      "Работа и трудоустройство"
    ),
    desc: {
      ar: "السيرة الذاتية، رسائل التحفيز، عقود العمل والاستقالة.",
      en: "CVs, cover letters, employment contracts and resignations.",
      fr: "CV, lettres de motivation, contrats de travail et démissions.",
      es: "Currículums, cartas de motivación, contratos de trabajo y renuncias.",
      it: "Curriculum, lettere di motivazione, contratti di lavoro e dimissioni.",
      de: "Lebensläufe, Bewerbungsschreiben, Arbeitsverträge und Kündigungen.",
      ru: "Резюме, сопроводительные письма, трудовые договоры и заявления об уходе.",
    },
  },
  {
    id: "usra",
    icon: "heart-handshake",
    name: N(
      "زواج وأسرة",
      "Mariage et famille",
      "Marriage & family",
      "Matrimonio y familia",
      "Matrimonio e famiglia",
      "Ehe & Familie",
      "Брак и семья"
    ),
    desc: {
      ar: "وثائق الأسرة: الإذن بالسفر، بلاغ الولادة، النفقة وغيرها.",
      en: "Family documents: travel consent, birth declaration, alimony and more.",
      fr: "Documents familiaux : autorisation de voyage, déclaration de naissance, pension alimentaire…",
      es: "Documentos familiares: permiso de viaje, declaración de nacimiento, pensión alimenticia…",
      it: "Documenti familiari: autorizzazione al viaggio, dichiarazione di nascita, alimenti…",
      de: "Familiendokumente: Reiseerlaubnis, Geburtsanzeige, Unterhalt und mehr.",
      ru: "Семейные документы: согласие на выезд, регистрация рождения, алименты и др.",
    },
  },
  {
    id: "jamaiyat",
    icon: "users",
    name: N(
      "جمعيات وتعاونيات",
      "Associations et coopératives",
      "Associations & cooperatives",
      "Asociaciones y cooperativas",
      "Associazioni e cooperative",
      "Vereine & Genossenschaften",
      "Ассоциации и кооперативы"
    ),
    desc: {
      ar: "ملفات تأسيس الجمعيات: الطلبات، المحاضر والقوانين الأساسية.",
      en: "Association founding files: requests, minutes and bylaws.",
      fr: "Dossiers de création d'associations : demandes, procès-verbaux et statuts.",
      es: "Expedientes de creación de asociaciones: solicitudes, actas y estatutos.",
      it: "Pratiche di costituzione di associazioni: richieste, verbali e statuti.",
      de: "Vereinsgründungsunterlagen: Anträge, Protokolle und Satzung.",
      ru: "Документы для создания ассоциаций: заявления, протоколы и уставы.",
    },
  },
  {
    id: "binaa",
    icon: "hard-hat",
    name: N(
      "بناء وعمران",
      "Construction et urbanisme",
      "Construction & planning",
      "Construcción y urbanismo",
      "Costruzione e urbanistica",
      "Bau & Stadtplanung",
      "Строительство и градостроительство"
    ),
    desc: {
      ar: "طلبات رخص البناء والتسييج والتصريح باكتمال الأشغال.",
      en: "Building permit, fencing and completion declaration requests.",
      fr: "Demandes de permis de construire, de clôture et déclaration d'achèvement.",
      es: "Solicitudes de licencia de obra, vallado y declaración de finalización.",
      it: "Richieste di permesso di costruire, recinzione e dichiarazione di fine lavori.",
      de: "Anträge auf Baugenehmigung, Einfriedung und Fertigstellungserklärung.",
      ru: "Заявления на разрешение строительства, ограждение и акт завершения работ.",
    },
  },
  {
    id: "muqawalat",
    icon: "receipt",
    name: N(
      "مقاولات وفواتير",
      "Entreprises et factures",
      "Business & invoicing",
      "Empresas y facturas",
      "Imprese e fatture",
      "Unternehmen & Rechnungen",
      "Бизнес и счета"
    ),
    desc: {
      ar: "الفواتير، عروض الأسعار، عقود الخدمات ووثائق المقاولين.",
      en: "Invoices, quotes, service contracts and business owner documents.",
      fr: "Factures, devis, contrats de prestation et documents d'entrepreneurs.",
      es: "Facturas, presupuestos, contratos de servicios y documentos de empresarios.",
      it: "Fatture, preventivi, contratti di servizio e documenti per imprenditori.",
      de: "Rechnungen, Angebote, Dienstleistungsverträge und Unternehmerdokumente.",
      ru: "Счета, коммерческие предложения, договоры на услуги и документы предпринимателей.",
    },
  },
  {
    id: "mahkama",
    icon: "landmark",
    name: N(
      "قضاء وعدالة",
      "Justice et tribunal",
      "Justice & courts",
      "Justicia y tribunales",
      "Giustizia e tribunali",
      "Justiz & Gerichte",
      "Суд и правосудие"
    ),
    desc: {
      ar: "مساطر المحكمة: السجل العدلي، الشكايات للنيابة وطلب الأحكام.",
      en: "Court procedures: criminal record, complaints to the prosecution, judgments.",
      fr: "Procédures judiciaires : casier judiciaire, plaintes au parquet, jugements.",
      es: "Procedimientos judiciales: antecedentes penales, denuncias al fiscal, sentencias.",
      it: "Procedimenti giudiziari: casellario, denunce alla procura, sentenze.",
      de: "Gerichtsverfahren: Führungszeugnis, Strafanzeigen, Urteile.",
      ru: "Судебные процедуры: справка о судимости, жалобы прокурору, решения суда.",
    },
  },
  {
    id: "bank",
    icon: "credit-card",
    name: N(
      "بنك وضمان اجتماعي",
      "Banque et sécurité sociale",
      "Banking & social security",
      "Banca y seguridad social",
      "Banca e previdenza",
      "Bank & Sozialversicherung",
      "Банк и соцстрахование"
    ),
    desc: {
      ar: "طلبات فتح الحسابات، تحويل الأجور والتسجيل في الضمان الاجتماعي.",
      en: "Account opening, salary transfer and social security registration requests.",
      fr: "Ouverture de compte, virement de salaire et affiliation à la sécurité sociale.",
      es: "Apertura de cuentas, transferencia de salario y afiliación a la seguridad social.",
      it: "Apertura conto, accredito stipendio e iscrizione alla previdenza sociale.",
      de: "Kontoeröffnung, Gehaltsüberweisung und Sozialversicherungsanmeldung.",
      ru: "Открытие счёта, перевод зарплаты и регистрация в системе соцстрахования.",
    },
  },
  {
    id: "ijraat",
    icon: "clipboard-list",
    name: N(
      "إجراءات إدارية",
      "Procédures administratives",
      "Administrative procedures",
      "Trámites administrativos",
      "Procedure amministrative",
      "Verwaltungsverfahren",
      "Административные процедуры"
    ),
    desc: {
      ar: "مساطر البطاقة الوطنية، جواز السفر، RSU، AMO تضامن والمنح.",
      en: "ID card, passport, RSU, AMO Tadamon and scholarship procedures.",
      fr: "Procédures CIN, passeport, RSU, AMO Tadamon et bourses.",
      es: "Trámites del DNI, pasaporte, RSU, AMO Tadamon y becas.",
      it: "Procedure carta d'identità, passaporto, RSU, AMO Tadamon e borse.",
      de: "Verfahren für Ausweis, Pass, RSU, AMO Tadamon und Stipendien.",
      ru: "Процедуры: удостоверение личности, паспорт, RSU, AMO Tadamon и стипендии.",
    },
  },
  {
    id: "naulat-fasikh",
    icon: "file-x",
    name: N(
      "تنازلات وفسخ",
      "Cessions et résiliations",
      "Waivers & terminations",
      "Cesiones y resoluciones",
      "Cessioni e risoluzioni",
      "Übertragungen & Kündigungen",
      "Уступки и расторжения"
    ),
    desc: {
      ar: "نماذج التنازل عن العقود والمركبات والمستحقات وفسخ العقود بالتراضي.",
      en: "Templates for waiving contracts, vehicles and dues, and amicable rescissions.",
      fr: "Modèles de cession de contrats, véhicules et créances, et résiliations à l'amiable.",
      es: "Modelos de cesión de contratos, vehículos y derechos, y resoluciones amistosas.",
      it: "Modelli di cessione di contratti, veicoli e crediti, e risoluzioni consensuali.",
      de: "Vorlagen für die Übertragung von Verträgen, Fahrzeugen und Ansprüchen sowie einvernehmliche Kündigungen.",
      ru: "Шаблоны уступки договоров, автомобилей и прав, а также расторжения по соглашению.",
    },
  },
];
