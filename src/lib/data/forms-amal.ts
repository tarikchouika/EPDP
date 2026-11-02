// Work & employment forms — applications, internships, contracts,
// leaves and end-of-employment. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsAmal: DocumentItem[] = [
  // ─── Candidatures et lettres ───
  {
    id: "aml-lettre-motivation-stage",
    cat: "amal",
    title: T7(
      "رسالة تحفيزية لطلب تدريب",
      "Lettre de motivation pour un stage",
      "Cover letter for an internship",
      "Carta de motivación para unas prácticas",
      "Lettera di motivazione per un tirocinio",
      "Bewerbungsschreiben für ein Praktikum",
      "Сопроводительное письмо на стажировку"
    ),
    desc: D7(
      "رسالة موجهة إلى المقاولة أو الإدارة لإبراز الدوافع والكفاءات قصد الحصول على مقعد تدريب.",
      "Lettre adressée à l'entreprise ou à l'administration pour exposer motivations et compétences en vue d'obtenir un stage.",
      "Letter addressed to a company or administration highlighting motivation and skills to secure an internship.",
      "Carta dirigida a la empresa o administración para destacar motivaciones y competencias con el fin de obtener unas prácticas.",
      "Lettera indirizzata all'azienda o all'amministrazione per evidenziare motivazioni e competenze al fine di ottenere un tirocinio.",
      "An ein Unternehmen oder eine Behörde gerichtetes Schreiben, das Motivation und Fähigkeiten für ein Praktikum hervorhebt.",
      "Письмо в компанию или ведомство с указанием мотивации и навыков для получения места стажировки."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو الإدارة المعنية، عبر البريد الإلكتروني أو الإيداع المباشر",
      "Service des ressources humaines de l'entreprise ou de l'administration visée, par courriel ou dépôt direct",
      "Human resources department of the target company or administration, by e-mail or direct submission",
      "Departamento de recursos humanos de la empresa o administración destinataria, por correo electrónico o entrega directa",
      "Ufficio risorse umane dell'azienda o dell'amministrazione destinataria, via e-mail o consegna diretta",
      "Personalabteilung des Zielunternehmens oder der Zielbehörde, per E-Mail oder direkte Abgabe",
      "Отдел кадров целевой компании или ведомства, по электронной почте или при личной подаче"
    ),
    keywords: ["تحفيزية تدريب", "lettre motivation stage", "cover letter internship", "stage", "تدريب"],
  },
  {
    id: "aml-lettre-motivation-emploi",
    cat: "amal",
    title: T7(
      "رسالة تحفيزية لطلب عمل",
      "Lettre de motivation pour un emploi",
      "Cover letter for a job application",
      "Carta de motivación para un empleo",
      "Lettera di motivazione per un impiego",
      "Bewerbungsschreiben um eine Arbeitsstelle",
      "Сопроводительное письмо при устройстве на работу"
    ),
    desc: D7(
      "رسالة ترافق السيرة الذاتية لتسليط الضوء على المؤهلات والدوافع قصد الظفر بمنصب شغل.",
      "Lettre accompagnant le CV pour mettre en avant qualifications et motivations en vue d'obtenir un poste.",
      "Letter accompanying the CV to highlight qualifications and motivation for securing a position.",
      "Carta que acompaña al currículum para resaltar cualificaciones y motivaciones con el fin de conseguir un puesto.",
      "Lettera che accompagna il CV per mettere in risalto qualifiche e motivazioni ai fini dell'ottenimento di un posto.",
      "Schreiben, das dem Lebenslauf beiliegt und Qualifikationen sowie Motivation für die angestrebte Stelle hervorhebt.",
      "Письмо, прилагаемое к резюме, с акцентом на квалификацию и мотивацию для получения должности."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة المعلنة عن المنصب أو منصات التوظيف الإلكترونية",
      "Service des ressources humaines de l'entreprise recruteuse ou plateformes de recrutement en ligne",
      "Human resources department of the recruiting company or online recruitment platforms",
      "Departamento de recursos humanos de la empresa contratante o plataformas de empleo en línea",
      "Ufficio risorse umane dell'azienda che assume o piattaforme di reclutamento online",
      "Personalabteilung des einstellenden Unternehmens oder Online-Stellenportale",
      "Отдел кадров нанимающей компании или онлайн-платформы по трудоустройству"
    ),
    keywords: ["رسالة تحفيزية", "lettre motivation emploi", "cover letter job", "توظيف", "emploi"],
  },
  {
    id: "aml-demande-emploi-manuscrite",
    cat: "amal",
    title: T7(
      "طلب عمل خطي",
      "Demande d'emploi manuscrite",
      "Handwritten job application",
      "Solicitud de empleo manuscrita",
      "Domanda di lavoro manoscritta",
      "Handschriftliche Bewerbung um eine Stelle",
      "Рукописное заявление о приёме на работу"
    ),
    desc: D7(
      "طلب مكتوب بخط اليد يعرض مؤهلات المترشح وخبرته وحاجته إلى العمل، ويرفق عادة بالسيرة الذاتية.",
      "Demande rédigée à la main présentant qualifications, expérience et disponibilité du candidat, jointe au CV.",
      "Handwritten application presenting the candidate's qualifications, experience and availability, attached to the CV.",
      "Solicitud redactada a mano que presenta cualificaciones, experiencia y disponibilidad del candidato, adjunta al currículum.",
      "Domanda scritta a mano che presenta qualifiche, esperienza e disponibilità del candidato, allegata al CV.",
      "Handschriftlich verfasster Antrag, der Qualifikationen, Erfahrung und Verfügbarkeit des Bewerbers darstellt und dem Lebenslauf beiliegt.",
      "Рукописное заявление с изложением квалификации, опыта и готовности кандидата, прилагаемое к резюме."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو نقط استقبال الترشيحات، مع الوثائق المثبتة",
      "Service des ressources humaines de l'entreprise ou guichet de réception des candidatures, pièces justificatives à l'appui",
      "Company human resources department or application reception desk, with supporting documents",
      "Departamento de recursos humanos de la empresa o ventanilla de recepción de candidaturas, con documentos justificativos",
      "Ufficio risorse umane dell'azienda o sportello di ricezione delle candidature, con documenti giustificativi",
      "Personalabteilung des Unternehmens oder Annahmestelle für Bewerbungen, mit Nachweisunterlagen",
      "Отдел кадров предприятия или окно приёма заявлений с подтверждающими документами"
    ),
    keywords: ["طلب عمل خطي", "demande emploi manuscrite", "handwritten application", "عمل", "emploi"],
    popular: true,
  },
  {
    id: "aml-candidature-concours",
    cat: "amal",
    title: T7(
      "طلب المشاركة في مسابقة توظيف بالوظيفة العمومية",
      "Candidature à un concours de recrutement de la fonction publique",
      "Application for a public-service recruitment competition",
      "Solicitud de participación en un concurso de la función pública",
      "Domanda di partecipazione a un concorso della pubblica amministrazione",
      "Antrag auf Teilnahme an einem Auswahlverfahren des öffentlichen Dienstes",
      "Заявление на участие в конкурсе на государственную службу"
    ),
    desc: D7(
      "طلب يُودع لدى الإدارة المنظمة للمسابقة للمشاركة في الاختبارات الكتابية والشفوية للتوظيف العمومي.",
      "Demande déposée auprès de l'administration organisatrice pour prendre part aux épreuves écrites et orales du recrutement public.",
      "Application filed with the organising administration to take part in the written and oral public-recruitment examinations.",
      "Solicitud presentada ante la administración organizadora para participar en las pruebas escritas y orales del reclutamiento público.",
      "Domanda depositata presso l'amministrazione organizzatrice per partecipare alle prove scritte e orali del reclutamento pubblico.",
      "Antrag, der bei der ausrichtenden Behörde einzureichen ist, um an den schriftlichen und mündlichen Prüfungen teilzunehmen.",
      "Заявление, подаваемое в организующее ведомство для участия в письменных и устных конкурсных испытаниях."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالإدارة المنظمة للمسابقة أو عبر بوابة التوظيف العمومي",
      "Service des ressources humaines de l'administration organisatrice ou portail de l'emploi public en ligne",
      "Human resources department of the organising administration or the public employment portal",
      "Departamento de recursos humanos de la administración organizadora o el portal del empleo público",
      "Ufficio risorse umane dell'amministrazione organizzatrice oppure il portale dell'impiego pubblico",
      "Personalabteilung der ausrichtenden Behörde oder das Online-Portal für den öffentlichen Dienst",
      "Отдел кадров организующего ведомства или портал государственной службы и занятости"
    ),
    keywords: ["مسابقة توظيف", "concours fonction publique", "public service exam", "الوظيفة العمومية", "concours"],
    authority: "emploi-public",
  },
  {
    id: "aml-cv-arabe",
    cat: "amal",
    title: T7(
      "نموذج سيرة ذاتية باللغة العربية",
      "Modèle de CV en langue arabe",
      "CV template in Arabic",
      "Plantilla de currículum en árabe",
      "Modello di curriculum in lingua araba",
      "Lebenslaufvorlage in arabischer Sprache",
      "Шаблон резюме на арабском языке"
    ),
    desc: D7(
      "قالب سيرة ذاتية منظم بالعربية يبرز المسار الدراسي والمهني والمهارات اللغوية والمعلوماتية.",
      "Gabarit structuré en arabe valorisant le parcours scolaire et professionnel ainsi que les compétences linguistiques.",
      "Structured Arabic template showcasing educational and professional background along with language and IT skills.",
      "Plantilla estructurada en árabe que destaca el recorrido académico y profesional así como las competencias lingüísticas.",
      "Modello strutturato in arabo che valorizza il percorso scolastico e professionale e le competenze linguistiche.",
      "Strukturierte arabische Vorlage, die Bildungs- und Berufsweg sowie Sprach- und IT-Kenntnisse hervorhebt.",
      "Структурированный арабский шаблон, отражающий образование, профессиональный путь и языковые навыки."
    ),
    where: W7(
      "يُرفق بالملفات الموجهة إلى الإدارات والمقاولات الناطقة بالعربية أو ثنائية اللغة",
      "À joindre aux dossiers destinés aux administrations et entreprises arabophones ou bilingues",
      "To be attached to files submitted to Arabic-speaking or bilingual administrations and companies",
      "Para adjuntar a los expedientes destinados a administraciones y empresas arabófonas o bilingües",
      "Da allegare ai fascicoli destinati ad amministrazioni e aziende arabofone o bilingue",
      "Beizufügen zu Unterlagen für arabischsprachige oder zweisprachige Behörden und Unternehmen",
      "Прилагается к документам для арабоязычных или двуязычных ведомств и компаний"
    ),
    keywords: ["سيرة ذاتية بالعربية", "CV arabe", "Arabic CV", "سيرة ذاتية", "CV"],
  },
  {
    id: "aml-cv-francais",
    cat: "amal",
    title: T7(
      "نموذج سيرة ذاتية باللغة الفرنسية",
      "Modèle de CV en langue française",
      "CV template in French",
      "Plantilla de currículum en francés",
      "Modello di curriculum in lingua francese",
      "Lebenslaufvorlage in französischer Sprache",
      "Шаблон резюме на французском языке"
    ),
    desc: D7(
      "قالب سيرة ذاتية بالفرنسية يرتب المعلومات وفق العادات المعمول بها في المقاولات المغربية.",
      "Gabarit de CV en français organisant les informations selon les usages en vigueur dans les entreprises marocaines.",
      "French CV template organising information according to the standards in use in Moroccan companies.",
      "Plantilla de currículum en francés que organiza la información según los usos vigentes en las empresas marroquíes.",
      "Modello di CV in francese che organizza le informazioni secondo gli usi vigenti nelle aziende marocchine.",
      "Französische Lebenslaufvorlage, die Informationen nach den in marokkanischen Unternehmen üblichen Gepflogenheiten gliedert.",
      "Шаблон резюме на французском языке, оформленный по стандартам, принятым в марокканских компаниях."
    ),
    where: W7(
      "يُرفق بملفات الترشيح لدى المقاولات والمؤسسات التي تطلب السيرة الذاتية بالفرنسية",
      "À joindre aux candidatures auprès des entreprises et institutions exigeant un CV en français",
      "To be attached to applications to companies and institutions requiring a French CV",
      "Para adjuntar a las candidaturas ante empresas e instituciones que exigen un currículum en francés",
      "Da allegare alle candidature presso aziende e istituzioni che richiedono un CV in francese",
      "Beizufügen zu Bewerbungen bei Unternehmen und Institutionen, die einen französischen Lebenslauf verlangen",
      "Прилагается к заявкам в компании и учреждения, требующие резюме на французском языке"
    ),
    keywords: ["سيرة ذاتية بالفرنسية", "CV français", "French CV", "سيرة ذاتية", "CV"],
  },
  {
    id: "aml-recommandation-universitaire",
    cat: "amal",
    title: T7(
      "رسالة توصية جامعية",
      "Lettre de recommandation universitaire",
      "Academic recommendation letter",
      "Carta de recomendación universitaria",
      "Lettera di raccomandazione universitaria",
      "Akademisches Empfehlungsschreiben",
      "Академическое рекомендательное письмо"
    ),
    desc: D7(
      "رسالة من أستاذ جامعي تشهد بمستوى الطالب وتوصي بترشيحه لمواصلة الدراسة أو التدريب.",
      "Lettre d'un enseignant universitaire attestant le niveau de l'étudiant et recommandant sa candidature.",
      "Letter from a university lecturer attesting to the student's level and recommending their candidacy.",
      "Carta de un profesor universitario que acredita el nivel del estudiante y recomienda su candidatura.",
      "Lettera di un docente universitario che attesta il livello dello studente e ne raccomanda la candidatura.",
      "Schreiben eines Hochschullehrers, das den Leistungsstand des Studierenden bescheinigt und dessen Bewerbung empfiehlt.",
      "Письмо от преподавателя вуза, подтверждающее уровень студента и рекомендующее его кандидатуру."
    ),
    where: W7(
      "يوجهها الأستاذ إلى المؤسسة المستقبلة أو تسلَّم للطالب في ظرف مغلق",
      "Adressée par l'enseignant à l'établissement destinataire ou remise à l'étudiant sous pli fermé",
      "Sent by the lecturer to the receiving institution or handed to the student in a sealed envelope",
      "Enviada por el profesor a la institución destinataria o entregada al estudiante en sobre cerrado",
      "Inviata dal docente all'istituto destinatario o consegnata allo studente in busta chiusa",
      "Vom Dozenten an die aufnehmende Einrichtung gesandt oder dem Studierenden in verschlossenem Umschlag übergeben",
      "Направляется преподавателем в принимающее учреждение или выдаётся студенту в запечатанном конверте"
    ),
    keywords: ["توصية جامعية", "lettre recommandation universitaire", "academic recommendation", "توصية", "recommandation"],
  },
  {
    id: "aml-recommandation-employeur",
    cat: "amal",
    title: T7(
      "رسالة توصية من المشغل",
      "Lettre de recommandation de l'employeur",
      "Employer recommendation letter",
      "Carta de recomendación del empleador",
      "Lettera di raccomandazione del datore di lavoro",
      "Empfehlungsschreiben des Arbeitgebers",
      "Рекомендательное письмо от работодателя"
    ),
    desc: D7(
      "شهادة من مشغل سابق تثبت حسن الأداء والانضباط وتدعم طلب التوظيف لدى مقاولة جديدة.",
      "Attestation d'un ancien employeur confirmant bonne performance et sérieux, à l'appui d'une nouvelle candidature.",
      "Statement from a former employer confirming good performance and reliability in support of a new application.",
      "Constancia de un antiguo empleador que confirma buen desempeño y seriedad en apoyo a una nueva candidatura.",
      "Attestazione di un precedente datore di lavoro che conferma buona prestazione e serietà a sostegno di una nuova candidatura.",
      "Bescheinigung eines früheren Arbeitgebers über gute Leistung und Zuverlässigkeit zugunsten einer neuen Bewerbung.",
      "Письмо от бывшего работодателя, подтверждающее хорошую работу и надёжность, в поддержку новой заявки."
    ),
    where: W7(
      "يوجهها المشغل إلى المقاولة الطالبة أو تسلَّم للأجير لرفقها بملف ترشيحه",
      "Adressée par l'employeur à l'entreprise requérante ou remise au salarié pour joindre à son dossier",
      "Sent by the employer to the requesting company or handed to the employee for their application file",
      "Enviada por el empleador a la empresa solicitante o entregada al empleado para adjuntar a su expediente",
      "Inviata dal datore di lavoro all'azienda richiedente o consegnata al lavoratore per il suo fascicolo",
      "Vom Arbeitgeber an das anfordernde Unternehmen gesandt oder dem Arbeitnehmer für die Bewerbungsmappe übergeben",
      "Направляется работодателем в запрашивающую компанию или передаётся работнику для приложения к делу"
    ),
    keywords: ["توصية مشغل", "lettre recommandation employeur", "employer reference", "توصية", "recommandation"],
  },
  {
    id: "aml-reponse-annonce",
    cat: "amal",
    title: T7(
      "طلب توظيف استجابة لإعلان",
      "Candidature en réponse à une annonce",
      "Application in response to a job advertisement",
      "Candidatura en respuesta a un anuncio",
      "Candidatura in risposta a un annuncio",
      "Bewerbung auf eine Stellenanzeige",
      "Отклик на объявленную вакансию"
    ),
    desc: D7(
      "رسالة ترشيح لمنصب معلن عنه تحيل على مرجع الإعلان وتطابق ملف المترشح مع الشروط المطلوبة.",
      "Lettre de candidature à un poste annoncé citant la référence de l'annonce et mettant le profil en regard des exigences.",
      "Application letter for an advertised post citing the advert reference and matching the profile to requirements.",
      "Carta de candidatura a un puesto anunciado citando la referencia del anuncio y confrontando el perfil con los requisitos.",
      "Lettera di candidatura a un posto annunciato, con riferimento all'annuncio e confronto tra profilo e requisiti richiesti.",
      "Bewerbungsschreiben für eine ausgeschriebene Stelle unter Angabe der Referenz und Gegenüberstellung von Profil und Anforderungen.",
      "Письмо-заявка на объявленную должность со ссылкой на номер объявления и соответствием профиля требованиям."
    ),
    where: W7(
      "العنوان المذكور في الإعلان أو البريد الإلكتروني المخصص لاستقبال الترشيحات",
      "Adresse indiquée dans l'annonce ou adresse électronique réservée à la réception des candidatures",
      "Address indicated in the advert or the e-mail address reserved for applications",
      "Dirección indicada en el anuncio o correo electrónico reservado para recibir candidaturas",
      "Indirizzo indicato nell'annuncio o casella di posta elettronica dedicata alle candidature",
      "In der Anzeige genannte Adresse oder die für Bewerbungen vorgesehene E-Mail-Adresse",
      "Адрес, указанный в объявлении, или электронная почта для приёма заявок"
    ),
    keywords: ["استجابة لإعلان", "réponse à une annonce", "job application", "إعلان توظيف", "annonce emploi"],
  },
  {
    id: "aml-inscription-anapec",
    cat: "amal",
    title: T7(
      "طلب التسجيل لدى الوكالة الوطنية لإنعاش التشغيل والكفاءات",
      "Demande d'inscription à l'ANAPEC",
      "ANAPEC registration application",
      "Solicitud de inscripción en la ANAPEC",
      "Domanda di iscrizione all'ANAPEC",
      "Antrag auf Registrierung bei der ANAPEC",
      "Заявление о регистрации в ANAPEC"
    ),
    desc: D7(
      "طلب يقدمه الباحث عن عمل لتسجيل نفسه لدى وكالة ANAPEC والاستفادة من برامج الإدماج المهني.",
      "Demande par laquelle un chercheur d'emploi s'inscrit auprès de l'ANAPEC pour bénéficier des programmes d'insertion.",
      "Application whereby a job seeker registers with ANAPEC to benefit from professional insertion programmes.",
      "Solicitud mediante la cual un buscador de empleo se inscribe en la ANAPEC para beneficiarse de los programas de inserción.",
      "Domanda con cui un cercatore di lavoro si iscrive all'ANAPEC per beneficiare dei programmi di inserimento professionale.",
      "Antrag, mit dem sich Stellensuchende bei der ANAPEC registrieren, um von Eingliederungsprogrammen zu profitieren.",
      "Заявление о регистрации соискателя в ANAPEC для участия в программах содействия занятости."
    ),
    where: W7(
      "أقرب وكالة ANAPEC إلى محل السكنى، مع البطاقة الوطنية والسيرة الذاتية",
      "Agence ANAPEC la plus proche du domicile, avec carte nationale d'identité et CV",
      "Nearest ANAPEC office to the place of residence, with national ID card and CV",
      "Oficina de la ANAPEC más cercana al domicilio, con documento nacional de identidad y currículum",
      "Ufficio ANAPEC più prossimo al domicilio, con carta d'identità nazionale e CV",
      "ANAPEC-Stelle in Wohnortnähe, mit Personalausweis und Lebenslauf",
      "Ближайший офис ANAPEC по месту жительства, с удостоверением личности и резюме"
    ),
    keywords: ["التسجيل في ANAPEC", "inscription ANAPEC", "ANAPEC registration", "باحث عن عمل", "chercheur d'emploi"],
    authority: "anapec",
  },

  // ─── Stages ───
  {
    id: "aml-stage-observation",
    cat: "amal",
    title: T7(
      "طلب تدريب تثقفي لمتعلم إعدادي أو ثانوي",
      "Demande de stage d'observation pour collégien ou lycéen",
      "Observation internship request for a middle or high school pupil",
      "Solicitud de prácticas de observación para alumno de secundaria",
      "Domanda di tirocinio di osservazione per studente di scuola secondaria",
      "Antrag auf Orientierungspraktikum für Schüler der Mittel- oder Oberstufe",
      "Заявление на ознакомительную практику для школьника"
    ),
    desc: D7(
      "طلب يقدمه المتعلم أو وليه إلى مقاولة للاطلاع على محيط الشغل خلال عطلة قصيرة.",
      "Demande présentée par l'élève ou son tuteur auprès d'une entreprise pour découvrir le monde du travail durant une courte période.",
      "Request submitted by the pupil or their guardian to a company to discover the world of work for a short period.",
      "Solicitud presentada por el alumno o su tutor ante una empresa para conocer el mundo laboral durante un breve período.",
      "Domanda presentata dall'alunno o dal suo tutore a un'azienda per conoscere il mondo del lavoro per un breve periodo.",
      "Antrag, den der Schüler oder seine Erziehungsberechtigten an ein Unternehmen richten, um kurz die Arbeitswelt kennenzulernen.",
      "Заявление от ученика или его опекуна в компанию для краткого знакомства с миром труда."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة المستقبلة، غالبا بإرفاق ترخيص المؤسسة التعليمية",
      "Service des ressources humaines de l'entreprise d'accueil, généralement avec l'autorisation de l'établissement scolaire",
      "Human resources department of the host company, usually together with the school's authorisation",
      "Departamento de recursos humanos de la empresa de acogida, generalmente con la autorización del centro escolar",
      "Ufficio risorse umane dell'azienda ospitante, di norma con l'autorizzazione della scuola",
      "Personalabteilung des aufnehmenden Unternehmens, in der Regel zusammen mit der Genehmigung der Schule",
      "Отдел кадров принимающей компании, как правило с разрешением учебного заведения"
    ),
    keywords: ["تدريب تثقفي", "stage observation", "observation internship", "تدريب", "stage"],
  },
  {
    id: "aml-convention-stage",
    cat: "amal",
    title: T7(
      "عقد تدريب ثلاثي الأطراف",
      "Convention de stage tripartite",
      "Tripartite internship agreement",
      "Convenio de prácticas tripartito",
      "Convenzione di tirocinio tripartita",
      "Dreiseitiges Praktikumsabkommen",
      "Трёхсторонний договор о стажировке"
    ),
    desc: D7(
      "اتفاق بين المؤسسة التكوينية والمقاولة والمتدرب يحدد مدة التدريب ومكانه والالتزامات المتبادلة.",
      "Accord entre l'établissement de formation, l'entreprise et le stagiaire fixant durée, lieu et obligations respectives.",
      "Agreement between the training institution, the company and the intern setting duration, venue and mutual obligations.",
      "Acuerdo entre el centro de formación, la empresa y el practicante que fija duración, lugar y obligaciones respectivas.",
      "Accordo tra l'istituto di formazione, l'azienda e il tirocinante che definisce durata, sede e obblighi reciproci.",
      "Vereinbarung zwischen Bildungseinrichtung, Unternehmen und Praktikant, die Dauer, Ort und gegenseitige Pflichten festlegt.",
      "Соглашение между учебным заведением, компанией и стажёром, определяющее срок, место и взаимные обязательства."
    ),
    where: W7(
      "يحرر في ثلاث نسخ موقعة وتودع نسخة لدى كل طرف من الأطراف المعنية",
      "Établi en trois exemplaires signés, un exemplaire étant déposé auprès de chaque partie concernée",
      "Drawn up in three signed copies, one filed with each party concerned",
      "Se extiende en tres ejemplares firmados, depositándose uno ante cada parte concerniente",
      "Redatto in tre copie firmate, una delle quali depositata presso ciascuna parte interessata",
      "Wird in drei unterschriebenen Exemplaren erstellt, von denen jeweils eines bei jeder Partei verbleibt",
      "Составляется в трёх подписанных экземплярах, по одному для каждой из сторон"
    ),
    keywords: ["عقد تدريب ثلاثي", "convention stage tripartite", "internship agreement", "تدريب", "stage"],
    popular: true,
  },
  {
    id: "aml-stage-pfe",
    cat: "amal",
    title: T7(
      "طلب تدريب لإنجاز مشروع نهاية الدراسة",
      "Demande de stage de fin d'études (PFE)",
      "End-of-studies project internship request",
      "Solicitud de prácticas de fin de estudios",
      "Domanda di tirocinio di fine studi",
      "Antrag auf Abschlusspraktikum",
      "Заявление на преддипломную практику"
    ),
    desc: D7(
      "طلب موجه إلى مقاولة لإتمام مشروع نهاية الدراسة تحت إشراف مهني وأكاديمي مشترك.",
      "Demande adressée à une entreprise pour réaliser le projet de fin d'études sous double encadrement professionnel et académique.",
      "Request addressed to a company to carry out the end-of-studies project under joint professional and academic supervision.",
      "Solicitud dirigida a una empresa para realizar el proyecto de fin de estudios bajo doble supervisión profesional y académica.",
      "Domanda rivolta a un'azienda per svolgere il progetto di fine studi sotto doppia supervisione professionale e accademica.",
      "Antrag an ein Unternehmen zur Durchführung des Abschlussprojekts unter beruflicher und akademischer Doppelbetreuung.",
      "Заявление в компанию для выполнения дипломного проекта под совместным профессиональным и академическим руководством."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة المستهدفة، مع رسالة المؤسسة التكوينية",
      "Service des ressources humaines de l'entreprise visée, accompagné de la lettre de l'établissement de formation",
      "Human resources department of the target company, together with the training institution's letter",
      "Departamento de recursos humanos de la empresa destinataria, junto con la carta del centro de formación",
      "Ufficio risorse umane dell'azienda di destinazione, unitamente alla lettera dell'istituto di formazione",
      "Personalabteilung des anvisierten Unternehmens, zusammen mit dem Schreiben der Bildungseinrichtung",
      "Отдел кадров целевой компании вместе с письмом учебного заведения"
    ),
    keywords: ["مشروع نهاية الدراسة", "stage PFE", "end-of-studies internship", "تدريب", "stage fin d'études"],
  },
  {
    id: "aml-stage-ete",
    cat: "amal",
    title: T7(
      "طلب تدريب صيفي",
      "Demande de stage d'été",
      "Summer internship request",
      "Solicitud de prácticas de verano",
      "Domanda di tirocinio estivo",
      "Antrag auf Sommerpraktikum",
      "Заявление на летнюю стажировку"
    ),
    desc: D7(
      "طلب يقدمه الطالب خلال العطلة الصيفية للاستفادة من تدريب يعزز مؤهلاته النظرية.",
      "Demande déposée par l'étudiant durant les vacances d'été pour suivre un stage complétant sa formation théorique.",
      "Application submitted by a student during the summer holidays for an internship complementing their theoretical training.",
      "Solicitud presentada por el estudiante durante las vacaciones de verano para realizar unas prácticas que complementen su formación.",
      "Domanda presentata dallo studente durante le vacanze estive per un tirocinio a complemento della formazione teorica.",
      "Antrag, den Studierende in den Sommerferien stellen, um ein die theoretische Ausbildung ergänzendes Praktikum zu absolvieren.",
      "Заявление студента на летних каникулах о прохождении стажировки, дополняющей теоретическую подготовку."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة، قبل انطلاق العطلة الصيفية بوقت كاف",
      "Service des ressources humaines de l'entreprise, suffisamment avant le début des vacances d'été",
      "Company human resources department, well before the summer holidays begin",
      "Departamento de recursos humanos de la empresa, con suficiente antelación al inicio del verano",
      "Ufficio risorse umane dell'azienda, con congruo anticipo rispetto all'inizio dell'estate",
      "Personalabteilung des Unternehmens, rechtzeitig vor Beginn der Sommerferien",
      "Отдел кадров компании заблаговременно до начала летних каникул"
    ),
    keywords: ["تدريب صيفي", "stage été", "summer internship", "تدريب", "stage"],
  },
  {
    id: "aml-prolongation-stage",
    cat: "amal",
    title: T7(
      "طلب تمديد مدة التدريب",
      "Demande de prolongation de stage",
      "Internship extension request",
      "Solicitud de prórroga de prácticas",
      "Domanda di proroga del tirocinio",
      "Antrag auf Verlängerung des Praktikums",
      "Заявление о продлении стажировки"
    ),
    desc: D7(
      "طلب لتمديد فترة التدريب عند الحاجة إلى إنجاز المهام أو المشروع المسند داخل أجل إضافي.",
      "Demande visant à allonger la période de stage lorsque l'achèvement des tâches confiées le justifie.",
      "Request to lengthen the internship period when completing the assigned tasks requires additional time.",
      "Solicitud para ampliar el período de prácticas cuando la finalización de las tareas encomendadas lo justifique.",
      "Domanda di estensione del tirocinio quando il completamento delle mansioni assegnate lo richieda.",
      "Antrag auf Verlängerung des Praktikums, wenn die Fertigstellung der übertragenen Aufgaben dies erfordert.",
      "Заявление о продлении срока стажировки, когда завершение порученных задач требует дополнительного времени."
    ),
    where: W7(
      "المشرف على التدريب بالمقاولة مع موافقة المؤسسة التكوينية عند الاقتضاء",
      "Superviseur de stage au sein de l'entreprise, avec l'accord de l'établissement de formation si nécessaire",
      "Internship supervisor within the company, with the training institution's approval where required",
      "Supervisor de prácticas en la empresa, con la conformidad del centro de formación si procede",
      "Tutor del tirocinio in azienda, con il consenso dell'istituto di formazione ove necessario",
      "Praktikumsbetreuer im Unternehmen, erforderlichenfalls mit Zustimmung der Bildungseinrichtung",
      "Руководитель стажировки в компании, при необходимости с согласия учебного заведения"
    ),
    keywords: ["تمديد التدريب", "prolongation stage", "internship extension", "تدريب", "stage"],
  },
  {
    id: "aml-convention-stage-remunere",
    cat: "amal",
    title: T7(
      "عقد تدريب مأجور",
      "Convention de stage rémunéré",
      "Paid internship agreement",
      "Convenio de prácticas remuneradas",
      "Convenzione di tirocinio retribuito",
      "Vereinbarung über ein vergütetes Praktikum",
      "Договор об оплачиваемой стажировке"
    ),
    desc: D7(
      "اتفاق تدريب ينص على صرف تعويض شهري للمتدرب تحدد قيمته وطرق أدائه بين الطرفين.",
      "Convention prévoyant le versement au stagiaire d'une indemnité mensuelle dont le montant et les modalités sont convenus.",
      "Agreement providing for the payment to the intern of a monthly allowance whose amount and terms are agreed upon.",
      "Convenio que prevé el abono al practicante de una asignación mensual cuyo importe y condiciones se acuerdan.",
      "Convenzione che prevede il versamento al tirocinante di un'indennità mensuale di importo e modalità concordati.",
      "Vereinbarung über die Zahlung einer monatlichen Vergütung an den Praktikanten, deren Höhe und Modalitäten vereinbart werden.",
      "Договор о выплате стажёру ежемесячного вознаграждения, размер и порядок которого согласованы сторонами."
    ),
    where: W7(
      "يوقع من المقاولة والمتدرب وتودع نسخة منه لدى مصلحة الموارد البشرية",
      "Signé par l'entreprise et le stagiaire, un exemplaire étant déposé au service des ressources humaines",
      "Signed by the company and the intern, with a copy filed with the human resources department",
      "Firmado por la empresa y el practicante, depositándose una copia en recursos humanos",
      "Firmato dall'azienda e dal tirocinante, con una copia depositata presso l'ufficio risorse umane",
      "Von Unternehmen und Praktikant unterzeichnet, mit einer Kopie für die Personalabteilung",
      "Подписывается компанией и стажёром, копия передаётся в отдел кадров"
    ),
    keywords: ["تدريب مأجور", "stage rémunéré", "paid internship", "تدريب", "convention stage"],
  },
  {
    id: "aml-attestation-fin-stage",
    cat: "amal",
    title: T7(
      "طلب تسليم شهادة نهاية التدريب",
      "Demande d'attestation de fin de stage",
      "Request for an end-of-internship certificate",
      "Solicitud de certificado de fin de prácticas",
      "Domanda di attestato di fine tirocinio",
      "Antrag auf Praktikumsabschlussbescheinigung",
      "Заявление о выдаче свидетельства о завершении стажировки"
    ),
    desc: D7(
      "طلب يوجهه المتدرب إلى المقاولة للحصول على شهادة تثبت إنجاز التدريب وتقييم الأداء خلاله.",
      "Demande adressée par le stagiaire à l'entreprise en vue d'obtenir une attestation certifiant le stage et son évaluation.",
      "Request sent by the intern to the company to obtain a certificate confirming the internship and its assessment.",
      "Solicitud enviada por el practicante a la empresa para obtener un certificado que acredite las prácticas y su evaluación.",
      "Domanda inviata dal tirocinante all'azienda per ottenere un attestato che certifichi il tirocinio e la valutazione.",
      "Antrag des Praktikanten an das Unternehmen auf eine Bescheinigung über Praktikum und Beurteilung.",
      "Заявление стажёра в компанию о выдаче справки, подтверждающей прохождение стажировки и её оценку."
    ),
    where: W7(
      "المشرف على التدريب أو مصلحة الموارد البشرية بالمقاولة قبل مغادرة مقر العمل",
      "Superviseur de stage ou service des ressources humaines de l'entreprise avant le départ",
      "Internship supervisor or company human resources department before departure",
      "Supervisor de prácticas o departamento de recursos humanos de la empresa antes de la salida",
      "Tutor del tirocinio o ufficio risorse umane dell'azienda prima della partenza",
      "Praktikumsbetreuer oder Personalabteilung des Unternehmens vor dem Ausscheiden",
      "Руководитель стажировки или отдел кадров компании до увольнения"
    ),
    keywords: ["شهادة نهاية التدريب", "attestation fin de stage", "internship certificate", "تدريب", "stage"],
  },

  // ─── Contrats de travail ───
  {
    id: "aml-contrat-temps-partiel",
    cat: "amal",
    title: T7(
      "عقد عمل بدوام جزئي",
      "Contrat de travail à temps partiel",
      "Part-time employment contract",
      "Contrato de trabajo a tiempo parcial",
      "Contratto di lavoro a tempo parziale",
      "Teilzeitarbeitsvertrag",
      "Трудовой договор на неполное рабочее время"
    ),
    desc: D7(
      "عقد يحدد ساعات العمل الأسبوعية بأقل من المدة القانونية مع بيان الأجر وتوزيع أوقات العمل.",
      "Contrat fixant un horaire hebdomadaire inférieur à la durée légale, précisant rémunération et répartition des horaires.",
      "Contract setting a weekly schedule below the legal duration, specifying pay and distribution of working hours.",
      "Contrato que fija un horario semanal inferior a la duración legal, precisando retribución y distribución del tiempo.",
      "Contratto che fissa un orario settimanale inferiore a quello legale, specificando retribuzione e distribuzione dell'orario.",
      "Vertrag mit einer Wochenarbeitszeit unterhalb der gesetzlichen Dauer, mit Angabe von Entgelt und Arbeitszeitverteilung.",
      "Договор с рабочей неделей короче установленной законом продолжительности, с указанием оплаты и графика."
    ),
    where: W7(
      "يحرر في نسختين يوقعهما الطرفان وتحفظ نسخة لدى كل واحد منهما",
      "Établi en deux exemplaires signés par les deux parties, chacune conservant sa copie",
      "Drawn up in two copies signed by both parties, each keeping their copy",
      "Se extiende en dos ejemplares firmados por ambas partes, conservando cada una su copia",
      "Redatto in due copie firmate da entrambe le parti, ciascuna delle quali ne conserva una",
      "Wird in zwei von beiden Parteien unterschriebenen Exemplaren erstellt, von denen jede Partei eins behält",
      "Составляется в двух экземплярах, подписывается сторонами, каждая хранит свой экземпляр"
    ),
    keywords: ["دوام جزئي", "contrat temps partiel", "part-time contract", "عقد عمل", "contrat de travail"],
  },
  {
    id: "aml-contrat-saisonnier-agricole",
    cat: "amal",
    title: T7(
      "عقد عمل موسمي فلاحي",
      "Contrat de travail saisonnier agricole",
      "Seasonal agricultural employment contract",
      "Contrato de trabajo agrícola de temporada",
      "Contratto di lavoro agricolo stagionale",
      "Saisonarbeitsvertrag in der Landwirtschaft",
      "Сезонный сельскохозяйственный трудовой договор"
    ),
    desc: D7(
      "عقد يربط الأجير الفلاحي بمشغله خلال موسم الأشغال الزراعية مع تحديد المدة والمهام والأجر.",
      "Contrat liant l'ouvrier agricole à son employeur pour la saison des travaux, avec durée, tâches et salaire précisés.",
      "Contract binding the farm worker to the employer for the works season, specifying duration, tasks and wages.",
      "Contrato que vincula al obrero agrícola con su empleador durante la temporada de trabajos, precisando duración, tareas y salario.",
      "Contratto che vincola il lavoratore agricolo al datore di lavoro per la stagione dei lavori, specificando durata, mansioni e retribuzione.",
      "Vertrag, der den Landarbeiter für die Arbeitssaison an den Arbeitgeber bindet, mit Angabe von Dauer, Tätigkeiten und Lohn.",
      "Договор, связывающий сельхозработника с работодателем на сезон работ с указанием срока, обязанностей и оплаты."
    ),
    where: W7(
      "يوقع لدى المشغل الفلاحي، مع وجوب التصريح بالأجير لدى الصندوق الوطني للضمان الاجتماعي",
      "Signé auprès de l'exploitation agricole, l'ouvrier devant être déclaré à la CNSS",
      "Signed at the farm, with the worker required to be declared to the CNSS",
      "Se firma en la explotación agrícola, debiendo el obrero ser declarado ante la CNSS",
      "Firmato presso l'azienda agricola, con obbligo di dichiarazione del lavoratore alla CNSS",
      "Wird beim landwirtschaftlichen Betrieb unterzeichnet, wobei der Arbeitnehmer bei der CNSS zu melden ist",
      "Подписывается в сельхозпредприятии с обязательной регистрацией работника в CNSS"
    ),
    keywords: ["عقد موسمي", "contrat saisonnier agricole", "seasonal farm work", "فلاحي", "saisonnier"],
  },
  {
    id: "aml-contrat-interim",
    cat: "amal",
    title: T7(
      "عقد عمل مؤقت لدى مقاولة للتشغيل المؤقت",
      "Contrat de mission (travail temporaire)",
      "Temporary assignment contract (agency work)",
      "Contrato de misión (trabajo temporal)",
      "Contratto di somministrazione (lavoro temporaneo)",
      "Überlassungsvertrag (Zeitarbeit)",
      "Договор о временной работе через агентство"
    ),
    desc: D7(
      "عقد تحرره مقاولة التشغيل المؤقت لفائدة أجير يوضع رهن إشارة مقاولة مستعملة لمهمة محددة.",
      "Contrat établi par une entreprise de travail temporaire mettant un salarié à disposition d'une entreprise utilisatrice.",
      "Contract drawn up by a temporary work agency placing an employee at the disposal of a user company.",
      "Contrato elaborado por una empresa de trabajo temporal que pone a un empleado a disposición de una empresa usuaria.",
      "Contratto redatto da un'agenzia di somministrazione che mette un lavoratore a disposizione di un'impresa utilizzatrice.",
      "Vertrag einer Zeitarbeitsfirma, die einen Arbeitnehmer einem Einsatzunternehmen überlässt.",
      "Договор кадрового агентства о предоставлении работника компании-пользователю."
    ),
    where: W7(
      "يوقع لدى مقاولة التشغيل المؤقت قبل بداية المهمة وتسلَّم نسخة للأجير",
      "Signé au siège de l'entreprise de travail temporaire avant le début de la mission, copie remise au salarié",
      "Signed at the temporary work agency before the assignment begins, with a copy given to the employee",
      "Se firma en la empresa de trabajo temporal antes de iniciar la misión, entregándose copia al empleado",
      "Firmato presso l'agenzia di somministrazione prima dell'inizio della missione, con copia consegnata al lavoratore",
      "Wird vor Einsatzbeginn bei der Zeitarbeitsfirma unterzeichnet, eine Kopie erhält der Arbeitnehmer",
      "Подписывается в агентстве до начала задания, копия выдаётся работнику"
    ),
    keywords: ["تشغيل مؤقت", "contrat intérim", "temporary agency work", "عقد مؤقت", "mission"],
  },
  {
    id: "aml-contrat-essai",
    cat: "amal",
    title: T7(
      "عقد عمل تجريبي",
      "Contrat d'essai",
      "Probationary employment contract",
      "Contrato de prueba",
      "Contratto di prova",
      "Probearbeitsvertrag",
      "Трудовой договор с испытательным сроком"
    ),
    desc: D7(
      "عقد لفترة اختبار يمكن المشغل من تقييم كفاءة الأجير قبل التثبيت النهائي في المنصب.",
      "Contrat pour une période d'essai permettant à l'employeur d'apprécier la compétence du salarié avant l'embauche définitive.",
      "Contract for a trial period allowing the employer to assess the employee's competence before permanent hiring.",
      "Contrato por un período de prueba que permite al empleador valorar la competencia del empleado antes de la contratación definitiva.",
      "Contratto per un periodo di prova che consente al datore di lavoro di valutare la competenza del lavoratore prima dell'assunzione definitiva.",
      "Vertrag für eine Probezeit, in der der Arbeitgeber die Eignung des Arbeitnehmers vor der festen Einstellung beurteilt.",
      "Договор на испытательный срок, позволяющий работодателю оценить компетентность работника до постоянного найма."
    ),
    where: W7(
      "يوقع بين الطرفين عند الالتحاق بالعمل ويذكر أجل الاختبار صراحة فيه",
      "Signé entre les parties à la prise de fonction, la durée d'essai étant expressément mentionnée",
      "Signed between the parties upon taking up the post, with the trial duration expressly stated",
      "Se firma entre las partes al tomar posesión del cargo, mencionándose expresamente la duración de prueba",
      "Firmato tra le parti all'assunzione in servizio, con indicazione espressa della durata della prova",
      "Wird bei Arbeitsantritt zwischen den Parteien geschlossen, die Probezeit ist ausdrücklich anzugeben",
      "Подписывается сторонами при вступлении в должность с явным указанием срока испытания"
    ),
    keywords: ["عقد تجريبي", "contrat d'essai", "probation contract", "فترة اختبار", "période d'essai"],
  },
  {
    id: "aml-avenant-contrat",
    cat: "amal",
    title: T7(
      "مرفق تعديل عقد العمل",
      "Avenant au contrat de travail",
      "Amendment to the employment contract",
      "Anexo al contrato de trabajo",
      "Appendice al contratto di lavoro",
      "Nachtrag zum Arbeitsvertrag",
      "Дополнительное соглашение к трудовому договору"
    ),
    desc: D7(
      "وثيقة تعدل بنود العقد الأصلي كالمنصب أو الأجر أو مكان العمل بتراضي الطرفين.",
      "Document modifiant les clauses du contrat initial — poste, salaire ou lieu de travail — d'un commun accord.",
      "Document amending the clauses of the original contract — position, pay or workplace — by mutual agreement.",
      "Documento que modifica las cláusulas del contrato inicial —puesto, salario o lugar de trabajo— de común acuerdo.",
      "Documento che modifica le clausole del contratto iniziale — posizione, retribuzione o sede — di comune accordo.",
      "Urkunde, die die Klauseln des ursprünglichen Vertrags — Stelle, Gehalt oder Arbeitsort — einvernehmlich ändert.",
      "Документ, изменяющий условия исходного договора — должность, оплату или место работы — по обоюдному согласию."
    ),
    where: W7(
      "يوقع من الطرفين ويُرفق بنسخة عقد العمل الأصلي المحفوظة لدى كل واحد منهما",
      "Signé par les deux parties et annexé à l'exemplaire du contrat original conservé par chacune",
      "Signed by both parties and attached to the copy of the original contract kept by each",
      "Firmado por ambas partes y adjunto al ejemplar del contrato original que conserva cada una",
      "Firmato da entrambe le parti e allegato alla copia del contratto originale conservata da ciascuna",
      "Von beiden Parteien unterzeichnet und der Originalvertragsfassung jeder Partei beigefügt",
      "Подписывается обеими сторонами и прилагается к экземпляру исходного договора каждой из них"
    ),
    keywords: ["تعديل عقد العمل", "avenant contrat", "contract amendment", "عقد عمل", "avenant"],
  },
  {
    id: "aml-avenant-teletravail",
    cat: "amal",
    title: T7(
      "مرفق العمل عن بعد",
      "Avenant de télétravail",
      "Remote-work amendment",
      "Anexo de teletrabajo",
      "Appendice di lavoro a distanza",
      "Nachtrag zur Telearbeit",
      "Дополнительное соглашение об удалённой работе"
    ),
    desc: D7(
      "ملحق للعقد ينظم أداء العمل عن بعد من حيث الأيام والساعات والتجهيزات وحدود التغطية.",
      "Annexe organisant l'exercice du travail à distance : jours, horaires, équipements et prise en charge.",
      "Annex organising remote working in terms of days, hours, equipment and coverage arrangements.",
      "Anexo que organiza el trabajo a distancia en cuanto a días, horarios, equipos y condiciones de cobertura.",
      "Allegato che disciplina il lavoro a distanza: giorni, orari, attrezzature e modalità di copertura.",
      "Anlage, die das mobile Arbeiten regelt: Tage, Zeiten, Ausstattung und Kostenübernahme.",
      "Приложение, регулирующее удалённую работу: дни, часы, оборудование и порядок компенсаций."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة بعد موافقة المشغل على صيغة العمل عن بعد",
      "Service des ressources humaines de l'entreprise après accord de l'employeur sur le télétravail",
      "Company human resources department after the employer approves the remote-work arrangement",
      "Departamento de recursos humanos de la empresa tras la aprobación del teletrabajo por el empleador",
      "Ufficio risorse umane dell'azienda dopo l'approvazione del lavoro a distanza da parte del datore di lavoro",
      "Personalabteilung des Unternehmens nach Zustimmung des Arbeitgebers zur Telearbeit",
      "Отдел кадров компании после одобрения работодателем удалённого режима работы"
    ),
    keywords: ["العمل عن بعد", "télétravail", "remote work", "عقد العمل عن بعد", "avenant télétravail"],
  },
  {
    id: "aml-contrat-apprentissage",
    cat: "amal",
    title: T7(
      "عقد تكوين بالتمهين",
      "Contrat d'apprentissage",
      "Apprenticeship contract",
      "Contrato de aprendizaje",
      "Contratto di apprendistato",
      "Lehrvertrag",
      "Договор о профессиональном ученичестве"
    ),
    desc: D7(
      "عقد بين مؤسسة التكوين المهني والمقاولة والمتمهن ينظم التكوين التطبيقي داخل مقر العمل.",
      "Contrat entre l'établissement de formation professionnelle, l'entreprise et l'apprenti organisant la formation en entreprise.",
      "Contract between the vocational training institution, the company and the apprentice organising on-the-job training.",
      "Contrato entre el centro de formación profesional, la empresa y el aprendiz que organiza la formación práctica en la empresa.",
      "Contratto tra l'istituto di formazione professionale, l'azienda e l'apprendista che disciplina la formazione in impresa.",
      "Vertrag zwischen der Berufsbildungseinrichtung, dem Unternehmen und dem Lehrling über die betriebliche Ausbildung.",
      "Договор между профессиональным училищем, предприятием и учеником об организации практического обучения."
    ),
    where: W7(
      "يوقع لدى المقاولة المكلفة بالتكوين بالتمهين ويوجه إلى مؤسسة التكوين المختصة",
      "Signé auprès de l'entreprise de formation et transmis à l'établissement de formation compétent",
      "Signed at the training company and forwarded to the competent training institution",
      "Se firma en la empresa de formación y se remite al centro de formación competente",
      "Firmato presso l'azienda formatrice e trasmesso all'istituto di formazione competente",
      "Wird beim Ausbildungsbetrieb unterzeichnet und an die zuständige Bildungseinrichtung übermittelt",
      "Подписывается в обучающем предприятии и направляется в компетентное учебное заведение"
    ),
    keywords: ["التمهين", "contrat apprentissage", "apprenticeship", "OFPPT", "تكوين مهني"],
    authority: "ofppt",
  },
  {
    id: "aml-contrat-journalier",
    cat: "amal",
    title: T7(
      "عقد عمل يومي",
      "Contrat de travail journalier",
      "Daily employment contract",
      "Contrato de trabajo diario",
      "Contratto di lavoro giornaliero",
      "Tagesarbeitsvertrag",
      "Поденный трудовой договор"
    ),
    desc: D7(
      "عقد لتشغيل أجير بأجر يومي في أشغال مؤقتة، يحدد تاريخ التشغيل ومبلغ الأجر اليومي.",
      "Contrat embauchant un salarié à la journée pour des travaux ponctuels, précisant la date et le salaire journalier.",
      "Contract hiring a worker by the day for occasional work, specifying the date and the daily wage.",
      "Contrato que contrata a un trabajador a jornada para labores puntuales, precisando la fecha y el salario diario.",
      "Contratto che assume un lavoratore a giornata per lavori occasionali, specificando la data e la retribuzione giornaliera.",
      "Vertrag zur tageweisen Beschäftigung für Gelegenheitsarbeiten, mit Angabe von Datum und Tageslohn.",
      "Договор о подённом найме на разовые работы с указанием даты и дневной оплаты труда."
    ),
    where: W7(
      "يحرر لدى المشغل قبل انطلاق الأشغال وتسلَّم وصولات الأجر للأجير عند كل أداء",
      "Établi chez l'employeur avant le début des travaux, des quittances de salaire étant remises au salarié",
      "Drawn up at the employer's before the works begin, with wage receipts given to the worker",
      "Se extiende en la empresa antes de iniciar los trabajos, entregándose recibos de salario al trabajador",
      "Redatto presso il datore di lavoro prima dell'inizio dei lavori, con ricevute salariali consegnate al lavoratore",
      "Wird vor Arbeitsbeginn beim Arbeitgeber erstellt, dem Arbeitnehmer werden Lohnquittungen ausgehändigt",
      "Оформляется у работодателя до начала работ, работнику выдаются расчётные квитанции"
    ),
    keywords: ["أجير يومي", "contrat journalier", "daily work contract", "عقد يومي", "ouvrier journalier"],
  },
  {
    id: "aml-promesse-embauche",
    cat: "amal",
    title: T7(
      "وعد بالتوظيف",
      "Promesse d'embauche",
      "Promise of employment",
      "Promesa de contratación",
      "Promessa di assunzione",
      "Einstellungszusage",
      "Обещание трудоустройства"
    ),
    desc: D7(
      "تعهد كتابي من المشغل بتعيين المترشح في منصب محدد بعد استيفاء شروط يعينها التعهد.",
      "Engagement écrit par lequel l'employeur s'engage à recruter le candidat à un poste défini sous certaines conditions.",
      "Written undertaking by which the employer commits to hire the candidate for a defined post under stated conditions.",
      "Compromiso escrito mediante el cual el empleador se obliga a contratar al candidato para un puesto definido bajo ciertas condiciones.",
      "Impegno scritto con cui il datore di lavoro si obbliga ad assumere il candidato per un posto definito a determinate condizioni.",
      "Schriftliche Zusage, mit der sich der Arbeitgeber verpflichtet, den Bewerber unter bestimmten Bedingungen einzustellen.",
      "Письменное обязательство работодателя принять кандидата на определённую должность при оговорённых условиях."
    ),
    where: W7(
      "يوجهه المشغل إلى المترشح قبل تاريخ الالتحاق المحدد للعمل",
      "Adressé par l'employeur au candidat avant la date de prise de fonction convenue",
      "Sent by the employer to the candidate before the agreed start date",
      "Enviado por el empleador al candidato antes de la fecha de incorporación acordada",
      "Inviato dal datore di lavoro al candidato prima della data di inizio concordata",
      "Vom Arbeitgeber an den Bewerber vor dem vereinbarten Eintrittstermin gerichtet",
      "Направляется работодателем кандидату до согласованной даты выхода на работу"
    ),
    keywords: ["وعد بالتوظيف", "promesse d'embauche", "job offer", "توظيف", "embauche"],
  },
  {
    id: "aml-contrat-gardien",
    cat: "amal",
    title: T7(
      "عقد عمل حارس عقار",
      "Contrat de travail de gardien d'immeuble",
      "Building caretaker employment contract",
      "Contrato de trabajo de portero de finca",
      "Contratto di lavoro del custode dello stabile",
      "Arbeitsvertrag für einen Hauswärter",
      "Трудовой договор со смотрителем здания"
    ),
    desc: D7(
      "عقد ينظم مهام الحارس داخل عمارة سكنية من حراسة ونظافة مع تحديد السكن الملحق بالوظيفة.",
      "Contrat organisant les missions de garde et d'entretien d'un immeuble, précisant le logement de fonction attenant.",
      "Contract governing the guarding and upkeep duties in a residential building, specifying the attached service lodging.",
      "Contrato que regula las funciones de vigilancia y mantenimiento de un edificio, precisando la vivienda vinculada al puesto.",
      "Contratto che disciplina i compiti di custodia e manutenzione di uno stabile, specificando l'alloggio di servizio annesso.",
      "Vertrag über Wach- und Pflegeaufgaben in einem Wohngebäude, mit Regelung der zugehörigen Dienstwohnung.",
      "Договор об обязанностях по охране и содержанию жилого дома с указанием служебного жилья."
    ),
    where: W7(
      "يوقع مع مالك العقار أو شركة التسيير ويلزم التصريح بالحارس لدى الضمان الاجتماعي",
      "Signé avec le propriétaire ou le syndic de l'immeuble, le gardien devant être déclaré à la CNSS",
      "Signed with the property owner or building manager, with the caretaker required to be declared to the CNSS",
      "Se firma con el propietario o el administrador de la finca, debiendo el portero ser declarado a la CNSS",
      "Firmato con il proprietario o l'amministratore dello stabile, con obbligo di dichiarazione del custode alla CNSS",
      "Wird mit dem Eigentümer oder der Hausverwaltung geschlossen, der Wärter ist bei der CNSS zu melden",
      "Подписывается с собственником или управляющим дома, смотритель регистрируется в CNSS"
    ),
    keywords: ["حارس عمارة", "contrat gardien", "caretaker contract", "حارس", "gardien d'immeuble"],
  },

  // ─── Congés et autorisations d'absence ───
  {
    id: "aml-conge-annuel",
    cat: "amal",
    title: T7(
      "طلب الاستفادة من الرخصة السنوية",
      "Demande de congé annuel",
      "Annual leave request",
      "Solicitud de vacaciones anuales",
      "Domanda di congedo annuale",
      "Antrag auf Jahresurlaub",
      "Заявление на ежегодный оплачиваемый отпуск"
    ),
    desc: D7(
      "طلب يقدمه الأجير لتحديد تاريخ رخصته السنوية المؤدى عنها وفق مدونة الشغل واتفاق الشغل.",
      "Demande par laquelle le salarié fixe la date de son congé annuel payé selon le code du travail et la convention.",
      "Request whereby the employee sets the date of paid annual leave under the labour code and the collective agreement.",
      "Solicitud mediante la cual el trabajador fija la fecha de sus vacaciones anuales pagadas según el código de trabajo y el convenio.",
      "Domanda con cui il lavoratore fissa la data del congedo annuale retribuito secondo il codice del lavoro e il contratto collettivo.",
      "Antrag, mit dem der Arbeitnehmer den Termin des bezahlten Jahresurlaubs gemäß Arbeitsgesetzbuch und Tarifvertrag festlegt.",
      "Заявление работника об установлении даты оплачиваемого ежегодного отпуска по трудовому кодексу и коллективному договору."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية بالمقاولة قبل التاريخ المطلوب بوقت كاف",
      "Employeur ou service des ressources humaines de l'entreprise, suffisamment avant la date souhaitée",
      "Employer or company human resources department, well before the requested date",
      "Empleador o departamento de recursos humanos, con suficiente antelación a la fecha solicitada",
      "Datore di lavoro o ufficio risorse umane, con congruo anticipo rispetto alla data richiesta",
      "Arbeitgeber oder Personalabteilung des Unternehmens, rechtzeitig vor dem gewünschten Termin",
      "Работодателю или в отдел кадров компании заблаговременно до желаемой даты"
    ),
    keywords: ["الرخصة السنوية", "congé annuel", "annual leave", "رخصة", "congé payé"],
    popular: true,
  },
  {
    id: "aml-conge-mariage",
    cat: "amal",
    title: T7(
      "طلب الاستفادة من رخصة الزواج",
      "Demande de congé pour mariage",
      "Application for marriage leave",
      "Solicitud de permiso por matrimonio",
      "Domanda di permesso per matrimonio",
      "Antrag auf Heiratsurlaub",
      "Заявление на отпуск по случаю брака"
    ),
    desc: D7(
      "طلب يوجه إلى المشغل للاستفادة من رخصة خاصة بمناسبة عقد الزواج وفق مدونة الشغل.",
      "Demande adressée à l'employeur pour un congé exceptionnel à l'occasion du mariage, conformément au code du travail.",
      "Application to the employer for special leave on the occasion of marriage under the labour code.",
      "Solicitud dirigida al empleador para un permiso especial con motivo del matrimonio según el código de trabajo.",
      "Domanda al datore di lavoro per un permesso speciale in occasione del matrimonio secondo il codice del lavoro.",
      "Antrag beim Arbeitgeber auf Sonderurlaub anlässlich der Heirat gemäß Arbeitsgesetzbuch.",
      "Заявление работодателю на особый отпуск в связи с браком по трудовому кодексу."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو الإدارة المشغِّلة",
      "Service des ressources humaines de l'entreprise ou de l'administration",
      "HR department of the company or administration",
      "Departamento de recursos humanos de la empresa o administración",
      "Ufficio risorse umane dell'azienda o amministrazione",
      "Personalabteilung der Firma oder Behörde",
      "Отдел кадров компании или учреждения"
    ),
    keywords: ["رخصة الزواج", "congé mariage", "marriage leave", "رخصة", "congé", "زواج"],
    popular: true,
  },
  {
    id: "aml-conge-naissance",
    cat: "amal",
    title: T7(
      "طلب رخصة بمناسبة الولادة",
      "Demande de congé de naissance",
      "Birth leave request",
      "Solicitud de permiso por nacimiento",
      "Domanda di congedo per nascita",
      "Antrag auf Geburtsurlaub",
      "Заявление на отпуск по случаю рождения ребёнка"
    ),
    desc: D7(
      "طلب يستفيد بموجبه الأب من رخصة قصيرة مؤدى عنها بمناسبة مولود جديد وفق مدونة الشغل.",
      "Demande permettant au père de bénéficier d'un court congé payé à l'occasion de la naissance d'un enfant.",
      "Request allowing the father to take short paid leave on the occasion of the birth of a child.",
      "Solicitud que permite al padre disfrutar de un breve permiso pagado con motivo del nacimiento de un hijo.",
      "Domanda che consente al padre di godere di un breve congedo retribuito in occasione della nascita di un figlio.",
      "Antrag, der dem Vater einen kurzen bezahlten Urlaub anlässlich der Geburt eines Kindes ermöglicht.",
      "Заявление на краткосрочный оплачиваемый отпуск для отца по случаю рождения ребёнка."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية بالمقاولة، مع تقديم شهادة الولادة لاحقا",
      "Employeur ou service des ressources humaines, l'acte de naissance pouvant être produit ultérieurement",
      "Employer or human resources department, with the birth certificate submitted later",
      "Empleador o departamento de recursos humanos, pudiendo aportarse el certificado de nacimiento después",
      "Datore di lavoro o ufficio risorse umane, con presentazione successiva dell'atto di nascita",
      "Arbeitgeber oder Personalabteilung, die Geburtsurkunde kann nachgereicht werden",
      "Работодателю или в отдел кадров, свидетельство о рождении предъявляется позже"
    ),
    keywords: ["رخصة الولادة", "congé naissance", "birth leave", "ولادة", "paternité"],
  },
  {
    id: "aml-conge-maternite",
    cat: "amal",
    title: T7(
      "طلب الاستفادة من رخصة الأمومة",
      "Demande de congé de maternité",
      "Maternity leave request",
      "Solicitud de permiso por maternidad",
      "Domanda di congedo di maternità",
      "Antrag auf Mutterschaftsurlaub",
      "Заявление на отпуск по беременности и родам"
    ),
    desc: D7(
      "طلب تقدمه العاملة للاستفادة من رخصة الأمومة القانونية والتعويضات اليومية المرتبطة بها.",
      "Demande présentée par la salariée pour bénéficier du congé de maternité légal et des indemnités journalières associées.",
      "Application submitted by a female employee for statutory maternity leave and the associated daily allowances.",
      "Solicitud presentada por la trabajadora para disfrutar del permiso de maternidad legal y las prestaciones diarias asociadas.",
      "Domanda presentata dalla lavoratrice per fruire del congedo di maternità legale e delle indennità giornaliere correlate.",
      "Antrag einer Arbeitnehmerin auf den gesetzlichen Mutterschaftsurlaub und die damit verbundenen Tagesgelder.",
      "Заявление работницы о предоставлении законного отпуска по беременности и родам и связанных с ним пособий."
    ),
    where: W7(
      "المشغل مع ملف التعويضات لدى الصندوق الوطني للضمان الاجتماعي (CNSS)",
      "Employeur, avec dossier d'indemnités déposé auprès de la CNSS",
      "Employer, with a benefits file filed with the CNSS",
      "Empleador, con expediente de prestaciones presentado ante la CNSS",
      "Datore di lavoro, con fascicolo di indennità depositato presso la CNSS",
      "Arbeitgeber, mit Leistungsantrag bei der CNSS",
      "Работодателю с подачей заявления на пособия в CNSS"
    ),
    keywords: ["رخصة الأمومة", "congé maternité", "maternity leave", "أمومة", "CNSS"],
  },
  {
    id: "aml-conge-deces",
    cat: "amal",
    title: T7(
      "طلب رخصة بمناسبة وفاة أحد الأقارب",
      "Demande de congé pour décès d'un proche",
      "Bereavement leave request",
      "Solicitud de permiso por fallecimiento de un familiar",
      "Domanda di congedo per lutto familiare",
      "Antrag auf Sonderurlaub im Todesfall",
      "Заявление на отпуск в связи со смертью близкого"
    ),
    desc: D7(
      "طلب للحصول على رخصة قصيرة مؤدى عنها بمناسبة وفاة أحد الأصول أو الفروع أو الزوج.",
      "Demande d'un court congé payé accordé lors du décès d'un ascendant, d'un descendant ou du conjoint.",
      "Request for short paid leave granted upon the death of an ascendant, descendant or spouse.",
      "Solicitud de un breve permiso pagado concedido por el fallecimiento de un ascendiente, descendiente o cónyuge.",
      "Domanda di un breve congedo retribuito concesso in caso di decesso di un ascendente, un discendente o il coniuge.",
      "Antrag auf kurzen bezahlten Urlaub beim Tod eines Vorfahren, Abkömmlings oder Ehegatten.",
      "Заявление о краткосрочном оплачиваемом отпуске в случае смерти родителя, ребёнка или супруги(а)."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية بالمقاولة فور وقوع الحدث",
      "Employeur ou service des ressources humaines de l'entreprise dès la survenance du décès",
      "Employer or company human resources department as soon as the death occurs",
      "Empleador o departamento de recursos humanos de la empresa en cuanto ocurra el fallecimiento",
      "Datore di lavoro o ufficio risorse umane dell'azienda appena si verifica il decesso",
      "Arbeitgeber oder Personalabteilung des Unternehmens unverzüglich nach Eintritt des Todesfalls",
      "Работодателю или в отдел кадров компании сразу после случившегося"
    ),
    keywords: ["رخصة وفاة", "congé décès", "bereavement leave", "وفاة", "deuil"],
  },
  {
    id: "aml-conge-sans-solde",
    cat: "amal",
    title: T7(
      "طلب رخصة بدون أجر",
      "Demande de congé sans solde",
      "Unpaid leave request",
      "Solicitud de permiso sin sueldo",
      "Domanda di congedo non retribuito",
      "Antrag auf unbezahlten Urlaub",
      "Заявление на отпуск без сохранения зарплаты"
    ),
    desc: D7(
      "طلب يلتمس فيه الأجير إذنا بالغياب لمدة محددة دون أجر مع الحفاظ على علاقة الشغل.",
      "Demande sollicitant une autorisation d'absence d'une durée déterminée sans rémunération, la relation de travail étant maintenue.",
      "Request seeking authorisation to be absent for a set period without pay while the employment relationship continues.",
      "Solicitud que pide autorización para ausentarse por un periodo determinado sin retribución, manteniéndose la relación laboral.",
      "Domanda di autorizzazione ad assentarsi per un periodo determinato senza retribuzione, mantenendo il rapporto di lavoro.",
      "Antrag auf Genehmigung einer befristeten, unbezahlten Abwesenheit bei Fortbestand des Arbeitsverhältnisses.",
      "Заявление о разрешении отсутствовать определённый срок без оплаты при сохранении трудовых отношений."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية قبل التاريخ المطلوب، والموافقة تبقى رهينة بقرار المشغل",
      "Employeur ou service des ressources humaines avant la date souhaitée, l'acceptation restant à sa discrétion",
      "Employer or human resources department before the requested date, approval remaining at their discretion",
      "Empleador o recursos humanos antes de la fecha solicitada, quedando la aprobación a su discreción",
      "Datore di lavoro o risorse umane prima della data richiesta, l'approvazione resta a sua discrezione",
      "Arbeitgeber oder Personalabteilung vor dem gewünschten Termin, die Zustimmung liegt in seinem Ermessen",
      "Работодателю или в отдел кадров до нужной даты, одобрение остаётся на его усмотрение"
    ),
    keywords: ["رخصة بدون أجر", "congé sans solde", "unpaid leave", "رخصة", "congé"],
  },
  {
    id: "aml-conge-examen",
    cat: "amal",
    title: T7(
      "طلب رخصة لأداء امتحان",
      "Demande de congé pour examen",
      "Exam leave request",
      "Solicitud de permiso para examen",
      "Domanda di congedo per esame",
      "Antrag auf Urlaub für Prüfungen",
      "Заявление на отпуск для сдачи экзамена"
    ),
    desc: D7(
      "طلب للحصول على رخصة مؤدى عنها لأداء امتحانات دراسية أو مهنية مع إثبات الاستدعاء للامتحان.",
      "Demande d'un congé payé pour se présenter à des examens scolaires ou professionnels, convocation à l'appui.",
      "Request for paid leave to sit school or professional examinations, with proof of the examination summons.",
      "Solicitud de permiso pagado para presentarse a exámenes escolares o profesionales, con justificante de la convocatoria.",
      "Domanda di congedo retribuito per sostenere esami scolastici o professionali, con prova della convocazione.",
      "Antrag auf bezahlten Urlaub zum Ablegen von Schul- oder Berufsprüfungen, mit Prüfungseinladung als Nachweis.",
      "Заявление на оплачиваемый отпуск для сдачи учебных или профессиональных экзаменов с подтверждением вызова."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة مرفقا باستدعاء الامتحان قبل التاريخ المحدد",
      "Service des ressources humaines de l'entreprise, accompagné de la convocation à l'examen",
      "Company human resources department, accompanied by the examination summons",
      "Departamento de recursos humanos de la empresa, acompañado de la convocatoria del examen",
      "Ufficio risorse umane dell'azienda, allegando la convocazione all'esame",
      "Personalabteilung des Unternehmens, zusammen mit der Prüfungseinladung",
      "Отдел кадров компании с приложением вызова на экзамен"
    ),
    keywords: ["رخصة امتحان", "congé examen", "exam leave", "امتحان", "examen"],
  },
  {
    id: "aml-autorisation-absence",
    cat: "amal",
    title: T7(
      "طلب إذن بالغياب",
      "Demande d'autorisation d'absence",
      "Leave-of-absence authorisation request",
      "Solicitud de autorización de ausencia",
      "Domanda di autorizzazione all'assenza",
      "Antrag auf Abwesenheitserlaubnis",
      "Заявление на разрешение отсутствия"
    ),
    desc: D7(
      "طلب قصير للاستئذان من العمل لبضع ساعات أو يوم واحد لمعالجة ظرف شخصي طارئ.",
      "Demande succincte de s'absenter quelques heures ou une journée pour faire face à un imprévu personnel.",
      "Short request to be away for a few hours or one day to deal with an unexpected personal matter.",
      "Breve solicitud para ausentarse unas horas o un día para atender un imprevisto personal.",
      "Breve domanda di assenza per qualche ora o un giorno per far fronte a un imprevisto personale.",
      "Kurzes Gesuch, einige Stunden oder einen Tag freizunehmen, um ein persönliches Ereignis zu regeln.",
      "Краткое заявление об отсутствии в течение нескольких часов или одного дня по личным обстоятельствам."
    ),
    where: W7(
      "المسؤول المباشر أو مصلحة الموارد البشرية بالمقاولة قبل ساعة الانصراف",
      "Responsable hiérarchique ou service des ressources humaines, avant le départ souhaité",
      "Direct manager or human resources department, before the intended departure",
      "Responsable directo o departamento de recursos humanos, antes de la salida prevista",
      "Responsabile diretto o ufficio risorse umane, prima dell'uscita prevista",
      "Vorgesetzter oder Personalabteilung, vor dem beabsichtigten Weggehen",
      "Непосредственному руководителю или в отдел кадров до предполагаемого ухода"
    ),
    keywords: ["إذن بالغياب", "autorisation d'absence", "absence authorisation", "غياب", "absence"],
  },
  {
    id: "aml-conge-maladie",
    cat: "amal",
    title: T7(
      "طلب رخصة مرضية",
      "Demande de congé de maladie",
      "Sick leave request",
      "Solicitud de baja por enfermedad",
      "Domanda di congedo per malattia",
      "Antrag auf Krankenurlaub",
      "Заявление на больничный отпуск"
    ),
    desc: D7(
      "طلب مرفق بشهادة طبية لإقرار الغياب عن العمل بسبب المرض وضمان الحقوق المرتبطة به.",
      "Demande accompagnée d'un certificat médical constatant l'incapacité de travail et sécurisant les droits du salarié.",
      "Request accompanied by a medical certificate certifying incapacity for work and securing the employee's rights.",
      "Solicitud acompañada de un certificado médico que acredita la incapacidad laboral y garantiza los derechos del trabajador.",
      "Domanda corredata da certificato medico attestante l'incapacità lavorativa e a tutela dei diritti del lavoratore.",
      "Antrag mit ärztlichem Attest über die Arbeitsunfähigkeit zur Sicherung der Ansprüche des Arbeitnehmers.",
      "Заявление с медицинской справкой о нетрудоспособности для сохранения прав работника."
    ),
    where: W7(
      "المشغل في أجل قصير، مع التصريح لدى CNSS إذا طالت مدة العجز عن العمل",
      "Employeur dans un bref délai, avec déclaration à la CNSS si l'incapacité se prolonge",
      "Employer within a short deadline, with a declaration to the CNSS if the incapacity lasts",
      "Empleador en un plazo breve, con declaración ante la CNSS si la incapacidad se prolonga",
      "Datore di lavoro in breve termine, con dichiarazione alla CNSS se l'incapacità si prolunga",
      "Arbeitgeber innerhalb kurzer Frist, bei längerer Arbeitsunfähigkeit mit Meldung an die CNSS",
      "Работодателю в короткий срок, при длительной нетрудоспособности — с уведомлением CNSS"
    ),
    keywords: ["رخصة مرضية", "congé maladie", "sick leave", "شهادة طبية", "maladie"],
  },
  {
    id: "aml-conge-evenement-familial",
    cat: "amal",
    title: T7(
      "طلب رخصة استثنائية لحدث عائلي",
      "Demande de congé exceptionnel pour événement familial",
      "Exceptional leave request for a family event",
      "Solicitud de permiso excepcional por evento familiar",
      "Domanda di congedo eccezionale per evento familiare",
      "Antrag auf Sonderurlaub für ein Familienereignis",
      "Заявление на особый отпуск в связи с семейным событием"
    ),
    desc: D7(
      "طلب رخصة قصيرة لمرافقة حدث عائلي كزواج أحد الأبناء أو إجراء عملية جراحية لقريب.",
      "Demande d'un court congé pour accompagner un événement familial tel que le mariage d'un enfant ou une opération d'un proche.",
      "Request for short leave to attend a family event such as a child's wedding or a relative's surgery.",
      "Solicitud de un breve permiso para acompañar un evento familiar como la boda de un hijo o una operación de un pariente.",
      "Domanda di un breve congedo per accompagnare un evento familiare come le nozze di un figlio o un intervento di un familiare.",
      "Antrag auf kurzen Urlaub für ein Familienereignis wie die Hochzeit eines Kindes oder eine Operation eines Angehörigen.",
      "Заявление на краткосрочный отпуск в связи с семейным событием, например свадьбой ребёнка или операцией близкого."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية بالمقاولة مع ما يثبت الحدث عند الإمكان",
      "Employeur ou service des ressources humaines, avec si possible un justificatif de l'événement",
      "Employer or human resources department, if possible with proof of the event",
      "Empleador o departamento de recursos humanos, si es posible con justificante del evento",
      "Datore di lavoro o ufficio risorse umane, se possibile con attestazione dell'evento",
      "Arbeitgeber oder Personalabteilung, möglichst mit Nachweis des Ereignisses",
      "Работодателю или в отдел кадров, при возможности с подтверждением события"
    ),
    keywords: ["رخصة استثنائية", "congé exceptionnel", "family event leave", "حدث عائلي", "événement familial"],
  },
  {
    id: "aml-conge-hajj",
    cat: "amal",
    title: T7(
      "طلب رخصة الحج",
      "Demande de congé pour le pèlerinage (Hajj)",
      "Hajj pilgrimage leave request",
      "Solicitud de permiso para la peregrinación (Hach)",
      "Domanda di congedo per il pellegrinaggio (Hajj)",
      "Antrag auf Pilgerurlaub (Haddsch)",
      "Заявление на отпуск для хаджа"
    ),
    desc: D7(
      "طلب يلتمس فيه الأجير رخصة لأداء فريضة الحج مرة واحدة خلال مساره المهني وفق مدونة الشغل.",
      "Demande par laquelle le salarié sollicite un congé pour accomplir le pèlerinage une seule fois dans sa carrière.",
      "Request whereby the employee seeks leave to perform the pilgrimage once during their career.",
      "Solicitud mediante la cual el trabajador pide un permiso para realizar la peregrinación una sola vez en su carrera.",
      "Domanda con cui il lavoratore richiede un congedo per compiere il pellegrinaggio una sola volta nella carriera.",
      "Antrag, mit dem der Arbeitnehmer einmal in seiner Laufzeit Urlaub für die Pilgerfahrt beantragt.",
      "Заявление работника о предоставлении отпуска для совершения паломничества единожды за карьеру."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية قبل موعد السفر بمدة كافية",
      "Employeur ou service des ressources humaines, suffisamment avant la date du départ",
      "Employer or human resources department, well before the departure date",
      "Empleador o recursos humanos, con suficiente antelación a la fecha de salida",
      "Datore di lavoro o risorse umane, con congruo anticipo rispetto alla data di partenza",
      "Arbeitgeber oder Personalabteilung, rechtzeitig vor dem Abreisetermin",
      "Работодателю или в отдел кадров заблаговременно до даты выезда"
    ),
    keywords: ["رخصة الحج", "congé Hajj", "Hajj leave", "الحج", "pèlerinage"],
  },
  {
    id: "aml-recuperation-heures",
    cat: "amal",
    title: T7(
      "طلب استرجاع ساعات العمل الإضافية",
      "Demande de récupération des heures supplémentaires",
      "Request to recover overtime hours",
      "Solicitud de compensación de horas extraordinarias",
      "Domanda di recupero delle ore straordinarie",
      "Antrag auf Ausgleich von Überstunden",
      "Заявление о компенсации сверхурочных часов"
    ),
    desc: D7(
      "طلب يقترح فيه الأجير تعويض الساعات الإضافية بأيام راحة معادلة وفق التنظيم الجاري به العمل.",
      "Demande proposant de compenser les heures supplémentaires par des jours de repos équivalents selon la réglementation.",
      "Request proposing to offset overtime hours with equivalent rest days under the applicable regulations.",
      "Solicitud que propone compensar las horas extraordinarias con días de descanso equivalentes según la normativa.",
      "Domanda che propone di compensare le ore straordinarie con giorni di riposo equivalenti secondo la normativa vigente.",
      "Antrag, Überstunden gemäß den geltenden Vorschriften durch entsprechende Ruhetage auszugleichen.",
      "Заявление о компенсации сверхурочных часов равноценными днями отдыха согласно действующим нормам."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية بعد توثيق الساعات الإضافية في بطاقة الحضور",
      "Employeur ou service des ressources humaines après pointage des heures supplémentaires effectuées",
      "Employer or human resources department after the overtime worked has been recorded",
      "Empleador o recursos humanos después de registrar las horas extraordinarias realizadas",
      "Datore di lavoro o risorse umane dopo la registrazione delle ore straordinarie effettuate",
      "Arbeitgeber oder Personalabteilung nach Erfassung der geleisteten Überstunden",
      "Работодателю или в отдел кадров после учёта отработанных сверхурочных часов"
    ),
    keywords: ["ساعات إضافية", "heures supplémentaires", "overtime", "استرجاع", "récupération"],
  },
  {
    id: "aml-reprise-travail",
    cat: "amal",
    title: T7(
      "إشعار باستئناف العمل بعد رخصة",
      "Notification de reprise du travail après congé",
      "Return-to-work notice after leave",
      "Notificación de reincorporación al trabajo tras el permiso",
      "Comunicazione di ripresa del lavoro dopo il congedo",
      "Anzeige der Arbeitsaufnahme nach dem Urlaub",
      "Уведомление о возобновлении работы после отпуска"
    ),
    desc: D7(
      "إشعار يوجهه الأجير إلى مشغله لتحديد تاريخ استئناف العمل بعد نهاية الرخصة أو التوقف المرضي.",
      "Notification par laquelle le salarié informe l'employeur de la date de son retour après un congé ou un arrêt maladie.",
      "Notice whereby the employee informs the employer of the return date after leave or sick absence.",
      "Notificación con la que el trabajador informa al empleador de la fecha de regreso tras un permiso o baja médica.",
      "Comunicazione con cui il lavoratore informa il datore di lavoro della data di rientro dopo un congedo o malattia.",
      "Anzeige, mit der der Arbeitnehmer den Arbeitgeber über den Rückkehrtermin nach Urlaub oder Krankheit unterrichtet.",
      "Уведомление работодателя работником о дате возвращения на работу после отпуска или больничного."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة قبل تاريخ الاستئناف بيوم على الأقل",
      "Service des ressources humaines de l'entreprise au moins un jour avant la reprise",
      "Company human resources department at least one day before the return",
      "Departamento de recursos humanos al menos un día antes de la reincorporación",
      "Ufficio risorse umane almeno un giorno prima della ripresa",
      "Personalabteilung des Unternehmens mindestens einen Tag vor der Rückkehr",
      "Отдел кадров компании не менее чем за день до возвращения"
    ),
    keywords: ["استئناف العمل", "reprise du travail", "return to work", "رخصة", "congé"],
  },

  // ─── Fin de la relation de travail ───
  {
    id: "aml-demande-retraite",
    cat: "amal",
    title: T7(
      "طلب الاستفادة من التقاعد",
      "Demande de départ à la retraite",
      "Retirement departure request",
      "Solicitud de jubilación",
      "Domanda di collocamento a riposo",
      "Antrag auf Eintritt in den Ruhestand",
      "Заявление об уходе на пенсию"
    ),
    desc: D7(
      "طلب يوجهه الأجير عند بلوغ سن التقاعد للشروع في مسطرة توقف العمل واستيفاء حقوقه النهائية.",
      "Demande adressée par le salarié atteignant l'âge de la retraite pour engager la cessation d'activité et le versement de ses droits.",
      "Request sent by an employee reaching retirement age to start the cessation process and the settlement of final rights.",
      "Solicitud enviada por el trabajador al alcanzar la edad de jubilación para iniciar el cese y la liquidación de sus derechos.",
      "Domanda presentata dal lavoratore al raggiungimento dell'età pensionabile per avviare la cessazione e la liquidazione dei diritti.",
      "Antrag eines Arbeitnehmers bei Erreichen des Rentenalters zur Einleitung der Beendigung und Abgeltung seiner Ansprüche.",
      "Заявление работника по достижении пенсионного возраста о начале процедуры прекращения работы и расчёта выплат."
    ),
    where: W7(
      "المشغل مع ملف طلب المعاش لدى الصندوق الوطني للضمان الاجتماعي (CNSS)",
      "Employeur, avec dossier de pension déposé auprès de la CNSS",
      "Employer, with a pension file filed with the CNSS",
      "Empleador, con expediente de pensión presentado ante la CNSS",
      "Datore di lavoro, con fascicolo pensionistico depositato presso la CNSS",
      "Arbeitgeber, mit Rentenantrag bei der CNSS",
      "Работодателю с подачей пенсионного дела в CNSS"
    ),
    keywords: ["التقاعد", "départ à la retraite", "retirement", "معاش", "pension"],
    popular: true,
  },
  {
    id: "aml-demande-stc",
    cat: "amal",
    title: T7(
      "طلب تسوية كل الحقوق (STC)",
      "Demande de solde de tout compte (STC)",
      "Final settlement of accounts request (STC)",
      "Solicitud de finiquito (STC)",
      "Domanda di saldo finale (STC)",
      "Antrag auf Abrechnung aller Ansprüche (STC)",
      "Заявление об окончательном расчёте (STC)"
    ),
    desc: D7(
      "طلب يوجهه الأجير إلى مشغله لتسوية الأجور والتعويضات المستحقة له عند انتهاء علاقة الشغل.",
      "Demande adressée par le salarié à son employeur pour solder salaires et indemnités dus à la fin de la relation de travail.",
      "Request sent by the employee to the employer to settle wages and allowances due at the end of the employment relationship.",
      "Solicitud dirigida por el trabajador a su empleador para liquidar salarios e indemnizaciones debidos al final de la relación laboral.",
      "Domanda rivolta dal lavoratore al datore di lavoro per il saldo di salari e indennità dovuti alla fine del rapporto di lavoro.",
      "Antrag des Arbeitnehmers an den Arbeitgeber auf Abrechnung der am Ende des Arbeitsverhältnisses fälligen Ansprüche.",
      "Заявление работника работодателю о расчёте зарплаты и компенсаций при прекращении трудовых отношений."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة، وعند الرفض يمكن اللجوء إلى تفتيش الشغل",
      "Service des ressources humaines de l'entreprise ; en cas de refus, saisine possible de l'inspection du travail",
      "Company human resources department; if refused, the labour inspectorate may be seized",
      "Departamento de recursos humanos de la empresa; en caso de negativa, cabe acudir a la inspección de trabajo",
      "Ufficio risorse umane dell'azienda; in caso di rifiuto è possibile adire l'ispezione del lavoro",
      "Personalabteilung des Unternehmens; bei Weigerung kann die Arbeitsaufsicht eingeschaltet werden",
      "Отдел кадров компании; при отказе возможно обращение в инспекцию труда"
    ),
    keywords: ["تسوية كل الحقوق", "solde de tout compte", "STC", "مستحقات", "fin de contrat"],
    popular: true,
  },
  {
    id: "aml-non-renouvellement-cdd",
    cat: "amal",
    title: T7(
      "إشعار بعدم تجديد عقد العمل محدد المدة",
      "Avis de non-renouvellement de contrat à durée déterminée",
      "Notice of non-renewal of a fixed-term contract",
      "Aviso de no renovación de contrato de duración determinada",
      "Comunicazione di mancato rinnovo del contratto a tempo determinato",
      "Mitteilung über die Nichtverlängerung eines befristeten Vertrags",
      "Уведомление о непродлении срочного договора"
    ),
    desc: D7(
      "إشعار من أحد طرفي العقد محدد المدة بعدم تجديده عند انتهاء مدته داخل الأجل المناسب.",
      "Notification par laquelle une partie au CDD informe l'autre qu'elle ne renouvellera pas le contrat à son échéance.",
      "Notice whereby one party to a fixed-term contract informs the other that it will not renew it at expiry.",
      "Notificación mediante la cual una parte del contrato temporal informa a la otra de que no lo renovará a su vencimiento.",
      "Comunicazione con cui una parte del contratto a tempo determinato informa l'altra del mancato rinnovo alla scadenza.",
      "Mitteilung, mit der eine Vertragspartei die andere über die Nichtverlängerung bei Ablauf informiert.",
      "Уведомление одной из сторон срочного договора о том, что он не будет продлён по истечении срока."
    ),
    where: W7(
      "يوجه إلى الطرف الآخر قبل انتهاء العقد وفق الأجل المنصوص عليه في العقد أو القانون",
      "Adressé à l'autre partie avant l'échéance, dans le délai prévu par le contrat ou la loi",
      "Addressed to the other party before expiry, within the deadline set by contract or law",
      "Se dirige a la otra parte antes del vencimiento, en el plazo previsto por el contrato o la ley",
      "Inviata all'altra parte prima della scadenza, nel termine previsto dal contratto o dalla legge",
      "An die andere Partei vor Ablauf, innerhalb der im Vertrag oder Gesetz vorgesehenen Frist",
      "Направляется другой стороне до истечения срока в установленный договором или законом период"
    ),
    keywords: ["عدم تجديد CDD", "non-renouvellement CDD", "fixed-term non-renewal", "CDD", "عقد محدد المدة"],
  },
  {
    id: "aml-preavis-demission",
    cat: "amal",
    title: T7(
      "إشعار بالاستقالة مع احترام مهلة الإخطار",
      "Notification de démission avec préavis",
      "Resignation notice with notice period",
      "Notificación de dimisión con preaviso",
      "Comunicazione di dimissioni con preavviso",
      "Kündigungserklärung mit Kündigungsfrist",
      "Уведомление об увольнении с отработкой"
    ),
    desc: D7(
      "إشعار كتابي بالاستقالة يحدد تاريخ إرساله وتاريخ انتهاء مهلة الإخطار المقررة قانونا.",
      "Notification écrite de démission précisant sa date d'envoi et la date d'expiration du préavis légal.",
      "Written resignation notice stating its date of dispatch and the expiry date of the statutory notice period.",
      "Notificación escrita de dimisión que precisa la fecha de envío y la de expiración del preaviso legal.",
      "Comunicazione scritta di dimissioni che indica la data di invio e quella di scadenza del preavviso legale.",
      "Schriftliche Kündigungserklärung mit Angabe des Ausstellungsdatums und des Ablaufs der gesetzlichen Frist.",
      "Письменное заявление об уходе с указанием даты подачи и даты истечения установленного законом срока."
    ),
    where: W7(
      "يودع لدى المشغل أو مصلحة الموارد البشرية مع توصل يحفظ تاريخ التبليغ",
      "Déposé auprès de l'employeur ou des ressources humaines, avec récépissé attestant la date de notification",
      "Filed with the employer or human resources, with a receipt attesting the notification date",
      "Se deposita ante el empleador o recursos humanos, con recibo que acredite la fecha de notificación",
      "Depositato presso il datore di lavoro o le risorse umane, con ricevuta attestante la data di notifica",
      "Beim Arbeitgeber oder der Personalabteilung einzureichen, mit Empfangsbestätigung des Datums",
      "Подаётся работодателю или в отдел кадров с отметкой о дате уведомления"
    ),
    keywords: ["إشعار استقالة", "préavis démission", "resignation notice", "استقالة", "démission"],
  },
  {
    id: "aml-dispense-preavis",
    cat: "amal",
    title: T7(
      "طلب الإعفاء من أداء مهلة الإخطار",
      "Demande de dispense de préavis",
      "Request for waiver of the notice period",
      "Solicitud de exención del preaviso",
      "Domanda di esonero dal preavviso",
      "Antrag auf Befreiung von der Kündigungsfrist",
      "Заявление об освобождении от отработки"
    ),
    desc: D7(
      "طلب يستأذن فيه الأجير المستقيل في الإعفاء من أداء مهلة الإخطار لأسباب وجيهة يعرضها.",
      "Demande par laquelle le salarié démissionnaire sollicite d'être dispensé de l'accomplissement du préavis.",
      "Request whereby a resigning employee seeks to be released from serving the notice period.",
      "Solicitud mediante la cual el trabajador dimisionario pide ser eximido de cumplir el preaviso.",
      "Domanda con cui il lavoratore dimissionario chiede di essere esonerato dal preavviso.",
      "Antrag, mit dem der kündigende Arbeitnehmer um Entbindung von der Einhaltung der Kündigungsfrist bittet.",
      "Заявление увольняющегося работника об освобождении от отработки срока уведомления."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية، والموافقة تبقى من صلاحياته",
      "Employeur ou service des ressources humaines, l'accord restant à son entière discrétion",
      "Employer or human resources department, with consent remaining entirely at their discretion",
      "Empleador o recursos humanos, quedando el consentimiento a su entera discreción",
      "Datore di lavoro o risorse umane, il consenso resta a sua esclusiva discrezione",
      "Arbeitgeber oder Personalabteilung, die Zustimmung liegt in seinem alleinigen Ermessen",
      "Работодателю или в отдел кадров, согласие остаётся исключительно на его усмотрение"
    ),
    keywords: ["الإعفاء من المهلة", "dispense de préavis", "notice waiver", "مهلة الإخطار", "préavis"],
  },
  {
    id: "aml-annulation-demission",
    cat: "amal",
    title: T7(
      "طلب سحب الاستقالة",
      "Demande de retrait de démission",
      "Withdrawal of resignation request",
      "Solicitud de retractación de la dimisión",
      "Domanda di ritiro delle dimissioni",
      "Antrag auf Rücknahme der Kündigung",
      "Заявление об отзыве заявления об уходе"
    ),
    desc: D7(
      "طلب يقدمه الأجير قبل تاريخ سريان استقالته للتراجع عنها والاستمرار في أداء عمله.",
      "Demande présentée avant la date d'effet de la démission afin de la rapporter et de poursuivre l'activité.",
      "Request submitted before the resignation's effective date to withdraw it and continue working.",
      "Solicitud presentada antes de la fecha de efecto de la dimisión para retractarse y continuar trabajando.",
      "Domanda presentata prima della data di effetto delle dimissioni per ritirarle e proseguire l'attività.",
      "Antrag, der vor dem Wirksamwerden der Kündigung gestellt wird, um diese zurückzunehmen.",
      "Заявление, подаваемое до даты вступления увольнения в силу для его отзыва и продолжения работы."
    ),
    where: W7(
      "المشغل أو مصلحة الموارد البشرية، قبل انصرام مهلة الإخطار",
      "Employeur ou service des ressources humaines, avant l'expiration du préavis",
      "Employer or human resources department, before the notice period expires",
      "Empleador o recursos humanos, antes de que expire el preaviso",
      "Datore di lavoro o risorse umane, prima della scadenza del preavviso",
      "Arbeitgeber oder Personalabteilung, vor Ablauf der Kündigungsfrist",
      "Работодателю или в отдел кадров до истечения срока уведомления"
    ),
    keywords: ["سحب الاستقالة", "retrait démission", "resignation withdrawal", "استقالة", "démission"],
  },
  {
    id: "aml-rupture-periode-essai",
    cat: "amal",
    title: T7(
      "إشعار بالفسخ خلال فترة الاختبار",
      "Notification de rupture pendant la période d'essai",
      "Termination notice during the probation period",
      "Notificación de terminación durante el período de prueba",
      "Comunicazione di recesso durante il periodo di prova",
      "Kündigungsmitteilung während der Probezeit",
      "Уведомление о расторжении в испытательный срок"
    ),
    desc: D7(
      "إشعار يوجهه أحد الطرفين لإنهاء علاقة الشغل خلال فترة الاختبار دون تعويض ولا مهلة إخطار طويلة.",
      "Notification par laquelle une partie met fin à la relation de travail durant l'essai, sans indemnité ni long préavis.",
      "Notice whereby a party ends the employment relationship during the trial period, without severance or long notice.",
      "Notificación con la que una parte pone fin a la relación laboral durante la prueba, sin indemnización ni preaviso largo.",
      "Comunicazione con cui una parte pone fine al rapporto di lavoro durante la prova, senza indennità né lungo preavviso.",
      "Mitteilung, mit der eine Partei das Arbeitsverhältnis während der Probezeit ohne Abfindung oder lange Frist beendet.",
      "Уведомление стороны о прекращении трудовых отношений в испытательный срок без компенсации и долгой отработки."
    ),
    where: W7(
      "يوجه إلى الطرف الآخر كتابة قبل التاريخ المقترح لإنهاء علاقة الشغل",
      "Adressé par écrit à l'autre partie avant la date proposée de fin de relation",
      "Addressed in writing to the other party before the proposed end date",
      "Se dirige por escrito a la otra parte antes de la fecha propuesta de finalización",
      "Inviata per iscritto all'altra parte prima della data di fine proposta",
      "Schriftlich an die andere Partei vor dem vorgeschlagenen Beendigungstermin zu richten",
      "Направляется письменно другой стороне до предложенной даты прекращения отношений"
    ),
    keywords: ["الفسخ خلال الاختبار", "rupture période d'essai", "probation termination", "فترة الاختبار", "période d'essai"],
  },

  // ─── Litiges du travail et régularisation ───
  {
    id: "aml-reclamation-salaire",
    cat: "amal",
    title: T7(
      "تظلم بشأن أجر غير مؤدى",
      "Réclamation de salaire impayé",
      "Claim for unpaid wages",
      "Reclamación de salario impago",
      "Reclamo per salari non pagati",
      "Beschwerde über unbezahlten Lohn",
      "Претензия о невыплате заработной платы"
    ),
    desc: D7(
      "تظلم يودع لدى العون المكلف بتفتيش الشغل ضد مشغل يمتنع عن أداء الأجور المستحقة.",
      "Réclamation déposée auprès de l'agent chargé de l'inspection du travail contre un employeur refusant de payer les salaires.",
      "Complaint filed with the labour inspection officer against an employer withholding due wages.",
      "Reclamación presentada ante el agente de inspección de trabajo contra un empleador que retiene salarios debidos.",
      "Reclamo presentato all'addetto all'ispezione del lavoro contro un datore che trattiene salari dovuti.",
      "Beschwerde beim Arbeitsinspektor gegen einen Arbeitgeber, der fällige Löhne zurückhält.",
      "Жалоба инспектору труда на работодателя, удерживающего причитающуюся заработную плату."
    ),
    where: W7(
      "مكتب تفتيش الشغل التابع له مقر المشغل، حضوريا أو بالبريد المضمون",
      "Bureau d'inspection du travail du ressort de l'entreprise, sur place ou par lettre recommandée",
      "Labour inspection office covering the employer's area, in person or by registered mail",
      "Oficina de inspección de trabajo competente, presencialmente o por correo certificado",
      "Ufficio ispezione del lavoro competente, di persona o per raccomandata",
      "Zuständiges Arbeitsinspektionsbüro, persönlich oder per Einschreiben",
      "Территориальная инспекция труда, лично или заказным письмом"
    ),
    keywords: ["أجر غير مؤدى", "salaire impayé", "unpaid wages", "تفتيش الشغل", "inspection du travail"],
  },
  {
    id: "aml-signalement-travail-non-declare",
    cat: "amal",
    title: T7(
      "الإبلاغ عن شغل غير مصرح به",
      "Signalement de travail non déclaré",
      "Report of undeclared work",
      "Denuncia de trabajo no declarado",
      "Segnalazione di lavoro non dichiarato",
      "Meldung von Schwarzarbeit",
      "Сообщение о неоформленной работе"
    ),
    desc: D7(
      "تصريح يقدم إلى المصالح المختصة ضد مقاولة تشغل أجراء بدون عقد ولا تصريح بالضمان الاجتماعي.",
      "Déclaration adressée aux services compétents contre une entreprise employant des salariés sans contrat ni déclaration.",
      "Statement addressed to the competent services against a company employing workers without contract or declaration.",
      "Declaración dirigida a los servicios competentes contra una empresa que emplea trabajadores sin contrato ni declaración.",
      "Segnalazione inviata ai servizi competenti contro un'azienda che impiega lavoratori senza contratto né dichiarazione.",
      "Anzeige an die zuständigen Stellen gegen ein Unternehmen, das Arbeitnehmer ohne Vertrag und Anmeldung beschäftigt.",
      "Сообщение в компетентные органы о компании, использующей труд работников без договора и регистрации."
    ),
    where: W7(
      "تفتيش الشغل أو الصندوق الوطني للضمان الاجتماعي بالجهة المعنية",
      "Inspection du travail ou caisse CNSS de la région concernée",
      "Labour inspection or CNSS regional office concerned",
      "Inspección de trabajo u oficina regional de la CNSS correspondiente",
      "Ispettorato del lavoro o sede CNSS della regione interessata",
      "Arbeitsinspektion oder zuständige CNSS-Stelle der Region",
      "Инспекция труда или региональный офис CNSS по месту нарушения"
    ),
    keywords: ["شغل غير مصرح به", "travail non déclaré", "undeclared work", "تفتيش الشغل", "CNSS"],
  },
  {
    id: "aml-demande-mediation",
    cat: "amal",
    title: T7(
      "طلب وساطة لدى تفتيش الشغل",
      "Demande de médiation auprès de l'inspection du travail",
      "Request for mediation by the labour inspectorate",
      "Solicitud de mediación ante la inspección de trabajo",
      "Domanda di mediazione presso l'ispezione del lavoro",
      "Antrag auf Vermittlung durch die Arbeitsinspektion",
      "Заявление о посредничестве инспекции труда"
    ),
    desc: D7(
      "طلب يلتمس فيه الطرف المتضرر تدخل العون المكلف بتفتيش الشغل للتوفيق بينه وبين مشغله.",
      "Demande sollicitant l'intervention de l'agent d'inspection du travail en vue d'une conciliation avec l'employeur.",
      "Request seeking the intervention of the labour inspection officer to reach a settlement with the employer.",
      "Solicitud que pide la intervención del inspector de trabajo para lograr una conciliación con el empleador.",
      "Domanda che chiede l'intervento dell'ispettore del lavoro per una conciliazione con il datore di lavoro.",
      "Antrag auf Einschaltung des Arbeitsinspektors zur gütlichen Einigung mit dem Arbeitgeber.",
      "Заявление о вмешательстве инспектора труда для примирения с работодателем."
    ),
    where: W7(
      "مكتب تفتيش الشغل التابع له مقر المقاولة، مع عرض موجز للنزاع",
      "Bureau d'inspection du travail du ressort de l'entreprise, avec un exposé succinct du litige",
      "Labour inspection office covering the company, with a brief summary of the dispute",
      "Oficina de inspección competente, con una exposición sucinta del litigio",
      "Ufficio ispezione del lavoro competente, con una breve esposizione della controversia",
      "Zuständiges Arbeitsinspektionsbüro mit einer kurzen Darstellung des Streitfalls",
      "Территориальная инспекция труда с кратким изложением сути спора"
    ),
    keywords: ["وساطة", "médiation inspection", "labour mediation", "تفتيش الشغل", "conciliation"],
  },
  {
    id: "aml-regularisation-situation",
    cat: "amal",
    title: T7(
      "طلب تسوية وضعية أجير يعمل بدون عقد",
      "Demande de régularisation d'un salarié sans contrat",
      "Request to regularise an employee working without a contract",
      "Solicitud de regularización de un trabajador sin contrato",
      "Domanda di regolarizzazione di un lavoratore senza contratto",
      "Antrag auf Legalisierung eines Arbeitnehmers ohne Vertrag",
      "Заявление об урегулировании статуса работника без договора"
    ),
    desc: D7(
      "طلب يلتمس فيه الأجير غير المصرح به تسوية وضعيته القانونية والاجتماعية لدى مشغله الحالي.",
      "Demande par laquelle un salarié non déclaré sollicite la mise en conformité de sa situation juridique et sociale.",
      "Request whereby an undeclared employee seeks the legalisation of their employment and social status.",
      "Solicitud mediante la cual un trabajador no declarado pide la puesta en regla de su situación jurídica y social.",
      "Domanda con cui un lavoratore non dichiarato chiede la messa in regola della propria posizione giuridica e sociale.",
      "Antrag eines nicht angemeldeten Arbeitnehmers auf ordnungsgemäße Gestaltung seiner Rechts- und Soziallage.",
      "Заявление неоформленного работника о приведении его правового и социального статуса в соответствие с законом."
    ),
    where: W7(
      "المشغل أولا، مع إمكانية إشعار تفتيش الشغل عند عدم الاستجابة",
      "L'employeur en premier lieu, avec possibilité d'alerter l'inspection du travail en cas de refus",
      "The employer first, with the option of alerting the labour inspectorate if there is no response",
      "El empleador en primer lugar, pudiendo alertar a la inspección de trabajo si no responde",
      "Innanzitutto il datore di lavoro, con possibilità di segnalare all'ispezione in caso di mancato riscontro",
      "Zunächst der Arbeitgeber, bei ausbleibender Reaktion kann die Arbeitsinspektion eingeschaltet werden",
      "Сначала работодателю, при отсутствии реакции — уведомление инспекции труда"
    ),
    keywords: ["تسوية الوضعية", "régularisation sans contrat", "regularisation", "بدون عقد", "travail non déclaré"],
  },
  {
    id: "aml-refus-reprise-travail",
    cat: "amal",
    title: T7(
      "الإخبار برفض المشغل استئناف العمل",
      "Signalement du refus de reprise du travail par l'employeur",
      "Report of the employer's refusal to allow return to work",
      "Denuncia de la negativa del empleador a la reincorporación",
      "Segnalazione del rifiuto di ripresa del lavoro da parte del datore",
      "Anzeige über die Verweigerung der Arbeitsaufnahme durch den Arbeitgeber",
      "Сообщение об отказе работодателя допустить к работе"
    ),
    desc: D7(
      "إخبار يقدمه الأجير إلى تفتيش الشغل عن رفض مشغله استقباله بعد انتهاء رخصته القانونية.",
      "Dénonciation adressée à l'inspection du travail lorsque l'employeur refuse le retour après un congé légal.",
      "Report made to the labour inspectorate when the employer refuses return after statutory leave.",
      "Denuncia presentada ante la inspección de trabajo cuando el empleador rechaza el regreso tras un permiso legal.",
      "Segnalazione all'ispezione del lavoro quando il datore rifiuta il rientro dopo un congedo legale.",
      "Anzeige bei der Arbeitsinspektion, wenn der Arbeitgeber die Rückkehr nach dem gesetzlichen Urlaub verweigert.",
      "Сообщение в инспекцию труда об отказе работодателя допустить работника после законного отпуска."
    ),
    where: W7(
      "مكتب تفتيش الشغل التابع له مقر المقاولة في أقرب وقت ممكن",
      "Bureau d'inspection du travail du ressort de l'entreprise, dans les meilleurs délais",
      "Labour inspection office covering the company, as soon as possible",
      "Oficina de inspección competente, a la mayor brevedad posible",
      "Ufficio ispezione del lavoro competente, nel più breve tempo possibile",
      "Zuständiges Arbeitsinspektionsbüro, so bald wie möglich",
      "Территориальная инспекция труда в кратчайшие сроки"
    ),
    keywords: ["رفض استئناف العمل", "refus reprise travail", "refusal to reinstate", "تفتيش الشغل", "inspection"],
  },
  {
    id: "aml-dossier-licenciement-abusif",
    cat: "amal",
    title: T7(
      "تكوين ملف الطرد التعسفي",
      "Constitution du dossier de licenciement abusif",
      "Assembling an unfair dismissal case file",
      "Formación del expediente de despido abusivo",
      "Costituzione del fascicolo di licenziamento abusivo",
      "Zusammenstellung des Dossiers für unrechtmäßige Kündigung",
      "Формирование дела о незаконном увольнении"
    ),
    desc: D7(
      "بيان بالوثائق اللازمة لتحرير شكوى طرد تعسفي أمام المحكمة المختصة بعد محاولة الصلح.",
      "Récapitulatif des pièces nécessaires pour porter une affaire de licenciement abusif devant la juridiction compétente.",
      "List of the documents needed to bring an unfair dismissal case before the competent court.",
      "Relación de los documentos necesarios para llevar un caso de despido abusivo ante la jurisdicción competente.",
      "Elenco dei documenti necessari per portare un caso di licenziamento abusivo davanti alla giurisdizione competente.",
      "Übersicht der Unterlagen, die für ein Verfahren wegen unrechtmäßiger Kündigung vor dem zuständigen Gericht nötig sind.",
      "Перечень документов, необходимых для подачи иска о незаконном увольнении в компетентный суд."
    ),
    where: W7(
      "تجمع الوثائق لدى الأجير قبل إيداع الملف بكتابة ضبط المحكمة الاجتماعية",
      "Documents rassemblés par le salarié avant dépôt du dossier au greffe du tribunal social",
      "Documents gathered by the employee before filing the case at the social court registry",
      "Documentos reunidos por el trabajador antes de presentar el expediente en el registro del tribunal social",
      "Documenti raccolti dal lavoratore prima del deposito del fascicolo alla cancelleria del tribunale del lavoro",
      "Vom Arbeitnehmer zusammengetragene Unterlagen vor Einreichung bei der Geschäftsstelle des Arbeitsgerichts",
      "Документы, собираемые работником до подачи дела в канцелярию социального суда"
    ),
    keywords: ["الطرد التعسفي", "licenciement abusif", "unfair dismissal", "ملف", "tribunal social"],
  },
  {
    id: "aml-saisine-tribunal-social",
    cat: "amal",
    title: T7(
      "طلب رفع دعوى أمام المحكمة الاجتماعية",
      "Saisine du tribunal social",
      "Petition to the social court",
      "Interposición de demanda ante el tribunal social",
      "Ricorso al tribunale del lavoro",
      "Klage beim Sozialgericht",
      "Иск в социальный суд"
    ),
    desc: D7(
      "طلب يرفع إلى المحكمة الاجتماعية للبت في نزاع فردي أو جماعي ناشئ عن تطبيق مدونة الشغل.",
      "Requête portée devant le tribunal social pour trancher un différend individuel ou collectif né du code du travail.",
      "Petition brought before the social court to decide an individual or collective labour-code dispute.",
      "Demanda presentada ante el tribunal social para resolver una controversia individual o colectiva derivada del código de trabajo.",
      "Ricorso proposto innanzi al tribunale del lavoro per decidere una controversia individuale o collettiva del codice del lavoro.",
      "Antrag beim Sozialgericht zur Entscheidung eines individuellen oder kollektiven Streits aus dem Arbeitsgesetzbuch.",
      "Иск в социальный суд для разрешения индивидуального или коллективного спора по трудовому кодексу."
    ),
    where: W7(
      "كتابة ضبط المحكمة الابتدائية المختصة (الغرفة الاجتماعية) بعد استنفاد محاولة الصلح",
      "Greffe du tribunal de première instance compétent (chambre sociale), après tentative de conciliation",
      "Registry of the competent court of first instance (social chamber), after an attempted conciliation",
      "Registro del juzgado de primera instancia competente (sala social), previo intento de conciliación",
      "Cancelleria del tribunale competente di primo grado (sezione lavoro), dopo tentativo di conciliazione",
      "Geschäftsstelle des zuständigen Erstinstanzgerichts (Sozialkammer) nach erfolglosem Schlichtungsversuch",
      "Канцелярия компетентного суда первой инстанции (социальная палата) после попытки примирения"
    ),
    keywords: ["المحكمة الاجتماعية", "tribunal social", "social court", "دعوى", "litige du travail"],
  },
  {
    id: "aml-contestation-sanction",
    cat: "amal",
    title: T7(
      "تظلم من عقوبة تأديبية",
      "Contestation d'une sanction disciplinaire",
      "Challenge to a disciplinary sanction",
      "Impugnación de una sanción disciplinaria",
      "Contestazione di una sanzione disciplinare",
      "Anfechtung einer Disziplinarmaßnahme",
      "Обжалование дисциплинарного взыскания"
    ),
    desc: D7(
      "طلب يقدمه الأجير للتظلم من إنذار أو عقوبة تأديبية فرضت دون احترام مسطرة التأديب.",
      "Demande par laquelle le salarié conteste un avertissement ou une sanction infligée sans respect de la procédure disciplinaire.",
      "Request whereby an employee challenges a warning or sanction imposed without observance of disciplinary procedure.",
      "Solicitud mediante la cual el trabajador impugna una amonestación o sanción impuesta sin respetar el procedimiento disciplinario.",
      "Domanda con cui il lavoratore contesta un richiamo o una sanzione irrogata senza rispetto della procedura disciplinare.",
      "Antrag, mit dem ein Arbeitnehmer eine Verwarnung oder Sanktion wegen Verstoßes gegen das Disziplinarverfahren anficht.",
      "Заявление работника об обжаловании замечания или взыскания, наложенного с нарушением процедуры."
    ),
    where: W7(
      "المشغل أولا، ثم تفتيش الشغل أو المحكمة الاجتماعية عند عدم الرد",
      "L'employeur d'abord, puis l'inspection du travail ou le tribunal social en l'absence de réponse",
      "The employer first, then the labour inspectorate or social court if no reply",
      "Primero el empleador, luego la inspección de trabajo o el tribunal social sin respuesta",
      "Prima il datore di lavoro, poi l'ispezione del lavoro o il tribunale sociale in mancanza di risposta",
      "Zunächst der Arbeitgeber, danach Arbeitsinspektion oder Sozialgericht ohne Antwort",
      "Сначала работодателю, затем в инспекцию труда или социальный суд при отсутствии ответа"
    ),
    keywords: ["عقوبة تأديبية", "sanction disciplinaire", "disciplinary sanction", "تظلم", "contestation"],
  },
];
