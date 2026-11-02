// Association & cooperative forms — founding files, general assemblies,
// subsidies, sports and cultural clubs. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsJamaiyat: DocumentItem[] = [
  // ─── تأسيس الجمعية وتسييرها · Founding & administration ───
  {
    id: "jam-liqa-ittila-wathaiq",
    cat: "jamaiyat",
    title: T7(
      "طلب عقد لقاء للاطلاع على الوثائق الإدارية والمالية للجمعية",
      "Demande d'audience pour la consultation des documents administratifs et financiers de l'association",
      "Request for a meeting to consult the association's administrative and financial documents",
      "Solicitud de reunión para consultar los documentos administrativos y financieros de la asociación",
      "Richiesta di un incontro per consultare i documenti amministrativi e finanziari dell'associazione",
      "Antrag auf Termin zur Einsicht in die Verwaltungs- und Finanzunterlagen des Vereins",
      "Заявка на встречу для ознакомления с административными и финансовыми документами ассоциации"
    ),
    desc: D7(
      "طلب يقدمه عضو أو منخرط لتحديد موعد للاطلاع على وثائق الجمعية وحساباتها وفق ما ينص عليه القانون الأساسي.",
      "Demande présentée par un membre ou adhérent en vue de fixer un rendez-vous pour consulter les documents et les comptes de l'association.",
      "Request filed by a member to set an appointment to consult the association's documents and accounts under its bylaws.",
      "Solicitud presentada por un miembro para fijar una cita y consultar los documentos y las cuentas de la asociación según sus estatutos.",
      "Richiesta presentata da un membro per fissare un appuntamento e consultare documenti e conti dell'associazione secondo lo statuto.",
      "Antrag eines Mitglieds auf Terminvereinbarung zur Einsicht in Unterlagen und Konten des Vereins gemäß der Satzung.",
      "Заявление члена о назначении встречи для ознакомления с документами и счетами ассоциации согласно уставу."
    ),
    where: W7(
      "رئيس المكتب المسير للجمعية، عبر إيداع الطلب بمقر الجمعية.",
      "Président du bureau de l'association, par dépôt de la demande au siège de l'association.",
      "The association's board president, by filing the request at the association's headquarters.",
      "El presidente de la junta directiva, presentando la solicitud en la sede de la asociación.",
      "Il presidente del direttivo, tramite deposito della richiesta presso la sede dell'associazione.",
      "Der Vorsitzende des Vorstands, durch Einreichung des Antrags im Vereinssitz.",
      "Председатель правления ассоциации — подача заявления в штаб-квартире ассоциации."
    ),
    keywords: ["وثائق الجمعية", "documents de l'association", "association documents", "اطلاع", "consultation"],
  },
  {
    id: "jam-musadaka-qanun-asasi",
    cat: "jamaiyat",
    title: T7(
      "طلب المصادقة على القانون الأساسي",
      "Demande d'homologation des statuts",
      "Request for approval of the bylaws",
      "Solicitud de homologación de los estatutos",
      "Richiesta di omologazione dello statuto",
      "Antrag auf Genehmigung der Satzung",
      "Заявление об утверждении устава"
    ),
    desc: D7(
      "طلب توجهه الجمعية إلى السلطة المختصة قصد المصادقة على قانونها الأساسي أو تعديلاته قبل مباشرة النشاط.",
      "Demande adressée par l'association à l'autorité compétente en vue de l'homologation de ses statuts ou de leurs modifications.",
      "Request submitted by the association to the competent authority to obtain approval of its bylaws or amendments.",
      "Solicitud presentada por la asociación ante la autoridad competente para la homologación de sus estatutos o sus modificaciones.",
      "Richiesta presentata dall'associazione all'autorità competente per l'omologazione dello statuto o delle sue modifiche.",
      "Antrag des Vereins an die zuständige Behörde auf Genehmigung der Satzung oder ihrer Änderungen.",
      "Заявление ассоциации в компетентный орган об утверждении её устава или его изменений."
    ),
    where: W7(
      "السلطة الحكومية المكلفة بقطاع نشاط الجمعية (الوزارة الوصية) عبر مراسلة إدارية.",
      "Autorité gouvernementale chargée du secteur d'activité (ministère de tutelle), par correspondance administrative.",
      "The government authority overseeing the association's sector (supervising ministry), via administrative correspondence.",
      "La autoridad gubernamental del sector de actividad (ministerio de tutela), mediante correspondencia administrativa.",
      "L'autorità governativa competente per il settore (ministero di vigilanza), tramite corrispondenza amministrativa.",
      "Die für den Tätigkeitsbereich zuständige Behörde (Aufsichtsministerium), per Verwaltungsschreiben.",
      "Государственный орган курирующего сектора (профильное министерство) путём официальной переписки."
    ),
    keywords: ["مصادقة", "homologation", "approval", "قانون أساسي", "statuts"],
  },
  {
    id: "jam-laiha-munakhitin",
    cat: "jamaiyat",
    title: T7(
      "لائحة المنخرطين",
      "Liste des adhérents",
      "List of members",
      "Lista de miembros",
      "Elenco degli aderenti",
      "Mitgliederliste",
      "Список членов"
    ),
    desc: D7(
      "وثيقة تحمل أسماء المنخرطين ومعلوماتهم الأساسية وترفق بملف تأسيس الجمعية أو تجديد مكتبها.",
      "Document portant les noms et informations essentielles des adhérents, joint au dossier de création ou de renouvellement du bureau.",
      "Document listing members' names and key details, attached to the association's founding or board renewal file.",
      "Documento con los nombres y datos esenciales de los miembros, adjunto al expediente de creación o de renovación de la junta.",
      "Documento con i nomi e i dati essenziali degli aderenti, allegato al fascicolo di costituzione o di rinnovo del direttivo.",
      "Verzeichnis mit Namen und Eckdaten der Mitglieder, beigefügt zum Gründungs- oder Neuwahldossier des Vereins.",
      "Документ со списком имён и основных данных членов, прилагаемый к делу о создании или обновлении правления."
    ),
    where: W7(
      "تودع لدى المكتب المسير للجمعية وترفق بالملف الموجه إلى السلطة المحلية.",
      "Déposée auprès du bureau de l'association et jointe au dossier adressé à l'autorité locale.",
      "Kept with the association's board and attached to the file sent to the local authority.",
      "Se deposita en la junta directiva y se adjunta al expediente enviado a la autoridad local.",
      "Depositata presso il direttivo dell'associazione e allegata al fascicolo inviato all'autorità locale.",
      "Beim Vereinsvorstand hinterlegt und dem an die Ortsbehörde gesandten Dossier beigefügt.",
      "Хранится у правления ассоциации и прилагается к делу, направляемому в местную власть."
    ),
    keywords: ["لائحة المنخرطين", "liste des adhérents", "members list", "منخرط", "adhérent"],
  },
  {
    id: "jam-jadwal-hissas-ichtirakat",
    cat: "jamaiyat",
    title: T7(
      "جدول حصص الاشتراكات",
      "Tableau des parts de cotisation",
      "Schedule of membership fee shares",
      "Cuadro de las partes de cotización",
      "Tabella delle quote di adesione",
      "Übersicht der Beitragsanteile",
      "Таблица долей членских взносов"
    ),
    desc: D7(
      "جدول يحدد حصص المنخرطين في الاشتراكات السنوية ويوقعه الأعضاء ضمن ملف التأسيس.",
      "Tableau fixant la part de chaque adhérent dans les cotisations annuelles, signé par les membres dans le dossier de création.",
      "Schedule setting each member's share of the annual membership fees, signed by the members within the founding file.",
      "Cuadro que fija la parte de cada miembro en las cuotas anuales, firmado por los miembros en el expediente de creación.",
      "Tabella che stabilisce la quota di ogni aderente nelle contribuzioni annuali, firmata dai membri nel fascicolo di costituzione.",
      "Übersicht, die den Anteil jedes Mitglieds an den Jahresbeiträgen festlegt, von den Mitgliedern im Gründungsdossier unterzeichnet.",
      "Таблица, определяющая долю каждого члена в годовых взносах, подписываемая членами в деле о создании."
    ),
    where: W7(
      "يرفق بالقانون الأساسي ويودع ضمن ملف الجمعية لدى السلطة المحلية المختصة.",
      "Joint aux statuts et déposé dans le dossier de l'association auprès de l'autorité locale compétente.",
      "Attached to the bylaws and filed with the association's dossier at the competent local authority.",
      "Se adjunta a los estatutos y se deposita con el expediente ante la autoridad local competente.",
      "Allegato allo statuto e depositato con il fascicolo presso l'autorità locale competente.",
      "Der Satzung beigefügt und mit dem Dossier bei der zuständigen Ortsbehörde eingereicht.",
      "Прилагается к уставу и сдаётся вместе с делом в компетентную местную власть."
    ),
    keywords: ["حصص الاشتراكات", "parts de cotisation", "membership fees", "اشتراك", "cotisation"],
  },
  {
    id: "jam-ilan-tassis-lil-nashr",
    cat: "jamaiyat",
    title: T7(
      "إعلان تأسيس جمعية للنشر في الجريدة الرسمية",
      "Avis de constitution d'une association destiné à la publication au Bulletin officiel",
      "Notice of association founding for publication in the Official Gazette",
      "Aviso de constitución de una asociación para su publicación en el Boletín Oficial",
      "Avviso di costituzione di un'associazione per la pubblicazione nel Bollettino ufficiale",
      "Bekanntmachung der Vereinsgründung zur Veröffentlichung im Amtsblatt",
      "Объявление о создании ассоциации для публикации в официальной газете"
    ),
    desc: D7(
      "نص رسمي يعده الأعضاء المؤسسون للإعلان عن تأسيس الجمعية قصد نشره في الجريدة الرسمية.",
      "Texte officiel préparé par les membres fondateurs pour annoncer la création de l'association en vue de sa publication au Bulletin officiel.",
      "Official text prepared by the founding members to announce the association's creation for publication in the Official Gazette.",
      "Texto oficial preparado por los miembros fundadores para anunciar la creación de la asociación y su publicación en el Boletín Oficial.",
      "Testo ufficiale preparato dai soci fondatori per annunciare la costituzione dell'associazione e pubblicarlo nel Bollettino ufficiale.",
      "Von den Gründungsmitgliedern verfasster offizieller Text zur Ankündigung der Vereinsgründung für die Veröffentlichung im Amtsblatt.",
      "Официальный текст, подготовленный учредителями для объявления о создании ассоциации с целью публикации в официальной газете."
    ),
    where: W7(
      "مصلحة الجريدة الرسمية لدى الأمانة العامة للحكومة، عبر إيداع نص الإعلان.",
      "Service du Bulletin officiel auprès du Secrétariat général du gouvernement, par dépôt du texte de l'avis.",
      "The Official Gazette office at the Secretariat General of the Government, by filing the notice text.",
      "El servicio del Boletín Oficial de la Secretaría General del Gobierno, depositando el texto del aviso.",
      "Il servizio del Bollettino ufficiale presso la Segreteria generale del governo, tramite deposito del testo.",
      "Das Amtsblattamt beim Generalsekretariat der Regierung, durch Einreichung des Bekanntmachungstextes.",
      "Служба официальной газеты при Генеральном секретариате правительства — подача текста объявления."
    ),
    keywords: ["إعلان التأسيس", "avis de constitution", "founding notice", "الجريدة الرسمية", "Bulletin officiel"],
  },
  {
    id: "jam-tasjil-tadilat-qanun-asasi",
    cat: "jamaiyat",
    title: T7(
      "طلب تسجيل تعديلات على القانون الأساسي",
      "Demande d'enregistrement des modifications des statuts",
      "Request to register amendments to the bylaws",
      "Solicitud de registro de las modificaciones de los estatutos",
      "Richiesta di registrazione delle modifiche dello statuto",
      "Antrag auf Eintragung von Satzungsänderungen",
      "Заявление о регистрации изменений в устав"
    ),
    desc: D7(
      "طلب يودع لدى السلطة المحلية لتسجيل التعديلات المدخلة على القانون الأساسي بعد مصادقة الجمع العام عليها.",
      "Demande déposée auprès de l'autorité locale aux fins d'enregistrement des amendements statutaires adoptés par l'assemblée générale.",
      "Request filed with the local authority to register the statutory amendments adopted by the general meeting.",
      "Solicitud presentada ante la autoridad local para registrar las modificaciones estatutarias aprobadas por la asamblea general.",
      "Richiesta depositata presso l'autorità locale per la registrazione delle modifiche statutarie approvate dall'assemblea generale.",
      "Antrag bei der Ortsbehörde auf Eintragung der von der Generalversammlung beschlossenen Satzungsänderungen.",
      "Заявление, подаваемое в местную власть для регистрации изменений устава, принятых общим собранием."
    ),
    where: W7(
      "السلطة المحلية (قيادة أو باشوية) التابع لها مقر الجمعية، مرفقا بمحضر الجمع العام.",
      "Autorité locale (caïdat ou pachalik) du ressort du siège, accompagné du procès-verbal de l'assemblée générale.",
      "Local authority (caïdat or pasha's office) of the seat district, together with the general meeting's minutes.",
      "Autoridad local (caïdat o pachalik) de la demarcación de la sede, junto con el acta de la asamblea general.",
      "Autorità locale (caïdat o pascialato) di competenza della sede, insieme al verbale dell'assemblea generale.",
      "Örtliche Behörde (Caïdat oder Paschalik) des Sitzbezirks, zusammen mit dem Versammlungsprotokoll.",
      "Местная власть (кайдат или пашалык) по месту регистрации вместе с протоколом общего собрания."
    ),
    keywords: ["تعديل القانون الأساسي", "modification des statuts", "bylaws amendment", "تسجيل", "enregistrement"],
    popular: true,
  },
  {
    id: "jam-mahdar-ijtima-maktab-massir",
    cat: "jamaiyat",
    title: T7(
      "محضر اجتماع المكتب المسير",
      "Procès-verbal de réunion du bureau directeur",
      "Minutes of a board of directors meeting",
      "Acta de la reunión de la junta directiva",
      "Verbale della riunione del comitato direttivo",
      "Protokoll der Vorstandssitzung",
      "Протокол заседания правления"
    ),
    desc: D7(
      "محضر يوثق مداولات وقرارات المكتب المسير في الشؤون الإدارية والمالية للجمعية بين الجمعين العامين.",
      "Procès-verbal consignant les délibérations et décisions du bureau directeur sur les affaires administratives et financières de l'association.",
      "Minutes recording the board's deliberations and decisions on the association's administrative and financial affairs.",
      "Acta que recoge las deliberaciones y decisiones de la junta directiva sobre los asuntos administrativos y financieros de la asociación.",
      "Verbale che documenta le deliberazioni e le decisioni del direttivo sugli affari amministrativi e finanziari dell'associazione.",
      "Protokoll über die Beratungen und Beschlüsse des Vorstands zu Verwaltungs- und Finanzangelegenheiten des Vereins.",
      "Протокол, фиксирующий обсуждения и решения правления по административным и финансовым вопросам ассоциации."
    ),
    where: W7(
      "يحرره الكاتب العام ويوقعه أعضاء المكتب المسير ويحفظ بأرشيف الجمعية.",
      "Rédigé par le secrétaire général et signé par les membres du bureau, conservé aux archives de l'association.",
      "Drafted by the secretary general and signed by the board members, kept in the association's archives.",
      "Lo redacta el secretario general, lo firman los miembros de la junta y se conserva en los archivos de la asociación.",
      "Redatto dal segretario generale e firmato dai membri del direttivo, conservato negli archivi dell'associazione.",
      "Vom Generalsekretär erstellt, von den Vorstandsmitgliedern unterzeichnet, im Vereinsarchiv aufbewahrt.",
      "Составляется генеральным секретарём, подписывается членами правления и хранится в архиве ассоциации."
    ),
    keywords: ["محضر", "procès-verbal", "minutes", "مكتب مسير", "bureau directeur"],
  },
  {
    id: "jam-mahdar-tansib-maktab-jadid",
    cat: "jamaiyat",
    title: T7(
      "محضر تنصيب المكتب الجديد",
      "Procès-verbal d'installation du nouveau bureau",
      "Minutes of installation of the new board",
      "Acta de instalación de la nueva junta directiva",
      "Verbale di insediamento del nuovo direttivo",
      "Protokoll der Amtsübernahme des neuen Vorstands",
      "Протокол вступления нового правления в должность"
    ),
    desc: D7(
      "محضر يثبت تنصيب أعضاء المكتب المنتخبين ومباشرتهم لمهامهم بعد انتهاء أشغال الجمع العام.",
      "Procès-verbal attestant l'installation des membres élus du bureau et leur entrée en fonctions après l'assemblée générale.",
      "Minutes certifying the installation of the elected board members and their taking office after the general meeting.",
      "Acta que acredita la instalación de los miembros electos de la junta y su toma de posesión tras la asamblea general.",
      "Verbale che attesta l'insediamento dei membri eletti del direttivo e l'assunzione delle funzioni dopo l'assemblea generale.",
      "Protokoll, das die Amtsübernahme der gewählten Vorstandsmitglieder nach der Generalversammlung beurkundet.",
      "Протокол, удостоверяющий вступление избранных членов правления в должность после общего собрания."
    ),
    where: W7(
      "يحرره الكاتب العام ويوقعه الرئيس وأمين المال، وتودع نسخة منه لدى السلطة المحلية.",
      "Rédigé par le secrétaire général et signé par le président et le trésorier, une copie déposée à l'autorité locale.",
      "Drafted by the secretary general, signed by the president and treasurer, with a copy filed at the local authority.",
      "Lo redacta el secretario general, lo firman el presidente y el tesorero, y se deposita copia en la autoridad local.",
      "Redatto dal segretario generale, firmato dal presidente e dal tesoriere, con copia depositata all'autorità locale.",
      "Vom Generalsekretär erstellt, vom Präsidenten und Schatzmeister unterzeichnet, eine Kopie bei der Ortsbehörde hinterlegt.",
      "Составляется генеральным секретарём, подписывается президентом и казначеем; копия подаётся в местную власть."
    ),
    keywords: ["تنصيب المكتب", "installation du bureau", "board installation", "مكتب جديد", "nouveau bureau"],
  },
  {
    id: "jam-taqrir-adabi-mali-sanawi",
    cat: "jamaiyat",
    title: T7(
      "التقرير الأدبي والمالي السنوي",
      "Rapport moral et financier annuel",
      "Annual activity and financial report",
      "Informe anual de actividades y finanzas",
      "Relazione annuale sulle attività e sul bilancio",
      "Jahresbericht über Tätigkeit und Finanzen",
      "Годовой отчёт о деятельности и финансах"
    ),
    desc: D7(
      "تقرير يقدمه المكتب المسير أمام الجمع العام ويلخص أنشطة الجمعية ووضعيتها المالية خلال السنة.",
      "Rapport présenté par le bureau devant l'assemblée générale résumant les activités et la situation financière de l'année.",
      "Report presented by the board to the general meeting summarising the year's activities and financial position.",
      "Informe presentado por la junta ante la asamblea general que resume las actividades y la situación financiera del año.",
      "Relazione presentata dal direttivo all'assemblea generale che riassume le attività e la situazione finanziaria dell'anno.",
      "Bericht des Vorstands an die Generalversammlung über die Aktivitäten und die Finanzlage des Jahres.",
      "Доклад правления перед общим собранием об итогах деятельности и финансовом состоянии за год."
    ),
    where: W7(
      "يعرض على الجمع العام العادي وتودع نسخة منه بأرشيف الجمعية.",
      "Présenté à l'assemblée générale ordinaire, une copie versée aux archives de l'association.",
      "Presented at the ordinary general meeting, with a copy placed in the association's archives.",
      "Se presenta a la asamblea general ordinaria y se archiva una copia en la asociación.",
      "Presentato all'assemblea generale ordinaria, con copia agli archivi dell'associazione.",
      "Der ordentlichen Generalversammlung vorgelegt, eine Kopie in das Vereinsarchiv aufgenommen.",
      "Представляется на очередном общем собрании, копия передаётся в архив ассоциации."
    ),
    keywords: ["تقرير أدبي", "rapport moral", "activity report", "تقرير مالي", "rapport financier"],
  },
  {
    id: "jam-mahdar-jard-taslim-mumtalikat",
    cat: "jamaiyat",
    title: T7(
      "محضر جرد وتسليم ممتلكات جمعية للمكتب الجديد",
      "Procès-verbal d'inventaire et de remise des biens au nouveau bureau",
      "Minutes of inventory and handover of the association's property to the new board",
      "Acta de inventario y entrega de los bienes de la asociación a la nueva junta",
      "Verbale di inventario e consegna dei beni dell'associazione al nuovo direttivo",
      "Protokoll über Bestandsaufnahme und Übergabe des Vereinsvermögens an den neuen Vorstand",
      "Протокол инвентаризации и передачи имущества ассоциации новому правлению"
    ),
    desc: D7(
      "محضر يجرد ممتلكات الجمعية ويثبت تسليمها من المكتب الصادر إلى المكتب الجديد المنتخب.",
      "Procès-verbal dressant l'inventaire des biens de l'association et attestant leur remise du bureau sortant au bureau nouvellement élu.",
      "Minutes drawing up the inventory of the association's assets and certifying their handover from the outgoing to the newly elected board.",
      "Acta que levanta el inventario de los bienes de la asociación y acredita su entrega de la junta saliente a la recién elegida.",
      "Verbale che redige l'inventario dei beni dell'associazione e attesta la consegna dal direttivo uscente a quello neoeletto.",
      "Protokoll über das Inventar der Vereinsgegenstände und die Übergabe vom alten an den neu gewählten Vorstand.",
      "Протокол составления описи имущества ассоциации и передачи его от уходящего правления новоизбранному."
    ),
    where: W7(
      "يوقعه الرئيسان الصادر والجديد وأمينا المال، ويحفظ بأرشيف الجمعية.",
      "Signé par les présidents sortant et entrant ainsi que les deux trésoriers, conservé aux archives de l'association.",
      "Signed by the outgoing and incoming presidents and both treasurers, kept in the association's archives.",
      "Firmado por los presidentes saliente y entrante y ambos tesoreros, se conserva en los archivos de la asociación.",
      "Firmato dai presidenti uscente ed entrante e dai due tesorieri, conservato negli archivi dell'associazione.",
      "Vom alt- und neuen Präsidenten sowie beiden Schatzmeistern unterzeichnet, im Vereinsarchiv aufbewahrt.",
      "Подписывается уходящим и новым президентами и обоими казначеями, хранится в архиве ассоциации."
    ),
    keywords: ["جرد الممتلكات", "inventaire des biens", "inventory of assets", "تسليم", "remise des biens"],
  },

  // ─── الجمع العامة والدعوات · General meetings & convocations ───
  {
    id: "jam-dawa-hudur-jam-3adi",
    cat: "jamaiyat",
    title: T7(
      "دعوة لحضور الجمع العام العادي",
      "Convocation à l'assemblée générale ordinaire",
      "Convocation to the ordinary general meeting",
      "Convocatoria a la asamblea general ordinaria",
      "Convocazione dell'assemblea generale ordinaria",
      "Einladung zur ordentlichen Generalversammlung",
      "Приглашение на очередное общее собрание"
    ),
    desc: D7(
      "رسالة رسمية توجه إلى المنخرطين لاستدعائهم للجمع العام العادي في تاريخ ومكان محددين.",
      "Lettre officielle adressée aux adhérents pour les convoquer à l'assemblée générale ordinaire à une date et un lieu déterminés.",
      "Official letter sent to members summoning them to the ordinary general meeting on a specified date and place.",
      "Carta oficial dirigida a los miembros para convocarlos a la asamblea general ordinaria en fecha y lugar determinados.",
      "Lettera ufficiale inviata agli aderenti per convocarli all'assemblea generale ordinaria in data e luogo stabiliti.",
      "Offizielle Mitteilung an die Mitglieder zur Einladung zur ordentlichen Generalversammlung an bestimmtem Ort und Termin.",
      "Официальное письмо членам с вызовом на очередное общее собрание в указанные срок и место."
    ),
    where: W7(
      "توجه إلى جميع المنخرطين قبل أجل معقول كما ينص على ذلك القانون الأساسي.",
      "Adressée à tous les adhérents dans un délai raisonnable prévu par les statuts.",
      "Sent to all members within a reasonable deadline set by the bylaws.",
      "Se envía a todos los miembros dentro del plazo razonable previsto en los estatutos.",
      "Inviata a tutti gli aderenti entro il termine ragionevole previsto dallo statuto.",
      "An alle Mitglieder innerhalb der in der Satzung vorgesehenen Frist versandt.",
      "Направляется всем членам в разумный срок, установленный уставом."
    ),
    keywords: ["دعوة", "convocation", "meeting notice", "جمع عام عادي", "assemblée générale ordinaire"],
  },
  {
    id: "jam-ijhar-jam-3am",
    cat: "jamaiyat",
    title: T7(
      "إخبار السلطة المحلية بعقد الجمع العام لجمعية رياضية",
      "Avis à l'autorité locale de la tenue de l'assemblée générale d'une association sportive",
      "Notice to the local authority of the holding of a sports association's general meeting",
      "Aviso a la autoridad local de la celebración de la asamblea general de una asociación deportiva",
      "Comunicazione all'autorità locale dello svolgimento dell'assemblea generale di un'associazione sportiva",
      "Anzeige an die Ortsbehörde über die Generalversammlung eines Sportvereins",
      "Уведомление местной власти о проведении общего собрания спортивной ассоциации"
    ),
    desc: D7(
      "إخبار يوجه إلى السلطة المحلية قبل انعقاد الجمع العام وفق ما يشترطه قانون الجمعيات.",
      "Avis adressé à l'autorité locale avant la tenue de l'assemblée générale, conformément à la loi sur les associations.",
      "Notice sent to the local authority before the general meeting, as required by the associations law.",
      "Aviso enviado a la autoridad local antes de la asamblea general, conforme a la ley de asociaciones.",
      "Avviso inviato all'autorità locale prima dell'assemblea generale, come richiesto dalla legge sulle associazioni.",
      "Mitteilung an die Ortsbehörde vor der Generalversammlung, wie das Vereinsrecht es verlangt.",
      "Уведомление местной власти до общего собрания в соответствии с законом об ассоциациях."
    ),
    where: W7(
      "السلطة المحلية (قيادة) التابع لها مقر الجمعية",
      "Autorité locale (caïdat) du ressort du siège de l'association",
      "Local authority (caïdat) of the association's headquarter district",
      "Autoridad local (caïdat) de la demarcación de la sede de la asociación",
      "Autorità locale (caïdat) di competenza della sede dell'associazione",
      "Örtliche Behörde (Caïdat) des Bezirks des Vereinssitzes",
      "Местная власть (кайдат) по месту регистрации ассоциации"
    ),
    keywords: ["جمع عام", "assemblée générale", "general meeting", "جمعية رياضية", "association sportive"],
    popular: true,
  },
  {
    id: "jam-mahdar-jam-3adi-tajdid-maktab",
    cat: "jamaiyat",
    title: T7(
      "محضر الجمع العام العادي لتجديد المكتب",
      "Procès-verbal de l'assemblée générale ordinaire de renouvellement du bureau",
      "Minutes of the ordinary general meeting held to renew the board",
      "Acta de la asamblea general ordinaria de renovación de la junta",
      "Verbale dell'assemblea generale ordinaria per il rinnovo del direttivo",
      "Protokoll der ordentlichen Generalversammlung zur Neuwahl des Vorstands",
      "Протокол очередного общего собрания по обновлению состава правления"
    ),
    desc: D7(
      "محضر يوثق مداولات الجمع العام المنعقد لتجديد المكتب المسير وانتخاب أعضائه الجدد.",
      "Procès-verbal consignant les délibérations de l'assemblée générale convoquée pour le renouvellement du bureau directeur.",
      "Record of the deliberations of the general meeting convened to renew the board of directors.",
      "Registro de las deliberaciones de la asamblea general convocada para renovar la junta directiva de la asociación.",
      "Registro delle deliberazioni dell'assemblea generale convocata per il rinnovo del direttivo dell'associazione.",
      "Niederschrift der Beratungen der zur Vorstandserneuerung einberufenen Generalversammlung des Vereins.",
      "Запись обсуждений на общем собрании, созванном для обновления правления ассоциации."
    ),
    where: W7(
      "يوقعه أعضاء المكتب الجديد وتسلم نسخة منه إلى السلطة المحلية.",
      "Signé par les membres du nouveau bureau, une copie remise à l'autorité locale.",
      "Signed by the new board members, with a copy delivered to the local authority.",
      "Lo firman los miembros de la nueva junta y se entrega copia a la autoridad local.",
      "Firmato dai membri del nuovo direttivo, con copia consegnata all'autorità locale.",
      "Von den Mitgliedern des neuen Vorstands unterzeichnet, eine Kopie an die Ortsbehörde übergeben.",
      "Подписывается членами нового правления, копия передаётся в местную власть."
    ),
    keywords: ["تجديد المكتب", "renouvellement du bureau", "board renewal", "جمع عام عادي", "assemblée générale"],
  },
  {
    id: "jam-dawa-jam-istithnai",
    cat: "jamaiyat",
    title: T7(
      "دعوة لجمع عام استثنائي",
      "Convocation à l'assemblée générale extraordinaire",
      "Convocation to the extraordinary general meeting",
      "Convocatoria a la asamblea general extraordinaria",
      "Convocazione dell'assemblea generale straordinaria",
      "Einladung zur außerordentlichen Generalversammlung",
      "Приглашение на внеочередное общее собрание"
    ),
    desc: D7(
      "استدعاء موجه إلى المنخرطين لانعقاد جمع عام استثنائي لتعديل القانون الأساسي أو البت في قضية عاجلة.",
      "Convocation adressée aux adhérents pour une assemblée générale extraordinaire appelée à modifier les statuts ou statuer sur une question urgente.",
      "Summons sent to members for an extraordinary general meeting to amend the bylaws or decide an urgent matter.",
      "Convocatoria dirigida a los miembros para una asamblea general extraordinaria que modifique los estatutos o decida un asunto urgente.",
      "Convocazione inviata agli aderenti per un'assemblea generale straordinaria che modifichi lo statuto o deliberi su questioni urgenti.",
      "Aufruf an die Mitglieder zu einer außerordentlichen Generalversammlung zur Satzungsänderung oder Entscheidung dringlicher Angelegenheiten.",
      "Вызов членов на внеочередное общее собрание для изменения устава или решения срочного вопроса."
    ),
    where: W7(
      "توجه إلى المنخرطين وفق الكيفية المنصوص عليها في القانون الأساسي.",
      "Adressée aux adhérents selon les modalités prévues par les statuts.",
      "Sent to the members according to the arrangements laid down in the bylaws.",
      "Se envía a los miembros según las modalidades previstas en los estatutos.",
      "Inviata agli aderenti secondo le modalità previste dallo statuto.",
      "Gemäß den in der Satzung vorgesehenen Modalitäten an die Mitglieder gerichtet.",
      "Направляется членам в порядке, предусмотренном уставом."
    ),
    keywords: ["جمع عام استثنائي", "assemblée générale extraordinaire", "extraordinary meeting", "تعديل القانون الأساسي", "modification des statuts"],
  },
  {
    id: "jam-talab-ifad-lajna-riqaba-maliya",
    cat: "jamaiyat",
    title: T7(
      "طلب إيفاد لجنة للمراقبة المالية",
      "Demande d'envoi d'une commission de contrôle financier",
      "Request for the dispatch of a financial control committee",
      "Solicitud de envío de una comisión de control financiero",
      "Richiesta di invio di una commissione di controllo finanziario",
      "Antrag auf Entsendung einer Finanzaufsichtskommission",
      "Заявление о направлении комиссии финансового контроля"
    ),
    desc: D7(
      "طلب توجهه الجمعية إلى السلطة المحلية قصد إيفاد لجنة لمراقبة تسييرها المالي وحساباتها.",
      "Demande adressée par l'association à l'autorité locale aux fins d'envoi d'une commission chargée de contrôler sa gestion financière.",
      "Application addressed to the local authority asking for a committee to oversee the association's financial management.",
      "Solicitud dirigida a la autoridad local para que envíe una comisión encargada de controlar la gestión financiera de la asociación.",
      "Richiesta inviata all'autorità locale per l'invio di una commissione incaricata di controllare la gestione finanziaria dell'associazione.",
      "Antrag des Vereins an die Ortsbehörde auf Entsendung einer Kommission zur Überprüfung seiner Finanzführung.",
      "Заявление ассоциации в местную власть о направлении комиссии для проверки её финансовой деятельности."
    ),
    where: W7(
      "السلطة المحلية (القيادة) التابع لها مقر الجمعية، عبر مراسلة رسمية.",
      "Autorité locale (caïdat) du ressort du siège de l'association, par correspondance officielle.",
      "The local authority (caïdat) of the association's headquarter district, via official correspondence.",
      "La autoridad local (caïdat) de la demarcación de la sede de la asociación, mediante correspondencia oficial.",
      "L'autorità locale (caïdat) di competenza della sede dell'associazione, tramite corrispondenza ufficiale.",
      "Die örtliche Behörde (Caïdat) des Bezirks des Vereinssitzes, per offiziellem Schreiben.",
      "Местная власть (кайдат) по месту регистрации ассоциации — путём официальной переписки."
    ),
    keywords: ["إيفاد لجنة", "commission de contrôle", "control committee", "مراقبة مالية", "contrôle financier"],
  },
  {
    id: "jam-mahdar-lajna-riqaba-hisabat",
    cat: "jamaiyat",
    title: T7(
      "محضر لجنة مراقبة الحسابات",
      "Procès-verbal de la commission de contrôle des comptes",
      "Minutes of the accounts control committee",
      "Acta de la comisión de control de cuentas",
      "Verbale della commissione di controllo dei conti",
      "Protokoll der Rechnungskontrollkommission",
      "Протокол комиссии по контролю счетов"
    ),
    desc: D7(
      "محضر تعده لجنة مراقبة الحسابات يتضمن ملاحظاتها على الوضعية المالية ويعرض على الجمع العام.",
      "Procès-verbal établi par la commission de contrôle des comptes, consignant ses observations sur la situation financière présentées à l'assemblée.",
      "Minutes drawn up by the accounts control committee recording its observations on the financial position, presented to the general meeting.",
      "Acta elaborada por la comisión de control de cuentas con sus observaciones sobre la situación financiera, presentada a la asamblea.",
      "Verbale redatto dalla commissione di controllo dei conti con le osservazioni sulla situazione finanziaria, presentato all'assemblea.",
      "Von der Rechnungskontrollkommission erstelltes Protokoll mit ihren Feststellungen zur Finanzlage, der Versammlung vorgelegt.",
      "Протокол комиссии по контролю счетов с замечаниями о финансовом состоянии, представляемый общему собранию."
    ),
    where: W7(
      "يعرض على الجمع العام العادي ويودع بأرشيف الجمعية.",
      "Présenté à l'assemblée générale ordinaire et versé aux archives de l'association.",
      "Presented to the ordinary general meeting and filed in the association's archives.",
      "Se presenta a la asamblea general ordinaria y se archiva en la asociación.",
      "Presentato all'assemblea generale ordinaria e depositato negli archivi dell'associazione.",
      "Der ordentlichen Generalversammlung vorgelegt und im Vereinsarchiv abgelegt.",
      "Представляется очередному общему собранию и сдаётся в архив ассоциации."
    ),
    keywords: ["مراقبة الحسابات", "contrôle des comptes", "accounts control", "لجنة", "commission"],
  },

  // ─── التعاونيات · Cooperatives ───
  {
    id: "jam-talab-tassis-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "طلب تأسيس تعاونية",
      "Demande de création d'une coopérative",
      "Request to establish a cooperative",
      "Solicitud de creación de una cooperativa",
      "Richiesta di costituzione di una cooperativa",
      "Antrag auf Gründung einer Genossenschaft",
      "Заявление о создании кооператива"
    ),
    desc: D7(
      "طلب يودعه الأعضاء المؤسسون لدى مكتب تنمية التعاون قصد تسجيل التعاونية طبقا للقانون 112.12.",
      "Demande déposée par les membres fondateurs auprès de l'Office de développement de la coopération en vue d'enregistrer la coopérative conformément à la loi 112-12.",
      "Request filed by the founding members with the Cooperation Development Office to register the cooperative under law 112-12.",
      "Solicitud presentada por los miembros fundadores ante la Oficina de Desarrollo de la Cooperación para registrar la cooperativa conforme a la ley 112-12.",
      "Richiesta presentata dai soci fondatori all'Ufficio di sviluppo della cooperazione per registrare la cooperativa ai sensi della legge 112-12.",
      "Antrag der Gründungsmitglieder beim Amt für Kooperationsentwicklung auf Registrierung der Genossenschaft gemäß Gesetz 112-12.",
      "Заявление учредителей в Управление развития кооперации о регистрации кооператива согласно закону 112-12."
    ),
    where: W7(
      "مكتب تنمية التعاون (ODCO)، عبر منصة التسجيل الرقمية أو مقراته الجهوية.",
      "Office de développement de la coopération (ODCO), via sa plateforme numérique d'enregistrement.",
      "The Cooperation Development Office (ODCO), via its digital registration platform.",
      "La Oficina de Desarrollo de la Cooperación (ODCO), a través de su plataforma digital de registro.",
      "L'Ufficio di sviluppo della cooperazione (ODCO), tramite la sua piattaforma digitale di registrazione.",
      "Das Amt für Kooperationsentwicklung (ODCO), über seine digitale Registrierungsplattform.",
      "Управление развития кооперации (ODCO) через цифровую платформу регистрации."
    ),
    keywords: ["تأسيس تعاونية", "création de coopérative", "cooperative founding", "ODCO", "قانون 112.12"],
    popular: true,
  },
  {
    id: "jam-mahdar-jam-tassis-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "محضر الجمع العام التأسيسي لتعاونية",
      "Procès-verbal de l'assemblée générale constitutive de la coopérative",
      "Minutes of the cooperative's constituent general meeting",
      "Acta de la asamblea general constitutiva de la cooperativa",
      "Verbale dell'assemblea generale costitutiva della cooperativa",
      "Protokoll der Gründungsversammlung der Genossenschaft",
      "Протокол учредительного общего собрания кооператива"
    ),
    desc: D7(
      "محضر يوثق انعقاد الجمع العام التأسيسي الذي اعتمد النظام الأساسي للتعاونية وانتخب أعضاءها الأولين.",
      "Procès-verbal attestant la tenue de l'assemblée constitutive qui a adopté les statuts et élu les premiers administrateurs de la coopérative.",
      "Minutes attesting the holding of the constituent meeting that adopted the cooperative's bylaws and elected its first administrators.",
      "Acta que acredita la celebración de la asamblea constitutiva que aprobó los estatutos y eligió a los primeros administradores de la cooperativa.",
      "Verbale che attesta lo svolgimento dell'assemblea costitutiva che ha approvato lo statuto ed eletto i primi amministratori della cooperativa.",
      "Protokoll über die Gründungsversammlung, die die Satzung beschloss und die ersten Verwalter der Genossenschaft wählte.",
      "Протокол учредительного собрания, принявшего устав кооператива и избравшего его первых управляющих."
    ),
    where: W7(
      "يرفق بملف التأسيس ويودع لدى مكتب تنمية التعاون (ODCO).",
      "Joint au dossier de création et déposé auprès de l'Office de développement de la coopération (ODCO).",
      "Attached to the founding file and deposited with the Cooperation Development Office (ODCO).",
      "Se adjunta al expediente de creación y se deposita en la Oficina de Desarrollo de la Cooperación (ODCO).",
      "Allegato al fascicolo di costituzione e depositato presso l'Ufficio di sviluppo della cooperazione (ODCO).",
      "Dem Gründungsdossier beigefügt und beim Amt für Kooperationsentwicklung (ODCO) eingereicht.",
      "Прилагается к учредительному делу и подаётся в Управление развития кооперации (ODCO)."
    ),
    keywords: ["محضر تأسيسي", "PV constitutif", "constituent meeting", "تعاونية", "coopérative"],
  },
  {
    id: "jam-talab-shahada-tasjil-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "طلب الحصول على شهادة تسجيل تعاونية",
      "Demande d'obtention du certificat d'enregistrement de coopérative",
      "Request for a cooperative registration certificate",
      "Solicitud del certificado de registro de cooperativa",
      "Richiesta del certificato di registrazione della cooperativa",
      "Antrag auf eine Genossenschafts-Registrierungsbescheinigung",
      "Заявление на получение свидетельства о регистрации кооператива"
    ),
    desc: D7(
      "طلب يقدم لاستخراج نسخة من شهادة تسجيل التعاونية المسجلة لدى مكتب تنمية التعاون.",
      "Demande présentée pour obtenir une copie du certificat d'enregistrement de la coopérative immatriculée auprès de l'ODCO.",
      "Application made to obtain a copy of the registration certificate of a cooperative registered with ODCO.",
      "Solicitud presentada para obtener una copia del certificado de registro de una cooperativa inscrita en la ODCO.",
      "Richiesta presentata per ottenere una copia del certificato di registrazione di una cooperativa iscritta all'ODCO.",
      "Antrag auf Erteilung einer Kopie der Registrierungsbescheinigung einer bei der ODCO eingetragenen Genossenschaft.",
      "Заявление о выдаче копии свидетельства о регистрации кооператива, внесённого в реестр ODCO."
    ),
    where: W7(
      "مكتب تنمية التعاون (ODCO) أو منصة التعاونيات الإلكترونية.",
      "Office de développement de la coopération (ODCO), via la plateforme numérique ou ses antennes régionales.",
      "The Cooperation Development Office (ODCO), via the digital platform or its regional offices.",
      "La Oficina de Desarrollo de la Cooperación (ODCO), por la plataforma digital o sus delegaciones regionales.",
      "L'Ufficio di sviluppo della cooperazione (ODCO), tramite la piattaforma digitale o le sedi regionali.",
      "Das Amt für Kooperationsentwicklung (ODCO), über die digitale Plattform oder regionale Stellen.",
      "Управление развития кооперации (ODCO) через цифровую платформу или региональные отделения."
    ),
    keywords: ["شهادة تسجيل", "certificat d'enregistrement", "registration certificate", "تعاونية", "ODCO"],
  },
  {
    id: "jam-taqrir-sanawi-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "التقرير السنوي للتعاونية",
      "Rapport annuel de la coopérative",
      "Annual report of a cooperative",
      "Informe anual de la cooperativa",
      "Relazione annuale della cooperativa",
      "Jahresbericht der Genossenschaft",
      "Годовой отчёт кооператива"
    ),
    desc: D7(
      "تقرير يلخص أنشطة التعاونية ونتائجها المالية ويصادق عليه الجمع العام السنوي.",
      "Rapport résumant les activités et les résultats financiers de la coopérative, approuvé par l'assemblée générale annuelle.",
      "Report summarising the cooperative's activities and financial results, approved by the annual general meeting.",
      "Informe que resume las actividades y los resultados financieros de la cooperativa, aprobado por la asamblea general anual.",
      "Relazione che riassume le attività e i risultati finanziari della cooperativa, approvata dall'assemblea generale annuale.",
      "Bericht über die Aktivitäten und Finanzergebnisse der Genossenschaft, von der Jahresversammlung gebilligt.",
      "Отчёт об итогах деятельности и финансовых результатах кооператива, утверждаемый годовым собранием."
    ),
    where: W7(
      "يعرض على الجمع العام للتعاونية وتحفظ نسخة منه بمقرها.",
      "Présenté à l'assemblée générale de la coopérative, une copie conservée au siège.",
      "Presented to the cooperative's general meeting, with a copy kept at its headquarters.",
      "Se presenta a la asamblea general de la cooperativa y se guarda copia en su sede.",
      "Presentato all'assemblea generale della cooperativa, con copia conservata nella sede.",
      "Der Generalversammlung der Genossenschaft vorgelegt, eine Kopie im Sitz aufbewahrt.",
      "Представляется общему собранию кооператива, копия хранится в его штаб-квартире."
    ),
    keywords: ["تقرير سنوي", "rapport annuel", "annual report", "تعاونية", "coopérative"],
  },
  {
    id: "jam-talab-tajdid-maktab-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "طلب تجديد مكتب تعاونية",
      "Demande de renouvellement du bureau de la coopérative",
      "Request for renewal of a cooperative's board",
      "Solicitud de renovación de la junta de la cooperativa",
      "Richiesta di rinnovo del consiglio della cooperativa",
      "Antrag auf Erneuerung des Vorstands der Genossenschaft",
      "Заявление об обновлении правления кооператива"
    ),
    desc: D7(
      "طلب يدرج في جدول أعمال الجمع العام لتجديد أعضاء مجلس إدارة التعاونية المنتهية ولايتهم.",
      "Demande inscrite à l'ordre du jour de l'assemblée générale en vue de renouveler les administrateurs dont le mandat a expiré.",
      "Request placed on the general meeting's agenda to renew the cooperative's directors whose term has expired.",
      "Solicitud incluida en el orden del día de la asamblea general para renovar a los administradores cuyo mandato ha expirado.",
      "Richiesta iscritta all'ordine del giorno dell'assemblea generale per rinnovare gli amministratori il cui mandato è scaduto.",
      "Antrag auf die Tagesordnung der Generalversammlung zur Erneuerung der Verwalter mit abgelaufener Amtszeit.",
      "Заявление, включаемое в повестку общего собрания для переизбрания управляющих с истёкшим сроком полномочий."
    ),
    where: W7(
      "يوجه إلى الجمع العام للتعاونية ويبلغ التجديد إلى مكتب تنمية التعاون.",
      "Adressé à l'assemblée générale de la coopérative, le renouvellement notifié à l'ODCO.",
      "Addressed to the cooperative's general meeting, with the renewal notified to ODCO.",
      "Se dirige a la asamblea general de la cooperativa y la renovación se notifica a la ODCO.",
      "Rivolto all'assemblea generale della cooperativa, con rinnovo notificato all'ODCO.",
      "An die Generalversammlung der Genossenschaft gerichtet, die Erneuerung der ODCO mitgeteilt.",
      "Направляется общему собранию кооператива, об обновлении уведомляется ODCO."
    ),
    keywords: ["تجديد المكتب", "renouvellement du bureau", "board renewal", "تعاونية", "coopérative", "ODCO"],
  },
  {
    id: "jam-massira-tassis-taawuniya",
    cat: "jamaiyat",
    title: T7(
      "مسطرة تأسيس تعاونية",
      "Procédure de création d'une coopérative",
      "Procedure for establishing a cooperative",
      "Procedimiento de creación de una cooperativa",
      "Procedura di costituzione di una cooperativa",
      "Verfahren zur Gründung einer Genossenschaft",
      "Процедура создания кооператива"
    ),
    desc: D7(
      "دليل يشرح مراحل تأسيس التعاونية من إعداد النظام الأساسي إلى تسجيلها لدى مكتب تنمية التعاون.",
      "Guide décrivant les étapes de création d'une coopérative, de la rédaction des statuts à l'enregistrement auprès de l'ODCO.",
      "Guide outlining the steps to establish a cooperative, from drafting the bylaws to registration with ODCO.",
      "Guía que describe los pasos para crear una cooperativa, desde la redacción de los estatutos hasta el registro en la ODCO.",
      "Guida che illustra i passi per costituire una cooperativa, dalla redazione dello statuto all'iscrizione all'ODCO.",
      "Leitfaden zu den Schritten der Genossenschaftsgründung von der Satzungserstellung bis zur Registrierung bei der ODCO.",
      "Пособие об этапах создания кооператива — от разработки устава до регистрации в ODCO."
    ),
    where: W7(
      "تُنجز المراحل لدى مكتب تنمية التعاون (ODCO) والسلطات المحلية المختصة.",
      "Étapes accomplies auprès de l'Office de développement de la coopération (ODCO) et des autorités locales compétentes.",
      "Steps carried out with the Cooperation Development Office (ODCO) and the competent local authorities.",
      "Los trámites se realizan ante la Oficina de Desarrollo de la Cooperación (ODCO) y las autoridades locales competentes.",
      "Le pratiche si svolgono presso l'Ufficio di sviluppo della cooperazione (ODCO) e le autorità locali competenti.",
      "Die Schritte erfolgen beim Amt für Kooperationsentwicklung (ODCO) und den zuständigen Ortsbehörden.",
      "Этапы проходят в Управлении развития кооперации (ODCO) и компетентных местных органах."
    ),
    keywords: ["مسطرة التأسيس", "procédure de création", "founding procedure", "تعاونية", "ODCO"],
  },

  // ─── الدعم والشراكات · Subsidies & partnerships ───
  {
    id: "jam-talab-dam-jamaa-tarabiya",
    cat: "jamaiyat",
    title: T7(
      "طلب دعم من الجماعة الترابية",
      "Demande de subvention auprès de la commune territoriale",
      "Subsidy request to the territorial commune",
      "Solicitud de subvención a la comuna territorial",
      "Richiesta di contributo al comune territoriale",
      "Zuschussantrag an die territoriale Gemeinde",
      "Заявление о субсидии в территориальную коммуну"
    ),
    desc: D7(
      "طلب توجهه الجمعية إلى رئيس الجماعة الترابية قصد الحصول على دعم مالي لأنشطتها المبرمجة.",
      "Lettre adressée par l'association au président de la commune territoriale en vue d'obtenir un appui financier pour ses activités programmées.",
      "Letter from the association to the commune president seeking financial support for its planned activities.",
      "Carta dirigida por la asociación al presidente de la comuna territorial para obtener apoyo financiero para sus actividades programadas.",
      "Lettera inviata dall'associazione al presidente del comune per ottenere un contributo finanziario per le attività programmate.",
      "Schreiben des Vereins an den Gemeindepräsidenten auf finanzielle Förderung der geplanten Aktivitäten.",
      "Письмо ассоциации на имя председателя коммуны о финансовой поддержке запланированных мероприятий."
    ),
    where: W7(
      "رئيس مجلس الجماعة الترابية، عبر مكتب الضبط بمقر الجماعة.",
      "Président du conseil de la commune territoriale, via le bureau d'ordre de la commune.",
      "The president of the territorial commune council, via the commune's records office.",
      "El presidente del consejo de la comuna territorial, por la oficina de registro de la comuna.",
      "Il presidente del consiglio comunale, tramite l'ufficio protocollo del comune.",
      "Der Präsident des Gemeinderats, über das Protokollamt der Gemeinde.",
      "Председатель совета территориальной коммуны — через канцелярию коммуны."
    ),
    keywords: ["دعم الجماعة", "subvention communale", "commune subsidy", "دعم مالي", "appui financier"],
    popular: true,
  },
  {
    id: "jam-talab-dam-wilaya",
    cat: "jamaiyat",
    title: T7(
      "طلب دعم من الولاية",
      "Demande d'appui auprès de la wilaya",
      "Support request to the wilaya (governorate)",
      "Solicitud de apoyo a la wilaya (gobernación)",
      "Richiesta di sostegno alla wilaya (prefettura)",
      "Förderantrag an die Wilaya (Provinzverwaltung)",
      "Заявление о поддержке в вилаю (префектуру)"
    ),
    desc: D7(
      "طلب يرفع إلى عامل الولاية قصد الاستفادة من الدعم المخصص للجمعيات العاملة في التنمية الاجتماعية.",
      "Demande soumise au wali de la région afin de bénéficier de l'appui réservé aux associations actives dans le développement social.",
      "Application to the wali (regional governor) for support granted to associations working in social development.",
      "Solicitud presentada al wali (gobernador) para beneficiarse del apoyo reservado a las asociaciones activas en el desarrollo social.",
      "Richiesta presentata al wali (governatore) per beneficiare del sostegno riservato alle associazioni attive nello sviluppo sociale.",
      "Antrag an den Wali (Gouverneur), um Fördermittel für im sozialen Bereich tätige Vereine zu erhalten.",
      "Заявление вали (губернатору) о получении поддержки для ассоциаций, действующих в сфере социального развития."
    ),
    where: W7(
      "ولاية الجهة أو العمالة، عبر مكتب الضبط بمقر الولاية.",
      "Wilaya de la région ou préfecture, via le bureau d'ordre de la wilaya.",
      "The regional wilaya or prefecture, via the wilaya's records office.",
      "La wilaya de la región o prefectura, por la oficina de registro de la wilaya.",
      "La wilaya della regione o la prefettura, tramite l'ufficio protocollo della wilaya.",
      "Die regionale Wilaya bzw. Präfektur, über das Protokollamt der Wilaya.",
      "Региональная вилая или префектура через её канцелярию."
    ),
    keywords: ["دعم الولاية", "appui de la wilaya", "wilaya support", "عامل الولاية", "wali"],
  },
  {
    id: "jam-talab-istighlal-markaz-hilal-ahmar",
    cat: "jamaiyat",
    title: T7(
      "طلب استغلال وتسيير مركز تابع للهلال الأحمر في إطار شراكة",
      "Demande d'exploitation et de gestion d'un centre relevant du Croissant-Rouge en partenariat",
      "Request to operate and manage a Red Crescent center under a partnership",
      "Solicitud de explotación y gestión de un centro de la Media Luna Roja en el marco de una colaboración",
      "Richiesta di gestione di un centro della Mezzaluna Rossa nell'ambito di una collaborazione",
      "Antrag auf Bewirtschaftung und Leitung einer Einrichtung des Roten Halbmonds im Rahmen einer Partnerschaft",
      "Заявление об эксплуатации и управлении центром Общества Красного Полумесяца в рамках партнёрства"
    ),
    desc: D7(
      "طلب توجهه جمعية إلى الهلال الأحمر المغربي لاستغلال وتسيير أحد مراكزه في إطار شراكة تنموية.",
      "Proposition adressée par une association au Croissant-Rouge marocain en vue d'exploiter et gérer l'un de ses centres en partenariat.",
      "Proposal by an association to the Moroccan Red Crescent to operate and manage one of its centers in partnership.",
      "Propuesta dirigida por una asociación a la Media Luna Roja marroquí para explotar y gestionar uno de sus centros en colaboración.",
      "Proposta inviata da un'associazione alla Mezzaluna Rossa marocchina per gestire uno dei suoi centri in collaborazione.",
      "Antrag eines Vereins an den Marokkanischen Roten Halbmond auf Bewirtschaftung einer seiner Einrichtungen in Partnerschaft.",
      "Предложение ассоциации Марокканскому обществу Красного Полумесяца об эксплуатации одного из его центров в партнёрстве."
    ),
    where: W7(
      "الهلال الأحمر المغربي (المقر الوطني أو المنسقية الجهوية) عبر مراسلة رسمية.",
      "Croissant-Rouge marocain (siège national ou coordination régionale), par correspondance officielle.",
      "The Moroccan Red Crescent (national headquarters or regional coordination), via official correspondence.",
      "La Media Luna Roja marroquí (sede nacional o coordinación regional), mediante correspondencia oficial.",
      "La Mezzaluna Rossa marocchina (sede nazionale o coordinamento regionale), tramite corrispondenza ufficiale.",
      "Der Marokkanische Rote Halbmond (Zentralsitz oder regionale Koordination), per offiziellem Schreiben.",
      "Марокканское общество Красного Полумесяца (национальный штаб или региональная координация) путём официальной переписки."
    ),
    keywords: ["الهلال الأحمر", "Croissant-Rouge", "Red Crescent", "شراكة", "partenariat"],
  },
  {
    id: "jam-talab-istighlal-maqar-jamai",
    cat: "jamaiyat",
    title: T7(
      "طلب استغلال مقر جماعي",
      "Demande d'exploitation d'un local communal",
      "Request to use a communal premises",
      "Solicitud de uso de un local comunal",
      "Richiesta di utilizzo di un locale comunale",
      "Antrag auf Nutzung eines kommunalen Lokals",
      "Заявление об использовании коммунального помещения"
    ),
    desc: D7(
      "طلب يقدم إلى الجماعة الترابية لتخصيص مقر جماعي لاستغلاله مركزا لأنشطة الجمعية.",
      "Demande présentée à la commune territoriale en vue de la mise à disposition d'un local communal pour les activités de l'association.",
      "Request made to the territorial commune to allocate a communal premises for the association's activities.",
      "Solicitud presentada a la comuna territorial para que ponga a disposición un local comunal para las actividades de la asociación.",
      "Richiesta presentata al comune territoriale per la messa a disposizione di un locale comunale per le attività dell'associazione.",
      "Antrag an die territoriale Gemeinde auf Überlassung eines kommunalen Lokals für die Vereinsaktivitäten.",
      "Заявление в территориальную коммуну о выделении коммунального помещения для деятельности ассоциации."
    ),
    where: W7(
      "رئيس الجماعة أو المصلحة المكلفة بالأملاك الجماعية، عبر مكتب الضبط.",
      "Président de la commune ou service du domaine communal, via le bureau d'ordre.",
      "The commune president or the communal property department, via the records office.",
      "El presidente de la comuna o el servicio de bienes comunales, por la oficina de registro.",
      "Il presidente del comune o il servizio del patrimonio comunale, tramite l'ufficio protocollo.",
      "Der Gemeindepräsident oder die kommunale Vermögensverwaltung, über das Protokollamt.",
      "Председатель коммуны или служба коммунального имущества через канцелярию."
    ),
    keywords: ["مقر جماعي", "local communal", "communal premises", "استغلال", "exploitation"],
  },
  {
    id: "jam-ittifaqiya-shiraka-muassasa-umumiya",
    cat: "jamaiyat",
    title: T7(
      "اتفاقية شراكة مع مؤسسة عمومية",
      "Convention de partenariat avec un établissement public",
      "Partnership agreement with a public institution",
      "Convenio de colaboración con una institución pública",
      "Convenzione di partenariato con un ente pubblico",
      "Partnerschaftsvereinbarung mit einer öffentlichen Einrichtung",
      "Соглашение о партнёрстве с государственным учреждением"
    ),
    desc: D7(
      "نموذج اتفاقية يحدد التزامات الجمعية والمؤسسة العمومية الشريكة في تنفيذ مشروع مشترك.",
      "Modèle de convention fixant les engagements de l'association et de l'établissement public partenaire dans la réalisation d'un projet commun.",
      "Agreement template setting out the commitments of the association and the partner public institution in a joint project.",
      "Modelo de convenio que fija los compromisos de la asociación y de la institución pública socia en la realización de un proyecto común.",
      "Modello di convenzione che definisce gli impegni dell'associazione e dell'ente pubblico partner in un progetto comune.",
      "Vertragsmuster, das die Verpflichtungen des Vereins und der öffentlichen Partnereinrichtung in einem Gemeinschaftsprojekt festlegt.",
      "Образец соглашения, определяющего обязательства ассоциации и государственного учреждения-партнёра в совместном проекте."
    ),
    where: W7(
      "يوقع عن الطرفين ويعتمد لدى السلطة الوصية على المؤسسة العمومية الشريكة.",
      "Signé par les deux parties et visé par l'autorité de tutelle de l'établissement public partenaire.",
      "Signed by both parties and endorsed by the supervisory authority of the partner public institution.",
      "Firmado por ambas partes y refrendado por la autoridad de tutela de la institución pública socia.",
      "Firmato dalle due parti e vistato dall'autorità di vigilanza dell'ente pubblico partner.",
      "Von beiden Parteien unterzeichnet und von der Aufsichtsbehörde der öffentlichen Partnereinrichtung gegengezeichnet.",
      "Подписывается обеими сторонами и утверждается надзорным органом учреждения-партнёра."
    ),
    keywords: ["اتفاقية شراكة", "convention de partenariat", "partnership agreement", "مؤسسة عمومية", "établissement public"],
  },

  // ─── الرياضة والثقافة · Sports & culture ───
  {
    id: "jam-taqrir-adabi-mali-jam-riyadiya",
    cat: "jamaiyat",
    title: T7(
      "التقرير الأدبي والمالي لجمعية رياضية",
      "Rapport moral et financier d'une association sportive",
      "Activity and financial report of a sports association",
      "Informe de actividades y finanzas de una asociación deportiva",
      "Relazione sulle attività e sul bilancio di un'associazione sportiva",
      "Tätigkeits- und Finanzbericht eines Sportvereins",
      "Отчёт о деятельности и финансах спортивной ассоциации"
    ),
    desc: D7(
      "تقرير سنوي خاص بجمعية رياضية يقدم نتائج الفرق والوضعية المالية أمام الجمع العام.",
      "Rapport annuel propre à une association sportive présentant les résultats des équipes et la situation financière devant l'assemblée générale.",
      "Annual report specific to a sports association presenting team results and the financial position to the general meeting.",
      "Informe anual propio de una asociación deportiva que presenta los resultados de los equipos y la situación financiera ante la asamblea general.",
      "Relazione annuale specifica di un'associazione sportiva che presenta i risultati delle squadre e la situazione finanziaria all'assemblea.",
      "Jahresbericht eines Sportvereins, der der Generalversammlung Mannschaftsergebnisse und Finanzlage darlegt.",
      "Годовой отчёт спортивной ассоциации о результатах команд и финансовом состоянии перед общим собранием."
    ),
    where: W7(
      "يعرض على الجمع العام للجمعية الرياضية وتوجه نسخة منه إلى الجامعة الرياضية المعنية.",
      "Présenté à l'assemblée générale de l'association, une copie adressée à la fédération sportive concernée.",
      "Presented to the association's general meeting, with a copy sent to the relevant sports federation.",
      "Se presenta a la asamblea general de la asociación y se envía copia a la federación deportiva correspondiente.",
      "Presentato all'assemblea generale dell'associazione, con copia inviata alla federazione sportiva competente.",
      "Der Generalversammlung des Vereins vorgelegt, eine Kopie an den zuständigen Sportverband gesandt.",
      "Представляется общему собранию ассоциации, копия направляется в соответствующую спортивную федерацию."
    ),
    keywords: ["تقرير أدبي رياضي", "rapport moral sportif", "sports report", "جمعية رياضية", "association sportive"],
  },
  {
    id: "jam-mahdar-intikhab-maktab-jam-riyadiya",
    cat: "jamaiyat",
    title: T7(
      "محضر انتخاب مكتب جمعية رياضية",
      "Procès-verbal d'élection du bureau d'une association sportive",
      "Minutes of the election of a sports association's board",
      "Acta de elección de la junta de una asociación deportiva",
      "Verbale di elezione del direttivo di un'associazione sportiva",
      "Protokoll der Wahl des Vorstands eines Sportvereins",
      "Протокол выборов правления спортивной ассоциации"
    ),
    desc: D7(
      "محضر يوثق عملية انتخاب أعضاء مكتب الجمعية الرياضية أمام الجمع العام الانتخابي.",
      "Procès-verbal documentant l'élection des membres du bureau de l'association sportive devant l'assemblée générale élective.",
      "Minutes documenting the election of the sports association's board members before the elective general meeting.",
      "Acta que documenta la elección de los miembros de la junta de la asociación deportiva ante la asamblea general electiva.",
      "Verbale che documenta l'elezione dei membri del direttivo dell'associazione sportiva davanti all'assemblea elettiva.",
      "Protokoll über die Wahl der Vorstandsmitglieder des Sportvereins vor der Wahlversammlung.",
      "Протокол, фиксирующий выборы членов правления спортивной ассоциации перед выборным общим собранием."
    ),
    where: W7(
      "يوقعه أعضاء الجمع العام وترفع نسخة منه إلى الجامعة الملكية المعنية.",
      "Signé par les membres de l'assemblée, une copie transmise à la fédération royale concernée.",
      "Signed by the assembly members, with a copy sent to the relevant royal federation.",
      "Lo firman los miembros de la asamblea y se envía copia a la federación real correspondiente.",
      "Firmato dai membri dell'assemblea, con copia trasmessa alla federazione reale competente.",
      "Von den Versammlungsmitgliedern unterzeichnet, eine Kopie an den zuständigen Königlichen Verband gesandt.",
      "Подписывается членами собрания, копия направляется в соответствующую королевскую федерацию."
    ),
    keywords: ["انتخاب المكتب", "élection du bureau", "board election", "جمعية رياضية", "association sportive"],
  },
  {
    id: "jam-talab-intikhatab-jamia-malakiya",
    cat: "jamaiyat",
    title: T7(
      "طلب الانخراط في جامعة ملكية",
      "Demande d'affiliation à une fédération royale",
      "Affiliation request to a royal federation",
      "Solicitud de afiliación a una federación real",
      "Richiesta di affiliazione a una federazione reale",
      "Antrag auf Anschluss an einen Königlichen Verband",
      "Заявление о вступлении в королевскую федерацию"
    ),
    desc: D7(
      "طلب توجهه الجمعية الرياضية إلى الجامعة الملكية المعنية للحصول على صفة المنخرط والمشاركة في المنافسات.",
      "Demande adressée par l'association sportive à la fédération royale compétente afin d'obtenir la qualité d'affilié et participer aux compétitions.",
      "Affiliation file sent by the sports association to the relevant royal federation for member status and competitions.",
      "Solicitud enviada por la asociación deportiva a la federación real competente para obtener la condición de afiliada y participar en las competiciones.",
      "Richiesta inviata dall'associazione sportiva alla federazione reale competente per ottenere lo status di affiliata e partecipare alle competizioni.",
      "Antrag des Sportvereins an den zuständigen Königlichen Verband auf Anschlussstatus und Teilnahme an Wettkämpfen.",
      "Заявление спортивной ассоциации в соответствующую королевскую федерацию о статусе члена и участии в соревнованиях."
    ),
    where: W7(
      "الجامعة الملكية المعنية بالرياضة، عبر مقرها الوطني.",
      "Fédération royale concernée, via son siège national.",
      "The relevant royal federation, via its national headquarters.",
      "La federación real correspondiente, a través de su sede nacional.",
      "La federazione reale competente, tramite la sede nazionale.",
      "Der zuständige Königliche Verband, über dessen Zentralsitz.",
      "Соответствующая королевская федерация через национальный штаб."
    ),
    keywords: ["انخراط", "affiliation", "جامعة ملكية", "fédération royale", "royal federation"],
  },
  {
    id: "jam-dawa-takwin-munakhitin",
    cat: "jamaiyat",
    title: T7(
      "دعوة لتكوين المنخرطين",
      "Invitation à une session de formation des adhérents",
      "Invitation to a members' training session",
      "Invitación a una sesión de formación de los miembros",
      "Invito a una sessione formativa per gli aderenti",
      "Einladung zu einer Schulung der Mitglieder",
      "Приглашение на обучающий курс для членов"
    ),
    desc: D7(
      "دعوة موجهة إلى منخرطي الجمعية لحضور حصص تكوينية تنظمها لتقوية كفاءاتهم الإدارية والتقنية.",
      "Invitation adressée aux adhérents de l'association à des sessions de formation organisées pour renforcer leurs compétences.",
      "Invitation sent to the association's members to attend training sessions organised to strengthen their skills.",
      "Invitación dirigida a los miembros de la asociación a sesiones de formación organizadas para reforzar sus competencias.",
      "Invito rivolto agli aderenti dell'associazione a sessioni di formazione organizzate per rafforzare le loro competenze.",
      "Einladung der Vereinsmitglieder zu Schulungsveranstaltungen, die zur Stärkung ihrer Kompetenzen organisiert werden.",
      "Приглашение членов ассоциации на учебные занятия, организуемые для повышения их квалификации."
    ),
    where: W7(
      "توجه إلى المنخرطين المعنيين عبر البريد أو الإعلان بمقر الجمعية.",
      "Adressée aux adhérents concernés par courrier ou annonce au siège de l'association.",
      "Sent to the members concerned by mail or announcement at the association's headquarters.",
      "Se envía a los miembros interesados por correo o anuncio en la sede de la asociación.",
      "Inviata agli aderenti interessati per posta o tramite avviso presso la sede dell'associazione.",
      "Zustellung an die betroffenen Mitglieder per Post oder Aushang im Vereinssitz.",
      "Направляется заинтересованным членам по почте или через объявление в штаб-квартире ассоциации."
    ),
    keywords: ["حصة تكوينية", "session de formation", "training session", "تكوين", "formation"],
  },
];
