// i18n overlays for `documents.ts` (legacy phase-1 entries).
// Provides the missing en/es/it/de/ru title + where (+ fields) strings so
// that every catalog entry fully follows the selected UI language.
// Keys MUST match document ids in documents.ts exactly.
import type { DocI18nOverlay } from "./forms-shared";

export const docI18nBase: Record<string, DocI18nOverlay> = {
  "demande-generale": {
    title: { en: "General administrative request", es: "Solicitud administrativa general", it: "Richiesta amministrativa generale", de: "Allgemeiner Verwaltungsantrag", ru: "Общее административное заявление" },
    where: { en: "The administration or service concerned by the subject of the request", es: "La administración o el servicio competente en razón del objeto de la solicitud", it: "L'amministrazione o il servizio competente in base all'oggetto della richiesta", de: "Die für den Gegenstand des Antrags zuständige Verwaltung oder Dienststelle", ru: "Ведомство или служба, к ведению которых относится предмет заявления" },
    fields: { es: ["Nombre completo del remitente", "Dirección completa", "Número del DNI", "Destinatario de la solicitud", "Objeto y detalles de la solicitud", "Fecha y firma"], it: ["Nome completo del mittente", "Indirizzo completo", "Numero CIN", "Destinatario della richiesta", "Oggetto e dettagli della richiesta", "Data e firma"], de: ["Vollständiger Name des Absenders", "Vollständige Adresse", "CIN-Nummer", "Adressat des Antrags", "Gegenstand und Details des Antrags", "Datum und Unterschrift"], ru: ["Полное имя отправителя", "Полный адрес", "Номер удостоверения личности", "Адресат заявления", "Предмет и подробности заявления", "Дата и подпись"] },
  },
  "demande-acte-naissance": {
    title: { en: "Request for a copy of a birth certificate", es: "Solicitud de copia de acta de nacimiento", it: "Richiesta di copia dell'atto di nascita", de: "Antrag auf eine Kopie der Geburtsurkunde", ru: "Заявление на копию свидетельства о рождении" },
    where: { en: "Civil registry service of the commune of the place of birth", es: "Servicio de registro civil de la comuna del lugar de nacimiento", it: "Servizio di stato civile del comune del luogo di nascita", de: "Standesamt der Gemeinde des Geburtsortes", ru: "Отдел актов гражданского состояния коммуны по месту рождения" },
    fields: { es: ["Nombre del interesado y número de DNI", "Fecha y lugar de nacimiento", "Nombres del padre y de la madre", "Tipo de copia (integral/conforme)", "Número de copias"], it: ["Nome dell'interessato e numero CIN", "Data e luogo di nascita", "Nomi del padre e della madre", "Tipo di copia (integrale/conforme)", "Numero di copie"], de: ["Name des Betroffenen und CIN-Nummer", "Geburtsdatum und -ort", "Namen von Vater und Mutter", "Art der Kopie (vollständig/beglaubigt)", "Anzahl der Kopien"], ru: ["Имя заявителя и номер удостоверения личности", "Дата и место рождения", "Имена отца и матери", "Тип копии (полная/заверенная)", "Количество копий"] },
  },
  "demande-certificat-scolaire": {
    title: { en: "Request for a school attendance certificate", es: "Solicitud de certificado de escolaridad", it: "Richiesta di certificato di frequenza", de: "Antrag auf eine Schulbescheinigung", ru: "Заявление на справку об обучении" },
    where: { en: "The school administration (school/high school)", es: "La dirección del centro educativo (escuela/instituto)", it: "La direzione dell'istituto scolastico (scuola/liceo)", de: "Die Schulleitung (Schule/Gymnasium)", ru: "Администрация учебного заведения (школа/лицей)" },
  },
  "demande-raccordement": {
    title: { en: "Electricity and water connection request", es: "Solicitud de conexión de agua y electricidad", it: "Richiesta di allacciamento all'acqua e all'elettricità", de: "Antrag auf Strom- und Wasseranschluss", ru: "Заявление на подключение электричества и воды" },
    where: { en: "A ONEE agency or an approved distributor", es: "Agencia de la ONEE o distribuidor autorizado", it: "Agenzia ONEE o distributore autorizzato", de: "ONEE-Agentur oder zugelassener Versorger", ru: "Агентство ONEE или уполномоченный дистрибьютор" },
  },
  "demande-transfert-medical": {
    title: { en: "Request to transfer a medical file", es: "Solicitud de transferencia de historial médico", it: "Richiesta di trasferimento della cartella clinica", de: "Antrag auf Übermittlung der Patientenakte", ru: "Заявление на перевод медицинской карты" },
    where: { en: "The administration of the hospital or health center concerned", es: "Dirección del hospital o centro de salud correspondiente", it: "Direzione dell'ospedale o del centro sanitario competente", de: "Leitung des zuständigen Krankenhauses oder Gesundheitszentrums", ru: "Администрация соответствующей больницы или медицинского центра" },
  },
  "demande-releve-bancaire": {
    title: { en: "Request for a bank account statement", es: "Solicitud de extracto de cuenta bancaria", it: "Richiesta di estratto conto bancario", de: "Antrag auf einen Kontoauszug", ru: "Запрос выписки по банковскому счёту" },
    where: { en: "The bank or postal agency holding the account", es: "La agencia bancaria o postal de la cuenta", it: "L'agenzia bancaria o postale del conto", de: "Die Bank- oder Postfiliale des Kontos", ru: "Банковское или почтовое отделение, где открыт счёт" },
  },
  "chikaya-amma": {
    title: { en: "General complaint", es: "Reclamación general", it: "Reclamo generale", de: "Allgemeine Beschwerde", ru: "Общая жалоба" },
    where: { en: "The administration or service concerned by the subject of the complaint", es: "La administración o el servicio competente en razón del objeto de la reclamación", it: "L'amministrazione o il servizio competente in base all'oggetto del reclamo", de: "Die für den Gegenstand der Beschwerde zuständige Verwaltung oder Dienststelle", ru: "Ведомство или служба, к ведению которых относится предмет жалобы" },
    fields: { es: ["Nombre y dirección del reclamante", "Destinatario de la reclamación", "Exposición detallada de los hechos", "Petición formulada", "Anexos, si los hubiera", "Fecha y firma"], it: ["Nome e indirizzo del reclamante", "Destinatario del reclamo", "Esposizione dettagliata dei fatti", "Richiesta formulata", "Allegati ove previsti", "Data e firma"], de: ["Name und Anschrift des Beschwerdeführers", "Adressat der Beschwerde", "Detaillierte Darstellung des Sachverhalts", "Formuliertes Anliegen", "Anlagen, sofern vorhanden", "Datum und Unterschrift"], ru: ["Имя и адрес заявителя жалобы", "Адресат жалобы", "Подробное изложение фактов", "Сформулированная просьба", "Приложения (при наличии)", "Дата и подпись"] },
  },
  "chikaya-voisinage": {
    title: { en: "Complaint against a neighbor", es: "Reclamación contra un vecino", it: "Reclamo contro un vicino", de: "Beschwerde gegen einen Nachbarn", ru: "Жалоба на соседа" },
    where: { en: "Security services or the commune, depending on the case", es: "Servicios de seguridad o la comuna, según el caso", it: "Servizi di sicurezza o comune, a seconda del caso", de: "Sicherheitsbehörden oder Gemeinde, je nach Fall", ru: "Органы правопорядка или коммуна — в зависимости от случая" },
  },
  "chikaya-fiscale": {
    title: { en: "Tax complaint", es: "Reclamación fiscal", it: "Ricorso fiscale", de: "Einspruch bei der Steuerverwaltung", ru: "Претензия в налоговое управление" },
    where: { en: "Regional tax directorate or online", es: "Dirección regional de impuestos o en línea", it: "Direzione regionale delle imposte o online", de: "Regionale Steuerdirektion oder online", ru: "Региональная дирекция по налогам или онлайн" },
  },
  "chikaya-nafaqa": {
    title: { en: "Complaint for family abandonment", es: "Denuncia por abandono de familia", it: "Denuncia per abbandono di famiglia", de: "Strafanzeige wegen Familienverlassung", ru: "Жалоба об оставлении семьи" },
    where: { en: "King's prosecutor's office at the competent court of first instance", es: "Fiscalía del tribunal de primera instancia competente", it: "Procura del tribunale di prima istanza competente", de: "Staatsanwaltschaft des zuständigen erstinstanzlichen Gerichts", ru: "Прокуратура компетентного суда первой инстанции" },
  },
  "chikaya-travail": {
    title: { en: "Complaint to the labor inspectorate", es: "Reclamación ante la inspección de trabajo", it: "Reclamo presso l'ispezione del lavoro", de: "Beschwerde bei der Arbeitsinspektion", ru: "Жалоба в инспекцию труда" },
    where: { en: "The labor inspectorate covering the place of work", es: "La inspección de trabajo correspondiente al lugar de trabajo", it: "L'ispezione del lavoro competente per il luogo di lavoro", de: "Die für den Arbeitsort zuständige Arbeitsinspektion", ru: "Инспекция труда по месту работы" },
  },
  "attestation-travail": {
    title: { en: "Work certificate", es: "Certificado de trabajo", it: "Certificato di lavoro", de: "Arbeitsbescheinigung", ru: "Справка о работе" },
    where: { en: "To be requested from the employer (company management)", es: "Se solicita al empleador (dirección de la empresa)", it: "Da richiedere al datore di lavoro (direzione dell'azienda)", de: "Beim Arbeitgeber (Unternehmensleitung) anzufordern", ru: "Запрашивается у работодателя (у руководства компании)" },
    fields: { es: ["Nombre del trabajador y DNI", "Puesto desempeñado", "Fecha de contratación", "Tipo de contrato", "Denominación de la empresa"], it: ["Nome del dipendente e CIN", "Posizione occupata", "Data di assunzione", "Tipo di contratto", "Denominazione dell'azienda"], de: ["Name des Arbeitnehmers und CIN-Nummer", "Ausgeübte Position", "Einstellungsdatum", "Vertragsart", "Firmenbezeichnung"], ru: ["Имя работника и номер удостоверения личности", "Занимаемая должность", "Дата приёма на работу", "Тип договора", "Наименование компании"] },
  },
  "attestation-residence": {
    title: { en: "Residence certificate", es: "Certificado de residencia", it: "Certificato di residenza", de: "Wohnsitzbescheinigung", ru: "Справка о месте жительства" },
    where: { en: "Administrative annex / caïdat office or the commune's competent service", es: "Anexo administrativo / caïdat o servicio municipal competente", it: "Ufficio amministrativo locale / caïdat o servizio comunale competente", de: "Lokale Verwaltungsstelle / Caïdat oder zuständige kommunale Dienststelle", ru: "Местный административный орган / кайдат или компетентная служба коммуны" },
    fields: { es: ["Nombre y datos del interesado", "Dirección completa de la vivienda", "Datos de los dos testigos", "Duración de la residencia, si procede", "Fecha y firmas"], it: ["Nome e dati dell'interessato", "Indirizzo completo dell'abitazione", "Dati dei due testimoni", "Durata della residenza, se richiesta", "Data e firme"], de: ["Name und Angaben der betroffenen Person", "Vollständige Wohnadresse", "Angaben der beiden Zeugen", "Dauer des Wohnsitzes, falls erforderlich", "Datum und Unterschriften"], ru: ["Имя и данные заявителя", "Полный адрес проживания", "Данные двух свидетелей", "Срок проживания (при необходимости)", "Дата и подписи"] },
  },
  "attestation-non-travail": {
    title: { en: "Certificate of non-employment", es: "Certificado de no empleo", it: "Certificato di non occupazione", de: "Bescheinigung der Nichterwerbstätigkeit", ru: "Справка об отсутствии работы" },
    where: { en: "Administrative annex or commune, depending on the requesting body", es: "Anexo administrativo o comuna, según el organismo solicitante", it: "Ufficio amministrativo locale o comune, secondo l'ente richiedente", de: "Lokale Verwaltungsstelle oder Gemeinde, je nach anfordernder Stelle", ru: "Местный административный орган или коммуна — в зависимости от запрашивающей организации" },
    fields: { es: ["Nombre y DNI del interesado", "Dirección completa", "Declaración de no empleo", "Fecha y firma"], it: ["Nome e CIN dell'interessato", "Indirizzo completo", "Dichiarazione di non occupazione", "Data e firma"], de: ["Name und CIN-Nummer der betroffenen Person", "Vollständige Adresse", "Erklärung der Nichterwerbstätigkeit", "Datum und Unterschrift"], ru: ["Имя и номер удостоверения личности заявителя", "Полный адрес", "Заявление об отсутствии работы", "Дата и подпись"] },
  },
  "attestation-revenu": {
    title: { en: "Income certificate", es: "Certificado de ingresos", it: "Certificato di reddito", de: "Einkommensbescheinigung", ru: "Справка о доходах" },
    where: { en: "Employer or the competent administration, depending on the case", es: "Empleador o administración competente, según el caso", it: "Datore di lavoro o amministrazione competente, secondo il caso", de: "Arbeitgeber oder zuständige Behörde, je nach Fall", ru: "Работодатель или компетентное ведомство — в зависимости от случая" },
  },
  "attestation-vie": {
    title: { en: "Life certificate", es: "Certificado de vida", it: "Certificato di vita", de: "Lebensbescheinigung", ru: "Справка о жизни" },
    where: { en: "In the presence of the person concerned, before the competent service (caïdat/police)", es: "En presencia del interesado ante el servicio competente (caïdat/policía)", it: "In presenza dell'interessato davanti al servizio competente (caïdat/polizia)", de: "Unter persönlicher Anwesenheit vor der zuständigen Dienststelle (Caïdat/Polizei)", ru: "При личном присутствии заявителя в компетентной службе (кайдат/полиция)" },
  },
  "declaration-honneur": {
    title: { en: "Sworn declaration", es: "Declaración jurada", it: "Dichiarazione giurata", de: "Eidesstattliche Erklärung", ru: "Заявление под личную ответственность" },
    where: { en: "To be attached to or filed with the requesting body", es: "Se adjunta o se presenta junto al expediente ante el organismo solicitante", it: "Da allegare o depositare con la pratica presso l'ente richiedente", de: "Beizufügen oder bei der erfordernden Stelle einzureichen", ru: "Прилагается к делу или подаётся в запрашивающую организацию" },
    fields: { es: ["Nombre y datos completos del declarante", "Texto de la declaración", "Compromiso de responsabilidad", "Lugar y fecha", "Firma"], it: ["Nome e dati completi del dichiarante", "Testo della dichiarazione", "Assunzione di responsabilità", "Luogo e data", "Firma"], de: ["Name und vollständige Angaben des Erklärenden", "Text der Erklärung", "Übernahme der Verantwortung", "Ort und Datum", "Unterschrift"], ru: ["Имя и полные данные заявителя", "Текст заявления", "Принятие ответственности", "Место и дата", "Подпись"] },
  },
  "declaration-non-emploi": {
    title: { en: "Sworn declaration of non-employment", es: "Declaración jurada de no empleo", it: "Dichiarazione giurata di non occupazione", de: "Eidesstattliche Erklärung der Nichterwerbstätigkeit", ru: "Заявление под личную ответственность об отсутствии работы" },
    where: { en: "The body requesting the declaration (social aid, scholarship…)", es: "El organismo solicitante (ayuda social, beca…)", it: "L'ente richiedente (aiuto sociale, borsa…)", de: "Die erfordernde Stelle (Sozialhilfe, Stipendium…)", ru: "Запрашивающая организация (соцпомощь, стипендия…)" },
  },
  "declaration-residence": {
    title: { en: "Sworn declaration of residence", es: "Declaración jurada de residencia", it: "Dichiarazione giurata di residenza", de: "Eidesstattliche Wohnsitzerklärung", ru: "Заявление под личную ответственность о месте жительства" },
    where: { en: "The body requesting the declaration", es: "El organismo solicitante", it: "L'ente richiedente", de: "Die erfordernde Stelle", ru: "Запрашивающая организация" },
  },
  "declaration-etudes": {
    title: { en: "Declaration of continued studies", es: "Declaración de continuación de estudios", it: "Dichiarazione di prosecuzione degli studi", de: "Erklärung über die Fortsetzung des Studiums", ru: "Заявление о продолжении учёбы" },
    where: { en: "The requesting body (CNSS/CNOPS, transport…)", es: "El organismo solicitante (CNSS/CNOPS, transporte…)", it: "L'ente richiedente (CNSS/CNOPS, trasporti…)", de: "Die erfordernde Stelle (CNSS/CNOPS, Transport…)", ru: "Запрашивающая организация (CNSS/CNOPS, транспорт…)" },
  },
  "iltizam-sakan": {
    title: { en: "Housing commitment", es: "Compromiso de alojamiento", it: "Impegno a fornire alloggio", de: "Verpflichtung zur Bereitstellung von Wohnraum", ru: "Обязательство предоставить жильё" },
    where: { en: "The requesting institution (university, administration, embassy…)", es: "La institución solicitante (universidad, administración, embajada…)", it: "L'istituto richiedente (università, amministrazione, ambasciata…)", de: "Die erfordernde Einrichtung (Universität, Behörde, Botschaft…)", ru: "Запрашивающее учреждение (университет, ведомство, посольство…)" },
    fields: { es: ["Datos completos del garante", "Datos del beneficiario", "Dirección de la vivienda", "Duración del compromiso", "Fecha y firma"], it: ["Dati completi del garante", "Dati del beneficiario", "Indirizzo dell'alloggio", "Durata dell'impegno", "Data e firma"], de: ["Vollständige Angaben des Verpflichtenden", "Angaben des Begünstigten", "Adresse der Wohnung", "Dauer der Verpflichtung", "Datum und Unterschrift"], ru: ["Полные данные поручителя", "Данные бенефициара", "Адрес жилья", "Срок обязательства", "Дата и подпись"] },
  },
  "iltizam-kafala": {
    title: { en: "Sponsorship commitment", es: "Compromiso de manutención", it: "Impegno di mantenimento", de: "Verpflichtung zur Kostenübernahme", ru: "Обязательство о содержании" },
    where: { en: "The requesting embassy or administration", es: "La embajada o administración solicitante", it: "L'ambasciata o l'amministrazione richiedente", de: "Die anfordernde Botschaft oder Behörde", ru: "Посольство или запрашивающее ведомство" },
  },
  "iltizam-tassdid": {
    title: { en: "Payment commitment", es: "Compromiso de pago", it: "Impegno di pagamento", de: "Zahlungsverpflichtung", ru: "Обязательство об оплате" },
    where: { en: "The creditor or the administration concerned", es: "El acreedor o la administración correspondiente", it: "Il creditore o l'amministrazione interessata", de: "Der Gläubiger oder die betreffende Behörde", ru: "Кредитор или соответствующее ведомство" },
  },
  "wakala-amma": {
    title: { en: "Power of attorney (simplified model)", es: "Poder (modelo simplificado)", it: "Procura (modello semplificato)", de: "Vollmacht (vereinfachtes Muster)", ru: "Доверенность (упрощённый образец)" },
    where: { en: "The administration concerned (to be legalized as it requires)", es: "La administración correspondiente (a legalizar según sus exigencias)", it: "L'amministrazione competente (da legalizzare secondo le sue esigenze)", de: "Die zuständige Behörde (gemäß ihren Anforderungen zu beglaubigen)", ru: "Соответствующее ведомство (заверение согласно его требованиям)" },
    fields: { es: ["Nombre completo del poderdante", "Nombre completo del apoderado", "Naturaleza del acto delegado", "Documento o expediente correspondiente", "Duración de la validez", "Firmas"], it: ["Nome completo del mandante", "Nome completo del mandatario", "Natura dell'atto delegato", "Documento o pratica interessata", "Durata di validità", "Firme"], de: ["Vollständiger Name des Vollmachtgebers", "Vollständiger Name des Bevollmächtigten", "Art der übertragenen Handlung", "Betreffendes Dokument oder Akte", "Geltungsdauer", "Unterschriften"], ru: ["Полное имя доверителя", "Полное имя поверенного", "Характер делегированного действия", "Соответствующий документ или дело", "Срок действия", "Подписи"] },
  },
  "wakala-istilam": {
    title: { en: "Collection authorization", es: "Autorización para el retiro", it: "Autorizzazione al ritiro", de: "Vollmacht zum Empfang", ru: "Доверенность на получение" },
    where: { en: "The administration or body holding the document", es: "La administración u organismo que tiene el documento", it: "L'amministrazione o l'ente detentore del documento", de: "Die Behörde oder Stelle, die das Dokument verwahrt", ru: "Ведомство или организация, у которой находится документ" },
  },
  "wakala-suivi": {
    title: { en: "Power of attorney for file follow-up", es: "Poder para el seguimiento de un expediente", it: "Procura per il seguito di una pratica", de: "Vollmacht zur Aktbearbeitung", ru: "Доверенность на ведение дела" },
    where: { en: "The administration concerned by the file", es: "La administración correspondiente al expediente", it: "L'amministrazione interessata dalla pratica", de: "Die für die Akte zuständige Behörde", ru: "Ведомство, к которому относится дело" },
  },
  "wakala-bancaire": {
    title: { en: "Bank power of attorney", es: "Poder bancario", it: "Procura bancaria", de: "Bankvollmacht", ru: "Банковская доверенность" },
    where: { en: "The bank or postal agency holding the account", es: "La agencia bancaria o postal de la cuenta", it: "L'agenzia bancaria o postale del conto", de: "Die Bank- oder Postfiliale des Kontos", ru: "Банковское или почтовое отделение, где открыт счёт" },
  },
  "contrat-bail": {
    title: { en: "Residential lease contract", es: "Contrato de arrendamiento de vivienda", it: "Contratto di locazione abitativa", de: "Wohnungsmietvertrag", ru: "Договор аренды жилья" },
    where: { en: "Signed by the parties and registered with the tax service", es: "Firmado por las partes y registrado ante el servicio fiscal", it: "Firmato tra le parti e registrato presso il servizio fiscale", de: "Zwischen den Parteien unterzeichnet und bei der Finanzbehörde eingetragen", ru: "Подписывается сторонами и регистрируется в налоговом органе" },
    fields: { es: ["Datos completos del arrendador y del arrendatario", "Descripción y dirección del inmueble", "Duración y fecha de inicio", "Importe de la renta y forma de pago", "Depósito de garantía y gastos comunes", "Cláusula de resolución y renovación", "Firmas de las partes y testigos"], it: ["Dati completi di locatore e conduttore", "Descrizione e indirizzo dell'immobile", "Durata e data di inizio", "Ammontare del canone e modalità di pagamento", "Deposito cauzionale e spese accessorie", "Clausola di risoluzione e rinnovo", "Firme delle parti e dei testimoni"], de: ["Vollständige Angaben von Vermieter und Mieter", "Beschreibung und Adresse des Mietobjekts", "Dauer und Beginndatum", "Monatsmiete und Zahlungsweise", "Kaution und Nebenkosten", "Klausel zu Kündigung und Verlängerung", "Unterschriften der Parteien und Zeugen"], ru: ["Полные данные арендодателя и арендатора", "Описание и адрес объекта", "Срок и дата начала", "Размер месячной арендной платы и способ оплаты", "Залог и коммунальные расходы", "Условие расторжения и продления", "Подписи сторон и свидетелей"] },
  },
  "bail-local": {
    title: { en: "Commercial lease contract", es: "Contrato de arrendamiento de local comercial", it: "Contratto di locazione commerciale", de: "Gewerbemietvertrag", ru: "Договор аренды коммерческого помещения" },
    where: { en: "Signed and registered with the tax service", es: "Firmado y registrado ante el servicio fiscal", it: "Firmato e registrato presso il servizio fiscale", de: "Unterzeichnet und bei der Finanzbehörde eingetragen", ru: "Подписывается и регистрируется в налоговом органе" },
  },
  "bail-meuble": {
    title: { en: "Furnished rental contract", es: "Contrato de alquiler de vivienda amueblada", it: "Contratto di locazione ammobiliata", de: "Mietvertrag für eine möblierte Wohnung", ru: "Договор аренды с мебелью" },
    where: { en: "Signed between the parties", es: "Firmado entre las partes", it: "Firmato tra le parti", de: "Zwischen den Parteien unterzeichnet", ru: "Подписывается между сторонами" },
  },
  "quittance-loyer": {
    title: { en: "Rent receipt", es: "Recibo de alquiler", it: "Ricevuta di affitto", de: "Mietquittung", ru: "Квитанция об оплате аренды" },
    where: { en: "Kept by the tenant as proof of payment", es: "Lo conserva el arrendatario como prueba de pago", it: "Conservato dal conduttore come prova del pagamento", de: "Vom Mieter als Zahlungsnachweis aufbewahrt", ru: "Хранится у арендатора как подтверждение оплаты" },
  },
  "vente-vehicule": {
    title: { en: "Vehicle sale contract", es: "Contrato de venta de vehículo", it: "Contratto di vendita di veicolo", de: "Kaufvertrag über ein Fahrzeug", ru: "Договор купли-продажи автомобиля" },
    where: { en: "Signed by the parties; then the registration card is updated at the vehicle registration office", es: "Firmado por las partes; luego el cambio de la tarjeta de circulación en el servicio de matriculación", it: "Firmato tra le parti; poi cambio della carta di circolazione presso l'ufficio di immatricolazione", de: "Von den Parteien unterzeichnet; anschließend Umschreibung des Fahrzeugscheins bei der Zulassungsstelle", ru: "Подписывается сторонами; затем замена техпаспорта в органе регистрации автомобилей" },
    fields: { es: ["Datos completos del vendedor y del comprador", "Tipo de vehículo, placa y tarjeta de circulación", "Precio y forma de pago", "Declaración sobre el estado del vehículo", "Entrega de documentos y llaves", "Firmas"], it: ["Dati completi del venditore e dell'acquirente", "Tipo di veicolo, targa e carta di circolazione", "Prezzo e modalità di pagamento", "Dichiarazione sullo stato del veicolo", "Consegna di documenti e chiavi", "Firme"], de: ["Vollständige Angaben von Verkäufer und Käufer", "Fahrzeugart, Kennzeichen und Fahrzeugschein", "Preis und Zahlungsmodalitäten", "Erklärung zum Fahrzeugzustand", "Übergabe von Dokumenten und Schlüsseln", "Unterschriften"], ru: ["Полные данные продавца и покупателя", "Тип автомобиля, номерной знак и техпаспорт", "Цена и условия оплаты", "Заявление о состоянии автомобиля", "Передача документов и ключей", "Подписи"] },
  },
  "vente-meubles": {
    title: { en: "Contract for the sale of furniture", es: "Contrato de venta de muebles", it: "Contratto di vendita di mobili", de: "Kaufvertrag über Möbel", ru: "Договор купли-продажи мебели" },
    where: { en: "Signed by the parties and kept as evidence", es: "Firmado entre las partes y conservado como prueba", it: "Firmato tra le parti e conservato come prova", de: "Zwischen den Parteien unterzeichnet und als Nachweis aufbewahrt", ru: "Подписывается сторонами и хранится как доказательство" },
  },
  "cession-fonds": {
    title: { en: "Business transfer deed", es: "Escritura de cesión de negocio", it: "Atto di cessione di azienda", de: "Urkunde über die Übertragung eines Geschäftsbetriebs", ru: "Договор о передаче бизнеса" },
    where: { en: "Usually drafted with professional help and entered in the commercial register", es: "Suele redactarse con ayuda profesional y se inscribe en el registro mercantil", it: "Di norma redatto con l'aiuto di un professionista e iscritto al registro delle imprese", de: "Meist mit fachlicher Hilfe errichtet und im Handelsregister eingetragen", ru: "Обычно составляется с помощью специалиста и регистрируется в торговом реестре" },
  },
  "cv": {
    title: { en: "CV template", es: "Modelo de currículum", it: "Modello di curriculum", de: "Lebenslaufvorlage", ru: "Шаблон резюме" },
    where: { en: "To be sent with job applications and competitive recruitment exams", es: "Se envía para candidaturas y oposiciones", it: "Da inviare per candidature e concorsi", de: "Für Bewerbungen und Auswahlverfahren einzureichen", ru: "Направляется с заявками о приёме на работу и на конкурсные экзамены" },
  },
  "lettre-motivation": {
    title: { en: "Cover letter", es: "Carta de presentación", it: "Lettera di presentazione", de: "Motivationsschreiben", ru: "Сопроводительное письмо" },
    where: { en: "To be attached to the CV in the application", es: "Se adjunta al currículum en la candidatura", it: "Da allegare al CV nella candidatura", de: "Dem Lebenslauf in der Bewerbung beizufügen", ru: "Прилагается к резюме при подаче заявки" },
  },
  "candidature": {
    title: { en: "Job application (speculative application)", es: "Solicitud de empleo (candidatura espontánea)", it: "Domanda di lavoro (candidatura spontanea)", de: "Bewerbung um eine Stelle (Initiativbewerbung)", ru: "Заявление о приёме на работу (по собственной инициативе)" },
    where: { en: "Addressed to the target company or administration", es: "Se dirige a la empresa o administración destinataria", it: "Indirizzata all'azienda o all'amministrazione prescelta", de: "Gerichtet an das anvisierte Unternehmen oder die Behörde", ru: "Направляется в целевую компанию или ведомство" },
  },
  "demission": {
    title: { en: "Resignation request", es: "Solicitud de renuncia", it: "Domanda di dimissioni", de: "Kündigungsschreiben", ru: "Заявление об уходе" },
    where: { en: "Addressed to the employer with proof of receipt", es: "Se dirige al empleador con prueba de recepción", it: "Indirizzata al datore di lavoro con prova di ricezione", de: "An den Arbeitgeber zu richten, mit Empfangsbestätigung", ru: "Направляется работодателю с подтверждением получения" },
  },
  "cdd": {
    title: { en: "Fixed-term employment contract (CDD)", es: "Contrato de trabajo de duración determinada (CDD)", it: "Contratto di lavoro a tempo determinato (CDD)", de: "Befristeter Arbeitsvertrag (CDD)", ru: "Срочный трудовой договор (CDD)" },
    where: { en: "Signed by employer and employee; a copy for each party and a CNSS declaration", es: "Firmado por empleador y empleado; copia para cada parte y declaración ante la CNSS", it: "Firmato tra datore di lavoro e dipendente; copia per ciascuna parte e comunicazione alla CNSS", de: "Von Arbeitgeber und Arbeitnehmer unterzeichnet; eine Kopie für jede Partei und Anmeldung bei der CNSS", ru: "Подписывается работодателем и работником; копия каждой стороне и декларация в CNSS" },
  },
  "demande-stage": {
    title: { en: "Internship request", es: "Solicitud de prácticas", it: "Domanda di tirocinio", de: "Antrag auf ein Praktikum", ru: "Заявление на стажировку" },
    where: { en: "Addressed to the management of the target company", es: "Se dirige a la dirección de la empresa destinataria", it: "Indirizzata alla direzione dell'azienda prescelta", de: "An die Leitung des anvisierten Unternehmens zu richten", ru: "Направляется руководству целевой компании" },
  },
  "attestation-experience": {
    title: { en: "Professional experience certificate", es: "Certificado de experiencia laboral", it: "Attestato di esperienza professionale", de: "Bescheinigung über Berufserfahrung", ru: "Справка о профессиональном опыте" },
    where: { en: "To be requested from the former employer", es: "Se solicita al antiguo empleador", it: "Da richiedere al precedente datore di lavoro", de: "Beim früheren Arbeitgeber anzufordern", ru: "Запрашивается у бывшего работодателя" },
  },
  "autorisation-voyage": {
    title: { en: "Parental travel authorization", es: "Autorización parental de viaje", it: "Autorizzazione parentale al viaggio", de: "Elterliche Reiseerlaubnis", ru: "Родительское согласие на выезд несовершеннолетнего" },
    where: { en: "Presented to the carrier or at borders; some authorities require legalization", es: "Se presenta al transportista o en las fronteras; algunas autoridades exigen legalización", it: "Presentato al vettore o alle frontiere; talune autorità richiedono la legalizzazione", de: "Dem Beförderer oder an den Grenzen vorzulegen; manche Behörden verlangen eine Beglaubigung", ru: "Предъявляется перевозчику или на границе; некоторые ведомства требуют заверения" },
  },
  "declaration-naissance": {
    title: { en: "Birth declaration", es: "Declaración de nacimiento", it: "Dichiarazione di nascita", de: "Geburtsanzeige", ru: "Заявление о рождении" },
    where: { en: "Civil registry service of the commune of the place of delivery", es: "Servicio de registro civil de la comuna del lugar del parto", it: "Servizio di stato civile del comune del luogo del parto", de: "Standesamt der Gemeinde des Geburtsortes", ru: "Отдел актов гражданского состояния коммуны по месту родов" },
  },
  "iltizam-nafaqa": {
    title: { en: "Alimony payment commitment", es: "Compromiso de pago de pensión alimenticia", it: "Impegno al pagamento degli alimenti", de: "Verpflichtung zur Zahlung des Unterhalts", ru: "Обязательство по уплате алиментов" },
    where: { en: "The requesting body or the court within the divorce/alimony proceedings", es: "El organismo solicitante o el tribunal en el marco del procedimiento", it: "L'ente richiedente o il tribunale nell'ambito del procedimento", de: "Die erfordernde Stelle oder das Gericht im Rahmen des Verfahrens", ru: "Запрашивающая организация или суд в рамках процедуры развода/алиментов" },
  },
  "demande-acte-mariage": {
    title: { en: "Request for a copy of the marriage deed", es: "Solicitud de copia de acta de matrimonio", it: "Richiesta di copia dell'atto di matrimonio", de: "Antrag auf eine Kopie der Eheurkunde", ru: "Заявление на копию свидетельства о браке" },
    where: { en: "Registry of the court that issued the deed or the court of first instance", es: "Secretaría del tribunal que emitió el acta o del tribunal de primera instancia", it: "Cancelleria del tribunale che ha rilasciato l'atto o del tribunale di prima istanza", de: "Geschäftsstelle des ausstellenden Gerichts oder des erstinstanzlichen Gerichts", ru: "Канцелярия суда, выдавшего акт, или суда первой инстанции" },
  },
  "demande-creation-assoc": {
    title: { en: "Association creation request", es: "Solicitud de creación de asociación", it: "Domanda di costituzione di associazione", de: "Antrag auf Vereinsgründung", ru: "Заявление на создание ассоциации" },
    where: { en: "Local administrative authority of the association's head office", es: "Autoridad administrativa local de la sede de la asociación", it: "Autorità amministrativa locale della sede dell'associazione", de: "Örtliche Verwaltungsbehörde des Sitzes des Vereins", ru: "Местные административные власти по месту нахождения ассоциации" },
  },
  "pv-ag-fondateur": {
    title: { en: "Minutes of the constituent general assembly", es: "Acta de la asamblea general constitutiva", it: "Verbale dell'assemblea costitutiva", de: "Protokoll der Gründungsversammlung", ru: "Протокол учредительного собрания" },
    where: { en: "To be attached to the creation file", es: "Se adjunta al expediente de creación", it: "Da allegare alla pratica di costituzione", de: "Dem Gründungsdossier beizufügen", ru: "Прилагается к учредительному делу" },
  },
  "statuts-assoc": {
    title: { en: "Association bylaws template", es: "Modelo de estatutos de asociación", it: "Modello di statuto di associazione", de: "Mustersatzung für einen Verein", ru: "Образец устава ассоциации" },
    where: { en: "To be adapted to the association and attached to the file", es: "Se adapta según la asociación y se adjunta al expediente", it: "Da adattare in base all'associazione e allegare alla pratica", de: "An den Verein anzupassen und dem Dossier beizufügen", ru: "Адаптируется под ассоциацию и прилагается к делу" },
  },
  "permis-construire": {
    title: { en: "Building permit request", es: "Solicitud de licencia de obra", it: "Richiesta di permesso edilizio", de: "Baugenehmigungsantrag", ru: "Заявление на разрешение строительства" },
    where: { en: "Urban agency or commune of the property's location", es: "Agencia urbana o comuna del lugar del inmueble", it: "Agenzia urbana o comune del luogo dell'immobile", de: "Stadtplanungsbehörde oder Gemeinde am Standort des Grundstücks", ru: "Агентство по градостроительству или коммуна по месту нахождения объекта" },
  },
  "autorisation-cloture": {
    title: { en: "Fencing authorization request", es: "Solicitud de autorización de vallado", it: "Richiesta di autorizzazione alla recinzione", de: "Antrag auf Einfriedungsgenehmigung", ru: "Заявление на разрешение ограждения" },
    where: { en: "Urban agency or commune", es: "Agencia urbana o comuna", it: "Agenzia urbana o comune", de: "Stadtplanungsbehörde oder Gemeinde", ru: "Агентство по градостроительству или коммуна" },
  },
  "declaration-achevement": {
    title: { en: "Declaration of completion of works", es: "Declaración de finalización de obras", it: "Dichiarazione di fine lavori", de: "Fertigstellungsanzeige", ru: "Заявление о завершении работ" },
    where: { en: "The commune or urban agency that issued the permit", es: "La comuna o agencia urbana que otorgó la licencia", it: "Il comune o l'agenzia urbana che ha rilasciato il permesso", de: "Die Gemeinde oder Stadtplanungsbehörde, die die Genehmigung erteilt hat", ru: "Коммуна или агентство по градостроительству, выдавшее разрешение" },
  },
  "facture": {
    title: { en: "Invoice template", es: "Modelo de factura", it: "Modello di fattura", de: "Rechnungsvorlage", ru: "Шаблон счёта" },
    where: { en: "Issued to the client; a copy kept for the tax declaration", es: "Se entrega al cliente; se conserva una copia para la declaración fiscal", it: "Consegnata al cliente; una copia conservata per la dichiarazione fiscale", de: "Dem Kunden ausgestellt; eine Kopie für die Steuererklärung aufbewahrt", ru: "Выдаётся клиенту; копия хранится для налоговой декларации" },
  },
  "devis": {
    title: { en: "Quote template", es: "Modelo de presupuesto", it: "Modello di preventivo", de: "Angebotsvorlage", ru: "Шаблон коммерческого предложения" },
    where: { en: "Presented to the client for approval and signature", es: "Se presenta al cliente para su aprobación y firma", it: "Presentato al cliente per approvazione e firma", de: "Dem Kunden zur Zustimmung und Unterzeichnung vorzulegen", ru: "Предъявляется клиенту для согласования и подписи" },
  },
  "contrat-prestation": {
    title: { en: "Service provision contract", es: "Contrato de prestación de servicios", it: "Contratto di prestazione di servizi", de: "Dienstleistungsvertrag", ru: "Договор на оказание услуг" },
    where: { en: "Signed by both parties", es: "Firmado por ambas partes", it: "Firmato tra le due parti", de: "Von beiden Parteien unterzeichnet", ru: "Подписывается обеими сторонами" },
  },
  "recu-paiement": {
    title: { en: "Payment receipt", es: "Recibo de pago", it: "Ricevuta di pagamento", de: "Zahlungsquittung", ru: "Квитанция об оплате" },
    where: { en: "Kept by the payer and the beneficiary", es: "Lo conservan el pagador y el beneficiario", it: "Conservato dal pagatore e dal beneficiario", de: "Vom Zahler und dem Begünstigten aufbewahrt", ru: "Хранится у плательщика и получателя" },
  },
  "demande-casier": {
    title: { en: "Request for a criminal record extract", es: "Solicitud de certificado de antecedentes penales", it: "Richiesta di certificato del casellario giudiziale", de: "Antrag auf ein Führungszeugnis", ru: "Заявление на справку о судимости" },
    where: { en: "Registry of the court of first instance of the place of residence (abroad via the consulates)", es: "Secretaría del tribunal de primera instancia de la residencia (en el extranjero, a través de los consulados)", it: "Cancelleria del tribunale di prima istanza della residenza (all'estero tramite i consolati)", de: "Geschäftsstelle des erstinstanzlichen Gerichts des Wohnsitzes (im Ausland über die Konsulate)", ru: "Канцелярия суда первой инстанции по месту жительства (за рубежом — через консульства)" },
  },
  "plainte-parquet": {
    title: { en: "Complaint to the public prosecutor", es: "Denuncia ante la fiscalía", it: "Denuncia presso la procura", de: "Strafanzeige bei der Staatsanwaltschaft", ru: "Жалоба в прокуратуру" },
    where: { en: "King's prosecutor's office at the competent court of first instance", es: "Fiscalía del tribunal de primera instancia competente", it: "Procura del tribunale di prima istanza competente", de: "Staatsanwaltschaft des zuständigen erstinstanzlichen Gerichts", ru: "Прокуратура компетентного суда первой инстанции" },
  },
  "demande-copie-jugement": {
    title: { en: "Request for a copy of a judgment", es: "Solicitud de copia de sentencia", it: "Richiesta di copia di sentenza", de: "Antrag auf eine Urteilsabschrift", ru: "Заявление на копию судебного решения" },
    where: { en: "Registry of the court that issued the judgment", es: "Secretaría del tribunal que dictó la sentencia", it: "Cancelleria del tribunale che ha pronunciato la sentenza", de: "Geschäftsstelle des Gerichts, das das Urteil erlassen hat", ru: "Канцелярия суда, вынесшего решение" },
  },
  "ouverture-compte": {
    title: { en: "Account opening request", es: "Solicitud de apertura de cuenta", it: "Richiesta di apertura di conto", de: "Antrag auf Kontoeröffnung", ru: "Заявление на открытие счёта" },
    where: { en: "A bank or postal agency", es: "Agencia bancaria o postal", it: "Agenzia bancaria o postale", de: "Bank- oder Postfiliale", ru: "Банковское или почтовое отделение" },
  },
  "domiciliation-salaire": {
    title: { en: "Salary domiciliation request", es: "Solicitud de domiciliación del salario", it: "Richiesta di accredito dello stipendio", de: "Antrag auf Gehaltsüberweisung", ru: "Заявление на перевод зарплаты на счёт" },
    where: { en: "Submitted to the employer, who notifies the bank/postal service", es: "Se presenta al empleador, notificándose al banco o correo", it: "Presentata al datore di lavoro, con comunicazione a banca o posta", de: "An den Arbeitgeber zu richten; die Bank/Post wird benachrichtigt", ru: "Подается работодателю с уведомлением банка/почты" },
  },
  "immatriculation-cnss": {
    title: { en: "CNSS registration and employee declaration", es: "Afiliación a la CNSS y alta del empleado", it: "Iscrizione alla CNSS e dichiarazione del dipendente", de: "Anmeldung bei der CNSS und Anmeldung des Arbeitnehmers", ru: "Регистрация в CNSS и постановка работника на учёт" },
    where: { en: "Online or at the CNSS agency of the company", es: "En línea o en la agencia de la CNSS de la empresa", it: "Online o presso l'agenzia CNSS dell'impresa", de: "Online oder bei der CNSS-Agentur des Unternehmens", ru: "Онлайн или в агентстве CNSS по месту нахождения компании" },
  },
  "carte-nationale": {
    title: { en: "Biometric national ID card procedure", es: "Procedimiento del DNI biométrico", it: "Procedura della CIN biometrica", de: "Verfahren für den biometrischen Personalausweis", ru: "Процедура получения биометрического удостоверения личности" },
    where: { en: "Administrative annex or caïdat of the place of residence", es: "Anexo administrativo o caïdat de la residencia", it: "Ufficio amministrativo locale o caïdat della residenza", de: "Lokale Verwaltungsstelle oder Caïdat des Wohnsitzes", ru: "Местный административный орган или кайдат по месту жительства" },
  },
  "passeport-procedure": {
    title: { en: "Biometric passport procedure", es: "Procedimiento del pasaporte biométrico", it: "Procedura del passaporto biometrico", de: "Verfahren für den biometrischen Reisepass", ru: "Процедура получения биометрического паспорта" },
    where: { en: "Appointment via the official portal, then the passport delivery center", es: "Cita a través del portal oficial y luego el centro de entrega de pasaportes", it: "Appuntamento tramite il portale ufficiale, poi il centro di consegna dei passaporti", de: "Termin über das offizielle Portal, dann die Passausgabestelle", ru: "Запись через официальный портал, затем центр выдачи паспортов" },
  },
  "rsu-procedure": {
    title: { en: "Registration in the Unified Social Register", es: "Inscripción en el Registro Social Unificado", it: "Iscrizione al Registro Sociale Unificato", de: "Registrierung im Einheitlichen Sozialregister", ru: "Регистрация в Едином социальном реестре" },
    where: { en: "Online or at citizen service centers", es: "En línea o en los centros de servicios al ciudadano", it: "Online o presso i centri di servizi ai cittadini", de: "Online oder in den Bürgerservicezentren", ru: "Онлайн или в центрах обслуживания граждан" },
  },
  "amo-tadamon-procedure": {
    title: { en: "Registration with AMO Tadamon", es: "Inscripción en la AMO Tadamon", it: "Iscrizione all'AMO Tadamon", de: "Anmeldung bei AMO Tadamon", ru: "Регистрация в AMO Tadamon" },
    where: { en: "Online registration, then filing the request at the administrative annex or caïdat", es: "Inscripción en línea y luego presentación en el anexo administrativo o caïdat", it: "Iscrizione online e poi deposito presso l'ufficio amministrativo locale o il caïdat", de: "Online-Anmeldung, anschließend Einreichung bei der lokalen Verwaltungsstelle oder dem Caïdat", ru: "Регистрация онлайн, затем подача заявления в местный административный орган или кайдат" },
  },
  "minhaty-procedure": {
    title: { en: "Scholarship request via Minhaty", es: "Solicitud de beca a través de Minhaty", it: "Domanda di borsa tramite Minhaty", de: "Stipendienantrag über Minhaty", ru: "Заявление на стипендию через Minhaty" },
    where: { en: "Filed via the portal during the annually set period", es: "Presentación por el portal durante el período anual establecido", it: "Presentazione tramite il portale durante il periodo annuale dedicato", de: "Einreichung über das Portal während der jährlich festgelegten Frist", ru: "Подача через портал в ежегодно установленный период" },
  },
};
