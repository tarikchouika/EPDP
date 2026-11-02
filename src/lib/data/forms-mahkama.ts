// Justice & court forms — case filings, urgent applications, criminal
// record extracts and judicial requests. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsMahkama: DocumentItem[] = [
  // ─── Requêtes introductives & assignations ───
  {
    id: "mhk-maqal-qada-qarb",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي أمام قضاء القرب",
      "Requête introductive d'instance devant le juge de proximité",
      "Statement of claim before the small-claims (proximity) judge",
      "Demanda de inicio de proceso ante el juez de proximidad",
      "Atto di citazione davanti al giudice di prossimità",
      "Klageschrift vor dem Friedensrichter (juge de proximité)",
      "Исковое заявление в суд ближнего правосудия (малые иски)"
    ),
    desc: D7(
      "مقال افتتاحي يودع أمام قضاء القرب للمطالبة بحق مالي لا يتجاوز الاختصاص النهائي لهذا القضاء.",
      "Requête déposée devant le juge de proximité aux fins d'un droit pécuniaire n'excédant pas son seuil de compétence.",
      "Claim filed before the proximity judge to recover a sum within his final monetary jurisdiction.",
      "Demanda presentada ante el juez de proximidad para reclamar un importe dentro de su competencia máxima.",
      "Ricorso depositato davanti al giudice di prossimità per il recupero di un importo entro la sua competenza.",
      "Beim Friedensrichter eingereichte Klage auf eine Zahlung im Rahmen seiner erstinstanzlichen Zuständigkeit.",
      "Иск, подаваемый судье ближнего правосудия о взыскании суммы в пределах его окончательной компетенции."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التي يوجد بدائرتها قضاء القرب المختص.",
      "Greffe du tribunal de première instance dans le ressort duquel siège le juge de proximité compétent.",
      "Registry of the first-instance court in whose district the competent proximity judge sits.",
      "Secretaría del tribunal de primera instancia donde tiene su sede el juez de proximidad competente.",
      "Cancelleria del tribunale di primo grado nel cui distretto opera il giudice di prossimità competente.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts, in dessen Bezirk der zuständige Friedensrichter tätig ist.",
      "Канцелярия суда первой инстанции, в округе которого действует компетентный судья ближнего правосудия."
    ),
    authority: "justice",
    keywords: ["قضاء القرب", "مقال افتتاحي", "juge de proximité", "requête", "proximity judge", "المطالبة بمبلغ"],
  },
  {
    id: "mhk-maqal-istihqaq-ard",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي في دعوى استحقاق أرض فلاحية",
      "Requête introductive en action pétitoire portant sur une terre agricole",
      "Statement of claim in a petitory action over agricultural land",
      "Demanda de inicio de acción petitoria sobre tierra agrícola",
      "Atto di citazione in azione petitoria relativa a un terreno agricolo",
      "Klageschrift in einer petitorischen Klage über Agrarland",
      "Исковое заявление по виндикационному иску о сельскохозяйственном участке"
    ),
    desc: D7(
      "مقال يرفع أمام المحكمة المختصة لإثبات ملكية أرض فلاحية والاستحقاق عليها في مواجهة الحائز لها.",
      "Requête portée devant le tribunal compétent afin d'établir la propriété d'une terre agricole contre son détenteur.",
      "Claim brought before the competent court to establish ownership of farmland against the party holding it.",
      "Demanda presentada ante el tribunal competente para acreditar la propiedad de una tierra agrícola frente a su poseedor.",
      "Ricorso proposto davanti al tribunale competente per comprovare la proprietà di un terreno agricolo contro il detentore.",
      "Klage vor dem zuständigen Gericht zur Feststellung des Eigentums an Agrarland gegenüber dem Besitzer.",
      "Иск в компетентный суд для подтверждения права собственности на сельхозземлю против её держателя."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التابع لها العقار الفلاحي موضوع النزاع.",
      "Greffe du tribunal de première instance de la situation du bien agricole litigieux.",
      "Registry of the first-instance court where the disputed agricultural property is located.",
      "Secretaría del tribunal de primera instancia del lugar del inmueble agrícola controvertido.",
      "Cancelleria del tribunale di primo grado del luogo in cui si trova il fondo agricolo controverso.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts am Ort des streitigen Agrargrundstücks.",
      "Канцелярия суда первой инстанции по месту нахождения спорного сельхозучастка."
    ),
    authority: "justice",
    keywords: ["دعوى الاستحقاق", "أرض فلاحية", "action pétitoire", "terre agricole", "petitory action", "ملكية"],
  },
  {
    id: "mhk-maqal-tatliq-ghayba",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي من أجل التطليق للغيبة",
      "Requête introductive en demande de divorce pour absence",
      "Statement of claim for judicial divorce on grounds of absence",
      "Demanda de divorcio judicial por ausencia",
      "Atto di citazione per divorzio giudiziale per assenza",
      "Klageschrift auf gerichtliche Scheidung wegen Abwesenheit",
      "Исковое заявление о судебном разводе из-за отсутствия супруга"
    ),
    desc: D7(
      "مقال تقدمه الزوجة لمحكمة الأسرة قصد التطليق بسبب غياب الزوج عن بيت الزوجية دون عذر مشروع.",
      "Requête présentée par l'épouse au tribunal de la famille aux fins de divorce pour absence injustifiée du mari.",
      "Petition filed by the wife with the family court seeking divorce for the husband's unjustified absence.",
      "Demanda presentada por la esposa ante el tribunal de familia para divorciarse por ausencia injustificada del marido.",
      "Ricorso presentato dalla moglie al tribunale della famiglia per divorzio dovuto all'assenza ingiustificata del marito.",
      "Von der Ehefrau beim Familiengericht eingereichte Klage auf Scheidung wegen unentschuldigter Abwesenheit des Ehemanns.",
      "Иск жены в семейный суд о разводе из-за неуважительного отсутствия мужа в семье."
    ),
    where: W7(
      "كتابة ضبط محكمة الأسرة التابع لها محل إقامة الزوجة أو محل أبرام عقد الزواج.",
      "Greffe du tribunal de la famille du domicile de l'épouse ou du lieu de célébration du mariage.",
      "Registry of the family court of the wife's residence or of the place of marriage.",
      "Secretaría del tribunal de familia del domicilio de la esposa o del lugar de celebración del matrimonio.",
      "Cancelleria del tribunale della famiglia del domicilio della moglie o del luogo di celebrazione del matrimonio.",
      "Geschäftsstelle des Familiengerichts am Wohnort der Ehefrau oder am Ort der Eheschließung.",
      "Канцелярия семейного суда по месту жительства жены или заключения брака."
    ),
    authority: "justice",
    keywords: ["التطليق للغيبة", "divorce pour absence", "محكمة الأسرة", "بيت الزوجية", "absence", "مقال"],
  },
  {
    id: "mhk-maqal-ifragh",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي من أجل الإفراغ",
      "Requête introductive aux fins d'évacuation des lieux",
      "Statement of claim for eviction of premises",
      "Demanda de inicio de proceso de desalojo",
      "Atto di citazione per il rilascio dell'immobile",
      "Klageschrift auf Räumung der Räumlichkeiten",
      "Исковое заявление о выселении и освобождении помещения"
    ),
    desc: D7(
      "مقال يودع ضد المكتري أو الحائز قصد الحكم عليه بإفراغ المحل أو العقار المدعي فيه.",
      "Requête dirigée contre le locataire ou le détenteur aux fins de condamnation à libérer les lieux loués.",
      "Claim filed against the tenant or occupant seeking an order to vacate the leased premises.",
      "Demanda dirigida contra el inquilino u ocupante para que se le condene a desalojar el local arrendado.",
      "Ricorso proposto contro l'inquilino o il detentore per la condanna al rilascio dell'immobile locato.",
      "Klage gegen den Mieter oder Besitzer auf Verurteilung zur Räumung der gemieteten Räume.",
      "Иск к арендатору или занимающему лицу об обязании освободить помещение или спорный объект."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التابع لها موقع العقار المراد إفراغه.",
      "Greffe du tribunal de première instance de la situation de l'immeuble à libérer.",
      "Registry of the first-instance court where the premises to be vacated are located.",
      "Secretaría del tribunal de primera instancia del lugar del inmueble que debe desalojarse.",
      "Cancelleria del tribunale di primo grado del luogo dell'immobile da rilasciare.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts am Ort der zu räumenden Immobilie.",
      "Канцелярия суда первой инстанции по месту нахождения освобождаемого объекта."
    ),
    authority: "justice",
    keywords: ["الإفراغ", "évacuation des lieux", "eviction", "المكتري", "مقال", "libération"],
  },
  {
    id: "mhk-maqal-qisma",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي من أجل القسمة القضائية",
      "Requête introductive en partage judiciaire",
      "Statement of claim for judicial partition",
      "Demanda de inicio de partición judicial",
      "Atto di citazione per divisione giudiziale",
      "Klageschrift auf gerichtliche Teilung",
      "Исковое заявление о судебном разделе имущества"
    ),
    desc: D7(
      "مقال يقدم على الشياع لطلب قسمة العقار أو المال المشترك قسماً قضائياً عند تعذر القسمة الرضائية.",
      "Requête introduite contre les indivisaires aux fins de partage judiciaire du bien commun en cas d'accord impossible.",
      "Claim brought against co-owners for judicial partition of the common property where amicable division fails.",
      "Demanda interpuesta contra los copropietarios para la partición judicial del bien común cuando fracasa la partición amistosa.",
      "Ricorso proposto contro i comunisti per la divisione giudiziale del bene comune in mancanza di accordo.",
      "Klage gegen Miteigentümer auf gerichtliche Teilung des gemeinschaftlichen Gutes bei Scheitern der einvernehmlichen Teilung.",
      "Иск к сособственникам о судебном разделе общего имущества, когда добровольный раздел не достигнут."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التابع لها العقار المشترك موضوع القسمة.",
      "Greffe du tribunal de première instance de la situation de l'immeuble indivis à partager.",
      "Registry of the first-instance court where the undivided property to be partitioned is located.",
      "Secretaría del tribunal de primera instancia del lugar del inmueble indiviso que debe dividirse.",
      "Cancelleria del tribunale di primo grado del luogo dell'immobile indiviso da dividere.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts am Ort des zu teilenden ungeteilten Grundstücks.",
      "Канцелярия суда первой инстанции по месту нахождения подлежащего разделу имущества."
    ),
    authority: "justice",
    keywords: ["القسمة القضائية", "partage judiciaire", "judicial partition", "الشياع", "indivision", "مقال"],
  },
  {
    id: "mhk-maqal-daawa-madaniya",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي لدعوى مدنية",
      "Requête introductive d'instance en matière civile",
      "Statement of claim in a civil action",
      "Demanda de inicio de acción civil",
      "Atto di citazione in causa civile",
      "Klageschrift in einer Zivilklage",
      "Исковое заявление по гражданскому делу"
    ),
    desc: D7(
      "مقال افتتاحي عام يحدد فيه المدعي مطالبه ووسائله في دعوى مدنية أمام المحكمة المختصة.",
      "Requête générale dans laquelle le demandeur expose ses prétentions et moyens devant le tribunal compétent.",
      "General pleading in which the claimant sets out his demands and grounds before the competent court.",
      "Escrito general en el que el demandante expone sus pretensiones y fundamentos ante el tribunal competente.",
      "Atto generale con cui l'attore espone le proprie domande e motivi davanti al tribunale competente.",
      "Allgemeine Klageschrift, in der der Kläger seine Anträge und Begründung vor dem zuständigen Gericht darlegt.",
      "Исковое заявление, в котором истец излагает свои требования и доводы перед компетентным судом."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية المختصة نوعياً ومحلياً بالنظر في الدعوى.",
      "Greffe du tribunal de première instance territorialement et matériellement compétent pour connaître de la demande.",
      "Registry of the first-instance court with territorial and subject-matter jurisdiction over the claim.",
      "Secretaría del tribunal de primera instancia competente por razón de territorio y de materia.",
      "Cancelleria del tribunale di primo grado competente per territorio e per materia.",
      "Geschäftsstelle des örtlich und sachlich zuständigen Erstinstanzlichen Gerichts.",
      "Канцелярия суда первой инстанции, компетентного по территории и предмету спора."
    ),
    authority: "justice",
    keywords: ["دعوى مدنية", "action civile", "civil action", "المدعي", "مقال افتتاحي", "requête"],
  },
  {
    id: "mhk-maqal-istinafi-nafaqa",
    cat: "mahkama",
    title: T7(
      "مقال استئنافي للطعن في حكم النفقة",
      "Requête d'appel contre un jugement de pension alimentaire",
      "Appellate brief contesting an alimony judgment",
      "Escrito de apelación contra una sentencia de pensión alimenticia",
      "Atto d'appello avverso una sentenza sugli alimenti",
      "Berufungsschrift gegen ein Unterhaltsurteil",
      "Апелляционная жалоба на решение о выплате алиментов"
    ),
    desc: D7(
      "مقال استئنافي يودع داخل الأجل القانوني للطعن في تقدير النفقة أو تحميلها أمام محكمة الاستئناف.",
      "Recours déposé dans le délai légal contre la fixation ou l'octroi de la pension devant la cour d'appel.",
      "Appeal lodged within the legal deadline against the setting or award of alimony before the court of appeal.",
      "Recurso presentado dentro del plazo legal contra la fijación de la pensión ante el tribunal de apelación.",
      "Appello proposto entro il termine legale avverso la liquidazione degli alimenti dinanzi alla corte d'appello.",
      "Innerhalb der Rechtsfrist eingelegte Berufung gegen die Unterhaltsfestsetzung vor dem Berufungsgericht.",
      "Апелляция, подаваемая в законный срок на размер алиментов в апелляционный суд."
    ),
    where: W7(
      "كتابة ضبط محكمة الاستئناف التابع لها محكمة الأسرة مصدرة الحكم.",
      "Greffe de la cour d'appel relevant du tribunal de la famille ayant rendu la décision.",
      "Registry of the court of appeal to which the deciding family court reports.",
      "Secretaría del tribunal de apelación al que corresponde el tribunal de familia que dictó la sentencia.",
      "Cancelleria della corte d'appello cui corrisponde il tribunale della famiglia che ha emesso la sentenza.",
      "Geschäftsstelle des Berufungsgerichts, dem das entscheidende Familiengericht untersteht.",
      "Канцелярия апелляционного суда, которому подсуден семейный суд, вынесший решение."
    ),
    authority: "justice",
    keywords: ["استئناف", "appel", "النفقة", "pension alimentaire", "محكمة الاستئناف", "الطعن"],
  },
  {
    id: "mhk-maqal-tatliq-shiqaq",
    cat: "mahkama",
    title: T7(
      "مقال افتتاحي من أجل التطليق للشقاق",
      "Requête introductive en demande de divorce pour discorde",
      "Statement of claim for judicial divorce on grounds of discord",
      "Demanda de divorcio judicial por discordia",
      "Atto di citazione per divorzio giudiziale per discordia",
      "Klageschrift auf gerichtliche Scheidung wegen Zerwürfnisses",
      "Исковое заявление о судебном разводе из-за разлада"
    ),
    desc: D7(
      "مقال ترفعه الزوجة أو الزوج لمحكمة الأسرة للتفريق بينهما بسبب الشقاق المستحكم بينهما.",
      "Requête présentée par l'un des époux au tribunal de la famille aux fins de divorce pour discorde irrémédiable.",
      "Petition filed by either spouse with the family court seeking divorce due to irreconcilable discord.",
      "Demanda presentada por cualquiera de los cónyuges ante el tribunal de familia para divorciarse por discordia irreconciliable.",
      "Ricorso presentato da uno dei coniugi al tribunale della famiglia per il divorzio per discordia insanabile.",
      "Von einem Ehegatten beim Familiengericht eingereichter Antrag auf Scheidung wegen unüberbrückbarer Zerrüttung.",
      "Иск одного из супругов в семейный суд о разводе из-за непримиримого разлада между ними."
    ),
    where: W7(
      "كتابة ضبط محكمة الأسرة التابع لها بيت الزوجية أو محل إقامة الزوجين.",
      "Greffe du tribunal de la famille du domicile conjugal ou de la résidence des époux.",
      "Registry of the family court of the marital home or of the spouses' residence.",
      "Secretaría del tribunal de familia del domicilio conyugal o de la residencia de los cónyuges.",
      "Cancelleria del tribunale della famiglia del domicilio coniugale o della residenza dei coniugi.",
      "Geschäftsstelle des Familiengerichts am Ort der Ehewohnung oder des Wohnsitzes der Ehegatten.",
      "Канцелярия семейного суда по месту жительства семьи или месту пребывания супругов."
    ),
    authority: "justice",
    keywords: ["التطليق للشقاق", "divorce pour discorde", "محكمة الأسرة", "التفريق", "discorde", "مقال"],
  },
  {
    id: "mhk-maqal-istijali-raf-hajz",
    cat: "mahkama",
    title: T7(
      "مقال استعجالي لرفع الحجز لدى الغير عن حساب بنكي",
      "Requête en référé pour mainlevée d'une saisie-arrêt sur compte bancaire",
      "Urgent application to lift a third-party attachment on a bank account",
      "Demanda urgente de levantamiento de embargo de tercero sobre una cuenta bancaria",
      "Ricorso d'urgenza per la liberazione del pignoramento presso terzi su un conto bancario",
      "Eilantrag auf Aufhebung der Pfändung eines Bankkontos",
      "Ходатайство в порядке срочного производства об отмене ареста банковского счёта"
    ),
    desc: D7(
      "مقال استعجالي يرفع أمام قاضي المستعجلات لرفع حجز لدى الغير وقع على حساب بنكي بصفة غير مبررة.",
      "Référé porté devant le juge des référés aux fins de mainlevée d'une saisie-arrêt injustifiée frappant un compte bancaire.",
      "Interlocutory application to the summary judge for release of an unjustified attachment on a bank account.",
      "Procedimiento urgente ante el juez de lo cautelar para levantar un embargo injustificado sobre una cuenta bancaria.",
      "Ricorso d'urgenza al giudice cautelare per la liberazione di un pignoramento ingiustificato su un conto bancario.",
      "Eilantrag beim Richter des einstweiligen Verfügungsverfahrens auf Aufhebung einer unbegründeten Kontenpfändung.",
      "Срочное ходатайство к судье о снятии необоснованного ареста, наложенного на банковский счёт."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التي يوجد بدائرتها البنك المحجوز لديه.",
      "Greffe du tribunal de première instance du ressort de la banque tiers détentrice.",
      "Registry of the first-instance court in whose district the garnished bank is located.",
      "Secretaría del tribunal de primera instancia de la circunscripción del banco retenedor.",
      "Cancelleria del tribunale di primo grado del distretto della banca terza pignorata.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts im Bezirk der drittschuldnerischen Bank.",
      "Канцелярия суда первой инстанции по месту нахождения банка, удерживающего средства."
    ),
    authority: "justice",
    keywords: ["الحجز لدى الغير", "saisie-arrêt", "mainlevée", "رفع الحجز", "attachment", "حساب بنكي"],
  },
  {
    id: "mhk-maqal-istijab-mufawwad",
    cat: "mahkama",
    title: T7(
      "مقال رام إلى إجراء استجواب ومعاينة بواسطة مفوض قضائي",
      "Requête tendant à une audition et un constat par commissaire judiciaire",
      "Application for an interrogation and on-site inspection by a judicial officer",
      "Solicitud de interrogatorio y constatación mediante comisario judicial",
      "Ricorso per un interrogatorio e una constatazione tramite commissario giudiziario",
      "Antrag auf Anhörung und Beweisaufnahme durch den Gerichtsvollzieher",
      "Ходатайство о допросе и осмотре с участием судебного исполнителя"
    ),
    desc: D7(
      "مقال يلتمس من المحكمة تكليف مفوض قضائي بإجراء استجواب الأطراف ومعاينة الوقائع محل النزاع.",
      "Requête aux fins de désignation d'un commissaire judiciaire pour entendre les parties et constater les faits litigieux.",
      "Application asking the court to appoint a judicial officer to hear the parties and establish the disputed facts.",
      "Solicitud que pide al tribunal designar un comisario judicial para oír a las partes y constatar los hechos controvertidos.",
      "Ricorso che chiede al tribunale di nominare un commissario giudiziario per sentire le parti e constatare i fatti controversi.",
      "Antrag, dem Gericht einen Gerichtsvollzieher zur Anhörung der Parteien und Feststellung der strittigen Tatsachen zu benennen.",
      "Ходатайство о назначении судебного исполнителя для допроса сторон и фиксации спорных обстоятельств."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية الناظرة في الملف موضوع طلب المعاينة.",
      "Greffe du tribunal de première instance saisi du dossier visé par la demande de constat.",
      "Registry of the first-instance court handling the file concerned by the inspection request.",
      "Secretaría del tribunal de primera instancia que conoce del expediente objeto de la constatación.",
      "Cancelleria del tribunale di primo grado che tratta il fascicolo oggetto della richiesta di constatazione.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts, das die Sache der Beweisaufnahme behandelt.",
      "Канцелярия суда первой инстанции, рассматривающего дело, по которому заявлен осмотр."
    ),
    authority: "justice",
    keywords: ["مفوض قضائي", "commissaire judiciaire", "معاينة", "constat", "استجواب", "judicial officer"],
  },
  // ─── Extraits, casier judiciaire & restitution ───
  {
    id: "mhk-naskha-tanfiziya",
    cat: "mahkama",
    title: T7(
      "طلب نسخة تنفيذية من حكم",
      "Demande de copie exécutoire d'un jugement",
      "Request for an enforceable copy of a judgment",
      "Solicitud de copia ejecutiva de una sentencia",
      "Richiesta di copia esecutiva di una sentenza",
      "Antrag auf vollstreckbare Ausfertigung eines Urteils",
      "Заявление о выдаче исполнительной копии решения суда"
    ),
    desc: D7(
      "طلب يقدم لتسليم نسخة من الحكم متضمنة الصيغة التنفيذية قصد مباشرة إجراءات التنفيذ.",
      "Demande tendant à la délivrance d'une copie du jugement revêtue de la formule exécutoire pour engager l'exécution.",
      "Request for delivery of a copy of the judgment bearing the enforcement formula to start execution.",
      "Solicitud de entrega de una copia de la sentencia con la fórmula ejecutiva para iniciar la ejecución.",
      "Richiesta di consegna di una copia della sentenza munita della formula esecutiva per avviare l'esecuzione.",
      "Antrag auf Erteilung einer mit der Vollstreckungsklausel versehenen Urteilsausfertigung zur Einleitung der Vollstreckung.",
      "Заявление о выдаче копии решения с исполнительной формулой для начала принудительного исполнения."
    ),
    where: W7(
      "كتابة ضبط المحكمة مصدرة الحكم، مع أداء الرسوم القضائية المطلوبة.",
      "Greffe du tribunal ayant rendu le jugement, contre paiement des frais judiciaires dus.",
      "Registry of the court that issued the judgment, upon payment of the court fees.",
      "Secretaría del tribunal que dictó la sentencia, previo pago de las tasas judiciales.",
      "Cancelleria del tribunale che ha emesso la sentenza, previo pagamento delle tasse giudiziarie.",
      "Geschäftsstelle des Urteilsgerichts gegen Zahlung der Gerichtsgebühren.",
      "Канцелярия суда, вынесшего решение, после уплаты судебных сборов."
    ),
    authority: "justice",
    keywords: ["نسخة تنفيذية", "copie exécutoire", "الصيغة التنفيذية", "enforcement formula", "التنفيذ", "jugement"],
  },
  {
    id: "mhk-sahab-naskha-hukm",
    cat: "mahkama",
    title: T7(
      "طلب سحب نسخة من حكم أو وثيقة من المحكمة",
      "Demande de retrait d'une copie de jugement ou d'une pièce auprès du tribunal",
      "Request by a party to withdraw a copy of a judgment or document from the court",
      "Solicitud de retiro de una copia de sentencia o de un documento del tribunal",
      "Richiesta di ritiro di una copia di sentenza o di un atto presso il tribunale",
      "Antrag auf Abholung einer Urteilskopie oder eines Schriftstücks beim Gericht",
      "Заявление о получении копии решения или документа из суда"
    ),
    desc: D7(
      "طلب يقدمه أحد الأطراف أو وكيله لسحب نسخة من حكم أو وثيقة من ملفه المحفوظ بكتابة الضبط.",
      "Demande formée par une partie ou son mandataire pour retirer une copie d'un jugement ou d'une pièce du dossier.",
      "Request filed by a party or proxy to obtain a copy of a judgment or document held in the court file.",
      "Solicitud presentada por una parte o su apoderado para retirar una copia de una sentencia o documento del expediente.",
      "Richiesta presentata da una parte o dal suo procuratore per ritirare una copia di sentenza o di atto dal fascicolo.",
      "Von einer Partei oder ihrem Bevollmächtigten gestellter Antrag auf Herausgabe einer Kopie aus der Gerichtsakte.",
      "Заявление стороны или её представителя о выдаче копии решения или документа из судебного дела."
    ),
    where: W7(
      "كتابة ضبط المحكمة المودع بها الملف، بحضور المعني أو بمقتضى وكالة.",
      "Greffe du tribunal détenteur du dossier, en personne ou muni d'une procuration.",
      "Registry of the court holding the file, in person or with a power of attorney.",
      "Secretaría del tribunal custodio del expediente, en persona o con poder.",
      "Cancelleria del tribunale depositario del fascicolo, di persona o muniti di procura.",
      "Geschäftsstelle des die Akte verwahrenden Gerichts, persönlich oder mit Vollmacht.",
      "Канцелярия суда, хранящего дело, лично или по доверенности."
    ),
    authority: "justice",
    keywords: ["سحب نسخة", "retrait de copie", "كتابة الضبط", "jugement", "نسخة من حكم", "dossier"],
  },
  {
    id: "mhk-sijil-adali-internet",
    cat: "mahkama",
    title: T7(
      "طلب السجل العدلي عبر الإنترنت",
      "Demande du casier judiciaire en ligne",
      "Online application for the criminal record extract",
      "Solicitud en línea del certificado de antecedentes penales",
      "Richiesta online del certificato del casellario giudiziale",
      "Online-Antrag auf das Führungszeugnis",
      "Онлайн-заявка на справку о судимости"
    ),
    desc: D7(
      "مسطرة إلكترونية تتيح طلب البطاقة رقم 3 من السجل العدلي عبر البوابة الرسمية دون تنقل.",
      "Procédure dématérialisée permettant de demander le bulletin n°3 du casier judiciaire via le portail officiel sans déplacement.",
      "Digital procedure to request bulletin no. 3 of the criminal record through the official portal without travel.",
      "Trámite digital para solicitar el boletín n.º 3 del certificado de antecedentes penales por el portal oficial sin desplazarse.",
      "Procedura telematica per richiedere il bollettino n. 3 del casellario tramite il portale ufficiale senza spostarsi.",
      "Digitales Verfahren zur Beantragung des Führungszeugnisses Blatt 3 über das offizielle Portal ohne Behördengang.",
      "Электронная процедура запроса справки о судимости (лист 3) через официальный портал без визита."
    ),
    where: W7(
      "بوابة السجل العدلي الإلكترونية casierjudiciaire.justice.gov.ma بمعلومية رقم البطاقة الوطنية.",
      "Portail en ligne du casier judiciaire casierjudiciaire.justice.gov.ma avec le numéro de la CIN.",
      "Online criminal-record portal casierjudiciaire.justice.gov.ma using the national ID number.",
      "Portal en línea del certificado de antecedentes casierjudiciaire.justice.gov.ma con el número del DNI.",
      "Portale online del casellario casierjudiciaire.justice.gov.ma con il numero della carta d'identità.",
      "Online-Portal des Führungszeugnisses casierjudiciaire.justice.gov.ma mit der Ausweisnummer.",
      "Онлайн-портал справок о судимости casierjudiciaire.justice.gov.ma по номеру удостоверения личности."
    ),
    authority: "casier-judiciaire",
    keywords: ["السجل العدلي", "عبر الإنترنت", "casier judiciaire en ligne", "online criminal record", "البطاقة 3", "B3"],
    popular: true,
  },
  {
    id: "mhk-bitaqa-3-chughl",
    cat: "mahkama",
    title: T7(
      "طلب بطاقة رقم 3 من السجل العدلي لأغراض الشغل",
      "Demande du bulletin n°3 du casier judiciaire à des fins d'emploi",
      "Application for criminal-record bulletin no. 3 for employment purposes",
      "Solicitud del boletín n.º 3 de antecedentes penales para fines laborales",
      "Richiesta del bollettino n. 3 del casellario per scopi di lavoro",
      "Antrag auf Führungszeugnis Blatt 3 zu Beschäftigungszwecken",
      "Заявление на справку о судимости (лист 3) для трудоустройства"
    ),
    desc: D7(
      "طلب يقدمه طالب الشغل للحصول على بطاقة رقم 3 خالية من الأحكام يطلبها المشغل عند التوظيف.",
      "Demande formée par le candidat à l'emploi pour obtenir le bulletin n°3 vierge exigé par l'employeur au recrutement.",
      "Application by a job seeker to obtain the clean bulletin no. 3 required by employers upon hiring.",
      "Solicitud del candidato a un empleo para obtener el boletín n.º 3 limpio exigido por el empleador al contratar.",
      "Richiesta del candidato a un impiego per ottenere il bollettino n. 3 pulito richiesto dal datore di lavoro.",
      "Antrag eines Stellenbewerbers auf das saubere Blatt 3, das Arbeitgeber bei der Einstellung verlangen.",
      "Заявление соискателя на получение чистого листа 3, требуемого работодателем при приёме на работу."
    ),
    where: W7(
      "مصلحة السجل العدلي بالمحكمة الابتدائية لمحل الولادة أو الإقامة، أو البوابة الإلكترونية.",
      "Service du casier judiciaire du tribunal de première instance du lieu de naissance ou de résidence, ou portail en ligne.",
      "Criminal-record office of the first-instance court of birth or residence, or the online portal.",
      "Servicio de antecedentes penales del tribunal de primera instancia del lugar de nacimiento o residencia, o el portal en línea.",
      "Ufficio del casellario del tribunale di primo grado del luogo di nascita o residenza, oppure il portale online.",
      "Führungszeugnisstelle des Erstinstanzlichen Gerichts am Geburts- oder Wohnort, oder das Online-Portal.",
      "Служба судебной справки суда первой инстанции по месту рождения или жительства, либо онлайн-портал."
    ),
    authority: "justice",
    keywords: ["بطاقة رقم 3", "bulletin n°3", "الشغل", "emploi", "التوظيف", "extrait vierge"],
  },
  {
    id: "mhk-wakil-almalik-b3",
    cat: "mahkama",
    title: T7(
      "طلب إلى وكيل الملك من أجل عدم تضمين حكم في البطاقة رقم 3",
      "Demande au procureur du Roi de non-inclusion d'un jugement au bulletin n°3",
      "Request to the King's Prosecutor not to include a judgment in bulletin no. 3",
      "Solicitud al procurador del Rey de no inclusión de una sentencia en el boletín n.º 3",
      "Richiesta al procuratore del Re di non inclusione di una sentenza nel bollettino n. 3",
      "Antrag an den Königlichen Staatsanwalt auf Nichtaufnahme eines Urteils in Blatt 3",
      "Ходатайство королевскому прокурору о невключении приговора в лист 3"
    ),
    desc: D7(
      "طلب يقدم إلى وكيل الملك قصد عدم تضمين حكم بعينه في البطاقة رقم 3 طبقاً للشروط القانونية.",
      "Demande adressée au procureur du Roi afin qu'un jugement déterminé ne soit pas mentionné au bulletin n°3.",
      "Request addressed to the King's Prosecutor that a specific judgment not be mentioned in bulletin no. 3.",
      "Solicitud dirigida al procurador del Rey para que una sentencia determinada no se mencione en el boletín n.º 3.",
      "Richiesta indirizzata al procuratore del Re affinché un determinato giudizio non sia menzionato nel bollettino n. 3.",
      "Antrag an den Königlichen Staatsanwalt, dass ein bestimmtes Urteil im Blatt 3 nicht erwähnt wird.",
      "Ходатайство королевскому прокурору о том, чтобы конкретный приговор не упоминался в листе 3."
    ),
    where: W7(
      "النيابة العامة بالمحكمة الابتدائية مصدرة الحكم موضوع الطلب.",
      "Parquet général auprès du tribunal de première instance ayant rendu le jugement visé.",
      "Public prosecutor's office at the first-instance court that issued the judgment concerned.",
      "Fiscalía del tribunal de primera instancia que dictó la sentencia de que se trata.",
      "Procura presso il tribunale di primo grado che ha emesso il giudizio interessato.",
      "Staatsanwaltschaft beim Erstinstanzlichen Gericht, das das betroffene Urteil erlassen hat.",
      "Прокуратура при суде первой инстанции, вынесшем соответствующий приговор."
    ),
    authority: "justice",
    keywords: ["عدم تضمين", "وكيل الملك", "procureur du Roi", "البطاقة رقم 3", "bulletin n°3", "النيابة العامة"],
  },
  {
    id: "mhk-daraja-muhjaza",
    cat: "mahkama",
    title: T7(
      "طلب استرجاع دراجة نارية محجوزة من رئيس المحكمة",
      "Demande de restitution d'une motocyclette saisie auprès du président du tribunal",
      "Request to the court president for the return of a seized motorcycle",
      "Solicitud de devolución de una motocicleta decomisada al presidente del tribunal",
      "Richiesta di restituzione di una motocicletta sequestrata al presidente del tribunale",
      "Antrag beim Gerichtspräsidenten auf Herausgabe eines beschlagnahmten Motorrads",
      "Ходатайство председателю суда о возврате изъятого мотоцикла"
    ),
    desc: D7(
      "طلب يرفع إلى رئيس المحكمة من أجل استرجاع دراجة نارية محجوزة في إطار مسطرة قضائية بعد زوال موجباتها.",
      "Demande soumise au président du tribunal aux fins de restitution d'une moto saisie dans le cadre d'une procédure judiciaire.",
      "Request submitted to the court president for the return of a motorcycle seized in the course of judicial proceedings.",
      "Solicitud presentada al presidente del tribunal para la devolución de una moto decomisada en el marco de un proceso judicial.",
      "Richiesta presentata al presidente del tribunale per la restituzione di una moto sequestrata nell'ambito di un procedimento giudiziario.",
      "Antrag an den Gerichtspräsidenten auf Herausgabe eines im Rahmen eines Gerichtsverfahrens beschlagnahmten Motorrads.",
      "Ходатайство председателю суда о возврате мотоцикла, изъятого в ходе судебного производства."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية مصدرة قرار الحجز، موجهة إلى رئيسها.",
      "Greffe du tribunal de première instance ayant ordonné la saisie, à l'attention de son président.",
      "Registry of the first-instance court that ordered the seizure, for the attention of its president.",
      "Secretaría del tribunal de primera instancia que ordenó el decomiso, a la atención de su presidente.",
      "Cancelleria del tribunale di primo grado che ha disposto il sequestro, all'attenzione del suo presidente.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts, das die Beschlagnahme angeordnet hat, zu Händen des Präsidenten.",
      "Канцелярия суда первой инстанции, постановившего об изъятии, на имя его председателя."
    ),
    authority: "justice",
    keywords: ["دراجة نارية", "motocyclette saisie", "استرجاع", "restitution", "رئيس المحكمة", "حجز"],
  },
  // ─── Requêtes diverses auprès du tribunal ───
  {
    id: "mhk-misra-maysara",
    cat: "mahkama",
    title: T7(
      "طلب منح مهلة الميسرة من المحكمة",
      "Demande d'octroi de délai de grâce auprès du tribunal",
      "Application to the court for a grace period",
      "Solicitud de plazo de gracia ante el tribunal",
      "Domanda di dilazione di grazia al tribunale",
      "Antrag auf Gnadenfrist beim Gericht",
      "Ходатайство в суд об отсрочке (льготный срок)"
    ),
    desc: D7(
      "طلب يقدم للمحكمة للاستفادة من أجل إضافي لتسديد مبلغ محكوم به على المعني.",
      "Demande adressée au tribunal pour bénéficier d'un délai supplémentaire de paiement d'une somme condamnée.",
      "Application filed with the court to obtain extra time to pay a sums adjudged against the applicant.",
      "Solicitud presentada ante el tribunal para obtener un plazo adicional de pago.",
      "Domanda al tribunale per ottenere un termine ulteriore di pagamento.",
      "Antrag beim Gericht auf eine zusätzliche Zahlungsfrist.",
      "Ходатайство в суд о дополнительном сроке для уплаты присуждённой суммы."
    ),
    where: W7(
      "كتابة ضمان المحكمة المختصة (محل صدور الحكم أو سكنى المعني)",
      "Greffe du tribunal compétent (lieu du jugement ou résidence)",
      "Registry of the competent court (judgment venue or residence)",
      "Secretaría del tribunal competente",
      "Cancelleria del tribunale competente",
      "Geschäftsstelle des zuständigen Gerichts",
      "Канцелярия компетентного суда"
    ),
    authority: "justice",
    keywords: ["مهلة الميسرة", "délai de grâce", "grace period", "محكمة", "tribunal", "أجل"],
    popular: true,
  },
  {
    id: "mhk-ikrah-badani",
    cat: "mahkama",
    title: T7(
      "طلب تطبيق مسطرة الإكراه البدني",
      "Demande d'application de la procédure de contrainte par corps",
      "Application for the body-distraint procedure against a debtor",
      "Solicitud de aplicación del procedimiento de apremio corporal",
      "Richiesta di applicazione della procedura di coercizione personale",
      "Antrag auf Anwendung des Zwangshaftverfahrens",
      "Заявление о применении процедуры личного задержания за долг"
    ),
    desc: D7(
      "طلب يقدمه الدائن إلى النيابة العامة لتطبيق الإكراه البدني على المدين المماطل في الأداء.",
      "Demande formée par le créancier auprès du parquet aux fins de contrainte par corps contre le débiteur défaillant.",
      "Application filed by the creditor with the prosecution for body-distraint against a defaulting debtor.",
      "Solicitud presentada por el acreedor ante la fiscalía para aplicar el apremio corporal contra el deudor moroso.",
      "Richiesta presentata dal creditore alla procura per applicare la coercizione personale contro il debitore inadempiente.",
      "Antrag des Gläubigers bei der Staatsanwaltschaft auf Zwangshaft gegen den säumigen Schuldner.",
      "Заявление кредитора в прокуратуру о применении личного задержания к недобросовестному должнику."
    ),
    where: W7(
      "النيابة العامة بالمحكمة الابتدائية التابع لها محل إقامة المدين.",
      "Parquet général auprès du tribunal de première instance du domicile du débiteur.",
      "Public prosecutor's office at the first-instance court of the debtor's domicile.",
      "Fiscalía del tribunal de primera instancia del domicilio del deudor.",
      "Procura presso il tribunale di primo grado del domicilio del debitore.",
      "Staatsanwaltschaft beim Erstinstanzlichen Gericht am Wohnsitz des Schuldners.",
      "Прокуратура при суде первой инстанции по месту жительства должника."
    ),
    authority: "justice",
    keywords: ["الإكراه البدني", "contrainte par corps", "المدين", "débiteur", "النيابة العامة", "body-distraint"],
  },
  {
    id: "mhk-takwin-taraf-madani",
    cat: "mahkama",
    title: T7(
      "مقال تكوين طرف مدني",
      "Requête de constitution de partie civile",
      "Petition to constitute a civil party in criminal proceedings",
      "Escrito de constitución de parte civil",
      "Atto di costituzione di parte civile",
      "Antrag auf Beteiligung als Zivilpartei im Strafverfahren",
      "Заявление о признании гражданским истцом в уголовном деле"
    ),
    desc: D7(
      "مقال يقدمه المتضرر أمام المحكمة الزجرية لتكوين طرف مدني والمطالبة بالتعويض عن الضرر.",
      "Requête présentée par la victime devant la juridiction pénale aux fins de constitution de partie civile et d'indemnisation.",
      "Petition filed by the victim before the criminal court to join as civil party and claim damages.",
      "Escrito presentado por la víctima ante la jurisdicción penal para constituirse en parte civil y reclamar indemnización.",
      "Atto presentato dalla vittima dinanzi alla giurisdizione penale per costituirsi parte civile e chiedere il risarcimento.",
      "Von dem Geschädigten beim Strafgericht eingereichter Schriftsatz zum Anschluss als Zivilpartei und auf Schadensersatz.",
      "Заявление потерпевшего в уголовный суд о признании гражданским истцом и взыскании возмещения."
    ),
    where: W7(
      "كتابة ضبط المحكمة الزجرية الناظرة في المتابعة أو النيابة العامة.",
      "Greffe de la juridiction pénale saisie des poursuites ou parquet général.",
      "Registry of the criminal court seized of the prosecution, or the public prosecutor's office.",
      "Secretaría de la jurisdicción penal que conoce de la persecución o la fiscalía.",
      "Cancelleria della giurisdizione penale investita del procedimento oppure la procura.",
      "Geschäftsstelle des mit der Strafverfolgung befassten Gerichts oder die Staatsanwaltschaft.",
      "Канцелярия уголовного суда, рассматривающего уголовное преследование, либо прокуратура."
    ),
    authority: "justice",
    keywords: ["طرف مدني", "partie civile", "المتضرر", "التعويض", "damages", "مقال"],
  },
  {
    id: "mhk-musaada-qadaia",
    cat: "mahkama",
    title: T7(
      "طلب المساعدة القضائية",
      "Demande d'assistance judiciaire",
      "Application for legal aid",
      "Solicitud de asistencia judicial",
      "Richiesta di assistenza giudiziaria",
      "Antrag auf Prozesskostenhilfe",
      "Заявление о судебной помощи"
    ),
    desc: D7(
      "طلب يقدمه المعوز أو ذو الدخل المحدود للاستفادة من المساعدة القضائية لتغطية أتعاب المحامي والمصاريف.",
      "Demande formée par l'indigent afin de bénéficier de l'assistance judiciaire couvrant les honoraires et frais de justice.",
      "Application filed by an indigent person to obtain legal aid covering counsel fees and court costs.",
      "Solicitud presentada por una persona indigente para obtener asistencia judicial que cubra honorarios y costas.",
      "Richiesta presentata da una persona indigente per ottenere l'assistenza giudiziaria che copre onorari e spese.",
      "Antrag einer mittellosen Person auf Prozesskostenhilfe zur Deckung von Anwalts- und Gerichtskosten.",
      "Заявление малоимущего о предоставлении судебной помощи для оплаты услуг адвоката и судебных расходов."
    ),
    where: W7(
      "كتابة ضبط المحكمة التي سيُرفع إليها الموضوع، مشفوعاً بشهادة العوز.",
      "Greffe de la juridiction devant laquelle l'affaire sera portée, avec certificat d'indigence.",
      "Registry of the court before which the case will be brought, with a certificate of indigence.",
      "Secretaría del tribunal ante el cual se presentará el caso, con certificado de pobreza.",
      "Cancelleria del tribunale davanti al quale sarà proposta la causa, con attestazione di povertà.",
      "Geschäftsstelle des Gerichts, bei dem die Sache anhängig wird, mit Armutszeugnis.",
      "Канцелярия суда, в который будет подано дело, со справкой о малоимущности."
    ),
    authority: "justice",
    keywords: ["المساعدة القضائية", "assistance judiciaire", "legal aid", "العوز", "indigence", "محامي"],
    popular: true,
  },
  {
    id: "mhk-tajil-jalsa",
    cat: "mahkama",
    title: T7(
      "طلب تأجيل الجلسة",
      "Demande de renvoi de l'audience",
      "Request to postpone a court hearing",
      "Solicitud de aplazamiento de la vista",
      "Richiesta di rinvio dell'udienza",
      "Antrag auf Vertagung des Termins",
      "Ходатайство об отложении судебного заседания"
    ),
    desc: D7(
      "طلب يودع أمام المحكمة لتأجيل الجلسة المحددة لعذر مشروع مع بيان الوسائل المؤيدة له.",
      "Demande déposée en vue du renvoi de l'audience fixée pour un motif légitime, moyens justificatifs à l'appui.",
      "Request filed seeking postponement of the scheduled hearing for a legitimate reason, with supporting evidence.",
      "Solicitud presentada para aplazar la vista señalada por un motivo legítimo, con justificantes de apoyo.",
      "Richiesta presentata per il rinvio dell'udienza fissata per un motivo legittimo, con documenti giustificativi.",
      "Antrag auf Vertagung des anberaumten Termins aus berechtigtem Grund unter Beifügung der Nachweise.",
      "Ходатайство об отложении назначенного заседания по уважительной причине с подтверждающими документами."
    ),
    where: W7(
      "كتابة ضبط المحكمة الناظرة في القضية أو مباشرة بالجلسة عبر رئيسها.",
      "Greffe de la juridiction saisie du dossier ou directement à l'audience par son président.",
      "Registry of the court handling the case, or directly at the hearing through its president.",
      "Secretaría del tribunal que conoce del caso o directamente en la vista a través de su presidente.",
      "Cancelleria del tribunale che tratta il caso oppure direttamente in udienza tramite il presidente.",
      "Geschäftsstelle des mit der Sache befassten Gerichts oder direkt in der Verhandlung über den Vorsitzenden.",
      "Канцелярия суда, рассматривающего дело, либо непосредственно в заседании через его председателя."
    ),
    authority: "justice",
    keywords: ["تأجيل الجلسة", "renvoi d'audience", "adjournment", "عذر مشروع", "postponement", "المحكمة"],
  },
  {
    id: "mhk-musadaka-sulh",
    cat: "mahkama",
    title: T7(
      "طلب المصادقة على صلح",
      "Demande d'homologation d'une transaction",
      "Application for court approval of a settlement",
      "Solicitud de homologación de una transacción",
      "Richiesta di omologazione di una transazione",
      "Antrag auf gerichtliche Bestätigung eines Vergleichs",
      "Заявление об утверждении мирового соглашения"
    ),
    desc: D7(
      "طلب يقدمه المتصالحان إلى المحكمة للمصادقة على صلحهما ليكتسب قوة الحكم الأمرية.",
      "Demande présentée par les parties réconciliées au tribunal aux fins d'homologation de leur transaction.",
      "Application by the settling parties to the court for approval of their settlement agreement.",
      "Solicitud de las partes conciliadas al tribunal para la homologación de su transacción.",
      "Richiesta delle parti conciliate al tribunale per l'omologazione della loro transazione.",
      "Antrag der sich vergleichenden Parteien beim Gericht auf Bestätigung ihres Vergleichs.",
      "Заявление примирившихся сторон в суд об утверждении их мирового соглашения."
    ),
    where: W7(
      "كتابة ضبط المحكمة المختصة بالنزاع موضوع الصلح، مع نسخة من اتفاق الصلح.",
      "Greffe du tribunal compétent pour le litige visé par la transaction, avec copie de l'accord.",
      "Registry of the court competent for the dispute covered by the settlement, with a copy of the agreement.",
      "Secretaría del tribunal competente para el litigio objeto de la transacción, con copia del acuerdo.",
      "Cancelleria del tribunale competente per la lite oggetto della transazione, con copia dell'accordo.",
      "Geschäftsstelle des für den Streitgegenstand zuständigen Gerichts, mit Kopie der Vergleichsvereinbarung.",
      "Канцелярия суда, компетентного по спору, о котором заключено соглашение, с копией договора."
    ),
    authority: "justice",
    keywords: ["المصادقة على صلح", "homologation", "transaction", "صلح", "settlement", "المحكمة"],
  },
  {
    id: "mhk-mahdar-rasmi",
    cat: "mahkama",
    title: T7(
      "طلب الحصول على محضر رسمي",
      "Demande d'obtention d'un procès-verbal officiel",
      "Request to obtain an official report",
      "Solicitud de obtención de un acta oficial",
      "Richiesta di ottenimento di un verbale ufficiale",
      "Antrag auf Erhalt eines offiziellen Protokolls",
      "Заявление о выдаче официального протокола"
    ),
    desc: D7(
      "طلب يقدم للحصول على نظير من محضر رسمي حررته مصلحة عمومية في قضية تهم المعني بالأمر.",
      "Demande tendant à l'obtention d'une copie d'un procès-verbal officiel établi par un service public.",
      "Request to obtain a copy of an official report drawn up by a public service in one's own case.",
      "Solicitud para obtener una copia de un acta oficial levantada por un servicio público en un asunto propio.",
      "Richiesta per ottenere copia di un verbale ufficiale redatto da un servizio pubblico in un proprio affare.",
      "Antrag auf Erhalt einer Abschrift eines von einer öffentlichen Stelle erstellten amtlichen Protokolls.",
      "Заявление о выдаче копии официального протокола, составленного госорганом по делу заявителя."
    ),
    where: W7(
      "المصلحة المحررة للمحضر أو كتابة ضبط المحكمة المودع بها.",
      "Service ayant dressé le procès-verbal ou greffe du tribunal où il est déposé.",
      "Service that drew up the report, or the registry of the court where it is lodged.",
      "Servicio que levantó el acta o secretaría del tribunal donde está depositada.",
      "Servizio che ha redatto il verbale oppure cancelleria del tribunale ove è depositato.",
      "Die das Protokoll errichtende Stelle oder die Geschäftsstelle des hinterlegenden Gerichts.",
      "Служба, составившая протокол, либо канцелярия суда, где он хранится."
    ),
    authority: "justice",
    keywords: ["محضر رسمي", "procès-verbal", "official report", "نظير", "copie", "مصلحة عمومية"],
  },
  {
    id: "mhk-tabligh-mufawwad",
    cat: "mahkama",
    title: T7(
      "طلب تبليغ رسمي عبر مفوض قضائي",
      "Demande de signification officielle par commissaire judiciaire",
      "Request for official service of documents through a judicial officer",
      "Solicitud de notificación oficial mediante comisario judicial",
      "Richiesta di notifica ufficiale tramite commissario giudiziario",
      "Antrag auf amtliche Zustellung durch den Gerichtsvollzieher",
      "Заявление об официальном вручении документов через судебного исполнителя"
    ),
    desc: D7(
      "طلب يوجه إلى المحكمة لتكليف مفوض قضائي بتبليغ وثيقة قضائية رسمياً إلى المعني بالأمر.",
      "Demande adressée au tribunal aux fins de charger un commissaire judiciaire de signifier officiellement un acte.",
      "Request addressed to the court to have a judicial officer officially serve a judicial document.",
      "Solicitud dirigida al tribunal para que un comisario judicial notifique oficialmente un documento judicial.",
      "Richiesta indirizzata al tribunale affinché un commissario giudiziario notifichi ufficialmente un atto giudiziario.",
      "Antrag an das Gericht, einen Gerichtsvollzieher mit der amtlichen Zustellung eines Schriftstücks zu beauftragen.",
      "Ходатайство в суд о поручении судебному исполнителю официально вручить процессуальный документ."
    ),
    where: W7(
      "كتابة ضبط المحكمة الناظرة في الملف أو مكتب المفوض القضائي المعتمد.",
      "Greffe de la juridiction saisie du dossier ou bureau du commissaire judiciaire agréé.",
      "Registry of the court handling the file, or the office of the accredited judicial officer.",
      "Secretaría del tribunal que conoce del caso o oficina del comisario judicial acreditado.",
      "Cancelleria del tribunale che tratta il fascicolo oppure studio del commissario giudiziario autorizzato.",
      "Geschäftsstelle des mit der Sache befassten Gerichts oder Büro des zugelassenen Gerichtsvollziehers.",
      "Канцелярия суда, рассматривающего дело, либо кабинет аттестованного судебного исполнителя."
    ),
    authority: "justice",
    keywords: ["تبليغ رسمي", "signification", "مفوض قضائي", "commissaire judiciaire", "service of process", "وثيقة"],
  },
  {
    id: "mhk-radd-aitibar",
    cat: "mahkama",
    title: T7(
      "طلب رد الاعتبار",
      "Demande de réhabilitation",
      "Application for judicial rehabilitation",
      "Solicitud de rehabilitación",
      "Richiesta di riabilitazione",
      "Antrag auf Wiederherstellung der Ehrenrechte",
      "Заявление о восстановлении в правах (реабилитация)"
    ),
    desc: D7(
      "طلب يقدمه المحكوم عليه إلى المحكمة لرد اعتباره ومحو آثار الإدانة بعد استيفاء الشروط القانونية.",
      "Demande formée par le condamné devant le tribunal aux fins de réhabilitation et d'effacement des effets de la condamnation.",
      "Application filed by a convicted person with the court for rehabilitation and removal of the conviction's effects.",
      "Solicitud presentada por el condenado ante el tribunal para su rehabilitación y la eliminación de los efectos de la condena.",
      "Richiesta presentata dal condannato al tribunale per la riabilitazione e la cancellazione degli effetti della condanna.",
      "Antrag des Verurteilten beim Gericht auf Rehabilitation und Beseitigung der Folgen der Verurteilung.",
      "Заявление осуждённого в суд о реабилитации и устранении последствий обвинительного приговора."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية التي أصدرت الحكم محل طلب رد الاعتبار.",
      "Greffe du tribunal de première instance ayant rendu la décision visée par la demande de réhabilitation.",
      "Registry of the first-instance court that issued the judgment targeted by the rehabilitation application.",
      "Secretaría del tribunal de primera instancia que dictó la sentencia objeto de la solicitud de rehabilitación.",
      "Cancelleria del tribunale di primo grado che ha emesso la decisione oggetto della richiesta di riabilitazione.",
      "Geschäftsstelle des Erstinstanzlichen Gerichts, das das vom Rehabilitationsantrag betroffene Urteil erlassen hat.",
      "Канцелярия суда первой инстанции, вынесшего решение, о котором подано заявление о реабилитации."
    ),
    authority: "justice",
    keywords: ["رد الاعتبار", "réhabilitation", "rehabilitation", "المحكوم عليه", "محو الإدانة", "محكمة"],
  },
];
