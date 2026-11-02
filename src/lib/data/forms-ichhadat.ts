// Attestation & certificate request forms — work, income, residence,
// ownership, education, health and banking certificates. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsIchhadat: DocumentItem[] = [
  // ─── Travail & emploi ───
  {
    id: "ich-attestation-bonne-conduite",
    cat: "ichhadat",
    title: T7(
      "شهادة حسن السلوك من جهة العمل",
      "Attestation de bonne conduite de l'employeur",
      "Certificate of good conduct from the employer",
      "Certificado de buena conducta del empleador",
      "Attestato di buona condotta del datore di lavoro",
      "Bescheinigung über gutes Benehmen vom Arbeitgeber",
      "Справка о хорошем поведении от работодателя"
    ),
    desc: D7(
      "شهادة يسلّمها المشغل تؤدّي حسن سلوك الأجير خلال فترة عمله لديه.",
      "Attestation délivrée par l'employeur certifiant la bonne conduite du salarié pendant son emploi.",
      "Certificate issued by the employer attesting the employee's good conduct during employment.",
      "Certificado emitido por el empleador que acredita la buena conducta del empleado.",
      "Attestato rilasciato dal datore di lavoro sulla buona condotta del dipendente.",
      "Vom Arbeitgeber ausgestellte Bescheinigung über das gute Betragen des Arbeitnehmers.",
      "Справка от работодателя о хорошем поведении работника."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو الإدارة المشغِّلة",
      "Service des ressources humaines de l'entreprise ou de l'administration employeuse",
      "HR department of the employing company or administration",
      "Departamento de recursos humanos de la empresa empleadora",
      "Ufficio risorse umane dell'azienda datrice di lavoro",
      "Personalabteilung des Arbeitgebers",
      "Отдел кадров работодателя"
    ),
    keywords: ["حسن السلوك", "bonne conduite", "good conduct", "شهادة عمل", "employeur"],
    popular: true,
  },
  {
    id: "ich-certificat-fin-contrat",
    cat: "ichhadat",
    title: T7(
      "شهادة نهاية عقد العمل",
      "Certificat de fin de contrat de travail",
      "Certificate of end of employment contract",
      "Certificado de fin de contrato de trabajo",
      "Certificato di fine contratto di lavoro",
      "Bescheinigung über das Vertragsende",
      "Справка об окончании трудового договора"
    ),
    desc: D7(
      "شهادة يسلّمها المشغل عند انتهاء العقد تحدد مدته وتاريخ نهايته وسببه.",
      "Certificat remis par l'employeur à l'expiration du contrat, précisant sa durée, sa date de fin et son motif.",
      "Certificate issued by the employer upon contract expiry, stating its duration, end date and reason.",
      "Certificado entregado por el empleador al expirar el contrato, indicando duración, fecha de fin y motivo.",
      "Certificato consegnato dal datore di lavoro alla scadenza del contratto, con durata, data di fine e motivo.",
      "Bescheinigung des Arbeitgebers bei Vertragsablauf mit Angabe von Dauer, Enddatum und Grund.",
      "Справка работодателя об окончании договора с указанием срока, даты завершения и причины."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو الإدارة المشغِّلة",
      "Service des ressources humaines de l'entreprise ou de l'administration employeuse",
      "HR department of the employing company or administration",
      "Departamento de recursos humanos de la empresa o administración empleadora",
      "Ufficio risorse umane dell'azienda o dell'amministrazione datrice di lavoro",
      "Personalabteilung des beschäftigenden Unternehmens oder der Verwaltung",
      "Отдел кадров предприятия или администрации-работодателя"
    ),
    keywords: ["نهاية العقد", "fin de contrat", "end of contract", "عقد محدد المدة", "CDD"],
  },
  {
    id: "ich-attestation-emploi-visa",
    cat: "ichhadat",
    title: T7(
      "شهادة عمل خاصة بطلب التأشيرة",
      "Attestation d'emploi pour demande de visa",
      "Employment certificate for visa application",
      "Certificado de empleo para solicitud de visado",
      "Attestato di impiego per richiesta di visto",
      "Arbeitsbescheinigung für Visumantrag",
      "Справка с места работы для визы"
    ),
    desc: D7(
      "شهادة عمل مفصلة يطلبها القنصل لإثبات الوظيفة والأجر عند التقدم لطلب تأشيرة.",
      "Attestation détaillée exigée par les consulats pour prouver l'emploi et le salaire lors d'une demande de visa.",
      "Detailed certificate required by consulates to prove employment and salary when applying for a visa.",
      "Certificado detallado exigido por los consulados para acreditar empleo y salario al solicitar visado.",
      "Attestato dettagliato richiesto dai consolati per comprovare impiego e stipendio nella richiesta di visto.",
      "Detaillierte Bescheinigung, die Konsulate zum Nachweis von Beschäftigung und Gehalt im Visumantrag verlangen.",
      "Подробная справка, требуемая консульствами для подтверждения работы и зарплаты при подаче на визу."
    ),
    where: W7(
      "مصلحة الموارد البشرية لدى المشغل، مع تصديق الإمضاء عند الاقتضاء",
      "Service des ressources humaines de l'employeur, avec légalisation de la signature si requise",
      "Employer's HR department, with certified signature if required",
      "Departamento de recursos humanos del empleador, con firma legalizada si se exige",
      "Ufficio risorse umane del datore di lavoro, con legalizzazione della firma se richiesta",
      "Personalabteilung des Arbeitgebers, bei Bedarf mit beglaubigter Unterschrift",
      "Кадровая служба работодателя, при необходимости с заверенной подписью"
    ),
    keywords: ["تأشيرة", "visa", "شهادة عمل", "attestation employeur", "السفر"],
    popular: true,
  },
  {
    id: "ich-attestation-mise-retraite",
    cat: "ichhadat",
    title: T7(
      "شهادة الإحالة على التقاعد",
      "Attestation de mise à la retraite",
      "Certificate of admission to retirement",
      "Certificado de admisión a la jubilación",
      "Attestato di collocamento a riposo",
      "Bescheinigung über den Eintritt in den Ruhestand",
      "Справка об уходе на пенсию"
    ),
    desc: D7(
      "شهادة يثبت فيها المشغل إحالة الأجير على التقاعد بعد بلوغه السن القانونية.",
      "Attestation par laquelle l'employeur confirme l'admission du salarié à la retraite à l'âge légal.",
      "Certificate whereby the employer confirms the employee's admission to retirement at the legal age.",
      "Certificado por el que el empleador confirma la admisión del trabajador a la jubilación a la edad legal.",
      "Attestato con cui il datore di lavoro conferma il collocamento a riposo del dipendente all'età legale.",
      "Bescheinigung, mit der der Arbeitgeber den Ruhestandseintritt des Arbeitnehmers zum gesetzlichen Alter bestätigt.",
      "Справка, которой работодатель подтверждает выход работника на пенсию по достижении законного возраста."
    ),
    where: W7(
      "مصلحة الموارد البشرية لدى المشغل بالتنسيق مع صندوق التقاعد المعني",
      "Service des ressources humaines de l'employeur, en coordination avec la caisse de retraite concernée",
      "Employer's HR department, in coordination with the relevant pension fund",
      "Departamento de recursos humanos del empleador, en coordinación con la caja de pensiones",
      "Ufficio risorse umane del datore di lavoro, in coordinamento con la cassa previdenziale",
      "Personalabteilung des Arbeitgebers in Abstimmung mit dem Rententräger",
      "Кадровая служба работодателя во взаимодействии с пенсионным фондом"
    ),
    keywords: ["تقاعد", "retraite", "pension", "الإحالة على التقاعد", "retirement"],
  },
  {
    id: "ich-attestation-dernier-salaire",
    cat: "ichhadat",
    title: T7(
      "شهادة آخر أجر",
      "Attestation de dernier salaire perçu",
      "Certificate of last salary received",
      "Certificado del último salario percibido",
      "Attestato dell'ultimo stipendio percepito",
      "Bescheinigung über das zuletzt bezogene Gehalt",
      "Справка о последней полученной зарплате"
    ),
    desc: D7(
      "شهادة تحدد آخر أجر تسلّمه الأجير، تطلب عند نهاية العلاقة الشغلية لصرف الحقوق.",
      "Attestation précisant le dernier salaire versé au salarié, demandée à la fin de la relation de travail pour servir les droits.",
      "Certificate stating the last salary paid to the employee, requested at the end of employment to settle entitlements.",
      "Certificado que indica el último salario pagado al trabajador, solicitado al final de la relación laboral.",
      "Attestato che indica l'ultimo stipendio corrisposto, richiesto alla fine del rapporto di lavoro.",
      "Bescheinigung über das zuletzt gezahlte Gehalt, gefordert beim Ende des Arbeitsverhältnisses.",
      "Справка о последней выплаченной зарплате, запрашиваемая при окончании трудовых отношений."
    ),
    where: W7(
      "مصلحة الأجور بالمقاولة أو لدى المشغل الأخير",
      "Service de la paie de l'entreprise ou de l'ancien employeur",
      "Payroll department of the company or the former employer",
      "Servicio de nóminas de la empresa o del antiguo empleador",
      "Servizio paghe dell'azienda o del precedente datore di lavoro",
      "Lohnbuchhaltung des Unternehmens oder des früheren Arbeitgebers",
      "Расчётный отдел предприятия или бывшего работодателя"
    ),
    keywords: ["آخر أجر", "dernier salaire", "المستحقات", "fin de relation de travail"],
  },
  {
    id: "ich-attestation-perte-emploi",
    cat: "ichhadat",
    title: T7(
      "شهادة فقدان العمل (الطرد)",
      "Attestation de perte d'emploi (licenciement)",
      "Certificate of job loss (dismissal)",
      "Certificado de pérdida de empleo (despido)",
      "Attestato di perdita del lavoro (licenziamento)",
      "Bescheinigung über Arbeitsplatzverlust (Kündigung)",
      "Справка о потере работы (увольнение)"
    ),
    desc: D7(
      "شهادة من المشغل تثبت إنهاء العمل لغير إرادة الأجير، تقدم للحصول على الدعم والتعويضات.",
      "Attestation de l'employeur confirmant la fin involontaire de l'emploi, produite pour obtenir aides et indemnités.",
      "Employer's certificate confirming the involuntary end of employment, produced to obtain benefits and compensation.",
      "Certificado del empleador que confirma el fin involuntario del empleo, para obtener ayudas e indemnizaciones.",
      "Attestato del datore di lavoro che conferma la fine involontaria dell'impiego, per ottenere sussidi e indennità.",
      "Arbeitgeberbescheinigung über das unfreiwillige Ende der Beschäftigung, für Leistungen und Entschädigungen.",
      "Справка работодателя о непроизвольном прекращении работы для получения пособий и компенсаций."
    ),
    where: W7(
      "مصلحة الموارد البشرية لدى المشغل السابق، وتُودع لدى الجهة المانحة للدعم",
      "Service des ressources humaines de l'ancien employeur, à déposer auprès de l'organisme débiteur",
      "HR department of the former employer, to be filed with the benefit-paying body",
      "Departamento de recursos humanos del antiguo empleador, para presentar ante el organismo pagador",
      "Ufficio risorse umane del precedente datore di lavoro, da depositare presso l'ente erogatore",
      "Personalabteilung des früheren Arbeitgebers, bei der Leistungsträger einzureichen",
      "Кадровая служба бывшего работодателя, подаётся в орган, выплачивающий пособия"
    ),
    keywords: ["فقدان العمل", "perte d'emploi", "licenciement", "بطالة", "chômage"],
  },
  {
    id: "ich-attestation-reprise-travail",
    cat: "ichhadat",
    title: T7(
      "شهادة استئناف العمل",
      "Attestation de reprise du travail",
      "Certificate of return to work",
      "Certificado de reincorporación al trabajo",
      "Attestato di ripresa del lavoro",
      "Bescheinigung über die Wiederaufnahme der Arbeit",
      "Справка о возобновлении работы"
    ),
    desc: D7(
      "شهادة يثبت فيها المشغل عودة الأجير إلى عمله بعد عطلة مرض أو حادث شغل.",
      "Attestation par laquelle l'employeur certifie le retour effectif du salarié après congé maladie ou accident du travail.",
      "Certificate whereby the employer certifies the employee's actual return after sick leave or work accident.",
      "Certificado por el que el empleador acredita el regreso efectivo del trabajador tras baja o accidente laboral.",
      "Attestato con cui il datore di lavoro certifica il rientro effettivo del dipendente dopo malattia o infortunio.",
      "Bescheinigung, mit der der Arbeitgeber die tatsächliche Rückkehr des Arbeitnehmers nach Krankheit oder Unfall bestätigt.",
      "Справка, которой работодатель подтверждает фактическое возвращение работника после болезни или несчастного случая."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة بعد الزيارة الطبية لاستئناف العمل",
      "Service des ressources humaines de l'entreprise, après la visite médicale de reprise",
      "HR department of the company, after the back-to-work medical examination",
      "Departamento de recursos humanos de la empresa, tras el reconocimiento médico de reincorporación",
      "Ufficio risorse umane dell'azienda, dopo la visita medica di rientro",
      "Personalabteilung des Unternehmens nach der Wiedereingliederungsuntersuchung",
      "Отдел кадров предприятия после медицинского осмотра перед возобновлением работы"
    ),
    keywords: ["استئناف العمل", "reprise du travail", "عودة للعمل", "congé maladie"],
  },
  {
    id: "ich-attestation-conges-payes",
    cat: "ichhadat",
    title: T7(
      "شهادة الرخصة السنوية المؤدى عنها",
      "Attestation de congés annuels payés",
      "Certificate of paid annual leave",
      "Certificado de vacaciones anuales pagadas",
      "Attestato di ferie annuali retribuite",
      "Bescheinigung über bezahlten Jahresurlaub",
      "Справка об оплачиваемом ежегодном отпуске"
    ),
    desc: D7(
      "شهادة تثبت استفادة الأجير من رخصته السنوية ومواعيدها، تطلب عند السفر ومعالجة التأشيرات.",
      "Attestation confirmant la jouissance du salarié de son congé annuel et ses dates, demandée pour les voyages et visas.",
      "Certificate confirming the employee's paid annual leave and its dates, requested for travel and visa processing.",
      "Certificado que confirma las vacaciones anuales del trabajador y sus fechas, solicitado para viajes y visados.",
      "Attestato che conferma le ferie annuali del dipendente e le relative date, richiesto per viaggi e visti.",
      "Bescheinigung über den Jahresurlaub des Arbeitnehmers und dessen Termine, für Reisen und Visaverfahren.",
      "Справка о предоставлении работнику ежегодного отпуска и его сроках для поездок и виз."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة أو الإدارة المشغِّلة",
      "Service des ressources humaines de l'entreprise ou de l'administration employeuse",
      "HR department of the employing company or administration",
      "Departamento de recursos humanos de la empresa o administración empleadora",
      "Ufficio risorse umane dell'azienda o dell'amministrazione datrice di lavoro",
      "Personalabteilung des Unternehmens oder der beschäftigenden Verwaltung",
      "Отдел кадров предприятия или администрации-работодателя"
    ),
    keywords: ["الرخصة السنوية", "congés payés", "أجازة مؤدى عنها", "vacances annuelles"],
  },
  {
    id: "ich-attestation-affiliation-cnss-employeur",
    cat: "ichhadat",
    title: T7(
      "شهادة إلحاق الأجير بالضمان الاجتماعي",
      "Attestation d'affiliation du salarié à la CNSS",
      "Certificate of employee's CNSS affiliation",
      "Certificado de afiliación del trabajador a la CNSS",
      "Attestato di iscrizione del dipendente alla CNSS",
      "Bescheinigung der CNSS-Anmeldung des Arbeitnehmers",
      "Справка о регистрации работника в CNSS"
    ),
    desc: D7(
      "شهادة يؤكد فيها المشغل تصريحه بالأجير لدى الصندوق الوطني للضمان الاجتماعي.",
      "Attestation par laquelle l'employeur confirme la déclaration du salarié auprès de la CNSS.",
      "Certificate whereby the employer confirms the employee's registration declaration with the CNSS.",
      "Certificado por el que el empleador confirma la declaración del trabajador ante la CNSS.",
      "Attestato con cui il datore di lavoro conferma la denuncia del dipendente alla CNSS.",
      "Bescheinigung, mit der der Arbeitgeber die Meldung des Arbeitnehmers bei der CNSS bestätigt.",
      "Справка, которой работодатель подтверждает регистрацию работника в CNSS."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة المشغِّلة، ويمكن مراجعة وكالة CNSS عند الحاجة",
      "Service des ressources humaines de l'entreprise employeuse, avec recours à l'agence CNSS si besoin",
      "HR department of the employing company, with referral to the CNSS agency if needed",
      "Departamento de recursos humanos de la empresa empleadora, con apoyo de la agencia CNSS si procede",
      "Ufficio risorse umane dell'azienda datrice di lavoro, con supporto dell'agenzia CNSS se necessario",
      "Personalabteilung des Arbeitgebers, bei Bedarf über die CNSS-Agentur",
      "Кадровая служба работодателя, при необходимости через агентство CNSS"
    ),
    keywords: ["الضمان الاجتماعي", "CNSS", "affiliation", "إلحاق", "social security"],
  },
  {
    id: "ich-attestation-occupation-emploi",
    cat: "ichhadat",
    title: T7(
      "شهادة مزاولة وظيفة عمومية",
      "Attestation d'occupation d'emploi (secteur public)",
      "Certificate of position occupancy (public sector)",
      "Certificado de ocupación de empleo (sector público)",
      "Attestato di occupazione del posto (settore pubblico)",
      "Bescheinigung der Stellenbesetzung (öffentlicher Sektor)",
      "Справка о замещении должности (госсектор)"
    ),
    desc: D7(
      "شهادة من الإدارة تثبت مزاولة الموظف لوظيفته الحالية بصفة مستمرة، تطلب في الملفات البنكية.",
      "Attestation de l'administration constatant l'exercice continu par le fonctionnaire de son poste actuel, demandée par les banques.",
      "Certificate from the administration attesting the official's continuous performance of the current post, requested by banks.",
      "Certificado de la administración que acredita el desempeño continuo del cargo actual, solicitado por los bancos.",
      "Attestato dell'amministrazione sull'esercizio continuativo dell'attuale incarico, richiesto dalle banche.",
      "Dienstbescheinigung über die kontinuierliche Ausübung der aktuellen Stelle, von Banken verlangt.",
      "Справка ведомства о непрерывном замещении должности, запрашиваемая банками."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالإدارة أو المؤسسة العمومية المعنية",
      "Service des ressources humaines de l'administration ou de l'établissement public concerné",
      "HR department of the relevant administration or public institution",
      "Departamento de recursos humanos de la administración o institución pública",
      "Ufficio risorse umane dell'amministrazione o dell'ente pubblico",
      "Personalabteilung der Behörde oder öffentlichen Einrichtung",
      "Кадровая служба соответствующего ведомства или госучреждения"
    ),
    keywords: ["وظيفة عمومية", "fonction publique", "occupation d'emploi", "موظف"],
  },
  {
    id: "ich-attestation-titularisation",
    cat: "ichhadat",
    title: T7(
      "شهادة التعيين في منصب دائم (الترسيم)",
      "Attestation de titularisation dans la fonction publique",
      "Certificate of permanent appointment in the civil service",
      "Certificado de nombramiento en propiedad en la función pública",
      "Attestato di conferma in ruolo nella pubblica amministrazione",
      "Bescheinigung der Festanstellung im öffentlichen Dienst",
      "Справка о зачислении на постоянную должность на госслужбе"
    ),
    desc: D7(
      "شهادة تثبت ترسيم الموظف في رتبته بعد اجتياز فترة التدريب بنجاح.",
      "Attestation constatant la titularisation du fonctionnaire dans son grade à l'issue du stage réglementaire.",
      "Certificate attesting the official's permanent appointment in grade after completing the statutory traineeship.",
      "Certificado que acredita el nombramiento en propiedad del funcionario tras la fase de prácticas.",
      "Attestato del conferimento in ruolo del funzionario dopo il periodo di prova normativo.",
      "Bescheinigung über die Verbeamtung nach erfolgreich absolvierter Referendarszeit.",
      "Справка о зачислении служащего на должность по итогам установленного стажирования."
    ),
    where: W7(
      "قسم التدبير الإداري بوزارة أو إدارة المشغِّلة",
      "Division de la gestion administrative du ministère ou de l'administration employeuse",
      "Administrative management division of the employing ministry or administration",
      "División de gestión administrativa del ministerio o administración empleadora",
      "Divisione gestione amministrativa del ministero o dell'amministrazione",
      "Abteilung Personalverwaltung des beschäftigenden Ministeriums",
      "Отдел административного управления министерства или ведомства"
    ),
    keywords: ["الترسيم", "titularisation", "fonction publique", "موظف مرسَّم"],
  },
  {
    id: "ich-attestation-demission",
    cat: "ichhadat",
    title: T7(
      "شهادة الاستقالة",
      "Attestation de démission",
      "Resignation certificate",
      "Certificado de renuncia",
      "Attestato di dimissioni",
      "Bescheinigung über den Rücktritt",
      "Справка об увольнении по собственному желанию"
    ),
    desc: D7(
      "شهادة يثبت بها المشغل استقالة الأجير الاختيارية وتاريخ توقفه عن العمل.",
      "Attestation par laquelle l'employeur reconnaît la démission volontaire du salarié et la date de cessation d'activité.",
      "Certificate whereby the employer acknowledges the employee's voluntary resignation and the cessation date.",
      "Certificado por el que el empleador reconoce la renuncia voluntaria del trabajador y la fecha de cese.",
      "Attestato con cui il datore di lavoro riconosce le dimissioni volontarie e la data di cessazione.",
      "Bescheinigung, mit der der Arbeitgeber den freiwilligen Rücktritt und das Beendigungsdatum anerkennt.",
      "Справка, которой работодатель подтверждает добровольную отставку и дату прекращения работы."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة بعد قبول الاستقالة",
      "Service des ressources humaines de l'entreprise après acceptation de la démission",
      "HR department of the company after acceptance of the resignation",
      "Departamento de recursos humanos de la empresa tras aceptar la renuncia",
      "Ufficio risorse umane dell'azienda dopo l'accettazione delle dimissioni",
      "Personalabteilung des Unternehmens nach Annahme des Rücktritts",
      "Кадровая служба предприятия после принятия заявления об уходе"
    ),
    keywords: ["استقالة", "démission", "resignation", "ترك العمل"],
  },
  {
    id: "ich-attestation-anciennete",
    cat: "ichhadat",
    title: T7(
      "شهادة الأقدمية في العمل",
      "Attestation d'ancienneté",
      "Certificate of seniority",
      "Certificado de antigüedad",
      "Attestato di anzianità di servizio",
      "Bescheinigung der Betriebszugehörigkeit",
      "Справка о стаже работы"
    ),
    desc: D7(
      "شهادة تحدد تاريخ الالتحاق بالعمل ومدة الأقدمية المتراكمة لدى نفس المشغل.",
      "Attestation indiquant la date d'embauche et l'ancienneté cumulée du salarié auprès du même employeur.",
      "Certificate stating the hiring date and the seniority accumulated with the same employer.",
      "Certificado que indica la fecha de contratación y la antigüedad acumulada con el mismo empleador.",
      "Attestato che indica la data di assunzione e l'anzianità maturata presso lo stesso datore di lavoro.",
      "Bescheinigung über das Einstellungsdatum und die beim selben Arbeitgeber erworbene Betriebszugehörigkeit.",
      "Справка о дате приёма на работу и стаже у одного и того же работодателя."
    ),
    where: W7(
      "قسم المستخدمين بالمقاولة أو الإدارة المعنية",
      "Service du personnel de l'entreprise ou de l'administration concernée",
      "Staff department of the company or administration concerned",
      "Servicio de personal de la empresa o administración",
      "Servizio personale dell'azienda o dell'amministrazione",
      "Personalstelle des Unternehmens oder der Verwaltung",
      "Служба персонала предприятия или ведомства"
    ),
    keywords: ["الأقدمية", "ancienneté", "سنوات العمل", "seniority"],
  },
  {
    id: "ich-attestation-confirmation-periode-essai",
    cat: "ichhadat",
    title: T7(
      "شهادة التثبيت بعد فترة الاختبار",
      "Attestation de confirmation après période d'essai",
      "Confirmation certificate after probation period",
      "Certificado de confirmación tras el período de prueba",
      "Attestato di conferma dopo il periodo di prova",
      "Bestätigung nach der Probezeit",
      "Справка о подтверждении после испытательного срока"
    ),
    desc: D7(
      "وثيقة يؤكد فيها المشغل تثبيت الأجير في منصبه بعد نجاحه في فترة الاختبار.",
      "Document par lequel l'employeur confirme le maintien du salarié à son poste après la période d'essai conclue.",
      "Document whereby the employer confirms the employee's retention in the post after a completed probation period.",
      "Documento por el que el empleador confirma la permanencia del trabajador tras el período de prueba.",
      "Documento con cui il datore di lavoro conferma la permanenza del dipendente dopo il periodo di prova.",
      "Dokument, mit dem der Arbeitgeber die Übernahme nach abgeschlossener Probezeit bestätigt.",
      "Документ, которым работодатель подтверждает сохранение за работником должности после испытательного срока."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة في نهاية فترة الاختبار",
      "Service des ressources humaines de l'entreprise au terme de la période d'essai",
      "HR department of the company at the end of the probation period",
      "Departamento de recursos humanos al finalizar el período de prueba",
      "Ufficio risorse umane al termine del periodo di prova",
      "Personalabteilung des Unternehmens am Ende der Probezeit",
      "Кадровая служба предприятия по окончании испытательного срока"
    ),
    keywords: ["فترة الاختبار", "période d'essai", "تثبيت", "confirmation"],
  },
  {
    id: "ich-attestation-fin-mission-interim",
    cat: "ichhadat",
    title: T7(
      "شهادة نهاية المهمة (العمل المؤقت)",
      "Attestation de fin de mission (travail temporaire)",
      "End-of-mission certificate (temporary work)",
      "Certificado de fin de misión (trabajo temporal)",
      "Attestato di fine missione (lavoro temporaneo)",
      "Bescheinigung über das Einsatzende (Zeitarbeit)",
      "Справка об окончании задания (временная работа)"
    ),
    desc: D7(
      "شهادة تسلّمها وكالة التشغيل المؤقت عند نهاية كل مهمة، تحدد مدتها وطبيعتها.",
      "Attestation remise par l'agence de travail temporaire à la fin de chaque mission, précisant sa durée et sa nature.",
      "Certificate issued by the temporary employment agency at the end of each mission, stating its duration and nature.",
      "Certificado expedido por la agencia de trabajo temporal al final de cada misión, con su duración y naturaleza.",
      "Attestato rilasciato dall'agenzia di lavoro interinale alla fine di ogni missione, con durata e natura.",
      "Bescheinigung der Zeitarbeitsagentur am Ende jedes Einsatzes, mit Dauer und Art der Tätigkeit.",
      "Справка агентства временного трудоустройства об окончании задания с указанием срока и характера."
    ),
    where: W7(
      "وكالة التشغيل المؤقت التي أشركت العامل لدى المقاولة المستعملة",
      "Agence de travail temporaire ayant mis le salarié à disposition de l'entreprise utilisatrice",
      "Temporary employment agency that assigned the worker to the user company",
      "Agencia de trabajo temporal que asignó al trabajador a la empresa usuaria",
      "Agenzia di somministrazione che ha distaccato il lavoratore all'impresa utilizzatrice",
      "Zeitarbeitsagentur, die den Arbeitnehmer dem Einsatzunternehmen überließ",
      "Агентство временного трудоустройства, направившее работника в компанию-заказчика"
    ),
    keywords: ["عمل مؤقت", "intérim", "travail temporaire", "نهاية المهمة", "fin de mission"],
  },
  {
    id: "ich-solde-tout-compte",
    cat: "ichhadat",
    title: T7(
      "وصل تصفية جميع الحقوق",
      "Reçu pour solde de tout compte",
      "Final settlement receipt",
      "Recibo de finiquito",
      "Ricevuta di saldo finale",
      "Quittung über die Schlussabrechnung",
      "Расписка о полном окончательном расчёте"
    ),
    desc: D7(
      "وصل يوقع عليه الأجير عند مغادرته، يثبت تسوية جميع مستحقاته المالية الأخيرة.",
      "Reçu signé par le salarié au moment du départ, constatant l'apurement de l'ensemble de ses créances financières.",
      "Receipt signed by the employee upon departure, attesting the settlement of all final financial dues.",
      "Recibo firmado por el trabajador al partir, que acredita la liquidación de todas sus percepciones económicas.",
      "Ricevuta firmata dal dipendente alla partenza, che attesta il saldo integrale dei crediti economici.",
      "Vom Arbeitnehmer beim Ausscheiden unterzeichnete Quittung über die Abgeltung aller Ansprüche.",
      "Расписка работника при увольнении о полном расчёте по всем финансовым требованиям."
    ),
    where: W7(
      "مصلحة الأجور بالمقاولة عند نهاية عقد العمل",
      "Service de la paie de l'entreprise à la fin du contrat de travail",
      "Payroll department of the company at the end of the employment contract",
      "Servicio de nóminas de la empresa al final del contrato",
      "Servizio paghe dell'azienda alla fine del contratto",
      "Lohnbuchhaltung des Unternehmens am Ende des Arbeitsvertrags",
      "Расчётный отдел предприятия при окончании трудового договора"
    ),
    keywords: ["تصفية الحقوق", "solde de tout compte", "المستحقات النهائية", "fin de contrat"],
  },
  // ─── Résidence & hébergement ───
  {
    id: "ich-attestation-residence-tiers",
    cat: "ichhadat",
    title: T7(
      "شهادة سكنى لحساب قريب (عند الغير)",
      "Attestation de résidence d'un tiers (au nom d'un proche)",
      "Third-party residence certificate (on behalf of a relative)",
      "Certificado de residencia de un tercero (a nombre de un familiar)",
      "Attestato di residenza di un terzo (per conto di un congiunto)",
      "Wohnsitzbescheinigung eines Dritten (im Namen eines Angehörigen)",
      "Справка о проживании третьего лица (от имени родственника)"
    ),
    desc: D7(
      "شهادة يصرّح فيها المضيف بإقامة أحد أقاربه معه بمنزله، تقدم في ملفات المدارس والمنح.",
      "Attestation par laquelle l'hébergeant déclare qu'un proche réside à son domicile, produite pour l'école et les bourses.",
      "Certificate whereby the host declares that a relative resides at their home, produced for school and scholarship files.",
      "Certificado en el que el anfitrión declara que un familiar reside en su domicilio, para escuela y becas.",
      "Attestato con cui l'ospitante dichiara che un congiunto risiede presso il suo domicilio, per scuola e borse.",
      "Bescheinigung, wonach der Gastgeber erklärt, dass ein Angehöriger bei ihm wohnt, für Schule und Stipendien.",
      "Справка, в которой принимающая сторона заявляет о проживании родственника в её жилье, для школы и стипендий."
    ),
    where: W7(
      "يحررها صاحب المسكن ثم تصادق عليها السلطة المحلية عند الاقتضاء",
      "Rédigée par l'hébergeant puis visée par l'autorité locale si nécessaire",
      "Drafted by the host, then endorsed by the local authority if required",
      "Redactada por el anfitrión y visada por la autoridad local si es necesario",
      "Redatta dall'ospitante e vistata dall'autorità locale se necessario",
      "Vom Gastgeber ausgestellt und bei Bedarf von der Ortsbehörde gegengezeichnet",
      "Составляется принимающей стороной и при необходимости заверяется местными властями"
    ),
    keywords: ["سكنى الغير", "résidence d'un tiers", "إقامة قريب", "hébergement proche"],
  },
  {
    id: "ich-attestation-logement-fonction",
    cat: "ichhadat",
    title: T7(
      "شهادة السكنى الوظيفي",
      "Attestation de logement de fonction",
      "Service housing certificate",
      "Certificado de vivienda de servicio",
      "Attestato di alloggio di servizio",
      "Bescheinigung über die Dienstwohnung",
      "Справка о служебном жилье"
    ),
    desc: D7(
      "شهادة تؤكد إسناد المشغل لسكن وظيفي للأجير كامتياز مرتبط بمنصب شغله.",
      "Attestation confirmant l'attribution par l'employeur d'un logement de fonction en tant qu'avantage lié au poste.",
      "Certificate confirming the employer's grant of service housing as a benefit attached to the position.",
      "Certificado que confirma la asignación por el empleador de una vivienda de servicio como ventaja del cargo.",
      "Attestato che conferma l'assegnazione da parte del datore di un alloggio di servizio come benefit della posizione.",
      "Bescheinigung über die Gewährung einer Dienstwohnung als stellengebundener Vorteil.",
      "Справка о предоставлении работодателем служебного жилья как льготы, связанной с должностью."
    ),
    where: W7(
      "مصلحة الموارد البشرية أو مصلحة الوسائل بالإدارة المشغِّلة",
      "Service des ressources humaines ou service des moyens de l'administration employeuse",
      "HR or facilities department of the employing administration",
      "Departamento de recursos humanos o de medios de la administración empleadora",
      "Ufficio risorse umane o servizi generali dell'amministrazione datrice di lavoro",
      "Personal- oder Sachmittelabteilung der beschäftigenden Verwaltung",
      "Кадровая служба или служба обеспечения работодателя"
    ),
    keywords: ["سكن وظيفي", "logement de fonction", "سكن إداري", "employeur"],
  },
  {
    id: "ich-attestation-occupation-gratuite",
    cat: "ichhadat",
    title: T7(
      "شهادة الانتفاع بالسكن بالمجان",
      "Attestation d'occupation à titre gratuit",
      "Certificate of gratuitous occupancy",
      "Certificado de ocupación a título gratuito",
      "Attestato di occupazione a titolo gratuito",
      "Bescheinigung über unentgeltliche Nutzung",
      "Справка о безвозмездном пользовании"
    ),
    desc: D7(
      "وثيقة يقر فيها المالك بإسكان شخص لديه بالمجان دون أي كراء، تعتمد في الملفات الاجتماعية.",
      "Document par lequel le propriétaire atteste héberger gratuitement un occupant sans perception de loyer.",
      "Document whereby the owner attests housing an occupant free of charge without collecting rent.",
      "Documento por el que el propietario certifica alojar gratuitamente a un ocupante sin cobrar alquiler.",
      "Documento con cui il proprietario attesta di ospitare gratuitamente un occupante senza riscuotere canone.",
      "Urkunde, mit der der Eigentümer eine unentgeltliche Überlassung ohne Miete bestätigt.",
      "Документ, которым собственник подтверждает бесплатное проживание жильца без взимания аренды."
    ),
    where: W7(
      "يحررها مالك العقار وتصادق عليها السلطة المحلية عند الحاجة",
      "Établie par le propriétaire du bien et visée par l'autorité locale en cas de besoin",
      "Issued by the property owner and endorsed by the local authority when needed",
      "Emitida por el propietario del inmueble y visada por la autoridad local si procede",
      "Redatta dal proprietario dell'immobile e vistata dall'autorità locale se necessario",
      "Vom Immobilieneigentümer ausgestellt und bei Bedarf von der Ortsbehörde bestätigt",
      "Выдаётся собственником недвижимости и при необходимости заверяется местными властями"
    ),
    keywords: ["انتفاع مجاني", "occupation gratuite", "بدون كراء", "propriétaire"],
  },
  {
    id: "ich-attestation-residence-inscription-scolaire",
    cat: "ichhadat",
    title: T7(
      "شهادة سكنى الطفل للتسجيل المدرسي",
      "Attestation de résidence d'un enfant pour inscription scolaire",
      "Child residence certificate for school enrollment",
      "Certificado de residencia de un niño para inscripción escolar",
      "Attestato di residenza del minore per l'iscrizione scolastica",
      "Wohnsitzbescheinigung eines Kindes zur Schulanmeldung",
      "Справка о проживании ребёнка для записи в школу"
    ),
    desc: D7(
      "شهادة يؤكد فيها أحد الوالدين إقامة ابنه معه بعنوان سكناه طيلة السنة الدراسية.",
      "Attestation par laquelle un parent confirme que son enfant réside avec lui à son adresse durant l'année scolaire.",
      "Certificate whereby a parent confirms the child resides with them at their address during the school year.",
      "Certificado por el que un progenitor confirma que el niño reside con él durante el curso escolar.",
      "Attestato con cui un genitore conferma che il figlio risiede con lui durante l'anno scolastico.",
      "Bescheinigung, mit der ein Elternteil bestätigt, dass das Kind im Schuljahr bei ihm wohnt.",
      "Справка, которой родитель подтверждает проживание ребёнка с ним в течение учебного года."
    ),
    where: W7(
      "يحررها الوالد المعني ثم يودع لدى إدارة المؤسسة التعليمية",
      "Rédigée par le parent concerné, puis déposée auprès de la direction de l'établissement scolaire",
      "Drafted by the parent concerned, then filed with the school administration",
      "Redactada por el progenitor y presentada en la dirección del centro escolar",
      "Redatta dal genitore e depositata presso la direzione dell'istituto scolastico",
      "Vom betreffenden Elternteil ausgestellt und bei der Schulleitung eingereicht",
      "Составляется родителем и подаётся в администрацию учебного заведения"
    ),
    keywords: ["التسجيل المدرسي", "inscription scolaire", "سكنى الطفل", "école"],
  },
  {
    id: "ich-attestation-domicile-cin",
    cat: "ichhadat",
    title: T7(
      "شهادة العنوان لتغيير محل السكنى في البطاقة الوطنية",
      "Attestation de domicile pour changement d'adresse de la CIN",
      "Address certificate for ID card address change",
      "Certificado de domicilio para cambio de dirección del DNI",
      "Attestato di domicilio per cambio di indirizzo della carta d'identità",
      "Wohnsitzbescheinigung für Adressänderung des Personalausweises",
      "Справка о месте жительства для смены адреса в удостоверении личности"
    ),
    desc: D7(
      "شهادة سكنى ترفق بملف تغيير العنوان في البطاقة الوطنية التعريفية الإلكترونية.",
      "Attestation de résidence jointe au dossier de changement d'adresse de la carte nationale d'identité électronique.",
      "Residence certificate attached to the address-change file for the electronic national ID card.",
      "Certificado de residencia que acompaña al expediente de cambio de dirección del DNI electrónico.",
      "Attestato di residenza allegato alla pratica di cambio di indirizzo della carta d'identità elettronica.",
      "Wohnsitzbescheinigung, die dem Antrag auf Adressänderung des elektronischen Personalausweises beiliegt.",
      "Справка о месте жительства, прилагаемая к делу об изменении адреса в электронном удостоверении личности."
    ),
    where: W7(
      "الملحقة الإدارية أو السلطة المحلية التابع لها عنوان السكنى الجديد",
      "Annexe administrative ou autorité locale du nouveau domicile",
      "Administrative annex or local authority of the new home address",
      "Anexo administrativo o autoridad local del nuevo domicilio",
      "Annesso amministrativo o autorità locale del nuovo domicilio",
      "Verwaltungsanhaltstelle oder Ortsbehörde des neuen Wohnsitzes",
      "Административный округ или местные власти по новому месту жительства"
    ),
    keywords: ["البطاقة الوطنية", "CIN", "تغيير العنوان", "changement d'adresse", "سكنى"],
  },
  {
    id: "ich-attestation-hebergement-etudiant",
    cat: "ichhadat",
    title: T7(
      "شهادة استضافة طالب من طرف مكري العقار",
      "Attestation d'hébergement d'un étudiant par le bailleur",
      "Student accommodation certificate from the landlord",
      "Certificado de alojamiento de estudiante por el arrendador",
      "Attestato di alloggio di uno studente rilasciato dal locatore",
      "Unterkunftsbescheinigung für Studenten vom Vermieter",
      "Справка от арендодателя о размещении студента"
    ),
    desc: D7(
      "شهادة يؤكد فيها مكري العقار إقامة طالب كراءً عنده، تطلب في ملفات المنح والمدن الجامعية.",
      "Attestation par laquelle le bailleur confirme qu'un étudiant loge dans son bien, exigée pour les bourses et cités universitaires.",
      "Certificate whereby the landlord confirms a student is lodging in their property, required for scholarships and campus housing.",
      "Certificado por el que el arrendador confirma que un estudiante vive en su inmueble, exigido para becas y residencias.",
      "Attestato con cui il locatore conferma che uno studente alloggia nel suo immobile, richiesto per borse e collegi.",
      "Bescheinigung des Vermieters, dass ein Student in seinem Objekt wohnt, für Stipendien und Wohnheime.",
      "Справка арендодателя о проживании студента в его недвижимости для стипендий и общежитий."
    ),
    where: W7(
      "يحررها مكري العقار مع عقد الكراء، وتودع بالمؤسسة الجامعية أو المدينة الجامعية",
      "Établie par le bailleur avec le contrat de bail, et déposée auprès de l'université ou de la cité universitaire",
      "Issued by the landlord with the lease contract, and filed with the university or campus residence",
      "Emitida por el arrendador junto al contrato y presentada en la universidad o residencia",
      "Redatta dal locatore con il contratto d'affitto e depositata presso l'università o il collegio",
      "Vom Vermieter mit Mietvertrag ausgestellt und bei der Universität oder dem Wohnheim eingereicht",
      "Составляется арендодателем с договором аренды и подаётся в университет или общежитие"
    ),
    keywords: ["استضافة طالب", "hébergement étudiant", "منحة", "bourse", "bailleur"],
  },
  {
    id: "ich-certificat-residence-etranger",
    cat: "ichhadat",
    title: T7(
      "شهادة الإقامة بالخارج (المغاربة المقيمون بالخارج)",
      "Certificat de résidence à l'étranger (MRE)",
      "Certificate of residence abroad (MRE)",
      "Certificado de residencia en el extranjero (MRE)",
      "Certificato di residenza all'estero (MRE)",
      "Bescheinigung über den Auslandswohnsitz (MRE)",
      "Справка о проживании за границей (MRE)"
    ),
    desc: D7(
      "شهادة قنصلية تثبت إقامة المغربي المقيم بالخارج بدائرة اختيار القنصلية المانحة.",
      "Certificat consulaire attestant la résidence du Marocain du monde dans la circonscription du consulat délivreur.",
      "Consular certificate attesting the residence of a Moroccan living abroad within the issuing consulate's jurisdiction.",
      "Certificado consular que acredita la residencia del marroquí en el extranjero en la demarcación del consulado.",
      "Certificato consolare che attesta la residenza del marocchino all'estero nella circoscrizione del consolato.",
      "Konsularbescheinigung über den Wohnsitz eines im Ausland lebenden Marokkaners im Konsularbezirk.",
      "Консульская справка о проживании марокканца за рубежом в округе выдающего консульства."
    ),
    where: W7(
      "القنصلية أو السفارة المغربية بمحل الإقامة بالخارج، عبر بوابة consulat.ma",
      "Consulat ou ambassade du Maroc au lieu de résidence, via le portail consulat.ma",
      "Moroccan consulate or embassy at the place of residence, via the consulat.ma portal",
      "Consulado o embajada de Marruecos en el lugar de residencia, vía consulat.ma",
      "Consolato o ambasciata del Marocco nel luogo di residenza, tramite il portale consulat.ma",
      "Marokkanisches Konsulat oder Botschaft am Wohnort, über das Portal consulat.ma",
      "Марокканское консульство или посольство по месту проживания через портал consulat.ma"
    ),
    keywords: ["الإقامة بالخارج", "résidence à l'étranger", "MRE", "consulat"],
    authority: "consulat",
  },
  {
    id: "ich-certificat-inscription-consulaire",
    cat: "ichhadat",
    title: T7(
      "شهادة التسجيل القنصلي",
      "Certificat d'inscription consulaire",
      "Consular registration certificate",
      "Certificado de inscripción consular",
      "Certificato di iscrizione consolare",
      "Konsularanmeldebescheinigung",
      "Справка о постановке на консульский учёт"
    ),
    desc: D7(
      "شهادة تثبت تسجيل المغربي المقيم بالخارج في اللوائح القنصلية، ضرورية للتوثيق والخدمات.",
      "Certificat constatant l'inscription du ressortissant au registre consulaire, indispensable pour l'acte notarial et les services consulaires.",
      "Certificate attesting the national's registration on the consular register, essential for notarial deeds and consular services.",
      "Certificado que acredita la inscripción del nacional en el registro consular, esencial para escrituras y servicios.",
      "Certificato dell'iscrizione del cittadino nel registro consolare, indispensabile per atti notarili e servizi.",
      "Bescheinigung über die Eintragung im Konsularregister, unverzichtbar für Urkunden und Konsularleistungen.",
      "Справка о внесении гражданина в консульский реестр, необходимая для нотариальных актов и услуг."
    ),
    where: W7(
      "القنصلية المغربية بمحل الإقامة، بحضور شخصي أو عبر بوابة consulat.ma",
      "Consulat du Maroc au lieu de résidence, en personne ou via consulat.ma",
      "Moroccan consulate at the place of residence, in person or via consulat.ma",
      "Consulado de Marruecos en el lugar de residencia, presencial o vía consulat.ma",
      "Consolato del Marocco nel luogo di residenza, di persona o tramite consulat.ma",
      "Marokkanisches Konsulat am Wohnort, persönlich oder über consulat.ma",
      "Марокканское консульство по месту проживания — лично или через consulat.ma"
    ),
    keywords: ["التسجيل القنصلي", "inscription consulaire", "MRE", "قنصلية"],
    authority: "consulat",
  },
  {
    id: "ich-attestation-domicile-locataire",
    cat: "ichhadat",
    title: T7(
      "شهادة سكنى المكتري من طرف المالك",
      "Attestation de domicile du locataire par le propriétaire",
      "Tenant address certificate from the owner",
      "Certificado de domicilio del inquilino por el propietario",
      "Attestato di domicilio dell'inquilino rilasciato dal proprietario",
      "Wohnsitzbescheinigung des Mieters vom Eigentümer",
      "Справка о месте жительства арендатора от собственника"
    ),
    desc: D7(
      "شهادة يقر فيها المالك بكراء مسكنه لمكترٍ معين، تعوض عقد الكراء عند غيابه.",
      "Attestation par laquelle le propriétaire reconnaît louer son logement à un locataire déterminé, en l'absence de bail.",
      "Certificate whereby the owner acknowledges renting the home to a named tenant, in the absence of a lease.",
      "Certificado por el que el propietario reconoce alquilar su vivienda a un inquilino determinado, a falta de contrato.",
      "Attestato con cui il proprietario riconosce di affittare l'alloggio a un inquilino identificato, in assenza di contratto.",
      "Bescheinigung, mit der der Eigentümer die Vermietung an einen bestimmten Mieter bestätigt, wenn kein Mietvertrag vorliegt.",
      "Справка, которой собственник подтверждает сдачу жилья конкретному арендатору при отсутствии договора."
    ),
    where: W7(
      "يحررها مالك العقار ويرفق بنسخة من بطاقته الوطنية ووثيقة الملكية",
      "Établie par le propriétaire, accompagnée d'une copie de sa CIN et d'un justificatif de propriété",
      "Issued by the property owner, with a copy of their ID and proof of ownership",
      "Emitida por el propietario, con copia de su DNI y justificante de propiedad",
      "Redatta dal proprietario, con copia della CIN e prova di proprietà",
      "Vom Eigentümer ausgestellt, mit Kopie des Ausweises und Eigentumsnachweis",
      "Выдаётся собственником с копией удостоверения личности и подтверждением права собственности"
    ),
    keywords: ["المكتري", "locataire", "domicile", "propriétaire", "كراء"],
  },
  {
    id: "ich-attestation-residence-cite-universitaire",
    cat: "ichhadat",
    title: T7(
      "شهادة الإقامة بالمدينة الجامعية",
      "Attestation de résidence en cité universitaire",
      "Certificate of residence in a university campus hall",
      "Certificado de residencia en ciudad universitaria",
      "Attestato di residenza nella casa dello studente",
      "Bescheinigung über den Wohnsitz im Studentenwohnheim",
      "Справка о проживании в студенческом кампусе"
    ),
    desc: D7(
      "شهادة من إدارة المدينة الجامعية تثبت إقامة الطالب بها طيلة السنة الجامعية.",
      "Attestation de la direction de la cité universitaire confirmant le séjour de l'étudiant durant l'année universitaire.",
      "Certificate from the campus residence management confirming the student's stay during the academic year.",
      "Certificado de la dirección de la ciudad universitaria que confirma la estancia del estudiante durante el curso.",
      "Attestato della direzione della casa dello studente che conferma il soggiorno durante l'anno accademico.",
      "Bescheinigung der Wohnheimleitung über den Aufenthalt des Studenten im akademischen Jahr.",
      "Справка от управления студенческого городка о проживании студента в течение учебного года."
    ),
    where: W7(
      "إدارة المدينة الجامعية التابع لها الطالب",
      "Direction de la cité universitaire dont dépend l'étudiant",
      "Management of the campus residence to which the student is assigned",
      "Dirección de la ciudad universitaria a la que pertenece el estudiante",
      "Direzione della casa dello studente di afferenza dello studente",
      "Leitung des dem Studenten zugewiesenen Wohnheims",
      "Управление студенческого общежития, к которому прикреплён студент"
    ),
    keywords: ["المدينة الجامعية", "cité universitaire", "إقامة الطالب", "résidence étudiante"],
  },
  // ─── Revenus & charges ───
  {
    id: "ich-attestation-revenus-fonciers",
    cat: "ichhadat",
    title: T7(
      "شهادة المداخيل العقارية",
      "Attestation de revenus fonciers",
      "Rental income certificate",
      "Certificado de ingresos por alquiler",
      "Attestato di redditi fondiari",
      "Bescheinigung über Mieterträge",
      "Справка о доходах от аренды"
    ),
    desc: D7(
      "شهادة تحدد المداخيل السنوية الناتجة عن كراء العقارات، تطلب في الملفات البنكية والضريبية.",
      "Attestation précisant les revenus annuels tirés de la location d'immeubles, demandée par les banques et l'administration fiscale.",
      "Certificate stating annual income from renting out property, requested by banks and the tax administration.",
      "Certificado que indica los ingresos anuales por alquiler de inmuebles, solicitado por bancos y hacienda.",
      "Attestato che indica i redditi annuali da locazione di immobili, richiesto da banche e amministrazione fiscale.",
      "Bescheinigung über jährliche Einkünfte aus der Vermietung von Immobilien, von Banken und Finanzamt verlangt.",
      "Справка о годовых доходах от сдачи недвижимости в аренду, запрашиваемая банками и налоговой."
    ),
    where: W7(
      "يحررها المالك المكري مع إثبات الملكية وعقود الكراء",
      "Établie par le propriétaire bailleur avec justificatif de propriété et baux",
      "Issued by the landlord with proof of ownership and lease contracts",
      "Emitida por el arrendador con justificante de propiedad y contratos de alquiler",
      "Redatta dal locatore con prova di proprietà e contratti di locazione",
      "Vom Vermieter mit Eigentumsnachweis und Mietverträgen ausgestellt",
      "Составляется арендодателем с подтверждением собственности и договорами аренды"
    ),
    keywords: ["مداخيل عقارية", "revenus fonciers", "كراء", "bailleur"],
  },
  {
    id: "ich-attestation-pension-retraite",
    cat: "ichhadat",
    title: T7(
      "شهادة مبلغ معاش التقاعد",
      "Attestation de pension de retraite",
      "Retirement pension certificate",
      "Certificado de pensión de jubilación",
      "Attestato di pensione di vecchiaia",
      "Bescheinigung über die Altersrente",
      "Справка о пенсии по возрасту"
    ),
    desc: D7(
      "شهادة تحدد مبلغ المعاش الشهري المصروف، تطلب من المتقاعدين في القروض والملفات البنكية.",
      "Attestation indiquant le montant mensuel de la pension servie, exigée des retraités pour les crédits et dossiers bancaires.",
      "Certificate stating the monthly pension amount paid, required from retirees for loans and banking files.",
      "Certificado que indica el importe mensual de la pensión, exigido a jubilados para préstamos y expedientes bancarios.",
      "Attestato che indica l'importo mensile della pensione erogata, richiesto ai pensionati per prestiti e pratiche bancarie.",
      "Bescheinigung über die monatliche Rentenhöhe, von Rentnern für Kredite und Bankakten verlangt.",
      "Справка о размере ежемесячной пенсии, требуемая от пенсионеров для кредитов и банковских дел."
    ),
    where: W7(
      "الصندوق الذي يصرف المعاش (CNSS أو RCAR أو صندوق خاص) عبر وكالاته أو بوابته",
      "Caisse qui verse la pension (CNSS, RCAR ou caisse spéciale) via ses agences ou son portail",
      "Fund paying the pension (CNSS, RCAR or special fund) via its branches or portal",
      "Caja que paga la pensión (CNSS, RCAR u otra) por sus agencias o portal",
      "Cassa che eroga la pensione (CNSS, RCAR o cassa speciale) tramite sportelli o portale",
      "Rentenzahlstelle (CNSS, RCAR oder Sonderkasse) über Filialen oder Portal",
      "Фонд, выплачивающий пенсию (CNSS, RCAR или специальный), через отделения или портал"
    ),
    keywords: ["معاش", "pension", "تقاعد", "retraite", "CNSS"],
  },
  {
    id: "ich-attestation-absence-revenu-etudiant",
    cat: "ichhadat",
    title: T7(
      "شهادة انعدام الدخل للطالب",
      "Attestation d'absence de revenus (étudiant)",
      "Certificate of no income (student)",
      "Certificado de ausencia de ingresos (estudiante)",
      "Attestato di assenza di reddito (studente)",
      "Bescheinigung über Einkommenslosigkeit (Student)",
      "Справка об отсутствии доходов (студент)"
    ),
    desc: D7(
      "شهادة يثبت بها الطالب عدم توفره على أي دخل، ترفق بملفات المنح والدعم الاجتماعي.",
      "Attestation par laquelle l'étudiant certifie ne disposer d'aucun revenu, jointe aux dossiers de bourse et d'aide sociale.",
      "Certificate whereby the student certifies having no income, attached to scholarship and social aid files.",
      "Certificado por el que el estudiante declara no disponer de ingresos, unido a expedientes de beca y ayuda social.",
      "Attestato con cui lo studente dichiara di non avere redditi, allegato alle domande di borsa e aiuto sociale.",
      "Bescheinigung des Studenten, über kein Einkommen zu verfügen, für Stipendien- und Sozialakten.",
      "Справка студента об отсутствии доходов, прилагаемая к делам о стипендии и социальной помощи."
    ),
    where: W7(
      "المؤسسة الجامعية أو السلطة المحلية حسب الجهة الطالبة",
      "Établissement universitaire ou autorité locale selon l'organisme demandeur",
      "University institution or local authority depending on the requesting body",
      "Institución universitaria o autoridad local según el organismo solicitante",
      "Istituto universitario o autorità locale a seconda dell'ente richiedente",
      "Hochschuleinrichtung oder Ortsbehörde je nach anfordernder Stelle",
      "Университет или местные власти в зависимости от запрашивающего органа"
    ),
    keywords: ["انعدام الدخل", "absence de revenus", "منحة", "bourse", "طالب"],
  },
  {
    id: "ich-attestation-personnes-charge",
    cat: "ichhadat",
    title: T7(
      "شهادة الأشخاص المتكفل بهم",
      "Attestation de personnes à charge",
      "Certificate of dependents",
      "Certificado de personas a cargo",
      "Attestato di persone a carico",
      "Bescheinigung über Unterhaltsberechtigte",
      "Справка об иждивенцах"
    ),
    desc: D7(
      "شهادة تحدد عدد الأشخاص المتكفل بهم من طرف المعني، تعتمد في الملفات الضريبية والبنكية.",
      "Attestation précisant le nombre de personnes prises en charge par l'intéressé, utilisée à des fins fiscales et bancaires.",
      "Certificate stating the number of dependents supported by the holder, used for tax and banking purposes.",
      "Certificado que indica el número de personas a cargo del interesado, usado para fines fiscales y bancarios.",
      "Attestato che indica il numero di persone a carico dell'interessato, per finalità fiscali e bancarie.",
      "Bescheinigung über die Zahl der unterhaltenen Personen, für steuerliche und bankbezogene Zwecke.",
      "Справка о числе лиц на иждивении заявителя для налоговых и банковских целей."
    ),
    where: W7(
      "مصلحة الموارد البشرية للمشغل أو السلطة المحلية حسب الجهة الطالبة",
      "Service des ressources humaines de l'employeur ou autorité locale selon le demandeur",
      "Employer's HR department or local authority depending on the requester",
      "Departamento de recursos humanos del empleador o autoridad local según el solicitante",
      "Ufficio risorse umane del datore di lavoro o autorità locale a seconda del richiedente",
      "Personalabteilung des Arbeitgebers oder Ortsbehörde je nach Anfragendem",
      "Кадровая служба работодателя или местные власти в зависимости от запрашивающего"
    ),
    keywords: ["أشخاص في وضعية تكفل", "personnes à charge", "أعباء العائلة", "dependents"],
  },
  {
    id: "ich-attestation-revenus-visa",
    cat: "ichhadat",
    title: T7(
      "شهادة الدخل لإثبات الوسائل المالية",
      "Attestation de revenus pour justification de moyens",
      "Income certificate as proof of financial means",
      "Certificado de ingresos para justificación de medios",
      "Attestato di reddito per giustificare i mezzi",
      "Einkommensbescheinigung als Nachweis der Mittel",
      "Справка о доходах для подтверждения финансовых средств"
    ),
    desc: D7(
      "شهادة تجمع الأجر والمداخيل الأخرى لإثبات القدرة المالية أمام القنصليات.",
      "Attestation cumulant salaire et autres revenus afin de prouver la capacité financière devant les consulats.",
      "Certificate combining salary and other income to prove financial capacity before consulates.",
      "Certificado que combina salario y otros ingresos para probar la capacidad financiera ante los consulados.",
      "Attestato che somma stipendio e altri redditi per provare la capacità finanziaria davanti ai consolati.",
      "Bescheinigung, die Gehalt und weitere Einkünfte zusammenfasst, um die Zahlungsfähigkeit vor Konsulaten nachzuweisen.",
      "Справка о зарплате и других доходах для доказательства платёжеспособности перед консульствами."
    ),
    where: W7(
      "المشغل والبنك معا، مع إرفاق كشوف الحساب الأخيرة",
      "Employeur et banque conjointement, avec les derniers relevés de compte",
      "Employer and bank jointly, together with the latest account statements",
      "Empleador y banco conjuntamente, con los últimos extractos de cuenta",
      "Datore di lavoro e banca congiuntamente, con gli ultimi estratti conto",
      "Arbeitgeber und Bank gemeinsam, zusammen mit den letzten Kontoauszügen",
      "Работодатель и банк совместно с последними выписками по счёту"
    ),
    keywords: ["الوسائل المالية", "justification de moyens", "visa", "revenus", "تأشيرة"],
  },
  {
    id: "ich-attestation-allocations-familiales",
    cat: "ichhadat",
    title: T7(
      "شهادة التعويضات العائلية",
      "Attestation d'allocations familiales (CNSS)",
      "Family allowances certificate (CNSS)",
      "Certificado de asignaciones familiares (CNSS)",
      "Attestato di assegni familiari (CNSS)",
      "Bescheinigung über Familienbeihilfen (CNSS)",
      "Справка о семейных пособиях (CNSS)"
    ),
    desc: D7(
      "شهادة تثبت استفادة المؤمن له من التعويضات العائلية ومبالغها، تطلب في الملفات الاجتماعية.",
      "Attestation constatant la perception des allocations familiales et leur montant, produite dans les dossiers sociaux.",
      "Certificate attesting receipt of family allowances and their amount, produced in social welfare files.",
      "Certificado que acredita la percepción de asignaciones familiares y su importe, para expedientes sociales.",
      "Attestato della percezione degli assegni familiari e del loro importo, per pratiche sociali.",
      "Bescheinigung über den Empfang von Familienbeihilfen und deren Höhe, für Sozialakten.",
      "Справка о получении семейных пособий и их размере для социальных дел."
    ),
    where: W7(
      "وكالات الصندوق الوطني للضمان الاجتماعي أو بوابة macnss.ma",
      "Agences de la CNSS ou portail macnss.ma",
      "CNSS agencies or the macnss.ma portal",
      "Agencias de la CNSS o el portal macnss.ma",
      "Sportelli della CNSS o portale macnss.ma",
      "CNSS-Agenturen oder das Portal macnss.ma",
      "Агентства CNSS или портал macnss.ma"
    ),
    keywords: ["التعويضات العائلية", "allocations familiales", "CNSS", "allocations"],
  },
  {
    id: "ich-attestation-credits-en-cours",
    cat: "ichhadat",
    title: T7(
      "شهادة القروض الجارية (الأعباء)",
      "Attestation de crédits en cours",
      "Certificate of outstanding loans",
      "Certificado de créditos en curso",
      "Attestato dei prestiti in corso",
      "Bescheinigung über laufende Kredite",
      "Справка о действующих кредитах"
    ),
    desc: D7(
      "شهادة بنكية تحصر القروض الجارية وأقساطها الشهرية، ترفق بطلبات التمويل الجديدة.",
      "Attestation bancaire recensant les prêts en cours et leurs mensualités, jointe aux nouvelles demandes de financement.",
      "Bank certificate listing outstanding loans and their monthly instalments, attached to new financing applications.",
      "Certificado bancario que enumera los préstamos vigentes y sus cuotas, adjunto a nuevas solicitudes de financiación.",
      "Attestato bancario che elenca i prestiti in corso e le relative rate, allegato alle nuove richieste di finanziamento.",
      "Bankbescheinigung über laufende Kredite und Raten, neuen Finanzierungsanträgen beizufügen.",
      "Банковская справка о действующих кредитах и платежах, прилагаемая к новым заявкам на финансирование."
    ),
    where: W7(
      "الوكالة البنكية التي تشرف على قروض المعني وحساباته",
      "Agence bancaire gérant les prêts et comptes de l'intéressé",
      "Bank branch managing the applicant's loans and accounts",
      "Sucursal bancaria que gestiona los préstamos y cuentas del interesado",
      "Filiale bancaria che gestisce prestiti e conti dell'interessato",
      "Bankfiliale, die Kredite und Konten des Antragstellers führt",
      "Банковский филиал, ведущий кредиты и счета заявителя"
    ),
    keywords: ["قروض", "crédits en cours", "أقساط", "endettement"],
  },
  {
    id: "ich-attestation-revenu-profession-liberale",
    cat: "ichhadat",
    title: T7(
      "شهادة مداخيل المهنة الحرة",
      "Attestation de revenus d'une profession libérale",
      "Income certificate for a self-employed profession",
      "Certificado de ingresos de profesión liberal",
      "Attestato di redditi di libera professione",
      "Einkommensbescheinigung für freiberufliche Tätigkeit",
      "Справка о доходах от свободной профессии"
    ),
    desc: D7(
      "شهادة يثبت بها صاحب المهنة الحرة مداخيله، تطلب من البنوك والقنصليات في مختلف الملفات.",
      "Attestation par laquelle le professionnel libéral établit ses revenus, exigée des banques et consulats.",
      "Certificate whereby the self-employed professional declares their income, required by banks and consulates.",
      "Certificado por el que el profesional liberal declara sus ingresos, exigido por bancos y consulados.",
      "Attestato con cui il professionista dichiara i propri redditi, richiesto da banche e consolati.",
      "Bescheinigung, mit der der Freiberufler sein Einkommen nachweist, von Banken und Konsulaten verlangt.",
      "Справка лица свободной профессии о доходах, требуемая банками и консульствами."
    ),
    where: W7(
      "يحررها المعني مع الوثائق الضريبية والفواتير، وتصادق عليها الهيئة المهنية عند الاقتضاء",
      "Établie par l'intéressé avec pièces fiscales et factures, visée par l'ordre professionnel si nécessaire",
      "Drafted by the holder with tax documents and invoices, endorsed by the professional body if needed",
      "Redactada por el interesado con documentación fiscal y facturas, visada por el colegio profesional si procede",
      "Redatta dall'interessato con documenti fiscali e fatture, vistata dall'ordine professionale se necessario",
      "Vom Inhaber mit Steuerunterlagen und Rechnungen erstellt, bei Bedarf von der Berufskammer bestätigt",
      "Составляется владельцем с налоговыми документами и счетами, при необходимости заверяется профессиональной палатой"
    ),
    keywords: ["مهنة حرة", "profession libérale", "مداخيل", "revenus"],
  },
  // ─── Propriété & foncier ───
  {
    id: "ich-attestation-possession-melkia",
    cat: "ichhadat",
    title: T7(
      "شهادة الحيازة والملكية العرفية",
      "Attestation de possession coutumière (melkia)",
      "Certificate of customary possession (melkia)",
      "Certificado de posesión consuetudinaria (melkia)",
      "Attestato di possesso consuetudinario (melkia)",
      "Bescheinigung über traditionellen Besitz (Melkia)",
      "Справка о традиционном владении (мелкия)"
    ),
    desc: D7(
      "شهادة من السلطة المحلية تثبت الحيازة العرفية للأرض، تعتمد في العقود والملفات القروية.",
      "Attestation de l'autorité locale constatant la possession coutumière d'une terre, admise dans les actes et dossiers ruraux.",
      "Certificate from the local authority attesting customary possession of land, accepted in deeds and rural files.",
      "Certificado de la autoridad local que acredita la posesión consuetudinaria de tierras, válido en actos y expedientes rurales.",
      "Attestato dell'autorità locale sul possesso consuetudinario di un terreno, valido in atti e pratiche rurali.",
      "Bescheinigung der Ortsbehörde über den traditionellen Grundbesitz, anerkannt in Urkunden und ländlichen Akten.",
      "Справка местных властей о традиционном владении землёй, признаваемая в актах и сельских делах."
    ),
    where: W7(
      "السلطة المحلية (القيادة أو الملحقة الإدارية) بالجماعة التابع لها العقار",
      "Autorité locale (caïdat ou annexe administrative) de la commune du bien",
      "Local authority (caïd's office or administrative annex) of the commune where the property lies",
      "Autoridad local (caidad o anexo administrativo) de la comuna del inmueble",
      "Autorità locale (caidato o annesso amministrativo) del comune dell'immobile",
      "Ortsbehörde (Caïdat oder Verwaltungsanhalt) der Gemeinde des Grundstücks",
      "Местные власти (кайдат или административный округ) коммуны, где находится имущество"
    ),
    keywords: ["ملكية", "melkia", "حيازة", "possession", "أرض عرفية"],
    popular: true,
  },
  {
    id: "ich-certificat-non-propriete-ancfcc",
    cat: "ichhadat",
    title: T7(
      "شهادة عدم الملكية العقارية",
      "Certificat de non-propriété immobilière",
      "Certificate of non-ownership of real property",
      "Certificado de no propiedad inmobiliaria",
      "Certificato di non proprietà immobiliare",
      "Negativbescheinigung Immobilien",
      "Справка об отсутствии недвижимости в собственности"
    ),
    desc: D7(
      "شهادة سلبية تثبت عدم تسجيل أي عقار باسم المعني في المحافظة العقارية.",
      "Certificat négatif attestant qu'aucun bien immobilier n'est immatriculé au nom du demandeur.",
      "Negative certificate attesting that no real property is registered in the applicant's name.",
      "Certificado negativo que acredita que ningún inmueble está inscrito a nombre del solicitante.",
      "Certificato negativo che attesta l'assenza di immobili intestati al richiedente.",
      "Negativbescheinigung, dass kein Grundstück auf den Namen des Antragstellers eingetragen ist.",
      "Негативная справка об отсутствии зарегистрированной на заявителя недвижимости."
    ),
    where: W7(
      "المحافظة العقارية التابعة لمحل الطلب، عبر وكالاتها أو بوابة ancfcc.ma",
      "Conservation foncière du lieu de la demande, via ses agences ou le portail ancfcc.ma",
      "Land registry of the place of application, via its agencies or the ancfcc.ma portal",
      "Conservación de la propiedad del lugar de la solicitud, por sus agencias o ancfcc.ma",
      "Conservatoria fondiaria del luogo della richiesta, tramite agenzie o portale ancfcc.ma",
      "Grundbuchamt des Antragsorts, über Agenturen oder das Portal ancfcc.ma",
      "Земельная кадастровая служба по месту запроса через агентства или портал ancfcc.ma"
    ),
    keywords: ["عدم الملكية", "certificat négatif", "ANCFCC", "non-propriété"],
    authority: "ancfcc",
  },
  {
    id: "ich-certificat-non-opposition-vehicule",
    cat: "ichhadat",
    title: T7(
      "شهادة عدم وجود معارضة على السيارة",
      "Certificat de non-opposition au transfert de la carte grise",
      "Certificate of non-opposition to vehicle registration transfer",
      "Certificado de no oposición a la transferencia del permiso de circulación",
      "Certificato di non opposizione al trasferimento della carta di circolazione",
      "Unbedenklichkeitsbescheinigung für die Übertragung des Fahrzeugscheins",
      "Справка об отсутствии возражений против переоформления техпаспорта"
    ),
    desc: D7(
      "شهادة تثبت خلو السيارة من أي معارضة إدارية أو قضائية تحول دون نقل بطاقتها الرمادية.",
      "Certificat attestant que le véhicule ne fait l'objet d'aucune opposition administrative ou judiciaire au transfert.",
      "Certificate attesting that the vehicle is free of any administrative or judicial bar to ownership transfer.",
      "Certificado que acredita que el vehículo no tiene oposición administrativa ni judicial a la transferencia.",
      "Certificato che attesta l'assenza di opposizioni amministrative o giudiziarie al trasferimento.",
      "Bescheinigung, dass gegen die Übertragung keine behördlichen oder gerichtlichen Hindernisse bestehen.",
      "Справка об отсутствии административных или судебных препятствий для переоформления автомобиля."
    ),
    where: W7(
      "الوكالة الوطنية للسلامة الطرقية أو مراكز تسجيل السيارات، عند البيع",
      "Agence Nationale de la Sécurité Routière (NARSA) ou centres d'immatriculation, lors de la vente",
      "National Road Safety Agency (NARSA) or vehicle registration centres, upon sale",
      "Agencia Nacional de Seguridad Vial (NARSA) o centros de matriculación, al vender",
      "Agenzia nazionale per la sicurezza stradale (NARSA) o centri di immatricolazione, in caso di vendita",
      "Nationale Straßensicherheitsagentur (NARSA) oder Zulassungsstellen beim Verkauf",
      "Национальное агентство дорожной безопасности (NARSA) или регистрационные центры при продаже"
    ),
    keywords: ["بيع السيارة", "non-opposition", "بطاقة رمادية", "carte grise", "véhicule"],
  },
  {
    id: "ich-attestation-jouissance-domaine-public",
    cat: "ichhadat",
    title: T7(
      "شهادة الانتفاع بالملك العمومي",
      "Attestation de jouissance du domaine public",
      "Right-of-use certificate for public domain",
      "Certificado de disfrute del dominio público",
      "Attestato di godimento del demanio",
      "Nutzungsbescheinigung für öffentliches Eigentum",
      "Справка о пользовании общественным достоянием"
    ),
    desc: D7(
      "شهادة ترخّص بالانتفاع المؤقت بالملك العمومي مقابل أداء الرسوم، تخص الشرفات والبسطات واللوحات.",
      "Attestation autorisant l'occupation temporaire du domaine public contre redevance, pour terrasses de café, étals et panneaux publicitaires.",
      "Certificate authorising temporary use of public domain against a fee, covering café terraces, stalls and signboards.",
      "Certificado que autoriza el uso temporal del dominio público mediante tasa, para terrazas, puestos y carteles.",
      "Attestato che autorizza l'occupazione temporanea del demanio dietro pagamento, per dehors, bancarelle e cartelli.",
      "Bescheinigung über die zeitweise Nutzung des öffentlichen Eigentums gegen Gebühr, für Terrassen, Stände und Plakate.",
      "Справка о временном пользовании общественным имуществом за плату — террасы кафе, прилавки, вывески."
    ),
    where: W7(
      "جماعة المحل أو مصلحة الملك العمومي بالعمالة أو الولاية",
      "Commune du lieu ou service du domaine public de la préfecture ou province",
      "Local commune or the public domain service of the prefecture or province",
      "Comuna del lugar o servicio de dominio público de la prefectura o provincia",
      "Comune del luogo o servizio del demanio della prefettura o provincia",
      "Gemeinde des Ortes oder Domänendienst der Präfektur oder Provinz",
      "Коммуна по месту или служба общественной собственности префектуры/провинции"
    ),
    keywords: ["الملك العمومي", "domaine public", "شرفة مقهى", "occupation temporaire"],
  },
  {
    id: "ich-attestation-non-construction",
    cat: "ichhadat",
    title: T7(
      "شهادة عدم البناء على أرض",
      "Attestation de non-construction sur terrain",
      "Certificate of non-construction on land",
      "Certificado de no construcción en terreno",
      "Attestato di assenza di costruzioni sul terreno",
      "Bescheinigung über unbebautes Grundstück",
      "Справка об отсутствии построек на участке"
    ),
    desc: D7(
      "شهادة تثبت أن الأرض شاغرة وخالية من أي بناء، تطلب في ملفات الدعم والتهيئة.",
      "Attestation constatant que le terrain est nu et exempt de toute construction, exigée pour aides et aménagements.",
      "Certificate attesting that the land is vacant and free of any construction, required for aid and development files.",
      "Certificado que acredita que el terreno está libre de construcciones, exigido para ayudas y acondicionamientos.",
      "Attestato che certifica il terreno privo di costruzioni, richiesto per contributi e urbanizzazioni.",
      "Bescheinigung, dass das Grundstück unbebaut und frei von Bauten ist, für Förder- und Erschließungsvorhaben.",
      "Справка о том, что участок свободен от застройки, для субсидий и благоустройства."
    ),
    where: W7(
      "الجماعة المحلية أو الوكالة الحضرية التابع لها العقار",
      "Commune locale ou agence urbaine dont relève le terrain",
      "Local commune or the urban agency in charge of the land",
      "Comuna local o agencia urbana de la que depende el terreno",
      "Comune locale o agenzia urbana competente per il terreno",
      "Ortskommune oder das für das Grundstück zuständige Stadtplanungsamt",
      "Местная коммуна или городское агентство, курирующее участок"
    ),
    keywords: ["أرض شاغرة", "non-construction", "terrain nu", "urbanisme"],
  },
  {
    id: "ich-attestation-propriete-agricole",
    cat: "ichhadat",
    title: T7(
      "شهادة الملكية الفلاحية",
      "Attestation de propriété agricole",
      "Agricultural property certificate",
      "Certificado de propiedad agrícola",
      "Attestato di proprietà agricola",
      "Bescheinigung über landwirtschaftliches Eigentum",
      "Справка о сельскохозяйственной собственности"
    ),
    desc: D7(
      "شهادة تثبت ملكية أرض فلاحية واستغلالها، ترفق بطلبات الدعم الفلاحي والقروض.",
      "Attestation prouvant la propriété et l'exploitation d'une terre agricole, jointe aux demandes de subventions et de crédits.",
      "Certificate proving ownership and exploitation of farmland, attached to subsidy and loan applications.",
      "Certificado que prueba la propiedad y explotación de tierra agrícola, adjunto a solicitudes de ayudas y créditos.",
      "Attestato che prova la proprietà e la coltivazione di un terreno agricolo, allegato a domande di contributi e crediti.",
      "Nachweis von Eigentum und Bewirtschaftung von Ackerland, beizufügen bei Förder- und Kreditanträgen.",
      "Справка о праве собственности на с/х землю и её использовании для субсидий и кредитов."
    ),
    where: W7(
      "السلطة المحلية أو المحافظة العقارية حسب طبيعة الملكية",
      "Autorité locale ou conservation foncière selon la nature du titre de propriété",
      "Local authority or land registry depending on the nature of the title",
      "Autoridad local o conservación de la propiedad según la naturaleza del título",
      "Autorità locale o conservatoria fondiaria secondo la natura del titolo",
      "Ortsbehörde oder Grundbuchamt je nach Art des Eigentumstitels",
      "Местные власти или земельный кадастр в зависимости от вида права"
    ),
    keywords: ["أرض فلاحية", "propriété agricole", "دعم فلاحي", "subvention agricole"],
  },
  {
    id: "ich-attestation-bornage",
    cat: "ichhadat",
    title: T7(
      "شهادة التحديد العقاري (الترسيم)",
      "Attestation de bornage",
      "Land boundary marking certificate",
      "Certificado de deslinde",
      "Attestato di confinamento",
      "Absteckungsbescheinigung",
      "Акт межевания"
    ),
    desc: D7(
      "شهادة يوقعها المهندس الطبوغرافي والجيران تحدد حدود العقار بدقة وتمنع النزاعات.",
      "Attestation signée par le géomètre-topographe et les riverains, fixant précisément les limites de la propriété.",
      "Certificate signed by the surveyor and the neighbours, precisely fixing the property boundaries.",
      "Certificado firmado por el topógrafo y los colindantes, que fija con precisión los límites de la finca.",
      "Attestato firmato dal geometra e dai confinanti, che delimita esattamente i confini della proprietà.",
      "Vom Vermessungsingenieur und den Nachbarn unterzeichnete Urkunde über die genauen Grundstücksgrenzen.",
      "Акт, подписанный геодезистом и соседями, с точным установлением границ участка."
    ),
    where: W7(
      "مهندس طبوغرافي معتمد بحضور أعوان السلطة المحلية والجيران",
      "Géomètre-topographe agréé, en présence des agents de l'autorité locale et des riverains",
      "Licensed surveyor, in the presence of local authority officers and neighbours",
      "Topógrafo homologado, en presencia de agentes de la autoridad local y colindantes",
      "Geometra autorizzato, alla presenza degli agenti dell'autorità locale e dei confinanti",
      "Öffentlich bestellter Vermesser im Beisein von Ortsbehörden und Nachbarn",
      "Лицензированный геодезист в присутствии представителей властей и соседей"
    ),
    keywords: ["التحديد", "bornage", "حدود العقار", "géomètre"],
  },
  {
    id: "ich-certificat-renseignements-urbanisme",
    cat: "ichhadat",
    title: T7(
      "شهادة المعلومات التعميرية",
      "Certificat de renseignements d'urbanisme",
      "Urban planning information certificate",
      "Certificado de información urbanística",
      "Certificato di informazioni urbanistiche",
      "Bauplanungsauskunft",
      "Справка о градостроительной информации"
    ),
    desc: D7(
      "شهادة تحصر القواعد التعميرية المطبقة على عقار قبل أي مشروع بناء أو اقتناء.",
      "Certificat recensant les règles d'urbanisme applicables à un terrain avant tout projet de construction ou d'acquisition.",
      "Certificate setting out the planning rules applicable to a plot before any construction or acquisition project.",
      "Certificado que recoge las normas urbanísticas aplicables a una parcela antes de construir o adquirir.",
      "Certificato che elenca le norme urbanistiche applicabili a un lotto prima di costruire o acquistare.",
      "Bescheinigung über die für ein Grundstück geltenden Bauregeln vor Bau- oder Erwerbsvorhaben.",
      "Справка о градостроительных нормах для участка перед строительством или приобретением."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التعمير بالجماعة المعنية",
      "Agence urbaine ou service de l'urbanisme de la commune concernée",
      "Urban agency or the planning department of the commune concerned",
      "Agencia urbana o servicio de urbanismo de la comuna",
      "Agenzia urbana o servizio urbanistico del comune",
      "Stadtplanungsamt oder Bauamt der betroffenen Gemeinde",
      "Городское агентство или отдел градостроительства коммуны"
    ),
    keywords: ["التعمير", "urbanisme", "ضوابط البناء", "agence urbaine"],
  },
  {
    id: "ich-attestation-propriete-vehicule",
    cat: "ichhadat",
    title: T7(
      "شهادة ملكية سيارة",
      "Attestation de propriété d'un véhicule",
      "Vehicle ownership certificate",
      "Certificado de propiedad de un vehículo",
      "Attestato di proprietà di un veicolo",
      "Fahrzeugeigentumsbescheinigung",
      "Справка о праве собственности на автомобиль"
    ),
    desc: D7(
      "شهادة يؤكد فيها المالك أن السيارة مسجلة باسمه، ترفق بالملفات والإجراءات الإدارية.",
      "Attestation par laquelle le propriétaire confirme que le véhicule est immatriculé à son nom, pour procédures et dossiers.",
      "Certificate whereby the owner confirms the vehicle is registered in their name, for procedures and files.",
      "Certificado por el que el propietario confirma que el vehículo está matriculado a su nombre.",
      "Attestato con cui il proprietario conferma che il veicolo è intestato a suo nome.",
      "Bescheinigung, mit der der Eigentümer bestätigt, dass das Fahrzeug auf ihn zugelassen ist.",
      "Справка собственника о регистрации автомобиля на его имя для процедур и дел."
    ),
    where: W7(
      "يحررها مالك السيارة بدعم من البطاقة الرمادية وتصادق عند الحاجة",
      "Établie par le propriétaire du véhicule sur la base de la carte grise, légalisée si besoin",
      "Issued by the vehicle owner on the basis of the registration card, legalised if needed",
      "Emitida por el propietario con base en el permiso de circulación, legalizada si procede",
      "Redatta dal proprietario sulla base della carta di circolazione, legalizzata se necessario",
      "Vom Fahrzeughalter anhand des Fahrzeugscheins erstellt, bei Bedarf legalisiert",
      "Составляется владельцем на основе техпаспорта, при необходимости заверяется"
    ),
    keywords: ["ملكية السيارة", "propriété véhicule", "بطاقة رمادية", "carte grise"],
  },
  // ─── Éducation & scolarité ───
  {
    id: "ich-attestation-reussite",
    cat: "ichhadat",
    title: T7(
      "شهادة النجاح",
      "Attestation de réussite",
      "Certificate of successful completion",
      "Certificado de aprobación",
      "Attestato di superamento",
      "Erfolgsbescheinigung",
      "Справка об успешной сдаче"
    ),
    desc: D7(
      "شهادة رسمية تثبت نجاح الطالب في سنة دراسية أو دورة امتحان معينة.",
      "Attestation officielle constatant la réussite de l'étudiant à une année d'études ou à une session d'examens.",
      "Official certificate attesting the student's success in an academic year or examination session.",
      "Certificado oficial que acredita la aprobación de un año académico o de una convocatoria de exámenes.",
      "Attestato ufficiale del superamento di un anno di studi o di una sessione d'esami.",
      "Amtliche Bescheinigung über das Bestehen eines Studienjahres oder einer Prüfungsphase.",
      "Официальная справка об успешном прохождении учебного года или экзаменационной сессии."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية أو الجامعة، عبر شباك الوثائق الدراسية",
      "Direction de l'établissement scolaire ou de l'université, au guichet des documents de scolarité",
      "Administration of the school or university, at the student records desk",
      "Dirección del centro o universidad, en la ventanilla de documentos académicos",
      "Direzione dell'istituto o dell'università, allo sportello documenti",
      "Verwaltung der Schule oder Universität, am Zeugnisschalter",
      "Администрация школы или вуза в окне выдачи документов"
    ),
    keywords: ["النجاح", "réussite", "examen", "نتائج الامتحان"],
    popular: true,
  },
  {
    id: "ich-attestation-niveau-etudes",
    cat: "ichhadat",
    title: T7(
      "شهادة المستوى الدراسي",
      "Attestation de niveau d'études",
      "Educational level certificate",
      "Certificado de nivel de estudios",
      "Attestato di livello di studi",
      "Bescheinigung über den Bildungsstand",
      "Справка об уровне образования"
    ),
    desc: D7(
      "شهادة تحدد السنة الدراسية التي بلغها المعني أو استكملها دون ذكر النقط.",
      "Attestation indiquant l'année d'études atteinte ou validée par l'intéressé, sans mention des notes.",
      "Certificate stating the academic year reached or completed by the holder, without mentioning grades.",
      "Certificado que indica el año académico alcanzado o superado, sin mencionar las calificaciones.",
      "Attestato che indica l'anno di studi raggiunto o superato, senza menzione dei voti.",
      "Bescheinigung über das erreichte oder abgeschlossene Studienjahr, ohne Notenangabe.",
      "Справка о достигнутом или завершённом учебном годе без указания оценок."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية أو الكلية المعنية",
      "Direction de l'établissement scolaire ou de la faculté concernée",
      "Administration of the school or faculty concerned",
      "Dirección del centro o de la facultad correspondiente",
      "Direzione dell'istituto o della facoltà interessata",
      "Verwaltung der Schule oder der zuständigen Fakultät",
      "Администрация учебного заведения или факультета"
    ),
    keywords: ["المستوى الدراسي", "niveau d'études", "سنة دراسية", "education level"],
  },
  {
    id: "ich-attestation-frequentation-assiduite",
    cat: "ichhadat",
    title: T7(
      "شهادة المتابعة والانتظام الدراسي",
      "Attestation de fréquentation et d'assiduité",
      "Attendance and diligence certificate",
      "Certificado de asistencia y aprovechamiento",
      "Attestato di frequenza e assiduità",
      "Bescheinigung über Anwesenheit und Fleiß",
      "Справка о посещаемости и прилежании"
    ),
    desc: D7(
      "شهادة تثبت انتظام التلميذ أو الطالب في الدراسة، تطلب في ملفات المنح والخدمات الاجتماعية.",
      "Attestation confirmant la présence régulière de l'élève ou de l'étudiant, demandée pour bourses et prestations sociales.",
      "Certificate confirming the pupil's or student's regular attendance, requested for scholarships and social benefits.",
      "Certificado que confirma la asistencia regular del alumno, solicitado para becas y prestaciones sociales.",
      "Attestato che conferma la frequenza regolare dell'alunno, richiesto per borse e prestazioni sociali.",
      "Bescheinigung über die regelmäßige Teilnahme des Schülers, für Stipendien und Sozialleistungen.",
      "Справка о регулярном посещении занятий учащимся для стипендий и социальных выплат."
    ),
    where: W7(
      "إدارة المؤسسة التعليمية بعد التحقق من كشوف الحضور",
      "Direction de l'établissement scolaire après vérification des registres d'appel",
      "School administration after verification of attendance registers",
      "Dirección del centro tras verificar los registros de asistencia",
      "Direzione dell'istituto dopo la verifica dei registri di presenza",
      "Schulleitung nach Prüfung der Anwesenheitslisten",
      "Администрация школы после проверки журналов посещаемости"
    ),
    keywords: ["الانتظام", "assiduité", "الحضور", "fréquentation"],
  },
  {
    id: "ich-attestation-baccalaureat",
    cat: "ichhadat",
    title: T7(
      "شهادة نيل شهادة البكالوريا",
      "Attestation d'obtention du baccalauréat",
      "Certificate of baccalaureate achievement",
      "Certificado de obtención del bachillerato",
      "Attestato di conseguimento del baccalauréat",
      "Bescheinigung über den Erwerb des Baccalauréats",
      "Справка о получении бакалавриата"
    ),
    desc: D7(
      "شهادة تثبت الحصول على البكالوريا في دورة معينة إلى حين تسليم النسخة الأصلية للدبلوم.",
      "Attestation prouvant l'obtention du baccalauréat à une session donnée, en attendant la délivrance de l'original.",
      "Certificate proving the baccalaureate was obtained at a given session, pending issue of the original diploma.",
      "Certificado que prueba la obtención del bachillerato en una convocatoria, a la espera del título original.",
      "Attestato del conseguimento del baccalauréat in una sessione, in attesa del diploma originale.",
      "Nachweis über das Bestehen des Baccalauréats in einer bestimmten Session bis zur Aushändigung des Originals.",
      "Справка о получении бакалавриата в данной сессии до выдачи оригинала диплома."
    ),
    where: W7(
      "إدارة الثانوية المتخرج منها الطالب أو المركز الجهوي للامتحانات",
      "Direction du lycée d'origine ou centre régional des examens",
      "Administration of the graduating high school or the regional examination centre",
      "Dirección del instituto de origen o centro regional de exámenes",
      "Direzione del liceo di provenienza o centro regionale d'esami",
      "Verwaltung der Abschlussschule oder das regionale Prüfungsamt",
      "Администрация школы выпуска или региональный экзаменационный центр"
    ),
    keywords: ["البكالوريا", "baccalauréat", "bac", "الدورة الوطنية"],
  },
  {
    id: "ich-attestation-inscription-universitaire",
    cat: "ichhadat",
    title: T7(
      "شهادة التسجيل بالجامعة",
      "Attestation d'inscription universitaire",
      "University enrolment certificate",
      "Certificado de inscripción universitaria",
      "Attestato di iscrizione universitaria",
      "Immatrikulationsbescheinigung",
      "Справка о зачислении в университете"
    ),
    desc: D7(
      "شهادة تثبت تسجيل الطالب بالجامعة خلال السنة الجارية، تطلب للضمان الصحي والمنح والسكن.",
      "Attestation constatant l'inscription de l'étudiant à l'université pour l'année en cours, exigée pour assurance, bourse et logement.",
      "Certificate attesting the student's university enrolment for the current year, required for insurance, scholarships and housing.",
      "Certificado que acredita la inscripción del estudiante en la universidad este año, exigido para seguro, beca y alojamiento.",
      "Attestato dell'iscrizione dello studente all'università per l'anno corrente, richiesto per assicurazione, borsa e alloggio.",
      "Bescheinigung über die Universitätsimmatrikulation im laufenden Jahr, für Versicherung, Stipendium und Wohnraum.",
      "Справка о зачислении студента в университет в текущем году для страховки, стипендии и жилья."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة الجامعية",
      "Service de la scolarité de l'établissement d'enseignement supérieur",
      "Student records office of the higher education institution",
      "Servicio de escolaridad de la institución de educación superior",
      "Servizio carriere studentesche dell'ateneo",
      "Studierendensekretariat der Hochschuleinrichtung",
      "Учебный отдел высшего учебного заведения"
    ),
    keywords: ["التسجيل الجامعي", "inscription universitaire", "طالب", "étudiant"],
    popular: true,
  },
  {
    id: "ich-attestation-fin-etudes",
    cat: "ichhadat",
    title: T7(
      "شهادة نهاية الدراسة",
      "Attestation de fin d'études",
      "Certificate of completion of studies",
      "Certificado de fin de estudios",
      "Attestato di fine studi",
      "Bescheinigung über Studienabschluss",
      "Справка об окончании обучения"
    ),
    desc: D7(
      "شهادة تثبت استيفاء الطالب لجميع الوحدات في انتظار تسليم الدبلوم، تطلب للتوظيف والتدريب.",
      "Attestation confirmant la validation de l'ensemble des modules en attendant la délivrance du diplôme, demandée pour recrutement et stage.",
      "Certificate confirming completion of all modules pending issue of the diploma, requested for recruitment and internships.",
      "Certificado que confirma la validación de todos los módulos a la espera del título, solicitado para contratación y prácticas.",
      "Attestato che conferma il superamento di tutti i moduli in attesa del diploma, richiesto per assunzione e tirocinio.",
      "Bescheinigung über den Abschluss aller Module bis zur Diplomübergabe, für Bewerbung und Praktikum.",
      "Справка о завершении всех модулей до выдачи диплома, для трудоустройства и стажировки."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة الجامعية أو التكوينية",
      "Service de la scolarité de l'établissement universitaire ou de formation",
      "Student records office of the university or training institution",
      "Servicio de escolaridad de la universidad o centro de formación",
      "Servizio carriere dell'università o dell'istituto di formazione",
      "Studierendensekretariat der Universität oder Bildungseinrichtung",
      "Учебный отдел университета или учебного центра"
    ),
    keywords: ["نهاية الدراسة", "fin d'études", "دبلوم", "diplôme"],
  },
  {
    id: "ich-duplicata-releve-notes",
    cat: "ichhadat",
    title: T7(
      "نظير كشف النقط",
      "Duplicata du relevé de notes",
      "Duplicate transcript of records",
      "Duplicado del certificado de notas",
      "Duplicato del certificato degli esami",
      "Zweitschrift des Notenauszugs",
      "Дубликат выписки оценок"
    ),
    desc: D7(
      "نسخة جديدة من كشف النقط تسلّم عند فقدان الأصل أو الحاجة إلى نسخة إضافية.",
      "Copie certifiée du relevé de notes délivrée en cas de perte de l'original ou de besoin d'un exemplaire supplémentaire.",
      "Certified copy of the transcript issued upon loss of the original or need for an additional copy.",
      "Copia certificada del certificado de notas expedida en caso de pérdida del original o necesidad de otra copia.",
      "Copia autentica del certificato degli esami rilasciata in caso di smarrimento o necessità di copie aggiuntive.",
      "Beglaubigte Zweitschrift des Notenauszugs bei Verlust des Originals oder Bedarf an einer weiteren Kopie.",
      "Заверенная копия выписки оценок при утере оригинала или необходимости дополнительного экземпляра."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة مقابل أداء الرسوم",
      "Service de la scolarité de l'établissement, contre paiement des frais",
      "Student records office of the institution, upon payment of fees",
      "Servicio de escolaridad, previo pago de las tasas",
      "Servizio carriere, dietro pagamento dei diritti",
      "Studierendensekretariat gegen Gebührenzahlung",
      "Учебный отдел заведения после оплаты сборов"
    ),
    keywords: ["كشف النقط", "relevé de notes", "نظير", "duplicata"],
  },
  {
    id: "ich-attestation-scolarite-enfant-charge",
    cat: "ichhadat",
    title: T7(
      "شهادة تمدرس ولد في وضعية تكفل",
      "Attestation de scolarité d'un enfant à charge",
      "Schooling certificate for a dependent child",
      "Certificado de escolaridad de hijo a cargo",
      "Attestato di scolarità di un figlio a carico",
      "Schulbescheinigung für ein unterhaltenes Kind",
      "Справка об обучении ребёнка на иждивении"
    ),
    desc: D7(
      "شهادة تمدرس تثبت متابعة الابن لدراسته، ترفق بملفات التعويضات العائلية والتغطية الصحية.",
      "Attestation prouvant la poursuite de la scolarité de l'enfant, jointe aux dossiers d'allocations familiales et de couverture médicale.",
      "Schooling certificate proving the child's continued education, attached to family allowance and health cover files.",
      "Certificado que acredita la continuidad escolar del hijo, adjunto a expedientes de asignaciones y cobertura médica.",
      "Attestato della prosecuzione degli studi del figlio, allegato a pratiche di assegni e copertura sanitaria.",
      "Schulbescheinigung über die fortgesetzte Ausbildung des Kindes, für Familienbeihilfen und Krankenversicherung.",
      "Справка о продолжении учёбы ребёнка для семейных пособий и медстрахования."
    ),
    where: W7(
      "إدارة مؤسسة التعليم أو التكوين التي يتابع بها الابن دراسته",
      "Direction de l'école ou du centre de formation fréquenté par l'enfant",
      "Administration of the school or training centre attended by the child",
      "Dirección del colegio o centro de formación del niño",
      "Direzione della scuola o del centro di formazione frequentato dal figlio",
      "Verwaltung der Schule oder Bildungseinrichtung des Kindes",
      "Администрация школы или учебного центра ребёнка"
    ),
    keywords: ["تمدرس الولد", "scolarité enfant", "تعويضات عائلية", "CNSS"],
  },
  {
    id: "ich-certificat-radiation",
    cat: "ichhadat",
    title: T7(
      "شهادة مغادرة المؤسسة التعليمية",
      "Certificat de radiation (changement d'établissement)",
      "School leaving certificate (transfer)",
      "Certificado de baja escolar (cambio de centro)",
      "Certificato di cancellazione (cambio di istituto)",
      "Abmeldebescheinigung der Schule (Schulwechsel)",
      "Справка о выбытии из школы (перевод)"
    ),
    desc: D7(
      "شهادة تثبت مغادرة التلميذ للمؤسسة، تلزم عند نقله إلى مدرسة أو ثانوية أخرى.",
      "Certificat constatant la radiation de l'élève des effectifs, obligatoire lors de son transfert vers un autre établissement.",
      "Certificate attesting the pupil's removal from the school roll, mandatory when transferring to another school.",
      "Certificado que acredita la baja del alumno, obligatorio al trasladarse a otro centro.",
      "Certificato di cancellazione dell'alunno dai registri, obbligatorio per il trasferimento ad altra scuola.",
      "Bescheinigung über die Abmeldung des Schülers, obligatorisch beim Wechsel an eine andere Schule.",
      "Справка о снятии ученика с учёта, обязательна при переводе в другую школу."
    ),
    where: W7(
      "إدارة المؤسسة الأصلية التي كان يتابع بها التلميذ دراسته",
      "Direction de l'établissement d'origine fréquenté par l'élève",
      "Administration of the pupil's original school",
      "Dirección del centro de origen del alumno",
      "Direzione dell'istituto di provenienza dell'alunno",
      "Verwaltung der bisherigen Schule des Schülers",
      "Администрация прежней школы ученика"
    ),
    keywords: ["الانتقال المدرسي", "radiation", "مغادرة المؤسسة", "changement d'école"],
  },
  {
    id: "ich-attestation-admission-definitive",
    cat: "ichhadat",
    title: T7(
      "شهادة القبول النهائي",
      "Attestation d'admission définitive",
      "Certificate of definitive admission",
      "Certificado de admisión definitiva",
      "Attestato di ammissione definitiva",
      "Bescheinigung über die endgültige Zulassung",
      "Справка об окончательном зачислении"
    ),
    desc: D7(
      "شهادة تثبت القبول النهائي للطالب بمؤسسة للتعليم العالي، تطلب في ملفات المنح والإقامة.",
      "Attestation constatant l'admission définitive de l'étudiant dans un établissement d'enseignement supérieur, demandée pour bourse et résidence.",
      "Certificate attesting the student's definitive admission to a higher education institution, required for scholarship and residence.",
      "Certificado que acredita la admisión definitiva en una institución de educación superior, para beca y residencia.",
      "Attestato dell'ammissione definitiva a un istituto di istruzione superiore, per borsa e residenza.",
      "Bescheinigung über die endgültige Zulassung zu einer Hochschuleinrichtung, für Stipendium und Wohnsitz.",
      "Справка об окончательном зачислении в вуз для стипендии и проживания."
    ),
    where: W7(
      "مصلحة الشؤون الطلابية بالمؤسسة المعنية بعد إتمام التسجيل",
      "Service de la scolarité de l'établissement concerné après finalisation de l'inscription",
      "Student records office of the institution after completion of enrolment",
      "Servicio de escolaridad del centro tras completar la inscripción",
      "Servizio carriere dell'ateneo dopo il perfezionamento dell'iscrizione",
      "Studierendensekretariat nach Abschluss der Immatrikulation",
      "Учебный отдел заведения после завершения зачисления"
    ),
    keywords: ["القبول", "admission", "التسجيل النهائي", "université"],
  },
  // ─── Santé ───
  {
    id: "ich-certificat-medical-etat-sante",
    cat: "ichhadat",
    title: T7(
      "شهادة طبية عامة",
      "Certificat médical général",
      "General medical certificate",
      "Certificado médico general",
      "Certificato medico generico",
      "Allgemeines ärztliches Attest",
      "Общая медицинская справка"
    ),
    desc: D7(
      "شهادة يحررها الطبيب بعد الفحص لوصف الحالة الصحية العامة للمعني بالأمر.",
      "Certificat rédigé par le médecin après consultation pour décrire l'état de santé général de l'intéressé.",
      "Certificate written by the physician after examination describing the patient's general state of health.",
      "Certificado redactado por el médico tras la consulta para describir el estado de salud general.",
      "Certificato redatto dal medico dopo la visita per descrivere lo stato di salute generale.",
      "Vom Arzt nach der Untersuchung ausgestelltes Attest zum allgemeinen Gesundheitszustand.",
      "Справка врача после осмотра с описанием общего состояния здоровья."
    ),
    where: W7(
      "طبيب بمصحة عمومية أو خاصة بعد إجراء الفحص السريري",
      "Médecin d'un établissement public ou privé, après l'examen clinique",
      "Physician at a public or private facility, after the clinical examination",
      "Médico de un centro público o privado, tras el examen clínico",
      "Medico di una struttura pubblica o privata, dopo l'esame clinico",
      "Arzt einer öffentlichen oder privaten Einrichtung nach der klinischen Untersuchung",
      "Врач государственного или частного учреждения после клинического осмотра"
    ),
    keywords: ["شهادة طبية", "certificat médical", "الحالة الصحية", "médecin"],
  },
  {
    id: "ich-certificat-non-contre-indication-sport",
    cat: "ichhadat",
    title: T7(
      "شهادة عدم وجود مانع من ممارسة الرياضة",
      "Certificat de non-contre-indication à la pratique sportive",
      "Certificate of no contraindication to sport",
      "Certificado de no contraindicación para el deporte",
      "Certificato di non controindicazione all'attività sportiva",
      "Unbedenklichkeitsbescheinigung für Sport",
      "Справка об отсутствии противопоказаний к спорту"
    ),
    desc: D7(
      "شهادة طبية تثبت خلو المعني من أي مانع صحي لممارسة النشاط الرياضي التنافسي.",
      "Certificat médical attestant l'absence de tout empêchement de santé à la pratique du sport en compétition.",
      "Medical certificate attesting the absence of any health impediment to competitive sport practice.",
      "Certificado médico que acredita la ausencia de impedimento de salud para el deporte de competición.",
      "Certificato medico che attesta l'assenza di impedimenti di salute all'attività sportiva agonistica.",
      "Ärztliches Attest über das Fehlen gesundheitlicher Hinderungsgründe für den Wettkampfsport.",
      "Медицинская справка об отсутствии препятствий для занятий соревновательным спортом."
    ),
    where: W7(
      "طبيب معتمد، وتودع بالجمعية الرياضية أو الأكاديمية الجهوية للرياضة",
      "Médecin agréé, à déposer auprès du club sportif ou de l'académie régionale",
      "Accredited physician, to be filed with the sports club or regional academy",
      "Médico homologado, para presentar en el club o academia regional",
      "Medico autorizzato, da depositare presso la società sportiva o l'accademia regionale",
      "Zugelassener Arzt, beim Sportverein oder der Regionalakademie einzureichen",
      "Аккредитованный врач; подаётся в спортивный клуб или региональную академию"
    ),
    keywords: ["رياضة", "sport", "لا مانع", "contre-indication", "certificat sportif"],
  },
  {
    id: "ich-certificat-aptitude-permis-conduire",
    cat: "ichhadat",
    title: T7(
      "شهادة الأهلية البدنية لرخصة السياقة",
      "Certificat d'aptitude physique pour le permis de conduire",
      "Physical aptitude certificate for the driving licence",
      "Certificado de aptitud física para el permiso de conducir",
      "Certificato di idoneità fisica per la patente",
      "Gesundheitliche Eignungsbescheinigung für den Führerschein",
      "Медицинская справка о годности к вождению"
    ),
    desc: D7(
      "شهادة يثبت فيها الطبيب توفر المترشح على القدرات البدنية والبصرية لسياقة السيارة.",
      "Certificat par lequel le médecin constate les capacités physiques et visuelles du candidat à la conduite.",
      "Certificate whereby the physician ascertains the driving candidate's physical and visual capacities.",
      "Certificado por el que el médico constata las capacidades físicas y visuales del aspirante a conductor.",
      "Certificato con cui il medico accerta le capacità fisiche e visive del candidato alla guida.",
      "Bescheinigung, mit der der Arzt die körperliche und visuelle Eignung des Führerscheinbewerbers feststellt.",
      "Справка врача о физических и зрительных способностях кандидата в водители."
    ),
    where: W7(
      "طبيب معتمد لدى مراكز الفحص، وتودع بملف مدرسة تعليم السياقة",
      "Médecin agréé des centres de visite, à joindre au dossier de l'auto-école",
      "Accredited physician at examination centres, to be attached to the driving school file",
      "Médico homologado de los centros de reconocimiento, para el expediente de la autoescuela",
      "Medico autorizzato dei centri di visita, da allegare alla pratica della autoscuola",
      "Zugelassener Arzt der Untersuchungsstellen, der Fahrschulakte beizufügen",
      "Аккредитованный врач медцентров; прилагается к делу автошколы"
    ),
    keywords: ["رخصة السياقة", "permis de conduire", "الفحص الطبي", "aptitude physique"],
  },
  {
    id: "ich-attestation-grossesse",
    cat: "ichhadat",
    title: T7(
      "شهادة الحمل",
      "Attestation de grossesse",
      "Pregnancy certificate",
      "Certificado de embarazo",
      "Attestato di gravidanza",
      "Schwangerschaftsbescheinigung",
      "Справка о беременности"
    ),
    desc: D7(
      "شهادة طبية تثبت الحمل والتاريخ المرجح للولادة، ترفق بملف العطلة الأمومية.",
      "Attestation médicale confirmant la grossesse et la date présumée de l'accouchement, jointe au congé de maternité.",
      "Medical certificate confirming pregnancy and the presumed delivery date, attached to the maternity leave file.",
      "Certificado médico que confirma el embarazo y la fecha probable de parto, para la baja por maternidad.",
      "Attestato medico che conferma la gravidanza e la data presunta del parto, per il congedo di maternità.",
      "Ärztliche Bescheinigung über die Schwangerschaft und den mutmaßlichen Entbindungstermin, für den Mutterschutz.",
      "Медицинская справка о беременности и предполагаемой дате родов для декретного отпуска."
    ),
    where: W7(
      "الطبيب المختص أو مصلحة التوليد، وتودع لدى المشغل والضمان الاجتماعي",
      "Médecin traitant ou service de gynécologie, à déposer auprès de l'employeur et de la CNSS",
      "Attending physician or maternity department, filed with the employer and social security",
      "Médico tratante o servicio de ginecología, para el empleador y la seguridad social",
      "Medico curante o reparto di ginecologia, per datore di lavoro e previdenza",
      "Behandelnder Arzt oder gynäkologische Abteilung, bei Arbeitgeber und Sozialversicherung",
      "Лечащий врач или отделение гинекологии; подаётся работодателю и в соцстрах"
    ),
    keywords: ["الحمل", "grossesse", "عطلة الأمومة", "congé maternité", "CNSS"],
  },
  {
    id: "ich-attestation-suivi-medical",
    cat: "ichhadat",
    title: T7(
      "شهادة المداواة والمتابعة الطبية",
      "Attestation de suivi médical",
      "Medical follow-up certificate",
      "Certificado de seguimiento médico",
      "Attestato di controllo medico",
      "Bescheinigung über die ärztliche Betreuung",
      "Справка о медицинском наблюдении"
    ),
    desc: D7(
      "شهادة تثبت خضوع المعني لعلاج مستمر، تستعمل لتبرير الغياب أو طلب الراحة.",
      "Attestation constatant qu'un traitement est en cours, produite pour justifier une absence ou solliciter un repos.",
      "Certificate attesting ongoing treatment, produced to justify an absence or request sick rest.",
      "Certificado que acredita un tratamiento en curso, para justificar ausencias o solicitar reposo.",
      "Attestato di terapia in corso, prodotto per giustificare un'assenza o richiedere riposo.",
      "Bescheinigung über eine laufende Behandlung, zur Rechtfertigung einer Abwesenheit oder Beantragung von Schonung.",
      "Справка о продолжающемся лечении для оправдания отсутствия или просьбы об отдыхе."
    ),
    where: W7(
      "الطبيب المعالج بعد المعاينة، وتقدم للمشغل أو الإدارة الطالبة",
      "Médecin traitant après consultation, à remettre à l'employeur ou à l'administration demandeuse",
      "Attending physician after consultation, to be handed to the employer or requesting administration",
      "Médico tratante tras la consulta, para el empleador o administración solicitante",
      "Medico curante dopo la visita, da consegnare al datore di lavoro o all'amministrazione",
      "Behandelnder Arzt nach der Konsultation, an Arbeitgeber oder anfordernde Behörde",
      "Лечащий врач после приёма; передаётся работодателю или запрашивающему ведомству"
    ),
    keywords: ["المداواة", "suivi médical", "علاج", "traitement en cours"],
  },
  {
    id: "ich-certificat-aptitude-embauche",
    cat: "ichhadat",
    title: T7(
      "شهادة الأهلية الطبية للتوظيف",
      "Certificat d'aptitude médicale à l'embauche",
      "Medical fitness certificate for hiring",
      "Certificado de aptitud médica para el empleo",
      "Certificato di idoneità medica all'assunzione",
      "Ärztliche Eignungsbescheinigung zur Einstellung",
      "Медицинская справка о годности при приёме на работу"
    ),
    desc: D7(
      "شهادة طبية ترفق بملف التوظيف تثبت عدم وجود مانع صحي لمزاولة المنصب المطلوب.",
      "Certificat médical joint au dossier d'embauche attestant l'absence de contre-indication au poste visé.",
      "Medical certificate attached to the hiring file attesting no health contraindication to the position.",
      "Certificado médico adjunto al expediente de contratación, sin contraindicación para el puesto.",
      "Certificato medico allegato alla pratica di assunzione, senza controindicazioni per la posizione.",
      "Ärztliche Bescheinigung zur Einstellungsakte ohne gesundheitliche Gegenanzeige für die Stelle.",
      "Медицинская справка к делу о приёме на работу об отсутствии противопоказаний к должности."
    ),
    where: W7(
      "طبيب المؤسسة أو طبيب معتمد قبل توقيع عقد العمل",
      "Médecin du travail ou médecin agréé, avant la signature du contrat",
      "Occupational physician or accredited doctor, before signing the contract",
      "Médico de empresa o médico homologado, antes de firmar el contrato",
      "Medico del lavoro o medico autorizzato, prima della firma del contratto",
      "Betriebsarzt oder zugelassener Arzt vor Vertragsunterzeichnung",
      "Врач предприятия или аккредитованный врач до подписания договора"
    ),
    keywords: ["التوظيف", "embauche", "الفحص الطبي", "aptitude médicale"],
  },
  {
    id: "ich-certificat-arret-travail",
    cat: "ichhadat",
    title: T7(
      "شهادة التوقف عن العمل لأسباب صحية",
      "Certificat d'arrêt de travail (maladie)",
      "Sick-leave certificate",
      "Certificado de baja por enfermedad",
      "Certificato di malattia",
      "Arbeitsunfähigkeitsbescheinigung",
      "Больничная справка"
    ),
    desc: D7(
      "شهادة يحدد فيها الطبيب مدة التوقف عن العمل لأسباب صحية وتاريخ بدايتها ونهايتها.",
      "Certificat par lequel le médecin fixe la durée de l'arrêt de travail pour raisons de santé, ses dates de début et de fin.",
      "Certificate whereby the physician sets the duration of sick leave, with its start and end dates.",
      "Certificado por el que el médico fija la duración de la baja por enfermedad, con fechas de inicio y fin.",
      "Certificato con cui il medico fissa la durata dell'astensione per malattia, con date di inizio e fine.",
      "Bescheinigung, mit der der Arzt die Dauer der Krankschreibung mit Anfangs- und Enddatum festlegt.",
      "Справка врача о сроке больничного с датами начала и окончания."
    ),
    where: W7(
      "الطبيب المعالج، وتودع نسخ منها لدى المشغل وصندوق الضمان الاجتماعي",
      "Médecin traitant, copies à déposer auprès de l'employeur et de la caisse de sécurité sociale",
      "Attending physician, copies to be filed with the employer and the social security fund",
      "Médico tratante, con copias para el empleador y la seguridad social",
      "Medico curante, con copie per datore di lavoro e cassa di previdenza",
      "Behandelnder Arzt, Durchschläge an Arbeitgeber und Sozialversicherungsträger",
      "Лечащий врач; копии подаются работодателю и в фонд соцстрахования"
    ),
    keywords: ["توقف عن العمل", "arrêt de travail", "مرض", "congé maladie"],
    popular: true,
  },
  {
    id: "ich-certificat-inaptitude-travail",
    cat: "ichhadat",
    title: T7(
      "شهادة العجز عن العمل",
      "Certificat d'inaptitude au travail",
      "Certificate of unfitness for work",
      "Certificado de incapacidad para el trabajo",
      "Certificato di inidoneità al lavoro",
      "Bescheinigung der Arbeitsunfähigkeit",
      "Справка о нетрудоспособности"
    ),
    desc: D7(
      "شهادة طبية تثبت العجز الكلي أو الجزئي عن العمل، ترفق بملفات التقاعد والتعويضات.",
      "Certificat médical constatant l'inaptitude totale ou partielle au travail, joint aux dossiers de retraite et d'indemnités.",
      "Medical certificate attesting total or partial unfitness for work, attached to pension and compensation files.",
      "Certificado médico de incapacidad total o parcial, adjunto a expedientes de pensión e indemnizaciones.",
      "Certificato medico di inidoneità totale o parziale, allegato a pratiche di pensione e indennità.",
      "Ärztliche Bescheinigung über totale oder teilweise Berufsunfähigkeit, für Renten- und Entschädigungsakten.",
      "Медицинская справка о полной или частичной нетрудоспособности для пенсий и компенсаций."
    ),
    where: W7(
      "الطبيب المعالج أو المجلس الطبي، وتودع لدى CNSS أو المشغل",
      "Médecin traitant ou conseil médical, à déposer auprès de la CNSS ou de l'employeur",
      "Attending physician or medical board, to be filed with the CNSS or the employer",
      "Médico tratante o consejo médico, para la CNSS o el empleador",
      "Medico curante o consiglio medico, da depositare presso CNSS o datore di lavoro",
      "Behandelnder Arzt oder medizinischer Rat, bei CNSS oder Arbeitgeber einzureichen",
      "Лечащий врач или медкомиссия; подаётся в CNSS или работодателю"
    ),
    keywords: ["العجز", "inaptitude", "invalidité", "عدم القدرة على العمل"],
  },
  {
    id: "ich-attestation-don-sang",
    cat: "ichhadat",
    title: T7(
      "شهادة التبرع بالدم",
      "Attestation de don de sang",
      "Blood donation certificate",
      "Certificado de donación de sangre",
      "Attestato di donazione di sangue",
      "Blutspendenachweis",
      "Справка о сдаче крови"
    ),
    desc: D7(
      "شهادة تسلّم للمتبرع بالدم لإثبات تبرعه أمام مشغله أو مؤسسته التعليمية.",
      "Attestation remise au donneur pour justifier son don de sang auprès de son employeur ou de son établissement.",
      "Certificate given to the donor to justify the blood donation to their employer or institution.",
      "Certificado entregado al donante para justificar la donación ante su empleador o centro.",
      "Attestato consegnato al donatore per giustificare la donazione a datore di lavoro o istituto.",
      "Bescheinigung für den Spender zum Nachweis der Blutspende gegenüber Arbeitgeber oder Einrichtung.",
      "Справка донору для подтверждения сдачи крови перед работодателем или учебным заведением."
    ),
    where: W7(
      "المركز الجهوي لتحاقن الدم أو الوحدة المتنقلة للتبرع",
      "Centre régional de transfusion sanguine (CRTS) ou unité mobile de collecte",
      "Regional blood transfusion centre (CRTS) or mobile collection unit",
      "Centro regional de transfusión sanguínea (CRTS) o unidad móvil de recolección",
      "Centro regionale di trasfusione del sangue (CRTS) o unità mobile di raccolta",
      "Regionales Bluttransfusionszentrum (CRTS) oder mobile Sammelstelle",
      "Региональный центр переливания крови (CRTS) или мобильный пункт"
    ),
    keywords: ["التبرع بالدم", "don de sang", "CRTS", "متبرع"],
  },
  {
    id: "ich-certificat-prenuptial",
    cat: "ichhadat",
    title: T7(
      "الشهادة الطبية قبل الزواج",
      "Certificat prénuptial (examens prénuptiaux)",
      "Premarital medical certificate",
      "Certificado médico prematrimonial",
      "Certificato prematrimoniale",
      "Voreheliche ärztliche Bescheinigung",
      "Медицинская справка перед браком"
    ),
    desc: D7(
      "شهادة طبية تثبت إنجاز التحاليل المخبرية المطلوبة قبل إبرام عقد الزواج.",
      "Certificat médical attestant la réalisation des analyses de laboratoire exigées avant la conclusion du mariage.",
      "Medical certificate attesting completion of the laboratory tests required before concluding marriage.",
      "Certificado médico que acredita la realización de los análisis exigidos antes de contraer matrimonio.",
      "Certificato medico che attesta l'esecuzione degli esami di laboratorio richiesti prima del matrimonio.",
      "Ärztliche Bescheinigung über die vor der Eheschließung vorgeschriebenen Laboruntersuchungen.",
      "Медицинская справка о прохождении обязательных анализов перед заключением брака."
    ),
    where: W7(
      "طبيب أو مختبر تحاليل معتمد، وتقدم للعدلين قبل عقد الزواج",
      "Médecin ou laboratoire d'analyses agréé, à remettre aux adouls avant l'acte de mariage",
      "Physician or accredited laboratory, to be given to the notaries before the marriage deed",
      "Médico o laboratorio homologado, para los adules antes del acto matrimonial",
      "Medico o laboratorio autorizzato, da consegnare agli adoul prima dell'atto di matrimonio",
      "Arzt oder zugelassenes Labor, den Adouls vor der Eheurkunde vorzulegen",
      "Врач или аккредитованная лаборатория; предъявляется адулям до брачного акта"
    ),
    keywords: ["الفحوصات قبل الزواج", "prénuptial", "تحاليل", "mariage"],
  },
  // ─── Banque & finance ───
  {
    id: "ich-attestation-solde-bancaire",
    cat: "ichhadat",
    title: T7(
      "شهادة الرصيد البنكي",
      "Attestation de solde bancaire",
      "Bank balance certificate",
      "Certificado de saldo bancario",
      "Attestato di saldo bancario",
      "Kontostandsbescheinigung",
      "Справка об остатке на счёте"
    ),
    desc: D7(
      "شهادة من البنك تحدد رصيد الحساب، تطلب أساساً في ملفات التأشيرات والدراسة بالخارج.",
      "Attestation bancaire précisant le solde du compte, principalement exigée pour les dossiers de visa et d'études à l'étranger.",
      "Bank certificate stating the account balance, mainly required for visa and study-abroad files.",
      "Certificado bancario que indica el saldo de la cuenta, exigido sobre todo para visados y estudios en el extranjero.",
      "Attestato bancario che indica il saldo del conto, richiesto soprattutto per visti e studi all'estero.",
      "Bankbescheinigung über den Kontostand, vor allem für Visums- und Auslandsstudienakten verlangt.",
      "Банковская справка о балансе счёта, в основном для виз и учёбы за рубежом."
    ),
    where: W7(
      "الوكالة البنكية لحساب المعني، عند الطلب الشخصي أو عبر تطبيق البنك",
      "Agence bancaire du titulaire, sur demande au guichet ou via l'application de la banque",
      "Holder's bank branch, upon counter request or via the bank's app",
      "Sucursal bancaria del titular, por petición en ventanilla o por la app del banco",
      "Filiale della banca del titolare, su richiesta allo sportello o tramite l'app",
      "Bankfiliale des Kontoinhabers, auf Antrag am Schalter oder über die Banking-App",
      "Филиал банка держателя счёта по личному заявлению или через приложение"
    ),
    keywords: ["الرصيد البنكي", "solde bancaire", "تأشيرة", "visa", "بنك"],
    popular: true,
  },
  {
    id: "ich-attestation-blocage-fonds",
    cat: "ichhadat",
    title: T7(
      "شهادة تجميد المبالغ البنكية",
      "Attestation de blocage de fonds",
      "Blocked funds certificate",
      "Certificado de bloqueo de fondos",
      "Attestato di blocco dei fondi",
      "Sperrbescheinigung",
      "Справка о блокировке средств"
    ),
    desc: D7(
      "شهادة تثبت تجميد مبلغ مالي بغرض الدراسة أو الاستثمار، تشترطها القنصليات وبعض الملفات.",
      "Attestation constatant le gel d'un montant destiné aux études ou à l'investissement, exigée par les consulats.",
      "Certificate attesting the blocking of funds earmarked for studies or investment, required by consulates.",
      "Certificado que acredita el bloqueo de un importe destinado a estudios o inversión, exigido por los consulados.",
      "Attestato del blocco di una somma destinata a studi o investimenti, richiesto dai consolati.",
      "Bescheinigung über die Sperrung eines Betrags für Studium oder Investition, von Konsulaten verlangt.",
      "Справка о блокировке средств на учёбу или инвестиции, требуемая консульствами."
    ),
    where: W7(
      "الوكالة البنكية التي تمت لديها عملية التجميد",
      "Agence bancaire où l'opération de blocage a été effectuée",
      "Bank branch where the blocking operation was carried out",
      "Sucursal bancaria donde se realizó el bloqueo",
      "Filiale bancaria dove è stata effettuata l'operazione di blocco",
      "Bankfiliale, in der die Sperrung vorgenommen wurde",
      "Филиал банка, в котором проведена блокировка средств"
    ),
    keywords: ["تجميد المبلغ", "blocage de fonds", "الدراسة بالخارج", "étudiant"],
  },
  {
    id: "ich-attestation-virement",
    cat: "ichhadat",
    title: T7(
      "شهادة التحويل البنكي",
      "Attestation de virement bancaire",
      "Bank transfer certificate",
      "Certificado de transferencia bancaria",
      "Attestato di bonifico",
      "Überweisungsbescheinigung",
      "Справка о банковском переводе"
    ),
    desc: D7(
      "شهادة تثبت إنجاز تحويل بنكي بمبلغه وتاريخه ومستفيدة، وتعد إثباتاً للأداء.",
      "Attestation prouvant l'exécution d'un virement avec son montant, sa date et son bénéficiaire, valant preuve de paiement.",
      "Certificate proving a bank transfer was executed with its amount, date and beneficiary, serving as proof of payment.",
      "Certificado que prueba la ejecución de una transferencia con importe, fecha y beneficiario, como prueba de pago.",
      "Attestato dell'esecuzione di un bonifico con importo, data e beneficiario, quale prova di pagamento.",
      "Nachweis über die Ausführung einer Überweisung mit Betrag, Datum und Empfänger als Zahlungsnachweis.",
      "Справка о выполненном банковском переводе с суммой, датой и получателем как подтверждение оплаты."
    ),
    where: W7(
      "الوكالة البنكية المنفذة للتحويل أو خدمات القبض عن بعد",
      "Agence bancaire exécutante du virement ou services de paiement à distance",
      "Bank branch executing the transfer or remote payment services",
      "Sucursal que ejecutó la transferencia o servicios de pago a distancia",
      "Filiale che ha eseguito il bonifico o servizi di pagamento a distanza",
      "Ausführende Bankfiliale oder Zahlungsdienste aus der Ferne",
      "Филиал банка, исполнивший перевод, или сервисы дистанционных платежей"
    ),
    keywords: ["تحويل بنكي", "virement", "إثبات الأداء", "preuve de paiement"],
  },
  {
    id: "ich-attestation-ouverture-compte",
    cat: "ichhadat",
    title: T7(
      "شهادة فتح حساب بنكي",
      "Attestation d'ouverture de compte",
      "Account opening certificate",
      "Certificado de apertura de cuenta",
      "Attestato di apertura di conto",
      "Kontoeröffnungsbescheinigung",
      "Справка об открытии счёта"
    ),
    desc: D7(
      "شهادة بنكية تثبت فتح حساب باسم المعني، ترفق بطلبات تحويل الأجور والتعويضات.",
      "Attestation bancaire constatant l'ouverture d'un compte au nom du titulaire, jointe aux demandes de virement de salaire.",
      "Bank certificate attesting the opening of an account in the holder's name, attached to salary transfer requests.",
      "Certificado bancario de apertura de cuenta a nombre del titular, adjunto a solicitudes de transferencia de salario.",
      "Attestato bancario dell'apertura di un conto intestato, allegato alle richieste di accredito dello stipendio.",
      "Bankbestätigung über die Kontoeröffnung auf den Namen des Inhabers, Gehaltsüberweisungsanträgen beizufügen.",
      "Банковская справка об открытии счёта на имя владельца, прилагаемая к заявлениям о переводе зарплаты."
    ),
    where: W7(
      "الوكالة البنكية التي فُتح بها الحساب",
      "Agence bancaire où le compte a été ouvert",
      "Bank branch where the account was opened",
      "Sucursal donde se abrió la cuenta",
      "Filiale presso cui è stato aperto il conto",
      "Bankfiliale, in der das Konto eröffnet wurde",
      "Филиал банка, в котором открыт счёт"
    ),
    keywords: ["فتح حساب", "ouverture de compte", "بنك", "compte bancaire"],
  },
  {
    id: "ich-reference-bancaire",
    cat: "ichhadat",
    title: T7(
      "المرجع البنكي (حسن السير)",
      "Référence bancaire",
      "Bank reference",
      "Referencia bancaria",
      "Referenza bancaria",
      "Bankreferenz",
      "Банковская рекомендация"
    ),
    desc: D7(
      "شهادة يشهد فيها البنك بحسن تسيير الحساب وانتظام العمليات، تطلب في الصفقات والكراء.",
      "Attestation par laquelle la banque certifie la bonne tenue et la régularité des opérations du compte, demandée pour marchés et locations.",
      "Certificate whereby the bank certifies sound management and regular account activity, requested for contracts and leases.",
      "Certificado por el que el banco acredita la buena gestión y regularidad de la cuenta, para contratos y alquileres.",
      "Attestato con cui la banca certifica la corretta gestione e regolarità del conto, per contratti e locazioni.",
      "Bescheinigung der Bank über einwandfreie Führung und regelmäßige Aktivität des Kontos, für Aufträge und Mietverträge.",
      "Справка банка о надлежащем ведении счёта, запрашиваемая для контрактов и аренды."
    ),
    where: W7(
      "مستشار الحساب بالوكالة البنكية المعنية",
      "Conseiller clientèle de l'agence bancaire concernée",
      "Account manager at the relevant bank branch",
      "Asesor comercial de la sucursal bancaria",
      "Consulente della filiale bancaria",
      "Kundenberater der zuständigen Bankfiliale",
      "Персональный менеджер банковского филиала"
    ),
    keywords: ["المرجع البنكي", "référence bancaire", "حسن السير", "banque"],
  },
  {
    id: "ich-attestation-cloture-compte",
    cat: "ichhadat",
    title: T7(
      "شهادة إغلاق الحساب البنكي",
      "Attestation de clôture de compte",
      "Account closure certificate",
      "Certificado de cierre de cuenta",
      "Attestato di chiusura del conto",
      "Kontoschließungsbescheinigung",
      "Справка о закрытии счёта"
    ),
    desc: D7(
      "شهادة تثبت الإغلاق النهائي للحساب البنكي وتسوية كل الالتزامات المرتبطة به.",
      "Attestation constatant la clôture définitive du compte et l'apurement des engagements qui y sont liés.",
      "Certificate attesting the final closure of the account and settlement of related commitments.",
      "Certificado que acredita el cierre definitivo de la cuenta y la liquidación de sus compromisos.",
      "Attestato della chiusura definitiva del conto e del saldo degli impegni collegati.",
      "Bescheinigung über die endgültige Kontoschließung und die Abgeltung damit verbundener Verpflichtungen.",
      "Справка об окончательном закрытии счёта и урегулировании связанных обязательств."
    ),
    where: W7(
      "الوكالة البنكية التي كان الحساب مفتوحاً بها",
      "Agence bancaire où le compte était ouvert",
      "Bank branch where the account was held",
      "Sucursal donde estaba abierta la cuenta",
      "Filiale presso cui era aperto il conto",
      "Bankfiliale, in der das Konto geführt wurde",
      "Филиал банка, где ранее был открыт счёт"
    ),
    keywords: ["إغلاق الحساب", "clôture de compte", "بنك", "fermeture"],
  },
  {
    id: "ich-attestation-rib",
    cat: "ichhadat",
    title: T7(
      "شهادة المعطيات البنكية (RIB)",
      "Attestation de RIB (coordonnées bancaires)",
      "Bank details certificate (RIB)",
      "Certificado de datos bancarios (RIB)",
      "Attestato di coordinate bancarie (IBAN)",
      "Bankverbindungsbescheinigung (IBAN)",
      "Справка о банковских реквизитах (RIB)"
    ),
    desc: D7(
      "شهادة رسمية تحمل المعطيات البنكية الكاملة للحساب، ترفق بملفات الأداء والاستفادة.",
      "Attestation officielle portant l'ensemble des coordonnées bancaires du compte, jointe aux dossiers de paiement et de prestation.",
      "Official certificate bearing the account's full bank details, attached to payment and benefit files.",
      "Certificado oficial con todos los datos bancarios de la cuenta, adjunto a expedientes de pago y prestaciones.",
      "Attestato ufficiale con le complete coordinate bancarie del conto, allegato a pratiche di pagamento.",
      "Offizielle Bescheinigung mit den vollständigen Bankdaten des Kontos, Zahlungs- und Leistungsakten beizufügen.",
      "Официальная справка с полными банковскими реквизитами счёта для выплат и начислений."
    ),
    where: W7(
      "الوكالة البنكية، أو تحميلها مباشرة من تطبيق البنك",
      "Agence bancaire, ou téléchargement direct depuis l'application de la banque",
      "Bank branch, or direct download from the bank's application",
      "Sucursal bancaria o descarga directa desde la app del banco",
      "Filiale bancaria o scarico diretto dall'app della banca",
      "Bankfiliale oder direkter Download über die Banking-App",
      "Филиал банка или загрузка напрямую из банковского приложения"
    ),
    keywords: ["RIB", "IBAN", "المعطيات البنكية", "coordonnées bancaires"],
  },
  {
    id: "ich-attestation-domiciliation-salaire",
    cat: "ichhadat",
    title: T7(
      "شهادة التنصيص على تحويل الأجر",
      "Attestation de domiciliation de salaire",
      "Salary domiciliation certificate",
      "Certificado de domiciliación del salario",
      "Attestato di domiciliazione dello stipendio",
      "Bescheinigung über die Gehaltsdomizilierung",
      "Справка о перечислении зарплаты в банк"
    ),
    desc: D7(
      "شهادة يتعهد فيها المشغل بتحويل أجر الأجير إلى حسابه البنكي، تشترط في طلبات القروض.",
      "Attestation par laquelle l'employeur s'engage à virer le salaire sur le compte bancaire du salarié, exigée pour les crédits.",
      "Certificate whereby the employer undertakes to transfer the salary to the employee's bank account, required for loans.",
      "Certificado por el que el empleador se compromete a transferir el salario a la cuenta del trabajador, exigido para préstamos.",
      "Attestato con cui il datore di lavoro si impegna ad accreditare lo stipendio sul conto del dipendente, richiesto per prestiti.",
      "Bescheinigung, mit der sich der Arbeitgeber zur Gehaltsüberweisung auf das Konto des Arbeitnehmers verpflichtet, für Kredite.",
      "Справка об обязательстве работодателя перечислять зарплату на счёт работника для кредитов."
    ),
    where: W7(
      "مصلحة الموارد البشرية بالمقاولة ثم البنك المقرض",
      "Service des ressources humaines de l'entreprise, puis la banque prêteuse",
      "HR department of the company, then the lending bank",
      "Departamento de recursos humanos y luego el banco prestamista",
      "Ufficio risorse umane e poi la banca mutuante",
      "Personalabteilung des Unternehmens, dann die kreditgebende Bank",
      "Кадровая служба предприятия, затем кредитующий банк"
    ),
    keywords: ["تحويل الأجر", "domiciliation de salaire", "قرض", "crédit"],
  },
  {
    id: "ich-attestation-change",
    cat: "ichhadat",
    title: T7(
      "شهادة الصرف",
      "Attestation de change",
      "Foreign exchange certificate",
      "Certificado de cambio",
      "Attestato di cambio",
      "Devisenbescheinigung",
      "Справка о валютной операции"
    ),
    desc: D7(
      "شهادة بنكية تثبت عملية صرف العملة لأغراض الاستيراد أو الدراسة أو السفر.",
      "Attestation bancaire justifiant une opération de change de devises pour importation, études ou voyage.",
      "Bank certificate justifying a foreign currency exchange operation for import, studies or travel.",
      "Certificado bancario que justifica una operación de cambio de divisas para importación, estudios o viajes.",
      "Attestato bancario che giustifica un'operazione di cambio di valuta per importazione, studio o viaggio.",
      "Bankbescheinigung über eine Devisenumtauschoperation für Import, Studium oder Reise.",
      "Банковская справка о валютной операции для импорта, учёбы или поездки."
    ),
    where: W7(
      "الوكالة البنكية المنفذة للعملية في إطار مدونة الصرف",
      "Agence bancaire exécutante, dans le cadre du code des changes",
      "Executing bank branch, under the foreign exchange code",
      "Sucursal ejecutante, conforme al código de cambios",
      "Filiale esecutrice, nel quadro del codice valutario",
      "Ausführende Bankfiliale im Rahmen des Devisenkodex",
      "Исполняющий филиал банка в рамках валютного кодекса"
    ),
    keywords: ["الصرف", "change", "devise", "عملة صعبة"],
  },
  // ─── Divers administratifs ───
  {
    id: "ich-certificat-vie-pension",
    cat: "ichhadat",
    title: T7(
      "شهادة الحياة الخاصة بصرف المعاش",
      "Certificat de vie pour pension",
      "Life certificate for pension",
      "Certificado de vida para pensión",
      "Certificato di vita per pensione",
      "Lebensbescheinigung für Rentenbezug",
      "Справка о жизни для получения пенсии"
    ),
    desc: D7(
      "شهادة حياة تقدم دورياً للمحافظة على صرف المعاش من الصناديق والمؤسسات المانحة.",
      "Certificat de vie produit périodiquement pour maintenir le service de la pension par les organismes payeurs.",
      "Life certificate produced periodically to keep the pension being paid by the disbursing bodies.",
      "Certificado de vida presentado periódicamente para mantener el pago de la pensión.",
      "Certificato di vita presentato periodicamente per mantenere l'erogazione della pensione.",
      "Lebensbescheinigung, die regelmäßig vorzulegen ist, um die Rentenzahlung aufrechtzuerhalten.",
      "Справка о жизни, периодически представляемая для продолжения выплаты пенсии."
    ),
    where: W7(
      "السلطة المحلية أو العدول، وتودع لدى الصندوق المانح للمعاش",
      "Autorité locale ou adouls, à déposer auprès de la caisse qui verse la pension",
      "Local authority or notaries, to be filed with the pension-paying fund",
      "Autoridad local o adules, para depositar en la caja pagadora",
      "Autorità locale o aduli, da depositare presso la cassa pagatrice",
      "Ortsbehörde oder Adouls, beim Rententräger einzureichen",
      "Местные власти или адулы; подаётся в фонд, выплачивающий пенсию"
    ),
    keywords: ["شهادة الحياة", "certificat de vie", "معاش", "pension"],
  },
  {
    id: "ich-attestation-existence-legale",
    cat: "ichhadat",
    title: T7(
      "شهادة الوجود القانوني للمقاولة",
      "Attestation d'existence légale d'entreprise",
      "Certificate of company's legal existence",
      "Certificado de existencia legal de empresa",
      "Attestato di esistenza legale dell'impresa",
      "Bescheinigung über die rechtliche Existenz des Unternehmens",
      "Справка о юридическом существовании компании"
    ),
    desc: D7(
      "شهادة رسمية تثبت تسجيل المقاولة في السجل التجاري وتاريخ تأسيسها.",
      "Certificat officiel attestant l'immatriculation de l'entreprise au registre du commerce et sa date de constitution.",
      "Official certificate attesting the company's registration in the trade register and its incorporation date.",
      "Certificado oficial que acredita la inscripción de la empresa en el registro mercantil y su fecha de constitución.",
      "Certificato ufficiale dell'iscrizione dell'impresa nel registro delle imprese e della data di costituzione.",
      "Amtliche Bescheinigung über die Eintragung des Unternehmens im Handelsregister und das Gründungsdatum.",
      "Официальная справка о регистрации компании в торговом реестре и дате её создания."
    ),
    where: W7(
      "المكتب المغربي للملكية الصناعية والتجارية عبر بوابة ompic.ma",
      "Office marocain de la propriété industrielle et commerciale, via le portail ompic.ma",
      "Moroccan Office of Industrial and Commercial Property, via the ompic.ma portal",
      "Oficina marroquí de la propiedad industrial y comercial, vía ompic.ma",
      "Ufficio marocchino della proprietà industriale e commerciale, tramite ompic.ma",
      "Marokkanisches Amt für gewerbliches Eigentum, über das Portal ompic.ma",
      "Марокканское ведомство промышленной и коммерческой собственности через портал ompic.ma"
    ),
    keywords: ["الوجود القانوني", "existence légale", "OMPIC", "registre du commerce"],
    authority: "ompic",
  },
  {
    id: "ich-attestation-situation-familiale",
    cat: "ichhadat",
    title: T7(
      "شهادة الوضعية العائلية (تركيبة الأسرة)",
      "Attestation de situation familiale (composition de famille)",
      "Family status certificate (family composition)",
      "Certificado de situación familiar (composición familiar)",
      "Attestato di situazione familiare (composizione)",
      "Familienstandsbescheinigung (Familienzusammensetzung)",
      "Справка о семейном положении (состав семьи)"
    ),
    desc: D7(
      "شهادة تحصر أفراد أسرة المعني وقربهم وحالتهم، ترفق بطلبات المنح والسكن الاجتماعي.",
      "Attestation recensant les membres de la famille, leur lien de parenté et leur situation, jointe aux demandes de bourse et de logement social.",
      "Certificate listing family members, their kinship and status, attached to scholarship and social housing applications.",
      "Certificado que enumera los miembros de la familia, su parentesco y situación, adjunto a solicitudes de beca y vivienda social.",
      "Attestato che elenca i componenti della famiglia, il loro rapporto e la loro condizione, per borse e alloggio sociale.",
      "Bescheinigung über Familienangehörige, deren Verwandtschaftsgrad und Status, für Stipendien- und Sozialwohnungsanträge.",
      "Справка о членах семьи, их родстве и статусе для стипендий и социального жилья."
    ),
    where: W7(
      "السلطة المحلية (الملحقة الإدارية) التابع لها محل السكنى",
      "Autorité locale (annexe administrative) du lieu de résidence",
      "Local authority (administrative annex) of the place of residence",
      "Autoridad local (anexo administrativo) del lugar de residencia",
      "Autorità locale (annesso amministrativo) del luogo di residenza",
      "Ortsbehörde (Verwaltungsanhalt) des Wohnorts",
      "Местные власти (административный округ) по месту жительства"
    ),
    keywords: ["تركيبة الأسرة", "composition de famille", "الوضعية العائلية", "situation familiale"],
    popular: true,
  },
  {
    id: "ich-attestation-administrative",
    cat: "ichhadat",
    title: T7(
      "الشهادة الإدارية (من السلطة المحلية)",
      "Attestation administrative (autorité locale)",
      "Administrative certificate (local authority)",
      "Certificado administrativo (autoridad local)",
      "Attestato amministrativo (autorità locale)",
      "Verwaltungsbescheinigung (Ortsbehörde)",
      "Административная справка (местные власти)"
    ),
    desc: D7(
      "شهادة عامة تسلّمها الملحقة الإدارية للإشهاد بوقائع إدارية متنوعة تخص المعني.",
      "Certificat général délivré par l'annexe administrative pour attester divers faits administratifs concernant l'intéressé.",
      "General certificate issued by the administrative annex to attest various administrative facts about the person.",
      "Certificado general expedido por el anexo administrativo para acreditar hechos administrativos del interesado.",
      "Certificato generale rilasciato dall'annesso amministrativo per attestare vari fatti amministrativi.",
      "Allgemeine Bescheinigung der Verwaltungsanhaltstelle über verschiedene Verwaltungstatsachen.",
      "Общая справка административного округа о различных административных фактах."
    ),
    where: W7(
      "الملحقة الإدارية أو القيادة التابع لها محل السكنى",
      "Annexe administrative ou caïdat du lieu de résidence",
      "Administrative annex or caïd's office of the place of residence",
      "Anexo administrativo o caidad del lugar de residencia",
      "Annesso amministrativo o caidato del luogo di residenza",
      "Verwaltungsanhaltstelle oder Caïdat des Wohnorts",
      "Административный округ или кайдат по месту жительства"
    ),
    keywords: ["الشهادة الإدارية", "attestation administrative", "السلطة المحلية", "mokataa"],
  },
  {
    id: "ich-attestation-mere-foyer",
    cat: "ichhadat",
    title: T7(
      "شهادة الأم ربة البيت",
      "Attestation de mère au foyer",
      "Stay-at-home mother certificate",
      "Certificado de madre ama de casa",
      "Attestato di madre casalinga",
      "Bescheinigung für Hausfrau und Mutter",
      "Справка о матери-домохозяйке"
    ),
    desc: D7(
      "شهادة تثبت أن الأم لا تمارس أي نشاط مهني وتكرّس نفسها لرعاية أسرتها، تطلب في ملفات المنح.",
      "Attestation constatant que la mère n'exerce aucune activité professionnelle et se consacre à sa famille, demandée pour les bourses.",
      "Certificate attesting that the mother has no professional activity and devotes herself to her family, requested for scholarships.",
      "Certificado que acredita que la madre no ejerce actividad profesional y se dedica a su familia, para becas.",
      "Attestato che certifica l'assenza di attività professionale della madre dedita alla famiglia, per le borse.",
      "Bescheinigung, dass die Mutter keiner Erwerbstätigkeit nachgeht und sich der Familie widmet, für Stipendien.",
      "Справка о том, что мать не работает и занимается семьёй, для стипендий."
    ),
    where: W7(
      "السلطة المحلية بالجماعة، بعد تصريح شاهدين عند الحاجة",
      "Autorité locale de la commune, avec témoignage de deux témoins si nécessaire",
      "Local authority of the commune, with two witnesses' testimony if needed",
      "Autoridad local, con testimonio de dos testigos si es necesario",
      "Autorità locale, con testimonianza di due testimoni se necessario",
      "Ortsbehörde der Gemeinde, bei Bedarf mit zwei Zeugen",
      "Местные власти коммуны, при необходимости с двумя свидетелями"
    ),
    keywords: ["ربة البيت", "mère au foyer", "عدم العمل", "bourse"],
  },
  {
    id: "ich-attestation-bonnes-moeurs",
    cat: "ichhadat",
    title: T7(
      "شهادة حسن السيرة والسلوك (من السلطة المحلية)",
      "Attestation de bonnes mœurs (autorité locale)",
      "Certificate of good conduct (local authority)",
      "Certificado de buena conducta (autoridad local)",
      "Attestato di buona condotta (autorità locale)",
      "Führungsbescheinigung (Ortsbehörde)",
      "Справка о благонадёжности (местные власти)"
    ),
    desc: D7(
      "شهادة من السلطة المحلية تشهد بحسن سيرة وسلوك المعني، تطلب في التوظيف والرخص.",
      "Attestation de l'autorité locale témoignant de la bonne moralité et conduite de l'intéressé, exigée pour emplois et autorisations.",
      "Certificate from the local authority testifying to the person's good character and conduct, required for jobs and permits.",
      "Certificado de la autoridad local que da fe de la buena conducta del interesado, para empleos y licencias.",
      "Attestato dell'autorità locale sulla buona condotta dell'interessato, per impieghi e autorizzazioni.",
      "Ortsbehördliche Bescheinigung über den guten Leumund, für Anstellungen und Bewilligungen.",
      "Справка местных властей о благонадёжности лица, требуемая для работы и разрешений."
    ),
    where: W7(
      "السلطة المحلية (القيادة أو الملحقة الإدارية) بمحل السكنى",
      "Autorité locale (caïdat ou annexe administrative) du domicile",
      "Local authority (caïd's office or administrative annex) of the home area",
      "Autoridad local (caidad o anexo administrativo) del domicilio",
      "Autorità locale (caidato o annesso amministrativo) del domicilio",
      "Ortsbehörde (Caïdat oder Verwaltungsanhalt) des Wohnsitzes",
      "Местные власти (кайдат или административный округ) по месту жительства"
    ),
    keywords: ["حسن السيرة", "bonnes mœurs", "السلطة المحلية", "good conduct"],
  },
  {
    id: "ich-attestation-benevolat",
    cat: "ichhadat",
    title: T7(
      "شهادة التطوع (العمل الجمعوي)",
      "Attestation de bénévolat associatif",
      "Volunteer work certificate",
      "Certificado de voluntariado",
      "Attestato di volontariato",
      "Ehrenamtsbescheinigung",
      "Справка о волонтёрской работе"
    ),
    desc: D7(
      "شهادة تثبت انخراط المعني في أعمال تطوعية لفائدة جمعية، تطلب في ملفات الترشيح.",
      "Attestation prouvant l'engagement de l'intéressé dans des activités bénévoles au profit d'une association, demandée dans les candidatures.",
      "Certificate proving the person's involvement in volunteer activities for an association, requested in applications.",
      "Certificado que acredita la participación en actividades voluntarias para una asociación, para candidaturas.",
      "Attestato dell'impegno in attività di volontariato per un'associazione, richiesto nelle candidature.",
      "Nachweis des ehrenamtlichen Engagements für einen Verein, in Bewerbungen verlangt.",
      "Справка об участии в волонтёрской деятельности ассоциации, требуется при подаче заявок."
    ),
    where: W7(
      "مكتب الجمعية المعنية بتوقيع رئيسها",
      "Bureau de l'association concernée, avec la signature de son président",
      "Office of the association concerned, signed by its president",
      "Oficina de la asociación, firmada por su presidente",
      "Sede dell'associazione, con la firma del presidente",
      "Vereinsbüro, unterzeichnet vom Präsidenten",
      "Бюро ассоциации с подписью её президента"
    ),
    keywords: ["التطوع", "bénévolat", "جمعية", "volontariat"],
  },
  {
    id: "ich-attestation-resiliation-assurance",
    cat: "ichhadat",
    title: T7(
      "شهادة فسخ عقد التأمين",
      "Attestation de résiliation d'assurance",
      "Insurance contract cancellation certificate",
      "Certificado de cancelación de seguro",
      "Attestato di recesso dall'assicurazione",
      "Kündigungsbescheinigung der Versicherung",
      "Справка о расторжении договора страхования"
    ),
    desc: D7(
      "شهادة من شركة التأمين تثبت إنهاء عقد التأمين وتاريخ توقف الضمان.",
      "Attestation de la compagnie d'assurances constatant la fin du contrat et la date d'arrêt de la garantie.",
      "Certificate from the insurance company attesting the end of the policy and the guarantee stop date.",
      "Certificado de la compañía de seguros que acredita el fin de la póliza y la fecha de cese de la garantía.",
      "Attestato della compagnia assicurativa sull'interruzione della polizza e la data di cessazione della garanzia.",
      "Bescheinigung des Versicherers über das Vertragsende und das Datum des Deckungsendes.",
      "Справка страховой компании о прекращении договора и дате окончания покрытия."
    ),
    where: W7(
      "شركة التأمين أو الوكيل المعتمد، بعد أداء آخر واجب",
      "Compagnie d'assurances ou agent agréé, après règlement de la dernière prime",
      "Insurance company or accredited agent, after payment of the last premium",
      "Compañía de seguros o agente homologado, tras pagar la última prima",
      "Compagnia assicurativa o agente autorizzato, dopo il pagamento dell'ultimo premio",
      "Versicherungsgesellschaft oder zugelassener Vermittler nach Zahlung der letzten Prämie",
      "Страховая компания или аккредитованный агент после оплаты последнего взноса"
    ),
    keywords: ["فسخ التأمين", "résiliation assurance", "تأمين", "assurance"],
  },
];
