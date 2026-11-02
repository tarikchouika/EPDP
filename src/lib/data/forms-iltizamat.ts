// Written commitment (engagement) forms — housing, sponsorship, payment,
// vehicles, hygiene and works. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsIltizamat: DocumentItem[] = [
  // ─── Logement & hébergement ───
  {
    id: "ilt-sakan-zawja",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لفائدة الزوجة",
      "Engagement de logement au profit de l'épouse",
      "Housing commitment in favour of the wife",
      "Compromiso de vivienda a favor de la esposa",
      "Impegno di alloggio a favore della moglie",
      "Wohnungsverpflichtung zugunsten der Ehefrau",
      "Обязательство по жилью в пользу жены"
    ),
    desc: D7(
      "التزام يقدمه الزوج يتعهد فيه بإسكان زوجته في مسكنه لغرض إداري أو اجتماعي محدد.",
      "Engagement par lequel le mari s'engage à loger son épouse à un but administratif ou social précis.",
      "Commitment by which the husband undertakes to house his wife for a specified administrative or social purpose.",
      "Compromiso por el que el marido se obliga a alojar a su esposa para un fin administrativo o social.",
      "Impegno con cui il marito si obbliga a ospitare la moglie per uno scopo amministrativo o sociale.",
      "Verpflichtung, durch die der Ehemann seine Frau für einen Verwaltungszweck beherbergt.",
      "Обязательство, по которому муж предоставляет жене жильё для административной цели."
    ),
    where: W7(
      "الإدارة الطالبة للاعتماد (مصلحة الحالة المدنية، التعليم أو الضمان الاجتماعي)",
      "Administration requérante (état civil, éducation ou sécurité sociale)",
      "Requesting administration (civil registry, education or social security)",
      "Administración solicitante (registro civil, educación o seguridad social)",
      "Amministrazione richiedente (stato civile, istruzione o previdenza)",
      "Verlangende Behörde (Standesamt, Bildung oder Sozialversicherung)",
      "Запрашивающая организация (ЗАГС, образование или соцстрах)"
    ),
    keywords: ["التزام بالسكن", "engagement de logement", "housing commitment", "زوجة", "épouse"],
    popular: true,
  },
  {
    id: "ilt-sakan-ibn-bint",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لفائدة الابن أو الابنة",
      "Engagement de logement au profit du fils ou de la fille",
      "Housing commitment in favour of a son or daughter",
      "Compromiso de vivienda a favor del hijo o la hija",
      "Impegno di alloggio a favore del figlio o della figlia",
      "Wohnungsverpflichtung zugunsten des Sohnes oder der Tochter",
      "Обязательство по жилью в пользу сына или дочери"
    ),
    desc: D7(
      "التزام يقدمه الوالد يتعهد فيه بسكنى ابنه أو ابنته في منزله لأغراض إدارية أو مدرسية.",
      "Engagement par lequel le parent s'engage à héberger son fils ou sa fille à des fins administratives ou scolaires.",
      "Commitment whereby the parent undertakes to house a son or daughter for administrative or school purposes.",
      "Compromiso por el que el padre se obliga a alojar a su hijo o hija con fines administrativos o escolares.",
      "Impegno con cui il genitore si obbliga a ospitare il figlio o la figlia per scopi amministrativi o scolastici.",
      "Verpflichtung, wonach der Elternteil Sohn oder Tochter für Verwaltungs- oder Schulzwecke beherbergt.",
      "Обязательство родителя предоставить сыну или дочери жильё в административных или школьных целях."
    ),
    where: W7(
      "الإدارة الطالبة للاعتماد (الحالة المدنية، المؤسسة التعليمية أو مصلحة الضمان الاجتماعي)",
      "Administration requérante (état civil, établissement scolaire ou organisme de sécurité sociale)",
      "Requesting administration (civil registry, school or social security office)",
      "Administración solicitante (registro civil, centro escolar u organismo de seguridad social)",
      "Amministrazione richiedente (stato civile, istituto scolastico o ente previdenziale)",
      "Anfordernde Behörde (Standesamt, Schule oder Sozialversicherungsträger)",
      "Запрашивающая организация (ЗАГС, школа или орган соцстрахования)"
    ),
    keywords: ["التزام بالسكن", "ابن", "engagement de logement", "fils", "son housing", "housing commitment"],
  },
  {
    id: "ilt-sakan-akh",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لفائدة الأخ",
      "Engagement de logement au profit du frère",
      "Housing commitment in favour of a brother",
      "Compromiso de vivienda a favor del hermano",
      "Impegno di alloggio a favore del fratello",
      "Wohnungsverpflichtung zugunsten des Bruders",
      "Обязательство по жилью в пользу брата"
    ),
    desc: D7(
      "تعهد يسلمه الشخص لإيواء أخيه في سكنه قصد التثبت من عنوان إقامته لدى الإدارة المعنية.",
      "Engagement par lequel une personne s'engage à héberger son frère afin de justifier son adresse auprès de l'administration concernée.",
      "Undertaking by a person to lodge a brother in order to prove his address to the relevant administration.",
      "Compromiso de una persona de alojar a su hermano para justificar su domicilio ante la administración competente.",
      "Impegno con cui una persona ospita il fratello per comprovare il suo indirizzo presso l'amministrazione competente.",
      "Zusage, den Bruder zur Bestätigung seiner Adresse bei der zuständigen Behörde zu beherbergen.",
      "Обязательство лица разместить брата для подтверждения его адреса в соответствующем ведомстве."
    ),
    where: W7(
      "يودع لدى الإدارة المطلوب منها الإثبات (مصلحة الحالة المدنية أو مصالح التوثيق والشرطة)",
      "À déposer auprès de l'administration requérante (service de l'état civil ou services de documentation et de police)",
      "Filed with the requesting administration (civil registry office or documentation and police services)",
      "Se deposita ante la administración solicitante (registro civil o servicios de documentación y policía)",
      "Si deposita presso l'amministrazione richiedente (stato civile o servizi documentali e di polizia)",
      "Bei der anfordernden Behörde einzureichen (Standesamt oder Dokumentations- und Polizeidienste)",
      "Подаётся в запрашивающую организацию (ЗАГС или службы документации и полиции)"
    ),
    keywords: ["إيواء الأخ", "engagement de logement", "frère", "brother", "إثبات السكنى"],
  },
  {
    id: "ilt-sakan-ukht",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لفائدة الأخت",
      "Engagement de logement au profit de la sœur",
      "Housing commitment in favour of a sister",
      "Compromiso de vivienda a favor de la hermana",
      "Impegno di alloggio a favore della sorella",
      "Wohnungsverpflichtung zugunsten der Schwester",
      "Обязательство по жилью в пользу сестры"
    ),
    desc: D7(
      "وثيقة يتعهد فيها الشخص باستضافة أخته في مسكنه لتمكينها من استيفاء مسطرة إدارية محددة.",
      "Document par lequel une personne s'engage à héberger sa sœur pour lui permettre d'accomplir une procédure administrative précise.",
      "Document whereby a person undertakes to host a sister so she can complete a specific administrative procedure.",
      "Documento por el que una persona se compromete a alojar a su hermana para completar un trámite administrativo concreto.",
      "Documento con cui una persona si impegna a ospitare la sorella per completare una specifica pratica amministrativa.",
      "Urkunde, mit der sich jemand verpflichtet, die Schwester zur Erledigung eines Verwaltungsverfahrens zu beherbergen.",
      "Документ, по которому лицо обязуется разместить сестру для завершения конкретной административной процедуры."
    ),
    where: W7(
      "يقدم للإدارة المعنية بالملف (مصلحة الحالة المدنية أو التسجيل المدرسي أو الضمان الاجتماعي)",
      "À adresser à l'administration concernée (état civil, inscription scolaire ou sécurité sociale)",
      "Addressed to the administration concerned (civil registry, school enrolment or social security)",
      "Se dirige a la administración correspondiente (registro civil, inscripción escolar o seguridad social)",
      "Si indirizza all'amministrazione competente (stato civile, iscrizione scolastica o previdenza sociale)",
      "An die zuständige Behörde (Standesamt, Schulanmeldung oder Sozialversicherung) zu richten",
      "Направляется в соответствующее ведомство (ЗАГС, школа или соцстрахование)"
    ),
    keywords: ["استضافة الأخت", "engagement de logement", "sœur", "sister", "سكنى"],
  },
  {
    id: "ilt-sakan-walidayn",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لفائدة الأب والأم",
      "Engagement de logement au profit des parents",
      "Housing commitment in favour of the parents",
      "Compromiso de vivienda a favor de los padres",
      "Impegno di alloggio a favore dei genitori",
      "Wohnungsverpflichtung zugunsten der Eltern",
      "Обязательство по жилью в пользу родителей"
    ),
    desc: D7(
      "تعهد الابن أو الابنة بإسكان والديه في مسكنه الخاص قصد استعماله كدليل على السكنى.",
      "Engagement d'un enfant d'héberger ses parents dans son domicile pour servir de justificatif de résidence.",
      "A child's undertaking to house both parents in the family home as proof of residence.",
      "Compromiso del hijo de alojar a sus padres en su domicilio como justificante de residencia.",
      "Impegno del figlio di ospitare i genitori nella propria abitazione come prova di residenza.",
      "Verpflichtung des Kindes, die Eltern als Wohnsitznachweis in der eigenen Wohnung zu beherbergen.",
      "Обязательство ребёнка разместить родителей в своём жилище как подтверждение места жительства."
    ),
    where: W7(
      "الإدارة المستفيدة من الإثبات (الحالة المدنية، الصحة أو الدعم الاجتماعي)",
      "Administration bénéficiaire de la justification (état civil, santé ou aide sociale)",
      "Administration requiring the proof (civil registry, health or social assistance)",
      "Administración que requiere la acreditación (registro civil, salud o asistencia social)",
      "Amministrazione che richiede la prova (stato civile, sanità o assistenza sociale)",
      "Behörde, die den Nachweis verlangt (Standesamt, Gesundheit oder Sozialhilfe)",
      "Ведомство, требующее подтверждения (ЗАГС, здравоохранение или соцпомощь)"
    ),
    keywords: ["إسكان الوالدين", "engagement de logement", "parents", "justificatif de résidence", "إثبات السكنى"],
  },
  {
    id: "ilt-sakan-batqa-wataniya",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن من أجل البطاقة الوطنية للتعريف الإلكترونية",
      "Engagement de logement pour la carte nationale d'identité électronique",
      "Housing commitment for the national electronic ID card",
      "Compromiso de vivienda para el documento nacional de identidad electrónico",
      "Impegno di alloggio per la carta d'identità nazionale elettronica",
      "Wohnungsverpflichtung für den elektronischen Personalausweis",
      "Обязательство по жилью для национального электронного удостоверения личности"
    ),
    desc: D7(
      "التزام يرفق بطلب البطاقة الوطنية يثبت فيه الملتزم سكنى المعني بالأمر في عنوانه.",
      "Engagement joint à la demande de carte nationale, par lequel le souscripteur atteste l'hébergement de l'intéressé à son adresse.",
      "Commitment attached to the national ID card application, attesting that the applicant resides at the signatory's address.",
      "Compromiso adjunto a la solicitud del DNI que acredita que el interesado reside en el domicilio del firmante.",
      "Impegno allegato alla domanda della carta d'identità, con cui si attesta che l'interessato risiede all'indirizzo del sottoscrittore.",
      "Verpflichtung zum Personalausweisantrag, die den Wohnsitz des Betroffenen bei der Adresse des Unterzeichners bestätigt.",
      "Обязательство к заявлению на удостоверение личности, подтверждающее проживание заявителя по адресу подписанта."
    ),
    where: W7(
      "الملحقات الإدارية أو عمالات المقاطعات (مصلحة البطاقة الوطنية للتعريف)",
      "Annexes administratives ou arrondissements (service de la carte nationale d'identité)",
      "Administrative annexes or district offices (national ID card service)",
      "Anexos administrativos o distritos (servicio del documento nacional de identidad)",
      "Annessi amministrativi o distretti (servizio della carta d'identità nazionale)",
      "Verwaltungsanhexe oder Bezirksämter (Dienststelle für den Personalausweis)",
      "Административные отделения или районные управления (служба национального удостоверения личности)"
    ),
    authority: "cnie",
    keywords: ["البطاقة الوطنية", "CIN", "carte nationale d'identité", "التزام بالسكن", "identity card"],
    popular: true,
  },
  {
    id: "ilt-sakan-jawaz-safar",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن من أجل جواز السفر",
      "Engagement de logement pour le passeport",
      "Housing commitment for the passport application",
      "Compromiso de vivienda para el pasaporte",
      "Impegno di alloggio per il passaporto",
      "Wohnungsverpflichtung für den Reisepassantrag",
      "Обязательство по жилью для заявления на паспорт"
    ),
    desc: D7(
      "تعهد يقدمه صاحب المسكن بإيواء طالب جواز السفر قصد إثبات محل إقامته لدى مصلحة الجوازات.",
      "Engagement du titulaire du logement d'héberger le demandeur de passeport afin de justifier son lieu de résidence.",
      "Undertaking by the householder to host the passport applicant in order to prove their place of residence.",
      "Compromiso del titular de la vivienda de alojar al solicitante del pasaporte para acreditar su lugar de residencia.",
      "Impegno del titolare dell'alloggio di ospitare il richiedente il passaporto per comprovare la sua residenza.",
      "Verpflichtung des Wohnungsinhabers, den Passantragsteller zur Nachweisung seines Wohnsitzes zu beherbergen.",
      "Обязательство владельца жилья разместить заявителя на паспорт для подтверждения места проживания."
    ),
    where: W7(
      "مفوضية الشرطة أو مصلحة الأمن الوطني المكلفة بإصدار جوازات السفر",
      "Commissariat ou service de la sûreté nationale chargé de la délivrance des passeports",
      "Police commissionership or national security service in charge of issuing passports",
      "Comisaría o servicio de seguridad nacional encargado de expedir pasaportes",
      "Commissariato o servizio della sicurezza nazionale addetto al rilascio dei passaporti",
      "Polizeikommissariat oder Dienststelle der nationalen Sicherheit für Passausstellungen",
      "Комиссариат полиции или служба нацбезопасности, выдающая паспорта"
    ),
    authority: "passeport",
    keywords: ["جواز السفر", "passeport", "passport", "إثبات السكنى", "التزام بالسكن"],
  },
  {
    id: "ilt-sakan-tamdiris",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لغرض التمدرس",
      "Engagement de logement pour la scolarisation",
      "Housing commitment for school enrolment",
      "Compromiso de vivienda para la escolarización",
      "Impegno di alloggio per la scolarizzazione",
      "Wohnungsverpflichtung für die Schulanmeldung",
      "Обязательство по жилью для школьного зачисления"
    ),
    desc: D7(
      "التزام يقدم عند تسجيل تلميذ يثبت فيه الملتزم توفره على سكن يأويه خلال السنة الدراسية.",
      "Engagement produit lors de l'inscription d'un élève, attestant la disponibilité d'un logement pour l'année scolaire.",
      "Commitment produced when enrolling a pupil, attesting that housing is available throughout the school year.",
      "Compromiso presentado al inscribir a un alumno, acreditando la disponibilidad de vivienda durante el curso escolar.",
      "Impegno presentato all'iscrizione di uno studente, attestando la disponibilità di un alloggio per l'anno scolastico.",
      "Bei der Schüleranmeldung vorgelegte Verpflichtung, die eine Unterkunft für das Schuljahr bestätigt.",
      "Обязательство при зачислении ученика, подтверждающее наличие жилья на учебный год."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية (الابتدائية أو الإعدادية أو التأهيلية) المطلوب التسجيل بها",
      "Direction de l'établissement scolaire (primaire, collège ou lycée) d'inscription",
      "Administration of the school (primary, middle or secondary) where enrolment is sought",
      "Dirección del centro escolar (primaria, secundaria o bachillerato) donde se solicita la inscripción",
      "Direzione dell'istituto scolastico (primaria, secondaria di primo o secondo grado) di iscrizione",
      "Schulleitung der Grund- oder weiterführenden Schule, an der die Anmeldung erfolgt",
      "Администрация учебного заведения (начальная или средняя школа) при зачислении"
    ),
    keywords: ["التمدرس", "scolarisation", "school enrolment", "التزام بالسكن", "تسجيل مدرسي"],
  },
  {
    id: "ilt-sakan-tasjil-jamai",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن لغرض التسجيل الجامعي",
      "Engagement de logement pour l'inscription à l'université",
      "Housing commitment for university enrolment",
      "Compromiso de vivienda para la inscripción universitaria",
      "Impegno di alloggio per l'iscrizione universitaria",
      "Wohnungsverpflichtung für die Universitätsimmatrikulation",
      "Обязательство по жилью для поступления в университет"
    ),
    desc: D7(
      "تعهد يرفق بملف التسجيل الجامعي أو طلب المنحة يثبت فيه الملتزم سكنى الطالب لديه.",
      "Engagement joint au dossier d'inscription universitaire ou de bourse, attestant que l'étudiant réside chez le souscripteur.",
      "Commitment enclosed with the university enrolment or scholarship file, attesting that the student lives with the signatory.",
      "Compromiso adjunto al expediente de inscripción universitaria o de beca que acredita que el estudiante reside con el firmante.",
      "Impegno allegato al fascicolo di iscrizione universitaria o di borsa, attestante che lo studente risiede presso il sottoscrittore.",
      "Verpflichtung, die der Immatrikulations- oder Stipendienakte beiliegt und bestätigt, dass der Student beim Unterzeichner wohnt.",
      "Обязательство, прилагаемое к делу о поступлении или на стипендию, подтверждающее проживание студента у подписанта."
    ),
    where: W7(
      "مصلحة التسجيل والشؤون الطلابية بالمؤسسة الجامعية المعنية بالتسجيل",
      "Service de la scolarité et des affaires estudiantines de l'établissement d'enseignement supérieur concerné",
      "Registration and student affairs service of the higher education institution concerned",
      "Servicio de escolaridad y asuntos estudiantiles de la institución de educación superior correspondiente",
      "Servizio di segreteria e affari studenteschi dell'istituto di istruzione superiore competente",
      "Immatrikulations- und Studierendenservice der betreffenden Hochschuleinrichtung",
      "Служба регистрации и студенческих дел соответствующего вуза"
    ),
    keywords: ["التسجيل الجامعي", "inscription universitaire", "university enrolment", "منحة", "التزام بالسكن"],
  },
  {
    id: "ilt-sakan-naql-madrasi",
    cat: "iltizamat",
    title: T7(
      "التزام بالسكن من أجل بطاقة النقل المدرسي",
      "Engagement de logement pour la carte de transport scolaire",
      "Housing commitment for the school transport card",
      "Compromiso de vivienda para la tarjeta de transporte escolar",
      "Impegno di alloggio per la carta di trasporto scolastico",
      "Wohnungsverpflichtung für die Schülertransportkarte",
      "Обязательство по жилью для школьной транспортной карты"
    ),
    desc: D7(
      "تعهد بإيواء التلميذ في مسكن داخل نطاق خط النقل قصد تمكينه من بطاقة النقل المخفضة.",
      "Engagement d'héberger l'élève dans un logement desservi par la ligne afin de lui permettre d'obtenir la carte de transport réduite.",
      "Undertaking to house the pupil within the line's catchment area so they can obtain the reduced-fare transport card.",
      "Compromiso de alojar al alumno en una vivienda dentro del recorrido de la línea para obtener la tarjeta de transporte con tarifa reducida.",
      "Impegno a ospitare l'alunno in un alloggio servito dalla linea per consentirgli la carta di trasporto a tariffa ridotta.",
      "Verpflichtung, den Schüler im Einzugsbereich der Linie zu beherbergen, damit er die ermäßigte Transportkarte erhält.",
      "Обязательство разместить ученика в зоне обслуживания линии для получения льготной транспортной карты."
    ),
    where: W7(
      "المؤسسة التعليمية أو المكتب الوطني للسكك الحديدية بحسب الجهة المصدرة للبطاقة",
      "Établissement scolaire ou Office national des chemins de fer selon l'organisme émetteur de la carte",
      "School administration or the national railways office, depending on the card issuer",
      "Centro escolar u oficina nacional de ferrocarriles según la entidad emisora de la tarjeta",
      "Istituto scolastico o ufficio nazionale delle ferrovie secondo l'ente emittente la carta",
      "Schule oder nationales Eisenbahnbüro, je nach Kartenaussteller",
      "Школа или национальный офис железных дорог — в зависимости от эмитента карты"
    ),
    keywords: ["النقل المدرسي", "transport scolaire", "school transport", "بطاقة", "التزام بالسكن"],
  },
  {
    id: "ilt-sakan-mowataf-mantaq",
    cat: "iltizamat",
    title: T7(
      "التزام بإسكان موظف منتقل",
      "Engagement de logement d'un fonctionnaire muté",
      "Housing commitment for a transferred civil servant",
      "Compromiso de vivienda para un funcionario trasladado",
      "Impegno di alloggio per un dipendente pubblico trasferito",
      "Wohnungsverpflichtung für einen versetzten Beamten",
      "Обязательство по жилью для переведённого госслужащего"
    ),
    desc: D7(
      "تعهد يسلمه قريب أو مكتر لإيواء موظف انتقل إلى مقر عمله الجديد إلى حين استقراره.",
      "Engagement d'un proche ou d'un bailleur d'héberger un fonctionnaire muté jusqu'à son installation définitive.",
      "Undertaking by a relative or landlord to house a civil servant transferred to a new duty station until settled.",
      "Compromiso de un familiar o arrendador de alojar a un funcionario trasladado hasta su instalación definitiva.",
      "Impegno di un familiare o locatore di ospitare un dipendente trasferito fino al suo insediamento definitivo.",
      "Zusage eines Angehörigen oder Vermieters, einen versetzten Beamten bis zu seiner endgültigen Niederlassung zu beherbergen.",
      "Обязательство родственника или арендодателя разместить переведённого служащего до его окончательного обустройства."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالإدارة المعنية أو مصلحة الترقيات والانتقالات بوزارة الملف التابع لها",
      "Service des ressources humaines de l'administration concernée ou division des mutations du ministère de tutelle",
      "Human resources service of the administration concerned or the transfers division of the supervising ministry",
      "Servicio de recursos humanos de la administración correspondiente o división de traslados del ministerio supervisor",
      "Servizio risorse umane dell'amministrazione competente o divisione trasferimenti del ministero di riferimento",
      "Personalstelle der betreffenden Behörde oder Versetzungsabteilung des Aufsichtsministeriums",
      "Отдел кадров ведомства или управление переводов профильного министерства"
    ),
    keywords: ["موظف منتقل", "fonctionnaire muté", "transferred civil servant", "الانتقال", "mutation"],
  },
  {
    id: "ilt-sakan-mouabbar",
    cat: "iltizamat",
    title: T7(
      "التزام بتقديم سكن مؤثث مؤقت",
      "Engagement de fourniture d'un logement meublé temporaire",
      "Commitment to provide temporary furnished housing",
      "Compromiso de proporcionar una vivienda amueblada temporal",
      "Impegno a fornire un alloggio ammobiliato temporaneo",
      "Verpflichtung zur Bereitstellung einer temporären möblierten Wohnung",
      "Обязательство предоставить временное меблированное жильё"
    ),
    desc: D7(
      "تعهد صاحب المسكن المؤثث بكرائه لفائدة مكتر لمدة محددة قابلة للتجديد باتفاق الطرفين.",
      "Engagement du propriétaire d'un logement meublé à le louer à un preneur pour une durée déterminée renouvelable d'un commun accord.",
      "Owner's undertaking to rent a furnished dwelling to a tenant for a fixed renewable term by mutual agreement.",
      "Compromiso del propietario de alquilar una vivienda amueblada a un inquilino por un plazo renovable de mutuo acuerdo.",
      "Impegno del proprietario ad affittare un alloggio ammobiliato per un termine rinnovabile di comune accordo.",
      "Zusage des Eigentümers, eine möblierte Wohnung für eine befristete, einvernehmlich verlängerbare Dauer zu vermieten.",
      "Обязательство владельца сдать меблированное жильё внаём на определённый, продлеваемый по согласию срок."
    ),
    where: W7(
      "يحرر حسب الحاجة الإدارية أو المهنية للمكتري ويقدم للجهة الطالبة للإثبات",
      "Établi selon le besoin administratif ou professionnel du preneur et remis à l'organisme requérant",
      "Drawn up according to the tenant's administrative or professional need and submitted to the requesting body",
      "Se redacta según la necesidad administrativa o profesional del inquilino y se entrega al organismo solicitante",
      "Redatto secondo il bisogno amministrativo o professionale dell'inquilino e consegnato all'ente richiedente",
      "Je nach administrativem oder beruflichem Bedarf des Mieters erstellt und der anfordernden Stelle übergeben",
      "Составляется по административной или профессиональной нужде арендатора и подаётся в запрашивающий орган"
    ),
    keywords: ["سكن مؤثث", "logement meublé", "furnished housing", "كراء مؤقت", "location temporaire"],
  },
  {
    id: "ilt-istidafa-ajnabi",
    cat: "iltizamat",
    title: T7(
      "التزام باستضافة مواطن أجنبي",
      "Engagement d'hébergement d'un ressortissant étranger",
      "Commitment to host a foreign national",
      "Compromiso de alojar a un ciudadano extranjero",
      "Impegno di ospitare un cittadino straniero",
      "Verpflichtung zur Aufnahme eines ausländischen Staatsangehörigen",
      "Обязательство принять иностранного гражданина"
    ),
    desc: D7(
      "تعهد مضيف مغربي بإيواء أجنبي طوال مدة إقامته وتغطية ضروريات عيشه أمام السلطات المختصة.",
      "Engagement d'un hôte marocain d'héberger un étranger durant tout son séjour et de couvrir ses besoins essentiels.",
      "Moroccan host's undertaking to accommodate a foreigner for the whole stay and cover essential living needs.",
      "Compromiso de un anfitrión marroquí de alojar a un extranjero durante toda su estancia y cubrir sus necesidades esenciales.",
      "Impegno di un ospite marocchino di alloggiare uno straniero per l'intero soggiorno e coprirne i bisogni essenziali.",
      "Verpflichtung eines marokkanischen Gastgebers, einen Ausländer während des gesamten Aufenthalts zu beherbergen und zu versorgen.",
      "Обязательство марокканского принимающего лица разместить иностранца на весь срок пребывания и покрыть базовые нужды."
    ),
    where: W7(
      "القنصلية المغربية بالخارج عند طلب التأشيرة أو المصالح المختصة بالإقامة داخل المغرب",
      "Consulat du Maroc à l'étranger pour la demande de visa ou services compétents en matière de séjour au Maroc",
      "Moroccan consulate abroad for the visa application or competent residence services inside Morocco",
      "Consulado de Marruecos en el extranjero para el visado o servicios competentes de residencia en Marruecos",
      "Consolato del Marocco all'estero per il visto o servizi competenti in materia di soggiorno in Marocco",
      "Marokkanisches Konsulat im Ausland für das Visum oder zuständige Aufenthaltsbehörden in Marokko",
      "Марокканское консульство за рубежом для визы или компетентные службы пребывания в Марокко"
    ),
    keywords: ["استضافة أجنبي", "hébergement étranger", "hosting commitment", "تأشيرة", "visa"],
  },
  // ─── Prise en charge & garantie ───
  {
    id: "ilt-ilaj-mustashfa",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء مصاريف العلاج",
      "Engagement de paiement des frais de traitement",
      "Commitment to pay treatment fees",
      "Compromiso de pago de los gastos de tratamiento",
      "Impegno di pagamento delle spese di cura",
      "Verpflichtung zur Zahlung der Behandlungskosten",
      "Обязательство оплатить расходы на лечение"
    ),
    desc: D7(
      "تعهد يقدمه ملتزم بتسديد مصاريف الاستشفاء والعلاج عن مريض أُدخل بمؤسسة صحية.",
      "Engagement par lequel le souscripteur s'engage à régler les frais d'hospitalisation et de traitement d'un malade admis en établissement de santé.",
      "Undertaking whereby the signatory commits to settle hospitalisation and treatment costs for a patient admitted to a health facility.",
      "Compromiso por el que el firmante se obliga a pagar los gastos de hospitalización y tratamiento de un paciente ingresado.",
      "Impegno con cui il sottoscrittore si obbliga a saldare le spese di ricovero e cura di un paziente.",
      "Verpflichtung, wonach der Unterzeichner die Krankenhaus- und Behandlungskosten eines Patienten trägt.",
      "Обязательство подписанта оплатить расходы на госпитализацию и лечение пациента."
    ),
    where: W7(
      "مكتب المستحقات المالية بالمستشفى العمومي أو الخاص المعني بالأداء",
      "Bureau des recettes de l'hôpital public ou privé concerné par le paiement",
      "Revenues office of the public or private hospital concerned with the payment",
      "Oficina de ingresos del hospital público o privado correspondiente",
      "Ufficio entrate dell'ospedale pubblico o privato interessato al pagamento",
      "Eingangsstelle des betroffenen öffentlichen oder privaten Krankenhauses",
      "Касса соответствующей государственной или частной больницы"
    ),
    keywords: ["مصاريف العلاج", "frais de traitement", "treatment fees", "استشفاء", "hospitalisation"],
    popular: true,
  },
  {
    id: "ilt-tawfiyat-omran",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء واجبات التسوية لدى مجموعة العمران",
      "Engagement de paiement des droits de règlement auprès d'Al Omrane",
      "Commitment to pay settlement charges to Al Omrane",
      "Compromiso de pago de los derechos de regularización ante Al Omrane",
      "Impegno di pagamento dei diritti di regolarizzazione presso Al Omrane",
      "Verpflichtung zur Zahlung der Ausgleichsabgaben an Al Omrane",
      "Обязательство оплатить сборы за узаконение компании Al Omrane"
    ),
    desc: D7(
      "تعهد بتسديد واجبات تسوية البناء أو التجزئة المستحقة لمجموعة العمران وفق جدول متفق عليه.",
      "Engagement de régler les droits de règlement de la construction ou du lotissement dus à Al Omrane selon un échéancier convenu.",
      "Undertaking to settle construction or subdivision regulation charges owed to Al Omrane under an agreed schedule.",
      "Compromiso de pagar los derechos de regularización de obra o parcelación adeudados a Al Omrane según un calendario pactado.",
      "Impegno a saldare i diritti di regolarizzazione dell'edificazione o della lottizzazione dovuti ad Al Omrane secondo un piano concordato.",
      "Verpflichtung, die Ausgleichsabgaben für Bau oder Erschließung nach vereinbartem Plan an Al Omrane zu zahlen.",
      "Обязательство оплатить Al Omrane сборы за узаконение строительства или раздела по согласованному графику."
    ),
    where: W7(
      "وكالة مجموعة العمران بالجهة المعنية بملف التسوية",
      "Agence régionale d'Al Omrane en charge du dossier de règlement",
      "Regional Al Omrane agency handling the settlement file",
      "Agencia regional de Al Omrane encargada del expediente de regularización",
      "Agenzia regionale di Al Omrane competente per il fascicolo di regolarizzazione",
      "Regionale Al-Omrane-Agentur, die das Ausgleichsverfahren bearbeitet",
      "Региональное агентство Al Omrane, ведущее дело об узаконении"
    ),
    keywords: ["مجموعة العمران", "Al Omrane", "واجبات التسوية", "droits de règlement", "regularisation"],
  },
  {
    id: "ilt-fatura-kahraba-ma",
    cat: "iltizamat",
    title: T7(
      "التزام بتسديد فاتورة الماء والكهرباء عن الغير",
      "Engagement de payer la facture d'eau et d'électricité d'un tiers",
      "Commitment to pay a third party's water and electricity bill",
      "Compromiso de pagar la factura de agua y electricidad de un tercero",
      "Impegno di pagare la bolletta dell'acqua e della luce di un terzo",
      "Verpflichtung zur Zahlung der Wasser- und Stromrechnung eines Dritten",
      "Обязательство оплатить счёт за воду и электричество третьего лица"
    ),
    desc: D7(
      "تعهد شخص بتغطية فواتير الماء والكهرباء المسجلة باسم الغير لحين انتقالها إلى اسمه.",
      "Engagement d'une personne de couvrir les factures d'eau et d'électricité au nom d'un tiers jusqu'à leur transfert à son nom.",
      "Person's undertaking to cover water and electricity bills in a third party's name until they are transferred.",
      "Compromiso de una persona de cubrir las facturas de agua y electricidad a nombre de un tercero hasta su transferencia.",
      "Impegno di una persona di coprire le bollette intestate a un terzo fino al passaggio di intestazione.",
      "Zusage, die auf einen Dritten lautenden Wasser- und Stromrechnungen bis zur Umschreibung zu übernehmen.",
      "Обязательство лица оплачивать счета за воду и электричество на имя третьего лица до переоформления."
    ),
    where: W7(
      "وكالة المكتب الوطني للكهرباء والماء أو مقر شركة التوزيع المائية والكهربائية بالجهة",
      "Agence de l'ONEE ou siège du distributeur d'eau et d'électricité de la région",
      "ONEE agency or head office of the region's water and electricity distributor",
      "Agencia de la ONEE o sede del distribuidor de agua y electricidad de la región",
      "Agenzia ONEE o sede del distributore di acqua ed elettricità della regione",
      "ONEE-Agentur oder Sitz des regionalen Wasser- und Stromverteilers",
      "Агентство ONEE или офис регионального водоканал-энергосбыта"
    ),
    keywords: ["فاتورة الماء والكهرباء", "facture eau et électricité", "utility bill", "ONEE", "تسديد"],
  },
  {
    id: "ilt-kafala-talib",
    cat: "iltizamat",
    title: T7(
      "التزام بالكفالة والتسديد عن طالب",
      "Engagement de caution et de paiement pour un étudiant",
      "Guarantor and payment commitment for a student",
      "Compromiso de aval y pago para un estudiante",
      "Impegno di fideiussione e pagamento per uno studente",
      "Bürgschafts- und Zahlungsverpflichtung für einen Studenten",
      "Поручительство и обязательство оплаты для студента"
    ),
    desc: D7(
      "تعهد ولي الطالب أو كفيله بتغطية واجبات التسجيل والكراء ومصاريف الدراسة إلى حين تخرجه.",
      "Engagement du parent ou garant de l'étudiant à couvrir les frais d'inscription, de loyer et d'études jusqu'à l'obtention du diplôme.",
      "Parent's or guarantor's undertaking to cover enrolment, rent and study costs until the student graduates.",
      "Compromiso del padre o aval del estudiante de cubrir matrícula, alquiler y gastos de estudio hasta su graduación.",
      "Impegno del genitore o garante di coprire tasse d'iscrizione, affitto e spese di studio fino alla laurea.",
      "Verpflichtung der Eltern oder des Bürgen, Studien-, Miet- und Immatrikulationskosten bis zum Abschluss zu tragen.",
      "Обязательство родителя или поручителя покрывать взносы, аренду и учебные расходы до выпуска студента."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة الجامعية أو المصلحة المالية المانحة للقرض",
      "Service des affaires estudiantines de l'université ou service financier accordant le prêt",
      "Student affairs service of the university or the financial service granting the loan",
      "Servicio de asuntos estudiantiles de la universidad o servicio financiero que concede el préstamo",
      "Ufficio affari studenteschi dell'università o servizio finanziario che eroga il prestito",
      "Studierendenverwaltung der Hochschule oder die Kreditvergabe zuständige Finanzstelle",
      "Отдел по делам студентов университета или финансовая служба, выдающая кредит"
    ),
    keywords: ["كفالة طالب", "caution étudiant", "student guarantee", "قرض الطالب", "التزام"],
    popular: true,
  },
  {
    id: "ilt-daman-kira",
    cat: "iltizamat",
    title: T7(
      "التزام بضمان الكراء",
      "Engagement de garantie du loyer",
      "Rent guarantee commitment",
      "Compromiso de garantía del alquiler",
      "Impegno di garanzia dell'affitto",
      "Mietbürgschaftsverpflichtung",
      "Обязательство гарантии арендной платы"
    ),
    desc: D7(
      "تعهد ضامن بأداء واجبات الكراء وملحقاتها إذا تخلف المكتري عن الوفاء بها.",
      "Engagement du garant de payer le loyer et ses accessoires en cas de défaillance du locataire.",
      "Guarantor's undertaking to pay the rent and related charges should the tenant default.",
      "Compromiso del garante de pagar el alquiler y sus accesorios en caso de incumplimiento del inquilino.",
      "Impegno del garante di pagare l'affitto e le pertinenze in caso di inadempimento dell'inquilino.",
      "Verpflichtung des Bürgen, bei Zahlungsausfall des Mieters die Miete und Nebenkosten zu tragen.",
      "Обязательство поручителя оплатить аренду и сопутствующие платежи при неисполнении нанимателем."
    ),
    where: W7(
      "يحرر لفائدة المكري ويقدم مع ملف الكراء أو عند المطالبة بالضمانات",
      "Établi au profit du bailleur et joint au dossier de location ou lors de l'exigence de garanties",
      "Drawn up for the landlord and attached to the rental file or when guarantees are requested",
      "Se redacta a favor del arrendador y se adjunta al expediente de alquiler o cuando se exigen garantías",
      "Redatto a favore del locatore e allegato al dossier di locazione o alla richiesta di garanzie",
      "Zugunsten des Vermieters erstellt und dem Mietdossier beigelegt oder bei Garantieverlangen vorgelegt",
      "Составляется в пользу арендодателя и прилагается к арендному досье или при требовании гарантий"
    ),
    keywords: ["ضمان الكراء", "garantie du loyer", "rent guarantee", "مكتري", "ضامن"],
  },
  {
    id: "ilt-kira-ghayr",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء واجبات الكراء عن الغير",
      "Engagement de payer le loyer d'autrui",
      "Commitment to pay another person's rent",
      "Compromiso de pagar el alquiler de otra persona",
      "Impegno di pagare l'affitto di un'altra persona",
      "Verpflichtung zur Zahlung der Miete für eine andere Person",
      "Обязательство платить арендную плату за другое лицо"
    ),
    desc: D7(
      "تعهد شخص بأداء واجبات الكراء الشهرية عن مكتر آخر لا يستطيع الوفاء بها بنفسه.",
      "Engagement d'une personne de payer le loyer mensuel d'un locataire qui ne peut s'en acquitter lui-même.",
      "Person's undertaking to pay the monthly rent for a tenant who cannot meet it personally.",
      "Compromiso de una persona de pagar el alquiler mensual de un inquilino que no puede hacerlo por sí mismo.",
      "Impegno di una persona di pagare l'affitto mensile di un inquilino che non può assolverlo personalmente.",
      "Verpflichtung, die monatliche Miete eines hierzu selbst nicht fähigen Mieters zu begleichen.",
      "Обязательство лица платить ежемесячную аренду за нанимателя, который не может делать это сам."
    ),
    where: W7(
      "يحرر لفائدة المكري ويحتفظ به مع عقد الكراء ووصولات الأداء",
      "Établi au profit du bailleur et conservé avec le contrat de bail et les quittances",
      "Drawn up for the landlord and kept with the lease contract and receipts",
      "Se redacta a favor del arrendador y se conserva con el contrato y los recibos",
      "Redatto a favore del locatore e conservato con il contratto di locazione e le ricevute",
      "Zugunsten des Vermieters erstellt und mit Mietvertrag und Quittungen aufbewahrt",
      "Составляется в пользу арендодателя и хранится с договором аренды и квитанциями"
    ),
    keywords: ["واجبات الكراء", "loyer", "rent", "أداء عن الغير", "التزام"],
  },
  {
    id: "ilt-aqsat-qarib",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء الأقساط عن قريب",
      "Engagement de payer les échéances d'un proche",
      "Commitment to pay a relative's instalments",
      "Compromiso de pagar las cuotas de un familiar",
      "Impegno di pagare le rate di un familiare",
      "Verpflichtung zur Zahlung der Raten eines Angehörigen",
      "Обязательство оплачивать взносы родственника"
    ),
    desc: D7(
      "تعهد بأداء الأقساط الشهرية المستحقة على قريب لدى جهة دائنة إلى غاية تسوية الدين كليا.",
      "Engagement d'acquitter les mensualités dues par un proche auprès d'un créancier jusqu'à l'apurement total de la dette.",
      "Undertaking to pay the monthly instalments owed by a relative to a creditor until the debt is fully settled.",
      "Compromiso de abonar las cuotas mensuales adeudadas por un familiar a un acreedor hasta saldar la deuda.",
      "Impegno a versare le rate mensili dovute da un familiare a un creditore fino all'estinzione del debito.",
      "Verpflichtung, die monatlichen Raten eines Angehörigen beim Gläubiger bis zur vollständigen Tilgung zu zahlen.",
      "Обязательство выплачивать ежемесячные взносы родственника кредитору до полного погашения долга."
    ),
    where: W7(
      "يوجه للجهة الدائنة (مؤسسة التمويل أو البائع بالتقسيط) للاحتفاظ به في الملف",
      "Adressé au créancier (organisme de financement ou vendeur à tempérament) pour versement au dossier",
      "Addressed to the creditor (financing institution or instalment seller) for keeping on file",
      "Dirigido al acreedor (entidad de financiación o vendedor a plazos) para su incorporación al expediente",
      "Indirizzato al creditore (istituto di finanziamento o venditore a rate) per l'inserimento nel fascicolo",
      "An den Gläubiger (Finanzierungsinstitut oder Ratenverkäufer) zur Aktenaufbewahrung gerichtet",
      "Направляется кредитору (финансовая организация или продавец в рассрочку) для хранения в деле"
    ),
    keywords: ["أقساط", "mensualités", "instalments", "قريب", "تسديد"],
  },
  {
    id: "ilt-madrasa-khasa",
    cat: "iltizamat",
    title: T7(
      "التزام ولي الأمر بأداء مصاريف الدراسة بمؤسسة تعليمية خاصة",
      "Engagement du tuteur de payer les frais de scolarité dans un établissement privé",
      "Guardian's commitment to pay private school fees",
      "Compromiso del tutor de pagar las tasas escolares en un centro privado",
      "Impegno del tutore di pagare le rette scolastiche in un istituto privato",
      "Verpflichtung des Sorgeberechtigten zur Zahlung von Privatschulgebühren",
      "Обязательство опекуна оплачивать обучение в частном учебном заведении"
    ),
    desc: D7(
      "تعهد ولي التلميذ بأداء مصاريف التسجيل والدراسة والإطعام وفق التعرفة المعلنة للموسم الدراسي.",
      "Engagement du tuteur de l'élève de payer les frais d'inscription, de scolarité et de restauration selon le barème affiché de l'année.",
      "Pupil's guardian's undertaking to pay enrolment, tuition and catering fees at the published rates for the year.",
      "Compromiso del tutor del alumno de pagar matrícula, enseñanza y comedor según las tarifas publicadas del curso.",
      "Impegno del tutore dell'alunno di pagare iscrizione, retta e mensa secondo le tariffe pubblicate dell'anno.",
      "Verpflichtung des Sorgeberechtigten, Anmelde-, Schul- und Verpflegungsgebühren zum veröffentlichten Tarif zu zahlen.",
      "Обязательство опекуна ученика оплачивать регистрацию, обучение и питание по объявленным тарифам года."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية الخاصة التي يتابع بها التلميذ دراسته",
      "Direction de l'établissement d'enseignement privé fréquenté par l'élève",
      "Administration of the private school attended by the pupil",
      "Dirección del centro de enseñanza privado al que asiste el alumno",
      "Direzione dell'istituto d'istruzione privato frequentato dall'alunno",
      "Leitung der privaten Bildungseinrichtung, die der Schüler besucht",
      "Администрация частного учебного заведения, где учится ученик"
    ),
    keywords: ["مصاريف الدراسة", "frais de scolarité", "school fees", "تعليم خاص", "ولي الأمر"],
  },
  {
    id: "ilt-taslim-mustahaqat",
    cat: "iltizamat",
    title: T7(
      "التزام بتسليم مستحقات مالية",
      "Engagement de remise de sommes dues",
      "Commitment to hand over sums owed",
      "Compromiso de entregar sumas adeudadas",
      "Impegno di consegna delle somme dovute",
      "Verpflichtung zur Aushändigung geschuldeter Beträge",
      "Обязательство передать причитающиеся суммы"
    ),
    desc: D7(
      "تعهد كتابي بتسليم مبلغ أو مستحقات مالية إلى صاحبها في أجل محدد تحت طائلة تحمل المسؤولية.",
      "Engagement écrit de remettre un montant ou des sommes dues à l'ayant droit dans un délai déterminé, sous peine d'engager sa responsabilité.",
      "Written undertaking to hand over an amount or sums owed to the rightful holder within a set deadline, failing which liability arises.",
      "Compromiso escrito de entregar un importe o sumas adeudadas al titular del derecho en un plazo determinado, bajo responsabilidad del firmante.",
      "Impegno scritto di consegnare un importo o somme dovute all'avente diritto entro un termine fissato, con assunzione di responsabilità.",
      "Schriftliche Verpflichtung, einen Betrag oder geschuldete Summen innerhalb der Frist dem Berechtigten auszuhändigen.",
      "Письменное обязательство передать сумму или причитающиеся деньги законному получателю в установленный срок."
    ),
    where: W7(
      "يقدم للمعني بالأداء أو يودع لدى الجهة المكلفة بالتنفيذ عند النزاع",
      "Remis au débiteur ou déposé auprès de l'instance chargée de l'exécution en cas de litige",
      "Handed to the paying party or deposited with the enforcement authority in case of dispute",
      "Se entrega al deudor o se deposita ante la instancia encargada de la ejecución en caso de litigio",
      "Consegnato al debitore o depositato presso l'autorità incaricata dell'esecuzione in caso di contestazione",
      "Dem Zahlungspflichtigen übergeben oder im Streitfall bei der Vollstreckungsstelle hinterlegt",
      "Передаётся плательщику или сдаётся в орган исполнения при споре"
    ),
    keywords: ["مستحقات مالية", "sommes dues", "sums owed", "تسليم", "التزام"],
  },
  {
    id: "ilt-wajibat-tahfiz",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء واجبات التحفيظ العقاري",
      "Engagement de paiement des droits de conservation foncière",
      "Commitment to pay land registration fees",
      "Compromiso de pago de los derechos de conservación inmobiliaria",
      "Impegno di pagamento dei diritti di conservazione fondiaria",
      "Verpflichtung zur Zahlung der Grundbuchgebühren",
      "Обязательство оплатить сборы за регистрацию земли"
    ),
    desc: D7(
      "تعهد بتسديد واجبات ومصاريف التحفيظ العقاري المستحقة على الملف لدى المصالح العقارية.",
      "Engagement de régler les droits et frais d'immatriculation foncière exigibles sur le dossier auprès des services de la conservation.",
      "Undertaking to settle the land registration duties and charges due on the file with the conservation services.",
      "Compromiso de pagar los derechos y gastos de inscripción de tierras exigibles sobre el expediente ante la conservación.",
      "Impegno a saldare i diritti e le spese d'iscrizione fondiaria dovute sul fascicolo presso il servizio di conservazione.",
      "Verpflichtung, die für das Grundbuchverfahren anfallenden Gebühren an die Konservierungsbehörde zu zahlen.",
      "Обязательство оплатить пошлины и расходы на регистрацию земли по делу в кадастровой службе."
    ),
    where: W7(
      "وكالة المحافظة العقارية والمسح العقاري والخرائطية التابع لها العقار محل التحفيظ",
      "Agence de la conservation foncière, du cadastre et de la cartographie du ressort de l'immeuble à immatriculer",
      "Land registry, cadastre and cartography agency with jurisdiction over the property being registered",
      "Agencia de conservación inmobiliaria, catastro y cartografía competente por el inmueble a inscribir",
      "Agenzia della conservazione fondiaria, catasto e cartografia competente per l'immobile da iscrivere",
      "Grundbuch-, Kataster- und Kartographiebehörde, die für das einzutragende Grundstück zuständig ist",
      "Агентство по регистрации земли, кадастру и картографии по месту регистрируемого объекта"
    ),
    authority: "ancfcc",
    keywords: ["التحفيظ العقاري", "conservation foncière", "land registry", "ANCFCC", "واجبات"],
  },
  // ─── Véhicules ───
  {
    id: "ilt-sayara-mashtari",
    cat: "iltizamat",
    title: T7(
      "التزام مشتري السيارة بتحمل مسؤوليتها",
      "Engagement de l'acquéreur d'un véhicule d'assumer sa responsabilité",
      "Car buyer's commitment to assume responsibility for it",
      "Compromiso del comprador del vehículo de asumir su responsabilidad",
      "Impegno dell'acquirente dell'auto ad assumerne la responsabilità",
      "Verpflichtung des Fahrzeugkäufers zur Übernahme der Verantwortung",
      "Обязательство покупателя автомобиля принять ответственность за него"
    ),
    desc: D7(
      "تعهد المشتري بتحمل جميع تبعات السيارة المشتراة من تاريخ البيع إلى حين نقل الملكية بالكتابة المختصة.",
      "Engagement de l'acquéreur à assumer toutes les conséquences du véhicule dès la vente jusqu'au transfert de propriété.",
      "Buyer's undertaking to bear all consequences of the purchased vehicle from the sale until ownership transfer.",
      "Compromiso del comprador de asumir todas las consecuencias del vehículo desde la venta hasta la transferencia de propiedad.",
      "Impegno dell'acquirente ad assumere ogni conseguenza del veicolo dalla vendita al trasferimento di proprietà.",
      "Verpflichtung des Käufers, alle Folgen des Fahrzeugs vom Kauf bis zur Eigentumsübertragung zu tragen.",
      "Обязательство покупателя нести все последствия автомобиля с момента продажи до перехода права собственности."
    ),
    where: W7(
      "يرفق بوثائق البيع ويقدم للخبراء المعتمدين لدى كتابة الضبط عند نقل الملكية",
      "Joint aux documents de vente et remis aux experts agréés près le greffe lors du transfert de propriété",
      "Attached to the sale documents and submitted to the certified experts at the court registry during ownership transfer",
      "Se adjunta a los documentos de venta y se entrega a los peritos homologados del juzgado al transferir la propiedad",
      "Allegato ai documenti di vendita e consegnato ai periti abilitati presso la cancelleria al momento del trasferimento",
      "Den Verkaufsunterlagen beigefügt und beim Eigentumsübergang den vereidigten Sachverständigen am Gericht vorgelegt",
      "Прилагается к документам купли-продажи и подаётся сертифицированным экспертам при переоформлении собственности"
    ),
    keywords: ["بيع السيارة", "vente de véhicule", "car sale", "نقل الملكية", "responsabilité"],
    popular: true,
  },
  {
    id: "ilt-sayara-qasd-bay",
    cat: "iltizamat",
    title: T7(
      "التزام بتحمل مسؤولية سيارة مسلمة قصد البيع",
      "Engagement de responsabilité pour un véhicule confié en dépôt-vente",
      "Responsibility commitment for a vehicle entrusted for sale on consignment",
      "Compromiso de responsabilidad por un vehículo confiado en venta en depósito",
      "Impegno di responsabilità per un veicolo affidato in conto vendita",
      "Haftungsverpflichtung für ein zum Verkauf überlassenes Fahrzeug",
      "Обязательство ответственности за автомобиль, переданный на комиссионную продажу"
    ),
    desc: D7(
      "تعهد الوكيل أو معرض السيارات بتحمل مسؤولية سيارة سلمها له مالكها قصد بيعها لحين ردها أو بيعها.",
      "Engagement du mandataire ou du concessionnaire d'assumer la responsabilité d'un véhicule confié par son propriétaire en vue de sa vente.",
      "Agent's or dealer's undertaking to bear responsibility for a vehicle entrusted by its owner pending sale or return.",
      "Compromiso del agente o concesionario de asumir la responsabilidad de un vehículo confiado por su propietario para su venta.",
      "Impegno del mandatario o concessionario di assumere la responsabilità di un veicolo affidato dal proprietario per la vendita.",
      "Verpflichtung des Vermittlers oder Händlers, die Verantwortung für ein vom Eigentümer zum Verkauf übergebenes Fahrzeug zu tragen.",
      "Обязательство посредника или дилера нести ответственность за автомобиль, переданный владельцем на продажу."
    ),
    where: W7(
      "يحرر بين المالك والوكيل ويحفظ مع محضر تسليم المركبة",
      "Établi entre le propriétaire et le mandataire et conservé avec le procès-verbal de remise du véhicule",
      "Drawn up between owner and agent and kept with the vehicle handover report",
      "Se redacta entre el propietario y el agente y se conserva con el acta de entrega del vehículo",
      "Redatto tra proprietario e mandatario e conservato con il verbale di consegna del veicolo",
      "Zwischen Eigentümer und Vermittler erstellt und mit dem Fahrzeugübergabeprotokoll aufbewahrt",
      "Составляется между владельцем и посредником и хранится с актом передачи автомобиля"
    ),
    keywords: ["سيارة قصد البيع", "dépôt-vente", "consignment sale", "معرض السيارات", "وكيل"],
  },
  {
    id: "ilt-darrajat-nariya",
    cat: "iltizamat",
    title: T7(
      "التزام بتحمل مسؤولية دراجة نارية",
      "Engagement de responsabilité pour une motocyclette",
      "Commitment to assume responsibility for a motorcycle",
      "Compromiso de asumir la responsabilidad de una motocicleta",
      "Impegno di responsabilità per un motociclo",
      "Haftungsverpflichtung für ein Motorrad",
      "Обязательство ответственности за мотоцикл"
    ),
    desc: D7(
      "تعهد مشتري الدراجة النارية بتحمل ما يترتب عنها من مسؤولية إلى حين استكمال نقل ملكيتها.",
      "Engagement de l'acquéreur d'une motocyclette à en assumer la responsabilité jusqu'à l'achèvement du transfert de propriété.",
      "Motorcycle buyer's undertaking to bear responsibility for it until the ownership transfer is completed.",
      "Compromiso del comprador de la motocicleta de asumir su responsabilidad hasta completar la transferencia de propiedad.",
      "Impegno dell'acquirente del motociclo ad assumerne la responsabilità fino al completamento del trasferimento di proprietà.",
      "Verpflichtung des Motorradkäufers, die Verantwortung bis zum Abschluss der Eigentumsübertragung zu tragen.",
      "Обязательство покупателя мотоцикла нести за него ответственность до завершения переоформления собственности."
    ),
    where: W7(
      "يرفق بعقد البيع ويقدم مع ملف نقل الملكية للمصالح المختصة",
      "Joint au contrat de vente et déposé avec le dossier de transfert de propriété auprès des services compétents",
      "Attached to the sale contract and filed with the ownership transfer file at the competent services",
      "Se adjunta al contrato de venta y se presenta con el expediente de transferencia ante los servicios competentes",
      "Allegato al contratto di vendita e depositato con il fascicolo di trasferimento presso i servizi competenti",
      "Dem Kaufvertrag beigefügt und mit dem Eigentumsübertragungsdossier bei den zuständigen Stellen eingereicht",
      "Прилагается к договору купли-продажи и подаётся с делом о переоформлении в компетентные службы"
    ),
    keywords: ["دراجة نارية", "motocyclette", "motorcycle", "نقل الملكية", "مسؤولية"],
  },
  {
    id: "ilt-mukhalafat-markaba",
    cat: "iltizamat",
    title: T7(
      "التزام بدفع الغرامات والمخالفات المرورية عن مركبة مباعة",
      "Engagement de payer les amendes et contraventions routières d'un véhicule vendu",
      "Commitment to pay the traffic fines of a sold vehicle",
      "Compromiso de pagar las multas e infracciones de tráfico de un vehículo vendido",
      "Impegno di pagare le multe e violazioni stradali di un veicolo venduto",
      "Verpflichtung zur Zahlung der Verkehrsbußen eines verkauften Fahrzeugs",
      "Обязательство оплатить штрафы за нарушение ПДД проданным автомобилем"
    ),
    desc: D7(
      "تعهد المشتري بتسديد الغرامات والمخالفات المرورية المسجلة على المركبة بعد تاريخ تسليمها إليه.",
      "Engagement de l'acquéreur de régler les amendes et contraventions enregistrées sur le véhicule après sa date de remise.",
      "Buyer's undertaking to settle fines and contraventions recorded against the vehicle after its handover date.",
      "Compromiso del comprador de pagar las multas e infracciones registradas sobre el vehículo tras su entrega.",
      "Impegno dell'acquirente di saldare le multe e violazioni registrate sul veicolo dopo la data di consegna.",
      "Verpflichtung des Käufers, die nach dem Übergabedatum verzeichneten Bußgelder des Fahrzeugs zu begleichen.",
      "Обязательство покупателя оплатить штрафы, зафиксированные на автомобиле после даты его передачи."
    ),
    where: W7(
      "يحرر مع عقد البيع ويقدم عند التظلم من المخالفات غير المترتبة على المشتري",
      "Établi avec le contrat de vente et produit lors des réclamations contre les infractions non imputables à l'acquéreur",
      "Drawn up with the sale contract and produced when contesting infractions not attributable to the buyer",
      "Se redacta con el contrato de venta y se presenta al reclamar infracciones no imputables al comprador",
      "Redatto con il contratto di vendita e prodotto per contestare le violazioni non imputabili all'acquirente",
      "Mit dem Kaufvertrag erstellt und bei Einsprüchen gegen nicht vom Käufer zu verantwortende Verstöße vorgelegt",
      "Составляется с договором купли-продажи и предъявляется при оспаривании нарушений, не относящихся к покупателю"
    ),
    keywords: ["مخالفات مرورية", "contraventions", "traffic fines", "غرامات", "بيع السيارة"],
  },
  {
    id: "ilt-markaba-muhjaz",
    cat: "iltizamat",
    title: T7(
      "التزام باسترجاع مركبة من المحجز",
      "Engagement pour le retrait d'un véhicule mis en fourrière",
      "Commitment to retrieve a vehicle from the impound",
      "Compromiso para retirar un vehículo del depósito",
      "Impegno per il ritiro di un veicolo dal deposito",
      "Verpflichtung zur Auslösung eines Fahrzeugs aus dem Verwahrplatz",
      "Обязательство забрать автомобиль со штрафстоянки"
    ),
    desc: D7(
      "تعهد المعني بأداء مصاريف الحجز والحفظ واسترجاع المركبة المحجوزة في أجل قانوني.",
      "Engagement de l'intéressé à payer les frais de fourrière et de garde et à retirer le véhicule saisi dans le délai légal.",
      "Concerned party's undertaking to pay impound and custody fees and retrieve the seized vehicle within the legal deadline.",
      "Compromiso del interesado de pagar las tasas de depósito y custodia y retirar el vehículo embargado en el plazo legal.",
      "Impegno dell'interessato a pagare le spese di deposito e custodia e a ritirare il veicolo sequestrato entro il termine legale.",
      "Verpflichtung, Verwahr- und Bewachungsgebühren zu zahlen und das beschlagnahmte Fahrzeug fristgerecht abzuholen.",
      "Обязательство заинтересованного лица оплатить сборы за удержание и хранение и забрать автомобиль в законный срок."
    ),
    where: W7(
      "مصلحة الحجز التابعة للشرطة أو الدرك الملكي التي بحوزتها المركبة",
      "Service de la fourrière relevant de la police ou de la gendarmerie royale détenant le véhicule",
      "Impound service of the police or royal gendarmerie holding the vehicle",
      "Servicio de depósito de la policía o la gendarmería real que retiene el vehículo",
      "Servizio deposito della polizia o della gendarmeria reale che detiene il veicolo",
      "Verwahrstelle der Polizei oder Königlichen Gendarmerie, die das Fahrzeug verwahrt",
      "Служба штрафстоянки полиции или королевской жандармерии, удерживающая автомобиль"
    ),
    keywords: ["محجز", "fourrière", "impound", "استرجاع السيارة", "retrait"],
  },
  // ─── Hygiène & établissements ───
  {
    id: "ilt-maqha-matam",
    cat: "iltizamat",
    title: T7(
      "التزام مقهى أو مطعم باحترام شروط النظافة",
      "Engagement d'un café ou restaurant au respect des règles d'hygiène",
      "Café or restaurant commitment to hygiene rules",
      "Compromiso de un café o restaurante de respetar las normas de higiene",
      "Impegno di un bar o ristorante al rispetto delle norme igieniche",
      "Verpflichtung eines Cafés oder Restaurants zur Einhaltung der Hygienevorschriften",
      "Обязательство кафе или ресторана соблюдать санитарные нормы"
    ),
    desc: D7(
      "تعهد صاحب المقهى أو المطعم بضمان نظافة المحل ولوازمه ومواده الغذائية وفق التشريع الجاري به العمل.",
      "Engagement de l'exploitant d'un café ou restaurant à garantir la propreté du local, de son matériel et de ses denrées conformément à la loi.",
      "Operator's undertaking to guarantee cleanliness of the premises, equipment and foodstuffs in accordance with the law.",
      "Compromiso del titular de un café o restaurante de garantizar la limpieza del local, el material y los alimentos conforme a la ley.",
      "Impegno del gestore di un bar o ristorante a garantire la pulizia dei locali, delle attrezzature e degli alimenti secondo la legge.",
      "Verpflichtung des Betreibers, die Sauberkeit von Räumen, Ausstattung und Lebensmitteln gesetzlich konform zu gewährleisten.",
      "Обязательство владельца кафе или ресторана обеспечивать чистоту помещения, оборудования и продуктов согласно закону."
    ),
    where: W7(
      "مصلحة النظافة والصحة بالجماعة الترابية أو المصالح المختصة بوزارة الصحة",
      "Service d'hygiène de la collectivité territoriale ou services compétents du ministère de la Santé",
      "Hygiene service of the local authority or competent services of the Ministry of Health",
      "Servicio de higiene de la colectividad territorial o servicios competentes del Ministerio de Salud",
      "Servizio igiene dell'ente territoriale o servizi competenti del ministero della Salute",
      "Hyginedienst der Gebietskörperschaft oder zuständige Dienste des Gesundheitsministeriums",
      "Служба санитарии местной администрации или профильные службы Минздрава"
    ),
    keywords: ["مقهى", "مطعم", "hygiène", "نظافة", "café restaurant"],
  },
  {
    id: "ilt-mahall-halaqa",
    cat: "iltizamat",
    title: T7(
      "التزام محل الحلاقة والتجميل بالنظافة",
      "Engagement d'un salon de coiffure au respect de l'hygiène",
      "Barbershop's hygiene commitment",
      "Compromiso de higiene de una peluquería",
      "Impegno di igiene di un salone di barbiere",
      "Hygieneverpflichtung eines Friseursalons",
      "Санитарное обязательство парикмахерской"
    ),
    desc: D7(
      "تعهد الحلاق بتعقيم أدواته والمحافظة على نظافة المحل تجاه زبنائه والمراقبين الصحيين.",
      "Engagement du coiffeur à stériliser ses instruments et à maintenir la propreté du local à l'égard de sa clientèle et des contrôleurs.",
      "Barber's undertaking to sterilise instruments and keep the premises clean for customers and health inspectors.",
      "Compromiso del peluquero de esterilizar sus instrumentos y mantener la limpieza del local para clientes e inspectores.",
      "Impegno del barbiere a sterilizzare gli strumenti e mantenere puliti i locali per clienti e ispettori.",
      "Verpflichtung des Friseurs, Instrumente zu sterilisieren und die Räume für Kunden und Kontrolleure sauber zu halten.",
      "Обязательство парикмахера стерилизовать инструменты и содержать помещение в чистоте для клиентов и инспекторов."
    ),
    where: W7(
      "مصلحة النظافة بالجماعة الترابية ومصالح المراقبة الصحية التابعة لها",
      "Service d'hygiène de la collectivité territoriale et ses services de contrôle sanitaire",
      "Hygiene service of the local authority and its sanitary inspection services",
      "Servicio de higiene de la colectividad territorial y sus servicios de control sanitario",
      "Servizio igiene dell'ente territoriale e i suoi servizi di controllo sanitario",
      "Hyginedienst der Gebietskörperschaft und deren Gesundheitskontrolldienste",
      "Служба санитарии местной администрации и её санитарно-контрольные службы"
    ),
    keywords: ["حلاقة", "salon de coiffure", "barbershop", "نظافة", "hygiène"],
  },
  {
    id: "ilt-hammam",
    cat: "iltizamat",
    title: T7(
      "التزام حمام تقليدي باحترام شروط النظافة",
      "Engagement d'un bain maure au respect des conditions d'hygiène",
      "Traditional bathhouse's hygiene commitment",
      "Compromiso de higiene de un hammam tradicional",
      "Impegno di igiene di un hammam tradizionale",
      "Hygieneverpflichtung eines traditionellen Badehauses",
      "Санитарное обязательство традиционной бани"
    ),
    desc: D7(
      "تعهد مكري الحمام بتجديد مياهه وتنظيف مرافقه والمحافظة على سلامة مرتاديه.",
      "Engagement de l'exploitant du hammam à renouveler l'eau, à nettoyer les installations et à préserver la sécurité des usagers.",
      "Bathhouse operator's undertaking to renew the water, clean the facilities and safeguard users' safety.",
      "Compromiso del explotador del hammam de renovar el agua, limpiar las instalaciones y proteger la seguridad de los usuarios.",
      "Impegno del gestore dell'hammam a rinnovare l'acqua, pulire le strutture e tutelare l'incolumità degli utenti.",
      "Verpflichtung des Hammam-Betreibers, das Wasser zu erneuern, die Anlagen zu reinigen und die Sicherheit der Nutzer zu wahren.",
      "Обязательство владельца хаммама обновлять воду, чистить помещения и обеспечивать безопасность посетителей."
    ),
    where: W7(
      "مصلحة النظافة والصحة بالجماعة الترابية التي يوجد بها الحمام",
      "Service d'hygiène et de santé de la collectivité territoriale du ressort du hammam",
      "Hygiene and health service of the local authority where the bathhouse operates",
      "Servicio de higiene y salud de la colectividad territorial donde opera el hammam",
      "Servizio igiene e salute dell'ente territoriale dove opera l'hammam",
      "Hygiene- und Gesundheitsdienst der Gebietskörperschaft, in der das Hammam liegt",
      "Служба санитарии и здравоохранения местной администрации по месту работы хаммама"
    ),
    keywords: ["حمام", "hammam", "bathhouse", "نظافة", "hygiène"],
  },
  {
    id: "ilt-tatabbu-sihhi",
    cat: "iltizamat",
    title: T7(
      "التزام مؤسسة غذائية بالتتبع الصحي للعمال",
      "Engagement d'un établissement alimentaire au suivi médical du personnel",
      "Food establishment's commitment to staff medical monitoring",
      "Compromiso de un establecimiento alimentario con el seguimiento médico del personal",
      "Impegno di uno stabilimento alimentare al controllo medico del personale",
      "Verpflichtung eines Lebensmittelbetriebs zur ärztlichen Überwachung des Personals",
      "Обязательство продовольственного предприятия по медосмотру персонала"
    ),
    desc: D7(
      "تعهد المؤسسة بإخضاع عمالها للفحوصات الطبية الدورية وإشهاد خلوهم من الأمراض المعدية.",
      "Engagement de l'établissement à soumettre son personnel aux visites médicales périodiques attestant l'absence de maladies contagieuses.",
      "Establishment's undertaking to submit staff to periodic medical visits certifying absence of contagious diseases.",
      "Compromiso del establecimiento de someter a su personal a reconocimientos médicos periódicos que certifiquen la ausencia de enfermedades contagiosas.",
      "Impegno dello stabilimento a sottoporre il personale a visite mediche periodiche che attestino l'assenza di malattie contagiose.",
      "Verpflichtung des Betriebs, das Personal regelmäßigen ärztlichen Untersuchungen auf ansteckende Krankheiten zu unterziehen.",
      "Обязательство предприятия направлять персонал на периодические медосмотры, подтверждающие отсутствие заразных болезней."
    ),
    where: W7(
      "مصالح المراقبة الصحية بالجماعة أو المندوبية الإقليمية لوزارة الصحة",
      "Services de contrôle sanitaire de la commune ou délégation provinciale du ministère de la Santé",
      "Sanitary inspection services of the commune or provincial delegation of the Ministry of Health",
      "Servicios de control sanitario del municipio o delegación provincial del Ministerio de Salud",
      "Servizi di controllo sanitario del comune o delegazione provinciale del ministero della Salute",
      "Gesundheitskontrolldienste der Gemeinde oder Provinzdelegation des Gesundheitsministeriums",
      "Службы санитарного контроля коммуны или провинциальная делегация Минздрава"
    ),
    keywords: ["الفحص الطبي", "visite médicale", "medical check-up", "عمال", "مؤسسة غذائية"],
  },
  {
    id: "ilt-muharabat-tadkhin",
    cat: "iltizamat",
    title: T7(
      "التزام بمحاربة التدخين داخل المحل",
      "Engagement de lutte contre le tabagisme dans l'établissement",
      "Commitment to combat smoking on the premises",
      "Compromiso de lucha contra el tabaquismo en el establecimiento",
      "Impegno di lotta al fumo nei locali",
      "Verpflichtung zur Tabakbekämpfung im Betrieb",
      "Обязательство бороться с курением в заведении"
    ),
    desc: D7(
      "تعهد بتثبيت لافتات المنع ومراقبة احترام حظر التدخين داخل المحل طبقا للتشريع الجاري به العمل.",
      "Engagement à apposer les signalisations et à faire respecter l'interdiction de fumer dans l'établissement conformément à la législation en vigueur.",
      "Undertaking to display signage and enforce the smoking ban on the premises under current legislation.",
      "Compromiso de colocar la señalización y hacer respetar la prohibición de fumar en el establecimiento conforme a la legislación vigente.",
      "Impegno ad affiggere la segnaletica e far rispettare il divieto di fumo nei locali secondo la legislazione vigente.",
      "Verpflichtung, Beschilderung anzubringen und das Rauchverbot im Betrieb gemäß geltender Rechtslage durchzusetzen.",
      "Обязательство разместить знаки и обеспечить соблюдение запрета курения в заведении согласно действующему законодательству."
    ),
    where: W7(
      "مصلحة النظافة بالجماعة الترابية أو لجان المراقبة المختصة",
      "Service d'hygiène de la collectivité territoriale ou commissions de contrôle compétentes",
      "Hygiene service of the local authority or the competent inspection committees",
      "Servicio de higiene de la colectividad territorial o comisiones de control competentes",
      "Servizio igiene dell'ente territoriale o commissioni di controllo competenti",
      "Hyginedienst der Gebietskörperschaft oder zuständige Prüfungskommissionen",
      "Служба санитарии местной администрации или компетентные контрольные комиссии"
    ),
    keywords: ["التدخين", "tabagisme", "smoking", "حظر التدخين", "محل"],
  },
  {
    id: "ilt-muassasa-funduqiyya",
    cat: "iltizamat",
    title: T7(
      "التزام مؤسسة إيواء سياحية باحترام شروط النظافة",
      "Engagement d'un établissement d'hébergement touristique au respect de l'hygiène",
      "Tourist accommodation establishment's hygiene commitment",
      "Compromiso de higiene de un establecimiento turístico de alojamiento",
      "Impegno di igiene di una struttura ricettiva turistica",
      "Hygieneverpflichtung einer Beherbergungsstätte",
      "Санитарное обязательство гостиничного учреждения"
    ),
    desc: D7(
      "تعهد المؤسسة الفندقية أو دار الضيافة بتوفير أماكن نظيفة ومطابقة للمعايير المطلوبة لاستقبال الزبناء.",
      "Engagement de l'hôtel ou maison d'hôtes à offrir des locaux propres et conformes aux normes exigées pour l'accueil de la clientèle.",
      "Hotel's or guesthouse's undertaking to provide clean premises meeting required standards for receiving guests.",
      "Compromiso del hotel o casa de huéspedes de ofrecer instalaciones limpias y conformes a las normas exigidas para atender a los clientes.",
      "Impegno dell'albergo o della casa per ferie di offrire locali puliti e conformi agli standard richiesti per l'accoglienza.",
      "Verpflichtung des Hotels oder der Pension, saubere und normgerechte Räume für die Gästebetreuung bereitzustellen.",
      "Обязательство отеля или гостевого дома предоставлять чистые помещения, отвечающие требуемым стандартам приёма гостей."
    ),
    where: W7(
      "مصلحة النظافة بالجماعة والمندوبية الإقليمية للسياحة عند طلب الرخصة أو تجديدها",
      "Service d'hygiène de la commune et délégation provinciale du tourisme pour la demande ou le renouvellement de la licence",
      "Commune hygiene service and provincial tourism delegation for the licence application or renewal",
      "Servicio de higiene del municipio y delegación provincial de turismo para la solicitud o renovación de la licencia",
      "Servizio igiene del comune e delegazione provinciale del turismo per la richiesta o il rinnovo della licenza",
      "Hyginedienst der Gemeinde und Provinzdelegation für Tourismus bei Lizenzantrag oder -verlängerung",
      "Служба санитарии коммуны и провинциальная делегация по туризму при получении или продлении лицензии"
    ),
    keywords: ["مؤسسة فندقية", "établissement touristique", "tourist accommodation", "نظافة", "دار الضيافة"],
  },
  // ─── Construction & travaux ───
  {
    id: "ilt-ashghal-mulaima",
    cat: "iltizamat",
    title: T7(
      "التزام بإنجاز أشغال الملاءمة",
      "Engagement de réalisation des travaux de mise en conformité",
      "Commitment to carry out compliance works",
      "Compromiso de ejecutar las obras de adecuación",
      "Impegno di esecuzione dei lavori di messa a norma",
      "Verpflichtung zur Durchführung von Anpassungsarbeiten",
      "Обязательство выполнить работы по приведению в соответствие"
    ),
    desc: D7(
      "تعهد المالك بإنجاز أشغال تسوية البناء المخالف في الآجال المحددة من طرف السلطات المختصة.",
      "Engagement du propriétaire à réaliser les travaux de règlement de la construction irrégulière dans les délais fixés par les autorités compétentes.",
      "Owner's undertaking to complete the works to regularise the irregular construction within deadlines set by the competent authorities.",
      "Compromiso del propietario de ejecutar las obras de regularización de la construcción irregular en los plazos fijados por las autoridades competentes.",
      "Impegno del proprietario a eseguire i lavori di regolarizzazione della costruzione abusiva nei termini fissati dalle autorità competenti.",
      "Verpflichtung des Eigentümers, die Arbeiten zur Legalisierung des regelwidrigen Baus fristgerecht nach Vorgabe der Behörden auszuführen.",
      "Обязательство собственника выполнить работы по узаконению самовольной постройки в сроки, установленные властями."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التعمير بالجماعة الترابية المعنية بالملف",
      "Agence urbaine ou service d'urbanisme de la collectivité territoriale concernée",
      "Urban agency or planning service of the local authority concerned",
      "Agencia urbana o servicio de urbanismo de la colectividad territorial correspondiente",
      "Agenzia urbana o servizio urbanistico dell'ente territoriale competente",
      "Stadtentwicklungsagentur oder Planungsamt der betreffenden Gebietskörperschaft",
      "Городское агентство или служба градостроительства соответствующей администрации"
    ),
    keywords: ["أشغال الملاءمة", "travaux de mise en conformité", "compliance works", "تسوية بناء", "regularisation"],
  },
  {
    id: "ilt-tasmim-musadaq",
    cat: "iltizamat",
    title: T7(
      "التزام بالبناء وفق التصميم المصادق عليه",
      "Engagement de construire conformément au plan approuvé",
      "Commitment to build according to the approved plan",
      "Compromiso de construir conforme al plano aprobado",
      "Impegno a costruire secondo il piano approvato",
      "Verpflichtung zum Bau gemäß dem genehmigten Plan",
      "Обязательство строить по утверждённому плану"
    ),
    desc: D7(
      "تعهد بإنجاز البناء مطابقا تماما للتصميم ومقتضيات رخصة البناء المسلمة دون أي تغيير.",
      "Engagement à réaliser la construction en stricte conformité avec le plan et les dispositions du permis de construire délivré.",
      "Undertaking to carry out the construction in strict conformity with the plan and provisions of the issued building permit.",
      "Compromiso de ejecutar la construcción en estricta conformidad con el plano y las disposiciones de la licencia otorgada.",
      "Impegno a realizzare la costruzione in stretta conformità al piano e alle disposizioni del permesso edilizio rilasciato.",
      "Verpflichtung, den Bau streng gemäß dem Plan und den Bestimmungen der erteilten Baugenehmigung auszuführen.",
      "Обязательство вести строительство в строгом соответствии с планом и условиями выданного разрешения."
    ),
    where: W7(
      "يودع بملف رخصة البناء لدى الوكالة الحضرية أو مصلحة التعمير بالجماعة",
      "Versé au dossier du permis de construire auprès de l'agence urbaine ou du service d'urbanisme communal",
      "Placed in the building permit file with the urban agency or communal planning service",
      "Se incorpora al expediente de licencia de obra ante la agencia urbana o el servicio municipal de urbanismo",
      "Inserito nel fascicolo del permesso di costruire presso l'agenzia urbana o il servizio urbanistico comunale",
      "Wird dem Bauantragsdossier bei der Stadtentwicklungsagentur oder kommunalen Planungsstelle beigelegt",
      "Подшивается в дело о разрешении на строительство в городское агентство или коммунальную службу градостроительства"
    ),
    keywords: ["التصميم المصادق عليه", "plan approuvé", "approved plan", "رخصة البناء", "permis de construire"],
  },
  {
    id: "ilt-izala-binaa",
    cat: "iltizamat",
    title: T7(
      "التزام بإزالة البناء المخالف وإرجاع الحالة",
      "Engagement de démolir la construction irrégulière et rétablir l'état",
      "Commitment to demolish the irregular construction and restore the site",
      "Compromiso de demoler la construcción irregular y reponer el estado",
      "Impegno a demolire la costruzione abusiva e ripristinare lo stato dei luoghi",
      "Verpflichtung zum Abriss des regelwidrigen Baus und zur Wiederherstellung",
      "Обязательство снести самовольную постройку и восстановить первоначальное состояние"
    ),
    desc: D7(
      "تعهد المعني بهدم ما أنجزه من بناء خلافا للقانون على نفقته الخاصة وإرجاع العقار لحالته الأصلية.",
      "Engagement de l'intéressé à démolir à ses frais la construction édifiée illégalement et à rétablir le terrain en son état initial.",
      "Concerned party's undertaking to demolish at his own expense the unlawfully built structure and restore the land to its original state.",
      "Compromiso del interesado de demoler a su costa la construcción ilegal y restituir el terreno a su estado original.",
      "Impegno dell'interessato a demolire a proprie spese la costruzione abusiva e ripristinare lo stato originario dell'area.",
      "Verpflichtung, den rechtswidrigen Bau auf eigene Kosten abzutragen und das Grundstück in den ursprünglichen Zustand zu versetzen.",
      "Обязательство лица снести за свой счёт незаконную постройку и вернуть участку первоначальное состояние."
    ),
    where: W7(
      "السلطة الإدارية المحلية (القيادة أو الباشوية) ومصلحة التعمير المعنية",
      "Autorité administrative locale (caïdat ou pachalik) et service d'urbanisme concerné",
      "Local administrative authority (caidat or pashalik) and the planning service concerned",
      "Autoridad administrativa local (caidato o pachalí) y servicio de urbanismo competente",
      "Autorità amministrativa locale (caidato o pascialato) e servizio urbanistico competente",
      "Örtliche Verwaltungsbehörde (Caidat oder Paschalik) und zuständige Planungsstelle",
      "Местная административная власть (каидат или пашалык) и профильная служба градостроительства"
    ),
    keywords: ["إزالة البناء", "démolition", "demolition", "بناء مخالف", "irrégulier"],
  },
  {
    id: "ilt-irja-hala-tariq",
    cat: "iltizamat",
    title: T7(
      "التزام بإرجاع حالة الملك العمومي بعد الأشغال",
      "Engagement de rétablissement du domaine public après travaux",
      "Commitment to restore the public domain after works",
      "Compromiso de reponer el dominio público tras las obras",
      "Impegno di ripristino del demanio pubblico dopo i lavori",
      "Verpflichtung zur Wiederherstellung des öffentlichen Bereichs nach Arbeiten",
      "Обязательство восстановить общественную территорию после работ"
    ),
    desc: D7(
      "تعهد صاحب الأشغال بإصلاح ما تضرر من الطريق أو الشبكات العمومية وإرجاعه إلى حالته قبل الأشغال.",
      "Engagement du maître d'ouvrage à réparer les atteintes à la voirie ou aux réseaux publics et à rétablir l'état antérieur aux travaux.",
      "Project owner's undertaking to repair damage to roads or public networks and restore the pre-works condition.",
      "Compromiso del promotor de reparar los daños a la vía o redes públicas y reponer el estado anterior a las obras.",
      "Impegno del committente a riparare i danni a strade o reti pubbliche e ripristinare lo stato anteriore ai lavori.",
      "Verpflichtung des Bauherrn, Schäden an Straßen oder öffentlichen Netzen zu beheben und den Zustand vor Baubeginn wiederherzustellen.",
      "Обязательство заказчика устранить повреждения дорог или общественных сетей и вернуть состояние до работ."
    ),
    where: W7(
      "مصلحة التجهيزات العمومية بالجماعة أو الإدارة المكلفة بالملك العمومي الطرقي",
      "Service des équipements de la commune ou administration gestionnaire du domaine public routier",
      "Commune's public works service or the administration managing the public road domain",
      "Servicio de obras de la municipalidad o administración gestora del dominio público viario",
      "Servizio lavori pubblici del comune o amministrazione gestrice del demanio stradale",
      "Tiefbaudienst der Gemeinde oder die für das öffentliche Straßengut zuständige Verwaltung",
      "Служба коммунального хозяйства коммуны или управление общественными дорогами"
    ),
    keywords: ["الملك العمومي", "domaine public", "public domain", "إرجاع الحالة", "travaux"],
  },
  {
    id: "ilt-ajal-ashghal",
    cat: "iltizamat",
    title: T7(
      "التزام بإنجاز الأشغال في الآجال المحددة",
      "Engagement d'achever les travaux dans les délais fixés",
      "Commitment to complete the works within the set deadlines",
      "Compromiso de finalizar las obras en los plazos fijados",
      "Impegno a completare i lavori entro i termini fissati",
      "Verpflichtung zur Fertigstellung der Arbeiten innerhalb der festgelegten Fristen",
      "Обязательство завершить работы в установленные сроки"
    ),
    desc: D7(
      "تعهد المقاول بإتمام الأشغال موضوع الالتزام في الأجل المحدد تحت طائلة الغرامات.",
      "Engagement de l'entreprise d'achever les travaux objet du marché dans le délai contractuel, sous peine de pénalités.",
      "Contractor's undertaking to complete the works under the contract within the contractual deadline, subject to penalties.",
      "Compromiso de la empresa de finalizar las obras del contrato en el plazo contractual, con aplicación de penalizaciones.",
      "Impegno dell'impresa di completare i lavori oggetto dell'appalto entro il termine contrattuale, pena le penalità.",
      "Verpflichtung des Unternehmens, die Vertragsarbeiten fristgerecht innerhalb der Vertragsfrist zu vollenden, bei Vertragsstrafen.",
      "Обязательство подрядчика завершить договорные работы в контрактный срок под угрозой штрафов."
    ),
    where: W7(
      "يضمن ملف الصفقة العمومية أو العقد الخاص ويودع لدى المشرف على الأشغال",
      "Intègre le dossier du marché public ou le contrat privé et est déposé auprès du maître d'ouvrage",
      "Forms part of the public procurement or private contract file and is deposited with the project owner",
      "Integra el expediente de contratación pública o el contrato privado y se deposita ante el propietario de la obra",
      "Fa parte del fascicolo di gara pubblica o del contratto privato e si deposita presso il committente",
      "Gehört zum öffentlichen Auftrags- oder Privatvertragsdossier und wird beim Bauherrn hinterlegt",
      "Входит в досье госзакупки или частного договора и сдаётся заказчику"
    ),
    keywords: ["آجال الأشغال", "délai de travaux", "works deadline", "مقاول", "صفقة"],
  },
  // ─── Banque, travail & divers ───
  {
    id: "ilt-iqama-maqar-al-amal",
    cat: "iltizamat",
    title: T7(
      "التزام بالإقامة بمقر العمل",
      "Engagement de résidence au lieu de travail",
      "Commitment to reside at the duty station",
      "Compromiso de residir en el lugar de trabajo",
      "Impegno di residenza presso la sede di lavoro",
      "Verpflichtung zum Wohnen am Dienstort",
      "Обязательство проживать по месту службы"
    ),
    desc: D7(
      "تعهد يقدمه الموظف باستقراره بمقر عمله التنظيمي ومزاولة مهامه به بصورة مستمرة.",
      "Engagement du fonctionnaire à résider de manière continue au siège administratif où il exerce ses fonctions.",
      "Civil servant's undertaking to reside continuously at the administrative seat where duties are performed.",
      "Compromiso del funcionario de residir de forma continua en la sede administrativa donde ejerce sus funciones.",
      "Impegno del dipendente pubblico a risiedere stabilmente presso la sede amministrativa di servizio.",
      "Verpflichtung des Beamten, durchgehend am Verwaltungssitz seines Dienstes zu wohnen.",
      "Обязательство служащего постоянно проживать в административном месте службы."
    ),
    where: W7(
      "يودع بملفه الإداري لدى مصلحة الموارد البشرية للإدارة المشغلة",
      "Versé au dossier administratif auprès du service des ressources humaines de l'administration employeur",
      "Placed in the administrative file with the human resources service of the employing administration",
      "Se incorpora al expediente administrativo en el servicio de recursos humanos de la administración empleadora",
      "Inserito nel fascicolo amministrativo presso il servizio risorse umane dell'amministrazione datrice di lavoro",
      "Wird zur Personalakte der einstellenden Behörde gegeben",
      "Подшивается в личное дело в отделе кадров нанимающего ведомства"
    ),
    keywords: ["الإقامة بمقر العمل", "résidence au lieu de travail", "duty station residence", "موظف", "التزام"],
  },
  {
    id: "ilt-aqsat-qard-banki",
    cat: "iltizamat",
    title: T7(
      "التزام بأداء أقساط قرض بنكي",
      "Engagement de remboursement des échéances d'un crédit bancaire",
      "Commitment to repay bank loan instalments",
      "Compromiso de pago de las cuotas de un préstamo bancario",
      "Impegno di rimborso delle rate di un prestito bancario",
      "Verpflichtung zur Tilgung der Raten eines Bankkredits",
      "Обязательство погашать взносы банковского кредита"
    ),
    desc: D7(
      "تعهد المقترض بأداء الأقساط الشهرية للقرض البنكي بكل تبعاتها في مواعيدها المحددة.",
      "Engagement de l'emprunteur à payer les mensualités du crédit bancaire avec tous leurs accessoires à leurs échéances.",
      "Borrower's undertaking to pay the bank loan's monthly instalments, with all accessories, on their due dates.",
      "Compromiso del prestatario de pagar las cuotas mensuales del préstamo bancario con todos sus accesorios en sus fechas de vencimiento.",
      "Impegno del mutuatario di pagare le rate mensili del prestito con tutti gli accessori alle relative scadenze.",
      "Verpflichtung des Kreditnehmers, die Monatsraten des Kredits samt Nebenleistungen fristgerecht zu zahlen.",
      "Обязательство заёмщика своевременно платить ежемесячные взносы по кредиту со всеми начислениями."
    ),
    where: W7(
      "الوكالة البنكية المانحة للقرض ليتم الاحتفاظ به في ملف الالتزام",
      "Agence bancaire prêteuse, pour conservation dans le dossier de crédit",
      "Lending bank branch, for retention in the credit file",
      "Sucursal bancaria prestamista, para su conservación en el expediente de crédito",
      "Filiale bancaria erogante, per la conservazione nel fascicolo di credito",
      "Kreditgebende Bankfiliale zur Aufbewahrung in der Kreditakte",
      "Отделение банка-кредитора для хранения в кредитном деле"
    ),
    keywords: ["أقساط القرض", "échéances de crédit", "loan instalments", "بنك", "قرض"],
  },
  {
    id: "ilt-taqsit-mablagh",
    cat: "iltizamat",
    title: T7(
      "التزام بتقسيط مبلغ مالي",
      "Engagement d'échelonnement d'une somme",
      "Commitment to pay an amount in instalments",
      "Compromiso de fraccionar un importe",
      "Impegno di rateizzazione di un importo",
      "Verpflichtung zur Ratenzahlung eines Betrags",
      "Обязательство выплачивать сумму в рассрочку"
    ),
    desc: D7(
      "تعهد المدين بأداء مبلغ مستحق على دفعات شهرية محددة القيمة والعدد والأجل.",
      "Engagement du débiteur de payer une somme due en mensualités dont le montant, le nombre et l'échéance sont déterminés.",
      "Debtor's undertaking to pay a due amount in monthly instalments whose value, number and deadline are fixed.",
      "Compromiso del deudor de pagar una suma adeudada en mensualidades de importe, número y vencimiento determinados.",
      "Impegno del debitore di pagare una somma dovuta in rate mensili di importo, numero e scadenza determinati.",
      "Verpflichtung des Schuldners, eine geschuldete Summe in monatlichen Raten mit festgelegtem Betrag, Anzahl und Fälligkeit zu zahlen.",
      "Обязательство должника выплачивать причитающуюся сумму ежемесячными взносами с фиксированным размером, числом и сроком."
    ),
    where: W7(
      "يقدم للدائن (إدارة أو مؤسسة أو شخص خاص) ويوثق عند الاقتضاء لدى الموثق",
      "Remis au créancier (administration, institution ou personne privée) et authentifié au besoin chez le notaire",
      "Handed to the creditor (administration, institution or private person) and notarised where necessary",
      "Se entrega al acreedor (administración, institución o persona privada) y se otorga ante notario si procede",
      "Consegnato al creditore (amministrazione, istituzione o privato) e autenticato all'occorrenza dal notaio",
      "Dem Gläubiger (Behörde, Einrichtung oder Privatperson) übergeben und bei Bedarf notariell beglaubigt",
      "Передаётся кредитору (ведомство, учреждение или частное лицо) и при необходимости заверяется у нотариуса"
    ),
    keywords: ["تقسيط", "échelonnement", "instalment payment", "مدين", "التزام"],
  },
  {
    id: "ilt-nafaqat-talib-kharij",
    cat: "iltizamat",
    title: T7(
      "التزام بتحمل نفقات طالب بالخارج",
      "Engagement de prise en charge des frais d'un étudiant à l'étranger",
      "Commitment to cover a student's expenses abroad",
      "Compromiso de cubrir los gastos de un estudiante en el extranjero",
      "Impegno di copertura delle spese di uno studente all'estero",
      "Verpflichtung zur Übernahme der Kosten eines Studenten im Ausland",
      "Обязательство покрывать расходы студента за границей"
    ),
    desc: D7(
      "تعهد الأب أو الكفيل بتغطية نفقات دراسة ومأكل وسكن الطالب بالخارج طوال مدة تكوينه.",
      "Engagement du père ou du garant de couvrir les frais d'études, de subsistance et de logement de l'étudiant à l'étranger durant toute sa formation.",
      "Father's or guarantor's undertaking to cover the study, living and housing costs of a student abroad throughout the training.",
      "Compromiso del padre o aval de cubrir los gastos de estudios, manutención y vivienda del estudiante en el extranjero durante toda su formación.",
      "Impegno del padre o garante di coprire le spese di studio, mantenimento e alloggio dello studente all'estero per tutta la durata della formazione.",
      "Verpflichtung des Vaters oder Bürgen, die Studien-, Lebenshaltungs- und Wohnkosten des Studenten im Ausland während der gesamten Ausbildung zu tragen.",
      "Обязательство отца или поручителя покрывать расходы на учёбу, проживание и жильё студента за границей в течение всего обучения."
    ),
    where: W7(
      "يقدم للسفارة أو القنصلية عند طلب التأشيرة أو تجديدها ولمصلحة المنح إن لزم",
      "Présenté à l'ambassade ou au consulat pour la demande ou le renouvellement du visa et au service des bourses si nécessaire",
      "Presented to the embassy or consulate for the visa application or renewal and to the scholarships office if required",
      "Se presenta ante la embajada o el consulado para la solicitud o renovación del visado y al servicio de becas si procede",
      "Presentato all'ambasciata o al consolato per la domanda o il rinnovo del visto e all'ufficio borse se necessario",
      "Für Visaantrag oder -verlängerung der Botschaft oder dem Konsulat sowie bei Bedarf dem Stipendienamt vorgelegt",
      "Предъявляется в посольство или консульство для визы или её продления и в отдел стипендий при необходимости"
    ),
    keywords: ["نفقات طالب بالخارج", "frais d'études à l'étranger", "student abroad expenses", "كفالة", "تأشيرة"],
  },
  {
    id: "ilt-amal-bad-takwin",
    cat: "iltizamat",
    title: T7(
      "التزام بالعمل بعد نهاية التكوين المهني",
      "Engagement de travailler à l'issue de la formation professionnelle",
      "Commitment to work after vocational training",
      "Compromiso de trabajar tras la formación profesional",
      "Impegno a lavorare al termine della formazione professionale",
      "Verpflichtung zur Arbeit nach der Berufsausbildung",
      "Обязательство трудоустроиться после профобучения"
    ),
    desc: D7(
      "تعهد المتدرب بالعمل لدى المؤسسة المشغلة التي تكفلت بتكوينه لمدة معينة بعد نهاية التكوين.",
      "Engagement du stagiaire à travailler, après sa formation, au sein de l'entreprise qui en a supporté le coût pendant une durée convenue.",
      "Trainee's undertaking to work, after training, for the company that funded it for an agreed period.",
      "Compromiso del aprendiz de trabajar, tras la formación, en la empresa que la financió durante un período acordado.",
      "Impegno del tirocinante di lavorare, dopo la formazione, nell'impresa che l'ha finanziata per un periodo convenuto.",
      "Verpflichtung des Auszubildenden, nach der Ausbildung für eine vereinbarte Zeit in dem Unternehmen zu arbeiten, das sie finanziert hat.",
      "Обязательство стажера после обучения работать в компании, оплатившей его, в течение согласованного срока."
    ),
    where: W7(
      "مؤسسة التكوين المهني أو المؤسسة المشغلة الضامنة لنجاح المسار",
      "Établissement de formation professionnelle ou entreprise employante garante du parcours",
      "Vocational training establishment or the sponsoring employer company",
      "Centro de formación profesional o la empresa empleadora patrocinadora",
      "Istituto di formazione professionale o l'impresa datrice di lavoro garante",
      "Berufsbildungseinrichtung oder das fördernde Beschäftigungsunternehmen",
      "Учреждение профобучения или компания-работодатель, обеспечивающая программу"
    ),
    authority: "ofppt",
    keywords: ["التكوين المهني", "OFPPT", "formation professionnelle", "vocational training", "التزام بالعمل"],
  },
  {
    id: "ilt-irja-minha",
    cat: "iltizamat",
    title: T7(
      "التزام بإرجاع المنحة عند عدم احترام شروطها",
      "Engagement de restituer la bourse en cas de non-respect des conditions",
      "Commitment to repay the scholarship if conditions are not met",
      "Compromiso de devolver la beca en caso de incumplir las condiciones",
      "Impegno a restituire la borsa in caso di mancato rispetto delle condizioni",
      "Verpflichtung zur Rückzahlung des Stipendiums bei Nichterfüllung der Bedingungen",
      "Обязательство вернуть стипендию при несоблюдении условий"
    ),
    desc: D7(
      "تعهد المستفيد من منحة دراسية بإرجاع المبالغ المدفوعة إذا تخلى عن دراسته أو خالف التزاماته.",
      "Engagement du boursier à restituer les sommes versées s'il abandonne ses études ou manque à ses obligations.",
      "Scholarship holder's undertaking to repay the amounts paid if he drops out or breaches his obligations.",
      "Compromiso del becario de devolver las sumas abonadas si abandona los estudios o incumple sus obligaciones.",
      "Impegno del borsista a restituire le somme erogate se abbandona gli studi o viola i suoi obblighi.",
      "Verpflichtung des Stipendiaten, die ausgezahlten Beträge zurückzuerstatten, wenn er das Studium abbricht oder Pflichten verletzt.",
      "Обязательство стипендиата вернуть выплаченные суммы при бросании учёбы или нарушении обязательств."
    ),
    where: W7(
      "مؤسسة التعليم العالي أو المصلحة المانحة للمنحة بموجب عقد المنحة",
      "Établissement d'enseignement supérieur ou service attributaire de la bourse en vertu de la convention",
      "Higher education institution or the scholarship-granting service under the scholarship agreement",
      "Institución de educación superior o servicio otorgante de la beca en virtud del convenio",
      "Istituto di istruzione superiore o servizio erogante la borsa in base alla convenzione",
      "Hochschuleinrichtung oder die stipendienvergebende Stelle gemäß Stipendienvereinbarung",
      "Вуз или служба, предоставляющая стипендию, согласно договору о стипендии"
    ),
    authority: "enssup",
    keywords: ["إرجاع المنحة", "restitution de bourse", "scholarship repayment", "منحة", "bourse"],
  },
];
