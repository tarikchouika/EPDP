// Sworn declaration (déclaration sur l'honneur) forms — situation, studies,
// income, losses, vehicles and social registries. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsTasarih: DocumentItem[] = [
  // ─── Situation familiale & personnelle ───
  {
    id: "tas-vie-collective",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالحياة المشتركة",
      "Déclaration sur l'honneur de vie collective",
      "Sworn declaration of collective life",
      "Declaración jurada de vida colectiva",
      "Dichiarazione giurata di vita collettiva",
      "Eidesstattliche Erklärung des gemeinsamen Lebens",
      "Заявление под присягой о совместной жизни"
    ),
    desc: D7(
      "تصريح يقدمه المعني بالأمر يثبت فيه العيش المشترك ضمن نفس الأسرة لغرض اجتماعي أو إداري.",
      "Déclaration par laquelle l'intéressé atteste vivre collectivement au sein du même foyer à un but social ou administratif.",
      "Declaration by which the person attests living collectively within the same household for a social or administrative purpose.",
      "Declaración mediante la cual el interesado acredita vivir colectivamente en el mismo hogar.",
      "Dichiarazione con cui l'interessato attesta di vivere collettivamente nello stesso nucleo familiare.",
      "Erklärung, mit der die Person das gemeinschaftliche Leben im selben Haushalt bestätigt.",
      "Заявление, которым лицо подтверждает совместное проживание в одном домохозяйстве."
    ),
    where: W7(
      "الإدارة أو المؤسسة الطالبة للتصريح (جماعة، CNSS، أسري، بنك) حسب الغرض",
      "Administration ou institution requérante (commune, CNSS, services sociaux, banque) selon l'usage",
      "Requesting administration or institution (commune, CNSS, social services, bank) depending on the use",
      "Administración o institución solicitante (comuna, CNSS, servicios sociales, banco) según el uso",
      "Amministrazione o istituto richiedente (comune, CNSS, servizi sociali, banca)",
      "Verlangende Behörde oder Institution (Gemeinde, CNSS, Sozialeinrichtungen, Bank)",
      "Запрашивающая организация (коммуна, CNSS, соцслужбы, банк) по назначению"
    ),
    keywords: ["تصريح بالشرف", "déclaration sur l'honneur", "sworn declaration", "حياة مشتركة", "vie collective"],
    popular: true,
  },
  {
    id: "tas-vie-separee",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالحياة المنفصلة",
      "Déclaration sur l'honneur de vie séparée",
      "Sworn declaration of separate life",
      "Declaración jurada de vida separada",
      "Dichiarazione giurata di separazione di fatto",
      "Eidesstattliche Erklärung der Trennung",
      "Заявление под присягой о раздельном проживании"
    ),
    desc: D7(
      "تصريح يؤكد فيه أحد الزوجين انفصاله عن زوجه بالفعل قبل إتمام مسطرة الطلاق أو لغرض اجتماعي.",
      "Déclaration par laquelle un époux confirme vivre séparé de fait de son conjoint avant l'aboutissement du divorce.",
      "Declaration whereby one spouse confirms living separately in fact from the other before the divorce is finalised.",
      "Declaración mediante la cual un cónyuge confirma vivir separado de hecho antes de finalizar el divorcio.",
      "Dichiarazione con cui un coniuge conferma di vivere separato di fatto prima del divorzio.",
      "Erklärung, mit der ein Ehegatte das faktische Getrenntleben vor der Scheidung bestätigt.",
      "Заявление, которым супруг подтверждает фактическое раздельное проживание до завершения развода."
    ),
    where: W7(
      "المحكمة المختصة أو الإدارة الطالبة (CNSS، المساعدة الاجتماعية) حسب الغرض",
      "Tribunal compétent ou administration requérante (CNSS, action sociale) selon l'usage",
      "Competent court or requesting administration (CNSS, social services) depending on the use",
      "Tribunal competente o administración solicitante (CNSS, servicios sociales) según el uso",
      "Tribunale competente o amministrazione richiedente (CNSS, servizi sociali)",
      "Zuständiges Gericht oder anfordernde Behörde (CNSS, Sozialdienst)",
      "Компетентный суд или запрашивающая организация (CNSS, соцслужбы) по назначению"
    ),
    keywords: ["حياة منفصلة", "vie séparée", "separate life", "طلاق", "divorce"],
  },
  {
    id: "tas-garde-enfant",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالحضانة",
      "Déclaration sur l'honneur de garde d'enfant",
      "Sworn declaration of child custody",
      "Declaración jurada de custodia del niño",
      "Dichiarazione giurata di affidamento del minore",
      "Eidesstattliche Erklärung über das Sorgerecht",
      "Заявление под присягой об опеке над ребёнком"
    ),
    desc: D7(
      "تصريح يؤكد فيه الحاضن توفره على الحضانة القانونية للطفل قصد التسجيل المدرسي أو السفر.",
      "Déclaration par laquelle le gardien confirme détenir la garde légale d'un enfant aux fins de scolarisation ou de voyage.",
      "Declaration whereby the custodian confirms holding legal custody of a child for schooling or travel purposes.",
      "Declaración mediante la cual el tutor confirma ostentar la custodia legal del niño para estudios o viajes.",
      "Dichiarazione con cui l'affidatario conferma di detenere l'affidamento legale del minore per scuola o viaggi.",
      "Erklärung, mit der der Sorgeberechtigte das gesetzliche Sorgerecht für Schule oder Reisen bestätigt.",
      "Заявление, которым опекун подтверждает наличие законной опеки над ребёнком для школы или поездок."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية أو مصلحة الجوازات أو الإدارة الطالبة حسب الغرض",
      "Direction de l'établissement scolaire, service des passeports ou administration requérante selon l'usage",
      "School administration, passport office or requesting administration depending on the use",
      "Dirección del centro escolar, oficina de pasaportes o administración solicitante",
      "Direzione scolastica, ufficio passaporti o amministrazione richiedente",
      "Schulleitung, Passstelle oder anfordernde Behörde je nach Verwendung",
      "Администрация школы, паспортная служба или запрашивающая организация по назначению"
    ),
    keywords: ["حضانة", "garde d'enfant", "child custody", "الحاضن", "tuteur"],
  },
  {
    id: "tas-kafala-enfant",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالتكفل بالطفل في إطار الكفالة",
      "Déclaration sur l'honneur de prise en charge d'un enfant en kafala",
      "Sworn declaration of kafala care of a child",
      "Declaración jurada de acogimiento (kafala) de un niño",
      "Dichiarazione giurata di affidamento kafala di un minore",
      "Eidesstattliche Erklärung über die Kafala-Pflege eines Kindes",
      "Заявление под присягой об опеке (кафаля) над ребёнком"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح تكفله بطفل في إطار الكفالة الشرعية أو القانونية لأغراض اجتماعية وإدارية.",
      "Déclaration par laquelle l'intéressé confirme prendre en charge un enfant au titre de la kafala à des fins sociales ou administratives.",
      "Declaration whereby the person confirms caring for a child under kafala for social or administrative purposes.",
      "Declaración mediante la cual el interesado confirma hacerse cargo de un niño en régimen de kafala.",
      "Dichiarazione con cui l'interessato conferma di prendersi cura di un minore in regime di kafala.",
      "Erklärung, mit der die Person die Kafala-Betreuung eines Kindes für soziale oder verwaltungsmäßige Zwecke bestätigt.",
      "Заявление, которым лицо подтверждает заботу о ребёнке по кафале в социальных или административных целях."
    ),
    where: W7(
      "الإدارة أو المؤسسة الطالبة مع تقديم قرار الكفالة الصادر عن المحكمة",
      "Administration ou institution requérante, avec production de la décision de kafala délivrée par le juge",
      "Requesting administration or institution, with the kafala decision issued by the judge",
      "Administración o institución solicitante, con la decisión de kafala emitida por el juez",
      "Amministrazione o istituto richiedente, con la decisione di kafala rilasciata dal giudice",
      "Anfordernde Behörde oder Einrichtung unter Vorlage des gerichtlichen Kafala-Beschlusses",
      "Запрашивающая организация вместе с решением суда о кафале"
    ),
    keywords: ["كفالة", "kafala", "foster care", "التكفل بالطفل", "prise en charge"],
  },
  {
    id: "tas-non-mariage",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الزواج",
      "Déclaration sur l'honneur de non-mariage",
      "Sworn declaration of non-marriage",
      "Declaración jurada de no matrimonio",
      "Dichiarazione giurata di non matrimonio",
      "Eidesstattliche Erklärung der Ehelosigkeit",
      "Заявление под присягой об отсутствии брака"
    ),
    desc: D7(
      "تصريح يثبت فيه المعني بالأمر أنه لم يسبق له عقد الزواج للاستعمال العدلي أو الإداري.",
      "Déclaration par laquelle l'intéressé atteste n'avoir jamais contracté mariage à un usage notarial ou administratif.",
      "Declaration whereby the person attests never having contracted marriage for notarial or administrative use.",
      "Declaración mediante la cual el interesado acredita no haber contraído matrimonio para uso notarial o administrativo.",
      "Dichiarazione con cui l'interessato attesta di non essersi mai sposato per uso notarile o amministrativo.",
      "Erklärung, mit der die Person bestätigt, nie verheiratet gewesen zu sein, für notarielle oder behördliche Zwecke.",
      "Заявление, которым лицо подтверждает, что никогда не вступало в брак, для нотариальных или административных целей."
    ),
    where: W7(
      "العدول أو الإدارة الطالبة عند إبرام عقد الزواج أو أي ملف رسمي",
      "Étude des adoul ou administration requérante lors de la conclusion du mariage ou d'un dossier officiel",
      "Adoul office or requesting administration upon concluding a marriage or an official file",
      "Oficina de adoul o administración solicitante al contraer matrimonio o en un expediente oficial",
      "Ufficio degli adoul o amministrazione richiedente per matrimonio o pratiche ufficiali",
      "Adoul-Kanzlei oder anfordernde Behörde bei Heiratsabschluss oder offiziellen Vorgängen",
      "Контора адулей или запрашивающая организация при заключении брака или официальном деле"
    ),
    keywords: ["عدم الزواج", "العزوبة", "non-mariage", "célibat", "unmarried"],
    popular: true,
  },
  {
    id: "tas-seul-soutien",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بكون المصرح المعيل الوحيد للأبناء",
      "Déclaration sur l'honneur de seul soutien des enfants",
      "Sworn declaration of being the sole provider for one's children",
      "Declaración jurada de ser el único sustento de los hijos",
      "Dichiarazione giurata di unico sostegno dei figli",
      "Eidesstattliche Erklärung als alleiniger Ernährer der Kinder",
      "Заявление под присягой о единоличном содержании детей"
    ),
    desc: D7(
      "تصريح يؤكد فيه الأب أو الأم أنه المعيل الوحيد لأبنائه دون مساهمة الطرف الآخر في النفقة.",
      "Déclaration par laquelle le père ou la mère confirme être l'unique soutien de ses enfants sans contribution de l'autre parent.",
      "Declaration whereby the father or mother confirms being the children's sole provider without any contribution from the other parent.",
      "Declaración mediante la cual el padre o la madre confirma ser el único sustento de los hijos sin aporte del otro progenitor.",
      "Dichiarazione con cui il padre o la madre conferma di essere l'unico sostegno dei figli senza contributo dell'altro genitore.",
      "Erklärung, mit der Vater oder Mutter bestätigt, alleiniger Versorger der Kinder ohne Beitrag des anderen Elternteils zu sein.",
      "Заявление, которым отец или мать подтверждает, что единолично содержит детей без помощи другого родителя."
    ),
    where: W7(
      "الإدارة الطالبة (مساعدة اجتماعية، منحة، RSU، مؤسسة تعليمية) حسب الغرض",
      "Administration requérante (aide sociale, bourse, RSU, établissement scolaire) selon l'usage",
      "Requesting administration (social aid, scholarship, RSU, school) depending on the use",
      "Administración solicitante (ayuda social, beca, RSU, escuela) según el uso",
      "Amministrazione richiedente (aiuto sociale, borsa di studio, RSU, scuola)",
      "Anfordernde Behörde (Sozialhilfe, Stipendium, RSU, Schule) je nach Verwendung",
      "Запрашивающая организация (соцпомощь, стипендия, RSU, школа) по назначению"
    ),
    keywords: ["المعيل الوحيد", "seul soutien", "sole provider", "إعالة الأبناء", "نفقة الأبناء"],
  },
  {
    id: "tas-changement-adresse",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بتغيير العنوان",
      "Déclaration sur l'honneur de changement d'adresse",
      "Sworn declaration of change of address",
      "Declaración jurada de cambio de domicilio",
      "Dichiarazione giurata di cambio di indirizzo",
      "Eidesstattliche Erklärung des Adresswechsels",
      "Заявление под присягой о смене адреса"
    ),
    desc: D7(
      "تصريح يخبر فيه المعني بالأمر إدارته أو بنكه بانتقاله إلى عنوان سكنى جديد بعد الانتقال.",
      "Déclaration par laquelle l'intéressé informe son administration ou sa banque de son transfert vers une nouvelle adresse.",
      "Declaration whereby the person informs their administration or bank of moving to a new residential address.",
      "Declaración mediante la cual el interesado informa a su administración o banco de su traslado a una nueva dirección.",
      "Dichiarazione con cui l'interessato informa l'amministrazione o la banca del trasferimento a un nuovo indirizzo.",
      "Erklärung, mit der die Person Behörde oder Bank über den Umzug an eine neue Anschrift informiert.",
      "Заявление, которым лицо уведомляет ведомство или банк о переезде на новый адрес."
    ),
    where: W7(
      "البنك أو المقاولة أو الإدارة المعنية (الفواتير، المؤسسات التعليمية) بعد الانتقال",
      "Banque, employeur ou administration concernée (facturiers, établissements scolaires) après le déménagement",
      "Bank, employer or administration concerned (utilities, schools) after the move",
      "Banco, empleador o administración concerniente (facturas, escuelas) tras la mudanza",
      "Banca, datore di lavoro o amministrazione interessata (bollette, scuole) dopo il trasloco",
      "Bank, Arbeitgeber oder betroffene Behörde (Versorger, Schulen) nach dem Umzug",
      "Банк, работодатель или соответствующее ведомство (коммунальные службы, школы) после переезда"
    ),
    keywords: ["تغيير العنوان", "changement d'adresse", "change of address", "انتقال", "déménagement"],
    popular: true,
  },
  {
    id: "tas-absence-conjoint",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بغياب الزوج",
      "Déclaration sur l'honneur d'absence du conjoint",
      "Sworn declaration of absence of the spouse",
      "Declaración jurada de ausencia del cónyuge",
      "Dichiarazione giurata di assenza del coniuge",
      "Eidesstattliche Erklärung über die Abwesenheit des Ehegatten",
      "Заявление под присягой об отсутствии супруга"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح غياب زوجه عن البيت أو مقامته بالخارج دون تقديم أي مساعدة مادية.",
      "Déclaration par laquelle l'intéressé confirme l'absence ou l'émigration de son conjoint sans aucune contribution matérielle.",
      "Declaration whereby the person confirms the spouse's absence or emigration without any material contribution.",
      "Declaración mediante la cual el interesado confirma la ausencia o emigración del cónyuge sin aporte material.",
      "Dichiarazione con cui l'interessato conferma l'assenza o l'emigrazione del coniuge senza contributo materiale.",
      "Erklärung, mit der die Person Abwesenheit oder Auswanderung des Ehegatten ohne materiellen Beitrag bestätigt.",
      "Заявление, которым лицо подтверждает отсутствие или отъезд супруга за границу без материальной поддержки."
    ),
    where: W7(
      "مصلحة المساعدة الاجتماعية أو الإدارة الطالبة (جماعة، تعاونية، جمعية) عند دراسة الملف",
      "Service d'action sociale ou administration requérante (commune, coopérative, association) lors de l'étude du dossier",
      "Social service or requesting administration (commune, cooperative, association) when examining the file",
      "Servicio de acción social o administración solicitante al estudiar el expediente",
      "Servizio di azione sociale o amministrazione richiedente all'esame del dossier",
      "Sozialdienst oder anfordernde Behörde bei der Prüfung des Anliegens",
      "Служба соцпомощи или запрашивающая организация при рассмотрении дела"
    ),
    keywords: ["غياب الزوج", "absence du conjoint", "spouse absence", "الزوج بالخارج", "émigration du conjoint"],
  },
  {
    id: "tas-non-remariage",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الزواج من جديد",
      "Déclaration sur l'honneur de non-remariage",
      "Sworn declaration of non-remarriage",
      "Declaración jurada de no nuevo matrimonio",
      "Dichiarazione giurata di non nuove nozze",
      "Eidesstattliche Erklärung der Nicht-Wiederverheiratung",
      "Заявление под присягой об отсутствии повторного брака"
    ),
    desc: D7(
      "تصريح تؤكد فيه الأرملة أو المطلقة عدم زواجها من جديد للحفاظ على معاشها.",
      "Déclaration par laquelle la veuve ou la divorcée confirme ne pas s'être remariée afin de conserver sa pension.",
      "Declaration whereby the widow or divorcee confirms not having remarried in order to retain her pension.",
      "Declaración mediante la cual la viuda o divorciada confirma no haber vuelto a casarse para conservar la pensión.",
      "Dichiarazione con cui la vedova o la divorziata conferma di non essersi risposata per conservare la pensione.",
      "Erklärung, mit der die Witwe oder Geschiedene bestätigt, nicht wieder geheiratet zu haben, um die Rente zu behalten.",
      "Заявление, которым вдова или разведённая подтверждает отсутствие повторного брака для сохранения пенсии."
    ),
    where: W7(
      "الصندوق المكلف بصرف المعاش (CNSS، RCAR) أو مصلحة معاشات التقاعد",
      "Caisse debitrice de la pension (CNSS, RCAR) ou service des pensions de retraite",
      "Pension-paying fund (CNSS, RCAR) or retirement pensions department",
      "Entidad pagadora de la pensión (CNSS, RCAR) o servicio de pensiones",
      "Ente erogatore della pensione (CNSS, RCAR) o servizio pensioni",
      "Rentenkasse (CNSS, RCAR) oder Pensionsstelle",
      "Пенсионный фонд-плательщик (CNSS, RCAR) или пенсионная служба"
    ),
    keywords: ["عدم الزواج من جديد", "non-remariage", "non-remarriage", "معاش الأرملة", "pension de réversion"],
  },
  {
    id: "tas-divorce-definitif",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالطلاق النهائي",
      "Déclaration sur l'honneur de divorce définitif",
      "Sworn declaration of final divorce",
      "Declaración jurada de divorcio definitivo",
      "Dichiarazione giurata di divorzio definitivo",
      "Eidesstattliche Erklärung der rechtskräftigen Scheidung",
      "Заявление под присягой об окончательном разводе"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح أن الطلاق أصبح نهائيا لتحديث وضعيته لدى الإدارات والصناديق.",
      "Déclaration par laquelle l'intéressé confirme que son divorce est définitif afin de mettre à jour sa situation administrative.",
      "Declaration whereby the person confirms their divorce is final in order to update their administrative status.",
      "Declaración mediante la cual el interesado confirma que su divorcio es definitivo para actualizar su situación administrativa.",
      "Dichiarazione con cui l'interessato conferma che il divorzio è definitivo per aggiornare la propria posizione amministrativa.",
      "Erklärung, mit der die Person bestätigt, dass die Scheidung rechtskräftig ist, um den Verwaltungsstatus zu aktualisieren.",
      "Заявление, которым лицо подтверждает окончательный развод для обновления статуса в ведомствах и фондах."
    ),
    where: W7(
      "الصندوق الاجتماعي أو الإدارة الطالبة مع تقديم حكم الطلاق النهائي",
      "Caisse sociale ou administration requérante, avec production du jugement de divorce définitif",
      "Social fund or requesting administration, with production of the final divorce judgment",
      "Caja social o administración solicitante, con presentación de la sentencia de divorcio",
      "Cassa sociale o amministrazione richiedente, con produzione della sentenza di divorzio",
      "Sozialkasse oder anfordernde Behörde unter Vorlage des Scheidungsurteils",
      "Соцфонд или запрашивающая организация с представлением решения суда о разводе"
    ),
    keywords: ["الطلاق النهائي", "divorce définitif", "final divorce", "تحديث الوضعية", "statut"],
  },
  {
    id: "tas-ascendant-charge",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالتكفل بأحد الأصول",
      "Déclaration sur l'honneur de prise en charge d'un ascendant",
      "Sworn declaration of supporting an ascendant",
      "Declaración jurada de manutención de un ascendiente",
      "Dichiarazione giurata di mantenimento di un ascendente",
      "Eidesstattliche Erklärung über den Unterhalt eines Elternteils",
      "Заявление под присягой о содержании родственника по восходящей линии"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح تكفله بنفقة أحد والديه أو أصوله لغرض الاستفادة من التعويضات العائلية.",
      "Déclaration par laquelle l'intéressé confirme prendre en charge un parent ascendant pour bénéficier d'allocations familiales.",
      "Declaration whereby the person confirms supporting a parent or ascendant in order to receive family allowances.",
      "Declaración mediante la cual el interesado confirma mantener a un ascendiente para percibir asignaciones familiares.",
      "Dichiarazione con cui l'interessato conferma di mantenere un ascendente per ottenere assegni familiari.",
      "Erklärung, mit der die Person bestätigt, einen Elternteil zu unterhalten, um Familienbeihilfen zu erhalten.",
      "Заявление, которым лицо подтверждает содержание родителя для получения семейных пособий."
    ),
    where: W7(
      "أقرب وكالة CNSS ضمن ملف طلب توسيع مستحقي التعويضات العائلية",
      "Agence CNSS la plus proche, dans le dossier d'extension des bénéficiaires des allocations familiales",
      "Nearest CNSS agency, within the file for extending family allowance beneficiaries",
      "Agencia CNSS más cercana, en el expediente de ampliación de beneficiarios de asignaciones familiares",
      "Agenzia CNSS più vicina, nella pratica di estensione degli assegni familiari",
      "Nächste CNSS-Agentur im Antragsdossier zur Erweiterung der Familienbeihilfen",
      "Ближайшее агентство CNSS, в деле о расширении круга получателей семейных пособий"
    ),
    keywords: ["تكفل الأصول", "ascendant à charge", "supporting a parent", "الوالدان", "allocations familiales"],
  },
  {
    id: "tas-identite-nom",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بتطابق الاسم",
      "Déclaration sur l'honneur de concordance de nom",
      "Sworn declaration of name concordance",
      "Declaración jurada de concordancia de nombre",
      "Dichiarazione giurata di concordanza del nome",
      "Eidesstattliche Erklärung der Namensübereinstimmung",
      "Заявление под присягой о совпадении имени"
    ),
    desc: D7(
      "تصريح يؤكد فيه المعني بالأمر أن الاسم الوارد في وثيقتين مختلفتين يعود لنفس الشخص.",
      "Déclaration par laquelle l'intéressé atteste que le nom figurant sur deux documents différents désigne la même personne.",
      "Declaration whereby the person attests that the name appearing on two different documents refers to the same person.",
      "Declaración mediante la cual el interesado acredita que el nombre de dos documentos distintos designa a la misma persona.",
      "Dichiarazione con cui l'interessato attesta che il nome in due documenti diversi designa la stessa persona.",
      "Erklärung, mit der die Person bestätigt, dass der Name in zwei verschiedenen Dokumenten dieselbe Person bezeichnet.",
      "Заявление, которым лицо подтверждает, что имя в двух разных документах принадлежит одному и тому же лицу."
    ),
    where: W7(
      "الإدارة أو البنك الطالب للوثيقة مع إرفاق الوثيقتين المعنيتين بالاسم",
      "Administration ou banque requérante, avec les deux documents de nom joints à l'appui",
      "Requesting administration or bank, with the two name documents attached",
      "Administración o banco solicitante, adjuntando los dos documentos concernidos",
      "Amministrazione o banca richiedente, allegando i due documenti in questione",
      "Anfordernde Behörde oder Bank unter Beifügung der beiden Dokumente",
      "Запрашивающая организация или банк с приложением обоих документов"
    ),
    keywords: ["تطابق الاسم", "concordance de nom", "name match", "نفس الشخص", "same person"],
  },

  // ─── Études & bourses ───
  {
    id: "tas-etudes-etranger",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بمتابعة الدراسة بالخارج",
      "Déclaration sur l'honneur de poursuite d'études à l'étranger",
      "Sworn declaration of pursuing studies abroad",
      "Declaración jurada de continuación de estudios en el extranjero",
      "Dichiarazione giurata di prosecuzione degli studi all'estero",
      "Eidesstattliche Erklärung über die Aufnahme eines Auslandsstudiums",
      "Заявление под присягой об учёбе за границей"
    ),
    desc: D7(
      "تصريح يؤكد فيه الطالب تسجيله بمؤسسة تعليمية أجنبية لأغراض المنحة أو الملف القنصلي.",
      "Déclaration par laquelle l'étudiant confirme son inscription dans un établissement étranger aux fins de bourse ou de dossier consulaire.",
      "Declaration whereby the student confirms enrolment in a foreign institution for scholarship or consular file purposes.",
      "Declaración mediante la cual el estudiante confirma su inscripción en una institución extranjera para beca o expediente consular.",
      "Dichiarazione con cui lo studente conferma l'iscrizione a un istituto estero per borsa o pratica consolare.",
      "Erklärung, mit der der Studierende die Immatrikulation an einer ausländischen Einrichtung für Stipendium oder Konsulatsakte bestätigt.",
      "Заявление, которым студент подтверждает зачисление в иностранное учебное заведение для стипендии или консульского дела."
    ),
    where: W7(
      "الجهة المانحة للمنحة أو القنصلية المغربية ببلد الدراسة مع إثبات التسجيل",
      "Organisme bailleur de la bourse ou consulat du Maroc dans le pays d'études, avec justificatif d'inscription",
      "Scholarship-granting body or Moroccan consulate in the study country, with proof of enrolment",
      "Organismo concedente de la beca o consulado de Marruecos en el país de estudios, con justificante",
      "Ente erogatore della borsa o consolato marocchino nel paese di studio, con prova di iscrizione",
      "Stipendiengeber oder marokkanisches Konsulat im Studienland mit Immatrikulationsnachweis",
      "Организация, выдающая стипендию, или консульство Марокко в стране учёбы со справкой о зачислении"
    ),
    keywords: ["الدراسة بالخارج", "études à l'étranger", "studies abroad", "منحة", "bourse"],
  },
  {
    id: "tas-cessation-etudes",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بتوقف الدراسة",
      "Déclaration sur l'honneur de cessation d'études",
      "Sworn declaration of cessation of studies",
      "Declaración jurada de cese de estudios",
      "Dichiarazione giurata di cessazione degli studi",
      "Eidesstattliche Erklärung über die Beendigung des Studiums",
      "Заявление под присягой о прекращении учёбы"
    ),
    desc: D7(
      "تصريح يخبر فيه المعني بالأمر أن ابنه توقف عن الدراسة مما يترتب عنه توقف التعويضات العائلية.",
      "Déclaration par laquelle l'intéressé signale que son enfant a cessé ses études, entraînant l'arrêt des allocations familiales.",
      "Declaration whereby the person reports that their child has stopped studying, resulting in the end of family allowances.",
      "Declaración mediante la cual el interesado comunica que su hijo ha dejado de estudiar, conllevando el cese de asignaciones.",
      "Dichiarazione con cui l'interessato comunica che il figlio ha cessato gli studi, con conseguente arresto degli assegni.",
      "Erklärung, mit der die Person anzeigt, dass das Kind die Ausbildung beendet hat, was zum Ende der Familienbeihilfen führt.",
      "Заявление, которым лицо сообщает о прекращении учёбы ребёнка, влекущем прекращение семейных пособий."
    ),
    where: W7(
      "أقرب وكالة CNSS أو الملف المصرح به لدى الضمان الاجتماعي",
      "Agence CNSS la plus proche ou dossier déclaré auprès de la sécurité sociale",
      "Nearest CNSS agency or the file declared with social security",
      "Agencia CNSS más cercana o expediente declarado ante la seguridad social",
      "Agenzia CNSS più vicina o pratica dichiarata alla previdenza sociale",
      "Nächste CNSS-Agentur oder der Sozialversicherung gemeldeter Vorgang",
      "Ближайшее агентство CNSS или дело, заявленное в социальном страховании"
    ),
    keywords: ["توقف الدراسة", "cessation d'études", "cessation of studies", "التعويضات العائلية", "allocations familiales"],
  },
  {
    id: "tas-inscription-universitaire",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالتسجيل الجامعي",
      "Déclaration sur l'honneur d'inscription universitaire",
      "Sworn declaration of university enrolment",
      "Declaración jurada de inscripción universitaria",
      "Dichiarazione giurata di iscrizione universitaria",
      "Eidesstattliche Erklärung über die Universitätsimmatrikulation",
      "Заявление под присягой о зачислении в университет"
    ),
    desc: D7(
      "تصريح يؤكد فيه الطالب تسجيله بالجامعة استكمالا لملف المنحة أو الإيواء الجامعي.",
      "Déclaration par laquelle l'étudiant confirme son inscription à l'université en complément du dossier de bourse ou d'hébergement.",
      "Declaration whereby the student confirms university enrolment as a complement to the scholarship or housing file.",
      "Declaración mediante la cual el estudiante confirma su inscripción universitaria como complemento del expediente de beca o alojamiento.",
      "Dichiarazione con cui lo studente conferma l'iscrizione universitaria a completamento della pratica di borsa o alloggio.",
      "Erklärung, mit der der Studierende die Universitätsimmatrikulation als Ergänzung des Stipendien- oder Wohnheimsdossiers bestätigt.",
      "Заявление, которым студент подтверждает зачисление в университет в дополнение к делу о стипендии или общежитии."
    ),
    where: W7(
      "مصلحة المنح والشؤون الاجتماعية بالمؤسسة الجامعية أو أمانة الإيواء الجامعي",
      "Service des bourses et affaires sociales de l'université ou secrétariat des cités universitaires",
      "Scholarships and social affairs office of the university or university housing secretariat",
      "Servicio de becas y asuntos sociales de la universidad o secretaría de residencias",
      "Ufficio borse e affari sociali dell'università o segreteria delle residenze",
      "Stipendien- und Sozialamt der Universität oder Studentenwerk-Sekretariat",
      "Отдел стипендий и социальных вопросов университета или секретариат общежитий"
    ),
    keywords: ["التسجيل الجامعي", "inscription universitaire", "university enrolment", "منحة", "bourse"],
  },
  {
    id: "tas-niveau-etudes",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالمستوى الدراسي",
      "Déclaration sur l'honneur du niveau d'études",
      "Sworn declaration of education level",
      "Declaración jurada del nivel de estudios",
      "Dichiarazione giurata del livello di istruzione",
      "Eidesstattliche Erklärung über den Bildungsabschluss",
      "Заявление под присягой об уровне образования"
    ),
    desc: D7(
      "تصريح يحدد فيه المصرح مستواه الدراسي عندما يتعذر تقديم الشهادة أو كانت لا تزال قيد الإنجاز.",
      "Déclaration par laquelle l'intéressé précise son niveau d'études lorsque la présentation du diplôme est impossible.",
      "Declaration whereby the person states their education level when presenting the diploma is impossible or it is still pending.",
      "Declaración mediante la cual el interesado precisa su nivel de estudios cuando es imposible presentar el diploma.",
      "Dichiarazione con cui l'interessato indica il proprio livello di studi quando non può esibire il diploma.",
      "Erklärung, mit der die Person ihren Bildungsstand angibt, wenn das Zeugnis nicht vorgelegt werden kann.",
      "Заявление, которым лицо указывает свой уровень образования, когда невозможно представить диплом."
    ),
    where: W7(
      "الإدارة أو المشغل الطالب مع إثبات الهوية، وتقبل كوثيقة مؤقتة",
      "Administration ou employeur requérant, avec pièce d'identité, acceptée comme justificatif provisoire",
      "Requesting administration or employer, with ID, accepted as a provisional supporting document",
      "Administración o empleador solicitante, con documento de identidad, aceptada como justificante provisional",
      "Amministrazione o datore di lavoro richiedente, con documento d'identità, quale prova provvisoria",
      "Anfordernde Behörde oder Arbeitgeber mit Ausweis, als vorläufiger Nachweis anerkannt",
      "Запрашивающая организация или работодатель с удостоверением личности как временная справка"
    ),
    keywords: ["المستوى الدراسي", "niveau d'études", "education level", "شهادة", "diplôme"],
  },
  {
    id: "tas-frequentation-scolaire",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بتمدرس الطفل",
      "Déclaration sur l'honneur de fréquentation scolaire",
      "Sworn declaration of school attendance",
      "Declaración jurada de asistencia escolar",
      "Dichiarazione giurata di frequenza scolastica",
      "Eidesstattliche Erklärung über den Schulbesuch",
      "Заявление под присягой о посещении школы ребёнком"
    ),
    desc: D7(
      "تصريح يؤكد فيه أحد الوالدين تمدرس ابنه بشكل منتظم ضمن ملف اجتماعي أو دعم.",
      "Déclaration par laquelle un parent confirme la fréquentation scolaire régulière de son enfant dans le cadre d'un dossier social.",
      "Declaration whereby a parent confirms their child's regular school attendance as part of a social file.",
      "Declaración mediante la cual un progenitor confirma la asistencia escolar regular de su hijo en un expediente social.",
      "Dichiarazione con cui un genitore conferma la regolare frequenza scolastica del figlio in una pratica sociale.",
      "Erklärung, mit der ein Elternteil den regelmäßigen Schulbesuch des Kindes für ein Sozialdossier bestätigt.",
      "Заявление, которым родитель подтверждает регулярное посещение ребёнком школы для социального дела."
    ),
    where: W7(
      "مصلحة المساعدة الاجتماعية أو المندوبية الإقليمية عند دراسة ملف الدعم",
      "Service d'aide sociale ou direction provinciale lors de l'instruction du dossier d'appui",
      "Social aid service or provincial directorate when processing the support file",
      "Servicio de ayuda social o dirección provincial al tramitar el expediente de apoyo",
      "Servizio di aiuto sociale o direzione provinciale nell'istruttoria del dossier",
      "Sozialhilfedienst oder Provinzialdirektion bei der Bearbeitung des Unterstützungsantrags",
      "Служба соцпомощи или провинциальная дирекция при рассмотрении дела о поддержке"
    ),
    keywords: ["تمدرس", "fréquentation scolaire", "school attendance", "ملف اجتماعي", "dossier social"],
  },
  {
    id: "tas-formation-professionnelle",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالتكوين المهني",
      "Déclaration sur l'honneur de formation professionnelle",
      "Sworn declaration of vocational training",
      "Declaración jurada de formación profesional",
      "Dichiarazione giurata di formazione professionale",
      "Eidesstattliche Erklärung über die Berufsausbildung",
      "Заявление под присягой о профессиональном обучении"
    ),
    desc: D7(
      "تصريح يؤكد فيه المتربص متابعته لتكوين مهني بمؤسسة عمومية أو خاصة ضمن ملف دعم.",
      "Déclaration par laquelle le stagiaire confirme suivre une formation professionnelle en vue d'un dossier d'aide ou de bourse.",
      "Declaration whereby the trainee confirms attending a vocational training course for an aid or scholarship file.",
      "Declaración mediante la cual el aprendiz confirma seguir una formación profesional para un expediente de ayuda o beca.",
      "Dichiarazione con cui il tirocinante conferma di frequentare un corso di formazione professionale per aiuti o borse.",
      "Erklärung, mit der der Auszubildende die Teilnahme an einer Berufsausbildung für ein Hilfs- oder Stipendienverfahren bestätigt.",
      "Заявление, которым стажёр подтверждает прохождение профессионального обучения для дела о помощи или стипендии."
    ),
    where: W7(
      "مصلحة التكوين بالمؤسسة المعنية أو الجهة المدرسة للملف",
      "Service de formation de l'établissement concerné ou organisme instructeur du dossier",
      "Training department of the institution concerned or the body processing the file",
      "Servicio de formación del centro o entidad que tramita el expediente",
      "Servizio formazione dell'istituto o ente istruttore della pratica",
      "Ausbildungsabteilung der Einrichtung oder die das Verfahren führende Stelle",
      "Отдел обучения учреждения или орган, ведущий дело"
    ),
    keywords: ["تكوين مهني", "formation professionnelle", "vocational training", "متربص", "stagiaire"],
  },
  {
    id: "tas-eloignement-foyer",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف ببعد مقر الدراسة عن السكنى",
      "Déclaration sur l'honneur d'éloignement du lieu d'études",
      "Sworn declaration of distance from the place of study",
      "Declaración jurada de alejamiento del lugar de estudios",
      "Dichiarazione giurata di distanza dal luogo di studio",
      "Eidesstattliche Erklärung über die Entfernung zum Studienort",
      "Заявление под присягой об удалённости места учёбы"
    ),
    desc: D7(
      "تصريح يؤكد فيه الطالب أن مقر دراسته بعيد عن سكنى أسره للاستفادة من الإيواء الجامعي.",
      "Déclaration par laquelle l'étudiant confirme que son lieu d'études est éloigné du domicile familial pour obtenir un hébergement universitaire.",
      "Declaration whereby the student confirms their place of study is far from the family home in order to obtain university housing.",
      "Declaración mediante la cual el estudiante confirma que su lugar de estudios está lejos del domicilio familiar para obtener alojamiento universitario.",
      "Dichiarazione con cui lo studente conferma che il luogo di studio è lontano dalla residenza familiare per ottenere alloggio universitario.",
      "Erklärung, mit der der Studierende bestätigt, dass der Studienort weit vom Elternhaus entfernt liegt, um einen Wohnheimsplatz zu erhalten.",
      "Заявление, которым студент подтверждает удалённость места учёбы от дома для получения общежития."
    ),
    where: W7(
      "أمانة الإيواء الجامعي أو مصلحة الشؤون الاجتماعية بالمؤسسة",
      "Secrétariat des cités universitaires ou service des affaires sociales de l'établissement",
      "University housing secretariat or the institution's social affairs office",
      "Secretaría de residencias universitarias o servicio de asuntos sociales del centro",
      "Segreteria delle residenze universitarie o ufficio affari sociali dell'istituto",
      "Sekretariat der Studentenwohnheime oder Sozialamt der Einrichtung",
      "Секретариат общежитий или отдел социальных вопросов учебного заведения"
    ),
    keywords: ["الإيواء الجامعي", "cité universitaire", "university housing", "بعد المسافة", "éloignement"],
  },
  {
    id: "tas-non-perception-bourse",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الاستفادة من منحة",
      "Déclaration sur l'honneur de non-perception de bourse",
      "Sworn declaration of non-receipt of a scholarship",
      "Declaración jurada de no percepción de beca",
      "Dichiarazione giurata di non percezione di borsa",
      "Eidesstattliche Erklärung über den Bezug keines Stipendiums",
      "Заявление под присягой о неполучении стипендии"
    ),
    desc: D7(
      "تصريح يؤكد فيه الطالب أنه لا يتقاضى أي منحة دراسية لإتمام ملف طلب المساعدة.",
      "Déclaration par laquelle l'étudiant atteste ne percevoir aucune bourse d'études pour compléter sa demande d'aide.",
      "Declaration whereby the student attests receiving no study scholarship in order to complete an aid application.",
      "Declaración mediante la cual el estudiante acredita no percibir ninguna beca para completar su solicitud de ayuda.",
      "Dichiarazione con cui lo studente attesta di non percepire alcuna borsa di studio per completare la domanda di aiuto.",
      "Erklärung, mit der der Studierende bestätigt, kein Stipendium zu beziehen, um einen Hilfsantrag zu vervollständigen.",
      "Заявление, которым студент подтверждает неполучение стипендии для завершения заявления о помощи."
    ),
    where: W7(
      "مصلحة الشؤون الاجتماعية بالمؤسسة التعليمية أو الجهة المانحة للدعم",
      "Service des affaires sociales de l'établissement ou organisme octroyant l'aide",
      "Social affairs office of the institution or the body granting the aid",
      "Servicio de asuntos sociales del centro u organismo concedente de la ayuda",
      "Ufficio affari sociali dell'istituto o ente erogatore dell'aiuto",
      "Sozialamt der Einrichtung oder die Hilfe gewährende Stelle",
      "Отдел социальных вопросов учебного заведения или орган, предоставляющий помощь"
    ),
    keywords: ["منحة", "bourse", "scholarship", "عدم الاستفادة من منحة", "aide sociale"],
  },

  // ─── Revenus & activité ───
  {
    id: "tas-non-activite-tadamon",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم مزاولة أي نشاط (تضامن)",
      "Déclaration sur l'honneur de non-activité (Tadamon)",
      "Sworn declaration of non-activity (Tadamon)",
      "Declaración jurada de inactividad (Tadamon)",
      "Dichiarazione giurata di non attività (Tadamon)",
      "Eidesstattliche Erklärung der Erwerbslosigkeit (Tadamon)",
      "Заявление под присягой об отсутствии деятельности (Tadamon)"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح عدم مزاولته أي نشاط مدخول ضمن ملف AMO تضامن.",
      "Déclaration par laquelle l'intéressé atteste n'exercer aucune activité génératrice de revenus dans le cadre du dossier AMO Tadamon.",
      "Declaration whereby the person attests exercising no income-generating activity within the AMO Tadamon application.",
      "Declaración mediante la cual el interesado acredita no ejercer actividad generadora de ingresos en el expediente AMO Tadamon.",
      "Dichiarazione con cui l'interessato attesta di non svolgere attività reddituali nell'ambito del dossier AMO Tadamon.",
      "Erklärung, mit der die Person bestätigt, im AMO-Tadamon-Verfahren keine einkommensbringende Tätigkeit auszuüben.",
      "Заявление, которым лицо подтверждает отсутствие приносящей доход деятельности в деле AMO Tadamon."
    ),
    where: W7(
      "منصة AMO تضامن أو الوكالات الصحية والجمعيات المشاركة في التسجيل",
      "Portail AMO Tadamon ou guichets de santé et associations partenaires de l'inscription",
      "AMO Tadamon portal or health desks and partner associations handling registration",
      "Portal AMO Tadamon o ventanillas de salud y asociaciones colaboradoras del registro",
      "Portale AMO Tadamon o sportelli sanitari e associazioni partner per l'iscrizione",
      "AMO-Tadamon-Portal oder Gesundheitsschalter und Partnervereine der Anmeldung",
      "Портал AMO Tadamon или медпункты и партнёрские ассоциации регистрации"
    ),
    keywords: ["عدم النشاط", "non-activité", "non-activity", "تضامن", "Tadamon"],
    popular: true,
    authority: "amotadamon",
  },
  {
    id: "tas-revenus-nuls",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بانعدام المداخيل",
      "Déclaration sur l'honneur de revenus nuls",
      "Sworn declaration of zero income",
      "Declaración jurada de ingresos nulos",
      "Dichiarazione giurata di redditi nulli",
      "Eidesstattliche Erklärung der Einkommenslosigkeit",
      "Заявление под присягой об отсутствии доходов"
    ),
    desc: D7(
      "تصريح يؤكد فيه المعني بالأمر عدم توفره على أي مصدر للمداخيل عند تقديم طلب مساعدة.",
      "Déclaration par laquelle l'intéressé atteste ne disposer d'aucune source de revenus lors du dépôt d'une demande d'aide.",
      "Declaration whereby the person attests having no source of income when filing an aid or scholarship application.",
      "Declaración mediante la cual el interesado acredita carecer de toda fuente de ingresos al solicitar una ayuda.",
      "Dichiarazione con cui l'interessato attesta di non avere alcuna fonte di reddito nel presentare la domanda di aiuto.",
      "Erklärung, mit der die Person bestätigt, bei der Antragstellung über keine Einkommensquelle zu verfügen.",
      "Заявление, которым лицо подтверждает отсутствие источников дохода при подаче заявления о помощи."
    ),
    where: W7(
      "الجهة المدرسة للملف (منحة، RSU، مساعدة اجتماعية) مع إثباتات الوضعية",
      "Organisme instructeur du dossier (bourse, RSU, aide sociale), avec justificatifs de situation",
      "Body processing the file (scholarship, RSU, social aid), with supporting documents",
      "Entidad tramitadora (beca, RSU, ayuda social), con justificantes de la situación",
      "Ente istruttore della pratica (borsa, RSU, aiuto sociale), con documenti giustificativi",
      "Bearbeitende Stelle (Stipendium, RSU, Sozialhilfe) mit Sachnachweisen",
      "Орган, ведущий дело (стипендия, RSU, соцпомощь), с подтверждающими документами"
    ),
    keywords: ["انعدام المداخيل", "revenus nuls", "zero income", "بدون دخل", "sans revenus"],
  },
  {
    id: "tas-non-allocations-chomage",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الاستفادة من تعويضات البطالة",
      "Déclaration sur l'honneur de non-perception d'allocations de chômage",
      "Sworn declaration of non-receipt of unemployment benefits",
      "Declaración jurada de no percepción de prestaciones por desempleo",
      "Dichiarazione giurata di non percezione di sussidi di disoccupazione",
      "Eidesstattliche Erklärung über den Bezug keines Arbeitslosengeldes",
      "Заявление под присягой о неполучении пособия по безработице"
    ),
    desc: D7(
      "تصريح يؤكد فيه طالب الشغل عدم استفادته من أي تعويض عن البطالة ضمن ملفه لدى ANAPEC.",
      "Déclaration par laquelle le chercheur d'emploi atteste ne percevoir aucune indemnité de chômage dans le cadre de son dossier ANAPEC.",
      "Declaration whereby the job seeker attests receiving no unemployment compensation within their ANAPEC file.",
      "Declaración mediante la cual el demandante de empleo acredita no percibir indemnización por desempleo en su expediente ANAPEC.",
      "Dichiarazione con cui il cercatore di lavoro attesta di non percepire indennità di disoccupazione nella pratica ANAPEC.",
      "Erklärung, mit der der Arbeitssuchende bestätigt, im ANAPEC-Verfahren keine Arbeitslosenentschädigung zu beziehen.",
      "Заявление, которым соискатель работы подтверждает неполучение пособия по безработице в деле ANAPEC."
    ),
    where: W7(
      "وكالة ANAPEC التابع لها المعني بالأمر عند إعداد بطاقة الطلب",
      "Agence ANAPEC dont relève l'intéressé lors de l'établissement de la fiche de demande",
      "ANAPEC agency covering the person concerned, when issuing the request form",
      "Agencia ANAPEC correspondiente al interesado al emitir la ficha de solicitud",
      "Agenzia ANAPEC di riferimento all'atto della redazione della scheda di domanda",
      "Zuständige ANAPEC-Agentur bei Ausstellung des Antragsformulars",
      "Агентство ANAPEC по месту обращения при оформлении анкеты"
    ),
    keywords: ["تعويضات البطالة", "allocations de chômage", "unemployment benefits", "ANAPEC", "بطالة"],
    authority: "anapec",
  },
  {
    id: "tas-non-profession-liberale",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم مزاولة مهنة حرة",
      "Déclaration sur l'honneur de non-exercice d'une profession libérale",
      "Sworn declaration of not practising a liberal profession",
      "Declaración jurada de no ejercicio de profesión liberal",
      "Dichiarazione giurata di non esercizio di professione intellettuale",
      "Eidesstattliche Erklärung über die Ausübung keines freien Berufs",
      "Заявление под присягой об отсутствии частной практики"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح أنه لا يزاول مهنة حرة كالطبابة أو المحاماة أو الهندسة.",
      "Déclaration par laquelle l'intéressé atteste ne pas exercer de profession libérale telle que médecin, avocat ou ingénieur.",
      "Declaration whereby the person attests not practising a liberal profession such as doctor, lawyer or engineer.",
      "Declaración mediante la cual el interesado acredita no ejercer profesión liberal como médico, abogado o ingeniero.",
      "Dichiarazione con cui l'interessato attesta di non esercitare una professione intellettuale come medico, avvocato o ingegnere.",
      "Erklärung, mit der die Person bestätigt, keinen freien Beruf wie Arzt, Anwalt oder Ingenieur auszuüben.",
      "Заявление, которым лицо подтверждает отсутствие частной практики (врач, адвокат, инженер)."
    ),
    where: W7(
      "الإدارة أو البنك الطالب للتصريح ضمن دراسة ملف اجتماعي أو بنكي",
      "Administration ou banque requérante, lors de l'étude d'un dossier social ou bancaire",
      "Requesting administration or bank, when reviewing a social or banking file",
      "Administración o banco solicitante, al estudiar un expediente social o bancario",
      "Amministrazione o banca richiedente, all'esame di una pratica sociale o bancaria",
      "Anfordernde Behörde oder Bank bei der Prüfung eines sozialen oder bankbezogenen Vorgangs",
      "Запрашивающая организация или банк при рассмотрении социального или банковского дела"
    ),
    keywords: ["مهنة حرة", "profession libérale", "liberal profession", "التصريح بالمهنة", "exercice"],
  },
  {
    id: "tas-non-residence-fiscale",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الاستقرار الضريبي بالمغرب",
      "Déclaration sur l'honneur de non-résidence fiscale au Maroc",
      "Sworn declaration of non-tax residence in Morocco",
      "Declaración jurada de no residencia fiscal en Marruecos",
      "Dichiarazione giurata di non residenza fiscale in Marocco",
      "Eidesstattliche Erklärung über keinen steuerlichen Wohnsitz in Marokko",
      "Заявление под присягой об отсутствии налогового резидентства в Марокко"
    ),
    desc: D7(
      "تصريح يؤكد فيه المغربي المقيم بالخارج أن مركز مصالحه الاقتصادية يوجد خارج المملكة.",
      "Déclaration par laquelle le Marocain résidant à l'étranger atteste que le centre de ses intérêts économiques se situe hors du Royaume.",
      "Declaration whereby the Moroccan residing abroad attests that the centre of their economic interests lies outside the Kingdom.",
      "Declaración mediante la cual el marroquí residente en el extranjero acredita que el centro de sus intereses económicos está fuera del Reino.",
      "Dichiarazione con cui il marocchino residente all'estero attesta che il centro dei suoi interessi economici è fuori dal Regno.",
      "Erklärung, mit der der im Ausland lebende Marokkaner bestätigt, dass der Mittelpunkt seiner wirtschaftlichen Interessen außerhalb des Königreichs liegt.",
      "Заявление, которым марокканец, проживающий за рубежом, подтверждает, что центр его экономических интересов находится вне королевства."
    ),
    where: W7(
      "الإدارة الضريبية أو الجهة الطالبة للتصريح ضمن ملفات المقاولات والأملاك",
      "Administration fiscale ou organisme requérant, dans le cadre des dossiers d'entreprises et de patrimoine",
      "Tax administration or requesting body, within corporate and asset files",
      "Administración fiscal u organismo solicitante, en expedientes de empresas y patrimonio",
      "Amministrazione fiscale o ente richiedente, nelle pratiche di imprese e patrimonio",
      "Steuerverwaltung oder anfordernde Stelle in Unternehmens- und Vermögensangelegenheiten",
      "Налоговое ведомство или запрашивающий орган в делах предприятий и имущества"
    ),
    keywords: ["الاستقرار الضريبي", "non-résidence fiscale", "tax residence", "MRE", "مقيم بالخارج"],
  },
  {
    id: "tas-pension-percue",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بتقاضي معاش",
      "Déclaration sur l'honneur de perception d'une pension",
      "Sworn declaration of receiving a pension",
      "Declaración jurada de percepción de pensión",
      "Dichiarazione giurata di percezione di pensione",
      "Eidesstattliche Erklärung über den Rentenbezug",
      "Заявление под присягой о получении пенсии"
    ),
    desc: D7(
      "تصريح يحدد فيه المصرح طبيعة معاشه ومبلغه السنوي عند دراسة ملف مساعدة أو إيواء.",
      "Déclaration par laquelle l'intéressé précise la nature et le montant annuel de sa pension lors de l'étude d'un dossier d'aide.",
      "Declaration whereby the person states the nature and annual amount of their pension when an aid file is reviewed.",
      "Declaración mediante la cual el interesado precisa la naturaleza e importe anual de su pensión al tramitar un expediente de ayuda.",
      "Dichiarazione con cui l'interessato indica la natura e l'importo annuale della pensione nell'esame di una pratica di aiuto.",
      "Erklärung, mit der die Person Art und Jahresbetrag ihrer Rente bei der Prüfung eines Hilfsantrags angibt.",
      "Заявление, которым лицо указывает характер и годовой размер пенсии при рассмотрении дела о помощи."
    ),
    where: W7(
      "الجهة المدرسة للملف (مساعدة اجتماعية، إيواء، إعفاء) مع كشف المعاش",
      "Organisme instructeur (aide sociale, hébergement, exonération), avec bulletin de pension joint",
      "Processing body (social aid, housing, exemption), with pension statement attached",
      "Entidad tramitadora (ayuda social, alojamiento, exención), con recibo de pensión adjunto",
      "Ente istruttore (aiuto sociale, alloggio, esenzione), con prova della pensione allegata",
      "Bearbeitende Stelle (Sozialhilfe, Unterbringung, Befreiung) mit Rentennachweis",
      "Ведущий орган (соцпомощь, размещение, освобождение) со справкой о пенсии"
    ),
    keywords: ["معاش التقاعد", "pension de retraite", "pension", "مبلغ المعاش", "montant"],
  },
  {
    id: "tas-absence-revenu-foncier",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم التوفر على مداخيل عقارية",
      "Déclaration sur l'honneur d'absence de revenus fonciers",
      "Sworn declaration of no rental property income",
      "Declaración jurada de ausencia de ingresos inmobiliarios",
      "Dichiarazione giurata di assenza di redditi fondiari",
      "Eidesstattliche Erklärung über fehlende Mieterträge",
      "Заявление под присягой об отсутствии доходов от недвижимости"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح أنه لا يتوفر على مداخيل من كراء عقارات أو أراض فلاحية.",
      "Déclaration par laquelle l'intéressé atteste ne disposer d'aucun revenu issu de la location d'immeubles ou de terres agricoles.",
      "Declaration whereby the person attests having no income from renting out property or agricultural land.",
      "Declaración mediante la cual el interesado acredita carecer de ingresos por alquiler de inmuebles o tierras agrícolas.",
      "Dichiarazione con cui l'interessato attesta di non avere redditi da locazione di immobili o terreni agricoli.",
      "Erklärung, mit der die Person bestätigt, keine Einkünfte aus der Vermietung von Immobilien oder Agrarland zu beziehen.",
      "Заявление, которым лицо подтверждает отсутствие доходов от сдачи недвижимости или сельхозземель в аренду."
    ),
    where: W7(
      "الجهة المدرسة للملف (مساعدة اجتماعية، منحة، إعفاء) حسب الغرض",
      "Organisme instructeur du dossier (aide sociale, bourse, exonération) selon l'usage",
      "Body examining the file (social aid, scholarship, exemption) depending on the use",
      "Entidad examinadora del expediente (ayuda, beca, exención) según el uso",
      "Ente esaminatore della pratica (aiuto, borsa, esenzione) secondo l'uso",
      "Prüfende Stelle (Sozialhilfe, Stipendium, Befreiung) je nach Verwendung",
      "Орган, рассматривающий дело (соцпомощь, стипендия, освобождение), по назначению"
    ),
    keywords: ["مداخيل عقارية", "revenus fonciers", "rental income", "كراء", "location"],
  },
  {
    id: "tas-revenus-percus-rsu",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالمداخيل (السجل الاجتماعي الموحد)",
      "Déclaration sur l'honneur des revenus (RSU)",
      "Sworn declaration of income (RSU)",
      "Declaración jurada de ingresos (RSU)",
      "Dichiarazione giurata dei redditi (RSU)",
      "Eidesstattliche Erklärung der Einkünfte (RSU)",
      "Заявление под присягой о доходах (RSU)"
    ),
    desc: D7(
      "تصريح يصرح فيه المعني بالأمر بمجموع مداخيل أسره عند التسجيل أو التحديث بالسجل الاجتماعي الموحد.",
      "Déclaration par laquelle l'intéressé fait état des revenus de son ménage lors de l'inscription ou de la mise à jour au RSU.",
      "Declaration whereby the person reports household income when registering with or updating the Unified Social Registry.",
      "Declaración mediante la cual el interesado declara los ingresos de su hogar al inscribirse o actualizar datos en el RSU.",
      "Dichiarazione con cui l'interessato dichiara i redditi del nucleo familiare all'iscrizione o aggiornamento RSU.",
      "Erklärung, mit der die Person die Einkünfte des Haushalts bei der RSU-Anmeldung oder -Aktualisierung angibt.",
      "Заявление, которым лицо декларирует доходы домохозяйства при регистрации или обновлении данных в реестре RSU."
    ),
    where: W7(
      "مساطر التسجيل في RSU عبر البوابات الرقمية ومراكز الصحة والجماعات المعتمدة",
      "Procédures d'inscription au RSU via les portails numériques, centres de santé et communes habilitées",
      "RSU registration procedures via the digital portals, health centres and accredited communes",
      "Trámites de inscripción en el RSU a través de portales digitales, centros de salud y comunas acreditadas",
      "Procedure di iscrizione al RSU tramite portali digitali, centri sanitari e comuni abilitati",
      "RSU-Anmeldeverfahren über digitale Portale, Gesundheitszentren und zugelassene Gemeinden",
      "Процедуры регистрации в RSU через цифровые порталы, медцентры и уполномоченные коммуны"
    ),
    keywords: ["السجل الاجتماعي الموحد", "RSU", "Unified Social Registry", "المداخيل", "revenus"],
  },
  {
    id: "tas-activite-salariee",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بمزاولة نشاط مأجور",
      "Déclaration sur l'honneur d'exercice d'une activité salariée",
      "Sworn declaration of exercising salaried employment",
      "Declaración jurada de ejercicio de actividad asalariada",
      "Dichiarazione giurata di attività lavorativa dipendente",
      "Eidesstattliche Erklärung über eine unselbstständige Tätigkeit",
      "Заявление под присягой о работе по найму"
    ),
    desc: D7(
      "تصريح يحدد فيه المصرح مهنته ومشغله ومقر عمله ضمن ملف اجتماعي أو سكني.",
      "Déclaration dans laquelle l'intéressé précise sa profession, son employeur et son lieu de travail pour un dossier social ou de logement.",
      "Declaration in which the person states their occupation, employer and place of work for a social or housing file.",
      "Declaración en la que el interesado precisa su profesión, empleador y lugar de trabajo en un expediente social o de vivienda.",
      "Dichiarazione in cui l'interessato indica professione, datore di lavoro e sede per una pratica sociale o abitativa.",
      "Erklärung, in der die Person Beruf, Arbeitgeber und Arbeitsort für ein Sozial- oder Wohnungsverfahren angibt.",
      "Заявление, в котором лицо указывает профессию, работодателя и место работы для социального или жилищного дела."
    ),
    where: W7(
      "الجهة الطالبة (ملف اجتماعي، سكن، تسجيل) مع إثبات العمل عند الإمكان",
      "Organisme requérant (dossier social, logement, inscription), avec justificatif d'emploi si possible",
      "Requesting body (social, housing, registration file), with proof of employment if available",
      "Organismo solicitante (expediente social, vivienda, registro), con justificante de empleo si es posible",
      "Ente richiedente (pratica sociale, alloggio, iscrizione), con prova d'impiego se disponibile",
      "Anfordernde Stelle (Sozial-, Wohn-, Registrierungsvorgang) mit Arbeitsnachweis, falls möglich",
      "Запрашивающий орган (социальное, жилищное дело, регистрация) со справкой о работе при наличии"
    ),
    keywords: ["نشاط مأجور", "activité salariée", "salaried employment", "مشغل", "employeur"],
  },
  {
    id: "tas-origine-fonds",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بمصدر الأموال",
      "Déclaration sur l'honneur d'origine des fonds",
      "Sworn declaration of the origin of funds",
      "Declaración jurada del origen de los fondos",
      "Dichiarazione giurata dell'origine dei fondi",
      "Eidesstattliche Erklärung über die Herkunft der Gelder",
      "Заявление под присягой об источнике средств"
    ),
    desc: D7(
      "تصريح يوضح فيه المصرح مصدر المبالغ المودعة أو المخصصة لعملية عقارية أو استثمارية.",
      "Déclaration par laquelle l'intéressé précise l'origine des sommes déposées ou affectées à une opération immobilière ou d'investissement.",
      "Declaration whereby the person specifies the origin of funds deposited or committed to a property or investment transaction.",
      "Declaración mediante la cual el interesado precisa el origen de los fondos depositados o destinados a una operación inmobiliaria o de inversión.",
      "Dichiarazione con cui l'interessato specifica l'origine delle somme versate o destinate a un'operazione immobiliare o d'investimento.",
      "Erklärung, mit der die Person die Herkunft der bei einem Immobilien- oder Investmentgeschäft eingesetzten Gelder angibt.",
      "Заявление, которым лицо уточняет происхождение средств, вносимых или предназначенных для сделки с недвижимостью или инвестиции."
    ),
    where: W7(
      "البنك أو الموثق أو الإدارة المالية الطالبة للتصريح قبل إتمام العملية",
      "Banque, notaire ou administration financière requérante, avant la conclusion de l'opération",
      "Bank, notary or requesting financial administration, before completing the transaction",
      "Banco, notario o administración financiera solicitante, antes de concluir la operación",
      "Banca, notaio o amministrazione finanziaria richiedente, prima del perfezionamento dell'operazione",
      "Bank, Notar oder anfordernde Finanzbehörde vor Abschluss des Geschäfts",
      "Банк, нотариус или финансовое ведомство до завершения сделки"
    ),
    keywords: ["مصدر الأموال", "origine des fonds", "origin of funds", "إيداع بنكي", "opération immobilière"],
  },
  {
    id: "tas-non-benefice-aides",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الاستفادة من مساعدات أخرى",
      "Déclaration sur l'honneur de non-bénéfice d'autres aides",
      "Sworn declaration of not receiving other benefits",
      "Declaración jurada de no percepción de otras ayudas",
      "Dichiarazione giurata di non godimento di altri sussidi",
      "Eidesstattliche Erklärung über den Bezug keiner weiteren Leistungen",
      "Заявление под присягой о неполучении иных пособий"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح أنه لا يستفيد من أي دعم أو إعانة سابقة لتجنب الازدواجية.",
      "Déclaration par laquelle l'intéressé atteste ne bénéficier d'aucune autre aide afin d'éviter tout cumul indû.",
      "Declaration whereby the person attests receiving no other assistance in order to prevent improper overlapping of benefits.",
      "Declaración mediante la cual el interesado acredita no percibir otra ayuda para evitar acumulaciones indebidas.",
      "Dichiarazione con cui l'interessato attesta di non fruire di altri sussidi per evitare indebiti cumuli.",
      "Erklärung, mit der die Person bestätigt, keine weiteren Leistungen zu beziehen, um unzulässige Häufungen zu vermeiden.",
      "Заявление, которым лицо подтверждает неполучение иных выплат во избежание необоснованного совмещения."
    ),
    where: W7(
      "الجهة المانحة للمساعدة المطلوبة (دعم مباشر، منحة، إعانة) عند إيداع الطلب",
      "Organisme accordant l'aide sollicitée (appui direct, bourse, subvention) lors du dépôt de la demande",
      "Body granting the requested assistance (direct support, scholarship, subsidy) when the application is filed",
      "Organismo que concede la ayuda solicitada (apoyo directo, beca, subvención) al presentar la solicitud",
      "Ente che concede l'aiuto richiesto (sostegno diretto, borsa, sussidio) al deposito della domanda",
      "Stelle, die die beantragte Leistung gewährt, bei Antragstellung",
      "Орган, предоставляющий запрашиваемую помощь, при подаче заявления"
    ),
    keywords: ["مساعدات", "aides", "benefits", "عدم الازدواجية", "cumul"],
  },

  // ─── Pertes de documents ───
  {
    id: "tas-perte-passeport",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع جواز السفر",
      "Déclaration sur l'honneur de perte de passeport",
      "Sworn declaration of passport loss",
      "Declaración jurada de pérdida de pasaporte",
      "Dichiarazione giurata di smarrimento del passaporto",
      "Eidesstattliche Erklärung über den Passverlust",
      "Заявление под присягой об утере паспорта"
    ),
    desc: D7(
      "تصريح يثبت فيه المسافر ضياع جواز سفره مع ذكر ظروفه لاستخراج بدل جديد.",
      "Déclaration par laquelle le voyageur atteste la perte de son passeport, circonstances comprises, en vue d'un duplicata.",
      "Declaration whereby the traveller attests the loss of their passport, including circumstances, to obtain a replacement.",
      "Declaración mediante la cual el viajero acredita la pérdida de su pasaporte, con circunstancias, para obtener un duplicado.",
      "Dichiarazione con cui il viaggiatore attesta lo smarrimento del passaporto, circostanze comprese, per il duplicato.",
      "Erklärung, mit der der Reisende den Passverlust samt Umständen bestätigt, um einen Ersatz zu erhalten.",
      "Заявление, которым путешественник подтверждает утерю паспорта с обстоятельствами для получения дубликата."
    ),
    where: W7(
      "مفوضية الشرطة أو الدرك الملكي، والقنصلية عند تواجد المصرح بالخارج",
      "Commissariat de police ou gendarmerie royale, et consulat lorsque le déclarant se trouve à l'étranger",
      "Police station or royal gendarmerie, and the consulate when the declarant is abroad",
      "Comisaría o gendarmería real, y el consulado si el declarante está en el extranjero",
      "Commissariato di polizia o gendarmeria reale, e consolato se il dichiarante è all'estero",
      "Polizeiwache oder königliche Gendarmerie sowie das Konsulat bei Aufenthalt im Ausland",
      "Полицейский участок или королевская жандармерия, а также консульство, если заявитель за границей"
    ),
    keywords: ["ضياع جواز السفر", "perte de passeport", "passport loss", "بدل فاقد", "duplicata"],
    popular: true,
  },
  {
    id: "tas-perte-carte-grise",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع البطاقة الرمادية",
      "Déclaration sur l'honneur de perte de la carte grise",
      "Sworn declaration of loss of the vehicle registration card",
      "Declaración jurada de pérdida del permiso de circulación",
      "Dichiarazione giurata di smarrimento della carta di circolazione",
      "Eidesstattliche Erklärung über den Verlust des Fahrzeugscheins",
      "Заявление под присягой об утере техпаспорта"
    ),
    desc: D7(
      "تصريح يؤكد فيه مالك السيارة ضياع بطاقتها الرمادية تمهيدا لطلب نظير جديد.",
      "Déclaration par laquelle le propriétaire confirme la perte de la carte grise de son véhicule en vue d'une demande de duplicata.",
      "Declaration whereby the owner confirms the loss of the vehicle registration card to request a duplicate.",
      "Declaración mediante la cual el propietario confirma la pérdida del permiso de circulación para solicitar un duplicado.",
      "Dichiarazione con cui il proprietario conferma lo smarrimento della carta di circolazione per richiedere un duplicato.",
      "Erklärung, mit der der Halter den Verlust des Fahrzeugscheins bestätigt, um eine Zweitschrift zu beantragen.",
      "Заявление, которым владелец подтверждает утерю техпаспорта для запроса дубликата."
    ),
    where: W7(
      "وكالات NARSA أو مراكز تسجيل السيارات مع نشر إعلان الضياع عند الاقتضاء",
      "Agences NARSA ou centres d'immatriculation, avec publication d'un avis de perte si requis",
      "NARSA agencies or vehicle registration centres, with publication of a loss notice if required",
      "Agencias NARSA o centros de matriculación, con publicación de aviso de pérdida si se exige",
      "Agenzie NARSA o centri di immatricolazione, con pubblicazione dell'avviso di smarrimento se richiesto",
      "NARSA-Agenturen oder Zulassungsstellen, bei Bedarf mit Verlustanzeige",
      "Агентства NARSA или регистрационные центры с публикацией объявления об утере при необходимости"
    ),
    keywords: ["البطاقة الرمادية", "carte grise", "vehicle registration", "ضياع", "NARSA"],
  },
  {
    id: "tas-perte-livret-famille",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع دفتر الحالة المدنية",
      "Déclaration sur l'honneur de perte du livret de famille",
      "Sworn declaration of loss of the family record book",
      "Declaración jurada de pérdida del libro de familia",
      "Dichiarazione giurata di smarrimento del libretto di famiglia",
      "Eidesstattliche Erklärung über den Verlust des Familienbuches",
      "Заявление под присягой об утере семейной книжки"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح ضياع دفتر الحالة المدنية مع ذكر رسومه لاستخراج نظير.",
      "Déclaration par laquelle l'intéressé confirme la perte de son livret de famille, actes concernés cités, pour obtenir un duplicata.",
      "Declaration whereby the person confirms the loss of their family record book, citing the acts concerned, to obtain a duplicate.",
      "Declaración mediante la cual el interesado confirma la pérdida del libro de familia, citando las actas, para obtener un duplicado.",
      "Dichiarazione con cui l'interessato conferma lo smarrimento del libretto di famiglia, citando gli atti, per il duplicato.",
      "Erklärung, mit der die Person den Verlust des Familienbuches unter Nennung der Urkunden bestätigt, um ein Duplikat zu erhalten.",
      "Заявление, которым лицо подтверждает утерю семейной книжки с указанием актов для получения дубликата."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة التي سجلت الأحداث المدنية المعنية",
      "Service de l'état civil de la commune ayant enregistré les actes d'état civil concernés",
      "Civil registry office of the commune that recorded the civil status acts concerned",
      "Servicio del registro civil de la comuna que inscribió las actas correspondientes",
      "Ufficio di stato civile del comune che ha registrato gli atti interessati",
      "Standesamt der Gemeinde, in der die betreffenden Urkunden beurkundet wurden",
      "Отдел ЗАГС коммуны, зарегистрировавшей соответствующие акты гражданского состояния"
    ),
    keywords: ["دفتر الحالة المدنية", "livret de famille", "family record book", "الحالة المدنية", "état civil"],
  },
  {
    id: "tas-perte-permis-conduire",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع رخصة السياقة",
      "Déclaration sur l'honneur de perte du permis de conduire",
      "Sworn declaration of loss of the driving licence",
      "Declaración jurada de pérdida del permiso de conducir",
      "Dichiarazione giurata di smarrimento della patente",
      "Eidesstattliche Erklärung über den Führerscheinverlust",
      "Заявление под присягой об утере водительских прав"
    ),
    desc: D7(
      "تصريح يؤكد فيه السائق ضياع رخصة السياقة قبل طلب نظير جديد من مصلحة التسجيل.",
      "Déclaration par laquelle le conducteur confirme la perte de son permis de conduire avant de solliciter un duplicata.",
      "Declaration whereby the driver confirms the loss of their driving licence before requesting a duplicate.",
      "Declaración mediante la cual el conductor confirma la pérdida del permiso de conducir antes de solicitar un duplicado.",
      "Dichiarazione con cui il conducente conferma lo smarrimento della patente prima di richiedere un duplicato.",
      "Erklärung, mit der der Fahrer den Verlust des Führerscheins bestätigt, bevor er einen Ersatz beantragt.",
      "Заявление, которым водитель подтверждает утерю водительских прав перед запросом дубликата."
    ),
    where: W7(
      "وكالات NARSA أو مفوضية الشرطة المكلفة بملفات رخص السياقة",
      "Agences NARSA ou commissariat de police chargé des dossiers de permis de conduire",
      "NARSA agencies or the police station handling driving licence files",
      "Agencias NARSA o comisaría encargada de los expedientes de permisos de conducir",
      "Agenzie NARSA o commissariato di polizia competente per le pratiche della patente",
      "NARSA-Agenturen oder die für Führerscheinangelegenheiten zuständige Polizeiwache",
      "Агентства NARSA или полицейский участок, ведущий дела водительских прав"
    ),
    keywords: ["رخصة السياقة", "permis de conduire", "driving licence", "ضياع", "duplicata"],
  },
  {
    id: "tas-perte-carte-cnss",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع بطاقة CNSS أو AMO",
      "Déclaration sur l'honneur de perte de la carte CNSS ou AMO",
      "Sworn declaration of loss of the CNSS or AMO card",
      "Declaración jurada de pérdida de la tarjeta CNSS o AMO",
      "Dichiarazione giurata di smarrimento della tessera CNSS o AMO",
      "Eidesstattliche Erklärung über den Verlust der CNSS- oder AMO-Karte",
      "Заявление под присягой об утере карточки CNSS или AMO"
    ),
    desc: D7(
      "تصريح يؤكد فيه المؤمن ضياع بطاقته الصحية تمهيدا لطلب نظير يواصل به علاجاته.",
      "Déclaration par laquelle l'assuré confirme la perte de sa carte d'affiliation afin d'obtenir un duplicata pour poursuivre ses soins.",
      "Declaration whereby the insured confirms the loss of their affiliation card in order to obtain a duplicate and continue treatment.",
      "Declaración mediante la cual el asegurado confirma la pérdida de su tarjeta de afiliación para obtener un duplicado y continuar los tratamientos.",
      "Dichiarazione con cui l'assicurato conferma lo smarrimento della tessera di affiliazione per ottenere un duplicato e proseguire le cure.",
      "Erklärung, mit der der Versicherte den Verlust seiner Versichertenkarte bestätigt, um ein Duplikat zu erhalten und Behandlungen fortzusetzen.",
      "Заявление, которым застрахованный подтверждает утерю карточки для получения дубликата и продолжения лечения."
    ),
    where: W7(
      "أقرب وكالة CNSS أو عبر بوابة MaCNSS لطلب نظير البطاقة",
      "Agence CNSS la plus proche ou via le portail MaCNSS pour demander un duplicata",
      "Nearest CNSS agency or via the MaCNSS portal to request a duplicate",
      "Agencia CNSS más cercana o vía portal MaCNSS para solicitar un duplicado",
      "Agenzia CNSS più vicina o tramite portale MaCNSS per richiedere un duplicato",
      "Nächste CNSS-Agentur oder über das MaCNSS-Portal zur Beantragung eines Duplikats",
      "Ближайшее агентство CNSS или через портал MaCNSS для запроса дубликата"
    ),
    keywords: ["بطاقة CNSS", "carte CNSS", "AMO", "ضياع البطاقة", "duplicata"],
    authority: "macnss",
  },
  {
    id: "tas-perte-diplome",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع شهادة أو دبلوم",
      "Déclaration sur l'honneur de perte d'un diplôme",
      "Sworn declaration of loss of a diploma",
      "Declaración jurada de pérdida de un diploma",
      "Dichiarazione giurata di smarrimento di un diploma",
      "Eidesstattliche Erklärung über den Verlust eines Zeugnisses",
      "Заявление под присягой об утере диплома"
    ),
    desc: D7(
      "تصريح يؤكد فيه المعني بالأمر ضياع شهادته الدراسية أو دبلومه التكويني لطلب نظير رسمي.",
      "Document par lequel l'intéressé confirme la perte de son diplôme scolaire ou de formation afin de demander une copie officielle.",
      "Declaration whereby the person confirms the loss of their school or training diploma in order to request an official copy.",
      "Declaración mediante la cual el interesado confirma la pérdida de su diploma escolar o de formación para solicitar una copia oficial.",
      "Dichiarazione con cui l'interessato conferma lo smarrimento del proprio diploma per richiedere una copia ufficiale.",
      "Erklärung, mit der die Person den Verlust ihres Schul- oder Ausbildungszertifikats bestätigt, um eine offizielle Kopie zu beantragen.",
      "Заявление, которым лицо подтверждает утерю школьного или профессионального диплома для запроса официальной копии."
    ),
    where: W7(
      "المؤسسة أو الأكاديمية أو الوزارة التي سلمت الشهادة، مرفقا بالتصريح",
      "Établissement, académie ou ministère ayant délivré le diplôme, avec la déclaration jointe",
      "Institution, academy or ministry that issued the diploma, with the declaration attached",
      "Centro, academia o ministerio que expidió el diploma, con la declaración adjunta",
      "Istituto, accademia o ministero che ha rilasciato il diploma, con la dichiarazione allegata",
      "Einrichtung, Akademie oder Ministerium, das das Zeugnis ausstellte, mit beigefügter Erklärung",
      "Учреждение, академия или министерство, выдавшее диплом, с приложенным заявлением"
    ),
    keywords: ["ضياع شهادة", "perte de diplôme", "diploma loss", "دبلوم", "نظير"],
  },

  // ─── Véhicules & circulation ───
  {
    id: "tas-constat-amiable",
    cat: "tasarih",
    title: T7(
      "تصريح بالحادثة بين طرفين",
      "Déclaration à l'amiable d'un accident entre deux parties",
      "Amicable accident declaration between two parties",
      "Declaración amistosa de accidente entre dos partes",
      "Dichiarazione amichevole di incidente tra due parti",
      "Gütliche Unfallerklärung zwischen zwei Parteien",
      "Совместное заявление об аварии между двумя сторонами"
    ),
    desc: D7(
      "تصريح يحرره طرفا حادثة سير بسيط يصفان فيه وقائع الضرر دون تدخل الشرطة.",
      "Déclaration rédigée par les deux parties d'un accident mineur décrivant les circonstances des dégâts sans intervention de la police.",
      "Statement drawn up by both parties of a minor accident describing the damage circumstances without police involvement.",
      "Declaración redactada por las dos partes de un accidente menor describiendo las circunstancias de los daños sin intervención policial.",
      "Dichiarazione redatta dalle due parti di un incidente minore che descrive le circostanze dei danni senza intervento della polizia.",
      "Von beiden Parteien eines kleineren Unfalls verfasste Erklärung, die die Schadensumstände ohne Polizeieinsatz beschreibt.",
      "Заявление, составленное обеими сторонами мелкого ДТП с описанием обстоятельств ущерба без участия полиции."
    ),
    where: W7(
      "شركات التأمين المعنية بكل طرف بعد توقيع الطرفين على الوثيقة",
      "Compagnies d'assurance respectives des deux parties après signature conjointe du document",
      "Respective insurance companies of both parties after joint signature of the document",
      "Compañías aseguradoras de ambas partes tras la firma conjunta del documento",
      "Compagnie assicurative delle due parti dopo la firma congiunta del documento",
      "Versicherungen beider Parteien nach gegenseitiger Unterzeichnung des Dokuments",
      "Страховые компании обеих сторон после совместного подписания документа"
    ),
    keywords: ["حادثة بين طرفين", "constat amiable", "accident statement", "تأمين", "assurance"],
    popular: true,
  },
  {
    id: "tas-vehicule-non-gage",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بأن السيارة خالية من كل رهن",
      "Déclaration sur l'honneur de véhicule libre de toute opposition",
      "Sworn declaration of vehicle free of any lien",
      "Declaración jurada de vehículo libre de cargas",
      "Dichiarazione giurata di veicolo libero da gravami",
      "Eidesstattliche Erklärung über ein lastenfreies Fahrzeug",
      "Заявление под присягой об отсутствии обременений автомобиля"
    ),
    desc: D7(
      "تصريح يؤكد فيه البائع أن سيارته غير مرهونة ولا محل نزاع قضائي أو إداري.",
      "Déclaration par laquelle le vendeur atteste que son véhicule n'est ni gagé ni objet d'un litige judiciaire ou administratif.",
      "Declaration whereby the seller attests that the vehicle is neither pledged nor subject to any judicial or administrative dispute.",
      "Declaración mediante la cual el vendedor acredita que su vehículo no está embargado ni sometido a litigio judicial o administrativo.",
      "Dichiarazione con cui il venditore attesta che il veicolo non è gravato né oggetto di contenzioso giudiziario o amministrativo.",
      "Erklärung, mit der der Verkäufer bestätigt, dass das Fahrzeug weder verpfändet noch Gegenstand eines gerichtlichen oder behördlichen Streits ist.",
      "Заявление, которым продавец подтверждает, что автомобиль не заложен и не является предметом судебного или административного спора."
    ),
    where: W7(
      "يوجه التصريح إلى المشتري ويودع ضمن ملف نقل البطاقة الرمادية",
      "Destinée à l'acquéreur et déposée dans le dossier de transfert de la carte grise",
      "Addressed to the buyer and filed within the registration card transfer file",
      "Dirigida al comprador y depositada en el expediente de transferencia del permiso de circulación",
      "Rivolto all'acquirente e depositato nella pratica di trasferimento della carta di circolazione",
      "An den Käufer gerichtet und im Dossier der Fahrzeugscheinübertragung hinterlegt",
      "Адресуется покупателю и прилагается к делу о переоформлении техпаспорта"
    ),
    keywords: ["بيع سيارة", "véhicule non gagé", "vehicle free of lien", "رهن", "opposition"],
  },
  {
    id: "tas-non-possession-vehicule",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم التوفر على سيارة",
      "Déclaration sur l'honneur de non-possession de véhicule",
      "Sworn declaration of not owning a vehicle",
      "Declaración jurada de no posesión de vehículo",
      "Dichiarazione giurata di non possesso di veicolo",
      "Eidesstattliche Erklärung über das Nichtbesitzen eines Fahrzeugs",
      "Заявление под присягой об отсутствии автомобиля в собственности"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح عدم امتلاكه أي مركبة لأغراض إعفاء أو ملف إداري.",
      "Déclaration par laquelle l'intéressé atteste ne posséder aucun véhicule à des fins d'exonération ou de dossier administratif.",
      "Declaration whereby the person attests owning no vehicle for exemption or administrative file purposes.",
      "Declaración mediante la cual el interesado acredita no poseer vehículo alguno a efectos de exención o expediente administrativo.",
      "Dichiarazione con cui l'interessato attesta di non possedere alcun veicolo ai fini di esenzione o pratiche amministrative.",
      "Erklärung, mit der die Person bestätigt, für Befreiungs- oder Verwaltungszwecke kein Fahrzeug zu besitzen.",
      "Заявление, которым лицо подтверждает отсутствие автомобиля в собственности для освобождения или административного дела."
    ),
    where: W7(
      "الإدارة الجبائية أو الجهة الطالبة للإعفاء أو ملف النقل المدرسي",
      "Administration fiscale ou organisme demandeur de l'exonération ou du dossier de transport scolaire",
      "Tax administration or body requesting the exemption or the school transport file",
      "Administración fiscal u organismo solicitante de la exención o del expediente de transporte escolar",
      "Amministrazione fiscale o ente richiedente l'esenzione o il trasporto scolastico",
      "Steuerverwaltung oder die Befreiung bzw. das Schultransport-Dossier verlangende Stelle",
      "Налоговое ведомство или орган, запрашивающий освобождение или дело о школьном транспорте"
    ),
    keywords: ["عدم امتلاك سيارة", "non-possession de véhicule", "no vehicle ownership", "إعفاء", "exonération"],
  },
  {
    id: "tas-perte-plaques",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بضياع لوحات الترقيم",
      "Déclaration sur l'honneur de perte des plaques d'immatriculation",
      "Sworn declaration of loss of registration plates",
      "Declaración jurada de pérdida de placas de matrícula",
      "Dichiarazione giurata di smarrimento delle targhe",
      "Eidesstattliche Erklärung über den Verlust der Kennzeichenschilder",
      "Заявление под присягой об утере номерных знаков"
    ),
    desc: D7(
      "تصريح يؤكد فيه مالك السيارة ضياع أو سرقة لوحات ترقيمها لطلب نظير جديد.",
      "Déclaration par laquelle le propriétaire confirme la perte ou le vol des plaques de son véhicule afin d'obtenir des duplicatas.",
      "Declaration whereby the owner confirms the loss or theft of the vehicle's plates in order to obtain replacements.",
      "Declaración mediante la cual el propietario confirma la pérdida o robo de las placas para obtener duplicados.",
      "Dichiarazione con cui il proprietario conferma la perdita o il furto delle targhe per ottenerne i duplicati.",
      "Erklärung, mit der der Halter Verlust oder Diebstahl der Kennzeichenschilder bestätigt, um Ersatzschilder zu erhalten.",
      "Заявление, которым владелец подтверждает утерю или кражу номерных знаков для получения дубликатов."
    ),
    where: W7(
      "وكالات NARSA مع تصريح الشرطة في حالة السرقة المثبتة",
      "Agences NARSA, avec déclaration de police en cas de vol établi",
      "NARSA agencies, with a police report in case of confirmed theft",
      "Agencias NARSA, con denuncia policial en caso de robo acreditado",
      "Agenzie NARSA, con denuncia di polizia in caso di furto accertato",
      "NARSA-Agenturen, bei nachgewiesenem Diebstahl mit Polizeianzeige",
      "Агентства NARSA со справкой полиции при подтверждённой краже"
    ),
    keywords: ["لوحات الترقيم", "plaques d'immatriculation", "registration plates", "ضياع", "NARSA"],
  },
  {
    id: "tas-retrait-circulation",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالسحب النهائي للسيارة من التداول",
      "Déclaration sur l'honneur de retrait définitif de la circulation",
      "Sworn declaration of definitive withdrawal from circulation",
      "Declaración jurada de retiro definitivo de la circulación",
      "Dichiarazione giurata di ritiro definitivo dalla circolazione",
      "Eidesstattliche Erklärung über die endgültige Stilllegung",
      "Заявление под присягой об окончательном снятии с учёта"
    ),
    desc: D7(
      "تصريح يؤكد فيه مالك سيارة أصبحت خارج الاستعمال سحبها النهائي من التداول.",
      "Déclaration par laquelle le propriétaire d'un véhicule hors d'usage confirme son retrait définitif de la circulation.",
      "Declaration whereby the owner of a vehicle out of use confirms its definitive withdrawal from circulation.",
      "Declaración mediante la cual el propietario de un vehículo fuera de uso confirma su retiro definitivo de la circulación.",
      "Dichiarazione con cui il proprietario di un veicolo fuori uso ne conferma il ritiro definitivo dalla circolazione.",
      "Erklärung, mit der der Halter eines unbrauchbaren Fahrzeugs dessen endgültige Stilllegung bestätigt.",
      "Заявление, которым владелец неработоспособного автомобиля подтверждает его окончательное снятие с движения."
    ),
    where: W7(
      "وكالات NARSA مع إرجاع البطاقة الرمادية ولوحات الترقيم",
      "Agences NARSA, avec restitution de la carte grise et des plaques d'immatriculation",
      "NARSA agencies, with return of the registration card and plates",
      "Agencias NARSA, con devolución del permiso de circulación y las placas",
      "Agenzie NARSA, con restituzione della carta di circolazione e delle targhe",
      "NARSA-Agenturen unter Rückgabe von Fahrzeugschein und Kennzeichenschildern",
      "Агентства NARSA со сдачей техпаспорта и номерных знаков"
    ),
    keywords: ["سحب من التداول", "retrait de la circulation", "withdrawal from circulation", "إخراج من الخدمة", "mise à la casse"],
  },

  // ─── Social & divers ───
  {
    id: "tas-dossier-anapec",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف لملف ANAPEC",
      "Déclaration sur l'honneur pour dossier ANAPEC",
      "Sworn declaration for an ANAPEC file",
      "Declaración jurada para expediente ANAPEC",
      "Dichiarazione giurata per dossier ANAPEC",
      "Eidesstattliche Erklärung für ein ANAPEC-Dossier",
      "Заявление под присягой для дела ANAPEC"
    ),
    desc: D7(
      "تصريح يلخص فيه طالب الشغل وضعيته المهنية ومستواه الدراسي ضمن ملف التشغيل.",
      "Déclaration dans laquelle le demandeur d'emploi résume sa situation professionnelle et son niveau d'études pour son dossier d'emploi.",
      "Declaration in which the job seeker summarises their professional situation and education level for the employment file.",
      "Declaración en la que el demandante de empleo resume su situación profesional y nivel de estudios para el expediente de empleo.",
      "Dichiarazione in cui il richiedente lavoro riassume la propria situazione professionale e il livello di studi per il dossier.",
      "Erklärung, in der der Arbeitssuchende seine berufliche Situation und Bildung für das Vermittlungsdossier zusammenfasst.",
      "Заявление, в котором соискатель излагает профессиональную ситуацию и уровень образования для дела о трудоустройстве."
    ),
    where: W7(
      "وكالة ANAPEC محل التسجيل عند فتح ملف طلب الشغل",
      "Agence ANAPEC de rattachement lors de l'ouverture du dossier de demande d'emploi",
      "Local ANAPEC agency when opening the job-seeker file",
      "Agencia ANAPEC de adscripción al abrir el expediente de demanda de empleo",
      "Agenzia ANAPEC di riferimento all'apertura della pratica di ricerca lavoro",
      "Zuständige ANAPEC-Agentur bei Eröffnung der Bewerberakte",
      "Местное агентство ANAPEC при открытии дела соискателя"
    ),
    keywords: ["ANAPEC", "طلب الشغل", "recherche d'emploi", "job seeking", "ملف التشغيل"],
    authority: "anapec",
  },
  {
    id: "tas-dossier-rsu",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف لملف السجل الاجتماعي الموحد",
      "Déclaration sur l'honneur pour dossier RSU",
      "Sworn declaration for an RSU file",
      "Declaración jurada para expediente RSU",
      "Dichiarazione giurata per dossier RSU",
      "Eidesstattliche Erklärung für ein RSU-Dossier",
      "Заявление под присягой для дела RSU"
    ),
    desc: D7(
      "تصريح شامل يؤكد فيه المعني بالأمر تركيبة أسره وسكنه ومداخيله عند التسجيل بالسجل الموحد.",
      "Déclaration par laquelle l'intéressé confirme la composition, le logement et les revenus de son ménage lors de l'inscription au registre.",
      "Declaration whereby the person confirms household composition, housing and income when enrolling in the registry.",
      "Declaración mediante la cual el interesado confirma la composición, vivienda e ingresos de su hogar al inscribirse en el registro.",
      "Dichiarazione con cui l'interessato conferma composizione, alloggio e redditi del nucleo all'iscrizione al registro.",
      "Erklärung, mit der die Person Haushaltszusammensetzung, Wohnung und Einkommen bei der Registrierung bestätigt.",
      "Заявление, которым лицо подтверждает состав, жильё и доходы домохозяйства при регистрации в реестре."
    ),
    where: W7(
      "مراكز التسجيل المعتمدة (مراكز الصحة، الجماعات) أو منصات التسجيل عن بعد",
      "Centres d'inscription habilités (centres de santé, communes) ou plateformes d'inscription à distance",
      "Accredited registration centres (health centres, communes) or remote registration platforms",
      "Centros de inscripción acreditados (centros de salud, comunas) o plataformas de registro a distancia",
      "Centri di iscrizione abilitati (centri sanitari, comuni) o piattaforme di registrazione a distanza",
      "Zugelassene Anmeldezentren (Gesundheitszentren, Gemeinden) oder Online-Anmeldeplattformen",
      "Уполномоченные центры регистрации (медцентры, коммуны) или платформы дистанционной записи"
    ),
    keywords: ["السجل الاجتماعي الموحد", "RSU", "Unified Social Registry", "الدعم الاجتماعي", "aide sociale"],
  },
  {
    id: "tas-absence-couverture",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بانعدام التغطية الاجتماعية",
      "Déclaration sur l'honneur d'absence de couverture sociale",
      "Sworn declaration of absence of health coverage",
      "Declaración jurada de ausencia de cobertura social",
      "Dichiarazione giurata di assenza di copertura sanitaria",
      "Eidesstattliche Erklärung über fehlende Krankenversicherung",
      "Заявление под присягой об отсутствии медицинской защиты"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح عدم انتمائه لأي نظام تأمين إجباري لتبرير ولوج برنامج تضامن.",
      "Déclaration par laquelle l'intéressé atteste ne relever d'aucun régime d'assurance obligatoire pour justifier l'accès au programme Tadamon.",
      "Declaration whereby the person attests belonging to no compulsory insurance scheme to justify access to the Tadamon programme.",
      "Declaración mediante la cual el interesado acredita no pertenecer a ningún régimen obligatorio para acceder al programa Tadamon.",
      "Dichiarazione con cui l'interessato attesta di non appartenere ad alcun regime assicurativo obbligatorio per accedere al programma Tadamon.",
      "Erklärung, mit der die Person bestätigt, keinem Pflichtversicherungssystem anzugehören, um Zugang zum Tadamon-Programm zu erhalten.",
      "Заявление, которым лицо подтверждает отсутствие в системе обязательного страхования для доступа к программе Tadamon."
    ),
    where: W7(
      "مسطرة التسجيل في AMO تضامن عبر البوابة الرقمية أو الوكالات المعتمدة",
      "Procédure d'inscription à l'AMO Tadamon via le portail numérique ou les guichets habilités",
      "AMO Tadamon registration procedure via the digital portal or accredited desks",
      "Procedimiento de inscripción en AMO Tadamon vía portal digital o ventanillas acreditadas",
      "Procedura di iscrizione all'AMO Tadamon tramite portale digitale o sportelli abilitati",
      "AMO-Tadamon-Anmeldeverfahren über das digitale Portal oder zugelassene Schalter",
      "Процедура регистрации в AMO Tadamon через цифровой портал или уполномоченные пункты"
    ),
    keywords: ["التغطية الاجتماعية", "couverture sociale", "health coverage", "تضامن", "Tadamon"],
    authority: "amotadamon",
  },
  {
    id: "tas-situation-amo-tadamon",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالوضعية لملف AMO تضامن",
      "Déclaration sur l'honneur de situation pour dossier AMO Tadamon",
      "Sworn declaration of situation for an AMO Tadamon file",
      "Declaración jurada de situación para expediente AMO Tadamon",
      "Dichiarazione giurata di situazione per dossier AMO Tadamon",
      "Eidesstattliche Erklärung der Verhältnisse für ein AMO-Tadamon-Dossier",
      "Заявление под присягой о положении для дела AMO Tadamon"
    ),
    desc: D7(
      "تصريح يفصح فيه المصرح عن وضعيته الأسرية والسكنية والمالية لملف التأمين الصحي التضامني.",
      "Déclaration par laquelle l'intéressé expose sa situation familiale, résidentielle et financière pour le dossier d'assurance santé solidaire.",
      "Declaration whereby the person discloses their family, housing and financial situation for the solidarity health insurance file.",
      "Declaración mediante la cual el interesado expone su situación familiar, residencial y financiera para el expediente del seguro solidario.",
      "Dichiarazione con cui l'interessato espone la situazione familiare, abitativa e finanziaria per il dossier assicurativo solidale.",
      "Erklärung, in der die Person ihre familiäre, wohnliche und finanzielle Lage für das solidarische Krankenversicherungsverfahren offenlegt.",
      "Заявление, в котором лицо раскрывает семейное, жилищное и финансовое положение для дела солидарного медстрахования."
    ),
    where: W7(
      "البوابة الرقمية لـAMO تضامن أو المراكز الصحية المندمجة",
      "Portail numérique AMO Tadamon ou centres de santé intégrés",
      "AMO Tadamon digital portal or integrated health centres",
      "Portal digital AMO Tadamon o centros de salud integrados",
      "Portale digitale AMO Tadamon o centri sanitari integrati",
      "Digitales AMO-Tadamon-Portal oder integrierte Gesundheitszentren",
      "Цифровой портал AMO Tadamon или интегрированные медцентры"
    ),
    keywords: ["AMO تضامن", "AMO Tadamon", "الوضعية الاجتماعية", "situation sociale", "assurance santé"],
  },
  {
    id: "tas-maladie-assurance",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بمرض (التأمين التكميلي)",
      "Déclaration sur l'honneur de maladie (assurance complémentaire)",
      "Sworn declaration of illness (supplementary insurance)",
      "Declaración jurada de enfermedad (seguro complementario)",
      "Dichiarazione giurata di malattia (assicurazione integrativa)",
      "Eidesstattliche Erklärung über eine Erkrankung (Zusatzversicherung)",
      "Заявление под присягой о болезни (дополнительная страховка)"
    ),
    desc: D7(
      "تصريح يصرح فيه المؤمن له بمرض أو حالة صحية سابقة عند الالتحاق بتغطية تكميلية.",
      "Déclaration par laquelle l'assuré déclare une maladie ou un antécédent de santé lors de l'adhésion à une couverture complémentaire.",
      "Declaration whereby the insured discloses an illness or medical history when joining supplementary coverage.",
      "Declaración mediante la cual el asegurado declara una enfermedad o antecedente de salud al adherirse a una cobertura complementaria.",
      "Dichiarazione con cui l'assicurato dichiara una malattia o pregresso patologico all'adesione a una copertura integrativa.",
      "Erklärung, mit der der Versicherte beim Abschluss einer Zusatzdeckung eine Krankheit oder Vorerkrankung angibt.",
      "Заявление, в котором застрахованный раскрывает болезнь или анамнез при присоединении к дополнительному покрытию."
    ),
    where: W7(
      "شركة التأمين أو صندوق التغطية التكميلية المعني بالملف",
      "Compagnie d'assurance ou caisse de couverture complémentaire concernée par le dossier",
      "Insurance company or supplementary coverage fund concerned by the file",
      "Compañía de seguros o caja de cobertura complementaria concerniente",
      "Compagnia assicurativa o cassa di copertura integrativa interessata",
      "Versicherungsgesellschaft oder Zusatzkasse im betreffenden Verfahren",
      "Страховая компания или фонд дополнительного покрытия по данному делу"
    ),
    keywords: ["مرض", "maladie", "illness", "تأمين تكميلي", "assurance complémentaire"],
  },
  {
    id: "tas-nouveau-ne-assure",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بإضافة مولود جديد",
      "Déclaration sur l'honneur d'ajout d'un nouveau-né",
      "Sworn declaration of adding a newborn",
      "Declaración jurada de alta de un recién nacido",
      "Dichiarazione giurata di aggiunta di un neonato",
      "Eidesstattliche Erklärung über die Anmeldung eines Neugeborenen",
      "Заявление под присягой о добавлении новорождённого"
    ),
    desc: D7(
      "تصريح يخبر فيه المؤمن له صندوقه بميلاد مولود جديد لتسجيله كمستفيد من التغطية.",
      "Déclaration par laquelle l'assuré informe sa caisse de la naissance d'un enfant afin de l'immatriculer comme ayant droit.",
      "Declaration whereby the insured informs their fund of a child's birth in order to register the newborn as a beneficiary.",
      "Declaración mediante la cual el asegurado informa a su caja del nacimiento de un hijo para registrarlo como beneficiario.",
      "Dichiarazione con cui l'assicurato informa la propria cassa della nascita di un figlio per iscriverlo come beneficiario.",
      "Erklärung, mit der der Versicherte seine Kasse über die Geburt eines Kindes informiert, um es als Berechtigten anzumelden.",
      "Заявление, которым застрахованный уведомляет свой фонд о рождении ребёнка для регистрации его как выгодоприобретателя."
    ),
    where: W7(
      "أقرب وكالة CNSS أو عبر بوابة MaCNSS داخل الأجل القانوني للتصريح",
      "Agence CNSS la plus proche ou via le portail MaCNSS, dans le délai réglementaire de déclaration",
      "Nearest CNSS agency or via the MaCNSS portal, within the legal declaration period",
      "Agencia CNSS más cercana o vía portal MaCNSS, dentro del plazo reglamentario",
      "Agenzia CNSS più vicina o tramite portale MaCNSS, entro il termine di legge",
      "Nächste CNSS-Agentur oder über das MaCNSS-Portal innerhalb der gesetzlichen Frist",
      "Ближайшее агентство CNSS или через портал MaCNSS в установленный законом срок"
    ),
    keywords: ["مولود جديد", "nouveau-né", "newborn", "مستفيد", "ayants droit"],
    authority: "cnss",
  },
  {
    id: "tas-deces-conjoint",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بوفاة الزوج",
      "Déclaration sur l'honneur de décès du conjoint",
      "Sworn declaration of the spouse's death",
      "Declaración jurada de fallecimiento del cónyuge",
      "Dichiarazione giurata di decesso del coniuge",
      "Eidesstattliche Erklärung über den Tod des Ehegatten",
      "Заявление под присягой о смерти супруга"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح وفاة زوجه للاستفادة من معاش الأرملة أو الدعم الاجتماعي.",
      "Déclaration par laquelle l'intéressé confirme le décès de son conjoint afin de bénéficier d'une pension ou d'un soutien social.",
      "Declaration whereby the person confirms the spouse's death in order to receive a pension or social support.",
      "Declaración mediante la cual el interesado confirma el fallecimiento de su cónyuge para percibir pensión o apoyo social.",
      "Dichiarazione con cui l'interessato conferma il decesso del coniuge per beneficiare di pensione o sostegno sociale.",
      "Erklärung, mit der die Person den Tod des Ehegatten bestätigt, um Rente oder soziale Unterstützung zu erhalten.",
      "Заявление, которым лицо подтверждает смерть супруга для получения пенсии или соцподдержки."
    ),
    where: W7(
      "صندوق التقاعد أو الضمان الاجتماعي مع تقديم رسم الوفاة",
      "Caisse de retraite ou de sécurité sociale, avec production de l'acte de décès",
      "Pension or social security fund, with production of the death certificate",
      "Caja de pensiones o seguridad social, con presentación del acta de defunción",
      "Cassa pensionistica o previdenza sociale, con produzione dell'atto di morte",
      "Renten- oder Sozialversicherungskasse unter Vorlage der Sterbeurkunde",
      "Пенсионный фонд или соцстрахование со свидетельством о смерти"
    ),
    keywords: ["وفاة الزوج", "décès du conjoint", "spouse's death", "معاش الأرملة", "pension"],
    authority: "cnss",
  },
  {
    id: "tas-occupation-gratuite",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بسكنى محلة بالمجان",
      "Déclaration sur l'honneur d'occupation d'un logement à titre gratuit",
      "Sworn declaration of occupying a dwelling free of charge",
      "Declaración jurada de ocupación de vivienda a título gratuito",
      "Dichiarazione giurata di occupazione di alloggio a titolo gratuito",
      "Eidesstattliche Erklärung über die unentgeltliche Wohnnutzung",
      "Заявление под присягой о безвозмездном пользовании жилым помещением"
    ),
    desc: D7(
      "تصريح يؤكد فيه الساكن أنه ينتفع بمحله السكني بالمجان دون أداء أي واجب كراء.",
      "Déclaration par laquelle l'occupant atteste jouir de son logement gratuitement sans paiement d'aucun loyer.",
      "Declaration whereby the occupant attests enjoying the dwelling free of charge without paying any rent.",
      "Declaración mediante la cual el ocupante acredita disfrutar de la vivienda gratuitamente sin pagar alquiler.",
      "Dichiarazione con cui l'occupante attesta di godere dell'alloggio gratuitamente senza pagamento di canone.",
      "Erklärung, mit der der Bewohner bestätigt, die Wohnung unentgeltlich ohne Mietzahlung zu nutzen.",
      "Заявление, которым проживающий подтверждает безвозмездное пользование жильём без арендной платы."
    ),
    where: W7(
      "الإدارة الطالبة (ملف اجتماعي، فاتورة الماء والكهرباء) مع شهادة المالك عند الحاجة",
      "Administration requérante (dossier social, facture d'eau et d'électricité), avec attestation du propriétaire si nécessaire",
      "Requesting administration (social file, utility bill), with the owner's attestation if required",
      "Administración solicitante (expediente social, factura de agua y luz), con certificado del propietario si procede",
      "Amministrazione richiedente (pratica sociale, bolletta acqua e luce), con attestazione del proprietario se necessaria",
      "Anfordernde Behörde (Sozialdossier, Versorgungsrechnung), bei Bedarf mit Bescheinigung des Eigentümers",
      "Запрашивающая организация (социальное дело, счёт за коммунальные услуги) со справкой собственника при необходимости"
    ),
    keywords: ["سكنى بالمجان", "occupation gratuite", "free occupancy", "بدون كراء", "sans loyer"],
  },
  {
    id: "tas-heberge-gratuit",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالسكنى لدى الغير مجانا",
      "Déclaration sur l'honneur d'hébergement à titre gratuit",
      "Sworn declaration of being hosted free of charge",
      "Declaración jurada de alojamiento a título gratuito",
      "Dichiarazione giurata di ospitalità a titolo gratuito",
      "Eidesstattliche Erklärung über unentgeltliche Beherbergung",
      "Заявление под присягой о бесплатном проживании у третьего лица"
    ),
    desc: D7(
      "تصريح يؤكد فيه المصرح إقامته لدى شخص آخر مجانا دون عقد كراء ولا واجب مالي.",
      "Déclaration par laquelle l'intéressé atteste résider chez un tiers gratuitement, sans bail ni obligation financière.",
      "Declaration whereby the person attests residing with a third party free of charge, without a lease or financial obligation.",
      "Declaración mediante la cual el interesado acredita residir con un tercero gratuitamente, sin contrato ni obligación económica.",
      "Dichiarazione con cui l'interessato attesta di risiedere presso un terzo gratuitamente, senza contratto né oneri finanziari.",
      "Erklärung, mit der die Person bestätigt, unentgeltlich bei einem Dritten zu wohnen, ohne Mietvertrag oder Zahlungspflicht.",
      "Заявление, которым лицо подтверждает бесплатное проживание у третьего лица без договора аренды и платежей."
    ),
    where: W7(
      "الإدارة أو البنك الطالب للملف مع شهادة المضيف عند الطلب",
      "Administration ou banque requérante du dossier, avec attestation de l'hébergeant à l'appui",
      "Administration or bank requesting the file, with the host's supporting attestation",
      "Administración o banco solicitante del expediente, con certificado del anfitrión",
      "Amministrazione o banca richiedente, con attestazione dell'ospitante a supporto",
      "Behörde oder Bank, die das Dossier verlangt, mit stützender Bescheinigung des Gastgebers",
      "Организация или банк, запрашивающие дело, со справкой принимающей стороны"
    ),
    keywords: ["السكنى لدى الغير", "hébergement gratuit", "hosted free of charge", "مضيف", "hébergeant"],
  },
  {
    id: "tas-mobilite-reduite",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بالحركة المحدودة",
      "Déclaration sur l'honneur de mobilité réduite",
      "Sworn declaration of reduced mobility",
      "Declaración jurada de movilidad reducida",
      "Dichiarazione giurata di mobilità ridotta",
      "Eidesstattliche Erklärung über eingeschränkte Mobilität",
      "Заявление под присягой об ограниченной подвижности"
    ),
    desc: D7(
      "تصريح يرفق بشهادة طبية يؤكد فيه المعني بالأمر حاجته لبطاقة الوقوف المخصصة لذوي الإعاقة.",
      "Déclaration, adossée à un certificat médical, par laquelle l'intéressé confirme son besoin d'une carte de stationnement réservée.",
      "Declaration backed by a medical certificate whereby the person confirms the need for a reserved parking card.",
      "Declaración, acompañada de certificado médico, mediante la cual el interesado confirma su necesidad de tarjeta de estacionamiento reservado.",
      "Dichiarazione, corredata da certificato medico, con cui l'interessato conferma la necessità della tessera di parcheggio riservato.",
      "Erklärung mit ärztlichem Attest, mit der die Person den Bedarf an einer Sonderparkkarte bestätigt.",
      "Заявление с медицинской справкой, которым лицо подтверждает необходимость парковочной карточки для инвалидов."
    ),
    where: W7(
      "الجماعة أو المصلحة المكلفة بتسليم بطاقة الوقوف بطلب من المعني بالأمر",
      "Commune ou service chargé de délivrer la carte de stationnement, sur demande de l'intéressé",
      "Commune or service in charge of issuing the parking card, upon the person's request",
      "Comuna o servicio encargado de emitir la tarjeta de estacionamiento, a petición del interesado",
      "Comune o servizio deputato al rilascio della tessera di parcheggio, su richiesta dell'interessato",
      "Gemeinde oder zuständige Stelle für die Ausstellung der Parkkarte auf Antrag",
      "Коммуна или служба, выдающая парковочную карточку, по заявлению лица"
    ),
    keywords: ["الحركة المحدودة", "mobilité réduite", "reduced mobility", "بطاقة الوقوف", "carte de stationnement"],
  },
  {
    id: "tas-non-logement-social",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم الاستفادة من سكن اجتماعي",
      "Déclaration sur l'honneur de non-bénéfice d'un logement social",
      "Sworn declaration of never benefiting from social housing",
      "Declaración jurada de no haberse beneficiado de vivienda social",
      "Dichiarazione giurata di non godimento di alloggio sociale",
      "Eidesstattliche Erklärung über den Erhalt keiner Sozialwohnung",
      "Заявление под присягой о неполучении социального жилья"
    ),
    desc: D7(
      "تصريح يؤكد فيه المترشح لبرنامج سكني أنه لم يستفد سابقا من أي سكن اجتماعي مدعوم.",
      "Déclaration par laquelle le candidat à un programme de logement atteste n'avoir jamais bénéficié d'un logement social subventionné.",
      "Declaration whereby an applicant to a housing programme attests never having benefited from a subsidised social dwelling.",
      "Declaración mediante la cual el candidato a un programa de vivienda acredita no haberse beneficiado nunca de vivienda social subvencionada.",
      "Dichiarazione con cui il candidato a un programma abitativo attesta di non avere mai goduto di un alloggio sociale sovvenzionato.",
      "Erklärung, mit der der Bewerber eines Wohnungsprogramms bestätigt, nie eine geförderte Sozialwohnung erhalten zu haben.",
      "Заявление, которым кандидат на жилищную программу подтверждает, что ранее не получал субсидируемое социальное жильё."
    ),
    where: W7(
      "الجهة المشغلة للبرنامج السكني المعني عند إيداع ترشيح الملف",
      "Organisme opérateur du programme de logement concerné lors du dépôt de la candidature",
      "Operator of the housing programme concerned when the application is filed",
      "Organismo operador del programa de vivienda al presentar la candidatura",
      "Ente gestore del programma abitativo al deposito della candidatura",
      "Betreiber des betreffenden Wohnungsprogramms bei Antragstellung",
      "Оператор соответствующей жилищной программы при подаче заявки"
    ),
    keywords: ["السكن الاجتماعي", "logement social", "social housing", "الدعم السكني", "candidature"],
  },
  {
    id: "tas-hebergement-etranger",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف باستضافة مواطن أجنبي",
      "Déclaration sur l'honneur d'hébergement d'un ressortissant étranger",
      "Sworn declaration of hosting a foreign national",
      "Declaración jurada de alojamiento de un ciudadano extranjero",
      "Dichiarazione giurata di ospitalità di un cittadino straniero",
      "Eidesstattliche Erklärung über die Beherbergung eines Ausländers",
      "Заявление под присягой о приёме иностранного гражданина"
    ),
    desc: D7(
      "تصريح يؤكد فيه المضيف المغربي استضافته لشخص أجنبي وتكفله بمؤونته طيلة مدة الزيارة.",
      "Déclaration par laquelle l'hôte marocain confirme héberger un étranger et subvenir à ses besoins durant tout le séjour.",
      "Declaration whereby the Moroccan host confirms accommodating a foreign national and covering their needs throughout the stay.",
      "Declaración mediante la cual el anfitrión marroquí confirma alojar a un extranjero y cubrir sus necesidades durante toda la estancia.",
      "Dichiarazione con cui l'ospite marocchino conferma di alloggiare uno straniero e sostenerne le esigenze durante il soggiorno.",
      "Erklärung, mit der der marokkanische Gastgeber bestätigt, einen Ausländer aufzunehmen und während des gesamten Aufenthalts zu versorgen.",
      "Заявление, которым марокканский принимающий подтверждает размещение иностранца и обеспечение его нужд на весь срок пребывания."
    ),
    where: W7(
      "القنصلية أو السفارة المعنية بملف تأشيرة الضيف قبل التأشير",
      "Consulat ou ambassade compétent pour le dossier de visa de l'invité, avant la délivrance",
      "Consulate or embassy handling the guest's visa file, before issuance",
      "Consulado o embajada competente en el expediente de visado del invitado",
      "Consolato o ambasciata competente per il visto dell'ospite, prima del rilascio",
      "Konsulat oder Botschaft, die das Visumdossier des Gastes führt, vor Erteilung",
      "Консульство или посольство, ведущее визовое дело гостя, до выдачи визы"
    ),
    keywords: ["استضافة أجنبي", "hébergement étranger", "hosting a foreigner", "تأشيرة", "visa"],
  },
  {
    id: "tas-indigence",
    cat: "tasarih",
    title: T7(
      "تصريح بالشرف بعدم القدرة على الأداء",
      "Déclaration sur l'honneur d'indigence",
      "Sworn declaration of indigence",
      "Declaración jurada de indigencia",
      "Dichiarazione giurata di indigenza",
      "Eidesstattliche Erklärung der Mittellosigkeit",
      "Заявление под присягой о неплатёжеспособности"
    ),
    desc: D7(
      "تصريح يؤكد فيه المعني بالأمر عجزه عن تحمل مصاريف قضائية أو صحية للاستفادة من المساعدة.",
      "Déclaration par laquelle l'intéressé atteste son incapacité à supporter des frais judiciaires ou médicaux pour bénéficier de l'assistance.",
      "Declaration whereby the person attests being unable to bear judicial or medical costs in order to qualify for assistance.",
      "Declaración mediante la cual el interesado acredita su incapacidad de asumir gastos judiciales o médicos para beneficiarse de la asistencia.",
      "Dichiarazione con cui l'interessato attesta l'impossibilità di sostenere spese giudiziarie o mediche per beneficiare dell'assistenza.",
      "Erklärung, mit der die Person bestätigt, gerichtliche oder medizinische Kosten nicht tragen zu können, um Hilfe zu erhalten.",
      "Заявление, которым лицо подтверждает неспособность нести судебные или медицинские расходы для получения помощи."
    ),
    where: W7(
      "المحكمة أو المؤسسة الاستشفائية عند طلب المساعدة القضائية أو الإعفاء من الأداء",
      "Tribunal ou établissement hospitalier lors d'une demande d'assistance judiciaire ou d'exonération des frais",
      "Court or hospital when applying for legal aid or exemption from fees",
      "Tribunal u hospital al solicitar asistencia judicial o exención de gastos",
      "Tribunale o struttura ospedaliera per richiedere assistenza giudiziaria o esenzione spese",
      "Gericht oder Krankenhaus bei Antrag auf Rechtshilfe oder Kostenbefreiung",
      "Суд или больница при подаче ходатайства о судебной помощи или освобождении от оплаты"
    ),
    keywords: ["عدم القدرة على الأداء", "indigence", "المساعدة القضائية", "aide judiciaire", "legal aid"],
  },
];
