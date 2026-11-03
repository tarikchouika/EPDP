import type { Locale } from "@/lib/i18n/types";

export interface ChatIntent {
  id: string;
  keywords: Partial<Record<Locale, string[]>>; // matching keywords per language
  answer: Record<Locale, string>;
  sources: string[]; // official link ids ONLY — no invented URLs ever
  suggestions?: string[]; // intent ids to suggest as quick replies
}

const A = (ar: string, en: string, fr: string, es: string, it: string, de: string, ru: string) =>
  ({ ar, en, fr, es, it, de, ru } as Record<Locale, string>);

export const chatIntents: ChatIntent[] = [
  {
    id: "greeting",
    keywords: {
      ar: ["مرحبا", "السلام", "اهلا", "أهلا", "صباح", "مساء", "سلام"],
      en: ["hello", "hi", "hey", "good morning", "good evening", "greetings"],
      fr: ["bonjour", "salut", "bonsoir", "b_sr"],
      es: ["hola", "buenos días", "buenas"],
      it: ["ciao", "buongiorno", "salve"],
      de: ["hallo", "guten tag", "guten morgen", "hi"],
      ru: ["привет", "здравствуйте", "добрый день", "доброе утро"],
    },
    answer: A(
      "مرحباً بك وسهلاً! أنا المساعد الذكي لمنصة الكاتب العمومي الرقمية. اسألني عن أي وثيقة أو إجراء إداري مغربي (البطاقة الوطنية، جواز السفر، CNSS، AMO تضامن، الضرائب، عقود الكراء...) وسأجيبك من المصادر الرسمية.",
      "Welcome! I'm the smart assistant of the Digital Public Writer Platform. Ask me about any Moroccan administrative document or procedure (ID card, passport, CNSS, AMO Tadamon, taxes, lease contracts...) and I'll answer from official sources.",
      "Bienvenue ! Je suis l'assistant intelligent de la plateforme numérique du katib public. Interrogez-moi sur tout document ou démarche administrative marocaine (CIN, passeport, CNSS, AMO Tadamon, impôts, contrats de bail...) et je répondrai à partir des sources officielles.",
      "¡Bienvenido! Soy el asistente inteligente de la plataforma digital del escribano público. Pregúntame sobre cualquier documento o trámite administrativo marroquí (DNI, pasaporte, CNSS, AMO Tadamon, impuestos, contratos de alquiler...) y responderé desde fuentes oficiales.",
      "Benvenuto! Sono l'assistente intelligente della piattaforma digitale dello scrivano pubblico. Chiedimi qualsiasi documento o procedura amministrativa marocchina (CIN, passaporto, CNSS, AMO Tadamon, tasse, contratti di locazione...) e risponderò da fonti ufficiali.",
      "Willkommen! Ich bin der intelligente Assistent der digitalen Plattform für öffentliche Schreiber. Fragen Sie mich zu marokkanischen Verwaltungsdokumenten oder -verfahren (Ausweis, Pass, CNSS, AMO Tadamon, Steuern, Mietverträge...) — ich antworte aus offiziellen Quellen.",
      "Добро пожаловать! Я умный помощник цифровой платформы общественного писца. Спросите меня о любом марокканском документе или процедуре (удостоверение, паспорт, CNSS, AMO Tadamon, налоги, аренда...) — отвечу по официальным источникам."
    ),
    sources: [],
    suggestions: ["carte-nationale", "passeport", "amo-tadamon"],
  },
  {
    id: "carte-nationale",
    keywords: {
      ar: ["البطاقة الوطنية", "بطاقة التعريف", "البيومترية", "بطاقة وطنية", "تجديد البطاقة"],
      en: ["id card", "national id", "cin card", "biometric card"],
      fr: ["carte nationale", "cin", "carte d'identité", "carte biométrique"],
      es: ["dni", "carné de identidad", "tarjeta de identidad"],
      it: ["carta d'identità", "documento d'identità"],
      de: ["ausweis", "personalausweis"],
      ru: ["удостоверение личности", "карта", "бионетрическая"],
    },
    answer: A(
      "تُستخرج البطاقة الوطنية البيومترية وتُجدَّد لدى الملحقة الإدارية أو القيادة التابعة لمحل إقامتك (وزارة الداخلية). تقدم الوثائق المطلوبة هناك مباشرة. للاطلاع على المساطر والمراكز، زر الموقع الرسمي لوزارة الداخلية أسفل الجواب.",
      "The biometric national ID card is issued and renewed at the administrative annex or caïdat of your place of residence (Ministry of Interior). Submit the required documents there directly. For procedures and centers, visit the Ministry of Interior's official website below.",
      "La carte nationale biométrique s'obtient et se renouvelle à l'annexe administrative ou au caïdat de votre lieu de résidence (Ministère de l'Intérieur). Les pièces requises y sont déposées directement. Consultez le site officiel du Ministère ci-dessous.",
      "El DNI biométrico se tramita y renueva en la anexa administrativa o caïdat de su lugar de residencia (Ministerio del Interior). Deposite allí los documentos requeridos. Consulte el sitio oficial del Ministerio abajo.",
      "La carta d'identità biometrica si ottiene e rinnova all'annexe administrative o caïdat del luogo di residenza (Ministero dell'Interno). Presentare lì i documenti richiesti. Sito ufficiale del Ministero in basso.",
      "Der biometrische Personalausweis wird bei der Verwaltungsannexe oder dem Caïdat des Wohnorts ausgestellt und erneuert (Innenministerium). Die Unterlagen sind direkt dort einzureichen. Offizielle Website des Ministeriums unten.",
      "Биометрическое удостоверение личности оформляется и обновляется в административном Annexе или Caïdat по месту жительства (Министерство внутренних дел). Документы подаются напрямую туда. Официальный сайт министерства ниже."
    ),
    sources: ["interieur"],
    suggestions: ["passeport", "acte-naissance"],
  },
  {
    id: "acte-naissance",
    keywords: {
      ar: ["رسم الولادة", "شهادة الولادة", "نسخة من رسم", "الحالة المدنية", "الميلاد", "ولادة"],
      en: ["birth certificate", "acte de naissance", "birth record", "civil registry"],
      fr: ["acte de naissance", "naissance", "état civil", "copie intégrale"],
      es: ["acta de nacimiento", "certificado de nacimiento"],
      it: ["atto di nascita", "certificato di nascita"],
      de: ["geburtsurkunde", "geburtsregister"],
      ru: ["свидетельство о рождении", "акт о рождении", "загс"],
    },
    answer: A(
      "تُطلب نسخة رسمية من رسم الولادة (كاملة أو مطابقة) من مصلحة الحالة المدنية بالجماعة (البلدية) التي تمت فيها الولادة، إما بحضورك أو بكتابة رسمية (نموذجها متوفر في مكتبة وثائق المنصة). أما المغاربة المقيمون بالخارج فيمكنهم الطلب عبر الشبكة القنصلية المغربية.",
      "An official copy of the birth certificate (full or conforming) is requested from the civil registry of the commune where the birth took place, in person or by formal letter (template available in our documents library). Moroccans abroad can request it through the Moroccan consular network.",
      "Une copie officielle de l'acte de naissance (intégrale ou conforme) se demande auprès du service d'état civil de la commune du lieu de naissance, en personne ou par courrier officiel (modèle disponible dans notre bibliothèque). Les Marocains à l'étranger passent par le réseau consulaire marocain.",
      "Una copia oficial del acta de nacimiento se solicita en el registro civil de la comuna del lugar de nacimiento, en persona o por carta oficial (modelo disponible en nuestra biblioteca). Los marroquíes en el extranjero acuden a la red consular marroquí.",
      "Una copia ufficiale dell'atto di nascita si richiede all'anagrafe del comune di nascita, di persona o con lettera ufficiale (modello nella nostra biblioteca). I marocchini all'estero si rivolgono alla rete consolare marocchina.",
      "Eine offizielle Kopie der Geburtsurkunde beantragt man beim Standesamt der Geburtsstadt, persönlich oder mit formellem Schreiben (Vorlage in unserer Bibliothek). Marokkaner im Ausland wenden sich an das marokkanische Konsularnetz.",
      "Официальную копию свидетельства о рождении запрашивают в ЗАГСе коммуны места рождения лично или официальным письмом (шаблон есть в нашей библиотеке). Марокканцы за рубежом обращаются в консульскую сеть Марокко."
    ),
    sources: ["consulat"],
    suggestions: ["carte-nationale", "passeport"],
  },
  {
    id: "passeport",
    keywords: {
      ar: ["جواز السفر", "الجواز", "باسبور", "حجز موعد", "السفر وثيقة"],
      en: ["passport", "biometric passport", "passport appointment"],
      fr: ["passeport", "rendez-vous passeport", "passeport biométrique"],
      es: ["pasaporte", "cita pasaporte"],
      it: ["passaporto", "appuntamento passaporto"],
      de: ["reisepass", "pass"],
      ru: ["паспорт", "загранпаспорт", "запись на паспорт"],
    },
    answer: A(
      "لطلب جواز السفر البيومتري المغربي: 1) احجز موعداً إلكترونياً عبر البوابة الرسمية passeport.ma؛ 2) جهز الوثائق المطلوبة (البطاقة الوطنية، رسم الولادة، صور... حسب حالتك)؛ 3) احضر في الموعد بمركز تسليم الجوازات لالتقاط البيانات البيومترية؛ 4) استلم الجواز في الأجل المعلن.",
      "To apply for the Moroccan biometric passport: 1) Book an e-appointment on the official portal passeport.ma; 2) Prepare the required documents (ID card, birth certificate, photos… depending on your case); 3) Attend your appointment at the passport center for biometric enrollment; 4) Collect the passport within the announced period.",
      "Pour demander le passeport biométrique marocain : 1) prenez un rendez-vous en ligne sur le portail officiel passeport.ma ; 2) préparez les pièces requises (CIN, acte de naissance, photos…) ; 3) présentez-vous au centre pour la prise biométrique ; 4) retirez le passeport dans le délai annoncé.",
      "Para solicitar el pasaporte biométrico marroquí: 1) reserve una cita en línea en el portal oficial passeport.ma; 2) prepare los documentos requeridos (DNI, acta de nacimiento, fotos…); 3) acuda al centro para la captura biométrica; 4) recoja el pasaporte en el plazo indicado.",
      "Per richiedere il passaporto biometrico marocchino: 1) prenota online sul portale ufficiale passeport.ma; 2) prepara i documenti richiesti (CIN, atto di nascita, foto…); 3) presentati al centro per la rilevazione biometrica; 4) ritira il passaporto nel termine indicato.",
      "Für den marokkanischen biometrischen Pass: 1) Online-Termin auf dem offiziellen Portal passeport.ma buchen; 2) erforderliche Unterlagen bereitlegen (Ausweis, Geburtsurkunde, Fotos…); 3) Termin zum Biometrie-Termin im Passzentrum wahrnehmen; 4) Pass innerhalb der angekündigten Frist abholen.",
      "Для получения биометрического паспорта Марокко: 1) запишитесь онлайн на официальном портале passeport.ma; 2) подготовьте документы (удостоверение, свидетельство о рождении, фото…); 3) явитесь в центр для сдачи биометрии; 4) заберите паспорт в объявленный срок."
    ),
    sources: ["passeport"],
    suggestions: ["carte-nationale", "consulat"],
  },
  {
    id: "casier-judiciaire",
    keywords: {
      ar: ["السجل العدلي", "الصحيفة العدلية", "عدلي", "البطاقة 3", "شهادة حسن السيرة", "casier"],
      en: ["criminal record", "casier judiciaire", "police clearance", "bulletin 3"],
      fr: ["casier judiciaire", "extrait de casier", "bulletin n°3", "casier"],
      es: ["antecedentes penales", "certificado penal"],
      it: ["casellario giudiziale", "certificato penale"],
      de: ["führungszeugnis", "strafregister"],
      ru: ["судимость", "справка о судимости"],
    },
    answer: A(
      "يُطلب مستخرج السجل العدلي (البطاقة رقم 3) من كتابة الضبط بالمحكمة الابتدائية التابعة لمحل إقامتك، بتقديم طلب مع نسخة من البطاقة الوطنية. للمقيمين بالخارج يمكن طلبه عبر القنصليات المغربية. لمزيد من المعلومات يمكن الرجوع إلى موقع وزارة العدل الرسمي.",
      "The criminal record extract (bulletin no. 3) is requested from the clerk's office (greffe) of the first-instance court of your residence, by filing a request with a copy of your ID card. For residents abroad, it can be requested through Moroccan consulates. See the Ministry of Justice's official website for details.",
      "L'extrait de casier judiciaire (bulletin n°3) se demande au greffe du tribunal de première instance de votre résidence, avec une demande et une copie de la CIN. Les résidents à l'étranger peuvent le demander via les consulats marocains. Plus de détails sur le site officiel du Ministère de la Justice.",
      "El extracto de antecedentes penales (boletín n.º 3) se solicita en la secretaría del tribunal de primera instancia de su residencia, con solicitud y copia del DNI. Los residentes en el extranjero pueden solicitarlo por los consulados marroquíes. Más detalles en el sitio oficial del Ministerio de Justicia.",
      "Il certificato del casellario (bollettino n. 3) si richiede alla cancelleria del tribunale di prima istanza della propria residenza, con domanda e copia della CIN. I residenti all'estero possono richiederlo tramite i consolati marocchini. Dettagli sul sito ufficiale del Ministero della Giustizia.",
      "Der Auszug aus dem Führungszeugnis (Blatt Nr. 3) wird bei der Geschäftsstelle des Erstinstanzgerichts des Wohnorts beantragt, mit Antrag und Kopie des Ausweises. Im Ausland über die marokkanischen Konsulate. Details auf der offiziellen Website des Justizministeriums.",
      "Справку о судимости (лист №3) запрашивают в канцелярии суда первой инстанции по месту жительства, подав заявление с копией удостоверения. Проживающие за рубежом могут запросить её через консульства Марокко. Подробнее — на официальном сайте Министерства юстиции."
    ),
    sources: ["justice"],
    suggestions: ["acte-naissance"],
  },
  {
    id: "cnss",
    keywords: {
      ar: ["الضمان الاجتماعي", "CNSS", "سي ان اس اس", "الانخراط", "التصريح بالأجور", "macnss", "ما سي ان اس اس"],
      en: ["cnss", "social security", "macnss", "cnss registration"],
      fr: ["cnss", "sécurité sociale", "macnss", "affiliation cnss"],
      es: ["cnss", "seguridad social"],
      it: ["cnss", "previdenza sociale"],
      de: ["cnss", "sozialversicherung"],
      ru: ["cnss", "соцстрахование", "социальное страхование"],
    },
    answer: A(
      "الصندوق الوطني للضمان الاجتماعي (CNSS): يتم انخراط الأجراء من طرف المشغل إلزامياً، ويمكن للمستفيدين الاطلاع على حقوقهم وشهاداتهم وطلباتهم عبر البوابة الرقمية MaCNSS أو موقع CNSS الرسمي (انخراط، تصريح بالأجور، تعويضات الأمومة، التقاعد...).",
      "National Social Security Fund (CNSS): employee registration is mandatory by the employer; beneficiaries can check their rights, certificates and requests on the MaCNSS digital portal or the official CNSS website (affiliation, salary declarations, maternity benefits, retirement...).",
      "Caisse Nationale de Sécurité Sociale (CNSS) : l'affiliation des salariés est obligatoire par l'employeur ; les bénéficiaires consultent droits, attestations et demandes sur le portail MaCNSS ou le site officiel de la CNSS (affiliation, DSN, prestations maternité, retraite…).",
      "Fondo Nacional de Seguridad Social (CNSS): la afiliación de los asalariados es obligatoria por el empleador; los beneficiarios consultan derechos y certificados en el portal MaCNSS o el sitio oficial de la CNSS.",
      "Cassa Nazionale di Previdenza Sociale (CNSS): l'iscrizione dei dipendenti è obbligatoria da parte del datore di lavoro; i beneficiari consultano diritti e certificati sul portale MaCNSS o sul sito ufficiale CNSS.",
      "Nationale Sozialversicherung (CNSS): die Anmeldung der Arbeitnehmer erfolgt verpflichtend durch den Arbeitgeber; Leistungen und Bescheinigungen sind über das Portal MaCNSS oder die offizielle CNSS-Website abrufbar.",
      "Национальный фонд соцстрахования (CNSS): регистрация работников обязательна работодателем; получатели могут проверять права, справки и заявления через портал MaCNSS или официальный сайт CNSS."
    ),
    sources: ["cnss", "macnss"],
    suggestions: ["amo-tadamon", "rsu"],
  },
  {
    id: "amo-tadamon",
    keywords: {
      ar: ["AMO تضامن", "تضامن", "امو", "التغطية الصحية", "راميد", "ramed", "amotadamon", "المساعدة الطبية"],
      en: ["amo tadamon", "tadamon", "amo", "health coverage", "ramed"],
      fr: ["amo tadamon", "tadamon", "amo", "couverture santé", "ramed"],
      es: ["amo tadamon", "tadamon", "cobertura sanitaria"],
      it: ["amo tadamon", "tadamon", "copertura sanitaria"],
      de: ["amo tadamon", "tadamon", "krankenversicherung"],
      ru: ["amo tadamon", "тадамон", "медстраховка", "рамед"],
    },
    answer: A(
      "مسطرة التسجيل في نظام «AMO تضامن» (الخاص بالفئات غير القادرة) تتم على ثلاث مراحل: 1) التسجيل في السجل الوطني للسكان للحصول على المعرف الرقمي (عبر مراكز خدمات المواطنين أو الملحقة الإدارية لمحل إقامتك)؛ 2) تسجيل الأسرة في السجل الاجتماعي الموحد؛ 3) تعبئة طلب الاستفادة عبر بوابة amotadamon.ma أو إيداعه بالملحقة الإدارية/القيادة. ملاحظة: تقديم الطلب لا يعني قبوله تلقائياً؛ تتم دراسة الملف وفق مؤشر الاستحقاق.",
      "Registering for the AMO Tadamon scheme (for those unable to pay) takes three steps: 1) register in the National Population Register to get your digital ID (via citizen service centers or the administrative annex of your residence); 2) register the family in the Unified Social Register; 3) fill the application on the amotadamon.ma portal or file it at the administrative annex/caïdat. Note: applying does not mean automatic acceptance; files are assessed per the eligibility index.",
      "L'inscription au régime AMO Tadamon (pour les personnes non solvables) se fait en trois étapes : 1) s'inscrire au Registre National de la Population pour l'identifiant numérique (via les centres de services aux citoyens ou l'annexe administrative) ; 2) inscrire la famille au Registre Social Unifié ; 3) remplir la demande sur le portail amotadamon.ma ou la déposer à l'annexe administrative/caïdat. N.B. : la demande n'implique pas une acceptation automatique ; le dossier est étudié selon l'indice d'éligibilité.",
      "Inscribirse en el régimen AMO Tadamon requiere tres pasos: 1) inscribirse en el Registro Nacional de Población para el identificador digital (en centros de servicios al ciudadano o la anexa administrativa); 2) inscribir a la familia en el Registro Social Unificado; 3) completar la solicitud en amotadamon.ma o depositarla en la anexa administrativa/caïdat. Nota: solicitarlo no implica aceptación automática.",
      "L'iscrizione al regime AMO Tadamon avviene in tre passi: 1) iscriversi al Registro Nazionale della Popolazione per l'ID digitale (presso i centri servizi ai cittadini o l'annexe amministrativa); 2) iscrivere la famiglia al Registro Sociale Unificato; 3) compilare la domanda su amotadamon.ma o depositarla all'annexe/caïdat. Nota: la domanda non implica accettazione automatica.",
      "Die Anmeldung zur AMO Tadamon (für Bedürftige) erfolgt in drei Schritten: 1) Registrierung im Nationalen Bevölkerungsregister für die digitale ID (über Bürgerdienstzentren oder die Verwaltungsannexe); 2) Familienregistrierung im RSU; 3) Antrag auf amotadamon.ma oder in der Verwaltungsannexe/Caïdat. Hinweis: Der Antrag bedeutet keine automatische Zulassung.",
      "Регистрация в системе AMO Tadamon (для малообеспеченных) проходит в три шага: 1) регистрация в Национальном реестре населения для получения цифрового ID (через центры обслуживания граждан или административный Annex); 2) регистрация семьи в Едином социальном реестре; 3) заполнение заявления на amotadamon.ma или подача в Annexе/Caïdat. Примечание: подача не означает автоматического принятия.",
    ),
    sources: ["amotadamon"],
    suggestions: ["rsu", "cnss"],
  },
  {
    id: "rsu",
    keywords: {
      ar: ["السجل الاجتماعي", "RSU", "الدعم الاجتماعي", "الدعم المباشر", "مؤشر الاستحقاق", "الحساب العائلي"],
      en: ["rsu", "social register", "direct social aid", "eligibility index"],
      fr: ["rsu", "registre social", "aide sociale directe", "indice d'éligibilité"],
      es: ["rsu", "registro social", "ayuda social directa"],
      it: ["rsu", "registro sociale", "aiuto sociale diretto"],
      de: ["rsu", "sozialregister", "direkte sozialhilfe"],
      ru: ["rsu", "социальный реестр", "прямая соцпомощь"],
    },
    answer: A(
      "السجل الاجتماعي الموحد (RSU) هو قاعدة بيانات وطنية تحدد الأسر المستحقة للدعم الاجتماعي (منها الدعم الاجتماعي المباشر وAMO تضامن) عبر مؤشر الاستحقاق. التسجيل مجاني عبر مراكز خدمات المواطنين والملحقات الإدارية، أو أثناء التسجيل في بوابة amotadamon.ma باستعمال المعرف الرقمي لرب الأسرة.",
      "The Unified Social Register (RSU) is the national database determining households eligible for social support (including direct social aid and AMO Tadamon) through an eligibility index. Registration is free via citizen service centers and administrative annexes, or while subscribing on the amotadamon.ma portal with the head of family's digital ID.",
      "Le Registre Social Unifié (RSU) est la base de données nationale déterminant les ménages éligibles au soutien social (dont l'aide sociale directe et l'AMO Tadamon) via l'indice d'éligibilité. L'inscription est gratuite dans les centres de services aux citoyens et les annexes administratives, ou lors de l'inscription sur amotadamon.ma avec l'identifiant numérique du chef de famille.",
      "El Registro Social Unificado (RSU) es la base nacional que determina los hogares elegibles para el apoyo social (ayuda directa y AMO Tadamon) mediante el índice de elegibilidad. La inscripción es gratuita en los centros de servicios al ciudadano y las anexas, o al registrarse en amotadamon.ma.",
      "Il Registro Sociale Unificato (RSU) è la banca dati nazionale che determina le famiglie idonee al sostegno sociale (aiuto diretto e AMO Tadamon) tramite l'indice di idoneità. L'iscrizione è gratuita presso i centri servizi ai cittadini, o durante la registrazione su amotadamon.ma.",
      "Das RSU ist die nationale Datenbank, die haushaltsbezogene Ansprüche auf Sozialleistungen (direkte Sozialhilfe, AMO Tadamon) über den Eligibility-Index bestimmt. Die Registrierung ist kostenlos in Bürgerdienstzentren oder bei der Anmeldung auf amotadamon.ma.",
      "Единый социальный реестр (RSU) — национальная база, определяющая домохозяйства с правом на соцподдержку (прямая помощь, AMO Tadamon) через индекс нуждаемости. Регистрация бесплатна в центрах обслуживания граждан или при регистрации на amotadamon.ma с цифровым ID главы семьи.",
    ),
    sources: ["amotadamon"],
    suggestions: ["amo-tadamon"],
  },
  {
    id: "minhaty",
    keywords: {
      ar: ["منحتي", "منحة", "المنحة الجامعية", "minhaty", "منحة الدراسة", "التعليم العالي منحة"],
      en: ["minhaty", "scholarship", "student grant", "bourse"],
      fr: ["minhaty", "bourse", "bourse étudiante"],
      es: ["minhaty", "beca", "beca universitaria"],
      it: ["minhaty", "borsa di studio"],
      de: ["minhaty", "stipendium"],
      ru: ["minhaty", "стипендия", "грант"],
    },
    answer: A(
      "بوابة «منحتي» (minhaty.ma) هي القناة الوحيدة لإيداع طلبات منح التعليم العالي بالمغرب. ينطلق التسجيل عادة مع بداية الموسم الجامعي، وتُودع الطلبات إلكترونياً بتسجيل الدخول عبر المعرف الرقمي أو البطاقة الوطنية، ثم تتبع الطلب بنفس البوابة. تابع آجال فتح التسجيل عبر موقعها الرسمي أو مؤسستك التعليمية.",
      "The Minhaty portal (minhaty.ma) is the sole channel for filing higher education scholarship requests in Morocco. Registration usually opens at the start of the academic year; requests are filed online by logging in with your digital ID or national ID card, then tracked on the same portal. Follow opening dates on the official portal or your institution.",
      "Le portail « Minhaty » (minhaty.ma) est l'unique canal de dépôt des demandes de bourses de l'enseignement supérieur au Maroc. Les inscriptions ouvrent généralement en début d'année universitaire ; la demande se dépose en ligne (connexion via identifiant numérique ou CIN) puis se suit sur le même portail. Suivez les dates d'ouverture sur le portail officiel.",
      "El portal «Minhaty» (minhaty.ma) es el único canal para presentar solicitudes de becas de educación superior en Marruecos. Las inscripciones suelen abrirse al inicio del curso; la solicitud se presenta en línea y se sigue en el mismo portal. Siga las fechas en el portal oficial.",
      "Il portale «Minhaty» (minhaty.ma) è l'unico canale per presentare le domande di borsa di studio in Marocco. Le iscrizioni aprono di norma a inizio anno accademico; la domanda si presenta online e si segue sullo stesso portale. Seguite le date sul portale ufficiale.",
      "Das Portal „Minhaty“ (minhaty.ma) ist der einzige Kanal für Hochschulstipendien in Marokko. Die Anmeldung öffnet meist zu Beginn des Studienjahres; Antrag online stellen und auf demselben Portal verfolgen. Termine auf dem offiziellen Portal verfolgen.",
      "Портал «Minhaty» (minhaty.ma) — единственный канал подачи заявлений на стипендии в вузах Марокко. Регистрация обычно открывается в начале учебного года; заявление подаётся онлайн и отслеживается там же. Следите за датами на официальном портале."
    ),
    sources: ["minhaty"],
    suggestions: ["amo-tadamon"],
  },
  {
    id: "taxes",
    keywords: {
      ar: ["الضرائب", "ضريبة", "الضريبة على الدخل", "IR", "patente", "الباتانت", "الرسم المهني", "tax", "SIMPL", "الواجب على المحروقات", "التسجيل الضريبي", "شهادة ضريبية"],
      en: ["tax", "taxes", "income tax", "tax declaration", "dgi", "simpl"],
      fr: ["impôt", "impots", "taxes", "ir", "déclaration fiscale", "dgi", "simpl", "patente"],
      es: ["impuestos", "declaración fiscal", "dgi"],
      it: ["tasse", "imposta", "dichiarazione fiscale"],
      de: ["steuer", "steuern", "steuererklärung"],
      ru: ["налог", "налоги", "налоговая декларация"],
    },
    answer: A(
      "المديرية العامة للضرائب (tax.gov.ma) توفر رقمياً: التصريح بالضريبة على الدخل، الرسم المهني/الباتانت، أداء الواجب على المحروقات، استخراج الشهادات الضريبية والاطلاع على الحساب الضريبي، كل ذلك عبر منصة «سيمبل» SIMPL. المقاولات والمهن الحرة تستعمل كذلك منصة simpl.tax.gov.ma للتصريحات الاجتماعية والضريبية الموحدة.",
      "The Directorate General of Taxes (tax.gov.ma) provides online: income tax declaration, professional tax/patente, fuel tax payment, tax certificates and tax account consultation — all via the SIMPL platform. Companies and freelancers also use simpl.tax.gov.ma for unified social and tax declarations.",
      "La Direction Générale des Impôts (tax.gov.ma) met en ligne : déclaration IR, taxe professionnelle/patente, paiement de la taxe sur les carburants, attestations fiscales et consultation du compte fiscal, via la plateforme SIMPL. Entreprises et indépendants utilisent aussi simpl.tax.gov.ma pour les déclarations unifiées.",
      "La Dirección General de Impuestos (tax.gov.ma) ofrece en línea: declaración del IR, impuesto profesional, pago del impuesto sobre combustibles, certificados fiscales y consulta de la cuenta fiscal, vía SIMPL. Empresas y autónomos usan también simpl.tax.gov.ma.",
      "La Direzione Generale delle Imposte (tax.gov.ma) offre online: dichiarazione IR, imposta professionale, pagamento tassa carburanti, certificati fiscali e consultazione del conto fiscale via SIMPL. Imprese e freelance usano anche simpl.tax.gov.ma.",
      "Die Generalsteuerdirektion (tax.gov.ma) bietet online: Einkommensteuererklärung, Gewerbesteuer/Patente, Kraftstoffsteuer, Steuerbescheinigungen und Steuerkonto via SIMPL. Unternehmen und Selbstständige nutzen auch simpl.tax.gov.ma.",
      "Главное налоговое управление (tax.gov.ma) предоставляет онлайн: декларацию НДФЛ, профессиональный налог, оплату топливного сбора, налоговые справки и просмотр налогового счёта через платформу SIMPL. Компании и самозанятые используют также simpl.tax.gov.ma."
    ),
    sources: ["tax", "simpl"],
    suggestions: ["business"],
  },
  {
    id: "business",
    keywords: {
      ar: ["مشروع", "تأسيس شركة", "السجل التجاري", "شركة", "المقاول الذاتي", "مقاول ذاتي", "auto entrepreneur", "OMPIC", "إنشاء مقاولة"],
      en: ["company", "business creation", "commercial register", "auto-entrepreneur", "ompic", "startup morocco"],
      fr: ["création entreprise", "société", "registre commerce", "auto-entrepreneur", "ompic"],
      es: ["crear empresa", "registro mercantil", "emprendedor autónomo"],
      it: ["creazione impresa", "registro commerciale", "auto-imprenditore"],
      de: ["unternehmensgründung", "handelsregister", "selbstständiger"],
      ru: ["создание компании", "бизнес", "торговый реестр", "самозанятый"],
    },
    answer: A(
      "لإنشاء مقاولة بالمغرب: يمر التسجيل في السجل التجاري عبر المكتب المغربي للمقاولة (OMPIC) الذي يوفر أيضاً نظام «المقاول الذاتي» المعفي من السجل التجاري والمناسب للأنشطة الصغيرة. وبعد التسجيل تؤدى التصريحات الضريبية والاجتماعية رقمياً عبر منصتي tax.gov.ma وsimpl.tax.gov.ma. لمعرفة النصوص القانونية الخاصة، زر موقع وزارة الصناعة والتجارة.",
      "To create a company in Morocco: commercial register registration goes through OMPIC, which also manages the « auto-entrepreneur » regime (exempt from commercial register) suited to small activities. After registration, tax and social declarations are done digitally via tax.gov.ma and simpl.tax.gov.ma. For the relevant legal texts, visit the Ministry of Industry and Trade.",
      "Pour créer une entreprise au Maroc : l'immatriculation au registre du commerce passe par l'OMPIC, qui gère aussi le statut « auto-entrepreneur » (exempté de registre de commerce) adapté aux petites activités. Après l'enregistrement, les déclarations fiscales et sociales se font en ligne via tax.gov.ma et simpl.tax.gov.ma. Textes juridiques sur le site du Ministère de l'Industrie et du Commerce.",
      "Para crear una empresa en Marruecos: el registro mercantil se hace ante OMPIC, que también gestiona el régimen de «emprendedor autónomo» (exento de registro mercantil). Tras el registro, las declaraciones se presentan en línea vía tax.gov.ma y simpl.tax.gov.ma. Textos legales en el sitio del Ministerio de Industria y Comercio.",
      "Per creare un'impresa in Marocco: la registrazione al registro commerciale avviene tramite OMPIC, che gestisce anche il regime «auto-imprenditore» (esente da registro commerciale). Dopo la registrazione, le dichiarazioni si fanno online via tax.gov.ma e simpl.tax.gov.ma. Testi legali sul sito del Ministero.",
      "Für eine Unternehmensgründung in Marokko: die Handelsregisteranmeldung läuft über OMPIC, das auch den „Auto-entrepreneur“-Status (handelregisterbefreit) verwaltet. Danach erfolgen Steuer- und Sozialabgaben online über tax.gov.ma und simpl.tax.gov.ma. Rechtstexte beim Ministerium für Industrie und Handel.",
      "Для создания компании в Марокко: регистрация в торговом реестре — через OMPIC, которая также ведёт режим «самозанятого» (без торгового реестра) для малого бизнеса. После регистрации налоговые и социальные декларации подаются онлайн через tax.gov.ma и simpl.tax.gov.ma. Правовые акты — на сайте Министерства промышленности и торговли."
    ),
    sources: ["ompic", "tax", "simpl", "mcinet"],
    suggestions: ["taxes"],
  },
  {
    id: "rental",
    keywords: {
      ar: ["عقد كراء", "كراء", "إيجار", "سكن للكراء", "عقد إيجار", "المكتري", "المؤاجر", "وصل الكراء", "bail"],
      en: ["lease", "rental contract", "rent", "tenant", "landlord", "bail"],
      fr: ["bail", "contrat de location", "loyer", "locataire", "bailleur", "quittance"],
      es: ["alquiler", "contrato de alquiler", "inquilino", "arrendador"],
      it: ["affitto", "contratto di locazione", "inquilino", "locatore"],
      de: ["mietvertrag", "miete", "mieter", "vermieter"],
      ru: ["аренда", "договор аренды", "квартира", "арендатор"],
    },
    answer: A(
      "تجد في مكتبة وثائق المنصة نموذج عقد كراء سكني كاملاً (بالعربية والفرنسية) بمواد الحقوق والواجبات والضمانات، مع وصل أداء الكراء. بعد التوقيع، يخضع العقد للتسجيل لدى المصلحة الضريبية المختصة (معلومة عملية: وصل الكراء المسجل مطلوب في عدة إجراءات إدارية مثل التسجيل المدرسي والدعم الاجتماعي).",
      "Our documents library contains a complete residential lease template (Arabic and French) covering rights, duties and guarantees, plus a rent receipt template. After signature, the contract must be registered with the competent tax office (practical note: a registered rent receipt is required for many administrative procedures like school enrollment and social support).",
      "Notre bibliothèque contient un modèle complet de contrat de bail d'habitation (arabe et français) couvrant droits, obligations et garanties, avec quittance de loyer. Après signature, le contrat est à enregistrer auprès du service fiscal compétent (à noter : le quittance de loyer enregistré est exigé pour de nombreuses démarches).",
      "Nuestra biblioteca incluye un modelo completo de contrato de alquiler (árabe y francés) con derechos, obligaciones y garantías, más el recibo de alquiler. Tras la firma, el contrato se registra ante el servicio fiscal (el recibo registrado se exige en muchos trámites).",
      "La nostra biblioteca contiene un modello completo di contratto di locazione (arabo e francese) con diritti, obblighi e garanzie, più la ricevuta d'affitto. Dopo la firma, il contratto va registrato presso il servizio fiscale.",
      "Unsere Bibliothek enthält einen vollständigen Mietvertrag (arabisch/französisch) mit Rechten, Pflichten und Garantien, plus Mietquittung. Nach der Unterschrift ist der Vertrag beim Finanzamt zu registrieren.",
      "В нашей библиотеке есть полный шаблон договора аренды жилья (арабский и французский) с правами, обязанностями и гарантиями, а также квитанция об оплате. После подписания договор регистрируется в налоговом органе (зарегистрированная квитанция нужна для многих процедур)."
    ),
    sources: ["tax"],
    suggestions: ["documents"],
  },
  {
    id: "procuration",
    keywords: {
      ar: ["وكالة", "تفويض", "الوكالة", "موثق", "عدول", "وكالة عقارية"],
      en: ["procuration", "power of attorney", "proxy", "notary", "adoul"],
      fr: ["procuration", "mandat", "notaire", "adoul"],
      es: ["poder", "procuración", "notario"],
      it: ["procura", "notaio", "adoul"],
      de: ["vollmacht", "notar"],
      ru: ["доверенность", "нотариус", "полномочия"],
    },
    answer: A(
      "الوكالات في المغرب نوعان: 1) وكالات التصرفات العقارية والوثائق الرسمية — يجب وجوباً تحريرها وتوثيقها لدى العدول أو موثق معتمد؛ 2) الوكالات الإدارية البسيطة (استلام وثيقة، متابعة ملف...) — يمكن تحريرها كتابة، وتطلب بعض الإدارات تصديق الإمضاء لدى السلطة المحلية. نموذج مبسط للوكالات الإدارية متوفر في مكتبة وثائق المنصة مع تنبيهات مهمة.",
      "Powers of attorney in Morocco are of two kinds: 1) real-estate and official deeds — must mandatorily be drafted and notarized before adouls or an accredited notary; 2) simple administrative powers (collecting a document, following a file...) — can be written by hand, with some administrations requiring signature legalization at the local authority. A simplified template is available in our documents library with important notices.",
      "Au Maroc, deux types de procurations : 1) les actes immobiliers et officiels — obligatoirement dressés et notariés devant adouls ou notaire accrédité ; 2) les procurations administratives simples (retrait, suivi de dossier…) — rédigeables à la main, certaines administrations exigeant la légalisation de la signature. Un modèle simplifié est disponible dans notre bibliothèque.",
      "En Marruecos hay dos tipos de poderes: 1) los actos inmobiliarios y oficiales — obligatoriamente ante adouls o notario acreditado; 2) los poderes administrativos simples — redactables a mano, a veces con legalización de firma. Modelo simplificado disponible en nuestra biblioteca.",
      "In Marocco ci sono due tipi di procura: 1) atti immobiliari e ufficiali — obbligatoriamente davanti a adoul o notaio accreditato; 2) procure amministrative semplici — redigibili a mano, talvolta con legalizzazione della firma. Modello semplificato nella nostra biblioteca.",
      "In Marokko gibt es zwei Arten von Vollmachten: 1) Immobilien- und Urkundengeschäfte — zwingend vor Adoul oder zugelassenem Notar; 2) einfache Verwaltungsvollmachten — handschriftlich möglich, teils mit Legalisierung der Unterschrift. Vereinfachte Vorlage in unserer Bibliothek.",
      "В Марокко два вида доверенностей: 1) на недвижимость и официальные сделки — обязательно у адулей или аккредитованного нотариуса; 2) простые административные — можно написать от руки, иногда требуется заверение подписи. Упрощённый шаблон есть в нашей библиотеке."
    ),
    sources: ["adala"],
    suggestions: ["documents"],
  },
  {
    id: "complaint",
    keywords: {
      ar: ["شكاية", "شكوى", "تظلم", "أشتكي", "مظلمة", "رفع دعوى"],
      en: ["complaint", "file a complaint", "grievance", "claim"],
      fr: ["plainte", "réclamation", "dénonciation", "grief"],
      es: ["reclamación", "queja", "denuncia"],
      it: ["reclamo", "denuncia", "lamentele"],
      de: ["beschwerde", "anzeige", "reklamation"],
      ru: ["жалоба", "претензия", "заявление в полицию"],
    },
    answer: A(
      "طريقة تقديم الشكاية تتوقف على الجهة المعنية: 1) شكاية إدارية — توجه للإدارة المعنية أولاً مع الاحتفاظ بنسخة مختومة (نموذج عام متوفر بالمنصة)؛ 2) تظلم ضريبي — عبر المديرية العامة للضرائب؛ 3) شكاية جنائية (جريمة) — للنيابة العامة بالمحكمة أو لدى الشرطة/DST حسب الحالة؛ 4) انتهاك حقوق الإنسان — يمكن مراسلة المجلس الوطني لحقوق الإنسان. حدد لي نوع مشكلتك لأوجهك بدقة أكبر.",
      "How to file a complaint depends on the concerned body: 1) administrative complaint — addressed first to the concerned administration keeping a stamped copy (a general template is on the platform); 2) tax grievance — via the DGI; 3) criminal complaint — to the King's prosecutor at court or the police as appropriate; 4) human rights violation — the National Human Rights Council can be contacted. Tell me your issue type for more precise guidance.",
      "La procédure dépend de l'organisme : 1) plainte administrative — adressée d'abord à l'administration concernée avec copie tamponnée (modèle général sur la plateforme) ; 2) réclamation fiscale — via la DGI ; 3) plainte pénale — au parquet ou à la police selon le cas ; 4) atteinte aux droits humains — le CNDH peut être saisi. Précisez votre situation pour une orientation plus ciblée.",
      "El trámite depende del organismo: 1) reclamación administrativa — dirigida primero a la administración con copia sellada (modelo en la plataforma); 2) reclamación fiscal — vía DGI; 3) denuncia penal — al fiscal o la policía; 4) violación de derechos humanos — puede acudirse al CNDH. Indíqueme su caso para orientarle mejor.",
      "La procedura dipende dall'ente: 1) reclamo amministrativo — prima all'amministrazione con copia timbrata (modello sulla piattaforma); 2) ricorso fiscale — via DGI; 3) denuncia penale — alla procura o alla polizia; 4) violazione dei diritti umani — si può scrivere al CNDH. Dica il suo caso per un orientamento più preciso.",
      "Das Verfahren hängt vom Empfänger ab: 1) Verwaltungsbeschwerde — zuerst an die Behörde mit Stempelkopie (Vorlage auf der Plattform); 2) Steuereinspruch — über die DGI; 3) Strafanzeige — an die Staatsanwaltschaft oder Polizei; 4) Menschenrechtsverletzung — CNDH kann kontaktiert werden. Nennen Sie Ihren Fall für eine genauere Orientierung.",
      "Порядок зависит от ведомства: 1) административная жалоба — сначала в соответствующее ведомство с заверенной копией (шаблон на платформе); 2) налоговая претензия — через DGI; 3) уголовное заявление — прокурору или в полицию; 4) нарушение прав человека — можно обратиться в CNDH. Уточните вашу ситуацию для более точного направления."
    ),
    sources: ["tax", "justice", "cndh"],
    suggestions: ["documents"],
  },
  {
    id: "cv-help",
    keywords: {
      ar: ["سيرة ذاتية", "CV", "سي في", "رسالة تحفيزية", "توظيف", "وظيفة", "بحث عن عمل", "مباراة"],
      en: ["cv", "resume", "cover letter", "job", "employment", "motivation letter"],
      fr: ["cv", "lettre de motivation", "emploi", "travail", "candidature"],
      es: ["cv", "currículum", "carta de presentación", "empleo"],
      it: ["cv", "curriculum", "lettera di presentazione", "lavoro"],
      de: ["cv", "lebenslauf", "bewerbung", "arbeit"],
      ru: ["резюме", "cv", "сопроводительное письмо", "работа", "вакансии"],
    },
    answer: A(
      "توفر المنصة نموذج سيرة ذاتية احترافياً ورسالة تحفيزية بالعربية والفرنسية (فئة «عمل وتوظيف» في مكتبة الوثائق) مع نصائح مدمجة. للبحث عن العمل: مباريات الوظيفة العمومية عبر emploi-public.ma، وفرص التشغيل والتكوين عبر ANAPEC وOFPPT (الروابط الرسمية أسفل الجواب).",
      "The platform offers a professional CV template and a cover letter in Arabic and French (category «Work & employment» in the documents library) with built-in tips. For job hunting: public sector competitions on emploi-public.ma, employment and training opportunities via ANAPEC and OFPPT (official links below).",
      "La plateforme propose un modèle de CV professionnel et une lettre de motivation en arabe et français (catégorie « Travail et emploi ») avec conseils intégrés. Pour l'emploi : concours de la fonction publique sur emploi-public.ma, opportunités via ANAPEC et OFPPT (liens officiels ci-dessous).",
      "La plataforma ofrece un modelo de CV profesional y una carta de motivación en árabe y francés (categoría «Trabajo y empleo») con consejos integrados. Para el empleo: oposiciones en emploi-public.ma, oportunidades vía ANAPEC y OFPPT (enlaces abajo).",
      "La piattaforma offre un modello di CV professionale e una lettera di motivazione in arabo e francese (categoria «Lavoro») con consigli integrati. Per il lavoro: concorsi pubblici su emploi-public.ma, opportunità via ANAPEC e OFPPT (link sotto).",
      "Die Plattform bietet eine professionelle CV-Vorlage und ein Bewerbungsschreiben (Kategorie «Arbeit & Beschäftigung») mit integrierten Tipps. Jobsuche: Wettbewerbe im öffentlichen Dienst auf emploi-public.ma, Chancen über ANAPEC und OFPPT (Links unten).",
      "Платформа предлагает профессиональный шаблон резюме и сопроводительное письмо на арабском и французском (категория «Работа») со встроенными советами. Поиск работы: конкурсы госслужбы на emploi-public.ma, возможности через ANAPEC и OFPPT (ссылки ниже)."
    ),
    sources: ["emploi-public", "anapec", "ofppt"],
    suggestions: ["documents"],
  },
  {
    id: "work-contract",
    keywords: {
      ar: ["عقد عمل", "CDD", "CDI", "عقد شغل", "أجير", "مدونة الشغل", "استقالة", "مفتشية الشغل", "أجر"],
      en: ["work contract", "cdd", "cdi", "employment contract", "resignation", "labor code", "salary"],
      fr: ["contrat de travail", "cdd", "cdi", "démission", "code du travail", "salaire"],
      es: ["contrato de trabajo", "renuncia", "código laboral"],
      it: ["contratto di lavoro", "dimissioni", "codice del lavoro"],
      de: ["arbeitsvertrag", "kündigung", "arbeitsgesetzbuch"],
      ru: ["трудовой договор", "увольнение", "кодекс законов о труде", "зарплата"],
    },
    answer: A(
      "توفر المنصة نموذج عقد عمل محدد المدة (CDD) مطابقاً لمدونة الشغل المغربية وطلب استقالة نموذجياً. تذكير مهم: التسجيل في CNSS إلزامي لكل أجير، وفي حالة نزاع عمل (أجر غير مسلم، فصل تعسفي...) يمكن التقدم بشكاية لمفتشية الشغل التابعة لمكان العمل أو المحكمة الاجتماعية.",
      "The platform provides an CDD fixed-term employment contract template compliant with the Moroccan labor code and a model resignation letter. Important reminder: CNSS registration is mandatory for every employee; in case of a labor dispute (unpaid wages, abusive dismissal...), a complaint can be filed with the labor inspectorate of the workplace or the social court.",
      "La plateforme fournit un modèle de CDD conforme au Code du travail marocain et une lettre de démission type. Rappel important : l'affiliation CNSS est obligatoire pour tout salarié ; en cas de litige (salaires impayés, licenciement abusif…), une plainte peut être déposée auprès de l'inspection du travail ou du tribunal social.",
      "La plataforma ofrece un modelo de contrato temporal conforme a la ley marroquí y una carta de renuncia. Recordatorio: la afiliación a la CNSS es obligatoria; ante litigios (salarios impagos, despido abusivo) puede recurrirse a la inspección de trabajo.",
      "La piattaforma offre un modello di CDD conforme alla legge marocchina e una lettera di dimissioni. Promemoria: l'iscrizione CNSS è obbligatoria; in caso di controversie si può ricorrere all'ispettorato del lavoro.",
      "Die Plattform bietet einen befristeten Arbeitsvertrag nach marokkanischem Arbeitsrecht und ein Kündigungsschreiben. Wichtiger Hinweis: Die CNSS-Anmeldung ist Pflicht; bei Streitigkeiten (unbezahlte Löhne, ungerechtfertigte Kündigung) an die Arbeitsinspektion wenden.",
      "Платформа предлагает шаблон срочного трудового договора по марокканскому закону и образец заявления об уходе. Важно: регистрация в CNSS обязательна; при трудовых спорах (невыплаченная зарплата, несправедливое увольнение) обращайтесь в инспекцию труда или социальный суд."
    ),
    sources: ["cnss"],
    suggestions: ["documents", "cv-help"],
  },
  {
    id: "documents",
    keywords: {
      ar: ["الوثائق", "النماذج", "مكتبة", "ماذا تقدمون", "خدمات المنصة", "تصريح بالشرف", "شهادة عمل", "عقود", "وثيقة"],
      en: ["documents", "templates", "library", "what do you offer", "sworn declaration", "platform services"],
      fr: ["documents", "modèles", "bibliothèque", "que proposez-vous", "déclaration sur l'honneur"],
      es: ["documentos", "modelos", "biblioteca", "qué ofrecen"],
      it: ["documenti", "modelli", "biblioteca", "cosa offrite"],
      de: ["dokumente", "vorlagen", "bibliothek", "was bietet"],
      ru: ["документы", "шаблоны", "библиотека", "что предлагаете"],
    },
    answer: A(
      "توفر مكتبة المنصة أكثر من 125 وثيقة ونموذجاً إدارياً في 17 فئة: طلبات، شكايات، إشهادات، تصاريح بالشرف، التزامات، وكالات، عقود كراء وبيع وتنازل وفسخ، عمل وتوظيف (CV، استقالة، عقد عمل)، أسرة، جمعيات، بناء، مقاولات، قضاء، بنك وCNSS، وإجراءات إدارية. النماذج الكاملة متاحة للتحميل بصيغة Word والنسخ، ويمكن للمساعد الآلي ملء وثيقتك وتحريرها بشكل احترافي — مجاناً ودون تسجيل. تصفح قسم «الوثائق» أو «املأ وثيقتك» في الصفحة.",
      "The platform library offers 125+ administrative documents across 17 categories: requests, complaints, certificates, sworn declarations, commitments, powers of attorney, lease/sale/rescission contracts, employment (CV, resignation, work contracts), family, associations, construction, business, justice, banking & CNSS, and administrative procedures. Full templates are free to download as Word or copy — and the AI assistant can fill and professionally edit your document. Browse the «Documents» or «Fill your document» sections.",
      "La bibliothèque propose plus de 125 documents administratifs en 17 catégories : demandes, plaintes, attestations, déclarations sur l'honneur, engagements, procurations, contrats (bail, vente, résiliation), emploi (CV, démission, contrats), famille, associations, construction, entreprises, justice, banque & CNSS, et procédures. Les modèles complets sont téléchargeables gratuitement — et l'assistant IA peut remplir et rédiger votre document. Voir les sections « Documents » et « Remplir mon document ».",
      "La biblioteca ofrece más de 125 documentos en 17 categorías: solicitudes, reclamaciones, certificados, declaraciones, poderes, contratos (alquiler, venta, resolución), empleo, familia, asociaciones, construcción, empresas, justicia, banca y CNSS. Los modelos completos se descargan gratis y el asistente IA puede rellenar su documento — ver las secciones «Documentos» y «Rellenar mi documento».",
      "La biblioteca offre più di 125 documenti in 17 categorie: richieste, reclami, certificati, dichiarazioni, procure, contratti (locazione, vendita, risoluzione), lavoro, famiglia, associazioni, costruzioni, imprese, giustizia, banca e CNSS. I modelli completi si scaricano gratis e l'assistente IA può compilare il tuo documento — vedi le sezioni «Documenti» e «Compila il documento».",
      "Die Bibliothek bietet über 125 Dokumente in 17 Kategorien: Anträge, Beschwerden, Nachweise, Erklärungen, Vollmachten, Verträge (Miete, Verkauf, Kündigung), Beschäftigung, Familie, Vereine, Bau, Unternehmen, Justiz, Bank & CNSS. Vollständige Vorlagen kostenlos — und der KI-Assistent füllt Ihr Dokument professionell aus (siehe «Dokumente» / «Dokument ausfüllen»).",
      "Библиотека платформы — более 125 документов в 17 категориях: заявления, жалобы, справки, декларации, доверенности, договоры (аренда, продажа, расторжение), работа (резюме, увольнение, договоры), семья, ассоциации, стройка, бизнес, суд, банк и CNSS. Полные шаблоны бесплатны, а ИИ-ассистент может заполнить ваш документ — смотрите разделы «Документы» и «Заполнить документ».",
    ),
    sources: [],
    suggestions: ["price", "languages"],
  },
  {
    id: "price",
    keywords: {
      ar: ["مجاني", "الثمن", "السعر", "الدفع", "أدفع", "تكلفة", "اشتراك", "رسوم"],
      en: ["free", "price", "cost", "payment", "fee", "subscription"],
      fr: ["gratuit", "prix", "coût", "paiement", "frais", "abonnement"],
      es: ["gratis", "precio", "coste", "pago", "tarifa"],
      it: ["gratis", "prezzo", "costo", "pagamento", "tariffa"],
      de: ["kostenlos", "preis", "kosten", "zahlung", "gebühr"],
      ru: ["бесплатно", "цена", "стоимость", "оплата", "плата"],
    },
    answer: A(
      "جميع خدمات المنصة مجانية بالكامل: تصفح النماذج، تحميلها بصيغة Word، نسخها، والمساعد الذكي — دون تسجيل ودون أي رسوم.",
      "All platform services are completely free: browsing templates, Word downloads, copying, and the smart assistant — no sign-up and no fees of any kind.",
      "Tous les services de la plateforme sont entièrement gratuits : consultation, téléchargement Word, copie et assistant intelligent — sans inscription ni aucun frais.",
      "Todos los servicios de la plataforma son gratuitos: consulta, descarga Word, copia y asistente inteligente — sin registro ni cargos.",
      "Tutti i servizi sono completamente gratuiti: consultazione, download Word, copia e assistente — senza registrazione né costi.",
      "Alle Dienste sind völlig kostenlos: Vorlagen, Word-Download, Kopieren und der Assistent — ohne Anmeldung und ohne Gebühren.",
      "Все услуги платформы полностью бесплатны: шаблоны, скачивание Word, копирование и умный помощник — без регистрации и оплаты."
    ),
    sources: [],
    suggestions: ["documents"],
  },
  {
    id: "languages",
    keywords: {
      ar: ["لغات", "اللغة", "تغيير اللغة", "العربية", "الفرنسية", "الإنجليزية"],
      en: ["language", "languages", "change language", "translate", "english"],
      fr: ["langue", "langues", "changer la langue", "traduire"],
      es: ["idioma", "idiomas", "cambiar idioma"],
      it: ["lingua", "lingue", "cambiare lingua"],
      de: ["sprache", "sprachen", "sprache wechseln"],
      ru: ["язык", "языки", "сменить язык", "перевод"],
    },
    answer: A(
      "المنصة متوفرة بسبع لغات: العربية (مع دعم كامل للاتجاه من اليمين إلى اليسار)، والإنجليزية والفرنسية والإسبانية والإيطالية والألمانية والروسية. بدّل اللغة من القائمة أعلى الصفحة، ويُحفظ اختيارك تلقائياً.",
      "The platform is available in seven languages: Arabic (with full right-to-left support), English, French, Spanish, Italian, German and Russian. Switch language from the menu at the top of the page; your choice is saved automatically.",
      "La plateforme est disponible en sept langues : arabe (avec support complet de droite à gauche), anglais, français, espagnol, italien, allemand et russe. Changez de langue depuis le menu en haut de page ; votre choix est sauvegardé.",
      "La plataforma está disponible en siete idiomas: árabe (con soporte completo de derecha a izquierda), inglés, francés, español, italiano, alemán y ruso. Cambie de idioma desde el menú superior.",
      "La piattaforma è disponibile in sette lingue: arabo (con supporto completo da destra a sinistra), inglese, francese, spagnolo, italiano, tedesco e russo. Cambia lingua dal menu in alto.",
      "Die Plattform ist in sieben Sprachen verfügbar: Arabisch (mit vollständiger Rechts-nach-links-Unterstützung), Englisch, Französisch, Spanisch, Italienisch, Deutsch und Russisch. Sprachwechsel über das Menü oben.",
      "Платформа доступна на семи языках: арабский (с полной поддержкой письма справа налево), английский, французский, испанский, итальянский, немецкий и русский. Смена языка — в меню вверху страницы."
    ),
    sources: [],
  },
  {
    id: "official-links",
    keywords: {
      ar: ["موقع رسمي", "الروابط الرسمية", "بوابة", "المواقع الرسمية", "إدارة", "وزارة", "أين أجد"],
      en: ["official website", "official links", "portal", "government", "ministry", "administration"],
      fr: ["site officiel", "liens officiels", "portail", "ministère", "administration"],
      es: ["sitio oficial", "enlaces oficiales", "portal", "ministerio"],
      it: ["sito ufficiale", "link ufficiali", "portale", "ministero"],
      de: ["offizielle website", "links", "portal", "ministerium"],
      ru: ["официальный сайт", "ссылки", "портал", "министерство", "ведомство"],
    },
    answer: A(
      "قسم «الروابط الرسمية» بالصفحة يضم أكثر من 35 موقعاً رسمياً مغربياً موثقاً مصنفاً في: بوابات حكومية (maroc.ma، إدارة)، خدمات رقمية (البطاقة الوطنية، جواز السفر، الضرائب، السجل العدلي الإلكتروني...)، حماية اجتماعية (CNSS، AMO تضامن، CNOPS...)، تشغيل وتكوين، اقتصاد ومالية، ومرافق عمومية. جميعها نطاقات رسمية أو مؤسسات عمومية معروفة.",
      "The «Official links» section on the page contains 35+ verified official Moroccan websites grouped into: government portals (maroc.ma, Idarati), digital services (national ID, passport, taxes, online criminal record...), social protection (CNSS, AMO Tadamon, CNOPS...), employment & training, economy & finance, and public utilities — all official domains or well-known public institutions.",
      "La section « Liens officiels » de la page regroupe plus de 35 sites officiels marocains vérifiés : portails gouvernementaux (maroc.ma, Idarati), services numériques (CIN, passeport, impôts, casier judiciaire en ligne…), protection sociale (CNSS, AMO Tadamon, CNOPS…), emploi & formation, économie & finances et services publics — tous domaines officiels ou institutions publiques reconnues.",
      "La sección «Enlaces oficiales» reúne más de 35 sitios oficiales marroquíes verificados: portales de gobierno (maroc.ma, Idarati), servicios digitales (DNI, pasaporte, impuestos, antecedentes en línea…), protección social (CNSS, AMO Tadamon, CNOPS…), empleo, economía y servicios públicos — todos dominios oficiales o instituciones públicas reconocidas.",
      "La sezione «Siti ufficiali» contiene oltre 35 siti ufficiali marocchini verificati: portali governativi (maroc.ma, Idarati), servizi digitali (CIN, passaporto, imposte, casellario online…), protezione sociale (CNSS, AMO Tadamon, CNOPS…), lavoro, economia e servizi pubblici — tutti domini ufficiali o istituzioni pubbliche note.",
      "Der Bereich «Offizielle Links» enthält über 35 verifizierte offizielle marokkanische Websites: Regierungsportale (maroc.ma, Idarati), digitale Dienste (Ausweis, Pass, Steuern, Führungszeugnis online…), Sozialschutz (CNSS, AMO Tadamon, CNOPS…), Beschäftigung, Wirtschaft und öffentliche Versorger — alles offizielle Domänen oder bekannte öffentliche Institutionen.",
      "Раздел «Официальные ссылки» содержит более 35 проверенных официальных марокканских сайтов: правительственные порталы (maroc.ma, Idarati), цифровые услуги (удостоверение личности, паспорт, налоги, онлайн-справка о судимости…), соцзащита (CNSS, AMO Tadamon, CNOPS…), занятость, экономика и коммунальные службы — все официальные домены или известные госучреждения.",
    ),
    sources: [],
  },
  {
    id: "consulat",
    keywords: {
      ar: ["الخارج", "قنصلية", "المهجر", "المغاربة بالخارج", "mre", "توثيق", "تصديق"],
      en: ["abroad", "consulate", "embassy", "moroccans abroad", "mre", "legalization"],
      fr: ["étranger", "consulat", "ambassade", "mre", "légalisation"],
      es: ["extranjero", "consulado", "embajada"],
      it: ["estero", "consolato", "ambasciata"],
      de: ["ausland", "konsulat", "botschaft"],
      ru: ["за границей", "консульство", "посольство"],
    },
    answer: A(
      "المغاربة المقيمون بالخارج يجدون الخدمات القنصلية (وثائق الحالة المدنية، التسجيل، التصديقات، جواز السفر...) عبر البوابة القنصلية الرسمية وشبكة القنصليات المغربية في بلدان الإقامة.",
      "Moroccans abroad find consular services (civil status documents, registration, legalizations, passport...) via the official consular portal and the network of Moroccan consulates in their countries of residence.",
      "Les Marocains résidant à l'étranger trouvent les services consulaires (état civil, inscription, légalisations, passeport…) via le portail consulaire officiel et le réseau des consulats du Maroc.",
      "Los marroquíes en el extranjero encuentran los servicios consulares (estado civil, inscripción, legalizaciones, pasaporte…) vía el portal consular oficial y la red de consulados.",
      "Marocchini all'estero trovano i servizi consolari (atti di stato civile, iscrizione, legalizzazioni, passaporto...) tramite il portale consolare ufficiale e la rete dei consolati del Marocco nei paesi di residenza.",
      "Marokkaner im Ausland finden konsularische Dienste (Standesamt, Anmeldung, Legalisierungen, Pass…) über das offizielle Konsularportal und das Netzwerk der marokkanischen Konsulate.",
      "Марокканцы за рубежом получают консульские услуги (акты гражданского состояния, регистрация, заверения, паспорт...) через официальный консульский портал и сеть консульств Марокко."
    ),
    sources: ["consulat"],
    suggestions: ["passeport"],
  },
  {
    id: "fill-document",
    keywords: {
      ar: ["املأ", "ملء", "تعبئة", "عبّئ", "املأ وثيقة", "ملء وثيقة", "حرر لي", "اكتب لي", "املأ لي"],
      en: ["fill", "fill in", "fill out", "complete a document", "draft for me", "edit my document", "fill my"],
      fr: ["remplir", "remplissez", "compléter", "rédiger pour moi", "préremplir", "remplir mon"],
      es: ["rellenar", "rellenar documento", "completar documento", "rellename"],
      it: ["compilare", "riempire", "compilare documento", "compilami"],
      de: ["ausfüllen", "ausfüllen dokuments", "ausfüllen lassen", "ausfüllen sie"],
      ru: ["заполнить", "заполните", "заполнить документ", "заполни"],
    },
    answer: A(
      "بكل سرور! انتقل إلى قسم «املأ وثيقتك بمساعدة المساعد الآلي» في الصفحة: اختر الوثيقة من القائمة، وسأسألك عن بياناتها حقلًا حقلًا (الاسم، رقم البطاقة، الجهة، التاريخ...) مع التحقق من كل إجابة، ثم أحررها لك بشكل احترافي — يمكنك تعديل أي إجابة أو تحرير النص كاملاً، ثم طباعته أو تحميله بصيغة Word. وكل ذلك يجري محليًا في متصفحك دون إرسال أي بيانات.",
      "With pleasure! Go to the «Fill your document with the AI assistant» section on the page: pick a document, and I'll ask for its data field by field (name, ID number, authority, date...) with validation, then professionally draft it — you can edit any answer or the full text, then print or download it as Word. Everything runs locally in your browser.",
      "Avec plaisir ! Rendez-vous dans la section « Remplissez votre document avec l'assistant IA » : choisissez un document, je vous demanderai ses données champ par champ (nom, CIN, autorité, date...) avec validation, puis je le rédigerai professionnellement — vous pouvez modifier toute réponse ou le texte entier, puis l'imprimer ou le télécharger en Word. Tout se passe localement dans votre navigateur.",
      "¡Con gusto! Ve a la sección «Rellena tu documento con el asistente IA»: elige un documento y te preguntaré sus datos campo por campo con validación, luego lo redactaré profesionalmente; podrás editar cualquier respuesta o el texto completo e imprimirlo o descargarlo en Word. Todo ocurre localmente en tu navegador.",
      "Con piacere! Vai alla sezione «Compila il tuo documento con l'assistente IA»: scegli un documento, ti chiederò i dati campo per campo con convalida, poi lo redigerò professionalmente; potrai modificare ogni risposta o l'intero testo, quindi stamparlo o scaricarlo in Word. Tutto avviene localmente nel browser.",
      "Gern! Gehen Sie zum Bereich «Dokument mit dem KI-Assistenten ausfüllen»: Wählen Sie ein Dokument, ich frage die Daten Feld für Feld mit Validierung ab und verfasse es dann professionell — Sie können jede Antwort oder den ganzen Text bearbeiten und dann drucken oder als Word herunterladen. Alles läuft lokal im Browser.",
      "С удовольствием! Перейдите в раздел «Заполните документ с ИИ-ассистентом»: выберите документ, я спрошу данные поле за полем с проверкой, затем профессионально составлю документ — вы можете изменить любой ответ или весь текст, затем распечатать или скачать в Word. Всё происходит локально в вашем браузере."
    ),
    sources: [],
    suggestions: ["documents", "price"],
  },
  {
    id: "thanks",
    keywords: {
      ar: ["شكرا", "شكراً", "متشكر", "بوركت", "بارك الله"],
      en: ["thanks", "thank you", "thx"],
      fr: ["merci", "merci beaucoup"],
      es: ["gracias", "muchas gracias"],
      it: ["grazie", "mille grazie"],
      de: ["danke", "vielen dank"],
      ru: ["спасибо", "благодарю"],
    },
    answer: A(
      "على الرحب والسعة! أنا هنا دائماً لتوجيهك في مساراتك الإدارية. لا تنسَ الاستعانة بمكتبة الوثائق المجانية ودليل الروابط الرسمية بالصفحة.",
      "You're most welcome! I'm always here to guide you through your administrative procedures. Don't forget the free documents library and the official links directory on the page.",
      "Avec grand plaisir ! Je reste à votre disposition pour vos démarches. N'oubliez pas la bibliothèque gratuite et le répertoire des liens officiels sur la page.",
      "¡De nada! Estoy aquí para orientarle en sus trámites. No olvide la biblioteca gratuita y el directorio de enlaces oficiales.",
      "Prego! Sono qui per orientarla nelle pratiche. Non dimentichi la biblioteca gratuita e la guida dei link ufficiali.",
      "Gern geschehen! Ich bin gerne für Ihre Anliegen da. Vergessen Sie die kostenlose Bibliothek und das Linkverzeichnis nicht.",
      "Пожалуйста! Всегда рад помочь с вашими вопросами. Не забывайте о бесплатной библиотеке документов и справочнике официальных ссылок."
    ),
    sources: [],
  },
];

export function findIntent(text: string, locale: Locale): ChatIntent | null {
  const t = text.toLowerCase().trim();
  if (!t) return null;
  let best: { intent: ChatIntent; score: number } | null = null;
  for (const intent of chatIntents) {
    let score = 0;
    for (const [lang, kws] of Object.entries(intent.keywords)) {
      const boost = lang === locale ? 1.5 : 1;
      for (const kw of kws) {
        if (t.includes(kw.toLowerCase())) {
          score += kw.length * boost;
        }
      }
    }
    if (score > 0 && (!best || score > best.score)) best = { intent, score };
  }
  return best ? best.intent : null;
}
