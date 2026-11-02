// Power-of-attorney (procuration) forms — family, administration,
// property, business and collections. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsWakalat: DocumentItem[] = [
  // ─── Famille & proches ───
  {
    id: "wk-zawja-ajhiza-idariya",
    cat: "wakalat",
    title: T7(
      "وكالة خاصة لفائدة الزوجة لقضاء الأغراض الإدارية",
      "Procuration spéciale au profit de l'épouse pour les démarches administratives",
      "Special power of attorney in favour of the wife for administrative procedures",
      "Poder especial a favor de la esposa para trámites administrativos",
      "Procura speciale a favore della moglie per pratiche amministrative",
      "Spezialvollmacht zugunsten der Ehefrau für Verwaltungsgänge",
      "Специальная доверенность в пользу жены для административных процедур"
    ),
    desc: D7(
      "وكالة يمنحها الزوج لزوجته للتصرف في إجراءاته الإدارية المحددة باسمه.",
      "Procuration par laquelle le mari habilite son épouse à accomplir en son nom des démarches administratives précises.",
      "Power of attorney by which the husband authorises his wife to carry out specified administrative steps in his name.",
      "Poder con el que el marido autoriza a su esposa a realizar trámites concretos en su nombre.",
      "Procura con cui il marito autorizza la moglie a svolgere pratiche precise a suo nome.",
      "Vollmacht, mit der der Ehemann seine Frau für bestimmte Verwaltungsschritte ermächtigt.",
      "Доверенность, по которой муж уполномочивает жену совершать административные действия от его имени."
    ),
    where: W7(
      "الإدارة أو المصلحة العمومية المعنية بالإجراء المطلوب",
      "Administration ou service public concerné par la démarche à accomplir",
      "Administration or public service concerned with the procedure to be carried out",
      "Administración o servicio público encargado del trámite que debe realizarse",
      "Amministrazione o servizio pubblico competente per la pratica da svolgere",
      "Für den Vorgang zuständige Behörde oder öffentliche Stelle",
      "Ведомство или государственная служба, компетентная для данной процедуры"
    ),
    keywords: ["وكالة", "procuration", "power of attorney", "زوجة", "épouse", "démarches"],
    popular: true,
  },
  {
    id: "wk-abnaa-wathaiq",
    cat: "wakalat",
    title: T7(
      "وكالة لفائدة الأبناء لاستلام الوثائق وتتبع الملفات",
      "Procuration au profit des enfants pour le retrait de documents et le suivi des dossiers",
      "Power of attorney in favour of the children for collecting documents and following up files",
      "Poder a favor de los hijos para retirar documentos y seguir expedientes",
      "Procura a favore dei figli per il ritiro dei documenti e il seguito delle pratiche",
      "Vollmacht zugunsten der Kinder für die Abholung von Dokumenten und die Verfolgung von Akten",
      "Доверенность в пользу детей на получение документов и ведение дел"
    ),
    desc: D7(
      "تفويض يمنحه الوالدان لأبنائهما لاستلام وثائقهما الإدارية وتتبع ملفاتهما لدى المصالح المعنية.",
      "Autorisation par laquelle les parents habilitent leurs enfants à retirer leurs documents et à suivre leurs dossiers.",
      "Authorisation by which the parents empower their children to collect their documents and follow up their files.",
      "Autorización por la que los padres facultan a sus hijos para retirar sus documentos y seguir sus expedientes.",
      "Autorizzazione con cui i genitori abilitano i figli a ritirare i loro documenti e a seguire le loro pratiche.",
      "Ermächtigung, mit der die Eltern ihre Kinder bevollmächtigen, ihre Dokumente abzuholen und ihre Akten zu verfolgen.",
      "Доверенность, по которой родители уполномочивают детей получать их документы и вести их дела."
    ),
    where: W7(
      "المصالح الإدارية المعنية باستلام الوثيقة أو تتبع الملف",
      "Services administratifs concernés par le retrait du document ou le suivi du dossier",
      "Administrative services concerned with document collection or file follow-up",
      "Servicios administrativos encargados de la entrega del documento o del seguimiento del expediente",
      "Servizi amministrativi competenti per il ritiro del documento o il seguito della pratica",
      "Für Dokumentenabholung oder Aktverfolgung zuständige Verwaltungsstellen",
      "Административные службы, отвечающие за выдачу документов или ведение дел"
    ),
    keywords: ["أبناء", "enfants", "children", "استلام وثائق", "retrait de documents", "والدان"],
  },
  {
    id: "wk-walid-musinn",
    cat: "wakalat",
    title: T7(
      "وكالة لفائدة الوالد أو الوالدة في سن متقدمة",
      "Procuration au profit d'un parent âgé",
      "Power of attorney in favour of an elderly parent",
      "Poder a favor de un progenitor anciano",
      "Procura a favore di un genitore anziano",
      "Vollmacht zugunsten eines betagten Elternteils",
      "Доверенность в пользу престарелого родителя"
    ),
    desc: D7(
      "وكالة يمنحها أحد الوالدين في سن متقدمة لابنه لإتمام إجراءاته الإدارية وسحب وثائقه نيابة عنه.",
      "Procuration par laquelle un parent âgé habilite son enfant à accomplir ses démarches et à retirer ses documents.",
      "Power of attorney by which an elderly parent authorises a child to carry out procedures and collect documents.",
      "Poder por el que un progenitor anciano autoriza a su hijo a realizar trámites y retirar documentos.",
      "Procura con cui un genitore anziano autorizza il figlio a svolgere le pratiche e a ritirare i documenti.",
      "Vollmacht, mit der ein betagtes Elternteil das Kind ermächtigt, Formalitäten zu erledigen und Dokumente abzuholen.",
      "Доверенность, по которой престарелый родитель уполномочивает ребёнка совершать процедуры и получать документы."
    ),
    where: W7(
      "الجهات الإدارية ومصالح التقاعد المعنية بشؤون الوالد أو الوالدة",
      "Administrations et caisses de retraite concernées par les affaires du parent",
      "Administrations and pension funds concerned with the parent's affairs",
      "Administraciones y cajas de pensiones encargadas de los asuntos del progenitor",
      "Amministrazioni e casse previdenziali competenti per gli affari del genitore",
      "Für die Angelegenheiten des Elternteils zuständige Behörden und Rentenkassen",
      "Ведомства и пенсионные фонды, ведущие дела родителя"
    ),
    keywords: ["والد مسن", "parent âgé", "elderly parent", "تقاعد", "retraite", "إجراءات"],
  },
  {
    id: "wk-akh-shuun-kharij",
    cat: "wakalat",
    title: T7(
      "وكالة لفائدة الأخ لمتابعة شؤون الموكل أثناء تواجده بالخارج",
      "Procuration au profit du frère pendant le séjour du mandant à l'étranger",
      "Power of attorney in favour of a brother during the principal's stay abroad",
      "Poder a favor del hermano durante la estancia del poderdante en el extranjero",
      "Procura a favore del fratello durante il soggiorno del mandante all'estero",
      "Vollmacht zugunsten des Bruders während des Auslandsaufenthalts des Vollmachtgebers",
      "Доверенность в пользу брата на время пребывания доверителя за границей"
    ),
    desc: D7(
      "تفويض يمنحه مقيم بالخارج لأخيه لمتابعة شؤونه الإدارية وتقديم طلباته نيابة عنه بالمغرب.",
      "Autorisation par laquelle un résident à l'étranger habilite son frère à suivre ses affaires et à déposer ses demandes au Maroc.",
      "Authorisation by which a resident abroad empowers his brother to follow up his affairs and submit his requests in Morocco.",
      "Autorización por la que un residente en el extranjero faculta a su hermano a seguir sus asuntos y presentar solicitudes en Marruecos.",
      "Autorizzazione con cui un residente all'estero abilita il fratello a seguire i suoi affari e presentare domande in Marocco.",
      "Ermächtigung, mit der ein im Ausland Lebender seinen Bruder bevollmächtigt, in Marokko seine Angelegenheiten zu verfolgen.",
      "Доверенность, по которой проживающий за границей уполномочивает брата вести его дела и подавать заявления в Марокко."
    ),
    where: W7(
      "المصالح الإدارية المغربية المعنية، أو القنصلية عند تحرير الوكالة من الخارج",
      "Services administratifs marocains concernés, ou consulat lors de la rédaction depuis l'étranger",
      "The Moroccan administrative services concerned, or the consulate when drafted from abroad",
      "Servicios administrativos marroquíes competentes, o consulado al redactarla desde el extranjero",
      "Servizi amministrativi marocchini competenti, oppure consolato in caso di redazione dall'estero",
      "Zuständige marokkanische Behörden, oder das Konsulat bei Ausstellung im Ausland",
      "Компетентные марокканские службы или консульство при составлении за границей"
    ),
    keywords: ["أخ", "frère", "brother", "الخارج", "étranger", "abroad"],
  },
  {
    id: "wk-bint-dirasa-kharij",
    cat: "wakalat",
    title: T7(
      "وكالة لفائدة البنت لإتمام إجراءات الدراسة بالخارج",
      "Procuration au profit de la fille pour les démarches d'études à l'étranger",
      "Power of attorney in favour of the daughter for study procedures abroad",
      "Poder a favor de la hija para los trámites de estudios en el extranjero",
      "Procura a favore della figlia per le pratiche di studio all'estero",
      "Vollmacht zugunsten der Tochter für Studienformalitäten im Ausland",
      "Доверенность в пользу дочери для процедур обучения за границей"
    ),
    desc: D7(
      "وكالة تمنحها الأسرة لابنتها لإتمام مساطر التسجيل والتأشيرة وملفات الدراسة بالخارج.",
      "Procuration par laquelle la famille habilite sa fille à accomplir l'inscription, le visa et les dossiers d'études à l'étranger.",
      "Power of attorney by which the family authorises the daughter to complete enrolment, visa and study-abroad files.",
      "Poder por el que la familia autoriza a la hija a completar la inscripción, el visado y los expedientes de estudios.",
      "Procura con cui la famiglia autorizza la figlia a completare l'iscrizione, il visto e le pratiche di studio.",
      "Vollmacht, mit der die Familie die Tochter ermächtigt, Immatrikulation, Visum und Studienunterlagen zu erledigen.",
      "Доверенность, по которой семья уполномочивает дочь завершить зачисление, визу и документы на обучение."
    ),
    where: W7(
      "الجامعات والقنصليات والمؤسسات المعنية بملف الدراسة",
      "Universités, consulats et établissements concernés par le dossier d'études",
      "Universities, consulates and institutions concerned with the study file",
      "Universidades, consulados e instituciones encargadas del expediente de estudios",
      "Università, consolati e istituzioni competenti per il fascicolo di studi",
      "Für die Studienangelegenheiten zuständige Universitäten, Konsulate und Einrichtungen",
      "Университеты, консульства и учреждения, ведущие учебное дело"
    ),
    keywords: ["بنت", "fille", "daughter", "دراسة بالخارج", "études à l'étranger", "visa"],
  },
  {
    id: "wk-zawj-tawajud-kharij",
    cat: "wakalat",
    title: T7(
      "وكالة من الزوجة لفائدة الزوج أثناء تواجده بالخارج",
      "Procuration de l'épouse au profit du mari en déplacement à l'étranger",
      "Power of attorney from the wife in favour of the husband travelling abroad",
      "Poder de la esposa a favor del esposo desplazado al extranjero",
      "Procura della moglie a favore del marito in trasferta all'estero",
      "Vollmacht der Ehefrau zugunsten des im Ausland reisenden Ehemanns",
      "Доверенность жены в пользу мужа, выезжающего за границу"
    ),
    desc: D7(
      "وكالة تمنحها الزوجة لزوجها للتصرف في شؤونها الإدارية ومتابعة ملفاتها خلال تنقّله بالخارج.",
      "Procuration par laquelle l'épouse habilite son mari à gérer ses affaires et à suivre ses dossiers durant ses séjours à l'étranger.",
      "Power of attorney by which the wife authorises her husband to manage her affairs during his stays abroad.",
      "Poder por el que la esposa autoriza al marido a gestionar sus asuntos durante sus estancias en el extranjero.",
      "Procura con cui la moglie autorizza il marito a gestire i suoi affari durante i soggiorni all'estero.",
      "Vollmacht, mit der die Ehefrau den Ehemann befugt, während seiner Auslandsaufenthalte ihre Angelegenheiten zu regeln.",
      "Доверенность, по которой жена уполномочивает мужа вести её дела во время его заграничных поездок."
    ),
    where: W7(
      "القنصليات والجهات الإدارية المعنية بالإجراء المطلوب",
      "Consulats et administrations concernés par la démarche à accomplir",
      "Consulates and administrations concerned with the required procedure",
      "Consulados y administraciones competentes para el trámite requerido",
      "Consolati e amministrazioni competenti per la pratica richiesta",
      "Für den Vorgang zuständige Konsulate und Behörden",
      "Консульства и ведомства, компетентные для данной процедуры"
    ),
    keywords: ["زوج", "mari", "husband", "الخارج", "étranger", "تنقل"],
  },
  {
    id: "wk-wakala-amma-shuun",
    cat: "wakalat",
    title: T7(
      "وكالة عامة لتدبير الشؤون الإدارية والمالية",
      "Procuration générale pour la gestion des affaires administratives et financières",
      "General power of attorney for managing administrative and financial affairs",
      "Poder general para la gestión de asuntos administrativos y financieros",
      "Procura generale per la gestione degli affari amministrativi e finanziari",
      "Generalvollmacht zur Verwaltung administrativer und finanzieller Angelegenheiten",
      "Общая доверенность на ведение административных и финансовых дел"
    ),
    desc: D7(
      "وكالة واسعة النطاق يفوّض فيها الموكل تدبير جميع شؤونه الإدارية والمالية دون التصرفات العقارية.",
      "Mandat étendu par lequel le mandant confie la gestion de toutes ses affaires administratives et financières, actes immobiliers exclus.",
      "Broad mandate by which the principal entrusts the management of all administrative and financial affairs, excluding property transactions.",
      "Mandato amplio por el que el poderdante confía la gestión de todos sus asuntos administrativos y financieros, sin actos inmobiliarios.",
      "Mandato ampio con cui il mandante affida la gestione di tutti i suoi affari, esclusi gli atti immobiliari.",
      "Umfassendes Mandat, mit dem der Vollmachtgeber die Verwaltung aller Angelegenheiten überträgt, ohne Immobiliengeschäfte.",
      "Широкий мандат, по которому доверитель передаёт ведение всех административных и финансовых дел, исключая операции с недвижимостью."
    ),
    where: W7(
      "جميع الإدارات المعنية بشؤون الموكل، مع استحسان تحرير الوكالة أمام العدول",
      "Toutes les administrations concernées par les affaires du mandant, la rédaction devant les adouls étant recommandée",
      "All administrations concerned with the principal's affairs, drafting before the adouls being recommended",
      "Todas las administraciones encargadas de los asuntos del poderdante, recomendándose redactarla ante los adules",
      "Tutte le amministrazioni competenti per gli affari del mandante, con redazione raccomandata davanti agli adoul",
      "Alle für die Angelegenheiten zuständigen Behörden; Beurkundung vor Adoul empfohlen",
      "Все ведомства, ведущие дела доверителя; составление у адулов рекомендуется"
    ),
    keywords: ["وكالة عامة", "procuration générale", "general power of attorney", "شؤون إدارية", "affaires financières"],
  },
  {
    id: "wk-wakala-khasa-gharad-wahid",
    cat: "wakalat",
    title: T7(
      "وكالة خاصة محصورة في غرض واحد محدد",
      "Procuration spéciale limitée à un objet unique déterminé",
      "Special power of attorney restricted to a single defined purpose",
      "Poder especial limitado a un único objeto determinado",
      "Procura speciale limitata a un unico oggetto determinato",
      "Spezialvollmacht beschränkt auf einen einzigen bestimmten Zweck",
      "Специальная доверенность, ограниченная одной конкретной целью"
    ),
    desc: D7(
      "وكالة محدودة الغرض تخوّل الوكيل إنجاز عمل واحد بالضبط لا يتعداه، كاستلام وثيقة أو أداء معلوم.",
      "Autorisation d'étendue volontairement restreinte qui habilite le mandataire à accomplir un acte précis et unique.",
      "Deliberately narrow authorisation enabling the agent to perform one precise act only, nothing beyond.",
      "Autorización de alcance deliberadamente reducido que faculta al apoderado a realizar un único acto preciso.",
      "Autorizzazione di portata volutamente ristretta che abilita il mandatario a compiere un unico atto preciso.",
      "Bewusst eng gefasste Ermächtigung, die den Bevollmächtigten zu genau einer Handlung befähigt.",
      "Намеренно узкая доверенность, позволяющая поверенному совершить один конкретный акт."
    ),
    where: W7(
      "الجهة المعنية بالغرض المحدد في الوكالة",
      "L'administration ou le service visé par l'objet fixé dans la procuration",
      "The authority or service targeted by the purpose stated in the power of attorney",
      "La administración o servicio señalado por el objeto fijado en el poder",
      "L'amministrazione o il servizio indicato dall'oggetto fissato nella procura",
      "Die in der Vollmacht genannte Behörde oder Dienststelle",
      "Орган или служба, указанные в качестве цели доверенности"
    ),
    keywords: ["وكالة خاصة", "procuration spéciale", "special power of attorney", "غرض واحد", "objet unique"],
  },
  {
    id: "wk-ibn-tilmid-masakan",
    cat: "wakalat",
    title: T7(
      "وكالة لفائدة الابن الطالب لإتمام إجراءات التسجيل والسكن الجامعي",
      "Procuration au profit du fils étudiant pour l'inscription et le logement universitaire",
      "Power of attorney in favour of the student son for enrolment and university housing",
      "Poder a favor del hijo estudiante para la inscripción y la residencia universitaria",
      "Procura a favore del figlio studente per l'iscrizione e l'alloggio universitario",
      "Vollmacht zugunsten des studierenden Sohnes für Immatrikulation und Studierendenwohnheim",
      "Доверенность в пользу сына-студента на зачисление и общежитие"
    ),
    desc: D7(
      "وكالة يمنحها الوالد لابنه الطالب لإتمام تسجيله الجامعي وحجز سكنه داخل الحجرة الجامعية.",
      "Procuration par laquelle le parent habilite son enfant étudiant à accomplir son inscription et à réserver son logement universitaire.",
      "Power of attorney by which the parent authorises the student child to complete enrolment and book university housing.",
      "Poder por el que el progenitor autoriza al hijo estudiante a completar la inscripción y reservar la residencia universitaria.",
      "Procura con cui il genitore autorizza il figlio studente a completare l'iscrizione e a prenotare l'alloggio universitario.",
      "Vollmacht, mit der das Elternteil den studierenden Sohn ermächtigt, die Immatrikulation zu erledigen und ein Wohnheimszimmer zu reservieren.",
      "Доверенность, по которой родитель уполномочивает сына-студента завершить зачисление и забронировать место в общежитии."
    ),
    where: W7(
      "إدارة الجامعة ومصالح الحجرة الجامعية المعنية",
      "L'administration de l'université et les services de la cité universitaire",
      "The university administration and the halls-of-residence services",
      "La administración de la universidad y los servicios de la residencia universitaria",
      "L'amministrazione universitaria e i servizi della casa dello studente",
      "Die Universitätsverwaltung und die Dienste des Studierendenwohnheims",
      "Администрация университета и службы студенческого общежития"
    ),
    keywords: ["طالب", "étudiant", "student", "سكن جامعي", "logement universitaire", "تسجيل"],
  },
  {
    id: "wk-qasir-wasi",
    cat: "wakalat",
    title: T7(
      "وكالة من الوالدين لفائدة الغير لإتمام إجراءات ابنهما القاصر",
      "Procuration des parents en faveur d'un tiers pour les démarches de leur enfant mineur",
      "Power of attorney from the parents in favour of a third party for their minor child's procedures",
      "Poder de los padres a favor de un tercero para los trámites de su hijo menor",
      "Procura dei genitori a favore di un terzo per le pratiche del figlio minore",
      "Vollmacht der Eltern zugunsten eines Dritten für die Angelegenheiten ihres minderjährigen Kindes",
      "Доверенность родителей в пользу третьего лица для дел их несовершеннолетнего ребёнка"
    ),
    desc: D7(
      "تفويض يوقّعه الوالدان أو الوصي لفائدة قريب لإتمام إجراءات القاصر لدى الإدارات المعنية.",
      "Délégation signée par les parents ou le tuteur au profit d'un proche pour accomplir les démarches du mineur.",
      "Delegation signed by the parents or guardian in favour of a relative to complete the minor's procedures.",
      "Delegación firmada por los padres o el tutor a favor de un familiar para realizar los trámites del menor.",
      "Delega firmata dai genitori o dal tutore a favore di un parente per compiere le pratiche del minore.",
      "Vollmacht der Eltern oder des Vormunds zugunsten eines Verwandten zur Erledigung der Angelegenheiten des Minderjährigen.",
      "Доверенность, подписанная родителями или опекуном в пользу родственника для дел несовершеннолетнего."
    ),
    where: W7(
      "الإدارات المعنية بإجراءات القاصر (الحالة المدنية، الشرطة أو المدرسة)",
      "Administrations concernées par les démarches du mineur (état civil, police ou école)",
      "Administrations concerned with the minor's procedures (civil registry, police or school)",
      "Administraciones encargadas de los trámites del menor (registro civil, policía o escuela)",
      "Amministrazioni competenti per le pratiche del minore (anagrafe, polizia o scuola)",
      "Für die Angelegenheiten des Minderjährigen zuständige Stellen (Standesamt, Polizei oder Schule)",
      "Ведомства, ведущие дела несовершеннолетнего (ЗАГС, полиция или школа)"
    ),
    keywords: ["قاصر", "mineur", "minor", "وصي", "tuteur", "guardian"],
  },
  // ─── Administrations & documents ───
  {
    id: "wk-milad-istilam",
    cat: "wakalat",
    title: T7(
      "وكالة لاستخراج نسخة من رسم الولادة",
      "Procuration pour retirer un acte de naissance",
      "Power of attorney to withdraw a birth certificate",
      "Poder para retirar un acta de nacimiento",
      "Procura per ritirare un atto di nascita",
      "Vollmacht zur Abholung einer Geburtsurkunde",
      "Доверенность на получение свидетельства о рождении"
    ),
    desc: D7(
      "وكالة تخوّل الوكيل سحب نسخ من رسم الولادة أو رسم الزواج باسم الموكل من الحالة المدنية.",
      "Procuration autorisant le mandataire à obtenir, au nom du mandant, des copies d'actes de naissance ou de mariage.",
      "Power of attorney authorising the agent to obtain, in the principal's name, copies of birth or marriage certificates.",
      "Poder que autoriza al apoderado a obtener, en nombre del poderdante, copias de actas de nacimiento o matrimonio.",
      "Procura che autorizza il mandatario a ottenere, a nome del mandante, copie di atti di nascita o di matrimonio.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, im Namen des Vollmachtgebers Geburts- oder Heiratsurkunden abzuholen.",
      "Доверенность, разрешающая поверенному получать от имени доверителя копии свидетельств о рождении или браке."
    ),
    where: W7(
      "مصلحة الحالة المدنية التابعة للجماعة المعنية",
      "Service d'état civil de la commune concernée",
      "Civil registry service of the relevant commune",
      "Servicio de registro civil de la comuna correspondiente",
      "Servizio di stato civile del comune interessato",
      "Standesamt der zuständigen Gemeinde",
      "Отдел ЗАГС соответствующей коммуны"
    ),
    keywords: ["رسم الولادة", "acte de naissance", "birth certificate", "الحالة المدنية", "état civil"],
    popular: true,
  },
  {
    id: "wk-hukm-istilam",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام نسخة من حكم قضائي",
      "Procuration pour retirer une copie d'un jugement",
      "Power of attorney to obtain a copy of a court judgment",
      "Poder para retirar copia de una sentencia",
      "Procura per ritirare copia di una sentenza",
      "Vollmacht zur Abholung einer Urteilsausfertigung",
      "Доверенность на получение копии судебного решения"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من الحصول على نسخة تنفيذية أو عادية من حكم باسم الموكل.",
      "Procuration permettant au mandataire d'obtenir, pour le compte du mandant, une copie exécutoire ou simple d'un jugement.",
      "Power of attorney allowing the agent to obtain, for the principal, an enforceable or plain copy of a judgment.",
      "Poder que permite al apoderado obtener, por cuenta del poderdante, copia ejecutiva o simple de una sentencia.",
      "Procura che consente al mandatario di ottenere, per conto del mandante, copia esecutiva o semplice di una sentenza.",
      "Vollmacht, die dem Bevollmächtigten erlaubt, für den Vollmachtgeber eine vollstreckbare oder einfache Ausfertigung zu erhalten.",
      "Доверенность, позволяющая поверенному получить для доверителя исполнительную или простую копию решения."
    ),
    where: W7(
      "كتابة ضبط المحكمة التي أصدرت الحكم",
      "Greffe de la juridiction ayant rendu le jugement",
      "The registry of the court that issued the judgment",
      "Secretaría del tribunal que dictó la sentencia",
      "Cancelleria della giurisdizione che ha emesso la sentenza",
      "Geschäftsstelle des die Entscheidung erlassenden Gerichts",
      "Канцелярия суда, вынесшего решение"
    ),
    keywords: ["حكم", "jugement", "judgment", "كتابة الضبط", "greffe", "نسخة تنفيذية"],
  },
  {
    id: "wk-sijil-adli",
    cat: "wakalat",
    title: T7(
      "وكالة لاستخراج السجل العدلي",
      "Procuration pour obtenir le casier judiciaire",
      "Power of attorney to obtain the criminal record",
      "Poder para obtener el certificado de antecedentes penales",
      "Procura per ottenere il certificato del casellario",
      "Vollmacht zur Beantragung des Führungszeugnisses",
      "Доверенность на получение справки о судимости"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل طلب واستخراج السجل العدلي باسم الموكل من الجهات المختصة.",
      "Autorisation habilitant le mandataire à demander et à retirer l'extrait du casier judiciaire du mandant.",
      "Authorisation enabling the agent to request and collect the principal's criminal record extract.",
      "Autorización que faculta al apoderado a solicitar y retirar el extracto de antecedentes penales del poderdante.",
      "Autorizzazione che abilita il mandatario a richiedere e ritirare l'estratto del casellario del mandante.",
      "Ermächtigung, die den Bevollmächtigten befähigt, das Führungszeugnis des Vollmachtgebers anzufordern.",
      "Доверенность, уполномочивающая поверенного запросить и получить справку о судимости доверителя."
    ),
    where: W7(
      "بوابة السجل العدلي الإلكترونية أو مقر المحكمة الابتدائية",
      "Le portail en ligne du casier judiciaire ou le siège du tribunal de première instance",
      "The online criminal-record portal or the seat of the first-instance court",
      "El portal en línea de antecedentes penales o la sede del juzgado de primera instancia",
      "Il portale online del casellario o la sede del tribunale di prima istanza",
      "Das Online-Portal für das Führungszeugnis oder der Sitz des Amtsgerichts",
      "Онлайн-портал судимостей или здание суда первой инстанции"
    ),
    authority: "casier-judiciaire",
    keywords: ["السجل العدلي", "casier judiciaire", "criminal record", "سجل", "extrait"],
  },
  {
    id: "wk-ancfcc-milaff",
    cat: "wakalat",
    title: T7(
      "وكالة لدى المحافظة العقارية لتتبع الملف العقاري",
      "Procuration auprès de l'ANCFCC pour le suivi du dossier foncier",
      "Power of attorney with the ANCFCC for following up the land file",
      "Poder ante la ANCFCC para el seguimiento del expediente registral",
      "Procura presso l'ANCFCC per il seguito della pratica fondiaria",
      "Vollmacht bei der ANCFCC zur Verfolgung des Grundaktes",
      "Доверенность в ANCFCC на ведение регистрационного дела"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من تتبع مسطرة التحفيظ وسحب الوثائق والرسوم العقارية باسم الموكل.",
      "Procuration permettant au mandataire de suivre la procédure d'immatriculation et de retirer les documents fonciers du mandant.",
      "Power of attorney allowing the agent to follow the registration procedure and withdraw the principal's land documents.",
      "Poder que permite al apoderado seguir el procedimiento de inscripción y retirar los documentos registrales del poderdante.",
      "Procura che consente al mandatario di seguire la procedura di iscrizione e ritirare i documenti fondiari del mandante.",
      "Vollmacht, die dem Bevollmächtigten erlaubt, das Eintragungsverfahren zu verfolgen und die Grundunterlagen abzuholen.",
      "Доверенность, позволяющая поверенному вести процедуру регистрации и получать земельные документы доверителя."
    ),
    where: W7(
      "المحافظة العقارية التابعة لها العقار (ANCFCC)",
      "La conservation foncière de la situation de l'immeuble (ANCFCC)",
      "The land registry covering the property's location (ANCFCC)",
      "La conservación registral de la situación del inmueble (ANCFCC)",
      "La conservazione fondiaria della circoscrizione dell'immobile (ANCFCC)",
      "Das Grundbuchamt des Bezirks, in dem das Objekt liegt (ANCFCC)",
      "Земельная палата по месту нахождения объекта (ANCFCC)"
    ),
    authority: "ancfcc",
    keywords: ["المحافظة العقارية", "ANCFCC", "conservation foncière", "تحفيظ", "immatriculation", "ملف عقاري"],
  },
  {
    id: "wk-cnss-tatabbu",
    cat: "wakalat",
    title: T7(
      "وكالة لتتبع ملف الضمان الاجتماعي",
      "Procuration pour suivre un dossier CNSS",
      "Power of attorney to follow up a CNSS file",
      "Poder para seguir un expediente de la CNSS",
      "Procura per seguire una pratica CNSS",
      "Vollmacht zur Verfolgung eines CNSS-Dossiers",
      "Доверенность на ведение дела в CNSS"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل تتبع ملف الانخراط أو التصريحات لدى CNSS وطلب المستحقات.",
      "Autorisation permettant au mandataire de suivre le dossier d'affiliation ou de déclarations du mandant auprès de la CNSS.",
      "Authorisation allowing the agent to follow the principal's affiliation or declaration file with the CNSS.",
      "Autorización que permite al apoderado seguir el expediente de afiliación o de declaraciones del poderdante en la CNSS.",
      "Autorizzazione che consente al mandatario di seguire la pratica di affiliazione o di dichiarazioni del mandante presso la CNSS.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, das Anmeldungs- oder Erklärungsdossier bei der CNSS zu verfolgen.",
      "Доверенность, позволяющая поверенному вести в CNSS дело о регистрации или отчётности доверителя."
    ),
    where: W7(
      "وكالات CNSS أو المنصة الرقمية MaCNSS",
      "Les agences CNSS ou la plateforme numérique MaCNSS",
      "CNSS agencies or the MaCNSS digital platform",
      "Las agencias de la CNSS o la plataforma digital MaCNSS",
      "Le agenzie CNSS o la piattaforma digitale MaCNSS",
      "Die CNSS-Stellen oder die digitale Plattform MaCNSS",
      "Агентства CNSS или цифровая платформа MaCNSS"
    ),
    authority: "cnss",
    keywords: ["CNSS", "الضمان الاجتماعي", "sécurité sociale", "انخراط", "affiliation"],
  },
  {
    id: "wk-cin-idac",
    cat: "wakalat",
    title: T7(
      "وكالة لإيداع ملف البطاقة الوطنية للتعريف",
      "Procuration pour déposer le dossier de la CIN",
      "Power of attorney to submit the national ID card file",
      "Poder para presentar el expediente del DNI",
      "Procura per depositare la pratica della carta d'identità",
      "Vollmacht zur Einreichung des Personalausweisdossiers",
      "Доверенность на подачу заявления на удостоверение личности"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من إيداع ملف البطاقة أو تجديده لدى المصالح المختصة بالنيابة عن الموكل.",
      "Procuration autorisant le mandataire à déposer ou à renouveler le dossier de la carte nationale du mandant.",
      "Power of attorney authorising the agent to submit or renew the principal's national ID card file.",
      "Poder que autoriza al apoderado a presentar o renovar el expediente del DNI del poderdante.",
      "Procura che autorizza il mandatario a depositare o rinnovare la pratica della carta d'identità del mandante.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, das Ausweisdossier einzureichen oder zu erneuern.",
      "Доверенность, разрешающая поверенному подать или обновить заявление на удостоверение личности доверителя."
    ),
    where: W7(
      "مصلحة إصدار البطاقات التابعة للشرطة أو الدرك قرب محل السكنى",
      "Le service des cartes de la police ou de la gendarmerie proche du domicile",
      "The ID-card service of the police or gendarmerie near the place of residence",
      "El servicio de expedición de documentos de la policía o la gendarmería cercano al domicilio",
      "Il servizio emissione tessere della polizia o della gendarmeria vicino al domicilio",
      "Der Ausweisdienst der Polizei oder Gendarmerie in Wohnortnähe",
      "Служба выдачи удостоверений полиции или жандармерии рядом с местом проживания"
    ),
    authority: "cnie",
    popular: true,
    keywords: ["البطاقة الوطنية", "CIN", "carte nationale", "identity card", "هوية"],
  },
  {
    id: "wk-jawaz-qasir",
    cat: "wakalat",
    title: T7(
      "وكالة لإيداع ملف جواز سفر قاصر",
      "Procuration pour déposer le dossier de passeport d'un mineur",
      "Power of attorney to submit a minor's passport file",
      "Poder para presentar el expediente de pasaporte de un menor",
      "Procura per depositare la pratica del passaporto di un minore",
      "Vollmacht zur Einreichung eines Passantrags für Minderjährige",
      "Доверенность на подачу заявления на паспорт несовершеннолетнего"
    ),
    desc: D7(
      "تفويض من الوالدين يخوّل أحدهما أو قريباً إيداع ملف جواز سفر ابنهما القاصر وسحبه.",
      "Autorisation des parents habilitant l'un d'eux ou un proche à déposer et à retirer le dossier de passeport du mineur.",
      "Authorisation from the parents enabling one of them or a relative to submit and collect the minor's passport file.",
      "Autorización de los padres que faculta a uno de ellos o a un familiar a presentar y retirar el expediente de pasaporte del menor.",
      "Autorizzazione dei genitori che abilita uno di essi o un parente a depositare e ritirare la pratica del passaporto del minore.",
      "Ermächtigung der Eltern, die einen von ihnen oder einen Verwandten befähigt, den Passantrag einzureichen und abzuholen.",
      "Доверенность родителей, разрешающая одному из них или родственнику подать и получить паспортное дело несовершеннолетнего."
    ),
    where: W7(
      "مصلحة إصدار الجوازات أو المركز المختص قرب السكنى",
      "Le service des passeports ou le centre compétent proche du domicile",
      "The passport-issuing service or the competent centre near the residence",
      "El servicio de pasaportes o el centro competente cercano al domicilio",
      "Il servizio passaporti o il centro competente vicino al domicilio",
      "Der Passdienst oder die zuständige Stelle in Wohnortnähe",
      "Паспортная служба или компетентный центр рядом с местом проживания"
    ),
    authority: "passeport",
    keywords: ["جواز السفر", "passeport", "passport", "قاصر", "mineur", "سفر"],
  },
  {
    id: "wk-massar-madrasa",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام الملف المدرسي عبر منظومة مسار",
      "Procuration pour retirer le dossier scolaire (Massar)",
      "Power of attorney to collect the school file (Massar)",
      "Poder para retirar el expediente escolar (Massar)",
      "Procura per ritirare il fascicolo scolastico (Massar)",
      "Vollmacht zur Abholung des Schuldossiers (Massar)",
      "Доверенность на получение школьного дела (Massar)"
    ),
    desc: D7(
      "وكالة تخوّل قريباً استلام الملف المدرسي ونتائج الابن من إدارة المؤسسة التعليمية.",
      "Procuration habilitant un proche à retirer le dossier scolaire et les résultats de l'enfant auprès de l'établissement.",
      "Power of attorney empowering a relative to collect the school file and the child's results from the establishment.",
      "Poder que faculta a un familiar a retirar el expediente escolar y las notas del niño en el centro.",
      "Procura che abilita un parente a ritirare il fascicolo scolastico e i risultati del bambino presso l'istituto.",
      "Vollmacht, die einen Verwandten befähigt, das Schuldossier und die Ergebnisse des Kindes abzuholen.",
      "Доверенность, уполномочивающая родственника получить школьное дело и результаты ребёнка в учреждении."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية المسجّل بها التلميذ",
      "L'administration de l'établissement scolaire où l'élève est inscrit",
      "The administration of the school where the pupil is enrolled",
      "La administración del centro escolar donde está matriculado el alumno",
      "L'amministrazione della scuola dove l'alunno è iscritto",
      "Die Verwaltung der Schule, in der der Schüler eingeschrieben ist",
      "Администрация школы, в которой обучается ученик"
    ),
    keywords: ["مسار", "Massar", "dossier scolaire", "school file", "مدرسة", "نتائج"],
  },
  {
    id: "wk-barid-murasalat",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام المراسلات البريدية الموصى عليها",
      "Procuration pour retirer le courrier recommandé",
      "Power of attorney to collect registered mail",
      "Poder para retirar correspondencia certificada",
      "Procura per ritirare la posta raccomandata",
      "Vollmacht zur Entgegennahme von Einschreiben",
      "Доверенность на получение заказных писем"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل استلام رسائل الموكل الموصى عليها والتوقيع بها من مكتب البريد.",
      "Autorisation permettant au mandataire de recevoir et de signer les envois recommandés du mandant auprès de Barid Al-Maghrib.",
      "Authorisation allowing the agent to receive and sign for the principal's registered items at the post office.",
      "Autorización que permite al apoderado recibir y firmar los envíos certificados del poderdante en la oficina de correos.",
      "Autorizzazione che consente al mandatario di ricevere e firmare le raccomandate del mandante presso l'ufficio postale.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, Einschreiben des Vollmachtgebers bei der Post anzunehmen.",
      "Доверенность, позволяющая поверенному получать и расписываться за заказные отправления доверителя на почте."
    ),
    where: W7(
      "مكتب البريد المختص بترسيم الإرسالية",
      "Le bureau de poste où l'envoi est enregistré",
      "The post office where the item is registered",
      "La oficina de correos donde está registrado el envío",
      "L'ufficio postale dove la spedizione è registrata",
      "Das Postamt, bei dem die Sendung registriert ist",
      "Почтовое отделение, где зарегистрировано отправление"
    ),
    authority: "poste",
    keywords: ["بريد", "courrier recommandé", "registered mail", "Barid Al-Maghrib", "إرسالية"],
  },
  {
    id: "wk-douane-ijraat",
    cat: "wakalat",
    title: T7(
      "وكالة لإتمام إجراءات جمركية",
      "Procuration pour accomplir des formalités douanières",
      "Power of attorney to complete customs formalities",
      "Poder para realizar trámites aduaneros",
      "Procura per svolgere formalità doganali",
      "Vollmacht zur Erledigung von Zollformalitäten",
      "Доверенность на оформление таможенных процедур"
    ),
    desc: D7(
      "وكالة تخوّل الوكيل تخليص بضائع أو مركبة مستوردة وأداء الرسوم الجمركية بالنيابة عن الموكل.",
      "Procuration autorisant le mandataire à dédouaner des marchandises ou un véhicule et à acquitter les droits pour le mandant.",
      "Power of attorney authorising the agent to clear imported goods or a vehicle and pay the duties for the principal.",
      "Poder que autoriza al apoderado a despachar mercancías o un vehículo y pagar los aranceles por el poderdante.",
      "Procura che autorizza il mandatario a sdoganare merci o un veicolo e a pagare i diritti per il mandante.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, Waren oder ein Fahrzeug zu verzollen und die Abgaben zu entrichten.",
      "Доверенность, разрешающая поверенному растаможить товары или автомобиль и уплатить пошлины."
    ),
    where: W7(
      "المكتب الجمري المعني بالبضاعة أو المركبة",
      "Le bureau de douane compétent pour la marchandise ou le véhicule",
      "The customs office competent for the goods or vehicle",
      "La aduana competente para la mercancía o el vehículo",
      "L'ufficio doganale competente per la merce o il veicolo",
      "Das für die Ware oder das Fahrzeug zuständige Zollamt",
      "Таможня, компетентная для товара или автомобиля"
    ),
    authority: "douane",
    keywords: ["الجمارك", "douane", "customs", "تخليص", "dédouanement", "استيراد"],
  },
  {
    id: "wk-cnops-tawid",
    cat: "wakalat",
    title: T7(
      "وكالة لتتبع ملف التعويضات الطبية (CNOPS)",
      "Procuration pour suivre un dossier de remboursement CNOPS",
      "Power of attorney to follow up a CNOPS reimbursement file",
      "Poder para seguir un expediente de reembolso de la CNOPS",
      "Procura per seguire una pratica di rimborso CNOPS",
      "Vollmacht zur Verfolgung eines CNOPS-Erstattungsdossiers",
      "Доверенность на ведение дела о возмещении в CNOPS"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل تتبع ملف التعويضات الطبية وأدوية الموكل لدى الصندوق.",
      "Autorisation permettant au mandataire de suivre le dossier de remboursement des soins et des médicaments du mandant.",
      "Authorisation allowing the agent to follow up the file for reimbursement of the principal's care and medicines.",
      "Autorización que permite al apoderado seguir el expediente de reembolso de la atención y los medicamentos del poderdante.",
      "Autorizzazione che consente al mandatario di seguire la pratica di rimborso delle cure e dei farmaci del mandante.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, das Erstattungsdossier für Behandlung und Arzneimittel zu verfolgen.",
      "Доверенность, позволяющая поверенному вести дело о возмещении лечения и лекарств доверителя."
    ),
    where: W7(
      "وكالات CNOPS أو شباك المؤسسة الصحية المعنية",
      "Les agences CNOPS ou le guichet de l'établissement de santé concerné",
      "CNOPS agencies or the desk of the health establishment concerned",
      "Las agencias de la CNOPS o la ventanilla del establecimiento de salud",
      "Le agenzie CNOPS o lo sportello della struttura sanitaria",
      "Die CNOPS-Stellen oder der Schalter der Gesundheitseinrichtung",
      "Агентства CNOPS или окно медицинского учреждения"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "التعويضات", "remboursement", "reimbursement", "ضمان صحي", "أدوية"],
  },
  {
    id: "wk-shahada-sukna",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام شهادة السكنى",
      "Procuration pour retirer un certificat de résidence",
      "Power of attorney to collect a residence certificate",
      "Poder para retirar un certificado de residencia",
      "Procura per ritirare un certificato di residenza",
      "Vollmacht zur Abholung einer Wohnbescheinigung",
      "Доверенность на получение справки о проживании"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من طلب وسحب شهادة السكنى باسم الموكل من المصالح المختصة.",
      "Procuration autorisant le mandataire à demander et à retirer au nom du mandant son certificat de résidence.",
      "Power of attorney authorising the agent to request and collect the principal's residence certificate.",
      "Poder que autoriza al apoderado a solicitar y retirar en nombre del poderdante su certificado de residencia.",
      "Procura che autorizza il mandatario a richiedere e ritirare a nome del mandante il certificato di residenza.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, die Wohnbescheinigung im Namen des Vollmachtgebers zu beantragen.",
      "Доверенность, разрешающая поверенному запросить и получить справку о проживании доверителя."
    ),
    where: W7(
      "مصلحة الشرطة (الملحقة الإدارية) أو الجماعة حسب الحالة",
      "Le service de police (annexe administrative) ou la commune selon le cas",
      "The police service (administrative annex) or the commune as applicable",
      "El servicio de policía (anexo administrativo) o la comuna según el caso",
      "Il servizio di polizia (annesso amministrativo) o il comune a seconda dei casi",
      "Der Polizeidienst (Verwaltungsstelle) oder die Gemeinde, je nach Fall",
      "Служба полиции (административный округ) или коммуна, в зависимости от случая"
    ),
    keywords: ["شهادة السكنى", "certificat de résidence", "residence certificate", "سكن", "résidence"],
  },
  // ─── Biens & transactions ───
  {
    id: "wk-bay-aqar-min-kharij",
    cat: "wakalat",
    title: T7(
      "وكالة لبيع عقار الموكل المقيم بالخارج",
      "Procuration pour vendre un bien du mandant résidant à l'étranger",
      "Power of attorney to sell a property of a principal residing abroad",
      "Poder para vender un inmueble de un poderdante residente en el extranjero",
      "Procura per vendere un immobile di un mandante residente all'estero",
      "Vollmacht zum Verkauf einer Immobilie eines im Ausland lebenden Vollmachtgebers",
      "Доверенность на продажу недвижимости доверителя, проживающего за границей"
    ),
    desc: D7(
      "وكالة يمنحها مغربي مقيم بالخارج لقريبه بالمغرب لبيع عقاره أمام العدول باسمه.",
      "Procuration par laquelle un Marocain résidant à l'étranger habilite un proche au Maroc à vendre son bien devant les adouls.",
      "Power of attorney by which a Moroccan resident abroad authorises a relative in Morocco to sell his property before the adouls.",
      "Poder por el que un marroquí residente en el extranjero autoriza a un familiar en Marruecos a vender su inmueble ante los adules.",
      "Procura con cui un marocchino residente all'estero abilita un parente in Marocco a vendere l'immobile davanti agli adoul.",
      "Vollmacht, mit der ein im Ausland lebender Marokkaner einen Verwandten in Marokko bevollmächtigt, vor den Adoul zu verkaufen.",
      "Доверенность, по которой марокканец, проживающий за границей, уполномочивает родственника в Марокко продать недвижимость у адулов."
    ),
    where: W7(
      "مكتب العدول بالمغرب، مع تصديق الوكالة من القنصلية عند تحريرها بالخارج",
      "Étude d'adouls au Maroc, la procuration étant légalisée par le consulat si elle est rédigée à l'étranger",
      "An adouls' office in Morocco, the power of attorney being legalised by the consulate if drafted abroad",
      "Estudio de adules en Marruecos, legalizándose el poder por el consulado si se redacta en el extranjero",
      "Studio degli adoul in Marocco, con legalizzazione consolare se redatta all'estero",
      "Adoul-Kanzlei in Marokko; bei Ausstellung im Ausland vom Konsulat beglaubigt",
      "Контора адулов в Марокко; при составлении за границей — с консульским заверением"
    ),
    popular: true,
    keywords: ["بيع عقار", "vente immobilière", "property sale", "MRE", "العدول", "adouls"],
  },
  {
    id: "wk-shira-aqar",
    cat: "wakalat",
    title: T7(
      "وكالة لشراء عقار",
      "Procuration pour acheter un bien immobilier",
      "Power of attorney to purchase a property",
      "Poder para comprar un inmueble",
      "Procura per acquistare un immobile",
      "Vollmacht zum Kauf einer Immobilie",
      "Доверенность на покупку недвижимости"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل إبرام عقد شراء عقار والتوقيع عليه باسم الموكل أمام العدول.",
      "Autorisation habilitant le mandataire à conclure et à signer l'acte d'achat d'un bien au nom du mandant.",
      "Authorisation empowering the agent to conclude and sign the deed of purchase in the principal's name.",
      "Autorización que faculta al apoderado a otorgar y firmar la escritura de compra a nombre del poderdante.",
      "Autorizzazione che abilita il mandatario a rogare e firmare l'atto di acquisto a nome del mandante.",
      "Ermächtigung, die den Bevollmächtigten befähigt, die Kaufurkunde im Namen des Vollmachtgebers abzuschließen.",
      "Доверенность, уполномочивающая поверенного заключить и подписать договор купли от имени доверителя."
    ),
    where: W7(
      "مكتب العدول أو الموثق المحرر للعقد",
      "L'étude d'adouls ou le notaire rédigeant l'acte",
      "The adouls' office or the notary drafting the deed",
      "El estudio de adules o el notario que redacta la escritura",
      "Lo studio degli adoul o il notaio che redige l'atto",
      "Die Adoul-Kanzlei oder der Notar, der die Urkunde errichtet",
      "Контора адулов или нотариус, составляющий договор"
    ),
    keywords: ["شراء عقار", "achat immobilier", "property purchase", "عدول", "notaire"],
  },
  {
    id: "wk-tasir-kira-shaqqa",
    cat: "wakalat",
    title: T7(
      "وكالة لتسيير كراء شقة واستخلاص واجباتها",
      "Procuration pour gérer la location d'un appartement et en percevoir les loyers",
      "Power of attorney to manage the letting of an apartment and collect its rents",
      "Poder para gestionar el alquiler de un piso y percibir sus rentas",
      "Procura per gestire la locazione di un appartamento e riscuoterne gli affitti",
      "Vollmacht zur Verwaltung einer Mietwohnung und zum Einzug der Mieten",
      "Доверенность на управление арендой квартиры и сбор платы"
    ),
    desc: D7(
      "وكالة تفوّض فيها المالك تسيير شقته المكراة واستخلاص كرائها الشهري من المكتري.",
      "Procuration par laquelle le bailleur confie la gestion de son appartement loué et l'encaissement de ses loyers au mandataire.",
      "Power of attorney by which the landlord entrusts the management of his rented apartment and the collection of its rents to the agent.",
      "Poder por el que el arrendador confía la gestión de su piso alquilado y el cobro de sus rentas al apoderado.",
      "Procura con cui il locatore affida la gestione dell'appartamento affittato e l'incasso degli affitti al mandatario.",
      "Vollmacht, mit der der Vermieter die Verwaltung seiner vermieteten Wohnung und den Mieteingang überträgt.",
      "Доверенность, по которой арендодатель передаёт управление сдачей внаём и сбор платы."
    ),
    where: W7(
      "المكتري أو وكالة العقارات المعنية بالتسيير",
      "Le locataire ou l'agence de gestion concernée",
      "The tenant or the management agency concerned",
      "El inquilino o la agencia de gestión correspondiente",
      "L'inquilino o l'agenzia di gestione interessata",
      "Der Mieter oder die betroffene Verwaltungsgesellschaft",
      "Арендатор или управляющее агентство"
    ),
    popular: true,
    keywords: ["كراء", "location", "loyers", "استخلاص", "تسيير", "gestion"],
  },
  {
    id: "wk-ifrag-mahall",
    cat: "wakalat",
    title: T7(
      "وكالة لإفراغ محل كرائي",
      "Procuration pour faire libérer un local loué",
      "Power of attorney to have a leased premises vacated",
      "Poder para proceder al desalojo de un local alquilado",
      "Procura per far liberare un locale in affitto",
      "Vollmacht zur Räumung eines Mietlokals",
      "Доверенность на освобождение арендуемого помещения"
    ),
    desc: D7(
      "وكالة تخوّل الوكيل مباشرة مسطرة إفراغ المحل المكرى واسترجاعه من المكتري باسم المالك.",
      "Procuration autorisant le mandataire à mener la procédure de libération du local et sa restitution au bailleur.",
      "Power of attorney authorising the agent to conduct the premises-vacation procedure and recover it for the landlord.",
      "Poder que autoriza al apoderado a tramitar la liberación del local y su restitución al arrendador.",
      "Procura che autorizza il mandatario a condurre la procedura di liberazione del locale e la sua restituzione al locatore.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, das Räumungsverfahren einzuleiten und das Lokal zurückzuerhalten.",
      "Доверенность, разрешающая поверенному провести процедуру освобождения и вернуть помещение арендодателю."
    ),
    where: W7(
      "المحكمة المختصة عند النزاع، أو مباشرة مع المكتري بالتراضي",
      "Le tribunal compétent en cas de litige, ou directement avec le locataire à l'amiable",
      "The competent court in case of dispute, or directly with the tenant amicably",
      "El tribunal competente en caso de litigio, o directamente con el inquilino de mutuo acuerdo",
      "Il tribunale competente in caso di controversia, o direttamente con l'inquilino in via amichevole",
      "Das zuständige Gericht bei Streit, oder einvernehmlich direkt mit dem Mieter",
      "Компетентный суд при споре или мирно напрямую с арендатором"
    ),
    keywords: ["إفراغ", "libération", "vacation", "محل", "local", "مكتري"],
  },
  {
    id: "wk-athath-talaq",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام الأثاث بعد الطلاق",
      "Procuration pour récupérer les meubles après un divorce",
      "Power of attorney to recover furniture after a divorce",
      "Poder para recuperar los muebles tras un divorcio",
      "Procura per recuperare i mobili dopo un divorzio",
      "Vollmacht zur Rückholung des Mobiliars nach der Scheidung",
      "Доверенность на возврат мебели после развода"
    ),
    desc: D7(
      "تفويض يمنحه أحد الطرفين بعد الطلاق لشخص موثوق لنقل أثاثه من المسكن العائلي.",
      "Autorisation accordée après le divorce à une personne de confiance pour emporter ses meubles du domicile conjugal.",
      "Authorisation granted after the divorce to a trusted person to remove the furniture from the marital home.",
      "Autorización otorgada tras el divorcio a una persona de confianza para retirar los muebles del hogar conyugal.",
      "Autorizzazione concessa dopo il divorzio a una persona fidata per ritirare i mobili dalla casa coniugale.",
      "Nach der Scheidung erteilte Ermächtigung an eine vertrauenswürdige Person, das Mobiliar aus der Ehewohnung zu überführen.",
      "Доверенность, выданная после развода надёжному лицу на вывоз мебели из совместного жилья."
    ),
    where: W7(
      "المسكن العائلي السابق، بحضور الطرف الآخر أو السلطة المحلية عند اللزوم",
      "L'ancien domicile conjugal, avec l'autre partie ou l'autorité locale si nécessaire",
      "The former marital home, with the other party or the local authority if needed",
      "El antiguo hogar conyugal, con la otra parte o la autoridad local si es necesario",
      "L'abitazione coniugale precedente, con l'altra parte o l'autorità locale se necessario",
      "Die frühere Ehewohnung, mit der anderen Partei oder der Ortspolizeibehörde bei Bedarf",
      "Прежнее совместное жильё, при необходимости — с другой стороной или местными властями"
    ),
    keywords: ["أثاث", "meubles", "furniture", "طلاق", "divorce", "سكن عائلي"],
  },
  {
    id: "wk-ujur-mahall-tijari",
    cat: "wakalat",
    title: T7(
      "وكالة لاستخلاص كراء محل تجاري",
      "Procuration pour percevoir les loyers d'un local commercial",
      "Power of attorney to collect the rents of a business premises",
      "Poder para percibir las rentas de un local comercial",
      "Procura per riscuotere gli affitti di un locale commerciale",
      "Vollmacht zum Einzug der Mieten eines Geschäftslokals",
      "Доверенность на сбор аренды торгового помещения"
    ),
    desc: D7(
      "وكالة تفوّض فيها مالك المحل التجاري استخلاص كرائه الشهري ومتابعة أدائه من المكترين.",
      "Procuration par laquelle le propriétaire d'un local commercial confie l'encaissement des loyers au mandataire.",
      "Power of attorney by which the owner of business premises entrusts rent collection to the agent.",
      "Poder por el que el propietario de un local comercial confía el cobro de las rentas al apoderado.",
      "Procura con cui il proprietario di un locale commerciale affida l'incasso degli affitti al mandatario.",
      "Vollmacht, mit der der Eigentümer eines Geschäftslokals den Mieteingang überträgt.",
      "Доверенность, по которой владелец помещения передаёт сбор аренды поверенному."
    ),
    where: W7(
      "المكتري أو المستغلّ للمحل المعني بالأداء",
      "Le locataire ou l'exploitant du local concerné",
      "The tenant or operator of the premises concerned",
      "El inquilino o explotador del local correspondiente",
      "L'affittuario o il gestore del locale interessato",
      "Der Mieter oder Betreiber des betroffenen Lokals",
      "Арендатор или оператор соответствующего помещения"
    ),
    keywords: ["محل تجاري", "local commercial", "كراء", "loyers", "rent collection"],
  },
  {
    id: "wk-ibraam-aqd-kira",
    cat: "wakalat",
    title: T7(
      "وكالة لإبرام عقد كراء باسم المؤجر",
      "Procuration pour conclure un contrat de bail",
      "Power of attorney to conclude a lease contract",
      "Poder para formalizar un contrato de alquiler",
      "Procura per stipulare un contratto di locazione",
      "Vollmacht zum Abschluss eines Mietvertrags",
      "Доверенность на заключение договора аренды"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل التوقيع على عقد كراء العقار باسم المؤجر في مواجهة المكتري.",
      "Autorisation habilitant le mandataire à signer le contrat de bail du bien au nom du bailleur, face au locataire.",
      "Authorisation empowering the agent to sign the property's lease in the landlord's name, opposite the tenant.",
      "Autorización que faculta al apoderado a firmar el contrato de alquiler a nombre del arrendador, frente al inquilino.",
      "Autorizzazione che abilita il mandatario a firmare il contratto di locazione a nome del locatore, di fronte all'affittuario.",
      "Ermächtigung, die den Bevollmächtigten befähigt, den Mietvertrag im Namen des Vermieters zu unterzeichnen.",
      "Доверенность, уполномочивающая поверенного подписать договор аренды от имени арендодателя перед арендатором."
    ),
    where: W7(
      "المكتري المعني أو مكتب التوثيق المختص",
      "Le locataire concerné ou l'office de notariat compétent",
      "The tenant concerned or the relevant notarial office",
      "El inquilino correspondiente o la oficina notarial competente",
      "L'affittuario interessato o l'ufficio notarile competente",
      "Der betroffene Mieter oder die zuständige Notariatsstelle",
      "Соответствующий арендатор или компетентная нотариальная контора"
    ),
    keywords: ["عقد كراء", "contrat de bail", "lease", "مؤجر", "bailleur", "توقيع"],
  },
  {
    id: "wk-bay-ard-filahi",
    cat: "wakalat",
    title: T7(
      "وكالة لبيع أرض فلاحية",
      "Procuration pour vendre un terrain agricole",
      "Power of attorney to sell agricultural land",
      "Poder para vender un terreno agrícola",
      "Procura per vendere un terreno agricolo",
      "Vollmacht zum Verkauf eines Agrargrundstücks",
      "Доверенность на продажу сельхозучастка"
    ),
    desc: D7(
      "وكالة خاصة تحرر عموماً أمام العدول تفوّض بيع أرض فلاحية محددة باسم مالكها.",
      "Procuration spéciale, généralement passée devant les adouls, autorisant la vente d'un terrain agricole déterminé.",
      "Special power of attorney, usually executed before the adouls, authorising the sale of a specified agricultural plot.",
      "Poder especial, otorgado ante los adules, que autoriza la venta de un terreno agrícola determinado.",
      "Procura speciale, di norma rogata davanti agli adoul, che autorizza la vendita di un terreno agricolo determinato.",
      "Spezialvollmacht, meist vor den Adoul errichtet, die den Verkauf eines bestimmten Agrargrundstücks autorisiert.",
      "Специальная доверенность, обычно у адулов, на продажу конкретного сельхозучастка."
    ),
    where: W7(
      "مكتب العدول المحرر للوكالة ثم المحافظة العقارية عند التحفيظ",
      "L'étude d'adouls rédigeant la procuration, puis la conservation foncière pour l'immatriculation",
      "The adouls' office drafting the power of attorney, then the land registry for registration",
      "El estudio de adules que redacta el poder y luego la conservación registral para la inscripción",
      "Lo studio degli adoul che redige la procura, poi la conservazione fondiaria per l'iscrizione",
      "Die Adoul-Kanzlei bei Errichtung, danach das Grundbuchamt zur Eintragung",
      "Контора адулов при составлении, затем земельная палата для регистрации"
    ),
    keywords: ["أرض فلاحية", "terrain agricole", "agricultural land", "بيع", "vente", "تحفيظ"],
  },
  {
    id: "wk-istilam-shaqqa-jadida",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام شقة جديدة من المنعش العقاري",
      "Procuration pour réceptionner un logement neuf auprès du promoteur",
      "Power of attorney to take delivery of a new home from the developer",
      "Poder para recibir una vivienda nueva del promotor",
      "Procura per ricevere un'abitazione nuova dal promotore",
      "Vollmacht zur Abnahme einer Neubauwohnung vom Bauträger",
      "Доверенность на приём новой квартиры у застройщика"
    ),
    desc: D7(
      "وكالة تخوّل الوكيل استلام مفاتيح الشقة الجديدة والتوقيع على محضر التسلم باسم المشتري.",
      "Procuration autorisant le mandataire à recevoir les clés et à signer le procès-verbal de livraison pour l'acquéreur.",
      "Power of attorney authorising the agent to receive the keys and sign the delivery report for the purchaser.",
      "Poder que autoriza al apoderado a recibir las llaves y firmar el acta de entrega en nombre del comprador.",
      "Procura che autorizza il mandatario a ritirare le chiavi e firmare il verbale di consegna per l'acquirente.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, die Schlüssel zu empfangen und das Übergabeprotokoll zu unterzeichnen.",
      "Доверенность, разрешающая поверенному получить ключи и подписать акт передачи от имени покупателя."
    ),
    where: W7(
      "مكتب البيع التابع للمنعش العقاري",
      "Le bureau de vente du promoteur immobilier",
      "The property developer's sales office",
      "La oficina de ventas del promotor inmobiliario",
      "L'ufficio vendite del promotore immobiliare",
      "Das Verkaufsbüro des Bauträgers",
      "Отдел продаж застройщика"
    ),
    keywords: ["شقة جديدة", "logement neuf", "new home", "تسلم", "livraison", "منعش"],
  },
  {
    id: "wk-tafwit-mahall-tijari",
    cat: "wakalat",
    title: T7(
      "وكالة لتفويت محل تجاري",
      "Procuration pour céder un fonds de commerce",
      "Power of attorney to transfer a business premises",
      "Poder para ceder un local comercial",
      "Procura per cedere un'attività commerciale",
      "Vollmacht zur Übertragung eines Geschäftslokals",
      "Доверенность на передачу торгового помещения"
    ),
    desc: D7(
      "وكالة تفوّض بيع محل تجاري أو تفويته باسم مالكه والتوقيع على وثائق النقل.",
      "Procuration habilitant le mandataire à céder le local commercial du propriétaire et à signer les actes de transfert.",
      "Power of attorney empowering the agent to transfer the owner's business premises and sign the transfer documents.",
      "Poder que faculta al apoderado a ceder el local comercial del propietario y firmar los documentos de transferencia.",
      "Procura che abilita il mandatario a cedere il locale commerciale del proprietario e firmare gli atti di trasferimento.",
      "Vollmacht, die den Bevollmächtigten befähigt, das Geschäftslokal zu übertragen und die Übergabeurkunden zu unterzeichnen.",
      "Доверенность, уполномочивающая поверенного передать помещение и подписать документы о передаче."
    ),
    where: W7(
      "مكتب العدول أو الموثق المحرر لعقد التفويت",
      "L'étude d'adouls ou le notaire rédigeant l'acte de cession",
      "The adouls' office or the notary drafting the deed of transfer",
      "El estudio de adules o el notario que redacta la escritura de cesión",
      "Lo studio degli adoul o il notaio che redige l'atto di cessione",
      "Die Adoul-Kanzlei oder der Notar, der die Übergabe errichtet",
      "Контора адулов или нотариус, составляющий договор передачи"
    ),
    keywords: ["تفويت", "cession", "fonds de commerce", "محل تجاري", "نقل"],
  },
  // ─── Affaires & fiscal ───
  {
    id: "wk-mahakim",
    cat: "wakalat",
    title: T7(
      "وكالة أمام المحاكم",
      "Procuration devant les tribunaux",
      "Power of attorney before the courts",
      "Poder ante los tribunales",
      "Procura davanti ai tribunali",
      "Vollmacht vor Gericht",
      "Доверенность для судов"
    ),
    desc: D7(
      "وكالة تُخوّل الوكيل تمثيل الموكل في الدعاوى والإجراءات القضائية باسمه.",
      "Procuration habilitant le mandataire à représenter le mandant dans les instances et les actes de procédure en son nom.",
      "Power of attorney empowering the agent to represent the principal in proceedings and procedural acts in his name.",
      "Poder que faculta al apoderado a representar al poderdante en los litigios y actos procesales en su nombre.",
      "Procura che abilita il mandatario a rappresentare il mandante nei giudizi e negli atti processuali a suo nome.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, den Vollmachtgeber in Rechtshängigkeiten in seinem Namen zu vertreten.",
      "Доверенность, уполномочивающая поверенного представлять доверителя в судебных делах от его имени."
    ),
    where: W7(
      "كتابة ضبط المحكمة المختصة بعد تحرير الوكالة",
      "Le greffe de la juridiction compétente, après rédaction de la procuration",
      "The registry of the competent court, after the power of attorney is drafted",
      "La secretaría del tribunal competente, tras redactar el poder",
      "La cancelleria del giudice competente, dopo la redazione della procura",
      "Die Geschäftsstelle des zuständigen Gerichts nach Errichtung der Vollmacht",
      "Канцелярия компетентного суда после составления доверенности"
    ),
    keywords: ["المحاكم", "tribunaux", "courts", "تمثيل", "représentation", "دعوى"],
  },
  {
    id: "wk-tasir-muqawala",
    cat: "wakalat",
    title: T7(
      "وكالة لتسيير مقاولة",
      "Procuration pour gérer une entreprise",
      "Power of attorney to manage a company",
      "Poder para gestionar una empresa",
      "Procura per gestire un'impresa",
      "Vollmacht zur Führung eines Unternehmens",
      "Доверенность на управление предприятием"
    ),
    desc: D7(
      "وكالة يمنحها صاحب المقاولة لشريك أو مدير لتدبير شؤونها اليومية باسمه.",
      "Procuration par laquelle le dirigeant habilite un associé ou un gérant à administrer l'entreprise au quotidien.",
      "Power of attorney by which the owner empowers a partner or manager to run the company's daily affairs.",
      "Poder por el que el propietario faculta a un socio o gerente a administrar la empresa en el día a día.",
      "Procura con cui il titolare abilita un socio o un amministratore a gestire l'impresa quotidianamente.",
      "Vollmacht, mit der der Inhaber einen Gesellschafter oder Geschäftsführer zur laufenden Verwaltung ermächtigt.",
      "Доверенность, по которой владелец уполномочивает компаньона или управляющего вести текущие дела."
    ),
    where: W7(
      "المتعاملون التجاريون والبنكيون والإداريون للمقاولة",
      "Les partenaires commerciaux, bancaires et administratifs de l'entreprise",
      "The company's commercial, banking and administrative counterparties",
      "Los interlocutores comerciales, bancarios y administrativos de la empresa",
      "I partner commerciali, bancari e amministrativi dell'impresa",
      "Die Handels-, Bank- und Verwaltungspartner des Unternehmens",
      "Коммерческие, банковские и административные партнёры предприятия"
    ),
    keywords: ["مقاولة", "entreprise", "company", "تسيير", "gestion", "مدير"],
  },
  {
    id: "wk-tasrih-daribi",
    cat: "wakalat",
    title: T7(
      "وكالة للتصريح الضريبي",
      "Procuration pour les déclarations fiscales",
      "Power of attorney for tax declarations",
      "Poder para las declaraciones fiscales",
      "Procura per le dichiarazioni fiscali",
      "Vollmacht für Steuererklärungen",
      "Доверенность на налоговые декларации"
    ),
    desc: D7(
      "تفويض يخوّل محاسباً أو مكتباً معتمداً إيداع تصاريحات الموكل الضريبية باسمه.",
      "Autorisation habilitant un comptable ou un cabinet agréé à déposer les déclarations fiscales du mandant en son nom.",
      "Authorisation enabling an accountant or approved firm to file the principal's tax returns in his name.",
      "Autorización que faculta a un contador o despacho autorizado a presentar las declaraciones fiscales del poderdante.",
      "Autorizzazione che abilita un commercialista o uno studio autorizzato a presentare le dichiarazioni fiscali del mandante.",
      "Ermächtigung, die einen Buchhalter oder zugelassenen Steuerberater zur Abgabe der Erklärungen befähigt.",
      "Доверенность, разрешающая бухгалтеру или уполномоченной фирме подавать декларации доверителя."
    ),
    where: W7(
      "المديرية العامة للضرائب أو بوابة SIMPL للتصريح الإلكتروني",
      "La Direction générale des impôts ou le portail SIMPL pour la télédéclaration",
      "The General Directorate of Taxes or the SIMPL portal for e-filing",
      "La Dirección General de Impuestos o el portal SIMPL para la presentación telemática",
      "La Direzione generale delle imposte o il portale SIMPL per la teledichiarazione",
      "Die Generaldirektion der Steuern oder das SIMPL-Portal für die Online-Abgabe",
      "Главное управление налогов или портал SIMPL для электронной подачи"
    ),
    authority: "tax",
    keywords: ["تصريح ضريبي", "déclaration fiscale", "tax return", "DGI", "محاسب", "SIMPL"],
  },
  {
    id: "wk-ompic-alama",
    cat: "wakalat",
    title: T7(
      "وكالة لإيداع علامة لدى OMPIC",
      "Procuration pour déposer une marque auprès de l'OMPIC",
      "Power of attorney to file a trademark with OMPIC",
      "Poder para registrar una marca ante el OMPIC",
      "Procura per depositare un marchio presso l'OMPIC",
      "Vollmacht zur Anmeldung einer Marke beim OMPIC",
      "Доверенность на регистрацию знака в OMPIC"
    ),
    desc: D7(
      "وكالة تسمح للوكيل أو لمستشار إيداع طلب تسجيل علامة تجارية باسم الموكل.",
      "Procuration permettant au mandataire ou à un conseil de déposer la demande d'enregistrement de la marque du mandant.",
      "Power of attorney allowing the agent or a counsel to file the registration application for the principal's trademark.",
      "Poder que permite al apoderado o a un asesor presentar la solicitud de registro de la marca del poderdante.",
      "Procura che consente al mandatario o a un consulente di depositare la domanda di registrazione del marchio del mandante.",
      "Vollmacht, die dem Bevollmächtigten oder einem Berater erlaubt, die Markenanmeldung einzureichen.",
      "Доверенность, позволяющая поверенному или консультанту подать заявку на регистрацию знака доверителя."
    ),
    where: W7(
      "المكتب المغربي للملكية الصناعية والتجارية (OMPIC)",
      "L'Office marocain de la propriété industrielle et commerciale (OMPIC)",
      "The Moroccan Office of Industrial and Commercial Property (OMPIC)",
      "La Oficina marroquí de la propiedad industrial y comercial (OMPIC)",
      "L'Ufficio marocchino della proprietà industriale e commerciale (OMPIC)",
      "Das Marokkanische Amt für gewerbliches Eigentum (OMPIC)",
      "Марокканское ведомство промышленной собственности (OMPIC)"
    ),
    authority: "ompic",
    keywords: ["OMPIC", "علامة تجارية", "marque", "trademark", "ملكية صناعية"],
  },
  {
    id: "wk-tamin-hadith",
    cat: "wakalat",
    title: T7(
      "وكالة للتصريح بحادث لدى شركة التأمين",
      "Procuration pour déclarer un sinistre à l'assureur",
      "Power of attorney to declare a claim to the insurer",
      "Poder para declarar un siniestro a la aseguradora",
      "Procura per denunciare un sinistro all'assicuratore",
      "Vollmacht zur Schadenmeldung beim Versicherer",
      "Доверенность на заявление о страховом случае"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل التصريح بحادث المؤمَّن له ومتابعة ملفه مع شركة التأمين.",
      "Autorisation permettant au mandataire de déclarer le sinistre de l'assuré et de suivre son dossier auprès de la compagnie.",
      "Authorisation allowing the agent to declare the insured's accident and follow up the file with the company.",
      "Autorización que permite al apoderado declarar el siniestro del asegurado y seguir su expediente con la compañía.",
      "Autorizzazione che consente al mandatario di denunciare il sinistro dell'assicurato e seguirne la pratica.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, den Schaden anzuzeigen und die Akte zu verfolgen.",
      "Доверенность, позволяющая поверенному заявить о страховом случае и вести дело."
    ),
    where: W7(
      "وكالة التأمين المبرمج معها العقد",
      "L'agence d'assurance auprès de laquelle la police est souscrite",
      "The insurance agency where the policy is taken out",
      "La agencia de seguros donde se contrató la póliza",
      "L'agenzia di assicurazione dove la polizza è stipulata",
      "Die Versicherungsagentur, bei der die Police abgeschlossen wurde",
      "Агентство, где оформлен страховой полис"
    ),
    keywords: ["تأمين", "assurance", "insurance", "حادث", "sinistre", "تصريح"],
  },
  {
    id: "wk-adoul-tawqi",
    cat: "wakalat",
    title: T7(
      "وكالة للتوقيع على وثيقة أمام العدول",
      "Procuration pour signer un acte chez le notaire",
      "Power of attorney to sign a deed before the notary",
      "Poder para firmar una escritura ante el notario",
      "Procura per firmare un atto davanti al notaio",
      "Vollmacht zur Unterzeichnung einer Urkunde vor dem Notar",
      "Доверенность на подписание документа у нотариуса"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من التوقيع على عقد أو وثيقة رسمية باسم الموكل لدى العدول.",
      "Procuration permettant au mandataire de signer un acte officiel au nom du mandant chez le notaire.",
      "Power of attorney allowing the agent to sign an official deed in the principal's name before the notary.",
      "Poder que permite al apoderado firmar una escritura oficial a nombre del poderdante ante el notario.",
      "Procura che consente al mandatario di firmare un atto ufficiale a nome del mandante davanti al notaio.",
      "Vollmacht, die dem Bevollmächtigten erlaubt, im Namen des Vollmachtgebers eine Urkunde zu unterzeichnen.",
      "Доверенность, позволяющая поверенному подписать официальный документ от имени доверителя."
    ),
    where: W7(
      "مكتب العدول أو الموثق المختص بالتحرير",
      "L'étude d'adouls ou le notaire compétent pour la rédaction",
      "The adouls' office or the notary competent for the drafting",
      "El estudio de adules o el notario competente para la redacción",
      "Lo studio degli adoul o il notaio competente per la redazione",
      "Die Adoul-Kanzlei oder der zuständige Notar für die Errichtung",
      "Контора адулов или нотариус, компетентный для составления"
    ),
    keywords: ["عدول", "notaire", "notary", "توقيع", "signature", "وثيقة"],
  },
  {
    id: "wk-jam-aamm-musahimin",
    cat: "wakalat",
    title: T7(
      "وكالة لحضور الجمع العام للمساهمين",
      "Procuration pour assister à l'assemblée générale des actionnaires",
      "Power of attorney to attend the shareholders' general meeting",
      "Poder para asistir a la junta general de accionistas",
      "Procura per partecipare all'assemblea generale degli azionisti",
      "Vollmacht zur Teilnahme an der Hauptversammlung der Aktionäre",
      "Доверенность на участие в общем собрании акционеров"
    ),
    desc: D7(
      "وكالة يمنحها مساهم لوكيله لحضور الجمع العام والتصويت على القرارات باسمه.",
      "Procuration par laquelle un actionnaire habilite un fondé de pouvoir à participer à l'assemblée et à voter en son nom.",
      "Power of attorney by which a shareholder empowers a proxy to attend the meeting and vote in his name.",
      "Poder por el que un accionista faculta a un apoderado a asistir a la junta y votar en su nombre.",
      "Procura con cui un azionista abilita un procuratore a partecipare all'assemblea e votare a suo nome.",
      "Vollmacht, mit der ein Aktionär einen Bevollmächtigten zur Teilnahme und Abstimmung ermächtigt.",
      "Доверенность, по которой акционер уполномочивает поверенного присутствовать и голосовать от его имени."
    ),
    where: W7(
      "مقر الشركة أو القاعة المحددة في استدعاء الجمع",
      "Le siège de la société ou la salle indiquée dans la convocation",
      "The company's head office or the hall indicated in the notice",
      "La sede social o la sala indicada en la convocatoria",
      "La sede sociale o la sala indicata nella convocazione",
      "Der Gesellschaftssitz oder der in der Einladung angegebene Saal",
      "Штаб-квартира компании или зал, указанный в уведомлении"
    ),
    keywords: ["جمع عام", "assemblée générale", "general meeting", "مساهم", "actionnaire", "تصويت"],
  },
  // ─── Retraits & perceptions ───
  {
    id: "wk-ajr-istilam",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام الأجر",
      "Procuration pour percevoir le salaire",
      "Power of attorney to collect a salary",
      "Poder para cobrar el salario",
      "Procura per riscuotere lo stipendio",
      "Vollmacht zum Empfang des Gehalts",
      "Доверенность на получение зарплаты"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل استلام أجر الموكل من المشغل نقداً أو تحويله لفائدته.",
      "Autorisation permettant au mandataire de percevoir en espèces le salaire du mandant auprès de l'employeur.",
      "Authorisation allowing the agent to collect the principal's salary in cash from the employer.",
      "Autorización que permite al apoderado cobrar en efectivo el salario del poderdante ante el empleador.",
      "Autorizzazione che consente al mandatario di riscuotere in contanti lo stipendio del mandante.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, das Gehalt bar beim Arbeitgeber zu empfangen.",
      "Доверенность, позволяющая поверенному получать зарплату доверителя наличными у работодателя."
    ),
    where: W7(
      "مصلحة الأجور بالمقاولة المشغِّلة أو الخزينة المعنية بالأداء",
      "Le service des paies de l'employeur ou la caisse compétente pour le paiement",
      "The employer's payroll service or the paying treasury concerned",
      "El servicio de nóminas del empleador o la tesorería encargada del pago",
      "Il servizio paghe del datore di lavoro o la cassa competente per il pagamento",
      "Die Lohnbuchhaltung des Arbeitgebers oder die zahlende Kasse",
      "Платёжная служба работодателя или касса, производящая выплату"
    ),
    keywords: ["أجر", "salaire", "salary", "استلام", "paie", "مشغل"],
  },
  {
    id: "wk-maash-cnss",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام معاش التقاعد من CNSS",
      "Procuration pour percevoir la pension CNSS",
      "Power of attorney to collect a CNSS pension",
      "Poder para cobrar la pensión de la CNSS",
      "Procura per riscuotere la pensione CNSS",
      "Vollmacht zum Empfang einer CNSS-Rente",
      "Доверенность на получение пенсии CNSS"
    ),
    desc: D7(
      "وكالة تخوّل الوكيل استلام معاش الموكل التقاعدي أو تحويله لفائدته من CNSS.",
      "Procuration autorisant le mandataire à percevoir ou à faire virer la pension de retraite du mandant.",
      "Power of attorney authorising the agent to collect or have transferred the principal's retirement pension.",
      "Poder que autoriza al apoderado a cobrar o transferir la pensión de jubilación del poderdante.",
      "Procura che autorizza il mandatario a riscuotere o far trasferire la pensione di anzianità del mandante.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, die Rente zu empfangen oder überweisen zu lassen.",
      "Доверенность, разрешающая поверенному получать или переводить пенсию доверителя."
    ),
    where: W7(
      "وكالات CNSS أو الحساب البنكي المخصص للأداء",
      "Les agences CNSS ou le compte bancaire dédié au paiement",
      "CNSS agencies or the bank account dedicated to payment",
      "Las agencias de la CNSS o la cuenta bancaria destinada al pago",
      "Le agenzie CNSS o il conto bancario dedicato al pagamento",
      "Die CNSS-Stellen oder das für die Zahlung bestimmte Konto",
      "Агентства CNSS или счёт, предназначенный для выплаты"
    ),
    authority: "cnss",
    keywords: ["معاش", "pension", "تقاعد", "retraite", "CNSS", "استلام"],
  },
  {
    id: "wk-tawid-tamin",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام تعويض من شركة التأمين",
      "Procuration pour percevoir une indemnité de l'assureur",
      "Power of attorney to collect an indemnity from the insurer",
      "Poder para cobrar una indemnización de la aseguradora",
      "Procura per riscuotere un'indennità dall'assicuratore",
      "Vollmacht zum Empfang einer Entschädigung vom Versicherer",
      "Доверенность на получение возмещения от страховщика"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل قبض مبلغ التعويض المستحق للمؤمَّن له بعد حادث أو ضرر.",
      "Autorisation permettant au mandataire d'encaisser l'indemnité due à l'assuré à la suite d'un sinistre.",
      "Authorisation allowing the agent to cash the indemnity due to the insured after an accident.",
      "Autorización que permite al apoderado cobrar la indemnización debida al asegurado tras un siniestro.",
      "Autorizzazione che consente al mandatario di incassare l'indennità spettante all'assicurato dopo un sinistro.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, die geschuldete Entschädigung einzuziehen.",
      "Доверенность, позволяющая поверенному получить возмещение, причитающееся застрахованному."
    ),
    where: W7(
      "وكالة التأمين أو مكتب الأداء المعني",
      "L'agence d'assurance ou le bureau de règlement concerné",
      "The insurance agency or the settlement office concerned",
      "La agencia de seguros o la oficina de siniestros correspondiente",
      "L'agenzia di assicurazione o l'ufficio liquidazione interessato",
      "Die Versicherungsagentur oder die Abwicklungsstelle",
      "Страховое агентство или расчётный офис"
    ),
    keywords: ["تعويض", "indemnité", "indemnity", "تأمين", "assurance", "قبض"],
  },
  {
    id: "wk-tard-baridi",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام طرد بريدي",
      "Procuration pour retirer un colis postal",
      "Power of attorney to collect a postal parcel",
      "Poder para retirar un paquete postal",
      "Procura per ritirare un pacco postale",
      "Vollmacht zur Abholung eines Postpakets",
      "Доверенность на получение почтовой посылки"
    ),
    desc: D7(
      "تفويض بسيط يخوّل الوكيل استلام طرد أو شحنة باسم المرسَل إليه من مكتب البريد.",
      "Autorisation simple permettant au mandataire de retirer un colis au nom du destinataire auprès de la poste.",
      "Simple authorisation allowing the agent to collect a parcel in the addressee's name from the post office.",
      "Autorización simple que permite al apoderado retirar un paquete a nombre del destinatario en correos.",
      "Semplice autorizzazione che consente al mandatario di ritirare un pacco a nome del destinatario.",
      "Einfache Ermächtigung, die dem Bevollmächtigten erlaubt, ein Paket im Namen des Empfängers abzuholen.",
      "Простая доверенность, позволяющая поверенному получить посылку от имени адресата."
    ),
    where: W7(
      "مكتب البريد المُودَع به الطرد",
      "Le bureau de poste où le colis est déposé",
      "The post office where the parcel is held",
      "La oficina de correos donde se encuentra el paquete",
      "L'ufficio postale dove il pacco è depositato",
      "Das Postamt, bei dem das Paket hinterlegt ist",
      "Почтовое отделение, где хранится посылка"
    ),
    authority: "poste",
    keywords: ["طرد", "colis", "parcel", "بريد", "poste", "استلام"],
  },
  {
    id: "wk-shahada-jaamia",
    cat: "wakalat",
    title: T7(
      "وكالة لاستلام دبلوم",
      "Procuration pour retirer un diplôme",
      "Power of attorney to collect a diploma",
      "Poder para retirar un diploma",
      "Procura per ritirare un diploma",
      "Vollmacht zur Abholung eines Diploms",
      "Доверенность на получение диплома"
    ),
    desc: D7(
      "وكالة تمكّن الوكيل من سحب الدبلوم أو الشهادة الجامعية للموكل من مؤسسته.",
      "Procuration autorisant le mandataire à retirer le diplôme universitaire du mandant auprès de son établissement.",
      "Power of attorney authorising the agent to collect the principal's diploma from his institution.",
      "Poder que autoriza al apoderado a retirar el diploma universitario del poderdante en su institución.",
      "Procura che autorizza il mandatario a ritirare il diploma universitario del mandante presso il suo ateneo.",
      "Vollmacht, die den Bevollmächtigten ermächtigt, das Diplom des Vollmachtgebers abzuholen.",
      "Доверенность, разрешающая поверенному получить диплом доверителя в его учреждении."
    ),
    where: W7(
      "إدارة الجامعة أو المؤسسة المسلِّمة للدبلوم",
      "L'administration de l'université ou l'établissement délivrant le diplôme",
      "The university administration or the institution issuing the diploma",
      "La administración universitaria o la institución que expide el diploma",
      "L'amministrazione universitaria o l'ente che rilascia il diploma",
      "Die Universitätsverwaltung oder die das Diplom ausstellende Einrichtung",
      "Администрация университета или учреждение, выдающее диплом"
    ),
    keywords: ["دبلوم", "diplôme", "diploma", "شهادة جامعية", "université", "استلام"],
  },
  {
    id: "wk-dayn-qabd",
    cat: "wakalat",
    title: T7(
      "وكالة لقبض مبلغ ومستحقات",
      "Procuration pour encaisser une créance",
      "Power of attorney to collect a debt",
      "Poder para cobrar una deuda",
      "Procura per incassare un credito",
      "Vollmacht zum Einzug einer Forderung",
      "Доверенность на взыскание долга"
    ),
    desc: D7(
      "تفويض يخوّل الوكيل قبض مبلغ مستحق للموكل عن دَين أو خدمة مؤدَّاة من المدين.",
      "Autorisation permettant au mandataire d'encaisser les sommes dues au mandant au titre d'une créance ou d'une prestation.",
      "Authorisation allowing the agent to collect sums owed to the principal under a debt or a performed service.",
      "Autorización que permite al apoderado cobrar las sumas debidas al poderdante por una deuda o prestación.",
      "Autorizzazione che consente al mandatario di incassare le somme dovute al mandante per un credito o una prestazione.",
      "Ermächtigung, die dem Bevollmächtigten erlaubt, die geschuldeten Beträge einzuziehen.",
      "Доверенность, позволяющая поверенному взыскать суммы, причитающиеся доверителю."
    ),
    where: W7(
      "الجهة المدينة أو الأداء مباشرة بين الأطراف",
      "La partie débitrice ou paiement direct entre les parties",
      "The debtor party or direct payment between the parties",
      "La parte deudora o pago directo entre las partes",
      "La parte debitrice o pagamento diretto tra le parti",
      "Der Schuldner oder direkte Zahlung zwischen den Parteien",
      "Должник или прямой расчёт между сторонами"
    ),
    keywords: ["مستحقات", "créance", "debt", "قبض", "encaissement", "دَين"],
  },
];
