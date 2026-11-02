// Official request forms — education, health, transport, utilities,
// municipal services, hunting/arms and post. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsDemandesA: DocumentItem[] = [
  // ─── Éducation nationale ───
  {
    id: "dem-inscription-prescolaire",
    cat: "demandes",
    title: T7(
      "طلب تسجيل في التعليم الأولي",
      "Demande d'inscription en éducation préscolaire",
      "Preschool education enrolment application",
      "Solicitud de inscripción en educación preescolar",
      "Domanda di iscrizione alla scuola dell'infanzia",
      "Antrag auf Aufnahme in den Vorschulunterricht",
      "Заявление на зачисление в дошкольное образование"
    ),
    desc: D7(
      "طلب يودع لدى مؤسسة التعليم الأولي لتسجيل الطفل قبل دخوله السنة الأولى ابتدائي.",
      "Demande déposée auprès d'une structure préscolaire pour inscrire l'enfant avant son entrée au primaire.",
      "Application filed with a preschool structure to register a child before entering primary school.",
      "Solicitud presentada ante una estructura preescolar para inscribir al niño antes de entrar en primaria.",
      "Domanda presentata a una struttura dell'infanzia per iscrivere il bambino prima dell'ingresso alla primaria.",
      "Antrag, der bei einer Vorschuleinrichtung gestellt wird, um das Kind vor der Grundschule anzumelden.",
      "Заявление, подаваемое в учреждение дошкольного образования для записи ребёнка до поступления в начальную школу."
    ),
    where: W7(
      "مؤسسات التعليم الأولي التابعة للتربية الوطنية أو التعاونيات المرخص لها، بإيداع الملف لدى الإدارة.",
      "Structures préscolaires relevant de l'éducation nationale ou coopératives agréées, dépôt du dossier à l'administration.",
      "Preschool structures under national education or licensed cooperatives; file submitted to the administration.",
      "Estructuras preescolares de educación nacional o cooperativas autorizadas; expediente presentado en la administración.",
      "Strutture prescolari dipendenti dall'educazione nazionale o cooperative autorizzate; pratica presentata all'amministrazione.",
      "Vorschuleinrichtungen der staatlichen Bildung oder zugelassene Kooperativen; Abgabe der Unterlagen bei der Verwaltung.",
      "Дошкольные структуры системы национального образования или лицензированные кооперативы; документы подаются в администрацию."
    ),
    authority: "men",
    keywords: ["التعليم الأولي", "préscolaire", "preschool", "تسجيل", "inscription", "روض"],
  },
  {
    id: "dem-inscription-primaire",
    cat: "demandes",
    title: T7(
      "طلب تسجيل بمدرسة ابتدائية",
      "Demande d'inscription à l'école primaire",
      "Primary school enrolment application",
      "Solicitud de inscripción en educación primaria",
      "Domanda di iscrizione alla scuola primaria",
      "Antrag auf Einschulung in die Grundschule",
      "Заявление на зачисление в начальную школу"
    ),
    desc: D7(
      "طلب يوجه إلى إدارة المؤسسة لتسجيل الطفل بالسنة الأولى من التعليم الابتدائي.",
      "Demande adressée à la direction de l'établissement pour inscrire l'enfant en première année primaire.",
      "Application to the school administration to enrol a child in the first primary year.",
      "Solicitud dirigida a la dirección del centro para inscribir al niño en el primer año de primaria.",
      "Domanda alla direzione scolastica per iscrivere il bambino al primo anno di primaria.",
      "Antrag an die Schulleitung zur Aufnahme des Kindes in die erste Klasse.",
      "Заявление директору школы о зачислении ребёнка в первый класс."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية (المدرسة الابتدائية) المقيدة بها منطقة السكنى",
      "Direction de l'établissement primaire du secteur de résidence",
      "Administration of the primary school of the residence sector",
      "Dirección del colegio del sector de residencia",
      "Direzione della scuola primaria del settore di residenza",
      "Grundschulverwaltung des Wohnsektors",
      "Администрация начальной школы по месту жительства"
    ),
    authority: "men",
    keywords: ["تسجيل مدرسي", "inscription scolaire", "school enrolment", "ابتدائي", "primary", "مسار"],
    popular: true,
  },
  {
    id: "dem-inscription-college",
    cat: "demandes",
    title: T7(
      "طلب تسجيل بالسنة الأولى من التعليم الثانوي الإعدادي",
      "Demande d'inscription en première année du collège",
      "Application for enrolment in the first year of middle school",
      "Solicitud de inscripción en el primer año de secundaria",
      "Domanda di iscrizione al primo anno di scuola secondaria di primo grado",
      "Antrag auf Aufnahme in die erste Klasse der Mittelschule",
      "Заявление на зачисление в первый класс средней школы"
    ),
    desc: D7(
      "طلب يقدم لإدارة الإعدادية لتسجيل التلميذ بالسنة الأولى بعد نهاية الابتدائي.",
      "Demande présentée à la direction du collège pour inscrire l'élève en première année après le primaire.",
      "Request submitted to the middle school administration to enrol a pupil in the first year after primary.",
      "Solicitud presentada a la dirección del colegio para inscribir al alumno en el primer año tras la primaria.",
      "Domanda presentata alla direzione della scuola secondaria per iscrivere l'alunno al primo anno dopo la primaria.",
      "Antrag an die Mittelschulleitung zur Aufnahme des Schülers in die erste Klasse nach der Grundschule.",
      "Заявление в администрацию средней школы о зачислении ученика в первый класс после начальной школы."
    ),
    where: W7(
      "إدارة الثانوية الإعدادية بقطاع السكنى، مع إيداع الطلب لدى الناظر.",
      "Direction du collège du secteur de résidence; dépôt de la demande auprès du directeur.",
      "Middle school administration of the residence sector; application filed with the head of school.",
      "Dirección del colegio del sector de residencia; solicitud depositada ante la dirección.",
      "Direzione della scuola secondaria del settore di residenza; domanda presentata al dirigente.",
      "Verwaltung der Mittelschule im Wohnsektor; Abgabe des Antrags bei der Schulleitung.",
      "Администрация средней школы по месту жительства; заявление подаётся директору школы."
    ),
    authority: "men",
    keywords: ["إعدادي", "collège", "middle school", "تسجيل", "مسار"],
  },
  {
    id: "dem-inscription-lycee",
    cat: "demandes",
    title: T7(
      "طلب تسجيل بالسنة الأولى من التعليم الثانوي التأهيلي",
      "Demande d'inscription en première année du lycée (secondaire qualifiant)",
      "Application for enrolment in the first year of qualifying secondary school",
      "Solicitud de inscripción en el primer año de bachillerato",
      "Domanda di iscrizione al primo anno di scuola secondaria di secondo grado",
      "Antrag auf Aufnahme in die erste Klasse der Oberstufe",
      "Заявление на зачисление в первый класс старшей школы"
    ),
    desc: D7(
      "طلب يوجه إلى إدارة الثانوية التأهيلية لتسجيل التلميذ بعد نهاية الإعدادي.",
      "Demande adressée à la direction du lycée pour inscrire l'élève à l'issue du collège.",
      "Request addressed to the high school administration to enrol a pupil after middle school.",
      "Solicitud dirigida a la dirección del instituto para inscribir al alumno al finalizar la secundaria.",
      "Domanda indirizzata alla direzione del liceo per iscrivere lo studente al termine della scuola secondaria.",
      "Antrag an die Oberschulleitung zur Aufnahme des Schülers nach der Mittelschule.",
      "Заявление дирекции старшей школы о зачислении ученика после средней школы."
    ),
    where: W7(
      "إدارة الثانوية التأهيلية لقطاع السكنى؛ الإيداع لدى الحارس العام.",
      "Direction du lycée du secteur de résidence; dépôt auprès du proviseur.",
      "High school administration of the residence sector; filed with the head teacher.",
      "Dirección del instituto del sector de residencia; depósito ante el director.",
      "Direzione del liceo del settore di residenza; presentazione al preside.",
      "Oberschulverwaltung des Wohnsektors; Abgabe beim Schulleiter.",
      "Администрация старшей школы по месту жительства; подача директору школы."
    ),
    authority: "men",
    keywords: ["تأهيلي", "lycée", "high school", "تسجيل", "باكالوريا"],
  },
  {
    id: "dem-transfert-dossier-scolaire",
    cat: "demandes",
    title: T7(
      "طلب تحويل ملف التلميذ إلى مؤسسة أخرى",
      "Demande de transfert du dossier scolaire vers un autre établissement",
      "Application to transfer a school record to another establishment",
      "Solicitud de traslado del expediente escolar a otro centro",
      "Domanda di trasferimento del fascicolo scolastico ad altro istituto",
      "Antrag auf Übertragung des Schülerdossiers an eine andere Schule",
      "Заявление о переводе школьного дела в другое учебное заведение"
    ),
    desc: D7(
      "طلب يلتمس من المديرية الإقليمية تحويل ملف التلميذ بسبب تغيير مقر السكنى.",
      "Demande sollicitant de la direction provinciale le transfert du dossier de l'élève après changement de domicile.",
      "Request asking the provincial directorate to transfer the pupil's record following a change of home.",
      "Solicitud que pide a la dirección provincial el traslado del expediente tras un cambio de domicilio.",
      "Domanda con cui si chiede alla direzione provinciale il trasferimento del fascicolo dopo un cambio di residenza.",
      "Antrag, der die Provinzdirektion um Übertragung des Dossiers nach einem Wohnungswechsel bittet.",
      "Заявление с просьбой к провинциальной дирекции перевести дело ученика после смены места жительства."
    ),
    where: W7(
      "إدارة المؤسسة الأصلية ثم المؤسسة المستقبلة؛ المتابعة بمصلحة الشؤون التربوية بالمديرية.",
      "Administration de l'établissement d'origine puis établissement d'accueil; suivi au service des affaires pédagogiques de la direction.",
      "Administration of the original school then the receiving school; follow-up at the directorate's pedagogical affairs service.",
      "Administración del centro de origen y luego del centro receptor; seguimiento en los asuntos pedagógicos de la dirección.",
      "Amministrazione della scuola di origine e poi della scuola ricevente; seguito presso gli affari pedagogici della direzione.",
      "Verwaltung der Ursprungsschule, dann der aufnehmenden Schule; Nachverfolgung beim pädagogischen Dienst der Direktion.",
      "Администрация исходной школы, затем принимающей школы; отслеживается в службе учебных вопросов дирекции."
    ),
    authority: "men",
    keywords: ["تحويل ملف", "transfert scolaire", "school transfer", "تغيير العنوان", "مسار"],
  },
  {
    id: "dem-changement-section-lycee",
    cat: "demandes",
    title: T7(
      "طلب تغيير الشعبة بالتعليم الثانوي التأهيلي",
      "Demande de changement de section au lycée qualifiant",
      "Application to change stream in qualifying secondary school",
      "Solicitud de cambio de modalidad en bachillerato",
      "Domanda di cambio di indirizzo nel liceo",
      "Antrag auf Wechsel des Zweigs in der Oberstufe",
      "Заявление о смене профиля в старшей школе"
    ),
    desc: D7(
      "طلب يقدم للإدارة لتغيير شعبة التلميذ (علوم أو آداب) وفق نتائجه ورغبته.",
      "Demande présentée à l'administration pour changer la section de l'élève (sciences, lettres) selon ses résultats.",
      "Request filed with the administration to change the pupil's stream (science, arts) according to results.",
      "Solicitud presentada a la administración para cambiar la modalidad del alumno según sus resultados.",
      "Domanda presentata all'amministrazione per cambiare l'indirizzo dell'alunno secondo i suoi risultati.",
      "Antrag an die Verwaltung zum Wechsel des Zweigs (Naturwissenschaften, Sprachen) gemäß den Ergebnissen.",
      "Заявление в администрацию о смене профиля ученика (естественные науки, гуманитарные) по результатам."
    ),
    where: W7(
      "إدارة الثانوية بعد استشارة مستشار التوجيه؛ القرار بمصلحة الشؤون التربوية.",
      "Direction du lycée après avis du conseiller d'orientation; décision au service des affaires pédagogiques.",
      "High school administration after the guidance counsellor's advice; decision at pedagogical affairs.",
      "Dirección del instituto previo informe del orientador; decisión en asuntos pedagógicos.",
      "Direzione del liceo dopo il parere del consulente di orientamento; decisione agli affari pedagogici.",
      "Schulleitung nach Stellungnahme des Berufsberaters; Entscheidung beim pädagogischen Dienst.",
      "Дирекция школы после заключения профориентатора; решение в службе учебных вопросов."
    ),
    authority: "men",
    keywords: ["تغيير الشعبة", "changement de section", "change stream", "توجيه", "تأهيلي"],
  },
  {
    id: "dem-inscription-retour-etranger",
    cat: "demandes",
    title: T7(
      "طلب تسجيل تلميذ قادم من الخارج مع معادلة دراسته",
      "Demande d'inscription d'un élève revenu de l'étranger avec équivalence de scolarité",
      "Application to enrol a pupil returning from abroad with study equivalence",
      "Solicitud de inscripción de un alumno retornado del extranjero con equivalencia de estudios",
      "Domanda di iscrizione di un alunno rientrato dall'estero con equivalenza degli studi",
      "Antrag auf Einschulung eines aus dem Ausland zurückgekehrten Schülers mit Anerkennung",
      "Заявление о зачислении ученика, вернувшегося из-за границы, с признанием обучения"
    ),
    desc: D7(
      "طلب يقدم للمديرية الإقليمية لتسجيل تلميذ واصل من الخارج وتقدير مستواه الدراسي.",
      "Demande présentée à la direction provinciale pour inscrire un élève arrivé de l'étranger et évaluer son niveau.",
      "Request filed with the provincial directorate to enrol a pupil from abroad and assess the level.",
      "Solicitud presentada a la dirección provincial para inscribir a un alumno llegado del extranjero y evaluar su nivel.",
      "Domanda presentata alla direzione provinciale per iscrivere un alunno arrivato dall'estero e valutarne il livello.",
      "Antrag bei der Provinzdirektion zur Einschulung eines aus dem Ausland zurückgekehrten Schülers und Bewertung des Niveaus.",
      "Заявление в провинциальную дирекцию о зачислении ученика из-за границы и оценке его уровня."
    ),
    where: W7(
      "المديرية الإقليمية للتربية الوطنية؛ لجنة معادلة الدراسات تبت في المستوى.",
      "Direction provinciale de l'éducation nationale; la commission d'équivalence statue sur le niveau.",
      "Provincial directorate of national education; the equivalence committee decides on the level.",
      "Dirección provincial de educación nacional; la comisión de equivalencia decide el nivel.",
      "Direzione provinciale dell'educazione nazionale; la commissione di equivalenza decide il livello.",
      "Provinzdirektion der Landeserziehung; die Äquivalenzkommission entscheidet über das Niveau.",
      "Провинциальная дирекция национального образования; комиссия по признанию определяет уровень."
    ),
    authority: "men",
    keywords: ["قادم من الخارج", "élève retorné", "returning pupil", "معادلة", "équivalence", "réintégration"],
  },
  {
    id: "dem-attestation-non-radiation",
    cat: "demandes",
    title: T7(
      "طلب الحصول على شهادة عدم الطرد",
      "Demande d'attestation de non-radiation",
      "Application for a certificate of non-expulsion",
      "Solicitud de certificado de no expulsión",
      "Domanda di certificato di non espulsione",
      "Antrag auf eine Bescheinigung über Nichtausschluss",
      "Заявление на справку об отсутствии исключения"
    ),
    desc: D7(
      "طلب يستظهر فيه التلميذ بأنه لم يطرد من أي مؤسسة تعليمية خلال مساره الدراسي.",
      "Demande par laquelle l'élève atteste n'avoir été radié d'aucun établissement au cours de sa scolarité.",
      "Request whereby the pupil certifies not having been expelled from any school during studies.",
      "Solicitud mediante la cual el alumno certifica no haber sido expulsado de ningún centro durante sus estudios.",
      "Domanda con cui l'alunno certifica di non essere stato radiato da nessuna scuola durante gli studi.",
      "Antrag, mit dem der Schüler bestätigt, in seiner Schulzeit von keiner Schule ausgeschlossen worden zu sein.",
      "Заявление, которым ученик подтверждает, что не исключался ни из одной школы за время учёбы."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية الحالية أو السابقة؛ تسلم بعد التحقق من السجلات.",
      "Administration de l'établissement actuel ou antérieur; délivrance après vérification des registres.",
      "Administration of the current or former school; issued after verification of the registers.",
      "Administración del centro actual o anterior; emisión tras verificación de los registros.",
      "Amministrazione della scuola attuale o precedente; rilascio dopo verifica dei registri.",
      "Verwaltung der jetzigen oder früheren Schule; Ausstellung nach Prüfung der Register.",
      "Администрация нынешней или прежней школы; выдаётся после проверки журналов."
    ),
    authority: "men",
    keywords: ["عدم الطرد", "non-radiation", "non-expulsion", "شهادة", "attestation"],
  },
  {
    id: "dem-certificat-radiation",
    cat: "demandes",
    title: T7(
      "طلب الحصول على شهادة المغادرة (الرصد)",
      "Demande de certificat de radiation (départ de l'élève)",
      "Application for a departure certificate (pupil leaving the school)",
      "Solicitud de certificado de baja (salida del alumno)",
      "Domanda di certificato di cessazione (uscita dell'alunno)",
      "Antrag auf eine Abgangsbescheinigung (Schulaustritt)",
      "Заявление на справку о выбытии (уход ученика из школы)"
    ),
    desc: D7(
      "وثيقة تطلب من الإدارة عند مغادرة التلميذ المؤسسة نهائيا أو انتقاله لمؤسسة أخرى.",
      "Document demandé à l'administration lorsque l'élève quitte définitivement l'établissement ou en change.",
      "Document requested from the administration when the pupil leaves the school permanently or transfers.",
      "Documento solicitado a la administración cuando el alumno deja el centro definitivamente o se traslada.",
      "Documento richiesto all'amministrazione quando l'alunno lascia definitivamente la scuola o si trasferisce.",
      "Dokument, das bei der Verwaltung angefordert wird, wenn der Schüler die Schule endgültig verlässt oder wechselt.",
      "Документ, запрашиваемый у администрации, когда ученик окончательно покидает школу или переходит в другую."
    ),
    where: W7(
      "إدارة المؤسسة التي يغادرها التلميذ؛ تسلم شهادة المغادرة فورا بعد توثيق الرصد.",
      "Administration de l'établissement quitté; le certificat est délivré dès l'enregistrement de la radiation.",
      "Administration of the school being left; the certificate is issued once the departure is recorded.",
      "Administración del centro que se abandona; el certificado se emite tras registrar la baja.",
      "Amministrazione della scuola che si lascia; il certificato è rilasciato appena registrata la cessazione.",
      "Verwaltung der verlassenen Schule; die Bescheinigung wird nach Eintragung des Abgangs ausgestellt.",
      "Администрация покидаемой школы; справка выдаётся сразу после оформления выбытия."
    ),
    authority: "men",
    keywords: ["شهادة المغادرة", "certificat de radiation", "departure certificate", "رصد", "transfert"],
  },
  {
    id: "dem-duplicata-livret-scolaire",
    cat: "demandes",
    title: T7(
      "طلب نظير من كناش النقط والانتقالات",
      "Demande de duplicata du livret scolaire",
      "Application for a duplicate of the school record booklet",
      "Solicitud de duplicado del libro de calificaciones",
      "Domanda di duplicato del libretto scolastico",
      "Antrag auf Zweitschrift des Schulhefts",
      "Заявление на дубликат школьного табеля"
    ),
    desc: D7(
      "طلب يقدم عند فقدان كناش النقط ليصدر نظيره بعد التحقق من أرشيف المؤسسة.",
      "Demande déposée en cas de perte du livret afin d'en obtenir un duplicata après vérification de l'archive.",
      "Request filed upon loss of the booklet to obtain a duplicate after checking the school archive.",
      "Solicitud presentada ante la pérdida del librito para obtener un duplicado tras verificar el archivo.",
      "Domanda presentata in caso di smarrimento del libretto per ottenerne un duplicato dopo verifica dell'archivio.",
      "Antrag bei Verlust des Hefts, um nach Prüfung des Archivs eine Zweitschrift zu erhalten.",
      "Заявление подаётся при утере табеля для получения дубликата после проверки архива школы."
    ),
    where: W7(
      "إدارة المؤسسة أو المديرية الإقليمية؛ يستخرج النظير من نظام مسار أو الأرشيف.",
      "Administration de l'établissement ou direction provinciale; le duplicata est édité depuis Massar ou l'archive.",
      "School administration or provincial directorate; the duplicate is printed from Massar or the archive.",
      "Administración del centro o dirección provincial; el duplicado se imprime desde Massar o el archivo.",
      "Amministrazione della scuola o direzione provinciale; il duplicato è stampato da Massar o dall'archivio.",
      "Schulverwaltung oder Provinzdirektion; die Zweitschrift wird aus Massar oder dem Archiv erstellt.",
      "Администрация школы или провинциальная дирекция; дубликат распечатывается из Massar или архива."
    ),
    authority: "men",
    keywords: ["كناش النقط", "livret scolaire", "school record", "نظير", "duplicata", "مسار"],
  },
  {
    id: "dem-autorisation-absence-prolongee",
    cat: "demandes",
    title: T7(
      "طلب إذن بالغياب لمدة طويلة",
      "Demande d'autorisation d'absence prolongée",
      "Application for permission for a prolonged absence",
      "Solicitud de autorización de ausencia prolongada",
      "Domanda di autorizzazione per assenza prolungata",
      "Antrag auf Genehmigung eines längeren Fernbleibens",
      "Заявление на разрешение длительного отсутствия"
    ),
    desc: D7(
      "طلب يعرض فيه الولي أسباب غياب التلميذ المتوقع لأسباب صحية أو عائلية مقبولة.",
      "Demande exposant au directeur les motifs d'une absence prévisible de l'élève pour raisons médicales ou familiales.",
      "Request setting out to the head teacher the reasons for a foreseeable absence on medical or family grounds.",
      "Solicitud que expone al director los motivos de una ausencia previsible por razones médicas o familiares.",
      "Domanda che espone al dirigente i motivi di un'assenza prevedibile per ragioni mediche o familiari.",
      "Antrag, der dem Schulleiter die Gründe eines absehbaren Fernbleibens aus medizinischen oder familiären Gründen darlegt.",
      "Заявление, излагающее директору причины предвидимого отсутствия по медицинским или семейным обстоятельствам."
    ),
    where: W7(
      "إدارة المؤسسة مع الوثائق المثبتة (شهادات طبية مثلا)؛ يرد عليه بالقبول أو الرفض.",
      "Direction de l'établissement avec justificatifs (certificats médicaux notamment); réponse par acceptation ou refus.",
      "School administration with supporting documents (medical certificates in particular); reply by acceptance or refusal.",
      "Dirección del centro con justificantes (certificados médicos); respuesta de aceptación o rechazo.",
      "Direzione della scuola con documenti giustificativi (certificati medici); risposta di accettazione o rifiuto.",
      "Schulleitung mit Nachweisen (insbesondere ärztliche Atteste); Antwort durch Zusage oder Ablehnung.",
      "Дирекция школы с подтверждающими документами (медицинские справки); ответ согласием или отказом."
    ),
    authority: "men",
    keywords: ["غياب", "absence prolongée", "prolonged absence", "إذن", "autorisation"],
  },
  {
    id: "dem-reintegration-abandon",
    cat: "demandes",
    title: T7(
      "طلب إعادة إدماج تلميذ منقطع عن الدراسة",
      "Demande de réintégration d'un élève après abandon scolaire",
      "Application for reintegration of a pupil after dropping out",
      "Solicitud de reincorporación de un alumno tras el abandono escolar",
      "Domanda di reinserimento di un alunno dopo l'abbandono scolastico",
      "Antrag auf Wiedereingliederung eines Schülers nach Schulabbruch",
      "Заявление о восстановлении ученика после прекращения учёбы"
    ),
    desc: D7(
      "طلب يلتمس من المديرية إعادة قيد تلميذ انقطع لظروف اجتماعية وفق دراسة حالته.",
      "Demande sollicitant de la direction la réinscription d'un élève déscolarisé pour raisons sociales après étude de son cas.",
      "Request seeking from the directorate the re-enrolment of a pupil who dropped out, after a case review.",
      "Solicitud que pide a la dirección la reinscripción de un alumno que abandonó, tras estudio de su caso.",
      "Domanda che chiede alla direzione la reiscrizione di un alunno fuoriuscito, dopo studio del suo caso.",
      "Antrag, der die Direktion um Wiedereinschreibung eines abgegangenen Schülers nach Fallprüfung bittet.",
      "Заявление с просьбой к дирекции восстановить ученика, бросившего учёбу, после изучения его случая."
    ),
    where: W7(
      "المديرية الإقليمية بمساعدة الأطر الاجتماعية؛ تقترح المؤسسة المناسبة والمستوى.",
      "Direction provinciale avec l'appui des assistantes sociales; l'établissement adapté et le niveau sont proposés.",
      "Provincial directorate with the support of social workers; a suitable school and level are proposed.",
      "Dirección provincial con apoyo de trabajadoras sociales; se proponen el centro adecuado y el nivel.",
      "Direzione provinciale con il sostegno degli assistenti sociali; vengono proposti la scuola adatta e il livello.",
      "Provinzdirektion mit Unterstützung der Sozialarbeiter; geeignete Schule und Stufe werden vorgeschlagen.",
      "Провинциальная дирекция при поддержке соцработников; предлагаются подходящая школа и уровень."
    ),
    authority: "men",
    keywords: ["إعادة الادماج", "réintégration", "reintegration", "انقطاع", "abandon scolaire", "dropout"],
  },
  {
    id: "dem-derogation-secteur",
    cat: "demandes",
    title: T7(
      "طلب تسجيل خارج القطاع التربوي (استثناء من منطقة السكنى)",
      "Demande d'inscription hors secteur de recrutement (dérogation)",
      "Application for enrolment outside the catchment sector (waiver)",
      "Solicitud de inscripción fuera del sector de reclutamiento (excepción)",
      "Domanda di iscrizione fuori dal settore di reclutamento (deroga)",
      "Antrag auf Einschulung außerhalb des Einzugssektors (Ausnahme)",
      "Заявление о зачислении вне зоны обслуживания (исключение)"
    ),
    desc: D7(
      "طلب يلتمس من المديرية تسجيل التلميذ بمؤسسة لا تتبع منطقة سكناه لظروف خاصة.",
      "Demande sollicitant de la direction l'inscription dans un établissement hors secteur de résidence pour circonstances particulières.",
      "Request seeking from the directorate enrolment in a school outside the home sector for special circumstances.",
      "Solicitud que pide a la dirección la inscripción en un centro fuera del sector por circunstancias especiales.",
      "Domanda che chiede alla direzione l'iscrizione in una scuola fuori settore per circostanze particolari.",
      "Antrag, der die Direktion um Einschulung in einer Schule außerhalb des Sektors aus besonderen Gründen bittet.",
      "Заявление с просьбой к дирекции зачислить в школу вне сектора проживания по особым обстоятельствам."
    ),
    where: W7(
      "المديرية الإقليمية أو إدارة المؤسسة المطلوبة؛ تدرس الطلبات حسب الطاقة الاستيعابية.",
      "Direction provinciale ou administration de l'établissement souhaité; les demandes sont étudiées selon la capacité.",
      "Provincial directorate or the chosen school's administration; requests are examined according to capacity.",
      "Dirección provincial o administración del centro deseado; las solicitudes se estudian según la capacidad.",
      "Direzione provinciale o amministrazione della scuola scelta; le domande sono esaminate secondo la capienza.",
      "Provinzdirektion oder Verwaltung der Wunschschule; Anträge werden je nach Kapazität geprüft.",
      "Провинциальная дирекция или администрация выбранной школы; заявления рассматриваются с учётом вместимости."
    ),
    authority: "men",
    keywords: ["خارج القطاع", "hors secteur", "out of catchment", "استثناء", "dérogation", "تسجيل"],
  },
  {
    id: "dem-massar-oubli-code",
    cat: "demandes",
    title: T7(
      "طلب استرجاع رمز الدخول أو كلمة السر لحساب مسار",
      "Demande de récupération du code ou du mot de passe Massar",
      "Application to recover the Massar access code or password",
      "Solicitud de recuperación del código o contraseña Massar",
      "Domanda di recupero del codice o della password Massar",
      "Antrag auf Wiederherstellung des Massar-Codes oder Passworts",
      "Заявление на восстановление кода или пароля Massar"
    ),
    desc: D7(
      "طلب يقدمه الولي لإدارة المؤسسة لإعادة تعيين رمز حساب مسار الخاص بابنه.",
      "Demande présentée par le parent à l'administration afin de réinitialiser le code Massar de son enfant.",
      "Request presented by the parent to the school to reset the child's Massar code.",
      "Solicitud presentada por el padre a la administración para restablecer el código Massar de su hijo.",
      "Domanda presentata dal genitore all'amministrazione per reimpostare il codice Massar del figlio.",
      "Vom Elternteil an die Verwaltung gerichteter Antrag zum Zurücksetzen des Massar-Codes des Kindes.",
      "Заявление родителя в администрацию школы о сбросе кода Massar своего ребёнка."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية بحضور الولي وبطاقته الوطنية؛ أو عبر بوابة مسار عند توفر البريد.",
      "Administration de l'établissement en présence du parent muni de sa CIN; ou via le portail Massar si l'e-mail est renseigné.",
      "School administration with the parent present and ID card; or via the Massar portal if the e-mail is registered.",
      "Administración del centro con el padre presente y su DNI; o por el portal Massar si el correo está registrado.",
      "Amministrazione della scuola con il genitore presente e la carta d'identità; o via portale Massar se l'e-mail è registrata.",
      "Schulverwaltung mit anwesendem Elternteil und Ausweis; oder über das Massar-Portal, sofern die E-Mail hinterlegt ist.",
      "Администрация школы в присутствии родителя с удостоверением личности; или через портал Massar, если указан e-mail."
    ),
    authority: "men",
    keywords: ["مسار", "Massar", "code Massar", "كلمة السر", "mot de passe", "password"],
  },
  {
    id: "dem-decharge-parentale-activite",
    cat: "demandes",
    title: T7(
      "طلب تفويض الوالدين لمشاركة التلميذ في نشاط رياضي أو خرجة",
      "Demande de décharge parentale pour une activité sportive ou une sortie",
      "Parental consent application for a sports activity or school trip",
      "Solicitud de consentimiento parental para actividad deportiva o excursión",
      "Domanda di consenso dei genitori per un'attività sportiva o una gita",
      "Antrag auf elterliche Einwilligung für eine Sportaktivität oder einen Ausflug",
      "Заявление о согласии родителей на спортивное мероприятие или экскурсию"
    ),
    desc: D7(
      "وثيقة يوافق فيها الولي على مشاركة ابنه في نشاط مواز أو خرجة مدرسية ويتحمل مسؤوليتها.",
      "Document par lequel le parent consent à la participation de son enfant à une activité ou sortie et en assume la responsabilité.",
      "Document whereby the parent consents to the child's participation in an activity or trip and assumes responsibility.",
      "Documento por el que el padre consiente la participación de su hijo en una actividad o excursión y asume la responsabilidad.",
      "Documento con cui il genitore acconsente alla partecipazione del figlio a un'attività o gita e ne assume la responsabilità.",
      "Dokument, mit dem der Elternteil der Teilnahme des Kindes an einer Aktivität oder Fahrt zustimmt und die Verantwortung übernimmt.",
      "Документ, которым родитель соглашается на участие ребёнка в мероприятии или поездке и принимает ответственность."
    ),
    where: W7(
      "يحرر لدى إدارة المؤسسة المنظمة؛ يحتفظ به القيم على النشاط قبل الانطلاق.",
      "Établi auprès de l'administration de l'établissement organisateur; conservé par l'encadrant avant le départ.",
      "Drawn up with the organising school's administration; kept by the supervisor before departure.",
      "Se extiende ante la administración del centro organizador; lo conserva el monitor antes de la salida.",
      "Redatto presso l'amministrazione della scuola organizzatrice; conservato dall'accompagnatore prima della partenza.",
      "Wird bei der Verwaltung der veranstaltenden Schule erstellt; vom Betreuer vor Abfahrt aufbewahrt.",
      "Оформляется в администрации организующей школы; хранится у сопровождающего перед выездом."
    ),
    authority: "men",
    keywords: ["تفويض الوالدين", "décharge parentale", "parental consent", "خرجة مدرسية", "sortie scolaire", "نشاط رياضي"],
  },
  {
    id: "dem-classe-integration-handicap",
    cat: "demandes",
    title: T7(
      "طلب توجيه تلميذ في وضعية إعاقة نحو قسم للدمج",
      "Demande d'orientation vers une classe d'intégration (élève en situation de handicap)",
      "Application for orientation to an integration class (pupil with a disability)",
      "Solicitud de orientación hacia una clase de integración (alumno con discapacidad)",
      "Domanda di orientamento verso una classe di integrazione (alunno con disabilità)",
      "Antrag auf Zuweisung in eine Integrationsklasse (Schüler mit Behinderung)",
      "Заявление о направлении в класс интеграции (ученик с инвалидностью)"
    ),
    desc: D7(
      "طلب يقدمه الولي للمديرية لتسجيل ابنه ذي الإعاقة بقسم للدمج بمؤسسة عمومية.",
      "Demande présentée par le parent à la direction pour inscrire son enfant handicapé dans une classe d'intégration publique.",
      "Request filed by the parent with the directorate to place a disabled child in a public integration class.",
      "Solicitud presentada por el padre a la dirección para inscribir a su hijo con discapacidad en una clase de integración pública.",
      "Domanda presentata dal genitore alla direzione per iscrivere il figlio con disabilità in una classe di integrazione pubblica.",
      "Antrag des Elternteils an die Direktion, das behinderte Kind in einer öffentlichen Integrationsklasse einzuschulen.",
      "Заявление родителя в дирекцию о зачислении ребёнка-инвалида в публичный класс интеграции."
    ),
    where: W7(
      "المديرية الإقليمية بالتنسيق مع وحدة الموارد الدامجة؛ تبت لجنة التوجيه في المقترح.",
      "Direction provinciale en coordination avec l'unité des ressources intégratives; la commission d'orientation statue.",
      "Provincial directorate in coordination with the inclusive resources unit; the orientation committee decides.",
      "Dirección provincial en coordinación con la unidad de recursos inclusivos; decide la comisión de orientación.",
      "Direzione provinciale in coordinamento con l'unità delle risorse inclusive; decide la commissione di orientamento.",
      "Provinzdirektion in Abstimmung mit der Einheit für inklusive Ressourcen; die Orientierungskommission entscheidet.",
      "Провинциальная дирекция во взаимодействии с подразделением инклюзивных ресурсов; решает комиссия по профориентации."
    ),
    authority: "men",
    keywords: ["دمج", "classe d'intégration", "integration class", "إعاقة", "handicap", "تعليم دامج"],
  },
  {
    id: "dem-inscription-internat",
    cat: "demandes",
    title: T7(
      "طلب الالتحاق بالداخلية بالمؤسسة التعليمية",
      "Demande d'admission à l'internat de l'établissement",
      "Application for admission to the school boarding house",
      "Solicitud de admisión al internado del centro",
      "Domanda di ammissione al convitto della scuola",
      "Antrag auf Aufnahme ins Internat der Schule",
      "Заявление о зачислении в школьный интернат"
    ),
    desc: D7(
      "طلب يقدمه الولي لاستفادة ابنه من سرير بالداخلية نظرا لبعيد مؤسسته عن مقر السكنى.",
      "Demande présentée par le parent pour obtenir une chambre à l'internat, l'établissement étant éloigné du domicile.",
      "Request filed by the parent for a boarding room, the school being far from home.",
      "Solicitud presentada por el padre para obtener una plaza en el internado, al estar el centro lejos del domicilio.",
      "Domanda presentata dal genitore per ottenere un posto al convitto, la scuola essendo lontana da casa.",
      "Antrag des Elternteils auf einen Internatsplatz, da die Schule weit vom Wohnort entfernt ist.",
      "Заявление родителя о предоставлении места в интернате из-за удалённости школы от дома."
    ),
    where: W7(
      "إدارة المؤسسة مع ملف اجتماعي؛ تدرس لجنة الداخلية الطلبات حسب الأولويات.",
      "Administration de l'établissement avec dossier social; la commission de l'internat étudie les demandes par priorité.",
      "School administration with a social file; the boarding committee examines requests by priority.",
      "Administración del centro con expediente social; la comisión del internado estudia las solicitudes por prioridad.",
      "Amministrazione della scuola con fascicolo sociale; la commissione del convitto esamina le domande per priorità.",
      "Schulverwaltung mit Sozialdossier; das Internatskomitee prüft die Anträge nach Priorität.",
      "Администрация школы с социальным делом; интернатская комиссия рассматривает заявления по приоритету."
    ),
    authority: "men",
    keywords: ["الداخلية", "internat", "boarding school", "سرير", "الخدمات الاجتماعية"],
  },
  {
    id: "dem-inscription-cantine",
    cat: "demandes",
    title: T7(
      "طلب الاستفادة من المطعم المدرسي",
      "Demande d'inscription à la cantine scolaire",
      "Application for the school canteen service",
      "Solicitud de inscripción al comedor escolar",
      "Domanda di iscrizione alla mensa scolastica",
      "Antrag auf Anmeldung in der Schulkantine",
      "Заявление на школьную столовую"
    ),
    desc: D7(
      "طلب يقدمه الولي ليستفيد تلميذه من الوجبات بالمطعم المدرسي خلال أيام الدراسة.",
      "Demande présentée par le parent pour que son enfant bénéficie des repas à la cantine durant l'année scolaire.",
      "Request filed by the parent so the child receives meals at the canteen during the school year.",
      "Solicitud presentada por el padre para que su hijo reciba comidas en el comedor durante el curso.",
      "Domanda presentata dal genitore affinché il figlio usufruisca dei pasti alla mensa durante l'anno scolastico.",
      "Antrag des Elternteils, damit das Kind im Schuljahr Mahlzeiten in der Kantine erhält.",
      "Заявление родителя о предоставлении ребёнку питания в столовой в учебном году."
    ),
    where: W7(
      "إدارة المؤسسة مع تعبئة استمارة خاصة؛ توزع الوجبات وفق طاقة المطعم.",
      "Administration de l'établissement avec formulaire dédié; les repas sont servis selon la capacité de la cantine.",
      "School administration with a dedicated form; meals are served according to canteen capacity.",
      "Administración del centro con formulario dedicado; las comidas se sirven según la capacidad del comedor.",
      "Amministrazione della scuola con modulo dedicato; i pasti sono serviti secondo la capienza della mensa.",
      "Schulverwaltung mit eigenem Formular; die Mahlzeiten werden je nach Kapazität der Kantine ausgegeben.",
      "Администрация школы со специальной формой; питание предоставляется по вместимости столовой."
    ),
    authority: "men",
    keywords: ["المطعم المدرسي", "cantine", "canteen", "وجبات", "restauration scolaire"],
  },
  {
    id: "dem-retrait-dossier-eleve",
    cat: "demandes",
    title: T7(
      "طلب استرجاع ملف التلميذ من مؤسسة عمومية (الانتقال إلى الخاص)",
      "Demande de retrait du dossier de l'élève (transfert vers le privé)",
      "Application to withdraw a pupil's record (transfer to private school)",
      "Solicitud de retirada del expediente del alumno (traslado a la enseñanza privada)",
      "Domanda di ritiro del fascicolo dell'alunno (passaggio alla scuola privata)",
      "Antrag auf Herausgabe des Schülerdossiers (Wechsel an eine Privatschule)",
      "Заявление о выдаче дела ученика (переход в частную школу)"
    ),
    desc: D7(
      "طلب يخاطب فيه الولي إدارة المؤسسة لتسليمه ملف ابنه الرسمي بعد قرار تحويله للخاص.",
      "Demande par laquelle le parent prie l'administration de lui remettre le dossier officiel après un transfert au privé.",
      "Request whereby the parent asks the administration to hand over the official record after a transfer to private schooling.",
      "Solicitud con la que el padre pide a la administración la entrega del expediente tras el paso a la enseñanza privada.",
      "Domanda con cui il genitore chiede all'amministrazione la consegna del fascicolo dopo il passaggio al privato.",
      "Antrag, mit dem der Elternteil die Verwaltung um Aushändigung des Dossiers nach Wechsel an eine Privatschule bittet.",
      "Заявление, которым родитель просит администрацию выдать официальное дело после перехода в частную школу."
    ),
    where: W7(
      "إدارة المؤسسة العمومية؛ يسلم الملف للولي مقابل وصل بعد تحرير شهادة المغادرة.",
      "Administration de l'établissement public; le dossier est remis au parent contre récépissé après certificat de radiation.",
      "Public school administration; the record is handed to the parent against receipt after the departure certificate.",
      "Administración del centro público; el expediente se entrega al padre contra recibo tras el certificado de baja.",
      "Amministrazione della scuola pubblica; il fascicolo è consegnato al genitore contro ricevuta dopo il certificato di cessazione.",
      "Verwaltung der öffentlichen Schule; das Dossier wird dem Elternteil gegen Empfangsbestätigung nach der Abgangsbescheinigung ausgehändigt.",
      "Администрация государственной школы; дело выдаётся родителю под расписку после справки о выбытии."
    ),
    authority: "men",
    keywords: ["استرجاع الملف", "retrait du dossier", "withdraw record", "تعليم خاص", "مغادرة"],
  },
  {
    id: "dem-tayssir",
    cat: "demandes",
    title: T7(
      "طلب الاستفادة من برنامج تيسير لدعم التمدرس",
      "Demande d'adhésion au programme Tayssir (appui social à la scolarité)",
      "Application to join the Tayssir programme (social support for schooling)",
      "Solicitud de adhesión al programa Tayssir (apoyo social a la escolaridad)",
      "Domanda di adesione al programma Tayssir (sostegno sociale alla scolarità)",
      "Antrag auf Teilnahme am Programm Tayssir (soziale Förderung des Schulbesuchs)",
      "Заявление об участии в программе Tayssir (социальная поддержка обучения)"
    ),
    desc: D7(
      "طلب يقدمه أسر محدودة الدخل للمدارس المعنية للحصول على الدعم المالي المشروط لأبنائهم.",
      "Demande déposée par les familles à revenu limité auprès des écoles concernées pour obtenir l'aide financière conditionnelle.",
      "Request filed by low-income families with the schools concerned to obtain the conditional cash support.",
      "Solicitud presentada por familias de ingresos limitados ante las escuelas para obtener la ayuda condicionada.",
      "Domanda presentata dalle famiglie a basso reddito alle scuole interessate per ottenere il sussidio condizionato.",
      "Antrag einkommensschwacher Familien bei den betreffenden Schulen zur Erlangung der konditionalen Unterstützung.",
      "Заявление малообеспеченных семей в соответствующие школы о получении условной денежной помощи."
    ),
    where: W7(
      "مؤسسات التعليم الأولي والابتدائي المحددة بالمناطق المعنية؛ تدرس لجان مختلطة الطلبات.",
      "Écoles primaires désignées dans les zones concernées; des commissions mixtes examinent les demandes.",
      "Designated primary schools in the target areas; joint committees examine the requests.",
      "Escuelas designadas en las zonas destinatarias; comisiones mixtas examinan las solicitudes.",
      "Scuole designate nelle zone interessate; commissioni miste esaminano le domande.",
      "Benannte Grundschulen in den Zielgebieten; gemischte Kommissionen prüfen die Anträge.",
      "Назначенные школы в целевых зонах; совместные комиссии рассматривают заявления."
    ),
    authority: "men",
    keywords: ["تيسير", "Tayssir", "الدعم الاجتماعي", "transferts conditionnels", "conditional cash", "التمدرس"],
  },
  // ─── Enseignement supérieur ───
  {
    id: "dem-inscription-licence",
    cat: "demandes",
    title: T7(
      "طلب تسجيل بالسنة الأولى من التعليم العالي (إجازة)",
      "Demande d'inscription en première année de licence",
      "Application for enrolment in the first year of a bachelor's programme",
      "Solicitud de inscripción en el primer año de grado",
      "Domanda di iscrizione al primo anno di laurea triennale",
      "Antrag auf Immatrikulation im ersten Bachelorjahr",
      "Заявление на зачисление на первый год бакалавриата"
    ),
    desc: D7(
      "طلب يشارك به حامل الباكالوريا عبر البوابة الوطنية للالتحاق بالتعليم العالي.",
      "Demande par laquelle le bachelier participe à la campagne nationale d'orientation vers les établissements supérieurs.",
      "Request whereby the baccalaureate holder takes part in the national orientation campaign for higher education.",
      "Solicitud mediante la cual el bachiller participa en la campaña nacional de acceso a la educación superior.",
      "Domanda con cui il maturando partecipa alla campagna nazionale di accesso all'istruzione superiore.",
      "Antrag, mit dem der Abiturient an der nationalen Zulassungskampagne für das Hochschulstudium teilnimmt.",
      "Заявление, с которым обладатель бакалавриата участвует в национальной кампании по зачислению в вузы."
    ),
    where: W7(
      "البوابة الوطنية للالتحاق بالتعليم العالي (CND)؛ تودع الرغبات ثم يؤكد التسجيل بالمؤسسة.",
      "Portail national d'accès à l'enseignement supérieur (CND); les vœux y sont déposés puis l'inscription confirmée à l'établissement.",
      "National higher education admission portal (CND); preferences are entered there and enrolment confirmed at the institution.",
      "Portal nacional de acceso a la educación superior (CND); se registran las preferencias y se confirma la inscripción.",
      "Portale nazionale di accesso all'istruzione superiore (CND); vi si inseriscono le preferenze e l'iscrizione si conferma presso l'ateneo.",
      "Nationales Zulassungsportal für das Hochschulstudium (CND); Wünsche werden dort eingetragen und die Immatrikulation bestätigt.",
      "Национальный портал поступления в вузы (CND); предпочтения вносятся там, зачисление подтверждается в вузе."
    ),
    authority: "enssup",
    keywords: ["باكالوريا", "bachelier", "bac", "إجازة", "licence", "CND"],
  },
  {
    id: "dem-inscription-master",
    cat: "demandes",
    title: T7(
      "طلب تسجيل بالسنة الأولى ماستر",
      "Demande d'inscription en première année de master",
      "Application for enrolment in the first year of a master's programme",
      "Solicitud de inscripción en el primer año de máster",
      "Domanda di iscrizione al primo anno di magistrale",
      "Antrag auf Zulassung zum ersten Masterjahr",
      "Заявление на зачисление на первый год магистратуры"
    ),
    desc: D7(
      "طلب يودعه حامل الإجازة بمؤسسته لمتابعة الدراسة بالماستر وفق الانتقاء.",
      "Demande déposée par le lauréat de la licence auprès de son établissement pour poursuivre en master.",
      "Request filed by a bachelor's graduate with the institution to continue into a master's programme.",
      "Solicitud presentada por el graduado ante su institución para continuar en el máster.",
      "Domanda presentata dal laureato triennale presso l'ateneo per proseguire in magistrale.",
      "Antrag des Bachelorabsolventen bei der Hochschule zur Fortsetzung in den Master.",
      "Заявление выпускника бакалавриата в вуз о продолжении обучения в магистратуре."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة الجامعية؛ الترشيح وفق النقط والطاقة الاستيعابية.",
      "Service de la scolarité de l'établissement; la sélection s'opère selon les notes et la capacité.",
      "Student affairs service of the university; selection is made according to grades and capacity.",
      "Servicio de secretaría del centro universitario; la selección se hace según notas y capacidad.",
      "Servizio didattico dell'ateneo; la selezione avviene secondo i voti e la capienza.",
      "Studierendensekretariat der Hochschule; die Auswahl erfolgt nach Noten und Kapazität.",
      "Служба учебной части вуза; отбор проводится по оценкам и вместимости."
    ),
    authority: "enssup",
    keywords: ["ماستر", "master", "إجازة", "licence", "دراسات عليا", "postgraduate"],
  },
  {
    id: "dem-inscription-doctorat",
    cat: "demandes",
    title: T7(
      "طلب التسجيل بالدكتوراه",
      "Demande d'inscription en doctorat",
      "Application for enrolment in a doctoral programme",
      "Solicitud de inscripción en doctorado",
      "Domanda di iscrizione al dottorato",
      "Antrag auf Zulassung zur Promotion",
      "Заявление о зачислении в докторантуру"
    ),
    desc: D7(
      "طلب يقدمه حامل الماستر لمركز دراسات الدكتوراه مع مشروع بحثي ومشرف مقترح.",
      "Demande présentée par le lauréat du master au centre d'études doctorales avec projet de thèse et encadrant proposé.",
      "Request presented by a master's graduate to the doctoral studies centre with a thesis project and proposed supervisor.",
      "Solicitud presentada por el graduado de máster al centro de estudios de doctorado con proyecto de tesis y director propuesto.",
      "Domanda presentata dal laureato magistrale al centro di dottorato con progetto di tesi e relatore proposto.",
      "Antrag des Masterabsolventen an das Doktorandenzentrum mit Dissertationsprojekt und vorgeschlagenem Betreuer.",
      "Заявление выпускника магистратуры в центр докторских исследований с проектом диссертации и предполагаемым руководителем."
    ),
    where: W7(
      "مركز دراسات الدكتوراه بالمؤسسة؛ تصادق عليه اللجنة العلمية قبل التسجيل النهائي.",
      "Centre d'études doctorales de l'établissement; la commission scientifique valide avant l'inscription définitive.",
      "Doctoral studies centre of the institution; the scientific committee approves before final enrolment.",
      "Centro de estudios de doctorado; la comisión científica valida antes de la inscripción definitiva.",
      "Centro di dottorato dell'ateneo; la commissione scientifica convalida prima dell'iscrizione definitiva.",
      "Doktorandenzentrum der Hochschule; die wissenschaftliche Kommission genehmigt vor der endgültigen Immatrikulation.",
      "Центр докторантуры вуза; учёный комитет утверждает до окончательной регистрации."
    ),
    authority: "enssup",
    keywords: ["دكتوراه", "doctorat", "PhD", "أطروحة", "thèse", "بحث علمي"],
  },
  {
    id: "dem-equivalence-diplome-etranger",
    cat: "demandes",
    title: T7(
      "طلب معادلة شهادة أجنبية",
      "Demande d'équivalence d'un diplôme étranger",
      "Application for equivalence of a foreign diploma",
      "Solicitud de equivalencia de un diploma extranjero",
      "Domanda di equipollenza di un titolo straniero",
      "Antrag auf Gleichwertigkeit eines ausländischen Diploms",
      "Заявление о признании иностранного диплома"
    ),
    desc: D7(
      "طلب يوجه لمصلحة المعادلات قصد الاعتراف بشهادة محصلة بالخارج لمواصلة الدراسة أو التوظيف.",
      "Demande adressée au service des équivalences pour faire reconnaître un diplôme obtenu à l'étranger aux fins d'études ou d'emploi.",
      "Request addressed to the equivalences service to have a diploma obtained abroad recognised for study or employment.",
      "Solicitud dirigida al servicio de equivalencias para reconocer un diploma obtenido en el extranjero a efectos de estudio o empleo.",
      "Domanda indirizzata al servizio delle equipollenze per far riconoscere un titolo conseguito all'estero ai fini di studio o lavoro.",
      "Antrag an die Stelle für Gleichwertigkeiten, um ein im Ausland erworbenes Diplom zu Studien- oder Beschäftigungszwecken anzuerkennen.",
      "Заявление в службу признания о признании диплома, полученного за границей, для учёбы или работы."
    ),
    where: W7(
      "مصلحة المعادلات بوزارة التعليم العالي؛ التقدم عبر البوابة أو بالبريد مع ملف مترجم.",
      "Service des équivalences du ministère; dépôt via le portail ou par courrier avec un dossier traduit.",
      "Ministry's equivalences service; filing via the portal or by post with a translated file.",
      "Servicio de equivalencias del ministerio; presentación por portal o correo con expediente traducido.",
      "Servizio delle equipollenze del ministero; presentazione via portale o posta con fascicolo tradotto.",
      "Gleichwertigkeitsdienst des Ministeriums; Einreichung über das Portal oder per Post mit übersetztem Dossier.",
      "Служба признания министерства; подача через портал или почтой с переведённым делом."
    ),
    authority: "enssup",
    keywords: ["معادلة", "équivalence", "equivalence", "شهادة أجنبية", "diplôme étranger", "foreign diploma"],
    popular: true,
  },
  {
    id: "dem-equivalence-diplome-prive",
    cat: "demandes",
    title: T7(
      "طلب معادلة شهادة صادرة عن مؤسسة خاصة للتعليم العالي",
      "Demande d'équivalence d'un diplôme d'un établissement privé d'enseignement supérieur",
      "Application for equivalence of a diploma from a private higher education institution",
      "Solicitud de equivalencia de un diploma de un centro privado de educación superior",
      "Domanda di equipollenza di un titolo di un istituto privato di istruzione superiore",
      "Antrag auf Gleichwertigkeit eines Diploms einer privaten Hochschule",
      "Заявление о признании диплома частного вуза"
    ),
    desc: D7(
      "طلب للحصول على معادلة شهادة معهد خاص قصد اعتمادها في التوظيف العمومي أو مواصلة الدراسة.",
      "Demande visant à faire reconnaître un diplôme d'institut privé pour l'emploi public ou la poursuite d'études.",
      "Request seeking recognition of a private institute's diploma for public employment or further study.",
      "Solicitud que persigue el reconocimiento de un diploma de instituto privado para empleo público o continuar estudios.",
      "Domanda volta a far riconoscere un titolo di istituto privato per l'impiego pubblico o il proseguimento degli studi.",
      "Antrag auf Anerkennung eines Diploms privater Institute für den öffentlichen Dienst oder weitere Studien.",
      "Заявление о признании диплома частного института для госслужбы или продолжения учёбы."
    ),
    where: W7(
      "مصلحة المعادلات بوزارة التعليم العالي؛ يرفق الملف بشهادة المؤسسة وبرنامجها الدراسي.",
      "Service des équivalences; le dossier comprend l'attestation de l'établissement et son programme.",
      "Equivalences service; the file includes the institution's certificate and its programme.",
      "Servicio de equivalencias; el expediente incluye el certificado del centro y su programa.",
      "Servizio delle equipollenze; il fascicolo comprende l'attestato dell'istituto e il suo programma.",
      "Gleichwertigkeitsdienst; das Dossier enthält die Bescheinigung der Einrichtung und deren Studienplan.",
      "Служба признания; дело включает справку заведения и его программу."
    ),
    authority: "enssup",
    keywords: ["معادلة", "établissement privé", "private institute", "تعليم عال خاص", "توظيف عمومي"],
  },
  {
    id: "dem-releve-notes-universitaire",
    cat: "demandes",
    title: T7(
      "طلب كشف النقط الجامعي",
      "Demande de relevé de notes universitaire",
      "Application for a university transcript of records",
      "Solicitud de expediente académico universitario",
      "Domanda di certificato accademico con esami",
      "Antrag auf eine akademische Notenbescheinigung",
      "Заявление на выписку оценок из вуза"
    ),
    desc: D7(
      "طلب نسخة رسمية من نتائج السنوات الجامعية لاستعمالها في الترشيح أو المعادلة.",
      "Demande d'une copie officielle des résultats des années universitaires aux fins de candidature ou d'équivalence.",
      "Request for an official copy of university years' results for application or equivalence purposes.",
      "Solicitud de una copia oficial de los resultados de los años universitarios para candidaturas o equivalencias.",
      "Domanda di copia ufficiale dei risultati degli anni accademici per candidature o equipollenze.",
      "Antrag auf eine amtliche Abschrift der Studienergebnisse für Bewerbungen oder Gleichwertigkeit.",
      "Заявление на официальную копию результатов учебных лет для поступления или признания."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة؛ يستخرج الكشف من النظام ويوقع قبل التسليم.",
      "Service de la scolarité; le relevé est édité et signé avant remise.",
      "Student affairs service; the transcript is issued and signed before handover.",
      "Servicio de secretaría; el expediente se emite firmado antes de la entrega.",
      "Servizio didattico; il certificato è rilasciato e firmato prima della consegna.",
      "Studierendensekretariat; die Bescheinigung wird ausgestellt und signiert, teils mit digitaler Version.",
      "Служба учебной части; выписка выдаётся с подписью, иногда в цифровом виде."
    ),
    authority: "enssup",
    keywords: ["كشف النقط", "relevé de notes", "transcript", "نتائج", "notes"],
  },
  {
    id: "dem-duplicata-attestation-reussite",
    cat: "demandes",
    title: T7(
      "طلب نظائر شهادة النجاح",
      "Demande de duplicata de l'attestation de réussite",
      "Application for a duplicate of the certificate of success",
      "Solicitud de duplicado del certificado de superación",
      "Domanda di duplicato dell'attestato di superamento",
      "Antrag auf Zweitschrift der Erfolgsbescheinigung",
      "Заявление на дубликат справки об успешном окончании"
    ),
    desc: D7(
      "طلب يقدم عند فقدان شهادة النجاح ليصدر نظيرها من مصلحة الشؤون الطلابية.",
      "Demande déposée en cas de perte de l'attestation afin d'obtenir un duplicata du service de la scolarité.",
      "Request filed upon losing the certificate to obtain a duplicate from the student affairs service.",
      "Solicitud presentada ante la pérdida del certificado para obtener un duplicado de secretaría.",
      "Domanda presentata in caso di smarrimento per ottenere un duplicato dal servizio didattico.",
      "Antrag bei Verlust der Bescheinigung, um eine Zweitschrift vom Studierendensekretariat zu erhalten.",
      "Заявление подаётся при утере справки для получения дубликата в учебной части."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة الأصلية؛ التحقق من الأرشيف قبل التسليم.",
      "Service de la scolarité de l'établissement d'origine; vérification de l'archive avant délivrance.",
      "Student affairs service of the original institution; archive check before delivery.",
      "Servicio de secretaría de la institución de origen; verificación del archivo antes de la entrega.",
      "Servizio didattico dell'ateneo di origine; verifica dell'archivio prima del rilascio.",
      "Studierendensekretariat der ursprünglichen Hochschule; Archivprüfung vor Ausgabe.",
      "Учебная часть исходного вуза; проверка архива перед выдачей."
    ),
    authority: "enssup",
    keywords: ["شهادة النجاح", "attestation de réussite", "certificate of success", "نظير", "duplicata"],
  },
  {
    id: "dem-bourse-excellence",
    cat: "demandes",
    title: T7(
      "طلب منحة الاستحقاق للطلبة المتفوقين",
      "Demande de bourse d'excellence pour étudiants méritants",
      "Application for an excellence scholarship for high-achieving students",
      "Solicitud de beca de excelencia para estudiantes destacados",
      "Domanda di borsa di eccellenza per studenti meritevoli",
      "Antrag auf ein Stipendium für leistungsstarke Studierende",
      "Заявление на стипендию за отличия для успевающих студентов"
    ),
    desc: D7(
      "طلب يقدمه الطلبة الحاصلون على نتائج متميزة للحصول على منحة تشجيعية إضافية.",
      "Demande présentée par les étudiants aux résultats distingués pour obtenir une bourse supplémentaire d'encouragement.",
      "Request filed by students with distinguished results to obtain an additional incentive grant.",
      "Solicitud presentada por estudiantes con resultados distinguidos para obtener una beca adicional de estímulo.",
      "Domanda presentata da studenti con risultati distinti per ottenere una borsa aggiuntiva di incoraggiamento.",
      "Antrag von Studierenden mit herausragenden Ergebnissen auf ein zusätzliches Anreizstipendium.",
      "Заявление студентов с выдающимися результатами о дополнительной поощрительной стипендии."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالجامعة؛ تدرس الملفات وفق النقط وحسب ما تقرره المؤسسة.",
      "Service des affaires estudiantines de l'université; les dossiers sont étudiés selon les notes.",
      "University student affairs service; files are examined according to grades.",
      "Servicio de asuntos estudiantiles; los expedientes se examinan según las notas.",
      "Servizio affari studenteschi dell'università; i fascicoli sono esaminati secondo i voti.",
      "Studierendenservice der Universität; die Dossiers werden nach Noten geprüft.",
      "Служба студенческих дел университета; дела рассматриваются по оценкам."
    ),
    authority: "enssup",
    keywords: ["منحة الاستحقاق", "bourse d'excellence", "excellence scholarship", "تفوق", "mérite"],
  },
  {
    id: "dem-renouvellement-bourse",
    cat: "demandes",
    title: T7(
      "طلب تجديد منحة دراسية للسنة الجامعية",
      "Demande de renouvellement de bourse pour l'année universitaire",
      "Application for renewal of a scholarship for the academic year",
      "Solicitud de renovación de beca para el curso académico",
      "Domanda di rinnovo della borsa per l'anno accademico",
      "Antrag auf Verlängerung eines Stipendiums für das Studienjahr",
      "Заявление о продлении стипендии на учебный год"
    ),
    desc: D7(
      "طلب يجدد بموجبه الطالب المنحة شرط استمراره في الدراسة ونتائجه المرضية.",
      "Demande par laquelle l'étudiant renouvelle sa bourse sous réserve de poursuivre ses études avec résultats satisfaisants.",
      "Request whereby the student renews the scholarship provided studies continue with satisfactory results.",
      "Solicitud mediante la cual el estudiante renueva la beca siempre que continúe los estudios con resultados satisfactorios.",
      "Domanda con cui lo studente rinnova la borsa purché prosegua gli studi con risultati soddisfacenti.",
      "Antrag, mit dem der Studierende das Stipendium verlängert, sofern das Studium mit zufriedenstellenden Ergebnissen fortgesetzt wird.",
      "Заявление, которым студент продлевает стипендию при условии продолжения учёбы с удовлетворительными результатами."
    ),
    where: W7(
      "بوابة منحتي للمنح الدراسية أو مصلحة المنح بالمؤسسة؛ تجدد سنويا قبل أجل محدد.",
      "Portail Minhaty ou service des bourses de l'établissement; renouvellement annuel avant échéance.",
      "Minhaty portal or the institution's scholarships service; annual renewal before the deadline.",
      "Portal Minhaty o servicio de becas; renovación anual antes del plazo.",
      "Portale Minhaty o servizio borse; rinnovo annuale prima della scadenza.",
      "Minhaty-Portal oder Stipendienservice der Hochschule; jährliche Verlängerung vor Fristablauf.",
      "Портал Minhaty или стипендиальная служба вуза; ежегодное продление до срока."
    ),
    authority: "men",
    keywords: ["تجديد المنحة", "renouvellement bourse", "scholarship renewal", "منحتي", "Minhaty", "منحة"],
  },
  {
    id: "dem-hebergement-cite-universitaire",
    cat: "demandes",
    title: T7(
      "طلب الاستفادة من الإقامة بالحرم الجامعي",
      "Demande de logement en cité universitaire",
      "Application for accommodation in a university hall of residence",
      "Solicitud de alojamiento en residencia universitaria",
      "Domanda di alloggio in residenza universitaria",
      "Antrag auf einen Wohnheimsplatz",
      "Заявление на проживание в студенческом общежитии"
    ),
    desc: D7(
      "طلب يقدمه الطالب للمركز الجهوي للأعمال الجامعية قصد حجز سرير بالحرم الجامعي.",
      "Demande présentée au centre régional des œuvres universitaires (CROU) pour réserver une chambre en cité.",
      "Request presented to the regional university works centre (CROU) to book a room on campus.",
      "Solicitud presentada al centro regional de obras universitarias (CROU) para reservar habitación.",
      "Domanda presentata al centro regionale delle opere universitarie (CROU) per prenotare una camera.",
      "Antrag an das regionale Hochschulwerk (CROU) zur Buchung eines Zimmerplatzes.",
      "Заявление в региональный центр студенческого быта (CROU) о бронировании места в общежитии."
    ),
    where: W7(
      "المركز الجهوي للأعمال الجامعية أو بوابة الحرم الجامعي؛ تدرس الطلبات وفق معايير اجتماعية.",
      "Centre régional des œuvres universitaires; les demandes sont traitées selon des critères sociaux.",
      "Regional university works centre; requests are processed according to social criteria.",
      "Centro regional de obras universitarias; las solicitudes se tratan según criterios sociales.",
      "Centro regionale delle opere universitarie; le domande sono trattate secondo criteri sociali.",
      "Regionales Hochschulwerk; die Anträge werden nach sozialen Kriterien bearbeitet.",
      "Региональный центр студенческого быта; заявления обрабатываются по социальным критериям."
    ),
    authority: "enssup",
    keywords: ["الحرم الجامعي", "cité universitaire", "hall of residence", "CROU", "إقامة"],
  },
  {
    id: "dem-transfert-etablissement-sup",
    cat: "demandes",
    title: T7(
      "طلب تحويل التسجيل بين مؤسسات جامعية",
      "Demande de transfert d'inscription entre établissements universitaires",
      "Application to transfer enrolment between university institutions",
      "Solicitud de traslado de matrícula entre instituciones universitarias",
      "Domanda di trasferimento d'iscrizione tra atenei",
      "Antrag auf Übertragung der Immatrikulation zwischen Hochschulen",
      "Заявление о переводе из одного вуза в другой"
    ),
    desc: D7(
      "طلب لنقل ملف الطالب من جامعة لأخرى وفق شروط الاستحقاق والطاقة الاستيعابية.",
      "Demande de transfert du dossier d'un étudiant d'une université à une autre selon les conditions d'éligibilité.",
      "Request to move a student's file from one university to another under eligibility conditions.",
      "Solicitud de traslado del expediente de un estudiante de una universidad a otra según condiciones de elegibilidad.",
      "Domanda di trasferimento del fascicolo da un ateneo all'altro secondo le condizioni di ammissibilità.",
      "Antrag auf Übertragung des Dossiers von einer Universität an eine andere gemäß Zulassungsbedingungen.",
      "Заявление о переводе дела студента из одного университета в другой при условиях допуска."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسستين؛ بموافقة المؤسسة المستقبلة والمصدر.",
      "Service de la scolarité des deux établissements; accord de l'établissement d'accueil et d'origine.",
      "Student affairs services of both institutions; approval of the receiving and originating establishment.",
      "Servicios de secretaría de ambas instituciones; acuerdo del centro receptor y del de origen.",
      "Servizi didattici dei due atenei; accordo dell'istituto ricevente e di quello di provenienza.",
      "Studierendensekretariate beider Einrichtungen; Zustimmung der aufnehmenden und der ursprünglichen Hochschule.",
      "Учебные части обоих вузов; согласие принимающего и исходного заведения."
    ),
    authority: "enssup",
    keywords: ["تحويل التسجيل", "transfert universitaire", "university transfer", "تحويل", "تسجيل"],
  },
  {
    id: "dem-annulation-inscription-remboursement",
    cat: "demandes",
    title: T7(
      "طلب إلغاء التسجيل وإرجاع واجبات التسجيل",
      "Demande d'annulation d'inscription et de remboursement des droits",
      "Application to cancel enrolment and obtain a refund of fees",
      "Solicitud de anulación de matrícula y reembolso de tasas",
      "Domanda di annullamento dell'iscrizione e rimborso delle tasse",
      "Antrag auf Rücknahme der Immatrikulation und Erstattung der Gebühren",
      "Заявление об аннулировании зачисления и возврате сборов"
    ),
    desc: D7(
      "طلب يلتمس إلغاء تسجيل السنة وإرجاع المبالغ المدفوعة كليا أو جزئيا.",
      "Demande sollicitant l'annulation de l'inscription de l'année et la restitution des sommes versées, totale ou partielle.",
      "Request seeking cancellation of the year's enrolment and full or partial refund of the sums paid.",
      "Solicitud que persigue anular la matrícula y la devolución total o parcial de las sumas pagadas.",
      "Domanda che chiede l'annullamento dell'iscrizione e la restituzione totale o parziale delle somme versate.",
      "Antrag auf Annullierung der Immatrikulation und vollständige oder teilweise Rückerstattung der einbezahlten Beträge.",
      "Заявление об аннулировании зачисления и полном или частичном возврате внесённых сумм."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية مع التخليص المالي؛ تطبق آجال وشروط الاسترجاع.",
      "Service de la scolarité avec le service financier; délais et conditions de restitution s'appliquent.",
      "Student affairs with the financial service; refund deadlines and conditions apply.",
      "Secretaría con el servicio financiero; se aplican plazos y condiciones de reembolso.",
      "Segreteria con il servizio finanziario; si applicano scadenze e condizioni di rimborso.",
      "Sekretariat mit dem Finanzdienst; Erstattungsfristen und -bedingungen gelten.",
      "Учебная часть с финансовой службой; применяются сроки и условия возврата."
    ),
    authority: "enssup",
    keywords: ["إلغاء التسجيل", "annulation", "cancellation", "استرجاع", "remboursement", "refund"],
  },
  {
    id: "dem-reprise-etudes",
    cat: "demandes",
    title: T7(
      "طلب استئناف الدراسة بعد انقطاع",
      "Demande de reprise d'études après interruption",
      "Application to resume studies after an interruption",
      "Solicitud de reanudación de estudios tras interrupción",
      "Domanda di ripresa degli studi dopo interruzione",
      "Antrag auf Fortsetzung des Studiums nach Unterbrechung",
      "Заявление о возобновлении учёбы после перерыва"
    ),
    desc: D7(
      "طلب يلتمس من الطالب إعادة قيده بعد توقف مؤقت لأسباب صحية أو اجتماعية.",
      "Demande par laquelle l'étudiant sollicite sa réinscription après une interruption pour raisons médicales ou sociales.",
      "Request whereby the student seeks re-enrolment after an interruption for medical or social reasons.",
      "Solicitud con la que el estudiante pide su reinscripción tras una interrupción por razones médicas o sociales.",
      "Domanda con cui lo studente chiede la reiscrizione dopo un'interruzione per motivi medici o sociali.",
      "Antrag, mit dem der Studierende nach einer Unterbrechung aus medizinischen oder sozialen Gründen die Wiedereinschreibung erbittet.",
      "Заявление студента о восстановлении после перерыва по медицинским или социальным причинам."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بموافقة رئيس المؤسسة؛ يعاد القيد بنفس الجذع أو جذع مشابه.",
      "Service de la scolarité avec accord du chef d'établissement; réinscription dans la même filière ou analogue.",
      "Student affairs with the head of institution's approval; re-enrolment in the same or a similar stream.",
      "Secretaría con aprobación del jefe de estudios; reinscripción en la misma o similar titulación.",
      "Segreteria con l'assenso del responsabile; reiscrizione nello stesso o analogo indirizzo.",
      "Sekretariat mit Zustimmung der Leitung; Wiedereinschreibung in derselben oder ähnlichen Studienrichtung.",
      "Учебная часть с согласием руководства; восстановление на том же или схожем направлении."
    ),
    authority: "enssup",
    keywords: ["استئناف الدراسة", "reprise d'études", "resume studies", "انقطاع", "réinscription"],
  },
  {
    id: "dem-duplicata-carte-etudiant",
    cat: "demandes",
    title: T7(
      "طلب نظير البطاقة الجامعية",
      "Demande de duplicata de la carte d'étudiant",
      "Application for a duplicate student card",
      "Solicitud de duplicado del carnet de estudiante",
      "Domanda di duplicato della tessera universitaria",
      "Antrag auf Zweitschrift des Studierendenausweises",
      "Заявление на дубликат студенческого билета"
    ),
    desc: D7(
      "طلب بديل للبطاقة الجامعية المفقودة أو التالفة قصد الاستفادة من التخفيضات المقررة.",
      "Demande de remplacement de la carte perdue ou détériorée afin de continuer à bénéficier des réductions accordées.",
      "Request to replace a lost or damaged card to continue enjoying the granted discounts.",
      "Solicitud de sustitución de la tarjeta perdida o deteriorada para seguir disfrutando de las reducciones.",
      "Domanda di sostituzione della tessera smarrita o deteriorata per continuare a godere delle riduzioni.",
      "Antrag auf Ersatz des verlorenen oder beschädigten Ausweises, um die gewährten Ermäßigungen weiter zu nutzen.",
      "Заявление о замене утерянного или повреждённого билета для дальнейшего пользования льготами."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية؛ تسلم نظير البطاقة بعد أداء الرسوم المقررة.",
      "Service de la scolarité; le duplicata est délivré après paiement des frais prévus.",
      "Student affairs service; the duplicate is issued after payment of the applicable fees.",
      "Servicio de secretaría; el duplicado se entrega tras el pago de las tasas previstas.",
      "Servizio didattico; il duplicato è rilasciato dopo il pagamento delle tasse previste.",
      "Studierendensekretariat; die Zweitschrift wird nach Entrichtung der vorgesehenen Gebühren ausgehändigt.",
      "Учебная часть; дубликат выдаётся после оплаты установленных сборов."
    ),
    authority: "enssup",
    keywords: ["البطاقة الجامعية", "carte d'étudiant", "student card", "نظير", "duplicata"],
  },
  // ─── Santé ───
  {
    id: "dem-rdv-consultation-chu",
    cat: "demandes",
    title: T7(
      "طلب موعد لاستشارة طبية بالمستشفى الجامعي",
      "Demande de rendez-vous pour consultation au centre hospitalier universitaire",
      "Application for an appointment at the university hospital",
      "Solicitud de cita para consulta en el hospital universitario",
      "Domanda di appuntamento per visita presso l'ospedale universitario",
      "Antrag auf einen Termin an der Universitätsklinik",
      "Заявление на приём в университетскую клинику"
    ),
    desc: D7(
      "طلب يقدم لمصلحة المواعيد بالاستشفاء الجامعي للاستفادة من موعد استشارة مختصة.",
      "Demande présentée au service des rendez-vous du CHU pour bénéficier d'une consultation spécialisée.",
      "Request presented to the university hospital's appointments service for a specialized consultation.",
      "Solicitud presentada al servicio de citas del CHU para una consulta especializada.",
      "Domanda presentata al servizio appuntamenti del CHU per una visita specialistica.",
      "Antrag an den Terminservice der Universitätsklinik für eine Facharztkonsultation.",
      "Заявление в службу записи университетской клиники на приём к специалисту."
    ),
    where: W7(
      "مكتب المواعيد بالاستشفاء الجامعي أو الهاتف؛ يحدد اليوم والتوقيت حسب التخصص.",
      "Bureau des rendez-vous du CHU ou par téléphone; le jour et l'heure sont fixés selon la spécialité.",
      "Hospital appointments office or by phone; the date and time are set according to the specialty.",
      "Oficina de citas del hospital o por teléfono; día y hora se fijan según la especialidad.",
      "Ufficio appuntamenti dell'ospedale o per telefono; giorno e ora sono fissati secondo la specialità.",
      "Terminbüro der Klinik oder telefonisch; Datum und Uhrzeit werden nach Fachrichtung festgelegt.",
      "Кабинет записи клиники или по телефону; дата и время назначаются по специальности."
    ),
    authority: "sante",
    keywords: ["موعد طبي", "rendez-vous CHU", "hospital appointment", "استشارة", "consultation", "CHU"],
    popular: true,
  },
  {
    id: "dem-copie-dossier-medical",
    cat: "demandes",
    title: T7(
      "طلب الحصول على نسخة من الملف الطبي",
      "Demande d'obtention d'une copie du dossier médical",
      "Application to obtain a copy of the medical record",
      "Solicitud de copia de la historia clínica",
      "Domanda di copia della cartella clinica",
      "Antrag auf eine Kopie der Patientenakte",
      "Заявление на копию медицинской карты"
    ),
    desc: D7(
      "طلب يوجه للمستشفى للحصول على نسخة من ملف الطبيب لاستعمال شخصي أو رأي ثان.",
      "Demande adressée à l'hôpital pour obtenir une copie de son dossier à des fins personnelles ou pour un second avis.",
      "Request addressed to the hospital to obtain a copy of one's file for personal use or a second opinion.",
      "Solicitud dirigida al hospital para obtener copia del expediente para uso personal o segunda opinión.",
      "Domanda rivolta all'ospedale per ottenere copia della propria cartella per uso personale o secondo parere.",
      "Antrag an das Krankenhaus auf eine Kopie der eigenen Akte für den persönlichen Gebrauch oder Zweitmeinung.",
      "Заявление в больницу о выдаче копии своего дела для личных целей или второго мнения."
    ),
    where: W7(
      "مصلحة الأرشيف الطبي بالمستشفى؛ التسليم بعد التعريف بالهوية.",
      "Service des archives médicales de l'hôpital; remise après vérification d'identité.",
      "Hospital medical records service; handover after identity verification.",
      "Servicio de archivos médicos; entrega tras verificación de identidad.",
      "Servizio archivi medici; consegna dopo verifica dell'identità.",
      "Medizinisches Archiv des Krankenhauses; Aushändigung nach Identitätsprüfung.",
      "Архив больницы; выдача после проверки личности."
    ),
    authority: "sante",
    keywords: ["الملف الطبي", "dossier médical", "medical record", "نسخة", "cartella clinica"],
  },
  {
    id: "dem-compte-rendu-hospitalisation",
    cat: "demandes",
    title: T7(
      "طلب الحصول على تقرير الاستشفاء",
      "Demande de compte rendu d'hospitalisation",
      "Application for a hospitalisation report",
      "Solicitud de informe de hospitalización",
      "Domanda di referto di ricovero",
      "Antrag auf einen Krankenhausbericht",
      "Заявление на выписку о госпитализации"
    ),
    desc: D7(
      "طلب ملخص طبي عن فترة الاستشفاء يشخصها ويدونها الطبيب المعالج للمريض.",
      "Demande du résumé médical établi par le médecin traitant au sujet du séjour hospitalier.",
      "Request for the medical summary drawn up by the attending physician about the hospital stay.",
      "Solicitud del resumen médico elaborado por el médico tratante sobre la estancia hospitalaria.",
      "Domanda del riassunto medico redatto dal medico curante sul ricovero.",
      "Antrag auf die Zusammenfassung des behandelnden Arztes über den Krankenhausaufenthalt.",
      "Заявление на заключение лечащего врача о пребывании в стационаре."
    ),
    where: W7(
      "مصلحة الاستشفاء المعنية أو أرشيف المستشفى؛ يوقعه الطبيب قبل التسليم.",
      "Service hospitalier concerné ou archives; visé par le médecin avant remise.",
      "Ward concerned or the archives; signed by the physician before handover.",
      "Servicio implicado o archivos; firmado por el médico antes de la entrega.",
      "Reparto interessato o archivi; firmato dal medico prima della consegna.",
      "Betroffene Abteilung oder Archiv; vom Arzt vor Übergabe unterzeichnet.",
      "Отделение или архив; подписывается врачом до выдачи."
    ),
    authority: "sante",
    keywords: ["تقرير الاستشفاء", "compte rendu", "hospital report", "خلاصة", "résumé médical"],
  },
  {
    id: "dem-copie-imagerie-medicale",
    cat: "demandes",
    title: T7(
      "طلب نسخة من صور الأشعة أو الرنين المغناطيسي",
      "Demande de copie d'actes d'imagerie médicale (radiologie, IRM)",
      "Application for copies of medical imaging (X-ray, MRI)",
      "Solicitud de copia de pruebas de imagen (radiografía, RM)",
      "Domanda di copia di esami di imaging (radiografia, risonanza)",
      "Antrag auf Kopien radiologischer Befunde (Röntgen, MRT)",
      "Заявление на копии снимков (рентген, МРТ)"
    ),
    desc: D7(
      "طلب يقدم لمصلحة الأشعة للحصول على نسخ من الفحوصات الملتقطة سابقا أو قرصها.",
      "Demande présentée au service de radiologie pour obtenir les examens antérieurs ou leur support numérique.",
      "Request presented to the radiology department to obtain earlier examinations or their digital media.",
      "Solicitud presentada al servicio de radiología para obtener exámenes anteriores o su soporte digital.",
      "Domanda presentata al servizio di radiologia per ottenere esami precedenti o il supporto digitale.",
      "Antrag an die Radiologie zur Herausgabe früherer Untersuchungen oder digitaler Datenträger.",
      "Заявление в отделение радиологии о выдаче прежних снимков или цифрового носителя."
    ),
    where: W7(
      "مصلحة الأشعة بالمستشفى؛ التسليم بعد التحقق من هوية المعني بالأمر.",
      "Service de radiologie de l'hôpital; remise après contrôle de l'identité du demandeur.",
      "Hospital radiology service; handover after checking the applicant's identity.",
      "Servicio de radiología; entrega tras comprobar la identidad del solicitante.",
      "Servizio di radiologia; consegna dopo controllo dell'identità del richiedente.",
      "Radiologie des Krankenhauses; Aushändigung nach Prüfung der Identität des Antragstellers.",
      "Отделение радиологии; выдача после проверки личности заявителя."
    ),
    authority: "sante",
    keywords: ["أشعة", "imagerie", "radiology", "IRM", "أرشفة"],
  },
  {
    id: "dem-bulletin-analyses-laboratoire",
    cat: "demandes",
    title: T7(
      "طلب نسخة من نتائج التحاليل المخبرية",
      "Demande de copie des résultats d'analyses de laboratoire",
      "Application for a copy of laboratory test results",
      "Solicitud de copia de resultados de laboratorio",
      "Domanda di copia degli esiti di laboratorio",
      "Antrag auf Kopie der Laborergebnisse",
      "Заявление на копию результатов анализов"
    ),
    desc: D7(
      "طلب يقدم للمختبر لاسترجاع نتائج تحاليل سابقة لأغراض المتابعة الطبية.",
      "Demande présentée au laboratoire pour récupérer des résultats antérieurs aux fins de suivi médical.",
      "Request presented to the laboratory to retrieve earlier results for medical follow-up purposes.",
      "Solicitud presentada al laboratorio para recuperar resultados anteriores para seguimiento médico.",
      "Domanda presentata al laboratorio per recuperare esiti precedenti per il follow-up.",
      "Antrag an das Labor zur Beschaffung früherer Befunde für die ärztliche Nachverfolgung.",
      "Заявление в лабораторию о выдаче прежних результатов для медицинского наблюдения."
    ),
    where: W7(
      "مختبر المستشفى أو المختبر المعتمد؛ الاسترجاع مقابل وصل أو مرجع التحليل.",
      "Laboratoire de l'hôpital ou laboratoire agréé; restitution contre récépissé ou référence d'analyse.",
      "Hospital laboratory or accredited lab; retrieval against a receipt or test reference.",
      "Laboratorio del hospital o acreditado; recuperación contra recibo o referencia de análisis.",
      "Laboratorio dell'ospedale o accreditato; ritiro contro ricevuta o riferimento dell'analisi.",
      "Krankenhauslabor oder akkreditiertes Labor; Ausgabe gegen Quittung oder Untersuchungsreferenz.",
      "Лаборатория больницы или аккредитованная; выдача по квитанции или номеру анализа."
    ),
    authority: "sante",
    keywords: ["تحاليل", "analyses", "laboratory results", "مختبر", "laboratoire"],
  },
  {
    id: "dem-duplicata-carnet-sante",
    cat: "demandes",
    title: T7(
      "طلب نظير كناش صحة الأم والطفل",
      "Demande de duplicata du carnet de santé mère-enfant",
      "Application for a duplicate mother-and-child health booklet",
      "Solicitud de duplicado del carnet de salud madre-niño",
      "Domanda di duplicato del libretto di salute madre-bambino",
      "Antrag auf Zweitschrift des Mutter-Kind-Gesundheitsbüchleins",
      "Заявление на дубликат книжки здоровья матери и ребёнка"
    ),
    desc: D7(
      "طلب بديل للكناش الوطني لصحة الأم والطفل بعد فقدانه أو تلفه.",
      "Demande de remplacement du carnet national de santé mère-enfant après perte ou détérioration.",
      "Request to replace the national mother-and-child health booklet after loss or damage.",
      "Solicitud de sustitución del carnet nacional de salud madre-niño tras pérdida o deterioro.",
      "Domanda di sostituzione del carnet nazionale di salute madre-bambino dopo smarrimento o deterioramento.",
      "Antrag auf Ersatz des nationalen Mutter-Kind-Büchleins nach Verlust oder Beschädigung.",
      "Заявление о замене национальной книжки здоровья матери и ребёнка после утери или порчи."
    ),
    where: W7(
      "المركز الصحي أو مصلحة حفظ الصحة بالجماعة؛ يستخرج النظير بعد التحقق من السجلات.",
      "Centre de santé ou service d'hygiène de la commune; le duplicata est établi après vérification des registres.",
      "Health centre or the commune's hygiene service; the duplicate is drawn up after checking registers.",
      "Centro de salud o servicio de higiene; el duplicado se emite tras verificar los registros.",
      "Centro di salute o servizio d'igiene; il duplicato è redatto dopo verifica dei registri.",
      "Gesundheitszentrum oder Hyginedienst; die Zweitschrift wird nach Registerprüfung erstellt.",
      "Центр здоровья или санитарная служба; дубликат оформляется после проверки журналов."
    ),
    authority: "sante",
    keywords: ["كناش الصحة", "carnet de santé", "health booklet", "تلقيح", "vaccination"],
  },
  {
    id: "dem-attestation-vaccination",
    cat: "demandes",
    title: T7(
      "طلب شهادة تلقيح",
      "Demande d'attestation de vaccination",
      "Application for a vaccination certificate",
      "Solicitud de certificado de vacunación",
      "Domanda di certificato di vaccinazione",
      "Antrag auf eine Impfbescheinigung",
      "Заявление на справку о прививках"
    ),
    desc: D7(
      "شهادة تثبت تلقي المعني بالأمر اللقاحات المقررة تسلم للمدارس أو جهات العمل.",
      "Certificat attestant que les vaccins obligatoires ont été administrés, délivré aux écoles ou employeurs.",
      "Certificate stating that the required vaccines were administered, issued for schools or employers.",
      "Certificado que acredita la administración de las vacunas obligatorias, para escuelas o empleadores.",
      "Certificato che attesta la somministrazione dei vaccini obbligatori, per scuole o datori di lavoro.",
      "Bescheinigung, dass die vorgeschriebenen Impfungen verabreicht wurden, für Schulen oder Arbeitgeber.",
      "Справка о проведении обязательных прививок для школ или работодателей."
    ),
    where: W7(
      "المركز الصحي التابع لمكان السكنى؛ تسلم الشهادة بعد التحقق من سجل التلقيح.",
      "Centre de santé du lieu de résidence; délivrance après consultation du registre des vaccinations.",
      "Health centre of the place of residence; issued after consulting the vaccination register.",
      "Centro de salud del lugar de residencia; emisión tras consulta del registro de vacunas.",
      "Centro di salute del luogo di residenza; rilascio dopo consulto del registro vaccinale.",
      "Gesundheitszentrum des Wohnortes; Ausstellung nach Einsicht in das Impfregister.",
      "Центр здоровья по месту жительства; выдаётся после проверки прививочного журнала."
    ),
    authority: "sante",
    keywords: ["تلقيح", "vaccination", "شهادة تلقيح", "vaccination certificate", "لقاح"],
  },
  {
    id: "dem-carnet-vaccination-international",
    cat: "demandes",
    title: T7(
      "طلب الحصول على الشهادة الدولية للتلقيح (السفر)",
      "Demande du carnet international de vaccination (voyages)",
      "Application for the international vaccination certificate (travel)",
      "Solicitud del certificado internacional de vacunación (viajes)",
      "Domanda del certificato internazionale di vaccinazione (viaggi)",
      "Antrag auf den internationalen Impfpass (Reisen)",
      "Заявление на международное свидетельство о прививках (для поездок)"
    ),
    desc: D7(
      "طلب للوثيقة الصفراء المطلوبة عند السفر نحو بلدان تشترط لقاحات محددة.",
      "Demande du document requis pour voyager vers les pays exigeant des vaccins déterminés.",
      "Request for the document required to travel to countries that impose specific vaccines.",
      "Solicitud del documento exigido para viajar a países que imponen vacunas determinadas.",
      "Domanda del documento richiesto per recarsi in paesi che impongono vaccini specifici.",
      "Antrag auf das Dokument, das für Reisen in Länder mit bestimmten Impfanforderungen nötig ist.",
      "Заявление на документ, требуемый для поездки в страны с обязательными прививками."
    ),
    where: W7(
      "مصلحة الطب الوقائي بالمستشفى الإقليمي أو مركز التلقيح المعتمد؛ التسليم بعد التلقيح.",
      "Service de médecine préventive de l'hôpital provincial; délivrance après l'administration du vaccin.",
      "Preventive medicine service of the provincial hospital; issued after the vaccine is given.",
      "Servicio de medicina preventiva del hospital provincial; emisión tras administrar la vacuna.",
      "Servizio di medicina preventiva dell'ospedale provinciale; rilascio dopo la somministrazione.",
      "Dienst für Präventivmedizin des Provinzkrankenhauses; Ausstellung nach Impfung.",
      "Служба профилактической медицины провинциальной больницы; выдаётся после прививки."
    ),
    authority: "sante",
    keywords: ["الشهادة الدولية", "carnet international", "international certificate", "حمى صفراء", "fièvre jaune", "سفر"],
  },
  {
    id: "dem-soins-etranger-accord-prealable",
    cat: "demandes",
    title: T7(
      "طلب الموافقة المسبقة على العلاج بالخارج",
      "Demande d'accord préalable pour soins à l'étranger",
      "Application for prior authorisation for treatment abroad",
      "Solicitud de autorización previa para tratamiento en el extranjero",
      "Domanda di autorizzazione preventiva per cure all'estero",
      "Antrag auf Vorabgenehmigung für Auslandsbehandlung",
      "Заявление на предварительное разрешение лечения за рубежом"
    ),
    desc: D7(
      "طلب يرفق بتقارير طبية يلتمس فيه المريض ترخيص وزارة الصحة للعلاج بالخارج.",
      "Demande accompagnée de rapports médicaux sollicitant l'autorisation du ministère pour se soigner à l'étranger.",
      "Request accompanied by medical reports seeking the ministry's authorisation to be treated abroad.",
      "Solicitud acompañada de informes médicos que pide la autorización del ministerio para tratarse en el extranjero.",
      "Domanda corredata da referti medici che chiede l'autorizzazione del ministero per curarsi all'estero.",
      "Antrag mit ärztlichen Berichten, der die Genehmigung des Ministeriums für eine Auslandsbehandlung erbittet.",
      "Заявление с медицинскими заключениями о разрешении министерства на лечение за границей."
    ),
    where: W7(
      "مصلحة الموافقات المسبقة بوزارة الصحة؛ الدراسة من طرف لجنة طبية مختصة.",
      "Service des accords préalables du ministère de la santé; instruction par une commission médicale.",
      "Prior authorisation service of the health ministry; processing by a specialized medical committee.",
      "Servicio de autorizaciones previas del ministerio; tramitación por comisión médica.",
      "Servizio autorizzazioni preventive del ministero; istruttoria tramite commissione medica.",
      "Dienst für Vorabgenehmigungen des Gesundheitsministeriums; Bearbeitung durch eine medizinische Kommission.",
      "Служба предварительных согласований минздрава; рассмотрение медицинской комиссией."
    ),
    authority: "sante",
    keywords: ["العلاج بالخارج", "soins à l'étranger", "treatment abroad", "موافقة مسبقة", "accord préalable"],
  },
  {
    id: "dem-attestation-grossesse",
    cat: "demandes",
    title: T7(
      "طلب شهادة الحمل (للاستفادة من العطلة والتعويضات)",
      "Demande d'attestation de grossesse (congé et indemnités)",
      "Application for a pregnancy certificate (leave and benefits)",
      "Solicitud de certificado de embarazo (permiso e indemnizaciones)",
      "Domanda di certificato di gravidanza (congedo e indennità)",
      "Antrag auf eine Schwangerschaftsbescheinigung (Urlaub und Leistungen)",
      "Заявление на справку о беременности (отпуск и пособия)"
    ),
    desc: D7(
      "شهادة طبية تثبت الحمل ومدته لتقديمها للعمل أو صناديق التعويضات العائلية.",
      "Certificat médical constatant la grossesse et son terme, destiné à l'employeur ou aux caisses d'allocations.",
      "Medical certificate stating the pregnancy and its term, for the employer or family benefit funds.",
      "Certificado médico que constata el embarazo y su fecha prevista, para el empleador o las cajas de prestaciones.",
      "Certificato medico che attesta la gravidanza e il termine, per il datore di lavoro o gli enti.",
      "Ärztliche Bescheinigung über die Schwangerschaft und den Termin, für Arbeitgeber oder Leistungskassen.",
      "Медицинская справка о беременности и сроке для работодателя или фондов пособий."
    ),
    where: W7(
      "الطبيب المعالج أو مصلحة النساء والتوليد بالمستشفى؛ تسلم بعد الفحص الطبي.",
      "Médecin traitant ou service de gynécologie-obstétrique; délivrance après examen clinique.",
      "Attending physician or the obstetrics department; issued after a clinical examination.",
      "Médico tratante o servicio de ginecología; emisión tras exploración clínica.",
      "Medico curante o reparto di ginecologia; rilascio dopo visita clinica.",
      "Behandelnder Arzt oder die gynäkologische Abteilung; Ausstellung nach klinischer Untersuchung.",
      "Лечащий врач или отделение гинекологии; выдаётся после осмотра."
    ),
    authority: "sante",
    keywords: ["شهادة الحمل", "attestation de grossesse", "pregnancy certificate", "عطلة الأمومة", "congé maternité"],
  },
  {
    id: "dem-visite-medicale-travail",
    cat: "demandes",
    title: T7(
      "طلب الفحص الطبي قبل التوظيف أو لمزاولة العمل",
      "Demande de visite médicale d'aptitude au travail",
      "Application for a fitness-for-work medical examination",
      "Solicitud de examen médico de aptitud laboral",
      "Domanda di visita medica di idoneità al lavoro",
      "Antrag auf arbeitsmedizinische Tauglichkeitsuntersuchung",
      "Заявление на медосмотр трудоспособности"
    ),
    desc: D7(
      "طلب فحص طبي يثبت اللياقة الصحية لمزاولة وظيفة أو مهنة معينة.",
      "Demande d'examen constatant l'aptitude physique à exercer un emploi ou une profession déterminée.",
      "Request for an examination certifying physical fitness to hold a job or profession.",
      "Solicitud de examen que acredita la aptitud física para desempeñar un empleo.",
      "Domanda di accertamento che certifica l'idoneità fisica a svolgere un impiego.",
      "Antrag auf Untersuchung, die die körperliche Tauglichkeit für eine Beschäftigung bescheinigt.",
      "Заявление на освидетельствование физической пригодности для работы."
    ),
    where: W7(
      "الطبيب العمومي أو طبيب طب الشغل بالمؤسسة؛ تسلم شهادة اللياقة بعد الفحص.",
      "Médecin public ou médecin du travail de l'organisme; l'attestation est délivrée après examen.",
      "Public physician or the body's occupational doctor; the certificate is issued after examination.",
      "Médico público o médico laboral; el certificado se emite tras el examen.",
      "Medico pubblico o medico del lavoro; l'attestato è rilasciato dopo la visita.",
      "Öffentlicher Arzt oder Werksarzt; die Bescheinigung wird nach der Untersuchung ausgestellt.",
      "Государственный врач или медик по труду; справка выдаётся после осмотра."
    ),
    authority: "sante",
    keywords: ["فحص طبي", "visite médicale", "medical check-up", "لياقة", "aptitude", "طب الشغل"],
  },
  {
    id: "dem-aptitude-metiers-alimentation",
    cat: "demandes",
    title: T7(
      "طلب الفحص الطبي لذوي المهن الغذائية",
      "Demande de visite médicale des métiers de l'alimentation",
      "Application for the food trades medical examination",
      "Solicitud de examen médico para oficios alimentarios",
      "Domanda di visita medica per mestieri alimentari",
      "Antrag auf Untersuchung für Lebensmittelberufe",
      "Заявление на медосмотр для пищевых профессий"
    ),
    desc: D7(
      "فحص إلزامي لكل من يشتغل بتحضير أو بيع الأغذية لجلب شهادة صحية.",
      "Examen obligatoire pour toute personne préparant ou vendant des aliments, aboutissant au certificat sanitaire.",
      "Mandatory examination for anyone preparing or selling food, leading to the health certificate.",
      "Examen obligatorio para quienes preparan o venden alimentos, que da lugar al certificado sanitario.",
      "Esame obbligatorio per chi prepara o vende alimenti, che conduce al certificato sanitario.",
      "Pflichtuntersuchung für alle, die Lebensmittel zubereiten oder verkaufen, mit Gesundheitszeugnis.",
      "Обязательный осмотр для занятых приготовлением или продажей еды, дающий санитарную справку."
    ),
    where: W7(
      "مركز التطبيب بالمستشفى الإقليمي أو مصلحة النظافة بالجماعة؛ تجدد الشهادة دوريا.",
      "Centre de santé de l'hôpital provincial ou service d'hygiène de la commune; renouvellement périodique.",
      "Provincial hospital health centre or the commune's hygiene service; periodic renewal.",
      "Centro del hospital provincial o servicio de higiene; renovación periódica.",
      "Centro sanitario dell'ospedale provinciale o servizio d'igiene; rinnovo periodico.",
      "Gesundheitszentrum des Provinzkrankenhauses oder Hyginedienst; periodische Erneuerung.",
      "Центр здоровья или санитарная служба; периодическое продление."
    ),
    authority: "sante",
    keywords: ["المهن الغذائية", "métiers alimentation", "food trades", "شهادة صحية", "hygiène"],
  },
  // ─── Transport & mobilité ───
  {
    id: "dem-oncf-objets-trouves",
    cat: "demandes",
    title: T7(
      "طلب استرجاع أشياء ضائعة بالقطار (ONCF)",
      "Demande de restitution d'objets perdus à bord des trains (ONCF)",
      "Application to recover property lost on trains (ONCF)",
      "Solicitud de recuperación de objetos perdidos en el tren (ONCF)",
      "Domanda di restituzione di oggetti smarriti sul treno (ONCF)",
      "Antrag auf Rückgabe im Zug verlorener Gegenstände (ONCF)",
      "Заявление о возврате вещей, утерянных в поезде (ONCF)"
    ),
    desc: D7(
      "إعلان عن فقد شيء بالقطار مع وصفه الدقيق ليتيح مكتب الأشياء الضائعة تتبعه.",
      "Déclaration de perte à bord du train avec description précise, permettant au service des objets trouvés de la tracer.",
      "Declaration of loss on board with a precise description, enabling the lost property office to trace it.",
      "Declaración de pérdida a bordo con descripción precisa, que permite al servicio de objetos hallados rastrearla.",
      "Dichiarazione di smarrimento a bordo con descrizione precisa, che consente all'ufficio oggetti di rintracciarla.",
      "Verlusterklärung an Bord mit genauer Beschreibung, damit das Fundbüro den Gegenstand nachverfolgen kann.",
      "Заявление об утере в поезде с точным описанием, позволяющее бюро находок отследить вещь."
    ),
    where: W7(
      "مكتب الأشياء الضائعة بمحطات ONCF أو عبر موقع المكتب؛ الاسترجاع بعد التعريف.",
      "Service des objets trouvés en gare ou via le site de l'ONCF; restitution après identification.",
      "Station lost property office or via the ONCF website; restitution after identification.",
      "Oficina de objetos hallados en la estación o por el sitio de la ONCF; devolución tras identificación.",
      "Ufficio oggetti della stazione o tramite il sito ONCF; restituzione dopo identificazione.",
      "Fundbüro im Bahnhof oder über die ONCF-Website; Rückgabe nach Identifizierung.",
      "Бюро находок на вокзале или через сайт ONCF; возврат после идентификации."
    ),
    authority: "oncf",
    keywords: ["أشياء ضائعة", "objets trouvés", "lost property", "ONCF", "قطار"],
  },
  {
    id: "dem-oncf-abonnement-navette",
    cat: "demandes",
    title: T7(
      "طلب الاشتراك في أسفار القطار (ONCF)",
      "Demande d'abonnement aux voyages en train (ONCF)",
      "Application for a train travel season ticket (ONCF)",
      "Solicitud de abono de viajes en tren (ONCF)",
      "Domanda di abbonamento ai viaggi in treno (ONCF)",
      "Antrag auf ein Bahndauerticket (ONCF)",
      "Заявление на абонемент на поездки (ONCF)"
    ),
    desc: D7(
      "طلب بطاقة اشتراك للخطوط التي يسافر بها المعني بالأمر يوميا بأسعار مناسبة.",
      "Demande d'une carte d'abonnement pour les lignes empruntées quotidiennement, à tarif réduit.",
      "Request for a season card for daily lines at a reduced fare.",
      "Solicitud de una tarjeta de abono para líneas diarias a tarifa reducida.",
      "Domanda di tessera di abbonamento per le linee giornaliere a tariffa ridotta.",
      "Antrag auf eine Dauerkarte für täglich genutzte Strecken zum ermäßigten Tarif.",
      "Заявление на абонемент для ежедневных маршрутов по льготному тарифу."
    ),
    where: W7(
      "شبابيك المحطات الرئيسية بمكتب التذاكر أو عبر بوابة ONCF؛ تسلم البطاقة بالتعريف.",
      "Guichets des grandes gares ou portail ONCF; la carte est délivrée sur justificatif.",
      "Major station counters or the ONCF portal; the card is issued on proof.",
      "Taquillas de las grandes estaciones o portal ONCF; la tarjeta se emite con justificante.",
      "Sportelli delle grandi stazioni o portale ONCF; la tessera è rilasciata su documentazione.",
      "Schalter großer Bahnhöfe oder ONCF-Portal; Ausstellung gegen Nachweis.",
      "Кассы крупных вокзалов или портал ONCF; выдаётся по подтверждению."
    ),
    authority: "oncf",
    keywords: ["اشتراك", "abonnement", "season ticket", "ONCF", "قطار", "تنقل"],
  },
  {
    id: "dem-oncf-fret-marchandises",
    cat: "demandes",
    title: T7(
      "طلب نقل البضائع عبر الشحن السككي (ONCF)",
      "Demande de transport de marchandises par fret ferroviaire (ONCF)",
      "Application to ship goods by rail freight (ONCF)",
      "Solicitud de transporte de mercancías por ferrocarril (ONCF)",
      "Domanda di trasporto merci via ferro (ONCF)",
      "Antrag auf Gütertransport per Schiene (ONCF)",
      "Заявление на перевозку грузов по железной дороге (ONCF)"
    ),
    desc: D7(
      "طلب يقدم للمكتب لنقل سلع بالقطار بين المحطات المزودة بمرافق الشحن.",
      "Demande présentée à l'office pour acheminer des marchandises entre gares équipées d'installations fret.",
      "Request presented to the office to move goods between stations equipped with freight facilities.",
      "Solicitud presentada a la oficina para mover mercancías entre estaciones con instalaciones de carga.",
      "Domanda presentata all'ufficio per trasportare merci tra stazioni dotate di strutture merci.",
      "Antrag an das Büro, Waren zwischen mit Güteranlagen ausgestatteten Bahnhöfen zu befördern.",
      "Заявление в офис о перевозке грузов между станциями с грузовыми мощностями."
    ),
    where: W7(
      "مصلحة الشحن بمكاتب ONCF؛ يقدم الملف مع وصف البضاعة وكمياتها.",
      "Service fret des agences ONCF; dossier avec description des marchandises et des tonnages.",
      "Freight service of ONCF agencies; file with goods description and tonnages.",
      "Servicio de carga de las agencias ONCF; expediente con descripción y tonelajes.",
      "Servizio merci delle agenzie ONCF; fascicolo con descrizione e tonnellaggi.",
      "Frachtdienst der ONCF-Agenturen; Dossier mit Warenbeschreibung und Tonnen.",
      "Грузовая служба агентств ONCF; дело с описанием грузов и тоннажем."
    ),
    authority: "oncf",
    keywords: ["شحن", "fret", "freight", "ONCF", "بضائع", "marchandises"],
  },
  {
    id: "dem-oncf-reservation-groupe",
    cat: "demandes",
    title: T7(
      "طلب حجز جماعي لفائدة مجموعة (ONCF)",
      "Demande de réservation de groupe (ONCF)",
      "Application for a group booking (ONCF)",
      "Solicitud de reserva de grupo (ONCF)",
      "Domanda di prenotazione di gruppo (ONCF)",
      "Antrag auf Gruppenreservierung (ONCF)",
      "Заявление на групповое бронирование (ONCF)"
    ),
    desc: D7(
      "طلب لتأمين مقاعد لعدد كبير من المسافرين في رحلة مدرسية أو تنظيم جمعوي.",
      "Demande visant à réserver des places pour un grand groupe lors d'un voyage scolaire ou associatif.",
      "Request to secure seats for a large group on a school or association trip.",
      "Solicitud para reservar plazas para un grupo numeroso en un viaje escolar o asociativo.",
      "Domanda per riservare posti a un gruppo numeroso in un viaggio scolastico o associativo.",
      "Antrag, Plätze für eine große Gruppe auf einer Schul- oder Vereinsfahrt zu sichern.",
      "Заявление о закреплении мест для большой группы в школьной или общественной поездке."
    ),
    where: W7(
      "مصلحة البيع للمجموعات بمكاتب ONCF؛ الحجز قبل أيام من السفر.",
      "Service des ventes aux groupes des agences ONCF; réservation quelques jours avant le départ.",
      "Group sales service of ONCF agencies; booking some days before departure.",
      "Servicio de ventas a grupos; reserva días antes de la salida.",
      "Servizio vendite ai gruppi; prenotazione giorni prima della partenza.",
      "Gruppenverkaufsstelle der ONCF; Buchung einige Tage vor Abfahrt.",
      "Служба групповых продаж ONCF; бронирование за несколько дней до отправления."
    ),
    authority: "oncf",
    keywords: ["حجز جماعي", "réservation groupe", "group booking", "ONCF", "رحلة"],
  },
  {
    id: "dem-immatriculation-vehicule-importe",
    cat: "demandes",
    title: T7(
      "طلب تسجيل سيارة مستوردة (البطاقة الرمادية)",
      "Demande d'immatriculation d'un véhicule importé (carte grise)",
      "Application to register an imported vehicle (grey card)",
      "Solicitud de matriculación de un vehículo importado",
      "Domanda di immatricolazione di un veicolo importato",
      "Antrag auf Zulassung eines importierten Fahrzeugs",
      "Заявление о регистрации ввезённого автомобиля"
    ),
    desc: D7(
      "ملف تسجيل يودع لدى الوكالة مع وثائق الجمارك والحسومات لتسليم البطاقة الرمادية.",
      "Dossier d'immatriculation déposé à l'agence avec quittances douanières pour obtenir la carte grise.",
      "Registration file lodged with the agency with customs receipts to obtain the grey card.",
      "Expediente de matriculación presentado con recibos de aduana para obtener la tarjeta gris.",
      "Pratica di immatricolazione presentata con ricevute doganali per ottenere la carta di circolazione.",
      "Zulassungsdossier mit Zollquittungen zur Erlangung des Fahrzeugscheins.",
      "Дело о регистрации с таможенными квитанциями для получения техпаспорта."
    ),
    where: W7(
      "وكالات السلامة الطرقية (NARSA) بعد التخليص الجمركي؛ الحجز المسبق عبر البوابة.",
      "Agences NARSA après le dédouanement; prise de rendez-vous via le portail.",
      "NARSA agencies after customs clearance; appointment booked via the portal.",
      "Agencias NARSA tras el despacho aduanero; cita previa por el portal.",
      "Agenzie NARSA dopo lo sdoganamento; appuntamento via portale.",
      "NARSA-Agenturen nach der Verzollung; Terminbuchung über das Portal.",
      "Агентства NARSA после растаможки; запись через портал."
    ),
    keywords: ["تسجيل سيارة", "immatriculation", "vehicle registration", "سيارة مستوردة", "voiture importée", "NARSA"],
    popular: true,
  },
  {
    id: "dem-immatriculation-remorque",
    cat: "demandes",
    title: T7(
      "طلب تسجيل مقطورة (عربة خفيفة أو ثقيلة)",
      "Demande d'immatriculation d'une remorque",
      "Application to register a trailer",
      "Solicitud de matriculación de un remolque",
      "Domanda di immatricolazione di un rimorchio",
      "Antrag auf Zulassung eines Anhängers",
      "Заявление о регистрации прицепа"
    ),
    desc: D7(
      "ملف يودع لوكالة الترخيص قصد إعطاء لوحة للمقطورة المرافقة للسيارة أو الشاحنة.",
      "Dossier déposé à l'agence pour attribuer une plaque à la remorque tractée.",
      "File lodged with the agency to assign a plate to the towed trailer.",
      "Expediente presentado para asignar placa al remolque remolcado.",
      "Pratica presentata per assegnare una targa al rimorchio trainato.",
      "Dossier zur Zuweisung eines Kennzeichens für den gezogenen Anhänger.",
      "Дело о присвоении номера буксируемому прицепу."
    ),
    where: W7(
      "وكالات السلامة الطرقية؛ مع فاتورة الشراء وشهادة المطابقة إن وجدت.",
      "Agences NARSA; avec facture d'achat et certificat de conformité le cas échéant.",
      "NARSA agencies; with purchase invoice and certificate of conformity where applicable.",
      "Agencias NARSA; con factura y certificado de conformidad si procede.",
      "Agenzie NARSA; con fattura e certificato di conformità ove applicabile.",
      "NARSA-Agenturen; mit Kaufrechnung und Konformitätsbescheinigung falls zutreffend.",
      "Агентства NARSA; со счётом-фактурой и сертификатом соответствия при наличии."
    ),
    keywords: ["مقطورة", "remorque", "trailer", "تسجيل", "immatriculation"],
  },
  {
    id: "dem-changement-adresse-carte-grise",
    cat: "demandes",
    title: T7(
      "طلب تغيير العنوان في البطاقة الرمادية",
      "Demande de changement d'adresse sur la carte grise",
      "Application to change the address on the grey card",
      "Solicitud de cambio de domicilio en la tarjeta gris",
      "Domanda di cambio di indirizzo sulla carta di circolazione",
      "Antrag auf Adressänderung im Fahrzeugschein",
      "Заявление об изменении адреса в техпаспорте"
    ),
    desc: D7(
      "طلب تحديث بيانات العنوان بعد الانتقال إلى مسكن جديد داخل نفس المدينة أو خارجها.",
      "Demande de mise à jour de l'adresse après déménagement dans une nouvelle résidence.",
      "Request to update the address after moving to a new residence.",
      "Solicitud de actualización del domicilio tras mudarse a una nueva residencia.",
      "Domanda di aggiornamento dell'indirizzo dopo il trasferimento in una nuova residenza.",
      "Antrag auf Aktualisierung der Adresse nach dem Umzug.",
      "Заявление об обновлении адреса после переезда."
    ),
    where: W7(
      "وكالة NARSA التابع لها العنوان الجديد؛ مع بطاقة التعريف الوطنية.",
      "Agence NARSA du nouveau domicile; avec la carte d'identité nationale.",
      "NARSA agency of the new home; with the national ID card.",
      "Agencia NARSA del nuevo domicilio; con el DNI.",
      "Agenzia NARSA della nuova residenza; con la carta d'identità.",
      "NARSA-Agentur des neuen Wohnsitzes; mit dem Personalausweis.",
      "Агентство NARSA по новому месту жительства; с удостоверением личности."
    ),
    keywords: ["تغيير العنوان", "changement d'adresse", "address change", "البطاقة الرمادية", "carte grise"],
  },
  {
    id: "dem-duplicata-carte-grise",
    cat: "demandes",
    title: T7(
      "طلب نظير البطاقة الرمادية (فقدان أو تلف)",
      "Demande de duplicata de la carte grise (perte ou détérioration)",
      "Application for a duplicate grey card (loss or damage)",
      "Solicitud de duplicado de la tarjeta gris (pérdida o deterioro)",
      "Domanda di duplicato della carta di circolazione (smarrimento o deterioro)",
      "Antrag auf Zweitschrift des Fahrzeugscheins (Verlust oder Beschädigung)",
      "Заявление на дубликат техпаспорта (утеря или порча)"
    ),
    desc: D7(
      "طلب بديل للبطاقة الرمادية بعد ضياعها أو تلفها ليستمر استعمال السيارة قانونيا.",
      "Demande de remplacement de la carte grise pour continuer à circuler légalement.",
      "Request to replace the grey card so the vehicle can continue to be used lawfully.",
      "Solicitud de sustitución de la tarjeta gris para seguir circulando legalmente.",
      "Domanda di sostituzione della carta di circolazione per continuare a circolare legalmente.",
      "Antrag auf Ersatz des Fahrzeugscheins, um weiterhin legal zu fahren.",
      "Заявление о замене техпаспорта для законной эксплуатации автомобиля."
    ),
    where: W7(
      "وكالات NARSA بعد نشر إعلان الضياع إن اقتضى الحال؛ تسلم نظائر البطاقة.",
      "Agences NARSA, publication d'avis de perte le cas échéant; le duplicata est ensuite délivré.",
      "NARSA agencies, publication of a loss notice where required; the duplicate is then issued.",
      "Agencias NARSA, publicación de aviso de pérdida si procede; luego se emite el duplicado.",
      "Agenzie NARSA, pubblicazione dell'avviso di smarrimento se richiesto; poi si rilascia il duplicato.",
      "NARSA-Agenturen, Verlustanzeige falls erforderlich; anschließend Ausstellung der Zweitschrift.",
      "Агентства NARSA, публикация объявления об утере при необходимости; затем выдаётся дубликат."
    ),
    keywords: ["نظير البطاقة", "duplicata carte grise", "duplicate grey card", "فقدان", "perte"],
  },
  {
    id: "dem-duplicata-permis-conduire",
    cat: "demandes",
    title: T7(
      "طلب نظير رخصة السياقة",
      "Demande de duplicata du permis de conduire",
      "Application for a duplicate driving licence",
      "Solicitud de duplicado del permiso de conducir",
      "Domanda di duplicato della patente",
      "Antrag auf Zweitschrift des Führerscheins",
      "Заявление на дубликат водительского удостоверения"
    ),
    desc: D7(
      "طلب استرجاع رخصة السياقة بعد فقدانها أو إتلافها مع بيان هوية حاملها.",
      "Demande de rétablissement du permis après perte ou détérioration, avec identification du titulaire.",
      "Request to restore the licence after loss or damage, with identification of the holder.",
      "Solicitud de restablecimiento del permiso tras pérdida o deterioro, con identificación del titular.",
      "Domanda di ripristino della patente dopo smarrimento o deterioro, con identificazione del titolare.",
      "Antrag auf Wiederherstellung des Führerscheins nach Verlust oder Beschädigung, mit Identifizierung des Inhabers.",
      "Заявление о восстановлении удостоверения после утери или порчи с идентификацией владельца."
    ),
    where: W7(
      "وكالات NARSA مع إثبات الهوية؛ أحيانا يطلب إعلان الضياع بالجرائد.",
      "Agences NARSA avec pièce d'identité; un avis de perte est parfois exigé.",
      "NARSA agencies with proof of identity; a loss notice is sometimes required.",
      "Agencias NARSA con identificación; a veces se exige aviso de pérdida.",
      "Agenzie NARSA con documento d'identità; talvolta è richiesto l'avviso di smarrimento.",
      "NARSA-Agenturen mit Ausweis; bisweilen wird eine Verlustanzeige verlangt.",
      "Агентства NARSA с удостоверением личности; иногда требуется объявление об утере."
    ),
    keywords: ["نظير رخصة السياقة", "duplicata permis", "duplicate licence", "رخصة", "permis de conduire"],
  },
  {
    id: "dem-echange-permis-etranger",
    cat: "demandes",
    title: T7(
      "طلب تبديل رخصة سياقة أجنبية بالمغربية",
      "Demande d'échange d'un permis de conduire étranger",
      "Application to exchange a foreign driving licence",
      "Solicitud de canje de un permiso de conducir extranjero",
      "Domanda di conversione di una patente straniera",
      "Antrag auf Umtausch eines ausländischen Führerscheins",
      "Заявление об обмене иностранного водительского удостоверения"
    ),
    desc: D7(
      "طلب يقدمه مقيم أو أجنبي لاستبدال رخصته الوطنية برخصة مغربية بعد الترجمة.",
      "Demande présentée par un résident pour substituer son permis national par un permis marocain, après traduction.",
      "Request presented by a resident to substitute their national licence with a Moroccan one, after translation.",
      "Solicitud de un residente para sustituir su permiso nacional por uno marroquí, tras traducción.",
      "Domanda di un residente per sostituire la patente nazionale con una marocchina, dopo traduzione.",
      "Antrag eines Residenten, seinen nationalen Führerschein nach Übersetzung durch einen marokkanischen zu ersetzen.",
      "Заявление резидента о замене национального удостоверения марокканским после перевода."
    ),
    where: W7(
      "وكالات NARSA مع ترجمة معتمدة للرخصة وجواز السفر أو الإقامة.",
      "Agences NARSA avec traduction assermentée du permis et passeport ou carte de séjour.",
      "NARSA agencies with certified translation of the licence and passport or residence card.",
      "Agencias NARSA con traducción jurada y pasaporte o tarjeta de residencia.",
      "Agenzie NARSA con traduzione giurata e passaporto o permesso di soggiorno.",
      "NARSA-Agenturen mit beglaubigter Übersetzung und Pass oder Aufenthaltstitel.",
      "Агентства NARSA с заверенным переводом и паспортом или видом на жительство."
    ),
    keywords: ["تبديل رخصة", "échange permis", "licence exchange", "رخصة أجنبية", "permis étranger"],
  },
  {
    id: "dem-ajout-categorie-permis",
    cat: "demandes",
    title: T7(
      "طلب إضافة صنف إلى رخصة السياقة",
      "Demande d'ajout d'une catégorie au permis de conduire",
      "Application to add a category to the driving licence",
      "Solicitud de ampliación de categoría del permiso",
      "Domanda di estensione della patente",
      "Antrag auf Erweiterung der Fahrerlaubnis",
      "Заявление о добавлении категории к водительскому удостоверению"
    ),
    desc: D7(
      "طلب لتوسيع رخصة السياقة لتشمل الدراجات المحروكة أو الشاحنات بعد تكوين وامتحان.",
      "Demande d'extension du permis aux motos ou aux poids lourds après formation et examen.",
      "Request to extend the licence to motorcycles or heavy goods vehicles after training and test.",
      "Solicitud de extensión a motos o camiones tras formación y examen.",
      "Domanda di estensione a motocicli o mezzi pesanti dopo formazione ed esame.",
      "Antrag auf Erweiterung auf Motorräder oder Lkw nach Ausbildung und Prüfung.",
      "Заявление о расширении на мотоциклы или грузовики после обучения и экзамена."
    ),
    where: W7(
      "مدارس التعليم ثم وكالات NARSA للامتحان؛ تسلم رخصة موسعة عند النجاح.",
      "Auto-écoles puis agences NARSA pour l'examen; un permis élargi est délivré en cas de réussite.",
      "Driving schools then NARSA agencies for the test; an extended licence is issued upon passing.",
      "Autoescuelas y luego agencias NARSA para el examen; se emite permiso ampliado al aprobar.",
      "Scuole guida e poi agenzie NARSA per l'esame; patente estesa rilasciata in caso di successo.",
      "Fahrschulen, dann NARSA-Agenturen für die Prüfung; bei Erfolg wird ein erweiterter Führerschein ausgestellt.",
      "Автошколы, затем агентства NARSA на экзамен; при успехе выдаётся расширенное удостоверение."
    ),
    keywords: ["إضافة صنف", "ajout catégorie", "add category", "دراجة نارية", "moto", "شاحنات"],
  },
  {
    id: "dem-transport-scolaire",
    cat: "demandes",
    title: T7(
      "طلب الاستفادة من النقل المدرسي",
      "Demande de bénéfice du transport scolaire",
      "Application for school transport service",
      "Solicitud de transporte escolar",
      "Domanda di trasporto scolastico",
      "Antrag auf Schultransport",
      "Заявление о школьном транспорте"
    ),
    desc: D7(
      "طلب يقدم للجماعة أو إدارة المؤسسة لنقل التلاميذ البعيد مسكنهم عن المدرسة.",
      "Demande présentée à la commune ou à l'école pour transporter les élèves dont le domicile est éloigné.",
      "Request presented to the commune or school to transport pupils living far away.",
      "Solicitud presentada al ayuntamiento o la escuela para trasladar a alumnos lejanos.",
      "Domanda presentata al comune o alla scuola per trasportare alunni lontani.",
      "Antrag an die Gemeinde oder Schule, entfernte Schüler zu befördern.",
      "Заявление в коммуну или школу о перевозке удалённых учеников."
    ),
    where: W7(
      "مصلحة النقل بالجماعة أو إدارة المؤسسة؛ حسب الخطوط المبرمجة والطاقة.",
      "Service transport de la commune ou direction de l'école; selon les circuits programmés.",
      "Commune's transport service or the school administration; according to planned routes.",
      "Servicio de transporte municipal o dirección; según rutas programadas.",
      "Servizio trasporti comunale o direzione; secondo i percorsi programmati.",
      "Transportdienst der Gemeinde oder Schulleitung; nach geplanten Routen.",
      "Транспортная служба коммуны или администрация школы; по запланированным маршрутам."
    ),
    keywords: ["النقل المدرسي", "transport scolaire", "school transport", "الجماعة", "bus"],
  },
  // ─── ONEE — eau & électricité ───
  {
    id: "dem-one-augmentation-puissance",
    cat: "demandes",
    title: T7(
      "طلب زيادة القدرة الكهربائية المطلوبة",
      "Demande d'augmentation de la puissance électrique souscrite",
      "Application to increase the subscribed electrical power",
      "Solicitud de aumento de la potencia eléctrica contratada",
      "Domanda di aumento della potenza elettrica sottoscritta",
      "Antrag auf Erhöhung der gebuchten elektrischen Leistung",
      "Заявление об увеличении подключённой электрической мощности"
    ),
    desc: D7(
      "طلب يقدم للمكتب لتقوية العداد عندما لا تكفي القدرة الحالية الأجهزة الجديدة.",
      "Demande présentée à l'office pour renforcer l'abonnement lorsque la puissance actuelle ne suffit plus.",
      "Request presented to the office to upgrade the subscription when the current power is no longer enough.",
      "Solicitud presentada a la oficina para reforzar la potencia cuando la actual ya no basta.",
      "Domanda presentata all'ufficio per potenziare l'allaccio quando l'attuale non basta più.",
      "Antrag an das Amt zur Verstärkung, wenn die bisherige Leistung nicht mehr ausreicht.",
      "Заявление в офис об усилении подключения, когда текущей мощности недостаточно."
    ),
    where: W7(
      "وكالات ONEE أو موقع المكتب؛ التدخل بعد أداء المصاريف التقنية.",
      "Agences ONEE ou site de l'office; intervention après paiement des frais techniques.",
      "ONEE agencies or the office's website; intervention after payment of technical fees.",
      "Agencias ONEE o web de la oficina; intervención tras el pago de gastos técnicos.",
      "Agenzie ONEE o sito; intervento dopo il pagamento delle spese tecniche.",
      "ONEE-Agenturen oder Website; Einsatz nach Begleichung der technischen Gebühren.",
      "Агентства ONEE или сайт офиса; выезд после оплаты технических сборов."
    ),
    authority: "one",
    keywords: ["زيادة القدرة", "augmentation puissance", "power upgrade", "عداد", "compteur", "ONEE"],
    popular: true,
  },
  {
    id: "dem-one-branchement-provisoire",
    cat: "demandes",
    title: T7(
      "طلب ربط مؤقت بالكهرباء (ورشة أو تظاهر)",
      "Demande de branchement provisoire (chantier ou manifestation)",
      "Application for a temporary connection (site or event)",
      "Solicitud de acometida provisional (obra o evento)",
      "Domanda di allacciamento provvisorio (cantiere o evento)",
      "Antrag auf provisorischen Anschluss (Baustelle oder Veranstaltung)",
      "Заявление о временном подключении (стройка или мероприятие)"
    ),
    desc: D7(
      "طلب تزويد مؤقت بالتيار لمواقع البناء أو المناسبات قبل التربيص النهائي.",
      "Demande de fourniture temporaire pour les chantiers ou fêtes avant le branchement définitif.",
      "Request for temporary supply for building sites or festivities before the final connection.",
      "Solicitud de suministro temporal para obras o fiestas antes del acometida definitiva.",
      "Domanda di fornitura temporanea per cantieri o feste prima dell'allacciamento definitivo.",
      "Antrag auf vorübergehende Versorgung für Baustellen oder Feste vor dem Endanschluss.",
      "Заявление о временном электроснабжении строек или праздников до постоянного подключения."
    ),
    where: W7(
      "وكالات ONEE مع دفع تسبيق قابل للاسترجاع؛ الفك بعد نهاية الأشغال.",
      "Agences ONEE avec dépôt de caution remboursable; enlèvement à la fin des travaux.",
      "ONEE agencies with a refundable deposit; removed at the end of the works.",
      "Agencias ONEE con depósito reembolsable; retiro al final de la obra.",
      "Agenzie ONEE con deposito rimborsabile; rimozione a fine lavori.",
      "ONEE-Agenturen mit rückerstattbarer Kaution; Abbau nach Abschluss der Arbeiten.",
      "Агентства ONEE с возвращаемым залогом; демонтаж по окончании работ."
    ),
    authority: "one",
    keywords: ["ربط مؤقت", "branchement provisoire", "temporary connection", "ورشة", "chantier"],
  },
  {
    id: "dem-one-branchement-agricole",
    cat: "demandes",
    title: T7(
      "طلب ربط كهربائي لأغراض فلاحية (ضخ المياه)",
      "Demande de branchement électrique à usage agricole (pompage)",
      "Application for an agricultural electricity connection (pumping)",
      "Solicitud de acometida eléctrica agrícola (bombeo)",
      "Domanda di allacciamento elettrico agricolo (pompaggio)",
      "Antrag auf landwirtschaftlichen Stromanschluss (Pumpbetrieb)",
      "Заявление о сельхозэлектроснабжении (насосная)"
    ),
    desc: D7(
      "طلب لتزويد مضخات الري بالتيار ضمن التعرفة الفلاحية المدعومة.",
      "Demande d'alimentation des pompes d'irrigation au tarif agricole soutenu.",
      "Request to supply irrigation pumps at the supported agricultural tariff.",
      "Solicitud de alimentación de bombas a la tarifa agrícola apoyada.",
      "Domanda di alimentazione delle pompe alla tariffa agricola agevolata.",
      "Antrag auf Versorgung der Pumpen zum landwirtschaftlichen Tarif.",
      "Заявление о питании насосов по льготному аграрному тарифу."
    ),
    where: W7(
      "وكالات ONEE بالمنطقة القروية؛ مع شهادة ملكية الأرض أو عقد كرائها.",
      "Agences ONEE en milieu rural; avec titre de propriété ou bail des terres.",
      "ONEE agencies in rural areas; with land title or lease.",
      "Agencias ONEE rurales; con título de propiedad o arrendamiento.",
      "Agenzie ONEE rurali; con atto di proprietà o contratto d'affitto.",
      "ONEE-Agenturen in ländlichen Gebieten; mit Grundbuchausweis oder Pachtvertrag.",
      "Агентства ONEE в сельской местности; с документом на землю или арендой."
    ),
    authority: "one",
    keywords: ["ري", "pompage", "pumping", "تعرفة فلاحية", "tarif agricole", "ONEE"],
  },
  {
    id: "dem-one-branchement-commercial",
    cat: "demandes",
    title: T7(
      "طلب ربط محل تجاري بعداد مهني (كهرباء وماء)",
      "Demande de branchement d'un local commercial (compteur professionnel)",
      "Application to connect a commercial premises (professional meter)",
      "Solicitud de acometida de local comercial (contador profesional)",
      "Domanda di allacciamento di un locale commerciale (contatore professionale)",
      "Antrag auf Anschluss von Geschäftsräumen (Profizähler)",
      "Заявление о подключении коммерческого помещения (профсчётчик)"
    ),
    desc: D7(
      "طلب تزويد محل تجاري بالماء والكهرباء بتعرفة المهنيين أصحاب الأنشطة.",
      "Demande d'alimentation en eau et électricité d'un local au tarif professionnel.",
      "Request for water and electricity supply to a premises at the professional tariff.",
      "Solicitud de suministro de agua y luz a un local a la tarifa profesional.",
      "Domanda di fornitura di acqua ed elettricità al locale alla tariffa professionale.",
      "Antrag auf Wasser- und Stromversorgung zu Geschäftsräumen zum Professional-Tarif.",
      "Заявление о водоснабжении и электроснабжении помещения по профессиональному тарифу."
    ),
    where: W7(
      "وكالات ONEE أو مقاول معتمد؛ بعد الحصول على رخصة الاستغلال.",
      "Agences ONEE ou installateur agréé; après obtention de la licence d'exploitation.",
      "ONEE agencies or approved installer; after obtaining the trading licence.",
      "Agencias ONEE o instalador autorizado; tras obtener la licencia.",
      "Agenzie ONEE o installatore autorizzato; dopo la licenza d'esercizio.",
      "ONEE-Agenturen oder zugelassener Installateur; nach Erhalt der Gewerbeerlaubnis.",
      "Агентства ONEE или сертифицированный монтажник; после получения лицензии."
    ),
    authority: "one",
    keywords: ["محل تجاري", "local commercial", "commercial premises", "عداد مهني", "compteur"],
  },
  {
    id: "dem-one-branchement-collectif",
    cat: "demandes",
    title: T7(
      "طلب ربط جماعي لعمارة سكنية (عدادات فرعية)",
      "Demande de branchement collectif d'un immeuble (compteurs divisionnaires)",
      "Application for a collective connection of a building (sub-meters)",
      "Solicitud de acometida colectiva de un edificio (contadores divisionarios)",
      "Domanda di allacciamento collettivo di un edificio (contatori divisionali)",
      "Antrag auf Sammelanschluss eines Gebäudes (Wohnzähler)",
      "Заявление о коллективном подключении дома (поквартирные счётчики)"
    ),
    desc: D7(
      "طلب يقدمه المنعش أو الساكنون لتركيب عداد عام وعدادات فردية لكل شقة.",
      "Demande visant l'installation d'un compteur général et de compteurs individuels par appartement.",
      "Request for installing a main meter and individual meters per apartment.",
      "Solicitud de instalación de un contador general y contadores individuales por piso.",
      "Domanda di installazione di un contatore generale e contatori individuali per appartamento.",
      "Antrag auf Einbau eines Hauptzählers und einzelner Zähler je Wohnung.",
      "Заявление об установке общего и поквартирных счётчиков."
    ),
    where: W7(
      "وكالات ONEE بعد شهادة الإيواء أو إتمام البناء؛ مع تقارير المعتمدين.",
      "Agences ONEE après certificat d'hébergement ou d'achèvement; avec rapports d'agréés.",
      "ONEE agencies after housing or completion certificate; with approved installers' reports.",
      "Agencias ONEE tras certificado de habitabilidad; con informes de instaladores.",
      "Agenzie ONEE dopo certificato di abitabilità; con relazioni di installatori.",
      "ONEE-Agenturen nach Bezugsfertigkeitsbescheinigung; mit Berichten zugelassener Installateure.",
      "Агентства ONEE после справки о заселении; с отчётами сертифицированных монтажников."
    ),
    authority: "one",
    keywords: ["عمارة", "immeuble", "building connection", "عداد فرعي", "compteurs divisionnaires"],
  },
  {
    id: "dem-one-branchement-moyenne-tension",
    cat: "demandes",
    title: T7(
      "طلب ربط بجهد متوسط (وحدة صناعية)",
      "Demande de branchement en moyenne tension (unité industrielle)",
      "Application for a medium-voltage connection (industrial unit)",
      "Solicitud de acometida en media tensión (unidad industrial)",
      "Domanda di allacciamento in media tensione (unità industriale)",
      "Antrag auf Mittelspannungsanschluss (Industriebetrieb)",
      "Заявление о подключении на среднее напряжение (промышленный объект)"
    ),
    desc: D7(
      "طلب لتزويد مصنع أو وحدة كبيرة عبر محول خاص بعد دراسة تقنية.",
      "Demande d'alimentation d'une usine via transformateur dédié après étude technique.",
      "Request to supply a factory via a dedicated transformer after a technical study.",
      "Solicitud de alimentación de una fábrica mediante transformador dedicado tras estudio técnico.",
      "Domanda di alimentazione di uno stabilimento tramite trasformatore dedicato dopo studio tecnico.",
      "Antrag auf Versorgung einer Fabrik über eigenen Transformator nach technischer Studie.",
      "Заявление о питании завода через отдельный трансформатор после технического исследования."
    ),
    where: W7(
      "المديرية الجهوية لONEE؛ يوقع عقد خاص يحدد الجهد والتجهيزات.",
      "Direction régionale de l'ONEE; un contrat dédié fixe la tension et les équipements.",
      "ONEE regional directorate; a dedicated contract sets the voltage and equipment.",
      "Dirección regional de ONEE; un contrato fija la tensión y los equipos.",
      "Direzione regionale ONEE; un contratto dedicato fissa tensione e apparecchiature.",
      "Regionaldirektion der ONEE; ein eigener Vertrag legt Spannung und Ausrüstung fest.",
      "Региональная дирекция ONEE; специальный договор фиксирует напряжение и оборудование."
    ),
    authority: "one",
    keywords: ["جهد متوسط", "moyenne tension", "medium voltage", "مصنع", "industrie"],
  },
  {
    id: "dem-one-changement-titulaire",
    cat: "demandes",
    title: T7(
      "طلب تغيير صاحب عقد الاشتراك (بيع أو كراء)",
      "Demande de changement de titulaire du contrat d'abonnement",
      "Application to change the subscription contract holder",
      "Solicitud de cambio de titular del contrato",
      "Domanda di cambio di intestatario del contratto",
      "Antrag auf Wechsel des Vertragsinhabers",
      "Заявление о смене владельца договора"
    ),
    desc: D7(
      "طلب نقل اسم صاحب العقد بعد بيع العقار أو تغيير المكتري للساكن الجديد.",
      "Demande de transfert du nom du titulaire après vente du bien ou changement de locataire.",
      "Request to transfer the holder's name after sale of the property or change of tenant.",
      "Solicitud de transferencia del nombre tras venta del inmueble o cambio de inquilino.",
      "Domanda di trasferimento dell'intestazione dopo vendita dell'immobile o cambio inquilino.",
      "Antrag auf Übertragung des Namens nach Verkauf oder Mieterwechsel.",
      "Заявление о передаче имени владельца после продажи объекта или смены арендатора."
    ),
    where: W7(
      "وكالات ONEE مع عقد البيع أو الكراء وبطاقة التعريف؛ دون قطع الخدمة.",
      "Agences ONEE avec acte de vente ou bail et pièce d'identité; sans coupure de service.",
      "ONEE agencies with sale deed or lease and ID; without service interruption.",
      "Agencias ONEE con escritura o contrato y DNI; sin corte de servicio.",
      "Agenzie ONEE con atto di vendita o affitto e documento; senza interruzione.",
      "ONEE-Agenturen mit Kaufvertrag oder Mietvertrag und Ausweis; ohne Unterbrechung.",
      "Агентства ONEE с договором купли/аренды и удостоверением; без отключения."
    ),
    authority: "one",
    keywords: ["تغيير الاسم", "changement titulaire", "change holder", "عقد", "contrat", "ONEE"],
    popular: true,
  },
  {
    id: "dem-one-option-tarifaire",
    cat: "demandes",
    title: T7(
      "طلب تغيير الخيار التعريفي (الخدمة الليلية)",
      "Demande de changement d'option tarifaire (option nuit)",
      "Application to change the tariff option (night option)",
      "Solicitud de cambio de opción tarifaria (opción nocturna)",
      "Domanda di cambio di opzione tariffaria (opzione notte)",
      "Antrag auf Wechsel der Tarifoption (Nachtoption)",
      "Заявление о смене тарифной опции (ночная)"
    ),
    desc: D7(
      "طلب الانتقال إلى تعرفة الليل أو الساعات الثلاث للاستفادة من أثمان أدنى خارج أوقات الذروة.",
      "Demande de passage à l'option nuit ou trihoraire afin de bénéficier de prix réduits hors pointe.",
      "Request to switch to the night or time-of-use option to benefit from off-peak prices.",
      "Solicitud de paso a la opción nocturna para beneficiarse de precios reducidos fuera de punta.",
      "Domanda di passaggio all'opzione notte per beneficiare di prezzi ridotti fuori picco.",
      "Antrag auf Umstellung auf die Nacht- oder Zeitarifoption, um von Niedrigpreisen außerhalb der Spitzenzeit zu profitieren.",
      "Заявление о переходе на ночную опцию для льготных цен вне пиковых часов."
    ),
    where: W7(
      "وكالات ONEE؛ يشترط أحيانا استبدال العداد بآخر مزدوج التعرفة.",
      "Agences ONEE; le remplacement du compteur par un modèle double tarif est parfois requis.",
      "ONEE agencies; replacement of the meter with a dual-tariff model is sometimes required.",
      "Agencias ONEE; a veces se exige cambiar el contador por uno de doble tarifa.",
      "Agenzie ONEE; talvolta è richiesto un contatore a doppia tariffa.",
      "ONEE-Agenturen; teilweise ist ein Doppeltarifzähler erforderlich.",
      "Агентства ONEE; иногда требуется замена счётчика на двухтарифный."
    ),
    authority: "one",
    keywords: ["تعرفة", "option tarifaire", "tariff option", "خدمة الليل", "option nuit", "ONEE"],
  },
  {
    id: "dem-one-echelonnement-dette",
    cat: "demandes",
    title: T7(
      "طلب تقسيط مبالغ الفواتير المستحقة",
      "Demande d'échelonnement des factures impayées",
      "Application to pay outstanding bills in instalments",
      "Solicitud de fraccionamiento de facturas impagadas",
      "Domanda di rateizzazione delle fatture non pagate",
      "Antrag auf Ratenzahlung offener Rechnungen",
      "Заявление о рассрочке задолженности по счетам"
    ),
    desc: D7(
      "طلب يلتمس من المكتب تقسيط الديون على دفعات شهرية لتجنب القطع.",
      "Demande sollicitant de l'office un paiement mensuel des arriérés pour éviter la coupure.",
      "Request seeking from the office monthly payment of arrears to avoid disconnection.",
      "Solicitud de pago mensual de los atrasos para evitar el corte.",
      "Domanda di pagamento mensile degli arretrati per evitare il distacco.",
      "Antrag auf monatliche Zahlung der Rückstände, um die Abschaltung zu vermeiden.",
      "Заявление о ежемесячной оплате долгов для избежания отключения."
    ),
    where: W7(
      "وكالات ONEE أو مصلحة التحصيل؛ يوقع تعهد بالأداء حسب الجدولة.",
      "Agences ONEE ou service de recouvrement; signature d'un engagement selon l'échéancier.",
      "ONEE agencies or the collection service; signing of a commitment per schedule.",
      "Agencias o servicio de cobro; firma de compromiso según calendario.",
      "Agenzie o servizio incassi; firma d'impegno secondo il piano.",
      "Agenturen oder Inkassodienst; Unterzeichnung einer Verpflichtung nach Plan.",
      "Агентства или служба взыскания; подписание обязательства по графику."
    ),
    authority: "one",
    keywords: ["تقسيط", "échelonnement", "instalments", "دين", "arriérés", "ONEE"],
  },
  {
    id: "dem-one-reprise-fourniture",
    cat: "demandes",
    title: T7(
      "طلب إعادة الخدمة بعد القطع (تسوية الوضعية)",
      "Demande de reprise de fourniture après coupure",
      "Application for restoration of supply after disconnection",
      "Solicitud de reanudación del suministro tras el corte",
      "Domanda di riattivazione della fornitura dopo il distacco",
      "Antrag auf Wiedereinschaltung nach Sperre",
      "Заявление о возобновлении снабжения после отключения"
    ),
    desc: D7(
      "طلب إعادة التيار بعد أداء المستحقات أو الالتزام بتقسيطها لدى الوكالة.",
      "Demande de rétablissement du courant après paiement des sommes dues ou engagement de les échelonner.",
      "Request to restore power after paying sums due or committing to instalments.",
      "Solicitud de restablecimiento tras pagar lo adeudado o comprometerse a fraccionar.",
      "Domanda di riattivazione dopo il pagamento o l'impegno a rateizzare.",
      "Antrag auf Wiederanschluss nach Begleichung oder Ratenzusage.",
      "Заявление о возобновлении после оплаты долга или обязательства рассрочки."
    ),
    where: W7(
      "وكالات ONEE؛ تعاد الخدمة خلال أجل تقني بعد تسوية الملف.",
      "Agences ONEE; la fourniture est rétablie dans un délai technique après régularisation.",
      "ONEE agencies; supply is restored within a technical delay after regularisation.",
      "Agencias ONEE; el suministro se restablece tras regularizar el expediente.",
      "Agenzie ONEE; la fornitura è riattivata dopo la regolarizzazione.",
      "ONEE-Agenturen; die Versorgung wird nach Regularisierung wiederhergestellt.",
      "Агентства ONEE; снабжение восстанавливается после урегулирования."
    ),
    authority: "one",
    keywords: ["إعادة الخدمة", "reprise fourniture", "restore supply", "قطع", "coupure"],
  },
  {
    id: "dem-one-deplacement-compteur",
    cat: "demandes",
    title: T7(
      "طلب نقل العداد إلى موقع آخر",
      "Demande de déplacement du compteur",
      "Application to relocate the meter",
      "Solicitud de traslado del contador",
      "Domanda di spostamento del contatore",
      "Antrag auf Verlegung des Zählers",
      "Заявление о переносе счётчика"
    ),
    desc: D7(
      "طلب نقل العداد داخل العقار عند الترميم أو تغيير تهيئة المنزل.",
      "Demande de déplacement du compteur dans la propriété lors de travaux ou réaménagement.",
      "Request to move the meter within the property during works or refurbishment.",
      "Solicitud de traslado dentro de la finca durante obras o reorganización.",
      "Domanda di spostamento all'interno dell'immobile durante lavori.",
      "Antrag auf Versetzung innerhalb des Grundstücks bei Umbau.",
      "Заявление о перемещении счётчика в пределах участка при ремонте."
    ),
    where: W7(
      "وكالات ONEE؛ تدخل فرق تقنية بعد أداء مصاريف النقل.",
      "Agences ONEE; les équipes techniques interviennent après paiement des frais.",
      "ONEE agencies; technical teams intervene after payment of the fees.",
      "Agencias ONEE; intervienen equipos técnicos tras pagar las tasas.",
      "Agenzie ONEE; le squadre intervengono dopo il pagamento.",
      "ONEE-Agenturen; die Teams rücken nach Gebührenzahlung an.",
      "Агентства ONEE; бригады выезжают после оплаты сборов."
    ),
    authority: "one",
    keywords: ["نقل العداد", "déplacement compteur", "meter relocation", "ترميم", "ONEE"],
  },
  {
    id: "dem-one-quittance-paiement",
    cat: "demandes",
    title: T7(
      "طلب شهادة أداء الفواتير (وصل خلو الذمة)",
      "Demande de quittance de paiement des factures",
      "Application for a bill payment receipt",
      "Solicitud de recibo de pago de facturas",
      "Domanda di quietanza di pagamento",
      "Antrag auf Quittung der Rechnungszahlung",
      "Заявление на справку об оплате счетов"
    ),
    desc: D7(
      "شهادة يقدمها المكتب لتوثيق خلو الذمة عند بيع العقار أو طلب قرض.",
      "Attestation délivrée par l'office prouvant l'absence de dettes lors d'une vente ou d'un crédit.",
      "Certificate issued by the office proving the absence of debts for a sale or loan.",
      "Certificado que acredita la inexistencia de deudas para venta o crédito.",
      "Certificato che attesta l'assenza di debiti per vendita o credito.",
      "Bescheinigung, die beim Verkauf oder Kredit die Schuldenfreiheit belegt.",
      "Справка об отсутствии долгов для продажи или кредита."
    ),
    where: W7(
      "وكالات ONEE أو بوابة الخدمات؛ تسلم فورا بعد التحقق من الأداء.",
      "Agences ONEE ou portail de services; délivrance immédiate après vérification.",
      "ONEE agencies or services portal; immediate delivery after verification.",
      "Agencias o portal; entrega inmediata tras verificación.",
      "Agenzie o portale; consegna immediata dopo verifica.",
      "Agenturen oder Portal; sofortige Ausstellung nach Prüfung.",
      "Агентства или портал; выдача сразу после проверки."
    ),
    authority: "one",
    keywords: ["خلو الذمة", "quittance", "receipt", "شهادة أداء", "ONEE"],
  },
  {
    id: "dem-one-rectification-donnees",
    cat: "demandes",
    title: T7(
      "طلب تصحيح بيانات العقد (الاسم أو رقم البطاقة)",
      "Demande de rectification des données du contrat",
      "Application to correct contract data",
      "Solicitud de corrección de datos del contrato",
      "Domanda di correzione dei dati del contratto",
      "Antrag auf Berichtigung der Vertragsdaten",
      "Заявление об исправлении данных договора"
    ),
    desc: D7(
      "طلب تصحيح خطأ في اسم المشترك أو رقم بطاقته الوطنية بمكنون العقد.",
      "Demande visant à corriger une erreur dans le nom ou le numéro de CIN figurant au contrat.",
      "Request to fix an error in the name or ID number shown on the contract.",
      "Solicitud para corregir un error en el nombre o DNI del contrato.",
      "Domanda per correggere un errore nel nome o numero di carta d'identità.",
      "Antrag zur Korrektur eines Fehlers in Name oder Ausweisnummer im Vertrag.",
      "Заявление об исправлении ошибки в имени или номере удостоверения в договоре."
    ),
    where: W7(
      "وكالات ONEE مع بطاقة التعريف؛ تعدل البيانات ويوثق العقد الجديد.",
      "Agences ONEE avec pièce d'identité; les données sont corrigées et le contrat mis à jour.",
      "ONEE agencies with ID; data is corrected and the contract updated.",
      "Agencias con DNI; se corrigen los datos y se actualiza el contrato.",
      "Agenzie con documento; i dati sono corretti e il contratto aggiornato.",
      "Agenturen mit Ausweis; Daten werden berichtigt und der Vertrag aktualisiert.",
      "Агентства с удостоверением; данные исправляются, договор обновляется."
    ),
    authority: "one",
    keywords: ["تصحيح", "rectification", "correction", "بيانات", "ONEE", "عقد"],
  },
  {
    id: "dem-one-convention-promoteur",
    cat: "demandes",
    title: T7(
      "طلب اتفاقية مع ONEE لمشروع سكني (منعش عقاري)",
      "Demande de convention avec l'ONEE pour un programme immobilier (promoteur)",
      "Application for an agreement with ONEE for a housing programme (developer)",
      "Solicitud de convenio con ONEE para programa inmobiliario (promotor)",
      "Domanda di convenzione con ONEE per programma immobiliare (promotore)",
      "Antrag auf Vereinbarung mit ONEE für ein Wohnbauprojekt (Bauträger)",
      "Заявление о соглашении с ONEE по жилищному проекту (застройщик)"
    ),
    desc: D7(
      "طلب يقدمه المنعش لربط مشروع جماعي بالماء والكهرباء عبر اتفاقية خاصة.",
      "Demande présentée par le promoteur pour raccorder son projet collectif via une convention dédiée.",
      "Request filed by the developer to connect the collective project via a dedicated convention.",
      "Solicitud del promotor para conectar su proyecto colectivo mediante convenio.",
      "Domanda del promotore per allacciare il progetto tramite convenzione dedicata.",
      "Antrag des Bauträgers, das Projekt über eine eigene Vereinbarung anzuschließen.",
      "Заявление застройщика о подключении проекта по отдельному соглашению."
    ),
    where: W7(
      "المديرية الجهوية لONEE مع ملف رخصة البناء؛ توقع الاتفاقية قبل الأشغال.",
      "Direction régionale de l'ONEE avec permis de construire; convention signée avant travaux.",
      "ONEE regional directorate with building permit; convention signed before works.",
      "Dirección regional con licencia de obra; convenio firmado antes de trabajos.",
      "Direzione regionale con permesso di costruire; convenzione firmata prima dei lavori.",
      "Regionaldirektion mit Baugenehmigung; Vereinbarung wird vor Baubeginn unterzeichnet.",
      "Региональная дирекция с разрешением на строительство; соглашение подписывается до работ."
    ),
    authority: "one",
    keywords: ["منعش", "promoteur", "developer", "اتفاقية", "convention", "ONEE"],
  },
  // ─── Services communaux ───
  {
    id: "dem-extension-eclairage-public",
    cat: "demandes",
    title: T7(
      "طلب توسيع الإنارة العمومية بدرب أو حي",
      "Demande d'extension de l'éclairage public dans une rue ou quartier",
      "Application to extend public lighting in a street or district",
      "Solicitud de extensión del alumbrado público en una calle o barrio",
      "Domanda di estensione dell'illuminazione pubblica in una via o quartiere",
      "Antrag auf Erweiterung der öffentlichen Beleuchtung in Straße oder Viertel",
      "Заявление о расширении уличного освещения на улице или в квартале"
    ),
    desc: D7(
      "طلب يوجه لمصلحة الإنارة بالجماعة لإضافة أعمدة إنارة بمنطقة تفتقر إليها.",
      "Demande adressée au service de l'éclairage pour ajouter des lampadaires dans une zone dépourvue.",
      "Request addressed to the lighting department to add lampposts in an area lacking them.",
      "Solicitud al servicio de alumbrado para añadir farolas en zona carente.",
      "Domanda al servizio illuminazione per aggiungere lampioni in zona sprovvista.",
      "Antrag an das Beleuchtungsamt, in unterversorgten Gebieten Laternen zu ergänzen.",
      "Заявление в службу освещения о добавлении фонарей в необеспеченном районе."
    ),
    where: W7(
      "مصلحة الإنارة العمومية بالجماعة؛ تدرس الطلبات ضمن برامج التجهيز السنوية.",
      "Service de l'éclairage de la commune; examen dans le cadre des programmes annuels.",
      "Commune's lighting service; examined within annual equipment programmes.",
      "Servicio de alumbrado; examen en los programas anuales.",
      "Servizio illuminazione; esame nei programmi annuali.",
      "Beleuchtungsamt; Prüfung im Rahmen jährlicher Programme.",
      "Служба освещения коммуны; рассмотрение в годовых программах."
    ),
    keywords: ["إنارة عمومية", "éclairage public", "public lighting", "أعمدة", "lampadaires"],
  },
  {
    id: "dem-collecte-dechets-quartier",
    cat: "demandes",
    title: T7(
      "طلب تنظيم جمع النفايات بحي سكني",
      "Demande d'organisation de la collecte des déchets dans un quartier",
      "Application to organise waste collection in a neighbourhood",
      "Solicitud de organización de recogida de residuos en un barrio",
      "Domanda di organizzazione della raccolta rifiuti in un quartiere",
      "Antrag auf Organisation der Abfallsammlung in einem Viertel",
      "Заявление об организации сбора отходов в квартале"
    ),
    desc: D7(
      "طلب يقدم للجماعة لتعميم خدمة الجمع وتوفير صنادي في نقاط مناسبة.",
      "Demande présentée à la commune pour généraliser la collecte et placer des bacs aux points adéquats.",
      "Request to the commune to generalise collection and place bins at suitable points.",
      "Solicitud al ayuntamiento para generalizar la recogida y colocar contenedores.",
      "Domanda al comune per generalizzare la raccolta e collocare contenitori.",
      "Antrag an die Gemeinde, die Sammlung auszuweiten und Behälter zu platzieren.",
      "Заявление коммуне о повсеместном сборе и установке контейнеров."
    ),
    where: W7(
      "مصلحة النظافة بالجماعة أو الشركة المفوض لها؛ مع جولة ميدانية للتقييم.",
      "Service de propreté de la commune ou société délégataire; visite d'évaluation.",
      "Commune's cleaning service or delegate company; assessment visit.",
      "Servicio de limpieza o empresa delegada; visita de evaluación.",
      "Servizio igiene urbana o società delegata; sopralluogo.",
      "Reinigungsdienst oder Beauftragte; Bewertungsvor-Ort-Termin.",
      "Служба чистоты или делегированная компания; выездная оценка."
    ),
    keywords: ["نفايات", "collecte déchets", "waste collection", "نظافة", "propreté", "صنادي"],
  },
  {
    id: "dem-enlevement-encombrants",
    cat: "demandes",
    title: T7(
      "طلب رفع الأنقاض والأشياء الضخمة",
      "Demande d'enlèvement des encombrants et gravats",
      "Application for removal of bulky items and rubble",
      "Solicitud de retirada de enseres voluminosos y escombros",
      "Domanda di rimozione di ingombranti e macerie",
      "Antrag auf Abfuhr von Sperrmüll und Schutt",
      "Заявление о вывозе габаритного мусора и обломков"
    ),
    desc: D7(
      "طلب لرفع مخلفات البناء أو الأثاث القديم من الأحياء بعد عمليات الترميم.",
      "Demande d'enlèvement des débris de chantier ou de vieux meubles abandonnés dans les rues.",
      "Request to remove building debris or old furniture abandoned in streets.",
      "Solicitud de retirada de restos de obra o muebles abandonados.",
      "Domanda di rimozione di residui di cantiere o mobili abbandonati.",
      "Antrag auf Beseitigung von Bauschutt oder alten Möbeln.",
      "Заявление об удалении строймусора или брошенной мебели."
    ),
    where: W7(
      "مصلحة النظافة بالجماعة؛ تحدد عملية الرفع في آجال قريبة.",
      "Service de propreté; l'opération est programmée à brève échéance.",
      "Cleaning service; the operation is scheduled at short notice.",
      "Servicio de limpieza; operación programada a corto plazo.",
      "Servizio igiene; operazione programmata a breve.",
      "Reinigungsdienst; Aktion kurzfristig terminiert.",
      "Служба чистоты; операция планируется в ближайшие сроки."
    ),
    keywords: ["أنقاض", "encombrants", "bulky waste", "رفع", "gravats"],
  },
  {
    id: "dem-occupation-domaine-public",
    cat: "demandes",
    title: T7(
      "طلب رخصة احتلال الملك العمومي مؤقتا (بسط أو كشك)",
      "Demande d'autorisation d'occupation temporaire du domaine public",
      "Application for temporary occupation of the public domain",
      "Solicitud de autorización de ocupación temporal del dominio público",
      "Domanda di autorizzazione di occupazione temporanea del demanio",
      "Antrag auf zeitweise Nutzung des öffentlichen Bereichs",
      "Заявление о временном занятии общественной территории"
    ),
    desc: D7(
      "رخصة سنوية أو موسمية لعرض بضائع أو نصب بسط أمام المحلات.",
      "Autorisation annuelle ou saisonnière pour étaler des marchandises ou installer une devanture.",
      "Annual or seasonal licence to display goods or set up a stall in front of shops.",
      "Licencia anual o estacional para exhibir mercancías o montar un puesto.",
      "Autorizzazione annuale o stagionale per esporre merci o installare un banco.",
      "Jahres- oder Saisongenehmigung zum Auslegen von Waren vor Geschäften.",
      "Годовое или сезонное разрешение на выкладку товаров или прилавок у магазинов."
    ),
    where: W7(
      "مصلحة الترخيص بالجماعة مع أداء الحقوق؛ تجدد الرخصة كل سنة.",
      "Service des autorisations de la commune contre paiement; renouvellement annuel.",
      "Commune's licensing service against payment; annual renewal.",
      "Servicio de licencias contra pago; renovación anual.",
      "Servizio autorizzazioni previo pagamento; rinnovo annuale.",
      "Genehmigungsdienst gegen Gebühr; jährliche Erneuerung.",
      "Служба разрешений за плату; ежегодное продление."
    ),
    keywords: ["احتلال الملك العمومي", "occupation domaine public", "public domain occupation", "بسط", "étal", "رخصة"],
    popular: true,
  },
  {
    id: "dem-terrasse-etablissement",
    cat: "demandes",
    title: T7(
      "طلب رخصة احتلال الرصيف بتراس (مقهى أو مطعم)",
      "Demande d'autorisation d'occupation du trottoir par une terrasse",
      "Application to occupy the pavement with a terrace",
      "Solicitud de ocupación de la acera con terraza",
      "Domanda di occupazione del marciapiede con dehor",
      "Antrag auf Gehwegbelegung durch eine Terrasse",
      "Заявление о занятии тротуара террасой"
    ),
    desc: D7(
      "رخصة تسمح لمقهى أو مطعم بوضع طاولات خارجية مقابل أداء الرسوم.",
      "Autorisation permettant à un café de poser des tables extérieures contre redevance.",
      "Licence allowing a café to place outdoor tables against a fee.",
      "Licencia que permite a un café colocar mesas exteriores contra tasa.",
      "Autorizzazione che consente a un locale di porre tavoli esterni dietro canone.",
      "Genehmigung, die einem Café Außentische gegen Gebühr erlaubt.",
      "Разрешение кафе ставить столики на улице за сбор."
    ),
    where: W7(
      "مصلحة الترخيص بالجماعة؛ تجدد قبل كل موسم صيفي.",
      "Service des autorisations; renouvellement avant chaque saison estivale.",
      "Licensing service; renewal before each summer season.",
      "Servicio de licencias; renovación antes del verano.",
      "Servizio autorizzazioni; rinnovo prima dell'estate.",
      "Genehmigungsdienst; Erneuerung vor jeder Sommersaison.",
      "Служба разрешений; продление перед каждым летним сезоном."
    ),
    keywords: ["تراس", "terrasse", "terrace", "رصيف", "trottoir", "مقهى"],
  },
  {
    id: "dem-local-marche-communal",
    cat: "demandes",
    title: T7(
      "طلب الحصول على محل بسوق الجماعة",
      "Demande d'attribution d'un local au marché communal",
      "Application for allocation of a stall at the municipal market",
      "Solicitud de adjudicación de un local en el mercado municipal",
      "Domanda di assegnazione di un banco nel mercato comunale",
      "Antrag auf Zuteilung eines Standplatzes im Gemeindemarkt",
      "Заявление о выделении места на муниципальном рынке"
    ),
    desc: D7(
      "طلب لتخصيص محل بيع بالسوق المغطى أو الأسبوعي التابع للجماعة.",
      "Demande d'octroi d'un emplacement de vente au marché couvert ou hebdomadaire de la commune.",
      "Request for a selling space at the commune's covered or weekly market.",
      "Solicitud de un puesto en el mercado cubierto o semanal del ayuntamiento.",
      "Domanda di un posto al mercato coperto o settimanale del comune.",
      "Antrag auf einen Verkaufsplatz im überdachten oder Wochenmarkt der Gemeinde.",
      "Заявление о месте на крытом или еженедельном рынке коммуны."
    ),
    where: W7(
      "مصلحة أملاك الجماعة أو إدارة السوق؛ حسب المحلات الشاغرة وانتظار الدور.",
      "Service du domaine de la commune ou régisseur du marché; selon les places vacantes.",
      "Commune's property service or market manager; depending on vacant places.",
      "Servicio de bienes comunales o administración del mercado; según puestos vacantes.",
      "Ufficio patrimonio o gestore del mercato; secondo i posti vacanti.",
      "Vermögensamt oder Marktverwaltung; je nach freien Plätzen.",
      "Имущественная служба или управляющий рынком; по свободным местам."
    ),
    keywords: ["سوق", "marché communal", "municipal market", "محل", "étal"],
  },
  {
    id: "dem-kiosque-presse",
    cat: "demandes",
    title: T7(
      "طلب ترخيص نصب كشك على الطريق العمومي",
      "Demande d'autorisation d'installer un kiosque sur la voie publique",
      "Application to install a newsstand on the public way",
      "Solicitud de instalación de un quiosco en la vía pública",
      "Domanda di installazione di un chiosco sulla pubblica via",
      "Antrag auf Aufstellung eines Kiosks im öffentlichen Raum",
      "Заявление об установке киоска на публичной дороге"
    ),
    desc: D7(
      "رخصة دائمة لبيع الصحف من كشك في ملك عمومي محدد باتفاق مع الجماعة.",
      "Autorisation permanente de vente de journaux sur un emplacement du domaine public convenu.",
      "Standing licence to sell newspapers from a fixed public-domain location agreed upon.",
      "Autorización permanente de venta de prensa en un lugar del dominio público.",
      "Autorizzazione permanente di vendita di giornali in un punto del demanio.",
      "Dauererlaubnis für Zeitungsverkauf an vereinbarten Standorten.",
      "Постоянное разрешение на продажу прессы в согласованном месте."
    ),
    where: W7(
      "مصلحة الترخيص بالجماعة بعد دراسة الموقع؛ تؤدى حقوق سنوية.",
      "Service des autorisations après étude de l'emplacement; redevance annuelle.",
      "Licensing service after site study; annual fee.",
      "Servicio de licencias tras estudio del emplazamiento; tasa anual.",
      "Servizio autorizzazioni dopo studio del sito; canone annuale.",
      "Genehmigungsdienst nach Standortprüfung; Jahresgebühr.",
      "Служба разрешений после изучения места; годовой сбор."
    ),
    keywords: ["كشك", "kiosque", "kiosk", "صحافة", "presse", "ترخيص"],
  },
  {
    id: "dem-permis-vendange",
    cat: "demandes",
    title: T7(
      "طلب رخصة الخماج (جمع العنب)",
      "Demande de permis de vendange",
      "Application for a grape-harvest permit",
      "Solicitud de permiso de vendimia",
      "Domanda di permesso di vendemmia",
      "Antrag auf Weinleseerlaubnis",
      "Заявление на разрешение сбора винограда"
    ),
    desc: D7(
      "رخصة تمنح لجمع العنب في مواعيد تحددها الجماعة بمناطق زراعة الكروم.",
      "Autorisation délivrée pour cueillir le raisin aux dates fixées par la commune.",
      "Permit issued to pick grapes on the dates fixed by the commune.",
      "Permiso para recolectar la uva en fechas fijadas por el ayuntamiento.",
      "Permesso per la vendemmia alle date fissate dal comune.",
      "Genehmigung zur Traubenlese an den von der Gemeinde festgelegten Terminen.",
      "Разрешение на сбор винограда в сроки, установленные коммуной."
    ),
    where: W7(
      "مصلحة الشؤون القروية بالجماعة؛ تحدد فترات الجمع وتوصي بالضبط عليها.",
      "Service des affaires rurales; les périodes de cueillette sont fixées et portées à connaissance.",
      "Rural affairs service; harvest periods are set and publicised.",
      "Servicio de asuntos rurales; se fijan y publicitan los periodos.",
      "Servizio affari rurali; i periodi sono fissati e resi noti.",
      "Amt für ländliche Angelegenheiten; Zeiträume werden festgelegt.",
      "Служба сельских дел; сроки сбора устанавливаются и публикуются."
    ),
    keywords: ["الخماج", "vendange", "grape harvest", "عنب", "رخصة"],
  },
  {
    id: "dem-abattage-arbre",
    cat: "demandes",
    title: T7(
      "طلب ترخيص قطع شجرة من الملك العمومي",
      "Demande d'autorisation d'abattage d'un arbre du domaine public",
      "Application to fell a tree on the public domain",
      "Solicitud de autorización para talar un árbol del dominio público",
      "Domanda di autorizzazione ad abbattere un albero del demanio",
      "Antrag auf Fällung eines Baums im öffentlichen Bereich",
      "Заявление о спиле дерева на публичной территории"
    ),
    desc: D7(
      "رخصة لقطع شجرة تضررت أو تعيق البناء بعد فحص تقني من الجماعة.",
      "Autorisation de couper un arbre malade ou gênant après expertise des services communaux.",
      "Licence to cut a diseased or obstructing tree after inspection by communal services.",
      "Licencia para talar un árbol enfermo o molesto tras inspección municipal.",
      "Autorizzazione ad abbattere un albero malato dopo sopralluogo comunale.",
      "Genehmigung zum Fällen nach Prüfung durch die Gemeinde.",
      "Разрешение на спил больного дерева после осмотра коммунальных служб."
    ),
    where: W7(
      "مصلحة المساحات الخضراء بالجماعة؛ مع تعويض غرس أشجار بديلة عند الاقتضاء.",
      "Service des espaces verts; plantation compensatoire le cas échéant.",
      "Green spaces service; compensatory planting where required.",
      "Servicio de zonas verdes; plantación compensatoria si procede.",
      "Servizio aree verdi; piantumazione compensativa se necessario.",
      "Grünflächenamt; Ersatzpflanzung falls erforderlich.",
      "Служба озеленения; при необходимости компенсационная посадка."
    ),
    keywords: ["قطع شجرة", "abattage arbre", "tree felling", "المساحات الخضراء", "espaces verts"],
  },
  {
    id: "dem-entretien-voirie",
    cat: "demandes",
    title: T7(
      "طلب ترميم الطريق أو الدرب غير المصفف",
      "Demande d'entretien de la voirie (revêtement d'une rue)",
      "Application for road maintenance (surfacing of a street)",
      "Solicitud de mantenimiento de la vía (asfaltado de calle)",
      "Domanda di manutenzione stradale (asfaltatura)",
      "Antrag auf Straßenunterhaltung (Asphaltierung)",
      "Заявление о содержании дорог (асфальтирование улицы)"
    ),
    desc: D7(
      "طلب يلتمس تهيئة مسلك غير مصفف يصعب التنقل به في مواسم الأمطار.",
      "Demande sollicitant l'aménagement d'une piste non revêtue impraticable en saison pluvieuse.",
      "Request seeking the upgrading of an unsurfaced track impracticable in the rainy season.",
      "Solicitud de acondicionamiento de una pista sin asfaltar intransitable en lluvias.",
      "Domanda di sistemazione di una pista sterrata impraticabile nella stagione piovosa.",
      "Antrag auf Ausbau eines unbefestigten Wegs, der in der Regenzeit unpassierbar ist.",
      "Заявление об обустройстве грунтовой дороги, непроходимой в сезон дождей."
    ),
    where: W7(
      "مصلحة التقنيات بالجماعة؛ تدرس المشاريع حسب الأولويات والميزانية.",
      "Service technique de la commune; projets étudiés selon priorités et budget.",
      "Commune's technical service; projects studied according to priorities and budget.",
      "Servicio técnico; proyectos según prioridades y presupuesto.",
      "Servizio tecnico; progetti secondo priorità e bilancio.",
      "Technischer Dienst; Projekte nach Prioritäten und Haushalt.",
      "Техническая служба; проекты по приоритетам и бюджету."
    ),
    keywords: ["ترميم", "voirie", "road maintenance", "تعبيد", "revêtement", "طريق"],
  },
  {
    id: "dem-raccordement-assainissement",
    cat: "demandes",
    title: T7(
      "طلب الربط بشبكة التطهير (الصرف الصحي)",
      "Demande de raccordement au réseau d'assainissement",
      "Application for connection to the sewerage network",
      "Solicitud de conexión a la red de saneamiento",
      "Domanda di allaccio alla fognatura",
      "Antrag auf Anschluss an die Kanalisation",
      "Заявление о подключении к канализации"
    ),
    desc: D7(
      "طلب ربط المسكن بشبكة الصرف الصحي العمومية بدل الآبار التقليدية.",
      "Demande de raccordement du logement au réseau collectif en remplacement des fosses.",
      "Request to connect the dwelling to the collective network instead of septic pits.",
      "Solicitud de conexión de la vivienda a la red colectiva en vez de pozos.",
      "Domanda di allaccio dell'abitazione alla rete collettiva.",
      "Antrag auf Anschluss der Wohnung an das Kanalnetz statt Gruben.",
      "Заявление о подключении жилища к коллектору вместо выгребов."
    ),
    where: W7(
      "مصلحة التطهير بالجماعة؛ مع أداء حقوق الربط وتمديد القنوات الخاصة.",
      "Service d'assainissement; paiement des droits de raccordement et pose des canalisations privatives.",
      "Commune's sanitation service; payment of connection fees and laying of private pipes.",
      "Servicio de saneamiento; pago de derechos y tendido de tuberías privadas.",
      "Servizio fognatura; pagamento dei diritti e posa delle tubazioni.",
      "Entsorgungsdienst; Gebühren und Verlegung der Privatleitungen.",
      "Служба водоотведения; оплата подключения и прокладка частных труб."
    ),
    keywords: ["تطهير", "assainissement", "sewerage", "صرف صحي", "raccordement", "الجماعة"],
    popular: true,
  },
  {
    id: "dem-autorisation-travaux-voie",
    cat: "demandes",
    title: T7(
      "طلب رخصة القيام بأشغال على الطريق العمومي",
      "Demande d'autorisation de travaux sur la voie publique",
      "Application for works on the public way",
      "Solicitud de autorización de obras en la vía pública",
      "Domanda di autorizzazione per lavori sulla pubblica via",
      "Antrag auf Arbeiten im öffentlichen Raum",
      "Заявление о работах на публичной дороге"
    ),
    desc: D7(
      "رخصة لحفر قنوات أو مد كابلات تحت الأرض قبل إعادة تصفيف الطريق.",
      "Autorisation de creuser des tranchées ou poser des câbles avant remise en état.",
      "Licence to dig trenches or lay cables before restoring the road.",
      "Licencia para abrir zanjas o tender cables antes de reponer la vía.",
      "Autorizzazione a scavare trincee o posare cavi prima del ripristino.",
      "Genehmigung zum Graben von Gräben oder Verlegen von Kabeln vor Wiederherstellung.",
      "Разрешение на рытьё траншей или прокладку кабелей с последующим восстановлением."
    ),
    where: W7(
      "مصلحة الترخيص والتقنيات بالجماعة؛ يشترط تعهد بإصلاح الأضرار.",
      "Service des autorisations et technique; engagement de réparation exigé.",
      "Licensing and technical service; repair commitment required.",
      "Servicio de licencias y técnico; compromiso de reposición.",
      "Servizio autorizzazioni e tecnico; impegno di ripristino.",
      "Genehmigungs- und Fachdienst; Instandsetzungszusage erforderlich.",
      "Служба разрешений; обязательство восстановления."
    ),
    keywords: ["أشغال", "travaux voie publique", "road works", "قنوات", "tranchées", "رخصة"],
  },
  {
    id: "dem-bris-trottoir",
    cat: "demandes",
    title: T7(
      "طلب رخصة كسر الرصيف (مدخل أو مرآب)",
      "Demande d'autorisation de bris de trottoir (accès garage)",
      "Application for pavement works (garage access)",
      "Solicitud de autorización para modificar la acera (acceso garaje)",
      "Domanda di autorizzazione a modificare il marciapiede (accesso box)",
      "Antrag auf Gehwegänderung (Garagenzufahrt)",
      "Заявление об изменении тротуара (заезд в гараж)"
    ),
    desc: D7(
      "رخصة لتخفيض مستوى الرصيف لإحداث مدخل السيارات أمام العقار.",
      "Autorisation d'abaisser le trottoir pour créer un accès automobile devant la propriété.",
      "Licence to lower the pavement to create vehicle access in front of the property.",
      "Licencia para rebajar la acera y crear acceso de vehículos.",
      "Autorizzazione a ribassare il marciapiede per creare un accesso veicolare.",
      "Genehmigung, den Gehweg abzusenken für eine Zufahrt.",
      "Разрешение снизить тротуар для заезда автомобилей."
    ),
    where: W7(
      "مصلحة الترخيص بالجماعة مع أداء الحقوق؛ ينجز العمل بإشراف تقني.",
      "Service des autorisations contre droits; exécution sous contrôle technique.",
      "Licensing service against fees; works executed under technical supervision.",
      "Servicio de licencias; obra bajo supervisión técnica.",
      "Servizio autorizzazioni; lavori sotto controllo tecnico.",
      "Genehmigungsdienst; Ausführung unter technischer Aufsicht.",
      "Служба разрешений; работы под технадзором."
    ),
    keywords: ["كسر الرصيف", "bris de trottoir", "pavement works", "مرآب", "garage"],
  },
  {
    id: "dem-enseigne-publicitaire",
    cat: "demandes",
    title: T7(
      "طلب رخصة في لوحة إعلانية أو لافتة",
      "Demande d'autorisation de pose d'enseigne ou panneau publicitaire",
      "Application to install a sign or advertising board",
      "Solicitud de instalación de rótulo o valla publicitaria",
      "Domanda di installazione di insegna o pannello pubblicitario",
      "Antrag auf Anbringung von Firmenschild oder Reklametafel",
      "Заявление об установке вывески или рекламного щита"
    ),
    desc: D7(
      "رخصة لوضع لافتة المحل أو لوحة إشهارية وفق المقاييس المسموح بها.",
      "Autorisation d'apposer l'enseigne du local conformément aux dimensions autorisées.",
      "Licence to affix the shop's sign within the permitted dimensions.",
      "Licencia para colocar el rótulo conforme a las dimensiones permitidas.",
      "Autorizzazione ad apporre l'insegna secondo le dimensioni consentite.",
      "Genehmigung zur Anbringung innerhalb der zulässigen Maße.",
      "Разрешение на установку вывески в допустимых размерах."
    ),
    where: W7(
      "مصلحة الترخيص بالجماعة؛ مع أداء الحقوق السنوية عن كل متر مربع.",
      "Service des autorisations; droits annuels au mètre carré.",
      "Licensing service; annual dues per square metre.",
      "Servicio de licencias; derechos anuales por metro cuadrado.",
      "Servizio autorizzazioni; canone annuo al metro quadro.",
      "Genehmigungsdienst; Jahresgebühr je Quadratmeter.",
      "Служба разрешений; годовой сбор за квадратный метр."
    ),
    keywords: ["لافتة", "enseigne", "sign", "إشهار", "publicité", "لوحة"],
  },
  {
    id: "dem-concession-funeraire",
    cat: "demandes",
    title: T7(
      "طلب الحصول على امتياز قبر (مقبرة الجماعة)",
      "Demande de concession funéraire (cimetière communal)",
      "Application for a burial concession (communal cemetery)",
      "Solicitud de concesión funeraria (cementerio municipal)",
      "Domanda di concessione funeraria (cimitero comunale)",
      "Antrag auf Grabkonzession (Gemeindefriedhof)",
      "Заявление о могильном участке (кладбище коммуны)"
    ),
    desc: D7(
      "طلب لتخصيص مكان دائم للدفن بالعائلة داخل مقبرة عمومية.",
      "Demande d'octroi d'un emplacement perpétuel pour la famille dans un cimetière public.",
      "Request for a perpetual family plot within a public cemetery.",
      "Solicitud de parcela familiar perpetua en cementerio público.",
      "Domanda di area familiare perpetua in cimitero pubblico.",
      "Antrag auf eine dauerhafte Familiengrabstätte auf öffentlichen Friedhöfen.",
      "Заявление о постоянном семейном участке на публичном кладбище."
    ),
    where: W7(
      "مصلحة المساحة أو إدارة المقبرة بالجماعة؛ بعد أداء الحقوق وتحديد المكان.",
      "Service du domaine de la commune; paiement des droits et localisation.",
      "Commune's domain service; payment of dues and location.",
      "Servicio de bienes; pago de derechos y localización.",
      "Ufficio patrimonio; pagamento dei diritti e localizzazione.",
      "Vermögensamt; Gebühren und Lagebestimmung.",
      "Имущественная служба; оплата и определение места."
    ),
    keywords: ["مقبرة", "concession funéraire", "burial plot", "قبر", "cimetière"],
  },
  {
    id: "dem-curage-caniveaux",
    cat: "demandes",
    title: T7(
      "طلب تطهير القنوات والمصارف قبل الشتاء",
      "Demande de curage des caniveaux et avaloirs",
      "Application to clear gutters and drains",
      "Solicitud de limpieza de cunetas y sumideros",
      "Domanda di pulizia di canali e caditoie",
      "Antrag auf Reinigung von Rinnsteinen und Gullis",
      "Заявление о расчистке стоков и ливнёвок"
    ),
    desc: D7(
      "طلب لتطهير القنوات المكشوفة لتجنب فيضان المياه عند تساقط الأمطار.",
      "Demande de dégagement des caniveaux afin d'éviter les débordements pluviaux.",
      "Request to clear the gutters to prevent flooding during rains.",
      "Solicitud de desatasco de cunetas para evitar inundaciones.",
      "Domanda di sgombero dei canali per evitare allagamenti.",
      "Antrag auf Freimachen der Rinnen, um Überschwemmungen zu verhindern.",
      "Заявление о расчистке стоков во избежание подтоплений."
    ),
    where: W7(
      "مصلحة النظارة أو التقنيات بالجماعة؛ تدخل دوري يكثف في الخريف.",
      "Service de la voirie ou technique; intervention périodique renforcée en automne.",
      "Road or technical service; periodic intervention intensified in autumn.",
      "Servicio de vías o técnico; intervención periódica reforzada en otoño.",
      "Servizio strade o tecnico; intervento periodico potenziato in autunno.",
      "Straßen- oder Fachdienst; periodischer Einsatz im Herbst.",
      "Дорожная или техническая служба; периодические работы осенью."
    ),
    keywords: ["تطهير", "curage", "drain clearing", "قنوات", "caniveaux", "سيول"],
  },
  {
    id: "dem-espace-vert-quartier",
    cat: "demandes",
    title: T7(
      "طلب تهيئة فضاء أخضر بالحي",
      "Demande d'aménagement d'un espace vert dans le quartier",
      "Application to develop a green space in the neighbourhood",
      "Solicitud de acondicionamiento de zona verde en el barrio",
      "Domanda di sistemazione di un'area verde nel quartiere",
      "Antrag auf Anlage eines Grünbereichs im Viertel",
      "Заявление об устройстве зелёной зоны в квартале"
    ),
    desc: D7(
      "طلب تحويل أرض فارغة إلى حديقة للترويح ونظافة الجو.",
      "Demande de transformer un terrain vacant en jardin de proximité.",
      "Request to turn a vacant plot into a neighbourhood garden.",
      "Solicitud de convertir un solar en jardín de proximidad.",
      "Domanda di trasformare un'area incolta in giardino.",
      "Antrag, eine Brache in einen Naherholungspark umzuwandeln.",
      "Заявление о превращении пустыря в ближний сквер."
    ),
    where: W7(
      "مصلحة المساحات الخضراء بالجماعة؛ حسب توفر الأرض والميزانية.",
      "Service des espaces verts; selon la disponibilité du foncier et du budget.",
      "Green spaces service; subject to land availability and budget.",
      "Servicio de zonas verdes; según disponibilidad de suelo y presupuesto.",
      "Servizio aree verdi; secondo disponibilità del suolo e bilancio.",
      "Grünflächenamt; nach Grundverfügbarkeit und Haushalt.",
      "Служба озеленения; по наличию земли и бюджета."
    ),
    keywords: ["فضاء أخضر", "espace vert", "green space", "حديقة", "jardin", "تهيئة"],
  },
  {
    id: "dem-salle-communale",
    cat: "demandes",
    title: T7(
      "طلب استغلال قاعة الجماعة للمناسبات",
      "Demande d'utilisation de la salle communale (fêtes)",
      "Application to use the communal hall (celebrations)",
      "Solicitud de uso de la sala municipal (celebraciones)",
      "Domanda di utilizzo della sala comunale (feste)",
      "Antrag auf Nutzung der Gemeindehalle (Feiern)",
      "Заявление об использовании зала коммуны (торжества)"
    ),
    desc: D7(
      "طلب حجز قاعة عمومية لتنظيم حفل زفاف أو اجتماع عائلي.",
      "Demande de réservation d'une salle publique pour un mariage ou une réunion familiale.",
      "Request to book a public hall for a wedding or family gathering.",
      "Solicitud de reserva de sala pública para boda o reunión familiar.",
      "Domanda di prenotazione di una sala pubblica per nozze o riunione.",
      "Antrag auf Reservierung eines öffentlichen Saals für Hochzeit.",
      "Заявление о бронировании публичного зала для свадьбы."
    ),
    where: W7(
      "مصلحة الشؤون العامة بالجماعة؛ الحجز مقابل أداء كراء محدد.",
      "Service des affaires générales; réservation contre un loyer fixé.",
      "General affairs service; booking against a set rent.",
      "Servicio de asuntos generales; reserva contra alquiler.",
      "Servizio affari generali; prenotazione dietro canone.",
      "Allgemeine Angelegenheiten; Buchung gegen Miete.",
      "Служба общих дел; бронирование за плату."
    ),
    keywords: ["قاعة", "salle communale", "communal hall", "حفل", "mariage", "مناسبات"],
  },
  // ─── Armes & sûreté nationale ───
  {
    id: "dem-autorisation-acquisition-arme",
    cat: "demandes",
    title: T7(
      "طلب إذن اقتناء سلاح صيد",
      "Demande d'autorisation d'acquisition d'une arme de chasse",
      "Application for authorisation to acquire a hunting weapon",
      "Solicitud de autorización para adquirir un arma de caza",
      "Domanda di autorizzazione all'acquisto di un'arma da caccia",
      "Antrag auf Erwerbserlaubnis für eine Jagdwaffe",
      "Заявление на разрешение приобретения охотничьего оружия"
    ),
    desc: D7(
      "طلب يقدم للمصلحة المكلفة بالأسلحة قبل شراء بندقية بموجب شهادة عدلية وطبية.",
      "Demande présentée au service des armes avant l'achat d'un fusil, avec extrait de casier et certificat médical.",
      "Request presented to the arms service before buying a rifle, with record extract and medical certificate.",
      "Solicitud al servicio de armas antes de comprar un rifle, con certificados.",
      "Domanda al servizio armi prima dell'acquisto, con certificati.",
      "Antrag an den Waffendienst vor dem Kauf mit Führungszeugnis und Attest.",
      "Заявление в оружейную службу перед покупкой со справкой о судимости и медсправкой."
    ),
    where: W7(
      "المصالح اللاممركزية للأمن الوطني أو عمالة الإقليم؛ بعد دراسة الملف الاجتماعي والصحي.",
      "Services déconcentrés de la sûreté nationale ou du gouvernorat; après étude du dossier.",
      "Devolved services of national security or the governorate; after file review.",
      "Servicios de seguridad nacional o gobernación; tras estudio del expediente.",
      "Servizi periferici della sicurezza o prefettura; dopo esame del fascicolo.",
      "Dienststellen der Innensicherheit oder des Gouvernements; nach Prüfung.",
      "Территориальные органы безопасности или префектура; после изучения дела."
    ),
    authority: "interieur",
    keywords: ["سلاح صيد", "arme de chasse", "hunting weapon", "إذن", "autorisation", "اقتناء"],
  },
  {
    id: "dem-renouvellement-autorisation-arme",
    cat: "demandes",
    title: T7(
      "طلب تجديد إذن حيازة السلاح",
      "Demande de renouvellement de l'autorisation d'arme",
      "Application to renew the weapon authorisation",
      "Solicitud de renovación de la autorización de arma",
      "Domanda di rinnovo dell'autorizzazione",
      "Antrag auf Verlängerung der Waffenerlaubnis",
      "Заявление о продлении разрешения на оружие"
    ),
    desc: D7(
      "طلب يجدد الإذن عند انتهاء مدته بشرط بقاء الشروط القانونية قائمة.",
      "Demande de prorogation à l'expiration, sous réserve du maintien des conditions légales.",
      "Request to extend at expiry, provided the legal conditions still hold.",
      "Solicitud de prórroga al vencimiento, si se mantienen las condiciones legales.",
      "Domanda di proroga alla scadenza, ove permangano le condizioni legali.",
      "Antrag auf Verlängerung bei Ablauf, sofern die Voraussetzungen fortbestehen.",
      "Заявление о продлении по истечении при сохранении законных условий."
    ),
    where: W7(
      "نفس مصلحة الأسلحة قبل انتهاء الأجل بشهور؛ مع وصل الإذن القديم.",
      "Même service des armes avant l'échéance; avec le récépissé antérieur.",
      "Same arms service before the deadline; with the prior receipt.",
      "El mismo servicio antes del vencimiento; con el recibo anterior.",
      "Stesso servizio prima della scadenza; con la ricevuta precedente.",
      "Derselbe Dienst vor Ablauf; mit früherer Bestätigung.",
      "Та же служба до истечения; с прежней квитанцией."
    ),
    authority: "interieur",
    keywords: ["تجديد", "renouvellement", "renewal", "سلاح", "arme", "إذن"],
  },
  {
    id: "dem-cession-arme",
    cat: "demandes",
    title: T7(
      "طلب تصريح بالتنازل عن سلاح لمستفيد مرخص",
      "Déclaration de cession d'arme entre titulaires",
      "Declaration of transfer of a weapon between licence holders",
      "Declaración de cesión de arma entre titulares",
      "Dichiarazione di cessione di arma tra titolari",
      "Anzeige der Waffenabgabe zwischen Erlaubnisinhabern",
      "Заявление о передаче оружия между владельцами разрешений"
    ),
    desc: D7(
      "نموذج يوثق بيع أو هبة سلاح من حائز لحائز آخر مرخص له قانونا.",
      "Formulaire consignant la vente ou donation d'une arme d'un titulaire à un autre légalement autorisé.",
      "Form recording the sale or gift of a weapon from one holder to another lawfully authorised.",
      "Formulario que registra la venta o donación entre titulares autorizados.",
      "Modulo che registra vendita o donazione tra titolari autorizzati.",
      "Formular, das Verkauf oder Schenkung zwischen Berechtigten dokumentiert.",
      "Форма, фиксирующая продажу или дарение оружия между уполномоченными."
    ),
    where: W7(
      "مصلحة الأسلحة التي سلمت الإذن؛ يعدل السجل لصالح المشتري الجديد.",
      "Service des armes émetteur; le registre est mis à jour au nom de l'acquéreur.",
      "Issuing arms service; the register is updated in the buyer's name.",
      "Servicio emisor; el registro se actualiza a nombre del comprador.",
      "Servizio emittente; il registro è aggiornato a nome dell'acquirente.",
      "Ausstellender Dienst; das Register wird auf den Erwerber umgeschrieben.",
      "Выдавшая служба; реестр обновляется на имя покупателя."
    ),
    authority: "interieur",
    keywords: ["تنازل", "cession", "transfer", "سلاح", "arme", "تصريح"],
  },
  {
    id: "dem-port-arme-securite-privee",
    cat: "demandes",
    title: T7(
      "طلب رخصة حمل السلاح لمستخدمي الأمن الخاص",
      "Demande de permis de port d'arme pour agents de sécurité privée",
      "Application for a weapon-carry permit for private security agents",
      "Solicitud de permiso de porte de arma para agentes de seguridad privada",
      "Domanda di porto d'arma per agenti di sicurezza privata",
      "Antrag auf Waffentrageerlaubnis für Wachpersonal",
      "Заявление на ношение оружия для сотрудников частной охраны"
    ),
    desc: D7(
      "رخصة تمنح لمستخدمي شركات الحراسة أثناء تأدية المهام فقط.",
      "Permis accordé aux agents des sociétés de gardiennage uniquement pendant l'exercice de leurs fonctions.",
      "Permit granted to guarding company agents only while performing their duties.",
      "Permiso concedido a agentes de empresas de vigilancia solo durante el servicio.",
      "Permesso concesso agli agenti di vigilanza solo in servizio.",
      "Erlaubnis für Wachdienste nur während des Dienstes.",
      "Разрешение сотрудникам охранных фирм только при исполнении."
    ),
    where: W7(
      "مصلحة الأسلحة بالوزارة عبر الشركة المشغلة؛ بشهادة عمل وعقد التأهيل.",
      "Service des armes via la société employeuse; avec attestation de travail.",
      "Arms service via the employing company; with work certificate.",
      "Servicio de armas vía la empresa; con certificado laboral.",
      "Servizio armi tramite la società; con attestato di lavoro.",
      "Waffendienst über die Firma; mit Arbeitsbescheinigung.",
      "Оружейная служба через компанию; со справкой о работе."
    ),
    authority: "interieur",
    keywords: ["حمل السلاح", "port d'arme", "carry permit", "أمن خاص", "sécurité privée"],
  },
  {
    id: "dem-agrement-securite-privee",
    cat: "demandes",
    title: T7(
      "طلب اعتماد شركة للحراسة والنقل الأمين",
      "Demande d'agrément d'une société de gardiennage et sécurité privée",
      "Application for accreditation of a private security company",
      "Solicitud de acreditación de empresa de seguridad privada",
      "Domanda di autorizzazione di società di sicurezza privata",
      "Antrag auf Zulassung eines Sicherheitsunternehmens",
      "Заявление об аккредитации частной охранной фирмы"
    ),
    desc: D7(
      "طلب يقدم لمصلحة الأمن الخاص لاعتماد شركة جديدة قبل مباشرة النشاط.",
      "Demande présentée au service de la sécurité privée avant le démarrage de l'activité.",
      "Request presented to the private security department before starting operations.",
      "Solicitud presentada antes del inicio de la actividad.",
      "Domanda presentata prima dell'avvio dell'attività.",
      "Antrag vor Aufnahme der Tätigkeit.",
      "Заявление до начала деятельности."
    ),
    where: W7(
      "مصلحة الأمن الخاص بوزارة الداخلية؛ بملف قانوني ومالي كامل.",
      "Service de la sécurité privée du ministère de l'intérieur; avec dossier juridique et financier.",
      "Private security department of the interior ministry; with legal and financial file.",
      "Servicio de seguridad privada del ministerio del interior; con expediente jurídico y financiero.",
      "Servizio sicurezza privata del ministero; con dossier giuridico e finanziario.",
      "Abteilung private Sicherheit des Innenministeriums; mit rechtlichem und finanziellem Dossier.",
      "Департамент частной охраны МВД; с юридическим и финансовым делом."
    ),
    authority: "interieur",
    keywords: ["حراسة", "gardiennage", "private security", "اعتماد", "agrément", "أمن خاص"],
  },
  {
    id: "dem-permis-chasse",
    cat: "demandes",
    title: T7(
      "طلب الحصول على رخصة الصيد",
      "Demande de permis de chasse",
      "Application for a hunting permit",
      "Solicitud de permiso de caza",
      "Domanda di permesso di caccia",
      "Antrag auf Jagderlaubnis",
      "Заявление на разрешение охоты"
    ),
    desc: D7(
      "طلب بطاقة الصيد السنوية بعد الحصول على إذن السلاح وشهادة التأمين.",
      "Demande de la carte annuelle de chasse après autorisation d'arme et assurance.",
      "Request for the annual hunting card after weapon authorisation and insurance.",
      "Solicitud del carné anual tras autorización de arma y seguro.",
      "Domanda della carta annuale dopo autorizzazione e assicurazione.",
      "Antrag auf Jahreskarte nach Waffenerlaubnis und Versicherung.",
      "Заявление на годовую карту после разрешения на оружие и страховки."
    ),
    where: W7(
      "المديريات الإقليمية للمياه والغابات (ANEF)؛ أو عبر الشبابيك الجهوية قبل موسم الصيد.",
      "Directions provinciales des eaux et forêts (ANEF); avant l'ouverture de la chasse.",
      "Provincial water and forest directorates (ANEF); before the hunting season opens.",
      "Direcciones provinciales de aguas y bosques (ANEF); antes de la apertura.",
      "Direzioni provinciali delle acque e foreste (ANEF); prima dell'apertura.",
      "Provinzialdirektionen für Wasser und Forsten (ANEF); vor Saisonbeginn.",
      "Провинциальные дирекции вод и лесов (ANEF); до открытия сезона."
    ),
    authority: "agriculture",
    keywords: ["رخصة الصيد", "permis de chasse", "hunting permit", "صيد", "chasse", "ANEF"],
    popular: true,
  },
  {
    id: "dem-permis-chasse-temporaire",
    cat: "demandes",
    title: T7(
      "طلب رخصة صيد مؤقتة لأجنبي (الصيد السياحي)",
      "Demande de permis de chasse temporaire pour étranger (tourisme cynégétique)",
      "Application for a temporary hunting permit for foreigners (hunting tourism)",
      "Solicitud de permiso de caza temporal para extranjero (turismo cinegético)",
      "Domanda di permesso di caccia temporaneo per stranieri (turismo venatorio)",
      "Antrag auf befristete Jagderlaubnis für Ausländer (Jagdtourismus)",
      "Заявление на временное разрешение для иностранцев (охоттуризм)"
    ),
    desc: D7(
      "رخصة قصيرة المدى تصرف لصيادين زائرين عبر وكالات الصيد السياحي.",
      "Autorisation de courte durée délivrée aux chasseurs visiteurs via les agences spécialisées.",
      "Short-duration licence issued to visiting hunters through specialized agencies.",
      "Licencia de corta duración a cazadores visitantes mediante agencias.",
      "Licenza di breve durata ai cacciatori ospiti tramite agenzie.",
      "Kurzfristige Erlaubnis für Gastjäger über spezialisierte Agenturen.",
      "Краткосрочное разрешение гостевым охотникам через агентства."
    ),
    where: W7(
      "المديريات الإقليمية للمياه والغابات بالتنسيق مع الوكالة المنظمة؛ قبل الفترة المحددة.",
      "Directions provinciales des eaux et forêts en coordination avec l'agence organisatrice.",
      "Provincial water and forest directorates in coordination with the organizing agency.",
      "Direcciones provinciales en coordinación con la agencia organizadora.",
      "Direzioni provinciali in coordinamento con l'agenzia organizzatrice.",
      "Provinzialdirektionen in Abstimmung mit dem Veranstalter.",
      "Провинциальные дирекции во взаимодействии с организатором."
    ),
    authority: "agriculture",
    keywords: ["صيد سياحي", "chasse touristique", "hunting tourism", "رخصة مؤقتة", "permis temporaire"],
  },
  {
    id: "dem-duplicata-autorisation-arme",
    cat: "demandes",
    title: T7(
      "طلب نظير وصل السلاح بعد ضياعه",
      "Demande de duplicata du récépissé d'arme (perte)",
      "Application for a duplicate weapon receipt (loss)",
      "Solicitud de duplicado del resguardo de arma (pérdida)",
      "Domanda di duplicato della ricevuta d'arma (smarrimento)",
      "Antrag auf Zweitschrift des Waffenbelegs (Verlust)",
      "Заявление на дубликат квитанции на оружие (утеря)"
    ),
    desc: D7(
      "طلب بديل لوصل الإذن المفقود حفاظا على شرعية حيازة السلاح.",
      "Demande de remplacement du récépissé perdu afin de garder la détention régulière.",
      "Request to replace the lost receipt to keep the possession regular.",
      "Solicitud de sustitución del resguardo para mantener la tenencia regular.",
      "Domanda di sostituzione per mantenere la detenzione regolare.",
      "Antrag auf Ersatz, um die regelmäßige Innehabung zu wahren.",
      "Заявление о замене для сохранения законного владения."
    ),
    where: W7(
      "مصلحة الأسلحة التي أصدرت الإذن؛ بعد إعلان الضياع إن اقتضى.",
      "Service des armes émetteur; après avis de perte le cas échéant.",
      "Issuing arms service; after a loss notice where required.",
      "Servicio emisor; tras aviso de pérdida si procede.",
      "Servizio emittente; dopo avviso di smarrimento se richiesto.",
      "Ausstellender Dienst; nach Verlustanzeige falls nötig.",
      "Выдавшая служба; после объявления об утере при необходимости."
    ),
    authority: "interieur",
    keywords: ["نظير", "duplicata", "duplicate", "وصل السلاح", "récépissé", "ضياع"],
  },
  // ─── Poste & autres administrations ───
  {
    id: "dem-boite-postale",
    cat: "demandes",
    title: T7(
      "طلب كراء صندوق بريدي بمكتب البريد",
      "Demande de location d'une boîte postale",
      "Application to rent a post office box",
      "Solicitud de alquiler de apartado postal",
      "Domanda di affitto di una casella postale",
      "Antrag auf Anmietung eines Postfachs",
      "Заявление об аренде абонентского ящика"
    ),
    desc: D7(
      "طلب الحصول على صندوق بمكاتب البريد لاستقبال الرسائل الرسمية.",
      "Demande d'attribution d'une case dans un bureau de poste pour recevoir le courrier officiel.",
      "Request for a slot at a post office to receive official mail.",
      "Solicitud de una casilla en una oficina para recibir correspondencia oficial.",
      "Domanda di una casella per ricevere la corrispondenza ufficiale.",
      "Antrag auf ein Fach zur Aufnahme behördlicher Post.",
      "Заявление о ячейке для получения официальной корреспонденции."
    ),
    where: W7(
      "مكتب البريد المحلي مع بطاقة التعريف؛ أداء الكراء السنوي.",
      "Bureau de poste local avec pièce d'identité; paiement du loyer annuel.",
      "Local post office with ID; payment of the annual rent.",
      "Oficina local con identificación; pago del alquiler anual.",
      "Ufficio postale con documento; pagamento dell'affitto annuo.",
      "Örtliches Postamt mit Ausweis; Jahresmiete.",
      "Местный почтамт с удостоверением; годовая арендная плата."
    ),
    authority: "poste",
    keywords: ["صندوق بريدي", "boîte postale", "post office box", "بريد", "poste"],
  },
  {
    id: "dem-boite-postale-secondaire",
    cat: "demandes",
    title: T7(
      "طلب فتح صندوق بريدي ثانٍ (إقامة موسمية)",
      "Demande d'ouverture d'une seconde boîte postale (résidence secondaire)",
      "Application to open a second post office box (secondary residence)",
      "Solicitud de apertura de un segundo apartado (residencia secundaria)",
      "Domanda di apertura di una seconda casella (seconda casa)",
      "Antrag auf ein zweites Postfach (Zweitwohnsitz)",
      "Заявление о втором абонентском ящике (дача)"
    ),
    desc: D7(
      "طلب صندوق إضافي بمدينة أخرى لتقاضي البريد عند الإقامة الموسمية.",
      "Demande d'une case supplémentaire dans une autre ville pour le courrier saisonnier.",
      "Request for an additional slot in another city for seasonal mail.",
      "Solicitud de casilla adicional en otra ciudad para correspondencia estacional.",
      "Domanda di casella aggiuntiva in altra città per la corrispondenza stagionale.",
      "Antrag auf zusätzliches Fach in einer anderen Stadt.",
      "Заявление о дополнительной ячейке в другом городе для сезонной почты."
    ),
    where: W7(
      "مكتب بريد المدينة المعنية؛ بنفس إجراءات الكراء الأول.",
      "Bureau de poste de la ville concernée; mêmes formalités que la première location.",
      "Post office of the city concerned; same formalities as the first rental.",
      "Oficina de la ciudad; mismas formalidades.",
      "Ufficio della città; stesse formalità.",
      "Postamt der Stadt; gleiche Formalitäten.",
      "Почтамт города; те же формальности."
    ),
    authority: "poste",
    keywords: ["صندوق إضافي", "seconde boîte", "second box", "إقامة ثانية", "poste"],
  },
  {
    id: "dem-reexpedition-courrier",
    cat: "demandes",
    title: T7(
      "طلب تحويل البريد إلى العنوان الجديد",
      "Demande de réexpédition du courrier vers la nouvelle adresse",
      "Application to forward mail to a new address",
      "Solicitud de reexpedición del correo a la nueva dirección",
      "Domanda di inoltro della corrispondenza al nuovo indirizzo",
      "Antrag auf Nachsendung der Post an die neue Adresse",
      "Заявление о переадресации почты"
    ),
    desc: D7(
      "خدمة تنقل الرسائل من الصندوق القديم إلى الجديد خلال مدة محددة.",
      "Service acheminant le courrier de l'ancienne vers la nouvelle case pendant une période donnée.",
      "Service routing mail from the old to the new slot for a given period.",
      "Servicio que remite el correo de la casilla antigua a la nueva por un periodo.",
      "Servizio che inoltra la posta dalla vecchia alla nuova casella per un periodo.",
      "Dienst, der die Post für eine Dauer weiterschickt.",
      "Услуга пересылки почты со старого ящика на новый в течение периода."
    ),
    where: W7(
      "مكتب البريد مع تعبئة الاستمارة وأداء رسوم المدة المطلوبة.",
      "Bureau de poste avec formulaire et frais selon la durée choisie.",
      "Post office with form and fees per chosen duration.",
      "Oficina con formulario y tasas según la duración.",
      "Ufficio con modulo e costi secondo la durata.",
      "Postamt mit Formular und Gebühren je Dauer.",
      "Почтамт с формой и сборами по сроку."
    ),
    authority: "poste",
    keywords: ["تحويل البريد", "réexpédition", "mail forwarding", "بريد", "courrier"],
  },
  {
    id: "dem-affranchissement-compte",
    cat: "demandes",
    title: T7(
      "طلب فتح حساب للأداء البريدي بالحساب (شركات)",
      "Demande d'ouverture d'un compte d'affranchissement (entreprises)",
      "Application to open a franking account (companies)",
      "Solicitud de apertura de cuenta de franqueo (empresas)",
      "Domanda di apertura di conto di affrancatura (imprese)",
      "Antrag auf Freimachungskonto (Unternehmen)",
      "Заявление о счёте франкирования (компании)"
    ),
    desc: D7(
      "اتفاق مع بريد المغرب يسمح للشركات تخليص البريد عبر الخصم من الحساب.",
      "Convention avec Barid Al-Maghrib permettant de régler l'affranchissement par prélèvement.",
      "Arrangement with the postal operator letting postage be settled by account debit.",
      "Convenio con la operadora postal para liquidar el franqueo por cargo.",
      "Convenzione con l'operatore postale per saldare l'affrancatura addebitando.",
      "Vereinbarung mit dem Postbetreiber zur Verrechnung der Freimachung.",
      "Соглашение с почтовым оператором об оплате маркировки со счёта."
    ),
    where: W7(
      "المديرية التجارية لبريد المغرب؛ بعقد سنوي وتسبيق مالي.",
      "Direction commerciale de Barid Al-Maghrib; contrat annuel et avance financière.",
      "Commercial directorate of the postal operator; annual contract and deposit.",
      "Dirección comercial; contrato anual y anticipo.",
      "Direzione commerciale; contratto annuale e anticipo.",
      "Kundendirektion; Jahresvertrag und Vorschuss.",
      "Коммерческая дирекция; годовой договор и аванс."
    ),
    authority: "poste",
    keywords: ["أداء بالحساب", "affranchissement", "franking", "شركات", "entreprises", "بريد"],
  },
  {
    id: "dem-prime-plantation",
    cat: "demandes",
    title: T7(
      "طلب الاستفادة من دعم غرس الأشجار المثمرة (FDA)",
      "Demande de prime de plantation d'arbres fruitiers (FDA)",
      "Application for a fruit-tree planting subsidy (FDA)",
      "Solicitud de prima de plantación de frutales (FDA)",
      "Domanda di premio di impianto di frutteti (FDA)",
      "Antrag auf Pflanzprämie für Obstbäume (FDA)",
      "Заявление на субсидию за посадку плодовых (FDA)"
    ),
    desc: D7(
      "طلب دعم صندوق التنمية الزراعية لغرس الزيتون أو اللوز وفق مشاريع معتمدة.",
      "Demande de subvention du fonds de développement agricole pour oliviers ou amandiers selon projets agréés.",
      "Request for a grant from the agricultural development fund for olives or almonds per approved projects.",
      "Solicitud de subvención del fondo de desarrollo agrícola para olivos o almendros.",
      "Domanda di contributo dal fondo di sviluppo agricolo per olivi o mandorli.",
      "Antrag auf Zuschuss aus dem Landwirtschaftsfonds für Oliven- oder Mandelbäume.",
      "Заявление на дотацию аграрного фонда на оливки или миндаль."
    ),
    where: W7(
      "المديريات الإقليمية للفلاحة؛ أو عبر بوابة الدعم الفلاحي قبل الغرس.",
      "Directions provinciales de l'agriculture; ou portail dédié avant la plantation.",
      "Provincial agriculture directorates; or a dedicated portal before planting.",
      "Direcciones provinciales de agricultura; o portal antes de la plantación.",
      "Direzioni provinciali dell'agricoltura; o portale prima dell'impianto.",
      "Provinzialdirektionen der Landwirtschaft; oder Portal vor der Pflanzung.",
      "Провинциальные сельхоздирекции; или портал до посадки."
    ),
    authority: "agriculture",
    keywords: ["غرس", "plantation", "planting", "FDA", "دعم فلاحي", "subvention"],
  },
  {
    id: "dem-subvention-materiel-agricole",
    cat: "demandes",
    title: T7(
      "طلب دعم اقتناء العتاد الفلاحي (FDA)",
      "Demande de subvention pour l'acquisition de matériel agricole (FDA)",
      "Application for a subsidy to buy farm equipment (FDA)",
      "Solicitud de subvención para comprar maquinaria agrícola (FDA)",
      "Domanda di contributo per l'acquisto di macchine agricole (FDA)",
      "Antrag auf Zuschuss für Landmaschinen (FDA)",
      "Заявление на субсидию на сельхозтехнику (FDA)"
    ),
    desc: D7(
      "طلب مساهمة الدولة في ثمن الجرار أو باقي التجهيزات الفلاحية.",
      "Demande de participation de l'État au prix d'un tracteur ou d'autres équipements.",
      "Request for the state's share in the price of a tractor or other equipment.",
      "Solicitud de participación del Estado en el precio de un tractor u otros equipos.",
      "Domanda di partecipazione dello Stato al prezzo di un trattore.",
      "Antrag auf Beteiligung des Staates am Preis eines Traktors.",
      "Заявление об участии государства в цене трактора."
    ),
    where: W7(
      "المديرية الإقليمية للفلاحة مع فاتورة البائع؛ الدفع بعد المعاينة.",
      "Direction provinciale de l'agriculture avec facture; versement après vérification.",
      "Provincial agriculture directorate with invoice; payment after verification.",
      "Dirección provincial con factura; pago tras verificación.",
      "Direzione provinciale con fattura; erogazione dopo verifica.",
      "Provinzialdirektion mit Rechnung; Auszahlung nach Prüfung.",
      "Провинциальная дирекция со счётом; выплата после проверки."
    ),
    authority: "agriculture",
    keywords: ["عتاد فلاحي", "matériel agricole", "farm equipment", "جرار", "tracteur", "FDA"],
  },
  {
    id: "dem-ofppt-preinscription",
    cat: "demandes",
    title: T7(
      "طلب التسجيل المسبق بمؤسسات التكوين المهني",
      "Demande de pré-inscription dans un établissement de formation professionnelle",
      "Application for pre-enrolment in a vocational training institute",
      "Solicitud de preinscripción en un centro de formación profesional",
      "Domanda di preiscrizione a un centro di formazione professionale",
      "Antrag auf Voranmeldung an einem Berufsbildungszentrum",
      "Заявление о предварительной записи в центр профобучения"
    ),
    desc: D7(
      "طلب يقدم عبر بوابة التكوين المهني لاختيار الشعبة والمؤسسة قبل التسجيل النهائي.",
      "Demande effectuée via le portail pour choisir la filière et l'établissement avant l'inscription définitive.",
      "Request made via the portal to choose the stream and institute before final enrolment.",
      "Solicitud por el portal para elegir la rama antes de la matrícula definitiva.",
      "Domanda via portale per scegliere l'indirizzo prima dell'iscrizione definitiva.",
      "Antrag über das Portal zur Wahl des Zweigs vor endgültiger Anmeldung.",
      "Заявление через портал о выборе направления до окончательной записи."
    ),
    where: W7(
      "بوابة OFPPT للتكوين؛ أو مباشرة بمؤسسات التكوين قبل بداية السنة.",
      "Portail de l'OFPPT; ou directement dans les établissements avant la rentrée.",
      "OFPPT portal; or directly at the institutes before the school year starts.",
      "Portal del OFPPT; o directamente en los centros antes del curso.",
      "Portale OFPPT; o direttamente presso i centri prima dell'anno.",
      "OFPPT-Portal; oder direkt an den Zentren vor Jahresbeginn.",
      "Портал OFPPT; или напрямую в центрах до начала года."
    ),
    authority: "ofppt",
    keywords: ["تكوين مهني", "formation professionnelle", "vocational training", "OFPPT", "تسجيل", "inscription"],
    popular: true,
  },
  {
    id: "dem-examen-candidat-libre",
    cat: "demandes",
    title: T7(
      "طلب الترشح لامتحان التكوين المهني بصفة مترشح حر",
      "Demande de candidature à l'examen en candidat libre",
      "Application to sit the vocational exam as a free candidate",
      "Solicitud para presentarse al examen como candidato libre",
      "Domanda per sostenere l'esame da candidato libero",
      "Antrag auf Teilnahme an der Prüfung als freier Kandidat",
      "Заявление об экзамене в качестве вольного слушателя"
    ),
    desc: D7(
      "طلب يسمح لغير المسجلين بأداء امتحانات نيل الشهادات التقنية دون متابعة الدروس.",
      "Demande permettant de passer les examens des diplômes techniques sans suivre les cours.",
      "Request allowing to sit technical diploma exams without attending classes.",
      "Solicitud para presentarse a los exámenes sin asistir a clase.",
      "Domanda per sostenere gli esami senza frequentare le lezioni.",
      "Antrag, Prüfungen ohne Unterrichtsbesuch abzulegen.",
      "Заявление сдавать экзамены без посещения занятий."
    ),
    where: W7(
      "مؤسسات التكوين أو الجهات المكلفة بالامتحانات؛ حسب جدول الجلسات.",
      "Établissements de formation ou services des examens; selon le calendrier des sessions.",
      "Training institutes or examination services; per the session schedule.",
      "Centros o servicios de exámenes; según el calendario.",
      "Centri o servizi d'esame; secondo il calendario.",
      "Zentren oder Prüfungsdienste; nach Terminplan.",
      "Центры или экзаменационные службы; по расписанию."
    ),
    authority: "ofppt",
    keywords: ["مترشح حر", "candidat libre", "free candidate", "امتحان", "examen", "شهادة"],
  },
  {
    id: "dem-carte-presse",
    cat: "demandes",
    title: T7(
      "طلب الحصول على البطاقة المهنية للصحافة",
      "Demande de carte de presse",
      "Application for a press card",
      "Solicitud del carnet de prensa",
      "Domanda della tessera di stampa",
      "Antrag auf Presseausweis",
      "Заявление на удостоверение журналиста"
    ),
    desc: D7(
      "بطاقة تصدر للصحفيين العاملين بوسائل إعلام معتمدة لتيسير مهامهم.",
      "Carte délivrée aux journalistes employés par des médias agréés pour faciliter leur mission.",
      "Card issued to journalists employed by accredited media to facilitate their work.",
      "Carné expedido a periodistas de medios acreditados.",
      "Tessera rilasciata ai giornalisti di media accreditati.",
      "Ausweis für Journalisten akkreditierter Medien.",
      "Удостоверение для журналистов аккредитованных СМИ."
    ),
    where: W7(
      "مصلحة البطاقة المهنية بوزارة الثقافة والاتصال؛ مع عقد العمل وتقارير المهام.",
      "Service de la carte professionnelle au ministère de la culture et de la communication; avec contrat de travail.",
      "Professional card service at the culture and communication ministry; with employment contract.",
      "Servicio del ministerio de cultura; con contrato de trabajo.",
      "Servizio del ministero della cultura; con contratto di lavoro.",
      "Dienst des Kulturministeriums; mit Arbeitsvertrag.",
      "Служба министерства культуры; с трудовым договором."
    ),
    keywords: ["بطاقة صحافة", "carte de presse", "press card", "صحفي", "journaliste"],
  },
  {
    id: "dem-autorisation-tournage",
    cat: "demandes",
    title: T7(
      "طلب رخصة التصوير السينمائي (CCM)",
      "Demande d'autorisation de tournage (CCM)",
      "Application for a filming permit (CCM)",
      "Solicitud de permiso de rodaje (CCM)",
      "Domanda di autorizzazione alle riprese (CCM)",
      "Antrag auf Drehgenehmigung (CCM)",
      "Заявление на разрешение съёмок (CCM)"
    ),
    desc: D7(
      "رخصة يمنحها المركز السينمائي المغربي لتصوير الأفلام بالأماكن العمومية.",
      "Autorisation délivrée par le centre cinématographique marocain pour filmer dans les lieux publics.",
      "Permit issued by the Moroccan cinema centre to film in public places.",
      "Permiso del centro cinematográfico marroquí para filmar en lugares públicos.",
      "Permesso del centro cinematografico marocchino per girare in luoghi pubblici.",
      "Genehmigung des marokkanischen Filmzentrums für Dreharbeiten in der Öffentlichkeit.",
      "Разрешение марокканского киноцентра на съёмку в общественных местах."
    ),
    where: W7(
      "المركز السينمائي المغربي (CCM)؛ قبل انطلاق التصوير بشهر على الأقل.",
      "Centre cinématographique marocain (CCM); au moins un mois avant le tournage.",
      "Moroccan cinema centre (CCM); at least a month before shooting.",
      "Centro (CCM); al menos un mes antes del rodaje.",
      "Centro (CCM); almeno un mese prima delle riprese.",
      "Zentrum (CCM); mindestens einen Monat vorher.",
      "Центр (CCM); минимум за месяц до съёмок."
    ),
    keywords: ["تورناژ", "tournage", "filming", "سينما", "CCM", "رخصة"],
  },
  {
    id: "dem-declaration-publication-presse",
    cat: "demandes",
    title: T7(
      "طلب إيداع تصريح إصدار صحيفة أو مجلة",
      "Déclaration de création d'un journal ou périodique",
      "Declaration for creating a newspaper or periodical",
      "Declaración de creación de periódico o revista",
      "Denuncia di costituzione di un periodico",
      "Anzeige der Gründung einer Zeitung oder Zeitschrift",
      "Заявление о создании газеты или журнала"
    ),
    desc: D7(
      "تصريح مسبق يودع قبل إصدار أي صحيفة أو مجلة دورية باللغات المختلفة.",
      "Déclaration préalable déposée avant la parution de tout journal ou revue périodique.",
      "Prior declaration filed before publishing any newspaper or periodical.",
      "Declaración previa depositada antes de publicar cualquier periódico.",
      "Denuncia preventiva presentata prima della pubblicazione.",
      "Vorabanzeige vor Erscheinen einer Periodikums.",
      "Предварительное заявление до выпуска газеты или журнала."
    ),
    where: W7(
      "الأمانة العامة للحكومة أو الوزارة المعنية بالاتصال؛ في عدة نظائر.",
      "Secrétariat général du gouvernement ou ministère de la communication; en plusieurs exemplaires.",
      "General secretariat of the government or the communication ministry; in several copies.",
      "Secretaría general del gobierno o ministerio; en varios ejemplares.",
      "Segreteria generale del governo; in più esemplari.",
      "Generalsekretariat der Regierung; in mehreren Exemplaren.",
      "Генеральный секретариат правительства; в нескольких экземплярах."
    ),
    keywords: ["إصدار صحيفة", "création journal", "newspaper creation", "صحافة", "presse", "تصريح"],
  },
  {
    id: "dem-carte-artisan",
    cat: "demandes",
    title: T7(
      "طلب الحصول على البطاقة المهنية للصناع التقليديين",
      "Demande de carte professionnelle d'artisan",
      "Application for an artisan professional card",
      "Solicitud del carnet profesional de artesano",
      "Domanda della tessera professionale di artigiano",
      "Antrag auf Handwerksausweis",
      "Заявление на удостоверение ремесленника"
    ),
    desc: D7(
      "بطاقة تصدر عن غرف الصناعة التقليدية للمنتجين والحرفيين لمزاولة المهنة.",
      "Carte délivrée par les chambres de l'artisanat aux producteurs pour exercer le métier.",
      "Card issued by the chambers of crafts to producers for practising the trade.",
      "Carné expedido por las cámaras de artesanía para ejercer el oficio.",
      "Tessera rilasciata dalle camere dell'artigianato per esercitare il mestiere.",
      "Ausweis der Handwerkskammern zur Berufsausübung.",
      "Удостоверение палат ремёсел для занятия профессией."
    ),
    where: W7(
      "غرفة الصناعة التقليدية بالإقليم؛ مع سجل تجاري أو شهادة التكوين.",
      "Chambre de l'artisanat provinciale; avec registre de commerce ou attestation de formation.",
      "Provincial chamber of crafts; with trade register or training certificate.",
      "Cámara provincial; con registro mercantil o certificado de formación.",
      "Camera provinciale; con registro delle imprese o attestato.",
      "Provinzkammer; mit Gewerberegister oder Ausbildungsnachweis.",
      "Провинциальная палата; с реестром или свидетельством об обучении."
    ),
    keywords: ["صناعة تقليدية", "artisanat", "crafts", "بطاقة مهنية", "carte artisan", "حرفي"],
  },
];
