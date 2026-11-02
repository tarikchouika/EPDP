// i18n overlays for official links (name in es/it/de/ru — en already exists)
// and for link-category names (es/it/de/ru).
// Keys MUST match link ids / link-category ids in official-links.ts exactly.
import type { LinkI18nOverlay } from "./forms-shared";

export const linkI18n: Record<string, LinkI18nOverlay> = {
  "gov-ma": {
    name: { es: "Portal nacional del Reino de Marruecos", it: "Portale nazionale del Regno del Marocco", de: "Nationales Portal des Königreichs Marokko", ru: "Национальный портал Королевства Марокко" },
  },
  idarati: {
    name: { es: "Portal nacional Idarati", it: "Portale nazionale Idarati", de: "Nationales Portal Idarati", ru: "Национальный портал Idarati" },
  },
  interieur: {
    name: { es: "Ministerio del Interior", it: "Ministero dell'Interno", de: "Innenministerium", ru: "Министерство внутренних дел" },
  },
  justice: {
    name: { es: "Ministerio de Justicia", it: "Ministero della Giustizia", de: "Justizministerium", ru: "Министерство юстиции" },
  },
  adala: {
    name: { es: "Portal Adala de textos jurídicos", it: "Portale Adala dei testi giuridici", de: "Adala-Portal für Rechtstexte", ru: "Портал правовых текстов Adala" },
  },
  finances: {
    name: { es: "Ministerio de Economía y Finanzas", it: "Ministero dell'Economia e delle Finanze", de: "Ministerium für Wirtschaft und Finanzen", ru: "Министерство экономики и финансов" },
  },
  sante: {
    name: { es: "Ministerio de Salud y Protección Social", it: "Ministero della Salute e della Protezione sociale", de: "Ministerium für Gesundheit und sozialen Schutz", ru: "Министерство здравоохранения и социальной защиты" },
  },
  men: {
    name: { es: "Ministerio de Educación Nacional", it: "Ministero dell'Istruzione Nazionale", de: "Ministerium für nationale Bildung", ru: "Министерство национального образования" },
  },
  enssup: {
    name: { es: "Ministerio de Educación Superior", it: "Ministero dell'Istruzione Superiore", de: "Ministerium für Hochschulbildung", ru: "Министерство высшего образования" },
  },
  agriculture: {
    name: { es: "Ministerio de Agricultura y Pesca Marítima", it: "Ministero dell'Agricoltura e della Pesca marittima", de: "Ministerium für Landwirtschaft und Fischerei", ru: "Министерство сельского хозяйства и рыболовства" },
  },
  mcinet: {
    name: { es: "Ministerio de Industria y Comercio", it: "Ministero dell'Industria e del Commercio", de: "Ministerium für Industrie und Handel", ru: "Министерство промышленности и торговли" },
  },
  passeport: {
    name: { es: "Portal del pasaporte biométrico", it: "Portale del passaporto biometrico", de: "Portal für den biometrischen Pass", ru: "Портал биометрического паспорта" },
  },
  consulat: {
    name: { es: "Portal de servicios consulares", it: "Portale dei servizi consolari", de: "Portal für Konsulardienste", ru: "Портал консульских услуг" },
  },
  tax: {
    name: { es: "Dirección General de Impuestos", it: "Direzione Generale delle Imposte", de: "Generaldirektion für Steuern", ru: "Генеральная дирекция по налогам" },
  },
  simpl: {
    name: { es: "Plataforma SIMPL", it: "Piattaforma SIMPL", de: "Plattform SIMPL", ru: "Платформа SIMPL" },
  },
  "emploi-public": {
    name: { es: "Portal de empleo público", it: "Portale dell'impiego pubblico", de: "Portal für den öffentlichen Dienst", ru: "Портал государственной службы" },
  },
  ompic: {
    name: { es: "OMPIC — Oficina Marroquí de la Propiedad Industrial y Comercial", it: "OMPIC — Ufficio Marocchino della Proprietà Industriale e Commerciale", de: "OMPIC — Marokkanisches Amt für gewerbliches und kommerzielles Eigentum", ru: "OMPIC — Марокканское бюро промышленной и коммерческой собственности" },
  },
  ancfcc: {
    name: { es: "ANCFCC — Agencia Nacional de Conservación de la Propiedad Inmobiliaria", it: "ANCFCC — Agenzia Nazionale di Conservazione Fondiaria", de: "ANCFCC — Nationale Behörde für Grundbuch und Kataster", ru: "ANCFCC — Национальное агентство земельной регистрации и кадастра" },
  },
  minhaty: {
    name: { es: "Portal de becas Minhaty", it: "Portale Minhaty per le borse di studio", de: "Stipendienportal Minhaty", ru: "Портал стипендий Minhaty" },
  },
  cnie: {
    name: { es: "Portal del documento nacional de identidad electrónico", it: "Portale della carta nazionale d'identità elettronica", de: "Portal für den elektronischen Personalausweis", ru: "Портал национального электронного удостоверения личности" },
  },
  chikaya: {
    name: { es: "Portal nacional de reclamaciones", it: "Portale nazionale dei reclami", de: "Nationales Beschwerdeportal", ru: "Национальный портал жалоб" },
  },
  "casier-judiciaire": {
    name: { es: "Antecedentes penales en línea", it: "Casellario giudiziale online", de: "Online-Führungszeugnis", ru: "Справка о судимости онлайн" },
  },
  cnss: {
    name: { es: "CNSS — Caja Nacional de Seguridad Social", it: "CNSS — Cassa Nazionale di Previdenza Sociale", de: "CNSS — Nationale Sozialversicherungskasse", ru: "CNSS — Национальный фонд социального страхования" },
  },
  macnss: {
    name: { es: "Portal digital MaCNSS", it: "Portale digitale MaCNSS", de: "Digitales Portal MaCNSS", ru: "Цифровой портал MaCNSS" },
  },
  cnops: {
    name: { es: "CNOPS — Caja Nacional de los Organismos de Previsión Social", it: "CNOPS — Cassa Nazionale degli Organismi di Previdenza Sociale", de: "CNOPS — Nationale Kasse der sozialen Vorsorgeeinrichtungen", ru: "CNOPS — Национальный фонд организаций социального страхования" },
  },
  amotadamon: {
    name: { es: "Portal AMO Tadamon", it: "Portale AMO Tadamon", de: "Portal AMO Tadamon", ru: "Портал AMO Tadamon" },
  },
  "cnss-rdv": {
    name: { es: "Plataforma de citas CNSS", it: "Piattaforma per gli appuntamenti CNSS", de: "Terminbuchungsplattform CNSS", ru: "Платформа онлайн-записи CNSS" },
  },
  anapec: {
    name: { es: "ANAPEC — Agencia Nacional de Promoción del Empleo", it: "ANAPEC — Agenzia Nazionale per la Promozione dell'Impiego", de: "ANAPEC — Nationale Agentur zur Förderung der Beschäftigung", ru: "ANAPEC — Национальное агентство содействия занятости" },
  },
  ofppt: {
    name: { es: "OFPPT — Oficina de Formación Profesional", it: "OFPPT — Ufficio della Formazione Professionale", de: "OFPPT — Amt für Berufsbildung", ru: "OFPPT — Бюро профессиональной подготовки" },
  },
  bkam: {
    name: { es: "Bank Al-Maghrib", it: "Bank Al-Maghrib", de: "Bank Al-Maghrib", ru: "Bank Al-Maghrib" },
  },
  hcp: {
    name: { es: "HCP — Alto Comisariado de Planificación", it: "HCP — Alto Commissariato alla Programmazione", de: "HCP — Hochkommissariat für Planung", ru: "HCP — Верховный комиссариат по планированию" },
  },
  tgr: {
    name: { es: "TGR — Tesorería General del Reino", it: "TGR — Tesoreria Generale del Regno", de: "TGR — Generalschatzamt des Königreichs", ru: "TGR — Генеральное казначейство Королевства" },
  },
  douane: {
    name: { es: "Administración de Aduanas e Impuestos Indirectos", it: "Amministrazione delle Dogane e delle Imposte Indirette", de: "Verwaltung für Zoll und indirekte Steuern", ru: "Управление таможенных и косвенных налогов" },
  },
  opendata: {
    name: { es: "Portal de Datos Abiertos", it: "Portale Open Data", de: "Open-Data-Portal", ru: "Портал открытых данных" },
  },
  one: {
    name: { es: "ONEE — Oficina Nacional de Electricidad y Agua Potable", it: "ONEE — Ufficio Nazionale dell'Elettricità e dell'Acqua Potabile", de: "ONEE — Nationales Amt für Elektrizität und Trinkwasser", ru: "ONEE — Национальное бюро по электроэнергии и питьевой воде" },
  },
  oncf: {
    name: { es: "ONCF — Oficina Nacional de Ferrocarriles", it: "ONCF — Ufficio Nazionale delle Ferrovie", de: "ONCF — Nationales Eisenbahnamt", ru: "ONCF — Национальное бюро железных дорог" },
  },
  poste: {
    name: { es: "Barid Al-Maghrib / Barid Bank", it: "Barid Al-Maghrib / Barid Bank", de: "Barid Al-Maghrib / Barid Bank", ru: "Barid Al-Maghrib / Barid Bank" },
  },
  cndh: {
    name: { es: "CNDH — Consejo Nacional de Derechos Humanos", it: "CNDH — Consiglio Nazionale dei Diritti Umani", de: "CNDH — Nationaler Menschenrechtsrat", ru: "CNDH — Национальный совет по правам человека" },
  },
};

export const linkCatI18n: Record<string, LinkI18nOverlay> = {
  gov: {
    name: { es: "Portales gubernamentales", it: "Portali governativi", de: "Regierungsportale", ru: "Правительственные порталы" },
  },
  digital: {
    name: { es: "Servicios públicos digitales", it: "Servizi pubblici digitali", de: "Digitale öffentliche Dienste", ru: "Цифровые госуслуги" },
  },
  social: {
    name: { es: "Protección social y salud", it: "Protezione sociale e salute", de: "Sozialschutz und Gesundheit", ru: "Социальная защита и здравоохранение" },
  },
  employment: {
    name: { es: "Empleo y formación", it: "Lavoro e formazione", de: "Beschäftigung und Ausbildung", ru: "Занятость и обучение" },
  },
  economy: {
    name: { es: "Economía y finanzas", it: "Economia e finanze", de: "Wirtschaft und Finanzen", ru: "Экономика и финансы" },
  },
  utilities: {
    name: { es: "Servicios públicos esenciales", it: "Servizi pubblici essenziali", de: "Öffentliche Grundversorgung", ru: "Основные государственные услуги" },
  },
};
