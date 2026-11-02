// Official request forms — civil status copies, land registry (ANCFCC),
// consular services, regulated professions and misc administration.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsDemandesB: DocumentItem[] = [
  // ─── État civil — actes et mentions ───
  {
    id: "req-mention-mariage-naissance",
    cat: "demandes",
    title: T7(
      "طلب تضمين الزواج على هامش رسم الولادة",
      "Demande de mention de mariage en marge d'un acte de naissance",
      "Application for a marriage annotation on a birth certificate",
      "Solicitud de anotación de matrimonio en un acta de nacimiento",
      "Richiesta di annotazione di matrimonio in margine all'atto di nascita",
      "Antrag auf Randvermerk der Eheschließung im Geburtsschein",
      "Заявление о внесении записи о браке на поле свидетельства о рождении"
    ),
    desc: D7(
      "طلب موجه لضابط الحالة المدنية من أجل تضمين عقد الزواج على هامش رسم الولادة وتحيين بيانات المعني بالأمر.",
      "Demande à l'officier d'état civil d'inscrire le mariage en marge de l'acte de naissance pour actualiser la situation de la personne.",
      "Request to the civil registrar to note the marriage in the margin of the birth certificate and update the person's status.",
      "Solicitud al oficial del registro civil de anotar el matrimonio al margen del acta de nacimiento para actualizar el estado de la persona.",
      "Richiesta all'ufficiale di stato civile di annotare il matrimonio a margine dell'atto di nascita per aggiornare lo stato della persona.",
      "Antrag an den Standesbeamten, die Eheschließung am Rand des Geburtsscheins zu vermerken und den Personenstand zu aktualisieren.",
      "Заявление регистратору о внесении записи о браке на поле свидетельства о рождении для обновления статуса лица."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة المحرزة لرسم الولادة أو عبر منصة idarati.ma.",
      "Service d'état civil de la commune détentrice de l'acte, ou via le portail idarati.ma.",
      "Civil registry of the commune holding the act, or via the idarati.ma portal.",
      "Registro civil de la comuna que custodia el acta, o vía idarati.ma.",
      "Ufficio di stato civile del comune depositario dell'atto, oppure via idarati.ma.",
      "Standesamt der verwahrenden Gemeinde oder über das Portal idarati.ma.",
      "ЗАГС коммуны, где хранится акт, либо через портал idarati.ma."
    ),
    keywords: ["تضمين", "mention marginale", "annotation", "رسم الولادة", "acte de naissance", "marriage"],
  },
  {
    id: "req-mention-deces-naissance",
    cat: "demandes",
    title: T7(
      "طلب تضمين الوفاة على هامش رسم الولادة",
      "Demande de mention de décès en marge d'un acte de naissance",
      "Application for a death annotation on a birth certificate",
      "Solicitud de anotación de defunción en un acta de nacimiento",
      "Richiesta di annotazione di decesso in margine all'atto di nascita",
      "Antrag auf Randvermerk des Todesfalls im Geburtsschein",
      "Заявление о внесении записи о смерти на поле свидетельства о рождении"
    ),
    desc: D7(
      "طلب توجيه نسخة من رسم الوفاة لمصلحة الحالة المدنية لتقييد الوفاة على هامش رسم ولادة المتوفى.",
      "Demande d'inscrire le décès en marge de l'acte de naissance du défunt auprès de l'officier d'état civil.",
      "Request to have the registrar note the death in the margin of the deceased person's birth certificate.",
      "Solicitud para que el oficial anote la defunción al margen del acta de nacimiento del fallecido.",
      "Richiesta di annotare il decesso a margine dell'atto di nascita del defunto.",
      "Antrag, den Todesfall am Rand des Geburtsscheins des Verstorbenen vermerken zu lassen.",
      "Заявление о внесении записи о смерти на поле свидетельства о рождении умершего."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة المحرزة لرسم الولادة مع تقديم نسخة من رسم الوفاة.",
      "Service d'état civil de la commune détentrice de l'acte de naissance, avec copie de l'acte de décès.",
      "Civil registry of the commune holding the birth certificate, with a copy of the death certificate.",
      "Registro civil de la comuna que custodia el acta de nacimiento, con copia del acta de defunción.",
      "Ufficio di stato civile del comune depositario dell'atto di nascita, con copia dell'atto di morte.",
      "Standesamt der verwahrenden Gemeinde, zusammen mit einer Kopie der Sterbeurkunde.",
      "ЗАГС коммуны, где хранится свидетельство о рождении, с копией свидетельства о смерти."
    ),
    keywords: ["تضمين الوفاة", "mention de décès", "death annotation", "رسم الولادة", "acte de naissance"],
  },
  {
    id: "req-mention-divorce-naissance",
    cat: "demandes",
    title: T7(
      "طلب تضمين الطلاق على هامش رسم الولادة",
      "Demande de mention de divorce en marge d'un acte de naissance",
      "Application for a divorce annotation on a birth certificate",
      "Solicitud de anotación de divorcio en un acta de nacimiento",
      "Richiesta di annotazione di divorzio in margine all'atto di nascita",
      "Antrag auf Randvermerk der Scheidung im Geburtsschein",
      "Заявление о внесении записи о разводе на поле свидетельства о рождении"
    ),
    desc: D7(
      "طلب تقييد الطلاق على هامش رسم ولادة أحد الزوجين بعد الحصول على نسخة من وثيقة الطلاق.",
      "Demande d'inscrire le divorce en marge de l'acte de naissance de l'un des époux, sur présentation de l'acte de divorce.",
      "Request to note the divorce in the margin of a spouse's birth certificate upon production of the divorce deed.",
      "Solicitud de anotar el divorcio al margen del acta de nacimiento de uno de los cónyuges.",
      "Richiesta di annotare il divorzio a margine dell'atto di nascita di uno dei coniugi.",
      "Antrag auf Vermerk der Scheidung am Rand des Geburtsscheins eines Ehegatten.",
      "Заявление о внесении записи о разводе на поле свидетельства о рождении одного из супругов."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة مع نسخة من عقد الطلاق أو حكمه النهائي.",
      "Service d'état civil de la commune, avec une copie de l'acte ou du jugement de divorce.",
      "Civil registry of the commune, with a copy of the divorce deed or judgment.",
      "Registro civil de la comuna, con copia del acta o sentencia de divorcio.",
      "Ufficio di stato civile del comune, con copia dell'atto o della sentenza di divorzio.",
      "Standesamt der Gemeinde mit einer Kopie der Scheidungsurkunde oder des Urteils.",
      "ЗАГС коммуны с копией документа или решения о разводе."
    ),
    keywords: ["تضمين الطلاق", "mention de divorce", "divorce annotation", "الحالة المدنية", "état civil"],
  },
  {
    id: "req-mention-divorce-mariage",
    cat: "demandes",
    title: T7(
      "طلب تضمين الطلاق على هامش عقد الزواج",
      "Demande de mention de divorce en marge d'un acte de mariage",
      "Application for a divorce annotation on a marriage certificate",
      "Solicitud de anotación de divorcio en un acta de matrimonio",
      "Richiesta di annotazione di divorzio in margine all'atto di matrimonio",
      "Antrag auf Randvermerk der Scheidung in der Heiratsurkunde",
      "Заявление о внесении записи о разводе на поле свидетельства о браке"
    ),
    desc: D7(
      "طلب تقييد الطلاق على هامش عقد الزواج لدى مصلحة الحالة المدنية قصد تحيين الرسم وتوثيق انحلال الرابطة.",
      "Demande d'inscrire le divorce en marge de l'acte de mariage afin de mettre à jour le registre et constater la dissolution du lien.",
      "Request to note the divorce in the margin of the marriage certificate to update the record and evidence the dissolution.",
      "Solicitud de anotar el divorcio al margen del acta de matrimonio para actualizar el registro.",
      "Richiesta di annotare il divorzio a margine dell'atto di matrimonio per aggiornare il registro.",
      "Antrag auf Vermerk der Scheidung am Rand der Heiratsurkunde zur Aktualisierung des Registers.",
      "Заявление о внесении записи о разводе на поле свидетельства о браке для обновления записи."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة محل إبرام عقد الزواج بعد استيفاء الوثائق المثبتة.",
      "Service d'état civil de la commune du lieu de mariage, après constitution des justificatifs.",
      "Civil registry of the commune where the marriage was concluded, once supporting documents are provided.",
      "Registro civil de la comuna del lugar del matrimonio, una vez aportados los justificantes.",
      "Ufficio di stato civile del comune del luogo di matrimonio, previa presentazione dei documenti.",
      "Standesamt der Gemeinde des Heiratsortes nach Vorlage der Nachweise.",
      "ЗАГС коммуны по месту заключения брака после представления подтверждающих документов."
    ),
    keywords: ["تضمين الطلاق", "mention de divorce", "عقد الزواج", "acte de mariage", "divorce"],
  },
  {
    id: "req-mention-deces-mariage",
    cat: "demandes",
    title: T7(
      "طلب تضمين الوفاة على هامش عقد الزواج",
      "Demande de mention de décès en marge d'un acte de mariage",
      "Application for a death annotation on a marriage certificate",
      "Solicitud de anotación de defunción en un acta de matrimonio",
      "Richiesta di annotazione di decesso in margine all'atto di matrimonio",
      "Antrag auf Randvermerk des Todesfalls in der Heiratsurkunde",
      "Заявление о внесении записи о смерти на поле свидетельства о браке"
    ),
    desc: D7(
      "طلب تقييد وفاة أحد الزوجين على هامش عقد الزواج مع تقديم رسم الوفاة لتحيين الحالة المدنية.",
      "Demande d'inscrire le décès d'un époux en marge de l'acte de mariage, sur production de l'acte de décès.",
      "Request to note a spouse's death in the margin of the marriage certificate upon production of the death certificate.",
      "Solicitud de anotar la defunción de un cónyuge al margen del acta de matrimonio.",
      "Richiesta di annotare il decesso di un coniuge a margine dell'atto di matrimonio.",
      "Antrag auf Vermerk des Todes eines Ehegatten am Rand der Heiratsurkunde.",
      "Заявление о внесении записи о смерти супруга на поле свидетельства о браке."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة محل إبرام العقد مع نسخة من رسم الوفاة.",
      "Service d'état civil de la commune du lieu de mariage, avec une copie de l'acte de décès.",
      "Civil registry of the commune where the marriage was concluded, with a copy of the death certificate.",
      "Registro civil de la comuna del lugar del matrimonio, con copia del acta de defunción.",
      "Ufficio di stato civile del comune del luogo di matrimonio, con copia dell'atto di morte.",
      "Standesamt der Gemeinde des Heiratsortes mit einer Kopie der Sterbeurkunde.",
      "ЗАГС коммуны по месту заключения брака с копией свидетельства о смерти."
    ),
    keywords: ["تضمين الوفاة", "mention de décès", "عقد الزواج", "acte de mariage", "état civil"],
  },
  {
    id: "req-insertion-reconnaissance",
    cat: "demandes",
    title: T7(
      "طلب تضمين الاعتراف بالبنوة",
      "Demande d'insertion d'un acte de reconnaissance",
      "Application to insert a recognition act",
      "Solicitud de inserción de un acta de reconocimiento",
      "Richiesta di inserzione di un atto di riconoscimento",
      "Antrag auf Einfügung eines Anerkennungsaktes",
      "Заявление о внесении акта о признании отцовства"
    ),
    desc: D7(
      "طلب لتضمين الاعتراف بالبنوة على هامش رسم ولادة الطفل المعترف به لدى مصلحة الحالة المدنية.",
      "Requête pour insérer la reconnaissance de filiation en marge de l'acte de naissance de l'enfant reconnu.",
      "Request to insert the acknowledgement of filiation in the margin of the recognised child's birth certificate.",
      "Solicitud para insertar el reconocimiento de filiación al margen del acta de nacimiento del niño reconocido.",
      "Richiesta di inserire il riconoscimento di filiazione a margine dell'atto di nascita del figlio riconosciuto.",
      "Antrag auf Einfügung der Anerkennung der Abstammung am Rand des Geburtsscheins des anerkannten Kindes.",
      "Заявление о внесении признания происхождения на поле свидетельства о рождении признанного ребёнка."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة مع وثيقة الاعتراف العدلية أو القضائية المنجزة سابقا.",
      "Service d'état civil de la commune, avec l'acte de reconnaissance adoulaire ou judiciaire déjà établi.",
      "Civil registry of the commune, with the previously drawn-up adoulaire or judicial recognition deed.",
      "Registro civil de la comuna, con el acta de reconocimiento adoulaire o judicial ya establecida.",
      "Ufficio di stato civile del comune, con l'atto di riconoscimento adoulaire o giudiziario già redatto.",
      "Standesamt der Gemeinde mit der bereits errichteten Anerkennungsurkunde.",
      "ЗАГС коммуны с ранее составленным актом о признании."
    ),
    keywords: ["الاعتراف بالبنوة", "reconnaissance", "filiation", "رسم الولادة", "acte de naissance"],
  },
  {
    id: "req-livret-famille-duplicata",
    cat: "demandes",
    title: T7(
      "طلب استخراج نسخة ثانية من دفتر الحالة المدنية",
      "Demande de duplicata du livret de famille",
      "Application for a duplicate family record booklet",
      "Solicitud de duplicado del libro de familia",
      "Richiesta di duplicato del libretto di famiglia",
      "Antrag auf eine Zweitausfertigung des Familienbuches",
      "Заявление на дубликат семейной книжки"
    ),
    desc: D7(
      "طلب استخراج نسخة ثانية من دفتر الحالة المدنية بعد فقده أو إتلافه لأسباب خارجة عن إرادة الأسرة.",
      "Demande de délivrance d'un second livret de famille après perte ou destruction de l'original pour cause indépendante.",
      "Application for a second family record booklet after loss or destruction of the original.",
      "Solicitud de expedición de un segundo libro de familia tras la pérdida o destrucción del original.",
      "Richiesta di rilascio di un secondo libretto di famiglia dopo smarrimento o distruzione dell'originale.",
      "Antrag auf ein zweites Familienbuch nach Verlust oder Zerstörung des Originals.",
      "Заявление на выдачу второго экземпляра семейной книжки после утери или уничтожения оригинала."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة المسجلة بها وثائق الأسرة مع تصريح بالفقدان.",
      "Service d'état civil de la commune où les actes de la famille sont inscrits, avec déclaration de perte.",
      "Civil registry of the commune where the family's records are registered, with a loss declaration.",
      "Registro civil de la comuna donde están inscritas las actas de la familia, con declaración de pérdida.",
      "Ufficio di stato civile del comune dove sono registrati gli atti della famiglia, con denuncia di smarrimento.",
      "Standesamt der Gemeinde, in der die Familiensachen eingetragen sind, mit Verlustanzeige.",
      "ЗАГС коммуны, где зарегистрированы акты семьи, с заявлением об утере."
    ),
    keywords: ["دفتر الحالة المدنية", "livret de famille", "family booklet", "نسخة ثانية", "duplicata"],
  },
  {
    id: "req-recherche-actes-anciens",
    cat: "demandes",
    title: T7(
      "طلب البحث في أرشيف الحالة المدنية",
      "Demande de recherche d'actes anciens à l'état civil",
      "Application for a search of old civil registry records",
      "Solicitud de búsqueda de actas antiguas en el registro civil",
      "Richiesta di ricerca di atti antichi nello stato civile",
      "Antrag auf Suche alter Standesamtsregister",
      "Заявление о поиске старых актовых записей"
    ),
    desc: D7(
      "طلب إجراء بحث في سجلات وأرشيف الحالة المدنية عن رسوم قديمة أو مضمنة بمصالح سابقة قبل الربط الشبكي.",
      "Demande de recherche dans les registres et archives d'état civil d'actes anciens antérieurs à l'informatisation.",
      "Request for a search through civil registry archives for old records predating computerisation.",
      "Solicitud de búsqueda en los archivos del registro civil de actas antiguas anteriores a la informatización.",
      "Richiesta di ricerca negli archivi di stato civile di atti antichi precedenti all'informatizzazione.",
      "Antrag auf Suche in Standesamtsarchiven nach alten, vor der Digitalisierung entstandenen Urkunden.",
      "Заявление о поиске в архивах ЗАГС старых записей, созданных до оцифровки."
    ),
    where: W7(
      "مصلحة الحالة المدنية أو خزانة الوثائق والأرشيف بالجماعة محل تقييد الرسم مع أداء واجبات البحث.",
      "Service d'état civil ou archives de la commune d'inscription de l'acte, contre acquittement des frais de recherche.",
      "Civil registry or archives of the commune where the act was recorded, upon payment of search fees.",
      "Registro civil o archivos de la comuna de inscripción del acta, previo pago de las tasas de búsqueda.",
      "Ufficio di stato civile o archivi del comune di iscrizione dell'atto, dietro pagamento delle spese di ricerca.",
      "Standesamt oder Archiv der Gemeinde der Eintragung, gegen Entrichtung der Suchgebühren.",
      "ЗАГС или архив коммуны по месту регистрации акта после уплаты платы за поиск."
    ),
    keywords: ["أرشيف", "archives", "recherche d'acte", "بحث", "registres anciens", "old records"],
  },
  {
    id: "req-copie-conforme-certifiee",
    cat: "demandes",
    title: T7(
      "طلب نسخة مطابقة مع التصديق بالمطابقة",
      "Demande de copie certifiée conforme",
      "Application for a certified true copy",
      "Solicitud de copia certificada conforme",
      "Richiesta di copia conforme autenticata",
      "Antrag auf beglaubigte Abschrift",
      "Заявление на заверенную копию"
    ),
    desc: D7(
      "طلب الحصول على نسخ مطابقة ومصدق بها لأصل وثيقة إدارية قصد استعمالها لدى الهيئات الرسمية.",
      "Demande de copies certifiées conformes à l'original d'un document administratif pour usage officiel.",
      "Request for certified true copies of an administrative document's original for official use.",
      "Solicitud de copias certificadas conformes al original de un documento administrativo para uso oficial.",
      "Richiesta di copie conformi autenticate all'originale di un documento amministrativo per uso ufficiale.",
      "Antrag auf beglaubigte, dem Original entsprechende Kopien eines Verwaltungsdokuments.",
      "Заявление на заверенные копии оригинала административного документа для официального использования."
    ),
    where: W7(
      "المصلحة المصدرة للوثيقة أو مصلحة الحالة المدنية بالجماعة بعد تقديم الأصل.",
      "Service émetteur du document ou état civil de la commune, sur présentation de l'original.",
      "Issuing office of the document or the commune's civil registry, upon presentation of the original.",
      "Oficina emisora del documento o registro civil de la comuna, previa presentación del original.",
      "Ufficio emittente del documento o stato civile del comune, su presentazione dell'originale.",
      "Ausstellende Behörde oder Standesamt der Gemeinde nach Vorlage des Originals.",
      "Орган, выдавший документ, или ЗАГС коммуны при предъявлении оригинала."
    ),
    keywords: ["نسخة مطابقة", "copie certifiée", "certified copy", "تصديق", "légalisation"],
  },
  {
    id: "req-traduction-assermentee",
    cat: "demandes",
    title: T7(
      "طلب ترجمة رسمية لوثائق إدارية",
      "Demande de traduction assermentée de documents",
      "Application for sworn translation of documents",
      "Solicitud de traducción jurada de documentos",
      "Richiesta di traduzione giurata di documenti",
      "Antrag auf beeidigte Übersetzung von Dokumenten",
      "Заявление на заверенный перевод документов"
    ),
    desc: D7(
      "طلب ترجمة رسمية لوثائق الحالة المدنية والشهادات لدى مترجم معتمد لاستعمالها أمام الجهات الرسمية.",
      "Demande de traduction officielle des actes et diplômes par un traducteur agréé pour usage auprès des autorités.",
      "Request for official translation of civil status records and diplomas by an approved translator for authority use.",
      "Solicitud de traducción oficial de actas y diplomas por un traductor acreditado para uso ante autoridades.",
      "Richiesta di traduzione ufficiale di atti e diplomi da parte di un traduttore autorizzato.",
      "Antrag auf amtliche Übersetzung von Urkunden und Diplomen durch einen vereidigten Übersetzer.",
      "Заявление на официальный перевод актов и дипломов присяжным переводчиком для предъявления в ведомствах."
    ),
    where: W7(
      "لدى المترجمين الرسميين المعتمدين لدى المحاكم، مع تصديق وزارة العدل عند الاستعمال بالخارج.",
      "Auprès des traducteurs assermentés agréés près les tribunaux, avec légalisation du ministère de la Justice pour l'étranger.",
      "With court-approved sworn translators, with Ministry of Justice legalisation for use abroad.",
      "Ante traductores jurados acreditados ante los tribunales, con legalización del Ministerio de Justicia para el extranjero.",
      "Presso i traduttori giurati accreditati presso i tribunali, con legalizzazione del Ministero della Giustizia per l'estero.",
      "Bei den vor den Gerichten vereidigten Übersetzern, mit Beglaubigung des Justizministeriums für das Ausland.",
      "У судебных присяжных переводчиков с заверением министерства юстиции для использования за рубежом."
    ),
    authority: "justice",
    keywords: ["ترجمة رسمية", "traduction assermentée", "sworn translation", "traducción jurada", "مترجم معتمد"],
    popular: true,
  },
  {
    id: "req-legalisation-signature",
    cat: "demandes",
    title: T7(
      "طلب التصديق على الإمضاء",
      "Demande de légalisation de signature",
      "Application for signature legalisation",
      "Solicitud de legalización de firma",
      "Richiesta di legalizzazione della firma",
      "Antrag auf Beglaubigung der Unterschrift",
      "Заявление на заверение подписи"
    ),
    desc: D7(
      "طلب التصديق على إمضاء صاحب الطلب أمام ضابط الحالة المدنية لتوثيق الوثائق الموجهة للإدارات والهيئات.",
      "Demande de légalisation de la signature du requérant devant l'officier d'état civil pour authentifier ses documents.",
      "Request to legalise the applicant's signature before the civil registrar to authenticate documents for administrations.",
      "Solicitud de legalización de la firma del solicitante ante el oficial del registro civil para autenticar documentos.",
      "Richiesta di legalizzazione della firma del richiedente davanti all'ufficiale di stato civile.",
      "Antrag auf Beglaubigung der Unterschrift des Antragstellers vor dem Standesbeamten.",
      "Заявление о заверении подписи заявителя перед регистратором для удостоверения документов."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة محل السكنى بحضور المعني بالأمر حاملا بطاقته الوطنية.",
      "Service d'état civil de la commune de résidence, en présence de l'intéressé porteur de sa CIN.",
      "Civil registry of the commune of residence, in the presence of the applicant carrying the national ID card.",
      "Registro civil de la comuna de residencia, en presencia del interesado con su documento nacional.",
      "Ufficio di stato civile del comune di residenza, in presenza dell'interessato con la carta d'identità.",
      "Standesamt der Wohngemeinde, in Anwesenheit des Betroffenen mit Personalausweis.",
      "ЗАГС коммуны проживания в присутствии заявителя с удостоверением личности."
    ),
    keywords: ["التصديق على الإمضاء", "légalisation de signature", "signature legalisation", "الجماعة", "commune"],
    popular: true,
  },
  {
    id: "req-certificat-nationalite",
    cat: "demandes",
    title: T7(
      "طلب الحصول على شهادة الجنسية المغربية",
      "Demande de certificat de nationalité marocaine",
      "Application for a Moroccan nationality certificate",
      "Solicitud de certificado de nacionalidad marroquí",
      "Richiesta di certificato di nazionalità marocchina",
      "Antrag auf ein Zeugnis der marokkanischen Staatsangehörigkeit",
      "Заявление на справку о марокканском граждانстве"
    ),
    desc: D7(
      "طلب موجه لرئيس المحكمة الابتدائية للحصول على شهادة الجنسية المغربية للاستعمالات الإدارية والقضائية.",
      "Demande adressée au président du tribunal de première instance aux fins d'obtention du certificat de nationalité marocaine.",
      "Application addressed to the president of the first-instance court to obtain a certificate of Moroccan nationality.",
      "Solicitud dirigida al presidente del tribunal de primera instancia para obtener el certificado de nacionalidad marroquí.",
      "Domanda indirizzata al presidente del tribunale di primo grado per ottenere il certificato di nazionalità marocchina.",
      "Antrag an den Präsidenten des Gerichts erster Instanz auf Erteilung des Staatsangehörigkeitszeugnisses.",
      "Заявление на имя председателя суда первой инстанции о выдаче справки о марокканском гражданстве."
    ),
    where: W7(
      "كتابة الضبط بالمحكمة الابتدائية التابع لها مكان الميلاد أو محل الإقامة بالمغرب.",
      "Greffe du tribunal de première instance du lieu de naissance ou de résidence au Maroc.",
      "Registry of the first-instance court of the place of birth or residence in Morocco.",
      "Secretaría del tribunal de primera instancia del lugar de nacimiento o residencia en Marruecos.",
      "Cancelleria del tribunale di primo grado del luogo di nascita o di residenza in Marocco.",
      "Geschäftsstelle des Gerichts erster Instanz am Geburts- oder Wohnort in Marokko.",
      "Канцелярия суда первой инстанции по месту рождения или проживания в Марокко."
    ),
    authority: "justice",
    keywords: ["شهادة الجنسية", "certificat de nationalité", "nationality certificate", "الجنسية المغربية", "tribunal"],
    popular: true,
  },
  {
    id: "req-acte-deces-succession",
    cat: "demandes",
    title: T7(
      "طلب نسخة من رسم الوفاة لأغراض الميراث",
      "Demande d'acte de décès aux fins de succession",
      "Application for a death certificate for inheritance purposes",
      "Solicitud de acta de defunción a efectos sucesorios",
      "Richiesta di atto di morte per fini successori",
      "Antrag auf eine Sterbeurkunde für Erbschaftszwecke",
      "Заявление на свидетельство о смерти для наследственных целей"
    ),
    desc: D7(
      "طلب نسخ من رسم وفاة المورث لتقديمها إلى المحكمة والهيئات المكلفة بحصر الإرث وتصفية التركة.",
      "Demande de copies de l'acte de décès du défunt pour la succession et la liquidation de la succession.",
      "Request for copies of the deceased's death certificate for heirship determination and estate settlement.",
      "Solicitud de copias del acta de defunción del causante para la declaración de herederos y liquidación.",
      "Richiesta di copie dell'atto di morte del de cuius per la successione e la liquidazione dell'asse ereditario.",
      "Antrag auf Kopien der Sterbeurkunde des Erblassers für Erbenermittlung und Nachlassabwicklung.",
      "Заявление на копии свидетельства о смерти наследодателя для определения наследников и раздела имущества."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة محل الوفاة مع ما يثبت صفة الوارث الطالب.",
      "Service d'état civil de la commune du lieu de décès, avec justificatif de la qualité d'héritier.",
      "Civil registry of the commune of death, with proof of the applicant's heir status.",
      "Registro civil de la comuna del lugar de defunción, con prueba de la condición de heredero.",
      "Ufficio di stato civile del comune del luogo di decesso, con prova della qualità di erede.",
      "Standesamt der Gemeinde des Sterbeorts mit Nachweis der Erbeneigenschaft.",
      "ЗАГС коммуны по месту смерти с подтверждением статуса наследника."
    ),
    keywords: ["الميراث", "succession", "inheritance", "رسم الوفاة", "acte de décès", "تركة"],
  },
  {
    id: "req-acte-tiers-procuration",
    cat: "demandes",
    title: T7(
      "طلب نسخ من الحالة المدنية بواسطة وكيل",
      "Demande d'actes d'état civil par un tiers muni d'une procuration",
      "Application for civil status records by an authorised third party",
      "Solicitud de actas del registro civil por un tercio autorizado",
      "Richiesta di atti di stato civile tramite un terzo delegato",
      "Antrag auf Standesamtsurkunden durch einen bevollmächtigten Dritten",
      "Заявление на получение актов гражданского состояния через доверенное лицо"
    ),
    desc: D7(
      "طلب يمسك بموجبه الوكيل عن المعني بالأمر نسخا من رسوم الحالة المدنية اعتمادا على وكالة رسمية سليمة.",
      "Demande par laquelle un mandataire obtient des copies d'actes d'état civil en vertu d'une procuration officielle.",
      "Application whereby a proxy holder obtains copies of civil status records under a formal power of attorney.",
      "Solicitud mediante la cual un apoderado obtiene copias de actas del registro civil en virtud de un poder oficial.",
      "Domanda con cui un procuratore ottiene copie di atti di stato civile in virtù di una procura ufficiale.",
      "Antrag, mit dem ein Bevollmächtigter kraft einer offiziellen Vollmacht Urkundenabschriften erhält.",
      "Заявление, по которому доверенное лицо получает копии актов на основании официальной доверенности."
    ),
    where: W7(
      "مصلحة الحالة المدنية المعنية مع وكالة موقعة ونسخ من بطاقتي الوكيل والموكل.",
      "Service d'état civil concerné, avec procuration signée et copies des CIN du mandataire et du mandant.",
      "Relevant civil registry office, with a signed power of attorney and copies of both parties' ID cards.",
      "Oficina del registro civil competente, con poder firmado y copias de los documentos de identidad.",
      "Ufficio di stato civile competente, con procura firmata e copie dei documenti d'identità delle parti.",
      "Zuständiges Standesamt mit unterschriebener Vollmacht und Kopien der Ausweise beider Parteien.",
      "Соответствующий ЗАГС с подписанной доверенностью и копиями удостоверений личности обеих сторон."
    ),
    keywords: ["وكالة", "procuration", "power of attorney", "نسخ الرسوم", "état civil", "tiers"],
  },
  {
    id: "req-copie-acte-divorce",
    cat: "demandes",
    title: T7(
      "طلب نسخة من وثيقة الطلاق",
      "Demande de copie d'un acte de divorce",
      "Application for a copy of a divorce deed",
      "Solicitud de copia del acta de divorcio",
      "Richiesta di copia di un atto di divorzio",
      "Antrag auf eine Kopie der Scheidungsurkunde",
      "Заявление на копию документа о разводе"
    ),
    desc: D7(
      "طلب الحصول على نسخة من وثيقة الطلاق العدلية المسجلة بالمحكمة للاستعمالات الإدارية والقضائية.",
      "Demande d'une copie de l'acte de divorce adoulaire enregistré au tribunal pour usages administratifs et judiciaires.",
      "Request for a copy of the adoulaire divorce deed registered with the court for administrative and judicial uses.",
      "Solicitud de una copia del acta de divorcio adoulaire registrada en el tribunal para usos administrativos y judiciales.",
      "Richiesta di una copia dell'atto di divorzio adoulaire registrato presso il tribunale.",
      "Antrag auf eine Kopie des beim Gericht registrierten adoulischen Scheidungsaktes.",
      "Заявление на копию зарегистрированного при суде акта о разводе для административных и судебных целей."
    ),
    where: W7(
      "قسم التوثيق بالمحكمة الابتدائية أو عبر الخدمات الرقمية لبوابة وزارة العدل.",
      "Section du notariat au tribunal de première instance ou via les services numériques du ministère de la Justice.",
      "Notarial section of the first-instance court or via the Ministry of Justice digital services.",
      "Sección de notariado del tribunal de primera instancia o vía los servicios digitales del Ministerio de Justicia.",
      "Sezione notarile del tribunale di primo grado o tramite i servizi digitali del Ministero della Giustizia.",
      "Notarsektion des Gerichts erster Instanz oder über die digitalen Dienste des Justizministeriums.",
      "Нотариальный отдел суда первой инстанции либо через цифровые сервисы министерства юстиции."
    ),
    authority: "justice",
    keywords: ["وثيقة الطلاق", "acte de divorce", "divorce deed", "العدول", "adoul", "نسخة"],
  },
  {
    id: "req-rectification-erreur-acte",
    cat: "demandes",
    title: T7(
      "طلب تصحيح خطأ مادي في رسم الحالة المدنية",
      "Demande de rectification d'une erreur matérielle dans un acte",
      "Application to rectify a clerical error in a civil status record",
      "Solicitud de rectificación de un error material en un acta",
      "Richiesta di rettifica di un errore materiale in un atto",
      "Antrag auf Berichtigung eines offensichtlichen Fehlers in einer Urkunde",
      "Заявление об исправлении явной ошибки в актовой записи"
    ),
    desc: D7(
      "طلب تصحيح خطأ مادي في بيانات رسم الحالة المدنية يقدم إلى النيابة العامة للمحكمة المختصة.",
      "Demande de correction d'une erreur matérielle dans un acte d'état civil, adressée au parquet du tribunal compétent.",
      "Application to correct a clerical error in a civil status record, addressed to the competent court's prosecution.",
      "Solicitud de corrección de un error material en un acta del registro civil, dirigida al ministerio fiscal competente.",
      "Domanda di correzione di un errore materiale in un atto di stato civile, indirizzata alla procura competente.",
      "Antrag auf Berichtigung eines offensichtlichen Fehlers in einer standesamtlichen Urkunde, gerichtet an die Staatsanwaltschaft.",
      "Заявление об исправлении явной ошибки в актовой записи, подаваемое в прокуратуру компетентного суда."
    ),
    where: W7(
      "النيابة العامة بالمحكمة الابتدائية التي بدائرتها مقر مصلحة الحالة المدنية المعنية.",
      "Parquet du tribunal de première instance dans le ressort duquel se trouve le service d'état civil concerné.",
      "Prosecution office of the first-instance court within whose jurisdiction the relevant civil registry lies.",
      "Ministerio fiscal del tribunal de primera instancia en cuya circunscripción se encuentra el registro civil.",
      "Procura del tribunale di primo grado nel cui distretto si trova l'ufficio di stato civile.",
      "Staatsanwaltschaft des Gerichts erster Instanz, in dessen Bezirk das Standesamt liegt.",
      "Прокуратура суда первой инстанции, в округе которого находится соответствующий ЗАГС."
    ),
    authority: "justice",
    keywords: ["تصحيح", "rectification", "clerical error", "خطأ مادي", "erreur matérielle", "الحالة المدنية"],
  },
  {
    id: "req-declaration-deces",
    cat: "demandes",
    title: T7(
      "بلاغ الوفاة",
      "Déclaration de décès",
      "Declaration of death",
      "Declaración de defunción",
      "Dichiarazione di morte",
      "Todesanzeige",
      "Регистрация смерти"
    ),
    desc: D7(
      "تصريح بالوفاة يقدمه أقارب المتوفى أو الملزمون به إلى ضابط الحالة المدنية داخل الأجل القانوني.",
      "Déclaration de décès déposée par les proches du défunt auprès de l'officier d'état civil dans le délai légal.",
      "Declaration of death lodged by the deceased's relatives with the civil registrar within the legal period.",
      "Declaración de defunción presentada por los familiares del fallecido ante el oficial del registro civil en el plazo legal.",
      "Dichiarazione di morte presentata dai familiari del defunto all'ufficiale di stato civile entro il termine legale.",
      "Todesanzeige, die von den Angehörigen des Verstorbenen innerhalb der gesetzlichen Frist beim Standesbeamten eingereicht wird.",
      "Заявление о смерти, подаваемое родственниками умершего регистратору в установленный законом срок."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة التي وقعت بها الوفاة، مرفقة بشهادة الوفاة الطبية.",
      "Service d'état civil de la commune du lieu de décès, accompagné du certificat médical de décès.",
      "Civil registry of the commune where the death occurred, accompanied by the medical death certificate.",
      "Registro civil de la comuna del lugar del fallecimiento, junto con el certificado médico de defunción.",
      "Ufficio di stato civile del comune del luogo di decesso, con il certificato medico di morte.",
      "Standesamt der Gemeinde des Sterbeorts, zusammen mit der ärztlichen Sterbebescheinigung.",
      "ЗАГС коммуны по месту наступления смерти вместе с медицинским свидетельством о смерти."
    ),
    keywords: ["بلاغ الوفاة", "déclaration de décès", "death declaration", "الحالة المدنية", "état civil"],
  },
  {
    id: "req-autorisation-inhumation",
    cat: "demandes",
    title: T7(
      "طلب الإذن بالدفن",
      "Demande d'autorisation d'inhumation",
      "Application for a burial permit",
      "Solicitud de autorización de sepelio",
      "Richiesta di autorizzazione alla sepoltura",
      "Antrag auf eine Bestattungsgenehmigung",
      "Заявление на разрешение погребения"
    ),
    desc: D7(
      "طلب الحصول على إذن الدفن من ضابط الحالة المدنية بعد تقديم شهادة الوفاة الطبية للمتوفى.",
      "Demande du permis d'inhumer délivré par l'officier d'état civil sur présentation du certificat médical de décès.",
      "Request for the burial permit issued by the civil registrar upon presentation of the medical death certificate.",
      "Solicitud del permiso de sepelio emitido por el oficial del registro civil tras presentar el certificado médico de defunción.",
      "Richiesta del permesso di sepoltura rilasciato dall'ufficiale di stato civile su presentazione del certificato medico di morte.",
      "Antrag auf die vom Standesbeamten nach Vorlage der ärztlichen Sterbebescheinigung erteilte Bestattungsgenehmigung.",
      "Заявление на разрешение на погребение, выдаваемое регистратором по предъявлении медицинского свидетельства о смерти."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة أو الباشوية محل الوفاة قبل مواكبة الجثمان إلى المقبرة.",
      "Service d'état civil de la commune ou pachalik du lieu de décès, avant la conduite du corps au cimetière.",
      "Civil registry of the commune or pashalik of the place of death, before the body is taken to the cemetery.",
      "Registro civil de la comuna o pachalik del lugar de defunción, antes del traslado al cementerio.",
      "Ufficio di stato civile del comune o pascialato del luogo di decesso, prima del trasporto al cimitero.",
      "Standesamt der Gemeinde oder Paschalik des Sterbeorts, vor der Überführung zum Friedhof.",
      "ЗАГС коммуны или пашалыка по месту смерти до перевозки тела на кладбище."
    ),
    keywords: ["إذن الدفن", "permis d'inhumer", "burial permit", "الدفن", "inhumation"],
  },
  {
    id: "req-transfert-corps-interieur",
    cat: "demandes",
    title: T7(
      "طلب الإذن بنقل الجثة داخل المملكة",
      "Demande d'autorisation de transport de corps à l'intérieur du Royaume",
      "Application to transport a body within the Kingdom",
      "Solicitud de autorización para el traslado del cadáver dentro del Reino",
      "Richiesta di autorizzazione al trasporto della salma nel Regno",
      "Antrag auf Genehmigung zur Überführung des Leichnams im Inland",
      "Заявление на разрешение перевозки тела внутри королевства"
    ),
    desc: D7(
      "طلب إذن نقل جثمان متوفى من جماعة إلى أخرى داخل المملكة يصدر عن السلطة الإدارية المحلية المختصة.",
      "Demande d'autorisation de transférer la dépouille d'une commune à une autre au Maroc, délivrée par l'autorité administrative locale.",
      "Application for authorisation to transfer remains from one commune to another in Morocco, issued by the local administrative authority.",
      "Solicitud de autorización para trasladar los restos de una comuna a otra en Marruecos, emitida por la autoridad administrativa local.",
      "Richiesta di autorizzazione a trasferire la salma da un comune all'altro in Marocco, rilasciata dall'autorità amministrativa locale.",
      "Antrag auf Genehmigung zur Überführung der sterblichen Überreste in eine andere Gemeinde, erteilt durch die örtliche Verwaltungsbehörde.",
      "Заявление на разрешение перевозки останков из одной коммуны в другую, выдаваемое местной административной властью."
    ),
    where: W7(
      "القيادة أو الباشوية التابع لها مكان الوفاة بعد الحصول على الإذن بالدفن والرأي الصحي.",
      "Caidat ou pachalik du lieu de décès, après obtention du permis d'inhumer et de l'avis sanitaire.",
      "Caidat or pashalik of the place of death, after obtaining the burial permit and health clearance.",
      "Caídato o pachalik del lugar de defunción, tras obtener el permiso de sepelio y el dictamen sanitario.",
      "Caìdat o pascialato del luogo di decesso, dopo l'ottenimento del permesso di sepoltura e del parere sanitario.",
      "Qaidat oder Paschalik des Sterbeorts nach Erhalt der Bestattungsgenehmigung und der sanitären Stellungnahme.",
      "Кайдат или пашалык по месту смерти после получения разрешения на погребение и санитарного заключения."
    ),
    keywords: ["نقل الجثة", "transport de corps", "body transport", "إذن", "السلطة المحلية"],
  },
  // ─── ANCFCC — conservation foncière et cadastre ───
  {
    id: "req-certificat-propriete",
    cat: "demandes",
    title: T7(
      "طلب شهادة الملكية (مستخرج من الرسم العقاري)",
      "Demande de certificat de propriété (extrait du titre foncier)",
      "Application for a certificate of ownership (land title extract)",
      "Solicitud de certificado de propiedad (extracto del título de propiedad)",
      "Richiesta di certificato di proprietà (estratto del titolo fondiario)",
      "Antrag auf eine Eigentumsbescheinigung (Auszug aus dem Grundbuchtitel)",
      "Заявление на свидетельство о праве собственности (выписка из поземельной книги)"
    ),
    desc: D7(
      "طلب موجز للحصول على شهادة الملكية أو مستخرج من الرسم العقاري المحفظ لدى الوكالة الوطنية للمحافظة العقارية.",
      "Demande d'un extrait d'immatriculation attestant la propriété d'un bien immobilier conservé à l'ANCFCC.",
      "Request for a registration extract evidencing ownership of an immovable held at the ANCFCC.",
      "Solicitud de un extracto de inscripción que acredite la propiedad de un inmueble en la ANCFCC.",
      "Richiesta di un estratto di intestazione che attesti la proprietà di un immobile presso l'ANCFCC.",
      "Antrag auf einen Grundbuchauszug, der das Eigentum an einer Immobilie bei der ANCFCC belegt.",
      "Заявление на выписку из поземельной книги, подтверждающую право собственности на объект в ANCFCC."
    ),
    where: W7(
      "المحافظة العقارية التابع لها العقار أو عبر بوابة الوكالة ancfcc.ma.",
      "Conservation foncière territorialement compétente ou via le portail ancfcc.ma.",
      "Competent territorial land registry conservation office, or via the ancfcc.ma portal.",
      "Conservación de la propiedad inmobiliaria competente o vía el portal ancfcc.ma.",
      "Conservatoria fondiaria territorialmente competente oppure via ancfcc.ma.",
      "Zuständige Grundbuchbehörde oder über das Portal ancfcc.ma.",
      "Территориальное агентство кадастра и недвижимости либо через портал ancfcc.ma."
    ),
    authority: "ancfcc",
    keywords: ["شهادة الملكية", "certificat de propriété", "land title", "الرسم العقاري", "ANCFCC", "titre foncier"],
    popular: true,
  },
  {
    id: "req-premiere-immatriculation",
    cat: "demandes",
    title: T7(
      "طلب التحفيظ العقاري (مطلب التحفيظ)",
      "Demande d'immatriculation foncière d'un terrain",
      "Application for first registration of a land parcel",
      "Solicitud de inscripción registral de un terreno",
      "Richiesta di prima intestazione fondiaria di un terreno",
      "Antrag auf Ersteintragung eines Grundstücks",
      "Заявление на первичную регистрацию земельного участка"
    ),
    desc: D7(
      "مطلب تحفيظ يقدمه المالك لتسجيل عقاره غير المحفظ بالسجل العقاري ومنحه رقما في الرسم العقاري.",
      "Requête d'immatriculation déposée par le propriétaire pour doter son bien non immatriculé d'un titre foncier.",
      "Registration request filed by an owner to give their unregistered property a land title.",
      "Solicitud de inscripción presentada por el propietario para dotar a su bien no inscrito de un título de propiedad.",
      "Domanda di intestazione depositata dal proprietario per dotare il bene non intestato di un titolo fondiario.",
      "Vom Eigentümer eingereichtes Eintragungsgesuch, um seinem nicht eingetragenen Grundstück einen Grundbuchtitel zu verschaffen.",
      "Ходатайство о регистрации, подаваемое собственником для получения титула собственности на незарегистрированный участок."
    ),
    where: W7(
      "المحافظة العقارية التابع لها موقع العقار مع تصميم التحديد ووثائق الملكية.",
      "Conservation foncière du ressort de situation de l'immeuble, avec plan de délimitation et titres de propriété.",
      "Land registry of the district where the property lies, with demarcation plan and ownership deeds.",
      "Conservación del distrito de situación del inmueble, con plano de delimitación y títulos de propiedad.",
      "Conservatoria del distetto di ubicazione dell'immobile, con piano di delimitazione e titoli di proprietà.",
      "Grundbuchamt des Bezirks der Grundstückslage, mit Grenzplan und Eigentumsnachweisen.",
      "Земельное агентство округа расположения объекта с планом межевания и правоустанавливающими документами."
    ),
    authority: "ancfcc",
    keywords: ["مطلب التحفيظ", "immatriculation", "first registration", "تحفيظ", "ANCFCC", "titre foncier"],
  },
  {
    id: "req-mutation-vente",
    cat: "demandes",
    title: T7(
      "طلب إشهار عقد بيع عقار محفظ",
      "Demande d'inscription d'une vente immobilière",
      "Application to register a property sale",
      "Solicitud de inscripción de una venta inmobiliaria",
      "Richiesta di trascrizione di una vendita immobiliare",
      "Antrag auf Eintragung eines Immobilienkaufs",
      "Заявление о регистрации продажи недвижимости"
    ),
    desc: D7(
      "طلب إشهار تداول ملكية عقار محفظ بعد البيع لدى المحافظة العقارية داخل الأجل القانوني المحدد.",
      "Demande d'inscription de la mutation d'un bien immatriculé à la conservation foncière dans le délai légal.",
      "Application to record the transfer of a registered property at the land registry within the legal period.",
      "Solicitud de inscripción de la transferencia de un bien registrado en la conservación dentro del plazo legal.",
      "Domanda di trascrizione del trasferimento di un bene intestato presso la conservatoria entro il termine legale.",
      "Antrag auf Eintragung der Eigentumsübertragung eines eingetragenen Grundstücks innerhalb der gesetzlichen Frist.",
      "Заявление о внесении перехода права на зарегистрированный объект в поземельную книгу в установленный срок."
    ),
    where: W7(
      "المحافظة العقارية محل تقييد الرسم مع العقد المثبت للبيع مرفقا بالوثائق المطلوبة.",
      "Conservation foncière du lieu d'inscription du titre, avec l'acte de vente et les pièces requises.",
      "Land registry where the title is registered, with the sale deed and required documents.",
      "Conservación del lugar de inscripción del título, con la escritura de venta y los documentos requeridos.",
      "Conservatoria del luogo di iscrizione del titolo, con l'atto di vendita e i documenti richiesti.",
      "Grundbuchamt des Eintragungsortes, mit Kaufurkunde und erforderlichen Unterlagen.",
      "Земельное агентство по месту регистрации титула с договором купли-продажи и необходимыми документами."
    ),
    authority: "ancfcc",
    keywords: ["إشهار", "mutation", "بيع عقار", "vente immobilière", "ANCFCC", "transfert"],
  },
  {
    id: "req-mutation-deces",
    cat: "demandes",
    title: T7(
      "طلب نقل ملكية عقار بالميراث",
      "Demande de mutation d'un bien immobilier par décès",
      "Application to transfer property title by inheritance",
      "Solicitud de transferencia de propiedad por defunción",
      "Richiesta di voltura di un immobile per successione",
      "Antrag auf Eigentumsübertragung im Erbfall",
      "Заявление о переоформлении недвижимости по наследству"
    ),
    desc: D7(
      "طلب تقييد انتقال ملكية العقار المحفظ لفائدة الورثة بعد وفاة المالك استنادا إلى حجة الإرث.",
      "Demande d'inscription du transfert du bien immatriculé au profit des héritiers, sur la base de l'acte d'héritiers.",
      "Application to record the transfer of the registered property to the heirs based on the heirs' deed.",
      "Solicitud de inscripción de la transferencia del bien registrado a los herederos según el acta de herederos.",
      "Richiesta di iscrizione del trasferimento del bene intestato a favore degli eredi, in base all'atto di eredi.",
      "Antrag auf Eintragung der Übertragung des eingetragenen Grundstücks an die Erben aufgrund des Erbenaktes.",
      "Заявление о внесении передачи зарегистрированного объекта наследникам на основании акта о наследниках."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع حجة حصر الإرث وشهادات الوفاة والولادة.",
      "Conservation foncière du lieu du titre, avec acte d'inventaire des héritiers et actes de décès et de naissance.",
      "Land registry of the title's location, with the heirs' inventory deed and death and birth certificates.",
      "Conservación del lugar del título, con el acta de herederos y los certificados de defunción y nacimiento.",
      "Conservatoria del luogo del titolo, con atto di eredi e certificati di morte e di nascita.",
      "Grundbuchamt am Titelort mit Erbenverzeichnis sowie Sterbe- und Geburtsurkunden.",
      "Земельное агентство по месту титула с актом о наследниках и свидетельствами о смерти и рождении."
    ),
    authority: "ancfcc",
    keywords: ["الميراث", "succession", "mutation", "ورثة", "héritiers", "الرسم العقاري"],
  },
  {
    id: "req-inscription-hypotheque",
    cat: "demandes",
    title: T7(
      "طلب تقييد رهن رسمي",
      "Demande d'inscription d'une hypothèque",
      "Application to register a mortgage",
      "Solicitud de inscripción de una hipoteca",
      "Richiesta di iscrizione di un'ipoteca",
      "Antrag auf Eintragung einer Hypothek",
      "Заявление о регистрации ипотеки"
    ),
    desc: D7(
      "طلب تقييد رهن رسمي على الرسم العقاري لفائدة الدائن قصد ضمان تسديد الدين في أجاله.",
      "Demande d'inscription d'une hypothèque sur le titre foncier au profit du créancier pour garantir la dette.",
      "Application to register a mortgage on the land title in the creditor's favour to secure the debt.",
      "Solicitud de inscripción de una hipoteca sobre el título de propiedad a favor del acreedor para garantizar la deuda.",
      "Richiesta di iscrizione di un'ipoteca sul titolo fondiario a favore del creditore per garantire il debito.",
      "Antrag auf Eintragung einer Hypothek im Grundbuch zugunsten des Gläubigers zur Sicherung der Schuld.",
      "Заявление о регистрации ипотеки в поземельной книге в пользу кредитора для обеспечения долга."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم العقاري مع عقد الرهن وعقد القرض المصادق عليه.",
      "Conservation foncière du lieu du titre, avec l'acte d'hypothèque et le contrat de prêt authentifié.",
      "Land registry of the title's location, with the mortgage deed and authenticated loan agreement.",
      "Conservación del lugar del título, con la escritura hipotecaria y el contrato de préstamo autenticado.",
      "Conservatoria del luogo del titolo, con l'atto ipotecario e il contratto di mutuo autenticato.",
      "Grundbuchamt am Titelort mit Hypothekenurkunde und beglaubigtem Darlehensvertrag.",
      "Земельное агентство по месту титула с ипотечным договором и удостоверенным кредитным договором."
    ),
    authority: "ancfcc",
    keywords: ["رهن رسمي", "hypothèque", "mortgage", "تقييد", "inscription", "ANCFCC"],
  },
  {
    id: "req-mainlevee-hypotheque",
    cat: "demandes",
    title: T7(
      "طلب التشطيب على الرهن الرسمي",
      "Demande de mainlevée d'hypothèque",
      "Application for discharge of a mortgage",
      "Solicitud de cancelación de hipoteca",
      "Richiesta di cancellazione di un'ipoteca",
      "Antrag auf Löschung einer Hypothek",
      "Заявление о снятии ипотеки"
    ),
    desc: D7(
      "طلب تشطيب الرهن الرسمي بعد الأداء النهائي للدين بناء على شهادة الدائن بالتخلي عن ضماناته.",
      "Demande de radiation de l'hypothèque après remboursement intégral, sur attestation du créancier.",
      "Application to cancel the mortgage after full repayment, based on the creditor's attestation.",
      "Solicitud de cancelación de la hipoteca tras el reembolso total, previa certificación del acreedor.",
      "Richiesta di cancellazione dell'ipoteca dopo l'integrale rimborso, su attestazione del creditore.",
      "Antrag auf Löschung der Hypothek nach vollständiger Rückzahlung aufgrund der Bescheinigung des Gläubigers.",
      "Заявление о погашении ипотеки после полного погашения долга на основании справки кредитора."
    ),
    where: W7(
      "المحافظة العقارية محل التقييد مع شهادة الأداء والتشطيب مسلمة من الدائن.",
      "Conservation foncière du lieu de l'inscription, avec l'attestation de remboursement délivrée par le créancier.",
      "Land registry of the registration's location, with the repayment attestation issued by the creditor.",
      "Conservación del lugar de la inscripción, con la certificación de reembolso emitida por el acreedor.",
      "Conservatoria del luogo dell'iscrizione, con l'attestazione di rimborso rilasciata dal creditore.",
      "Grundbuchamt am Eintragungsort mit der vom Gläubiger ausgestellten Rückzahlungsbescheinigung.",
      "Земельное агентство по месту регистрации со справкой кредитора о погашении долга."
    ),
    authority: "ancfcc",
    keywords: ["تشطيب الرهن", "mainlevée", "mortgage discharge", "رهن", "hypothèque"],
  },
  {
    id: "req-duplicata-titre-foncier",
    cat: "demandes",
    title: T7(
      "طلب نسخة ثانية من رسم عقاري مفقود",
      "Demande de duplicata d'un titre foncier perdu",
      "Application for a duplicate of a lost land title",
      "Solicitud de duplicado de un título de propiedad perdido",
      "Richiesta di duplicato di un titolo fondiario smarrito",
      "Antrag auf eine Zweitausfertigung eines verlorenen Grundbuchtitels",
      "Заявление на дубликат утерянного титула собственности"
    ),
    desc: D7(
      "طلب استخراج نسخة ثانية من رسم عقاري ضاع أو تلف بعد مسطرة الإعلان عن الضياع والتحقق اللازم.",
      "Demande de délivrance d'un second titre foncier après perte ou destruction, suivant la procédure de publicité.",
      "Application for a second land title after loss or destruction, following the publicity procedure.",
      "Solicitud de un segundo título de propiedad tras pérdida o destrucción, según el procedimiento de publicidad.",
      "Richiesta di un secondo titolo fondiario dopo smarrimento o distruzione, secondo la procedura di pubblicità.",
      "Antrag auf einen zweiten Grundbuchtitel nach Verlust oder Zerstörung gemäß dem Bekanntmachungsverfahren.",
      "Заявление на выдачу второго титула собственности после утери или уничтожения согласно процедуре публикации."
    ),
    where: W7(
      "المحافظة العقارية المسجل لديها الرسم مع تصريح بالفقدان ونشر إعلان بالجرائد.",
      "Conservation foncière où le titre est inscrit, avec déclaration de perte et publication dans la presse.",
      "Land registry where the title is recorded, with a loss declaration and press publication.",
      "Conservación donde está inscrito el título, con declaración de pérdida y publicación en prensa.",
      "Conservatoria dove è iscritto il titolo, con denuncia di smarrimento e pubblicazione sulla stampa.",
      "Grundbuchamt der Titeleintragung, mit Verlustanzeige und Zeitungsveröffentlichung.",
      "Земельное агентство, где зарегистрирован титул, с заявлением об утере и публикацией в прессе."
    ),
    authority: "ancfcc",
    keywords: ["نسخة ثانية", "duplicata", "duplicate title", "رسم عقاري", "titre foncier", "فقدان"],
  },
  {
    id: "req-certificat-negatif-propriete",
    cat: "demandes",
    title: T7(
      "طلب شهادة عدم التقييد العقاري",
      "Demande de certificat négatif de propriété",
      "Application for a negative certificate of ownership",
      "Solicitud de certificado negativo de propiedad",
      "Richiesta di certificato negativo di proprietà",
      "Antrag auf eine negative Eigentumsbescheinigung",
      "Заявление на справку об отсутствии зарегистрированного права"
    ),
    desc: D7(
      "طلب شهادة سلبية من المحافظة العقارية تثبت عدم وجود رسم عقاري مسجل باسم المعني بالأمر.",
      "Demande d'une attestation négative prouvant l'absence de titre foncier inscrit au nom du requérant.",
      "Request for a negative attestation proving that no land title is registered in the applicant's name.",
      "Solicitud de una constancia negativa que acredite la ausencia de título inscrito a nombre del solicitante.",
      "Richiesta di un'attestazione negativa comprovante l'assenza di titolo fondiario intestato al richiedente.",
      "Antrag auf eine negative Bescheinigung, die das Fehlen eines auf den Antragsteller eingetragenen Titels belegt.",
      "Заявление на справку об отсутствии поземельной книги, зарегистрированной на имя заявителя."
    ),
    where: W7(
      "المحافظة العقارية لمحل العقار المعني أو عبر الخدمات الرقمية للوكالة ancfcc.ma.",
      "Conservation foncière du lieu de l'immeuble ou via les services numériques ancfcc.ma.",
      "Land registry of the property's location or via the ANCFCC digital services at ancfcc.ma.",
      "Conservación del lugar del inmueble o vía los servicios digitales ancfcc.ma.",
      "Conservatoria del luogo dell'immobile o tramite i servizi digitali ancfcc.ma.",
      "Grundbuchamt am Ort des Grundstücks oder über die digitalen Dienste ancfcc.ma.",
      "Земельное агентство по месту объекта либо через цифровые сервисы ancfcc.ma."
    ),
    authority: "ancfcc",
    keywords: ["شهادة سلبية", "certificat négatif", "negative certificate", "عدم التقييد", "ANCFCC"],
  },
  {
    id: "req-bornage-contradictoire",
    cat: "demandes",
    title: T7(
      "طلب التحديد الإداري لتخوم عقار",
      "Demande de bornage contradictoire d'un terrain",
      "Application for a boundary demarcation survey",
      "Solicitud de deslinde de un terreno",
      "Richiesta di confinazione di un terreno",
      "Antrag auf eine Grenzvermessung",
      "Заявление о межевании границ участка"
    ),
    desc: D7(
      "طلب تحديد حدود العقار بين مالكين متجاورين بمشاركة مهندس طبوغرافي محلف والمحافظة العقارية.",
      "Demande de délimitation des limites entre propriétés voisines avec un géomètre assermenté et la conservation foncière.",
      "Application to demarcate boundaries between neighbouring properties with a sworn surveyor and the land registry.",
      "Solicitud de delimitación de linderos entre propiedades vecinas con un agrimensor jurado y la conservación.",
      "Richiesta di delimitazione dei confini tra proprietà vicine con un geometra giurato e la conservatoria.",
      "Antrag auf Grenzfestlegung zwischen Nachbargrundstücken mit einem vereidigten Vermesser und dem Grundbuchamt.",
      "Заявление об определении границ между смежными участками с участием присяжного землемера и земельного агентства."
    ),
    where: W7(
      "المحافظة العقارية التابع لها العقار بمشاركة المهندس الطبوغرافي المحلف والجيران المعنيين.",
      "Conservation foncière compétente, en présence du géomètre-topographe assermenté et des voisins concernés.",
      "Competent land registry, in the presence of the sworn surveyor and the concerned neighbours.",
      "Conservación competente, en presencia del agrimensor jurado y los vecinos interesados.",
      "Conservatoria competente, alla presenza del geometra giurato e dei vicini interessati.",
      "Zuständiges Grundbuchamt unter Anwesenheit des vereidigten Vermessers und der betroffenen Nachbarn.",
      "Компетентное земельное агентство в присутствии присяжного землемера и заинтересованных соседей."
    ),
    authority: "ancfcc",
    keywords: ["التخمين", "bornage", "boundary survey", "تحديد الحدود", "géomètre", "مسح"],
  },
  {
    id: "req-division-parcellaire",
    cat: "demandes",
    title: T7(
      "طلب تجزئة وتقسيم عقار محفظ",
      "Demande de division parcellaire d'un bien immatriculé",
      "Application to subdivide a registered property",
      "Solicitud de división parcelaria de un bien inscrito",
      "Richiesta di frazionamento di un immobile intestato",
      "Antrag auf Teilung eines eingetragenen Grundstücks",
      "Заявление о разделе зарегистрированного участка"
    ),
    desc: D7(
      "طلب تجزئة الرسم العقاري إلى رسوم جزئية بعد الحصول على الترخيص الإداري في التجزئة والتفصيل.",
      "Demande de division du titre foncier en titres partiels après obtention de l'autorisation de lotissement.",
      "Application to split the land title into partial titles after obtaining the subdivision permit.",
      "Solicitud de división del título de propiedad en títulos parciales tras obtener la autorización de parcelación.",
      "Richiesta di suddivisione del titolo fondiario in titoli parziali dopo l'ottenimento dell'autorizzazione al lottizzazione.",
      "Antrag auf Aufteilung des Grundbuchtitels in Teiltitle nach Erhalt der Parzellierungsgenehmigung.",
      "Заявление о разделе титула собственности на частные титулы после получения разрешения на разделение."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع قرار الترخيص بالتجزئة وتصميم التجزئة المصادق عليه.",
      "Conservation foncière du titre, avec l'arrêté d'autorisation de lotir et le plan de lotissement approuvé.",
      "Land registry of the title, with the subdivision permit order and the approved subdivision plan.",
      "Conservación del título, con la orden de autorización de parcelar y el plano de parcelación aprobado.",
      "Conservatoria del titolo, con il decreto di autorizzazione al lottizzare e il piano di lottizzazione approvato.",
      "Grundbuchamt des Titels, mit dem Parzellierungsgenehmigungsbeschluss und dem genehmigten Teilungsplan.",
      "Земельное агентство по титулу с постановлением о разрешении раздела и утверждённым планом разделения."
    ),
    authority: "ancfcc",
    keywords: ["تجزئة", "division parcellaire", "subdivision", "تفصيل", "lotissement", "ANCFCC"],
  },
  {
    id: "req-fusion-parcelles",
    cat: "demandes",
    title: T7(
      "طلب دمج رسوم عقارية متجاورة",
      "Demande de fusion de parcelles contiguës",
      "Application to merge adjoining land parcels",
      "Solicitud de fusión de parcelas colindantes",
      "Richiesta di fusione di particelle contigue",
      "Antrag auf Zusammenlegung angrenzender Parzellen",
      "Заявление об объединении смежных участков"
    ),
    desc: D7(
      "طلب دمج عدة رسوم عقارية متلاصقة في رسم واحد عندما تكون ملكية لنفس المالك دون حقوق للغير.",
      "Demande de réunion de plusieurs titres contigus en un seul, lorsque le même propriétaire les détient sans droits de tiers.",
      "Application to merge several adjoining titles into one when the same owner holds them free of third-party rights.",
      "Solicitud de unión de varios títulos contiguos en uno solo cuando el mismo propietario los detenta sin derechos de terceros.",
      "Richiesta di riunione di più titoli contigui in uno solo quando lo stesso proprietario li detiene senza diritti di terzi.",
      "Antrag auf Vereinigung mehrerer angrenzender Titel zu einem, wenn derselbe Eigentümer sie ohne Drittrechte hält.",
      "Заявление об объединении нескольких смежных титулов в один, когда они принадлежат одному собственнику без прав третьих лиц."
    ),
    where: W7(
      "المحافظة العقارية المسجلة لديها الرسوم مع الوثائق المثبتة لملكية العقارات المراد دمجها.",
      "Conservation foncière où les titres sont inscrits, avec les justificatifs de propriété des parcelles à fusionner.",
      "Land registry where the titles are recorded, with ownership evidence for the parcels to be merged.",
      "Conservación donde están inscritos los títulos, con los justificantes de propiedad de las parcelas a fusionar.",
      "Conservatoria dove sono iscritti i titoli, con le prove di proprietà delle particelle da fondere.",
      "Grundbuchamt der Titeleintragungen mit Eigentumsnachweisen der zusammenzulegenden Parzellen.",
      "Земельное агентство, где зарегистрированы титулы, с подтверждениями собственности на объединяемые участки."
    ),
    authority: "ancfcc",
    keywords: ["دمج", "fusion", "merger", "رسوم عقارية", "titres fonciers", "parcelles"],
  },
  {
    id: "req-inscription-donation",
    cat: "demandes",
    title: T7(
      "طلب تقييد عقد هبة عقارية",
      "Demande d'inscription d'un acte de donation",
      "Application to register a deed of gift",
      "Solicitud de inscripción de una escritura de donación",
      "Richiesta di trascrizione di un atto di donazione",
      "Antrag auf Eintragung einer Schenkungsurkunde",
      "Заявление о регистрации акта дарения"
    ),
    desc: D7(
      "طلب إشهار هبة عقار لفائدة الموهوب له وتقييد انتقال الملكية في الرسم العقاري المحفظ.",
      "Demande de publication de la donation et d'inscription du transfert de propriété sur le titre foncier.",
      "Application to publicise the gift and record the ownership transfer on the registered land title.",
      "Solicitud de publicidad de la donación e inscripción de la transferencia en el título de propiedad.",
      "Richiesta di pubblicazione della donazione e di iscrizione del trasferimento sul titolo fondiario.",
      "Antrag auf Bekanntmachung der Schenkung und Eintragung der Eigentumsübertragung im Grundbuchtitel.",
      "Заявление об огласке дарения и внесении перехода права собственности в поземельную книгу."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع عقد الهبة العدلي أو العدلي المصدق.",
      "Conservation foncière du lieu du titre, avec l'acte de donation adoulaire ou notarié authentifié.",
      "Land registry of the title's location, with the authenticated adoulaire or notarial deed of gift.",
      "Conservación del lugar del título, con la escritura de donación adoulaire o notarial autenticada.",
      "Conservatoria del luogo del titolo, con l'atto di donazione adoulaire o notarile autenticato.",
      "Grundbuchamt am Titelort mit der beglaubigten adoulischen oder notariellen Schenkungsurkunde.",
      "Земельное агентство по месту титула с удостоверенным актом дарения, составленным адулами или нотариусом."
    ),
    authority: "ancfcc",
    keywords: ["هبة", "donation", "gift", "تقييد", "inscription", "الرسم العقاري"],
  },
  {
    id: "req-opposition-immatriculation",
    cat: "demandes",
    title: T7(
      "طلب الاعتراض على مطلب التحفيظ",
      "Demande d'opposition à une requête d'immatriculation",
      "Application to lodge an opposition to a registration request",
      "Solicitud de oposición a una petición de inscripción",
      "Richiesta di opposizione a una domanda di intestazione",
      "Antrag auf Widerspruch gegen ein Eintragungsgesuch",
      "Возражение против ходатайства о регистрации"
    ),
    desc: D7(
      "اعتراض على مطلب التحفيظ يقدمه كل من يدعي حقا عينيا على العقار قصد حفظ حقه في الرسم العقاري.",
      "Opposition à une requête d'immatriculation formée par quiconque allègue un droit réel, pour préserver son droit au titre.",
      "Opposition to a registration request filed by anyone claiming a real right, to preserve their right on the title.",
      "Oposición a una solicitud de inscripción formulada por quien alegue un derecho real, para preservar su derecho.",
      "Opposizione a una domanda di intestazione proposta da chi vanti un diritto reale, per tutelare il proprio diritto.",
      "Widerspruch gegen ein Eintragungsgesuch, eingelegt von jedem, der ein dingliches Recht behauptet, zur Wahrung seines Rechts.",
      "Возражение против ходатайства о регистрации, подаваемое любым лицом, утверждающим вещное право, для его сохранения."
    ),
    where: W7(
      "المحافظة العقارية المسجل لديها مطلب التحفيظ داخل أجل صحة التحديد المنصوص عليه قانونا.",
      "Conservation foncière où la requête est déposée, dans le délai de validité de la délimitation prévu par la loi.",
      "Land registry where the request was filed, within the statutory validity period of the demarcation.",
      "Conservación donde se presentó la solicitud, dentro del plazo de validez de la delimitación previsto por ley.",
      "Conservatoria dove è depositata la domanda, entro il termine di validità della delimitazione previsto dalla legge.",
      "Grundbuchamt, bei dem das Gesuch liegt, innerhalb der gesetzlichen Geltungsdauer der Grenzfestlegung.",
      "Земельное агентство, куда подано ходатайство, в пределах предусмотренного законом срока действия межевания."
    ),
    authority: "ancfcc",
    keywords: ["اعتراض", "opposition", "opposition", "مطلب التحفيظ", "requête d'immatriculation", "حق عيني"],
  },
  {
    id: "req-radiation-inscription",
    cat: "demandes",
    title: T7(
      "طلب التشطيب على تقييد في الرسم العقاري",
      "Demande de radiation d'une inscription sur le titre foncier",
      "Application to cancel an entry on the land title",
      "Solicitud de cancelación de una inscripción en el título",
      "Richiesta di cancellazione di un'iscrizione sul titolo fondiario",
      "Antrag auf Löschung einer Eintragung im Grundbuchtitel",
      "Заявление о погашении записи в поземельной книге"
    ),
    desc: D7(
      "طلب تشطيب تقييد أصبح بلا أثر قانوني بعد تنازل صاحبه أو انقضاء الحق المقيد على العقار.",
      "Demande de radiation d'une inscription devenue sans effet après renonciation ou extinction du droit inscrit.",
      "Application to cancel an entry that has become ineffective after waiver or extinction of the registered right.",
      "Solicitud de cancelación de una inscripción sin efecto tras renuncia o extinción del derecho inscrito.",
      "Richiesta di cancellazione di un'iscrizione priva di effetto dopo rinuncia o estinzione del diritto iscritto.",
      "Antrag auf Löschung einer wirkungslos gewordenen Eintragung nach Verzicht oder Erlöschen des eingetragenen Rechts.",
      "Заявление о погашении записи, утратившей силу после отказа или прекращения зарегистрированного права."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع الوثائق المثبتة لزوال الحق أو التنازل عنه.",
      "Conservation foncière du lieu du titre, avec les pièces prouvant l'extinction ou la renonciation au droit.",
      "Land registry of the title's location, with documents proving extinction of or waiver of the right.",
      "Conservación del lugar del título, con los documentos que prueben la extinción o renuncia al derecho.",
      "Conservatoria del luogo del titolo, con i documenti comprovanti l'estinzione o la rinuncia al diritto.",
      "Grundbuchamt am Titelort mit Unterlagen über das Erlöschen oder den Verzicht auf das Recht.",
      "Земельное агентство по месту титула с документами о прекращении права или отказе от него."
    ),
    authority: "ancfcc",
    keywords: ["تشطيب", "radiation", "cancellation", "تقييد", "inscription", "الرسم العقاري"],
  },
  {
    id: "req-inscription-usufruit",
    cat: "demandes",
    title: T7(
      "طلب تقييد حق الانتفاع بعقار",
      "Demande d'inscription d'un droit d'usufruit",
      "Application to register a usufruct right",
      "Solicitud de inscripción de un derecho de usufructo",
      "Richiesta di iscrizione di un diritto di usufrutto",
      "Antrag auf Eintragung eines Nießbrauchrechts",
      "Заявление о регистрации права узуфрукта"
    ),
    desc: D7(
      "طلب تقييد حق الانتفاع على الرسم العقاري تحقيقا للتوثيق العيني وضمان حقوق المنتفع أمام الغير.",
      "Demande d'inscription de l'usufruit sur le titre foncier afin de le rendre opposable aux tiers.",
      "Application to register the usufruct on the land title to make it enforceable against third parties.",
      "Solicitud de inscripción del usufructo en el título para hacerlo oponible a terceros.",
      "Richiesta di iscrizione dell'usufrutto sul titolo fondiario per renderlo opponibile ai terzi.",
      "Antrag auf Eintragung des Nießbrauchs im Grundbuchtitel, um ihn Dritten gegenüber wirksam zu machen.",
      "Заявление о регистрации узуфрукта в поземельной книге для противопоставления третьим лицам."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع عقد تكوين حق الانتفاع المصدق عليه.",
      "Conservation foncière du lieu du titre, avec l'acte constitutif d'usufruit authentifié.",
      "Land registry of the title's location, with the authenticated constitutive deed of usufruct.",
      "Conservación del lugar del título, con la escritura constitutiva de usufructo autenticada.",
      "Conservatoria del luogo del titolo, con l'atto costitutivo di usufrutto autenticato.",
      "Grundbuchamt am Titelort mit der beglaubigten Nießbrauchbestellungsurkunde.",
      "Земельное агентство по месту титула с удостоверенным актом учреждения узуфрукта."
    ),
    authority: "ancfcc",
    keywords: ["حق الانتفاع", "usufruit", "usufruct", "تقييد", "ANCFCC", "immobilier"],
  },
  {
    id: "req-inscription-servitude",
    cat: "demandes",
    title: T7(
      "طلب تقييد حق ارتفاق",
      "Demande d'inscription d'une servitude",
      "Application to register a servitude",
      "Solicitud de inscripción de una servidumbre",
      "Richiesta di iscrizione di una servitù",
      "Antrag auf Eintragung einer Dienstbarkeit",
      "Заявление о регистрации сервитута"
    ),
    desc: D7(
      "طلب تقييد حق ارتفاق كحق المرور أو مجرى الماء على عقار الجار في الرسم العقاري المحفظ.",
      "Demande d'inscrire une servitude de passage ou d'aqueduc sur le fonds voisin au titre foncier.",
      "Application to register a right of way or water easement on the neighbouring land in the title.",
      "Solicitud de inscripción de una servidumbre de paso o de acueducto sobre la finca vecina en el título.",
      "Richiesta di iscrivere una servitù di passaggio o di acquedotto sul fondo vicino nel titolo fondiario.",
      "Antrag auf Eintragung einer Weg- oder Wasserleitungsdienstbarkeit auf das Nachbargrundstück im Titel.",
      "Заявление о внесении сервитута проезда или водовода на соседний участок в поземельную книгу."
    ),
    where: W7(
      "المحافظة العقارية محل الرسوم المعنية مع عقد الارتفاق أو الحكم المثبت له.",
      "Conservation foncière des titres concernés, avec l'acte ou le jugement établissant la servitude.",
      "Land registry of the concerned titles, with the deed or judgment establishing the servitude.",
      "Conservación de los títulos concernidos, con la escritura o sentencia que establezca la servidumbre.",
      "Conservatoria dei titoli interessati, con l'atto o la sentenza che stabilisce la servitù.",
      "Grundbuchamt der betroffenen Titel mit der Dienstbarkeitsurkunde oder dem sie begründenden Urteil.",
      "Земельное агентство по соответствующим титулам с актом или решением суда об установлении сервитута."
    ),
    authority: "ancfcc",
    keywords: ["ارتفاق", "servitude", "easement", "حق المرور", "droit de passage", "ANCFCC"],
  },
  {
    id: "req-changement-nom-titre",
    cat: "demandes",
    title: T7(
      "طلب تغيير اسم أو صفة المالك في الرسم العقاري",
      "Demande de changement du nom du propriétaire au titre foncier",
      "Application to change the owner's name on the land title",
      "Solicitud de cambio del nombre del propietario en el título",
      "Richiesta di modifica del nome del proprietario nel titolo fondiario",
      "Antrag auf Namensänderung des Eigentümers im Grundbuchtitel",
      "Заявление об изменении имени собственника в поземельной книге"
    ),
    desc: D7(
      "طلب تحيين اسم أو صفة المالك في الرسم العقاري بعد الزواج أو التصحيح القانوني للهوية.",
      "Demande de mise à jour du nom ou de la capacité du propriétaire au titre après mariage ou rectification légale.",
      "Application to update the owner's name or capacity on the title after marriage or legal rectification.",
      "Solicitud de actualización del nombre o capacidad del propietario en el título tras matrimonio o rectificación legal.",
      "Richiesta di aggiornamento del nome o della capacità del proprietario nel titolo dopo matrimonio o rettifica legale.",
      "Antrag auf Aktualisierung des Namens oder der Rechtsstellung des Eigentümers nach Heirat oder gesetzlicher Berichtigung.",
      "Заявление об обновлении имени или статуса собственника в титуле после брака или законного исправления."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع الوثائق الرسمية المثبتة للتغيير المطلوب.",
      "Conservation foncière du lieu du titre, avec les actes officiels justifiant le changement demandé.",
      "Land registry of the title's location, with official documents evidencing the requested change.",
      "Conservación del lugar del título, con los documentos oficiales que justifiquen el cambio solicitado.",
      "Conservatoria del luogo del titolo, con gli atti ufficiali giustificanti il cambiamento richiesto.",
      "Grundbuchamt am Titelort mit amtlichen Nachweisen der beantragten Änderung.",
      "Земельное агентство по месту титула с официальными документами, подтверждающими запрошенное изменение."
    ),
    authority: "ancfcc",
    keywords: ["تغيير الاسم", "changement de nom", "name change", "الرسم العقاري", "titre foncier"],
  },
  {
    id: "req-extrait-plan-cadastral",
    cat: "demandes",
    title: T7(
      "طلب نسخة من تصميم التحديد",
      "Demande d'extrait du plan cadastral",
      "Application for a cadastral plan extract",
      "Solicitud de extracto del plano catastral",
      "Richiesta di estratto del piano catastale",
      "Antrag auf einen Auszug aus dem Katasterplan",
      "Заявление на выкопировку из кадастрового плана"
    ),
    desc: D7(
      "طلب نسخة من تصميم تحديد أو التصميم التجزيئي للعقار من مصالح المسح العقاري والخرائطية.",
      "Demande d'une copie du plan de délimitation ou du plan de lotissement auprès des services du cadastre.",
      "Request for a copy of the demarcation or subdivision plan from the cadastral services.",
      "Solicitud de una copia del plano de delimitación o parcelación ante los servicios del catastro.",
      "Richiesta di una copia del piano di delimitazione o lottizzazione presso i servizi del catasto.",
      "Antrag auf eine Kopie des Grenz- oder Teilungsplans bei den Katasterdiensten.",
      "Заявление на копию плана межевания или разделения из кадастровых служб."
    ),
    where: W7(
      "مصلحة المسح العقاري التابعة للوكالة الوطنية بالمديرية الإقليمية المعنية.",
      "Service du cadastre de l'agence nationale auprès de la direction provinciale compétente.",
      "National agency's cadastral service at the competent provincial directorate.",
      "Servicio del catastro de la agencia nacional en la dirección provincial competente.",
      "Servizio catasto dell'agenzia nazionale presso la direzione provinciale competente.",
      "Katasterdienst der nationalen Agentur bei der zuständigen Provinzialdirektion.",
      "Кадастровая служба национального агентства при компетентной провинциальной дирекции."
    ),
    authority: "ancfcc",
    keywords: ["تصميم التحديد", "plan cadastral", "cadastral plan", "المسح العقاري", "cadastre", "ANCFCC"],
  },
  {
    id: "req-mise-a-jour-designation",
    cat: "demandes",
    title: T7(
      "طلب تحيين وصف العقار في الرسم العقاري",
      "Demande de mise à jour de la désignation du bien au titre foncier",
      "Application to update the property description on the land title",
      "Solicitud de actualización de la designación del inmueble en el título",
      "Richiesta di aggiornamento della designazione dell'immobile nel titolo",
      "Antrag auf Aktualisierung der Grundstücksbezeichnung im Titel",
      "Заявление об обновлении описания объекта в титуле"
    ),
    desc: D7(
      "طلب تحديث وصف العقار بعد إحداث بناء أو تغيير في طبيعته أو استغلاله داخل الرسم العقاري.",
      "Demande de mise à jour de la désignation de l'immeuble après construction ou changement d'affectation.",
      "Application to update the property's description after construction or change of use.",
      "Solicitud de actualización de la designación del inmueble tras construcción o cambio de uso.",
      "Richiesta di aggiornamento della designazione dell'immobile dopo costruzione o cambio di destinazione.",
      "Antrag auf Aktualisierung der Grundstücksbezeichnung nach Bebauung oder Nutzungsänderung.",
      "Заявление об обновлении описания объекта после строительства или изменения назначения."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع شهادة المطابقة أو الوثائق المثبتة للتحويل.",
      "Conservation foncière du lieu du titre, avec le certificat de conformité ou les justificatifs du changement.",
      "Land registry of the title's location, with the conformity certificate or evidence of the change.",
      "Conservación del lugar del título, con el certificado de conformidad o los justificantes del cambio.",
      "Conservatoria del luogo del titolo, con il certificato di conformità o i documenti del cambiamento.",
      "Grundbuchamt am Titelort mit Konformitätsbescheinigung oder Nachweisen der Änderung.",
      "Земельное агентство по месту титула со свидетельством о соответствии или документами об изменении."
    ),
    authority: "ancfcc",
    keywords: ["تحيين", "mise à jour", "update", "وصف العقار", "désignation", "titre foncier"],
  },
  {
    id: "req-bien-famille",
    cat: "demandes",
    title: T7(
      "طلب تسجيل الملك العائلي",
      "Demande d'inscription d'un bien de famille",
      "Application to register a family property",
      "Solicitud de inscripción de un bien de familia",
      "Richiesta di iscrizione di un bene di famiglia",
      "Antrag auf Eintragung eines Familiengutes",
      "Заявление о регистрации семейного имущества"
    ),
    desc: D7(
      "طلب تسجيل عقار كملك عائلي بناء على إشهاد الزوجين قصد حمايته من التصرفات الفردية.",
      "Demande d'inscription d'un immeuble en bien de famille sur déclaration des époux, pour le protéger des actes individuels.",
      "Application to register a property as family property upon the spouses' declaration, protecting it from unilateral acts.",
      "Solicitud de inscripción de un inmueble como bien de familia por declaración de los cónyuges.",
      "Richiesta di iscrizione di un immobile come bene di famiglia su dichiarazione dei coniugi.",
      "Antrag auf Eintragung eines Grundstücks als Familiengut auf Erklärung der Ehegatten zum Schutz vor einseitigen Verfügungen.",
      "Заявление о регистрации недвижимости как семейного имущества по заявлению супругов для защиты от односторонних сделок."
    ),
    where: W7(
      "المحافظة العقارية محل الرسم مع إشهاد بذلك لدى العدول أو الموثق مصادق عليه.",
      "Conservation foncière du lieu du titre, avec l'attestation adoulaire ou notariale dument légalisée.",
      "Land registry of the title's location, with the duly legalised adoulaire or notarial attestation.",
      "Conservación del lugar del título, con la certificación adoulaire o notarial debidamente legalizada.",
      "Conservatoria del luogo del titolo, con l'attestazione adoulaire o notarile debitamente legalizzata.",
      "Grundbuchamt am Titelort mit der ordnungsgemäß beglaubigten adoulischen oder notariellen Bescheinigung.",
      "Земельное агентство по месту титула с должным образом заверенным свидетельством адулов или нотариуса."
    ),
    authority: "ancfcc",
    keywords: ["الملك العائلي", "bien de famille", "family property", "الرسم العقاري", "titre foncier"],
  },
  {
    id: "req-concession-domaniale",
    cat: "demandes",
    title: T7(
      "طلب الانتفاع بأرض من أملاك الدولة الخاصة",
      "Demande de concession d'un terrain domanial",
      "Application for a concession of state-owned land",
      "Solicitud de concesión de un terreno estatal",
      "Richiesta di concessione di un terreno demaniale",
      "Antrag auf Konzession eines Staatsgrundstücks",
      "Заявление на концессию государственной земли"
    ),
    desc: D7(
      "طلب الاستفادة من رخصة انتفاع بأرض تابعة للأملاك الخاصة للدولة لأغراض فلاحية أو استثمارية.",
      "Demande d'autorisation d'exploiter une terre du domaine privé de l'État à des fins agricoles ou d'investissement.",
      "Application for authorisation to farm state private-domain land for agricultural or investment purposes.",
      "Solicitud de autorización para explotar tierras del dominio privado del Estado con fines agrícolas o de inversión.",
      "Richiesta di autorizzazione a coltivare terre del demanio privato dello Stato a fini agricoli o d'investimento.",
      "Antrag auf Genehmigung zur Bewirtschaftung von Land aus dem privaten Staatsvermögen für Landwirtschaft oder Investitionen.",
      "Заявление на разрешение пользоваться землями частного государственного домена в сельскохозяйственных или инвестиционных целях."
    ),
    where: W7(
      "مصلحة أملاك الدولة الخاصة بوزارة الاقتصاد والمالية مع إخبار المحافظة العقارية المعنية.",
      "Service du domaine privé de l'État au ministère de l'Économie et des Finances, avec information de la conservation foncière.",
      "State private-domain office at the Ministry of Economy and Finance, with notice to the land registry.",
      "Servicio del dominio privado del Estado en el Ministerio de Economía y Hacienda, con notificación a la conservación.",
      "Servizio del demanio privato dello Stato presso il Ministero dell'Economia e delle Finanze, con informativa alla conservatoria.",
      "Dienst für das private Staatsvermögen im Ministerium für Wirtschaft und Finanzen, mit Information des Grundbuchamts.",
      "Служба частного государственного домена при министерстве экономики и финансов с уведомлением земельного агентства."
    ),
    keywords: ["أملاك الدولة", "domaine de l'État", "state land", "انتفاع", "concession", "خالصة"],
  },
  // ─── Cartes et permis — véhicules et séjour ───
  {
    id: "req-duplicata-permis-perte",
    cat: "demandes",
    title: T7(
      "طلب نسخة ثانية من رخصة السياقة بعد الفقدان",
      "Demande de duplicata du permis de conduire après perte",
      "Application for a duplicate driving licence after loss",
      "Solicitud de duplicado del permiso de conducir tras pérdida",
      "Richiesta di duplicato della patente di guida dopo smarrimento",
      "Antrag auf einen Ersatzführerschein nach Verlust",
      "Заявление на дубликат водительского удостоверения после утери"
    ),
    desc: D7(
      "طلب استخراج نسخة ثانية من رخصة السياقة بعد فقدها أو تلفها مع التصريح بذلك لدى المصالح المختصة.",
      "Demande de délivrance d'un second permis de conduire après perte, vol ou détérioration de l'original.",
      "Application for a second driving licence after loss, theft or damage to the original.",
      "Solicitud de un segundo permiso de conducir tras pérdida, robo o deterioro del original.",
      "Richiesta di un secondo permesso di guida dopo smarrimento, furto o deterioramento dell'originale.",
      "Antrag auf einen zweiten Führerschein nach Verlust, Diebstahl oder Beschädigung des Originals.",
      "Заявление на выдачу второго водительского удостоверения после утери, кражи или повреждения оригинала."
    ),
    where: W7(
      "مراكز استصدار رخص السياقة التابعة لوزارة التجهيز والنقل بعد التصريح بالفقدان.",
      "Centres d'émission des permis relevant du ministère de l'Équipement et du Transport, après déclaration de perte.",
      "Licence-issuing centres under the Ministry of Equipment and Transport, after a loss declaration.",
      "Centros de emisión de permisos del Ministerio de Equipamiento y Transporte, previa declaración de pérdida.",
      "Centri di rilascio delle patenti del Ministero delle Attrezzature e dei Trasporti, dopo denuncia di smarrimento.",
      "Führerscheinstellen des Ministeriums für Ausrüstung und Verkehr nach Verlustanzeige.",
      "Центры выдачи удостоверений при министерстве оборудования и транспорта после заявления об утере."
    ),
    keywords: ["نسخة ثانية", "duplicata permis", "duplicate licence", "رخصة السياقة", "فقدان", "perte"],
    popular: true,
  },
  {
    id: "req-echange-permis-etranger",
    cat: "demandes",
    title: T7(
      "طلب تبديل رخصة السياقة الأجنبية",
      "Demande d'échange d'un permis de conduire étranger",
      "Application to exchange a foreign driving licence",
      "Solicitud de canje de un permiso de conducir extranjero",
      "Richiesta di conversione di una patente estera",
      "Antrag auf Umtausch eines ausländischen Führerscheins",
      "Заявление на обмен иностранного водительского удостоверения"
    ),
    desc: D7(
      "طلب تبديل رخصة سياقة أجنبية برخصة مغربية لفائدة الأجانب المقيمين بالمملكة بصورة اعتيادية.",
      "Demande d'échange d'un permis étranger contre un permis marocain pour les étrangers résidant habituellement au Maroc.",
      "Application to exchange a foreign licence for a Moroccan one for foreign nationals habitually residing in Morocco.",
      "Solicitud de canje de un permiso extranjero por uno marroquí para extranjeros residentes en Marruecos.",
      "Richiesta di conversione di una patente estera in una marocchina per gli stranieri residenti in Marocco.",
      "Antrag auf Umtausch eines ausländischen Führerscheins in einen marokkanischen für in Marokko ansässige Ausländer.",
      "Заявление на обмен иностранного удостоверения на марокканское для иностранцев, постоянно проживающих в Марокко."
    ),
    where: W7(
      "مراكز استصدار رخص السياقة مع ترجمة رسمية للرخصة ووثائق الإقامة.",
      "Centres d'émission des permis, avec traduction assermentée du permis et justificatifs de résidence.",
      "Licence-issuing centres, with a sworn translation of the licence and residence evidence.",
      "Centros de emisión de permisos, con traducción jurada del permiso y justificantes de residencia.",
      "Centri di rilascio delle patenti, con traduzione giurata della patente e prova di residenza.",
      "Führerscheinstellen mit beeidigter Übersetzung des Führerscheins und Nachweisen des Aufenthalts.",
      "Центры выдачи удостоверений с заверенным переводом удостоверения и документами о проживании."
    ),
    keywords: ["تبديل رخصة", "échange permis", "licence exchange", "رخصة أجنبية", "permis étranger"],
  },
  {
    id: "req-ajout-categorie-permis",
    cat: "demandes",
    title: T7(
      "طلب إضافة صنف جديد إلى رخصة السياقة",
      "Demande d'ajout d'une catégorie au permis de conduire",
      "Application to add a category to a driving licence",
      "Solicitud de adición de una categoría al permiso",
      "Richiesta di aggiunta di una categoria alla patente",
      "Antrag auf Hinzufügung einer Führerscheinklasse",
      "Заявление о добавлении категории к водительскому удостоверению"
    ),
    desc: D7(
      "طلب توسيع رخصة السياقة بإضافة صنف جديد بعد اجتياز التكوين النظري والعملي والامتحان الخاصين به.",
      "Demande d'extension du permis par ajout d'une catégorie après formation et examen correspondants.",
      "Application to extend the licence with an additional category after the related training and test.",
      "Solicitud de ampliación del permiso con una categoría adicional tras la formación y el examen correspondientes.",
      "Richiesta di estensione della patente con l'aggiunta di una categoria dopo la formazione e l'esame previsti.",
      "Antrag auf Erweiterung des Führerscheins um eine Klasse nach entsprechender Ausbildung und Prüfung.",
      "Заявление о расширении удостоверения добавлением категории после соответствующего обучения и экзамена."
    ),
    where: W7(
      "مركز استصدار رخص السياقة بعد اجتياز امتحان الصنف الجديد بمدرسة معتمدة.",
      "Centre d'émission des permis, après réussite de l'examen de la nouvelle catégorie dans une école agréée.",
      "Licence-issuing centre, after passing the new-category test at an approved school.",
      "Centro de emisión de permisos tras aprobar el examen de la nueva categoría en una escuela autorizada.",
      "Centro di rilascio delle patenti, dopo aver superato l'esame della nuova categoria in una scuola autorizzata.",
      "Führerscheinstelle nach bestandener Prüfung der neuen Klasse in einer zugelassenen Schule.",
      "Центр выдачи удостоверений после сдачи экзамена на новую категорию в аккредитованной школе."
    ),
    keywords: ["إضافة صنف", "catégorie permis", "licence category", "رخصة السياقة", "permis"],
  },
  {
    id: "req-renouvellement-permis",
    cat: "demandes",
    title: T7(
      "طلب تجديد رخصة السياقة منتهية الصلاحية",
      "Demande de renouvellement d'un permis de conduire expiré",
      "Application to renew an expired driving licence",
      "Solicitud de renovación de un permiso de conducir caducado",
      "Richiesta di rinnovo di una patente scaduta",
      "Antrag auf Verlängerung eines abgelaufenen Führerscheins",
      "Заявление о продлении истёкшего водительского удостоверения"
    ),
    desc: D7(
      "طلب تجديد رخصة السياقة التي انقضت مدة صلاحيتها مع تقديم الشهادة الطبية والصور المطلوبة.",
      "Demande de renouvellement du permis dont la validité a expiré, avec certificat médical et photos requis.",
      "Application to renew a licence whose validity has expired, with the required medical certificate and photos.",
      "Solicitud de renovación del permiso cuya validez ha expirado, con certificado médico y fotos requeridos.",
      "Richiesta di rinnovo della patente scaduta, con certificato medico e foto richieste.",
      "Antrag auf Verlängerung des abgelaufenen Führerscheins mit erforderlicher ärztlicher Bescheinigung und Fotos.",
      "Заявление о продлении удостоверения с истёкшим сроком действия с медицинской справкой и фотографиями."
    ),
    where: W7(
      "مركز استصدار رخص السياقة التابع له محل الإقامة مع الرخصة القديمة والشهادة الطبية.",
      "Centre d'émission des permis du lieu de résidence, avec l'ancien permis et le certificat médical.",
      "Licence-issuing centre of the place of residence, with the old licence and medical certificate.",
      "Centro de emisión de permisos del lugar de residencia, con el permiso antiguo y el certificado médico.",
      "Centro di rilascio delle patenti del luogo di residenza, con la vecchia patente e il certificato medico.",
      "Führerscheinstelle des Wohnorts mit altem Führerschein und ärztlicher Bescheinigung.",
      "Центр выдачи удостоверений по месту проживания со старым удостоверением и медицинской справкой."
    ),
    keywords: ["تجديد الرخصة", "renouvellement permis", "licence renewal", "انتهاء الصلاحية", "expiration"],
  },
  {
    id: "req-duplicata-carte-grise",
    cat: "demandes",
    title: T7(
      "طلب نسخة ثانية من البطاقة الرمادية بعد الفقدان أو السرقة",
      "Demande de duplicata de la carte grise après perte ou vol",
      "Application for a duplicate registration card after loss or theft",
      "Solicitud de duplicado de la tarjeta gris tras pérdida o robo",
      "Richiesta di duplicato della carta di circolazione dopo smarrimento o furto",
      "Antrag auf einen Ersatzfahrzeugschein nach Verlust oder Diebstahl",
      "Заявление на дубликат техпаспорта после утери или кражи"
    ),
    desc: D7(
      "طلب استخراج نسخة ثانية من البطاقة الرمادية بعد التصريح بالفقدان أو السرقة لدى الشرطة أو الدرك.",
      "Demande de second exemplaire de la carte grise après déclaration de perte ou de vol auprès de la police ou de la gendarmerie.",
      "Application for a second registration card after declaring the loss or theft to the police or gendarmerie.",
      "Solicitud de un segundo ejemplar de la tarjeta gris tras declarar la pérdida o el robo ante la policía o la gendarmería.",
      "Richiesta di un secondo esemplare della carta di circolazione dopo denuncia di smarrimento o furto alla polizia.",
      "Antrag auf ein zweites Exemplar des Fahrzeugscheins nach Verlust- oder Diebstahlanzeige bei Polizei oder Gendarmerie.",
      "Заявление на второй экземпляр техпаспорта после заявления об утере или краже в полицию или жандармерию."
    ),
    where: W7(
      "وكالة تسجيل المركبات أو المراكز المعتمدة بعد استيفاء التصريح بالفقدان.",
      "Agence d'immatriculation des véhicules ou centres agréés, après accomplishment de la déclaration de perte.",
      "Vehicle registration agency or approved centres, after completing the loss declaration.",
      "Agencia de matriculación de vehículos o centros autorizados, tras completar la declaración de pérdida.",
      "Agenzia di immatricolazione dei veicoli o centri autorizzati, dopo la denuncia di smarrimento.",
      "Fahrzeugzulassungsstelle oder zugelassene Zentren nach Abschluss der Verlustanzeige.",
      "Агентство регистрации транспортных средств или аккредитованные центры после оформления заявления об утере."
    ),
    keywords: ["نسخة ثانية", "duplicata carte grise", "duplicate registration", "البطاقة الرمادية", "vol"],
    popular: true,
  },
  {
    id: "req-immatriculation-vehicule-importe",
    cat: "demandes",
    title: T7(
      "طلب تسجيل مركبة مستوردة",
      "Demande d'immatriculation d'un véhicule importé",
      "Application to register an imported vehicle",
      "Solicitud de matriculación de un vehículo importado",
      "Richiesta di immatricolazione di un veicolo importato",
      "Antrag auf Zulassung eines importierten Fahrzeugs",
      "Заявление о постановке на учёт импортного автомобиля"
    ),
    desc: D7(
      "طلب تسجيل مركبة مستوردة بالمملكة بعد أداء الواجبات الجمركية والحصول على شهادة المطابقة وجوبا.",
      "Demande d'immatriculation au Maroc d'un véhicule importé, après paiement des droits de douane et obtention du certificat de conformité.",
      "Application to register an imported vehicle in Morocco, after paying customs duties and obtaining the certificate of conformity.",
      "Solicitud de matriculación en Marruecos de un vehículo importado, tras pagar los aranceles y obtener el certificado de conformidad.",
      "Richiesta di immatricolazione in Marocco di un veicolo importato, dopo il pagamento dei dazi e il rilascio del certificato di conformità.",
      "Antrag auf Zulassung eines importierten Fahrzeugs in Marokko nach Zollzahlung und Erhalt der Übereinstimmungsbescheinigung.",
      "Заявление о постановке на учёт импортного автомобиля в Марокко после уплаты пошлин и получения сертификата соответствия."
    ),
    where: W7(
      "وكالة تسجيل المركبات مع ملف التخليص الجمركي وشهادة المطابقة وفاتورة الشراء.",
      "Agence d'immatriculation des véhicules, avec dossier de dédouanement, certificat de conformité et facture d'achat.",
      "Vehicle registration agency, with customs clearance file, certificate of conformity and purchase invoice.",
      "Agencia de matriculación, con expediente de despacho aduanero, certificado de conformidad y factura de compra.",
      "Agenzia di immatricolazione, con pratica di sdoganamento, certificato di conformità e fattura d'acquisto.",
      "Zulassungsstelle mit Zollabfertigungsunterlagen, Übereinstimmungsbescheinigung und Kaufrechnung.",
      "Агентство регистрации с таможенными документами, сертификатом соответствия и счётом-фактурой покупки."
    ),
    keywords: ["مركبة مستوردة", "véhicule importé", "imported vehicle", "تسجيل", "immatriculation", "استيراد"],
  },
  {
    id: "req-transfert-vehicule-deces",
    cat: "demandes",
    title: T7(
      "طلب نقل ملكية مركبة بعد وفاة صاحبها",
      "Demande de transfert de propriété d'un véhicule après décès",
      "Application to transfer vehicle ownership after the owner's death",
      "Solicitud de transferencia de un vehículo tras el fallecimiento",
      "Richiesta di passaggio di proprietà di un veicolo dopo il decesso",
      "Antrag auf Eigentumsübertragung eines Fahrzeugs nach Tod des Halters",
      "Заявление о переоформлении автомобиля после смерти владельца"
    ),
    desc: D7(
      "طلب نقل ملكية مركبة لفائدة الورثة أو أحدهم استنادا إلى حجة الإرث والتنازل عن الحقوق بينهم.",
      "Demande de transfert du véhicule au profit des héritiers ou de l'un d'eux, sur la base de l'acte d'héritiers.",
      "Application to transfer the vehicle to the heirs or one of them, based on the heirs' deed.",
      "Solicitud de transferencia del vehículo a los herederos o a uno de ellos, según el acta de herederos.",
      "Richiesta di trasferimento del veicolo a favore degli eredi o di uno di essi, in base all'atto di eredi.",
      "Antrag auf Übertragung des Fahrzeugs an die Erben oder einen von ihnen aufgrund des Erbenaktes.",
      "Заявление о передаче автомобиля наследникам или одному из них на основании акта о наследниках."
    ),
    where: W7(
      "وكالة تسجيل المركبات مع حجة الإرث والبطاقة الرمادية وتوقيع باقي الورثة على التنازل.",
      "Agence d'immatriculation, avec acte d'héritiers, carte grise et renonciation signée des cohéritiers.",
      "Registration agency, with heirs' deed, registration card and co-heirs' signed waiver.",
      "Agencia de matriculación, con acta de herederos, tarjeta gris y renuncia firmada de los coherederos.",
      "Agenzia di immatricolazione, con atto di eredi, carta di circolazione e rinuncia firmata dei coerediti.",
      "Zulassungsstelle mit Erbenakt, Fahrzeugschein und unterschriebener Verzichtserklärung der Miterben.",
      "Агентство регистрации с актом о наследниках, техпаспортом и подписанным отказом сонаследников."
    ),
    keywords: ["نقل الملكية", "transfert véhicule", "vehicle transfer", "إرث", "héritage", "وفاة"],
  },
  {
    id: "req-retrait-circulation-vehicule",
    cat: "demandes",
    title: T7(
      "طلب الحذف النهائي لمركبة من السير",
      "Demande de retrait définitif de la circulation d'un véhicule",
      "Application for the definitive withdrawal of a vehicle from circulation",
      "Solicitud de baja definitiva de un vehículo",
      "Richiesta di radiazione definitiva di un veicolo",
      "Antrag auf endgültige Abmeldung eines Fahrzeugs",
      "Заявление о снятии автомобиля с учёта"
    ),
    desc: D7(
      "طلب حذف مركبة من الخدمة نهائيا بعد إتلافها أو تصديرها أو خروجها عن دائرة الاستعمال.",
      "Demande de radiation d'un véhicule après sa destruction, son exportation ou sa sortie d'usage.",
      "Application to strike a vehicle off after its destruction, export or withdrawal from use.",
      "Solicitud de baja de un vehículo tras su destrucción, exportación o retiro del uso.",
      "Richiesta di radiazione di un veicolo dopo la distruzione, l'esportazione o l'uscita dall'uso.",
      "Antrag auf Abmeldung eines Fahrzeugs nach Verschrottung, Export oder Nutzungsende.",
      "Заявление о снятии автомобиля с учёта после его утилизации, экспорта или вывода из эксплуатации."
    ),
    where: W7(
      "وكالة تسجيل المركبات مع إرجاع البطاقة الرمادية واللوحات أو شهادة الإتلاف.",
      "Agence d'immatriculation, avec restitution de la carte grise et des plaques ou attestation de destruction.",
      "Registration agency, with return of the registration card and plates or a destruction attestation.",
      "Agencia de matriculación, con devolución de la tarjeta gris y placas o constancia de destrucción.",
      "Agenzia di immatricolazione, con restituzione della carta di circolazione e delle targhe o attestazione di distruzione.",
      "Zulassungsstelle mit Rückgabe von Fahrzeugschein und Kennzeichen oder Verwertungsnachweis.",
      "Агентство регистрации с возвратом техпаспорта и номеров либо справкой об утилизации."
    ),
    keywords: ["الحذف من السير", "retrait de circulation", "deregistration", "بطاقة رمادية", "carte grise"],
  },
  {
    id: "req-plaque-ww",
    cat: "demandes",
    title: T7(
      "طلب لوحات التسجيل المؤقتة (WW)",
      "Demande de plaques d'immatriculation provisoires (WW)",
      "Application for temporary registration plates (WW)",
      "Solicitud de placas de matrícula provisionales (WW)",
      "Richiesta di targhe provvisorie (WW)",
      "Antrag auf vorübergehende Kennzeichen (WW)",
      "Заявление на временные номерные знаки (WW)"
    ),
    desc: D7(
      "طلب الحصول على لوحات مؤقتة WW للمركبات المستوردة المعروضة للبيع أو في طور التسجيل النهائي.",
      "Demande de plaques WW pour les véhicules importés en vente ou en cours d'immatriculation définitive.",
      "Application for WW plates for imported vehicles on sale or pending definitive registration.",
      "Solicitud de placas WW para vehículos importados en venta o pendientes de matriculación definitiva.",
      "Richiesta di targhe WW per veicoli importati in vendita o in attesa di immatricolazione definitiva.",
      "Antrag auf WW-Kennzeichen für importierte Fahrzeuge im Verkauf oder vor endgültiger Zulassung.",
      "Заявление на знаки WW для импортных автомобилей, выставленных на продажу или ожидающих окончательной регистрации."
    ),
    where: W7(
      "مصالح تسجيل المركبات التابعة لوزارة التجهيز والنقل واللوجستيك.",
      "Services d'immatriculation des véhicules relevant du ministère de l'Équipement et des Transports.",
      "Vehicle registration services under the Ministry of Equipment and Transport.",
      "Servicios de matriculación del Ministerio de Equipamiento y Transporte.",
      "Servizi di immatricolazione del Ministero delle Attrezzature e dei Trasporti.",
      "Zulassungsdienste des Ministeriums für Ausrüstung und Verkehr.",
      "Службы регистрации транспортных средств при министерстве оборудования и транспорта."
    ),
    keywords: ["لوحات WW", "plaques WW", "temporary plates", "تسجيل مؤقت", "immatriculation provisoire"],
  },
  {
    id: "req-carte-immatriculation-etranger",
    cat: "demandes",
    title: T7(
      "طلب بطاقة التسجيل للأجنبي المقيم",
      "Demande de carte d'immatriculation pour étranger résident",
      "Application for a residence card for a foreign national",
      "Solicitud de tarjeta de residencia para extranjero",
      "Richiesta di carta di soggiorno per cittadino straniero",
      "Antrag auf eine Registrierungskarte für ausländische Residenten",
      "Заявление на регистрационную карту для иностранца-резидента"
    ),
    desc: D7(
      "طلب بطاقة التسجيل الممنوحة للأجانب المسموح لهم بالإقامة بالمملكة بصورة اعتيادية لأول مرة.",
      "Demande de la carte d'immatriculation délivrée aux étrangers autorisés à résider habituellement au Maroc.",
      "Application for the registration card issued to foreigners authorised to reside habitually in Morocco.",
      "Solicitud de la tarjeta de residencia expedida a los extranjeros autorizados a residir en Marruecos.",
      "Richiesta della carta di soggiorno rilasciata agli stranieri autorizzati a risiedere in Marocco.",
      "Antrag auf die Registrierungskarte für Ausländer, die zur gewöhnlichen Wohnsitznahme in Marokko berechtigt sind.",
      "Заявление на регистрационную карту, выдаваемую иностранцам, разрешившим обычное проживание в Марокко."
    ),
    where: W7(
      "مصلحة الشؤون العامة بولاية أو عمالة محل السكنى مع عقد العمل أو ما يثبت الموارد.",
      "Service des affaires générales de la wilaya ou préfecture de résidence, avec contrat de travail ou preuve de ressources.",
      "General affairs service of the wilaya or prefecture of residence, with work contract or proof of resources.",
      "Servicio de asuntos generales de la wilaya o prefectura de residencia, con contrato de trabajo o prueba de recursos.",
      "Servizio affari generali della wilaya o prefettura di residenza, con contratto di lavoro o prova di risorse.",
      "Dienst für allgemeine Angelegenheiten der Wilaya oder Präfektur des Wohnsitzes mit Arbeitsvertrag oder Mittelnachweis.",
      "Служба общих дел вилаята или префектуры проживания с трудовым договором или подтверждением средств."
    ),
    authority: "interieur",
    keywords: ["بطاقة التسجيل", "carte d'immatriculation", "residence card", "أجانب", "étranger", "إقامة"],
  },
  {
    id: "req-renouvellement-carte-sejour",
    cat: "demandes",
    title: T7(
      "طلب تجديد بطاقة الإقامة",
      "Demande de renouvellement de la carte de séjour",
      "Application to renew a residence card",
      "Solicitud de renovación de la tarjeta de residencia",
      "Richiesta di rinnovo della carta di soggiorno",
      "Antrag auf Verlängerung der Aufenthaltskarte",
      "Заявление о продлении вида на жительство"
    ),
    desc: D7(
      "طلب تجديد بطاقة الإقامة قبل انتهاء صلاحيتها مع الوثائق المثبتة لاستمرار شروط الإقامة بالمملكة.",
      "Demande de renouvellement de la carte de séjour avant expiration, avec justificatifs du maintien des conditions.",
      "Application to renew the residence card before expiry, with evidence that conditions continue to be met.",
      "Solicitud de renovación de la tarjeta de residencia antes del vencimiento, con justificantes del mantenimiento de las condiciones.",
      "Richiesta di rinnovo della carta di soggiorno prima della scadenza, con documenti sul mantenimento dei requisiti.",
      "Antrag auf Verlängerung der Aufenthaltskarte vor Ablauf, mit Nachweisen über das Fortbestehen der Voraussetzungen.",
      "Заявление о продлении вида на жительство до истечения срока с документами о сохранении условий проживания."
    ),
    where: W7(
      "مصلحة الشؤون العامة بولاية أو عمالة محل الإقامة مع البطاقة القديمة ووثائق النشاط.",
      "Service des affaires générales de la wilaya ou préfecture de résidence, avec l'ancienne carte et les pièces d'activité.",
      "General affairs service of the wilaya or prefecture of residence, with the old card and activity documents.",
      "Servicio de asuntos generales de la wilaya o prefectura, con la tarjeta anterior y los documentos de actividad.",
      "Servizio affari generali della wilaya o prefettura, con la vecchia carta e i documenti di attività.",
      "Dienst für allgemeine Angelegenheiten der Wilaya oder Präfektur mit alter Karte und Tätigkeitsnachweisen.",
      "Служба общих дел вилаята или префектуры со старой картой и документами о деятельности."
    ),
    authority: "interieur",
    keywords: ["تجديد الإقامة", "renouvellement carte de séjour", "residence renewal", "أجانب", "séjour"],
  },
  {
    id: "req-carte-resident",
    cat: "demandes",
    title: T7(
      "طلب بطاقة المقيم",
      "Demande de carte de résident",
      "Application for a resident's card",
      "Solicitud de tarjeta de residente",
      "Richiesta di carta di residente",
      "Antrag auf eine Residentenkarte",
      "Заявление на карту резидента"
    ),
    desc: D7(
      "طلب الحصول على بطاقة المقيم طويلة الأمد الممنوحة للأجانب المستوفين لشروط الاستقرار بالمملكة.",
      "Demande de la carte de résident de longue durée accordée aux étrangers remplissant les conditions d'établissement au Maroc.",
      "Application for the long-term resident's card granted to foreigners meeting the conditions for settling in Morocco.",
      "Solicitud de la tarjeta de residente de larga duración concedida a extranjeros que cumplen las condiciones de establecimiento.",
      "Richiesta della carta di residente di lungo periodo concessa agli stranieri che soddisfano i requisiti di stabile residenza.",
      "Antrag auf die Daueraufenthaltskarte für Ausländer, die die Voraussetzungen für die Niederlassung erfüllen.",
      "Заявление на карту долгосрочного резидента для иностранцев, отвечающих условиям постоянного проживания."
    ),
    where: W7(
      "مصلحة الشؤون العامة بولاية أو عمالة محل الإقامة مع ملف الإثباتات المطلوبة قانونا.",
      "Service des affaires générales de la wilaya ou préfecture de résidence, avec le dossier de preuves exigé par la loi.",
      "General affairs service of the wilaya or prefecture of residence, with the legally required evidence file.",
      "Servicio de asuntos generales de la wilaya o prefectura, con el expediente de pruebas exigido por ley.",
      "Servizio affari generali della wilaya o prefettura, con il fascicolo di prove richiesto dalla legge.",
      "Dienst für allgemeine Angelegenheiten mit dem gesetzlich geforderten Nachweisdossier.",
      "Служба общих дел вилаята или префектуры с требуемым по закону комплектом подтверждений."
    ),
    authority: "interieur",
    keywords: ["بطاقة المقيم", "carte de résident", "resident card", "إقامة طويلة", "long séjour"],
  },
  {
    id: "req-carte-sejour-etudiant",
    cat: "demandes",
    title: T7(
      "طلب بطاقة إقامة لطالب أجنبي",
      "Demande de carte de séjour pour étudiant étranger",
      "Application for a residence card for a foreign student",
      "Solicitud de tarjeta de residencia para estudiante extranjero",
      "Richiesta di carta di soggiorno per studente straniero",
      "Antrag auf eine Aufenthaltskarte für ausländische Studierende",
      "Заявление на вид на жительство для иностранного студента"
    ),
    desc: D7(
      "طلب بطاقة إقامة سنوية للطالب الأجنبي المسجل بمؤسسة تعليمية عالية معترف بها داخل المملكة.",
      "Demande de carte de séjour annuelle pour l'étudiant étranger inscrit dans un établissement d'enseignement supérieur reconnu.",
      "Application for an annual residence card for a foreign student enrolled in a recognised higher-education institution.",
      "Solicitud de tarjeta de residencia anual para el estudiante extranjero inscrito en una institución reconocida.",
      "Richiesta di carta di soggiorno annuale per lo studente straniero iscritto a un istituto riconosciuto.",
      "Antrag auf eine jährliche Aufenthaltskarte für an einer anerkannten Hochschule eingeschriebene Studierende.",
      "Заявление на годовой вид на жительство для иностранного студента, зачисленного в признанное учебное заведение."
    ),
    where: W7(
      "مصلحة الشؤون العامة بولاية أو عمالة مقر الدراسة مع شهادة التسجيل وإثبات الموارد.",
      "Service des affaires générales de la wilaya du lieu d'études, avec certificat d'inscription et preuve de ressources.",
      "General affairs service of the wilaya of the place of study, with enrolment certificate and proof of resources.",
      "Servicio de asuntos generales de la wilaya del lugar de estudios, con certificado de matrícula y prueba de recursos.",
      "Servizio affari generali della wilaya del luogo di studio, con certificato di iscrizione e prova di risorse.",
      "Dienst für allgemeine Angelegenheiten der Wilaya des Studienorts mit Immatrikulationsbescheinigung und Mittelnachweis.",
      "Служба общих дел вилаята по месту учёбы со справкой о зачислении и подтверждением средств."
    ),
    authority: "interieur",
    keywords: ["طالب أجنبي", "étudiant étranger", "foreign student", "بطاقة إقامة", "carte de séjour"],
  },
  // ─── Consulat — services aux MRE ───
  {
    id: "req-passeport-urgence-consulat",
    cat: "demandes",
    title: T7(
      "طلب جواز سفر استعجالي من القنصلية",
      "Demande de passeport d'urgence au consulat",
      "Application for an emergency passport at the consulate",
      "Solicitud de pasaporte de emergencia en el consulado",
      "Richiesta di passaporto d'emergenza al consolato",
      "Antrag auf einen Notpass beim Konsulat",
      "Заявление на экстренный паспорт в консульстве"
    ),
    desc: D7(
      "طلب استخراج جواز سفر استعجالي من القنصلية للمغاربة المقيمن بالخارج في حالات الضرورة القصوى.",
      "Demande d'un passeport d'urgence délivré par le consulat aux Marocains résidant à l'étranger en cas d'extrême nécessité.",
      "Application for an emergency passport issued by the consulate to Moroccans residing abroad in cases of dire necessity.",
      "Solicitud de un pasaporte de emergencia emitido por el consulado a los marroquíes residentes en el extranjero.",
      "Richiesta di un passaporto d'emergenza rilasciato dal consolato ai marocchini residenti all'estero in casi di necessità.",
      "Antrag auf einen Notpass, den das Konsulat Marokkanern im Ausland in Fällen dringender Not erteilt.",
      "Заявление на экстренный паспорт, выдаваемый консульством марокканцам за рубежом в крайне необходимых случаях."
    ),
    where: W7(
      "القنصلية أو السفارة المغربية محل الإقامة أو عبر بوابة الخدمات القنصلية consulat.ma.",
      "Consulat ou ambassade du Maroc du lieu de résidence, ou via le portail consulaire consulat.ma.",
      "Moroccan consulate or embassy of the place of residence, or via the consular portal consulat.ma.",
      "Consulado o embajada de Marruecos del lugar de residencia, o vía el portal consular consulat.ma.",
      "Consolato o ambasciata del Marocco del luogo di residenza, o via il portale consolare consulat.ma.",
      "Marokkanisches Konsulat oder Botschaft des Wohnorts oder über das Konsularportal consulat.ma.",
      "Марокканское консульство или посольство по месту проживания либо через портал consulat.ma."
    ),
    authority: "consulat",
    keywords: ["جواز استعجالي", "passeport d'urgence", "emergency passport", "قنصلية", "consulat", "MRE"],
    popular: true,
  },
  {
    id: "req-acte-naissance-mre",
    cat: "demandes",
    title: T7(
      "طلب نسخة من رسم الولادة من القنصلية",
      "Demande d'acte de naissance auprès du consulat (MRE)",
      "Application for a birth certificate from the consulate (MRE)",
      "Solicitud de acta de nacimiento en el consulado (MRE)",
      "Richiesta di atto di nascita presso il consolato (MRE)",
      "Antrag auf eine Geburtsurkunde beim Konsulat (MRE)",
      "Заявление на свидетельство о рождении в консульстве (MRE)"
    ),
    desc: D7(
      "طلب نسخ من رسوم الحالة المدنية المحرزة بالقنصليات المغربية من طرف المغاربة المقيمن بالخارج.",
      "Demande de copies d'actes d'état civil détenus par les consulats marocains, formulée par les MRE.",
      "Application by MRE for copies of civil status records held by Moroccan consulates.",
      "Solicitud de copias de actas del registro civil custodiadas por los consulados marroquíes.",
      "Richiesta di copie di atti di stato civile detenuti dai consolati marocchini presentata dai MRE.",
      "Antrag von MRE auf Kopien der bei marokkanischen Konsulaten geführten Standesamtsregister.",
      "Заявление марокканцев за рубежом на копии актов, хранящихся в марокканских консульствах."
    ),
    where: W7(
      "القنصلية العامة المغربية لمحل الولادة أو عبر بوابة الخدمات القنصلية consulat.ma.",
      "Consulat général du Maroc du lieu de naissance ou via le portail consulat.ma.",
      "Moroccan consulate general of the place of birth or via the consulat.ma portal.",
      "Consulado general de Marruecos del lugar de nacimiento o vía consulat.ma.",
      "Consolato generale del Marocco del luogo di nascita o via consulat.ma.",
      "Marokkanisches Generalkonsulat des Geburtsorts oder über consulat.ma.",
      "Генеральное консульство Марокко по месту рождения либо через consulat.ma."
    ),
    authority: "consulat",
    keywords: ["رسم الولادة", "acte de naissance", "birth certificate", "MRE", "قنصلية", "consulat"],
  },
  {
    id: "req-declaration-naissance-consulat",
    cat: "demandes",
    title: T7(
      "بلاغ ولادة مولود بالخارج لدى القنصلية",
      "Déclaration de naissance à l'étranger au consulat",
      "Declaration of a birth abroad at the consulate",
      "Declaración de nacimiento en el extranjero ante el consulado",
      "Dichiarazione di nascita all'estero presso il consolato",
      "Anzeige einer Auslandsgeburt beim Konsulat",
      "Регистрация рождения за границей в консульстве"
    ),
    desc: D7(
      "تصريح بتسجيل مولود جديد لمغربي بالخارج بسجلات الحالة المدنية المغربية داخل الأجل القانوني.",
      "Déclaration visant à inscrire la naissance d'un enfant de Marocain à l'étranger aux registres marocains.",
      "Declaration to register the birth of a Moroccan's child abroad in the Moroccan registers.",
      "Declaración para inscribir el nacimiento del hijo de un marroquí en el extranjero en los registros marroquíes.",
      "Dichiarazione per iscrivere la nascita del figlio di un marocchino all'estero nei registri marocchini.",
      "Anzeige zur Eintragung der Geburt eines Kindes eines Marokkaners im Ausland in die marokkanischen Register.",
      "Заявление о регистрации рождения ребёнка марокканца за границей в марокканских реестрах."
    ),
    where: W7(
      "القنصلية المغربية بدولة الميلاد داخل الأجل القانوني مع شهادة الولادة الأجنبية.",
      "Consulat du Maroc du pays de naissance, dans le délai légal, avec l'acte de naissance étranger.",
      "Moroccan consulate of the birth country, within the legal period, with the foreign birth certificate.",
      "Consulado de Marruecos del país de nacimiento, en el plazo legal, con el certificado extranjero.",
      "Consolato del Marocco del paese di nascita, entro il termine legale, con l'atto di nascita estero.",
      "Marokkanisches Konsulat des Geburtslandes innerhalb der Frist mit ausländischer Geburtsurkunde.",
      "Марокканское консульство страны рождения в установленный срок с иностранным свидетельством о рождении."
    ),
    authority: "consulat",
    keywords: ["بلاغ ولادة", "déclaration de naissance", "birth declaration", "الخارج", "étranger", "قنصلية"],
  },
  {
    id: "req-transcription-mariage-etranger",
    cat: "demandes",
    title: T7(
      "طلب تضمين عقد زواج أبرم بالخارج",
      "Demande de transcription d'un mariage célébré à l'étranger",
      "Application to transcribe a marriage celebrated abroad",
      "Solicitud de transcripción de un matrimonio celebrado en el extranjero",
      "Richiesta di trascrizione di un matrimonio celebrato all'estero",
      "Antrag auf Beurkundung einer im Ausland geschlossenen Ehe",
      "Заявление о внесении записи о браке, заключённом за границей"
    ),
    desc: D7(
      "طلب تضمين عقد زواج مبرم أمام السلطات الأجنبية بسجلات الحالة المدنية المغربية لدى القنصلية.",
      "Demande d'inscription au registre marocain d'un mariage contracté devant les autorités étrangères.",
      "Application to enter in the Moroccan register a marriage contracted before foreign authorities.",
      "Solicitud de inscripción en el registro marroquí de un matrimonio contraído ante autoridades extranjeras.",
      "Richiesta di iscrizione nel registro marocchino di un matrimonio contratto davanti alle autorità estere.",
      "Antrag auf Eintragung einer vor ausländischen Behörden geschlossenen Ehe ins marokkanische Register.",
      "Заявление о внесении в марокканский реестр брака, заключённого перед иностранными властями."
    ),
    where: W7(
      "القنصلية المغربية بدولة إبرام الزواج مع ملف الوثائق المترجمة والمصدقة.",
      "Consulat du Maroc du pays de célébration, avec dossier de pièces traduites et légalisées.",
      "Moroccan consulate of the country of celebration, with a file of translated and legalised documents.",
      "Consulado de Marruecos del país de celebración, con expediente de documentos traducidos y legalizados.",
      "Consolato del Marocco del paese di celebrazione, con fascicolo di documenti tradotti e legalizzati.",
      "Marokkanisches Konsulat des Schließungslandes mit übersetzten und beglaubigten Unterlagen.",
      "Марокканское консульство страны заключения брака с комплектом переведённых и заверенных документов."
    ),
    authority: "consulat",
    keywords: ["تضمين الزواج", "transcription mariage", "marriage transcription", "الخارج", "étranger", "MRE"],
    popular: true,
  },
  {
    id: "req-transcription-divorce-consulat",
    cat: "demandes",
    title: T7(
      "طلب تضمين عقد طلاق حصل بالخارج",
      "Demande de transcription d'un divorce prononcé à l'étranger",
      "Application to transcribe a divorce pronounced abroad",
      "Solicitud de transcripción de un divorcio pronunciado en el extranjero",
      "Richiesta di trascrizione di un divorzio pronunciato all'estero",
      "Antrag auf Beurkundung einer im Ausland erfolgten Scheidung",
      "Заявление о внесении записи о разводе, состоявшемся за границей"
    ),
    desc: D7(
      "طلب تضمين وثيقة الطلاق الصادرة عن محكمة أجنبية بسجلات الحالة المدنية المغربية لدى القنصلية.",
      "Demande d'inscription du divorce prononcé par une juridiction étrangère aux registres marocains.",
      "Application to enter a divorce pronounced by a foreign court in the Moroccan registers.",
      "Solicitud de inscripción del divorcio pronunciado por un tribunal extranjero en los registros marroquíes.",
      "Richiesta di iscrizione del divorzio pronunciato da un tribunale straniero nei registri marocchini.",
      "Antrag auf Eintragung der von einem ausländischen Gericht ausgesprochenen Scheidung ins Register.",
      "Заявление о внесении развода, произведённого иностранным судом, в марокканские реестры."
    ),
    where: W7(
      "القنصلية المغربية بدولة الطلاق مع نسخة من الحكم الأجنبي مترجمة ومصدقة.",
      "Consulat du Maroc du pays du divorce, avec copie traduite et légalisée du jugement étranger.",
      "Moroccan consulate of the divorce country, with a translated and legalised copy of the foreign judgment.",
      "Consulado de Marruecos del país del divorcio, con copia traducida y legalizada de la sentencia.",
      "Consolato del Marocco del paese del divorzio, con copia tradotta e legalizzata della sentenza.",
      "Marokkanisches Konsulat des Scheidungslandes mit übersetzter und beglaubigter Kopie des Urteils.",
      "Марокканское консульство страны развода с переведённой и заверенной копией решения."
    ),
    authority: "consulat",
    keywords: ["تضمين الطلاق", "transcription divorce", "divorce transcription", "الخارج", "قنصلية"],
  },
  {
    id: "req-attestation-vie-pension",
    cat: "demandes",
    title: T7(
      "طلب شهادة الحياة لترقيم المعاش",
      "Demande de certificat de vie pour pension",
      "Application for a certificate of life for a pension",
      "Solicitud de certificado de vida para pensión",
      "Richiesta di certificato di vita per la pensione",
      "Antrag auf eine Lebensbescheinigung für die Rente",
      "Заявление на справку о жизни для пенсии"
    ),
    desc: D7(
      "طلب شهادة الحياة السنوية الموجهة للصناديق المغربية لتخويل المعاش لذوي الحقوق المقيمين بالخارج.",
      "Demande du certificat de vie annuel exigé des caisses marocaines pour la liquidation des pensions à l'étranger.",
      "Application for the annual certificate of life required by Moroccan funds for pensioners living abroad.",
      "Solicitud del certificado de vida anual exigido por las cajas marroquíes a pensionistas en el extranjero.",
      "Richiesta del certificato di vita annuale richiesto dagli enti marocchini ai pensionati all'estero.",
      "Antrag auf die jährliche Lebensbescheinigung, die marokkanische Kassen von Rentnern im Ausland verlangen.",
      "Заявление на ежегодную справку о жизни, требуемую марокканскими фондами от пенсионеров за рубежом."
    ),
    where: W7(
      "القنصلية المغربية أو أمام السلطات المحلية المختصة وفق بلد الإقامة.",
      "Consulat du Maroc ou devant les autorités locales compétentes selon le pays de résidence.",
      "Moroccan consulate or before the competent local authorities depending on the country of residence.",
      "Consulado de Marruecos o ante las autoridades locales competentes según el país de residencia.",
      "Consolato del Marocco o davanti alle autorità locali competenti secondo il paese di residenza.",
      "Marokkanisches Konsulat oder vor den zuständigen örtlichen Behörden je nach Wohnsitzland.",
      "Марокканское консульство либо перед компетентными местными властями в зависимости от страны проживания."
    ),
    authority: "consulat",
    keywords: ["شهادة الحياة", "certificat de vie", "life certificate", "معاش", "pension", "MRE"],
  },
  {
    id: "req-rapatriement-depouille",
    cat: "demandes",
    title: T7(
      "طلب نقل جثمان من الخارج إلى المغرب",
      "Demande de rapatriement de dépouille mortelle",
      "Application to repatriate human remains",
      "Solicitud de repatriación de restos mortales",
      "Richiesta di rimpatrio della salma",
      "Antrag auf Überführung sterblicher Überreste",
      "Заявление о репатриации останков"
    ),
    desc: D7(
      "طلب مسطرة نقل جثمان المتوفى بالخارج إلى أرض الوطن بتنسيق مع القنصلية والسلطات المحلية.",
      "Demande de procédure de transfert du défunt vers le Maroc, en coordination avec le consulat et les autorités locales.",
      "Application for the procedure to transfer the deceased to Morocco, coordinated with the consulate and local authorities.",
      "Solicitud del procedimiento de traslado del fallecido a Marruecos, en coordinación con el consulado y las autoridades locales.",
      "Richiesta della procedura di trasferimento del defunto in Marocco, in coordinazione con il consolato e le autorità locali.",
      "Antrag auf das Verfahren zur Überführung des Verstorbenen nach Marokko, abgestimmt mit Konsulat und Ortsbehörden.",
      "Заявление о процедуре перевозки умершего в Марокко в координации с консульством и местными властями."
    ),
    where: W7(
      "القنصلية المغربية بدولة الوفاة مع التصريح لدى السلطات المحلية وإذن الدفن بالمغرب.",
      "Consulat du Maroc du pays de décès, avec déclaration aux autorités locales et permis d'inhumer au Maroc.",
      "Moroccan consulate of the country of death, with declaration to local authorities and burial permit in Morocco.",
      "Consulado de Marruecos del país de defunción, con declaración a las autoridades locales y permiso de sepelio.",
      "Consolato del Marocco del paese di decesso, con dichiarazione alle autorità locali e permesso di sepoltura.",
      "Marokkanisches Konsulat des Todeslandes mit Anzeige bei den Ortsbehörden und Bestattungsgenehmigung.",
      "Марокканское консульство страны смерти с уведомлением местных властей и разрешением на погребение."
    ),
    authority: "consulat",
    keywords: ["نقل الجثمان", "rapatriement", "repatriation", "وفاة", "décès", "MRE"],
  },
  {
    id: "req-procuration-consulat",
    cat: "demandes",
    title: T7(
      "طلب إحداث وكالة لدى القنصلية",
      "Demande d'établissement d'une procuration au consulat",
      "Application to establish a power of attorney at the consulate",
      "Solicitud de otorgamiento de poder en el consulado",
      "Richiesta di rilascio di una procura al consolato",
      "Antrag auf Erteilung einer Vollmacht beim Konsulat",
      "Заявление об оформлении доверенности в консульстве"
    ),
    desc: D7(
      "طلب توثيق وكالة لدى القنصلية لتدبير قضايا المعني بالأمر بالمغرب بحضور الموكل شخصيا.",
      "Demande de rédaction d'une procuration au consulat pour gérer ses affaires au Maroc, en présence du mandant.",
      "Application to draw up a power of attorney at the consulate to manage one's affairs in Morocco, in the principal's presence.",
      "Solicitud de redacción de un poder en el consulado para gestionar asuntos en Marruecos, en presencia del poderdante.",
      "Richiesta di redazione di una procura al consolato per gestire i propri affari in Marocco, in presenza del mandante.",
      "Antrag auf Errichtung einer Vollmacht beim Konsulat zur Regelung der Angelegenheiten in Marokko in Anwesenheit des Vollmachtgebers.",
      "Заявление об оформлении доверенности в консульстве для ведения дел в Марокко в присутствии доверителя."
    ),
    where: W7(
      "القنصلية المغربية محل الإقامة بحضور المعني بالأمر حاملا جواز سفره أو بطاقته الوطنية.",
      "Consulat du Maroc du lieu de résidence, en présence de l'intéressé porteur de son passeport ou de sa CIN.",
      "Moroccan consulate of the place of residence, in the applicant's presence carrying a passport or national ID.",
      "Consulado de Marruecos del lugar de residencia, en presencia del interesado con pasaporte o DNI.",
      "Consolato del Marocco del luogo di residenza, alla presenza dell'interessato con passaporto o carta d'identità.",
      "Marokkanisches Konsulat des Wohnorts, in Anwesenheit des Betroffenen mit Reisepass oder Personalausweis.",
      "Марокканское консульство по месту проживания в присутствии заявителя с паспортом или удостоверением личности."
    ),
    authority: "consulat",
    keywords: ["وكالة", "procuration", "power of attorney", "قنصلية", "consulat", "MRE"],
  },
  {
    id: "req-legalisation-consulat",
    cat: "demandes",
    title: T7(
      "طلب تصديق وثائق لدى القنصلية",
      "Demande de légalisation de documents au consulat",
      "Application for document legalisation at the consulate",
      "Solicitud de legalización de documentos en el consulado",
      "Richiesta di legalizzazione di documenti al consolato",
      "Antrag auf Beglaubigung von Dokumenten beim Konsulat",
      "Заявление о заверении документов в консульстве"
    ),
    desc: D7(
      "طلب التصديق على الإمضاءات والوثائق المغربية والأجنبية قصد استعمالها بين المغرب والخارج.",
      "Demande de légalisation de signatures et de documents marocains ou étrangers pour usage entre le Maroc et l'étranger.",
      "Application to legalise signatures and Moroccan or foreign documents for use between Morocco and abroad.",
      "Solicitud de legalización de firmas y documentos marroquíes o extranjeros para uso entre Marruecos y el extranjero.",
      "Richiesta di legalizzazione di firme e documenti marocchini o stranieri per l'uso tra Marocco ed estero.",
      "Antrag auf Beglaubigung von Unterschriften und marokkanischen oder ausländischen Dokumenten.",
      "Заявление о заверении подписей и марокканских или иностранных документов для использования между Марокко и зарубежьем."
    ),
    where: W7(
      "القنصلية المغربية المختصة بعد التأكد من صحة الوثيقة والإمضاء المزين لها.",
      "Consulat du Maroc compétent, après vérification de l'authenticité du document et de la signature.",
      "Competent Moroccan consulate, after verifying the document's authenticity and signature.",
      "Consulado de Marruecos competente, previa verificación de la autenticidad del documento y la firma.",
      "Consolato del Marocco competente, dopo la verifica dell'autenticità del documento e della firma.",
      "Zuständiges marokkanisches Konsulat nach Prüfung der Echtheit des Dokuments und der Unterschrift.",
      "Компетентное марокканское консульство после проверки подлинности документа и подписи."
    ),
    authority: "consulat",
    keywords: ["تصديق", "légalisation", "legalisation", "وثائق", "documents", "قنصلية"],
  },
  {
    id: "req-visa-retour",
    cat: "demandes",
    title: T7(
      "طلب تأشيرة العودة",
      "Demande de visa de retour",
      "Application for a return visa",
      "Solicitud de visado de retorno",
      "Richiesta di visto di ritorno",
      "Antrag auf ein Rückreisevisum",
      "Заявление на визу на возвращение"
    ),
    desc: D7(
      "طلب تأشيرة العودة الممنوحة للمغاربة بالخارج عند ضياع وثائق السفر أو انتهاء صلاحيتها.",
      "Demande du visa de retour accordé aux Marocains à l'étranger en cas de perte ou d'expiration des titres de voyage.",
      "Application for the return visa granted to Moroccans abroad when travel documents are lost or expired.",
      "Solicitud del visado de retorno concedido a los marroquíes en el extranjero por pérdida o caducidad de los títulos de viaje.",
      "Richiesta del visto di ritorno concesso ai marocchini all'estero in caso di smarrimento o scadenza dei titoli di viaggio.",
      "Antrag auf das Rückreisevisum für Marokkaner im Ausland bei Verlust oder Ablauf der Reisedokumente.",
      "Заявление на визу на возвращение для марокканцев за рубежом при утере или истечении срока проездных документов."
    ),
    where: W7(
      "القنصلية المغربية بدولة الإقامة مع الإدلاء بما يثبت الهوية المغربية للمعني بالأمر.",
      "Consulat du Maroc du pays de résidence, avec preuve de la nationalité marocaine du demandeur.",
      "Moroccan consulate of the country of residence, with proof of the applicant's Moroccan nationality.",
      "Consulado de Marruecos del país de residencia, con prueba de la nacionalidad marroquí del solicitante.",
      "Consolato del Marocco del paese di residenza, con prova della nazionalità marocchina del richiedente.",
      "Marokkanisches Konsulat des Wohnsitzlandes mit Nachweis der marokkanischen Staatsangehörigkeit.",
      "Марокканское консульство страны проживания с подтверждением марокканского гражданства заявителя."
    ),
    authority: "consulat",
    keywords: ["تأشيرة العودة", "visa de retour", "return visa", "وثائق السفر", "MRE"],
  },
  {
    id: "req-autorisation-sortie-mineur-mre",
    cat: "demandes",
    title: T7(
      "طلب إذن خروج قاصر من القنصلية",
      "Demande d'autorisation de sortie du territoire pour un mineur",
      "Application for a minor's exit authorisation at the consulate",
      "Solicitud de autorización de salida del territorio para un menor",
      "Richiesta di autorizzazione di uscita dal territorio per un minore",
      "Antrag auf Ausreisegenehmigung für einen Minderjährigen",
      "Заявление на разрешение выезда несовершеннолетнего в консульстве"
    ),
    desc: D7(
      "طلب إذن سفر قاصر مغربي يقيم بالخارج يقدم من طرف أبويه لدى القنصلية المختصة بالمنطقة.",
      "Demande d'autorisation de voyage d'un mineur marocain résidant à l'étranger, présentée par ses parents au consulat.",
      "Application for travel authorisation for a Moroccan minor residing abroad, filed by the parents at the consulate.",
      "Solicitud de autorización de viaje de un menor marroquí residente en el extranjero, presentada por los padres al consulado.",
      "Richiesta di autorizzazione al viaggio di un minore marocchino residente all'estero, presentata dai genitori al consolato.",
      "Antrag auf Reiseerlaubnis für einen im Ausland lebenden marokkanischen Minderjährigen, von den Eltern beim Konsulat gestellt.",
      "Заявление на разрешение на выезд марокканского несовершеннолетнего, проживающего за рубежом, подаваемое родителями в консульство."
    ),
    where: W7(
      "القنصلية المغربية لمحل إقامة القاصر مع حضور الأبوين أو بتوقيعهما على النموذج.",
      "Consulat du Maroc du lieu de résidence du mineur, avec présence ou signature des deux parents.",
      "Moroccan consulate of the minor's place of residence, with both parents present or signing.",
      "Consulado de Marruecos del lugar de residencia del menor, con presencia o firma de ambos padres.",
      "Consolato del Marocco del luogo di residenza del minore, con presenza o firma di entrambi i genitori.",
      "Marokkanisches Konsulat des Wohnorts des Minderjährigen, mit Anwesenheit oder Unterschrift beider Elternteile.",
      "Марокканское консульство по месту проживания несовершеннолетнего с присутствием или подписью обоих родителей."
    ),
    authority: "consulat",
    keywords: ["إذن سفر قاصر", "autorisation de sortie", "exit permit", "minor", "قاصر", "قنصلية"],
  },
  {
    id: "req-aide-mre-difficulte",
    cat: "demandes",
    title: T7(
      "طلب المساعدة الاجتماعية للمغاربة المقيمين بالخارج",
      "Demande d'assistance sociale pour Marocains résidant à l'étranger",
      "Application for social assistance for Moroccans residing abroad",
      "Solicitud de asistencia social para marroquíes residentes en el extranjero",
      "Richiesta di assistenza sociale per marocchini residenti all'estero",
      "Antrag auf Sozialhilfe für im Ausland lebende Marokkaner",
      "Заявление на социальную помощь для марокканцев, проживающих за рубежом"
    ),
    desc: D7(
      "طلب الاستفادة من المساعدة الاجتماعية الموجهة للمغاربة بالخارج في وضعيات صعبة عبر اللجنة المختصة.",
      "Demande de l'assistance sociale destinée aux MRE en situation difficile, instruite par la commission compétente.",
      "Application for the social assistance earmarked for MRE in difficult situations, processed by the competent committee.",
      "Solicitud de la asistencia social destinada a los MRE en situación difícil, tramitada por la comisión competente.",
      "Richiesta dell'assistenza sociale destinata ai MRE in situazioni difficili, esaminata dalla commissione competente.",
      "Antrag auf die für notleidende MRE bestimmte Sozialhilfe, bearbeitet durch die zuständige Kommission.",
      "Заявление на социальную помощь для марокканцев за рубежом в трудном положении, рассматриваемую компетентной комиссией."
    ),
    where: W7(
      "القنصلية المغربية أو منصة الجالية التابعة لوزارة الشؤون الخارجية.",
      "Consulat du Maroc ou plateforme de la diaspora relevant du ministère des Affaires étrangères.",
      "Moroccan consulate or the diaspora platform of the Ministry of Foreign Affairs.",
      "Consulado de Marruecos o plataforma de la diáspora del Ministerio de Asuntos Exteriores.",
      "Consolato del Marocco o piattaforma della diaspora del Ministero degli Esteri.",
      "Marokkanisches Konsulat oder Diaspora-Plattform des Außenministeriums.",
      "Марокканское консульство либо платформа диаспоры министерства иностранных дел."
    ),
    authority: "consulat",
    keywords: ["مساعدة اجتماعية", "assistance sociale", "social assistance", "MRE", "الجالية", "diaspora"],
  },
  {
    id: "req-visa-entree-maroc",
    cat: "demandes",
    title: T7(
      "طلب تأشيرة الدخول إلى المغرب",
      "Demande de visa d'entrée au Maroc",
      "Application for an entry visa to Morocco",
      "Solicitud de visado de entrada a Marruecos",
      "Richiesta di visto d'ingresso in Marocco",
      "Antrag auf ein Einreisevisum für Marokko",
      "Заявление на въездную визу в Марокко"
    ),
    desc: D7(
      "طلب تأشيرة الدخول للمغرب يقدمه الأجانب الراغبون في زيارة المملكة للسياحة أو الشغل أو الزيارة.",
      "Demande de visa d'entrée au Maroc formée par les étrangers souhaitant visiter le Royaume pour tourisme ou travail.",
      "Application for an entry visa to Morocco filed by foreigners wishing to visit the Kingdom for tourism or work.",
      "Solicitud de visado de entrada a Marruecos presentada por extranjeros que desean visitar el Reino.",
      "Richiesta di visto d'ingresso in Marocco presentata da stranieri che desiderano visitare il Regno.",
      "Antrag auf ein Einreisevisum für Marokko, gestellt von Ausländern, die das Königreich besuchen möchten.",
      "Заявление на въездную визу в Марокко для иностранцев, желающих посетить королевство."
    ),
    where: W7(
      "السفارة أو القنصلية المغربية بدولة إقامة الطالب مع ملف الحجز والوثائق المثبتة للغرض.",
      "Ambassade ou consulat du Maroc du pays de résidence, avec réservation et justificatifs de l'objet du séjour.",
      "Moroccan embassy or consulate of the applicant's country of residence, with booking and purpose evidence.",
      "Embajada o consulado de Marruecos del país de residencia, con reserva y justificantes del motivo del viaje.",
      "Ambasciata o consolato del Marocco del paese di residenza, con prenotazione e prova dello scopo del soggiorno.",
      "Marokkanische Botschaft oder Konsulat des Wohnsitzlandes mit Buchung und Nachweisen des Reisezwecks.",
      "Посольство или консульство Марокко в стране проживания заявителя с бронированием и подтверждением цели."
    ),
    authority: "consulat",
    keywords: ["تأشيرة", "visa", "entry visa", "الدخول للمغرب", "أجانب", "étrangers"],
  },
  // ─── Professions réglementées et commerce ───
  {
    id: "req-autorisation-commerce-ambulant",
    cat: "demandes",
    title: T7(
      "طلب رخصة التجارة المتنقلة",
      "Demande d'autorisation de commerce ambulant",
      "Application for a street trading permit",
      "Solicitud de autorización de comercio ambulante",
      "Richiesta di autorizzazione al commercio ambulante",
      "Antrag auf eine Genehmigung für ambulanten Handel",
      "Заявление на разрешение уличной торговли"
    ),
    desc: D7(
      "طلب رخصة التجوال بالبضائع أو ممارسة التجارة المتنقلة داخل الدائرة الترابية للجماعة.",
      "Demande d'autorisation de vendre en nomade ou d'exercer le commerce ambulant dans le ressort de la commune.",
      "Application for authorisation to hawk goods or practise street trading within the commune's jurisdiction.",
      "Solicitud de autorización para venta ambulante dentro de la demarcación de la comuna.",
      "Richiesta di autorizzazione alla vendita ambulante nel territorio del comune.",
      "Antrag auf Genehmigung des Hausierhandels im Gebiet der Gemeinde.",
      "Заявление на разрешение разносной торговли в пределах коммуны."
    ),
    where: W7(
      "مصلحة الرخص والتراخيص بالجماعة محل ممارسة النشاط مع البطاقة الوطنية والصور.",
      "Service des licences de la commune d'exercice, avec pièce d'identité et photos.",
      "Licensing service of the commune of activity, with ID card and photos.",
      "Servicio de licencias de la comuna de ejercicio, con documento de identidad y fotos.",
      "Servizio licenze del comune di esercizio, con documento d'identità e foto.",
      "Genehmigungsdienst der Ausübungsgemeinde mit Ausweis und Fotos.",
      "Служба разрешений коммуны осуществления деятельности с удостоверением личности и фотографиями."
    ),
    keywords: ["تجارة متنقلة", "commerce ambulant", "street trading", "رخصة", "licence", "الجماعة"],
  },
  {
    id: "req-licence-taxi",
    cat: "demandes",
    title: T7(
      "طلب رخصة سيارة أجرة",
      "Demande de licence de taxi",
      "Application for a taxi licence",
      "Solicitud de licencia de taxi",
      "Richiesta di licenza taxi",
      "Antrag auf eine Taxikonzession",
      "Заявление на лицензию такси"
    ),
    desc: D7(
      "طلب الحصول على رخصة نقل المسافرين بسيارات الأجرة من الصنفين الأول والثاني.",
      "Demande d'obtention d'une licence de transport de voyageurs par taxi de première ou deuxième catégorie.",
      "Application for a passenger transport licence for first- or second-category taxis.",
      "Solicitud de una licencia de transporte de pasajeros en taxi de primera o segunda categoría.",
      "Richiesta di licenza per il trasporto passeggeri con taxi di prima o seconda categoria.",
      "Antrag auf eine Personenbeförderungslizenz für Taxis der ersten oder zweiten Kategorie.",
      "Заявление на лицензию перевозки пассажиров такси первой или второй категории."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل أو الشباك الوحيد المعني بتراخيص النقل.",
      "Direction provinciale de l'Équipement et du Transport ou guichet unique des licences de transport.",
      "Provincial Directorate of Equipment and Transport or the transport licence one-stop shop.",
      "Dirección provincial de Equipamiento y Transporte o ventanilla única de licencias.",
      "Direzione provinciale delle Attrezzature e dei Trasporti o sportello unico delle licenze.",
      "Provinzialdirektion für Ausrüstung und Verkehr oder Einheitsschalter für Verkehrslizenzen.",
      "Провинциальная дирекция оборудования и транспорта либо единое окно транспортных лицензий."
    ),
    keywords: ["سيارة أجرة", "taxi", "licence", "نقل المسافرين", "transport de voyageurs"],
  },
  {
    id: "req-autorisation-transport-marchandises",
    cat: "demandes",
    title: T7(
      "طلب ترخيص النقل الطرقي للبضائع",
      "Demande d'autorisation de transport de marchandises",
      "Application for a goods transport authorisation",
      "Solicitud de autorización de transporte de mercancías",
      "Richiesta di autorizzazione al trasporto merci",
      "Antrag auf eine Genehmigung für Gütertransporte",
      "Заявление на разрешение автомобильных грузоперевозок"
    ),
    desc: D7(
      "طلب ترخيص النقل الطرقي للبضائع لفائدة الغير بمركبات نفعية مسجلة ومطابقة للشروط.",
      "Demande de licence de transport routier de marchandises pour autrui avec véhicules utilitaires conformes.",
      "Application for a road haulage licence for third parties with compliant commercial vehicles.",
      "Solicitud de licencia de transporte por carretera de mercancías para terceros con vehículos conformes.",
      "Richiesta di licenza di trasporto merci su strada per conto terzi con veicoli conformi.",
      "Antrag auf eine Genehmigung für den Güternahverkehr für Dritte mit konformen Nutzfahrzeugen.",
      "Заявление на лицензию автомобильных грузоперевозок для третьих лиц с соответствующими грузовиками."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل واللوجستيك مع ملف المركبة والشروط المهنية.",
      "Direction provinciale de l'Équipement, du Transport et de la Logistique, avec dossier véhicule et capacité professionnelle.",
      "Provincial Directorate of Equipment, Transport and Logistics, with vehicle file and professional capacity.",
      "Dirección provincial de Equipamiento, Transporte y Logística, con expediente del vehículo y capacidad profesional.",
      "Direzione provinciale delle Attrezzature, dei Trasporti e della Logistica, con fascicolo veicolo e capacità professionale.",
      "Provinzialdirektion für Ausrüstung, Verkehr und Logistik mit Fahrzeugunterlagen und Befähigungsnachweis.",
      "Провинциальная дирекция оборудования, транспорта и логистики с документами на машину и профпригодностью."
    ),
    keywords: ["نقل البضائع", "transport de marchandises", "goods transport", "ترخيص", "autorisation"],
  },
  {
    id: "req-autorisation-transport-touristique",
    cat: "demandes",
    title: T7(
      "طلب رخصة النقل السياحي",
      "Demande d'autorisation de transport touristique",
      "Application for a tourist transport licence",
      "Solicitud de licencia de transporte turístico",
      "Richiesta di licenza di trasporto turistico",
      "Antrag auf eine Genehmigung für touristischen Transport",
      "Заявление на лицензию туристических перевозок"
    ),
    desc: D7(
      "طلب ترخيص استغلال مركبات للنقل السياحي باكراء مع سائق لفائدة الزوار والسياح.",
      "Demande de licence d'exploitation de véhicules de transport touristique avec chauffeur pour la clientèle.",
      "Application for a licence to operate tourist transport vehicles with driver for clients.",
      "Solicitud de licencia para explotar vehículos de transporte turístico con conductor para clientes.",
      "Richiesta di licenza per gestire veicoli di trasporto turistico con autista per la clientela.",
      "Antrag auf eine Lizenz für touristische Beförderungsfahrzeuge mit Fahrer für Kunden.",
      "Заявление на лицензию эксплуатации туристических транспортных средств с водителем для клиентов."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل بالتنسيق مع المصالح الجهوية للسياحة.",
      "Direction provinciale de l'Équipement et du Transport, en coordination avec les services régionaux du tourisme.",
      "Provincial Directorate of Equipment and Transport, coordinated with the regional tourism services.",
      "Dirección provincial de Equipamiento y Transporte, en coordinación con los servicios regionales de turismo.",
      "Direzione provinciale delle Attrezzature e dei Trasporti, in coordinamento con i servizi regionali del turismo.",
      "Provinzialdirektion für Ausrüstung und Verkehr in Abstimmung mit den regionalen Tourismusdiensten.",
      "Провинциальная дирекция оборудования и транспорта в координации с региональными службами туризма."
    ),
    keywords: ["النقل السياحي", "transport touristique", "tourist transport", "سياحة", "tourisme"],
  },
  {
    id: "req-autorisation-transport-scolaire",
    cat: "demandes",
    title: T7(
      "طلب ترخيص نقل التلاميذ",
      "Demande d'autorisation de transport scolaire",
      "Application for a school transport authorisation",
      "Solicitud de autorización de transporte escolar",
      "Richiesta di autorizzazione al trasporto scolastico",
      "Antrag auf eine Genehmigung für Schülertransporte",
      "Заявление на разрешение школьных перевозок"
    ),
    desc: D7(
      "طلب ترخيص نقل التلاميذ بين منازلهم ومؤسسات التعليم بمركبات مطابقة لمعايير السلامة.",
      "Demande d'autorisation de transport d'élèves entre domicile et établissements avec véhicules aux normes.",
      "Application for authorisation to carry pupils between home and schools with safety-compliant vehicles.",
      "Solicitud de autorización de transporte de alumnos entre el domicilio y los centros con vehículos conformes.",
      "Richiesta di autorizzazione al trasporto di alunni tra casa e scuola con veicoli a norma.",
      "Antrag auf Genehmigung der Schülerbeförderung zwischen Wohnort und Schule mit normgerechten Fahrzeugen.",
      "Заявление на разрешение перевозки учеников между домом и школой на соответствующих нормам машинах."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل بعد التحقق من مطابقة المركبة والسائق.",
      "Direction provinciale de l'Équipement et du Transport, après vérification du véhicule et du chauffeur.",
      "Provincial Directorate of Equipment and Transport, after checking the vehicle and driver.",
      "Dirección provincial de Equipamiento y Transporte, tras verificar el vehículo y el conductor.",
      "Direzione provinciale delle Attrezzature e dei Trasporti, dopo verifica del veicolo e dell'autista.",
      "Provinzialdirektion für Ausrüstung und Verkehr nach Prüfung von Fahrzeug und Fahrer.",
      "Провинциальная дирекция оборудования и транспорта после проверки машины и водителя."
    ),
    keywords: ["نقل التلاميذ", "transport scolaire", "school transport", "مؤسسات تعليمية", "élèves"],
  },
  {
    id: "req-autorisation-transport-pelerins",
    cat: "demandes",
    title: T7(
      "طلب ترخيص نقل الحجاج والمعتمرين",
      "Demande d'autorisation de transport des pèlerins",
      "Application for a pilgrim transport authorisation",
      "Solicitud de autorización de transporte de peregrinos",
      "Richiesta di autorizzazione al trasporto di pellegrini",
      "Antrag auf eine Genehmigung für Pilgertransporte",
      "Заявление на разрешение перевозок паломников"
    ),
    desc: D7(
      "طلب ترخيص خاص لنقل الحجاج والمعتمرين بتنسيق بين وزارتي النقل والأوقاف والشؤون الإسلامية.",
      "Demande d'autorisation spéciale de transport des pèlerins, en coordination avec les ministères du transport et des habous.",
      "Application for a special authorisation to transport pilgrims, coordinated with the transport and habous ministries.",
      "Solicitud de autorización especial de transporte de peregrinos, coordinada con los ministerios de transporte y habices.",
      "Richiesta di autorizzazione speciale al trasporto dei pellegrini, in coordinamento con i ministeri dei trasporti e degli habous.",
      "Antrag auf eine Sondergenehmigung für Pilgerbeförderung in Abstimmung mit den Ministerien für Verkehr und Stiftungen.",
      "Заявление на специальное разрешение перевозки паломников в координации с министерствами транспорта и вакфов."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل مع شهادة التسجيل في اللائحة المخصصة للنقل الديني.",
      "Direction provinciale de l'Équipement et du Transport, avec inscription sur la liste du transport religieux.",
      "Provincial Directorate of Equipment and Transport, with registration on the religious transport list.",
      "Dirección provincial de Equipamiento y Transporte, con inscripción en la lista del transporte religioso.",
      "Direzione provinciale delle Attrezzature e dei Trasporti, con iscrizione nell'elenco del trasporto religioso.",
      "Provinzialdirektion für Ausrüstung und Verkehr mit Eintragung in die Liste des religiösen Verkehrs.",
      "Провинциальная дирекция оборудования и транспорта с внесением в список религиозных перевозок."
    ),
    keywords: ["الحجاج", "pèlerins", "pilgrims", "عمرة", "omra", "نقل"],
  },
  {
    id: "req-carte-artisan",
    cat: "demandes",
    title: T7(
      "طلب بطاقة الصانع التقليدي",
      "Demande de carte d'artisan",
      "Application for an artisan card",
      "Solicitud de tarjeta de artesano",
      "Richiesta di tessera di artigiano",
      "Antrag auf einen Handwerkerausweis",
      "Заявление на карту ремесленника"
    ),
    desc: D7(
      "طلب الحصول على بطاقة الصانع التقليدي للانخراط في التعاونيات والاستفادة من برامج الدعم.",
      "Demande de la carte d'artisan permettant l'adhésion aux coopératives et l'accès aux programmes d'appui.",
      "Application for the artisan card enabling membership of cooperatives and access to support programmes.",
      "Solicitud de la tarjeta de artesano que permite adherirse a cooperativas y acceder a programas de apoyo.",
      "Richiesta della tessera di artigiano che consente l'adesione alle cooperative e l'accesso ai programmi di sostegno.",
      "Antrag auf den Handwerkerausweis, der die Mitgliedschaft in Genossenschaften und den Zugang zu Förderprogrammen ermöglicht.",
      "Заявление на карту ремесленника для членства в кооперативах и доступа к программам поддержки."
    ),
    where: W7(
      "المديرية الإقليمية للصناعة التقليدية أو الغرفة الجهوية للصناعة التقليدية.",
      "Direction provinciale de l'artisanat ou chambre régionale de l'artisanat.",
      "Provincial handicraft directorate or regional chamber of handicrafts.",
      "Dirección provincial de artesanía o cámara regional de artesanía.",
      "Direzione provincionale dell'artigianato o camera regionale dell'artigianato.",
      "Provinzialdirektion für Handwerk oder regionale Handwerkskammer.",
      "Провинциальная дирекция ремёсел или региональная палата ремёсел."
    ),
    keywords: ["صانع تقليدي", "artisan", "artisan card", "صناعة تقليدية", "artisanat"],
  },
  {
    id: "req-agrement-guide-touristique",
    cat: "demandes",
    title: T7(
      "طلب رخصة المرشد السياحي",
      "Demande d'agrément de guide touristique",
      "Application for a tourist guide licence",
      "Solicitud de licencia de guía turístico",
      "Richiesta di abilitazione a guida turistica",
      "Antrag auf eine Zulassung als Reiseführer",
      "Заявление на лицензию экскурсовода"
    ),
    desc: D7(
      "طلب الحصول على رخصة مرشد سياحي بعد استيفاء شروط التكوين والشهادات المطلوبة قانونا.",
      "Demande d'obtention de la licence de guide touristique après satisfaction des conditions de formation.",
      "Application for the tourist guide licence after meeting the statutory training requirements.",
      "Solicitud de la licencia de guía turístico tras cumplir los requisitos de formación.",
      "Richiesta della licenza di guida turistica dopo il soddisfacimento dei requisiti di formazione.",
      "Antrag auf die Reiseführerlizenz nach Erfüllung der gesetzlichen Ausbildungsanforderungen.",
      "Заявление на лицензию экскурсовода после выполнения установленных законом требований к подготовке."
    ),
    where: W7(
      "وزارة السياحة أو مصالحها الجهوية بعد اجتياز الاختبارات والتكوين المقرر.",
      "Ministère du Tourisme ou ses services régionaux, après réussite des épreuves et de la formation requise.",
      "Ministry of Tourism or its regional services, after passing the required tests and training.",
      "Ministerio de Turismo o sus servicios regionales, tras superar las pruebas y la formación exigidas.",
      "Ministero del Turismo o i suoi servizi regionali, dopo il superamento delle prove e della formazione.",
      "Tourismusministerium oder dessen regionale Dienste nach bestandenen Prüfungen und Ausbildung.",
      "Министерство туризма или его региональные службы после сдачи экзаменов и обучения."
    ),
    keywords: ["مرشد سياحي", "guide touristique", "tourist guide", "سياحة", "tourisme", "رخصة"],
  },
  {
    id: "req-classement-etablissement-touristique",
    cat: "demandes",
    title: T7(
      "طلب تصنيف مؤسسة سياحية",
      "Demande de classement d'un établissement touristique",
      "Application for a tourist establishment classification",
      "Solicitud de clasificación de un establecimiento turístico",
      "Richiesta di classificazione di una struttura turistica",
      "Antrag auf Einstufung eines Tourismusbetriebs",
      "Заявление о присвоении категории туристическому объекту"
    ),
    desc: D7(
      "طلب تصنيف فندق أو دار ضيافة في خانة معينة بعد معاينة مطابقتها للمعايير المقررة.",
      "Demande de classement d'un hôtel ou maison d'hôtes en catégorie déterminée après contrôle de conformité.",
      "Application to classify a hotel or guesthouse in a given category after a conformity inspection.",
      "Solicitud de clasificación de un hotel o casa de huéspedes tras la inspección de conformidad.",
      "Richiesta di classificazione di un hotel o maison d'hôtes dopo il controllo di conformità.",
      "Antrag auf Einstufung eines Hotels oder Gästehauses nach Konformitätsprüfung.",
      "Заявление о присвоении отелю или гостевому дому категории после проверки соответствия."
    ),
    where: W7(
      "الجهة الجهوية للسياحة أو وزارة السياحة بعد زيارة لجنة المعاينة والتصنيف.",
      "Conseil régional du tourisme ou ministère du Tourisme, après visite de la commission de classement.",
      "Regional tourism council or Ministry of Tourism, after the classification committee's visit.",
      "Consejo regional de turismo o Ministerio de Turismo, tras la visita de la comisión de clasificación.",
      "Consiglio regionale del turismo o Ministero del Turismo, dopo la visita della commissione di classificazione.",
      "Regionaler Tourismusrat oder Tourismusministerium nach Begehung der Klassifizierungskommission.",
      "Региональный совет по туризму или министерство туризма после визита классификационной комиссии."
    ),
    keywords: ["تصنيف", "classement", "classification", "فندق", "hôtel", "دار ضيافة"],
  },
  {
    id: "req-autorisation-vente-tabac",
    cat: "demandes",
    title: T7(
      "طلب رخصة بيع التبغ",
      "Demande d'autorisation de vente de tabac",
      "Application for a tobacco retail licence",
      "Solicitud de autorización de venta de tabaco",
      "Richiesta di autorizzazione alla vendita di tabacchi",
      "Antrag auf eine Tabakverkaufsgenehmigung",
      "Заявление на лицензию продажи табака"
    ),
    desc: D7(
      "طلب الترخيص بمزاولة بيع التبغ بالتقسيط بعد موافقة السلطات والجهات المعنية بتنظيم القطاع.",
      "Demande d'autorisation de vente de tabac au détail, après accord des autorités gestionnaires du secteur.",
      "Application for retail tobacco sales authorisation after approval by the sector's managing authorities.",
      "Solicitud de autorización de venta de tabaco al por menor, previo acuerdo de las autoridades del sector.",
      "Richiesta di autorizzazione alla vendita di tabacchi al dettaglio, previo accordo delle autorità del settore.",
      "Antrag auf Genehmigung des Tabakeinzelverkaufs nach Zustimmung der für den Sektor zuständigen Behörden.",
      "Заявление на разрешение розничной продажи табака после одобрения управомоченных органов отрасли."
    ),
    where: W7(
      "الجماعة والسلطة الإدارية المحلية بالتنسيق مع مصالح التبغ المختصة.",
      "Commune et autorité administrative locale, en coordination avec les services des tabacs compétents.",
      "Commune and local administrative authority, coordinated with the competent tobacco services.",
      "Comuna y autoridad administrativa local, en coordinación con los servicios de tabacos competentes.",
      "Comune e autorità amministrativa locale, in coordinamento con i servizi competenti dei tabacchi.",
      "Gemeinde und örtliche Verwaltungsbehörde in Abstimmung mit den zuständigen Tabakdiensten.",
      "Коммуна и местная административная власть в координации с компетентными табачными службами."
    ),
    keywords: ["التبغ", "tabac", "tobacco", "رخصة بيع", "licence de vente"],
  },
  {
    id: "req-autorisation-vente-gaz",
    cat: "demandes",
    title: T7(
      "طلب ترخيص بيع وتوزيع قنينات الغاز",
      "Demande d'autorisation de vente de gaz butane",
      "Application for a butane gas retail licence",
      "Solicitud de autorización de venta de gas butano",
      "Richiesta di autorizzazione alla vendita di gas butano",
      "Antrag auf eine Genehmigung für Butangasverkauf",
      "Заявление на разрешение продажи газовых баллонов"
    ),
    desc: D7(
      "طلب ترخيص لبيع وتخزين قنينات الغاز في ظروف مطابقة لشروط السلامة والوقاية المعمول بها.",
      "Demande d'autorisation de vente et de stockage de bouteilles de gaz conformément aux normes de sécurité.",
      "Application for authorisation to sell and store gas cylinders in line with safety standards.",
      "Solicitud de autorización de venta y almacenamiento de bombonas de gas conforme a las normas de seguridad.",
      "Richiesta di autorizzazione alla vendita e stoccaggio di bombole di gas secondo le norme di sicurezza.",
      "Antrag auf Genehmigung des Verkaufs und der Lagerung von Gasflaschen gemäß den Sicherheitsnormen.",
      "Заявление на разрешение продажи и хранения газовых баллонов в соответствии с нормами безопасности."
    ),
    where: W7(
      "السلطة الإدارية المحلية بعد الرأي التقني للمصالح المكلفة بالسلامة الصناعية.",
      "Autorité administrative locale, après avis technique des services chargés de la sécurité industrielle.",
      "Local administrative authority, after technical opinion from the industrial safety services.",
      "Autoridad administrativa local, previo dictamen técnico de los servicios de seguridad industrial.",
      "Autorità amministrativa locale, previo parere tecnico dei servizi di sicurezza industriale.",
      "Örtliche Verwaltungsbehörde nach technischer Stellungnahme der Dienste für industrielle Sicherheit.",
      "Местная административная власть после технического заключения служб промышленной безопасности."
    ),
    keywords: ["قنينات الغاز", "gaz butane", "butane gas", "ترخيص", "سلامة", "sécurité"],
  },
  {
    id: "req-agrement-auto-ecole",
    cat: "demandes",
    title: T7(
      "طلب ترخيص افتتاح مدرسة لتعليم السياقة",
      "Demande d'agrément pour une auto-école",
      "Application for a driving school licence",
      "Solicitud de licencia para una autoescuela",
      "Richiesta di autorizzazione per una autoscuola",
      "Antrag auf eine Fahrschulzulassung",
      "Заявление на лицензию автошколы"
    ),
    desc: D7(
      "طلب ترخيص إحداث مؤسسة لتعليم السياقة بعد استيفاء الشروط المتعلقة بالمكان والمعدات والمكونين.",
      "Demande d'agrément pour créer un établissement d'enseignement de la conduite, aux conditions de locaux et d'équipement.",
      "Application for approval to open a driving school, subject to premises and equipment requirements.",
      "Solicitud de licencia para crear una escuela de conducción, sujeta a requisitos de local y equipamiento.",
      "Richiesta di autorizzazione per aprire una autoscuola, soggetta ai requisiti di locali e attrezzature.",
      "Antrag auf Zulassung einer Fahrschule gemäß den Anforderungen an Räumlichkeiten und Ausstattung.",
      "Заявление на лицензию автошколы при соблюдении требований к помещениям и оборудованию."
    ),
    where: W7(
      "المديرية الإقليمية للتجهيز والنقل (مصلحة تراخيص مدارس تعليم السياقة).",
      "Direction provinciale de l'Équipement et du Transport (service des agréments des auto-écoles).",
      "Provincial Directorate of Equipment and Transport (driving school approvals service).",
      "Dirección provincial de Equipamiento y Transporte (servicio de licencias de autoescuelas).",
      "Direzione provinciale delle Attrezzature e dei Trasporti (servizio autorizzazioni autoscuole).",
      "Provinzialdirektion für Ausrüstung und Verkehr (Dienst für Fahrschulzulassungen).",
      "Провинциальная дирекция оборудования и транспорта (служба лицензирования автошкол)."
    ),
    keywords: ["مدرسة سياقة", "auto-école", "driving school", "تعليم السياقة", "agrément"],
  },
  {
    id: "req-autorisation-institut-beaute",
    cat: "demandes",
    title: T7(
      "طلب رخصة افتتاح صالون تجميل",
      "Demande d'autorisation d'ouverture d'un institut de beauté",
      "Application to open a beauty institute",
      "Solicitud de apertura de un instituto de belleza",
      "Richiesta di apertura di un istituto di bellezza",
      "Antrag auf Eröffnung eines Schönheitsinstituts",
      "Заявление на открытие салона красоты"
    ),
    desc: D7(
      "طلب رخصة استغلال صالون الحلاقة والتجميل وفق الشروط الصحية والتنظيمية المعمول بها.",
      "Demande de licence d'exploitation d'un salon de coiffure et d'esthétique selon les règles sanitaires.",
      "Application for an operating licence for a hairdressing and beauty salon under health rules.",
      "Solicitud de licencia de explotación de una peluquería y estética conforme a las normas sanitarias.",
      "Richiesta di licenza per un salone di parrucchiere ed estetica secondo le norme sanitarie.",
      "Antrag auf eine Betriebserlaubnis für einen Friseur- und Schönheitssalon nach Hygienevorschriften.",
      "Заявление на разрешение эксплуатации парикмахерского салона согласно санитарным нормам."
    ),
    where: W7(
      "مصلحة الرخص بالجماعة بعد الرأي الصحي للمصالح المختصة في الوقاية.",
      "Service des licences de la commune, après avis sanitaire des services de prévention.",
      "Commune licensing service, after the health opinion of the prevention services.",
      "Servicio de licencias de la comuna, previo dictamen sanitario de los servicios de prevención.",
      "Servizio licenze del comune, previo parere sanitario dei servizi di prevenzione.",
      "Genehmigungsdienst der Gemeinde nach sanitärer Stellungnahme der Präventionsdienste.",
      "Служба разрешений коммуны после санитарного заключения служб профилактики."
    ),
    keywords: ["صالون تجميل", "institut de beauté", "beauty salon", "حلاقة", "coiffure", "رخصة"],
  },
  {
    id: "req-autorisation-restaurant",
    cat: "demandes",
    title: T7(
      "طلب رخصة افتتاح مقهى أو مطعم",
      "Demande d'autorisation d'ouverture d'un café ou restaurant",
      "Application to open a café or restaurant",
      "Solicitud de apertura de un café o restaurante",
      "Richiesta di apertura di un caffè o ristorante",
      "Antrag auf Eröffnung eines Cafés oder Restaurants",
      "Заявление на открытие кафе или ресторана"
    ),
    desc: D7(
      "طلب رخصة استغلال محل لبيع المشروبات والأكلات مع الالتزام بمتطلبات النظافة والسلامة.",
      "Demande de licence d'exploitation d'un débit de boissons et de restauration, aux conditions d'hygiène.",
      "Application for an operating licence for a drinks and food establishment, subject to hygiene conditions.",
      "Solicitud de licencia para un establecimiento de bebidas y comidas, sujeta a condiciones de higiene.",
      "Richiesta di licenza per un esercizio di bevande e ristorazione, alle condizioni di igiene.",
      "Antrag auf eine Betriebserlaubnis für einen Getränke- und Speisebetrieb unter Hygieneauflagen.",
      "Заявление на разрешение для заведения напитков и питания при соблюдении гигиенических требований."
    ),
    where: W7(
      "الشباك الوحيد بالجماعة بعد زيارة المصالح الصحية المختصة للمحل.",
      "Guichet unique de la commune, après visite des services sanitaires compétents au local.",
      "Commune one-stop shop, after the competent health services visit the premises.",
      "Ventanilla única de la comuna, tras la visita de los servicios sanitarios al local.",
      "Sportello unico del comune, dopo la visita dei servizi sanitari al locale.",
      "Einheitsschalter der Gemeinde nach Begehung der Räume durch die Gesundheitsdienste.",
      "Единое окно коммуны после осмотра помещения компетентными санитарными службами."
    ),
    keywords: ["مقهى", "café", "مطعم", "restaurant", "رخصة", "licence"],
  },
  {
    id: "req-autorisation-ouverture-commerce",
    cat: "demandes",
    title: T7(
      "طلب رخصة استغلال محل تجاري",
      "Demande d'autorisation d'exploitation d'un local commercial",
      "Application for an operating licence for commercial premises",
      "Solicitud de licencia de explotación de un local comercial",
      "Richiesta di autorizzazione all'esercizio di un locale commerciale",
      "Antrag auf eine Betriebserlaubnis für Geschäftsräume",
      "Заявление на разрешение эксплуатации торгового помещения"
    ),
    desc: D7(
      "طلب الترخيص باستغلال محل تجاري بعد التحقق من مطابقته للأنظمة الجبائية والعمرانية المعمول بها.",
      "Demande d'autorisation d'exploiter un local commercial après vérification de sa conformité fiscale et urbaine.",
      "Application for authorisation to operate commercial premises after checking their fiscal and urban compliance.",
      "Solicitud de autorización para explotar un local comercial tras verificar su conformidad fiscal y urbanística.",
      "Richiesta di autorizzazione a esercitare un locale commerciale dopo verifica di conformità fiscale e urbanistica.",
      "Antrag auf Genehmigung der Nutzung von Geschäftsräumen nach Prüfung der steuerlichen und städtebaulichen Konformität.",
      "Заявление на разрешение эксплуатации торгового помещения после проверки его налогового и градостроительного соответствия."
    ),
    where: W7(
      "مصلحة الرخص بالجماعة مع عقد الكراء أو ملكية المحل والسجل التجاري.",
      "Service des licences de la commune, avec bail ou titre de propriété et registre de commerce.",
      "Commune licensing service, with lease or ownership title and trade registry.",
      "Servicio de licencias de la comuna, con contrato de alquiler o título de propiedad y registro mercantil.",
      "Servizio licenze del comune, con contratto d'affitto o titolo di proprietà e registro delle imprese.",
      "Genehmigungsdienst der Gemeinde mit Mietvertrag oder Eigentumsnachweis und Handelsregister.",
      "Служба разрешений коммуны с договором аренды или правом собственности и торговым реестром."
    ),
    keywords: ["محل تجاري", "local commercial", "commercial premises", "رخصة استغلال", "licence"],
  },
  {
    id: "req-occupation-domaine-public",
    cat: "demandes",
    title: T7(
      "طلب رخصة احتلال الملك العمومي مؤقتا",
      "Demande d'autorisation d'occupation du domaine public",
      "Application for temporary occupation of public domain",
      "Solicitud de ocupación temporal del dominio público",
      "Richiesta di occupazione temporanea del demanio",
      "Antrag auf vorübergehende Nutzung des öffentlichen Bereichs",
      "Заявление о временном занятии публичной территории"
    ),
    desc: D7(
      "طلب رخصة لاحتلال الرصيف أو الملك العمومي بالشرفات والعارضات مقابل أداء واجبات سنوية.",
      "Demande d'autorisation d'occuper trottoir ou domaine public par terrasses et étals, contre redevance annuelle.",
      "Application for authorisation to occupy pavement or public domain with terraces and stalls, against an annual fee.",
      "Solicitud de autorización para ocupar acera o dominio público con terrazas y puestos, previo pago de tasa anual.",
      "Richiesta di autorizzazione a occupare marciapiede o demanio con dehors e bancarelle, dietro canone annuo.",
      "Antrag auf Genehmigung, Gehweg oder öffentlichen Raum mit Terrassen und Ständen gegen Jahresgebühr zu nutzen.",
      "Заявление на разрешение занятия тротуара или публичной территории террасами и прилавками за ежегодную плату."
    ),
    where: W7(
      "مصلحة الجماعة المكلفة بتدبير الملك العمومي قبل الشروع في الاحتلال.",
      "Service de la commune chargé de la gestion du domaine public, avant tout début d'occupation.",
      "Commune service in charge of public domain management, before any occupation begins.",
      "Servicio de la comuna encargado de la gestión del dominio público, antes de iniciar la ocupación.",
      "Servizio del comune incaricato della gestione del demanio, prima dell'inizio dell'occupazione.",
      "Dienst der Gemeinde für die Verwaltung des öffentlichen Bereichs vor Beginn der Nutzung.",
      "Служба коммуны по управлению публичной территорией до начала занятия."
    ),
    keywords: ["الملك العمومي", "domaine public", "public domain", "تراس", "terrasse", "احتلال"],
  },
  {
    id: "req-autorisation-panneau-publicitaire",
    cat: "demandes",
    title: T7(
      "طلب رخصة تثبيت لوحة إعلانية",
      "Demande d'autorisation d'installation d'un panneau publicitaire",
      "Application to install an advertising billboard",
      "Solicitud de instalación de un panel publicitario",
      "Richiesta di installazione di un cartellone pubblicitario",
      "Antrag auf Aufstellung einer Werbetafel",
      "Заявление на установку рекламного щита"
    ),
    desc: D7(
      "طلب ترخيص تعليق لوحات إعلانية على واجهات العقارات أو بالفضاءات العمومية للمدينة.",
      "Demande d'autorisation d'apposer des panneaux publicitaires sur façades ou dans les espaces publics.",
      "Application for authorisation to place advertising panels on façades or in public spaces.",
      "Solicitud de autorización para colocar paneles publicitarios en fachadas o espacios públicos.",
      "Richiesta di autorizzazione ad apporre cartelloni pubblicitari su facciate o negli spazi pubblici.",
      "Antrag auf Genehmigung, Werbetafeln an Fassaden oder im öffentlichen Raum anzubringen.",
      "Заявление на разрешение размещения рекламных щитов на фасадах или в общественных местах."
    ),
    where: W7(
      "الجماعة أو الشركة المكلفة بتدبير الفضاءات الإعلانية بالمدينة المعنية.",
      "Commune ou société concessionnaire de la gestion des espaces publicitaires de la ville.",
      "Commune or the concession company managing the city's advertising spaces.",
      "Comuna o sociedad concesionaria de la gestión de los espacios publicitarios de la ciudad.",
      "Comune o società concessionaria della gestione degli spazi pubblicitari della città.",
      "Gemeinde oder Konzessionsgesellschaft für die Verwaltung der Werbeflächen der Stadt.",
      "Коммуна или компания-концессионер по управлению рекламными площадями города."
    ),
    keywords: ["لوحة إعلانية", "panneau publicitaire", "billboard", "إشهار", "publicité", "رخصة"],
  },
  {
    id: "req-extrait-registre-commerce",
    cat: "demandes",
    title: T7(
      "طلب مستخرج من السجل التجاري",
      "Demande d'extrait du registre de commerce",
      "Application for a trade registry extract",
      "Solicitud de extracto del registro mercantil",
      "Richiesta di visura del registro delle imprese",
      "Antrag auf einen Auszug aus dem Handelsregister",
      "Заявление на выписку из торгового реестра"
    ),
    desc: D7(
      "طلب مستخرج رسمي من السجل التجاري الممسوك من طرف المكتب المغربي للملكية الصناعية والتجارية.",
      "Demande d'un extrait officiel du registre de commerce tenu par l'Office Marocain de la Propriété Industrielle et Commerciale.",
      "Application for an official extract of the trade register kept by the Moroccan Office of Industrial and Commercial Property.",
      "Solicitud de un extracto oficial del registro mercantil llevado por la OMPIC.",
      "Richiesta di una visura ufficiale del registro delle imprese tenuto dall'OMPIC.",
      "Antrag auf einen amtlichen Auszug aus dem von der OMPIC geführten Handelsregister.",
      "Заявление на официальную выписку из торгового реестра, ведущегося марокканским ведомством OMPIC."
    ),
    where: W7(
      "المكتب المغربي للملكية الصناعية والتجارية أو عبر موقعه الإلكتروني ompic.ma.",
      "Office Marocain de la Propriété Industrielle et Commerciale ou via son site ompic.ma.",
      "Moroccan Office of Industrial and Commercial Property, or via its ompic.ma website.",
      "Oficina Marroquí de la Propiedad Industrial y Comercial o vía su sitio ompic.ma.",
      "Ufficio Marocchino della Proprietà Industriale e Commerciale oppure via ompic.ma.",
      "Marokkanisches Amt für gewerblichen Rechtsschutz oder über die Website ompic.ma.",
      "Марокканское ведомство промышленной и коммерческой собственности либо через сайт ompic.ma."
    ),
    authority: "ompic",
    keywords: ["السجل التجاري", "registre de commerce", "trade registry", "OMPIC", "مستخرج", "extrait"],
    popular: true,
  },
  {
    id: "req-attestation-non-inscription-marque",
    cat: "demandes",
    title: T7(
      "طلب شهادة عدم تسجيل علامة تجارية",
      "Demande d'attestation de non-inscription de marque",
      "Application for a certificate of non-registration of a trademark",
      "Solicitud de certificado de no inscripción de marca",
      "Richiesta di attestazione di non registrazione di un marchio",
      "Antrag auf eine Nichtregistrierungsbescheinigung einer Marke",
      "Заявление на справку об отсутствии регистрации товарного знака"
    ),
    desc: D7(
      "طلب شهادة تثبت عدم وجود علامة مسجلة مماثلة قبل الشروع في تسجيل علامة جديدة.",
      "Demande d'une attestation prouvant l'absence de marque identique enregistrée avant tout nouveau dépôt.",
      "Application for an attestation proving no identical registered mark exists before filing a new one.",
      "Solicitud de una constancia que acredite la ausencia de marca idéntica registrada antes de un nuevo depósito.",
      "Richiesta di un'attestazione comprovante l'assenza di marchi identici registrati prima di un nuovo deposito.",
      "Antrag auf eine Bescheinigung, die vor einer Neuanmeldung das Fehlen identischer Marken belegt.",
      "Заявление на справку об отсутствии идентичного зарегистрированного знака перед новой подачей."
    ),
    where: W7(
      "المكتب المغربي للملكية الصناعية والتجارية بعد البحث في قاعدة العلامات الوطنية.",
      "Office Marocain de la Propriété Industrielle et Commerciale, après recherche dans la base nationale des marques.",
      "Moroccan Office of Industrial and Commercial Property, after a search in the national trademark database.",
      "Oficina Marroquí de la Propiedad Industrial y Comercial, tras búsqueda en la base nacional de marcas.",
      "Ufficio Marocchino della Proprietà Industriale e Commerciale, dopo ricerca nella base nazionale dei marchi.",
      "Marokkanisches Amt für gewerblichen Rechtsschutz nach Recherche in der nationalen Markendatenbank.",
      "Марокканское ведомство промышленной и коммерческой собственности после поиска в национальной базе знаков."
    ),
    authority: "ompic",
    keywords: ["علامة تجارية", "marque", "trademark", "OMPIC", "عدم التسجيل", "non-inscription"],
  },
  {
    id: "req-depot-marque",
    cat: "demandes",
    title: T7(
      "طلب تسجيل علامة تجارية",
      "Demande de dépôt de marque",
      "Application to file a trademark",
      "Solicitud de registro de marca",
      "Domanda di deposito di marchio",
      "Antrag auf Markenanmeldung",
      "Заявление на регистрацию товарного знака"
    ),
    desc: D7(
      "طلب إيداع علامة تجارية لدى المكتب المغربي للملكية الصناعية لحمايتها من التقليد والاستغلال.",
      "Demande de dépôt d'une marque auprès de l'OMPIC pour la protéger contre l'imitation.",
      "Application to file a trademark with OMPIC to protect it against imitation.",
      "Solicitud de depósito de una marca ante la OMPIC para protegerla contra la imitación.",
      "Domanda di deposito di un marchio presso l'OMPIC per tutelarlo dall'imitazione.",
      "Antrag auf Anmeldung einer Marke beim OMPIC zum Schutz gegen Nachahmung.",
      "Заявление на подачу товарного знака в OMPIC для защиты от подражания."
    ),
    where: W7(
      "المكتب المغربي للملكية الصناعية والتجارية أو عبر خدمة الإيداع الإلكتروني ompic.ma.",
      "Office Marocain de la Propriété Industrielle et Commerciale ou via le dépôt en ligne ompic.ma.",
      "Moroccan Office of Industrial and Commercial Property, or via online filing at ompic.ma.",
      "Oficina Marroquí de la Propiedad Industrial y Comercial o vía depósito en línea en ompic.ma.",
      "Ufficio Marocchino della Proprietà Industriale e Commerciale o tramite deposito online su ompic.ma.",
      "Marokkanisches Amt für gewerblichen Rechtsschutz oder über Online-Anmeldung unter ompic.ma.",
      "Марокканское ведомство промышленной и коммерческой собственности либо через онлайн-подачу на ompic.ma."
    ),
    authority: "ompic",
    keywords: ["علامة تجارية", "marque", "trademark", "OMPIC", "تسجيل", "dépôt"],
  },
  {
    id: "req-autorisation-transport-sanitaire",
    cat: "demandes",
    title: T7(
      "طلب ترخيص النقل الصحي",
      "Demande d'autorisation de transport sanitaire",
      "Application for a medical transport licence",
      "Solicitud de autorización de transporte sanitario",
      "Richiesta di autorizzazione al trasporto sanitario",
      "Antrag auf eine Genehmigung für Krankentransporte",
      "Заявление на лицензию санитарного транспорта"
    ),
    desc: D7(
      "طلب ترخيص استغلال سيارات المداواة لنقل المرضى وفق الشروط التقنية والصحية المعمول بها.",
      "Demande de licence d'exploitation d'ambulances privées pour le transport de malades.",
      "Application for a licence to operate private ambulances for patient transport.",
      "Solicitud de licencia para explotar ambulancias privadas para el transporte de enfermos.",
      "Richiesta di licenza per gestire ambulanze private per il trasporto di malati.",
      "Antrag auf eine Lizenz für den Betrieb privater Krankenwagen für Patiententransporte.",
      "Заявление на лицензию эксплуатации частных карет скорой помощи для перевозки больных."
    ),
    where: W7(
      "المديرية الجهوية للصحة بالتنسيق مع مصالح النقل المختصة قبل استغلال المركبة.",
      "Direction régionale de la santé, en coordination avec les services de transport, avant exploitation.",
      "Regional health directorate, coordinated with transport services, before operation.",
      "Dirección regional de salud, en coordinación con los servicios de transporte, antes de la explotación.",
      "Direzione regionale della salute, in coordinamento con i servizi di trasporto, prima dell'esercizio.",
      "Regionale Gesundheitsdirektion in Abstimmung mit den Verkehrsdiensten vor Betriebsaufnahme.",
      "Региональная дирекция здравоохранения в координации с транспортными службами до начала эксплуатации."
    ),
    keywords: ["نقل صحي", "transport sanitaire", "medical transport", "إسعاف", "ambulance", "ترخيص"],
  },
  // ─── Divers — administration générale ───
  {
    id: "req-recensement-militaire",
    cat: "demandes",
    title: T7(
      "طلب التسجيل بمكتب التجنيد والتعبئة",
      "Demande d'inscription au bureau du recensement militaire",
      "Application for registration at the military census office",
      "Solicitud de inscripción en la oficina de reclutamiento militar",
      "Richiesta di iscrizione all'ufficio di leva militare",
      "Antrag auf Registrierung beim Wehrmeldeamt",
      "Заявление о постановке на воинский учёт"
    ),
    desc: D7(
      "طلب التسجيل بمكتب التجنيد والتعبئة الوطنية وهو إلزامي على كل مواطن بلغ سن الثامنة عشرة.",
      "Demande d'inscription auprès du bureau du service militaire, obligatoire pour tout citoyen atteignant dix-huit ans.",
      "Application for registration with the military service office, compulsory for every citizen turning eighteen.",
      "Solicitud de inscripción ante la oficina del servicio militar, obligatoria para todo ciudadano que cumpla dieciocho años.",
      "Richiesta di iscrizione presso l'ufficio del servizio militare, obbligatoria per ogni cittadino che compie diciotto anni.",
      "Antrag auf Registrierung beim Militärdienstamt, obligatorisch für jeden Bürger ab Vollendung des achtzehnten Lebensjahres.",
      "Заявление о постановке на учёт в отделе военной службы, обязательное для каждого гражданина с 18 лет."
    ),
    where: W7(
      "مكتب التجنيد والتعبئة الوطنية التابع له محل إقامة المعني بالأمر.",
      "Bureau du service militaire du lieu de résidence de l'intéressé.",
      "Military service office of the applicant's place of residence.",
      "Oficina del servicio militar del lugar de residencia del interesado.",
      "Ufficio del servizio militare del luogo di residenza dell'interessato.",
      "Militärdienstamt des Wohnorts des Betroffenen.",
      "Отдел военной службы по месту проживания заявителя."
    ),
    keywords: ["التجنيد", "recensement militaire", "military census", "الخدمة العسكرية", "service militaire"],
  },
  {
    id: "req-attestation-situation-militaire",
    cat: "demandes",
    title: T7(
      "طلب شهادة الوضعية العسكرية",
      "Demande d'attestation de situation militaire",
      "Application for a military status certificate",
      "Solicitud de certificado de situación militar",
      "Richiesta di attestazione di posizione militare",
      "Antrag auf eine Wehrdienstbescheinigung",
      "Заявление на справку о воинском статусе"
    ),
    desc: D7(
      "طلب شهادة الوضعية تجاه الخدمة العسكرية الضرورية للتوظيف في الوظيفة العمومية والقطاع الخاص.",
      "Demande d'attestation de position vis-à-vis du service militaire, exigée pour le recrutement public ou privé.",
      "Application for a certificate of position regarding military service, required for public or private recruitment.",
      "Solicitud de certificado de posición respecto al servicio militar, exigida para el reclutamiento público o privado.",
      "Richiesta di attestazione di posizione rispetto al servizio militare, richiesta per l'assunzione pubblica o privata.",
      "Antrag auf eine Bescheinigung über den Wehrdienststatus, erforderlich für Einstellungen im öffentlichen und privaten Sektor.",
      "Заявление на справку о положении в отношении военной службы, требуемую при приёме на работу."
    ),
    where: W7(
      "مكتب التجنيد والتعبئة الوطنية أو عبر الموقع الإلكتروني لوزارة الدفاع الوطني.",
      "Bureau du service militaire ou via le site web du ministère de la Défense nationale.",
      "Military service office or via the Ministry of National Defence website.",
      "Oficina del servicio militar o vía el sitio web del Ministerio de Defensa Nacional.",
      "Ufficio del servizio militare o tramite il sito del Ministero della Difesa nazionale.",
      "Militärdienstamt oder über die Website des Verteidigungsministeriums.",
      "Отдел военной службы либо через сайт министерства национальной обороны."
    ),
    keywords: ["الوضعية العسكرية", "situation militaire", "military status", "التجنيد", "recensement"],
    popular: true,
  },
  {
    id: "req-exoneration-service-militaire",
    cat: "demandes",
    title: T7(
      "طلب الإعفاء من الخدمة العسكرية",
      "Demande d'exonération du service militaire",
      "Application for exemption from military service",
      "Solicitud de exención del servicio militar",
      "Richiesta di esonero dal servizio militare",
      "Antrag auf Befreiung vom Militärdienst",
      "Заявление об освобождении от военной службы"
    ),
    desc: D7(
      "طلب الإعفاء من الخدمة العسكرية لمن تنطبق عليه الحالات القانونية كالعجز أو الأسباب العائلية.",
      "Demande d'exonération pour les personnes relevant des cas légaux tels que l'inaptitude ou les motifs familiaux.",
      "Exemption application for persons falling under legal cases such as unfitness or family reasons.",
      "Solicitud de exención para personas comprendidas en supuestos legales como inaptitud o motivos familiares.",
      "Richiesta di esonero per le persone che rientrano nei casi legali come inidoneità o motivi familiari.",
      "Befreiungsantrag für Personen, die unter gesetzliche Fälle wie Dienstunfähigkeit oder familiäre Gründe fallen.",
      "Заявление об освобождении для лиц, подпадающих под законные случаи: негодность или семейные обстоятельства."
    ),
    where: W7(
      "مكتب التجنيد والتعبئة الوطنية مع الوثائق الطبية أو الإدارية المثبتة لسبب الإعفاء.",
      "Bureau du service militaire, avec pièces médicales ou administratives justifiant le motif d'exonération.",
      "Military service office, with medical or administrative documents evidencing the exemption ground.",
      "Oficina del servicio militar, con documentos médicos o administrativos que justifiquen el motivo de exención.",
      "Ufficio del servizio militare, con documenti medici o amministrativi giustificanti il motivo di esonero.",
      "Militärdienstamt mit ärztlichen oder verwaltungsmäßigen Nachweisen des Befreiungsgrundes.",
      "Отдел военной службы с медицинскими или административными документами об основании освобождения."
    ),
    keywords: ["الإعفاء", "exonération", "exemption", "الخدمة العسكرية", "service militaire"],
  },
  {
    id: "req-carte-ancien-combattant",
    cat: "demandes",
    title: T7(
      "طلب بطاقة قدماء المقاومين وأعضاء جيش التحرير",
      "Demande de carte d'ancien combattant",
      "Application for a veteran's card",
      "Solicitud de tarjeta de veterano",
      "Richiesta di tessera di ex combattente",
      "Antrag auf einen Veteranenausweis",
      "Заявление на удостоверение ветерана"
    ),
    desc: D7(
      "طلب الحصول على بطاقة قدماء المقاومين وأعضاء جيش التحرير للاستفادة من الحقوق والامتيازات المقررة.",
      "Demande de la carte d'ancien résistant et membre de l'armée de libération ouvrant droit aux avantages prévus.",
      "Application for the former resistance fighter and liberation army member's card granting the prescribed benefits.",
      "Solicitud de la tarjeta de ex resistente y miembro del ejército de liberación que da derecho a las ventajas previstas.",
      "Richiesta della tessera di ex combattente e membro dell'esercito di liberazione che dà diritto ai vantaggi previsti.",
      "Antrag auf die Karte für ehemalige Widerstandskämpfer und Befreiungsarmeeangehörige mit den vorgesehenen Vergünstigungen.",
      "Заявление на удостоверение ветерана сопротивления и армии освобождения с предусмотренными льготами."
    ),
    where: W7(
      "الديوان الوطني لقدماء المقاومين وأعضاء جيش التحرير أو مصالحه الجهوية.",
      "Office national des anciens résistants et membres de l'armée de libération ou ses services régionaux.",
      "National Office of Former Resistance Fighters and Liberation Army Members or its regional services.",
      "Oficina nacional de ex resistentes y miembros del ejército de liberación o sus servicios regionales.",
      "Ufficio nazionale degli ex combattenti e membri dell'esercito di liberazione o i suoi servizi regionali.",
      "Nationales Amt der ehemaligen Widerstandskämpfer und Befreiungsarmeeangehörigen oder deren regionale Dienste.",
      "Национальное ведомство ветеранов сопротивления и армии освобождения либо его региональные службы."
    ),
    keywords: ["قدماء المقاومين", "anciens combattants", "veterans", "جيش التحرير", "armée de libération"],
  },
  {
    id: "req-certificat-conformite",
    cat: "demandes",
    title: T7(
      "طلب شهادة المطابقة لمركبة مستوردة",
      "Demande de certificat de conformité pour véhicule importé",
      "Application for a certificate of conformity for an imported vehicle",
      "Solicitud de certificado de conformidad para vehículo importado",
      "Richiesta di certificato di conformità per veicolo importato",
      "Antrag auf eine Übereinstimmungsbescheinigung für ein Importfahrzeug",
      "Заявление на сертификат соответствия для импортного автомобиля"
    ),
    desc: D7(
      "طلب شهادة المطابقة الواجب الحصول عليها قبل تسجيل المركبات المستوردة الجديدة أو المستعملة.",
      "Demande du certificat de conformité obligatoire avant l'immatriculation des véhicules importés neufs ou d'occasion.",
      "Application for the certificate of conformity required before registering new or used imported vehicles.",
      "Solicitud del certificado de conformidad obligatorio antes de matricular vehículos importados nuevos o usados.",
      "Richiesta del certificato di conformità obbligatorio prima dell'immatricolazione di veicoli importati nuovi o usati.",
      "Antrag auf die vor der Zulassung importierter Neufahrzeuge oder Gebrauchtfahrzeuge erforderliche Übereinstimmungsbescheinigung.",
      "Заявление на сертификат соответствия, обязательный до регистрации новых или подержанных импортных автомобилей."
    ),
    where: W7(
      "مصالح وزارة الصناعة والتجارة أو الوكلاء المعتمدين مع ملف الاستيراد الكامل.",
      "Services du ministère de l'Industrie et du Commerce ou agents agréés, avec le dossier d'importation complet.",
      "Ministry of Industry and Commerce services or approved agents, with the complete import file.",
      "Servicios del Ministerio de Industria y Comercio o agentes autorizados, con el expediente de importación completo.",
      "Servizi del Ministero dell'Industria e del Commercio o agenti autorizzati, con il fascicolo d'importazione completo.",
      "Dienste des Ministeriums für Industrie und Handel oder zugelassene Stellen mit vollständiger Importakte.",
      "Службы министерства промышленности и торговли либо аккредитованные агенты с полным импортным досье."
    ),
    keywords: ["شهادة المطابقة", "certificat de conformité", "certificate of conformity", "استيراد", "import"],
  },
  {
    id: "req-carte-electeur",
    cat: "demandes",
    title: T7(
      "طلب التسجيل في اللوائح الانتخابية",
      "Demande d'inscription sur les listes électorales",
      "Application to register on the electoral rolls",
      "Solicitud de inscripción en el censo electoral",
      "Domanda di iscrizione alle liste elettorali",
      "Antrag auf Eintragung in die Wählerlisten",
      "Заявление о включении в списки избирателей"
    ),
    desc: D7(
      "طلب التسجيل أو مراجعة القيد في اللوائح الانتخابية العامة قصد الاستفادة من بطاقة الناخب.",
      "Demande d'inscription ou de révision sur les listes électorales générales afin d'obtenir la carte d'électeur.",
      "Application to register on or update the general electoral rolls in order to obtain the voter's card.",
      "Solicitud de inscripción o revisión en el censo electoral general para obtener la tarjeta de elector.",
      "Domanda di iscrizione o revisione nelle liste elettorali generali per ottenere la tessera elettorale.",
      "Antrag auf Eintragung oder Berichtigung in den allgemeinen Wählerlisten zur Erlangung der Wahlkarte.",
      "Заявление о включении или уточнении в общих списках избирателей для получения избирательной карточки."
    ),
    where: W7(
      "اللجنة الإدارية للجماعة خلال فترات التسجيل أو عبر البوابة الانتخابية الرسمية.",
      "Commission administrative de la commune pendant les périodes d'inscription ou via le portail électoral officiel.",
      "Commune administrative commission during registration periods or via the official electoral portal.",
      "Comisión administrativa de la comuna durante los períodos de inscripción o vía el portal electoral oficial.",
      "Commissione amministrativa del comune durante i periodi di iscrizione o tramite il portale elettorale ufficiale.",
      "Verwaltungskommission der Gemeinde während der Anmeldezeiträume oder über das offizielle Wahlportal.",
      "Административная комиссия коммуны в периоды регистрации либо через официальный избирательный портал."
    ),
    authority: "interieur",
    keywords: ["اللوائح الانتخابية", "listes électorales", "electoral roll", "بطاقة الناخب", "carte d'électeur"],
  },
  {
    id: "req-procedure-changement-nom",
    cat: "demandes",
    title: T7(
      "مسطرة تغيير الاسم أو اللقب",
      "Procédure de changement de nom ou prénom",
      "Procedure for changing a name or surname",
      "Procedimiento de cambio de nombre o apellido",
      "Procedura di cambio di nome o cognome",
      "Verfahren zur Namensänderung",
      "Процедура смены имени или фамилии"
    ),
    desc: D7(
      "دليل خطوات تغيير الاسم أو اللقب أمام المحكمة الابتدائية بمقتضى إذن قضائي وفق الشروط المقررة.",
      "Guide des étapes du changement de nom devant le tribunal de première instance par autorisation judiciaire.",
      "Guide to the steps for changing a name before the first-instance court through judicial authorisation.",
      "Guía de los pasos para el cambio de nombre ante el tribunal de primera instancia mediante autorización judicial.",
      "Guida ai passaggi per il cambio di nome davanti al tribunale di primo grado tramite autorizzazione giudiziaria.",
      "Leitfaden für die Schritte der Namensänderung vor dem Gericht erster Instanz durch gerichtliche Genehmigung.",
      "Пошаговое руководство по смене имени в суде первой инстанции через судебное разрешение."
    ),
    where: W7(
      "المحكمة الابتدائية لمحل السكنى بمقال يقدم عبر السيد وكيل الملك.",
      "Tribunal de première instance du domicile, par requête déposée via le parquet du Roi.",
      "First-instance court of the domicile, by petition filed through the King's prosecution.",
      "Tribunal de primera instancia del domicilio, mediante solicitud presentada a través del ministerio fiscal.",
      "Tribunale di primo grado del domicilio, con ricorso presentato tramite la procura del Re.",
      "Gericht erster Instanz des Wohnorts, Antrag eingereicht über die Staatsanwaltschaft des Königs.",
      "Суд первой инстанции по месту жительства, ходатайство подаётся через королевскую прокуратуру."
    ),
    authority: "justice",
    keywords: ["تغيير الاسم", "changement de nom", "name change", "المحكمة", "tribunal", "مسطرة"],
  },
  {
    id: "req-autorisation-travail-etranger",
    cat: "demandes",
    title: T7(
      "طلب بطاقة الشغل وعقد عمل لأجنبي",
      "Demande de contrat de travail et carte de travail pour étranger",
      "Application for a work contract and work card for a foreigner",
      "Solicitud de contrato y tarjeta de trabajo para extranjero",
      "Richiesta di contratto e tessera di lavoro per straniero",
      "Antrag auf Arbeitsvertrag und Arbeitserlaubnis für Ausländer",
      "Заявление на трудовой договор и рабочую карту для иностранца"
    ),
    desc: D7(
      "طلب تأشيرة عقد عمل أجنبي والحصول على بطاقة الشغل قبل تشغيله من طرف المشغل بالمملكة.",
      "Demande de visa du contrat de travail étranger et de la carte de travail avant tout recrutement au Maroc.",
      "Application for endorsement of a foreigner's work contract and the work card before any hiring in Morocco.",
      "Solicitud de visado del contrato de trabajo extranjero y de la tarjeta de trabajo antes de su contratación.",
      "Richiesta di visto del contratto di lavoro straniero e della tessera di lavoro prima dell'assunzione in Marocco.",
      "Antrag auf Genehmigung des ausländischen Arbeitsvertrags und der Arbeitserlaubnis vor jeder Einstellung.",
      "Заявление на утверждение трудового договора иностранца и рабочей карты до найма в Марокко."
    ),
    where: W7(
      "الوكالة الوطنية لإنعاش التشغيل والكفاءات (ANAPEC) عبر خدمة تشغيل الأجانب.",
      "Agence nationale de promotion de l'emploi et des compétences (ANAPEC), via le service de l'emploi des étrangers.",
      "National Agency for the Promotion of Employment and Skills (ANAPEC), via the foreign employment service.",
      "Agencia Nacional de Promoción del Empleo y las Competencias (ANAPEC), vía el servicio de empleo de extranjeros.",
      "Agenzia nazionale per la promozione dell'impiego e delle competenze (ANAPEC), tramite il servizio per l'impiego degli stranieri.",
      "Nationale Agentur zur Förderung von Beschäftigung und Kompetenzen (ANAPEC) über den Dienst für ausländische Arbeitnehmer.",
      "Национальное агентство содействия занятости и навыкам (ANAPEC) через службу трудоустройства иностранцев."
    ),
    authority: "anapec",
    keywords: ["بطاقة الشغل", "carte de travail", "work permit", "أجنبي", "étranger", "ANAPEC"],
  },
  {
    id: "req-permis-chasse",
    cat: "demandes",
    title: T7(
      "طلب رخصة الصيد",
      "Demande de permis de chasse",
      "Application for a hunting permit",
      "Solicitud de permiso de caza",
      "Richiesta di permesso di caccia",
      "Antrag auf einen Jagdschein",
      "Заявление на разрешение на охоту"
    ),
    desc: D7(
      "طلب الحصول على رخصة الصيد بعد اجتياز الاختبار المطلوب واستيفاء الوثائق المقررة قانونا.",
      "Demande d'obtention du permis de chasse après réussite de l'examen et constitution des pièces légales.",
      "Application for the hunting permit after passing the examination and assembling the legal documents.",
      "Solicitud del permiso de caza tras aprobar el examen y reunir los documentos legales.",
      "Richiesta del permesso di caccia dopo il superamento dell'esame e la raccolta dei documenti previsti.",
      "Antrag auf den Jagdschein nach bestandener Prüfung und Zusammenstellung der gesetzlichen Unterlagen.",
      "Заявление на разрешение на охоту после сдачи экзамена и подготовки предусмотренных законом документов."
    ),
    where: W7(
      "المصلحة الإقليمية للمياه والغابات التابع لها محل إقامة الصياد.",
      "Service provincial des eaux et forêts du lieu de résidence du chasseur.",
      "Provincial water and forests service of the hunter's place of residence.",
      "Servicio provincial de aguas y bosques del lugar de residencia del cazador.",
      "Servizio provinciale delle acque e foreste del luogo di residenza del cacciatore.",
      "Provinzialdienst für Wasser und Forsten des Wohnorts des Jägers.",
      "Провинциальная служба вод и лесов по месту проживания охотника."
    ),
    keywords: ["رخصة الصيد", "permis de chasse", "hunting permit", "المياه والغابات", "eaux et forêts"],
  },
  {
    id: "req-certificat-non-gage",
    cat: "demandes",
    title: T7(
      "طلب شهادة عدم التقيد وعدم الحجز للمركبة",
      "Demande de certificat de non-gage",
      "Application for a certificate of non-pledge",
      "Solicitud de certificado de no gravamen",
      "Richiesta di certificato di non gravame",
      "Antrag auf eine Unbelastungsbescheinigung",
      "Заявление на справку об отсутствии обременений"
    ),
    desc: D7(
      "طلب شهادة تثبت خلو المركبة من كل حجز أو حق للغير تطلب عند بيعها أو نقل ملكيتها للغير.",
      "Demande d'une attestation certifiant l'absence de gage ou de droit de tiers, exigée lors de la vente.",
      "Application for an attestation certifying the absence of pledge or third-party rights, required on sale.",
      "Solicitud de una constancia que certifique la ausencia de gravamen o derechos de terceros, exigida en la venta.",
      "Richiesta di un'attestazione comprovante l'assenza di gravami o diritti di terzi, richiesta alla vendita.",
      "Antrag auf eine Bescheinigung über das Fehlen von Pfandrechten oder Drittrechten, beim Verkauf erforderlich.",
      "Заявление на справку об отсутствии залога или прав третьих лиц, требуемую при продаже."
    ),
    where: W7(
      "مصالح تسجيل المركبات أو الخدمة الرقمية لوزارة التجهيز والنقل واللوجستيك.",
      "Services d'immatriculation des véhicules ou service numérique du ministère de l'Équipement et des Transports.",
      "Vehicle registration services or the digital service of the Ministry of Equipment and Transport.",
      "Servicios de matriculación de vehículos o servicio digital del Ministerio de Equipamiento y Transporte.",
      "Servizi di immatricolazione dei veicoli o servizio digitale del Ministero delle Attrezzature e dei Trasporti.",
      "Zulassungsdienste oder digitaler Dienst des Ministeriums für Ausrüstung und Verkehr.",
      "Службы регистрации транспортных средств либо цифровой сервис министерства оборудования и транспорта."
    ),
    keywords: ["عدم الحجز", "non-gage", "non-pledge", "بيع السيارة", "vente véhicule"],
  },
  {
    id: "req-equivalence-diplome",
    cat: "demandes",
    title: T7(
      "طلب معادلة شهادة محصلة بالخارج",
      "Demande d'équivalence d'un diplôme obtenu à l'étranger",
      "Application for equivalence of a foreign diploma",
      "Solicitud de equivalencia de un título obtenido en el extranjero",
      "Richiesta di equipollenza di un titolo conseguito all'estero",
      "Antrag auf Anerkennung eines im Ausland erworbenen Abschlusses",
      "Заявление о признании иностранного диплома"
    ),
    desc: D7(
      "طلب معادلة الشهادات الجامعية والمهنية المحصلة بالخارج بالشهادات المغربية لمتابعة الدراسة أو الشغل.",
      "Demande de reconnaissance des diplômes obtenus à l'étranger aux fins de poursuite d'études ou d'emploi au Maroc.",
      "Application for recognition of degrees obtained abroad for continuing studies or working in Morocco.",
      "Solicitud de reconocimiento de los títulos obtenidos en el extranjero para estudiar o trabajar en Marruecos.",
      "Richiesta di riconoscimento dei titoli conseguiti all'estero per studiare o lavorare in Marocco.",
      "Antrag auf Anerkennung im Ausland erworbener Abschlüsse für Studium oder Beruf in Marokko.",
      "Заявление о признании дипломов, полученных за рубежом, для учёбы или работы в Марокко."
    ),
    where: W7(
      "وزارة التعليم العالي والبحث العلمي والابتكار عبر مصلحة معادلة الشهادات.",
      "Ministère de l'Enseignement supérieur via le service des équivalences de diplômes.",
      "Ministry of Higher Education via the diploma equivalence service.",
      "Ministerio de Educación Superior a través del servicio de equivalencias de títulos.",
      "Ministero dell'Istruzione superiore tramite il servizio delle equipollenze.",
      "Ministerium für Hochschulbildung über den Dienst für Zeugnisanerkennung.",
      "Министерство высшего образования через службу признания дипломов."
    ),
    authority: "enssup",
    keywords: ["معادلة الشهادات", "équivalence diplôme", "diploma equivalence", "شهادة أجنبية", "diplôme étranger"],
  },
  {
    id: "req-candidat-libre-bac",
    cat: "demandes",
    title: T7(
      "طلب الترشح للامتحان الوطني كمرشح حر",
      "Demande de candidature à l'examen national en candidat libre",
      "Application to sit the national exam as a private candidate",
      "Solicitud de candidatura al examen nacional como candidato libre",
      "Domanda di partecipazione all'esame nazionale da candidato esterno",
      "Antrag auf Zulassung zur Nationalprüfung als Privatkandidat",
      "Заявление на сдачу национального экзамена в качестве вольного кандидата"
    ),
    desc: D7(
      "طلب التسجيل للامتحان الوطني الموحد لشهادة البكالوريا بصيغة المرشح الحر للأغراض الدراسية.",
      "Demande d'inscription à l'examen national unifié du baccalauréat en qualité de candidat libre.",
      "Application to register for the unified national baccalaureate exam as a private candidate.",
      "Solicitud de inscripción al examen nacional unificado de bachillerato como candidato libre.",
      "Domanda di iscrizione all'esame nazionale unificato di maturità come candidato esterno.",
      "Antrag auf Anmeldung zur einheitlichen nationalen Abiturprüfung als Privatkandidat.",
      "Заявление на регистрацию на единый национальный экзамен бакалавриата как вольного кандидата."
    ),
    where: W7(
      "المصالح الجهوية لوزارة التربية الوطنية خلال فترات التسجيل المحددة سنويا.",
      "Services régionaux du ministère de l'Éducation nationale pendant les périodes d'inscription annuelles.",
      "Ministry of National Education regional services during the annual registration periods.",
      "Servicios regionales del Ministerio de Educación Nacional durante los períodos anuales de inscripción.",
      "Servizi regionali del Ministero dell'Istruzione nazionale durante i periodi annuali di iscrizione.",
      "Regionale Dienste des Bildungsministeriums während der jährlichen Anmeldezeiträume.",
      "Региональные службы министерства национального образования в ежегодные периоды регистрации."
    ),
    authority: "men",
    keywords: ["مرشح حر", "candidat libre", "private candidate", "البكالوريا", "baccalauréat", "امتحان وطني"],
  },
  {
    id: "req-demande-audience-wali",
    cat: "demandes",
    title: T7(
      "طلب مقابلة السيد الوالي أو عامل العمالة",
      "Demande d'audience auprès du wali ou du gouverneur",
      "Request for an audience with the wali or governor",
      "Solicitud de audiencia con el wali o gobernador",
      "Richiesta di udienza presso il wali o il governatore",
      "Antrag auf eine Audienz beim Wali oder Gouverneur",
      "Заявление о приёме у вали или губернатора"
    ),
    desc: D7(
      "طلب موعد لمقابلة السيد الوالي أو عامل العمالة من أجل عرض قضية إدارية أو اجتماعية عالقة.",
      "Demande de rendez-vous avec le wali ou le gouverneur pour exposer un dossier administratif ou social.",
      "Request for an appointment with the wali or governor to present an administrative or social case.",
      "Solicitud de cita con el wali o el gobernador para exponer un asunto administrativo o social.",
      "Richiesta di appuntamento con il wali o il governatore per esporre una pratica amministrativa o sociale.",
      "Antrag auf einen Termin beim Wali oder Gouverneur zur Darlegung einer Verwaltungs- oder Sozialangelegenheit.",
      "Заявление о приёме у вали или губернатора для изложения административного или социального вопроса."
    ),
    where: W7(
      "كتابة ولاية أو عمالة الجهة المعنية بالطلب قبل الموعد المحدد للمقابلة.",
      "Cabinet de la wilaya ou de la préfecture concernée, avant la date fixée pour l'audience.",
      "Cabinet of the concerned wilaya or prefecture, before the audience date is set.",
      "Gabinete de la wilaya o prefectura correspondiente, antes de la fecha fijada para la audiencia.",
      "Gabinetto della wilaya o prefettura interessata, prima della data fissata per l'udienza.",
      "Kabinett der betroffenen Wilaya oder Präfektur vor dem festgelegten Audienztermin.",
      "Канцелярия соответствующего вилаята или префектуры до назначенной даты приёма."
    ),
    authority: "interieur",
    keywords: ["مقابلة", "audience", "meeting", "الوالي", "wali", "gouverneur"],
  },
  {
    id: "req-utilisation-salle-commune",
    cat: "demandes",
    title: T7(
      "طلب استغلال قاعة تابعة للجماعة",
      "Demande d'utilisation d'une salle municipale",
      "Application to use a municipal hall",
      "Solicitud de uso de una sala municipal",
      "Richiesta di utilizzo di una sala comunale",
      "Antrag auf Nutzung eines Gemeindesaals",
      "Заявление на использование муниципального зала"
    ),
    desc: D7(
      "طلب استفادة من قاعة الاجتماعات أو الأعراس التابعة للجماعة لإقامة نشاط أو حفل اجتماعي.",
      "Demande de mise à disposition d'une salle communale pour organiser une activité ou une cérémonie.",
      "Application for the use of a communal hall to organise an activity or ceremony.",
      "Solicitud de puesta a disposición de una sala comunal para organizar una actividad o ceremonia.",
      "Richiesta di messa a disposizione di una sala comunale per organizzare un'attività o una cerimonia.",
      "Antrag auf Überlassung eines Gemeindesaals zur Ausrichtung einer Veranstaltung oder Feier.",
      "Заявление о предоставлении коммунального зала для проведения мероприятия или торжества."
    ),
    where: W7(
      "مصلحة الجماعة مقابل أداء الواجبات المحددة في الجدول الزمني للحجز.",
      "Service de la commune, contre paiement des redevances fixées au barème de réservation.",
      "Commune service, against payment of the fees set in the booking schedule.",
      "Servicio de la comuna, previo pago de las tasas fijadas en la tarifa de reserva.",
      "Servizio del comune, dietro pagamento dei canoni fissati nel tariffario di prenotazione.",
      "Dienst der Gemeinde gegen Entrichtung der im Belegungstarif festgelegten Gebühren.",
      "Служба коммуны при оплате сборов по тарифу бронирования."
    ),
    keywords: ["قاعة جماعية", "salle municipale", "municipal hall", "أعراس", "حجز", "réservation"],
  },
  {
    id: "req-acte-inventaire-succession",
    cat: "demandes",
    title: T7(
      "طلب استخراج حجة حصر الإرث",
      "Demande d'établissement d'un acte d'inventaire de succession",
      "Application to draw up an estate inventory deed",
      "Solicitud de levantamiento de acta de herederos",
      "Richiesta di redazione di un atto notorio di successione",
      "Antrag auf Erstellung eines Erbverzeichnisses",
      "Заявление об оформлении акта о наследниках"
    ),
    desc: D7(
      "طلب إحداث حجة حصر الإرث لدى العدول لتوثيق الوارثين والتصرف في تركة الميت قانونا.",
      "Demande d'établissement de l'acte d'héritiers auprès des adouls pour identifier les ayants droit.",
      "Application to draw up the heirs' deed before the adouls to identify the entitled successors.",
      "Solicitud de levantamiento del acta de herederos ante los adoules para identificar a los causahabientes.",
      "Richiesta di redazione dell'atto di eredi davanti agli adoul per identificare i successori.",
      "Antrag auf Errichtung des Erbenaktes vor den Adoul zur Feststellung der Erbberechtigten.",
      "Заявление о составлении акта о наследниках у адулов для определения правопреемников."
    ),
    where: W7(
      "قسم التوثيق بالمحكمة الابتدائية بمشاركة العدول وشهود الحسبة.",
      "Section du notariat au tribunal de première instance, avec la participation des adouls.",
      "Notarial section of the first-instance court, with the participation of adouls.",
      "Sección de notariado del tribunal de primera instancia, con participación de los adoules.",
      "Sezione notarile del tribunale di primo grado, con la partecipazione degli adoul.",
      "Notarsektion des Gerichts erster Instanz unter Beteiligung der Adoul.",
      "Нотариальный отдел суда первой инстанции с участием адулов."
    ),
    authority: "justice",
    keywords: ["حصر الإرث", "acte d'inventaire", "heirs deed", "الورثة", "héritiers", "العدول"],
  },
  {
    id: "req-carte-peche-plaisance",
    cat: "demandes",
    title: T7(
      "طلب رخصة الصيد البحري الترفيهي",
      "Demande de licence de pêche maritime de plaisance",
      "Application for a recreational sea fishing licence",
      "Solicitud de licencia de pesca marítima de recreo",
      "Richiesta di licenza di pesca marittima sportiva",
      "Antrag auf eine Lizenz für die maritime Freizeitfischerei",
      "Заявление на лицензию на любительский морской лов"
    ),
    desc: D7(
      "طلب رخصة الصيد البحري للمتعة والترفيه بالصنارة في المياه الإقليمية للمملكة المغربية.",
      "Demande de licence de pêche récréative à la ligne dans les eaux territoriales du Royaume.",
      "Application for a recreational rod-fishing licence in the Kingdom's territorial waters.",
      "Solicitud de licencia de pesca recreativa con caña en aguas territoriales del Reino.",
      "Richiesta di licenza di pesca ricreativa con canna nelle acque territoriali del Regno.",
      "Antrag auf eine Lizenz für die Angel-Erholungsfischerei in den Hoheitsgewässern des Königreichs.",
      "Заявление на лицензию любительского лова удочкой в территориальных водах королевства."
    ),
    where: W7(
      "المصلحة الجهوية للمصالح البحرية أو القيادة البحرية التابعة لها منطقة الصيد.",
      "Service régional des affaires maritimes ou quartier maritime dont relève la zone de pêche.",
      "Regional maritime affairs service or naval district covering the fishing zone.",
      "Servicio regional de asuntos marítimos o distrito marítimo correspondiente a la zona de pesca.",
      "Servizio regionale degli affari marittimi o circoscrizione marittima della zona di pesca.",
      "Regionale Dienst für Meeresangelegenheiten oder Seebezirk des Fanggebiets.",
      "Региональная служба морских дел либо морской округ района лова."
    ),
    keywords: ["الصيد البحري", "pêche de plaisance", "recreational fishing", "صنارة", "mer"],
  },
  // ─── Douanes — importation et régimes ───
  {
    id: "req-douane-import-vehicule",
    cat: "demandes",
    title: T7(
      "طلب التصريح التفصيلي باستيراد مركبة",
      "Demande de déclaration en détail d'importation d'un véhicule",
      "Application for a detailed import declaration for a vehicle",
      "Solicitud de declaración detallada de importación de vehículo",
      "Richiesta di dichiarazione doganale di importazione di un veicolo",
      "Antrag auf eine detaillierte Einfuhranmeldung für ein Fahrzeug",
      "Заявление на подачу детальной таможенной декларации на автомобиль"
    ),
    desc: D7(
      "طلب تصفية جمركية لمركبة مستوردة يشمل التصريح التفصيلي وأداء الرسوم والضرائب المستحقة عليها.",
      "Demande de dédouanement d'un véhicule importé comprenant la déclaration en détail et le paiement des droits.",
      "Customs clearance application for an imported vehicle, comprising the detailed declaration and duties payment.",
      "Solicitud de despacho aduanero de un vehículo importado que comprende la declaración detallada y el pago de aranceles.",
      "Richiesta di sdoganamento di un veicolo importato comprendente la dichiarazione e il pagamento dei dazi.",
      "Zollabfertigungsantrag für ein importiertes Fahrzeug mit detaillierter Anmeldung und Zollzahlung.",
      "Заявление на растаможку импортного автомобиля с детальной декларацией и уплатой пошлин."
    ),
    where: W7(
      "المكتب الجمركي للنقطة الحدودية أو الميناء مع ملف الاستيراد الكامل والفاتورة.",
      "Bureau de douane du poste frontière ou du port, avec dossier d'importation complet et facture.",
      "Customs office of the border post or port, with complete import file and invoice.",
      "Oficina de aduanas del puesto fronterizo o puerto, con expediente de importación completo y factura.",
      "Ufficio doganale del valico o del porto, con fascicolo d'importazione completo e fattura.",
      "Zollamt des Grenzpostens oder Hafens mit vollständiger Importakte und Rechnung.",
      "Таможенный офис пограничного пункта или порта с полным импортным досье и счётом."
    ),
    authority: "douane",
    keywords: ["التصريح التفصيلي", "déclaration en détail", "import declaration", "douane", "جمارك", "استيراد مركبة"],
  },
  {
    id: "req-douane-admission-temporaire-mre",
    cat: "demandes",
    title: T7(
      "طلب الإدخال المؤقت لمركبة من قبل مقيم بالخارج",
      "Demande d'admission temporaire d'un véhicule par un MRE",
      "Application for temporary admission of a vehicle by an MRE",
      "Solicitud de admisión temporal de un vehículo por un MRE",
      "Richiesta di ammissione temporanea di un veicolo da parte di un MRE",
      "Antrag auf vorübergehende Einfuhr eines Fahrzeugs durch einen MRE",
      "Заявление на временный ввоз автомобиля марокканцем-нерезидентом"
    ),
    desc: D7(
      "طلب إدخال مؤقت لمركبة مسجلة بالخارج عند زيارة المغرب دون أداء الرسوم الجمركية عند المدخل.",
      "Demande d'admission temporaire d'un véhicule immatriculé à l'étranger lors d'un séjour au Maroc, sans paiement des droits.",
      "Application for temporary admission of a foreign-registered vehicle during a stay in Morocco, without paying duties.",
      "Solicitud de admisión temporal de un vehículo matriculado en el extranjero durante una estancia en Marruecos, sin pagar aranceles.",
      "Richiesta di ammissione temporanea di un veicolo immatricolato all'estero durante un soggiorno in Marocco, senza pagamento dei dazi.",
      "Antrag auf vorübergehende Einfuhr eines im Ausland zugelassenen Fahrzeugs während eines Marokko-Aufenthalts ohne Zollzahlung.",
      "Заявление на временный ввоз автомобиля, зарегистрированного за рубежом, на время пребывания в Марокко без уплаты пошлин."
    ),
    where: W7(
      "المكتب الجمركي عند مدخل المملكة مع وثائق ملكية المركبة وإثبات الإقامة بالخارج.",
      "Bureau de douane à l'entrée du Royaume, avec papiers du véhicule et preuve de résidence à l'étranger.",
      "Customs office at the Kingdom's entry point, with vehicle papers and proof of residence abroad.",
      "Oficina de aduanas en la entrada del Reino, con documentos del vehículo y prueba de residencia en el extranjero.",
      "Ufficio doganale all'ingresso del Regno, con documenti del veicolo e prova di residenza all'estero.",
      "Zollamt am Eingang des Königreichs mit Fahrzeugpapieren und Nachweis des Auslandswohnsitzes.",
      "Таможенный офис на въезде в королевство с документами на машину и подтверждением проживания за рубежом."
    ),
    authority: "douane",
    keywords: ["الإدخال المؤقت", "admission temporaire", "temporary admission", "MRE", "جمارك", "douane"],
  },
  {
    id: "req-douane-effets-demenagement",
    cat: "demandes",
    title: T7(
      "طلب أداء أثاث المنزل عند الانتقال إلى المغرب",
      "Demande de dédouanement d'effets personnels et de mobilier",
      "Application to clear household goods and personal effects",
      "Solicitud de despacho de efectos personales y mobiliario",
      "Richiesta di sdoganamento di effetti personali e mobili",
      "Antrag auf Verzollung von Hausrat und persönlichen Gegenständen",
      "Заявление на растаможку домашней утвари и личных вещей"
    ),
    desc: D7(
      "طلب الاستفادة من نظام أداء أثاث المنزل والمتاع المستعمل عند نقل الإقامة نهائيا إلى المغرب.",
      "Demande du régime des effets personnels et objets de mobiliers usagés lors du transfert définitif de résidence au Maroc.",
      "Application for the used household goods regime when transferring permanent residence to Morocco.",
      "Solicitud del régimen de efectos personales y mobiliario usado al trasladar la residencia definitiva a Marruecos.",
      "Richiesta del regime degli effetti personali e mobili usati nel trasferimento definitivo di residenza in Marocco.",
      "Antrag auf das Regime für gebrauchte Haushaltsgegenstände bei endgültiger Wohnsitzverlegung nach Marokko.",
      "Заявление на режим бывших в употреблении домашних вещей при окончательном переезде в Марокко."
    ),
    where: W7(
      "المكتب الجمركي مع قائمة مفصلة للأثاث ووثائق نقل الإقامة من القنصلية.",
      "Bureau de douane, avec inventaire détaillé du mobilier et certificat de transfert de résidence du consulat.",
      "Customs office, with detailed furniture inventory and residence transfer certificate from the consulate.",
      "Oficina de aduanas, con inventario detallado del mobiliario y certificado de traslado de residencia del consulado.",
      "Ufficio doganale, con inventario dettagliato del mobilio e certificato di trasferimento della residenza dal consolato.",
      "Zollamt mit detailliertem Möbelverzeichnis und Wohnsitzverlagerungsbescheinigung des Konsulats.",
      "Таможенный офис с подробной описью мебели и справкой консульства о перемене места жительства."
    ),
    authority: "douane",
    keywords: ["أثاث المنزل", "effets personnels", "household goods", "déménagement", "moving", "جمارك"],
  },
  {
    id: "req-douane-exoneration-handicap",
    cat: "demandes",
    title: T7(
      "طلب الإعفاء من الرسوم لمعدات الأشخاص في وضعية إعاقة",
      "Demande d'exonération des droits pour matériel destiné aux personnes handicapées",
      "Application for duty exemption for equipment for persons with disabilities",
      "Solicitud de exención de aranceles para material de personas con discapacidad",
      "Richiesta di esenzione dai dazi per materiale destinato a persone con disabilità",
      "Antrag auf Zollbefreiung für Ausrüstung für Menschen mit Behinderung",
      "Заявление на освобождение от пошлин для оборудования людям с инвалидностью"
    ),
    desc: D7(
      "طلب إعفاء من الرسوم الجمركية للمعدات والعتاد المخصص لاستعمال الأشخاص في وضعية إعاقة.",
      "Demande d'exonération des droits de douane pour les équipements et appareils destinés aux personnes handicapées.",
      "Application for exemption from customs duties for equipment and appliances intended for persons with disabilities.",
      "Solicitud de exención de los aranceles para equipos y aparatos destinados a personas con discapacidad.",
      "Richiesta di esenzione dai dazi doganali per attrezzature e apparecchi destinati a persone con disabilità.",
      "Antrag auf Befreiung von Einfuhrabgaben für Geräte und Ausrüstungen für Menschen mit Behinderung.",
      "Заявление об освобождении от таможенных пошлин на оборудование и приспособления для людей с инвалидностью."
    ),
    where: W7(
      "المكتب الجمركي مع الشهادة الطبية والقرار الإداري للإعفاء المسبق.",
      "Bureau de douane, avec certificat médical et décision administrative d'exonération préalable.",
      "Customs office, with medical certificate and prior administrative exemption decision.",
      "Oficina de aduanas, con certificado médico y decisión administrativa previa de exención.",
      "Ufficio doganale, con certificato medico e decisione amministrativa preventiva di esenzione.",
      "Zollamt mit ärztlichem Attest und vorheriger verwaltungsbehördlicher Befreiungsentscheidung.",
      "Таможенный офис с медицинской справкой и предварительным административным решением об освобождении."
    ),
    authority: "douane",
    keywords: ["إعاقة", "handicap", "disability", "إعفاء", "exonération", "exemption"],
  },
  {
    id: "req-douane-certificat-circulation",
    cat: "demandes",
    title: T7(
      "طلب شهادة المنشأ أو التداول للتصدير",
      "Demande de certificat de circulation ou d'origine à l'export",
      "Application for a certificate of origin for exports",
      "Solicitud de certificado de circulación u origen para exportación",
      "Richiesta di certificato di circolazione o di origine per l'esportazione",
      "Antrag auf ein Ursprungs- oder Verkehrszertifikat für Exporte",
      "Заявление на сертификат происхождения для экспорта"
    ),
    desc: D7(
      "طلب شهادة منشأ أو تداول للمنتجات المصدرة للاستفادة من التخفيضات الجمركية بالأسواق الخارجية.",
      "Demande de certificat d'origine ou de circulation pour les produits exportés afin de bénéficier des préférences tarifaires.",
      "Application for a certificate of origin or circulation for exported products to benefit from tariff preferences.",
      "Solicitud de certificado de origen o circulación para productos exportados a fin de beneficiarse de preferencias arancelarias.",
      "Richiesta di certificato di origine o di circolazione per i prodotti esportati al fine di beneficiare delle preferenze tariffarie.",
      "Antrag auf ein Ursprungs- oder Verkehrszertifikat für Exportprodukte zur Nutzung von Zollpräferenzen.",
      "Заявление на сертификат происхождения или обращения для экспортной продукции с целью получения тарифных преференций."
    ),
    where: W7(
      "المكتب الجمركي لمحل تصدير السلع مع الفاتورة التفصيلية والتصريح بالتصدير.",
      "Bureau de douane du lieu d'exportation, avec facture détaillée et déclaration d'exportation.",
      "Customs office of the place of export, with detailed invoice and export declaration.",
      "Oficina de aduanas del lugar de exportación, con factura detallada y declaración de exportación.",
      "Ufficio doganale del luogo di esportazione, con fattura dettagliata e dichiarazione di esportazione.",
      "Zollamt des Ausfuhrorts mit detaillierter Rechnung und Ausfuhranmeldung.",
      "Таможенный офис места экспорта с детальным счётом и экспортной декларацией."
    ),
    authority: "douane",
    keywords: ["شهادة المنشأ", "certificat d'origine", "certificate of origin", "تصدير", "export", "douane"],
  },
  {
    id: "req-douane-colis-postal",
    cat: "demandes",
    title: T7(
      "طلب تصفية طرد بريدي موقوف بالجمارك",
      "Demande de dédouanement d'un colis postal retenu",
      "Application to clear a postal parcel held at customs",
      "Solicitud de despacho de un paquete postal retenido",
      "Richiesta di sdoganamento di un pacco postale trattenuto",
      "Antrag auf Verzollung eines zurückgehaltenen Postpakets",
      "Заявление на растаможку задержанной почтовой посылки"
    ),
    desc: D7(
      "طلب أداء الرسوم على طرد بريدي محجوز بمكتب الجمارك المرفق بمصلحة البريد حتى تسليمه.",
      "Demande de paiement des droits sur un colis retenu au bureau de douane attaché à Barid Al-Maghrib pour sa livraison.",
      "Application to pay duties on a parcel held at the customs office attached to the postal service for its release.",
      "Solicitud de pago de aranceles sobre un paquete retenido en la oficina de aduanas adjunta al correo para su entrega.",
      "Richiesta di pagamento dei dazi su un pacco trattenuto presso l'ufficio doganale annesso alle poste per la consegna.",
      "Antrag auf Zahlung der Abgaben für ein beim dem Postdienst angeschlossenen Zollamt zurückgehaltenes Paket zur Zustellung.",
      "Заявление об уплате пошлин за посылку, задержанную в таможенном офисе при почтовой службе, для её выдачи."
    ),
    where: W7(
      "مكتب الجمارك المرفق بمصلحة البريد مع بطاقة التعريف والإشعار البريدي الواصل.",
      "Bureau de douane attaché au service postal, avec pièce d'identité et avis de réception postal.",
      "Customs office attached to the postal service, with ID card and postal arrival notice.",
      "Oficina de aduanas adjunta al servicio postal, con documento de identidad y aviso postal de llegada.",
      "Ufficio doganale annesso al servizio postale, con documento d'identità e avviso postale di arrivo.",
      "Zollamt beim Postdienst mit Ausweis und Posteingangsbenachrichtigung.",
      "Таможенный офис при почтовой службе с удостоверением личности и почтовым уведомлением."
    ),
    authority: "douane",
    keywords: ["طرد بريدي", "colis postal", "postal parcel", "توقيف", "rétention", "جمارك"],
  },
];


