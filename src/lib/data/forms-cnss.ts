// CNSS / AMO / CNOPS social-security forms — registration, filings,
// family & health benefits, work accidents, pensions. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsCnss: DocumentItem[] = [
  // ─── Immatriculation & affiliation / التسجيل والانتساب ───
  {
    id: "cnss-immatriculation-salarie",
    cat: "cnss",
    title: T7(
      "طلب تسجيل أجير لدى الصندوق الوطني للضمان الاجتماعي",
      "Demande d'immatriculation d'un salarié auprès de la CNSS",
      "Application to register an employee with the National Social Security Fund (CNSS)",
      "Solicitud de inscripción de un asalariado en la CNSS",
      "Domanda di iscrizione di un dipendente presso la CNSS",
      "Antrag auf Anmeldung eines Arbeitnehmers bei der CNSS",
      "Заявление на регистрацию работника в CNSS"
    ),
    desc: D7(
      "استمارة يسجل فيها المشغل أجراءه الجدد لدى الصندوق الوطني للضمان الاجتماعي قبل انقضاء أجل الشهر.",
      "Formulaire par lequel l'employeur immatricule ses nouveaux salariés auprès de la CNSS dans le délai réglementaire.",
      "Form used by an employer to register new employees with the CNSS within the statutory deadline.",
      "Formulario con el que el empleador inscribe a sus nuevos asalariados en la CNSS dentro del plazo legal.",
      "Modulo con cui il datore di lavoro iscrive i nuovi dipendenti alla CNSS entro il termine di legge.",
      "Formular, mit dem der Arbeitgeber neue Arbeitnehmer fristgerecht bei der CNSS anmeldet.",
      "Форма, по которой работодатель регистрирует новых сотрудников в CNSS в установленный срок."
    ),
    where: W7(
      "أقرب وكالة للصندوق الوطني للضمان الاجتماعي أو فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS la plus proche ou espace employeur du portail maCNSS",
      "Nearest CNSS agency or the employer space on the maCNSS portal",
      "Agencia CNSS más cercana o espacio del empleador en maCNSS",
      "Agenzia CNSS più vicina o spazio datore di lavoro su maCNSS",
      "Nächstgelegene CNSS-Agentur oder Arbeitgeberbereich auf maCNSS",
      "Ближайшее агентство CNSS или кабинет работодателя на портале maCNSS"
    ),
    authority: "cnss",
    keywords: ["CNSS", "تسجيل أجير", "immatriculation", "registration", "ضمان اجتماعي", "maCNSS"],
    popular: true,
  },
  {
    id: "cnss-declaration-ouverture-employeur",
    cat: "cnss",
    title: T7(
      "التصريح بالانخراط كمشغل لدى الصندوق الوطني للضمان الاجتماعي",
      "Déclaration d'ouverture en tant qu'employeur auprès de la CNSS",
      "Declaration of opening as an employer with the CNSS",
      "Declaración de apertura como empleador ante la CNSS",
      "Dichiarazione di apertura come datore di lavoro presso la CNSS",
      "Anmeldung als Arbeitgeber (Betriebseröffnung) bei der CNSS",
      "Заявление об открытии деятельности работодателя в CNSS"
    ),
    desc: D7(
      "يصرح المشغل الجديد عبر هذه الوثيقة بمؤسسته لدى الصندوق الوطني للضمان الاجتماعي قبل تشغيل أول أجير.",
      "Le nouvel employeur y déclare son entreprise à la CNSS avant l'embauche du premier salarié.",
      "The new employer declares the company to the CNSS before hiring the first employee.",
      "El nuevo empleador declara su empresa ante la CNSS antes de contratar al primer asalariado.",
      "Il nuovo datore di lavoro dichiara la propria azienda alla CNSS prima di assumere il primo dipendente.",
      "Der neue Arbeitgeber meldet seinen Betrieb vor Einstellung des ersten Arbeitnehmers bei der CNSS an.",
      "Новый работодатель регистрирует предприятие в CNSS до приёма первого сотрудника."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر المقاولة أو فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS du siège de l'entreprise ou espace employeur du portail maCNSS",
      "CNSS agency of the company's head office or the employer space on maCNSS",
      "Agencia CNSS de la sede de la empresa o espacio del empleador en maCNSS",
      "Agenzia CNSS della sede aziendale o spazio datore di lavoro su maCNSS",
      "CNSS-Agentur am Firmensitz oder Arbeitgeberbereich auf maCNSS",
      "Агентство CNSS по месту нахождения компании или кабинет работодателя на maCNSS"
    ),
    authority: "cnss",
    keywords: ["CNSS", "مشغل", "employeur", "déclaration d'ouverture", "affiliation", "مقاولة"],
  },
  {
    id: "cnss-immatriculation-personnel-domestique",
    cat: "cnss",
    title: T7(
      "تسجيل العتائق والعاملات والعاملين بالمنازل في الضمان الاجتماعي",
      "Immatriculation du personnel de maison auprès de la CNSS",
      "Registration of domestic workers with the CNSS",
      "Inscripción del personal doméstico en la CNSS",
      "Iscrizione del personale domestico presso la CNSS",
      "Anmeldung von Hauspersonal bei der CNSS",
      "Регистрация домашнего персонала в CNSS"
    ),
    desc: D7(
      "استمارة تتيح للعاملات والعاملين بالمنازل الانتظام في الضمان الاجتماعي وتحصيل حقوقهم الاجتماعية والصحية.",
      "Formule permettant aux employés de maison de s'affilier à la CNSS et de cumuler des droits sociaux et sanitaires.",
      "Form enabling domestic staff to join the CNSS and build up social and health entitlements.",
      "Formulario que permite al personal doméstico afiliarse a la CNSS y acumular derechos sociales y sanitarios.",
      "Modulo che consente al personale domestico di iscriversi alla CNSS e maturare diritti sociali e sanitari.",
      "Formular, mit dem Hauspersonal der CNSS beitreten und Sozial- und Gesundheitsrechte erwerben kann.",
      "Форма для вступления домашнего персонала в CNSS и накопления социальных и медицинских прав."
    ),
    where: W7(
      "أقرب وكالة للصندوق الوطني للضمان الاجتماعي أو منصة maCNSS",
      "Agence CNSS la plus proche ou portail maCNSS",
      "Nearest CNSS agency or the maCNSS portal",
      "Agencia CNSS más cercana o portal maCNSS",
      "Agenzia CNSS più vicina o portale maCNSS",
      "Nächstgelegene CNSS-Agentur oder Portal maCNSS",
      "Ближайшее агентство CNSS или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["العتائق", "personnel de maison", "CNSS", "خدام المنازل", "domestic workers", "immatriculation"],
  },
  {
    id: "cnss-affiliation-artistes",
    cat: "cnss",
    title: T7(
      "انخراط الفنانين والمؤلفين والمؤدين في الضمان الاجتماعي",
      "Affiliation des artistes, auteurs et interprètes à la CNSS",
      "Affiliation of artists, authors and performers to the CNSS",
      "Afiliación de artistas, autores e intérpretes a la CNSS",
      "Affiliazione di artisti, autori e interpreti alla CNSS",
      "Anmeldung von Künstlern, Autoren und Darstellern bei der CNSS",
      "Регистрация артистов, авторов и исполнителей в CNSS"
    ),
    desc: D7(
      "طلب يقدمه الفنان المحترف للانخراط في الضمان الاجتماعي والاستفادة من التغطية الصحية والتعويضات الاجتماعية.",
      "Demande par laquelle l'artiste professionnel adhère à la CNSS et accède à la couverture santé et aux prestations.",
      "Application through which a professional artist joins the CNSS and gains health coverage and benefits.",
      "Solicitud con la que el artista profesional se afilia a la CNSS y obtiene cobertura sanitaria y prestaciones.",
      "Domanda con cui l'artista professionista si iscrive alla CNSS ottenendo copertura sanitaria e prestazioni.",
      "Antrag, mit dem der professionelle Künstler der CNSS beitritt und Gesundheitsschutz und Leistungen erhält.",
      "Заявление о вступлении профессионального деятеля искусства в CNSS для получения медстраховки и выплат."
    ),
    where: W7(
      "مقر الصندوق الوطني للضمان الاجتماعي أو إحدى وكالاته عبر منصة maCNSS",
      "Siège ou agence de la CNSS via le portail maCNSS",
      "CNSS head office or an agency via the maCNSS portal",
      "Sede o agencia de la CNSS a través del portal maCNSS",
      "Sede o agenzia della CNSS tramite il portale maCNSS",
      "CNSS-Hauptstelle oder Agentur über das Portal maCNSS",
      "Центральный офис или агентство CNSS через портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["فنان", "artistes", "CNSS", "مؤلفون", "interprètes", "affiliation"],
  },
  {
    id: "cnss-affiliation-assure-volontaire",
    cat: "cnss",
    title: T7(
      "طلب الانخراط الطوعي للعملة المستقلين والمهنيين في الضمان الاجتماعي",
      "Demande d'affiliation volontaire des travailleurs indépendants à la CNSS",
      "Application for voluntary affiliation of self-employed workers to the CNSS",
      "Solicitud de afiliación voluntaria de trabajadores autónomos a la CNSS",
      "Domanda di affiliazione volontaria dei lavoratori autonomi alla CNSS",
      "Antrag auf freiwillige Anmeldung von Selbstständigen bei der CNSS",
      "Заявление о добровольном вступлении самозанятых в CNSS"
    ),
    desc: D7(
      "يلتمس العامل لنفسه عبر هذا الطلب الانخراط الطوعي في الضمان الاجتماعي والتغطية الصحية الإجبارية.",
      "Par cette demande, le travailleur indépendant sollicite son adhésion volontaire à la CNSS et à l'AMO.",
      "Through this application the self-employed worker requests voluntary membership of the CNSS and AMO schemes.",
      "Mediante esta solicitud, el trabajador autónomo pide su adhesión voluntaria a la CNSS y al AMO.",
      "Con questa domanda il lavoratore autonomo chiede l'adesione volontaria alla CNSS e all'AMO.",
      "Mit diesem Antrag beantragt der Selbstständige den freiwilligen Beitritt zur CNSS und AMO.",
      "Этим заявлением самозанятый просит о добровольном вступлении в системы CNSS и AMO."
    ),
    where: W7(
      "وكالة CNSS لمقر سكنى المعني بالأمر أو منصة maCNSS",
      "Agence CNSS du lieu de résidence ou portail maCNSS",
      "CNSS agency of the applicant's place of residence or the maCNSS portal",
      "Agencia CNSS del lugar de residencia o portal maCNSS",
      "Agenzia CNSS del luogo di residenza o portale maCNSS",
      "CNSS-Agentur am Wohnort oder Portal maCNSS",
      "Агентство CNSS по месту жительства или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["انخراط طوعي", "travailleur indépendant", "CNSS", "assuré volontaire", "AMO", "self-employed"],
  },
  {
    id: "cnss-immatriculation-conjoint-ayant-droit",
    cat: "cnss",
    title: T7(
      "طلب تسجيل الزوج أو الزوجة كذي حقوق لدى الضمان الاجتماعي",
      "Demande d'immatriculation du conjoint comme ayant droit à la CNSS",
      "Application to register the spouse as a beneficiary with the CNSS",
      "Solicitud de inscripción del cónyuge como beneficiario en la CNSS",
      "Domanda di iscrizione del coniuge come avente diritto presso la CNSS",
      "Antrag auf Registrierung des Ehepartners als Berechtigter bei der CNSS",
      "Заявление о регистрации супруга как иждивенца в CNSS"
    ),
    desc: D7(
      "استمارة يضيف بها المؤمن له زوجه إلى ملفه الاجتماعي للاستفادة من التغطية الصحية الإجبارية.",
      "Formulaire par lequel l'assuré ajoute son conjoint à son dossier pour la couverture maladie AMO.",
      "Form through which the insured person adds a spouse to the file for AMO health coverage.",
      "Formulario con el que el asegurado añade a su cónyuge al expediente para la cobertura AMO.",
      "Modulo con cui l'assicurato aggiunge il coniuge alla propria pratica per la copertura AMO.",
      "Formular, mit dem der Versicherte den Ehepartner für den AMO-Krankenschutz hinzufügt.",
      "Форма, по которой застрахованный добавляет супруга в дело для медпокрытия AMO."
    ),
    where: W7(
      "أقرب وكالة للصندوق الوطني للضمان الاجتماعي أو منصة maCNSS",
      "Agence CNSS la plus proche ou portail maCNSS",
      "Nearest CNSS agency or the maCNSS portal",
      "Agencia CNSS más cercana o portal maCNSS",
      "Agenzia CNSS più vicina o portale maCNSS",
      "Nächstgelegene CNSS-Agentur oder Portal maCNSS",
      "Ближайшее агентство CNSS или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["ذو حقوق", "ayant droit", "conjoint", "CNSS", "AMO", "زوج"],
  },
  {
    id: "cnss-immatriculation-enfants-ayants-droit",
    cat: "cnss",
    title: T7(
      "طلب تسجيل الأبناء كذوي حقوق لدى الضمان الاجتماعي",
      "Demande d'immatriculation des enfants comme ayants droit à la CNSS",
      "Application to register children as beneficiaries with the CNSS",
      "Solicitud de inscripción de los hijos como beneficiarios en la CNSS",
      "Domanda di iscrizione dei figli come aventi diritto presso la CNSS",
      "Antrag auf Registrierung der Kinder als Berechtigte bei der CNSS",
      "Заявление о регистрации детей как иждивенцев в CNSS"
    ),
    desc: D7(
      "يطلب المؤمن له عبر هذه الاستمارة تسجيل أبنائه للانتفاع بالتعويضات العائلية والتغطية الصحية.",
      "L'assuré y demande l'immatriculation de ses enfants pour les prestations familiales et la couverture maladie.",
      "The insured person requests registration of children for family benefits and health coverage.",
      "El asegurado solicita la inscripción de sus hijos para las prestaciones familiares y la cobertura sanitaria.",
      "L'assicurato chiede l'iscrizione dei figli per le prestazioni familiari e la copertura sanitaria.",
      "Der Versicherte beantragt die Registrierung seiner Kinder für Familienleistungen und Krankenschutz.",
      "Застрахованный просит зарегистрировать детей для получения семейных пособий и медпокрытия."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع إلكتروني عبر منصة maCNSS",
      "Agence CNSS la plus proche ou dépôt en ligne via maCNSS",
      "Nearest CNSS agency or online filing via maCNSS",
      "Agencia CNSS más cercana o presentación en línea vía maCNSS",
      "Agenzia CNSS più vicina o deposito online tramite maCNSS",
      "Nächstgelegene CNSS-Agentur oder Online-Einreichung über maCNSS",
      "Ближайшее агентство CNSS или онлайн-подача через maCNSS"
    ),
    authority: "cnss",
    keywords: ["أبناء", "enfants", "ayants droit", "CNSS", "prestations familiales", "allocations"],
  },
  {
    id: "cnss-immatriculation-stagiaire",
    cat: "cnss",
    title: T7(
      "طلب تسجيل متدرب مأجور لدى الصندوق الوطني للضمان الاجتماعي",
      "Demande d'immatriculation d'un stagiaire rémunéré auprès de la CNSS",
      "Application to register a paid trainee with the CNSS",
      "Solicitud de inscripción de un becario remunerado en la CNSS",
      "Domanda di iscrizione di un tirocinante retribuito presso la CNSS",
      "Antrag auf Anmeldung eines vergüteten Praktikanten bei der CNSS",
      "Заявление о регистрации оплачиваемого стажёра в CNSS"
    ),
    desc: D7(
      "استمارة لتسجيل المتدرب المتقاضى لأجر لدى الضمان الاجتماعي ضماناً لحقوقه خلال فترة التدريب.",
      "Formulaire d'immatriculation du stagiaire rémunéré afin de garantir ses droits pendant la période de formation.",
      "Form registering the paid trainee with social security to protect rights during the training period.",
      "Formulario de inscripción del becario remunerado para proteger sus derechos durante la formación.",
      "Modulo di iscrizione del tirocinante retribuito per tutelare i diritti durante il periodo di formazione.",
      "Formular zur Anmeldung des vergüteten Praktikanten zum Schutz seiner Rechte während der Ausbildung.",
      "Форма регистрации оплачиваемого стажёра в соцстраховании для защиты его прав на стажировке."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر التدريب أو فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS du lieu de stage ou espace employeur sur maCNSS",
      "CNSS agency of the training location or employer space on maCNSS",
      "Agencia CNSS del lugar de prácticas o espacio del empleador en maCNSS",
      "Agenzia CNSS della sede di tirocinio o spazio datore di lavoro su maCNSS",
      "CNSS-Agentur am Praktikumsort oder Arbeitgeberbereich auf maCNSS",
      "Агентство CNSS по месту стажировки или кабинет работодателя на maCNSS"
    ),
    authority: "cnss",
    keywords: ["متدرب", "stagiaire", "CNSS", "تدريب", "immatriculation", "trainee"],
  },
  {
    id: "cnss-immatriculation-marins",
    cat: "cnss",
    title: T7(
      "تسجيل بحارة الصيد البحري وأشخاص البحر في الضمان الاجتماعي",
      "Immatriculation des gens de mer (marins pêcheurs) à la CNSS",
      "Registration of seafarers (fishing crews) with the CNSS",
      "Inscripción de la gente de mar (pescadores) en la CNSS",
      "Iscrizione della gente di mare (marittimi) alla CNSS",
      "Anmeldung von Seeleuten (Fischer) bei der CNSS",
      "Регистрация моряков (рыбаков) в CNSS"
    ),
    desc: D7(
      "طلب لتسجيل أشخاص البحر العاملين على متن السفن حتى تُصان حقوقهم الاجتماعية والصحية أثناء الملاحة.",
      "Demande d'immatriculation des gens de mer embarqués afin de préserver leurs droits sociaux et sanitaires.",
      "Application to register crew members on board so their social and health entitlements are protected.",
      "Solicitud de inscripción de los tripulantes embarcados para proteger sus derechos sociales y sanitarios.",
      "Domanda di iscrizione dell'equipaggio imbarcato per tutelare i diritti sociali e sanitari.",
      "Antrag auf Anmeldung der eingeschifften Besatzung zum Schutz ihrer Sozial- und Gesundheitsrechte.",
      "Заявление о регистрации членов экипажа на судне для защиты их социальных и медицинских прав."
    ),
    where: W7(
      "أقرب وكالة للصندوق الوطني للضمان الاجتماعي بمساعدة مشغل السفينة",
      "Agence CNSS la plus proche avec l'appui de l'armateur",
      "Nearest CNSS agency with the shipowner's assistance",
      "Agencia CNSS más cercana con apoyo del armador",
      "Agenzia CNSS più vicina con il supporto dell'armatore",
      "Nächstgelegene CNSS-Agentur mit Unterstützung des Reeders",
      "Ближайшее агентство CNSS при содействии судовладельца"
    ),
    authority: "cnss",
    keywords: ["بحارة", "gens de mer", "CNSS", "الصيد البحري", "marins", "seafarers"],
  },
  {
    id: "cnss-declaration-salaries-agricoles-forfaitaire",
    cat: "cnss",
    title: T7(
      "التصريح بالأجراء الفلاحيين الخاضعين للمساهمة الإجمالية لدى CNSS",
      "Déclaration des salariés agricoles soumis à cotisation forfaitaire",
      "Declaration of agricultural employees subject to flat-rate contributions",
      "Declaración de asalariados agrícolas sujetos a cotización forfaitaria",
      "Dichiarazione dei salariati agricoli soggetti a contributo forfettario",
      "Meldung landwirtschaftlicher Arbeitnehmer mit Pauschalbeitrag",
      "Декларация сельскохозяйственных работников с паушальным взносом"
    ),
    desc: D7(
      "يصرح مشغل الأجراء الفلاحيين الموسميين عبر هذه الوثيقة بأيام عملهم ويسدد المساهمات الإجمالية المستحقة.",
      "L'employeur y déclare les jours de travail de ses saisonniers agricoles et acquitte la cotisation forfaitaire due.",
      "The employer declares the working days of seasonal farm hands and pays the flat-rate contribution due.",
      "El empleador declara los días de trabajo de sus trabajadores agrícolas temporeros y paga la cotización forfaitaria.",
      "Il datore di lavoro dichiara le giornate dei lavoratori agricoli stagionali e paga il contributo forfettario dovuto.",
      "Der Arbeitgeber meldet die Arbeitstage der Saisonarbeitskräfte und entrichtet den geschuldeten Pauschalbeitrag.",
      "Работодатель декларирует рабочие дни сезонных сельхозрабочих и уплачивает причитающийся паушальный взнос."
    ),
    where: W7(
      "وكالة CNSS التابعة لموقع الاستغلال الفلاحي أو فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS du siège de l'exploitation ou espace employeur sur maCNSS",
      "CNSS agency of the farm's location or employer space on maCNSS",
      "Agencia CNSS de la explotación o espacio del empleador en maCNSS",
      "Agenzia CNSS dell'azienda agricola o spazio datore di lavoro su maCNSS",
      "CNSS-Agentur am Standort des Betriebs oder Arbeitgeberbereich auf maCNSS",
      "Агентство CNSS по месту фермы или кабинет работодателя на maCNSS"
    ),
    authority: "cnss",
    keywords: ["أجراء فلاحيون", "salariés agricoles", "CNSS", "cotisation forfaitaire", "saisonniers", "فلاحة"],
  },

  // ─── DAS & salaires / التصريح بالأجور ───
  {
    id: "cnss-declaration-salaires-das",
    cat: "cnss",
    title: T7(
      "التصريح السنوي بالأجور والأجراء (DAS) لدى الضمان الاجتماعي",
      "Déclaration annuelle des salaires (DAS) à la CNSS",
      "Annual wage declaration (DAS) to the CNSS",
      "Declaración anual de salarios (DAS) a la CNSS",
      "Dichiarazione annuale dei salari (DAS) alla CNSS",
      "Jährliche Lohnmeldung (DAS) an die CNSS",
      "Годовая декларация о зарплатах (DAS) в CNSS"
    ),
    desc: D7(
      "تصريح إلزامي يودعه المشغل سنوياً بأجور أجراءه والاشتراكات الاجتماعية المستحقة عنها.",
      "Déclaration obligatoire déposée annuellement par l'employeur avec les salaires et cotisations sociales dues.",
      "Mandatory annual filing submitted by the employer listing wages and the social contributions due.",
      "Declaración obligatoria presentada anualmente por el empleador con los salarios y cotizaciones sociales.",
      "Denuncia obbligatoria presentata annualmente dal datore di lavoro con i salari e i contributi dovuti.",
      "Pflichtmeldung, die der Arbeitgeber jährlich mit den Löhnen und geschuldeten Sozialbeiträgen einreicht.",
      "Обязательный годовой отчёт работодателя о зарплатах и причитающихся социальных взносах."
    ),
    where: W7(
      "فضاء المشغلين بمنصة maCNSS أو أقرب وكالة للصندوق الوطني للضمان الاجتماعي",
      "Espace employeur du portail maCNSS ou agence CNSS la plus proche",
      "Employer space on the maCNSS portal or the nearest CNSS agency",
      "Espacio del empleador en maCNSS o agencia CNSS más cercana",
      "Spazio datore di lavoro su maCNSS o agenzia CNSS più vicina",
      "Arbeitgeberbereich auf maCNSS oder nächstgelegene CNSS-Agentur",
      "Кабинет работодателя на maCNSS или ближайшее агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["DAS", "التصريح بالأجور", "déclaration salaires", "CNSS", "أجور", "maCNSS"],
    popular: true,
  },
  {
    id: "cnss-regularisation-das-oubliee",
    cat: "cnss",
    title: T7(
      "طلب تسوية تصريح سنوي بالأجور منسي أو متأخر",
      "Demande de régularisation d'une DAS oubliée ou tardive",
      "Application to regularise a forgotten or late wage declaration (DAS)",
      "Solicitud de regularización de una DAS olvidada o tardía",
      "Domanda di regolarizzazione di una DAS dimenticata o tardiva",
      "Antrag auf Nachbesserung einer vergessenen oder verspäteten DAS",
      "Заявление об исправлении забытой или просроченной декларации DAS"
    ),
    desc: D7(
      "يلتمس المشغل عبر هذا الطلب تسوية تصريحه المنسي بالأجور وتسديد الاشتراكات والزيادات المترتبة عنه.",
      "L'employeur y sollicite la régularisation de sa DAS omise avec paiement des cotisations et majorations.",
      "The employer seeks to regularise the omitted DAS with payment of contributions and late surcharges.",
      "El empleador solicita regularizar la DAS omitida con el pago de cotizaciones y recargos.",
      "Il datore di lavoro chiede di regolarizzare la DAS omessa versando contributi e maggiorazioni.",
      "Der Arbeitgeber beantragt die Nachbesserung der versäumten DAS samt Beiträgen und Zuschlägen.",
      "Работодатель просит исправить пропущенную DAS с уплатой взносов и надбавок."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع عبر فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS la plus proche ou dépôt via l'espace employeur de maCNSS",
      "Nearest CNSS agency or filing via the employer space on maCNSS",
      "Agencia CNSS más cercana o presentación vía maCNSS",
      "Agenzia CNSS più vicina o invio tramite lo spazio datore di lavoro di maCNSS",
      "Nächstgelegene CNSS-Agentur oder Einreichung über den Arbeitgeberbereich von maCNSS",
      "Ближайшее агентство CNSS или подача через кабинет работодателя на maCNSS"
    ),
    authority: "cnss",
    keywords: ["DAS", "تسوية", "régularisation", "CNSS", "اشتراكات", "cotisations"],
  },
  {
    id: "cnss-das-rectificative",
    cat: "cnss",
    title: T7(
      "التصريح التصحيحي بالأجور والأجراء (DAS تصحيحية)",
      "Déclaration rectificative des salaires (DAS rectificative)",
      "Corrective wage declaration (amended DAS)",
      "Declaración rectificativa de salarios (DAS rectificativa)",
      "Dichiarazione rettificativa dei salari (DAS rettificativa)",
      "Berichtigte Lohnmeldung (korrigierte DAS)",
      "Исправленная декларация о зарплатах (корректирующая DAS)"
    ),
    desc: D7(
      "وثيقة يصحح فيها المشغل الأخطاء المرصودة في تصريحه السنوي بالأجور من مبالغ أو أرقام تسجيل.",
      "Document par lequel l'employeur corrige les erreurs de montants ou d'immatriculation de sa DAS.",
      "Document with which the employer fixes wage amounts or registration numbers wrongly stated in the DAS.",
      "Documento con el que el empleador corrige errores de importes o de inscripción en la DAS.",
      "Documento con cui il datore di lavoro corregge errori di importi o di iscrizione nella DAS.",
      "Dokument, mit dem der Arbeitgeber falsche Beträge oder Nummern in der DAS berichtigt.",
      "Документ, по которому работодатель исправляет суммы или номера регистрации, неверно указанные в DAS."
    ),
    where: W7(
      "وكالة CNSS المعنية أو تصحيح إلكتروني عبر منصة maCNSS",
      "Agence CNSS compétente ou correction en ligne via maCNSS",
      "Competent CNSS agency or online correction via maCNSS",
      "Agencia CNSS competente o corrección en línea vía maCNSS",
      "Agenzia CNSS competente o correzione online tramite maCNSS",
      "Zuständige CNSS-Agentur oder Online-Korrektur über maCNSS",
      "Компетентное агентство CNSS или онлайн-исправление через maCNSS"
    ),
    authority: "cnss",
    keywords: ["DAS تصحيحية", "rectificative", "تصحيح", "CNSS", "أجور", "correction"],
  },
  {
    id: "cnss-demande-delai-supplementaire-das",
    cat: "cnss",
    title: T7(
      "طلب مهلة إضافية لإيداع التصريح السنوي بالأجور",
      "Demande de délai supplémentaire pour le dépôt de la DAS",
      "Application for an extension to file the wage declaration (DAS)",
      "Solicitud de plazo adicional para presentar la DAS",
      "Domanda di proroga per il deposito della DAS",
      "Antrag auf Fristverlängerung für die DAS-Einreichung",
      "Заявление о продлении срока подачи DAS"
    ),
    desc: D7(
      "يطلب المشغل فيه من الصندوق مهلة إضافية لتقديم تصريحه السنوي بالأجور بسبب عائق مشروع ومبرر.",
      "L'employeur y demande à la CNSS un délai supplémentaire pour déposer sa DAS pour un motif légitime.",
      "The employer asks the CNSS for extra time to file the DAS on legitimate, justified grounds.",
      "El empleador pide a la CNSS un plazo adicional para presentar la DAS por motivo legítimo.",
      "Il datore di lavoro chiede alla CNSS una proroga per depositare la DAS per motivi legittimi.",
      "Der Arbeitgeber ersucht die CNSS aus triftigem Grund um Aufschub für die DAS-Einreichung.",
      "Работодатель просит CNSS о дополнительном сроке подачи DAS по уважительной причине."
    ),
    where: W7(
      "الإدارة الجهوية أو أقرب وكالة للصندوق الوطني للضمان الاجتماعي",
      "Direction régionale ou agence de la CNSS compétente",
      "Competent CNSS regional office or agency",
      "Dirección regional o agencia CNSS competente",
      "Direzione regionale o agenzia CNSS competente",
      "Zuständige CNSS-Regionaldirektion oder Agentur",
      "Компетентный региональный офис или агентство CNSS"
    ),
    authority: "cnss",
    keywords: ["مهلة إضافية", "délai supplémentaire", "DAS", "CNSS", "تأخير", "prorogation"],
  },
  {
    id: "cnss-declaration-salaire-plafonne",
    cat: "cnss",
    title: T7(
      "التصريح بأجور مقيدة بسقف (العمل الجزئي وخدام المنازل)",
      "Déclaration de salaire plafonné (temps partiel et personnel de maison)",
      "Declaration of capped wages (part-time and domestic staff)",
      "Declaración de salario con tope (jornada parcial y personal doméstico)",
      "Dichiarazione di salario con tetto (part-time e personale domestico)",
      "Meldung beitragsbegrenzter Löhne (Teilzeit und Hauspersonal)",
      "Декларация зарплаты в пределах максимума (частичная занятость и домашний персонал)"
    ),
    desc: D7(
      "استمارة يصرح فيها المشغل بأجور أجراء العمل الجزئي والعتائق في حدود السقف المحدد قانوناً.",
      "Formulaire où l'employeur déclare les salaires des temps partiels et du personnel de maison dans la limite du plafond.",
      "Form on which the employer declares part-timers' and domestic staff's wages up to the statutory ceiling.",
      "Formulario en el que el empleador declara los salarios de parciales y domésticos hasta el tope legal.",
      "Modulo in cui il datore di lavoro dichiara i salari di part-time e domestici entro il massimale.",
      "Formular, in dem der Arbeitgeber Teilzeit- und Hauspersonal-Löhne bis zur Beitragsbemessungsgrenze angibt.",
      "Форма, в которой работодатель указывает зарплаты частично занятых и домашнего персонала в пределах максимума."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر المشغل أو فضاء المشغلين بمنصة maCNSS",
      "Agence CNSS de l'employeur ou espace employeur sur maCNSS",
      "Employer's CNSS agency or employer space on maCNSS",
      "Agencia CNSS del empleador o espacio del empleador en maCNSS",
      "Agenzia CNSS del datore di lavoro o spazio datore di lavoro su maCNSS",
      "CNSS-Agentur des Arbeitgebers oder Arbeitgeberbereich auf maCNSS",
      "Агентство CNSS работодателя или кабинет работодателя на maCNSS"
    ),
    authority: "cnss",
    keywords: ["سقف الأجر", "salaire plafonné", "CNSS", "العمل الجزئي", "temps partiel", "عتائق"],
  },
  {
    id: "cnss-attestation-salaire-prestations",
    cat: "cnss",
    title: T7(
      "طلب شهادة الأجر للاستفادة من التعويضات الاجتماعية",
      "Demande d'attestation de salaire pour l'octroi des prestations",
      "Application for a wage certificate for the granting of benefits",
      "Solicitud de certificado de salario para el otorgamiento de prestaciones",
      "Domanda di attestazione di salario per l'erogazione delle prestazioni",
      "Antrag auf Lohnbescheinigung für die Leistungsgewährung",
      "Заявление о справке о зарплате для назначения выплат"
    ),
    desc: D7(
      "يلتمس الأجير من مشغله هذه الشهادة لإثبات أجره عند طلب تعويضات الأمومة أو المرض أو الوفاة.",
      "Le salarié y demande à son employeur cette attestation pour justifier son salaire lors des demandes de prestations.",
      "The employee asks the employer for this certificate to prove wages when claiming maternity or sickness benefits.",
      "El asalariado pide al empleador este certificado para acreditar su salario al solicitar prestaciones.",
      "Il dipendente chiede al datore di lavoro l'attestazione del salario per richiedere le prestazioni.",
      "Der Arbeitnehmer erbittet vom Arbeitgeber die Lohnbescheinigung für Anträge auf Leistungen.",
      "Работник запрашивает у работодателя справку о зарплате для оформления пособий."
    ),
    where: W7(
      "تسلم من المشغل ثم ترفق بملف الطلب لدى أقرب وكالة CNSS",
      "Délivrée par l'employeur puis jointe au dossier déposé à l'agence CNSS",
      "Issued by the employer, then attached to the file filed at the CNSS agency",
      "Emitida por el empleador y adjuntada al expediente presentado en la agencia CNSS",
      "Rilasciata dal datore di lavoro e allegata alla pratica presentata all'agenzia CNSS",
      "Vom Arbeitgeber ausgestellt und dem Antrag bei der CNSS-Agentur beigefügt",
      "Выдаётся работодателем, затем прилагается к делу в агентстве CNSS"
    ),
    authority: "cnss",
    keywords: ["شهادة الأجر", "attestation de salaire", "CNSS", "prestations", "أجر", "salaire"],
  },

  // ─── Prestations familiales / التعويضات العائلية ───
  {
    id: "cnss-prestation-naissance",
    cat: "cnss",
    title: T7(
      "طلب منحة الولادة (التعويض العائلي عن الولادة)",
      "Demande d'allocation de naissance à la CNSS",
      "Application for the birth grant from the CNSS",
      "Solicitud del subsidio de nacimiento de la CNSS",
      "Domanda di assegno di nascita alla CNSS",
      "Antrag auf Geburtsgeld bei der CNSS",
      "Заявление на единовременное пособие при рождении ребёнка в CNSS"
    ),
    desc: D7(
      "طلب يقدم للاستفادة من التعويض المقطوع الممنوح بمناسبة ولادة كل مولود لمؤمن له.",
      "Demande destinée à obtenir la prestation forfaitaire versée à l'occasion de la naissance d'un enfant assuré.",
      "Application to obtain the lump-sum benefit paid on the birth of a covered child.",
      "Solicitud para obtener la prestación única pagada por el nacimiento de un hijo cubierto.",
      "Domanda per ottenere la prestazione una tantum corrisposta alla nascita di un figlio assicurato.",
      "Antrag auf die Pauschalleistung, die bei Geburt eines versicherten Kindes gezahlt wird.",
      "Заявление на разовую выплату, начисляемую при рождении застрахованного ребёнка."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع إلكتروني عبر منصة maCNSS",
      "Agence CNSS la plus proche ou dépôt en ligne via maCNSS",
      "Nearest CNSS agency or online filing via maCNSS",
      "Agencia CNSS más cercana o presentación en línea vía maCNSS",
      "Agenzia CNSS più vicina o deposito online tramite maCNSS",
      "Nächstgelegene CNSS-Agentur oder Online-Einreichung über maCNSS",
      "Ближайшее агентство CNSS или онлайн-подача через maCNSS"
    ),
    authority: "cnss",
    keywords: ["منحة الولادة", "allocation de naissance", "CNSS", "ولادة", "prestation", "birth grant"],
    popular: true,
  },
  {
    id: "cnss-allocations-familiales",
    cat: "cnss",
    title: T7(
      "طلب التعويضات العائلية الشهرية عن الأطفال المكفولين",
      "Demande d'allocations familiales mensuelles à la CNSS",
      "Application for monthly family allowances from the CNSS",
      "Solicitud de asignaciones familiares mensuales de la CNSS",
      "Domanda di assegni familiari mensili alla CNSS",
      "Antrag auf monatliches Kindergeld bei der CNSS",
      "Заявление на ежемесячные семейные пособия в CNSS"
    ),
    desc: D7(
      "استمارة تقدمها الأم أو الوصية للحصول على التعويضات العائلية الشهرية عن الأطفال في الكفالة.",
      "Formulaire déposé par la mère ou la tutrice pour percevoir les allocations mensuelles des enfants à charge.",
      "Form filed by the mother or guardian to receive monthly allowances for dependent children.",
      "Formulario presentado por la madre o tutora para recibir las asignaciones mensuales de los hijos a cargo.",
      "Modulo presentato dalla madre o tutrice per ricevere gli assegni mensili dei figli a carico.",
      "Formular, das Mutter oder Vormünderin einreicht, um monatliche Zuschüsse für Kinder zu erhalten.",
      "Форма, подаваемая матерью или опекуном для получения ежемесячных пособий на детей."
    ),
    where: W7(
      "أقرب وكالة CNSS أو منصة maCNSS",
      "Agence CNSS la plus proche ou portail maCNSS",
      "Nearest CNSS agency or the maCNSS portal",
      "Agencia CNSS más cercana o portal maCNSS",
      "Agenzia CNSS più vicina o portale maCNSS",
      "Nächstgelegene CNSS-Agentur oder Portal maCNSS",
      "Ближайшее агентство CNSS или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["allocations familiales", "تعويضات عائلية", "CNSS", "أطفال", "family allowances", "كفالة"],
    popular: true,
  },
  {
    id: "cnss-prestation-mariage",
    cat: "cnss",
    title: T7(
      "طلب التعويض عن الزواج من الضمان الاجتماعي",
      "Demande de prestation de mariage à la CNSS",
      "Application for the marriage benefit from the CNSS",
      "Solicitud de la prestación de matrimonio de la CNSS",
      "Domanda di prestazione di matrimonio alla CNSS",
      "Antrag auf Heiratsleistung der CNSS",
      "Заявление на пособие при бракосочетании в CNSS"
    ),
    desc: D7(
      "يلتمس المعني بالأمر عبر هذه الاستمارة التعويض المقطوع الممنوح عند زواج أحد ذوي الحقوق.",
      "Le bénéficiaire y réclame la prestation forfaitaire servie lors du mariage d'un ayant droit.",
      "The claimant requests the lump-sum benefit granted when a beneficiary marries.",
      "El beneficiario solicita la prestación única concedida cuando un beneficiario se casa.",
      "Il beneficiario chiede la prestazione una tantum erogata quando un avente diritto si sposa.",
      "Der Berechtigte beantragt die Pauschalleistung, die bei der Heirat eines Berechtigten gezahlt wird.",
      "Заявитель просит разовую выплату, назначаемую при вступлении иждивенца в брак."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر سكنى المؤمن له أو منصة maCNSS",
      "Agence CNSS du lieu de résidence de l'assuré ou portail maCNSS",
      "CNSS agency of the insured's residence or the maCNSS portal",
      "Agencia CNSS del domicilio del asegurado o portal maCNSS",
      "Agenzia CNSS del domicilio dell'assicurato o portale maCNSS",
      "CNSS-Agentur am Wohnort des Versicherten oder Portal maCNSS",
      "Агентство CNSS по месту жительства застрахованного или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["منحة الزواج", "prestation de mariage", "CNSS", "زواج", "mariage", "ayants droit"],
  },
  {
    id: "cnss-prestation-deces-ayant-droit",
    cat: "cnss",
    title: T7(
      "طلب التعويض العائلي عن وفاة ذي حقوق",
      "Demande de prestation de décès d'un ayant droit (branche famille)",
      "Application for the death benefit for a beneficiary (family branch)",
      "Solicitud de la prestación por fallecimiento de un beneficiario (rama familiar)",
      "Domanda di prestazione di morte di un avente diritto (ramo famiglia)",
      "Antrag auf Sterbegeld für einen Berechtigten (Familienzweig)",
      "Заявление о пособии в связи со смертью иждивенца (семейная ветвь)"
    ),
    desc: D7(
      "طلب يستفيد به المؤمن له من تعويض عائلي عند وفاة الزوج أو أحد الأبناء ذوي الحقوق.",
      "Demande permettant à l'assuré d'obtenir une prestation familiale au décès du conjoint ou d'un enfant.",
      "Application allowing the insured to obtain a family benefit on the death of a spouse or child.",
      "Solicitud que permite al asegurado obtener una prestación familiar por el fallecimiento del cónyuge o de un hijo.",
      "Domanda che consente all'assicurato di ottenere una prestazione familiare per il decesso del coniuge o di un figlio.",
      "Antrag, mit dem der Versicherte beim Tod von Ehepartner oder Kind eine Familienleistung erhält.",
      "Заявление, по которому застрахованный получает семейную выплату при смерти супруга или ребёнка."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع عبر منصة maCNSS",
      "Agence CNSS la plus proche ou dépôt via le portail maCNSS",
      "Nearest CNSS agency or filing via the maCNSS portal",
      "Agencia CNSS más cercana o presentación vía maCNSS",
      "Agenzia CNSS più vicina o invio tramite il portale maCNSS",
      "Nächstgelegene CNSS-Agentur oder Einreichung über maCNSS",
      "Ближайшее агентство CNSS или подача через портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["تعويض الوفاة", "prestation de décès", "CNSS", "ذو حقوق", "وفاة", "ayants droit"],
  },
  {
    id: "cnss-indemnite-conge-naissance",
    cat: "cnss",
    title: T7(
      "طلب التعويض عن رخصة الولادة للأجير الأب أو الأم",
      "Demande d'indemnité de congé de naissance à la CNSS",
      "Application for birth-leave pay from the CNSS",
      "Solicitud de indemnización por permiso de nacimiento de la CNSS",
      "Domanda di indennità per congedo di nascita alla CNSS",
      "Antrag auf Geburtsurlaubsentschädigung bei der CNSS",
      "Заявление на оплату отпуска при рождении ребёнка в CNSS"
    ),
    desc: D7(
      "استمارة للحصول على التعويض اليومي عن رخصة الولادة المخولة قانوناً للأجير الأب أو الأم.",
      "Formulaire pour percevoir l'indemnité journalière du congé de naissance prévu au profit du salarié parent.",
      "Form to receive the daily allowance for the statutory birth leave granted to the employee-parent.",
      "Formulario para percibir la indemnización diaria del permiso de nacimiento previsto para el trabajador progenitor.",
      "Modulo per percepire l'indennità giornaliera del congedo di nascita previsto per il lavoratore genitore.",
      "Formular zum Erhalt des Taggeldes für den gesetzlichen Geburtsurlaub des Arbeitnehmer-Elternteils.",
      "Форма для получения ежедневного пособия за предусмотренный законом отпуск при рождении ребёнка."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر المشغل أو منصة maCNSS",
      "Agence CNSS de l'employeur ou portail maCNSS",
      "Employer's CNSS agency or the maCNSS portal",
      "Agencia CNSS del empleador o portal maCNSS",
      "Agenzia CNSS del datore di lavoro o portale maCNSS",
      "CNSS-Agentur des Arbeitgebers oder Portal maCNSS",
      "Агентство CNSS работодателя или портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["رخصة الولادة", "congé de naissance", "CNSS", "تعويض", "indemnité", "birth leave"],
  },
  {
    id: "cnss-declaration-grossesse",
    cat: "cnss",
    title: T7(
      "التصريح بالحمل لدى الصندوق الوطني للضمان الاجتماعي",
      "Déclaration de grossesse à la CNSS",
      "Pregnancy declaration to the CNSS",
      "Declaración de embarazo a la CNSS",
      "Dichiarazione di gravidanza alla CNSS",
      "Schwangerschaftsmeldung an die CNSS",
      "Уведомление о беременности в CNSS"
    ),
    desc: D7(
      "تصريح طبي تودعه المؤمن لها لتوثيق حملها وضمان متابعة حقوقها في التعويضات المرتبطة بالأمومة.",
      "Déclaration médicale déposée par l'assurée pour documenter sa grossesse et sécuriser ses prestations maternité.",
      "Medical declaration filed by the insured woman to document the pregnancy and secure maternity benefits.",
      "Declaración médica presentada por la asegurada para documentar el embarazo y asegurar prestaciones de maternidad.",
      "Dichiarazione medica presentata dall'assicurata per documentare la gravidanza e tutelare le prestazioni.",
      "Ärztliche Meldung der Versicherten zur Dokumentation der Schwangerschaft und Sicherung der Mutterschaftsleistungen.",
      "Медицинское уведомление, подаваемое застрахованной для подтверждения беременности и защиты выплат."
    ),
    where: W7(
      "أقرب وكالة CNSS مرفقة بشهادة طبية أو عبر منصة maCNSS",
      "Agence CNSS la plus proche avec certificat médical ou via maCNSS",
      "Nearest CNSS agency with a medical certificate or via maCNSS",
      "Agencia CNSS más cercana con certificado médico o vía maCNSS",
      "Agenzia CNSS più vicina con certificato medico oppure via maCNSS",
      "Nächstgelegene CNSS-Agentur mit ärztlichem Attest oder über maCNSS",
      "Ближайшее агентство CNSS с медицинской справкой или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["التصريح بالحمل", "déclaration de grossesse", "CNSS", "حمل", "grossesse", "maternité"],
  },
  {
    id: "cnss-ajout-enfant-adopte-allocations",
    cat: "cnss",
    title: T7(
      "طلب إضافة طفل في الكفالة إلى التعويضات العائلية",
      "Demande d'ajout d'un enfant adopté aux allocations familiales",
      "Application to add an adopted child to family allowances",
      "Solicitud de adición de un hijo adoptado a las asignaciones familiares",
      "Domanda di aggiunta di un figlio adottivo agli assegni familiari",
      "Antrag auf Aufnahme eines Adoptivkindes in das Kindergeld",
      "Заявление о включении усыновлённого ребёнка в семейные пособия"
    ),
    desc: D7(
      "يلتمس المؤمن له عبر هذا الطلب إدراج الطفل المكفول ضمن أبنائه المستفيدين من التعويضات العائلية.",
      "L'assuré y demande l'inscription de l'enfant recueilli en kafala parmi ses enfants ouvrant droit aux allocations.",
      "The insured requests that a child taken in under kafala be registered among those eligible for allowances.",
      "El asegurado solicita la inscripción del niño acogido en kafala entre los que dan derecho a las asignaciones.",
      "L'assicurato chiede l'iscrizione del bambino accolto in kafala tra quelli che danno diritto agli assegni.",
      "Der Versicherte beantragt, ein in Kafala aufgenommenes Kind als kindergeldberechtigt eintragen zu lassen.",
      "Застрахованный просит включить ребёнка, взятого на кафалу, в число получателей пособий."
    ),
    where: W7(
      "أقرب وكالة CNSS مع الحكم القضائي بالكفالة أو منصة maCNSS",
      "Agence CNSS la plus proche avec le jugement de kafala ou maCNSS",
      "Nearest CNSS agency with the kafala court order or maCNSS",
      "Agencia CNSS más cercana con la sentencia de kafala o maCNSS",
      "Agenzia CNSS più vicina con la sentenza di kafala oppure maCNSS",
      "Nächstgelegene CNSS-Agentur mit Kafala-Urteil oder maCNSS",
      "Ближайшее агентство CNSS с решением суда о кафале или maCNSS"
    ),
    authority: "cnss",
    keywords: ["كفالة", "adoption", "allocations familiales", "kafala", "CNSS", "طفل مكفول"],
  },
  {
    id: "cnss-prolongation-allocations-formation",
    cat: "cnss",
    title: T7(
      "طلب تمديد التعويضات العائلية لطفل يواصل الدراسة أو التكوين",
      "Demande de maintien des allocations familiales pour enfant en formation",
      "Application to extend family allowances for a child in training",
      "Solicitud de prórroga de asignaciones familiares por hijo en formación",
      "Domanda di prolungamento degli assegni familiari per figlio in formazione",
      "Antrag auf Verlängerung des Kindergeldes für ein Kind in Ausbildung",
      "Заявление о продлении семейного пособия на ребёнка в обучении"
    ),
    desc: D7(
      "طلب لمواصلة صرف التعويضات العائلية عن طفل تجاوز السن القانوني لمواصلته دراسته أو تدريبه المهني.",
      "Demande de poursuite du versement des allocations pour un enfant dépassant l'âge légal poursuivant études ou apprentissage.",
      "Application to keep paying allowances for a child past the legal age who continues studies or apprenticeship.",
      "Solicitud para seguir pagando asignaciones por un hijo que supera la edad legal y continúa estudios o aprendizaje.",
      "Domanda per continuare a erogare gli assegni per un figlio oltre l'età legale che prosegue studi o apprendistato.",
      "Antrag auf Weiterzahlung des Kindergeldes für ein über das gesetzliche Alter hinaus in Ausbildung befindliches Kind.",
      "Заявление о продолжении выплат на ребёнка старше установленного возраста, продолжающего обучение."
    ),
    where: W7(
      "أقرب وكالة CNSS مع شهادة مدرسية أو تدريبية",
      "Agence CNSS la plus proche avec un certificat de scolarité ou d'apprentissage",
      "Nearest CNSS agency with a school or apprenticeship certificate",
      "Agencia CNSS más cercana con certificado escolar o de aprendiz",
      "Agenzia CNSS più vicina con certificato scolastico o di apprendistato",
      "Nächstgelegene CNSS-Agentur mit Schul- oder Lehrbescheinigung",
      "Ближайшее агентство CNSS со справкой об учёбе или стажировке"
    ),
    authority: "cnss",
    keywords: ["تمديد التعويضات", "maintien allocations", "CNSS", "شهادة مدرسية", "certificat de scolarité", "طالب"],
  },
  {
    id: "cnss-versement-allocations-tuteur",
    cat: "cnss",
    title: T7(
      "طلب صرف التعويضات العائلية لفائدة الأب أو الوصي القانوني",
      "Demande de versement des allocations familiales au père ou au tuteur",
      "Application for payment of family allowances to the father or guardian",
      "Solicitud de pago de asignaciones familiares al padre o tutor",
      "Domanda di pagamento degli assegni familiari al padre o al tutore",
      "Antrag auf Auszahlung des Kindergeldes an Vater oder Vormund",
      "Заявление о выплате семейных пособий отцу или опекуну"
    ),
    desc: D7(
      "استمارة لنقل صرف التعويضات العائلية إلى الأب أو الوصي عند وفاة الأم أو الطلاق أو فقدانها الأهلية.",
      "Formulaire transférant le versement des allocations au père ou au tuteur en cas de décès, divorce ou incapacité de la mère.",
      "Form transferring allowance payments to the father or guardian upon the mother's death, divorce or incapacity.",
      "Formulario que transfiere el pago de las asignaciones al padre o tutor por fallecimiento, divorcio o incapacidad de la madre.",
      "Modulo che trasferisce il pagamento degli assegni al padre o al tutore in caso decesso, divorzio o incapacità della madre.",
      "Formular zur Überleitung der Kindergeldzahlung an Vater oder Vormund bei Tod, Scheidung oder Unfähigkeit der Mutter.",
      "Форма о перенаправлении пособий отцу или опекуну в случае смерти, развода или недееспособности матери."
    ),
    where: W7(
      "أقرب وكالة CNSS مع الوثائق المثبتة للوضعية الجديدة",
      "Agence CNSS la plus proche avec les pièces justificatives de la situation",
      "Nearest CNSS agency with documents proving the situation",
      "Agencia CNSS más cercana con los documentos que acreditan la situación",
      "Agenzia CNSS più vicina con i documenti comprovanti la situazione",
      "Nächstgelegene CNSS-Agentur mit Nachweisen der Situation",
      "Ближайшее агентство CNSS с документами, подтверждающими ситуацию"
    ),
    authority: "cnss",
    keywords: ["صرف التعويضات", "versement allocations", "CNSS", "وصي", "tuteur", "divorce"],
  },
  {
    id: "cnss-reprise-versement-allocations",
    cat: "cnss",
    title: T7(
      "طلب استئناف صرف التعويضات العائلية بعد التوقف",
      "Demande de reprise du versement des allocations familiales",
      "Application to resume payment of family allowances",
      "Solicitud de reanudación del pago de las asignaciones familiares",
      "Domanda di ripresa del pagamento degli assegni familiari",
      "Antrag auf Wiederaufnahme der Kindergeldzahlung",
      "Заявление о возобновлении выплаты семейных пособий"
    ),
    desc: D7(
      "يلتمس المعني بالأمر استئناف صرف تعويضاته العائلية الموقوفة بسبب انقطاع في التصريح أو الوثائق.",
      "Le bénéficiaire sollicite la reprise des allocations suspendues pour interruption de déclaration ou de pièces.",
      "The claimant requests resumption of allowances suspended owing to a lapse in declarations or documents.",
      "El beneficiario solicita reanudar las asignaciones suspendidas por interrupción de declaraciones o documentos.",
      "Il beneficiario chiede la ripresa degli assegni sospesi per interruzione di denunce o documenti.",
      "Der Berechtigte beantragt die Wiederaufnahme wegen fehlender Meldungen oder Unterlagen ausgesetzter Leistungen.",
      "Заявитель просит возобновить пособия, приостановленные из-за пропуска отчётности или документов."
    ),
    where: W7(
      "أقرب وكالة CNSS أو طلب إلكتروني عبر منصة maCNSS",
      "Agence CNSS la plus proche ou demande en ligne via maCNSS",
      "Nearest CNSS agency or online request via maCNSS",
      "Agencia CNSS más cercana o solicitud en línea vía maCNSS",
      "Agenzia CNSS più vicina o richiesta online tramite maCNSS",
      "Nächstgelegene CNSS-Agentur oder Online-Antrag über maCNSS",
      "Ближайшее агентство CNSS или онлайн-заявка через maCNSS"
    ),
    authority: "cnss",
    keywords: ["استئناف الصرف", "reprise versement", "allocations familiales", "CNSS", "توقف", "suspension"],
  },

  // ─── Maternité & maladie / الأمومة والمرض ───
  {
    id: "cnss-indemnite-maternite",
    cat: "cnss",
    title: T7(
      "طلب التعويض اليومي عن رخصة الوضع (تعويض الأمومة)",
      "Demande d'indemnité journalière de maternité à la CNSS",
      "Application for daily maternity allowance from the CNSS",
      "Solicitud de subsidio diario de maternidad de la CNSS",
      "Domanda di indennità giornaliera di maternità alla CNSS",
      "Antrag auf tägliches Mutterschaftsgeld der CNSS",
      "Заявление на ежедневное пособие по материнству в CNSS"
    ),
    desc: D7(
      "طلب للحصول على التعويضات اليومية خلال رخصة الوضع القانونية للأجيرة المؤمن لها.",
      "Demande d'obtention des indemnités journalières pendant le congé légal d'accouchement de la salariée assurée.",
      "Application for daily allowances during the insured employee's statutory maternity leave.",
      "Solicitud de subsidios diarios durante el permiso legal de maternidad de la trabajadora asegurada.",
      "Domanda di indennità giornaliere durante il congedo legale di maternità della lavoratrice assicurata.",
      "Antrag auf Tagesgelder während des gesetzlichen Mutterschaftsurlaubs der versicherten Arbeitnehmerin.",
      "Заявление на ежедневные пособия в период законного отпуска по беременности и родам."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع عبر منصة maCNSS",
      "Agence CNSS la plus proche ou dépôt via maCNSS",
      "Nearest CNSS agency or filing via maCNSS",
      "Agencia CNSS más cercana o presentación vía maCNSS",
      "Agenzia CNSS più vicina o invio tramite maCNSS",
      "Nächstgelegene CNSS-Agentur oder Einreichung über maCNSS",
      "Ближайшее агентство CNSS или подача через maCNSS"
    ),
    authority: "cnss",
    keywords: ["تعويض الأمومة", "indemnité maternité", "CNSS", "رخصة الوضع", "maternité", "allocation"],
    popular: true,
  },
  {
    id: "cnss-conge-maternite",
    cat: "cnss",
    title: T7(
      "طلب الاستفادة من رخصة الأمومة المؤدى عنها",
      "Demande de congé de maternité indemnisé (CNSS)",
      "Application for paid maternity leave (CNSS)",
      "Solicitud de permiso de maternidad remunerado (CNSS)",
      "Domanda di congedo di maternità retribuito (CNSS)",
      "Antrag auf bezahlten Mutterschaftsurlaub (CNSS)",
      "Заявление на оплачиваемый отпуск по материнству (CNSS)"
    ),
    desc: D7(
      "طلب يثبت حق الأجيرة في رخصة أمومة قانونية مؤدى عنها من طرف الضمان الاجتماعي.",
      "Demande confirmant le droit de la salariée à un congé de maternité légal indemnisé par la sécurité sociale.",
      "Application confirming the employee's right to statutory maternity leave compensated by social security.",
      "Solicitud que confirma el derecho de la trabajadora a un permiso de maternidad legal pagado por la seguridad social.",
      "Domanda che conferma il diritto della lavoratrice a un congedo di maternità legale indennizzato dalla previdenza.",
      "Antrag, der den Anspruch der Arbeitnehmerin auf gesetzlichen, sozialversicherten Mutterschaftsurlaub belegt.",
      "Заявление, подтверждающее право работницы на оплачиваемый соцстрахованием отпуск по материнству."
    ),
    where: W7(
      "تودع لدى المشغل ثم لدى أقرب وكالة CNSS أو عبر maCNSS",
      "Déposée auprès de l'employeur puis de l'agence CNSS ou via maCNSS",
      "Filed with the employer then with the CNSS agency or via maCNSS",
      "Presentada ante el empleador y luego en la agencia CNSS o vía maCNSS",
      "Presentata al datore di lavoro poi all'agenzia CNSS o via maCNSS",
      "Beim Arbeitgeber und danach bei der CNSS-Agentur oder über maCNSS einzureichen",
      "Подаётся работодателю, затем в агентство CNSS или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["رخصة الأمومة", "congé maternité", "CNSS", "أمومة", "maternity leave", "وضع"],
  },
  {
    id: "cnss-prise-en-charge-hors-ville",
    cat: "cnss",
    title: T7(
      "طلب العلاج خارج مدينة السكنى (التغطية الصحية AMO)",
      "Demande de soins hors ville de résidence (AMO)",
      "Application for treatment outside the city of residence (AMO)",
      "Solicitud de atención sanitaria fuera de la ciudad de residencia (AMO)",
      "Domanda di cure fuori dalla città di residenza (AMO)",
      "Antrag auf Behandlung außerhalb des Wohnorts (AMO)",
      "Заявление на лечение вне города проживания (AMO)"
    ),
    desc: D7(
      "طلب للحصول على موافقة مسبقة للعلاج خارج مدينة السكنى لدى مؤسسة صحية أخرى معتمدة.",
      "Demande d'accord préalable pour se faire soigner hors de la ville de résidence dans un autre établissement agréé.",
      "Request for prior approval to receive care outside the city of residence at another approved facility.",
      "Solicitud de autorización previa para recibir atención fuera de la ciudad de residencia en otro centro autorizado.",
      "Richiesta di autorizzazione preventiva per cure fuori dalla città di residenza in una struttura convenzionata.",
      "Antrag auf vorherige Genehmigung für eine Behandlung außerhalb des Wohnorts in einer anderen zugelassenen Einrichtung.",
      "Заявление на предварительное согласование лечения вне города проживания в другом аккредитованном учреждении."
    ),
    where: W7(
      "أقرب وكالة CNSS أو عبر منصة maCNSS",
      "Agence CNSS la plus proche ou via le portail maCNSS",
      "Nearest CNSS agency or via the maCNSS portal",
      "Agencia CNSS más cercana o vía portal maCNSS",
      "Agenzia CNSS più vicina o tramite il portale maCNSS",
      "Nächstgelegene CNSS-Agentur oder über das Portal maCNSS",
      "Ближайшее агентство CNSS или через портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["خارج مدينة السكنى", "hors ville de résidence", "AMO", "CNSS", "soins", "prise en charge"],
  },
  {
    id: "cnss-demande-remplacante",
    cat: "cnss",
    title: T7(
      "طلب تشغيل عاملة بديلة أثناء رخصة الأمومة",
      "Demande de remplaçante pendant le congé de maternité",
      "Application to hire a replacement during maternity leave",
      "Solicitud de contratación de sustituta durante el permiso de maternidad",
      "Domanda di sostituta durante il congedo di maternità",
      "Antrag auf Einstellung einer Ersatzkraft während des Mutterschaftsurlaubs",
      "Заявление о найме замещающей работницы на период декретного отпуска"
    ),
    desc: D7(
      "إجراء يسمح للمشغل بتشغيل عاملة بديلة خلال رخصة أمومة أاجرته مع احترام القواعد المعمول بها.",
      "Procédure permettant à l'employeur d'embaucher une remplaçante durant le congé de maternité selon les règles en vigueur.",
      "Procedure allowing the employer to hire a replacement during an employee's maternity leave under the applicable rules.",
      "Procedimiento que permite al empleador contratar a una sustituta durante el permiso de maternidad conforme a las normas.",
      "Procedura che consente al datore di lavoro di assumere una sostituta durante il congedo di maternità secondo le regole vigenti.",
      "Verfahren, das dem Arbeitgeber die Einstellung einer Ersatzkraft während des Mutterschaftsurlaubs nach geltenden Regeln erlaubt.",
      "Процедура, позволяющая работодателю нанять замену на время декретного отпуска в соответствии с правилами."
    ),
    where: W7(
      "وكالة CNSS التابعة للمقاولة قبل بداية مهمة الاستبدال",
      "Agence CNSS de l'entreprise avant le début de la mission de remplacement",
      "Company's CNSS agency before the replacement assignment begins",
      "Agencia CNSS de la empresa antes de iniciar la sustitución",
      "Agenzia CNSS dell'azienda prima dell'inizio della sostituzione",
      "CNSS-Agentur des Unternehmens vor Beginn der Vertretung",
      "Агентство CNSS компании до начала замещения"
    ),
    authority: "cnss",
    keywords: ["عاملة بديلة", "remplaçante", "CNSS", "رخصة الأمومة", "remplacement", "استبدال"],
  },
  {
    id: "cnss-remboursement-frais-medicaux",
    cat: "cnss",
    title: T7(
      "طلب استرجاع المصاريف الطبية (AMO)",
      "Demande de remboursement de frais médicaux (AMO)",
      "Application for reimbursement of medical expenses (AMO)",
      "Solicitud de reembolso de gastos médicos (AMO)",
      "Domanda di rimborso delle spese mediche (AMO)",
      "Antrag auf Erstattung medizinischer Auslagen (AMO)",
      "Заявление о возмещении медицинских расходов (AMO)"
    ),
    desc: D7(
      "طلب لاسترجاع مصاريف العلاج والأدوية المؤداة مباشرة وفق تعرفة التغطية الصحية الإجبارية.",
      "Demande de restitution des frais de soins et de médicaments payés directement selon les tarifs AMO.",
      "Application for refund of care and medicine costs paid directly under AMO tariffs.",
      "Solicitud de devolución de gastos de atención y medicamentos pagados directamente según tarifas AMO.",
      "Domanda di rimborso delle spese sanitarie e farmaceutiche pagate direttamente secondo le tariffe AMO.",
      "Antrag auf Rückerstattung direkt bezahlter Behandlungs- und Medikamentenkosten nach AMO-Sätzen.",
      "Заявление на возврат расходов на лечение и лекарства, оплаченных напрямую по тарифам AMO."
    ),
    where: W7(
      "أقرب وكالة CNSS مع الفواتير ووثائق العلاج أو عبر maCNSS",
      "Agence CNSS la plus proche avec factures et feuilles de soins ou via maCNSS",
      "Nearest CNSS agency with invoices and care sheets or via maCNSS",
      "Agencia CNSS más cercana con facturas y hojas de atención o vía maCNSS",
      "Agenzia CNSS più vicina con fatture e fogli di cura oppure via maCNSS",
      "Nächstgelegene CNSS-Agentur mit Rechnungen und Krankenblättern oder über maCNSS",
      "Ближайшее агентство CNSS со счетами и листами лечения или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["استرجاع المصاريف", "remboursement", "AMO", "CNSS", "فواتير طبية", "frais médicaux"],
  },
  {
    id: "cnss-prise-en-charge-hospitalisation",
    cat: "cnss",
    title: T7(
      "طلب التكفل بمصاريف الاستشفاء لدى الضمان الاجتماعي",
      "Demande de prise en charge d'hospitalisation à la CNSS",
      "Application for hospitalisation coverage from the CNSS",
      "Solicitud de cobertura de hospitalización de la CNSS",
      "Domanda di copertura del ricovero ospedaliero alla CNSS",
      "Antrag auf Übernahme der Krankenhauskosten durch die CNSS",
      "Заявление об оплате госпитализации в CNSS"
    ),
    desc: D7(
      "طلب موافقة لتغطية مصاريف المستشفى والعمليات الجراحية المبررة طبياً للمؤمن له أو ذوي حقوقه.",
      "Demande d'accord couvrant les frais d'hôpital et d'intervention justifiés médicalement pour l'assuré ou ses ayants droit.",
      "Application for approval covering hospital and surgery costs medically justified for the insured or beneficiaries.",
      "Solicitud de autorización que cubre gastos hospitalarios y quirúrgicos justificados del asegurado o sus beneficiarios.",
      "Domanda di autorizzazione a coprire le spese ospedaliere e chirurgiche dell'assicurato o dei suoi aventi diritto.",
      "Antrag auf Genehmigung der medizinisch begründeten Krankenhaus- und Operationskosten für Versicherte oder Berechtigte.",
      "Заявление на согласование оплаты обоснованных расходов на стационар и операции застрахованного или иждивенцев."
    ),
    where: W7(
      "أقرب وكالة CNSS قبل الاستشفاء عند الإمكان أو عبر منصة maCNSS",
      "Agence CNSS la plus proche avant l'hospitalisation si possible, ou via maCNSS",
      "Nearest CNSS agency before admission where possible, or via maCNSS",
      "Agencia CNSS más cercana antes del ingreso cuando sea posible, o vía maCNSS",
      "Agenzia CNSS più vicina prima del ricovero ove possibile, oppure via maCNSS",
      "Nächstgelegene CNSS-Agentur vor der Aufnahme, wenn möglich, oder über maCNSS",
      "Ближайшее агентство CNSS до госпитализации, если возможно, или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["استشفاء", "hospitalisation", "CNSS", "AMO", "تكفل", "prise en charge"],
  },
  {
    id: "cnss-attestation-droits-amo",
    cat: "cnss",
    title: T7(
      "طلب شهادة الحقوق في التغطية الصحية الإجبارية (AMO)",
      "Demande d'attestation de droits AMO",
      "Application for an AMO entitlement certificate",
      "Solicitud de certificado de derechos AMO",
      "Domanda di attestazione di diritti AMO",
      "Antrag auf AMO-Berechtigungsbescheinigung",
      "Заявление о справке о правах AMO"
    ),
    desc: D7(
      "وثيقة تثبت الانتظام في التغطية الصحية وتطلب من المؤمن له عند العلاج أو الالتحاق بمؤسسة استشفائية.",
      "Document prouvant l'assiduité de la couverture maladie, exigé de l'assuré lors des soins ou d'une admission.",
      "Document proving active health coverage, required from the insured when seeking care or hospital admission.",
      "Documento que acredita la cobertura sanitaria activa, exigido al asegurado al recibir atención o ingreso.",
      "Documento che attesta la copertura malattia attiva, richiesto all'assicurato per cure o ricovero.",
      "Nachweis der bestehenden Krankenversicherung, der bei Behandlung oder Aufnahme verlangt wird.",
      "Документ, подтверждающий действующую медстраховку, требуется при обращении за лечением или поступлении."
    ),
    where: W7(
      "تحميل فوري من منصة maCNSS أو أقرب وكالة CNSS",
      "Téléchargement immédiat sur maCNSS ou agence CNSS la plus proche",
      "Immediate download on maCNSS or the nearest CNSS agency",
      "Descarga inmediata en maCNSS o agencia CNSS más cercana",
      "Scaricamento immediato su maCNSS o agenzia CNSS più vicina",
      "Sofortiger Download auf maCNSS oder nächstgelegene CNSS-Agentur",
      "Мгновенное скачивание на maCNSS или ближайшее агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["شهادة الحقوق", "attestation droits", "AMO", "maCNSS", "تغطية صحية", "couverture"],
  },

  // ─── Accidents du travail & maladies professionnelles / حوادث الشغل والأمراض المهنية ───
  {
    id: "cnss-declaration-accident-travail",
    cat: "cnss",
    title: T7(
      "التصريح بحادثة الشغل من طرف المشغل",
      "Déclaration d'accident du travail par l'employeur",
      "Occupational accident declaration by the employer",
      "Declaración de accidente de trabajo por el empleador",
      "Denuncia di infortunio sul lavoro da parte del datore di lavoro",
      "Anzeige eines Arbeitsunfalls durch den Arbeitgeber",
      "Заявление о несчастном случае на работе от работодателя"
    ),
    desc: D7(
      "تصريح إلزامي يودعه المشغل لدى الضمان الاجتماعي حول حادثة شغل وقعت لأجيره خلال العمل.",
      "Déclaration obligatoire déposée par l'employeur auprès de la CNSS pour un accident survenu à son salarié.",
      "Mandatory declaration filed by the employer with the CNSS for an accident befalling an employee.",
      "Declaración obligatoria presentada por el empleador ante la CNSS por un accidente de su trabajador.",
      "Denuncia obbligatoria presentata dal datore di lavoro alla CNSS per un infortunio del proprio dipendente.",
      "Pflichtanzeige des Arbeitgebers an die CNSS über einen Unfall seines Arbeitnehmers.",
      "Обязательное заявление работодателя в CNSS о несчастном случае с работником."
    ),
    where: W7(
      "أقرب وكالة CNSS في الأجل القانوني أو عبر منصة maCNSS",
      "Agence CNSS la plus proche dans le délai légal ou via maCNSS",
      "Nearest CNSS agency within the legal deadline or via maCNSS",
      "Agencia CNSS más cercana dentro del plazo legal o vía maCNSS",
      "Agenzia CNSS più vicina entro il termine di legge oppure via maCNSS",
      "Nächstgelegene CNSS-Agentur fristgerecht oder über maCNSS",
      "Ближайшее агентство CNSS в установленный срок или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["حادثة الشغل", "accident du travail", "CNSS", "AT", "تصريح", "déclaration"],
    popular: true,
  },
  {
    id: "cnss-declaration-accident-victime",
    cat: "cnss",
    title: T7(
      "التصريح بحادثة الشغل من طرف الضحية أو ذويها",
      "Déclaration d'accident du travail par la victime ou ses proches",
      "Occupational accident declaration by the victim or relatives",
      "Declaración de accidente de trabajo por la víctima o sus familiares",
      "Denuncia di infortunio sul lavoro da parte della vittima o dei familiari",
      "Anzeige eines Arbeitsunfalls durch das Opfer oder dessen Angehörige",
      "Заявление о несчастном случае от пострадавшего или его близких"
    ),
    desc: D7(
      "تصريح يقدمه الأجير المتضرر أو ورثته عند تقاعس المشغل عن التصريح بحادثة الشغل.",
      "Déclaration déposée par le salarié lésé ou ses ayants droit lorsque l'employeur omet de déclarer l'accident.",
      "Declaration filed by the injured employee or heirs when the employer fails to report the accident.",
      "Declaración presentada por el trabajador lesionado o sus herederos cuando el empleador omite declarar el accidente.",
      "Denuncia presentata dal dipendente infortunato o dai suoi eredi quando il datore di lavoro omette la segnalazione.",
      "Anzeige des verletzten Arbeitnehmers oder seiner Erben, wenn der Arbeitgeber die Meldung unterlässt.",
      "Заявление пострадавшего работника или наследников, если работодатель не сообщил о происшествии."
    ),
    where: W7(
      "أقرب وكالة CNSS مرفقة بشهادة طبية وتفاصيل الحادثة",
      "Agence CNSS la plus proche avec certificat médical et circonstances de l'accident",
      "Nearest CNSS agency with a medical certificate and accident details",
      "Agencia CNSS más cercana con certificado médico y detalles del accidente",
      "Agenzia CNSS più vicina con certificato medico e dinamica dell'infortunio",
      "Nächstgelegene CNSS-Agentur mit ärztlichem Attest und Unfallhergang",
      "Ближайшее агентство CNSS с медсправкой и обстоятельствами происшествия"
    ),
    authority: "cnss",
    keywords: ["حادثة الشغل", "victime", "CNSS", "ضحية", "accident travail", "ورثة"],
  },
  {
    id: "cnss-prise-en-charge-soins-at",
    cat: "cnss",
    title: T7(
      "طلب التكفل بمصاريف العلاج بسبب حادثة الشغل",
      "Demande de prise en charge des soins d'un accident du travail",
      "Application for coverage of occupational accident treatment",
      "Solicitud de cobertura de la atención por accidente de trabajo",
      "Domanda di copertura delle cure per infortunio sul lavoro",
      "Antrag auf Übernahme der Behandlungskosten eines Arbeitsunfalls",
      "Заявление об оплате лечения при несчастном случае на работе"
    ),
    desc: D7(
      "طلب للاستفادة من العلاج المجاني على نفقة الصندوق لدى الطبيب المعين بعد حادثة شغل معترف بها.",
      "Demande de soins gratuits à la charge de la CNSS auprès du médecin désigné après un accident reconnu.",
      "Application for free treatment at the fund's expense from the designated physician after a recognised accident.",
      "Solicitud de atención gratuita a cargo de la CNSS ante el médico designado tras un accidente reconocido.",
      "Domanda di cure gratuite a carico della CNSS presso il medico designato dopo un infortunio riconosciuto.",
      "Antrag auf kostenlose Behandlung durch den benannten Arzt auf Kosten der CNSS nach anerkanntem Unfall.",
      "Заявление о бесплатном лечении у назначенного врача за счёт фонда после признанного случая."
    ),
    where: W7(
      "أقرب وكالة CNSS أو الطبيب المعين من طرف الصندوق",
      "Agence CNSS la plus proche ou le médecin désigné par la caisse",
      "Nearest CNSS agency or the physician designated by the fund",
      "Agencia CNSS más cercana o el médico designado por la caja",
      "Agenzia CNSS più vicina o il medico designato dalla cassa",
      "Nächstgelegene CNSS-Agentur oder der von der Kasse benannte Arzt",
      "Ближайшее агентство CNSS или врач, назначенный фондом"
    ),
    authority: "cnss",
    keywords: ["علاج حادثة الشغل", "soins AT", "CNSS", "تكفل", "prise en charge", "accident"],
  },
  {
    id: "cnss-rente-incapacite-permanente",
    cat: "cnss",
    title: T7(
      "طلب راتب العجز الدائم الناتج عن حادثة شغل أو مرض مهني",
      "Demande de rente pour incapacité permanente (AT/MP)",
      "Application for a permanent disability annuity (occupational accident/disease)",
      "Solicitud de renta por incapacidad permanente (AT/MP)",
      "Domanda di rendita per invalidità permanente (AT/MP)",
      "Antrag auf Rente bei dauernder Erwerbsminderung (Arbeitsunfall/Berufskrankheit)",
      "Заявление на ренту при постоянной нетрудоспособности (несчастный случай/профзаболевание)"
    ),
    desc: D7(
      "طلب راتب دوري يعوض الأجير عن عجزه الدائم الجزئي أو الكلي إثر حادثة شغل أو مرض مهني.",
      "Demande de rente périodique indemnisant l'incapacité permanente partielle ou totale suite à un AT/MP.",
      "Application for a periodic annuity compensating permanent partial or total disability following an occupational accident.",
      "Solicitud de renta periódica que indemniza la incapacidad permanente parcial o total tras un AT/MP.",
      "Domanda di rendita periodica che indennizza l'invalidità permanente parziale o totale conseguente a un AT/MP.",
      "Antrag auf periodische Rente für dauernde teilweise oder völlige Erwerbsminderung nach Arbeitsunfall oder Berufskrankheit.",
      "Заявление на периодическую ренту за постоянную частичную или полную нетрудоспособность после несчастного случая."
    ),
    where: W7(
      "أقرب وكالة CNSS بعد قرار الطبيب الخبير المعين من الصندوق",
      "Agence CNSS la plus proche après l'avis du médecin expert désigné par la caisse",
      "Nearest CNSS agency after the opinion of the fund's appointed expert physician",
      "Agencia CNSS más cercana tras el dictamen del médico perito designado por la caja",
      "Agenzia CNSS più vicina dopo il parere del medico perito designato dalla cassa",
      "Nächstgelegene CNSS-Agentur nach Gutachten des von der Kasse benannten Sachverständigenarztes",
      "Ближайшее агентство CNSS после заключения назначенного фондом врача-эксперта"
    ),
    authority: "cnss",
    keywords: ["راتب العجز", "rente incapacité", "AT", "MP", "CNSS", "عجز دائم"],
  },
  {
    id: "cnss-reclamation-delai-at",
    cat: "cnss",
    title: T7(
      "شكاية بشأن تأخر معالجة ملف حادثة الشغل",
      "Réclamation pour retard de traitement d'un dossier d'accident du travail",
      "Complaint about delayed processing of an occupational accident file",
      "Reclamación por retraso en la tramitación de un expediente de accidente de trabajo",
      "Reclamo per ritardo nella trattazione di una pratica di infortunio sul lavoro",
      "Beschwerde über verzögerte Bearbeitung eines Arbeitsunfallaktes",
      "Жалоба на затяжку обработки дела о несчастном случае"
    ),
    desc: D7(
      "شكاية توجه للصندوق للاستعلام عن أسباب تأخر البت في ملف حادثة الشغل والتعويضات المرتبطة بها.",
      "Réclamation adressée à la CNSS sur les motifs du retard de décision d'un dossier AT et de ses prestations.",
      "Complaint sent to the CNSS about the reasons for delayed ruling on an accident file and its benefits.",
      "Reclamación enviada a la CNSS sobre los motivos de la demora en resolver un expediente de AT y sus prestaciones.",
      "Reclamo inviato alla CNSS sui motivi del ritardo nel decidere una pratica di infortunio e le relative prestazioni.",
      "Beschwerde an die CNSS über die Gründe der verzögerten Entscheidung über einen Unfallakt und dessen Leistungen.",
      "Жалоба в CNSS о причинах задержки решения по делу о несчастном случае и выплатам."
    ),
    where: W7(
      "مصلحة الشكايات بوكالة CNSS المعنية أو عبر منصة maCNSS",
      "Service des réclamations de l'agence CNSS concernée ou via maCNSS",
      "Complaints service of the relevant CNSS agency or via maCNSS",
      "Servicio de reclamaciones de la agencia CNSS correspondiente o vía maCNSS",
      "Servizio reclami dell'agenzia CNSS competente oppure via maCNSS",
      "Reklamationsstelle der zuständigen CNSS-Agentur oder über maCNSS",
      "Служба жалоб соответствующего агентства CNSS или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["شكاية", "réclamation", "AT", "CNSS", "تأخر", "retard"],
  },
  {
    id: "cnss-attestation-accident-travail",
    cat: "cnss",
    title: T7(
      "طلب شهادة حادثة الشغل",
      "Demande d'attestation d'accident du travail",
      "Application for an occupational accident certificate",
      "Solicitud de certificado de accidente de trabajo",
      "Domanda di attestazione di infortunio sul lavoro",
      "Antrag auf Arbeitsunfallbescheinigung",
      "Заявление о справке о несчастном случае на работе"
    ),
    desc: D7(
      "يطلب الأجير أو ذووه هذه الشهادة لإثبات وقوع حادثة الشغل لدى الغير أو الإدارات الأخرى.",
      "Le salarié ou ses proches y demandent une attestation prouvant l'accident auprès des tiers ou administrations.",
      "The employee or relatives request a certificate proving the accident to third parties or administrations.",
      "El trabajador o sus familiares solicitan un certificado que acredite el accidente ante terceros o administraciones.",
      "Il dipendente o i familiari chiedono un'attestazione che provi l'infortunio a terzi o amministrazioni.",
      "Der Arbeitnehmer oder seine Angehörigen beantragen einen Nachweis des Unfalls gegenüber Dritten oder Behörden.",
      "Работник или его близкие запрашивают справку, подтверждающую происшествие для третьих лиц или ведомств."
    ),
    where: W7(
      "أقرب وكالة CNSS أو تحميل عبر منصة maCNSS عند الاقتضاء",
      "Agence CNSS la plus proche ou téléchargement via maCNSS le cas échéant",
      "Nearest CNSS agency or download via maCNSS where applicable",
      "Agencia CNSS más cercana o descarga vía maCNSS cuando proceda",
      "Agenzia CNSS più vicina o scaricamento tramite maCNSS ove previsto",
      "Nächstgelegene CNSS-Agentur oder Download über maCNSS, falls verfügbar",
      "Ближайшее агентство CNSS или скачивание через maCNSS, если доступно"
    ),
    authority: "cnss",
    keywords: ["شهادة حادثة الشغل", "attestation AT", "CNSS", "accident", "إثبات", "حادثة"],
  },
  {
    id: "cnss-declaration-maladie-professionnelle",
    cat: "cnss",
    title: T7(
      "التصريح بمرض مهني",
      "Déclaration de maladie professionnelle",
      "Occupational disease declaration",
      "Declaración de enfermedad profesional",
      "Denuncia di malattia professionale",
      "Anzeige einer Berufskrankheit",
      "Заявление о профессиональном заболевании"
    ),
    desc: D7(
      "تصريح يودعه المشغل أو الطبيب عند تشخيص مرض مهني ضمن الجدول الرسمي للأمراض المهنية.",
      "Déclaration déposée par l'employeur ou le médecin lors du diagnostic d'une maladie figurant au tableau officiel.",
      "Declaration filed by the employer or physician upon diagnosis of a disease listed in the official schedule.",
      "Declaración presentada por el empleador o el médico ante el diagnóstico de una enfermedad del cuadro oficial.",
      "Denuncia presentata dal datore di lavoro o dal medico alla diagnosi di una malattia del tabellino ufficiale.",
      "Anzeige des Arbeitgebers oder Arztes bei Diagnose einer im offiziellen Verzeichnis aufgeführten Krankheit.",
      "Заявление работодателя или врача при диагнозе заболевания из официального перечня."
    ),
    where: W7(
      "أقرب وكالة CNSS في الأجل القانوني مع التقرير الطبي",
      "Agence CNSS la plus proche dans le délai légal avec le rapport médical",
      "Nearest CNSS agency within the legal deadline with the medical report",
      "Agencia CNSS más cercana dentro del plazo legal con el informe médico",
      "Agenzia CNSS più vicina entro il termine di legge con il referto medico",
      "Nächstgelegene CNSS-Agentur fristgerecht mit dem ärztlichen Bericht",
      "Ближайшее агентство CNSS в установленный срок с медицинским заключением"
    ),
    authority: "cnss",
    keywords: ["مرض مهني", "maladie professionnelle", "MP", "CNSS", "تصريح", "déclaration"],
  },
  {
    id: "cnss-revision-aggravation-rente-at",
    cat: "cnss",
    title: T7(
      "طلب مراجعة راتب حادثة الشغل بسبب تفاقم الإصابة",
      "Demande de révision d'une rente AT en cas d'aggravation",
      "Application for revision of an accident annuity upon aggravation",
      "Solicitud de revisión de una renta por AT por agravamiento",
      "Domanda di revisione di una rendita AT per aggravamento",
      "Antrag auf Überprüfung einer Unfallrente bei Verschlimmerung",
      "Заявление о пересмотре ренты при ухудшении состояния"
    ),
    desc: D7(
      "يلتمس الضحية إعادة تقدير راتبه بعد تدهور حالته الصحية الناتجة عن حادثة الشغل.",
      "La victime sollicite la réévaluation de sa rente après aggravation de son état consécutif à l'accident.",
      "The victim requests reassessment of the annuity after worsening of the accident-related condition.",
      "La víctima solicita la reevaluación de su renta tras el agravamiento de su estado derivado del accidente.",
      "La vittima chiede la rivalutazione della rendita dopo il peggioramento delle condizioni post-infortunio.",
      "Das Opfer beantragt eine Neubewertung der Rente nach Verschlimmerung der unfallbedingten Beschwerden.",
      "Пострадавший просит пересчитать ренту после ухудшения состояния, вызванного происшествием."
    ),
    where: W7(
      "أقرب وكالة CNSS مع تقرير طبي حديث يثبت التفاقم",
      "Agence CNSS la plus proche avec un récent rapport médical attestant l'aggravation",
      "Nearest CNSS agency with a recent medical report evidencing the aggravation",
      "Agencia CNSS más cercana con un informe médico reciente que acredite el agravamiento",
      "Agenzia CNSS più vicina con un recente referto medico che attesti l'aggravamento",
      "Nächstgelegene CNSS-Agentur mit aktuellem ärztlichem Bericht über die Verschlimmerung",
      "Ближайшее агентство CNSS со свежей медсправкой об ухудшении состояния"
    ),
    authority: "cnss",
    keywords: ["مراجعة الراتب", "révision rente", "AT", "CNSS", "تفاقم", "aggravation"],
  },

  // ─── Invalidité & décès / العجز والوفاة ───
  {
    id: "cnss-pension-invalidite",
    cat: "cnss",
    title: T7(
      "طلب راتب العجز عن العمل (معاش العجز)",
      "Demande de pension d'invalidité à la CNSS",
      "Application for a disability pension from the CNSS",
      "Solicitud de pensión de invalidez de la CNSS",
      "Domanda di pensione di invalidità alla CNSS",
      "Antrag auf Invaliditätsrente bei der CNSS",
      "Заявление на пенсию по инвалидности в CNSS"
    ),
    desc: D7(
      "طلب راتب دوري للأجير العاجز نهائياً عن مزاولة عمله والمتوفر على مدد كافية من الاشتراك.",
      "Demande de rente périodique pour le salarié définitivement inapte au travail et justifiant des trimestres requis.",
      "Application for a periodic pension for the employee permanently unfit for work with the required contribution record.",
      "Solicitud de pensión periódica para el trabajador permanentemente incapaz con la cotización requerida.",
      "Domanda di pensione periodica per il dipendente permanentemente inabile con i contributi richiesti.",
      "Antrag auf laufende Rente für den dauerhaft arbeitsunfähigen Arbeitnehmer mit erforderlichen Beitragszeiten.",
      "Заявление на регулярную пенсию для работника, постоянно утратившего трудоспособность, при нужном стаже."
    ),
    where: W7(
      "أقرب وكالة CNSS مع الملف الطبي وشهادات العمل",
      "Agence CNSS la plus proche avec dossier médical et certificats de travail",
      "Nearest CNSS agency with a medical file and work certificates",
      "Agencia CNSS más cercana con expediente médico y certificados de trabajo",
      "Agenzia CNSS più vicina con cartella clinica e certificati di lavoro",
      "Nächstgelegene CNSS-Agentur mit Krankenakte und Arbeitsbescheinigungen",
      "Ближайшее агентство CNSS с медицинской картой и справками о работе"
    ),
    authority: "cnss",
    keywords: ["معاش العجز", "pension invalidité", "CNSS", "عجز", "invalidité", "راتب"],
    popular: true,
  },
  {
    id: "cnss-revision-taux-invalidite",
    cat: "cnss",
    title: T7(
      "طلب مراجعة نسبة العجز المقررة",
      "Demande de révision du taux d'invalidité",
      "Application for revision of the disability rate",
      "Solicitud de revisión del grado de invalidez",
      "Domanda di revisione del grado di invalidità",
      "Antrag auf Überprüfung des Invaliditätsgrades",
      "Заявление о пересмотре степени инвалидности"
    ),
    desc: D7(
      "يطلب المؤمن له إعادة تقييم نسبة عجزه عند تفاقم حالته الصحية بعد القرار الأولي للصندوق.",
      "L'assuré demande la réévaluation de son taux d'invalidité lorsque son état s'aggrave après la décision initiale.",
      "The insured asks for reassessment of the disability rate when the condition worsens after the initial decision.",
      "El asegurado pide la reevaluación de su grado de invalidez cuando su estado empeora tras la decisión inicial.",
      "L'assicurato chiede la rivalutazione del proprio grado di invalidità quando le condizioni peggiorano dopo la decisione iniziale.",
      "Der Versicherte beantragt eine Neubewertung seines Invaliditätsgrades bei Verschlechterung nach der Erstentscheidung.",
      "Застрахованный просит пересмотреть степень инвалидности при ухудшении состояния после первоначального решения."
    ),
    where: W7(
      "أقرب وكالة CNSS مع تقرير طبي حديث",
      "Agence CNSS la plus proche avec un rapport médical récent",
      "Nearest CNSS agency with a recent medical report",
      "Agencia CNSS más cercana con un informe médico reciente",
      "Agenzia CNSS più vicina con un recente referto medico",
      "Nächstgelegene CNSS-Agentur mit aktuellem ärztlichem Bericht",
      "Ближайшее агентство CNSS со свежей медсправкой"
    ),
    authority: "cnss",
    keywords: ["نسبة العجز", "taux invalidité", "CNSS", "مراجعة", "révision", "aggravation"],
  },
  {
    id: "cnss-capital-deces",
    cat: "cnss",
    title: T7(
      "طلب رأس المال المقطوع عن وفاة المؤمن له",
      "Demande de capital de décès de l'assuré (CNSS)",
      "Application for the death capital of the insured (CNSS)",
      "Solicitud del capital por fallecimiento del asegurado (CNSS)",
      "Domanda di capitale di morte dell'assicurato (CNSS)",
      "Antrag auf Sterbekapital des Versicherten (CNSS)",
      "Заявление на единовременную выплату в связи со смертью застрахованного"
    ),
    desc: D7(
      "طلب يقدمه ذوو الحقوق للحصول على المبلغ المقطوع المستحق عن وفاة المؤمن له.",
      "Demande déposée par les ayants droit pour obtenir le montant forfaitaire dû au décès de l'assuré.",
      "Application filed by the beneficiaries to obtain the lump sum due on the insured's death.",
      "Solicitud presentada por los beneficiarios para obtener el importe único debido por el fallecimiento del asegurado.",
      "Domanda presentata dagli aventi diritto per ottenere l'importo forfettario dovuto per il decesso dell'assicurato.",
      "Antrag der Berechtigten auf den bei Tod des Versicherten fälligen Pauschalbetrag.",
      "Заявление иждивенцев о получении паушальной суммы, причитающейся при смерти застрахованного."
    ),
    where: W7(
      "أقرب وكالة CNSS مع رسم الوفاة وشهادات الوراثة",
      "Agence CNSS la plus proche avec acte de décès et certificats d'héritier",
      "Nearest CNSS agency with the death certificate and heirship documents",
      "Agencia CNSS más cercana con el acta de defunción y los certificados de heredero",
      "Agenzia CNSS più vicina con atto di morte e certificati di erede",
      "Nächstgelegene CNSS-Agentur mit Sterbeurkunde und Erbennachweisen",
      "Ближайшее агентство CNSS со свидетельством о смерти и документами о наследовании"
    ),
    authority: "cnss",
    keywords: ["وفاة", "capital décès", "CNSS", "رأس المال", "ورثة", "ayants droit"],
  },
  {
    id: "cnss-pension-reversion",
    cat: "cnss",
    title: T7(
      "طلب راتب البقاء للزوج أو الزوجة بعد وفاة المؤمن له",
      "Demande de pension de réversion (conjoint survivant)",
      "Application for a survivor's pension (surviving spouse)",
      "Solicitud de pensión de reversión (cónyuge supérstite)",
      "Domanda di pensione ai superstiti (coniuge superstite)",
      "Antrag auf Hinterbliebenenrente (überlebender Ehegatte)",
      "Заявление на пенсию по потере кормильца (переживший супруг)"
    ),
    desc: D7(
      "طلب راتب دوري للزوج أو الزوجة الباقي على قيد الحياة بعد وفاة المؤمن له أو صاحب الراتب.",
      "Demande de rente périodique au profit du conjoint survivant après le décès de l'assuré ou pensionné.",
      "Application for a periodic annuity for the surviving spouse after the death of the insured or pensioner.",
      "Solicitud de renta periódica a favor del cónyuge supérstite tras el fallecimiento del asegurado o pensionista.",
      "Domanda di rendita periodica a favore del coniuge superstite dopo il decesso dell'assicurato o pensionato.",
      "Antrag auf laufende Rente für den überlebenden Ehegatten nach Tod des Versicherten oder Rentners.",
      "Заявление на регулярную ренту для пережившего супруга после смерти застрахованного или пенсионера."
    ),
    where: W7(
      "أقرب وكالة CNSS مع رسم الوفاة وعقد الزواج",
      "Agence CNSS la plus proche avec acte de décès et acte de mariage",
      "Nearest CNSS agency with the death certificate and marriage certificate",
      "Agencia CNSS más cercana con acta de defunción y certificado de matrimonio",
      "Agenzia CNSS più vicina con atto di morte e certificato di matrimonio",
      "Nächstgelegene CNSS-Agentur mit Sterbeurkunde und Heiratsurkunde",
      "Ближайшее агентство CNSS со свидетельством о смерти и о браке"
    ),
    authority: "cnss",
    keywords: ["راتب البقاء", "pension réversion", "CNSS", "أرملة", "survivant", "وفاة"],
  },
  {
    id: "cnss-rente-orphelin",
    cat: "cnss",
    title: T7(
      "طلب راتب اليتيم من الضمان الاجتماعي",
      "Demande de rente d'orphelin à la CNSS",
      "Application for an orphan's annuity from the CNSS",
      "Solicitud de renta de huérfano de la CNSS",
      "Domanda di rendita di orfano alla CNSS",
      "Antrag auf Waisenrente bei der CNSS",
      "Заявление на сиротскую ренту в CNSS"
    ),
    desc: D7(
      "طلب راتب لفائدة أبناء المؤمن له المتوفى إلى حين بلوغهم السن القانونية المحددة في النظام.",
      "Demande de rente au profit des enfants de l'assuré décédé jusqu'à l'âge limite prévu par le régime.",
      "Application for an annuity for the deceased insured's children up to the scheme's age limit.",
      "Solicitud de renta a favor de los hijos del asegurado fallecido hasta el límite de edad del régimen.",
      "Domanda di rendita a favore dei figli dell'assicurato deceduto fino al limite di età previsto.",
      "Antrag auf Rente für die Kinder des verstorbenen Versicherten bis zur Altersgrenze des Systems.",
      "Заявление на ренту для детей умершего застрахованного до предельного возраста по системе."
    ),
    where: W7(
      "أقرب وكالة CNSS مع رسم الوفاة ووثائق بنوة الأبناء",
      "Agence CNSS la plus proche avec acte de décès et filiation des enfants",
      "Nearest CNSS agency with the death certificate and children's filiation papers",
      "Agencia CNSS más cercana con acta de defunción y documentos de filiación",
      "Agenzia CNSS più vicina con atto di morte e atti di filiazione dei figli",
      "Nächstgelegene CNSS-Agentur mit Sterbeurkunde und Abstammungsnachweisen",
      "Ближайшее агентство CNSS со свидетельством о смерти и документами о родстве детей"
    ),
    authority: "cnss",
    keywords: ["راتب اليتيم", "rente orphelin", "CNSS", "يتيم", "orphelin", "pension"],
  },
  {
    id: "cnss-rente-orphelin-invalide",
    cat: "cnss",
    title: T7(
      "طلب تمديد راتب اليتيم المصاب بعاهة",
      "Demande de maintien de la rente d'orphelin invalide",
      "Application to maintain the annuity of a disabled orphan",
      "Solicitud de mantenimiento de la renta de huérfano inválido",
      "Domanda di mantenimento della rendita di orfano invalido",
      "Antrag auf Fortführung der Rente eines behinderten Waisenkindes",
      "Заявление о продлении ренты для сироты-инвалида"
    ),
    desc: D7(
      "طلب مواصلة صرف راتب اليتيم المصاب بعاهة تمنعه من الكسب بعد بلوغه السن القانونية.",
      "Demande de poursuite de la rente de l'orphelin atteint d'une infirmité l'empêchant de gagner sa vie.",
      "Application to continue the annuity of an orphan whose infirmity prevents earning a livelihood.",
      "Solicitud de continuación de la renta del huérfano cuya invalidez le impide ganarse la vida.",
      "Domanda di proseguimento della rendita dell'orfano la cui infermità gli impedisce di mantenersi.",
      "Antrag auf Fortzahlung der Rente für ein durch Gebrechen selbstunterhaltsunfähiges Waisenkind.",
      "Заявление о продолжении ренты сироте, чья болезнь мешает самостоятельному заработку."
    ),
    where: W7(
      "أقرب وكالة CNSS مع ملف طبي يثبت العاهة",
      "Agence CNSS la plus proche avec dossier médical attestant l'infirmité",
      "Nearest CNSS agency with a medical file attesting the infirmity",
      "Agencia CNSS más cercana con expediente médico que acredite la invalidez",
      "Agenzia CNSS più vicina con cartella clinica che attesti l'infermità",
      "Nächstgelegene CNSS-Agentur mit ärztlichem Nachweis der Beeinträchtigung",
      "Ближайшее агентство CNSS с медицинской картой, подтверждающей болезнь"
    ),
    authority: "cnss",
    keywords: ["يتيم معاق", "orphelin invalide", "CNSS", "عاهة", "rente", "تمديد"],
  },
  {
    id: "cnss-rente-ayants-cause",
    cat: "cnss",
    title: T7(
      "طلب راتب لمن كان يعولهم المؤمن له عند غياب الزوج والأبناء",
      "Demande de rente des ayants cause (à défaut de conjoint et d'orphelins)",
      "Application for an annuity by successors (in the absence of spouse and orphans)",
      "Solicitud de renta de los derechohabientes (a falta de cónyuge y huérfanos)",
      "Domanda di rendita degli aventi causa (in mancanza di coniuge e orfani)",
      "Antrag auf Rente der Rechtsnachfolger (bei Fehlen von Ehegatte und Waisen)",
      "Заявление на ренту правопреемников (при отсутствии супруга и сирот)"
    ),
    desc: D7(
      "طلب راتب لفائدة الأشخاص الذين كانوا فعلاً على نفقة المؤمن له عند انعدام المستحقين الآخرين.",
      "Demande de rente pour les personnes effectivement à la charge de l'assuré décédé en l'absence d'autres bénéficiaires.",
      "Application for an annuity for persons actually dependent on the deceased insured when no other beneficiaries exist.",
      "Solicitud de renta para personas efectivamente a cargo del asegurado fallecido en ausencia de otros beneficiarios.",
      "Domanda di rendita per le persone effettivamente a carico dell'assicurato deceduto in mancanza di altri beneficiari.",
      "Antrag auf Rente für tatsächlich vom verstorbenen Versicherten unterhaltene Personen, wenn keine anderen Berechtigten bestehen.",
      "Заявление на ренту для лиц, находившихся на иждивении умершего, при отсутствии других получателей."
    ),
    where: W7(
      "أقرب وكالة CNSS مع إثبات الإعالة والوفاة",
      "Agence CNSS la plus proche avec preuves de dépendance et de décès",
      "Nearest CNSS agency with proof of dependency and of the death",
      "Agencia CNSS más cercana con pruebas de dependencia y del fallecimiento",
      "Agenzia CNSS più vicina con prove di mantenimento e del decesso",
      "Nächstgelegene CNSS-Agentur mit Nachweisen der Unterhaltsabhängigkeit und des Todes",
      "Ближайшее агентство CNSS с подтверждением иждивения и смерти"
    ),
    authority: "cnss",
    keywords: ["ذوو الحقوق", "ayants cause", "CNSS", "راتب", "rente", "إعالة"],
  },

  // ─── Retraite / التقاعد ───
  {
    id: "cnss-retraite-anticipee",
    cat: "cnss",
    title: T7(
      "طلب التقاعد المبكر (معاش الشيخوخة قبل السن القانونية)",
      "Demande de retraite anticipée à la CNSS",
      "Application for early retirement from the CNSS",
      "Solicitud de jubilación anticipada de la CNSS",
      "Domanda di pensione anticipata alla CNSS",
      "Antrag auf vorgezogene Altersrente bei der CNSS",
      "Заявление на досрочную пенсию в CNSS"
    ),
    desc: D7(
      "طلب معاش شيخوخة قبل بلوغ السن القانونية للمؤمن له المتوفر على مدد التأمين المطلوبة.",
      "Demande de pension avant l'âge légal pour l'assuré justifiant des périodes d'assurance requises.",
      "Application for a pension before the legal age for an insured person with the required insurance periods.",
      "Solicitud de pensión antes de la edad legal para el asegurado que acredita los períodos requeridos.",
      "Domanda di pensione prima dell'età legale per l'assicurato in possesso dei periodi assicurativi richiesti.",
      "Antrag auf Rente vor dem gesetzlichen Alter für den Versicherten mit den geforderten Versicherungszeiten.",
      "Заявление на пенсию до установленного возраста для застрахованного с требуемым страховым стажем."
    ),
    where: W7(
      "أقرب وكالة CNSS أو إيداع إلكتروني عبر منصة maCNSS",
      "Agence CNSS la plus proche ou dépôt en ligne via maCNSS",
      "Nearest CNSS agency or online filing via maCNSS",
      "Agencia CNSS más cercana o presentación en línea vía maCNSS",
      "Agenzia CNSS più vicina o deposito online tramite maCNSS",
      "Nächstgelegene CNSS-Agentur oder Online-Einreichung über maCNSS",
      "Ближайшее агентство CNSS или онлайн-подача через maCNSS"
    ),
    authority: "cnss",
    keywords: ["تقاعد مبكر", "retraite anticipée", "CNSS", "معاش", "pension", "قبل السن"],
  },
  {
    id: "cnss-regularisation-periodes-assurance",
    cat: "cnss",
    title: T7(
      "طلب تسوية مدد التأمين غير المصرح بها",
      "Demande de régularisation de périodes d'assurance non déclarées",
      "Application to regularise undeclared insurance periods",
      "Solicitud de regularización de períodos de seguro no declarados",
      "Domanda di regolarizzazione di periodi assicurativi non denunciati",
      "Antrag auf Anerkennung nicht gemeldeter Versicherungszeiten",
      "Заявление о зачёте незадекларированных страховых периодов"
    ),
    desc: D7(
      "يلتمس الأجير تسوية مدد اشتغله التي لم يصرح بها مشغله حتى تحتسب في معاش تقاعده.",
      "Le salarié y demande la régularisation de ses périodes de travail non déclarées par l'employeur pour sa pension.",
      "The employee requests recognition of employment periods the employer never declared so they count toward the pension.",
      "El trabajador solicita el reconocimiento de períodos no declarados por el empleador para computar en su pensión.",
      "Il dipendente chiede il riconoscimento dei periodi non denunciati dal datore di lavoro per la pensione.",
      "Der Arbeitnehmer beantragt die Anerkennung der vom Arbeitgeber nicht gemeldeten Beschäftigungszeiten für die Rente.",
      "Работник просит признать периоды работы, не задекларированные работодателем, для расчёта пенсии."
    ),
    where: W7(
      "أقرب وكالة CNSS مع شهادات العمل وأدلة الأداء",
      "Agence CNSS la plus proche avec certificats de travail et justificatifs de paie",
      "Nearest CNSS agency with work certificates and pay evidence",
      "Agencia CNSS más cercana con certificados de trabajo y comprobantes de pago",
      "Agenzia CNSS più vicina con certificati di lavoro e prove di retribuzione",
      "Nächstgelegene CNSS-Agentur mit Arbeitsbescheinigungen und Zahlungsnachweisen",
      "Ближайшее агентство CNSS со справками о работе и подтверждениями оплаты"
    ),
    authority: "cnss",
    keywords: ["تسوية مدد", "régularisation périodes", "CNSS", "مدد التأمين", "carrière", "pension"],
  },
  {
    id: "cnss-totalisation-periodes-mre",
    cat: "cnss",
    title: T7(
      "طلب جمع مدد التأمين للمغاربة المقيمين بالخارج",
      "Demande de totalisation des périodes pour les MRE",
      "Application for aggregation of insurance periods for Moroccans abroad",
      "Solicitud de totalización de períodos para los marroquíes en el extranjero",
      "Domanda di totalizzazione dei periodi per i marocchini all'estero",
      "Antrag auf Zusammenrechnung der Versicherungszeiten für im Ausland lebende Marokkaner",
      "Заявление о суммировании страховых периодов для марокканцев за рубежом"
    ),
    desc: D7(
      "طلب لجمع مدد التأمين بالمغرب مع مدد العمل بدولة أجنبية مرتبطة باتفاقية للضمان الاجتماعي.",
      "Demande visant à cumuler les périodes marocaines et celles accomplies dans un pays lié par une convention.",
      "Application to combine Moroccan periods with those worked in a country bound by a social security agreement.",
      "Solicitud para combinar los períodos marroquíes con los trabajados en un país con convenio de seguridad social.",
      "Domanda per cumulare i periodi marocchini con quelli lavorati in un paese legato da convenzione.",
      "Antrag auf Zusammenführung marokkanischer Zeiten mit solchen in einem vertragsgebundenen Staat.",
      "Заявление об объединении марокканских периодов с отработанными в стране, связанной соглашением."
    ),
    where: W7(
      "أقرب وكالة CNSS بالمغرب أو عبر القنصلية ومنصة maCNSS",
      "Agence CNSS au Maroc ou via le consulat et le portail maCNSS",
      "CNSS agency in Morocco or via the consulate and the maCNSS portal",
      "Agencia CNSS en Marruecos o vía consulado y portal maCNSS",
      "Agenzia CNSS in Marocco o tramite il consolato e il portale maCNSS",
      "CNSS-Agentur in Marokko oder über das Konsulat und das Portal maCNSS",
      "Агентство CNSS в Марокко или через консульство и портал maCNSS"
    ),
    authority: "cnss",
    keywords: ["مدد بالخارج", "totalisation", "MRE", "CNSS", "اتفاقية", "convention"],
  },
  {
    id: "cnss-majoration-conjoint-charge",
    cat: "cnss",
    title: T7(
      "طلب الزيادة عن الزوج المكفول في معاش التقاعد",
      "Demande de majoration pour conjoint à charge",
      "Application for an increase for a dependent spouse",
      "Solicitud de incremento por cónyuge a cargo",
      "Domanda di maggiorazione per coniuge a carico",
      "Antrag auf Zuschlag für einen unterhaltenen Ehegatten",
      "Заявление о надбавке на иждивенца-супруга"
    ),
    desc: D7(
      "طلب زيادة نسبة معاش التقاعد بسبب تحمل صاحب الراتب نفقات زوجه المكفول.",
      "Demande d'augmentation du taux de pension en raison de la charge du conjoint à la retraite.",
      "Application for a higher pension rate on account of a dependent spouse at retirement.",
      "Solicitud de aumento del porcentaje de pensión por cónyuge dependiente en la jubilación.",
      "Domanda di aumento della quota di pensione per coniuge a carico al pensionamento.",
      "Antrag auf höheren Rentensatz wegen eines unterhaltenen Ehegatten im Ruhestand.",
      "Заявление о повышении размера пенсии из-за иждивенца-супруга на пенсии."
    ),
    where: W7(
      "أقرب وكالة CNSS عند تقديم طلب المعاش أو بعده",
      "Agence CNSS la plus proche lors de la demande de pension ou après",
      "Nearest CNSS agency when applying for the pension or afterwards",
      "Agencia CNSS más cercana al solicitar la pensión o después",
      "Agenzia CNSS più vicina al momento della domanda di pensione o dopo",
      "Nächstgelegene CNSS-Agentur bei Rentenantrag oder danach",
      "Ближайшее агентство CNSS при подаче на пенсию или позже"
    ),
    authority: "cnss",
    keywords: ["زيادة المعاش", "majoration conjoint", "CNSS", "زوج مكفول", "pension", "retraite"],
  },
  {
    id: "cnss-releve-carriere",
    cat: "cnss",
    title: T7(
      "طلب كشف المسار المهني (مستخرج مدد التأمين)",
      "Demande de relevé de carrière auprès de la CNSS",
      "Application for a career statement from the CNSS",
      "Solicitud de informe de carrera de la CNSS",
      "Domanda di estratto conto contributivo dalla CNSS",
      "Antrag auf Nachweis der Versicherungslaufbahn bei der CNSS",
      "Заявление о выписке страхового стажа в CNSS"
    ),
    desc: D7(
      "وثيقة تلخص مدد الاشتغال والأجور المصرح بها لمراجعة الحقوق في التقاعد.",
      "Document récapitulant les périodes d'emploi et salaires déclarés pour vérifier les droits à la retraite.",
      "Document summarising employment periods and declared wages to verify retirement entitlements.",
      "Documento que resume los períodos de empleo y salarios declarados para verificar los derechos de jubilación.",
      "Documento che riepiloga i periodi di lavoro e gli stipendi denunciati per verificare i diritti pensionistici.",
      "Übersicht der Beschäftigungszeiten und gemeldeten Löhne zur Prüfung der Rentenansprüche.",
      "Документ со сводкой периодов работы и задекларированных зарплат для проверки пенсионных прав."
    ),
    where: W7(
      "تحميل فوري من فضاء المؤمن له بمنصة maCNSS أو أقرب وكالة CNSS",
      "Téléchargement immédiat depuis l'espace assuré maCNSS ou agence CNSS",
      "Immediate download from the insured space on maCNSS or a CNSS agency",
      "Descarga inmediata desde el espacio del asegurado en maCNSS o agencia CNSS",
      "Scaricamento immediato dallo spazio assicurato su maCNSS o agenzia CNSS",
      "Sofortiger Download aus dem Versichertenbereich auf maCNSS oder CNSS-Agentur",
      "Мгновенное скачивание из кабинета застрахованного на maCNSS или агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["كشف المسار", "relevé de carrière", "maCNSS", "CNSS", "مدد", "carrière"],
  },
  {
    id: "cnss-certificat-vie-pensionne",
    cat: "cnss",
    title: T7(
      "شهادة الحياة السنوية لصاحب الراتب",
      "Certificat de vie annuel du pensionné (CNSS)",
      "Annual certificate of life for CNSS pensioners",
      "Certificado anual de vida del pensionista (CNSS)",
      "Certificato annuale di vita del pensionato (CNSS)",
      "Jährliche Lebensbescheinigung für CNSS-Rentner",
      "Ежегодная справка о жизни для пенсионера CNSS"
    ),
    desc: D7(
      "وثيقة دورية يثبت فيها صاحب الراتب حياته لضمان استمرار صرف معاشه.",
      "Document périodique par lequel le pensionné prouve son existence pour le maintien du versement.",
      "Periodic document in which the pensioner proves to be alive to keep receiving payments.",
      "Documento periódico con el que el pensionista acredita estar vivo para seguir cobrando.",
      "Documento periodico con cui il pensionato prova di essere in vita per continuare a percepire la rendita.",
      "Periodischer Nachweis des Rentners, am Leben zu sein, zur Weiterzahlung der Rente.",
      "Периодический документ, в котором пенсионер подтверждает, что жив, для продолжения выплат."
    ),
    where: W7(
      "أقرب وكالة CNSS أو السلطة الإدارية المحلية أو عبر maCNSS",
      "Agence CNSS, autorité locale ou via maCNSS",
      "CNSS agency, local authority or via maCNSS",
      "Agencia CNSS, autoridad local o vía maCNSS",
      "Agenzia CNSS, autorità locale oppure via maCNSS",
      "CNSS-Agentur, örtliche Behörde oder über maCNSS",
      "Агентство CNSS, местные органы или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["شهادة الحياة", "certificat de vie", "CNSS", "pensionné", "معاش", "راتب"],
  },
  {
    id: "cnss-changement-mode-paiement",
    cat: "cnss",
    title: T7(
      "طلب تغيير طريقة أداء المعاش",
      "Demande de changement du mode de paiement de la pension",
      "Application to change the pension payment method",
      "Solicitud de cambio del método de pago de la pensión",
      "Domanda di modifica della modalità di pagamento della pensione",
      "Antrag auf Änderung der Rentenzahlungsart",
      "Заявление об изменении способа выплаты пенсии"
    ),
    desc: D7(
      "طلب لتحويل أداء المعاش من طريقة إلى أخرى كالتحويل البنكي عوض الدفع النقدي.",
      "Demande de transfert du paiement de la pension vers un autre mode tel le virement bancaire.",
      "Application to switch pension payment to another method such as bank transfer.",
      "Solicitud para cambiar el pago de la pensión a otro método como la transferencia bancaria.",
      "Domanda per trasferire il pagamento della pensione a un'altra modalità come il bonifico.",
      "Antrag auf Umstellung der Rentenzahlung auf eine andere Weise, etwa Banküberweisung.",
      "Заявление о переводе выплаты пенсии на другой способ, например банковский перевод."
    ),
    where: W7(
      "أقرب وكالة CNSS أو تعديل عبر فضاء صاحب الراتب في maCNSS",
      "Agence CNSS la plus proche ou modification via l'espace pensionné de maCNSS",
      "Nearest CNSS agency or update via the pensioner space on maCNSS",
      "Agencia CNSS más cercana o modificación vía espacio pensionista de maCNSS",
      "Agenzia CNSS più vicina o modifica tramite lo spazio pensionato di maCNSS",
      "Nächstgelegene CNSS-Agentur oder Änderung über den Rentnerbereich auf maCNSS",
      "Ближайшее агентство CNSS или изменение в кабинете пенсионера на maCNSS"
    ),
    authority: "macnss",
    keywords: ["طريقة الأداء", "mode paiement", "CNSS", "معاش", "virement", "تحويل"],
  },
  {
    id: "cnss-attestation-non-pension",
    cat: "cnss",
    title: T7(
      "طلب شهادة عدم استفادة من معاش",
      "Demande d'attestation de non-pension (CNSS)",
      "Application for a certificate of non-receipt of a pension (CNSS)",
      "Solicitud de certificado de no pensión (CNSS)",
      "Domanda di attestazione di non pensione (CNSS)",
      "Antrag auf Bescheinigung des Nichtbezugs einer Rente (CNSS)",
      "Заявление о справке об отсутствии пенсии (CNSS)"
    ),
    desc: D7(
      "شهادة تثبت عدم استفادة المعني بالأمر من أي معاش لدى الضمان الاجتماعي لأغراض إدارية.",
      "Attestation prouvant que l'intéressé ne perçoit aucune pension de la CNSS à des fins administratives.",
      "Certificate proving the applicant receives no pension from the CNSS for administrative purposes.",
      "Certificado que acredita que el interesado no percibe pensión alguna de la CNSS.",
      "Attestazione che prova che l'interessato non percepisce alcuna pensione dalla CNSS.",
      "Bescheinigung, dass der Betroffene keine Rente von der CNSS bezieht.",
      "Справка о том, что заявитель не получает пенсию от CNSS, для административных целей."
    ),
    where: W7(
      "تحميل من منصة maCNSS أو طلبه من أقرب وكالة CNSS",
      "Téléchargement depuis maCNSS ou demande à l'agence CNSS la plus proche",
      "Download from maCNSS or request at the nearest CNSS agency",
      "Descarga desde maCNSS o solicitud en la agencia CNSS más cercana",
      "Scaricamento da maCNSS o richiesta all'agenzia CNSS più vicina",
      "Download über maCNSS oder Antrag bei der nächstgelegenen CNSS-Agentur",
      "Скачивание с maCNSS или запрос в ближайшем агентстве CNSS"
    ),
    authority: "macnss",
    keywords: ["شهادة عدم المعاش", "attestation non-pension", "CNSS", "معاش", "maCNSS", "pension"],
  },

  // ─── AMO Tadamon / التغطية الصحية تضامن ───
  {
    id: "cnss-tadamon-ajout-ayants-droit",
    cat: "cnss",
    title: T7(
      "طلب إضافة ذوي الحقوق إلى ملف AMO تضامن",
      "Demande d'ajout d'ayants droit au dossier AMO Tadamon",
      "Application to add beneficiaries to an AMO Tadamon file",
      "Solicitud de adición de beneficiarios al expediente AMO Tadamon",
      "Domanda di aggiunta di aventi diritto alla pratica AMO Tadamon",
      "Antrag auf Aufnahme von Berechtigten in den AMO-Tadamon-Akt",
      "Заявление о добавлении иждивенцев в дело AMO Tadamon"
    ),
    desc: D7(
      "طلب إدراج الزوج أو الأبناء ضمن ملف المستفيد من التغطية الصحية تضامن.",
      "Demande d'inscription du conjoint ou des enfants dans le dossier du bénéficiaire Tadamon.",
      "Application to enrol the spouse or children in the Tadamon beneficiary's file.",
      "Solicitud de inscripción del cónyuge o hijos en el expediente del beneficiario Tadamon.",
      "Domanda di iscrizione del coniuge o dei figli nella pratica del beneficiario Tadamon.",
      "Antrag auf Eintragung von Ehepartner oder Kindern im Tadamon-Akt des Begünstigten.",
      "Заявление о включении супруга или детей в дело получателя Tadamon."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة أو منصة amotadamon.ma",
      "Annexe administrative, caïdat ou portail amotadamon.ma",
      "Administrative annex, caïdat office or the amotadamon.ma portal",
      "Anexo administrativo, caïdat o portal amotadamon.ma",
      "Ufficio amministrativo locale, caïdat o portale amotadamon.ma",
      "Lokale Verwaltungsstelle, Caïdat oder Portal amotadamon.ma",
      "Местный административный орган, кайдат или портал amotadamon.ma"
    ),
    authority: "amotadamon",
    keywords: ["ذوو الحقوق", "ayants droit", "AMO Tadamon", "إضافة", "تضامن", "beneficiaries"],
  },
  {
    id: "cnss-tadamon-changement-situation",
    cat: "cnss",
    title: T7(
      "التصريح بتغير الوضعية العائلية أو المهنية بملف تضامن",
      "Déclaration de changement de situation (AMO Tadamon)",
      "Declaration of change of circumstances (AMO Tadamon)",
      "Declaración de cambio de situación (AMO Tadamon)",
      "Dichiarazione di cambio di situazione (AMO Tadamon)",
      "Meldung einer Veränderung der Verhältnisse (AMO Tadamon)",
      "Заявление об изменении обстоятельств (AMO Tadamon)"
    ),
    desc: D7(
      "تصريح بتحديث المعطيات عند تغير السكن أو الحالة العائلية أو المدخول للمستفيد من تضامن.",
      "Déclaration mettant à jour adresse, situation familiale ou revenus du bénéficiaire Tadamon.",
      "Declaration updating the address, family situation or income of a Tadamon beneficiary.",
      "Declaración que actualiza domicilio, situación familiar o ingresos del beneficiario Tadamon.",
      "Dichiarazione che aggiorna indirizzo, situazione familiare o reddito del beneficiario Tadamon.",
      "Meldung zur Aktualisierung von Adresse, Familienstand oder Einkommen des Tadamon-Begünstigten.",
      "Заявление об обновлении адреса, семейного положения или дохода получателя Tadamon."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة أو عبر منصة amotadamon.ma",
      "Annexe administrative, caïdat ou via amotadamon.ma",
      "Administrative annex, caïdat or via amotadamon.ma",
      "Anexo administrativo, caïdat o vía amotadamon.ma",
      "Ufficio amministrativo locale, caïdat oppure via amotadamon.ma",
      "Lokale Verwaltungsstelle, Caïdat oder über amotadamon.ma",
      "Местный административный орган, кайдат или через amotadamon.ma"
    ),
    authority: "amotadamon",
    keywords: ["تغير الوضعية", "changement situation", "AMO Tadamon", "تحديث", "RSU", "تضامن"],
  },
  {
    id: "cnss-tadamon-reclamation",
    cat: "cnss",
    title: T7(
      "شكاية في ملف التغطية الصحية تضامن",
      "Réclamation relative à l'AMO Tadamon",
      "Complaint regarding AMO Tadamon",
      "Reclamación sobre AMO Tadamon",
      "Reclamo relativo all'AMO Tadamon",
      "Beschwerde betreffend AMO Tadamon",
      "Жалоба по вопросам AMO Tadamon"
    ),
    desc: D7(
      "شكاية حول رفض التسجيل أو التكفل بالعلاج أو أخطاء في معطيات ملف تضامن.",
      "Réclamation portant sur un refus d'inscription, de prise en charge ou une erreur du dossier Tadamon.",
      "Complaint concerning refusal of enrolment or care coverage, or an error in the Tadamon file.",
      "Reclamación sobre la denegación de inscripción o cobertura, o un error del expediente Tadamon.",
      "Reclamo concernente il rifiuto di iscrizione o copertura, oppure un errore della pratica Tadamon.",
      "Beschwerde über verweigerte Anmeldung oder Kostenübernahme bzw. Fehler im Tadamon-Akt.",
      "Жалоба на отказ в регистрации или покрытии, либо на ошибку в деле Tadamon."
    ),
    where: W7(
      "منصة amotadamon.ma أو المديرية الإقليمية للصحة",
      "Portail amotadamon.ma ou direction provinciale de la santé",
      "amotadamon.ma portal or the provincial health directorate",
      "Portal amotadamon.ma o dirección provincial de salud",
      "Portale amotadamon.ma o direzione provinciale della sanità",
      "Portal amotadamon.ma oder Provinzialgesundheitsdirektion",
      "Портал amotadamon.ma или провинциальный директорат здравоохранения"
    ),
    authority: "amotadamon",
    keywords: ["شكاية تضامن", "réclamation Tadamon", "AMO", "تضامن", "complaint", "تغطية"],
  },
  {
    id: "cnss-tadamon-attestation-affiliation",
    cat: "cnss",
    title: T7(
      "طلب شهادة الانتماء إلى AMO تضامن",
      "Demande d'attestation d'affiliation AMO Tadamon",
      "Application for an AMO Tadamon affiliation certificate",
      "Solicitud de certificado de afiliación AMO Tadamon",
      "Domanda di attestazione di affiliazione AMO Tadamon",
      "Antrag auf AMO-Tadamon-Zugehörigkeitsbescheinigung",
      "Заявление о справке о принадлежности к AMO Tadamon"
    ),
    desc: D7(
      "شهادة تثبت انتفاع المعني بالأمر بالتغطية الصحية تضامن وتطلب عند العلاج أو الإجراءات الإدارية.",
      "Attestation prouvant la qualité de bénéficiaire Tadamon, demandée pour les soins ou les démarches.",
      "Certificate proving Tadamon beneficiary status, requested for care or administrative procedures.",
      "Certificado que acredita la condición de beneficiario Tadamon, requerido para atención o trámites.",
      "Attestazione che prova lo status di beneficiario Tadamon, richiesta per cure o pratiche.",
      "Bescheinigung des Tadamon-Begünstigtenstatus, etwa für Behandlungen oder Behördengänge.",
      "Справка о статусе получателя Tadamon, требуется для лечения или процедур."
    ),
    where: W7(
      "تحميل إلكتروني من منصة amotadamon.ma أو المرافق المختصة",
      "Téléchargement sur amotadamon.ma ou auprès des services compétents",
      "Download on amotadamon.ma or from the competent services",
      "Descarga en amotadamon.ma o ante los servicios competentes",
      "Scaricamento su amotadamon.ma o presso i servizi competenti",
      "Download auf amotadamon.ma oder bei den zuständigen Stellen",
      "Скачивание на amotadamon.ma или в компетентных службах"
    ),
    authority: "amotadamon",
    keywords: ["شهادة تضامن", "attestation Tadamon", "AMO", "انتماء", "affiliation", "تضامن"],
  },
  {
    id: "cnss-tadamon-renouvellement-dossier",
    cat: "cnss",
    title: T7(
      "طلب تجديد ملف AMO تضامن",
      "Demande de renouvellement du dossier AMO Tadamon",
      "Application for renewal of the AMO Tadamon file",
      "Solicitud de renovación del expediente AMO Tadamon",
      "Domanda di rinnovo della pratica AMO Tadamon",
      "Antrag auf Verlängerung des AMO-Tadamon-Aktes",
      "Заявление о продлении дела AMO Tadamon"
    ),
    desc: D7(
      "طلب تجديد الاشتراك السنوي في التغطية الصحية تضامن عند انتهاء صلاحية الملف.",
      "Demande de renouvellement annuel de l'adhésion Tadamon à l'expiration du dossier.",
      "Application for the annual renewal of Tadamon membership when the file expires.",
      "Solicitud de renovación anual de la adhesión Tadamon al expirar el expediente.",
      "Domanda di rinnovo annuale dell'adesione Tadamon alla scadenza della pratica.",
      "Antrag auf jährliche Verlängerung der Tadamon-Mitgliedschaft bei Ablauf des Aktes.",
      "Заявление о ежегодном продлении участия в Tadamon по истечении срока дела."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة أو منصة amotadamon.ma",
      "Annexe administrative, caïdat ou portail amotadamon.ma",
      "Administrative annex, caïdat office or the amotadamon.ma portal",
      "Anexo administrativo, caïdat o portal amotadamon.ma",
      "Ufficio amministrativo locale, caïdat o portale amotadamon.ma",
      "Lokale Verwaltungsstelle, Caïdat oder Portal amotadamon.ma",
      "Местный административный орган, кайдат или портал amotadamon.ma"
    ),
    authority: "amotadamon",
    keywords: ["تجديد تضامن", "renouvellement", "AMO Tadamon", "تضامن", "renewal", "ملف"],
  },
  {
    id: "cnss-tadamon-duplicata-carte",
    cat: "cnss",
    title: T7(
      "طلب نظير بطاقة AMO تضامن",
      "Demande de duplicata de la carte AMO Tadamon",
      "Application for a duplicate AMO Tadamon card",
      "Solicitud de duplicado de la tarjeta AMO Tadamon",
      "Domanda di duplicato della tessera AMO Tadamon",
      "Antrag auf Duplikat der AMO-Tadamon-Karte",
      "Заявление о дубликате карты AMO Tadamon"
    ),
    desc: D7(
      "طلب استخراج نظير البطاقة عند فقدها أو تلفها للحفاظ على النفاذ إلى العلاج.",
      "Demande d'un second exemplaire de la carte en cas de perte ou de détérioration pour continuer à accéder aux soins.",
      "Application for a replacement card in case of loss or damage to keep accessing healthcare.",
      "Solicitud de una tarjeta de reemplazo en caso de pérdida o deterioro para seguir accediendo a la atención.",
      "Domanda di una seconda tessera in caso di smarrimento o deterioramento per continuare ad accedere alle cure.",
      "Antrag auf Ersatzkarte bei Verlust oder Beschädigung, um den Zugang zu Behandlungen zu wahren.",
      "Заявление о перевыпуске карты при утере или повреждении для сохранения доступа к лечению."
    ),
    where: W7(
      "المرافق الصحية المختصة أو عبر منصة amotadamon.ma",
      "Services de santé compétents ou via le portail amotadamon.ma",
      "Competent health services or via the amotadamon.ma portal",
      "Servicios de salud competentes o vía portal amotadamon.ma",
      "Servizi sanitari competenti oppure via portale amotadamon.ma",
      "Zuständige Gesundheitsdienste oder über das Portal amotadamon.ma",
      "Компетентные медслужбы или через портал amotadamon.ma"
    ),
    authority: "amotadamon",
    keywords: ["نظير البطاقة", "duplicata carte", "AMO Tadamon", "بطاقة", "card", "تضامن"],
  },

  // ─── CNOPS / التغطية الصحية للوظيفة العمومية ───
  {
    id: "cnss-cnops-affiliation-fonctionnaire",
    cat: "cnss",
    title: T7(
      "طلب الانتساب إلى CNOPS للموظف الجديد",
      "Demande d'affiliation du fonctionnaire à la CNOPS",
      "Application for civil-servant affiliation to the CNOPS",
      "Solicitud de afiliación del funcionario a la CNOPS",
      "Domanda di affiliazione del funzionario alla CNOPS",
      "Antrag auf Anmeldung des Beamten bei der CNOPS",
      "Заявление о регистрации госслужащего в CNOPS"
    ),
    desc: D7(
      "ملف يودعه الموظف عند تعيينه للتسجيل في نظام التغطية الصحية للوظيفة العمومية.",
      "Dossier déposé par le fonctionnaire à sa nomination pour rejoindre le régime de couverture santé public.",
      "File submitted by a civil servant upon appointment to join the public-sector health coverage scheme.",
      "Expediente presentado por el funcionario al ser nombrado para incorporarse al régimen de cobertura sanitaria pública.",
      "Pratica presentata dal funzionario alla nomina per aderire al regime sanitario del pubblico impiego.",
      "Beim Amtsantritt eingereichter Antrag des Beamten zum Beitritt zum staatlichen Krankenversicherungssystem.",
      "Дело, подаваемое госслужащим при назначении для вступления в систему медстрахования госсектора."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالوزارة أو أقرب وكالة CNOPS",
      "Direction des ressources humaines du ministère ou agence CNOPS la plus proche",
      "Ministry human-resources directorate or the nearest CNOPS agency",
      "Dirección de recursos humanos del ministerio o agencia CNOPS más cercana",
      "Direzione risorse umane del ministero o agenzia CNOPS più vicina",
      "Personalabteilung des Ministeriums oder nächstgelegene CNOPS-Agentur",
      "Кадровая служба министерства или ближайшее агентство CNOPS"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "موظف", "fonctionnaire", "affiliation", "التغطية الصحية", "fonction publique"],
  },
  {
    id: "cnss-cnops-ajout-conjoint-mariage",
    cat: "cnss",
    title: T7(
      "طلب إضافة الزوج أو الزوجة الجديد إلى CNOPS بعد الزواج",
      "Ajout du nouveau conjoint à la CNOPS après mariage",
      "Adding a new spouse to CNOPS coverage after marriage",
      "Adición del nuevo cónyuge a la CNOPS tras el matrimonio",
      "Aggiunta del nuovo coniuge alla CNOPS dopo il matrimonio",
      "Aufnahme des neuen Ehepartners in die CNOPS nach der Heirat",
      "Добавление нового супруга в CNOPS после брака"
    ),
    desc: D7(
      "طلب يقدمه الموظف خلال الأجل القانوني لإدراج زوجه الجديد ضمن ذوي حقوقه.",
      "Demande déposée par le fonctionnaire dans le délai légal pour inscrire son nouveau conjoint comme ayant droit.",
      "Application filed by the civil servant within the legal deadline to enrol a new spouse as beneficiary.",
      "Solicitud presentada por el funcionario dentro del plazo legal para inscribir a su nuevo cónyuge como beneficiario.",
      "Domanda presentata dal funzionario entro il termine di legge per iscrivere il nuovo coniuge come avente diritto.",
      "Vom Beamten fristgerecht gestellter Antrag, den neuen Ehepartner als Berechtigten einzutragen.",
      "Заявление госслужащего в установленный срок о регистрации нового супруга как иждивенца."
    ),
    where: W7(
      "أقرب وكالة CNOPS أو مصلحة الموارد البشرية للإدارة",
      "Agence CNOPS la plus proche ou service des ressources humaines",
      "Nearest CNOPS agency or the human-resources service",
      "Agencia CNOPS más cercana o servicio de recursos humanos",
      "Agenzia CNOPS più vicina o servizio risorse umane",
      "Nächstgelegene CNOPS-Agentur oder Personalstelle",
      "Ближайшее агентство CNOPS или кадровая служба"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "زواج", "mariage", "conjoint", "إضافة", "ayant droit"],
  },
  {
    id: "cnss-cnops-ajout-nouveau-ne",
    cat: "cnss",
    title: T7(
      "طلب إضافة مولود جديد إلى ملف CNOPS",
      "Ajout d'un nouveau-né au dossier CNOPS",
      "Adding a newborn to the CNOPS file",
      "Adición de un recién nacido al expediente CNOPS",
      "Aggiunta di un neonato alla pratica CNOPS",
      "Aufnahme eines Neugeborenen in den CNOPS-Akt",
      "Добавление новорождённого в дело CNOPS"
    ),
    desc: D7(
      "طلب إدراج المولود الجديد في ملف التغطية الصحية للموظف مرفقاً برسم ولادته.",
      "Demande d'inscription du nouveau-né au dossier de couverture du fonctionnaire avec son acte de naissance.",
      "Application to enrol the newborn in the official's coverage file with the birth certificate.",
      "Solicitud de inscripción del recién nacido en el expediente del funcionario con su acta de nacimiento.",
      "Domanda di iscrizione del neonato nella pratica del funzionario con l'atto di nascita.",
      "Antrag, das Neugeborene mit Geburtsurkunde in den Deckungsakt des Beamten aufzunehmen.",
      "Заявление о включении новорождённого со свидетельством о рождении в дело служащего."
    ),
    where: W7(
      "أقرب وكالة CNOPS أو عبر الملف الرقمي للموظف",
      "Agence CNOPS la plus proche ou via le dossier numérique de l'agent",
      "Nearest CNOPS agency or via the official's digital file",
      "Agencia CNOPS más cercana o vía expediente digital del agente",
      "Agenzia CNOPS più vicina oppure via fascicolo digitale del dipendente",
      "Nächstgelegene CNOPS-Agentur oder über die digitale Akte des Bediensteten",
      "Ближайшее агентство CNOPS или через цифровое дело служащего"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "مولود", "nouveau-né", "إضافة", "naissance", "ayant droit"],
  },
  {
    id: "cnss-cnops-remboursement-frais",
    cat: "cnss",
    title: T7(
      "طلب استرجاع المصاريف الطبية لدى CNOPS",
      "Demande de remboursement de frais médicaux à la CNOPS",
      "Application for reimbursement of medical expenses from the CNOPS",
      "Solicitud de reembolso de gastos médicos a la CNOPS",
      "Domanda di rimborso spese mediche alla CNOPS",
      "Antrag auf Erstattung medizinischer Auslagen bei der CNOPS",
      "Заявление о возмещении медицинских расходов в CNOPS"
    ),
    desc: D7(
      "ملف يقدمه الموظف لاسترجاع مصاريف العلاج المؤداة مباشرة وفق نسب التغطية المعتمدة.",
      "Dossier déposé par l'agent pour récupérer les frais payés directement selon les taux de couverture agréés.",
      "File submitted by the official to recover directly paid expenses under the approved coverage rates.",
      "Expediente presentado por el agente para recuperar los gastos pagados directamente según las tasas aprobadas.",
      "Pratica presentata dal dipendente per recuperare le spese pagate direttamente secondo le aliquote approvate.",
      "Vom Bediensteten eingereichter Antrag auf Rückerstattung direkt gezahlter Kosten zu anerkannten Sätzen.",
      "Дело, подаваемое служащим для возврата напрямую оплаченных расходов по утверждённым ставкам."
    ),
    where: W7(
      "أقرب وكالة CNOPS مع وثائق العلاج والفواتير",
      "Agence CNOPS la plus proche avec feuilles de soins et factures",
      "Nearest CNOPS agency with care sheets and invoices",
      "Agencia CNOPS más cercana con hojas de atención y facturas",
      "Agenzia CNOPS più vicina con fogli di cura e fatture",
      "Nächstgelegene CNOPS-Agentur mit Krankenblättern und Rechnungen",
      "Ближайшее агентство CNOPS с листами лечения и счетами"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "استرجاع", "remboursement", "مصاريف طبية", "frais médicaux", "تغطية"],
  },
  {
    id: "cnss-cnops-prise-en-charge-hors-residence",
    cat: "cnss",
    title: T7(
      "طلب التكفل بالعلاج خارج مدينة الإقامة لدى CNOPS",
      "Demande de prise en charge hors résidence à la CNOPS",
      "Application for out-of-residence coverage from the CNOPS",
      "Solicitud de cobertura fuera del domicilio ante la CNOPS",
      "Domanda di copertura fuori residenza alla CNOPS",
      "Antrag auf Kostenübernahme außerhalb des Wohnorts bei der CNOPS",
      "Заявление об оплате лечения вне места проживания в CNOPS"
    ),
    desc: D7(
      "طلب ترخيص مسبق بالعلاج خارج مدينة الإقامة لدى مؤسسة صحية معتمدة.",
      "Demande d'autorisation préalable de soins hors ville de résidence dans un établissement agréé.",
      "Application for prior authorisation for care outside the city of residence at an approved facility.",
      "Solicitud de autorización previa para atención fuera de la ciudad de residencia en un centro autorizado.",
      "Domanda di autorizzazione preventiva per cure fuori dalla città di residenza in una struttura convenzionata.",
      "Antrag auf vorherige Genehmigung für eine Behandlung außerhalb des Wohnorts in einer zugelassenen Einrichtung.",
      "Заявление на предварительное разрешение лечения вне города проживания в аккредитованном учреждении."
    ),
    where: W7(
      "أقرب وكالة CNOPS قبل العلاج أو بعده في الحالات الاستعجالية",
      "Agence CNOPS la plus proche avant les soins, ou après en cas d'urgence",
      "Nearest CNOPS agency before treatment, or afterwards in emergencies",
      "Agencia CNOPS más cercana antes de la atención, o después en urgencias",
      "Agenzia CNOPS più vicina prima delle cure oppure dopo in caso di urgenza",
      "Nächstgelegene CNOPS-Agentur vor der Behandlung, danach nur im Notfall",
      "Ближайшее агентство CNOPS до лечения либо после — в экстренных случаях"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "خارج الإقامة", "hors résidence", "تكفل", "prise en charge", "علاج"],
  },
  {
    id: "cnss-cnops-attestation-affiliation",
    cat: "cnss",
    title: T7(
      "طلب شهادة الانتماء إلى CNOPS",
      "Demande d'attestation d'affiliation à la CNOPS",
      "Application for a CNOPS affiliation certificate",
      "Solicitud de certificado de afiliación a la CNOPS",
      "Domanda di attestazione di affiliazione alla CNOPS",
      "Antrag auf CNOPS-Zugehörigkeitsbescheinigung",
      "Заявление о справке о членстве в CNOPS"
    ),
    desc: D7(
      "شهادة رسمية تثبت انتساب الموظف وذوي حقوقه إلى نظام التغطية الصحية للقطاع العام.",
      "Attestation officielle prouvant l'affiliation de l'agent et de ses ayants droit au régime du secteur public.",
      "Official certificate proving the official's and beneficiaries' membership of the public-sector scheme.",
      "Certificado oficial que acredita la afiliación del agente y sus beneficiarios al régimen del sector público.",
      "Attestazione ufficiale che prova l'affiliazione del dipendente e dei suoi aventi diritto al regime del settore pubblico.",
      "Offizielle Bescheinigung der Zugehörigkeit des Bediensteten und seiner Berechtigten zum System des öffentlichen Sektors.",
      "Официальная справка о принадлежности служащего и его иждивенцев к системе госсектора."
    ),
    where: W7(
      "أقرب وكالة CNOPS أو المصلحة المختصة بالإدارة المشغلة",
      "Agence CNOPS la plus proche ou service compétent de l'administration employeur",
      "Nearest CNOPS agency or the competent service of the employing administration",
      "Agencia CNOPS más cercana o servicio competente de la administración empleadora",
      "Agenzia CNOPS più vicina o servizio competente dell'amministrazione datrice di lavoro",
      "Nächstgelegene CNOPS-Agentur oder zuständige Stelle der beschäftigenden Verwaltung",
      "Ближайшее агентство CNOPS или компетентная служба администрации-работодателя"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "شهادة", "attestation", "affiliation", "موظف", "couverture"],
  },
  {
    id: "cnss-cnops-duplicata-carte",
    cat: "cnss",
    title: T7(
      "طلب نظير بطاقة CNOPS",
      "Demande de duplicata de la carte CNOPS",
      "Application for a duplicate CNOPS card",
      "Solicitud de duplicado de la tarjeta CNOPS",
      "Domanda di duplicato della tessera CNOPS",
      "Antrag auf Duplikat der CNOPS-Karte",
      "Заявление о дубликате карты CNOPS"
    ),
    desc: D7(
      "طلب استخراج بطاقة بديلة عند الضياع أو التلف لمواصلة النفاذ إلى الخدمات الصحية.",
      "Demande d'une carte de remplacement en cas de perte ou de détérioration pour poursuivre l'accès aux soins.",
      "Application for a replacement card in case of loss or damage to keep accessing health services.",
      "Solicitud de tarjeta de reemplazo en caso de pérdida o deterioro para seguir accediendo a los servicios.",
      "Domanda di tessera sostitutiva in caso di smarrimento o deterioramento per continuare ad accedere ai servizi.",
      "Antrag auf Ersatzkarte bei Verlust oder Beschädigung, um den Zugang zu Gesundheitsleistungen zu erhalten.",
      "Заявление о замене карты при утере или повреждении для доступа к медуслугам."
    ),
    where: W7(
      "أقرب وكالة CNOPS مع التصريح بالضياع عند الاقتضاء",
      "Agence CNOPS la plus proche avec déclaration de perte le cas échéant",
      "Nearest CNOPS agency with a loss declaration where applicable",
      "Agencia CNOPS más cercana con declaración de pérdida si procede",
      "Agenzia CNOPS più vicina con denuncia di smarrimento ove previsto",
      "Nächstgelegene CNOPS-Agentur gegebenenfalls mit Verlustanzeige",
      "Ближайшее агентство CNOPS при необходимости с заявлением об утере"
    ),
    authority: "cnops",
    keywords: ["CNOPS", "بطاقة", "carte", "duplicata", "نظير", "ضياع"],
  },

  // ─── Cartes, attestations & mise à jour / البطاقات والإشهادات والتحديث ───
  {
    id: "cnss-attestation-affiliation",
    cat: "cnss",
    title: T7(
      "طلب شهادة الانتماء إلى الضمان الاجتماعي (CNSS)",
      "Demande d'attestation d'affiliation à la CNSS",
      "Application for a CNSS affiliation certificate",
      "Solicitud de certificado de afiliación a la CNSS",
      "Domanda di attestazione di affiliazione alla CNSS",
      "Antrag auf CNSS-Zugehörigkeitsbescheinigung",
      "Заявление о справке о членстве в CNSS"
    ),
    desc: D7(
      "شهادة رسمية تثبت الانتظام في الضمان الاجتماعي وتطلب للملفات الإدارية والبنكية.",
      "Attestation officielle d'affiliation à jour, exigée pour les dossiers administratifs et bancaires.",
      "Official certificate of up-to-date affiliation, required for administrative and banking purposes.",
      "Certificado oficial de afiliación al día, requerido para trámites administrativos y bancarios.",
      "Attestazione ufficiale di affiliazione regolare, richiesta per pratiche amministrative e bancarie.",
      "Offizielle Bescheinigung der aktuellen Mitgliedschaft, für Verwaltungs- und Bankvorgänge erforderlich.",
      "Официальная справка о действующем членстве, требуется для административных и банковских целей."
    ),
    where: W7(
      "تحميل فوري من منصة maCNSS أو أقرب وكالة CNSS",
      "Téléchargement immédiat sur maCNSS ou agence CNSS la plus proche",
      "Immediate download on maCNSS or the nearest CNSS agency",
      "Descarga inmediata en maCNSS o agencia CNSS más cercana",
      "Scaricamento immediato su maCNSS o agenzia CNSS più vicina",
      "Sofortiger Download auf maCNSS oder nächstgelegene CNSS-Agentur",
      "Мгновенное скачивание на maCNSS или ближайшее агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["شهادة الانتماء", "attestation affiliation", "CNSS", "maCNSS", "انتظام", "إشهاد"],
    popular: true,
  },
  {
    id: "cnss-duplicata-carte-assure",
    cat: "cnss",
    title: T7(
      "طلب نظير بطاقة المؤمن له لدى الضمان الاجتماعي",
      "Demande de duplicata de la carte d'assuré CNSS",
      "Application for a duplicate CNSS insured card",
      "Solicitud de duplicado de la tarjeta del asegurado CNSS",
      "Domanda di duplicato della tessera dell'assicurato CNSS",
      "Antrag auf Duplikat der CNSS-Versichertenkarte",
      "Заявление о дубликате карточки застрахованного CNSS"
    ),
    desc: D7(
      "طلب بطاقة بديلة للمؤمن له عند فقدانها أو تلفها للإبقاء على النفاذ إلى الخدمات.",
      "Demande d'une nouvelle carte pour l'assuré en cas de perte ou de détérioration de l'original.",
      "Application for a new insured card when the original is lost or damaged.",
      "Solicitud de una nueva tarjeta del asegurado cuando la original se pierde o deteriora.",
      "Domanda di nuova tessera per l'assicurato in caso di smarrimento o deterioramento dell'originale.",
      "Antrag auf eine neue Versichertenkarte bei Verlust oder Beschädigung der Originalkarte.",
      "Заявление о новой карточке застрахованного при утере или повреждении оригинала."
    ),
    where: W7(
      "أقرب وكالة CNSS أو طلب عبر فضاء المؤمن له في maCNSS",
      "Agence CNSS la plus proche ou demande via l'espace assuré de maCNSS",
      "Nearest CNSS agency or request via the insured space on maCNSS",
      "Agencia CNSS más cercana o solicitud vía espacio del asegurado en maCNSS",
      "Agenzia CNSS più vicina o richiesta tramite lo spazio assicurato di maCNSS",
      "Nächstgelegene CNSS-Agentur oder Antrag über den Versichertenbereich auf maCNSS",
      "Ближайшее агентство CNSS или заявка в кабинете застрахованного на maCNSS"
    ),
    authority: "macnss",
    keywords: ["نظير البطاقة", "duplicata carte", "CNSS", "بطاقة المؤمن", "carte assuré", "maCNSS"],
  },
  {
    id: "cnss-changement-adresse",
    cat: "cnss",
    title: T7(
      "التصريح بتغيير العنوان لدى الضمان الاجتماعي",
      "Déclaration de changement d'adresse à la CNSS",
      "Declaration of change of address to the CNSS",
      "Declaración de cambio de domicilio ante la CNSS",
      "Dichiarazione di cambio di indirizzo alla CNSS",
      "Meldung eines Adresswechsels an die CNSS",
      "Заявление о смене адреса в CNSS"
    ),
    desc: D7(
      "تصريح بتحديث عنوان السكنى لدى الصندوق لضمان توصل المراسلات والوثائق في وقتها.",
      "Déclaration mettant à jour l'adresse de résidence auprès de la caisse pour la bonne réception des courriers.",
      "Declaration updating the residential address with the fund for timely receipt of correspondence.",
      "Declaración que actualiza el domicilio ante la caja para recibir oportunamente la correspondencia.",
      "Dichiarazione che aggiorna il domicilio presso la cassa per la corretta ricezione della corrispondenza.",
      "Meldung zur Aktualisierung der Wohnadresse bei der Kasse für einen rechtzeitigen Posteingang.",
      "Заявление об обновлении адреса проживания в фонде для своевременного получения корреспонденции."
    ),
    where: W7(
      "تحديث عبر منصة maCNSS أو أقرب وكالة CNSS",
      "Mise à jour via maCNSS ou agence CNSS la plus proche",
      "Update via maCNSS or the nearest CNSS agency",
      "Actualización vía maCNSS o agencia CNSS más cercana",
      "Aggiornamento via maCNSS oppure agenzia CNSS più vicina",
      "Aktualisierung über maCNSS oder nächstgelegene CNSS-Agentur",
      "Обновление через maCNSS или ближайшее агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["تغيير العنوان", "changement adresse", "CNSS", "عنوان", "maCNSS", "déménagement"],
  },
  {
    id: "cnss-changement-rib",
    cat: "cnss",
    title: T7(
      "طلب تغيير الحساب البنكي (RIB) لأداء المستحقات",
      "Demande de changement du compte bancaire (RIB) à la CNSS",
      "Application to change the bank account (RIB) with the CNSS",
      "Solicitud de cambio de cuenta bancaria (RIB) en la CNSS",
      "Domanda di modifica del conto bancario (RIB) presso la CNSS",
      "Antrag auf Änderung des Bankkontos (RIB) bei der CNSS",
      "Заявление о смене банковского счёта (RIB) в CNSS"
    ),
    desc: D7(
      "طلب لتحويل أداء التعويضات والمعاشات إلى حساب بنكي جديد للمؤمن له.",
      "Demande de transfert des versements de prestations et pensions vers un nouveau compte bancaire.",
      "Application to transfer benefit and pension payments to a new bank account.",
      "Solicitud para transferir los pagos de prestaciones y pensiones a una nueva cuenta bancaria.",
      "Domanda di trasferimento dei pagamenti di prestazioni e pensioni su un nuovo conto bancario.",
      "Antrag auf Überweisung der Leistungs- und Rentenzahlungen auf ein neues Bankkonto.",
      "Заявление о переводе пособий и пенсий на новый банковский счёт."
    ),
    where: W7(
      "تحديث عبر فضاء المؤمن له في maCNSS أو أقرب وكالة CNSS",
      "Mise à jour via l'espace assuré de maCNSS ou agence CNSS la plus proche",
      "Update via the insured space on maCNSS or the nearest CNSS agency",
      "Actualización vía espacio del asegurado en maCNSS o agencia CNSS más cercana",
      "Aggiornamento tramite lo spazio assicurato di maCNSS oppure agenzia CNSS più vicina",
      "Aktualisierung über den Versichertenbereich auf maCNSS oder nächstgelegene CNSS-Agentur",
      "Обновление в кабинете застрахованного на maCNSS или ближайшее агентство CNSS"
    ),
    authority: "macnss",
    keywords: ["RIB", "حساب بنكي", "compte bancaire", "CNSS", "تحويل", "virement"],
  },
  {
    id: "cnss-maj-divorce-deces-conjoint",
    cat: "cnss",
    title: T7(
      "التصريح بتغير الوضعية العائلية (طلاق أو وفاة الزوج)",
      "Déclaration de changement de situation familiale (divorce ou décès)",
      "Declaration of change in family situation (divorce or bereavement)",
      "Declaración de cambio de situación familiar (divorcio o fallecimiento)",
      "Dichiarazione di cambio di situazione familiare (divorzio o decesso)",
      "Meldung einer Änderung des Familienstands (Scheidung oder Tod)",
      "Заявление об изменении семейного положения (развод или смерть супруга)"
    ),
    desc: D7(
      "تصريح بتحديث الوضعية العائلية بما يؤثر في الاستفادة من التعويضات وتغطية ذوي الحقوق.",
      "Déclaration actualisant la situation familiale qui influe sur les prestations et la couverture des ayants droit.",
      "Declaration updating the family situation, which affects benefits and beneficiaries' coverage.",
      "Declaración que actualiza la situación familiar y afecta a las prestaciones y cobertura de los beneficiarios.",
      "Dichiarazione che aggiorna la situazione familiare, con effetti su prestazioni e copertura degli aventi diritto.",
      "Meldung zur Aktualisierung des Familienstands mit Auswirkungen auf Leistungen und Berechtigtenschutz.",
      "Заявление об обновлении семейного положения, влияющего на пособия и покрытие иждивенцев."
    ),
    where: W7(
      "أقرب وكالة CNSS مع الوثائق المثبتة للوضعية الجديدة",
      "Agence CNSS la plus proche avec les pièces justificatives de la nouvelle situation",
      "Nearest CNSS agency with documents proving the new situation",
      "Agencia CNSS más cercana con documentos que prueben la nueva situación",
      "Agenzia CNSS più vicina con i documenti comprovanti la nuova situazione",
      "Nächstgelegene CNSS-Agentur mit Nachweisen der neuen Situation",
      "Ближайшее агентство CNSS с документами о новом положении"
    ),
    authority: "cnss",
    keywords: ["وضعية عائلية", "situation familiale", "CNSS", "طلاق", "divorce", "وفاة الزوج"],
  },
  {
    id: "cnss-rectification-nom",
    cat: "cnss",
    title: T7(
      "طلب تصحيح الاسم أو المعطيات في ملف الضمان الاجتماعي",
      "Demande de rectification de nom ou de données à la CNSS",
      "Application for correction of name or data at the CNSS",
      "Solicitud de corrección de nombre o datos en la CNSS",
      "Domanda di rettifica del nome o dei dati alla CNSS",
      "Antrag auf Berichtigung von Name oder Daten bei der CNSS",
      "Заявление об исправлении имени или данных в CNSS"
    ),
    desc: D7(
      "طلب لتصحيح أخطاء الحالة المدنية أو المعطيات الشخصية المسجلة في ملف المؤمن له.",
      "Demande visant à corriger les erreurs d'état civil ou données personnelles enregistrées au dossier.",
      "Application to fix civil-status errors or personal data recorded in the insured's file.",
      "Solicitud para corregir errores de estado civil o datos personales registrados en el expediente.",
      "Domanda per correggere errori di stato civile o dati personali registrati nella pratica.",
      "Antrag zur Korrektur von Personenstandsfehlern oder falschen persönlichen Daten im Versichertenakt.",
      "Заявление об исправлении ошибок гражданского состояния или личных данных в деле застрахованного."
    ),
    where: W7(
      "وكالة CNSS بموعد مسبق عبر منصة cnss.rdv.gov.ma مع الوثائق الداعمة",
      "Agence CNSS sur rendez-vous via cnss.rdv.gov.ma avec les pièces justificatives",
      "CNSS agency by appointment via cnss.rdv.gov.ma with supporting documents",
      "Agencia CNSS con cita previa vía cnss.rdv.gov.ma con documentos justificativos",
      "Agenzia CNSS su appuntamento tramite cnss.rdv.gov.ma con i documenti giustificativi",
      "CNSS-Agentur nach Terminbuchung über cnss.rdv.gov.ma mit Nachweisen",
      "Агентство CNSS по записи через cnss.rdv.gov.ma с подтверждающими документами"
    ),
    authority: "cnss-rdv",
    keywords: ["تصحيح الاسم", "rectification nom", "CNSS", "تصحيح", "erreur", "حالة مدنية"],
  },
  {
    id: "cnss-attestation-cessation-affiliation",
    cat: "cnss",
    title: T7(
      "طلب شهادة توقف الانتماء إلى الضمان الاجتماعي",
      "Demande d'attestation de cessation d'affiliation à la CNSS",
      "Application for a certificate of cessation of CNSS affiliation",
      "Solicitud de certificado de cese de afiliación a la CNSS",
      "Domanda di attestazione di cessazione di affiliazione alla CNSS",
      "Antrag auf Bescheinigung der Beendigung der CNSS-Mitgliedschaft",
      "Заявление о справке о прекращении членства в CNSS"
    ),
    desc: D7(
      "شهادة تثبت توقف الانتظام في الضمان الاجتماعي وتطلب عند تغيير العمل أو للإدارات.",
      "Attestation prouvant l'arrêt de l'affiliation, demandée lors d'un changement d'employeur ou de démarches.",
      "Certificate proving the end of affiliation, requested when changing employers or for procedures.",
      "Certificado que acredita el cese de la afiliación, solicitado al cambiar de empleador o para trámites.",
      "Attestazione che prova la cessazione dell'affiliazione, richiesta al cambio di datore di lavoro o per pratiche.",
      "Bescheinigung über das Ende der Mitgliedschaft, etwa bei Arbeitgeberwechsel oder für Behördengänge.",
      "Справка о прекращении членства, запрашивается при смене работодателя или для процедур."
    ),
    where: W7(
      "تحميل من منصة maCNSS أو طلبه من أقرب وكالة CNSS",
      "Téléchargement depuis maCNSS ou demande à l'agence CNSS la plus proche",
      "Download from maCNSS or request at the nearest CNSS agency",
      "Descarga desde maCNSS o solicitud en la agencia CNSS más cercana",
      "Scaricamento da maCNSS o richiesta all'agenzia CNSS più vicina",
      "Download über maCNSS oder Antrag bei der nächstgelegenen CNSS-Agentur",
      "Скачивание с maCNSS или запрос в ближайшем агентстве CNSS"
    ),
    authority: "macnss",
    keywords: ["توقف الانتماء", "cessation affiliation", "CNSS", "شهادة", "attestation", "maCNSS"],
  },
  {
    id: "cnss-suivi-dossier",
    cat: "cnss",
    title: T7(
      "طلب الإخبار بحالة ملف الضمان الاجتماعي",
      "Demande d'état d'avancement du dossier à la CNSS",
      "Application for status update on a CNSS file",
      "Solicitud de estado del expediente ante la CNSS",
      "Domanda di stato della pratica alla CNSS",
      "Anfrage zum Bearbeitungsstand des CNSS-Aktes",
      "Запрос о состоянии дела в CNSS"
    ),
    desc: D7(
      "طلب للاستعلام عن مراحل معالجة ملف قائم والحصول على جواب في أجل معقول.",
      "Demande d'information sur l'état de traitement d'un dossier en cours avec réponse dans un délai raisonnable.",
      "Request for information on the processing stage of a pending file with a reply within reasonable time.",
      "Solicitud de información sobre la fase de tramitación de un expediente pendiente con respuesta en plazo razonable.",
      "Richiesta di informazioni sulla fase di lavorazione di una pratica pendente con risposta in tempi ragionevoli.",
      "Auskunftsanfrage zum Bearbeitungsstand eines laufenden Aktes mit zeitnaher Antwort.",
      "Запрос информации о стадии обработки текущего дела с ответом в разумный срок."
    ),
    where: W7(
      "تتبع إلكتروني عبر منصة maCNSS أو استفسار بأقرب وكالة CNSS",
      "Suivi en ligne via maCNSS ou relance à l'agence CNSS la plus proche",
      "Online tracking via maCNSS or follow-up at the nearest CNSS agency",
      "Seguimiento en línea vía maCNSS o consulta en la agencia CNSS más cercana",
      "Tracciamento online tramite maCNSS oppure sollecito all'agenzia CNSS più vicina",
      "Online-Verfolgung über maCNSS oder Nachfrage bei der nächstgelegenen CNSS-Agentur",
      "Онлайн-отслеживание через maCNSS или запрос в ближайшем агентстве CNSS"
    ),
    authority: "macnss",
    keywords: ["تتبع الملف", "suivi dossier", "CNSS", "حالة الملف", "maCNSS", "état"],
  },

  // ─── Recours & divers / التظلمات وإجراءات متنوعة ───
  {
    id: "cnss-reclamation-delai-traitement",
    cat: "cnss",
    title: T7(
      "شكاية بشأن تجاوز آجال معالجة الملف",
      "Réclamation pour dépassement des délais de traitement (CNSS)",
      "Complaint about exceeding CNSS processing deadlines",
      "Reclamación por exceso de los plazos de tramitación (CNSS)",
      "Reclamo per superamento dei termini di trattazione (CNSS)",
      "Beschwerde über überschrittene Bearbeitungsfristen (CNSS)",
      "Жалоба на нарушение сроков обработки (CNSS)"
    ),
    desc: D7(
      "شكاية ترافق عدم الرد على طلب داخل الآجال القانونية المحددة لدى الصندوق.",
      "Réclamation motivée par l'absence de réponse à une demande dans les délais réglementaires fixés.",
      "Complaint grounded in the absence of a reply to a request within the regulatory deadlines set.",
      "Reclamación motivada por la falta de respuesta a una solicitud dentro de los plazos reglamentarios.",
      "Reclamo motivato dall'assenza di risposta a una domanda entro i termini regolamentari.",
      "Beschwerde wegen fehlender Antwort auf einen Antrag innerhalb der gesetzten Fristen.",
      "Жалоба на отсутствие ответа на заявление в установленные регламентные сроки."
    ),
    where: W7(
      "مصلحة الشكايات بأقرب وكالة CNSS أو عبر منصة maCNSS",
      "Service des réclamations de l'agence CNSS ou via maCNSS",
      "Complaints service of the CNSS agency or via maCNSS",
      "Servicio de reclamaciones de la agencia CNSS o vía maCNSS",
      "Servizio reclami dell'agenzia CNSS oppure via maCNSS",
      "Reklamationsstelle der CNSS-Agentur oder über maCNSS",
      "Служба жалоб агентства CNSS или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["شكاية", "réclamation", "délai", "CNSS", "تأخر", "آجال"],
  },
  {
    id: "cnss-recours-gracieux",
    cat: "cnss",
    title: T7(
      "طلب تظلم إداري بعد انقضاء أجل الطعن",
      "Recours gracieux après expiration du délai légal (CNSS)",
      "Graceful appeal after expiry of the legal deadline (CNSS)",
      "Recurso de alzada tras expirar el plazo legal (CNSS)",
      "Ricorso grazioso dopo la scadenza del termine legale (CNSS)",
      "Gnadengesuch nach Ablauf der gesetzlichen Frist (CNSS)",
      "Прошение о снисхождении после истечения срока (CNSS)"
    ),
    desc: D7(
      "التماس يرفع إلى الصندوق لقبول طلب فاته أجل الطعن لأسباب قاهرة ومقبولة.",
      "Requête présentée à la CNSS pour admettre une demande dont le délai de recours a expiré pour raisons graves.",
      "Petition to the CNSS to admit a claim whose appeal deadline expired for compelling reasons.",
      "Solicitud presentada a la CNSS para admitir una reclamación cuyo plazo de recurso expiró por razones graves.",
      "Istanza presentata alla CNSS per ammettere una domanda il cui termine di ricorso è scaduto per gravi motivi.",
      "Gesuch an die CNSS, einen Antrag trotz versäumter Rechtsmittelfrist aus triftigen Gründen zuzulassen.",
      "Прошение в CNSS о принятии заявления с пропущенным сроком обжалования по уважительным причинам."
    ),
    where: W7(
      "الإدارة المركزية أو الجهوية للصندوق الوطني للضمان الاجتماعي",
      "Administration centrale ou régionale de la CNSS",
      "CNSS central or regional administration",
      "Administración central o regional de la CNSS",
      "Amministrazione centrale o regionale della CNSS",
      "Zentral- oder Regionalverwaltung der CNSS",
      "Центральная или региональная администрация CNSS"
    ),
    authority: "cnss",
    keywords: ["انقضاء الأجل", "recours gracieux", "CNSS", "طعن", "délai", "تظلم"],
  },
  {
    id: "cnss-annulation-recalcul",
    cat: "cnss",
    title: T7(
      "طلب إلغاء قرار وإعادة حساب التعويضات",
      "Demande d'annulation d'une décision et de recalcul des prestations",
      "Application to annul a decision and recalculate benefits",
      "Solicitud de anulación de una decisión y recálculo de prestaciones",
      "Domanda di annullamento di un provvedimento e ricalcolo delle prestazioni",
      "Antrag auf Aufhebung einer Entscheidung und Neuberechnung der Leistungen",
      "Заявление об отмене решения и перерасчёте выплат"
    ),
    desc: D7(
      "طلب يلتمس فيه المعني بالأمر إلغاء قرار الصندوق وإعادة حساب مستحقاته المبنية على معطيات خاطئة.",
      "Demande tendant à l'annulation d'une décision de la caisse et au recalcul des droits fondés sur des données erronées.",
      "Application seeking annulment of a fund decision and recalculation of entitlements based on incorrect data.",
      "Solicitud que persigue anular una decisión de la caja y recalcular derechos basados en datos erróneos.",
      "Domanda volta ad annullare un provvedimento della cassa e ricalcolare i diritti basati su dati errati.",
      "Antrag auf Aufhebung einer Kassenentscheidung und Neuberechnung der auf falschen Daten beruhenden Ansprüche.",
      "Заявление об отмене решения фонда и перерасчёте прав, основанных на неверных данных."
    ),
    where: W7(
      "أقرب وكالة CNSS أو مصلحة الطعون بالإدارة المركزية",
      "Agence CNSS la plus proche ou service des recours de l'administration centrale",
      "Nearest CNSS agency or the appeals service of the central administration",
      "Agencia CNSS más cercana o servicio de recursos de la administración central",
      "Agenzia CNSS più vicina o servizio ricorsi dell'amministrazione centrale",
      "Nächstgelegene CNSS-Agentur oder Rechtsbehelfsstelle der Zentralverwaltung",
      "Ближайшее агентство CNSS или служба обжалования центральной администрации"
    ),
    authority: "cnss",
    keywords: ["إلغاء قرار", "annulation", "recalcul", "CNSS", "إعادة حساب", "prestations"],
  },
  {
    id: "cnss-contestation-decision",
    cat: "cnss",
    title: T7(
      "طلب الطعن في قرار صادر عن الضمان الاجتماعي",
      "Contestation d'une décision rendue par la CNSS",
      "Appeal against a decision issued by the CNSS",
      "Recurso contra una decisión emitida por la CNSS",
      "Contestazione di un provvedimento emesso dalla CNSS",
      "Einspruch gegen eine Entscheidung der CNSS",
      "Обжалование решения, вынесенного CNSS"
    ),
    desc: D7(
      "طعن كتابي في قرار نهائي صادر عن الصندوق بشأن راتب أو تعويض أو تسجيل.",
      "Recours écrit contre une décision définitive de la caisse relative à une pension, prestation ou immatriculation.",
      "Written appeal against a final decision of the fund concerning a pension, benefit or registration.",
      "Recurso escrito contra una decisión definitiva de la caja sobre pensión, prestación o inscripción.",
      "Ricorso scritto contro un provvedimento definitivo della cassa relativo a pensione, prestazione o iscrizione.",
      "Schriftlicher Rechtsbehelf gegen eine endgültige Entscheidung der Kasse zu Rente, Leistung oder Anmeldung.",
      "Письменная жалоба на окончательное решение фонда о пенсии, выплате или регистрации."
    ),
    where: W7(
      "تودع لدى الصندوق الوطني للضمان الاجتماعي قبل أي مسطرة قضائية",
      "À déposer auprès de la CNSS avant toute procédure judiciaire",
      "To be filed with the CNSS before any court proceedings",
      "A presentar ante la CNSS antes de cualquier procedimiento judicial",
      "Da presentare alla CNSS prima di qualsiasi procedimento giudiziario",
      "Bei der CNSS einzulegen, bevor ein Gerichtsverfahren eingeleitet wird",
      "Подаётся в CNSS до начала судебной процедуры"
    ),
    authority: "cnss",
    keywords: ["طعن", "contestation", "décision", "CNSS", "قرار", "recours"],
  },
  {
    id: "cnss-demande-information-droits",
    cat: "cnss",
    title: T7(
      "طلب معلومات حول الحقوق في الضمان الاجتماعي",
      "Demande d'information sur les droits à la sécurité sociale",
      "Request for information on social security entitlements",
      "Solicitud de información sobre los derechos de seguridad social",
      "Richiesta di informazioni sui diritti previdenziali",
      "Auskunftsanfrage zu Sozialversicherungsansprüchen",
      "Запрос информации о правах в социальном страховании"
    ),
    desc: D7(
      "استفسار مكتوب حول مدد التأمين والتعويضات المفتوحة وإجراءات الاستفادة منها.",
      "Demande écrite portant sur les périodes d'assurance, prestations ouvertes et procédures pour en bénéficier.",
      "Written inquiry about insurance periods, available benefits and the procedures to obtain them.",
      "Consulta escrita sobre períodos de seguro, prestaciones disponibles y trámites para obtenerlas.",
      "Richiesta scritta sui periodi assicurativi, le prestazioni disponibili e le procedure per ottenerle.",
      "Schriftliche Anfrage zu Versicherungszeiten, offenen Leistungen und den Verfahren dazu.",
      "Письменный запрос о страховых периодах, доступных выплатах и процедурах их получения."
    ),
    where: W7(
      "مكتب الاستقبال بأقرب وكالة CNSS أو عبر الفضاء الرقمي maCNSS",
      "Guichet d'accueil de l'agence CNSS la plus proche ou via maCNSS",
      "Reception desk of the nearest CNSS agency or via maCNSS",
      "Ventanilla de la agencia CNSS más cercana o vía maCNSS",
      "Sportello dell'agenzia CNSS più vicina oppure via maCNSS",
      "Empfangsschalter der nächstgelegenen CNSS-Agentur oder über maCNSS",
      "Приёмная ближайшего агентства CNSS или через maCNSS"
    ),
    authority: "cnss",
    keywords: ["معلومات", "information", "droits", "CNSS", "استفسار", "حقوق"],
  },
  {
    id: "cnss-retrait-dossier",
    cat: "cnss",
    title: T7(
      "طلب استرجاع ملف من وكالة الضمان الاجتماعي",
      "Demande de retrait de dossier auprès de la CNSS",
      "Application to retrieve a file from the CNSS",
      "Solicitud de retiro de expediente ante la CNSS",
      "Domanda di ritiro della pratica presso la CNSS",
      "Antrag auf Herausgabe des Aktes bei der CNSS",
      "Заявление о возврате дела из CNSS"
    ),
    desc: D7(
      "طلب استرداد الوثائق الأصلية أو الملف الكامل بعد البت فيه أو لعدم اكتمال عناصره.",
      "Demande de restitution des pièces originales ou du dossier complet après décision ou pour incomplétude.",
      "Application for return of original documents or the complete file after a decision or due to incompleteness.",
      "Solicitud de devolución de los documentos originales o del expediente completo tras una decisión o por incompletitud.",
      "Domanda di restituzione dei documenti originali o della pratica completa dopo la decisione o per incompletezza.",
      "Antrag auf Rückgabe der Originalunterlagen oder des vollständigen Aktes nach Entscheidung oder bei Unvollständigkeit.",
      "Заявление о возврате оригиналов документов или всего дела после решения либо из-за неполноты."
    ),
    where: W7(
      "أقرب وكالة CNSS بالحضور الشخصي أو بوكالة رسمية",
      "Agence CNSS la plus proche en personne ou par procuration légale",
      "Nearest CNSS agency in person or by legal proxy",
      "Agencia CNSS más cercana en persona o mediante poder legal",
      "Agenzia CNSS più vicina di persona o tramite procura legale",
      "Nächstgelegene CNSS-Agentur persönlich oder per legaler Vollmacht",
      "Ближайшее агентство CNSS лично или по нотариальной доверенности"
    ),
    authority: "cnss",
    keywords: ["استرجاع الملف", "retrait dossier", "CNSS", "وثائق", "restitution", "وكالة"],
  },
  {
    id: "cnss-radiation-employeur",
    cat: "cnss",
    title: T7(
      "طلب شطب مشغل من سجلات الضمان الاجتماعي",
      "Demande de radiation d'un employeur des registres CNSS",
      "Application to deregister an employer from CNSS records",
      "Solicitud de baja de un empleador en los registros de la CNSS",
      "Domanda di cancellazione di un datore di lavoro dai registri CNSS",
      "Antrag auf Abmeldung eines Arbeitgebers aus den CNSS-Registern",
      "Заявление о снятии работодателя с учёта CNSS"
    ),
    desc: D7(
      "تصريح بإقفال المقاولة أو توقف النشاط يستوجب شطب التسجيل وإنهاء الالتزامات تجاه الصندوق.",
      "Déclaration de fermeture ou de cessation d'activité entraînant la radiation et la liquidation des obligations.",
      "Declaration of closure or cessation of activity triggering deregistration and settlement of obligations.",
      "Declaración de cierre o cese de actividad que conlleva la baja y la liquidación de obligaciones.",
      "Dichiarazione di chiusura o cessazione di attività che comporta la cancellazione e la liquidazione degli obblighi.",
      "Erklärung über Schließung oder Tätigkeitseinstellung mit Folge der Abmeldung und Abgeltung der Verpflichtungen.",
      "Заявление о закрытии или прекращении деятельности, влекущее снятие с учёта и погашение обязательств."
    ),
    where: W7(
      "وكالة CNSS التابعة لمقر المقاولة مع الوثائق المثبتة للتوقف",
      "Agence CNSS du siège de l'entreprise avec justificatifs de cessation",
      "CNSS agency of the company's head office with proof of cessation",
      "Agencia CNSS de la sede de la empresa con comprobantes de cese",
      "Agenzia CNSS della sede aziendale con prova della cessazione",
      "CNSS-Agentur am Firmensitz mit Nachweisen der Einstellung",
      "Агентство CNSS по месту фирмы с подтверждением прекращения деятельности"
    ),
    authority: "cnss",
    keywords: ["شطب", "radiation", "employeur", "CNSS", "إقفال", "cessation"],
  },
  {
    id: "cnss-regularisation-affiliation-tardive",
    cat: "cnss",
    title: T7(
      "طلب تسوية انتظام متأخر في الضمان الاجتماعي",
      "Demande de régularisation d'une affiliation tardive à la CNSS",
      "Application to regularise a late affiliation to the CNSS",
      "Solicitud de regularización de una afiliación tardía a la CNSS",
      "Domanda di regolarizzazione di un'affiliazione tardiva alla CNSS",
      "Antrag auf Nachholung einer verspäteten CNSS-Anmeldung",
      "Заявление об исправлении поздней регистрации в CNSS"
    ),
    desc: D7(
      "طلب لتسوية انخراط لم يصرح به المشغل في أجله مع تسديد الاشتراكات المستحقة والغرامات.",
      "Demande de régularisation d'une affiliation non déclarée en temps utile avec paiement des cotisations et pénalités.",
      "Application to regularise an affiliation not declared in time with payment of contributions and penalties.",
      "Solicitud para regularizar una afiliación no declarada a tiempo con pago de cotizaciones y sanciones.",
      "Domanda di regolarizzazione di un'affiliazione non denunciata in tempo con versamento di contributi e sanzioni.",
      "Antrag auf Nachholung einer nicht fristgerecht gemeldeten Anmeldung samt Beiträgen und Strafen.",
      "Заявление об исправлении регистрации, несвоевременно задекларированной, с уплатой взносов и штрафов."
    ),
    where: W7(
      "وكالة CNSS التابعة للمقاولة أو لمقر سكنى المعني بالأمر",
      "Agence CNSS de l'entreprise ou du domicile de l'intéressé",
      "CNSS agency of the company or the applicant's home",
      "Agencia CNSS de la empresa o del domicilio del interesado",
      "Agenzia CNSS dell'azienda o del domicilio dell'interessato",
      "CNSS-Agentur des Unternehmens oder des Wohnsitzes des Betroffenen",
      "Агентство CNSS фирмы или по месту жительства заявителя"
    ),
    authority: "cnss",
    keywords: ["تسوية", "régularisation", "affiliation tardive", "CNSS", "اشتراكات", "retard"],
  },
];
