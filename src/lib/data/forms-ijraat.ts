// Administrative procedure guides — ID, passport, social registries,
// education, driving and vehicle procedures. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsIjraat: DocumentItem[] = [
  // ─── Identité et état civil ───
  {
    id: "ijr-cin-tajdid",
    cat: "ijraat",
    title: T7(
      "مسطرة تجديد البطاقة الوطنية للتعريف",
      "Procédure de renouvellement de la carte nationale d'identité",
      "Procedure for renewing the national identity card",
      "Procedimiento de renovación del documento nacional de identidad",
      "Procedura di rinnovo della carta d'identità nazionale",
      "Verfahren zur Erneuerung des nationalen Personalausweises",
      "Процедура обмена национального удостоверения личности"
    ),
    desc: D7(
      "مسطرة تحدد الوثائق وخطوات تجديد البطاقة الوطنية عند انتهاء صلاحيتها أو تلفها.",
      "Procédure fixant les pièces et étapes du renouvellement de la CIN à l'expiration ou en cas de détérioration.",
      "Procedure setting out the documents and steps for renewing the ID card upon expiry or damage.",
      "Procedimiento que fija los documentos y pasos para renovar el DNI al caducar o estropearse.",
      "Procedura che stabilisce i documenti e i passi per il rinnovo della CIN alla scadenza o in caso di deterioramento.",
      "Verfahren mit den Unterlagen und Schritten zur Erneuerung des Ausweises bei Ablauf oder Beschädigung.",
      "Процедура, определяющая документы и шаги обмена удостоверения личности при истечении срока или порче."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة التابعة لمحل الإقامة، مع إمكانية الحجز المسبق عبر cnie.ma.",
      "Annexe administrative ou caïdat du lieu de résidence, avec prise de rendez-vous possible via cnie.ma.",
      "Administrative annex or caïdat of the place of residence, with appointment booking available on cnie.ma.",
      "Anexo administrativo o caïdat de residencia, con cita previa posible por cnie.ma.",
      "Annesso amministrativo o caïdat del luogo di residenza, con prenotazione possibile su cnie.ma.",
      "Verwaltungsannexe oder Caïdat des Wohnorts, Terminbuchung über cnie.ma möglich.",
      "Административный анекс или каидат по месту жительства с возможностью записи через cnie.ma."
    ),
    authority: "cnie",
    keywords: ["تجديد البطاقة", "renouvellement CIN", "ID card renewal", "cnie", "البطاقة الوطنية"],
    popular: true,
  },
  {
    id: "ijr-cin-badal",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج بدل البطاقة الوطنية للتعريف",
      "Procédure d'obtention d'un duplicata de la carte nationale d'identité",
      "Procedure for obtaining a duplicate of the national identity card",
      "Procedimiento de obtención de un duplicado del documento nacional de identidad",
      "Procedura di ottenimento di un duplicato della carta d'identità nazionale",
      "Verfahren zur Beantragung eines Duplikats des Personalausweises",
      "Процедура получения дубликата национального удостоверения личности"
    ),
    desc: D7(
      "خطوات إصدار بدل مطابق للبطاقة الوطنية في حالة تلفها أو الحاجة إلى نسخة ثانية.",
      "Étapes de délivrance d'un duplicata conforme de la CIN en cas de détérioration ou de besoin d'une seconde copie.",
      "Steps to issue a matching duplicate of the ID card when damaged or when a second copy is required.",
      "Pasos para emitir un duplicado conforme del DNI cuando está dañado o se requiere una segunda copia.",
      "Passi per rilasciare un duplicato conforme della CIN quando è danneggiata o serve una seconda copia.",
      "Schritte zur Ausstellung eines Ersatzausweises bei Beschädigung oder wenn eine zweite Kopie nötig ist.",
      "Шаги выдачи дубликата удостоверения личности при его порче или необходимости второго экземпляра."
    ),
    where: W7(
      "الملحقة الإدارية بمحل الإقامة مع البطاقة الأصلية، أو تعبئة الطلب عبر بوابة cnie.ma.",
      "Annexe administrative du lieu de résidence avec la carte originale, ou saisie de la demande sur cnie.ma.",
      "Administrative annex of the place of residence with the original card, or filing the request on cnie.ma.",
      "Anexo administrativo de residencia con la tarjeta original, o solicitud en cnie.ma.",
      "Annesso amministrativo di residenza con la carta originale, oppure richiesta su cnie.ma.",
      "Verwaltungsannexe am Wohnort mit der Originalkarte oder Antrag über cnie.ma.",
      "Административный анекс по месту жительства с оригиналом карты либо заявка через cnie.ma."
    ),
    authority: "cnie",
    keywords: ["بدل البطاقة", "duplicata CIN", "duplicate ID", "cnie", "استخراج بدل"],
  },
  {
    id: "ijr-cin-mafqud",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على بدل مفقود البطاقة الوطنية",
      "Procédure d'obtention d'un duplicata en cas de perte de la CIN",
      "Procedure for obtaining a duplicate upon loss of the ID card",
      "Procedimiento de obtención de un duplicado en caso de pérdida del DNI",
      "Procedura di ottenimento di un duplicato in caso di smarrimento della CIN",
      "Verfahren zur Beantragung eines Duplikats bei Verlust des Ausweises",
      "Процедура получения дубликата при утере удостоверения личности"
    ),
    desc: D7(
      "مسطرة تشمل التصريح بالضياع لدى الشرطة ثم إيداع طلب البدل بالملحقة الإدارية المختصة.",
      "Procédure comprenant la déclaration de perte auprès de la police puis le dépôt de la demande de duplicata à l'annexe administrative.",
      "Procedure covering the loss declaration at the police station then filing the duplicate request at the administrative annex.",
      "Procedimiento que abarca la declaración de pérdida en la comisaría y luego la solicitud de duplicado en el anexo administrativo.",
      "Procedura che comprende la dichiarazione di smarrimento alla polizia e poi la richiesta di duplicato all'anesso amministrativo.",
      "Verfahren mit Verlustanzeige bei der Polizei und anschließender Duplikatsbeantragung in der Verwaltungsannexe.",
      "Процедура включает заявление об утере в полиции и подачу запроса на дубликат в административном анексе."
    ),
    where: W7(
      "مصالح الشرطة لتصريح الضياع ثم الملحقة الإدارية أو القيادة بمحل الإقامة.",
      "Services de police pour la déclaration de perte, puis annexe administrative ou caïdat du lieu de résidence.",
      "Police services for the loss declaration, then the administrative annex or caïdat of the place of residence.",
      "Servicios de policía para la declaración de pérdida y luego el anexo administrativo o caïdat de residencia.",
      "Servizi di polizia per la dichiarazione di smarrimento, poi annesso amministrativo o caïdat di residenza.",
      "Polizeidienststellen für die Verlustanzeige, danach Verwaltungsannexe oder Caïdat des Wohnorts.",
      "Полиция для заявления об утере, затем административный анекс или каидат по месту жительства."
    ),
    authority: "cnie",
    keywords: ["فقدان البطاقة", "perte CIN", "lost ID card", "تصريح بالضياع", "بدل مفقود"],
  },
  {
    id: "ijr-cin-qasirin",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج البطاقة الوطنية للقاصرين",
      "Procédure d'obtention de la CIN pour les mineurs",
      "Procedure for obtaining the ID card for minors",
      "Procedimiento de obtención del DNI para menores",
      "Procedura di ottenimento della CIN per i minorenni",
      "Verfahren zur Beantragung des Personalausweises für Minderjährige",
      "Процедура получения удостоверения личности для несовершеннолетних"
    ),
    desc: D7(
      "دليل يوضح وثائق استخراج البطاقة الوطنية لطفل قاصر بموافقة ممثله القانوني وحضوره.",
      "Guide détaillant les pièces de la demande de CIN d'un enfant mineur avec l'accord et la présence de son représentant légal.",
      "Guide detailing the documents for a minor child's ID card application with the legal representative's consent and presence.",
      "Guía que detalla los documentos para solicitar el DNI de un menor con el consentimiento y la presencia de su representante legal.",
      "Guida che dettaglia i documenti per richiedere la CIN di un minore con consenso e presenza del rappresentante legale.",
      "Leitfaden zu den Unterlagen für den Ausweisantrag eines minderjährigen Kindes mit Einwilligung und Anwesenheit des gesetzlichen Vertreters.",
      "Справочник о документах для заявления на удостоверение личности несовершеннолетнего с согласия и присутствия законного представителя."
    ),
    where: W7(
      "الملحقة الإدارية بمحل إقامة الأسرة مع حضور الممثل القانوني وإذنه الكتابي.",
      "Annexe administrative du lieu de résidence de la famille, avec la présence et l'autorisation écrite du représentant légal.",
      "Administrative annex of the family's place of residence, with the legal representative present and authorising in writing.",
      "Anexo administrativo del domicilio familiar, con presencia y autorización escrita del representante legal.",
      "Annesso amministrativo della residenza familiare, con presenza e autorizzazione scritta del rappresentante legale.",
      "Verwaltungsannexe am Familienwohnsitz mit Anwesenheit und schriftlicher Genehmigung des gesetzlichen Vertreters.",
      "Административный анекс по месту жительства семьи при присутствии и письменном согласии законного представителя."
    ),
    authority: "cnie",
    keywords: ["بطاقة القاصر", "CIN mineur", "minor ID card", "الممثل القانوني", "البطاقة الوطنية"],
  },
  {
    id: "ijr-tasrij-wilada",
    cat: "ijraat",
    title: T7(
      "مسطرة التصريح بالولادة لدى ضابط الحالة المدنية",
      "Procédure de déclaration de naissance auprès de l'officier d'état civil",
      "Procedure for declaring a birth to the civil registrar",
      "Procedimiento de declaración de nacimiento ante el oficial del registro civil",
      "Procedura di dichiarazione di nascita all'ufficiale di stato civile",
      "Verfahren zur Anzeige einer Geburt beim Standesbeamten",
      "Процедура регистрации рождения у регистратора гражданского состояния"
    ),
    desc: D7(
      "خطوات التصريح بمولود جديد لدى مصلحة الحالة المدنية داخل الأجل القانوني المحدد.",
      "Étapes de déclaration d'une nouvelle naissance au service d'état civil dans le délai légal imparti.",
      "Steps to declare a newborn to the civil registry office within the allotted legal deadline.",
      "Pasos para declarar un nacimiento al registro civil dentro del plazo legal establecido.",
      "Passi per dichiarare una nascita all'ufficio di stato civile entro il termine legale stabilito.",
      "Schritte zur Anzeige einer Geburt beim Standesamt innerhalb der vorgeschriebenen gesetzlichen Frist.",
      "Шаги заявления о рождении ребёнка в отделе ЗАГСа в установленный законом срок."
    ),
    where: W7(
      "مصلحة الحالة المدنية بجماعة محل الولادة داخل أجل لا يتعدى ثلاثين يوماً.",
      "Service d'état civil de la commune du lieu de naissance, dans un délai ne dépassant pas trente jours.",
      "Civil registry of the commune of the birth place, within a period not exceeding thirty days.",
      "Registro civil de la comuna del lugar de nacimiento, en un plazo que no exceda treinta días.",
      "Ufficio di stato civile del comune del luogo di nascita, entro un termine non superiore a trenta giorni.",
      "Standesamt der Geburtsortsgemeinde, innerhalb eines Zeitraums von höchstens dreißig Tagen.",
      "ЗАГС коммуны по месту рождения в срок, не превышающий тридцати дней."
    ),
    authority: "interieur",
    keywords: ["التصريح بالولادة", "بلاغ الولادة", "déclaration de naissance", "birth declaration", "الحالة المدنية"],
  },
  {
    id: "ijr-tasbih-hala-madaniya",
    cat: "ijraat",
    title: T7(
      "مسطرة تصحيح رسم الحالة المدنية",
      "Procédure de correction d'un acte d'état civil",
      "Procedure for correcting a civil status record",
      "Procedimiento de corrección de un acta de estado civil",
      "Procedura di correzione di un atto di stato civile",
      "Verfahren zur Berichtigung eines Standesamtsaktes",
      "Процедура исправления акта гражданского состояния"
    ),
    desc: D7(
      "مسطرة تتيح تصحيح الأخطاء المادية برسوم الحالة المدنية إدارياً أو الأخطاء الجوهرية عبر المحكمة.",
      "Procédure permettant de corriger administrativement les erreurs matérielles des actes, ou les erreurs substantielles via le tribunal.",
      "Procedure allowing administrative correction of material errors in records, or substantive errors through the court.",
      "Procedimiento que permite corregir administrativamente los errores materiales de las actas, o los errores sustanciales vía tribunal.",
      "Procedura che consente la correzione amministrativa degli errori materiali degli atti, o degli errori sostanziali tramite il tribunale.",
      "Verfahren zur administrativen Berichtigung materieller Fehler in Akten und wesentlicher Fehler über das Gericht.",
      "Процедура допускает административное исправление технических ошибок в актах либо существенных — через суд."
    ),
    where: W7(
      "مصلحة الحالة المدنية بالجماعة للأخطاء المادية، أو المحكمة الابتدائية للتصحيحات الجوهرية.",
      "Service d'état civil de la commune pour les erreurs matérielles, ou tribunal de première instance pour les corrections substantielles.",
      "Commune's civil registry for material errors, or the court of first instance for substantive corrections.",
      "Registro civil de la comuna para errores materiales, o tribunal de primera instancia para correcciones sustanciales.",
      "Ufficio di stato civile del comune per gli errori materiali, o tribunale di primo grado per le correzioni sostanziali.",
      "Standesamt der Gemeinde für materielle Fehler oder Gericht erster Instanz für wesentliche Berichtigungen.",
      "ЗАГС коммуны для технических ошибок либо суд первой инстанции для существенных исправлений."
    ),
    authority: "justice",
    keywords: ["تصحيح", "الحالة المدنية", "correction acte", "civil status correction", "رسم الولادة"],
  },
  {
    id: "ijr-wathaiq-mukhtalifa",
    cat: "ijraat",
    title: T7(
      "دليل الوثائق المطلوبة للحصول على الوثائق الإدارية المختلفة",
      "Guide des pièces requises pour l'obtention de divers documents administratifs",
      "Guide to the documents required for obtaining various administrative documents",
      "Guía de los documentos requeridos para obtener diversos documentos administrativos",
      "Guida ai documenti richiesti per ottenere vari documenti amministrativi",
      "Leitfaden zu den erforderlichen Unterlagen für verschiedene Verwaltungsdokumente",
      "Справочник документов, необходимых для получения различных административных документов"
    ),
    desc: D7(
      "دليل جامع يفصل الوثائق الواجب إرفاقها بكل طلب يتعلق برسوم الحالة المدنية والإشهادات الإدارية.",
      "Guide de synthèse détaillant les pièces à joindre à chaque demande portant sur les actes d'état civil et les attestations administratives.",
      "Comprehensive guide detailing the documents to attach to each request concerning civil status records and administrative certificates.",
      "Guía exhaustiva que detalla los documentos que se adjuntarán a cada solicitud sobre actos de estado civil y certificados administrativos.",
      "Guida completa che dettaglia i documenti da allegare a ogni richiesta relativa ad atti di stato civile e certificati amministrativi.",
      "Übergreifender Leitfaden mit den Unterlagen für jede Antragstellung zu Standesamtsakten und administrativen Bescheinigungen.",
      "Сводный справочник, детализирующий документы для каждого заявления по актам гражданского состояния и административным свидетельствам."
    ),
    where: W7(
      "مرجع يعرض عبر المواقع الرسمية، وتودع الطلبات بالملحقة الإدارية أو مصلحة الحالة المدنية.",
      "Référence publiée sur les sites officiels, tandis que les demandes sont déposées à l'annexe administrative ou au service d'état civil.",
      "Reference published on official websites, while requests are filed at the administrative annex or the civil registry.",
      "Referencia publicada en los sitios oficiales, mientras las solicitudes se presentan en el anexo administrativo o el registro civil.",
      "Riferimento pubblicato sui siti ufficiali, mentre le richieste si presentano all'anesso amministrativo o all'ufficio di stato civile.",
      "Referenz auf offiziellen Websites veröffentlicht; Anträge werden in der Verwaltungsannexe oder im Standesamt eingereicht.",
      "Справочник публикуется на официальных сайтах; заявления подаются в административный анекс или ЗАГС."
    ),
    authority: "interieur",
    keywords: ["الوثائق المطلوبة", "pièces requises", "required documents", "دليل", "وثائق إدارية"],
  },
  {
    id: "ijr-jawaz-murur-aabirin",
    cat: "ijraat",
    title: T7(
      "مسطرة تسليم جواز المرور للعابرين",
      "Procédure de délivrance du sauf-conduit aux voyageurs de passage",
      "Procedure for issuing the sauf-conduit to transit travellers",
      "Procedimiento de expedición del salvoconducto a viajeros en tránsito",
      "Procedura di rilascio del lasciapassare ai viaggiatori in transito",
      "Verfahren zur Ausstellung des Sauf-Conduit für Durchreisende",
      "Процедура выдачи проездного документа транзитным путешественникам"
    ),
    desc: D7(
      "مسطرة تسلم جواز مرور مؤقتاً للمسافر العابر الذي لا يحمل وثائق سفر سارية المفعول.",
      "Procédure délivrant un titre de passage provisoire au voyageur de transit dépourvu de documents de voyage valides.",
      "Procedure issuing a temporary travel document to a transit traveller holding no valid travel documents.",
      "Procedimiento que expide un título de paso provisional al viajero en tránsito que carece de documentos de viaje válidos.",
      "Procedura che rilascia un titolo di passaggio provvisorio al viaggiatore in transito privo di documenti di viaggio validi.",
      "Verfahren, das einen vorübergehenden Passierschein an Reisende ohne gültige Reisedokumente ausstellt.",
      "Процедура выдаёт временный проездной документ транзитному пассажиру, не имеющему действительных проездных документов."
    ),
    where: W7(
      "مصالح السلطة الإدارية أو الشرطة الحدودية بمعابر الدخول إلى المغرب.",
      "Services de l'autorité administrative ou de la police aux frontières aux points d'entrée au Maroc.",
      "Administrative authority or border police services at Morocco's points of entry.",
      "Servicios de la autoridad administrativa o policía fronteriza en los puntos de entrada a Marruecos.",
      "Servizi dell'autorità amministrativa o polizia di frontiera nei punti di ingresso in Marocco.",
      "Dienststellen der Verwaltungsbehörde oder Grenzpolizei an den Einreiseorten Marokkos.",
      "Службы административной власти или пограничной полиции в пунктах въезда в Марокко."
    ),
    authority: "interieur",
    keywords: ["جواز المرور", "sauf-conduit", "transit pass", "العابرون", "معبر الحدود"],
  },
  {
    id: "ijr-bitaq-iqama-ajanib",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على بطاقة الإقامة للأجانب",
      "Procédure d'obtention de la carte de séjour pour les étrangers",
      "Procedure for obtaining a residence permit for foreigners",
      "Procedimiento de obtención de la tarjeta de residencia para extranjeros",
      "Procedura di ottenimento del permesso di soggiorno per stranieri",
      "Verfahren zur Beantragung der Aufenthaltserlaubnis für Ausländer",
      "Процедура получения вида на жительство для иностранцев"
    ),
    desc: D7(
      "مسطرة تحدد وثائق طلب بطاقة الإقامة الأولى وتجديدها للأجانب المقيمين بالمغرب فوق ثلاثة أشهر.",
      "Procédure fixant les pièces de la première demande de carte de séjour et de son renouvellement pour les étrangers séjournant au Maroc.",
      "Procedure setting the documents for a first residence permit application and its renewal for foreigners staying in Morocco.",
      "Procedimiento que fija los documentos de la primera solicitud de residencia y su renovación para extranjeros que permanecen en Marruecos.",
      "Procedura che stabilisce i documenti per la prima richiesta di permesso di soggiorno e il suo rinnovo per gli stranieri in Marocco.",
      "Verfahren mit den Unterlagen für Erstantrag und Verlängerung der Aufenthaltserlaubnis für in Marokko verweilende Ausländer.",
      "Процедура определяет документы для первичного заявления на вид на жительство и его продление для иностранцев в Марокко."
    ),
    where: W7(
      "مصلحة الأجانب بولاية الأمن التابعة لمحل إقامة الأجنبي داخل المغرب.",
      "Service des étrangers de la wilaya de sécurité du lieu de résidence de l'étranger au Maroc.",
      "Aliens service of the security wilaya covering the foreigner's place of residence in Morocco.",
      "Servicio de extranjeros de la wilaya de seguridad del lugar de residencia del extranjero en Marruecos.",
      "Servizio stranieri della wilaya di sicurezza del luogo di residenza dello straniero in Marocco.",
      "Ausländerdienst der Sicherheits-Wilaya am Wohnort des Ausländers in Marokko.",
      "Служба по делам иностранцев при вилае безопасности по месту проживания иностранца в Марокко."
    ),
    authority: "interieur",
    keywords: ["بطاقة الإقامة", "carte de séjour", "residence permit", "الأجانب", "wilaya"],
  },
  {
    id: "ijr-lawaih-intikhabiya",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل في اللوائح الانتخابية",
      "Procédure d'inscription sur les listes électorales",
      "Procedure for registering on the electoral rolls",
      "Procedimiento de inscripción en las listas electorales",
      "Procedura di iscrizione nelle liste elettorali",
      "Verfahren zur Eintragung in die Wählerlisten",
      "Процедура регистрации в избирательных списках"
    ),
    desc: D7(
      "مسطرة تمكن المواطن البالغ سن التصويت من التسجيل باللوائح الانتخابية العامة لمحل إقامته.",
      "Procédure permettant à tout citoyen majeur de s'inscrire sur les listes électorales générales de sa commune de résidence.",
      "Procedure enabling any adult citizen to register on the general electoral rolls of their commune of residence.",
      "Procedimiento que permite a todo ciudadano mayor de edad inscribirse en las listas electorales de su comuna de residencia.",
      "Procedura che consente a ogni cittadino maggiorenne di iscriversi nelle liste elettorali generali del suo comune di residenza.",
      "Verfahren, das volljährigen Bürgern die Eintragung in die allgemeinen Wählerlisten ihrer Wohnortgemeinde ermöglicht.",
      "Процедура позволяет совершеннолетнему гражданину зарегистрироваться в общих избирательных списках своей коммуны проживания."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة التابعة لمحل الإقامة خلال دورات المراجعة السنوية.",
      "Annexe administrative ou caïdat du lieu de résidence, durant les campagnes annuelles de révision des listes.",
      "Administrative annex or caïdat of the place of residence, during the annual list revision campaigns.",
      "Anexo administrativo o caïdat de residencia, durante las campañas anuales de revisión de las listas.",
      "Annesso amministrativo o caïdat di residenza, durante le campagne annue di revisione delle liste.",
      "Verwaltungsannexe oder Caïdat am Wohnort während der jährlichen Revision der Wählerlisten.",
      "Административный анекс или каидат по месту жительства в периоды ежегодного пересмотра списков."
    ),
    authority: "interieur",
    keywords: ["اللوائح الانتخابية", "listes électorales", "electoral rolls", "التسجيل", "الانتخابات"],
  },

  // ─── Passeport et Marocains du monde ───
  {
    id: "ijr-jawaz-qasir-12-barraniya",
    cat: "ijraat",
    title: T7(
      "مسطرة جواز السفر للقاصرين من 12 سنة فما فوق المقيمين بالخارج",
      "Procédure de passeport pour les mineurs de 12 ans et plus résidant à l'étranger",
      "Passport procedure for minors aged 12+ residing abroad",
      "Procedimiento de pasaporte para menores de 12 años y más residentes en el extranjero",
      "Procedura di passaporto per i minori di 12 anni e più residenti all'estero",
      "Passverfahren für Minderjährige ab 12 Jahren mit Wohnsitz im Ausland",
      "Процедура получения паспорта для несовершеннолетних от 12 лет, проживающих за границей"
    ),
    desc: D7(
      "مسطرة توضح الوثائق والخطوات اللازمة لإصدار جواز السفر لقاصر مقيم بالخارج عبر القنصليات.",
      "Procédure détaillant les pièces et étapes requises pour délivrer un passeport à un mineur résidant à l'étranger via les consulats.",
      "Procedure detailing the documents and steps to issue a passport for a minor residing abroad through the consulates.",
      "Procedimiento que detalla los documentos y pasos para emitir un pasaporte a un menor residente en el extranjero a través de los consulados.",
      "Procedura che dettaglia i documenti e i passi per rilasciare un passaporto a un minore residente all'estero tramite i consolati.",
      "Verfahren mit den Unterlagen und Schritten zur Passausstellung für im Ausland lebende Minderjährige über die Konsulate.",
      "Процедура с перечнем документов и шагов для выдачи паспорта несовершеннолетнему за границей через консульства."
    ),
    where: W7(
      "القنصلية المغربية بمحل إقامة القاصر أو منصة consulat.ma",
      "Consulat du Maroc du lieu de résidence du mineur ou portail consulat.ma",
      "Moroccan consulate of the minor's residence or the consulat.ma portal",
      "Consulado de Marruecos del lugar de residencia o portal consulat.ma",
      "Consolato del Marocco del luogo di residenza o portale consulat.ma",
      "Marokkanisches Konsulat am Wohnort oder Portal consulat.ma",
      "Марокканское консульство по месту жительства или портал consulat.ma"
    ),
    authority: "consulat",
    keywords: ["جواز السفر", "قاصر", "passeport mineur", "passport minor", "قنصلية", "consulat"],
    popular: true,
  },
  {
    id: "ijr-jawaz-adij-ajal",
    cat: "ijraat",
    title: T7(
      "مسطرة جواز السفر العادي (الآجال والرسوم)",
      "Procédure du passeport ordinaire : délais et frais",
      "Ordinary passport procedure: processing times and fees",
      "Procedimiento del pasaporte ordinario: plazos y tasas",
      "Procedura del passaporto ordinario: tempi e tariffe",
      "Verfahren für den ordentlichen Reisepass: Fristen und Gebühren",
      "Процедура получения обычного паспорта: сроки и сборы"
    ),
    desc: D7(
      "دليل يفصل آجال تسليم جواز السفر العادي ورسومه حسب مدة الصلاحية المختارة.",
      "Guide détaillant les délais de délivrance du passeport ordinaire et ses droits selon la durée de validité choisie.",
      "Guide detailing the delivery times of the ordinary passport and its fees according to the chosen validity period.",
      "Guía que detalla los plazos de entrega del pasaporte ordinario y sus tasas según la validez elegida.",
      "Guida che dettaglia i tempi di consegna del passaporto ordinario e le tariffe secondo la validità scelta.",
      "Leitfaden zu Lieferfristen und Gebühren des ordentlichen Passes je nach gewählter Gültigkeitsdauer.",
      "Справочник о сроках выдачи обычного паспорта и сборах в зависимости от выбранного срока действия."
    ),
    where: W7(
      "مراكز تسليم الجوازات بعد الحجز المسبق عبر البوابة الرسمية passeport.ma.",
      "Centres de livraison des passeports après rendez-vous pris sur le portail officiel passeport.ma.",
      "Passport delivery centres after booking through the official portal passeport.ma.",
      "Centros de entrega de pasaportes tras la cita en el portal oficial passeport.ma.",
      "Centri di consegna dei passaporti dopo la prenotazione sul portale ufficiale passeport.ma.",
      "Passausgabestellen nach Terminbuchung über das offizielle Portal passeport.ma.",
      "Центры выдачи паспортов после записи на официальном портале passeport.ma."
    ),
    authority: "passeport",
    keywords: ["جواز السفر العادي", "آجال", "رسوم", "passeport ordinaire", "délais", "frais"],
  },
  {
    id: "ijr-jawaz-istiijali",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على جواز السفر الاستعجالي",
      "Procédure d'obtention du passeport urgent",
      "Procedure for obtaining the urgent passport",
      "Procedimiento de obtención del pasaporte urgente",
      "Procedura di ottenimento del passaporto urgente",
      "Verfahren zur Beantragung des Express-Passes",
      "Процедура получения срочного паспорта"
    ),
    desc: D7(
      "مسطرة توضح وثائق ملف الجواز الاستعجالي والرسوم الإضافية وآجال التسليم المقلصة.",
      "Procédure précisant les pièces du dossier urgent, les surtaxes applicables et les délais de délivrance réduits.",
      "Procedure clarifying the urgent file's documents, the additional fees and the shortened delivery times.",
      "Procedimiento que precisa los documentos del expediente urgente, las tasas adicionales y los plazos reducidos de entrega.",
      "Procedura che precisa i documenti del fascicolo urgente, le maggiorazioni e i tempi di consegna ridotti.",
      "Verfahren zu den Unterlagen des Express-Antrags, den anfallenden Zusatzgebühren und den verkürzten Lieferfristen.",
      "Процедура разъясняет документы срочного досье, дополнительные сборы и сокращённые сроки выдачи паспорта."
    ),
    where: W7(
      "مراكز تسليم الجوازات عبر البوابة passeport.ma مع ما يثبت حالة الاستعجال.",
      "Centres de livraison via passeport.ma, avec justificatif de l'urgence.",
      "Passport delivery centres via passeport.ma, with proof of the urgency.",
      "Centros de entrega vía passeport.ma, con justificante de la urgencia.",
      "Centri di consegna via passeport.ma, con prova dell'urgenza.",
      "Ausgabestellen über passeport.ma mit Nachweis der Dringlichkeit.",
      "Центры выдачи через passeport.ma с подтверждением срочности."
    ),
    authority: "passeport",
    keywords: ["جواز استعجالي", "passeport urgent", "urgent passport", "استعجال", "رسوم إضافية"],
    popular: true,
  },
  {
    id: "ijr-jawaz-qunsuliya",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على جواز السفر من القنصلية",
      "Procédure d'obtention du passeport auprès du consulat",
      "Procedure for obtaining a passport through the consulate",
      "Procedimiento de obtención del pasaporte en el consulado",
      "Procedura di ottenimento del passaporto presso il consolato",
      "Verfahren zur Passbeantragung beim Konsulat",
      "Процедура получения паспорта через консульство"
    ),
    desc: D7(
      "دليل يشرح خطوات إيداع طلب جواز السفر بالمركز القنصلي لمحل إقامة المغربي بالخارج.",
      "Guide expliquant les étapes de dépôt de la demande de passeport au consulat de résidence du Marocain à l'étranger.",
      "Guide explaining the steps for filing the passport application at the consulate of the Moroccan resident abroad.",
      "Guía que explica los pasos para presentar la solicitud de pasaporte en el consulado de residencia del marroquí en el extranjero.",
      "Guida che spiega i passi per presentare la domanda di passaporto al consolato di residenza del marocchino all'estero.",
      "Leitfaden zu den Schritten der Passbeantragung beim Konsulat des im Ausland lebenden Marokkaners.",
      "Справочник об этапах подачи заявления на паспорт в консульстве по месту проживания марокканца за границей."
    ),
    where: W7(
      "القنصلية المغربية بمحل الإقامة أو بوابة المواعيد القنصلية consulat.ma.",
      "Consulat du Maroc du lieu de résidence ou portail de rendez-vous consulat.ma.",
      "Moroccan consulate of the place of residence or the consulat.ma booking portal.",
      "Consulado de Marruecos de residencia o portal de citas consulat.ma.",
      "Consolato del Marocco di residenza o portale di appuntamenti consulat.ma.",
      "Marokkanisches Konsulat am Wohnort oder Terminportal consulat.ma.",
      "Марокканское консульство по месту жительства или портал записи consulat.ma."
    ),
    authority: "consulat",
    keywords: ["جواز السفر", "قنصلية", "passeport consulat", "consular passport", "MRE"],
  },
  {
    id: "ijr-jawaz-mafqud",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج بدل جواز السفر المفقود",
      "Procédure d'obtention d'un duplicata du passeport perdu",
      "Procedure for obtaining a duplicate of a lost passport",
      "Procedimiento de obtención de un duplicado del pasaporte perdido",
      "Procedura di ottenimento di un duplicato del passaporto smarrito",
      "Verfahren zur Beantragung eines Ersatzpasses bei Verlust",
      "Процедура получения дубликата утерянного паспорта"
    ),
    desc: D7(
      "خطوات التصريح بضياع الجواز ثم إيداع ملف بدل جديد بمراكز التسليم أو القنصليات.",
      "Étapes de la déclaration de perte puis du dépôt du dossier de duplicata dans les centres de livraison ou les consulats.",
      "Steps to declare the loss then file the duplicate application at the delivery centres or the consulates concerned.",
      "Pasos para declarar la pérdida y luego presentar el expediente de duplicado en los centros de entrega o consulados.",
      "Passi per dichiarare lo smarrimento e poi presentare il fascicolo di duplicato nei centri di consegna o consolati.",
      "Schritte zur Verlustmeldung und anschließender Duplikatsbeantragung in den Ausgabestellen oder Konsulaten.",
      "Шаги заявления об утере и последующей подачи дела на дубликат в центрах выдачи или консульствах."
    ),
    where: W7(
      "تصريح بالضياع لدى الشرطة أو الدرك الملكي، ثم مركز الجوازات أو القنصلية.",
      "Déclaration de perte auprès de la police ou de la Gendarmerie royale, puis centre des passeports ou consulat.",
      "Loss declaration at the police or Royal Gendarmerie, then the passport centre or consulate.",
      "Declaración de pérdida ante la policía o la Gendarmería Real, luego el centro de pasaportes o consulado.",
      "Dichiarazione di smarrimento alla polizia o Gendarmeria reale, poi centro passaporti o consolato.",
      "Verlustanzeige bei Polizei oder Königlicher Gendarmerie, danach Passstelle oder Konsulat.",
      "Заявление об утере в полиции или королевской жандармерии, затем центр паспортов или консульство."
    ),
    authority: "passeport",
    keywords: ["فقدان جواز السفر", "بدل مفقود", "passeport perdu", "lost passport", "تصريح بالضياع"],
  },
  {
    id: "ijr-jawaz-qasirin-bilmaghrib",
    cat: "ijraat",
    title: T7(
      "مسطرة جواز السفر للقاصرين المقيمين بالمغرب",
      "Procédure de passeport pour les mineurs résidant au Maroc",
      "Passport procedure for minors residing in Morocco",
      "Procedimiento de pasaporte para menores residentes en Marruecos",
      "Procedura di passaporto per i minorenni residenti in Marocco",
      "Passverfahren für in Marokko lebende Minderjährige",
      "Процедура получения паспорта для несовершеннолетних, проживающих в Марокко"
    ),
    desc: D7(
      "مسطرة تبين وثائق ملف جواز سفر القاصر بموافقة ممثله القانوني وحضوره عند الإيداع.",
      "Procédure précisant les pièces du dossier de passeport du mineur, avec l'accord et la présence du représentant légal au dépôt.",
      "Procedure setting out the minor's passport file documents, with the legal representative's consent and presence at filing.",
      "Procedimiento que precisa los documentos del expediente de pasaporte del menor, con consentimiento y presencia del representante legal.",
      "Procedura che precisa i documenti del fascicolo di passaporto del minore, con consenso e presenza del rappresentante legale.",
      "Verfahren zu den Unterlagen des Kinderpass-Antrags mit Einwilligung und Anwesenheit des gesetzlichen Vertreters.",
      "Процедура определяет документы дела на паспорт несовершеннолетнего с согласием и присутствием законного представителя при подаче."
    ),
    where: W7(
      "مراكز تسليم الجوازات بعد الحجز عبر passeport.ma بحضور الوالد أو الوصي.",
      "Centres de livraison après rendez-vous sur passeport.ma, en présence du parent ou du tuteur.",
      "Delivery centres after booking on passeport.ma, with the parent or guardian present.",
      "Centros de entrega tras cita en passeport.ma, con presencia del progenitor o tutor.",
      "Centri di consegna dopo prenotazione su passeport.ma, con la presenza del genitore o tutore.",
      "Ausgabestellen nach Buchung über passeport.ma unter Anwesenheit des Elternteils oder Vormunds.",
      "Центры выдачи после записи через passeport.ma в присутствии родителя или опекуна."
    ),
    authority: "passeport",
    keywords: ["جواز سفر قاصر", "passeport mineur", "minor passport", "موافقة الوالدين", "الوصي"],
  },
  {
    id: "ijr-tashira-awda",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على تأشيرة العودة",
      "Procédure d'obtention du visa de retour",
      "Procedure for obtaining the return visa",
      "Procedimiento de obtención del visado de retorno",
      "Procedura di ottenimento del visto di ritorno",
      "Verfahren zur Beantragung des Rückkehrvisums",
      "Процедура получения обратной визы"
    ),
    desc: D7(
      "مسطرة تخص المغاربة المقيمين بالخارج الفاقدين لوثائق السفر لتأمين عودتهم النهائية إلى المغرب.",
      "Procédure destinée aux Marocains de l'étranger dépourvus de documents de voyage afin de sécuriser leur retour définitif au Maroc.",
      "Procedure for Moroccans abroad lacking travel documents to secure their definitive return to Morocco.",
      "Procedimiento para marroquíes en el extranjero sin documentos de viaje, a fin de asegurar su regreso definitivo a Marruecos.",
      "Procedura per i marocchini all'estero privi di documenti di viaggio, per garantire il loro rientro definitivo in Marocco.",
      "Verfahren für Marokkaner im Ausland ohne Reisedokumente zur Sicherung ihrer endgültigen Rückkehr nach Marokko.",
      "Процедура для марокканцев за границей без проездных документов для обеспечения их окончательного возвращения в Марокко."
    ),
    where: W7(
      "القنصلية المغربية بمحل الإقامة بعد التحقق من الجنسية وفق مسطرة consulat.ma.",
      "Consulat du Maroc du lieu de résidence, après vérification de la nationalité selon la procédure consulat.ma.",
      "Moroccan consulate of the place of residence, after nationality verification under the consulat.ma procedure.",
      "Consulado de Marruecos de residencia, previa verificación de la nacionalidad según el procedimiento de consulat.ma.",
      "Consolato del Marocco di residenza, dopo verifica della cittadinanza secondo la procedura consulat.ma.",
      "Marokkanisches Konsulat am Wohnort nach Prüfung der Staatsangehörigkeit gemäß consulat.ma.",
      "Марокканское консульство по месту жительства после проверки гражданства согласно процедуре consulat.ma."
    ),
    authority: "consulat",
    keywords: ["تأشيرة العودة", "visa de retour", "return visa", "MRE", "القنصلية"],
  },
  {
    id: "ijr-rukhsa-dhihab",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على رخصة ذهاب للمغربي المتخذ ضده إجراء الإبعاد",
      "Procédure d'obtention d'un permis de départ pour le Marocain visé par une mesure d'expulsion",
      "Procedure for a departure permit for a Moroccan covered by an expulsion measure",
      "Procedimiento de permiso de salida para el marroquí afectado por una medida de expulsión",
      "Procedura di permesso di partenza per il marocchino oggetto di un provvedimento di espulsione",
      "Verfahren zur Ausreiseerlaubnis für einen von Ausweisung bedrohten Marokkaner",
      "Процедура получения разрешения на выезд для марокканца, в отношении которого принято решение о выдворении"
    ),
    desc: D7(
      "مسطرة تمكن المغربي المقرر إبعاده من مغادرة بلد الإقامة في إطار وثيقة رسمية تسلمها القنصلية.",
      "Procédure permettant au Marocain visé par une expulsion de quitter le pays de résidence muni d'un titre officiel du consulat.",
      "Procedure allowing the Moroccan under an expulsion order to leave the country of residence under an official document from the consulate.",
      "Procedimiento que permite al marroquí sujeto a expulsión salir del país de residencia con un documento oficial del consulado.",
      "Procedura che consente al marocchino oggetto di espulsione di lasciare il paese di residenza con un titolo ufficiale del consolato.",
      "Verfahren, das dem von Ausweisung betroffenen Marokkaner die Ausreise mit einem offiziellen Dokument des Konsulats ermöglicht.",
      "Процедура позволяет марокканцу, подлежащему выдворению, покинуть страну проживания по официальному документу консульства."
    ),
    where: W7(
      "القنصلية المغربية ببلد الإقامة بالتنسيق مع السلطات المحلية المختصة.",
      "Consulat du Maroc dans le pays de résidence, en coordination avec les autorités locales compétentes.",
      "Moroccan consulate in the country of residence, in coordination with the competent local authorities.",
      "Consulado de Marruecos en el país de residencia, en coordinación con las autoridades locales competentes.",
      "Consolato del Marocco nel paese di residenza, in coordinamento con le autorità locali competenti.",
      "Marokkanisches Konsulat im Aufenthaltsland, koordiniert mit den zuständigen lokalen Behörden.",
      "Марокканское консульство в стране проживания в координации с компетентными местными властями."
    ),
    authority: "consulat",
    keywords: ["رخصة ذهاب", "permis de départ", "expulsion", "الإبعاد", "القنصلية"],
  },
  {
    id: "ijr-tashir-sayarat",
    cat: "ijraat",
    title: T7(
      "مسطرة تعشير السيارات المرقمة بالخارج (القبول المؤقت)",
      "Procédure d'admission temporaire des véhicules immatriculés à l'étranger",
      "Procedure for the temporary admission of foreign-registered vehicles",
      "Procedimiento de admisión temporal de vehículos matriculados en el extranjero",
      "Procedura di ammissione temporanea dei veicoli immatricolati all'estero",
      "Verfahren der vorübergehenden Einfuhr im Ausland zugelassener Fahrzeuge",
      "Процедура временного ввоза автомобилей на иностранной регистрации"
    ),
    desc: D7(
      "مسطرة جمركية تسمح بإدخال مركبة مرقمة بالخارج إلى التراب الوطني مؤقتاً مع ضمانات محددة.",
      "Procédure douanière autorisant l'entrée au Maroc d'un véhicule immatriculé à l'étranger à titre temporaire, sous garanties définies.",
      "Customs procedure allowing a foreign-registered vehicle into Morocco temporarily, under defined customs guarantees.",
      "Procedimiento aduanero que permite la entrada a Marruecos de un vehículo matriculado en el extranjero a título temporal, con garantías definidas.",
      "Procedura doganale che consente l'ingresso in Marocco di un veicolo immatricolato all'estero a titolo temporaneo, con garanzie definite.",
      "Zollverfahren zur vorübergehenden Einfuhr eines ausländisch zugelassenen Fahrzeugs nach Marokko unter definierten Sicherheiten.",
      "Таможенная процедура допускает временный ввоз в Марокко автомобиля на иностранной регистрации под определённые гарантии."
    ),
    where: W7(
      "شبابيك الجمارك بمعبر الدخول (douane.gov.ma) مع أداء الضمانات الجمركية المطلوبة.",
      "Guichets douaniers du poste d'entrée (douane.gov.ma), avec versement des garanties douanières exigées.",
      "Customs counters at the entry point (douane.gov.ma), with payment of the required customs guarantees.",
      "Ventanillas de aduanas del puesto de entrada (douane.gov.ma), con pago de las garantías exigidas.",
      "Sportelli doganali del valico d'ingresso (douane.gov.ma), con versamento delle garanzie richieste.",
      "Zollschalter am Einreiseort (douane.gov.ma) unter Leistung der verlangten Zollsicherheiten.",
      "Таможенные окна в пункте въезда (douane.gov.ma) с внесением требуемых таможенных гарантий."
    ),
    authority: "douane",
    keywords: ["القبول المؤقت", "تعشير", "admission temporaire", "سيارة مرقمة بالخارج", "douane"],
  },
  {
    id: "ijr-cin-qunsuliya",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج البطاقة الوطنية للمغاربة المقيمين بالخارج",
      "Procédure d'obtention de la CIN pour les Marocains résidant à l'étranger",
      "Procedure for obtaining the ID card for Moroccans residing abroad",
      "Procedimiento de obtención del DNI para marroquíes residentes en el extranjero",
      "Procedura di ottenimento della CIN per i marocchini residenti all'estero",
      "Verfahren zur Beantragung des Personalausweises für im Ausland lebende Marokkaner",
      "Процедура получения удостоверения личности для марокканцев, проживающих за границей"
    ),
    desc: D7(
      "دليل يفصل وثائق استخراج البطاقة الوطنية أو تجديدها من المركز القنصلي لمحل الإقامة.",
      "Guide détaillant les pièces de la demande de CIN ou de son renouvellement auprès du consulat de résidence.",
      "Guide detailing the documents for an ID card application or renewal at the consulate of residence.",
      "Guía que detalla los documentos para solicitar o renovar el DNI en el consulado de residencia.",
      "Guida che dettaglia i documenti per la richiesta o il rinnovo della CIN presso il consolato di residenza.",
      "Leitfaden zu den Unterlagen für die Beantragung oder Erneuerung des Ausweises beim Konsulat des Wohnsitzes.",
      "Справочник о документах для получения или обмена удостоверения личности в консульстве по месту жительства."
    ),
    where: W7(
      "القنصلية المغربية بمحل الإقامة أو بوابة الخدمات القنصلية consulat.ma.",
      "Consulat du Maroc du lieu de résidence ou portail des services consulaires consulat.ma.",
      "Moroccan consulate of the place of residence or the consular services portal consulat.ma.",
      "Consulado de Marruecos de residencia o portal de servicios consulares consulat.ma.",
      "Consolato del Marocco di residenza o portale dei servizi consolari consulat.ma.",
      "Marokkanisches Konsulat am Wohnort oder Konsulardienstportal consulat.ma.",
      "Марокканское консульство по месту жительства или портал консульских услуг consulat.ma."
    ),
    authority: "consulat",
    keywords: ["البطاقة الوطنية", "MRE", "CIN consulat", "consular ID card", "قنصلية"],
  },
  {
    id: "ijr-tasjil-qunsuli",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل القنصلي للمغاربة المقيمين بالخارج",
      "Procédure d'inscription consulaire des Marocains résidant à l'étranger",
      "Consular registration procedure for Moroccans residing abroad",
      "Procedimiento de inscripción consular de los marroquíes residentes en el extranjero",
      "Procedura di iscrizione consolare per i marocchini residenti all'estero",
      "Konsularanmeldeverfahren für im Ausland lebende Marokkaner",
      "Процедура консульского учёта марокканцев, проживающих за границей"
    ),
    desc: D7(
      "مسطرة تسجل المغاربة بالخارج في سجلات قنصلياتهم لتمكينهم من الخدمات القنصلية والتتبع.",
      "Procédure inscrivant les Marocains à l'étranger sur les registres de leurs consulats pour leur ouvrir les services consulaires.",
      "Procedure enrolling Moroccans abroad on their consulates' registers to open consular services and follow-up to them.",
      "Procedimiento que inscribe a los marroquíes en el extranjero en los registros de sus consulados para acceder a los servicios consulares.",
      "Procedura che iscrive i marocchini all'estero nei registri dei loro consolati per accedere ai servizi consolari.",
      "Verfahren, das Marokkaner im Ausland in die Register ihrer Konsulate einträgt, um konsularische Dienste zu ermöglichen.",
      "Процедура вносит марокканцев за границей в реестры их консульств для доступа к консульским услугам."
    ),
    where: W7(
      "القنصلية المغربية بمحل الإقامة أو بوابة consulat.ma مع تجديد التسجيل دورياً.",
      "Consulat du Maroc du lieu de résidence ou portail consulat.ma, avec renouvellement périodique de l'inscription.",
      "Moroccan consulate of the place of residence or the consulat.ma portal, with periodic renewal of the registration.",
      "Consulado de Marruecos de residencia o portal consulat.ma, con renovación periódica de la inscripción.",
      "Consolato del Marocco di residenza o portale consulat.ma, con rinnovo periodico dell'iscrizione.",
      "Marokkanisches Konsulat am Wohnort oder Portal consulat.ma, mit periodischer Erneuerung der Anmeldung.",
      "Марокканское консульство по месту жительства или портал consulat.ma с периодическим продлением учёта."
    ),
    authority: "consulat",
    keywords: ["التسجيل القنصلي", "inscription consulaire", "consular registration", "MRE", "قنصلية"],
  },

  // ─── Registres sociaux et aides ───
  {
    id: "ijr-rsu-bab",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل في السجل الاجتماعي الموحد عبر البوابة",
      "Procédure d'inscription au Registre Social Unifié via le portail",
      "Procedure for enrolment in the Unified Social Registry via the portal",
      "Procedimiento de inscripción en el Registro Social Unificado por el portal",
      "Procedura di iscrizione al Registro Sociale Unificato tramite il portale",
      "Verfahren zur Registrierung im Vereinigten Sozialregister über das Portal",
      "Процедура регистрации в едином социальном реестре через портал"
    ),
    desc: D7(
      "خطوات إنشاء حساب وتسجيل الأسرة إلكترونياً في السجل الاجتماعي الموحد لاحتساب مؤشر الاستحقاق.",
      "Étapes de création d'un compte et d'enregistrement en ligne de la famille dans le RSU pour le calcul de l'indice de besoin.",
      "Steps to create an account and register the family online in the Unified Social Registry for computing the eligibility index.",
      "Pasos para crear una cuenta e inscribir en línea a la familia en el RSU para el cálculo del índice de necesidad.",
      "Passi per creare un conto e registrare online la famiglia nel RSU per il calcolo dell'indice di bisogno.",
      "Schritte zum Anlegen eines Kontos und zur Online-Registrierung der Familie im RSU zur Berechnung des Bedarfsindex.",
      "Шаги создания учётной записи и онлайн-регистрации семьи в едином социальном реестре для расчёта индекса нуждаемости."
    ),
    where: W7(
      "بوابة tadamon.ma، أو مراكز القرب والملحقات الإدارية لغير المرتبطين رقمياً.",
      "Portail tadamon.ma, ou centres de proximité et annexes administratives pour les personnes non connectées.",
      "The tadamon.ma portal, or proximity centres and administrative annexes for those without internet access.",
      "El portal tadamon.ma, o centros de proximidad y anexos administrativos para quienes no tienen conexión.",
      "Il portale tadamon.ma, oppure centri di prossimità e annessi amministrativi per chi non ha connessione.",
      "Portal tadamon.ma oder Anlaufstellen und Verwaltungsannexen für Menschen ohne Internetzugang.",
      "Портал tadamon.ma либо центры близости и административные анексы для не имеющих интернета."
    ),
    authority: "amotadamon",
    keywords: ["RSU", "السجل الاجتماعي الموحد", "tadamon", "registre social unifié", "التسجيل"],
    popular: true,
  },
  {
    id: "ijr-rsu-tahyin",
    cat: "ijraat",
    title: T7(
      "مسطرة تحيين معطيات الأسرة في السجل الاجتماعي الموحد",
      "Procédure de mise à jour des données familiales dans le RSU",
      "Procedure for updating family data in the Unified Social Registry",
      "Procedimiento de actualización de los datos familiares en el RSU",
      "Procedura di aggiornamento dei dati familiari nel RSU",
      "Verfahren zur Aktualisierung der Familiendaten im RSU",
      "Процедура обновления семейных данных в едином социальном реестре"
    ),
    desc: D7(
      "مسطرة تفرض تحيين وضعية الأسرة عند أي تغيير للحفاظ على دقة مؤشر الاستحقاق الاجتماعي.",
      "Procédure imposant la mise à jour de la situation familiale à chaque changement afin de préserver l'exactitude de l'indice.",
      "Procedure requiring the family situation to be updated upon any change to keep the eligibility index accurate.",
      "Procedimiento que exige actualizar la situación familiar ante cualquier cambio para mantener exacto el índice.",
      "Procedura che impone l'aggiornamento della situazione familiare a ogni cambiamento per mantenere accurato l'indice.",
      "Verfahren, das bei jeder Änderung eine Aktualisierung der Familiensituation verlangt, um den Index korrekt zu halten.",
      "Процедура требует обновлять семейное положение при любых изменениях для сохранения точности индекса."
    ),
    where: W7(
      "بوابة tadamon.ma أو مقرات الملحقات الإدارية والقيادات التابعة لمحل الإقامة.",
      "Portail tadamon.ma ou sièges des annexes administratives et caïdats du lieu de résidence.",
      "The tadamon.ma portal or the offices of the administrative annexes and caïdats of the place of residence.",
      "El portal tadamon.ma o las sedes de los anexos administrativos y caïdats de residencia.",
      "Il portale tadamon.ma o le sedi degli annessi amministrativi e caïdat di residenza.",
      "Portal tadamon.ma oder die Sitze der Verwaltungsannexen und Caïdats am Wohnort.",
      "Портал tadamon.ma либо помещения административных анексов и каидатов по месту жительства."
    ),
    authority: "amotadamon",
    keywords: ["تحيين", "RSU", "mise à jour RSU", "update RSU", "مؤشر الاستحقاق"],
  },
  {
    id: "ijr-talab-daam-ijtimaai",
    cat: "ijraat",
    title: T7(
      "مسطرة طلب مساعدة اجتماعية استثنائية",
      "Procédure de demande d'aide sociale exceptionnelle",
      "Procedure for requesting exceptional social assistance",
      "Procedimiento de solicitud de ayuda social excepcional",
      "Procedura di richiesta di aiuto sociale eccezionale",
      "Verfahren zur Beantragung außerordentlicher Sozialhilfe",
      "Процедура запроса чрезвычайной социальной помощи"
    ),
    desc: D7(
      "مسطرة ترفع فيها طلبات المساعدة إلى السلطات المحلية من طرف الأسر في وضعية هشاشة.",
      "Procédure par laquelle les ménages en situation de précarité adressent des demandes d'assistance aux autorités locales.",
      "Procedure by which households in situations of precarity address assistance requests to the local authorities.",
      "Procedimiento por el cual los hogares en situación de precariedad dirigen solicitudes de asistencia a las autoridades locales.",
      "Procedura con cui le famiglie in situazione di precarietà indirizzano richieste di assistenza alle autorità locali.",
      "Verfahren, bei dem Haushalte in prekärer Lage Unterstützungsanträge an die örtlichen Behörden richten.",
      "Процедура, при которой домохозяйства в состоянии уязвимости направляют запросы о помощи местным властям."
    ),
    where: W7(
      "مقر العمالة أو القيادة التابعة لمحل إقامة الأسرة مع وثائق إثبات الوضعية.",
      "Siège de la préfecture ou du caïdat du lieu de résidence de la famille, avec pièces justificatives de la situation.",
      "The prefecture or caïdat office of the family's place of residence, with documents proving the situation.",
      "Sede de la prefectura o caïdat del domicilio familiar, con documentos que acrediten la situación.",
      "Sede della prefettura o del caïdat di residenza della famiglia, con documenti che provano la situazione.",
      "Präfektur- oder Caïdat-Sitz am Wohnort der Familie, mit Nachweisen der Lage.",
      "Префектура или каидат по месту жительства семьи с документами, подтверждающими положение."
    ),
    keywords: ["مساعدة اجتماعية", "aide sociale", "social assistance", "هشاشة", "العمالة"],
  },
  {
    id: "ijr-rcar-tauai",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل الطوعي في RCAR",
      "Procédure d'affiliation volontaire à la RCAR",
      "Procedure for voluntary affiliation to the RCAR",
      "Procedimiento de afiliación voluntaria al RCAR",
      "Procedura di adesione volontaria alla RCAR",
      "Verfahren zum freiwilligen Beitritt zur RCAR",
      "Процедура добровольного вступления в RCAR"
    ),
    desc: D7(
      "خطوات انخراط المهنيين وغير الأجراء في صناديق التقاعد لتأمين معاشهم عند الشيخوخة.",
      "Étapes d'affiliation des professionnels et non-salariés à la caisse de retraite pour sécuriser leur pension de vieillesse.",
      "Steps for professionals and non-employees to join the pension fund to secure their old-age pension.",
      "Pasos para que profesionales y no asalariados se afilien a la caja de pensiones y aseguren su pensión de vejez.",
      "Passi per l'affiliazione di professionisti e non dipendenti alla cassa pensionistica per assicurare la pensione di vecchiaia.",
      "Schritte zum Beitritt von Selbstständigen und Freiberuflern zur Rentenkasse zur Sicherung ihrer Altersrente.",
      "Шаги вступления профессионалов и не-наёмных работников в пенсионный фонд для обеспечения пенсии по старости."
    ),
    where: W7(
      "وكالات RCAR أو الموقع الرسمي rcar.ma مع أداء الاشتراكات الشهرية.",
      "Agences RCAR ou site officiel rcar.ma, avec paiement des cotisations mensuelles.",
      "RCAR agencies or the official website rcar.ma, with payment of the monthly contributions.",
      "Agencias del RCAR o sitio oficial rcar.ma, con pago de las cotizaciones mensuales.",
      "Agenzie RCAR o sito ufficiale rcar.ma, con pagamento dei contributi mensili.",
      "RCAR-Stellen oder offizielle Website rcar.ma, mit Zahlung der monatlichen Beiträge.",
      "Агентства RCAR или официальный сайт rcar.ma с уплатой ежемесячных взносов."
    ),
    keywords: ["RCAR", "التقاعد", "retraite", "pension", "انخراط طوعي"],
  },
  {
    id: "ijr-shahada-qayd-rsu",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على شهادة القيد في السجل الاجتماعي الموحد",
      "Procédure d'obtention de l'attestation d'inscription au RSU",
      "Procedure for obtaining the RSU registration certificate",
      "Procedimiento de obtención del certificado de inscripción en el RSU",
      "Procedura di ottenimento dell'attestato di iscrizione al RSU",
      "Verfahren zur Beantragung der RSU-Registrierungsbescheinigung",
      "Процедура получения справки о регистрации в RSU"
    ),
    desc: D7(
      "مسطرة تمكن الأسرة من استخراج شهادة قيدها بالسجل الاجتماعي الموحد للاستعمالات الإدارية.",
      "Procédure permettant à la famille d'obtenir l'attestation de son inscription au RSU pour ses usages administratifs.",
      "Procedure allowing the family to obtain the certificate of its RSU registration for administrative uses.",
      "Procedimiento que permite a la familia obtener el certificado de su inscripción en el RSU para usos administrativos.",
      "Procedura che consente alla famiglia di ottenere l'attestato di iscrizione al RSU per gli usi amministrativi.",
      "Verfahren, das der Familie die Ausstellung der RSU-Registrierungsbescheinigung für ihre Verwaltungszwecke ermöglicht.",
      "Процедура позволяет семье получить справку о своей регистрации в RSU для административных надобностей."
    ),
    where: W7(
      "بوابة tadamon.ma أو مراكز القرب التابعة للجماعات الترابية.",
      "Portail tadamon.ma ou centres de proximité relevant des collectivités territoriales.",
      "The tadamon.ma portal or proximity centres run by the local authorities.",
      "El portal tadamon.ma o centros de proximidad dependientes de las colectividades territoriales.",
      "Il portale tadamon.ma o centri di prossimità dipendenti dagli enti territoriali.",
      "Portal tadamon.ma oder Anlaufstellen der Gebietskörperschaften.",
      "Портал tadamon.ma либо центры близости при территориальных коллективах."
    ),
    authority: "amotadamon",
    keywords: ["شهادة قيد", "RSU", "attestation RSU", "السجل الاجتماعي", "استخراج"],
  },
  {
    id: "ijr-tadamon-tahyin",
    cat: "ijraat",
    title: T7(
      "مسطرة تحديث بيانات ملف AMO تضامن",
      "Procédure de mise à jour des données du dossier AMO Tadamon",
      "Procedure for updating AMO Tadamon file data",
      "Procedimiento de actualización de los datos del expediente AMO Tadamon",
      "Procedura di aggiornamento dei dati del fascicolo AMO Tadamon",
      "Verfahren zur Aktualisierung der AMO-Tadamon-Akten",
      "Процедура обновления данных дела AMO Tadamon"
    ),
    desc: D7(
      "خطوات تحيين وضعية المستفيد من التغطية الصحية تضامن عند تغيير العنوان أو التركيبة العائلية.",
      "Étapes de mise à jour de la situation du bénéficiaire de la couverture Tadamon lors d'un changement d'adresse ou de composition familiale.",
      "Steps to update the Tadamon coverage beneficiary's situation upon a change of address or family composition.",
      "Pasos para actualizar la situación del beneficiario de la cobertura Tadamon ante un cambio de domicilio o composición familiar.",
      "Passi per aggiornare la situazione del beneficiario della copertura Tadamon in caso di cambio di indirizzo o composizione familiare.",
      "Schritte zur Aktualisierung der Situation des Tadamon-Berechtigten bei einem Wechsel der Adresse oder der Familienzusammensetzung.",
      "Шаги обновления данных получателя покрытия Tadamon при смене адреса или семейного состава."
    ),
    where: W7(
      "بوابة amotadamon.ma أو وكالات CNSS المكلفة بتتبع ملفات تضامن.",
      "Portail amotadamon.ma ou agences CNSS chargées du suivi des dossiers Tadamon.",
      "The amotadamon.ma portal or CNSS agencies in charge of monitoring Tadamon files.",
      "El portal amotadamon.ma o agencias del CNSS encargadas del seguimiento de los expedientes Tadamon.",
      "Il portale amotadamon.ma o agenzie CNSS incaricate del monitoraggio dei fascicoli Tadamon.",
      "Portal amotadamon.ma oder CNSS-Stellen, die die Tadamon-Akten betreuen.",
      "Портал amotadamon.ma либо агентства CNSS, ведущие дела Tadamon."
    ),
    authority: "amotadamon",
    keywords: ["AMO تضامن", "تحديث", "AMO Tadamon", "mise à jour", "التغطية الصحية"],
  },
  {
    id: "ijr-tadamon-tawidat",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على تعويضات AMO تضامن",
      "Procédure d'obtention des remboursements AMO Tadamon",
      "Procedure for obtaining AMO Tadamon reimbursements",
      "Procedimiento de obtención de reembolsos AMO Tadamon",
      "Procedura di ottenimento dei rimborsi AMO Tadamon",
      "Verfahren zur Erstattung von AMO-Tadamon-Leistungen",
      "Процедура получения возмещений AMO Tadamon"
    ),
    desc: D7(
      "مسطرة توضح كيفية طلب استرجاع مصاريف العلاج للمستفيدين من التغطية الصحية تضامن.",
      "Procédure expliquant comment demander le remboursement des frais de soins pour les bénéficiaires de la couverture Tadamon.",
      "Procedure explaining how to claim reimbursement of treatment costs for the beneficiaries of the Tadamon health coverage.",
      "Procedimiento que explica cómo pedir el reembolso de los gastos de tratamiento a los beneficiarios de la cobertura Tadamon.",
      "Procedura che spiega come chiedere il rimborso delle spese di cura ai beneficiari della copertura Tadamon.",
      "Verfahren, das erklärt, wie Leistungsnehmer der Tadamon-Deckung Erstattungen der Behandlungskosten beantragen.",
      "Процедура разъясняет, как запросить возмещение расходов на лечение по программе покрытия Tadamon."
    ),
    where: W7(
      "وكالات CNSS أو منصة macnss.ma بعد إرفاق الفواتير والوصفات الطبية.",
      "Agences CNSS ou plateforme macnss.ma, après avoir joint les factures et les ordonnances.",
      "CNSS agencies or the macnss.ma platform, after attaching the invoices and prescriptions.",
      "Agencias del CNSS o plataforma macnss.ma, tras adjuntar facturas y recetas.",
      "Agenzie CNSS o piattaforma macnss.ma, dopo aver allegato le fatture e le ricette.",
      "CNSS-Stellen oder Plattform macnss.ma nach Beifügen der Rechnungen und Rezepte.",
      "Агентства CNSS или платформа macnss.ma после приложения счетов и рецептов."
    ),
    authority: "cnss",
    keywords: ["تعويضات", "تضامن", "remboursement", "reimbursement", "AMO"],
  },
  {
    id: "ijr-chikaya-tatabu",
    cat: "ijraat",
    title: T7(
      "مسطرة تتبع الشكاية عبر منصة chikaya.ma",
      "Procédure de suivi des réclamations via le portail chikaya.ma",
      "Procedure for tracking complaints via the chikaya.ma portal",
      "Procedimiento de seguimiento de reclamaciones por el portal chikaya.ma",
      "Procedura di tracciamento dei reclami tramite il portale chikaya.ma",
      "Verfahren zur Verfolgung von Beschwerden über das Portal chikaya.ma",
      "Процедура отслеживания жалоб через портал chikaya.ma"
    ),
    desc: D7(
      "خطوات إيداع الشكاية إلكترونياً وتتبع معالجتها والرد عليها من الإدارات المعنية.",
      "Étapes du dépôt en ligne de la réclamation, du suivi de son traitement et de la réponse des administrations concernées.",
      "Steps for filing the complaint online, tracking its processing and receiving the answer of the administrations concerned.",
      "Pasos para presentar la reclamación en línea, seguir su tramitación y recibir respuesta de las administraciones competentes.",
      "Passi per presentare online il reclamo, seguirne la lavorazione e ricevere risposta dalle amministrazioni competenti.",
      "Schritte zur Online-Einreichung der Beschwerde, zur Verfolgung ihrer Bearbeitung und zur Antwort der zuständigen Behörden.",
      "Шаги подачи жалобы онлайн, отслеживания её обработки и получения ответа от компетентных ведомств."
    ),
    where: W7(
      "بوابة الشكايات الوطنية chikaya.ma بعد إنشاء حساب واستعمال رقم التتبع.",
      "Portail national des réclamations chikaya.ma, après création d'un compte et usage du numéro de suivi.",
      "The national complaints portal chikaya.ma, after creating an account and using the tracking number.",
      "El portal nacional de reclamaciones chikaya.ma, tras crear una cuenta y usar el número de seguimiento.",
      "Portale nazionale dei reclami chikaya.ma, previa creazione di un account e uso del numero di tracciamento.",
      "Nationales Beschwerdeportal chikaya.ma nach Kontoerstellung und Nutzung der Verfolgungsnummer.",
      "Национальный портал жалоб chikaya.ma после создания учётной записи и использования номера отслеживания."
    ),
    authority: "chikaya",
    keywords: ["chikaya", "شكاية", "réclamation", "complaint tracking", "تتبع"],
  },
  {
    id: "ijr-amo-raqami",
    cat: "ijraat",
    title: T7(
      "المسطرة الرقمية للتغطية الصحية الإجبارية عبر macnss.ma",
      "Procédure numérique de la couverture sanitaire obligatoire via macnss.ma",
      "Digital procedure for mandatory health coverage via macnss.ma",
      "Procedimiento digital de la cobertura sanitaria obligatoria vía macnss.ma",
      "Procedura digitale della copertura sanitaria obbligatoria via macnss.ma",
      "Digitales Verfahren der obligatorischen Krankenversicherung über macnss.ma",
      "Цифровая процедура обязательного медицинского страхования через macnss.ma"
    ),
    desc: D7(
      "مسطرة رقمية تهدف إلى تعميم التغطية الصحية على غير المرتبطين عبر التسجيل وأداء الاشتراكات إلكترونياً.",
      "Procédure numérique visant à généraliser la couverture santé aux non-salariés via l'inscription et le paiement des cotisations en ligne.",
      "Digital procedure aiming to extend health coverage to non-salaried workers through online enrolment and contribution payments.",
      "Procedimiento digital que busca generalizar la cobertura sanitaria a los no asalariados mediante inscripción y pago de cotizaciones en línea.",
      "Procedura digitale che intende generalizzare la copertura sanitaria ai non dipendenti tramite iscrizione e pagamento dei contributi online.",
      "Digitales Verfahren, das die Krankenversicherung auf Nichtangestellte über Online-Anmeldung und Beitragszahlung ausweiten soll.",
      "Цифровая процедура направлена на распространение медстрахования на не-наёмных работников через онлайн-регистрацию и уплату взносов."
    ),
    where: W7(
      "منصة macnss.ma أو وكالات CNSS لمساعدة غير المرتبطين رقمياً.",
      "Plateforme macnss.ma ou agences CNSS pour accompagner les personnes non connectées.",
      "The macnss.ma platform or CNSS agencies to support people who are not connected.",
      "La plataforma macnss.ma o agencias del CNSS para acompañar a las personas sin conexión.",
      "La piattaforma macnss.ma o agenzie CNSS per assistere chi non è connesso.",
      "Plattform macnss.ma oder CNSS-Stellen zur Unterstützung von Nutzern ohne Internetzugang.",
      "Платформа macnss.ma или агентства CNSS для поддержки людей без интернета."
    ),
    authority: "macnss",
    keywords: ["AMO رقمية", "macnss", "التغطية الصحية", "couverture santé", "AMO digitale"],
  },
  {
    id: "ijr-itarad-muashir",
    cat: "ijraat",
    title: T7(
      "مسطرة الاعتراض على مؤشر الاستحقاق الاجتماعي",
      "Procédure de contestation de l'indice de besoin social",
      "Procedure for contesting the social need index",
      "Procedimiento de impugnación del índice de necesidad social",
      "Procedura di contestazione dell'indice di bisogno sociale",
      "Verfahren zur Anfechtung des Sozialbedarfsindex",
      "Процедура обжалования индекса социальной нуждаемости"
    ),
    desc: D7(
      "مسطرة تمكن الأسرة من طلب مراجعة مؤشر استحقاقها المسجل عند اعتباره غير دقيق.",
      "Procédure permettant à la famille de demander la révision de son indice enregistré lorsqu'elle l'estime inexact.",
      "Procedure allowing the family to request a revision of its recorded index when it is considered inaccurate.",
      "Procedimiento que permite a la familia pedir la revisión de su índice registrado cuando lo considera inexacto.",
      "Procedura che consente alla famiglia di chiedere la revisione del proprio indice registrato quando lo ritiene inesatto.",
      "Verfahren, das der Familie die Überprüfung ihres erfassten Index erlaubt, wenn sie ihn für unzutreffend hält.",
      "Процедура позволяет семье запросить пересмотр записанного индекса, если она считает его неточным."
    ),
    where: W7(
      "بوابة tadamon.ma أو مقرات الملحقات الإدارية وفق الأجل المحدد.",
      "Portail tadamon.ma ou sièges des annexes administratives, dans le délai imparti.",
      "The tadamon.ma portal or administrative annex offices, within the allotted deadline.",
      "El portal tadamon.ma o sedes de los anexos administrativos, dentro del plazo establecido.",
      "Il portale tadamon.ma o sedi degli annessi amministrativi, entro il termine fissato.",
      "Portal tadamon.ma oder Verwaltungsannexen, fristgerecht.",
      "Портал tadamon.ma либо административные анексы в установленный срок."
    ),
    authority: "amotadamon",
    keywords: ["مؤشر الاستحقاق", "الاعتراض", "contestation indice", "social index", "RSU"],
  },
  {
    id: "ijr-bitaq-dhakira",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على بطاقة الذاكرة للتعويضات العائلية",
      "Procédure d'obtention de la carte mémoire pour les allocations familiales",
      "Procedure for obtaining the memory card for family allowances",
      "Procedimiento de obtención de la tarjeta mémoire para las asignaciones familiares",
      "Procedura di ottenimento della carta mémoire per gli assegni familiari",
      "Verfahren zur Beantragung der Mémoire-Karte für Familienleistungen",
      "Процедура получения карты mémoire для семейных пособий"
    ),
    desc: D7(
      "خطوات استخراج بطاقة الأداء التي تصرف بها التعويضات العائلية الممنوحة من الضمان الاجتماعي.",
      "Étapes d'obtention de la carte de paiement servant au versement des allocations familiales servies par la CNSS.",
      "Steps to obtain the payment card used for disbursing the family allowances paid by the CNSS.",
      "Pasos para obtener la tarjeta de pago con que se abonan las asignaciones familiares servidas por la CNSS.",
      "Passi per ottenere la carta di pagamento con cui si erogano gli assegni familiari della CNSS.",
      "Schritte zur Beantragung der Zahlkarte, mit der die von der CNSS gezahlten Familienleistungen ausgezahlt werden.",
      "Шаги получения платёжной карты, используемой для выплаты семейных пособий от фонда CNSS."
    ),
    where: W7(
      "وكالات CNSS مع البطاقة الوطنية للتعريف، أو طلبها عبر macnss.ma.",
      "Agences CNSS avec la CIN, ou demande via macnss.ma.",
      "CNSS agencies with the national ID card, or request via macnss.ma.",
      "Agencias del CNSS con el DNI, o solicitud vía macnss.ma.",
      "Agenzie CNSS con la CIN, oppure richiesta via macnss.ma.",
      "CNSS-Stellen mit dem Personalausweis oder Antrag über macnss.ma.",
      "Агентства CNSS с удостоверением личности либо заявка через macnss.ma."
    ),
    authority: "cnss",
    keywords: ["بطاقة الذاكرة", "carte mémoire", "التعويضات العائلية", "allocations familiales", "CNSS"],
  },

  // ─── Éducation et formation ───
  {
    id: "ijr-massar-tasjil",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل في منظومة مسار",
      "Procédure d'inscription dans le système Massar",
      "Procedure for enrolment in the Massar system",
      "Procedimiento de inscripción en el sistema Massar",
      "Procedura di iscrizione al sistema Massar",
      "Verfahren zur Anmeldung im Massar-System",
      "Процедура регистрации в системе Massar"
    ),
    desc: D7(
      "خطوات تسجيل التلاميذ الجدد وآبائهم في المنظومة المعلوماتية لتتبع المسار الدراسي والنتائج.",
      "Étapes d'inscription des nouveaux élèves et de leurs parents dans le système d'information pour suivre la scolarité et les résultats.",
      "Steps to enrol new pupils and their parents in the information system to track schooling and results.",
      "Pasos para inscribir a los nuevos alumnos y a sus padres en el sistema de información para seguir la escolaridad y las notas.",
      "Passi per iscrivere i nuovi alunni e i loro genitori nel sistema informativo per seguire la carriera scolastica e i risultati.",
      "Schritte zur Anmeldung neuer Schüler und Eltern im Informationssystem zur Verfolgung des Schulverlaufs und der Ergebnisse.",
      "Шаги регистрации новых учеников и их родителей в информационной системе для отслеживания учёбы и результатов."
    ),
    where: W7(
      "بوابة مسار massar.men.ma، أو إدارة المؤسسة التعليمية التابعة للتلميذ.",
      "Portail Massar massar.men.ma, ou administration de l'établissement scolaire de rattachement.",
      "The Massar portal massar.men.ma, or the administration of the pupil's school.",
      "El portal Massar massar.men.ma, o la administración del centro escolar correspondiente.",
      "Il portale Massar massar.men.ma, oppure l'amministrazione della scuola di riferimento.",
      "Massar-Portal massar.men.ma oder die Verwaltung der zuständigen Schule.",
      "Портал Massar massar.men.ma либо администрация соответствующей школы."
    ),
    authority: "men",
    keywords: ["مسار", "Massar", "التسجيل المدرسي", "inscription scolaire", "التمدرس"],
  },
  {
    id: "ijr-bac-libre",
    cat: "ijraat",
    title: T7(
      "مسطرة الترشيح لامتحانات الباكالوريا بصفة حر",
      "Procédure de candidature au baccalauréat en candidat libre",
      "Procedure for applying to the baccalauréat as an independent candidate",
      "Procedimiento de candidatura al bachillerato como candidato libre",
      "Procedura di candidatura all'esame di maturità da candidato libero",
      "Verfahren zur Bewerbung um das Abitur als freier Bewerber",
      "Процедура подачи на экзамен бакалавриата в качестве вольного кандидата"
    ),
    desc: D7(
      "خطوات تسجيل المرشح الحر للامتحان الوطني الموحد مع الوثائق المطلوبة والمواعيد السنوية.",
      "Étapes d'inscription du candidat libre à l'examen national unifié, avec les pièces exigées et le calendrier annuel.",
      "Steps to register the independent candidate for the unified national exam, with the required documents and the annual calendar.",
      "Pasos para inscribir al candidato libre en el examen nacional unificado, con los documentos exigidos y el calendario anual.",
      "Passi per iscrivere il candidato libero all'esame nazionale unificato, con i documenti richiesti e il calendario annuale.",
      "Schritte zur Anmeldung des freien Bewerbers für die einheitliche Nationalprüfung mit den erforderlichen Unterlagen und dem Jahreskalender.",
      "Шаги регистрации вольного кандидата на единый национальный экзамен с требуемыми документами и годовым календарём."
    ),
    where: W7(
      "المديرية الأكاديمية للتربية والتكوين لمحل السكنى خلال فترة التسجيل.",
      "Direction académique du lieu de résidence, durant la période d'inscription.",
      "The academic directorate of the place of residence, during the registration period.",
      "La dirección académica de residencia, durante el periodo de inscripción.",
      "La direzione accademica di residenza, durante il periodo di iscrizione.",
      "Akademiedirektion des Wohnorts während der Anmeldephase.",
      "Академическая дирекция по месту жительства в период регистрации."
    ),
    authority: "men",
    keywords: ["باكالوريا الأحرار", "bac libre", "candidat libre", "الامتحان الوطني", "باك"],
  },
  {
    id: "ijr-tasjil-jamai-awal",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل الأول بالجامعة",
      "Procédure de première inscription à l'université",
      "Procedure for first-time enrolment at university",
      "Procedimiento de primera inscripción en la universidad",
      "Procedura di prima iscrizione all'università",
      "Verfahren zur Ersteinschreibung an der Universität",
      "Процедура первичной регистрации в университете"
    ),
    desc: D7(
      "خطوات تسجيل الحاصلين على الباكالوريا بمؤسسات التعليم العالي عبر البوابة الوطنية الموحدة.",
      "Étapes d'inscription des bacheliers dans les établissements d'enseignement supérieur via le portail national unifié.",
      "Steps to enrol baccalaureate holders in higher-education institutions through the unified national portal.",
      "Pasos para inscribir a los bachilleres en los establecimientos de educación superior por el portal nacional unificado.",
      "Passi per iscrivere i diplomati negli istituti di istruzione superiore tramite il portale nazionale unificato.",
      "Schritte zur Einschreibung der Abiturienten an Hochschuleinrichtungen über das vereinheitlichte Nationalportal.",
      "Шаги регистрации выпускников бакалавриата в учреждениях высшего образования через единый национальный портал."
    ),
    where: W7(
      "البوابة الوطنية للتسجيل الجامعي خلال الفترة المحددة، ثم مؤسسة الجامعة المعنية.",
      "Portail national d'inscription durant la période fixée, puis l'établissement universitaire concerné.",
      "The national enrolment portal during the set period, then the university institution concerned.",
      "El portal nacional de inscripción durante el periodo fijado, luego el establecimiento universitario correspondiente.",
      "Portale nazionale di iscrizione nel periodo stabilito, poi l'ateneo interessato.",
      "Nationales Einschreibungsportal im festgelegten Zeitraum, danach die zuständige Hochschuleinrichtung.",
      "Национальный портал записи в установленный период, затем соответствующее учебное заведение."
    ),
    authority: "enssup",
    keywords: ["التسجيل الجامعي", "inscription universitaire", "university enrolment", "الباكالوريا", "الجامعة"],
    popular: true,
  },
  {
    id: "ijr-sakan-jamai",
    cat: "ijraat",
    title: T7(
      "مسطرة الحصول على السكن الجامعي",
      "Procédure d'obtention d'une chambre en cité universitaire",
      "Procedure for obtaining a room in university halls",
      "Procedimiento de obtención de una habitación en residencias universitarias",
      "Procedura di ottenimento di un alloggio nelle residenze universitarie",
      "Verfahren zur Beantragung eines Platzes im Studierendenwohnheim",
      "Процедура получения места в студенческом общежитии"
    ),
    desc: D7(
      "خطوات الترشيح للسكن الجامعي خلال الفترة السنوية وفق معايير الاستحقاق والبعد عن المؤسسة.",
      "Étapes de candidature au logement universitaire durant la campagne annuelle, selon les critères d'éligibilité et l'éloignement.",
      "Steps to apply for university housing during the annual campaign, under the eligibility criteria and distance rules.",
      "Pasos para solicitar vivienda universitaria durante la campaña anual, según los criterios de elegibilidad y la distancia.",
      "Passi per candidarsi all'alloggio universitario durante la campagna annuale, secondo i criteri di idoneità e la distanza.",
      "Schritte zur Bewerbung um einen Wohnheimplatz während der jährlichen Kampagne nach Eignungs- und Entfernungskriterien.",
      "Шаги подачи на общежитие в ходе ежегодной кампании по критериям соответствия и удалённости."
    ),
    where: W7(
      "البوابة الرقمية المخصصة للسكن الجامعي أو مصلحة الشؤون الاجتماعية بالجامعة.",
      "Plateforme numérique dédiée au logement universitaire, ou service des affaires sociales de l'université.",
      "The digital platform dedicated to university housing, or the university's social affairs office.",
      "La plataforma digital dedicada a la vivienda universitaria, o el servicio de asuntos sociales de la universidad.",
      "La piattaforma digitale dedicata all'alloggio universitario, oppure il servizio affari sociali dell'ateneo.",
      "Die digitale Plattform für Studierendenwohnheime oder das Sozialreferat der Universität.",
      "Цифровая платформа для общежитий либо социальный отдел университета."
    ),
    authority: "enssup",
    keywords: ["السكن الجامعي", "logement universitaire", "university housing", "المدن الجامعية", "الشؤون الاجتماعية"],
  },
  {
    id: "ijr-muadala",
    cat: "ijraat",
    title: T7(
      "مسطرة معادلة الشهادات الأجنبية",
      "Procédure d'équivalence des diplômes étrangers",
      "Procedure for the equivalence of foreign degrees",
      "Procedimiento de homologación de títulos extranjeros",
      "Procedura di equivalenza dei titoli stranieri",
      "Verfahren zur Anerkennung ausländischer Abschlüsse",
      "Процедура признания иностранных дипломов"
    ),
    desc: D7(
      "خطوات طلب معادلة شهادة محصلة بالخارج قصد استعمالها في التشغيل أو متابعة الدراسة بالمغرب.",
      "Étapes de demande d'équivalence d'un diplôme obtenu à l'étranger pour l'emploi ou la poursuite d'études au Maroc.",
      "Steps to request the equivalence of a degree obtained abroad for employment or further study in Morocco.",
      "Pasos para solicitar la homologación de un título obtenido en el extranjero para trabajar o seguir estudios en Marruecos.",
      "Passi per richiedere l'equivalenza di un titolo conseguito all'estero per lavorare o continuare gli studi in Marocco.",
      "Schritte zur Beantragung der Anerkennung eines im Ausland erworbenen Abschlusses für Beruf oder Studium in Marokko.",
      "Шаги запроса признания диплома, полученного за границей, для работы или продолжения учёбы в Марокко."
    ),
    where: W7(
      "مصلحة المعادلات بوزارة التعليم العالي (enssup.gov.ma) مع الوثائق المصدقة والمترجمة.",
      "Service des équivalences du ministère de l'Enseignement supérieur (enssup.gov.ma), avec les documents légalisés et traduits.",
      "The equivalence office of the Ministry of Higher Education (enssup.gov.ma), with legalised and translated documents.",
      "El servicio de homologaciones del Ministerio de Educación Superior (enssup.gov.ma), con documentos legalizados y traducidos.",
      "Servizio equivalenze del Ministero dell'Istruzione superiore (enssup.gov.ma), con documenti legalizzati e tradotti.",
      "Anerkennungsstelle des Ministeriums für Hochschulbildung (enssup.gov.ma) mit beglaubigten und übersetzten Unterlagen.",
      "Отдел признания министерства высшего образования (enssup.gov.ma) с заверенными и переведёнными документами."
    ),
    authority: "enssup",
    keywords: ["معادلة الشهادات", "équivalence", "degree equivalence", "شهادة أجنبية", "التعليم العالي"],
  },
  {
    id: "ijr-intiqal-jamai",
    cat: "ijraat",
    title: T7(
      "مسطرة الترشح للانتقال بين الجامعات",
      "Procédure de candidature au transfert entre universités",
      "Procedure for applying to transfer between universities",
      "Procedimiento de solicitud de traslado entre universidades",
      "Procedura di domanda di trasferimento tra università",
      "Verfahren zum Wechsel zwischen Universitäten",
      "Процедура перевода между университетами"
    ),
    desc: D7(
      "خطوات طلب الانتقال من جامعة إلى أخرى مع الشروط المتعلقة بالطاقة الاستيعابية والنتائج الدراسية.",
      "Étapes de demande de transfert d'une université à une autre, sous conditions de capacité d'accueil et de résultats académiques.",
      "Steps to request a transfer from one university to another, subject to capacity and academic results conditions.",
      "Pasos para solicitar el traslado de una universidad a otra, con condiciones de capacidad y resultados académicos.",
      "Passi per richiedere il trasferimento da un'università all'altra, con condizioni di capienza e risultati accademici.",
      "Schritte zum Wechsel von einer Universität zur anderen unter Auflagen zu Kapazität und Studienleistungen.",
      "Шаги запроса перевода из одного университета в другой при условиях вместимости и академических результатов."
    ),
    where: W7(
      "مصلحة الشؤون الطالبية بالجامعة المستقبلة قبل انطلاق السنة الجامعية.",
      "Service des affaires étudiantes de l'université d'accueil, avant le début de l'année universitaire.",
      "The host university's student affairs office, before the academic year begins.",
      "El servicio de asuntos estudiantiles de la universidad receptora, antes del inicio del curso académico.",
      "Il servizio affari studenteschi dell'ateneo ricevente, prima dell'inizio dell'anno accademico.",
      "Studierendenangelegenheiten der aufnehmenden Universität vor Beginn des Studienjahres.",
      "Отдел по делам студентов принимающего университета до начала учебного года."
    ),
    authority: "enssup",
    keywords: ["الانتقال", "transfert universitaire", "university transfer", "تغيير الجامعة", "الشؤون الطالبية"],
  },
  {
    id: "ijr-itirad-natija",
    cat: "ijraat",
    title: T7(
      "مسطرة الاعتراض على نتيجة الامتحانات",
      "Procédure de réclamation contre les résultats d'examen",
      "Procedure for contesting examination results",
      "Procedimiento de reclamación contra los resultados de examen",
      "Procedura di reclamo contro i risultati d'esame",
      "Verfahren zur Einsprache gegen Prüfungsergebnisse",
      "Процедура обжалования результатов экзаменов"
    ),
    desc: D7(
      "خطوات تقديم طلب مراجعة النقطة داخل أجل قانوني محدد بعد الإعلان عن النتائج.",
      "Étapes de dépôt de la demande de révision de la note dans un délai légal déterminé après publication des résultats.",
      "Steps to file the mark-review request within a set legal deadline after the results are published.",
      "Pasos para presentar la solicitud de revisión de la calificación dentro del plazo legal tras la publicación de los resultados.",
      "Passi per presentare la domanda di revisione del voto entro un termine legale determinato dopo la pubblicazione dei risultati.",
      "Schritte zur Einreichung des Einspruchs gegen die Note innerhalb der gesetzten Frist nach Veröffentlichung der Ergebnisse.",
      "Шаги подачи запроса на пересмотр оценки в установленный законом срок после публикации результатов."
    ),
    where: W7(
      "مصلحة الشؤون الطالبية بالمؤسسة أو الجامعة وفق الأجل المحدد في النظام الداخلي.",
      "Service des affaires étudiantes de l'établissement ou de l'université, selon le délai fixé par le règlement.",
      "The institution's or university's student affairs office, within the deadline fixed by the regulations.",
      "El servicio de asuntos estudiantiles del centro o la universidad, según el plazo fijado por el reglamento.",
      "Il servizio affari studenteschi dell'istituto o dell'università, entro il termine fissato dal regolamento.",
      "Studierendenangelegenheiten der Einrichtung oder Universität gemäß der in der Ordnung gesetzten Frist.",
      "Отдел по делам студентов вуза в срок, установленный внутренним регламентом."
    ),
    authority: "enssup",
    keywords: ["الاعتراض", "réclamation notes", "grade appeal", "مراجعة النتيجة", "النقط"],
  },
  {
    id: "ijr-tawjih-bac",
    cat: "ijraat",
    title: T7(
      "مسطرة توجيه الحاصلين على الباكالوريا",
      "Procédure d'orientation des bacheliers",
      "Procedure for the orientation of baccalaureate holders",
      "Procedimiento de orientación de los bachilleres",
      "Procedura di orientamento dei diplomati del secondario",
      "Verfahren zur Studienorientierung der Abiturienten",
      "Процедура ориентации для обладателей аттестата"
    ),
    desc: D7(
      "خطوات تسجيل الرغبات عبر البوابة الوطنية لتوجيه الحاصلين على شهادة الباكالوريا نحو التخصصات.",
      "Étapes de saisie des vœux sur le portail national d'orientation des bacheliers vers les filières de formation.",
      "Steps to enter the preferences on the national portal guiding baccalaureate holders towards the training streams.",
      "Pasos para introducir las preferencias en el portal nacional que orienta a los bachilleres hacia las ramas de formación.",
      "Passi per inserire le preferenze sul portale nazionale che orienta i diplomati verso i percorsi di formazione.",
      "Schritte zur Eingabe der Wünsche im nationalen Portal, das Abiturienten zu den Studienrichtungen lenkt.",
      "Шаги ввода пожеланий на национальном портале, ориентирующем обладателей аттестата на направления обучения."
    ),
    where: W7(
      "البوابة الوطنية للتوجيه خلال الفترات المعلنة سنوياً بعد الإعلان عن النتائج.",
      "Portail national d'orientation, durant les fenêtres annoncées chaque année après la publication des résultats.",
      "The national orientation portal, during the windows announced each year after the results are published.",
      "El portal nacional de orientación, durante las ventanas anunciadas cada año tras la publicación de los resultados.",
      "Portale nazionale di orientamento, nelle finestre annunciate ogni anno dopo la pubblicazione dei risultati.",
      "Nationales Orientierungsportal in den jedes Jahr nach Ergebniseröffentlichung angekündigten Zeitfenstern.",
      "Национальный портал профориентации в периоды, объявляемые ежегодно после публикации результатов."
    ),
    authority: "enssup",
    keywords: ["التوجيه", "tawjih", "orientation", "الباكالوريا", "اختيار التخصص"],
  },
  {
    id: "ijr-ofppt-takwin",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل في التكوين المهني (OFPPT)",
      "Procédure d'inscription à la formation professionnelle (OFPPT)",
      "Procedure for enrolment in vocational training (OFPPT)",
      "Procedimiento de inscripción en la formación profesional (OFPPT)",
      "Procedura di iscrizione alla formazione professionale (OFPPT)",
      "Verfahren zur Einschreibung in die Berufsausbildung (OFPPT)",
      "Процедура зачисления на профессиональное обучение (OFPPT)"
    ),
    desc: D7(
      "خطوات التسجيل الأولي إلكترونياً في دورات التكوين المهني بأقسامه النظرية والعملية.",
      "Étapes de la préinscription en ligne aux filières de formation professionnelle, en cours théoriques et pratiques.",
      "Steps for the online pre-registration for vocational training streams, in theoretical and practical tracks.",
      "Pasos para la preinscripción en línea en las ramas de formación profesional, en modalidades teóricas y prácticas.",
      "Passi per la preiscrizione online ai corsi di formazione professionale, in percorsi teorici e pratici.",
      "Schritte zur Online-Voranmeldung für die Berufsbildungsgänge des OFPPT in theoretischen und praktischen Richtungen.",
      "Шаги предварительной онлайн-регистрации на курсы профобучения по теоретическим и практическим направлениям."
    ),
    where: W7(
      "بوابة ofppt.ma للتسجيل الأولي، ثم مؤسسة التكوين المعنية بالملف.",
      "Portail ofppt.ma pour la préinscription, puis l'établissement de formation concerné.",
      "The ofppt.ma portal for pre-registration, then the training institution concerned.",
      "El portal ofppt.ma para la preinscripción, luego el centro de formación correspondiente.",
      "Il portale ofppt.ma per la preiscrizione, poi l'istituto di formazione interessato.",
      "Portal ofppt.ma zur Voranmeldung, danach die zuständige Bildungseinrichtung.",
      "Портал ofppt.ma для предварительной регистрации, затем соответствующий учебный центр."
    ),
    authority: "ofppt",
    keywords: ["التكوين المهني", "OFPPT", "formation professionnelle", "vocational training", "التسجيل الأولي"],
  },
  {
    id: "ijr-dukturaha",
    cat: "ijraat",
    title: T7(
      "مسطرة التسجيل في سلك الدكتوراه",
      "Procédure d'inscription en doctorat",
      "Procedure for enrolment in a doctoral programme",
      "Procedimiento de inscripción en el doctorado",
      "Procedura di iscrizione al dottorato",
      "Verfahren zur Einschreibung in die Doktoratsausbildung",
      "Процедура регистрации в докторантуре"
    ),
    desc: D7(
      "خطوات الترشح لدفعات الدكتوراه السنوية وفق شروط التأهيل وموافقة المختبر والأستاذ المشرف.",
      "Étapes de candidature aux promotions annuelles de doctorat, selon les conditions d'éligibilité et l'accord du laboratoire et du directeur de thèse.",
      "Steps to apply to the annual doctoral cohorts, under the eligibility conditions and the agreement of the laboratory and supervisor.",
      "Pasos para optar a las promociones anuales de doctorado, según las condiciones de elegibilidad y el acuerdo del laboratorio y del director de tesis.",
      "Passi per candidarsi ai cicli annuali di dottorato, secondo le condizioni di idoneità e l'accordo del laboratorio e del relatore.",
      "Schritte zur Bewerbung um die jährlichen Doktoratsjahrgänge nach Eignungsvoraussetzungen und Zustimmung von Labor und Betreuer.",
      "Шаги подачи в ежегодные докторские наборы по условиям допуска и согласию лаборатории и научного руководителя."
    ),
    where: W7(
      "بوابة الجامعة أو مؤسسة الدكتوراه وفق دعوة الترشيح السنوية.",
      "Portail de l'université ou de l'établissement doctoral, conformément à l'appel annuel à candidatures.",
      "The university's or doctoral institution's portal, in line with the annual call for applications.",
      "El portal de la universidad o del centro de doctorado, conforme a la convocatoria anual.",
      "Il portale dell'università o dell'istituto di dottorato, secondo il bando annuale.",
      "Portal der Universität oder der Doktoratseinrichtung gemäß der jährlichen Ausschreibung.",
      "Портал университета или докторского учреждения в соответствии с ежегодным набором."
    ),
    authority: "enssup",
    keywords: ["الدكتوراه", "doctorat", "PhD", "فوج الدكتوراه", "الأستاذ المشرف"],
  },

  // ─── Conduite et véhicules ───
  {
    id: "ijr-rukhsa-siyaqa",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج رخصة السياقة (الفئات)",
      "Procédure d'obtention du permis de conduire (catégories)",
      "Procedure for obtaining a driving licence (categories)",
      "Procedimiento de obtención del permiso de conducir (categorías)",
      "Procedura di ottenimento della patente di guida (categorie)",
      "Verfahren zur Beantragung des Führerscheins (Klassen)",
      "Процедура получения водительского удостоверения (категории)"
    ),
    desc: D7(
      "دليل يفصل شروط الترشح لفئات رخصة السياقة واختباراتها النظرية والعملية ورسومها.",
      "Guide détaillant les conditions d'accès aux catégories du permis, les épreuves théoriques et pratiques et les droits.",
      "Guide detailing the eligibility conditions for licence categories, the theoretical and practical tests and the fees.",
      "Guía que detalla los requisitos de las categorías del permiso, las pruebas teóricas y prácticas y las tasas.",
      "Guida che dettaglia le condizioni di accesso alle categorie della patente, le prove teoriche e pratiche e le tariffe.",
      "Leitfaden zu den Zugangsvoraussetzungen der Führerscheinklassen, den theoretischen und praktischen Prüfungen und den Gebühren.",
      "Справочник о допуске к категориям удостоверения, теоретических и практических экзаменах и сборах."
    ),
    where: W7(
      "وكالات تسليم رخص السياقة (narsa.ma) بعد التسجيل بمدرسة السياقة أو بصفة حرة.",
      "Agences de délivrance des permis (narsa.ma), après inscription en auto-école ou en candidat libre.",
      "Licence issuing agencies (narsa.ma), after enrolling in a driving school or as an independent candidate.",
      "Agencias de expedición de permisos (narsa.ma), tras inscribirse en una autoescuela o como candidato libre.",
      "Agenzie di rilascio delle patenti (narsa.ma), dopo l'iscrizione a un'autoscuola o da candidato libero.",
      "Führerscheinstellen (narsa.ma) nach Anmeldung in einer Fahrschule oder als freier Bewerber.",
      "Агентства выдачи удостоверений (narsa.ma) после записи в автошколу или в качестве вольного кандидата."
    ),
    keywords: ["رخصة السياقة", "permis de conduire", "driving licence", "الفئات", "NARSA"],
    popular: true,
  },
  {
    id: "ijr-rukhsa-badal-mafqud",
    cat: "ijraat",
    title: T7(
      "مسطرة استخراج بدل رخصة السياقة في حالة الفقدان",
      "Procédure d'obtention d'un duplicata du permis en cas de perte",
      "Procedure for a duplicate licence in case of loss",
      "Procedimiento de duplicado del permiso en caso de pérdida",
      "Procedura di duplicato della patente in caso di smarrimento",
      "Verfahren zum Ersatzführerschein bei Verlust",
      "Процедура восстановления водительского удостоверения при утере"
    ),
    desc: D7(
      "خطوات التصريح بضياع رخصة السياقة لدى الشرطة ثم طلب البدل من وكالات التسليم.",
      "Étapes de la déclaration de perte auprès de la police puis de la demande de duplicata auprès des agences de délivrance.",
      "Steps to declare the loss at the police then request the duplicate from the issuing agencies.",
      "Pasos para declarar la pérdida ante la policía y pedir el duplicado en las agencias de expedición.",
      "Passi per dichiarare lo smarrimento alla polizia e chiedere il duplicato alle agenzie di rilascio.",
      "Schritte zur Verlustanzeige bei der Polizei und zur Duplikatsbeantragung bei den Ausgabestellen.",
      "Шаги заявления об утере в полиции и запроса дубликата в агентствах по выдаче удостоверений."
    ),
    where: W7(
      "تصريح بالضياع لدى مصالح الأمن، ثم وكالة رخص السياقة التابعة لمحل الإقامة.",
      "Déclaration de perte auprès des services de sécurité, puis agence de permis du lieu de résidence.",
      "Loss declaration at the security services, then the licence agency of the place of residence.",
      "Declaración de pérdida ante los servicios de seguridad, luego la agencia de permisos de residencia.",
      "Dichiarazione di smarrimento ai servizi di sicurezza, poi agenzia patenti del luogo di residenza.",
      "Verlustanzeige bei den Sicherheitsbehörden, danach Führerscheinstelle am Wohnort.",
      "Заявление об утере в службах безопасности, затем агентство удостоверений по месту жительства."
    ),
    keywords: ["بدل الرخصة", "فقدان", "duplicata permis", "lost licence", "تصريح بالضياع"],
  },
  {
    id: "ijr-rukhsa-musahhaha",
    cat: "ijraat",
    title: T7(
      "مسطرة الترخيص بسياقة مركبة معدة لذوي الاحتياجات الخاصة",
      "Procédure de permis aménagé pour les personnes en situation de handicap",
      "Procedure for an adapted licence for persons with disabilities",
      "Procedimiento de permiso adaptado para personas con discapacidad",
      "Procedura di patente adattata per persone con disabilità",
      "Verfahren zum angepassten Führerschein für Menschen mit Behinderung",
      "Процедура получения адаптированного удостоверения для лиц с инвалидностью"
    ),
    desc: D7(
      "مسطرة تمر عبر فحص طبي خاص يقرر التعديلات التقنية الواجب إدخالها على المركبة.",
      "Procédure passant par un examen médical spécial qui détermine les aménagements techniques à apporter au véhicule.",
      "Procedure involving a special medical examination that determines the technical adaptations required on the vehicle.",
      "Procedimiento que pasa por un examen médico especial que determina las adaptaciones técnicas del vehículo.",
      "Procedura che passa per una visita medica speciale che determina gli adattamenti tecnici da apportare al veicolo.",
      "Verfahren mit einer besonderen ärztlichen Untersuchung, die die technischen Anpassungen am Fahrzeug festlegt.",
      "Процедура проходит через специальный медосмотр, определяющий технические адаптации, требуемые для автомобиля."
    ),
    where: W7(
      "اللجنة الطبية المختصة ثم وكالة رخص السياقة مع شهادة الفحص الطبي.",
      "Commission médicale compétente, puis agence de permis avec le certificat médical.",
      "The competent medical commission, then the licence agency with the medical certificate.",
      "La comisión médica competente, luego la agencia de permisos con el certificado médico.",
      "La commissione medica competente, poi agenzia patenti con il certificato medico.",
      "Die zuständige medizinische Kommission, danach die Führerscheinstelle mit dem ärztlichen Attest.",
      "Компетентная медицинская комиссия, затем агентство удостоверений с медицинской справкой."
    ),
    keywords: ["رخصة مصححة", "ذوو الاحتياجات الخاصة", "permis aménagé", "adapted licence", "الفحص الطبي"],
  },
  {
    id: "ijr-fahs-taqni",
    cat: "ijraat",
    title: T7(
      "مسطرة الفحص التقني للمركبات",
      "Procédure du contrôle technique des véhicules",
      "Vehicle technical inspection procedure",
      "Procedimiento de la inspección técnica de vehículos",
      "Procedura del controllo tecnico dei veicoli",
      "Verfahren zur technischen Fahrzeugprüfung",
      "Процедура технического осмотра транспортных средств"
    ),
    desc: D7(
      "دليل يحدد دورية الفحص التقني للمركبات الخفيفة والثقيلة ومراكزه المعتمدة وعقوبات التأخر.",
      "Guide fixant la périodicité du contrôle technique des véhicules légers et lourds, les centres agréés et les sanctions du retard.",
      "Guide setting the periodicity of technical inspections for light and heavy vehicles, approved centres and late penalties.",
      "Guía que fija la periodicidad de la inspección de vehículos ligeros y pesados, los centros homologados y las sanciones por retraso.",
      "Guida che fissa la periodicità del controllo tecnico di veicoli leggeri e pesanti, i centri autorizzati e le sanzioni per ritardo.",
      "Leitfaden zur Häufigkeit der Prüfung von Pkw und Lkw, zu anerkannten Zentren und zu Verspätungssanktionen.",
      "Справочник о периодичности осмотра легковых и грузовых автомобилей, аккредитованных центрах и штрафах за просрочку."
    ),
    where: W7(
      "مراكز الفحص التقني المعتمدة (narsa.ma) خلال الفترة القانونية المحددة.",
      "Centres de visite technique agréés (narsa.ma), durant la période légale impartie.",
      "Approved inspection centres (narsa.ma), within the allotted legal period.",
      "Centros de inspección técnica homologados (narsa.ma), dentro del periodo legal establecido.",
      "Centri di revisione autorizzati (narsa.ma), entro il periodo legale stabilito.",
      "Zugelassene Prüfzentren (narsa.ma) innerhalb der gesetzlichen Frist.",
      "Аккредитованные центры осмотра (narsa.ma) в установленный законом период."
    ),
    keywords: ["الفحص التقني", "contrôle technique", "technical inspection", "NARSA", "مراقبة النقل"],
  },
  {
    id: "ijr-bitaq-ramadiya-tabdil",
    cat: "ijraat",
    title: T7(
      "مسطرة تبديل البطاقة الرمادية عند تغيير المعطيات",
      "Procédure de remplacement de la carte grise suite à un changement de données",
      "Procedure for replacing the grey card following a data change",
      "Procedimiento de sustitución de la tarjeta gris tras un cambio de datos",
      "Procedura di sostituzione della carta di circolazione a seguito di un cambio di dati",
      "Verfahren zum Umtausch des Fahrzeugscheins nach Datenänderung",
      "Процедура замены серой карты после изменения данных"
    ),
    desc: D7(
      "خطوات طلب بطاقة رمادية جديدة عند تغيير العنوان أو المعطيات التقنية أو البيانات الشخصية.",
      "Étapes de demande d'une nouvelle carte grise lors d'un changement d'adresse, de caractéristiques techniques ou de données personnelles.",
      "Steps to request a new grey card upon a change of address, technical characteristics or personal data.",
      "Pasos para solicitar una nueva tarjeta gris ante un cambio de domicilio, de características técnicas o de datos personales.",
      "Passi per richiedere una nuova carta di circolazione in caso di cambio di indirizzo, di caratteristiche tecniche o di dati personali.",
      "Schritte zur Beantragung eines neuen Fahrzeugscheins bei Wechsel von Adresse, technischen Merkmalen oder persönlichen Daten.",
      "Шаги запроса новой серой карты при смене адреса, технических характеристик или личных данных."
    ),
    where: W7(
      "وكالات تسليم البطاقات الرمادية (narsa.ma) مع الوثائق المثبتة للتغيير.",
      "Agences de délivrance des cartes grises (narsa.ma), avec les pièces justifiant le changement.",
      "Grey card issuing agencies (narsa.ma), with the documents evidencing the change.",
      "Agencias de expedición de tarjetas grises (narsa.ma), con los documentos que acreditan el cambio.",
      "Agenzie di rilascio delle carte di circolazione (narsa.ma), con i documenti che provano il cambiamento.",
      "Zulassungsstellen (narsa.ma) mit den Nachweisen über die Änderung.",
      "Агентства выдачи серых карт (narsa.ma) с документами, подтверждающими изменение."
    ),
    keywords: ["البطاقة الرمادية", "carte grise", "grey card", "تبديل", "NARSA"],
  },
  {
    id: "ijr-naql-milkiya",
    cat: "ijraat",
    title: T7(
      "مسطرة نقل ملكية مركبة",
      "Procédure de cession d'un véhicule",
      "Procedure for transferring vehicle ownership",
      "Procedimiento de transmisión de un vehículo",
      "Procedura di cessione di un veicolo",
      "Verfahren zur Übertragung eines Fahrzeugs",
      "Процедура переоформления автомобиля"
    ),
    desc: D7(
      "خطوات تحرير عقد البيع عند العدلين ثم تسجيل نقل الملكية بالبطاقة الرمادية الجديدة.",
      "Étapes de rédaction de l'acte de vente chez les adouls puis d'enregistrement de la cession sur une nouvelle carte grise.",
      "Steps to draw up the sale deed before the notaries then register the transfer on a new grey card.",
      "Pasos para redactar la escritura de venta ante los adoules y luego registrar la cesión en una nueva tarjeta gris.",
      "Passi per redigere l'atto di vendita davanti agli adoule e registrare la cessione su una nuova carta di circolazione.",
      "Schritte zur Beurkundung des Kaufvertrags vor den Adouls und zur Eintragung der Übertragung in einen neuen Fahrzeugschein.",
      "Шаги оформления договора купли-продажи у адулов и регистрации перехода права в новой серой карте."
    ),
    where: W7(
      "مكتب السماع والتوثيق لدى الوكالة بعد تحرير العقد لدى العدلين وتأدية الرسوم.",
      "Bureau d'audition et d'enregistrement de l'agence, après l'acte des adouls et le paiement des droits.",
      "The agency's recording office, after the notaries' deed and payment of the fees.",
      "Oficina de recepción de la agencia, tras la escritura de los adoules y el pago de las tasas.",
      "Ufficio di ricezione dell'agenzia, dopo l'atto degli adoule e il pagamento dei diritti.",
      "Annahme- und Erfassungsstelle der Agentur nach der Adouls-Urkunde und der Gebührenzahlung.",
      "Приёмная контора агентства после акта адулов и уплаты сборов."
    ),
    keywords: ["نقل الملكية", "بيع سيارة", "cession véhicule", "vehicle transfer", "العدلين", "السماع"],
  },
  {
    id: "ijr-gharamat-sayr",
    cat: "ijraat",
    title: T7(
      "مسطرة أداء غرامات السير",
      "Procédure de paiement des amendes de circulation",
      "Procedure for paying traffic fines",
      "Procedimiento de pago de multas de tráfico",
      "Procedura di pagamento delle multe stradali",
      "Verfahren zur Zahlung von Verkehrsstrafen",
      "Процедура оплаты штрафов за нарушение ПДД"
    ),
    desc: D7(
      "خطوات التحقق من المخالفات المسجلة على المركبة وأداء غراماتها إلكترونياً أو لدى نقاط الأداء.",
      "Étapes de consultation des infractions enregistrées contre le véhicule et de paiement des amendes en ligne ou aux points agréés.",
      "Steps to check the violations recorded against the vehicle and pay the fines online or at approved payment points.",
      "Pasos para consultar las infracciones registradas contra el vehículo y pagar las multas en línea o en puntos autorizados.",
      "Passi per verificare le infrazioni registrate contro il veicolo e pagare le multe online o presso punti autorizzati.",
      "Schritte zur Einsicht der erfassten Verstöße des Fahrzeugs und zur Online-Zahlung der Bußgelder oder Zahlung an anerkannten Stellen.",
      "Шаги проверки нарушений, зарегистрированных на автомобиль, и оплаты штрафов онлайн или в утверждённых пунктах."
    ),
    where: W7(
      "بوابة الوكالة الوطنية للسلامة الطرقية (narsa.ma) أو نقاط الأداء المعتمدة برقم لوحة المركبة.",
      "Portail de l'Agence nationale de la sécurité routière (narsa.ma) ou points de paiement agréés, avec le numéro d'immatriculation.",
      "The National Road Safety Agency portal (narsa.ma) or approved payment points, using the registration number.",
      "Portal de la Agencia Nacional de Seguridad Vial (narsa.ma) o puntos de pago autorizados, con el número de matrícula.",
      "Portale dell'Agenzia nazionale per la sicurezza stradale (narsa.ma) o punti di pagamento autorizzati, con il numero di targa.",
      "Portal der Nationalen Agentur für Verkehrssicherheit (narsa.ma) oder zugelassene Zahlstellen, mit dem Kennzeichen.",
      "Портал Национального агентства безопасности дорожного движения (narsa.ma) либо утверждённые пункты оплаты по номерному знаку."
    ),
    keywords: ["غرامات السير", "مخالفات", "amendes", "traffic fines", "NARSA"],
  },
  {
    id: "ijr-rusum-adrpo",
    cat: "ijraat",
    title: T7(
      "مسطرة أداء رسوم المركبات عبر البوابة الرقمية",
      "Procédure de paiement de la taxe sur les véhicules en ligne",
      "Procedure for paying the vehicle tax online",
      "Procedimiento de pago del impuesto sobre vehículos en línea",
      "Procedura di pagamento della tassa sui veicoli online",
      "Verfahren zur Online-Zahlung der Kfz-Steuer",
      "Процедура онлайн-оплаты налога на транспортные средства"
    ),
    desc: D7(
      "خطوات أداء رسوم المركبة إلكترونياً عبر بوابة الخزينة مع تنزيل الوصل المعتمد فوراً.",
      "Étapes du paiement en ligne de la taxe sur le portail de la Trésorerie, avec téléchargement immédiat du reçu agréé.",
      "Steps to pay the tax online on the Treasury portal, with immediate download of the approved receipt.",
      "Pasos para pagar el impuesto en línea en el portal del Tesoro, con descarga inmediata del recibo homologado.",
      "Passi per pagare la tassa online sul portale del Tesoro, con scarico immediato della ricevuta.",
      "Schritte zur Online-Zahlung auf dem Portal der Trésorerie mit sofortigem Abruf des Belegs.",
      "Шаги онлайн-оплаты налога на портале Казначейства с немедленным получением утверждённой квитанции."
    ),
    where: W7(
      "بوابة الخزينة العامة للمملكة tgr.gov.ma قبل نهاية فبراير من كل سنة.",
      "Portail de la Trésorerie Générale du Royaume tgr.gov.ma, avant la fin février de chaque année.",
      "The Kingdom's General Treasury portal tgr.gov.ma, before the end of February each year.",
      "Portal del Tesoro General del Reino tgr.gov.ma, antes de fin de febrero de cada año.",
      "Portale del Tesoro Generale del Regno tgr.gov.ma, entro fine febbraio di ogni anno.",
      "Portal des Königlichen Schatzamtes (tgr.gov.ma) vor Ende Februar eines jeden Jahres.",
      "Портал Генерального казначейства Королевства tgr.gov.ma до конца февраля каждого года."
    ),
    authority: "tgr",
    keywords: ["رسوم السيارة", "الفيينيت", "taxe véhicule", "tgr", "الأداء الإلكتروني"],
  },
  {
    id: "ijr-tabdil-iqama-sayara",
    cat: "ijraat",
    title: T7(
      "مسطرة إدخال مركبة في إطار تغيير الإقامة",
      "Procédure d'importation d'un véhicule dans le cadre du changement de résidence",
      "Procedure for importing a vehicle under a change of residence",
      "Procedimiento de importación de un vehículo en el marco del cambio de residencia",
      "Procedura di importazione di un veicolo nell'ambito del trasferimento di residenza",
      "Verfahren zur Einfuhr eines Fahrzeugs im Rahmen des Wohnsitzwechsels",
      "Процедура ввоза автомобиля при смене места жительства"
    ),
    desc: D7(
      "مسطرة جمركية تسمح للمغربي المقرر إقامته نهائياً بالمغرب بإدخال مركبته الشخصية مع الإعفاء من الرسوم.",
      "Procédure douanière autorisant le Marocain transférant sa résidence au Maroc à importer son véhicule personnel en franchise de droits.",
      "Customs procedure allowing a Moroccan transferring residence to Morocco to import a personal vehicle duty-free.",
      "Procedimiento aduanero que permite al marroquí que traslada su residencia a Marruecos importar su vehículo personal con franquicia.",
      "Procedura doganale che consente al marocchino che trasferisce la residenza in Marocco di importare il veicolo personale in franchigia.",
      "Zollverfahren, das Marokkanern bei Wohnsitzverlagerung nach Marokko die zollfreie Einfuhr des Privatfahrzeugs erlaubt.",
      "Таможенная процедура позволяет марокканцу, переезжающему в Марокко на постоянное жительство, ввезти личный автомобиль без пошлин."
    ),
    where: W7(
      "شبابيك الجمارك بمعبر الدخول مع وثائق إثبات نقل الإقامة والاستقرار بالمغرب.",
      "Guichets douaniers du poste d'entrée, avec les pièces prouvant le transfert de résidence au Maroc.",
      "Customs counters at the entry point, with documents proving the transfer of residence to Morocco.",
      "Ventanillas de aduanas del puesto de entrada, con documentos que acreditan el traslado de residencia a Marruecos.",
      "Sportelli doganali del valico d'ingresso, con i documenti che provano il trasferimento di residenza in Marocco.",
      "Zollschalter am Einreiseort mit Nachweisen der Wohnsitzverlegung nach Marokko.",
      "Таможенные окна в пункте въезда с документами, подтверждающими переезд проживания в Марокко."
    ),
    authority: "douane",
    keywords: ["تغيير الإقامة", "إدخال مركبة", "changement de résidence", "residence change import", "الإعفاء من الرسوم"],
  },
  {
    id: "ijr-hadithat-sayr",
    cat: "ijraat",
    title: T7(
      "مسطرة التصريح بحادثة سير لدى شركة التأمين",
      "Procédure de déclaration d'un accident de la circulation à l'assureur",
      "Procedure for declaring a traffic accident to the insurer",
      "Procedimiento de declaración de un accidente de tráfico al asegurador",
      "Procedura di denuncia di un incidente stradale all'assicuratore",
      "Verfahren zur Anzeige eines Verkehrsunfalls beim Versicherer",
      "Процедура заявления о ДТП страховой компании"
    ),
    desc: D7(
      "خطوات تحرير محضر المعاينة والتصريح بالحادثة داخل الأجل القانوني لاستخلاص التعويض.",
      "Étapes de rédaction du constat et de déclaration du sinistre dans le délai légal pour obtenir l'indemnisation.",
      "Steps to draw up the accident report and declare the claim within the legal period to obtain compensation.",
      "Pasos para redactar el parte y declarar el siniestro dentro del plazo legal para obtener la indemnización.",
      "Passi per redigere il constatato e denunciare il sinistro entro il termine legale per ottenere l'indemnizzo.",
      "Schritte zur Ausfertigung der Unfallskizze und Schadensmeldung innerhalb der gesetzlichen Frist zum Erhalt der Entschädigung.",
      "Шаги составления протокола и заявления об аварии в законный срок для получения возмещения."
    ),
    where: W7(
      "وكالات شركة التأمين أو بوابة التصريح الإلكتروني عند توفرها، مع محضر المعاينة.",
      "Agences de l'assureur ou portail de déclaration électronique le cas échéant, avec le constat amiable.",
      "Insurer's agencies or electronic claims portal where available, with the amicable report.",
      "Agencias del asegurador o portal electrónico de siniestros cuando exista, con el parte amistoso.",
      "Agenzie dell'assicuratore o portale telematico dei sinistri ove disponibile, con il constatato amichevole.",
      "Agenturen des Versicherers oder elektronisches Schadenportal, sofern vorhanden, mit dem Unfallprotokoll.",
      "Агентства страховщика или электронный портал убытков при наличии, с протоколом происшествия."
    ),
    keywords: ["حادثة سير", "محضر المعاينة", "constat amiable", "traffic accident claim", "التعويض"],
  },
  {
    id: "ijr-rukhsa-tajdid",
    cat: "ijraat",
    title: T7(
      "مسطرة تجديد رخصة السياقة",
      "Procédure de renouvellement du permis de conduire",
      "Procedure for renewing a driving licence",
      "Procedimiento de renovación del permiso de conducir",
      "Procedura di rinnovo della patente di guida",
      "Verfahren zur Erneuerung des Führerscheins",
      "Процедура обмена водительского удостоверения"
    ),
    desc: D7(
      "خطوات تجديد رخصة السياقة عند انتهاء صلاحيتها مع الفحص الطبي المطلوب لبعض الفئات.",
      "Étapes de renouvellement du permis à l'expiration de sa validité, avec visite médicale exigée pour certaines catégories.",
      "Steps to renew the licence upon expiry, with the medical check-up required for certain categories.",
      "Pasos para renovar el permiso al caducar su validez, con el reconocimiento médico exigido en ciertas categorías.",
      "Passi per il rinnovo della patente alla scadenza, con la visita medica richiesta per alcune categorie.",
      "Schritte zur Erneuerung des Führerscheins bei Ablauf, mit der für manche Klassen vorgeschriebenen ärztlichen Untersuchung.",
      "Шаги обмена удостоверения при истечении срока с обязательным медосмотром для некоторых категорий."
    ),
    where: W7(
      "وكالات تسليم رخص السياقة التابعة للوكالة الوطنية للسلامة الطرقية.",
      "Agences de délivrance des permis relevant de l'Agence Nationale de la Sécurité Routière.",
      "Licence issuing agencies under the National Road Safety Agency.",
      "Agencias de expedición de permisos dependientes de la Agencia Nacional de Seguridad Vial.",
      "Agenzie di rilascio delle patenti dipendenti dall'Agenzia nazionale per la sicurezza stradale.",
      "Führerscheinstellen der Nationalen Agentur für Verkehrssicherheit.",
      "Агентства выдачи удостоверений при Национальном агентстве безопасности дорожного движения."
    ),
    keywords: ["تجديد الرخصة", "renouvellement permis", "licence renewal", "الفحص الطبي", "السياقة"],
  },
];
