// Waiver & termination forms — renunciations, amicable rescissions,
// contract cancellations and withdrawal of rights. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsNaulat: DocumentItem[] = [
  // ─── Foncier & droits réels ───
  {
    id: "nzl-tanazul-taarod-tahfit",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن التعرض على مطلب التحفيظ",
      "Renonciation à l'opposition sur une demande d'immatriculation",
      "Waiver of opposition to a land registration application",
      "Renuncia a la oposición sobre una solicitud de inscripción",
      "Rinuncia all'opposizione su una domanda di iscrizione",
      "Verzicht auf Widerspruch gegen einen Eintragungsantrag",
      "Отказ от возражения на заявление о регистрации"
    ),
    desc: D7(
      "تنازل يقدمه المتعرض للمحافظة العقارية يتخلى بمقتضاه عن تعرضه على مطلب التحفيظ.",
      "Renonciation déposée à la conservation foncière par laquelle l'opposant abandonne son opposition à l'immatriculation.",
      "Waiver filed with the land registry by which the opponent abandons the opposition to the registration.",
      "Renuncia presentada ante el registro por la que el opositor abandona su oposición a la inscripción.",
      "Rinuncia depositata alla conservatoria con cui l'opponente abbandona l'opposizione all'iscrizione.",
      "Beim Grundbuchamt eingereichter Verzicht, mit dem der Widersprecher seinen Einspruch aufgibt.",
      "Отказ, подаваемый оппонентом в кадастровую службу, об отмене возражения на регистрацию."
    ),
    where: W7(
      "المحافظة العقارية (ANCFCC) التابع لها العقار",
      "Conservation foncière (ANCFCC) du ressort du bien",
      "Land registry (ANCFCC) of the property's district",
      "Registro de la propiedad (ANCFCC) de la demarcación del inmueble",
      "Conservatoria (ANCFCC) di competenza dell'immobile",
      "Grundbuchamt (ANCFCC) des Bezirks der Immobilie",
      "Кадастровая служба (ANCFCC) по месту нахождения объекта"
    ),
    authority: "ancfcc",
    keywords: ["تنازل عن التعرض", "renonciation opposition", "waiver", "تحفيظ", "immatriculation", "ANCFCC"],
    popular: true,
  },
  {
    id: "nzl-tashtib-taarod",
    cat: "naulat-fasikh",
    title: T7(
      "طلب التشطيب على تعرض بعد التنازل أو الحكم",
      "Demande de radiation d'une opposition après renonciation ou jugement",
      "Application to strike off an opposition after waiver or judgment",
      "Solicitud de cancelación de una oposición tras renuncia o sentencia",
      "Domanda di cancellazione di un'opposizione dopo rinuncia o sentenza",
      "Antrag auf Löschung eines Widerspruchs nach Verzicht oder Urteil",
      "Заявление о снятии возражения после отказа или судебного решения"
    ),
    desc: D7(
      "طلب يقدمه صاحب مطلب التحفيظ إلى المحافظة العقارية قصد تشطيب تعرض تنازل عنه صاحبه أو شطب بمقتضى حكم قضائي.",
      "Demande par laquelle le requérant prie la conservation foncière de radier l'opposition abandonnée par son auteur ou annulée par jugement.",
      "Application by which the registration applicant asks the land registry to strike off an opposition waived or annulled by judgment.",
      "Solicitud por la que el titular de la solicitud de inscripción pide al registro cancelar una oposición renunciada o anulada por sentencia.",
      "Domanda con cui il richiedente dell'iscrizione chiede alla conservatoria di cancellare l'opposizione oggetto di rinuncia o annullata con sentenza.",
      "Antrag, mit dem der Eintragungsbewerber das Grundbuchamt um Löschung des durch Verzicht aufgegebenen oder gerichtlich aufgehobenen Widerspruchs bittet.",
      "Заявление в кадастровую службу об исключении возражения, от которого его автор отказался или которое отменено судом."
    ),
    where: W7(
      "المحافظة العقارية (ANCFCC) المسجل بها مطلب التحفيظ",
      "Conservation foncière (ANCFCC) où la demande d'immatriculation est déposée",
      "Land registry (ANCFCC) office where the registration application is filed",
      "Registro de la propiedad (ANCFCC) donde está presentada la solicitud de inscripción",
      "Conservatoria (ANCFCC) dove è depositata la domanda di iscrizione",
      "Grundbuchamt (ANCFCC), bei dem der Eintragungsantrag eingereicht ist",
      "Кадастровая служба (ANCFCC), в которую подано заявление о регистрации"
    ),
    authority: "ancfcc",
    keywords: ["تشطيب تعرض", "radiation opposition", "strike off opposition", "مطلب التحفيظ", "ANCFCC"],
  },
  {
    id: "nzl-tanazul-tasarruf-intifa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن حق التصرف والانتفاع بعقار مدى الحياة",
      "Renonciation au droit de disposition et d'usufruit à vie d'un immeuble",
      "Waiver of the lifelong right of disposal and usufruct over a property",
      "Renuncia al derecho de disposición y usufructo vitalicio de un inmueble",
      "Rinuncia al diritto di disposizione e usufrutto vitalizio di un immobile",
      "Verzicht auf das lebenslange Verfügungs- und Nießbrauchsrecht an einer Immobilie",
      "Отказ от пожизненного права распоряжения и узуфрукта на недвижимое имущество"
    ),
    desc: D7(
      "وثيقة يتنازل بمقتضاها المستفيد من حق التصرف والانتفاع مدى الحياة عن هذا الحق لفائدة الطرف المعني بالعقار.",
      "Acte par lequel le bénéficiaire d'un droit viager de disposition et d'usufruit y renonce au profit de l'autre partie concernée.",
      "Deed by which the holder of a lifelong right of disposal and usufruct waives it in favour of the other party concerned.",
      "Escritura por la que el titular de un derecho vitalicio de disposición y usufructo renuncia al mismo en favor de la otra parte.",
      "Atto con cui il titolare di un diritto vitalizio di disposizione e usufrutto vi rinuncia a favore dell'altra parte.",
      "Urkunde, mit der der Inhaber eines lebenslangen Verfügungs- und Nießbrauchsrechts zugunsten der anderen Partei darauf verzichtet.",
      "Акт, которым обладатель пожизненного права распоряжения и узуфрукта отказывается от него в пользу другой стороны."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل بالمحافظة العقارية (ANCFCC) التابع لها العقار",
      "Rédigé entre les parties, puis inscrit à la conservation foncière (ANCFCC) du ressort du bien",
      "Drawn up between the parties, then registered with the land registry (ANCFCC) of the property's district",
      "Redactado entre las partes y luego inscrito en el registro de la propiedad (ANCFCC) de la demarcación del inmueble",
      "Redatto tra le parti e poi iscritto presso la conservatoria (ANCFCC) di competenza dell'immobile",
      "Zwischen den Parteien errichtet und anschließend beim Grundbuchamt (ANCFCC) des Bezirks eingetragen",
      "Составляется между сторонами и затем регистрируется в кадастровой службе (ANCFCC) по месту нахождения объекта"
    ),
    authority: "ancfcc",
    keywords: ["تنازل عن التصرف والانتفاع", "renonciation usufruit", "usufruct waiver", "عقار", "usufruit", "ANCFCC"],
  },
  {
    id: "nzl-tanazul-sahb-mablagh-sanduq",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن سحب مبلغ مودع بصندوق المحكمة لفائدة الغير",
      "Renonciation au retrait d'une somme déposée à la caisse du tribunal au profit d'un tiers",
      "Waiver of the withdrawal of a sum deposited with the court registry for a third party",
      "Renuncia al retiro de una suma depositada en la caja del tribunal en beneficio de un tercero",
      "Rinuncia al ritiro di una somma depositata presso la cassa del tribunale a favore di un terzo",
      "Verzicht auf die Auszahlung eines zugunsten eines Dritten bei der Gerichtskasse hinterlegten Betrags",
      "Отказ от получения суммы, внесённой в судебную кассу в пользу третьего лица"
    ),
    desc: D7(
      "تنازل يقدمه المعني بالأمر عن حقه في سحب مبلغ أودع بصندوق المحكمة لفائدة شخص آخر.",
      "Renonciation par laquelle l'intéressé abandonne son droit de retirer une somme déposée à la caisse du tribunal au profit d'un tiers.",
      "Waiver by which the person concerned abandons the right to withdraw a sum deposited with the court registry for a third party.",
      "Renuncia por la que el interesado abandona el derecho a retirar una suma depositada en la caja del tribunal.",
      "Rinuncia con cui l'interessato abbandona il diritto di ritirare una somma depositata presso la cassa del tribunale.",
      "Verzicht, mit dem der Betroffene das Recht aufgibt, einen bei der Gerichtskasse hinterlegten Betrag abzuheben.",
      "Отказ, которым заинтересованное лицо уступает право на получение суммы, внесённой в судебную кассу в пользу другого лица."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية المودع بها المبلغ (صندوق المحكمة)",
      "Greffe de la juridiction où la somme est déposée (caisse du tribunal)",
      "Registry of the court where the sum is deposited (court deposit office)",
      "Secretaría del tribunal donde está depositada la suma (caja del tribunal)",
      "Cancelleria del tribunale dove la somma è depositata (cassa del tribunale)",
      "Gerichtskanzlei der Instanz, bei der der Betrag hinterlegt ist (Gerichtskasse)",
      "Канцелярия суда, в котором внесена сумма (судебная касса)"
    ),
    authority: "justice",
    keywords: ["صندوق المحكمة", "caisse du tribunal", "court registry deposit", "تنازل", "سحب مبلغ"],
  },
  {
    id: "nzl-tanazul-shufaa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن حق الشفعة",
      "Renonciation au droit de préemption (chefaa)",
      "Waiver of the right of pre-emption (shufa'a)",
      "Renuncia al derecho de tanteo (shufaa)",
      "Rinuncia al diritto di prelazione (shufaa)",
      "Verzicht auf das Vorkaufsrecht (Schufaa)",
      "Отказ от права преимущественной покупки (шуфаа)"
    ),
    desc: D7(
      "وثيقة يتنازل فيها صاحب حق الشفعة عن أولويته في اقتناء العقار المبيع لفائدة الغير.",
      "Écrit par lequel le titulaire du droit de préemption renonce à sa priorité d'acquérir l'immeuble vendu.",
      "Deed by which the holder of the pre-emption right waives his priority to acquire the sold property.",
      "Escritura por la que el titular del derecho de tanteo renuncia a su prioridad de adquirir el inmueble vendido.",
      "Scritto con cui il titolare del diritto di prelazione rinuncia alla priorità di acquistare l'immobile venduto.",
      "Urkunde, mit der der Inhaber des Vorkaufsrechts auf seine Priorität beim Erwerb des verkauften Grundstücks verzichtet.",
      "Документ, которым обладатель права преимущественной покупки отказывается от приоритета при приобретении продаваемого объекта недвижимости."
    ),
    where: W7(
      "أمام الموثق أو العدول، ويضمن عقد البيع ويقيد بالمحافظة العقارية (ANCFCC)",
      "Devant le notaire ou les adouls, intégré à l'acte de vente et inscrit à la conservation foncière (ANCFCC)",
      "Before the notary or the adouls, incorporated into the deed of sale and registered with the land registry (ANCFCC)",
      "Ante el notario o los adouls, incorporada a la escritura de venta e inscrita en el registro de la propiedad (ANCFCC)",
      "Davanti al notaio o agli adouls, inserita nell'atto di vendita e iscritta alla conservatoria (ANCFCC)",
      "Vor dem Notar oder den Adouls, in die Verkaufsurkunde aufgenommen und beim Grundbuchamt (ANCFCC) eingetragen",
      "У нотариуса или адулов, включается в договор купли-продажи и регистрируется в кадастре (ANCFCC)"
    ),
    authority: "ancfcc",
    keywords: ["حق الشفعة", "renonciation préemption", "pre-emption waiver", "بيع عقار", "ANCFCC"],
  },
  {
    id: "nzl-tanazul-mirath",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن الميراث (حصة إرثية)",
      "Renonciation à une part successorale",
      "Waiver of an inheritance share",
      "Renuncia a una parte hereditaria",
      "Rinuncia a una quota ereditaria",
      "Verzicht auf einen Erbanteil",
      "Отказ от наследственной доли"
    ),
    desc: D7(
      "تنازل أحد الورثة عن كامل حصته الإرثية أو جزء منها لفائدة ورثة آخرين أو شخص معين.",
      "Acte par lequel un héritier cède tout ou partie de sa part successorale à d'autres héritiers ou à un tiers.",
      "Deed by which an heir waives all or part of the inheritance share in favour of other heirs or a third party.",
      "Escritura por la que un heredero cede total o parcialmente su parte hereditaria en favor de otros herederos o de un tercero.",
      "Atto con cui un erede cede in tutto o in parte la sua quota ereditaria ad altri eredi o a un terzo.",
      "Urkunde, mit der ein Erbe seinen Erbanteil ganz oder teilweise zugunsten anderer Erben oder eines Dritten abgibt.",
      "Акт, которым наследник уступает всю или часть своей наследственной доли другим наследникам или третьему лицу."
    ),
    where: W7(
      "أمام الموثق أو المحكمة الابتدائية، ثم المحافظة العقارية إذا تعلق التنازل بعقار",
      "Devant le notaire ou le tribunal de première instance, puis la conservation foncière si un immeuble est concerné",
      "Before the notary or the first-instance court, then the land registry if real property is concerned",
      "Ante el notario o el tribunal de primera instancia, y luego el registro de la propiedad si hay inmueble",
      "Davanti al notaio o al tribunale di primo grado, poi la conservatoria se è coinvolto un immobile",
      "Vor dem Notar oder dem Gericht erster Instanz, danach das Grundbuchamt, falls Immobilien betroffen sind",
      "У нотариуса или в суде первой инстанции, затем в кадастре, если речь идёт о недвижимости"
    ),
    keywords: ["تنازل عن الميراث", "part successorale", "inheritance share", "ورثة", "héritier", "حصة إرثية"],
  },
  {
    id: "nzl-tanazul-istinaf",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن حق الاستئناف",
      "Renonciation au droit d'appel",
      "Waiver of the right of appeal",
      "Renuncia al derecho de apelación",
      "Rinuncia al diritto di appello",
      "Verzicht auf das Rechtsmittel der Berufung",
      "Отказ от права апелляционного обжалования"
    ),
    desc: D7(
      "تصريح يتنازل بمقتضاه المحكوم عليه أو أي طرف عن حقه في استئناف الحكم الصادر ضده.",
      "Déclaration par laquelle la partie perdante renonce à son droit d'interjeter appel du jugement rendu.",
      "Declaration by which the losing party waives the right to appeal the judgment delivered against it.",
      "Declaración por la que la parte condenada renuncia a su derecho de apelar la sentencia dictada.",
      "Dichiarazione con cui la parte soccombente rinuncia al diritto di appellare la sentenza pronunciata.",
      "Erklärung, mit der die unterlegene Partei auf ihr Rechtsmittel gegen das ergangene Urteil verzichtet.",
      "Заявление, которым проигравшая сторона отказывается от своего права обжаловать вынесенное решение в апелляции."
    ),
    where: W7(
      "تودع بكتابة ضبط المحكمة المصدرة للحكم أو محكمة الاستئناف حسب الحالة",
      "Déposée au greffe de la juridiction ayant rendu le jugement ou de la cour d'appel selon le cas",
      "Filed with the registry of the court that delivered the judgment or of the court of appeal, as appropriate",
      "Se presenta en la secretaría del tribunal que dictó la sentencia o en la audiencia, según el caso",
      "Depositata alla cancelleria del giudice che ha pronunciato la sentenza o alla corte d'appello, a seconda dei casi",
      "Einzureichen bei der Kanzlei des urteilenden Gerichts oder beim Berufungsgericht, je nach Fall",
      "Подаётся в канцелярию суда, вынесшего решение, или в апелляционный суд, в зависимости от ситуации"
    ),
    authority: "justice",
    keywords: ["تنازل عن الاستئناف", "renonciation appel", "waiver of appeal", "استئناف", "droit d'appel"],
  },
  {
    id: "nzl-tanazul-daawa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن دعوى",
      "Désistement d'instance (renonciation à une action)",
      "Discontinuance of proceedings (waiver of an action)",
      "Desistimiento de la demanda",
      "Rinuncia all'azione (desistenza)",
      "Klageverzicht (Rücknahme der Klage)",
      "Отказ от иска (прекращение производства)"
    ),
    desc: D7(
      "تصريح يتنازل فيه المدعي عن دعواه المنصوبة أمام المحكمة بعد تبليغ الطرف الآخر.",
      "Déclaration par laquelle le demandeur renonce à son action portée devant la juridiction, après notification à la défense.",
      "Declaration by which the plaintiff waives the action brought before the court, after notification to the defendant.",
      "Declaración por la que el demandante renuncia a la demanda interpuesta ante el tribunal, tras notificación a la otra parte.",
      "Dichiarazione con cui l'attore rinuncia all'azione proposta davanti al giudice, dopo notifica alla controparte.",
      "Erklärung, mit der der Kläger nach Zustellung an die Gegenseite auf die vor Gericht erhobene Klage verzichtet.",
      "Заявление, в котором истец отказывается от поданного в суд иска после уведомления другой стороны."
    ),
    where: W7(
      "تودع بكتابة ضبط المحكمة المكلفة بالنظر في الدعوى",
      "Déposée au greffe de la juridiction saisie de l'affaire",
      "Filed with the registry of the court seized of the case",
      "Se presenta en la secretaría del tribunal que conoce del asunto",
      "Depositata alla cancelleria del giudice adito per la causa",
      "Einzureichen bei der Kanzlei des mit der Sache befassten Gerichts",
      "Подаётся в канцелярию суда, рассматривающего дело"
    ),
    authority: "justice",
    keywords: ["تنازل عن دعوى", "désistement", "discontinuance", "المدعي", "plaintiff", "محكمة"],
  },
  // ─── Contrats & abonnements ───
  {
    id: "nzl-faskh-kiraa-mahal-tijari",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ عقد كراء محل تجاري",
      "Résiliation du bail d'un local commercial",
      "Termination of a commercial premises lease",
      "Resolución del contrato de alquiler de un local comercial",
      "Risoluzione del contratto di locazione di un locale commerciale",
      "Kündigung des Gewerberaummietvertrags",
      "Расторжение договора аренды коммерческого помещения"
    ),
    desc: D7(
      "اتفاق أو إشعار ينهي عقد كراء محل تجاري قبل انتهاء مدته مع تحديد آجال الإخلاء والالتزامات.",
      "Accord ou préavis mettant fin au bail du local commercial avant son terme, en fixant les délais de libération et les obligations.",
      "Agreement or notice ending the commercial premises lease before its term, setting the vacation period and remaining obligations.",
      "Acuerdo o aviso que pone fin al alquiler del local comercial antes del plazo, fijando el desalojo y las obligaciones.",
      "Accordo o disdetta che chiude la locazione del locale commerciale prima della scadenza, fissando i termini di rilascio.",
      "Vereinbarung oder Kündigung, die den Gewerberaummietvertrag vor Ablauf beendet und Räumungsfrist sowie Pflichten festlegt.",
      "Соглашение или уведомление о досрочном прекращении аренды коммерческого помещения с указанием сроков освобождения и обязательств."
    ),
    where: W7(
      "بين المكري والمكتري، ويحرر الاتفاق كتابة ويوثق عند الاقتضاء",
      "Entre le bailleur et le locataire, l'accord étant rédigé par écrit et formalisé le cas échéant",
      "Between the landlord and the tenant, with the agreement put in writing and formalised where appropriate",
      "Entre el arrendador y el arrendatario, redactando el acuerdo por escrito y formalizándolo cuando proceda",
      "Tra locatore e conduttore, con accordo redatto per iscritto e formalizzato ove occorra",
      "Zwischen Vermieter und Mieter, mit schriftlicher und gegebenenfalls beurkundeter Vereinbarung",
      "Между арендодателем и арендатором, соглашение составляется письменно и при необходимости удостоверяется"
    ),
    keywords: ["فسخ كراء محل تجاري", "résiliation bail commercial", "commercial lease termination", "محل تجاري", "local commercial"],
    popular: true,
  },
  {
    id: "nzl-faskh-kiraa-mufarrash",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ عقد كراء مفروش",
      "Résiliation du bail d'un logement meublé",
      "Termination of a furnished accommodation lease",
      "Resolución del contrato de alquiler amueblado",
      "Risoluzione del contratto di locazione ammobiliata",
      "Kündigung des Vertrags über möblierten Wohnraum",
      "Расторжение договора аренды меблированного жилья"
    ),
    desc: D7(
      "إشعار بفسخ عقد كراء محل مفروش وفق المهلة التعاقدية مع تحديد تاريخ تسليم المفاتيح.",
      "Préavis de résiliation du bail meublé, respectant le délai contractuel et fixant la date de remise des clés.",
      "Notice terminating the furnished lease, respecting the contractual notice period and setting the date for handing back the keys.",
      "Aviso de resolución del alquiler amueblado, respetando el plazo contractual y fijando la fecha de entrega de llaves.",
      "Disdetta della locazione ammobiliata, nel rispetto del termine contrattuale e con fissazione della consegna delle chiavi.",
      "Kündigung des möblierten Mietvertrags unter Einhaltung der vertraglichen Frist und mit Termin für die Schlüsselübergabe.",
      "Уведомление о расторжении договора аренды меблированного жилья с соблюдением договорного срока и указанием даты возврата ключей."
    ),
    where: W7(
      "يوجه إلى الطرف الآخر برسالة مسجلة أو يسلم شخصيا مع علم التوصل",
      "Notifié à l'autre partie par lettre recommandée ou remise en main propre contre décharge",
      "Notified to the other party by registered letter or hand delivery against acknowledgment",
      "Se notifica a la otra parte por carta certificada o entrega en mano con acuse de recibo",
      "Notificata all'altra parte con raccomandata o consegna a mano contro ricevuta",
      "Der anderen Partei per Einschreiben oder persönlicher Übergabe gegen Empfangsbestätigung mitzuteilen",
      "Направляется другой стороне заказным письмом или вручается лично под расписку"
    ),
    keywords: ["كراء مفروش", "résiliation bail meublé", "furnished lease", "إشعار", "préavis"],
  },
  {
    id: "nzl-faskh-sharaka",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ شراكة",
      "Résiliation d'un contrat de partenariat",
      "Termination of a partnership agreement",
      "Resolución de un contrato de sociedad",
      "Risoluzione di un contratto di società",
      "Auflösung eines Gesellschaftsvertrags",
      "Расторжение договора о партнёрстве"
    ),
    desc: D7(
      "اتفاق بين الشركاء على فسخ شراكة قائمة وتصفية الحصص والالتزامات المتبادلة بينهم.",
      "Accord entre associés mettant fin à leur partenariat et organisant la liquidation des parts et obligations réciproques.",
      "Agreement between partners ending their partnership and arranging the liquidation of shares and mutual obligations.",
      "Acuerdo entre socios que pone fin a la sociedad y organiza la liquidación de participaciones y obligaciones recíprocas.",
      "Accordo tra i soci che scioglie la società e disciplina la liquidazione delle quote e degli obblighi reciproci.",
      "Vereinbarung der Gesellschafter zur Beendigung der Gesellschaft und Regelung der Liquidation von Anteilen und Verpflichtungen.",
      "Соглашение участников о прекращении партнёрства, ликвидации долей и урегулировании взаимных обязательств."
    ),
    where: W7(
      "بين الشركاء، مع التصريح لدى السجل التجاري (OMPIC) إذا كانت شراكة مسجلة كشركة",
      "Entre les associés, avec déclaration au registre du commerce (OMPIC) si la société est immatriculée",
      "Between the partners, with a declaration to the commercial registry (OMPIC) if the partnership is a registered company",
      "Entre los socios, con declaración en el registro mercantil (OMPIC) si la sociedad está inscrita",
      "Tra i soci, con dichiarazione al registro delle imprese (OMPIC) se la società è iscritta",
      "Zwischen den Gesellschaftern, mit Anmeldung zum Handelsregister (OMPIC), sofern die Gesellschaft eingetragen ist",
      "Между участниками, с заявлением в торговый реестр (OMPIC), если партнёрство зарегистрировано как компания"
    ),
    keywords: ["فسخ شراكة", "dissolution société", "partnership termination", "شركاء", "associés", "OMPIC"],
  },
  {
    id: "nzl-faskh-wakala",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ وكالة",
      "Révocation d'une procuration",
      "Revocation of a power of attorney",
      "Revocación de un poder",
      "Revoca di una procura",
      "Widerruf einer Vollmacht",
      "Отзыв доверенности"
    ),
    desc: D7(
      "إشعار يوجهه الموكل إلى وكيله يلغي بمقتضاه الوكالة الممنوحة له ويحدد تاريخ نفاذ هذا الإلغاء.",
      "Avis par lequel le mandant met fin au mandat de son mandataire et fixe la date d'effet de la révocation.",
      "Notice by which the principal revokes the agent's mandate and sets the date on which the revocation takes effect.",
      "Aviso por el que el poderante deja sin efecto el mandato de su apoderado y fija la fecha de eficacia.",
      "Comunicazione con cui il mandante revoca il mandato del procuratore e fissa la data di efficacia.",
      "Mitteilung, mit der der Vollmachtgeber das Mandat des Bevollmächtigten widerruft und das Wirksamkeitsdatum festlegt.",
      "Уведомление, которым доверитель отменяет полномочия представителя и устанавливает дату вступления отзыва в силу."
    ),
    where: W7(
      "يبلغ للوكيل وللمصالح المعنية، ويثبت لدى الموثق أو العدول إذا كانت الوكالة رسمية",
      "Notifié au mandataire et aux administrations concernées, et constaté chez le notaire ou les adouls pour une procuration officielle",
      "Notified to the agent and the administrations concerned, and recorded before the notary or adouls for a notarised power of attorney",
      "Se notifica al apoderado y a las administraciones, y se formaliza ante notario o adouls si el poder es público",
      "Notificata al procuratore e alle amministrazioni, e constatata dal notaio o dagli adouls se la procura è pubblica",
      "Dem Bevollmächtigten und den Behörden mitzuteilen; bei notarieller Vollmacht vor dem Notar oder den Adouls zu beurkunden",
      "Уведомляется представитель и соответствующие ведомства; нотариальная доверенность отзывается у нотариуса или адулов"
    ),
    keywords: ["فسخ وكالة", "révocation procuration", "revocation of POA", "إلغاء وكالة", "mandant"],
  },
  {
    id: "nzl-faskh-aqd-bay",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ عقد بيع",
      "Résiliation d'un contrat de vente",
      "Rescission of a sale contract",
      "Resolución de un contrato de venta",
      "Risoluzione di un contratto di vendita",
      "Rückabwicklung eines Kaufvertrags",
      "Расторжение договора купли-продажи"
    ),
    desc: D7(
      "اتفاق بين البائع والمشتري على فسخ عقد بيع واقع بينهما وإعادة الحال إلى ما كان عليه.",
      "Accord entre vendeur et acheteur pour annuler la vente intervenue entre eux et rétablir les parties en l'état.",
      "Agreement between seller and buyer to cancel the sale concluded between them and restore the parties to their original position.",
      "Acuerdo entre vendedor y comprador para anular la venta celebrada y restablecer a las partes en su estado inicial.",
      "Accordo tra venditore e acquirente per annullare la vendita conclusa e riportare le parti allo stato iniziale.",
      "Vereinbarung zwischen Verkäufer und Käufer zur Aufhebung des Kaufs und zur Wiederherstellung des ursprünglichen Zustands.",
      "Соглашение продавца и покупателя об аннулировании совершённой сделки и восстановлении первоначального положения сторон."
    ),
    where: W7(
      "بين الطرفين، ويحرر الاتفاق أمام الموثق أو العدول عند الاقتضاء",
      "Entre les parties, l'accord étant rédigé devant le notaire ou les adouls le cas échéant",
      "Between the parties, with the agreement drawn up before the notary or adouls where appropriate",
      "Entre las partes, redactando el acuerdo ante notario o adouls cuando proceda",
      "Tra le parti, con l'accordo redatto davanti al notaio o agli adouls ove occorra",
      "Zwischen den Parteien, mit Beurkundung der Vereinbarung vor dem Notar oder den Adouls, falls erforderlich",
      "Между сторонами, соглашение при необходимости оформляется у нотариуса или адулов"
    ),
    keywords: ["فسخ عقد بيع", "résiliation vente", "sale rescission", "إلغاء البيع", "annulation"],
  },
  {
    id: "nzl-ilgha-bay",
    cat: "naulat-fasikh",
    title: T7(
      "طلب إلغاء بيع",
      "Demande d'annulation d'une vente",
      "Request for cancellation of a sale",
      "Solicitud de anulación de una venta",
      "Domanda di annullamento di una vendita",
      "Antrag auf Aufhebung eines Kaufs",
      "Заявление об отмене сделки купли-продажи"
    ),
    desc: D7(
      "طلب يوجهه أحد طرفي البيع لإلغائه قبل تنفيذه النهائي مع استرجاع ما أداه من مبالغ.",
      "Demande adressée par une partie à la vente pour l'annuler avant son exécution définitive, avec restitution des sommes versées.",
      "Request addressed by one party to the sale to cancel it before final completion, with refund of the sums paid.",
      "Solicitud presentada por una de las partes para anular la venta antes de su ejecución definitiva, con reembolso de las cantidades.",
      "Domanda presentata da una parte per annullare la vendita prima dell'esecuzione definitiva, con restituzione delle somme versate.",
      "Antrag einer Vertragspartei auf Aufhebung des Kaufs vor endgültiger Abwicklung samt Rückerstattung der geleisteten Zahlungen.",
      "Заявление одной из сторон об отмене сделки до её окончательного исполнения с возвратом уплаченных сумм."
    ),
    where: W7(
      "يوجه إلى الطرف الآخر أو الجهة المحررة للعقد، وإلى المحافظة العقارية إذا كان البيع قيد التسجيل",
      "Adressée à l'autre partie ou au rédacteur de l'acte, et à la conservation foncière si la vente est en cours d'immatriculation",
      "Addressed to the other party or the drafter of the deed, and to the land registry if the sale is being registered",
      "Dirigida a la otra parte o al redactor de la escritura, y al registro de la propiedad si la venta está en inscripción",
      "Indirizzata all'altra parte o al redattore dell'atto, e alla conservatoria se la vendita è in corso di iscrizione",
      "An die andere Partei oder den Urkundenverfasser zu richten, sowie an das Grundbuchamt, wenn der Kauf in der Eintragung ist",
      "Направляется другой стороне или составителю договора, а также в кадастр, если сделка находится на регистрации"
    ),
    keywords: ["إلغاء بيع", "annulation de vente", "sale cancellation", "طلب", "استرجاع المبلغ"],
  },
  {
    id: "nzl-faskh-ijar-zirai",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ عقد إيجار زراعي",
      "Résiliation d'un bail agricole (fermage)",
      "Termination of an agricultural lease (fermage)",
      "Resolución de un arrendamiento agrícola",
      "Risoluzione di un contratto di affitto agricolo",
      "Kündigung eines Landpachtvertrags",
      "Расторжение договора аренды сельскохозяйственной земли"
    ),
    desc: D7(
      "اتفاق أو إشعار بفسخ عقد كراء أرض فلاحية مع تحديد موعد إخلاء الأرض وتسوية المستحقات.",
      "Accord ou préavis mettant fin au bail agricole, en fixant la date de libération des terres et le règlement des dus.",
      "Agreement or notice ending the agricultural lease, setting the date for vacating the land and settling outstanding dues.",
      "Acuerdo o aviso que finaliza el arrendamiento agrícola, fijando la fecha de desalojo y la liquidación de lo adeudado.",
      "Accordo o disdetta che estingue l'affitto agricolo, fissando la data di rilascio del fondo e il saldo dei crediti.",
      "Vereinbarung oder Kündigung, die den Landpachtvertrag beendet und Freigabetermin sowie Ausgleich offener Forderungen festlegt.",
      "Соглашение или уведомление о прекращении аренды сельхозземли с указанием даты освобождения участка и расчёта задолженности."
    ),
    where: W7(
      "بين المؤاجر والمكتري الفلاحي، ويحرر الاتفاق كتابة ويمكن توثيقه لدى المصالح المختصة",
      "Entre le bailleur et le fermier, l'accord étant constaté par écrit et susceptible d'être officialisé auprès des services compétents",
      "Between the lessor and the tenant farmer, with the agreement made in writing and possibly formalised with the competent services",
      "Entre el arrendador y el arrendatario agrícola, formalizando el acuerdo por escrito ante los servicios competentes",
      "Tra locatore e affittuario agricolo, con accordo redatto per iscritto e formalizzabile presso i servizi competenti",
      "Zwischen Verpächter und Landpächter, schriftlich festgehalten und gegebenenfalls bei den zuständigen Stellen beglaubigt",
      "Между арендодателем и арендатором-фермером, соглашение составляется письменно и может быть заверено в компетентных службах"
    ),
    keywords: ["إيجار زراعي", "fermage", "agricultural lease", "أرض فلاحية", "résiliation bail agricole"],
  },
  {
    id: "nzl-faskh-kiraa-dafr",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ عقد كراء السكنى بسبب عدم الأداء",
      "Résiliation du bail d'habitation pour défaut de paiement",
      "Termination of a residential lease for non-payment",
      "Resolución del alquiler de vivienda por impago",
      "Risoluzione della locazione abitativa per mancato pagamento",
      "Kündigung des Wohnraummietvertrags wegen Zahlungsverzugs",
      "Расторжение договора аренды жилья за неуплату"
    ),
    desc: D7(
      "إجراء يتخذه المكري لفسخ كراء السكنى بسبب توقف المكتري عن أداء الكراء بعد الإنذار.",
      "Procédure engagée par le bailleur pour résilier le bail d'habitation en raison de loyers impayés malgré la mise en demeure.",
      "Procedure initiated by the landlord to terminate the residential lease because of unpaid rent despite a formal notice.",
      "Procedimiento iniciado por el arrendador para resolver el alquiler de vivienda por rentas impagadas pese al requerimiento.",
      "Procedura avviata dal locatore per risolvere la locazione abitativa per canoni non corrisposti nonostante la costituzione in mora.",
      "Vom Vermieter eingeleitetes Verfahren zur Kündigung des Mietvertrags wegen ausbleibender Mietzahlungen trotz Mahnung.",
      "Процедура, инициируемая арендодателем для расторжения договора аренды жилья из-за неуплаты несмотря на предупреждение."
    ),
    where: W7(
      "إنذار عن طريق محضر قضائي يتبعه مقال فسخ لدى المحكمة الابتدائية",
      "Mise en demeure par voie d'huissier, suivie d'une requête en résiliation devant le tribunal de première instance",
      "Formal notice through a judicial officer, followed by a termination petition before the first-instance court",
      "Requerimiento por conducto de oficial judicial, seguido de demanda de resolución ante el tribunal de primera instancia",
      "Costituzione in mora tramite ufficiale giudiziario, seguita da ricorso di risoluzione davanti al tribunale",
      "Mahnung über den Gerichtsvollzieher, anschließend Kündigungsklage vor dem Gericht erster Instanz",
      "Предупреждение через судебного исполнителя, затем иск о расторжении в суде первой инстанции"
    ),
    authority: "justice",
    keywords: ["عدم أداء الكراء", "résiliation impayés", "non-payment termination", "إنذار", "mise en demeure", "كراء السكنى"],
  },
  {
    id: "nzl-faskh-waad-bay",
    cat: "naulat-fasikh",
    title: T7(
      "فسخ وعد بالبيع",
      "Résiliation d'une promesse de vente",
      "Termination of a promise to sell",
      "Resolución de una promesa de venta",
      "Risoluzione di una promessa di vendita",
      "Rücktritt von einem Kaufversprechen",
      "Расторжение предварительного договора продажи"
    ),
    desc: D7(
      "اتفاق أو إشعار بإنهاء وعد بالبيع قبل إبرام العقد النهائي مع تسوية العربون إن وجد.",
      "Accord ou préavis mettant fin à la promesse de vente avant l'acte définitif, avec règlement de l'acompte éventuel.",
      "Agreement or notice ending the promise to sell before the final deed, with settlement of any deposit paid.",
      "Acuerdo o aviso que finaliza la promesa de venta antes de la escritura definitiva, con liquidación del depósito abonado.",
      "Accordo o disdetta che chiude la promessa di vendita prima dell'atto definitivo, con regolamento dell'eventuale caparra.",
      "Vereinbarung oder Kündigung, die das Kaufversprechen vor der endgültigen Urkunde beendet und eine Anzahlung ausgleicht.",
      "Соглашение или уведомление о прекращении предварительного договора продажи до основного с урегулированием задатка."
    ),
    where: W7(
      "بين الواعد والموعود له وفق الشروط المنصوص عليها في الوعد",
      "Entre le promettant et le bénéficiaire, selon les conditions stipulées dans la promesse",
      "Between the promisor and the beneficiary, according to the terms stipulated in the promise",
      "Entre el promitente y el beneficiario, según las condiciones estipuladas en la promesa",
      "Tra il promittente e il beneficiario, secondo le condizioni previste nella promessa",
      "Zwischen dem Versprechenden und dem Begünstigten gemäß den im Versprechen festgelegten Bedingungen",
      "Между обещающей и выгодоприобретающей стороной согласно условиям, предусмотренным в договоре обещания"
    ),
    keywords: ["فسخ وعد بالبيع", "résiliation promesse de vente", "promise of sale", "عربون", "acompte"],
  },
  // ─── Famille & pensions ───
  {
    id: "nzl-zawja-tanazul-talaq-nafaqa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل الزوجة عن مستحقات الطلاق والنفقة",
      "Renonciation de l'épouse aux droits résultant du divorce et à la pension",
      "Wife's waiver of divorce entitlements and alimony",
      "Renuncia de la esposa a los derechos derivados del divorcio y a la pensión",
      "Rinuncia della moglie ai diritti derivanti dal divorzio e agli alimenti",
      "Verzicht der Ehefrau auf Scheidungsansprüche und Unterhalt",
      "Отказ жены от прав, вытекающих из развода, и от алиментов"
    ),
    desc: D7(
      "وثيقة تتنازل فيها الزوجة عن مستحقاتها المالية بعد الطلاق كالنفقة والمتعة مقابل إنهاء الزواج.",
      "Acte par lequel l'épouse renonce à ses droits financiers après le divorce, tels que pension et compensation, en échange de la dissolution.",
      "Deed by which the wife waives her financial rights after divorce, such as alimony and compensation, in exchange for the dissolution.",
      "Escritura por la que la esposa renuncia a sus derechos económicos tras el divorcio a cambio de la disolución del matrimonio.",
      "Atto con cui la moglie rinuncia ai propri diritti economici dopo il divorzio in cambio dello scioglimento del matrimonio.",
      "Urkunde, mit der die Ehefrau im Austausch für die Scheidung auf ihre finanziellen Ansprüche wie Unterhalt verzichtet.",
      "Акт, в котором жена в обмен на расторжение брака отказывается от своих имущественных прав после развода, включая алименты."
    ),
    where: W7(
      "يحرر أمام العدول أو يودع بملف الطلاق لدى قسم قضاء الأسرة بالمحكمة الابتدائية",
      "Rédigé devant les adouls ou déposé au dossier du divorce auprès de la section de la famille du tribunal",
      "Drawn up before the adouls or filed with the divorce case at the family affairs division of the court",
      "Redactado ante los adouls o presentado en el expediente de divorcio ante la sección de familia del tribunal",
      "Redatto davanti agli adouls o depositato nel fascicolo di divorzio presso la sezione famiglia del tribunale",
      "Vor den Adouls errichtet oder zur Scheidungsakte der Familienabteilung des Gerichts eingereicht",
      "Составляется у адулов или подаётся в дело о разводе в отдел по семейным делам суда"
    ),
    keywords: ["تنازل عن مستحقات الطلاق", "renonciation droits divorce", "divorce dues waiver", "نفقة الزوجة", "pension", "قضاء الأسرة"],
    popular: true,
  },
  {
    id: "nzl-tanazul-nafaqa-silat-rahm",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن النفقة مع الحق في صلة الرحم",
      "Renonciation à la pension alimentaire avec maintien du lien familial",
      "Waiver of alimony with preservation of family-tie rights",
      "Renuncia a la pensión alimenticia con mantenimiento del vínculo familiar",
      "Rinuncia agli alimenti con mantenimento dei legami familiari",
      "Verzicht auf Unterhalt bei Aufrechterhaltung der familiären Beziehung",
      "Отказ от алиментов при сохранении права на семейные связи"
    ),
    desc: D7(
      "تنازل المحكوم له عن النفقة المستحقة له مع الاحتفاظ بحقه في التواصل وصلة الرحم مع أبنائه وأقاربه.",
      "Renonciation du créancier d'aliments à sa pension tout en conservant son droit de maintenir les liens avec ses enfants et proches.",
      "Waiver by the alimony creditor of the pension due while keeping the right to maintain ties with children and relatives.",
      "Renuncia del acreedor de alimentos a su pensión conservando su derecho a mantener el vínculo con hijos y parientes.",
      "Rinuncia del creditore degli alimenti alla pensione mantenendo il diritto a preservare i rapporti con figli e parenti.",
      "Verzicht des Unterhaltsgläubigers auf die Rente unter Wahrung des Rechts auf Kontakt zu Kindern und Verwandten.",
      "Отказ получателя алиментов от причитающихся выплат при сохранении права на общение с детьми и родственниками."
    ),
    where: W7(
      "بين الطرفين أو يودع لدى قسم قضاء الأسرة لتوثيقه عند النزاع",
      "Entre les parties, ou déposé à la section de la famille pour être acté en cas de litige",
      "Between the parties, or filed with the family affairs division to be recorded in case of dispute",
      "Entre las partes, o depositada en la sección de familia para su constancia en caso de litigio",
      "Tra le parti, o depositata alla sezione famiglia per presa d'atto in caso di contestazione",
      "Zwischen den Parteien oder zur Beurkundung bei der Familienabteilung im Streitfall einzureichen",
      "Между сторонами или подаётся в отдел по семейным делам для фиксации в случае спора"
    ),
    keywords: ["تنازل عن النفقة", "renonciation pension alimentaire", "alimony waiver", "صلة الرحم", "liens familiaux"],
  },
  {
    id: "nzl-tanazul-muakhkhar-sadaq",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن مؤخر الصداق",
      "Renonciation au douaire différé",
      "Waiver of the deferred dower",
      "Renuncia a la dote diferida",
      "Rinuncia alla dote differita",
      "Verzicht auf die hinausgeschobene Mitgift",
      "Отказ от отсроченного махра"
    ),
    desc: D7(
      "إبراء أو تنازل تقدمه الزوجة عن مؤخر صداقها المستحق لها من زوجها عند الطلاق أو الوفاة.",
      "Quittance ou renonciation par laquelle l'épouse abandonne le douaire différé dû par le mari en cas de divorce ou de décès.",
      "Release or waiver by which the wife gives up the deferred dower owed by the husband upon divorce or death.",
      "Carta de pago o renuncia por la que la esposa cede la dote diferida adeudada por el esposo al divorcio o fallecimiento.",
      "Quietanza o rinuncia con cui la moglie cede la dote differita dovuta dal marito in caso di divorzio o decesso.",
      "Quittung oder Verzicht, mit dem die Ehefrau auf die bei Scheidung oder Tod fällige hinausgeschobene Mitgift verzichtet.",
      "Расписка или отказ, которым жена уступает отсроченный махр, подлежащий выплате мужем при разводе или смерти."
    ),
    where: W7(
      "يحرر أمام العدول أو يقدم لقسم قضاء الأسرة عند توثيق الطلاق",
      "Rédigé devant les adouls ou présenté à la section de la famille lors de la constatation du divorce",
      "Drawn up before the adouls or submitted to the family affairs division when the divorce is recorded",
      "Redactado ante los adouls o presentado ante la sección de familia al documentarse el divorcio",
      "Redatto davanti agli adouls o presentato alla sezione famiglia alla constatazione del divorzio",
      "Vor den Adouls errichtet oder bei der Scheidungsbeurkundung der Familienabteilung vorgelegt",
      "Оформляется у адулов или представляется в отдел по семейным делам при оформлении развода"
    ),
    keywords: ["مؤخر الصداق", "douaire différé", "deferred dower", "إبراء", "quittance", "الطلاق"],
  },
  {
    id: "nzl-tanazul-hissa-irithiya-aqar",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن الحصة الإرثية في عقار",
      "Renonciation à la part successorale dans un immeuble",
      "Waiver of the inherited share in a property",
      "Renuncia a la parte hereditaria en un inmueble",
      "Rinuncia alla quota ereditaria in un immobile",
      "Verzicht auf den Erbanteil an einer Immobilie",
      "Отказ от наследственной доли в недвижимом имуществе"
    ),
    desc: D7(
      "تنازل وارث عن حصته الشائعة في عقار معين لفائدة باقي الورثة أو أحدهم بثمن أو مجاناً.",
      "Renonciation d'un héritier à sa quote-part dans un immeuble déterminé, au profit des cohéritiers, à titre onéreux ou gratuit.",
      "Waiver by an heir of the undivided share in a specific property, in favour of co-heirs, for consideration or free of charge.",
      "Renuncia de un heredero a su cuota en un inmueble determinado, en favor de los coherederos, a título oneroso o gratuito.",
      "Rinuncia di un erede alla propria quota in un immobile determinato, a favore dei coeredi, a titolo oneroso o gratuito.",
      "Verzicht eines Erben auf seinen Miteigentumsanteil an einem bestimmten Grundstück zugunsten der Miterben, entgeltlich oder unentgeltlich.",
      "Отказ наследника от своей доли в конкретном объекте недвижимости в пользу сонаследников, возмездно или безвозмездно."
    ),
    where: W7(
      "يحرر أمام الموثق ثم يسجل بالمحافظة العقارية (ANCFCC) التابع لها العقار",
      "Rédigé devant le notaire, puis inscrit à la conservation foncière (ANCFCC) du ressort de l'immeuble",
      "Drawn up before the notary, then registered with the land registry (ANCFCC) of the property's district",
      "Redactado ante notario y luego inscrito en el registro de la propiedad (ANCFCC) de la demarcación del inmueble",
      "Redatto davanti al notaio, poi iscritto alla conservatoria (ANCFCC) competente per l'immobile",
      "Vor dem Notar errichtet und anschließend beim Grundbuchamt (ANCFCC) des Bezirks eingetragen",
      "Оформляется у нотариуса, затем регистрируется в кадастровой службе (ANCFCC) по месту нахождения объекта"
    ),
    authority: "ancfcc",
    keywords: ["حصة إرثية", "part successorale", "inherited share", "عقار", "ANCFCC", "ورثة"],
  },
  // ─── Divers ───
  {
    id: "nzl-tanazul-darraja-nariya",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن دراجة نارية",
      "Cession d'une motocyclette",
      "Cession of a motorcycle",
      "Cesión de una motocicleta",
      "Cessione di una motocicletta",
      "Übertragung eines Motorrads",
      "Уступка мотоцикла"
    ),
    desc: D7(
      "عقد يتنازل بمقتضاه المالك عن دراجته النارية لمشترٍ جديد مع انتقال المسؤوليات القانونية إليه.",
      "Acte par lequel le propriétaire cède sa motocyclette à un acquéreur, avec transfert des responsabilités juridiques.",
      "Deed by which the owner transfers the motorcycle to a buyer, with transfer of the legal responsibilities.",
      "Escritura por la que el propietario cede su motocicleta a un comprador, con transferencia de responsabilidades jurídicas.",
      "Atto con cui il proprietario cede la sua motocicletta a un acquirente, con trasferimento delle responsabilità giuridiche.",
      "Urkunde, mit der der Eigentümer sein Motorrad einem Käufer überträgt, einschließlich der gesetzlichen Verantwortlichkeiten.",
      "Акт, по которому владелец передаёт свой мотоцикл покупателю вместе с переходом юридической ответственности."
    ),
    where: W7(
      "بين المتنازل والمتنازل له، ثم لدى مصالح الوكالة الوطنية للسلامة الطرقية لتغيير البطاقة الرمادية",
      "Entre le cédant et le cessionnaire, puis auprès des services de l'Agence Nationale de la Sécurité Routière pour changer la carte grise",
      "Between the transferor and the transferee, then with the National Road Safety Agency services to update the registration card",
      "Entre el cedente y el cesionario, luego ante los servicios de la Agencia Nacional de Seguridad Vial para cambiar la tarjeta de matriculación",
      "Tra cedente e cessionario, poi presso i servizi dell'Agenzia Nazionale per la Sicurezza Stradale per aggiornare il libretto",
      "Zwischen Überträger und Erwerber, danach bei der Nationalen Agentur für Straßensicherheit zur Umschreibung des Fahrzeugscheins",
      "Между передающей и принимающей сторонами, затем в службах Национального агентства дорожной безопасности для переоформления документов"
    ),
    keywords: ["تنازل عن دراجة نارية", "cession moto", "motorcycle transfer", "دراجة نارية", "motocyclette"],
  },
  {
    id: "nzl-tanazul-safqa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن صفقة عمومية",
      "Désistement d'un marché public",
      "Withdrawal from a public procurement contract",
      "Desistimiento de un contrato público",
      "Rinuncia a un appalto pubblico",
      "Verzicht auf einen öffentlichen Auftrag",
      "Отказ от государственного контракта"
    ),
    desc: D7(
      "إعلان انسحاب المتقدم أو المتعاقد من صفقة عمومية وفق دفتر التحملات ودون الإخلال بالضمانات.",
      "Déclaration de retrait du soumissionnaire ou du titulaire d'un marché public, conformément au cahier des charges et sans préjudice des garanties.",
      "Declaration of withdrawal by a bidder or contractor from a public contract, in accordance with the specifications and without prejudice to guarantees.",
      "Declaración de retirada del licitador o contratista de un contrato público, conforme al pliego de condiciones y sin menoscabo de las garantías.",
      "Dichiarazione di recesso del concorrente o dell'aggiudicatario da un appalto pubblico, conforme al capitolato e salva la garanzia.",
      "Erklärung des Rücktritts des Bieters oder Auftragnehmers von einem öffentlichen Auftrag gemäß den Verdingungsunterlagen unbeschadet der Sicherheiten.",
      "Заявление участника или исполнителя об отказе от государственного контракта согласно тендерной документации и без ущерба для гарантий."
    ),
    where: W7(
      "يوجه إلى الجهة المتعاقدة أو لجنة طلب العروض المشرفة على الصفقة",
      "Adressé à l'autorité contractante ou à la commission d'appel d'offres chargée du marché",
      "Addressed to the contracting authority or the tender committee in charge of the contract",
      "Dirigida al órgano de contratación o a la mesa de contratación encargada del contrato",
      "Indirizzata alla stazione appaltante o alla commissione di gara incaricata dell'appalto",
      "Zu richten an den öffentlichen Auftraggeber oder den für den Auftrag zuständigen Vergabeausschuss",
      "Направляется заказчику или тендерной комиссии, отвечающей за контракт"
    ),
    keywords: ["تنازل عن صفقة", "désistement marché public", "public procurement withdrawal", "طلب العروض", "appel d'offres"],
  },
  {
    id: "nzl-tanazul-haq-awlawiyya-kiraa",
    cat: "naulat-fasikh",
    title: T7(
      "تنازل عن حق الأولوية في كراء المحل التجاري",
      "Renonciation au droit de préférence dans le bail commercial",
      "Waiver of the right of preference in a commercial lease",
      "Renuncia al derecho de preferencia en el alquiler de local comercial",
      "Rinuncia al diritto di preferenza nella locazione commerciale",
      "Verzicht auf das Vorzugsrecht im Gewerbemietvertrag",
      "Отказ от права приоритета при аренде коммерческого помещения"
    ),
    desc: D7(
      "تنازل المكتري عن حقه في الأولوية لتجديد كراء المحل التجاري أو الاقتناء عند إعادة الكراء.",
      "Renonciation par laquelle le locataire abandonne sa priorité de renouvellement du bail ou d'acquisition du local commercial.",
      "Waiver by which the tenant abandons the priority to renew the lease or acquire the commercial premises.",
      "Renuncia por la que el arrendatario abandona su prioridad de renovar el alquiler o adquirir el local comercial.",
      "Rinuncia con cui il conduttore abbandona la priorità di rinnovare la locazione o acquistare il locale commerciale.",
      "Verzicht, mit dem der Mieter sein Vorrecht auf Verlängerung des Mietvertrags oder Erwerb der Gewerberäume aufgibt.",
      "Отказ, которым арендатор уступает своё право приоритета на продление аренды или выкуп коммерческого помещения."
    ),
    where: W7(
      "بند يدرج في عقد الكراء أو وثيقة مستقلة بين المكري والمكتري",
      "Clause insérée dans le bail ou acte séparé entre le bailleur et le locataire",
      "Clause inserted into the lease or a separate deed between the landlord and the tenant",
      "Cláusula inserta en el contrato de alquiler o escritura separada entre arrendador y arrendatario",
      "Clausola inserita nel contratto di locazione o atto separato tra locatore e conduttore",
      "Im Mietvertrag enthaltene Klausel oder gesonderte Urkunde zwischen Vermieter und Mieter",
      "Оговорка в договоре аренды или отдельный документ между арендодателем и арендатором"
    ),
    keywords: ["حق الأولوية", "droit de préférence", "right of preference", "كراء محل تجاري", "bail commercial", "تجديد"],
  },
  {
    id: "nzl-talab-sahb-chikaya",
    cat: "naulat-fasikh",
    title: T7(
      "طلب سحب شكاية",
      "Demande de retrait de plainte",
      "Request for withdrawal of a complaint",
      "Solicitud de retirada de denuncia",
      "Domanda di ritiro della denuncia",
      "Antrag auf Rücknahme einer Anzeige",
      "Заявление об отзыве жалобы"
    ),
    desc: D7(
      "طلب يقدمه المشتكي لسحب شكايته المعروضة على النيابة العامة أو مصالح الشرطة بعد تسوية النزاع.",
      "Demande par laquelle le plaignant retire sa plainte déposée auprès du parquet ou des services de police après règlement du litige.",
      "Request by which the complainant withdraws the complaint filed with the prosecution or police services after the dispute is settled.",
      "Solicitud por la que el denunciante retira su denuncia presentada ante la fiscalía o la policía tras resolverse el litigio.",
      "Domanda con cui il denunciante ritira la denuncia sporta presso la procura o la polizia dopo la composizione della lite.",
      "Antrag, mit dem der Anzeigeerstatter nach Beilegung des Streits seine bei Staatsanwaltschaft oder Polizei erstattete Anzeige zurücknimmt.",
      "Заявление, которым заявитель отзывает жалобу, поданную в прокуратуру или полицию, после урегулирования спора."
    ),
    where: W7(
      "لدى النيابة العامة بالمحكمة أو المصلحة التي تلقت الشكاية (الشرطة أو الدرك الملكي)",
      "Auprès du parquet du tribunal ou du service ayant reçu la plainte (police ou gendarmerie royale)",
      "With the court's public prosecutor or the service that received the complaint (police or royal gendarmerie)",
      "Ante la fiscalía del tribunal o el servicio que recibió la denuncia (policía o gendarmería real)",
      "Presso la procura del tribunale o il servizio che ha ricevuto la denuncia (polizia o gendarmeria reale)",
      "Bei der Staatsanwaltschaft des Gerichts oder der aufnehmenden Dienststelle (Polizei oder Königliche Gendarmerie)",
      "В прокуратуру суда или орган, принявший жалобу (полиция или королевская жандармерия)"
    ),
    authority: "justice",
    keywords: ["سحب شكاية", "retrait de plainte", "complaint withdrawal", "النيابة العامة", "parquet"],
  },
];
