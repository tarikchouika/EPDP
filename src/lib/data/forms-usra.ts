// Marriage & family forms — authorisations, birth, filiation,
// divorce agreements and family procedures. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsUsra: DocumentItem[] = [
  // ─── Mariage : autorisations et contrats ───
  {
    id: "usr-rukhsa-zawaj-askari",
    cat: "usra",
    title: T7(
      "مسطرة الإذن بتوثيق الزواج بالنسبة للعسكريين",
      "Procédure d'autorisation de mariage pour les militaires",
      "Marriage authorisation procedure for military personnel",
      "Procedimiento de autorización de matrimonio para militares",
      "Procedura di autorizzazione al matrimonio per il personale militare",
      "Verfahren zur Heiratserlaubnis für Militärangehörige",
      "Процедура разрешения на брак для военнослужащих"
    ),
    desc: D7(
      "مسطرة يخضع لها العسكريون ومن في حكمهم للحصول على إذن توثيق الزواج من القيادة.",
      "Procédure imposée aux militaires pour obtenir l'autorisation de mariage auprès de leur hiérarchie.",
      "Procedure required of military personnel to obtain marriage authorisation from their command.",
      "Procedimiento exigido a los militares para obtener la autorización de su mando.",
      "Procedura richiesta al personale militare per l'autorizzazione dal comando.",
      "Verfahren, das von Militärangehörigen die Erlaubnis der Führung erfordert.",
      "Процедура, по которой военнослужащие получают разрешение от командования."
    ),
    where: W7(
      "قيادة الوحدة أو مصلحة شؤون الأفراد بالقوات المسلحة الملكية",
      "Commandement de l'unité ou service des ressources humaines des Forces Royales",
      "Unit command or HR service of the Royal Armed Forces",
      "Mando de la unidad o servicio de recursos humanos de las Fuerzas Reales",
      "Comando dell'unità o servizio del personale delle Forze Reali",
      "Kommandostelle oder Personalabteilung der Königlich Marokkanischen Streitkräfte",
      "Комование части или кадровая служба Королевских вооружённых сил"
    ),
    keywords: ["زواج عسكري", "mariage militaire", "military marriage", "إذن توثيق الزواج", "عسكريين"],
    popular: true,
  },
  {
    id: "usr-mariage-mixte",
    cat: "usra",
    title: T7(
      "مسطرة الإذن بالزواج المختلط",
      "Procédure d'autorisation de mariage mixte",
      "Mixed marriage authorisation procedure",
      "Procedimiento de autorización de matrimonio mixto",
      "Procedura di autorizzazione al matrimonio misto",
      "Verfahren zur Genehmigung einer gemischten Ehe",
      "Процедура разрешения на смешанный брак"
    ),
    desc: D7(
      "مسطرة تمكن المغربية أو المغربي الراغب في الزواج بشريك أجنبي من الحصول على إذن قاضي الأسرة المكلف بالزواج.",
      "Procédure permettant à un ressortissant marocain d'épouser un partenaire étranger après autorisation du juge de la famille chargé du mariage.",
      "Procedure allowing a Moroccan to marry a foreign partner after authorisation by the family judge in charge of marriage.",
      "Procedimiento que permite a un marroquí casarse con una pareja extranjera tras la autorización del juez de familia encargado del matrimonio.",
      "Procedura che consente a un marocchino di sposare un partner straniero previa autorizzazione del giudice della famiglia delegato al matrimonio.",
      "Verfahren, das einem Marokkaner die Heirat mit einem ausländischen Partner nach Genehmigung des für Eheschließungen zuständigen Familienrichters erlaubt.",
      "Процедура, позволяющая марокканцу вступить в брак с иностранцем после разрешения семейного судьи, ведающего браками."
    ),
    where: W7(
      "قسم قضاء الأسرة بالمحكمة الابتدائية لمحل إبرام عقد الزواج",
      "Section de la famille au tribunal de première instance du lieu de célébration du mariage",
      "Family affairs section of the court of first instance where the marriage will be celebrated",
      "Sección de familia del tribunal de primera instancia del lugar de celebración del matrimonio",
      "Sezione famiglia del tribunale di primo grado del luogo di celebrazione del matrimonio",
      "Familiensektion am Gericht erster Instanz am Ort der Eheschließung",
      "Секция по семейным делам суда первой инстанции по месту заключения брака"
    ),
    keywords: ["زواج مختلط", "mariage mixte", "mixed marriage", "زواج أجنبي", "إذن قاضي الأسرة"],
  },
  {
    id: "usr-mariage-mineur",
    cat: "usra",
    title: T7(
      "مسطرة الإذن بتوثيق الزواج للقاصر",
      "Procédure d'autorisation de mariage du mineur",
      "Minor marriage authorisation procedure",
      "Procedimiento de autorización de matrimonio de menores",
      "Procedura di autorizzazione al matrimonio del minore",
      "Verfahren zur Heiratserlaubnis für Minderjährige",
      "Процедура разрешения на брак несовершеннолетнего"
    ),
    desc: D7(
      "مسطرة قضائية تتيح للقاصر الزواج قبل بلوغ سن الأهلية بإذن معلل من قاضي الأسرة بعد بحث اجتماعي.",
      "Procédure judiciaire permettant le mariage du mineur avant l'âge de capacité sur autorisation motivée du juge après enquête sociale.",
      "Judicial procedure allowing a minor to marry below the age of capacity under a reasoned authorisation of the family judge.",
      "Procedimiento judicial que permite al menor casarse antes de la edad de capacidad con autorización razonada del juez de familia.",
      "Procedura giudiziaria che consente al minore di sposarsi prima dell'età della capacità su autorizzazione motivata del giudice della famiglia.",
      "Gerichtsverfahren, das einem Minderjährigen die Heirat vor Erreichen der Fähigkeit aufgrund einer begründeten Entscheidung des Familienrichters erlaubt.",
      "Судебная процедура, позволяющая несовершеннолетнему вступить в брак до достижения брачного возраста по мотивированному разрешению семейного судьи."
    ),
    where: W7(
      "القاضي المكلف بالزواج بقسم قضاء الأسرة بالمحكمة الابتدائية",
      "Juge chargé du mariage auprès de la section de la famille du tribunal de première instance",
      "Judge in charge of marriage at the family section of the court of first instance",
      "Juez encargado del matrimonio en la sección de familia del tribunal de primera instancia",
      "Giudice delegato al matrimonio presso la sezione famiglia del tribunale di primo grado",
      "Richter für Eheschließungen bei der Familiensektion des Gerichts erster Instanz",
      "Судья по бракам при семейной секции суда первой инстанции"
    ),
    keywords: ["زواج القاصر", "mariage mineur", "minor marriage", "سن الأهلية", "إذن قضائي"],
  },
  {
    id: "usr-authentification-mariage-adouls",
    cat: "usra",
    title: T7(
      "مسطرة توثيق عقد الزواج لدى العدلين",
      "Procédure d'authentification de l'acte de mariage devant les adouls",
      "Marriage deed authentication procedure before adouls",
      "Procedimiento de autenticación del acta de matrimonio ante los adouls",
      "Procedura di autenticazione dell'atto di matrimonio dinanzi agli adouls",
      "Verfahren zur Beurkundung der Eheurkunde vor den Adouls",
      "Процедура удостоверения брачного акта перед адулами"
    ),
    desc: D7(
      "مراحل إبرام عقد الزواج لدى العدلين من إعداد الملف إلى تحرير العقد وتسجيله بسجلات الحالة المدنية.",
      "Étapes de conclusion de l'acte de mariage devant les adouls, de la constitution du dossier à l'inscription à l'état civil.",
      "Steps for concluding the marriage deed before adouls, from assembling the file to registering the deed with the civil registry.",
      "Pasos para formalizar el acta de matrimonio ante los adouls, desde la preparación del expediente hasta su inscripción en el registro civil.",
      "Passaggi per la conclusione dell'atto di matrimonio davanti agli adouls, dalla preparazione del fascicolo alla trascrizione nello stato civile.",
      "Schritte zum Abschluss der Eheurkunde vor den Adouls, von der Zusammenstellung der Unterlagen bis zur Eintragung im Standesamt.",
      "Этапы заключения брачного акта перед адулами: от подготовки досье до регистрации акта в книге гражданского состояния."
    ),
    where: W7(
      "العدلان التابعان لقسم قضاء الأسرة بالمحكمة الابتدائية لمحل السكنى",
      "Adouls rattachés à la section de la famille du tribunal de première instance du lieu de résidence",
      "Adouls attached to the family section of the court of first instance of the place of residence",
      "Adouls adscritos a la sección de familia del tribunal de primera instancia del lugar de residencia",
      "Adouls addetti alla sezione famiglia del tribunale di primo grado del luogo di residenza",
      "Adouls bei der Familiensektion des Gerichts erster Instanz des Wohnortes",
      "Адулы при семейной секции суда первой инстанции по месту жительства"
    ),
    keywords: ["توثيق الزواج", "adouls", "عقد الزواج", "authentification mariage", "marriage deed"],
  },
  {
    id: "usr-mariage-procuration",
    cat: "usra",
    title: T7(
      "مسطرة عقد الزواج بالتوكيل",
      "Procédure de mariage par procuration",
      "Marriage by proxy procedure",
      "Procedimiento de matrimonio por poder",
      "Procedura di matrimonio per procura",
      "Verfahren der Eheschließung durch Vollmacht",
      "Процедура брака по доверенности"
    ),
    desc: D7(
      "مسطرة تتيح للراغب في الزواج توكيل غيره لإبرام العقد باسمه بمقتضى وكالة ثابتة التاريخ وفق مدونة الأسرة.",
      "Procédure permettant au futur époux de mandater un tiers pour contracter le mariage en son nom par procuration datée.",
      "Procedure allowing a spouse-to-be to mandate a third party to conclude the marriage in their name by dated proxy.",
      "Procedimiento que permite al futuro cónyuge facultar a un tercero para contraer matrimonio en su nombre mediante poder con fecha cierta.",
      "Procedura che consente al futuro coniuge di delegare un terzo a contrarre il matrimonio in suo nome mediante procura con data certa.",
      "Verfahren, das einem künftigen Ehegatten erlaubt, einen Dritten mittels einer Vollmacht mit feststehendem Datum im eigenen Namen die Ehe schließen zu lassen.",
      "Процедура, позволяющая будущему супругу поручить третьему лицу заключить брак от его имени по доверенности с фиксированной датой."
    ),
    where: W7(
      "تحرر الوكالة لدى السلطات القنصلية المغربية بالخارج أو أمام العدلين بالمغرب قبل إبرام العقد",
      "La procuration est établie auprès des autorités consulaires marocaines à l'étranger ou devant les adouls au Maroc avant la célébration",
      "The power of attorney is drawn up at Moroccan consular authorities abroad or before adouls in Morocco prior to the ceremony",
      "El poder se otorga ante las autoridades consulares marroquíes en el extranjero o ante los adouls en Marruecos antes de la celebración",
      "La procura viene redatta presso le autorità consolari marocchine all'estero o davanti agli adouls in Marocco prima della celebrazione",
      "Die Vollmacht wird bei marokkanischen Konsularbehörden im Ausland oder vor Adouls in Marokko vor der Eheschließung errichtet",
      "Доверенность оформляется в марокканских консульских учреждениях за рубежом или перед адулами в Марокко до заключения брака"
    ),
    keywords: ["الزواج بالتوكيل", "mariage par procuration", "marriage by proxy", "وكالة الزواج", "مدونة الأسرة"],
  },
  {
    id: "usr-transcription-mariage-etranger",
    cat: "usra",
    title: T7(
      "مسطرة تضمين عقد الزواج المبرم بالخارج في سجلات الحالة المدنية",
      "Procédure de transcription du mariage célébré à l'étranger",
      "Transcription procedure for a marriage celebrated abroad",
      "Procedimiento de transcripción del matrimonio celebrado en el extranjero",
      "Procedura di trascrizione del matrimonio celebrato all'estero",
      "Verfahren zur Eintragung einer im Ausland geschlossenen Ehe",
      "Процедура внесения брака, заключённого за границей, в реестры гражданского состояния"
    ),
    desc: D7(
      "مسطرة تضمين عقد الزواج المبرم أمام سلطات أجنبية على هامش سجلات الحالة المدنية المغربية عبر القنصلية أو النيابة العامة.",
      "Procédure d'inscription en marge des registres marocains du mariage contracté devant des autorités étrangères, via le consulat ou le parquet.",
      "Procedure for annotating a marriage contracted before foreign authorities in the margin of Moroccan civil registers, via the consulate or the prosecution.",
      "Procedimiento de inscripción al margen de los registros marroquíes del matrimonio contraído ante autoridades extranjeras, a través del consulado o el ministerio fiscal.",
      "Procedura di annotazione a margine dei registri marocchini del matrimonio contratto davanti ad autorità straniere, tramite il consolato o il pubblico ministero.",
      "Verfahren zur Randvermerkung einer vor ausländischen Behörden geschlossenen Ehe in den marokkanischen Registern, über das Konsulat oder die Staatsanwaltschaft.",
      "Процедура внесения записи о браке, заключённом перед иностранными органами, на поля марокканских реестров через консульство или прокуратуру."
    ),
    where: W7(
      "القنصلية المغربية لمحل إبرام الزواج أو النيابة العامة بالمحكمة الابتدائية لمحل التسجيل",
      "Consulat marocain du lieu de célébration, ou parquet du tribunal de première instance du lieu d'immatriculation",
      "Moroccan consulate of the place of celebration, or prosecution office of the court of first instance of the place of registration",
      "Consulado marroquí del lugar de celebración, o fiscalía del tribunal de primera instancia del lugar de registro",
      "Consolato marocchino del luogo di celebrazione, oppure pubblico ministero del tribunale di primo grado del luogo di registrazione",
      "Marokkanisches Konsulat am Ort der Eheschließung oder Staatsanwaltschaft am Gericht erster Instanz des Eintragungsortes",
      "Марокканское консульство по месту заключения брака или прокуратура суда первой инстанции по месту регистрации"
    ),
    keywords: ["تضمين الزواج", "transcription mariage", "marriage transcription", "زواج بالخارج", "MRE"],
  },
  // ─── Naissance et filiation ───
  {
    id: "usr-enregistrement-enfant-abandonne",
    cat: "usra",
    title: T7(
      "طلب تسجيل مولود مهمل بسجلات الحالة المدنية",
      "Demande d'enregistrement d'un enfant abandonné à l'état civil",
      "Application to register a foundling in the civil registry",
      "Solicitud de inscripción de un expósito en el registro civil",
      "Domanda di iscrizione di un neonato abbandonato nello stato civile",
      "Antrag auf Eintragung eines Findelkindes im Standesregister",
      "Заявление о регистрации найдёныша в книге гражданского состояния"
    ),
    desc: D7(
      "طلب لتسجيل مولود مهمل بسجل الولادات بناء على محضر المعاينة المنجز من طرف السلطة المحلية أو النيابة العامة.",
      "Demande d'inscription d'un nouveau-né abandonné au registre des naissances sur la base du procès-verbal de l'autorité locale ou du parquet.",
      "Application to enter an abandoned newborn in the birth register based on the report drawn up by the local authority or the prosecution.",
      "Solicitud de inscripción de un recién nacido abandonado en el registro de nacimientos con base en el acta de la autoridad local o el ministerio fiscal.",
      "Domanda di iscrizione di un neonato abbandonato nel registro delle nascite sulla base del verbale dell'autorità locale o del pubblico ministero.",
      "Antrag auf Eintragung eines ausgesetzten Neugeborenen in das Geburtenregister anhand des Protokolls der örtlichen Behörde oder Staatsanwaltschaft.",
      "Заявление о внесении найденного новорождённого в книгу рождений на основании протокола местной власти или прокуратуры."
    ),
    where: W7(
      "ضابط الحالة المدنية بالجماعة الترابية لمكان العثور على المولود",
      "Officier de l'état civil de la commune territoriale du lieu de découverte de l'enfant",
      "Civil status officer of the commune where the child was found",
      "Oficial del registro civil de la comuna del lugar donde se encontró al niño",
      "Ufficiale di stato civile del comune del luogo del ritrovamento del bambino",
      "Standesbeamter der Gebietskörperschaft des Fundortes des Kindes",
      "Офицер гражданского состояния коммуны по месту обнаружения ребёнка"
    ),
    keywords: ["مولود مهمل", "enfant abandonné", "foundling", "الحالة المدنية", "تسجيل الولادة"],
  },
  {
    id: "usr-ajout-nom-mere",
    cat: "usra",
    title: T7(
      "طلب إضافة الاسم العائلي للأم في رسم ولادة الابن",
      "Demande d'ajout du nom de famille de la mère à l'acte de naissance de l'enfant",
      "Application to add the mother's family name to the child's birth certificate",
      "Solicitud de añadir el apellido de la madre al acta de nacimiento del hijo",
      "Domanda di aggiunta del cognome materno all'atto di nascita del figlio",
      "Antrag auf Ergänzung des Familiennamens der Mutter in der Geburtsurkunde des Kindes",
      "Заявление о добавлении фамилии матери в свидетельство о рождении ребёнка"
    ),
    desc: D7(
      "مقال يرمي إلى إدراج الاسم العائلي للأم برسم ولادة الابن قصد ضمان حقوقه الإدارية والاجتماعية.",
      "Requête visant l'insertion du nom de famille de la mère dans l'acte de naissance de l'enfant afin de garantir ses droits.",
      "Petition seeking insertion of the mother's family name into the child's birth certificate to secure administrative and social rights.",
      "Solicitud que persigue la inserción del apellido materno en el acta de nacimiento del hijo para garantizar sus derechos.",
      "Ricorso volto all'inserimento del cognome materno nell'atto di nascita del figlio al fine di garantirne i diritti.",
      "Antrag auf Einfügung des Familiennamens der Mutter in die Geburtsurkunde des Kindes zur Sicherung seiner Rechte.",
      "Ходатайство о внесении фамилии матери в свидетельство о рождении ребёнка для обеспечения его административных и социальных прав."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية لمحل التسجيل مع الإحالة على النيابة العامة",
      "Greffe du tribunal de première instance du lieu d'immatriculation, avec renvoi au parquet",
      "Registry of the court of first instance of the place of registration, with referral to the prosecution",
      "Secretaría del tribunal de primera instancia del lugar de registro, con remisión al ministerio fiscal",
      "Cancelleria del tribunale di primo grado del luogo di registrazione, con trasmissione al pubblico ministero",
      "Geschäftsstelle des Gerichts erster Instanz am Registrierungsort, mit Weiterleitung an die Staatsanwaltschaft",
      "Канцелярия суда первой инстанции по месту регистрации с направлением в прокуратуру"
    ),
    keywords: ["اسم الأم", "nom de la mère", "mother's name", "رسم الولادة", "acte de naissance", "الحالة المدنية"],
  },
  {
    id: "usr-lettres-latines",
    cat: "usra",
    title: T7(
      "طلب إضافة الاسمين بالحروف اللاتينية في رسم الحالة المدنية",
      "Demande d'ajout des prénom et nom en caractères latins à l'acte d'état civil",
      "Application to add first and last names in Latin characters to the civil status record",
      "Solicitud de añadir nombre y apellidos en caracteres latinos al acta de estado civil",
      "Domanda di aggiunta di nome e cognome in caratteri latini all'atto di stato civile",
      "Antrag auf Ergänzung von Vor- und Nachname in lateinischen Schriftzeichen",
      "Заявление о добавлении имени и фамилии латиницей в акт гражданского состояния"
    ),
    desc: D7(
      "طلب لتثبيت الاسم الشخصي والعائلي بالحروف اللاتينية على رسم الحالة المدنية تيسيرا لاستعماله بالخارج.",
      "Demande de fixation du prénom et du nom en caractères latins sur l'acte d'état civil pour faciliter l'usage à l'étranger.",
      "Application to record the first and family names in Latin characters on the civil status record to ease use abroad.",
      "Solicitud de consignación del nombre y apellido en caracteres latinos en el acta de estado civil para facilitar su uso en el extranjero.",
      "Domanda di registrazione di nome e cognome in caratteri latini sull'atto di stato civile per facilitarne l'uso all'estero.",
      "Antrag auf Festlegung von Vor- und Nachname in lateinischen Schriftzeichen im Standesamtsakt zur Erleichterung der Verwendung im Ausland.",
      "Заявление о фиксации имени и фамилии латиницей в акте гражданского состояния для удобства использования за границей."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة الترابية لمحل التسجيل أو القنصلية للمغاربة المقيمين بالخارج",
      "Service de l'état civil de la commune d'immatriculation, ou le consulat pour les Marocains résidant à l'étranger",
      "Civil status office of the commune of registration, or the consulate for Moroccans residing abroad",
      "Oficina del registro civil de la comuna de registro, o el consulado para los marroquíes residentes en el extranjero",
      "Ufficio di stato civile del comune di registrazione, oppure il consolato per i marocchini residenti all'estero",
      "Standesamt der Gebietskörperschaft des Registrierungsortes oder das Konsulat für im Ausland lebende Marokkaner",
      "Отдел гражданского состояния коммуны по месту регистрации или консульство для марокканцев за рубежом"
    ),
    keywords: ["الحروف اللاتينية", "caractères latins", "Latin characters", "الاسم اللاتيني", "état civil"],
  },
  {
    id: "usr-reconnaissance-paternite",
    cat: "usra",
    title: T7(
      "إقرار بالبنوة مدعم بشهادة القابلة",
      "Reconnaissance de paternité appuyée par une attestation de sage-femme",
      "Acknowledgement of paternity supported by a midwife's attestation",
      "Reconocimiento de paternidad respaldado por certificado de matrona",
      "Riconoscimento di paternità suffragato da attestazione della levatrice",
      "Vaterschaftsanerkennung gestützt auf eine Bescheinigung der Hebamme",
      "Признание отцовства при поддержке справки акушерки"
    ),
    desc: D7(
      "إقرار من الأب بالبنوة يرفق بشهادة القابلة التي شهدت الولادة لدعم ملف تسجيل المولود بالحالة المدنية.",
      "Déclaration du père reconnaissant l'enfant, accompagnée de l'attestation de la sage-femme ayant assisté l'accouchement, à l'appui de l'enregistrement.",
      "Father's declaration acknowledging paternity, accompanied by the midwife's attestation of the delivery, supporting the child's civil registration.",
      "Declaración del padre reconociendo al hijo, acompañada del certificado de la matrona que asistió el parto, en apoyo de la inscripción.",
      "Dichiarazione del padre che riconosce il figlio, corredata dall'attestazione della levatrice che ha assistito il parto, a sostegno dell'iscrizione.",
      "Erklärung des Vaters, das Kind anzuerkennen, versehen mit der Bescheinigung der bei der Geburt anwesenden Hebamme zur Stützung der Eintragung.",
      "Заявление отца о признании ребёнка с прилагаемой справкой акушерки, принимавшей роды, для регистрации новорождённого."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة الترابية لمحل الولادة مرفقا بالوثائق المطلوبة",
      "Service de l'état civil de la commune du lieu de naissance, accompagné des pièces requises",
      "Civil status office of the commune of the place of birth, together with the required documents",
      "Oficina del registro civil de la comuna del lugar de nacimiento, junto con los documentos exigidos",
      "Ufficio di stato civile del comune del luogo di nascita, unitamente ai documenti richiesti",
      "Standesamt der Gemeinde des Geburtsortes, zusammen mit den erforderlichen Unterlagen",
      "Отдел гражданского состояния коммуны по месту рождения вместе с требуемыми документами"
    ),
    keywords: ["إقرار بالبنوة", "reconnaissance paternité", "acknowledgement of paternity", "شهادة القابلة", "تسجيل المولود"],
  },
  {
    id: "usr-copies-actes-naissance",
    cat: "usra",
    title: T7(
      "طلب الحصول على نسخ من عقود الازدياد",
      "Demande de copies d'actes de naissance",
      "Application for copies of birth certificates",
      "Solicitud de copias de actas de nacimiento",
      "Domanda di copie di atti di nascita",
      "Antrag auf Kopien von Geburtsurkunden",
      "Заявление о выдаче копий свидетельств о рождении"
    ),
    desc: D7(
      "طلب موجه لضابط الحالة المدنية لاستخراج نسخ من عقود ازدياد أبناء الأسرة للاستعمال الإداري والدراسي.",
      "Demande adressée à l'officier de l'état civil pour obtenir des copies des actes de naissance des enfants à des fins administratives et scolaires.",
      "Application addressed to the civil status officer to obtain copies of the family children's birth certificates for administrative and school purposes.",
      "Solicitud dirigida al oficial del registro civil para obtener copias de las actas de nacimiento de los hijos con fines administrativos y escolares.",
      "Domanda indirizzata all'ufficiale di stato civile per ottenere copie degli atti di nascita dei figli per scopi amministrativi e scolastici.",
      "Antrag an den Standesbeamten zur Erteilung von Kopien der Geburtsurkunden der Kinder für Verwaltungs- und Schulzwecke.",
      "Заявление на имя офицера гражданского состояния о выдаче копий свидетельств о рождении детей семьи для административных и учебных целей."
    ),
    where: W7(
      "ضابط الحالة المدنية بالجماعة الترابية لمحل ازدياد كل معني بالأمر",
      "Officier de l'état civil de la commune du lieu de naissance de chaque intéressé",
      "Civil status officer of the commune of each applicant's place of birth",
      "Oficial del registro civil de la comuna del lugar de nacimiento de cada interesado",
      "Ufficiale di stato civile del comune del luogo di nascita di ciascun interessato",
      "Standesbeamter der Gebietskörperschaft des Geburtsortes jeder betroffenen Person",
      "Офицер гражданского состояния коммуны по месту рождения каждого заявителя"
    ),
    keywords: ["عقود الازدياد", "actes de naissance", "birth certificates", "نسخ", "الحالة المدنية"],
  },
  {
    id: "usr-ajout-nom-pere",
    cat: "usra",
    title: T7(
      "مسطرة إضافة الاسم الشخصي للأب في رسم ولادة مجهول النسب",
      "Procédure d'ajout du prénom du père à l'acte de naissance d'un enfant de filiation inconnue",
      "Procedure to add the father's first name to the birth record of a child of unknown filiation",
      "Procedimiento de añadir el nombre de pila del padre al acta de nacimiento de un hijo de filiación desconocida",
      "Procedura di aggiunta del nome del padre all'atto di nascita di un bambino di filiazione sconosciuta",
      "Verfahren zur Ergänzung des Vornamens des Vaters im Geburtseintrag eines Kindes unbekannter Abstammung",
      "Процедура добавления имени отца в запись о рождении ребёнка с неизвестным происхождением"
    ),
    desc: D7(
      "مسطرة قضائية لإضافة الاسم الشخصي للأب إلى رسم ولادة طفل مجهول النسب بعد ثبوت النسب قانونا.",
      "Procédure judiciaire d'ajout du prénom du père à l'acte de naissance d'un enfant de filiation inconnue après établissement légal du lien.",
      "Judicial procedure adding the father's first name to the birth record of a child of unknown paternity after legal proof.",
      "Procedimiento judicial de añadir el nombre de pila del padre al acta de nacimiento del menor tras acreditarse legalmente la filiación.",
      "Procedura giudiziaria di aggiunta del nome del padre all'atto di nascita del minore dopo l'accertamento legale della filiazione.",
      "Gerichtsverfahren zur Ergänzung des Vornamens des Vaters im Geburtseintrag nach gerichtlich festgestellter Abstammung.",
      "Судебная процедура добавления имени отца в запись о рождении ребёнка после законного установления происхождения."
    ),
    where: W7(
      "المحكمة الابتدائية المختصة عبر مقال تودع نسخته لدى النيابة العامة",
      "Tribunal de première instance compétent, par requête dont copie est déposée au parquet",
      "Competent court of first instance, by a petition of which a copy is filed with the prosecution",
      "Tribunal de primera instancia competente, mediante solicitud de la que se deposita copia ante el ministerio fiscal",
      "Tribunale di primo grado competente, mediante ricorso di cui una copia è depositata presso il pubblico ministero",
      "Zuständiges Gericht erster Instanz, durch Antrag, dessen Kopie bei der Staatsanwaltschaft eingereicht wird",
      "Компетентный суд первой инстанции путём подачи ходатайства, копия которого направляется в прокуратуру"
    ),
    keywords: ["مجهول النسب", "filiation", "اسم الأب", "acte de naissance", "النسب", "filiation inconnue"],
  },
  {
    id: "usr-attestation-accouchement",
    cat: "usra",
    title: T7(
      "طلب شهادة توليد من القابلة",
      "Demande d'attestation d'accouchement délivrée par la sage-femme",
      "Application for a midwife's delivery certificate",
      "Solicitud de certificado de parto emitido por la matrona",
      "Domanda di attestazione di parto rilasciata dalla levatrice",
      "Antrag auf einen Entbindungsnachweis der Hebamme",
      "Заявление о выдаче справки о родах от акушерки"
    ),
    desc: D7(
      "طلب شهادة توليد من القابلة التي أشرفت على الولادة لإدراجها ضمن ملف التصريح بالمولود لدى الصندوق الوطني للضمان الاجتماعي.",
      "Demande d'attestation d'accouchement auprès de la sage-femme ayant supervisé la naissance, à joindre au dossier de déclaration à la CNSS.",
      "Application to the midwife who attended the delivery for a certificate to be included in the CNSS birth declaration file.",
      "Solicitud a la matrona que asistió el parto de un certificado que se adjunta al expediente de declaración de nacimiento ante la CNSS.",
      "Domanda alla levatrice che ha assistito il parto di un'attestazione da allegare al fascicolo di dichiarazione di nascita presso la CNSS.",
      "Antrag bei der die Entbindung begleitenden Hebamme um eine Bescheinigung für die Geburtsmeldeakte bei der CNSS.",
      "Заявление акушерке, принимавшей роды, о выдаче справки для приложения к досье объявления о рождении в CNSS."
    ),
    where: W7(
      "القابلة المعتمدة بالمركز الصحي أو المستشفى العمومي لمحل الولادة",
      "Sage-femme agréée du centre de santé ou de l'hôpital public du lieu d'accouchement",
      "Accredited midwife at the health centre or public hospital of the place of delivery",
      "Matrona autorizada del centro de salud o del hospital público del lugar del parto",
      "Levatrice autorizzata del centro sanitario o dell'ospedale pubblico del luogo del parto",
      "Zugelassene Hebamme im Gesundheitszentrum oder öffentlichen Krankenhaus des Entbindungsortes",
      "Аттестованная акушерка медцентра или государственной больницы по месту родов"
    ),
    keywords: ["شهادة توليد", "attestation d'accouchement", "delivery certificate", "CNSS", "القابلة"],
  },
  {
    id: "usr-certificat-negatif-etat-civil",
    cat: "usra",
    title: T7(
      "طلب شهادة سلبية من سجلات الحالة المدنية",
      "Demande de certificat négatif d'état civil",
      "Application for a negative certificate from the civil registry",
      "Solicitud de certificado negativo del registro civil",
      "Domanda di certificato negativo di stato civile",
      "Antrag auf eine Negativbescheinigung des Standesamts",
      "Заявление об отрицательной справке из органов гражданского состояния"
    ),
    desc: D7(
      "طلب شهادة تثبت عدم تسجيل ازدياد المعني بالأمر بسجلات الحالة المدنية، وتقدم لدعم ملفات التسجيل المتأخر.",
      "Demande de certificat attestant l'absence d'inscription de naissance dans les registres d'état civil, à l'appui des procédures d'enregistrement tardif.",
      "Application for a certificate attesting that the applicant's birth is not recorded in the civil registers, supporting late registration proceedings.",
      "Solicitud de un certificado que acredita la ausencia de inscripción de nacimiento en los registros civiles, en apoyo a la inscripción tardía.",
      "Domanda di un certificato che attesti la mancata iscrizione della nascita nei registri di stato civile, a sostegno delle registrazioni tardive.",
      "Antrag auf eine Bescheinigung, dass die Geburt in den Standesregistern nicht eingetragen ist, zur Stützung verspäteter Registrierungsverfahren.",
      "Заявление о выдаче справки об отсутствии записи о рождении заявителя в реестрах гражданского состояния для процедур поздней регистрации."
    ),
    where: W7(
      "ضابط الحالة المدنية بالجماعات الترابية المرتبط بها محل الازدياد المفترض",
      "Officier de l'état civil des communes concernées par le lieu de naissance présumé",
      "Civil status officer of the communes concerned by the presumed place of birth",
      "Oficial del registro civil de las comunas concernidas por el lugar de nacimiento presumible",
      "Ufficiale di stato civile dei comuni interessati dal luogo di nascita presunto",
      "Standesbeamter der für den vermuteten Geburtsort zuständigen Gebietskörperschaften",
      "Офицер гражданского состояния коммун, связанных с предполагаемым местом рождения"
    ),
    keywords: ["شهادة سلبية", "certificat négatif", "negative certificate", "عدم التسجيل", "التسجيل المتأخر"],
  },
  // ─── Divorce et séparation ───
  {
    id: "usr-accord-divorce",
    cat: "usra",
    title: T7(
      "نص الاتفاق على الطلاق",
      "Texte d'accord de divorce",
      "Divorce agreement text",
      "Texto de acuerdo de divorcio",
      "Testo di accordo di divorzio",
      "Scheidungsvereinbarung",
      "Текст соглашения о разводе"
    ),
    desc: D7(
      "وثيقة يحدد فيها الزوجان شروط الطلاق الاتفاقي من تعويض وحضانة وتنظيم حقوق الطرفين قبل عرضها على المحكمة.",
      "Document dans lequel les époux fixent les conditions du divorce par consentement mutuel, indemnité, garde et droits de chaque partie.",
      "Document in which the spouses set the terms of a consensual divorce — compensation, custody and each party's rights — before court approval.",
      "Documento en el que los cónyuges fijan las condiciones del divorcio de mutuo acuerdo, indemnización, guarda y derechos de cada parte.",
      "Documento in cui i coniugi stabiliscono le condizioni del divorzio consensuale, indennizzo, affidamento e diritti di ciascuna parte.",
      "Dokument, in dem die Ehegatten die Bedingungen einer einvernehmlichen Scheidung — Entschädigung, Sorgerecht und Rechte beider Seiten — festlegen.",
      "Документ, в котором супруги определяют условия развода по обоюдному согласию — компенсацию, опеку и права каждой стороны."
    ),
    where: W7(
      "قسم قضاء الأسرة بالمحكمة الابتدائية مع ملف الطلاق الاتفاقي",
      "Section de la famille du tribunal de première instance, avec le dossier de divorce par consentement mutuel",
      "Family section of the court of first instance, together with the consensual divorce file",
      "Sección de familia del tribunal de primera instancia, junto con el expediente de divorcio de mutuo acuerdo",
      "Sezione famiglia del tribunale di primo grado, unitamente al fascicolo di divorzio consensuale",
      "Familiensektion des Gerichts erster Instanz, zusammen mit der Akte der einvernehmlichen Scheidung",
      "Секция по семейным делам суда первой инстанции вместе с делом о разводе по согласию"
    ),
    keywords: ["الطلاق الاتفاقي", "divorce consentement mutuel", "consensual divorce", "اتفاق الطلاق", "تعويض"],
  },
  {
    id: "usr-garde-enfant",
    cat: "usra",
    title: T7(
      "طلب الحضانة",
      "Demande de garde de l'enfant",
      "Child custody application",
      "Solicitud de guarda y custodia",
      "Domanda di affidamento del minore",
      "Antrag auf Sorgerecht",
      "Заявление об опеке над ребёнком"
    ),
    desc: D7(
      "طلب يقدمه أحد الزوجين بعد الطلاق قصد الحصول على حضانة الأبناء مع تحديد واجبات الحاضن وسكنى المحضون.",
      "Demande présentée par l'un des époux après le divorce afin d'obtenir la garde des enfants et d'en définir les obligations.",
      "Application filed by one spouse after divorce to obtain custody of the children, defining the custodian's duties and the child's housing.",
      "Solicitud presentada por uno de los cónyuges tras el divorcio para obtener la guarda de los hijos y definir sus obligaciones.",
      "Domanda presentata da uno dei coniugi dopo il divorzio per ottenere l'affidamento dei figli e definirne gli obblighi.",
      "Antrag eines Ehegatten nach der Scheidung auf Übernahme des Sorgerechts für die Kinder, mit Festlegung der Pflichten.",
      "Заявление одного из супругов после развода о получении опеки над детьми с определением обязанностей опекуна."
    ),
    where: W7(
      "قاضي الأسرة بقسم قضاء الأسرة بالمحكمة الابتدائية لمحل إقامة المحضون",
      "Juge de la famille auprès de la section de la famille du tribunal de première instance du lieu de résidence de l'enfant",
      "Family judge at the family section of the court of first instance of the child's place of residence",
      "Juez de familia de la sección de familia del tribunal de primera instancia del lugar de residencia del menor",
      "Giudice della famiglia presso la sezione famiglia del tribunale di primo grado del luogo di residenza del minore",
      "Familienrichter bei der Familiensektion des Gerichts erster Instanz am Wohnort des Kindes",
      "Семейный судья при семейной секции суда первой инстанции по месту жительства ребёнка"
    ),
    keywords: ["الحضانة", "garde de l'enfant", "child custody", "الحاضن", "المحضون"],
  },
  {
    id: "usr-droit-visite",
    cat: "usra",
    title: T7(
      "طلب صلة الرحم",
      "Demande de droit de visite de l'enfant",
      "Application for visitation rights",
      "Solicitud de derecho de visita",
      "Domanda di diritto di visita",
      "Antrag auf Umgangsrecht",
      "Заявление о праве на свидания"
    ),
    desc: D7(
      "طلب يقدمه الأب أو الأم غير الحاضن لترتيب حق الزيارة والاتصال بالمحضون وفق جدول يحدده القاضي.",
      "Demande du parent non gardien pour organiser le droit de visite avec l'enfant selon un calendrier fixé par le juge.",
      "Application by the non-custodial parent to arrange visitation and contact with the child under a schedule set by the judge.",
      "Solicitud del progenitor no custodio para organizar el derecho de visita con el menor según un calendario fijado por el juez.",
      "Domanda del genitore non affidatario per organizzare il diritto di visita con il minore secondo un calendario fissato dal giudice.",
      "Antrag des nicht sorgeberechtigten Elternteils auf Regelung des Umgangs nach einem vom Richter festgelegten Plan.",
      "Заявление родителя, не обладающего опекой, об организации права на свидания с ребёнком по графику, установленному судьёй."
    ),
    where: W7(
      "قسم قضاء الأسرة بالمحكمة الابتدائية لمحل إقامة الحاضن",
      "Section de la famille du tribunal de première instance du lieu de résidence du gardien",
      "Family section of the court of first instance of the custodian's place of residence",
      "Sección de familia del tribunal de primera instancia del lugar de residencia del guardador",
      "Sezione famiglia del tribunale di primo grado del luogo di residenza dell'affidatario",
      "Familiensektion des Gerichts erster Instanz am Wohnort des Sorgeberechtigten",
      "Секция по семейным делам суда первой инстанции по месту жительства опекуна"
    ),
    keywords: ["صلة الرحم", "droit de visite", "visitation rights", "زيارة المحضون", "الحضانة"],
  },
  {
    id: "usr-autorisation-parent-unique",
    cat: "usra",
    title: T7(
      "إذن أحد الوالدين بسفر القاصر عند تعذر حضور الآخر",
      "Autorisation de voyage du mineur émanant d'un seul parent",
      "Minor's travel authorisation from one parent only",
      "Autorización de viaje del menor emitida por un solo progenitor",
      "Autorizzazione al viaggio del minore rilasciata da un solo genitore",
      "Reiseerlaubnis für Minderjährige von einem Elternteil allein",
      "Разрешение на выезд несовершеннолетнего от одного родителя"
    ),
    desc: D7(
      "إذن يمنحه أحد الوالدين عند غياب الآخر أو وفاته أو تعذر حضوره، ويتطلب غالبا مصادقة السلطات المختصة.",
      "Autorisation délivrée par un seul parent en cas d'absence, de décès ou d'impossibilité de l'autre, nécessitant une légalisation administrative.",
      "Authorisation given by one parent when the other is absent, deceased or unavailable, generally requiring legalisation by the competent authorities.",
      "Autorización otorgada por un solo progenitor cuando el otro está ausente, fallecido o no disponible, y que suele requerir legalización.",
      "Autorizzazione rilasciata da un solo genitore quando l'altro è assente, defunto o non disponibile, di norma soggetta a legalizzazione.",
      "Erlaubnis eines Elternteils, wenn der andere abwesend, verstorben oder nicht erreichbar ist, in der Regel mit amtlicher Beglaubigung.",
      "Разрешение, выдаваемое одним из родителей, когда другой отсутствует, умер или недоступен; обычно требует удостоверения компетентных органов."
    ),
    where: W7(
      "القسم القضائي بالمحكمة الابتدائية أو القيادة الترابية لمقر سكنى المانح للتصديق",
      "Section judiciaire du tribunal de première instance, ou caïdat du domicile du signataire, pour légalisation",
      "Judicial section of the court of first instance, or the caïdat of the signatory's domicile, for legalisation",
      "Sección judicial del tribunal de primera instancia, o caïdat del domicilio del firmante, para su legalización",
      "Sezione giudiziaria del tribunale di primo grado, o caïdat del domicilio del firmatario, per la legalizzazione",
      "Gerichtsabteilung des Gerichts erster Instanz oder Caïdat des Wohnsitzes des Unterzeichners zur Beglaubigung",
      "Судебная секция суда первой инстанции или каидат по месту жительства подписанта для заверения"
    ),
    keywords: ["إذن سفر", "autorisation de voyage", "travel consent", "قاصر", "الأم وحدها"],
  },
  {
    id: "usr-acte-divorce-adouls",
    cat: "usra",
    title: T7(
      "مسطرة الإشهاد على الطلاق لدى العدلين",
      "Procédure d'établissement de l'acte de divorce par les adouls",
      "Procedure for drawing up the divorce deed before adouls",
      "Procedimiento de redacción del acta de divorcio ante los adouls",
      "Procedura di redazione dell'atto di divorzio dinanzi agli adouls",
      "Verfahren zur Beurkundung der Scheidung vor den Adouls",
      "Процедура составления разводного акта перед адулами"
    ),
    desc: D7(
      "مسطرة يحرر فيها العدلان وثيقة الإشهاد على الطلاق بعد استيفاء الحكم القضائي قصد تضمين الطلاق بالحالة المدنية.",
      "Procédure au cours de laquelle les adouls rédigent l'acte de divorce après production du jugement, en vue de la mention à l'état civil.",
      "Procedure whereby adouls draw up the divorce deed after the court judgment, enabling its recording with the civil registry.",
      "Procedimiento en el que los adouls redactan el acta de divorcio tras la sentencia, a fin de inscribir el divorcio en el registro civil.",
      "Procedura con cui gli adouls redigono l'atto di divorzio dopo la sentenza, ai fini dell'annotazione nello stato civile.",
      "Verfahren, bei dem die Adouls nach dem Urteil die Scheidungsurkunde errichten, damit die Scheidung im Standesamt vermerkt wird.",
      "Процедура, при которой адулы составляют разводный акт после судебного решения для внесения записи о разводе в ЗАГС."
    ),
    where: W7(
      "العدلان التابعان لقسم قضاء الأسرة بالمحكمة الابتدائية التي أصدرت الحكم",
      "Adouls rattachés à la section de la famille du tribunal de première instance ayant rendu le jugement",
      "Adouls attached to the family section of the court of first instance that issued the judgment",
      "Adouls adscritos a la sección de familia del tribunal de primera instancia que dictó la sentencia",
      "Adouls addetti alla sezione famiglia del tribunale di primo grado che ha emesso la sentenza",
      "Adouls bei der Familiensektion des Gerichts erster Instanz, das das Urteil erlassen hat",
      "Адулы при семейной секции суда первой инстанции, вынесшего решение"
    ),
    keywords: ["الإشهاد على الطلاق", "acte de divorce", "divorce deed", "العدلان", "توثيق الطلاق"],
  },
  {
    id: "usr-transcription-divorce-etranger",
    cat: "usra",
    title: T7(
      "مسطرة تضمين عقد الطلاق الصادر بالخارج في سجلات الحالة المدنية",
      "Procédure de transcription du divorce prononcé à l'étranger",
      "Transcription procedure for a divorce pronounced abroad",
      "Procedimiento de transcripción del divorcio pronunciado en el extranjero",
      "Procedura di trascrizione del divorzio pronunciato all'estero",
      "Verfahren zur Eintragung einer im Ausland ausgesprochenen Scheidung",
      "Процедура внесения развода, состоявшегося за рубежом, в реестры гражданского состояния"
    ),
    desc: D7(
      "مسطرة تضمين حكم الطلاق الصادر عن محكمة أجنبية بعد تذييله بالصيغة التنفيذية أمام المحاكم المغربية.",
      "Procédure de transcription du jugement de divorce rendu à l'étranger après son exequatur devant les juridictions marocaines.",
      "Procedure for transcribing a divorce judgment rendered by a foreign court after exequatur before the Moroccan courts.",
      "Procedimiento de transcripción de la sentencia de divorcio dictada en el extranjero tras su exequátur ante los tribunales marroquíes.",
      "Procedura di trascrizione della sentenza di divorzio emessa all'estero dopo il delibamento dinanzi ai tribunali marocchini.",
      "Verfahren zur Eintragung eines im Ausland ergangenen Scheidungsurteils nach dessen Vollstreckbarerklärung vor marokkanischen Gerichten.",
      "Процедура внесения решения о разводе, вынесенного иностранным судом, после его экзекватуры в марокканских судах."
    ),
    where: W7(
      "المحكمة الابتدائية المغربية لمحل التبليغ ثم مصلحة الحالة المدنية أو القنصلية المعنية",
      "Tribunal de première instance marocain du lieu de signification, puis service de l'état civil ou consulat concerné",
      "Moroccan court of first instance of the place of service, then the relevant civil registry office or consulate",
      "Tribunal marroquí de primera instancia del lugar de notificación y luego la oficina de registro civil o el consulado correspondientes",
      "Tribunale marocchino di primo grado del luogo di notifica, quindi l'ufficio di stato civile o il consolato competenti",
      "Marokkanisches Gericht erster Instanz am Zustellungsort, danach das zuständige Standesamt oder Konsulat",
      "Марокканский суд первой инстанции по месту вручения, затем соответствующий отдел ЗАГС или консульство"
    ),
    keywords: ["تضمين الطلاق", "transcription divorce", "divorce transcription", "التنفيذية", "exequatur", "طلاق بالخارج"],
  },
  {
    id: "usr-restitution-enfant",
    cat: "usra",
    title: T7(
      "طلب استرداد المحضون",
      "Demande de restitution de l'enfant",
      "Application for return of a child in custody",
      "Solicitud de restitución del menor",
      "Domanda di restituzione del minore",
      "Antrag auf Herausgabe des Kindes",
      "Заявление о возврате ребёнка, находящегося под опекой"
    ),
    desc: D7(
      "دعوى يرفعها صاحب الحق في الحضانة لاسترداد المحضون الذي احتجزه الغير خلافا للاتفاق أو للحكم.",
      "Action introduite par le titulaire de la garde pour récupérer l'enfant retenu par un tiers contrairement au jugement ou à l'accord.",
      "Action brought by the custody holder to recover a child wrongfully kept by a third party in breach of a ruling.",
      "Acción interpuesta por el titular de la guarda para recuperar al menor retenido por un tercio en contra de la sentencia o del acuerdo.",
      "Azione proposta dal titolare dell'affidamento per recuperare il minore trattenuto da terzi in violazione del provvedimento o dell'accordo.",
      "Klage des Sorgeberechtigten auf Herausgabe eines Kindes, das unter Verstoß gegen Urteil oder Vereinbarung von Dritten zurückgehalten wird.",
      "Иск владельца права опеки о возврате ребёнка, которого третье лицо удерживает в нарушение решения суда или соглашения."
    ),
    where: W7(
      "قسم قضاء الأسرة بالمحكمة الابتدائية لمحل إقامة المحضون أو محل احتجازه",
      "Section de la famille du tribunal de première instance du lieu de résidence ou de rétention de l'enfant",
      "Family section of the court of first instance of the child's place of residence or retention",
      "Sección de familia del tribunal de primera instancia del lugar de residencia o retención del menor",
      "Sezione famiglia del tribunale di primo grado del luogo di residenza o di detenzione del minore",
      "Familiensektion des Gerichts erster Instanz am Wohn- oder Aufenthaltsort des Kindes",
      "Секция по семейным делам суда первой инстанции по месту проживания или удержания ребёнка"
    ),
    keywords: ["استرداد المحضون", "restitution de l'enfant", "child return", "خطف", "الحضانة"],
  },
  // ─── Prestations et procédures familiales ───
  {
    id: "usr-livret-famille",
    cat: "usra",
    title: T7(
      "مسطرة الحصول على الدفتر العائلي لأول مرة",
      "Procédure d'obtention du livret de famille pour la première fois",
      "Procedure for obtaining the family record book for the first time",
      "Procedimiento de obtención del libro de familia por primera vez",
      "Procedura di ottenimento del libretto di famiglia per la prima volta",
      "Verfahren zur erstmaligen Erlangung des Familienbuches",
      "Процедура первичного получения семейной книжки"
    ),
    desc: D7(
      "مسطرة استخراج الدفتر العائلي من ضابط الحالة المدنية بعد تسجيل عقد الزواج بسجلات الحالة المدنية.",
      "Procédure de délivrance du livret de famille par l'officier de l'état civil après l'inscription de l'acte de mariage dans les registres.",
      "Procedure whereby the civil status officer issues the family record book after the marriage deed is entered in the registers.",
      "Procedimiento de expedición del libro de familia por el oficial del registro civil tras la inscripción del acta de matrimonio en los registros.",
      "Procedura di rilascio del libretto di famiglia da parte dell'ufficiale di stato civile dopo l'iscrizione dell'atto di matrimonio nei registri.",
      "Verfahren, bei dem der Standesbeamte das Familienbuch nach Eintragung der Eheurkunde in die Register ausstellt.",
      "Процедура выдачи семейной книжки офицером гражданского состояния после внесения брачного акта в реестры."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة الترابية لمحل تسجيل عقد الزواج",
      "Service de l'état civil de la commune du lieu d'enregistrement de l'acte de mariage",
      "Civil status office of the commune where the marriage deed was registered",
      "Oficina del registro civil de la comuna del lugar de inscripción del acta de matrimonio",
      "Ufficio di stato civile del comune del luogo di registrazione dell'atto di matrimonio",
      "Standesamt der Gebietskörperschaft, in der die Eheurkunde eingetragen wurde",
      "Отдел гражданского состояния коммуны по месту регистрации брачного акта"
    ),
    keywords: ["الدفتر العائلي", "livret de famille", "family record book", "الحالة المدنية", "عقد الزواج"],
    popular: true,
  },
  {
    id: "usr-procedure-acte-naissance",
    cat: "usra",
    title: T7(
      "مسطرة الحصول على نسخة من رسم الولادة",
      "Procédure d'obtention d'une copie d'acte de naissance",
      "Procedure for obtaining a copy of a birth certificate",
      "Procedimiento de obtención de una copia del acta de nacimiento",
      "Procedura di ottenimento di una copia dell'atto di nascita",
      "Verfahren zur Erlangung einer Kopie der Geburtsurkunde",
      "Процедура получения копии свидетельства о рождении"
    ),
    desc: D7(
      "دليل يشرح خطوات الحصول على نسخة من رسم الولادة من مكاتب الحالة المدنية أو القنصليات للمغاربة بالخارج.",
      "Guide des étapes de demande d'une copie d'acte de naissance auprès des bureaux d'état civil ou des consulats.",
      "Guide outlining the steps for requesting a birth certificate copy from civil registry offices or consulates for Moroccans residing abroad.",
      "Guía que expone los pasos para solicitar una copia del acta de nacimiento en las oficinas del registro civil o los consulados.",
      "Guida che illustra i passaggi per richiedere una copia dell'atto di nascita presso gli uffici di stato civile o i consolati.",
      "Leitfaden zu den Schritten der Beantragung einer Kopie der Geburtsurkunde bei Standesämtern oder Konsulaten.",
      "Пособие с этапами запроса копии свидетельства о рождении в отделах ЗАГС или консульствах для марокканцев за рубежом."
    ),
    where: W7(
      "مكتب الحالة المدنية بالجماعة الترابية لمحل الازدياد أو القنصلية المغربية بالخارج",
      "Bureau d'état civil de la commune du lieu de naissance, ou consulat marocain à l'étranger",
      "Civil registry office of the commune of the place of birth, or a Moroccan consulate abroad",
      "Oficina del registro civil de la comuna del lugar de nacimiento, o consulado marroquí en el extranjero",
      "Ufficio di stato civile del comune del luogo di nascita, oppure consolato marocchino all'estero",
      "Standesamt der Gebietskörperschaft des Geburtsortes oder ein marokkanisches Konsulat im Ausland",
      "Отдел ЗАГС коммуны по месту рождения или марокканское консульство за рубежом"
    ),
    keywords: ["نسخة رسم الولادة", "copie acte de naissance", "birth certificate copy", "رسم الولادة", "الحالة المدنية"],
  },
  {
    id: "usr-procedure-acte-deces",
    cat: "usra",
    title: T7(
      "مسطرة الحصول على نسخة من رسم الوفاة",
      "Procédure d'obtention d'une copie d'acte de décès",
      "Procedure for obtaining a copy of a death certificate",
      "Procedimiento de obtención de una copia del acta de defunción",
      "Procedura di ottenimento di una copia dell'atto di morte",
      "Verfahren zur Erlangung einer Kopie der Sterbeurkunde",
      "Процедура получения копии свидетельства о смерти"
    ),
    desc: D7(
      "دليل يوضح كيفية الحصول على نسخ من رسم الوفاة اللازمة لتصفية التركات والملفات الإدارية للفقيد.",
      "Guide précisant comment obtenir des copies de l'acte de décès nécessaires à la liquidation des successions et aux démarches administratives.",
      "Guide explaining how to obtain copies of the death certificate required for estate settlement and the deceased's administrative procedures.",
      "Guía que explica cómo obtener copias del acta de defunción necesarias para la liquidación de sucesiones y los trámites administrativos.",
      "Guida che spiega come ottenere copie dell'atto di morte necessarie per la liquidazione dell'eredità e le pratiche amministrative.",
      "Leitfaden zur Erlangung von Kopien der Sterbeurkunde, die für die Erbauseinandersetzung und Verwaltungsangelegenheiten erforderlich sind.",
      "Пособие о получении копий свидетельства о смерти, необходимых для оформления наследства и административных дел умершего."
    ),
    where: W7(
      "مكتب الحالة المدنية بالجماعة الترابية لمحل الوفاة أو القنصلية بالنسبة للوفيات بالخارج",
      "Bureau d'état civil de la commune du lieu de décès, ou le consulat pour les décès survenus à l'étranger",
      "Civil registry office of the commune of the place of death, or the consulate for deaths occurring abroad",
      "Oficina del registro civil de la comuna del lugar del fallecimiento, o el consulado para los fallecidos en el extranjero",
      "Ufficio di stato civile del comune del luogo del decesso, oppure il consolato per i decessi avvenuti all'estero",
      "Standesamt der Gebietskörperschaft des Sterbeortes oder das Konsulat für im Ausland verstorbene Personen",
      "Отдел ЗАГС коммуны по месту смерти или консульство для случаев смерти за рубежом"
    ),
    keywords: ["نسخة رسم الوفاة", "copie acte de décès", "death certificate copy", "التركة", "الحالة المدنية"],
  },
  {
    id: "usr-aide-sociale-directe",
    cat: "usra",
    title: T7(
      "طلب الاستفادة من الدعم المباشر",
      "Demande de bénéfice de l'aide sociale directe",
      "Application for direct social assistance",
      "Solicitud de ayuda social directa",
      "Domanda di sussidio sociale diretto",
      "Antrag auf direkte Sozialhilfe",
      "Заявление о прямом социальном пособии"
    ),
    desc: D7(
      "طلب تسجيل الأسرة في برنامج الدعم المباشر الموجه للأسر في وضعية هشاشة بعد الانخراط في السجل الاجتماعي الموحد.",
      "Demande d'inscription au programme d'aide sociale directe destiné aux ménages en situation de précarité, après adhésion au registre social unifié.",
      "Application to enrol in the direct social assistance programme for households in precarious situations, after registration with the unified social register.",
      "Solicitud de inscripción en el programa de ayuda social directa destinado a hogares en situación de precariedad, previa adhesión al registro social unificado.",
      "Domanda di iscrizione al programma di sussidio sociale diretto destinato alle famiglie in condizione di precarietà, dopo l'adesione al registro sociale unificato.",
      "Antrag auf Aufnahme in das Programm direkter Sozialhilfe für bedürftige Haushalte nach Registrierung im einheitlichen Sozialregister.",
      "Заявление о включении семьи в программу прямой социальной помощи для малообеспеченных домохозяйств после регистрации в едином социальном реестре."
    ),
    where: W7(
      "منصات التسجيل في السجل الاجتماعي الموحد أو مقرات الجماعات الترابية والمصالح الاجتماعية الإقليمية",
      "Plateformes d'inscription au registre social unifié, ou sièges des communes et services sociaux provinciaux",
      "Unified social register enrolment platforms, or commune headquarters and provincial social services",
      "Plataformas de inscripción en el registro social unificado, o sedes de las comunas y servicios sociales provinciales",
      "Piattaforme di iscrizione al registro sociale unificato, oppure sedi dei comuni e servizi sociali provinciali",
      "Anmeldeplattformen des einheitlichen Sozialregisters oder Gemeindebehörden und provinzielle Sozialdienste",
      "Платформы регистрации в едином социальном реестре, либо администрации коммун и провинциальные социальные службы"
    ),
    keywords: ["الدعم المباشر", "aide sociale directe", "direct social assistance", "دعم الأسر", "برنامج الدعم"],
    popular: true,
  },
];
