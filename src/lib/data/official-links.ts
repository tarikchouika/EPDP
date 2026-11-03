import type { L } from "./categories";
import type { Loc5, OptL5, LinkI18nOverlay } from "./forms-shared";
import { linkI18n, linkCatI18n } from "./i18n-overlays";
import type { ResolvedLink } from "./resolved-types";

export type LinkCategoryId =
  | "gov"
  | "digital"
  | "social"
  | "employment"
  | "economy"
  | "utilities";

export interface OfficialLink {
  id: string;
  url: string;
  domain: string;
  cat: LinkCategoryId;
  name: { ar: string; fr: string; en: string } & OptL5;
  desc: L;
}

export const linkCategories: { id: LinkCategoryId; name: { ar: string; fr: string; en: string } & OptL5; desc: L }[] = [
  {
    id: "gov",
    name: { ar: "بوابات حكومية", fr: "Portails gouvernementaux", en: "Government portals" },
    desc: {
      ar: "المواقع الرسمية للوزارات والبوابات الحكومية المغربية.",
      en: "Official websites of Moroccan ministries and government portals.",
      fr: "Sites officiels des ministères et portails gouvernementaux marocains.",
      es: "Sitios oficiales de los ministerios y portales del gobierno marroquí.",
      it: "Siti ufficiali dei ministeri e portali governativi marocchini.",
      de: "Offizielle Websites marokkanischer Ministerien und Regierungsportale.",
      ru: "Официальные сайты министерств и правительственные порталы Марокко.",
    },
  },
  {
    id: "digital",
    name: { ar: "خدمات رقمية عمومية", fr: "Services publics numériques", en: "Digital public services" },
    desc: {
      ar: "المنصات الرقمية الرسمية لإنجاز الإجراءات الإدارية عن بعد.",
      en: "Official digital platforms for remote administrative procedures.",
      fr: "Plateformes numériques officielles pour les démarches à distance.",
      es: "Plataformas digitales oficiales para trámites a distancia.",
      it: "Piattaforme digitali ufficiali per procedure a distanza.",
      de: "Offizielle digitale Plattformen für Verwaltungsverfahren aus der Ferne.",
      ru: "Официальные цифровые платформы для удалённых административных процедур.",
    },
  },
  {
    id: "social",
    name: { ar: "الحماية الاجتماعية والصحة", fr: "Protection sociale et santé", en: "Social protection & health" },
    desc: {
      ar: "منصات الضمان الاجتماعي والتغطية الصحية والدعم الاجتماعي.",
      en: "Social security, health coverage and social support platforms.",
      fr: "Plateformes de sécurité sociale, couverture santé et aide sociale.",
      es: "Plataformas de seguridad social, cobertura sanitaria y apoyo social.",
      it: "Piattaforme di previdenza, copertura sanitaria e sostegno sociale.",
      de: "Plattformen für Sozialversicherung, Krankenversicherung und Sozialhilfe.",
      ru: "Платформы соцстрахования, медстрахования и социальной поддержки.",
    },
  },
  {
    id: "employment",
    name: { ar: "تشغيل وتكوين", fr: "Emploi et formation", en: "Employment & training" },
    desc: {
      ar: "مواقع التشغيل العمومي والتكوين المهني والمباريات.",
      en: "Public employment, vocational training and competitions websites.",
      fr: "Sites de l'emploi public, la formation professionnelle et les concours.",
      es: "Sitios de empleo público, formación profesional y oposiciones.",
      it: "Siti di lavoro pubblico, formazione professionale e concorsi.",
      de: "Websites für Beschäftigung, Berufsbildung und Wettbewerbe.",
      ru: "Сайты госзанятости, профподготовки и конкурсов.",
    },
  },
  {
    id: "economy",
    name: { ar: "اقتصاد ومالية", fr: "Économie et finances", en: "Economy & finance" },
    desc: {
      ar: "المؤسسات الاقتصادية والمالية والإحصائية الرسمية.",
      en: "Official economic, financial and statistical institutions.",
      fr: "Institutions économiques, financières et statistiques officielles.",
      es: "Instituciones económicas, financieras y estadísticas oficiales.",
      it: "Istituzioni economiche, finanziarie e statistiche ufficiali.",
      de: "Offizielle Wirtschafts-, Finanz- und Statistikinstitutionen.",
      ru: "Официальные экономические, финансовые и статистические учреждения.",
    },
  },
  {
    id: "utilities",
    name: { ar: "مرافق عمومية", fr: "Services publics essentiels", en: "Public utilities" },
    desc: {
      ar: "المكاتب والمؤسسات العمومية للمرافق الأساسية.",
      en: "Public offices and institutions for essential services.",
      fr: "Offices et établissements publics des services essentiels.",
      es: "Oficinas e instituciones públicas de servicios esenciales.",
      it: "Uffici e istituzioni pubbliche per i servizi essenziali.",
      de: "Öffentliche Ämter und Einrichtungen für Grundversorgung.",
      ru: "Государственные учреждения и службы основных сервисов.",
    },
  },
];

const D = (ar: string, en: string, fr: string, es: string, it: string, de: string, ru: string): L => ({
  ar, en, fr, es, it, de, ru,
});

export const officialLinks: OfficialLink[] = [
  // ─── Government portals ───────────────────────────────────────────
  {
    id: "gov-ma",
    url: "https://www.maroc.ma/",
    domain: "maroc.ma",
    cat: "gov",
    name: { ar: "البوابة الوطنية للمملكة المغربية", fr: "Portail national du Royaume du Maroc", en: "National portal of the Kingdom of Morocco" },
    desc: D(
      "المدخل الرسمي لموقع الحكومة المغربية ووزاراتها ومؤسساتها.",
      "Official gateway to the Moroccan government, its ministries and institutions.",
      "Portail officiel du gouvernement marocain, ses ministères et institutions.",
      "Portal oficial del gobierno de Marruecos, sus ministerios e instituciones.",
      "Portale ufficiale del governo marocchino, ministeri e istituzioni.",
      "Offizielles Portal der marokkanischen Regierung, Ministerien und Institutionen.",
      "Официальный портал правительства Марокко, его министерств и учреждений."
    ),
  },
  {
    id: "idarati",
    url: "https://idarati.ma/",
    domain: "idarati.ma",
    cat: "gov",
    name: { ar: "بوابة إدارة الوطنية", fr: "Portail national Idarati", en: "National Idarati portal" },
    desc: D(
      "البوابة الوطنية للمساطر الإدارية: معلومات رسمية موحدة عن كل إجراء والوثائق المطلوبة له.",
      "National portal of administrative procedures: unified official information for every formality.",
      "Portail national des procédures administratives : informations officielles unifiées pour chaque démarche.",
      "Portal nacional de procedimientos administrativos: información oficial unificada para cada trámite.",
      "Portale nazionale delle procedure amministrative: informazioni ufficiali unificate per ogni pratica.",
      "Nationale Portal der Verwaltungsverfahren: einheitliche offizielle Informationen je Vorgang.",
      "Национальный портал административных процедур: единая официальная информация по каждому делу."
    ),
  },
  {
    id: "interieur",
    url: "https://www.interieur.gov.ma/",
    domain: "interieur.gov.ma",
    cat: "gov",
    name: { ar: "وزارة الداخلية", fr: "Ministère de l'Intérieur", en: "Ministry of Interior" },
    desc: D(
      "الوزارة المكلفة بالجماعات الترابية والبطاقة الوطنية والشؤون الإدارية.",
      "Ministry in charge of local authorities, national ID cards and administrative affairs.",
      "Ministère chargé des collectivités territoriales, de la CIN et des affaires administratives.",
      "Ministerio encargado de las colectividades territoriales, el DNI y asuntos administrativos.",
      "Ministero responsabile delle collettività locali, della CIN e degli affari amministrativi.",
      "Ministerium für Gebietskörperschaften, Personalausweis und Verwaltungsangelegenheiten.",
      "Министерство внутренних дел: местные органы, удостоверение личности, админ. вопросы."
    ),
  },
  {
    id: "justice",
    url: "https://www.justice.gov.ma/",
    domain: "justice.gov.ma",
    cat: "gov",
    name: { ar: "وزارة العدل", fr: "Ministère de la Justice", en: "Ministry of Justice" },
    desc: D(
      "الموقع الرسمي لوزارة العدل المغربية والمحاكم والقضاء.",
      "Official website of the Moroccan Ministry of Justice and the courts.",
      "Site officiel du ministère marocain de la Justice et des tribunaux.",
      "Sitio oficial del Ministerio de Justicia de Marruecos y los tribunales.",
      "Sito ufficiale del Ministero della Giustizia marocchino e dei tribunali.",
      "Offizielle Website des marokkanischen Justizministeriums und der Gerichte.",
      "Официальный сайт Министерства юстиции Марокко и судов."
    ),
  },
  {
    id: "adala",
    url: "https://www.adala.justice.gov.ma/",
    domain: "adala.justice.gov.ma",
    cat: "gov",
    name: { ar: "بوابة القوانين — عدالة", fr: "Portail Adala des textes juridiques", en: "Adala legal texts portal" },
    desc: D(
      "المكتبة الرسمية للقوانين والنصوص التنظيمية المغربية.",
      "Official library of Moroccan laws and regulatory texts.",
      "Bibliothèque officielle des lois et textes réglementaires marocains.",
      "Biblioteca oficial de leyes y textos reglamentarios marroquíes.",
      "Biblioteca ufficiale delle leggi e dei testi normativi marocchini.",
      "Offizielle Bibliothek marokkanischer Gesetze und Regelwerke.",
      "Официальная библиотека марокканских законов и нормативных актов."
    ),
  },
  {
    id: "finances",
    url: "https://www.finances.gov.ma/",
    domain: "finances.gov.ma",
    cat: "gov",
    name: { ar: "وزارة الاقتصاد والمالية", fr: "Ministère de l'Économie et des Finances", en: "Ministry of Economy and Finance" },
    desc: D(
      "الموقع الرسمي لوزارة الاقتصاد والمالية والميزانية.",
      "Official website of the Ministry of Economy, Finance and Budget.",
      "Site officiel du ministère de l'Économie, des Finances et du Budget.",
      "Sitio oficial del Ministerio de Economía, Finanzas y Presupuesto.",
      "Sito ufficiale del Ministero dell'Economia, delle Finanze e del Bilancio.",
      "Offizielle Website des Ministeriums für Wirtschaft und Finanzen.",
      "Официальный сайт Министерства экономики и финансов."
    ),
  },
  {
    id: "sante",
    url: "https://www.sante.gov.ma/",
    domain: "sante.gov.ma",
    cat: "gov",
    name: { ar: "وزارة الصحة والحماية الاجتماعية", fr: "Ministère de la Santé et de la Protection sociale", en: "Ministry of Health and Social Protection" },
    desc: D(
      "الموقع الرسمي لوزارة الصحة والمستشفيات العمومية.",
      "Official website of the Ministry of Health and public hospitals.",
      "Site officiel du ministère de la Santé et des hôpitaux publics.",
      "Sitio oficial del Ministerio de Salud y hospitales públicos.",
      "Sito ufficiale del Ministero della Salute e degli ospedali pubblici.",
      "Offizielle Website des Gesundheitsministeriums und der öffentlichen Krankenhäuser.",
      "Официальный сайт Министерства здравоохранения и госбольниц."
    ),
  },
  {
    id: "men",
    url: "https://www.men.gov.ma/",
    domain: "men.gov.ma",
    cat: "gov",
    name: { ar: "وزارة التربية الوطنية", fr: "Ministère de l'Éducation nationale", en: "Ministry of National Education" },
    desc: D(
      "الموقع الرسمي للتربية الوطنية والتعليم المدرسي ومنصة مسار.",
      "Official website for national education, schooling and the Massar platform.",
      "Site officiel de l'éducation nationale, de la scolarité et de la plateforme Massar.",
      "Sitio oficial de educación nacional, escolarización y plataforma Massar.",
      "Sito ufficiale dell'istruzione nazionale e della piattaforma Massar.",
      "Offizielle Website des Bildungsministeriums und der Massar-Plattform.",
      "Официальный сайт министерства образования и платформы Massar."
    ),
  },
  {
    id: "enssup",
    url: "https://www.enssup.gov.ma/",
    domain: "enssup.gov.ma",
    cat: "gov",
    name: { ar: "وزارة التعليم العالي والبحث العلمي", fr: "Ministère de l'Enseignement supérieur", en: "Ministry of Higher Education" },
    desc: D(
      "الموقع الرسمي للتعليم العالي والبحث العلمي والابتكار.",
      "Official website for higher education, scientific research and innovation.",
      "Site officiel de l'enseignement supérieur, de la recherche et de l'innovation.",
      "Sitio oficial de educación superior, investigación e innovación.",
      "Sito ufficiale dell'istruzione superiore, ricerca e innovazione.",
      "Offizielle Website für Hochschulbildung, Forschung und Innovation.",
      "Официальный сайт высшего образования, науки и инноваций."
    ),
  },
  {
    id: "agriculture",
    url: "https://www.agriculture.gov.ma/",
    domain: "agriculture.gov.ma",
    cat: "gov",
    name: { ar: "وزارة الفلاحة والصيد البحري", fr: "Ministère de l'Agriculture et de la Pêche maritime", en: "Ministry of Agriculture and Fisheries" },
    desc: D(
      "الموقع الرسمي للفلاحة والصيد البحري والتنمية القروية.",
      "Official website for agriculture, fisheries and rural development.",
      "Site officiel de l'agriculture, de la pêche et du développement rural.",
      "Sitio oficial de agricultura, pesca y desarrollo rural.",
      "Sito ufficiale per agricoltura, pesca e sviluppo rurale.",
      "Offizielle Website für Landwirtschaft, Fischerei und ländliche Entwicklung.",
      "Официальный сайт сельского хозяйства, рыболовства и развития сёл."
    ),
  },
  {
    id: "mcinet",
    url: "http://www.mcinet.gov.ma/",
    domain: "mcinet.gov.ma",
    cat: "gov",
    name: { ar: "وزارة الصناعة والتجارة", fr: "Ministère de l'Industrie et du Commerce", en: "Ministry of Industry and Trade" },
    desc: D(
      "الموقع الرسمي للصناعة والتجارة ونظام المقاول الذاتي.",
      "Official website for industry, trade and the auto-entrepreneur regime.",
      "Site officiel de l'industrie, du commerce et du statut de l'auto-entrepreneur.",
      "Sitio oficial de industria, comercio y régimen del emprendedor autónomo.",
      "Sito ufficiale per industria, commercio e regime dell'auto-imprenditore.",
      "Offizielle Website für Industrie, Handel und Selbstständigenstatus.",
      "Официальный сайт промышленности, торговли и статуса самозанятого."
    ),
  },

  // ─── Digital public services ──────────────────────────────────────
  {
    id: "passeport",
    url: "https://www.passeport.ma/",
    domain: "passeport.ma",
    cat: "digital",
    name: { ar: "بوابة جواز السفر البيومتري", fr: "Portail du passeport biométrique", en: "Biometric passport portal" },
    desc: D(
      "الحجز الإلكتروني لموعد إيداع طلب جواز السفر البيومتري.",
      "Online appointment booking for biometric passport applications.",
      "Prise de rendez-vous en ligne pour la demande de passeport biométrique.",
      "Cita en línea para la solicitud del pasaporte biométrico.",
      "Prenotazione online per la richiesta del passaporto biometrico.",
      "Online-Terminbuchung für biometrische Passanträge.",
      "Онлайн-запись на подачу заявления на биометрический паспорт."
    ),
  },
  {
    id: "consulat",
    url: "https://www.consulat.ma/",
    domain: "consulat.ma",
    cat: "digital",
    name: { ar: "بوابة الخدمات القنصلية", fr: "Portail des services consulaires", en: "Consular services portal" },
    desc: D(
      "خدمات المغاربة المقيمين بالخارج عبر الشبكة القنصلية المغربية.",
      "Services for Moroccans abroad through the consular network.",
      "Services des Marocains du monde via le réseau consulaire marocain.",
      "Servicios para los marroquíes en el extranjero vía la red consular.",
      "Servizi per i marocchini all'estero tramite la rete consolare.",
      "Dienste für Marokkaner im Ausland über das Konsularnetz.",
      "Услуги для марокканцев за рубежом через консульскую сеть."
    ),
  },
  {
    id: "tax",
    url: "https://www.tax.gov.ma/",
    domain: "tax.gov.ma",
    cat: "digital",
    name: { ar: "المديرية العامة للضرائب", fr: "Direction Générale des Impôts", en: "Directorate General of Taxes" },
    desc: D(
      "التصريحات والشهادات والواجبات الضريبية عبر منصة سيمبل.",
      "Tax declarations, certificates and payments via the SIMPL platform.",
      "Déclarations, attestations et paiements d'impôts via la plateforme SIMPL.",
      "Declaraciones, certificados y pagos de impuestos vía SIMPL.",
      "Dichiarazioni, certificati e pagamenti fiscali via SIMPL.",
      "Steuererklärungen, Bescheinigungen und Zahlungen über SIMPL.",
      "Налоговые декларации, справки и платежи через платформу SIMPL."
    ),
  },
  {
    id: "simpl",
    url: "https://simpl.tax.gov.ma/",
    domain: "simpl.tax.gov.ma",
    cat: "digital",
    name: { ar: "منصة سيمبل", fr: "Plateforme SIMPL", en: "SIMPL platform" },
    desc: D(
      "الخدمات العمومية المبسطة للمقاولات والمهن الحرة.",
      "Simplified public services for companies and freelancers.",
      "Services publics simplifiés pour les entreprises et indépendants.",
      "Servicios públicos simplificados para empresas y autónomos.",
      "Servizi pubblici semplificati per imprese e freelance.",
      "Vereinfachte öffentliche Dienste für Unternehmen und Freiberufler.",
      "Упрощённые госуслуги для компаний и самозанятых."
    ),
  },
  {
    id: "emploi-public",
    url: "https://www.emploi-public.ma/",
    domain: "emploi-public.ma",
    cat: "digital",
    name: { ar: "بوابة الوظيفة العمومية", fr: "Portail de l'emploi public", en: "Public employment portal" },
    desc: D(
      "مباريات التوظيف في القطاع العام والوظيفة العمومية المغربية.",
      "Recruitment competitions in the Moroccan public sector.",
      "Concours de recrutement dans le secteur public marocain.",
      "Concursos de contratación en el sector público marroquí.",
      "Concorsi di reclutamento nel settore pubblico marocchino.",
      "Einstellungswettbewerbe im marokkanischen öffentlichen Sektor.",
      "Конкурсы на замещение должностей в госсекторе Марокко."
    ),
  },
  {
    id: "ompic",
    url: "https://www.ompic.ma/",
    domain: "ompic.ma",
    cat: "digital",
    name: { ar: "المكتب المغربي للمقاولة — OMPIC", fr: "OMPIC — Office Marocain de la Propriété Industrielle et Commerciale", en: "Moroccan Office of Industrial and Commercial Property" },
    desc: D(
      "إنشاء المقاولات، السجل التجاري، المقاول الذاتي والملكية الصناعية.",
      "Company creation, commercial register, auto-entrepreneur and IP.",
      "Création d'entreprises, registre du commerce, auto-entrepreneur et PI.",
      "Creación de empresas, registro mercantil, emprendedor autónomo y PI.",
      "Creazione imprese, registro commerciale, auto-imprenditore e PI.",
      "Unternehmensgründung, Handelsregister, Selbstständige und gewerbliche Schutzrechte.",
      "Создание компаний, торговый реестр, самозанятость и пром. собственность."
    ),
  },
  {
    id: "ancfcc",
    url: "https://www.ancfcc.ma/",
    domain: "ancfcc.ma",
    cat: "digital",
    name: { ar: "المحافظة العقارية والمسح العقاري — ANCFCC", fr: "ANCFCC — Conservation foncière", en: "National Land Conservation Agency" },
    desc: D(
      "الرسم العقاري، المسح والخرائطية ونسخ عقود الملكية.",
      "Land registration, surveying, mapping and property deed copies.",
      "Immatriculation foncière, cadastre, cartographie et copies d'actes.",
      "Inscripción de propiedades, catastro, cartografía y copias de escrituras.",
      "Registrazione fondiaria, catasto, cartografia e copie di atti.",
      "Grundbuch, Kataster, Kartografie und Urkundenabschriften.",
      "Регистрация недвижимости, кадастр, картография и копии актов."
    ),
  },
  {
    id: "minhaty",
    url: "https://www.minhaty.ma/",
    domain: "minhaty.ma",
    cat: "digital",
    name: { ar: "بوابة منحتي", fr: "Portail Minhaty", en: "Minhaty scholarship portal" },
    desc: D(
      "إيداع ومتابعة طلبات منح التعليم العالي والتعليم الأصيل.",
      "Filing and tracking higher education scholarship requests.",
      "Dépôt et suivi des demandes de bourses de l'enseignement supérieur.",
      "Presentación y seguimiento de solicitudes de becas universitarias.",
      "Presentazione e tracciamento delle domande di borsa di studio.",
      "Beantragung und Verfolgung von Hochschulstipendien.",
      "Подача и отслеживание заявлений на стипендии."
    ),
  },

  {
    id: "cnie",
    url: "https://www.cnie.ma/",
    domain: "cnie.ma",
    cat: "digital",
    name: { ar: "بوابة البطاقة الوطنية للتعريف الإلكترونية", fr: "Portail de la Carte Nationale d'Identité Électronique", en: "Electronic National ID Card portal" },
    desc: D(
      "الحجز الإلكتروني لمواعيد طلب أو تجديد البطاقة الوطنية للتعريف (الشرطة الوطنية).",
      "Online appointment booking for ID card requests or renewals (DGSN).",
      "Prise de rendez-vous en ligne pour la demande ou le renouvellement de la CIN (DGSN).",
      "Cita en línea para solicitar o renovar el DNI marroquí (DGSN).",
      "Prenotazione online per la richiesta o il rinnovo della CIN (DGSN).",
      "Online-Terminbuchung für Personalausweis-Anträge oder -Erneuerung (DGSN).",
      "Онлайн-запись на получение или обмен удостоверения личности (DGSN)."
    ),
  },
  {
    id: "chikaya",
    url: "https://chikaya.ma/",
    domain: "chikaya.ma",
    cat: "digital",
    name: { ar: "البوابة الوطنية للشكايات", fr: "Portail national des réclamations", en: "National complaints portal" },
    desc: D(
      "إيداع الشكايات الموجهة للإدارات العمومية وتتبع معالجتها إلكترونياً.",
      "Filing complaints to public administrations and tracking their processing online.",
      "Dépôt de réclamations aux administrations publiques et suivi en ligne.",
      "Presentación de reclamaciones a la administración y seguimiento en línea.",
      "Presentazione di reclami alle amministrazioni e tracciamento online.",
      "Einreichung von Beschwerden an Behörden und Online-Verfolgung.",
      "Подача жалоб в госведомства и отслеживание их рассмотрения онлайн."
    ),
  },
  {
    id: "casier-judiciaire",
    url: "https://casierjudiciaire.justice.gov.ma/",
    domain: "casierjudiciaire.justice.gov.ma",
    cat: "digital",
    name: { ar: "السجل العدلي الإلكتروني", fr: "Casier judiciaire en ligne", en: "Online criminal record" },
    desc: D(
      "طلب السجل العدلي (النشرة رقم 3) إلكترونياً واستلامه دون تنقل.",
      "Requesting the criminal record bulletin (B3) online and receiving it remotely.",
      "Demande du bulletin n°3 du casier judiciaire en ligne et réception à distance.",
      "Solicitud del certificado de antecedentes penales (B3) en línea.",
      "Richiesta online del casellario giudiziale (B3) e ricezione a distanza.",
      "Online-Antragung des Führungszeugnisses (B3) und Empfang aus der Ferne.",
      "Онлайн-запрос справки о судимости (B3) и удалённое получение."
    ),
  },

  // ─── Social protection & health ──────────────────────────────────
  {
    id: "cnss",
    url: "https://www.cnss.ma/",
    domain: "cnss.ma",
    cat: "social",
    name: { ar: "الصندوق الوطني للضمان الاجتماعي — CNSS", fr: "CNSS — Caisse Nationale de Sécurité Sociale", en: "National Social Security Fund (CNSS)" },
    desc: D(
      "الانخراط والتصريح بالأجور والتعويضات الاجتماعية للأجراء وأصحاب المعاشات.",
      "Registration, salary declarations and social benefits.",
      "Affiliation, déclarations de salaires et prestations sociales.",
      "Afiliación, declaraciones de salarios y prestaciones sociales.",
      "Iscrizione, dichiarazioni salariali e prestazioni sociali.",
      "Anmeldung, Lohnmeldungen und Sozialleistungen.",
      "Регистрация, зарплатные декларации и социальные выплаты."
    ),
  },
  {
    id: "macnss",
    url: "https://www.macnss.ma/",
    domain: "macnss.ma",
    cat: "social",
    name: { ar: "بوابة MaCNSS الرقمية", fr: "Portail numérique MaCNSS", en: "MaCNSS digital portal" },
    desc: D(
      "خدمات CNSS الرقمية للأجراء والمستفيدين: الشهادات والطلبات والتتبع.",
      "Digital CNSS services: certificates, requests and tracking.",
      "Services numériques CNSS : attestations, demandes et suivi.",
      "Servicios digitales CNSS: certificados, solicitudes y seguimiento.",
      "Servizi digitali CNSS: certificati, richieste e tracciamento.",
      "Digitale CNSS-Dienste: Bescheinigungen, Anträge und Verfolgung.",
      "Цифровые услуги CNSS: справки, заявления и отслеживание."
    ),
  },
  {
    id: "cnops",
    url: "https://www.cnops.ma/",
    domain: "cnops.ma",
    cat: "social",
    name: { ar: "صندوق دعم التغطية الصحية — CNOPS", fr: "CNOPS — Caisse Nationale des Organismes de Prévoyance Sociale", en: "National Fund for Social Provident Institutions (CNOPS)" },
    desc: D(
      "التغطية الصحية لموظفي الدولة والقطاع العام وتعويضاتهم.",
      "Health coverage for civil servants and the public sector.",
      "Couverture santé des fonctionnaires et du secteur public.",
      "Cobertura sanitaria de funcionarios y del sector público.",
      "Copertura sanitaria dei dipendenti pubblici.",
      "Krankenversicherung für Beamte und den öffentlichen Sektor.",
      "Медстрахование госслужащих и бюджетного сектора."
    ),
  },
  {
    id: "amotadamon",
    url: "https://www.amotadamon.ma/",
    domain: "amotadamon.ma",
    cat: "social",
    name: { ar: "بوابة أمو تضامن", fr: "Portail AMO Tadamon", en: "AMO Tadamon portal" },
    desc: D(
      "التسجيل في التغطية الصحية الإجبارية تضامن للفئات المعوزة.",
      "Registration for the Tadamon compulsory health coverage.",
      "Inscription au régime AMO Tadamon pour les personnes démunies.",
      "Inscripción en el régimen AMO Tadamon para personas en situación vulnerable.",
      "Iscrizione al regime AMO Tadamon per persone svantaggiate.",
      "Anmeldung zur AMO Tadamon Krankenversicherung für Bedürftige.",
      "Регистрация в системе медстрахования AMO Tadamon."
    ),
  },
  {
    id: "cnss-rdv",
    url: "https://cnss.rdv.gov.ma/",
    domain: "cnss.rdv.gov.ma",
    cat: "social",
    name: { ar: "منصة مواعيد CNSS", fr: "Plateforme de rendez-vous CNSS", en: "CNSS appointment platform" },
    desc: D(
      "الحجز الإلكتروني لمواعيد وكالات الضمان الاجتماعي قبل زيارتها.",
      "Online appointment booking at CNSS agencies before your visit.",
      "Prise de rendez-vous en ligne dans les agences CNSS avant votre visite.",
      "Reserva de cita en línea en las agencias de la CNSS.",
      "Prenotazione online negli uffici CNSS prima della visita.",
      "Online-Terminbuchung in CNSS-Agenturen vor dem Besuch.",
      "Онлайн-запись в агентства CNSS перед визитом."
    ),
  },

  // ─── Employment & training ───────────────────────────────────────
  {
    id: "anapec",
    url: "https://www.anapec.ma/",
    domain: "anapec.ma",
    cat: "employment",
    name: { ar: "الوكالة الوطنية لإنعاش التشغيل — ANAPEC", fr: "ANAPEC — Agence Nationale de Promotion de l'Emploi", en: "National Agency for Employment Promotion (ANAPEC)" },
    desc: D(
      "فرص الشغل والتكوين وبرامج إدماج الشباب في سوق العمل.",
      "Job opportunities, training and youth employment programs.",
      "Offres d'emploi, formation et programmes d'insertion des jeunes.",
      "Ofertas de empleo, formación y programas de inserción laboral.",
      "Offerte di lavoro, formazione e programmi di inserimento.",
      "Stellenangebote, Ausbildung und Programme für Jugendliche.",
      "Вакансии, обучение и программы трудоустройства молодёжи."
    ),
  },
  {
    id: "ofppt",
    url: "https://www.ofppt.ma/",
    domain: "ofppt.ma",
    cat: "employment",
    name: { ar: "مكتب التكوين المهني — OFPPT", fr: "OFPPT — Office de la Formation Professionnelle", en: "Vocational Training Office (OFPPT)" },
    desc: D(
      "التكوين المهني المؤهل بالتناوب والتخصصات التقنية بالمغرب.",
      "Qualified vocational training and technical specializations.",
      "Formation professionnelle qualifiante et spécialités techniques.",
      "Formación profesional cualificante y especialidades técnicas.",
      "Formazione professionale qualificata e specializzazioni tecniche.",
      "Qualifizierende Berufsausbildung und technische Spezialisierungen.",
      "Квалифицированная профподготовка и технические специальности."
    ),
  },

  // ─── Economy & finance ───────────────────────────────────────────
  {
    id: "bkam",
    url: "https://www.bkam.ma/",
    domain: "bkam.ma",
    cat: "economy",
    name: { ar: "بنك المغرب", fr: "Bank Al-Maghrib", en: "Bank Al-Maghrib (Central Bank)" },
    desc: D(
      "البنك المركزي المغربي: العملة والأسعار والنقد وإحصائياته.",
      "Moroccan central bank: currency, rates, money and statistics.",
      "Banque centrale du Maroc : monnaie, taux, monnaie et statistiques.",
      "Banco central de Marruecos: moneda, tasas y estadísticas.",
      "Banca centrale del Marocco: valuta, tassi e statistiche.",
      "Marokkos Zentralbank: Währung, Zinsen und Statistiken.",
      "Центральный банк Марокко: валюта, ставки и статистика."
    ),
  },
  {
    id: "hcp",
    url: "https://www.hcp.ma/",
    domain: "hcp.ma",
    cat: "economy",
    name: { ar: "المندوبية السامية للتخطيط — HCP", fr: "HCP — Haut-Commissariat au Plan", en: "High Commission for Planning (HCP)" },
    desc: D(
      "الإحصائيات الرسمية والدراسات الاقتصادية والديموغرافية للمغرب.",
      "Official statistics and economic/demographic studies of Morocco.",
      "Statistiques officielles et études économiques et démographiques.",
      "Estadísticas oficiales y estudios económicos y demográficos.",
      "Statistiche ufficiali e studi economici e demografici.",
      "Amtliche Statistiken und Wirtschafts-/Demografiestudien.",
      "Официальная статистика и экономико-демографические исследования."
    ),
  },

  {
    id: "tgr",
    url: "https://www.tgr.gov.ma/",
    domain: "tgr.gov.ma",
    cat: "economy",
    name: { ar: "الخزينة العامة للمملكة — TGR", fr: "TGR — Trésorerie Générale du Royaume", en: "General Treasury of the Kingdom (TGR)" },
    desc: D(
      "الأداء الإلكتروني للرسوم والضرائب المحلية والوثائق الإدارية المسددة للخزينة.",
      "Online payment of local taxes and fees settled through the Treasury.",
      "Paiement en ligne des taxes locales et redevances via la Trésorerie.",
      "Pago en línea de tasas locales y gravámenes vía Tesorería.",
      "Pagamento online di tasse locali e tributi via Tesoreria.",
      "Online-Zahlung lokaler Steuern und Abgaben über die Trésorerie.",
      "Онлайн-оплата местных налогов и сборов через Казначейство."
    ),
  },
  {
    id: "douane",
    url: "https://www.douane.gov.ma/",
    domain: "douane.gov.ma",
    cat: "economy",
    name: { ar: "إدارة الجمارك والضرائب غير المباشرة", fr: "Administration des Douanes et Impôts Indirects", en: "Customs and Indirect Taxes Administration" },
    desc: D(
      "الاستيراد والتصدير ورسوم الجمارك وخدمات المسافرين الإلكترونية.",
      "Import/export, customs duties and traveler e-services.",
      "Import/export, droits de douane et services en ligne pour les voyageurs.",
      "Importación/exportación, aranceles y servicios en línea para viajeros.",
      "Import/export, dazi e servizi online per i viaggiatori.",
      "Import/Export, Zölle und Online-Dienste für Reisende.",
      "Импорт/экспорт, таможенные пошлины и онлайн-услуги для путешественников."
    ),
  },
  {
    id: "opendata",
    url: "https://www.data.gov.ma/",
    domain: "data.gov.ma",
    cat: "economy",
    name: { ar: "بوابة المعطيات المفتوحة", fr: "Portail Open Data", en: "Open Data portal" },
    desc: D(
      "المعطيات العمومية المفتوحة للوزارات والمؤسسات المغربية.",
      "Open public data of Moroccan ministries and institutions.",
      "Données publiques ouvertes des ministères et institutions marocains.",
      "Datos públicos abiertos de ministerios e instituciones marroquíes.",
      "Dati pubblici aperti di ministeri e istituzioni marocchine.",
      "Offene Verwaltungsdaten marokkanischer Ministerien und Institutionen.",
      "Открытые государственные данные марокканских ведомств."
    ),
  },

  // ─── Public utilities ────────────────────────────────────────────
  {
    id: "one",
    url: "https://www.one.org.ma/",
    domain: "one.org.ma",
    cat: "utilities",
    name: { ar: "المكتب الوطني للكهرباء والماء — ONEE", fr: "ONEE — Office National de l'Électricité et de l'Eau potable", en: "National Office of Electricity and Water (ONEE)" },
    desc: D(
      "الاشتراك في الكهرباء والماء الصالح للشرب وفاتورات الخدمات.",
      "Electricity and drinking water subscriptions and bills.",
      "Abonnements électricité et eau potable, factures de services.",
      "Suscripciones de electricidad y agua potable y facturas.",
      "Abbonamenti elettricità e acqua potabile, bollette.",
      "Strom- und Trinkwasseranschlüsse sowie Rechnungen.",
      "Подключение электричества и воды, оплата услуг."
    ),
  },
  {
    id: "oncf",
    url: "https://www.oncf.ma/",
    domain: "oncf.ma",
    cat: "utilities",
    name: { ar: "المكتب الوطني للسكك الحديدية — ONCF", fr: "ONCF — Office National des Chemins de Fer", en: "National Railway Office (ONCF)" },
    desc: D(
      "قطارات المغرب: الجداول، التذاكر وحجز الرحلات عبر الخطوط الحديدية.",
      "Morocco trains: timetables, tickets and trip booking.",
      "Trains du Maroc : horaires, billets et réservations.",
      "Trenes de Marruecos: horarios, billetes y reservas.",
      "Treni del Marocco: orari, biglietti e prenotazioni.",
      "Marokkos Züge: Fahrpläne, Tickets und Buchungen.",
      "Поезда Марокко: расписания, билеты и бронирование."
    ),
  },
  {
    id: "poste",
    url: "https://www.poste.ma/",
    domain: "poste.ma",
    cat: "utilities",
    name: { ar: "بريد المغرب / بريد بنك", fr: "Barid Al-Maghrib / Barid Bank", en: "Morocco Post / Barid Bank" },
    desc: D(
      "البريد الوطني وخدمات بريد بنك والبريد المالي عبر الشبكة.",
      "National postal services, Barid Bank and financial services.",
      "Services postaux nationaux, Barid Bank et services financiers.",
      "Servicios postales nacionales, Barid Bank y servicios financieros.",
      "Servizi postali nazionali, Barid Bank e servizi finanziari.",
      "Nationale Postdienste, Barid Bank und Finanzdienstleistungen.",
      "Национальная почта, Barid Bank и финансовые услуги."
    ),
  },
  {
    id: "cndh",
    url: "https://www.cndh.ma/",
    domain: "cndh.ma",
    cat: "utilities",
    name: { ar: "المجلس الوطني لحقوق الإنسان — CNDH", fr: "CNDH — Conseil National des Droits de l'Homme", en: "National Human Rights Council (CNDH)" },
    desc: D(
      "المؤسسة الوطنية لحقوق الإنسان وتلقي الشكايات المتعلقة بها.",
      "National human rights institution and related complaints.",
      "Institution nationale des droits de l'homme et réclamations.",
      "Institución nacional de derechos humanos y reclamaciones.",
      "Istituzione nazionale per i diritti umani e reclami.",
      "Nationale Menschenrechtsinstitution und Beschwerden.",
      "Национальный институт по правам человека и жалобы."
    ),
  },
];

export const getLink = (id: string): ResolvedLink | null => {
  const l = officialLinks.find((x) => x.id === id);
  if (!l) return null;
  const o = linkI18n[id]?.name;
  // Runtime completeness of all 7 locales is enforced by scripts/validate-forms.ts.
  return o ? ({ ...l, name: { ...l.name, ...o } } as ResolvedLink) : (l as unknown as ResolvedLink);
};

export type { Loc5, LinkI18nOverlay };
export type { ResolvedLink } from "./resolved-types";

/** Link categories with names resolved in every UI locale. */
export const resolvedLinkCategories: { id: LinkCategoryId; name: L; desc: L }[] =
  linkCategories.map((c) => {
    const o = linkCatI18n[c.id]?.name;
    // Runtime completeness of all 7 locales is enforced by scripts/validate-forms.ts.
    return (o ? { ...c, name: { ...c.name, ...o } } : c) as unknown as {
      id: LinkCategoryId;
      name: L;
      desc: L;
    };
  });
