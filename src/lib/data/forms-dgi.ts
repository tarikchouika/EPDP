// DGI (Direction Générale des Impôts) forms — declarations, refunds,
// exemptions, attestations and claims. Part of the extended catalog
// (katib.ma / onebox.ma / namodaj.ma coverage).
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsDgi: DocumentItem[] = [
  // ─── TVA : déclarations, restitution et attestations ───
  {
    id: "dgi-tva-mensuelle",
    cat: "dgi",
    title: T7(
      "تصريح الضريبة على القيمة المضافة الشهري",
      "Déclaration mensuelle de la TVA",
      "Monthly VAT declaration",
      "Declaración mensual del IVA",
      "Dichiarazione IVA mensile",
      "Monatliche Mehrwertsteuererklärung",
      "Ежемесячная декларация НДС"
    ),
    desc: D7(
      "استمارة التصفية الشهرية للضريبة على القيمة المضافة التي يودعها المكلف لدى المديرية العامة للضرائب.",
      "Formulaire de liquidation mensuelle de la TVA déposé auprès de la Direction Générale des Impôts.",
      "Monthly VAT settlement form filed with the Directorate General of Taxes (DGI).",
      "Formulario mensual de liquidación del IVA presentado ante la Dirección General de Impuestos.",
      "Modulo mensile di liquidazione IVA presentato alla Direzione Generale delle Imposte.",
      "Monatliches Formular zur Mehrwertsteuer-Abrechnung, eingereicht bei der Hauptabteilung Steuern.",
      "Ежемесячная форма расчёта НДС, подаваемая в Главную дирекцию по налогам."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل بالمديرية الجهوية للضرائب أو بوابة التصريح الإلكتروني SIMPL",
      "Service du recouvrement de la direction régionale des impôts ou portail de télédéclaration SIMPL",
      "Regional tax directorate collection office or the SIMPL e-filing portal",
      "Oficina de recaudación de la dirección regional de impuestos o portal SIMPL",
      "Ufficio riscossione della direzione regionale delle imposte o portale SIMPL",
      "Vollzugsstelle der regionalen Steuerdirektion oder SIMPL-Portal",
      "Отдел взыскания региональной налоговой дирекции или портал SIMPL"
    ),
    authority: "tax",
    keywords: ["TVA", "الضريبة على القيمة المضافة", "تصريح", "VAT", "dgi", "SIMPL"],
    popular: true,
  },
  {
    id: "dgi-tva-trimestrielle",
    cat: "dgi",
    title: T7(
      "تصريح الضريبة على القيمة المضافة الثلاثي",
      "Déclaration trimestrielle de la TVA",
      "Quarterly VAT declaration",
      "Declaración trimestral del IVA",
      "Dichiarazione IVA trimestrale",
      "Vierteljährliche Mehrwertsteuererklärung",
      "Квартальная декларация НДС"
    ),
    desc: D7(
      "استمارة التصفية الثلاثية للضريبة على القيمة المضافة مخصصة للمكلفين الذين لا يتجاوز رقم معاملاتهم السقف المحدد.",
      "Formulaire de liquidation trimestrielle de la TVA réservé aux redevables dont le chiffre d'affaires reste sous le seuil légal.",
      "Quarterly VAT settlement form for taxpayers whose annual turnover stays below the statutory threshold.",
      "Formulario trimestral de liquidación del IVA destinado a contribuyentes cuyo volumen de negocios no supera el umbral legal.",
      "Modulo trimestrale di liquidazione IVA riservato ai contribuenti con fatturato annuo inferiore alla soglia legale.",
      "Vierteljährliches Formular zur Mehrwertsteuer-Abrechnung für Steuerpflichtige unterhalb der gesetzlichen Umsatzschwelle.",
      "Квартальная форма расчёта НДС для налогоплательщиков с оборотом ниже установленного законом порога."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل بالمديرية الجهوية للضرائب أو عبر منصة SIMPL للتصريح عن بعد",
      "Service du recouvrement de la direction régionale des impôts ou en ligne via la plateforme SIMPL",
      "Collection office of the regional tax directorate, or online through the SIMPL platform",
      "Oficina de recaudación de la dirección regional de impuestos o en línea mediante la plataforma SIMPL",
      "Ufficio riscossione della direzione regionale delle imposte oppure online tramite la piattaforma SIMPL",
      "Vollzugsstelle der regionalen Steuerdirektion oder online über die SIMPL-Plattform",
      "Отдел взыскания региональной налоговой дирекции или онлайн через платформу SIMPL"
    ),
    authority: "tax",
    keywords: ["TVA", "الضريبة على القيمة المضافة", "تصريح ثلاثي", "IVA", "dgi"],
  },
  {
    id: "dgi-tva-regime-encaissement",
    cat: "dgi",
    title: T7(
      "طلب اختيار نظام التحصيل في الضريبة على القيمة المضافة",
      "Option pour le régime d'encaissement de la TVA",
      "Option for the VAT cash-basis regime",
      "Opción por el régimen de caja del IVA",
      "Opzione per il regime di incasso dell'IVA",
      "Option für die Mehrwertsteuer nach dem Vereinnahmungsprinzip",
      "Заявление о применении кассового метода при НДС"
    ),
    desc: D7(
      "طلب يوجهه المكلف إلى المديرية العامة للضرائب لاختيار أداء الضريبة على القيمة المضافة عند التحصيل الفعلي للأداءات.",
      "Demande adressée à la DGI par le redevable afin d'opter pour une TVA exigible à l'encaissement effectif des sommes.",
      "Request filed with the DGI by a taxable person opting to have VAT become due only upon actual payment.",
      "Solicitud presentada ante la DGI para que el IVA se devengue únicamente con el cobro efectivo de las sumas.",
      "Istanza presentata alla DGI per optare per un'IVA esigibile all'effettivo incasso dei compensi.",
      "Antrag an die DGI, die Mehrwertsteuer erst bei tatsächlichem Zahlungseingang fällig werden zu lassen.",
      "Заявление в DGI о порядке, при котором НДС возникает только при фактическом получении оплаты."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع لها المكلف أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Service du recouvrement territorialement compétent ou services numériques de la Direction Générale des Impôts",
      "Competent collection office of the tax directorate, or the DGI's digital services",
      "Oficina de recaudación competente o servicios digitales de la Dirección General de Impuestos",
      "Ufficio riscossione competente oppure servizi digitali della Direzione Generale delle Imposte",
      "Zuständige Vollzugsstelle der Steuerdirektion oder die digitalen Dienste der DGI",
      "Компетентный отдел взыскания налоговой дирекции либо цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["TVA", "نظام التحصيل", "encaissement", "régime", "dgi"],
  },
  {
    id: "dgi-tva-restitution-credit",
    cat: "dgi",
    title: T7(
      "طلب استرجاع رصيد الضريبة على القيمة المضافة",
      "Demande de restitution du crédit de TVA",
      "Request for refund of the VAT credit",
      "Solicitud de devolución del saldo a favor del IVA",
      "Domanda di rimborso del credito IVA",
      "Antrag auf Erstattung des Mehrwertsteuer-Guthabens",
      "Заявление на возврат переплаты по НДС"
    ),
    desc: D7(
      "طلب يسترجع بموجبه المكلف الرصيد الدائن للضريبة على القيمة المضافة المتكون من فائض الضريبة القابلة للخصم.",
      "Demande par laquelle le redevable récupère le crédit de TVA constitué par un excédent de taxe déductible.",
      "Application through which a taxpayer recovers the VAT credit built up from excess deductible tax.",
      "Solicitud mediante la cual el contribuyente recupera el saldo del IVA derivado de un exceso de impuesto deducible.",
      "Domanda con cui il contribuente recupera il credito IVA formatosi per eccedenza di imposta detraibile.",
      "Antrag, mit dem der Steuerpflichtige das durch überhöhte Vorsteuer entstandene Mehrwertsteuer-Guthaben zurückerhält.",
      "Заявление, по которому налогоплательщик возвращает кредит НДС, образовавшийся из превышения вычитаемого налога."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل بالمديرية الجهوية للضرائب أو عبر منصة SIMPL",
      "Service du recouvrement de la direction régionale des impôts ou via la plateforme SIMPL",
      "Collection office of the regional tax directorate, or via the SIMPL platform",
      "Oficina de recaudación de la dirección regional de impuestos o a través de SIMPL",
      "Ufficio riscossione della direzione regionale delle imposte o tramite la piattaforma SIMPL",
      "Vollzugsstelle der regionalen Steuerdirektion oder über die SIMPL-Plattform",
      "Отдел взыскания региональной налоговой дирекции или через платформу SIMPL"
    ),
    authority: "tax",
    keywords: ["TVA", "رصيد", "restitution", "crédit TVA", "استرجاع", "dgi"],
    popular: true,
  },
  {
    id: "dgi-tva-regularisation",
    cat: "dgi",
    title: T7(
      "طلب تصحيح تصريحات الضريبة على القيمة المضافة",
      "Demande de régularisation des déclarations de TVA",
      "Request to rectify VAT declarations",
      "Solicitud de regularización de las declaraciones del IVA",
      "Domanda di regolarizzazione delle dichiarazioni IVA",
      "Antrag zur Berichtigung der Mehrwertsteuererklärungen",
      "Заявление об исправлении деклараций по НДС"
    ),
    desc: D7(
      "طلب يرمي إلى تصحيح الأخطاء أو الأغلاط المضمنة في تصريحات الضريبة على القيمة المضافة المودعة سابقا.",
      "Demande visant à corriger les erreurs ou omissions figurant dans les déclarations de TVA déjà souscrites.",
      "Application aiming to correct errors or omissions found in previously filed VAT declarations.",
      "Solicitud destinada a corregir errores u omisiones de las declaraciones del IVA ya presentadas.",
      "Domanda volta a correggere errori od omissioni contenuti nelle dichiarazioni IVA già presentate.",
      "Antrag zur Korrektur von Fehlern oder Auslassungen in bereits eingereichten Mehrwertsteuererklärungen.",
      "Заявление направлено на исправление ошибок и упущений в ранее поданных декларациях по НДС."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع لها المكلف أو خدمات التصريح الإلكتروني للمديرية العامة للضرائب",
      "Service du recouvrement compétent ou les services de télédéclaration de la Direction Générale des Impôts",
      "The competent collection office, or the DGI's e-filing services",
      "Oficina de recaudación competente o los servicios de presentación telemática de la DGI",
      "Ufficio riscossione competente oppure i servizi di teledichiarazione della DGI",
      "Zuständige Vollzugsstelle oder die elektronischen Erklärungsdienste der DGI",
      "Компетентный отдел взыскания либо сервисы электронной сдачи отчётности DGI"
    ),
    authority: "tax",
    keywords: ["TVA", "تصحيح", "régularisation", "تصريح", "dgi"],
  },
  {
    id: "dgi-tva-attestation-marches-publics",
    cat: "dgi",
    title: T7(
      "شهادة التصريح بالضريبة على القيمة المضافة لفائدة الصفقات العمومية",
      "Attestation de déclaration de TVA pour les marchés publics",
      "VAT declaration certificate for public procurement",
      "Certificado de declaración del IVA para contratación pública",
      "Attestato di dichiarazione IVA per gli appalti pubblici",
      "Nachweis der Mehrwertsteuer-Anmeldung für öffentliche Aufträge",
      "Справка о подаче деклараций НДС для государственных закупок"
    ),
    desc: D7(
      "شهادة تثبت انتظام المكلف في تقديم تصريحات الضريبة على القيمة المضافة، تطلب عند المشاركة في الصفقات العمومية.",
      "Attestation constatant la régularité du dépôt des déclarations de TVA, exigée pour participer aux marchés publics.",
      "Certificate confirming the regular filing of VAT declarations, required to take part in public tenders.",
      "Certificado que acredita la presentación regular de las declaraciones del IVA, exigido para licitaciones públicas.",
      "Attestato che certifica la regolare presentazione delle dichiarazioni IVA, richiesto per partecipare agli appalti pubblici.",
      "Bescheinigung über die ordnungsgemäße Abgabe der Mehrwertsteuererklärungen, erforderlich für öffentliche Ausschreibungen.",
      "Справка, подтверждающая регулярную подачу деклараций по НДС и необходимая для участия в госзакупках."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل بالمديرية الجهوية للضرائب أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Service du recouvrement de la direction régionale des impôts ou les services numériques de la DGI",
      "Collection office of the regional tax directorate, or the DGI's digital services",
      "Oficina de recaudación de la dirección regional de impuestos o los servicios digitales de la DGI",
      "Ufficio riscossione della direzione regionale delle imposte o i servizi digitali della DGI",
      "Vollzugsstelle der regionalen Steuerdirektion oder die digitalen Dienste der DGI",
      "Отдел взыскания региональной налоговой дирекции или цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["TVA", "الصفقات العمومية", "attestation", "marchés publics", "dgi"],
  },
  {
    id: "dgi-tva-remboursement-assujetti-non-etabli",
    cat: "dgi",
    title: T7(
      "طلب استرجاع الضريبة على القيمة المضافة لفائدة الخاضعين غير المستقرين بالمغرب",
      "Demande de restitution de la TVA pour les assujettis non établis au Maroc",
      "VAT refund application for taxable persons not established in Morocco",
      "Solicitud de devolución del IVA para sujetos pasivos no establecidos en Marruecos",
      "Domanda di rimborso IVA per soggetti passivi non stabiliti in Marocco",
      "Antrag auf Mehrwertsteuer-Erstattung für im Marokko nicht ansässige Steuerpflichtige",
      "Заявление на возврат НДС для налогоплательщиков без представительства в Марокко"
    ),
    desc: D7(
      "طلب يقدمه خاضع أجنبي غير مستقر بالمغرب لاسترجاع الضريبة على القيمة المضافة المؤداة بصفة قانونية.",
      "Demande déposée par un assujetti étranger non établi au Maroc afin de récupérer la TVA légalement acquittée.",
      "Application lodged by a foreign taxable person without a Moroccan establishment to recover lawfully paid VAT.",
      "Solicitud presentada por un sujeto pasivo extranjero sin establecimiento en Marruecos para recuperar el IVA legalmente pagado.",
      "Istanza presentata da un soggetto passivo estero senza stabile organizzazione in Marocco per recuperare l'IVA regolarmente versata.",
      "Antrag eines ausländischen, in Marokko nicht ansässigen Steuerpflichtigen auf Rückzahlung rechtmäßig gezahlter Mehrwertsteuer.",
      "Заявление иностранного налогоплательщика без представительства в Марокко о возврате правомерно уплаченного НДС."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل بالمديرية الجهوية المختصة مع التمثيل الجبائي عند الاقتضاء",
      "Service du recouvrement de la direction régionale compétente, avec représentation fiscale le cas échéant",
      "Collection office of the competent regional tax directorate, with fiscal representation where required",
      "Oficina de recaudación de la dirección regional competente, con representación fiscal cuando proceda",
      "Ufficio riscossione della direzione regionale competente, con eventuale rappresentanza fiscale",
      "Vollzugsstelle der zuständigen regionalen Steuerdirektion, gegebenenfalls mit steuerlicher Vertretung",
      "Отдел взыскания компетентной региональной дирекции, при необходимости через налогового представителя"
    ),
    authority: "tax",
    keywords: ["TVA", "استرجاع", "assujetti non établi", "refund", "dgi"],
  },
  {
    id: "dgi-tva-attestation-assujettissement",
    cat: "dgi",
    title: T7(
      "شهادة الخضوع للضريبة على القيمة المضافة",
      "Attestation d'assujettissement à la TVA",
      "Certificate of VAT registration (assujettissement)",
      "Certificado de sujeción al IVA",
      "Attestato di assoggettamento all'IVA",
      "Bescheinigung der Mehrwertsteuer-Pflichtigkeit",
      "Справка о регистрации в качестве плательщика НДС"
    ),
    desc: D7(
      "شهادة تثبت صفة المكلف بالضريبة على القيمة المضافة، تطلب خاصة لاسترجاع الضريبة بالخارج.",
      "Attestation confirmant la qualité d'assujetti à la TVA, demandée notamment pour récupérer la taxe à l'étranger.",
      "Certificate confirming VAT-registered status, requested in particular to recover tax abroad.",
      "Certificado que confirma la condición de sujeto pasivo del IVA, solicitado especialmente para recuperar el impuesto en el extranjero.",
      "Attestato che conferma la qualifica di soggetto passivo IVA, richiesto in particolare per recuperare l'imposta all'estero.",
      "Bescheinigung über die Eigenschaft als Mehrwertsteuer-Pflichtiger, insbesondere für Erstattungen im Ausland beantragt.",
      "Справка, подтверждающая статус плательщика НДС, запрашивается в основном для возврата налога за рубежом."
    ),
    where: W7(
      "قباضة الضرائب التابع لها المكلف أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Recette des impôts du contribuable ou services numériques de la Direction Générale des Impôts",
      "The taxpayer's local recette des impôts, or the DGI's digital services",
      "Recaudación de impuestos del contribuyente o servicios digitales de la DGI",
      "Riscossione delle imposte del contribuente oppure servizi digitali della DGI",
      "Für den Steuerpflichtigen zuständige Steuerkasse oder die digitalen Dienste der DGI",
      "Налоговая касса налогоплательщика либо цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["TVA", "assujettissement", "شهادة", "attestation", "dgi"],
  },

  // ─── IR : salaires et revenus ───
  {
    id: "dgi-ir-salaires-mensuelle",
    cat: "dgi",
    title: T7(
      "التصريح الشهري بالضريبة على الدخل على الرواتب",
      "Déclaration mensuelle de l'IR sur les salaires",
      "Monthly declaration of payroll income tax (IR)",
      "Declaración mensual del IR sobre salarios",
      "Dichiarazione mensile dell'IR sulle retribuzioni",
      "Monatliche Erklärung der Lohnsteuer (IR)",
      "Ежемесячная декларация подоходного налога с зарплаты"
    ),
    desc: D7(
      "استمارة شهرية يقدمها المشغل لتصفية الضريبة على الدخل المفروضة على الأجور والرواتب المصرح بها.",
      "Formulaire mensuel déposé par l'employeur pour liquider l'IR afférent aux salaires et rémunérations déclarés.",
      "Monthly form filed by the employer to settle income tax on the declared wages and salaries.",
      "Formulario mensual presentado por el empleador para liquidar el IR correspondiente a los salarios declarados.",
      "Modulo mensile presentato dal datore di lavoro per liquidare l'IR sulle retribuzioni dichiarate.",
      "Monatliches Formular des Arbeitgebers zur Festsetzung der Einkommensteuer auf die gemeldeten Löhne.",
      "Ежемесячная форма, подаваемая работодателем для расчёта подоходного налога с задекларированных зарплат."
    ),
    where: W7(
      "قباضة الضرائب التابع لها المشغل أو منصة التصريح الإلكتروني SIMPL",
      "Recette des impôts de l'employeur ou portail de télédéclaration SIMPL",
      "The employer's recette des impôts, or the SIMPL e-filing portal",
      "Recaudación de impuestos del empleador o portal de declaración telemática SIMPL",
      "Riscossione delle imposte del datore di lavoro oppure portale di teledichiarazione SIMPL",
      "Steuerkasse des Arbeitgebers oder SIMPL-Portal für elektronische Erklärungen",
      "Налоговая касса работодателя или портал электронной отчётности SIMPL"
    ),
    authority: "tax",
    keywords: ["IR", "الضريبة على الدخل", "رواتب", "salaires", "dgi", "SIMPL"],
    popular: true,
  },
  {
    id: "dgi-ir-certificat-retenue-source",
    cat: "dgi",
    title: T7(
      "شهادة الاقتطاع عند المصدر للضريبة على الدخل",
      "Certificat de retenue à la source de l'IR",
      "Certificate of income tax withheld at source",
      "Certificado de retención del IR en la fuente",
      "Certificato di ritenuta alla fonte dell'IR",
      "Bescheinigung über die einbehaltene Quellensteuer",
      "Справка об удержанном у источника подоходном налоге"
    ),
    desc: D7(
      "وثيقة يسلمها المقتطع للمستفيد تثبت مبالغ الضريبة على الدخل المقتطعة عند المصدر خلال السنة.",
      "Document délivré au bénéficiaire constatant les montants d'IR retenus à la source au cours de l'année.",
      "Document issued to the payee stating the income tax amounts withheld at source during the year.",
      "Documento entregado al beneficiario que indica las retenciones de IR practicadas durante el año.",
      "Documento rilasciato al percettore che attesta gli importi di IR trattenuti alla fonte nell'anno.",
      "Dem Zahlungsempfänger erteilter Nachweis über die im Jahr einbehaltene Quellensteuer.",
      "Документ, выдаваемый получателю дохода, с указанием сумм подоходного налога, удержанных за год."
    ),
    where: W7(
      "يسلمها المشغل أو المقتطع، مع إمكانية التوثيق لدى قباضة الضرائب",
      "Délivré par l'employeur ou le débiteur des sommes, avec possibilité de visa auprès de la recette des impôts",
      "Issued by the employer or payer, with the option of endorsement at the recette des impôts",
      "Emitido por el empleador o pagador, con posibilidad de visado en la recaudación de impuestos",
      "Rilasciato dal datore di lavoro o dal debitore, con eventuale vidimazione presso la riscossione delle imposte",
      "Ausgestellt vom Arbeitgeber oder Zahlungspflichtigen, gegebenenfalls durch die Steuerkasse beglaubigt",
      "Выдаётся работодателем или плательщиком средств, при необходимости заверяется в налоговой кассе"
    ),
    authority: "tax",
    keywords: ["IR", "retenue à la source", "اقتطاع", "شهادة", "dgi"],
  },
  {
    id: "dgi-ir-revision",
    cat: "dgi",
    title: T7(
      "طلب مراجعة الضريبة على الدخل",
      "Demande de révision de l'IR",
      "Request for review of income tax",
      "Solicitud de revisión del IR",
      "Domanda di revisione dell'IR",
      "Antrag auf Überprüfung der Einkommensteuer",
      "Заявление о пересмотре подоходного налога"
    ),
    desc: D7(
      "طلب يقدمه المعني بالأمر لتصحيح الخطأ الوارد في تصريحه أو في وعائه الضريبي الخاص بالضريبة على الدخل.",
      "Demande du contribuable visant à corriger une erreur affectant sa déclaration ou son assiette d'IR.",
      "Taxpayer's request to correct an error affecting his declaration or income tax base.",
      "Solicitud del contribuyente para corregir un error que afecte su declaración o base del IR.",
      "Istanza del contribuente volta a correggere un errore che incide sulla dichiarazione o sulla base imponibile dell'IR.",
      "Antrag des Steuerpflichtigen zur Berichtigung eines Fehlers in der Erklärung oder der Bemessungsgrundlage.",
      "Заявление налогоплательщика об исправлении ошибки в декларации или налоговой базе подоходного налога."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع لها المعني بالأمر وفق طبيعة الخطأ",
      "Section des impôts ou recette des impôts compétente selon la nature de l'erreur",
      "The competent tax office or recette des impôts, depending on the nature of the error",
      "Oficina de impuestos o recaudación competente según la naturaleza del error",
      "Ufficio imposte o riscossione competente secondo la natura dell'errore",
      "Zuständiges Steueramt oder Steuerkasse, je nach Art des Fehlers",
      "Компетентный налоговый отдел или касса — в зависимости от характера ошибки"
    ),
    authority: "tax",
    keywords: ["IR", "مراجعة", "révision", "الضريبة على الدخل", "dgi"],
  },
  {
    id: "dgi-ir-revenus-fonciers",
    cat: "dgi",
    title: T7(
      "التصريح السنوي بالمداخيل العقارية",
      "Déclaration annuelle des revenus fonciers",
      "Annual declaration of rental income",
      "Declaración anual de ingresos inmobiliarios",
      "Dichiarazione annuale dei redditi fondiari",
      "Jährliche Erklärung der Mieterträge",
      "Ежегодная декларация доходов от недвижимости"
    ),
    desc: D7(
      "تصريح سنوي يقدمه المالك عن مداخيل الكراء العقاري الخاضعة للضريبة على الدخل مع الخصومات المسموح بها.",
      "Déclaration annuelle par laquelle le propriétaire reporte ses revenus locatifs imposables à l'IR et les déductions admises.",
      "Annual declaration in which the owner reports taxable rental income and the deductions allowed for IR.",
      "Declaración anual en la que el propietario declara los ingresos de alquiler imponibles y las deducciones admitidas.",
      "Dichiarazione annuale con cui il proprietario indica i redditi di locazione imponibili e le deduzioni ammesse.",
      "Jährliche Erklärung, in der der Eigentümer steuerpflichtige Mieteinnahmen und zulässige Abzüge angibt.",
      "Ежегодная декларация, в которой собственник указывает облагаемые арендные доходы и допустимые вычеты."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع لها المالك أو منصة التصريح الإلكتروني SIMPL",
      "Section des impôts ou recette des impôts du propriétaire, ou portail SIMPL de télédéclaration",
      "The owner's tax office or recette des impôts, or the SIMPL e-filing portal",
      "Oficina o recaudación de impuestos del propietario, o portal de declaración telemática SIMPL",
      "Ufficio o riscossione delle imposte del proprietario, oppure portale di teledichiarazione SIMPL",
      "Steueramt oder Steuerkasse des Eigentümers bzw. das SIMPL-Portal",
      "Налоговый орган или касса собственника, либо портал SIMPL"
    ),
    authority: "tax",
    keywords: ["IR", "revenus fonciers", "مداخيل عقارية", "كراء", "dgi"],
    popular: true,
  },
  {
    id: "dgi-ir-engagement-location",
    cat: "dgi",
    title: T7(
      "الالتزام بالكراء للاستفادة من التخفيض في الضريبة على الدخل",
      "Engagement de location pour bénéficier de l'abattement sur l'IR",
      "Rental commitment to benefit from the IR abatement",
      "Compromiso de alquiler para beneficiarse de la deducción del IR",
      "Impegno di locazione per fruire della detrazione sull'IR",
      "Vermietungsverpflichtung zur Erlangung des Einkommensteuerabzugs",
      "Обязательство сдать в аренду для получения вычета по подоходному налогу"
    ),
    desc: D7(
      "وثيقة يلتزم فيها المالك بكراء العقار لمدة محددة قصد الاستفادة من نسبة التخفيض في الضريبة على مداخيل الكراء.",
      "Document par lequel le propriétaire s'engage à louer le bien pendant une durée déterminée afin de bénéficier de l'abattement sur les revenus locatifs.",
      "Document whereby the owner undertakes to let the property for a set period to qualify for the rental-income abatement.",
      "Documento por el que el propietario se compromete a alquilar el inmueble por un plazo determinado para acogerse a la reducción.",
      "Documento con cui il proprietario si impegna a locare l'immobile per un periodo determinato per fruire della riduzione.",
      "Erklärung, mit der sich der Eigentümer verpflichtet, das Objekt für einen bestimmten Zeitraum zu vermieten, um den Freibetrag zu erhalten.",
      "Документ, по которому собственник обязуется сдавать объект в аренду определённый срок для получения вычета."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع لها المالك عند إيداع التصريح بالمداخيل العقارية",
      "Section ou recette des impôts du propriétaire, lors du dépôt de la déclaration des revenus fonciers",
      "The owner's tax office or recette des impôts, when filing the rental income declaration",
      "Oficina o recaudación de impuestos del propietario al presentar la declaración de ingresos inmobiliarios",
      "Ufficio o riscossione delle imposte del proprietario, al momento della dichiarazione dei redditi fondiari",
      "Steueramt oder Steuerkasse des Eigentümers bei Abgabe der Erklärung der Mieterträge",
      "Налоговый орган или касса собственника при подаче декларации о доходах от аренды"
    ),
    authority: "tax",
    keywords: ["IR", "engagement", "التزام", "كراء", "مداخيل عقارية", "dgi"],
  },
  {
    id: "dgi-ir-restitution",
    cat: "dgi",
    title: T7(
      "طلب استرجاع الضريبة على الدخل المؤداة بصفة زائدة",
      "Demande de restitution de l'IR payé en trop",
      "Request for refund of overpaid income tax",
      "Solicitud de devolución del IR pagado en exceso",
      "Domanda di rimborso dell'IR versata in eccesso",
      "Antrag auf Erstattung der zu viel gezahlten Einkommensteuer",
      "Заявление о возврате излишне уплаченного подоходного налога"
    ),
    desc: D7(
      "طلب يسترجع بموجبه المكلف المبالغ المؤداة زيادة عن الضريبة على الدخل المستحقة عليه.",
      "Demande permettant au contribuable de récupérer les sommes versées au-delà de l'IR réellement dû.",
      "Application allowing a taxpayer to recover amounts paid beyond the income tax actually due.",
      "Solicitud que permite al contribuyente recuperar las cantidades pagadas en exceso del IR realmente debido.",
      "Domanda che consente al contribuente di recuperare le somme versate oltre l'IR effettivamente dovuta.",
      "Antrag, mit dem der Steuerpflichtige über die geschuldete Einkommensteuer hinaus gezahlte Beträge zurückerhält.",
      "Заявление, позволяющее налогоплательщику вернуть суммы, уплаченные сверх причитающегося подоходного налога."
    ),
    where: W7(
      "قباضة الضرائب التابع لها المكلف أو المديرية الجهوية للضرائب",
      "Recette des impôts du contribuable ou direction régionale des impôts",
      "The taxpayer's recette des impôts or the regional tax directorate",
      "Recaudación de impuestos del contribuyente o dirección regional de impuestos",
      "Riscossione delle imposte del contribuente oppure direzione regionale delle imposte",
      "Steuerkasse des Steuerpflichtigen oder die regionale Steuerdirektion",
      "Налоговая касса налогоплательщика или региональная налоговая дирекция"
    ),
    authority: "tax",
    keywords: ["IR", "استرجاع", "restitution", "ضريبة الدخل", "dgi"],
  },
  {
    id: "dgi-ir-revenu-global-annuel",
    cat: "dgi",
    title: T7(
      "التصريح السنوي بالدخل الإجمالي",
      "Déclaration annuelle du revenu global",
      "Annual declaration of total income",
      "Declaración anual de la renta global",
      "Dichiarazione annuale del reddito complessivo",
      "Jährliche Erklärung des Gesamteinkommens",
      "Ежегодная декларация совокупного дохода"
    ),
    desc: D7(
      "تصريح سنوي يدمج مختلف المداخيل الخاضعة للضريبة على الدخل بالنسبة للأشخاص الذاتيين المتوفرة لديهم مداخيل متعددة.",
      "Déclaration annuelle regroupant les différents revenus imposables à l'IR des personnes physiques disposant de plusieurs sources.",
      "Annual declaration combining the various IR-taxable incomes of individuals with several income sources.",
      "Declaración anual que agrupa los distintos ingresos imponibles de personas físicas con varias fuentes.",
      "Dichiarazione annuale che raggruppa i diversi redditi imponibili delle persone fisiche con più fonti di reddito.",
      "Jährliche Erklärung, die verschiedene steuerpflichtige Einkünfte von Personen mit mehreren Einkommensquellen zusammenfasst.",
      "Ежегодная декларация, объединяющая различные облагаемые доходы физических лиц с несколькими источниками дохода."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع لها المعني بالأمر أو منصة التصريح الإلكتروني",
      "Section ou recette des impôts compétente, ou télédéclaration via la plateforme SIMPL",
      "The competent tax office or recette des impôts, or e-filing via the SIMPL platform",
      "Oficina o recaudación de impuestos competente, o presentación telemática vía SIMPL",
      "Ufficio o riscossione delle imposte competente, oppure teledichiarazione tramite SIMPL",
      "Zuständiges Steueramt oder Steuerkasse bzw. elektronische Erklärung über SIMPL",
      "Компетентный налоговый орган или касса, либо электронная подача через SIMPL"
    ),
    authority: "tax",
    keywords: ["IR", "revenu global", "الدخل الإجمالي", "تصريح سنوي", "dgi"],
  },
  {
    id: "dgi-ir-remunerations-tiers",
    cat: "dgi",
    title: T7(
      "التصريح بالأداءات الممنوحة للغير",
      "Déclaration des rémunérations versées à des tiers",
      "Declaration of payments made to third parties",
      "Declaración de remuneraciones pagadas a terceros",
      "Dichiarazione dei compensi corrisposti a terzi",
      "Erklärung der an Dritte gezahlten Vergütungen",
      "Декларация о выплатах третьим лицам"
    ),
    desc: D7(
      "تصريح سنوي يضمن الأداءات والعمولات والأجور المدفوعة لفائدة الغير مع الاقتطاعات الجبائية المطابقة لها.",
      "Déclaration annuelle reprenant honoraires, commissions et rémunérations versés à des tiers avec les retenues correspondantes.",
      "Annual declaration listing fees, commissions and payments made to third parties together with the related withholdings.",
      "Declaración anual que recoge honorarios, comisiones y remuneraciones pagadas a terceros con las retenciones correspondientes.",
      "Dichiarazione annuale che riporta compensi, provvigioni e remunerazioni corrisposte a terzi con le relative ritenute.",
      "Jährliche Erklärung über Honorare, Provisionen und an Dritte gezahlte Vergütungen samt einbehaltener Steuern.",
      "Ежегодная декларация о гонорарах, комиссиях и выплатах третьим лицам с соответствующими удержаниями."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع لها المصرح أو منصة التصريح الإلكتروني SIMPL",
      "Section ou recette des impôts du déclarant, ou télédéclaration sur la plateforme SIMPL",
      "The declarant's tax office or recette des impôts, or e-filing on the SIMPL platform",
      "Oficina o recaudación de impuestos del declarante, o declaración telemática en SIMPL",
      "Ufficio o riscossione delle imposte del dichiarante, oppure teledichiarazione su SIMPL",
      "Steueramt oder Steuerkasse des Erklärenden bzw. elektronische Erklärung über die SIMPL-Plattform",
      "Налоговый орган или касса декларанта, либо электронная подача на платформе SIMPL"
    ),
    authority: "tax",
    keywords: ["IR", "rémunérations", "أداءات الغير", "عمولات", "dgi"],
  },

  // ─── Exonération de la résidence principale (IR) ───
  {
    id: "dgi-residence-principale-exoneration",
    cat: "dgi",
    title: T7(
      "طلب الإعفاء من الضريبة على الأرباح العقارية عن التنازل عن المسكن الرئيسي",
      "Demande d'exonération du profit immobilier sur la cession de la résidence principale",
      "Application for exemption of property gains on the sale of a main residence",
      "Solicitud de exención de la ganancia inmobiliaria por venta de la vivienda habitual",
      "Domanda di esenzione della plusvalenza immobiliare sulla cessione dell'abitazione principale",
      "Antrag auf Befreiung des Grundstücksprofits bei Verkauf der Hauptwohnung",
      "Заявление об освобождении налога на прибыль от продажи основного жилья"
    ),
    desc: D7(
      "طلب يقدمه البائع للاستفادة من إعفاء الربح العقاري الناتج عن التنازل عن مسكنه الرئيسي.",
      "Demande du vendeur visant l'exonération du profit immobilier dégagé lors de la cession de son habitation principale.",
      "Seller's application seeking exemption of the property gain realised on disposing of his main home.",
      "Solicitud del vendedor para exonerar la ganancia inmobiliaria obtenida al enajenar su vivienda habitual.",
      "Domanda del venditore per l'esenzione del profitto immobiliare realizzato con la cessione dell'abitazione principale.",
      "Antrag des Verkäufers auf Befreiung des bei der Veräußerung der Hauptwohnung erzielten Grundstücksprofits.",
      "Заявление продавца об освобождении прибыли от недвижимости, полученной при продаже основного жилья."
    ),
    where: W7(
      "مصلحة التسجيل المكلفة بتوثيق عقد البيع أو قباضة الضرائب التابع لها البائع",
      "Service de l'enregistrement instruisant l'acte de vente ou recette des impôts du vendeur",
      "The registration office handling the sale deed, or the seller's recette des impôts",
      "Oficina de registro que tramita la escritura de venta o recaudación de impuestos del vendedor",
      "Ufficio del registro che istruisce l'atto di vendita oppure riscossione delle imposte del venditore",
      "Mit der Beurkundung befasstes Registrierungsamt oder Steuerkasse des Verkäufers",
      "Регистрационный отдел, оформляющий договор продажи, либо налоговая касса продавца"
    ),
    authority: "tax",
    keywords: ["IR", "إعفاء", "السكن الرئيسي", "résidence principale", "profit immobilier", "dgi"],
  },
  {
    id: "dgi-residence-principale-attestation-cession",
    cat: "dgi",
    title: T7(
      "شهادة التنازل عن المسكن الرئيسي",
      "Attestation de cession du logement principal",
      "Certificate of sale of a main residence",
      "Certificado de enajenación de la vivienda habitual",
      "Attestato di cessione dell'abitazione principale",
      "Bescheinigung über die Veräußerung der Hauptwohnung",
      "Справка о продаже основного жилья"
    ),
    desc: D7(
      "شهادة تثبت تنازل المعني بالأمر عن مسكنه الرئيسي، تقدم لدى التوثيق للاستفادة من الإعفاء.",
      "Attestation constatant la cession de l'habitation principale, produite à l'appui de la demande d'exonération.",
      "Certificate evidencing the disposal of a main residence, produced in support of the exemption request.",
      "Certificado que acredita la enajenación de la vivienda habitual, aportado con la solicitud de exención.",
      "Attestato che documenta la cessione dell'abitazione principale, allegato alla domanda di esenzione.",
      "Bescheinigung über die Veräußerung der Hauptwohnung, beizubringen zum Befreiungsantrag.",
      "Справка, подтверждающая отчуждение основного жилья, прилагаемая к заявлению об освобождении."
    ),
    where: W7(
      "تسلم لدى قباضة الضرائب أو مصلحة التسجيل التابع منها العقار موضوع التنازل",
      "Délivrée par la recette des impôts ou le service de l'enregistrement du lieu de situation du bien",
      "Issued by the recette des impôts or the registration office for the property's location",
      "Emitida por la recaudación de impuestos o la oficina de registro del lugar del inmueble",
      "Rilasciata dalla riscossione delle imposte o dall'ufficio del registro del luogo dell'immobile",
      "Ausgestellt von der Steuerkasse oder dem Registrierungsamt am Belegenheitsort",
      "Выдаётся налоговой кассой или регистрационным отделом по месту нахождения имущества"
    ),
    authority: "tax",
    keywords: ["السكن الرئيسي", "attestation", "شهادة", "résidence principale", "dgi"],
  },
  {
    id: "dgi-residence-principale-reinvestissement",
    cat: "dgi",
    title: T7(
      "الالتزام بإعادة استثمار ثمن التنازل عن العقار في اقتناء سكن",
      "Engagement de réinvestissement du prix de cession d'un bien immobilier",
      "Commitment to reinvest the sale proceeds of a property",
      "Compromiso de reinversión del precio de enajenación del inmueble",
      "Impegno di reinvestimento del prezzo di cessione dell'immobile",
      "Verpflichtung zur Reinvestition des Veräußerungserlöses",
      "Обязательство реинвестировать выручку от продажи недвижимости"
    ),
    desc: D7(
      "وثيقة يتعهد فيها البائع بإعادة توظيف ثمن التنازل في اقتناء سكن جديد للحفاظ على الإعفاء الجبائي.",
      "Document par lequel le vendeur s'engage à réemployer le prix de cession dans l'acquisition d'un logement afin de préserver l'exonération.",
      "Document whereby the seller undertakes to reuse the sale proceeds to buy a home and keep the tax exemption.",
      "Documento por el que el vendedor se compromete a reinvertir el precio en la adquisición de una vivienda para conservar la exención.",
      "Documento con cui il venditore si impegna a reinvestire il prezzo nell'acquisto di un'abitazione per mantenere l'esenzione.",
      "Erklärung, mit der sich der Verkäufer verpflichtet, den Erlös in den Erwerb einer Wohnung umzusetzen und so die Befreiung zu erhalten.",
      "Документ, по которому продавец обязуется направить выручку на покупку жилья, сохраняя право на освобождение."
    ),
    where: W7(
      "مصلحة التسجيل المكلفة بتوثيق العقد أو قباضة الضرائب التابع لها المعني بالأمر",
      "Service de l'enregistrement compétent pour l'acte ou recette des impôts du déclarant",
      "The registration office for the deed, or the declarant's recette des impôts",
      "Oficina de registro competente para la escritura o recaudación de impuestos del declarante",
      "Ufficio del registro competente per l'atto oppure riscossione delle imposte del dichiarante",
      "Zuständiges Registrierungsamt für die Urkunde oder Steuerkasse des Erklärenden",
      "Регистрационный отдел по договору либо налоговая касса заявителя"
    ),
    authority: "tax",
    keywords: ["engagement", "إعادة استثمار", "réinvestissement", "سكن", "dgi"],
  },
  {
    id: "dgi-residence-principale-affectation",
    cat: "dgi",
    title: T7(
      "التزام بتخصيص السكن للاستعمال الرئيسي",
      "Engagement d'affectation du logement à l'habitation principale",
      "Commitment to use a dwelling as a main residence",
      "Compromiso de destinar la vivienda a residencia habitual",
      "Impegno di adibire l'alloggio ad abitazione principale",
      "Verpflichtung, die Wohnung als Hauptwohnung zu nutzen",
      "Обязательство использовать жильё в качестве основного"
    ),
    desc: D7(
      "وثيقة يلتزم فيها المالك بسكنى العقار بصفة رئيسية قصد الاستفادة من المعاملة الجبائية المخففة.",
      "Document par lequel le propriétaire s'engage à occuper personnellement le bien à titre d'habitation principale pour bénéficier du régime fiscal de faveur.",
      "Document whereby the owner undertakes to occupy the property personally as a main home to qualify for the favourable tax treatment.",
      "Documento por el que el propietario se compromete a ocupar el inmueble como residencia habitual para acogerse al régimen fiscal favorable.",
      "Documento con cui il proprietario si impegna ad occupare l'immobile come abitazione principale per fruire del regime fiscale di favore.",
      "Erklärung, mit der sich der Eigentümer verpflichtet, die Immobilie selbst als Hauptwohnung zu nutzen, um die Steuervergünstigung zu erhalten.",
      "Документ, по которому собственник обязуется проживать в объекте как в основном жилье для получения налоговой льготы."
    ),
    where: W7(
      "تودع مع الملف لدى قباضة الضرائب أو مصلحة التسجيل عند إبرام التصرف",
      "À joindre au dossier auprès de la recette des impôts ou du service de l'enregistrement lors de l'acte",
      "To be attached to the file at the recette des impôts or registration office when signing the deed",
      "Se adjunta al expediente en la recaudación de impuestos o en la oficina de registro al otorgar la escritura",
      "Da allegare al fascicolo presso la riscossione delle imposte o l'ufficio del registro alla stipula dell'atto",
      "Dem Dossier bei der Steuerkasse oder dem Registrierungsamt bei Beurkundung beizufügen",
      "Прилагается к делу в налоговой кассе или регистрационном отделе при оформлении сделки"
    ),
    authority: "tax",
    keywords: ["التزام", "habitation principale", "سكن رئيسي", "engagement", "dgi"],
  },

  // ─── IS et impôts assimilés ───
  {
    id: "dgi-is-declaration-annuelle",
    cat: "dgi",
    title: T7(
      "التصريح السنوي بالضريبة على الشركات",
      "Déclaration annuelle de l'impôt sur les sociétés",
      "Annual corporate tax declaration",
      "Declaración anual del impuesto sobre sociedades",
      "Dichiarazione annuale dell'imposta sulle società",
      "Jährliche Körperschaftsteuererklärung",
      "Ежегодная декларация налога на прибыль компаний"
    ),
    desc: D7(
      "استمارة سنوية تعلن فيها الشركة نتائجها المالية والضريبة على الشركات المستحقة عن السنة المحاسبية الماضية.",
      "Formulaire annuel dans lequel la société déclare ses résultats financiers et l'impôt sur les sociétés dû au titre de l'exercice.",
      "Annual form in which a company declares its financial results and the corporate tax due for the accounting year.",
      "Formulario anual en el que la sociedad declara sus resultados financieros y el impuesto sobre sociedades del ejercicio.",
      "Modulo annuale con cui la società dichiara i risultati finanziari e l'imposta sulle società dovuta per l'esercizio.",
      "Jährliches Formular, in dem die Gesellschaft ihre Finanzergebnisse und die geschuldete Körperschaftsteuer erklärt.",
      "Ежегодная форма, в которой компания декларирует финансовые результаты и налог на прибыль за отчётный год."
    ),
    where: W7(
      "قباضة الضرائب التابع منها مقر الشركة أو منصة التصريح الإلكتروني SIMPL",
      "Recette des impôts du siège social ou portail de télédéclaration SIMPL",
      "The recette des impôts for the head office, or the SIMPL e-filing portal",
      "Recaudación de impuestos de la sede social o portal de declaración telemática SIMPL",
      "Riscossione delle imposte della sede sociale oppure portale di teledichiarazione SIMPL",
      "Steuerkasse des Gesellschaftssitzes oder das SIMPL-Portal",
      "Налоговая касса по месту регистрации офиса или портал SIMPL"
    ),
    authority: "tax",
    keywords: ["IS", "الضريبة على الشركات", "impôt sur les sociétés", "تصريح", "dgi", "SIMPL"],
    popular: true,
  },
  {
    id: "dgi-is-acomptes-provisionnels",
    cat: "dgi",
    title: T7(
      "أداء الدفعات على الحساب من الضريبة على الشركات",
      "Versement des acomptes provisionnels de l'IS",
      "Payment of provisional corporate tax instalments",
      "Pago de los pagos fraccionados del impuesto sobre sociedades",
      "Versamento degli acconti d'imposta sulle società",
      "Zahlung der Körperschaftsteuer-Vorauszahlungen",
      "Уплата авансовых платежей по налогу на прибыль"
    ),
    desc: D7(
      "وثيقة تؤدي بواسطتها الشركة الدفعات على الحساب من الضريبة على الشركات خلال السنة الجارية.",
      "Document permettant à la société de verser les acomptes provisionnels de l'IS échelonnés sur l'exercice en cours.",
      "Form enabling a company to pay the IS provisional instalments spread over the current financial year.",
      "Documento que permite a la sociedad abonar los pagos fraccionados del impuesto distribuidos en el ejercicio.",
      "Documento che consente alla società di versare gli acconti dell'imposta ripartiti durante l'esercizio in corso.",
      "Formular, mit dem die Gesellschaft die im laufenden Geschäftsjahr gestaffelten Vorauszahlungen entrichtet.",
      "Форма, по которой компания уплачивает авансовые платежи налога в течение текущего финансового года."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الشركة أو التسديد الإلكتروني عبر منصة SIMPL",
      "Recette des impôts de la société ou télépaiement via la plateforme SIMPL",
      "The company's recette des impôts, or e-payment via the SIMPL platform",
      "Recaudación de impuestos de la sociedad o telepago mediante la plataforma SIMPL",
      "Riscossione delle imposte della società oppure telepagamento tramite SIMPL",
      "Steuerkasse der Gesellschaft oder elektronische Zahlung über die SIMPL-Plattform",
      "Налоговая касса компании или онлайн-оплата через платформу SIMPL"
    ),
    authority: "tax",
    keywords: ["IS", "acomptes", "دفعات على الحساب", "dgi", "SIMPL"],
  },
  {
    id: "dgi-is-restitution",
    cat: "dgi",
    title: T7(
      "طلب استرجاع الزائد من الضريبة على الشركات",
      "Demande de restitution de l'excédent d'IS",
      "Request for refund of excess corporate tax",
      "Solicitud de devolución del exceso del impuesto sobre sociedades",
      "Domanda di rimborso dell'eccedenza d'imposta sulle società",
      "Antrag auf Erstattung des Körperschaftsteuer-Überschusses",
      "Заявление о возврате излишка налога на прибыль"
    ),
    desc: D7(
      "طلب يقدمه الملزم لاسترجاع المبالغ الزائدة عن الضريبة على الشركات المستحقة بعد تصفية السنة المالية.",
      "Demande du redevable en restitution des sommes excédant l'IS dû après liquidation de l'exercice.",
      "Taxpayer's request for refund of amounts exceeding the corporate tax due after the year-end settlement.",
      "Solicitud del contribuyente de devolución de los importes que exceden el impuesto debido tras la liquidación del ejercicio.",
      "Domanda del contribuente per il rimborso delle somme eccedenti l'imposta dovuta a seguito della liquidazione dell'esercizio.",
      "Antrag des Steuerpflichtigen auf Erstattung der Beträge, die nach der Jahresabrechnung die geschuldete Steuer übersteigen.",
      "Заявление налогоплательщика о возврате сумм, превышающих причитающийся налог по итогам года."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الملزم أو المديرية الجهوية للضرائب",
      "Recette des impôts du redevable ou direction régionale des impôts",
      "The taxpayer's recette des impôts or the regional tax directorate",
      "Recaudación de impuestos del contribuyente o dirección regional de impuestos",
      "Riscossione delle imposte del contribuente oppure direzione regionale delle imposte",
      "Steuerkasse des Steuerpflichtigen oder die regionale Steuerdirektion",
      "Налоговая касса налогоплательщика или региональная налоговая дирекция"
    ),
    authority: "tax",
    keywords: ["IS", "استرجاع", "restitution", "ضريبة الشركات", "dgi"],
  },
  {
    id: "dgi-is-cotisation-minimale",
    cat: "dgi",
    title: T7(
      "طلب استرجاع الحد الأدنى من الأداء",
      "Demande de restitution de la cotisation minimale",
      "Request for refund of the minimum contribution",
      "Solicitud de devolución de la cotización mínima",
      "Domanda di rimborso del contributo minimo",
      "Antrag auf Erstattung des Mindestbeitrags",
      "Заявление о возврате минимального налогового взноса"
    ),
    desc: D7(
      "طلب يسترجع بموجبه الملزم الحد الأدنى من الأداء المؤدى زيادة عن الضريبة على الشركات المستحقة.",
      "Demande permettant au redevable de récupérer la cotisation minimale versée en sus de l'IS réellement dû.",
      "Application through which a taxpayer recovers the minimum contribution paid in excess of the corporate tax actually due.",
      "Solicitud que permite al contribuyente recuperar la cotización mínima pagada en exceso del impuesto realmente debido.",
      "Domanda con cui il contribuente recupera il contributo minimo versato in aggiunta all'imposta effettivamente dovuta.",
      "Antrag, mit dem der Steuerpflichtige den zusätzlich zur tatsächlich geschuldeten Steuer entrichteten Mindestbeitrag zurückerhält.",
      "Заявление, по которому налогоплательщик возвращает минимальный взнос, уплаченный сверх причитающегося налога."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الملزم أو المديرية الجهوية للضرائب",
      "Recette des impôts du redevable ou direction régionale des impôts",
      "The taxpayer's recette des impôts or the regional tax directorate",
      "Recaudación de impuestos del contribuyente o dirección regional de impuestos",
      "Riscossione delle imposte del contribuente oppure direzione regionale delle imposte",
      "Steuerkasse des Steuerpflichtigen oder die regionale Steuerdirektion",
      "Налоговая касса налогоплательщика или региональная налоговая дирекция"
    ),
    authority: "tax",
    keywords: ["IS", "cotisation minimale", "الحد الأدنى", "استرجاع", "dgi"],
  },
  {
    id: "dgi-is-echelonnement",
    cat: "dgi",
    title: T7(
      "طلب تقسيط أداء الضريبة على الشركات",
      "Demande d'échelonnement du paiement de l'IS",
      "Request to spread corporate tax payments",
      "Solicitud de fraccionamiento del pago del impuesto sobre sociedades",
      "Domanda di rateizzazione del pagamento dell'imposta sulle società",
      "Antrag auf Ratenzahlung der Körperschaftsteuer",
      "Заявление о рассрочке уплаты налога на прибыль"
    ),
    desc: D7(
      "طلب يلتمس فيه الملزم تقسيط ديون الضريبة على الشركات على أقساط دورية وفق قدرته المالية.",
      "Demande sollicitant l'étalement de la dette d'IS en échéances périodiques selon la capacité financière du redevable.",
      "Application seeking to spread the IS debt over periodic instalments according to the taxpayer's financial capacity.",
      "Solicitud de aplazamiento de la deuda del impuesto en vencimientos periódicos según la capacidad financiera del contribuyente.",
      "Domanda di dilazione del debito d'imposta in rate periodiche secondo la capacità finanziaria del contribuente.",
      "Antrag auf Stundung der Körperschaftsteuerschuld in regelmäßigen Raten nach der Zahlungsfähigkeit des Pflichtigen.",
      "Заявление о рассрочке налоговой задолженности на периодические платежи с учётом финансовых возможностей."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب أو قباضة الضرائب مع مقترح جدولة الأداء",
      "À déposer à la direction régionale des impôts ou à la recette, accompagnée d'un échéancier proposé",
      "To be filed with the regional tax directorate or the recette, with a proposed payment schedule",
      "Se presenta en la dirección regional de impuestos o en la recaudación, con un calendario de pagos propuesto",
      "Da presentare alla direzione regionale delle imposte o alla riscossione, con un piano di rate proposto",
      "Bei der regionalen Steuerdirektion oder der Steuerkasse einzureichen, mit vorgeschlagenem Zahlungsplan",
      "Подаётся в региональную налоговую дирекцию или кассу вместе с предложенным графиком платежей"
    ),
    authority: "tax",
    keywords: ["IS", "échelonnement", "تقسيط", "dgi", "ضريبة الشركات"],
  },

  // ─── Taxe professionnelle ───
  {
    id: "dgi-taxe-professionnelle-declaration",
    cat: "dgi",
    title: T7(
      "التصريح بالضريبة المهنية",
      "Déclaration de la taxe professionnelle",
      "Declaration of the professional tax (patente)",
      "Declaración de la tasa profesional",
      "Dichiarazione della tassa professionale",
      "Erklärung der Gewerbesteuer (Patente)",
      "Декларация по профессиональному налогу (патент)"
    ),
    desc: D7(
      "استمارة يصرح فيها الملزم بالعناصر المكونة لوعاء الضريبة المهنية المتعلقة بمقرات نشاطه.",
      "Formulaire dans lequel le redevable déclare les éléments constitutifs de la base de la taxe professionnelle de ses établissements.",
      "Form in which the taxpayer declares the elements making up the professional tax base of his business premises.",
      "Formulario en el que el contribuyente declara los elementos que componen la base de la tasa profesional de sus establecimientos.",
      "Modulo con cui il contribuente dichiara gli elementi della base imponibile della tassa professionale delle sue sedi.",
      "Formular, in dem der Steuerpflichtige die Bemessungsgrundlage der Gewerbesteuer seiner Betriebsstätten erklärt.",
      "Форма, в которой налогоплательщик декларирует элементы налоговой базы профессионального налога по своим помещениям."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها مقر النشاط",
      "Section ou recette des impôts du lieu d'implantation de l'établissement",
      "The tax office or recette des impôts for the business location",
      "Oficina o recaudación de impuestos del lugar del establecimiento",
      "Ufficio o riscossione delle imposte del luogo di insediamento dell'attività",
      "Steueramt oder Steuerkasse am Standort des Betriebs",
      "Налоговый орган или касса по месту ведения деятельности"
    ),
    authority: "tax",
    keywords: ["taxe professionnelle", "patente", "الضريبة المهنية", "dgi"],
  },
  {
    id: "dgi-taxe-professionnelle-exoneration-creation",
    cat: "dgi",
    title: T7(
      "طلب الإعفاء من الضريبة المهنية عند الإنشاء",
      "Demande d'exonération de la taxe professionnelle à la création",
      "Application for professional tax exemption at creation",
      "Solicitud de exención de la tasa profesional en la creación",
      "Domanda di esenzione dalla tassa professionale alla costituzione",
      "Antrag auf Gewerbesteuer-Befreiung bei Gründung",
      "Заявление об освобождении от профессионального налога при создании"
    ),
    desc: D7(
      "طلب يقدمه المستثمر الجديد للاستفادة من الإعفاء المؤقت من الضريبة المهنية عن مؤسسته الحديثة الإنشاء.",
      "Demande du nouvel investisseur visant l'exonération temporaire de la taxe professionnelle pour son entreprise nouvellement créée.",
      "Application by a new investor for temporary exemption from the professional tax for a newly created enterprise.",
      "Solicitud del nuevo inversor para la exención temporal de la tasa profesional de su empresa de nueva creación.",
      "Domanda del nuovo investitore per l'esenzione temporanea dalla tassa professionale della nuova impresa.",
      "Antrag eines neuen Investors auf zeitliche Gewerbesteuer-Befreiung für das neu gegründete Unternehmen.",
      "Заявление нового инвестора о временном освобождении от профессионального налога для нового предприятия."
    ),
    where: W7(
      "مصلحة الضرائب التابع منها مقر المؤسسة مع الوثائق المثبتة للإنشاء",
      "Section des impôts du siège de l'entreprise, avec les justificatifs de création",
      "The tax office for the company's head office, together with proof of creation",
      "Oficina de impuestos de la sede de la empresa, con los justificantes de creación",
      "Ufficio imposte della sede dell'impresa, con i documenti di costituzione",
      "Steueramt des Firmensitzes, zusammen mit den Gründungsnachweisen",
      "Налоговый орган по месту регистрации фирмы с документами о создании"
    ),
    authority: "tax",
    keywords: ["taxe professionnelle", "إعفاء", "exonération", "الضريبة المهنية", "dgi"],
  },
  {
    id: "dgi-taxe-professionnelle-extension",
    cat: "dgi",
    title: T7(
      "التصريح بتوسيعات المؤسسة لأغراض الضريبة المهنية",
      "Déclaration d'extension pour la taxe professionnelle",
      "Extension declaration for the professional tax",
      "Declaración de ampliación para la tasa profesional",
      "Dichiarazione di ampliamento per la tassa professionale",
      "Erweiterungserklärung für die Gewerbesteuer",
      "Декларация о расширении для профессионального налога"
    ),
    desc: D7(
      "تصريح يخبر بموجبه الملزم عن التوسيعات والتحويلات الطارئة على مقرات نشاطه خلال السنة.",
      "Déclaration par laquelle le redevable informe l'administration des extensions et transformations affectant ses locaux en cours d'année.",
      "Declaration informing the administration of extensions and changes affecting the taxpayer's premises during the year.",
      "Declaración con la que el contribuyente informa a la administración de las ampliaciones y transformaciones de sus locales.",
      "Dichiarazione con cui il contribuente informa l'amministrazione degli ampliamenti e delle trasformazioni dei locali durante l'anno.",
      "Erklärung, mit der der Steuerpflichtige die Verwaltung über Erweiterungen und Änderungen seiner Räumlichkeiten im Jahresverlauf informiert.",
      "Декларация, информирующая ведомство о расширениях и изменениях помещений налогоплательщика в течение года."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها مقر المؤسسة",
      "Section ou recette des impôts dont relève l'établissement",
      "The tax office or recette des impôts covering the business premises",
      "Oficina o recaudación de impuestos de la que depende el establecimiento",
      "Ufficio o riscossione delle imposte da cui dipende l'esercizio",
      "Steueramt oder Steuerkasse, in deren Zuständigkeit der Betrieb fällt",
      "Налоговый орган или касса, к которым относится предприятие"
    ),
    authority: "tax",
    keywords: ["taxe professionnelle", "توسيع", "extension", "patente", "dgi"],
  },
  {
    id: "dgi-taxe-professionnelle-transfert",
    cat: "dgi",
    title: T7(
      "التصريح بتحويل مقر النشاط (الضريبة المهنية)",
      "Déclaration de transfert de siège pour la taxe professionnelle",
      "Declaration of premises transfer for the professional tax",
      "Declaración de traslado de domicilio para la tasa profesional",
      "Dichiarazione di trasferimento della sede per la tassa professionale",
      "Anzeige der Standortverlagerung für die Gewerbesteuer",
      "Декларация о переезде помещения для профессионального налога"
    ),
    desc: D7(
      "تصريح يبلغ بموجبه الملزم عن تغيير مقر ممارسة النشاط داخل نفس الجماعة أو خارجها.",
      "Déclaration portant notification du changement de lieu d'exercice, dans la même commune ou hors de celle-ci.",
      "Declaration notifying a change of business location, within the same commune or outside it.",
      "Declaración que notifica el cambio de lugar de ejercicio, dentro del mismo municipio o fuera de él.",
      "Dichiarazione che notifica il cambio di luogo di esercizio, nel medesimo comune o al di fuori.",
      "Anzeige über die Änderung des Ausübungsortes, innerhalb derselben Gemeinde oder außerhalb.",
      "Декларация об изменении места ведения деятельности — в том же муниципалитете или за его пределами."
    ),
    where: W7(
      "مصلحة الضرائب التابع منها المقر القديم والمصلحة التابع لها المقر الجديد",
      "Section des impôts de l'ancienne adresse et celle de la nouvelle adresse",
      "The tax office for the old address and the one for the new address",
      "Oficina de impuestos de la dirección antigua y de la nueva dirección",
      "Ufficio imposte del vecchio indirizzo e quello del nuovo indirizzo",
      "Steueramt der alten und der neuen Anschrift",
      "Налоговые органы по старому и новому адресу"
    ),
    authority: "tax",
    keywords: ["taxe professionnelle", "transfert", "تحويل", "الضريبة المهنية", "dgi"],
  },
  {
    id: "dgi-taxe-professionnelle-radiation",
    cat: "dgi",
    title: T7(
      "طلب شطب المؤسسة من جدول الضريبة المهنية",
      "Demande de radiation du rôle de la taxe professionnelle",
      "Application for removal from the professional tax roll",
      "Solicitud de baja del padrón de la tasa profesional",
      "Domanda di cancellazione dal ruolo della tassa professionale",
      "Antrag auf Löschung aus dem Gewerbesteuer-Register",
      "Заявление об исключении из реестра профессионального налога"
    ),
    desc: D7(
      "طلب لشطب المؤسسة من الوعاء عند التوقف النهائي عن ممارسة النشاط الخاضع للضريبة المهنية.",
      "Demande de radiation de l'établissement à la cessation définitive de l'activité soumise à la taxe professionnelle.",
      "Application to remove the business upon definitive cessation of the activity subject to the professional tax.",
      "Solicitud de baja del establecimiento al cese definitivo de la actividad sujeta a la tasa profesional.",
      "Domanda di cancellazione dell'esercizio alla cessazione definitiva dell'attività soggetta alla tassa.",
      "Antrag auf Löschung des Betriebs bei endgültiger Einstellung der der Gewerbesteuer unterliegenden Tätigkeit.",
      "Заявление об исключении предприятия при окончательном прекращении деятельности, облагаемой профессиональным налогом."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها المؤسسة مع ما يثبت التوقف",
      "Section ou recette des impôts de l'établissement, avec justificatif de la cessation",
      "The tax office or recette des impôts for the business, with proof of cessation",
      "Oficina o recaudación de impuestos del establecimiento, con justificante del cese",
      "Ufficio o riscossione delle imposte dell'esercizio, con prova della cessazione",
      "Steueramt oder Steuerkasse des Betriebs, mit Nachweis der Aufgabe",
      "Налоговый орган или касса предприятия с подтверждением прекращения деятельности"
    ),
    authority: "tax",
    keywords: ["taxe professionnelle", "radiation", "شطب", "الضريبة المهنية", "dgi"],
  },

  // ─── Taxe sur les terrains urbains non bâtis (TEB) ───
  {
    id: "dgi-teb-exoneration-quinquennale",
    cat: "dgi",
    title: T7(
      "طلب الإعفاء الخماسي من الضريبة على الأراضي الحضرية غير المبنية",
      "Demande d'exonération quinquennale de la taxe sur les terrains urbains non bâtis",
      "Application for the five-year exemption from the tax on unbuilt urban land",
      "Solicitud de exención quinquenal del impuesto sobre solares urbanos no construidos",
      "Domanda di esenzione quinquennale dall'imposta sui terreni urbani edificabili",
      "Antrag auf fünfjährige Befreiung von der Steuer auf unbebaute städtische Grundstücke",
      "Заявление о пятилетнем освобождении от налога на незастроенные городские земли"
    ),
    desc: D7(
      "طلب يقدمه مالك الأرض للاستفادة من الإعفاء الخماسي من الضريبة على الأراضي الحضرية غير المبنية.",
      "Demande du propriétaire aux fins de bénéficier de l'exonération de cinq ans de la taxe sur les terrains urbains non bâtis.",
      "Owner's application to benefit from the five-year exemption from the tax on unbuilt urban land.",
      "Solicitud del propietario para beneficiarse de la exención de cinco años del impuesto sobre solares urbanos.",
      "Domanda del proprietario per fruire dell'esenzione quinquennale dall'imposta sui terreni urbani edificabili.",
      "Antrag des Eigentümers auf die fünfjährige Befreiung von der Steuer auf unbebaute städtische Grundstücke.",
      "Заявление собственника о предоставлении пятилетнего освобождения от налога на незастроенные городские участки."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها موقع الأرض مع رسمها العقاري",
      "Section ou recette des impôts de la situation du terrain, avec le titre foncier",
      "The tax office or recette des impôts for the land's location, with the land title",
      "Oficina o recaudación de impuestos de la ubicación del terreno, con el título de propiedad",
      "Ufficio o riscossione delle imposte del luogo del terreno, con il titolo di proprietà",
      "Steueramt oder Steuerkasse am Belegenheitsort, zusammen mit dem Grundbuchauszug",
      "Налоговый орган или касса по месту нахождения участка с правоустанавливающим документом"
    ),
    authority: "tax",
    keywords: ["TEB", "terrains urbains non bâtis", "أراضي حضرية", "إعفاء", "dgi"],
  },
  {
    id: "dgi-teb-sortie-anticipee",
    cat: "dgi",
    title: T7(
      "طلب الخروج الاستباقي من نظام الإعفاء من الضريبة على الأراضي غير المبنية",
      "Demande de sortie anticipée du régime d'exonération de la TEB",
      "Application for early exit from the TEB exemption regime",
      "Solicitud de salida anticipada del régimen de exención de la TEB",
      "Domanda di uscita anticipata dal regime di esenzione dell'imposta sui terreni",
      "Antrag auf vorzeitiges Ausscheiden aus dem TEB-Befreiungsregime",
      "Заявление о досрочном выходе из режима освобождения по налогу на земли"
    ),
    desc: D7(
      "طلب يعلم بموجبه المالك عن ميلاد سبب ينهي الإعفاء الخماسي قبل انقضاء مدته القانونية.",
      "Demande par laquelle le propriétaire signale la survenance d'un fait mettant fin à l'exonération quinquennale avant son terme légal.",
      "Application by which the owner reports an event ending the five-year exemption before its legal term.",
      "Solicitud mediante la cual el propietario comunica un hecho que pone fin a la exención quinquenal antes de su término legal.",
      "Domanda con cui il proprietario segnala un fatto che pone fine all'esenzione quinquennale prima del termine legale.",
      "Antrag, mit dem der Eigentümer ein Ereignis anzeigt, das die fünfjährige Befreiung vor Ablauf der Frist beendet.",
      "Заявление, которым собственник сообщает о событии, прекращающем пятилетнее освобождение до истечения законного срока."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها موقع الأرض",
      "Section ou recette des impôts de la situation du terrain",
      "The tax office or recette des impôts for the land's location",
      "Oficina o recaudación de impuestos de la ubicación del terreno",
      "Ufficio o riscossione delle imposte del luogo del terreno",
      "Steueramt oder Steuerkasse am Belegenheitsort des Grundstücks",
      "Налоговый орган или касса по месту нахождения участка"
    ),
    authority: "tax",
    keywords: ["TEB", "خروج", "sortie anticipée", "أراضي", "dgi"],
  },
  {
    id: "dgi-teb-attestation-ibra",
    cat: "dgi",
    title: T7(
      "شهادة إبراء الذمة من الضريبة على الأراضي الحضرية غير المبنية",
      "Attestation de décharge de la taxe sur les terrains urbains non bâtis",
      "Certificate of discharge from the unbuilt urban land tax",
      "Certificado de liberación del impuesto sobre solares urbanos",
      "Attestato di liberazione dall'imposta sui terreni urbani edificabili",
      "Befreiungsbescheinigung für die Steuer auf unbebaute städtische Grundstücke",
      "Справка об отсутствии задолженности по налогу на незастроенные земли"
    ),
    desc: D7(
      "شهادة تثبت إبراء ذمة المالك من الضريبة على الأراضي الحضرية غير المبنية، تطلب عند بيع الأرض.",
      "Attestation constatant la libération du propriétaire de la taxe sur les terrains urbains non bâtis, demandée lors de la vente.",
      "Certificate confirming the owner is clear of the unbuilt urban land tax, requested when selling.",
      "Certificado que acredita que el propietario está al corriente del impuesto, solicitado al vender el terreno.",
      "Attestato che certifica la posizione regolare del proprietario rispetto all'imposta, richiesto in caso di vendita.",
      "Bescheinigung, die die Unbescholtenheit des Eigentümers hinsichtlich der Steuer belegt, beim Verkauf gefordert.",
      "Справка, подтверждающая отсутствие у собственника задолженности по налогу, запрашивается при продаже участка."
    ),
    where: W7(
      "قباضة الضرائب التابع منها موقع الأرض أو مصلحة التسجيل عند توثيق البيع",
      "Recette des impôts de la situation du terrain ou service de l'enregistrement de l'acte de vente",
      "The recette des impôts for the land's location, or the registration office for the sale deed",
      "Recaudación de impuestos de la ubicación del terreno u oficina de registro de la escritura",
      "Riscossione delle imposte del luogo del terreno oppure ufficio del registro dell'atto di vendita",
      "Steuerkasse am Belegenheitsort oder das Registrierungsamt für die Verkaufsurkunde",
      "Налоговая касса по месту нахождения участка либо регистрационный отдел по договору продажи"
    ),
    authority: "tax",
    keywords: ["TEB", "إبراء الذمة", "attestation", "أراضي حضرية", "dgi"],
  },
  {
    id: "dgi-teb-prorogation",
    cat: "dgi",
    title: T7(
      "طلب تمديد الإعفاء من الضريبة على الأراضي الحضرية غير المبنية",
      "Demande de prorogation de l'exonération de la TEB",
      "Application to extend the TEB exemption",
      "Solicitud de prórroga de la exención de la TEB",
      "Domanda di proroga dell'esenzione dall'imposta sui terreni",
      "Antrag auf Verlängerung der TEB-Befreiung",
      "Заявление о продлении освобождения по налогу на земли"
    ),
    desc: D7(
      "طلب يلتمس فيه المالك تمديد مدة الإعفاء الخماسي عند توفر الشروط القانونية المقررة.",
      "Demande sollicitant la prorogation de la période d'exonération quinquennale lorsque les conditions légales sont remplies.",
      "Application seeking an extension of the five-year exemption period when the statutory conditions are met.",
      "Solicitud de prórroga del período de exención quinquenal cuando se cumplen las condiciones legales.",
      "Domanda di proroga del periodo di esenzione quinquennale qualora siano soddisfatte le condizioni di legge.",
      "Antrag auf Verlängerung der fünfjährigen Befreiungsfrist, sofern die gesetzlichen Voraussetzungen erfüllt sind.",
      "Заявление о продлении пятилетнего срока освобождения при соблюдении установленных законом условий."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها موقع الأرض مع مبررات التمديد",
      "Section ou recette des impôts de la situation du terrain, avec les justificatifs de la prorogation",
      "The tax office or recette des impôts for the land's location, with supporting reasons for the extension",
      "Oficina o recaudación de impuestos de la ubicación del terreno, con la justificación de la prórroga",
      "Ufficio o riscossione delle imposte del luogo del terreno, con la documentazione della proroga",
      "Steueramt oder Steuerkasse am Belegenheitsort, mit Nachweisen für die Verlängerung",
      "Налоговый орган или касса по месту нахождения участка с обоснованием продления"
    ),
    authority: "tax",
    keywords: ["TEB", "تمديد", "prorogation", "إعفاء", "dgi"],
  },

  // ─── Droits d'enregistrement ───
  {
    id: "dgi-enregistrement-reduction-droits",
    cat: "dgi",
    title: T7(
      "طلب تخفيض رسوم التسجيل",
      "Demande de réduction des droits d'enregistrement",
      "Application for a reduction of registration duties",
      "Solicitud de reducción de los derechos de registro",
      "Domanda di riduzione dei diritti di registrazione",
      "Antrag auf Ermäßigung der Registrierungsgebühren",
      "Заявление о снижении регистрационных пошлин"
    ),
    desc: D7(
      "طلب يلتمس تطبيق السعر المخفض لرسوم التسجيل على تصرف معين مستوف لشروط التخفيض القانونية.",
      "Demande tendant à l'application du tarif réduit des droits d'enregistrement à un acte remplissant les conditions légales.",
      "Application for the reduced registration-duty tariff to apply to an act meeting the statutory conditions.",
      "Solicitud de aplicación de la tarifa reducida de los derechos de registro a un acto que cumple los requisitos legales.",
      "Domanda di applicazione della tariffa ridotta dei diritti di registrazione a un atto che ne soddisfa i requisiti.",
      "Antrag auf Anwendung des ermäßigten Gebührentarifs auf eine Urkunde, die die gesetzlichen Voraussetzungen erfüllt.",
      "Заявление о применении пониженной ставки регистрационных пошлин к сделке, отвечающей требованиям закона."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر التابع منها محل تحرير العقد",
      "Service de l'enregistrement et du timbre du lieu de rédaction de l'acte",
      "The registration and stamp office for the place where the deed is drawn up",
      "Oficina de registro y timbre del lugar de otorgamiento de la escritura",
      "Ufficio del registro e del bollo del luogo di redazione dell'atto",
      "Registrierungs- und Stempelamt am Ort der Beurkundung",
      "Регистрационно-гербовый отдел по месту составления документа"
    ),
    authority: "tax",
    keywords: ["enregistrement", "رسوم التسجيل", "réduction", "dgi"],
  },
  {
    id: "dgi-enregistrement-prorogation-paiement",
    cat: "dgi",
    title: T7(
      "طلب تمديد أجل أداء رسوم التسجيل",
      "Demande de prorogation du délai de paiement des droits d'enregistrement",
      "Application to extend the payment deadline for registration duties",
      "Solicitud de prórroga del plazo de pago de los derechos de registro",
      "Domanda di proroga del termine di pagamento dei diritti di registrazione",
      "Antrag auf Fristverlängerung für die Zahlung der Registrierungsgebühren",
      "Заявление о продлении срока уплаты регистрационных пошлин"
    ),
    desc: D7(
      "طلب يلتمس فيه المعني بالأمر أجل إضافي لتسديد رسوم تسجيل عقد خاضع للأداء.",
      "Demande d'un délai supplémentaire pour acquitter les droits d'enregistrement d'un acte encore redevable.",
      "Request for additional time to settle the registration duties on an act still due.",
      "Solicitud de un plazo adicional para abonar los derechos de registro de una escritura pendiente.",
      "Domanda di un termine aggiuntivo per pagare i diritti di registrazione di un atto ancora dovuto.",
      "Antrag auf eine zusätzliche Frist zur Begleichung noch offener Registrierungsgebühren.",
      "Просьба о дополнительном сроке для уплаты регистрационных пошлин по документу."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر مع تقديم ما يبرر طلب الأجل",
      "Service de l'enregistrement et du timbre, avec justification de la demande de délai",
      "The registration and stamp office, with justification for the requested extension",
      "Oficina de registro y timbre, con justificación de la prórroga solicitada",
      "Ufficio del registro e del bollo, con la motivazione della proroga richiesta",
      "Registrierungs- und Stempelamt, mit Begründung der Fristverlängerung",
      "Регистрационно-гербовый отдел с обоснованием запрашиваемого срока"
    ),
    authority: "tax",
    keywords: ["enregistrement", "تمديد الأجل", "prorogation", "رسوم", "dgi"],
  },
  {
    id: "dgi-enregistrement-degrevement",
    cat: "dgi",
    title: T7(
      "طلب الإبراء من رسوم التسجيل",
      "Demande en dégrèvement des droits d'enregistrement",
      "Application for discharge of registration duties",
      "Solicitud de exención de los derechos de registro",
      "Domanda di sgravio dei diritti di registrazione",
      "Antrag auf Erlass der Registrierungsgebühren",
      "Заявление об отмене регистрационных пошлин"
    ),
    desc: D7(
      "طلب يقدمه المعني بالأمر للمطالبة بإبرائه من رسوم التسجيل المفروضة أو المؤداة بصفة غير مبنية.",
      "Demande du redevable aux fins d'être déchargé des droits d'enregistrement imposés ou acquittés sans fondement.",
      "Taxpayer's application to be discharged from registration duties levied or paid without legal basis.",
      "Solicitud del contribuyente para ser liberado de los derechos de registro exigidos o pagados sin fundamento.",
      "Domanda del contribuente per essere liberato dai diritti di registrazione pretesi o pagati senza fondamento.",
      "Antrag des Pflichtigen auf Befreiung von grundlos erhobenen oder gezahlten Registrierungsgebühren.",
      "Заявление плательщика об освобождении от регистрационных пошлин, начисленных или уплаченных без оснований."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر أو المديرية الجهوية للضرائب التابع منها العقد",
      "Service de l'enregistrement et du timbre ou direction régionale des impôts compétente pour l'acte",
      "The registration and stamp office or the regional tax directorate for the deed",
      "Oficina de registro y timbre o dirección regional de impuestos competente para la escritura",
      "Ufficio del registro e del bollo oppure direzione regionale delle imposte competente per l'atto",
      "Registrierungs- und Stempelamt oder die zuständige regionale Steuerdirektion",
      "Регистрационно-гербовый отдел или компетентная региональная налоговая дирекция"
    ),
    authority: "tax",
    keywords: ["enregistrement", "dégrèvement", "إبراء", "رسوم التسجيل", "dgi"],
  },
  {
    id: "dgi-enregistrement-droit-fixe-parents",
    cat: "dgi",
    title: T7(
      "الأداء الثابت للعقود المبرمة بين الأصول والفروع",
      "Droit fixe pour les actes passés entre parents",
      "Fixed duty for deeds between close relatives",
      "Derecho fijo para escrituras entre parientes",
      "Diritto fisso per gli atti tra parenti",
      "Feste Gebühr für Urkunden zwischen Angehörigen",
      "Фиксированная пошлина для сделок между близкими родственниками"
    ),
    desc: D7(
      "طلب تطبيق الأداء الثابت على العقود المحررة بين الأصول والفروع والزوجين وفق التشريع الجبائي.",
      "Demande d'application du droit fixe aux actes conclus entre ascendants, descendants et époux selon la législation fiscale.",
      "Application for the fixed duty on deeds concluded between ascendants, descendants and spouses.",
      "Solicitud de aplicación del derecho fijo a escrituras entre ascendientes, descendientes y cónyuges.",
      "Domanda di applicazione del diritto fisso agli atti tra ascendenti, discendenti e coniugi.",
      "Antrag auf Anwendung der festen Gebühr für Urkunden zwischen Voreltern, Nachkommen und Ehegatten.",
      "Заявление о применении фиксированной пошлины к сделкам между родителями, детьми и супругами."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر عند إيداع العقد مع الوثائق المثبتة لصلة القرابة",
      "Service de l'enregistrement et du timbre au dépôt de l'acte, avec les justificatifs de parenté",
      "The registration and stamp office at filing of the deed, with proof of kinship",
      "Oficina de registro y timbre al depositar la escritura, con los justificantes de parentesco",
      "Ufficio del registro e del bollo al deposito dell'atto, con i documenti di parentela",
      "Registrierungs- und Stempelamt bei Einreichung der Urkunde, mit Verwandtschaftsnachweisen",
      "Регистрационно-гербовый отдел при подаче документа с подтверждением родства"
    ),
    authority: "tax",
    keywords: ["droit fixe", "أصول وفروع", "enregistrement", "رسوم", "dgi"],
  },
  {
    id: "dgi-enregistrement-remboursement",
    cat: "dgi",
    title: T7(
      "طلب استرجاع رسوم التسجيل المؤداة دون حق",
      "Demande de remboursement des droits d'enregistrement",
      "Application for refund of registration duties",
      "Solicitud de devolución de los derechos de registro",
      "Domanda di rimborso dei diritti di registrazione",
      "Antrag auf Rückerstattung der Registrierungsgebühren",
      "Заявление о возврате регистрационных пошлин"
    ),
    desc: D7(
      "طلب استرجاع الرسوم المؤداة دون موجب، خاصة عند إلغاء العقد أو عدم بلوغه أثره.",
      "Demande de restitution des droits versés indûment, notamment en cas d'annulation ou d'inexistence de l'acte.",
      "Application to recover duties paid without cause, notably when the deed is annulled or never takes effect.",
      "Solicitud de devolución de los derechos pagados indebidamente, especialmente si la escritura se anula.",
      "Domanda di restituzione dei diritti versati per errore, in particolare in caso di annullamento dell'atto.",
      "Antrag auf Rückzahlung zu Unrecht entrichteter Gebühren, insbesondere bei Annullierung der Urkunde.",
      "Заявление о возврате пошлин, уплаченных без оснований, особенно при аннулировании документа."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر أو قباضة الضرائب مع إثبات سبب الاسترجاع",
      "Service de l'enregistrement et du timbre ou recette des impôts, avec preuve du bien-fondé",
      "The registration and stamp office or recette des impôts, with evidence of entitlement",
      "Oficina de registro y timbre o recaudación de impuestos, con prueba del derecho a la devolución",
      "Ufficio del registro e del bollo oppure riscossione delle imposte, con prova della legittimazione",
      "Registrierungs- und Stempelamt oder Steuerkasse, mit Nachweis des Erstattungsanspruchs",
      "Регистрационно-гербовый отдел или налоговая касса с доказательством права на возврат"
    ),
    authority: "tax",
    keywords: ["enregistrement", "استرجاع", "remboursement", "رسوم التسجيل", "dgi"],
  },
  {
    id: "dgi-enregistrement-declaration-mutation",
    cat: "dgi",
    title: T7(
      "التصريح بتسجيل تصرف في العقار",
      "Déclaration d'enregistrement d'une mutation immobilière",
      "Registration declaration for a property transfer",
      "Declaración de registro de una mutación inmobiliaria",
      "Dichiarazione di registrazione di un trasferimento immobiliare",
      "Registrierungserklärung für eine Grundstücksübertragung",
      "Декларация о регистрации передачи недвижимости"
    ),
    desc: D7(
      "تصريح يودع لتسجيل عقد نقل الملكية العقارية وتحديد رسوم التسجيل المستحقة عليه.",
      "Déclaration déposée pour faire enregistrer un acte translatif de propriété immobilière et fixer les droits exigibles.",
      "Declaration filed to have a property-transfer deed registered and the payable duties determined.",
      "Declaración presentada para registrar una escritura traslativa de dominio y determinar los derechos exigibles.",
      "Dichiarazione presentata per registrare un atto traslativo della proprietà immobiliare e determinare i diritti dovuti.",
      "Erklärung zur Eintragung einer Eigentumsübertragung und zur Festsetzung der geschuldeten Gebühren.",
      "Декларация для регистрации договора передачи права собственности и определения причитающихся пошлин."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر التابع منها محل العقار داخل الأجل القانوني",
      "Service de l'enregistrement et du timbre du lieu de l'immeuble, dans le délai légal",
      "The registration and stamp office for the property's location, within the legal deadline",
      "Oficina de registro y timbre del lugar del inmueble, dentro del plazo legal",
      "Ufficio del registro e del bollo del luogo dell'immobile, entro il termine legale",
      "Registrierungs- und Stempelamt am Belegenheitsort, innerhalb der gesetzlichen Frist",
      "Регистрационно-гербовый отдел по месту нахождения объекта в установленный законом срок"
    ),
    authority: "tax",
    keywords: ["enregistrement", "mutation", "تسجيل", "عقار", "dgi"],
  },

  // ─── Attestations et certificats DGI ───
  {
    id: "dgi-attestation-regularite-fiscale",
    cat: "dgi",
    title: T7(
      "شهادة الانتظام الجبائي",
      "Attestation de régularité fiscale",
      "Certificate of tax compliance",
      "Certificado de regularidad fiscal",
      "Attestato di regolarità fiscale",
      "Bescheinigung der steuerlichen Ordnungsmäßigkeit",
      "Справка об отсутствии налоговых нарушений"
    ),
    desc: D7(
      "شهادة تثبت انتظام وضعية الملزم تجاه المديرية العامة للضرائب، تعتمد في الصفقات والملفات الرسمية.",
      "Attestation constatant la régularité de la situation du redevable envers la DGI, exigée pour les marchés et dossiers officiels.",
      "Certificate confirming a taxpayer's compliance towards the DGI, required for tenders and official files.",
      "Certificado que acredita la regularidad del contribuyente ante la DGI, exigido en licitaciones y expedientes oficiales.",
      "Attestato che certifica la posizione regolare del contribuente verso la DGI, richiesto per appalti e pratiche ufficiali.",
      "Bescheinigung über die geordnete Steuerstellung gegenüber der DGI, erforderlich für Ausschreibungen und behördliche Vorgänge.",
      "Справка о добросовестности налогоплательщика перед DGI, требуется для торгов и официальных дел."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الملزم أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Recette des impôts du redevable ou services numériques de la DGI",
      "The taxpayer's recette des impôts, or the DGI's digital services",
      "Recaudación de impuestos del contribuyente o servicios digitales de la DGI",
      "Riscossione delle imposte del contribuente oppure servizi digitali della DGI",
      "Steuerkasse des Steuerpflichtigen oder die digitalen Dienste der DGI",
      "Налоговая касса налогоплательщика или цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["attestation", "الانتظام الجبائي", "régularité fiscale", "dgi", "شهادة"],
    popular: true,
  },
  {
    id: "dgi-attestation-declaration-tva",
    cat: "dgi",
    title: T7(
      "شهادة التصريح بالضريبة على القيمة المضافة",
      "Attestation de déclaration de TVA",
      "Certificate of VAT declaration",
      "Certificado de declaración del IVA",
      "Attestato di presentazione delle dichiarazioni IVA",
      "Bescheinigung über die Mehrwertsteuer-Anmeldung",
      "Справка о подаче деклараций по НДС"
    ),
    desc: D7(
      "شهادة تثبت انتظام المكلف في إيداع تصريحات الضريبة على القيمة المضافة المفروضة عليه.",
      "Attestation constatant la régularité du dépôt des déclarations de TVA souscrites par le redevable.",
      "Certificate confirming the regular filing of the VAT declarations submitted by the taxable person.",
      "Certificado que acredita la presentación regular de las declaraciones del IVA del sujeto pasivo.",
      "Attestato che certifica la regolare presentazione delle dichiarazioni IVA del contribuente.",
      "Bescheinigung über die fristgerechte Abgabe der Mehrwertsteuererklärungen des Pflichtigen.",
      "Справка, подтверждающая регулярную подачу деклараций по НДС налогоплательщиком."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع منها المكلف",
      "Service du recouvrement dont relève le redevable",
      "The collection office covering the taxable person",
      "Oficina de recaudación a la que pertenece el sujeto pasivo",
      "Ufficio riscossione da cui dipende il contribuente",
      "Zuständige Vollzugsstelle des Steuerpflichtigen",
      "Отдел взыскания, обслуживающий налогоплательщика"
    ),
    authority: "tax",
    keywords: ["TVA", "attestation", "شهادة", "التصريح", "dgi"],
  },
  {
    id: "dgi-attestation-residence-fiscale",
    cat: "dgi",
    title: T7(
      "شهادة الإقامة الجبائية",
      "Attestation de résidence fiscale",
      "Certificate of tax residence",
      "Certificado de residencia fiscal",
      "Attestato di residenza fiscale",
      "Bescheinigung des steuerlichen Wohnsitzes",
      "Справка о налоговом резидентстве"
    ),
    desc: D7(
      "شهادة تحدد بلد الإقامة الجبائية للمعني بالأمر، تطلب لتطبيق اتفاقيات منع الازدواج الضريبي.",
      "Attestation précisant le pays de résidence fiscale du contribuable, demandée pour l'application des conventions de non-double imposition.",
      "Certificate stating the taxpayer's country of tax residence, requested to apply double-taxation treaties.",
      "Certificado que indica el país de residencia fiscal, solicitado para aplicar los convenios de doble imposición.",
      "Attestato che indica il paese di residenza fiscale, richiesto per applicare le convenzioni contro le doppie imposizioni.",
      "Bescheinigung über den Staat des steuerlichen Wohnsitzes, beantragt zur Anwendung von Doppelbesteuerungsabkommen.",
      "Справка о стране налогового резидентства, запрашивается для применения соглашений об избежании двойного налогообложения."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها المعني بالأمر",
      "Section ou recette des impôts dont relève le contribuable",
      "The tax office or recette des impôts covering the taxpayer",
      "Oficina o recaudación de impuestos a la que pertenece el contribuyente",
      "Ufficio o riscossione delle imposte da cui dipende il contribuente",
      "Steueramt oder zuständige Steuerkasse des Steuerpflichtigen",
      "Налоговый орган или касса, обслуживающие налогоплательщика"
    ),
    authority: "tax",
    keywords: ["résidence fiscale", "الإقامة الجبائية", "convention fiscale", "dgi", "attestation"],
  },
  {
    id: "dgi-attestation-identifiant-fiscal",
    cat: "dgi",
    title: T7(
      "شهادة المعرف الجبائي",
      "Attestation d'identifiant fiscal",
      "Tax identification number certificate",
      "Certificado de identificador fiscal",
      "Attestato di codice fiscale",
      "Bescheinigung der Steueridentifikationsnummer",
      "Справка о налоговом идентификаторе"
    ),
    desc: D7(
      "شهادة تثبت المعرف الجبائي الممنوح للملزم، تطلب عند إنجاز مساطر إدارية وبنكية متعددة.",
      "Attestation justifiant l'identifiant fiscal attribué au redevable, demandée pour diverses démarches administratives et bancaires.",
      "Certificate evidencing the tax identification number issued to a taxpayer, requested for various administrative and banking steps.",
      "Certificado que acredita el identificador fiscal asignado al contribuyente, solicitado para trámites administrativos y bancarios.",
      "Attestato che comprova il codice fiscale attribuito al contribuente, richiesto per pratiche amministrative e bancarie.",
      "Bescheinigung über die dem Steuerpflichtigen zugeteilte Steueridentifikationsnummer, für Verwaltungs- und Bankvorgänge.",
      "Справка о присвоенном налогоплательщику идентификаторе, требуется для административных и банковских процедур."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الملزم أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Recette des impôts du redevable ou services numériques de la DGI",
      "The taxpayer's recette des impôts, or the DGI's digital services",
      "Recaudación de impuestos del contribuyente o servicios digitales de la DGI",
      "Riscossione delle imposte del contribuente oppure servizi digitali della DGI",
      "Steuerkasse des Steuerpflichtigen oder die digitalen Dienste der DGI",
      "Налоговая касса налогоплательщика или цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["identifiant fiscal", "المعرف الجبائي", "attestation", "dgi"],
  },
  {
    id: "dgi-quittance-duplicata",
    cat: "dgi",
    title: T7(
      "طلب نسخة ثانية من وصل الأداء الجبائي",
      "Demande de duplicata de quittance de paiement",
      "Application for a duplicate tax payment receipt",
      "Solicitud de duplicado del recibo de pago",
      "Domanda di duplicato della quietanza di pagamento",
      "Antrag auf Zweitschrift der Zahlungsquittung",
      "Заявление о дубликате квитанции об уплате"
    ),
    desc: D7(
      "طلب نسخة ثانية من وصل أداء الضريبة عند فقدان الأصل أو تلفه.",
      "Demande d'une copie de la quittance fiscale en cas de perte ou de détérioration de l'original.",
      "Application for a copy of a tax receipt when the original is lost or damaged.",
      "Solicitud de copia del recibo fiscal en caso de pérdida o deterioro del original.",
      "Domanda di copia della quietanza fiscale in caso di smarrimento o deterioramento dell'originale.",
      "Antrag auf eine Kopie der Steuerquittung bei Verlust oder Beschädigung des Originals.",
      "Заявление о выдаче копии налоговой квитанции в случае утери или повреждения оригинала."
    ),
    where: W7(
      "قباضة الضرائب التي حرر فيها الوصل الأصلي",
      "Recette des impôts ayant établi la quittance originale",
      "The recette des impôts that issued the original receipt",
      "Recaudación de impuestos que emitió el recibo original",
      "Riscossione delle imposte che ha emesso la quietanza originale",
      "Die Steuerkasse, die die Originalquittung ausgestellt hat",
      "Налоговая касса, выдавшая оригинал квитанции"
    ),
    authority: "tax",
    keywords: ["quittance", "وصل الأداء", "duplicata", "نسخة", "dgi"],
  },
  {
    id: "dgi-mainlevee-hypotheque",
    cat: "dgi",
    title: T7(
      "طلب رفع الرهن الحادث عن الديون الجبائية",
      "Demande de mainlevée de l'hypothèque fiscale",
      "Application for release of a tax mortgage",
      "Solicitud de cancelación de la hipoteca fiscal",
      "Domanda di cancellazione dell'ipoteca fiscale",
      "Antrag auf Löschung der Steuerhypothek",
      "Заявление о снятии налогового ипотечного обременения"
    ),
    desc: D7(
      "طلب رفع الرهن المقيدي لفائدة الخزينة العامة بعد تسديد الدين الضريبي الذي ترتب عليه.",
      "Demande de radiation de l'inscription hypothécaire prise au profit du Trésor après apurement de la dette fiscale.",
      "Application to cancel the mortgage registered in favour of the Treasury once the tax debt is settled.",
      "Solicitud de cancelación de la hipoteca inscrita a favor del Tesoro tras saldar la deuda fiscal.",
      "Domanda di cancellazione dell'ipoteca iscritta a favore del Tesoro dopo l'estinzione del debito fiscale.",
      "Antrag auf Löschung der zugunsten der Staatskasse eingetragenen Hypothek nach Begleichung der Steuerschuld.",
      "Заявление о снятии ипотеки, зарегистрированной в пользу казначейства, после погашения налогового долга."
    ),
    where: W7(
      "قباضة الضرائب التابع منها المعني بالأمر قبل التشطيب بالمحافظة العقارية",
      "Recette des impôts du redevable, avant radiation à la conservation foncière",
      "The taxpayer's recette des impôts, prior to cancellation at the land registry",
      "Recaudación de impuestos del contribuyente, antes de la cancelación en el registro de la propiedad",
      "Riscossione delle imposte del contribuente, prima della cancellazione alla conservatoria",
      "Steuerkasse des Steuerpflichtigen, vor der Löschung im Grundbuchamt",
      "Налоговая касса налогоплательщика перед снятием в органе регистрации недвижимости"
    ),
    authority: "tax",
    keywords: ["mainlevée", "رهن", "hypothèque", "dgi", "الخزينة"],
  },

  // ─── Réclamations et contentieux ───
  {
    id: "dgi-reclamation-decharge",
    cat: "dgi",
    title: T7(
      "تظلم لإبراء الذمة قبل أداء الضريبة",
      "Réclamation en décharge d'impôt",
      "Claim for discharge from tax (before payment)",
      "Reclamación de exoneración de impuesto (antes del pago)",
      "Ricorso per sgravio d'imposta (prima del pagamento)",
      "Einspruch auf Steuerbefreiung (vor Zahlung)",
      "Возражение с требованием отмены налога (до уплаты)"
    ),
    desc: D7(
      "تظلم يطالب فيه الملزم بإبرائه من الضريبة المحملة عليه قبل الشروع في أدائها.",
      "Réclamation par laquelle le redevable demande à être déchargé de l'imposition mise à sa charge avant tout paiement.",
      "Claim whereby the taxpayer seeks to be discharged from an assessment before any payment is made.",
      "Reclamación mediante la cual el contribuyente pide ser exonerado de la liquidación antes de cualquier pago.",
      "Ricorso con cui il contribuente chiede di essere scaricato dall'imposta prima di qualsiasi pagamento.",
      "Einspruch, mit dem der Steuerpflichtige vor jeder Zahlung die Aufhebung des Steuerbescheids verlangt.",
      "Возражение, по которому налогоплательщик требует отмены начисленного налога до какой-либо уплаты."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب أو القسم المختص داخل الأجل القانوني",
      "À déposer à la direction régionale des impôts ou à la section compétente, dans le délai légal",
      "To be filed with the regional tax directorate or its competent section, within the legal deadline",
      "Se presenta ante la dirección regional de impuestos o su sección competente, dentro del plazo legal",
      "Da presentare alla direzione regionale delle imposte o alla sezione competente, entro il termine legale",
      "Bei der regionalen Steuerdirektion oder deren zuständiger Abteilung innerhalb der gesetzlichen Frist einzureichen",
      "Подаётся в региональную налоговую дирекцию или её компетентный отдел в установленный законом срок"
    ),
    authority: "tax",
    keywords: ["réclamation", "تظلم", "décharge", "dgi", "contentieux"],
  },
  {
    id: "dgi-reclamation-restitution",
    cat: "dgi",
    title: T7(
      "تظلم لاسترجاع الضريبة بعد أدائها",
      "Réclamation en restitution après paiement",
      "Claim for restitution after payment",
      "Reclamación de devolución tras el pago",
      "Ricorso per restituzione dopo il pagamento",
      "Einspruch auf Erstattung nach Zahlung",
      "Возражение о возврате после уплаты"
    ),
    desc: D7(
      "تظلم يلتمس فيه الملزم استرجاع الضريبة المؤداة زيادة عن المستحق أو دون سند قانوني.",
      "Réclamation sollicitant la restitution d'un impôt versé au-delà du dû ou sans fondement juridique.",
      "Claim seeking restitution of tax paid in excess of what was due or without legal basis.",
      "Reclamación que solicita la devolución de un impuesto pagado en exceso o sin fundamento jurídico.",
      "Ricorso che chiede la restituzione di un'imposta pagata in eccesso o senza base giuridica.",
      "Einspruch auf Rückerstattung einer zu viel oder ohne Rechtsgrundlage gezahlten Steuer.",
      "Возражение с требованием возврата налога, уплаченного сверх причитающегося или без правовых оснований."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب مع نسخ وصولات الأداء المطعون فيها",
      "À déposer à la direction régionale des impôts avec copie des quittances de paiement contestées",
      "To be filed with the regional tax directorate with copies of the contested payment receipts",
      "Se presenta ante la dirección regional de impuestos con copia de los recibos de pago impugnados",
      "Da presentare alla direzione regionale delle imposte con copia delle quietanze di pagamento contestate",
      "Bei der regionalen Steuerdirektion zusammen mit Kopien der angefochtenen Zahlungsbelege einzureichen",
      "Подаётся в региональную дирекцию с копиями оспариваемых платёжных квитанций"
    ),
    authority: "tax",
    keywords: ["réclamation", "استرجاع", "restitution", "تظلم", "dgi"],
  },
  {
    id: "dgi-requete-gracieuse",
    cat: "dgi",
    title: T7(
      "طلب العفو عن الزيادات والغرامات الجبائية",
      "Requête gracieuse de remise des majorations et pénalités",
      "Grace application for waiver of tax surcharges and penalties",
      "Solicitud graciosa de condonación de recargos y sanciones",
      "Istanza di condono degli aumenti e delle sanzioni fiscali",
      "Gnädigkeitsantrag auf Erlass von Zuschlägen und Steuerstrafen",
      "Ходатайство о прощении налоговых надбавок и штрафов"
    ),
    desc: D7(
      "ملتمس بالرأفة يرمي إلى تخفيض أو إعفاء الملزم من الزيادات والغرامات والتأخيرات المحتسبة عليه.",
      "Demande de grâce tendant à la réduction ou à la remise des majorations, pénalités et intérêts de retard mis à la charge du redevable.",
      "Grace application seeking reduction or waiver of the surcharges, penalties and late interest charged to the taxpayer.",
      "Petición de gracia que persigue la reducción o condonación de recargos, sanciones e intereses moratorios.",
      "Istanza di grazia volta alla riduzione o remissione degli aumenti, sanzioni e interessi di mora.",
      "Gnadengesuch auf Reduktion oder Erlass der dem Pflichtigen auferlegten Zuschläge, Strafen und Säumniszinsen.",
      "Ходатайство о снисхождении: уменьшение или снятие начисленных надбавок, штрафов и пени."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب التي تدرسها وفق الحالات المقررة قانونا",
      "À déposer auprès de la direction régionale des impôts, qui l'examine selon les cas prévus par la loi",
      "To be filed with the regional tax directorate, which examines it under the cases provided by law",
      "Se presenta ante la dirección regional de impuestos, que la examina según los casos previstos por la ley",
      "Da presentare alla direzione regionale delle imposte, che la esamina nei casi previsti dalla legge",
      "Bei der regionalen Steuerdirektion einzureichen, die sie in den gesetzlich vorgesehenen Fällen prüft",
      "Подаётся в региональную налоговую дирекцию, которая рассматривает его в предусмотренных законом случаях"
    ),
    authority: "tax",
    keywords: ["requête gracieuse", "رأفة", "majorations", "pénalités", "dgi"],
  },
  {
    id: "dgi-commission-locale-taxation",
    cat: "dgi",
    title: T7(
      "طلب عرض النزاع على اللجنة المحلية للفرض الضريبي",
      "Demande de saisine de la commission locale de taxation",
      "Application to refer a dispute to the local taxation commission",
      "Solicitud de sometimiento a la comisión local de tributación",
      "Domanda di deferimento alla commissione locale di tassazione",
      "Antrag auf Anrufung der lokalen Steuerkommission",
      "Заявление о передаче спора в местную налоговую комиссию"
    ),
    desc: D7(
      "طلب يعرض بموجبه الملزم نزاعه الجبائي على اللجنة المحلية للفرض الضريبي بعد رفض تظلمه.",
      "Demande portant saisine de la commission locale de taxation par le redevable dont la réclamation a été rejetée.",
      "Application referring a tax dispute to the local taxation commission after a claim has been rejected.",
      "Solicitud de sometimiento del litigio a la comisión local de tributación tras el rechazo de la reclamación.",
      "Domanda di deferimento della controversia alla commissione locale di tassazione dopo il rigetto del ricorso.",
      "Antrag auf Anrufung der lokalen Steuerkommission nach Ablehnung des Einspruchs.",
      "Заявление о передаче налогового спора в местную налоговую комиссию после отклонения возражения."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب التي تحيلها على أمانة اللجنة المختصة",
      "À déposer à la direction régionale des impôts, qui la transmet au secrétariat de la commission compétente",
      "To be filed with the regional tax directorate, which forwards it to the competent commission's secretariat",
      "Se presenta en la dirección regional de impuestos, que la remite a la secretaría de la comisión competente",
      "Da presentare alla direzione regionale delle imposte, che la trasmette alla segreteria della commissione competente",
      "Bei der regionalen Steuerdirektion einzureichen, die sie an das Sekretariat der zuständigen Kommission weiterleitet",
      "Подаётся в региональную дирекцию, которая направляет его в секретариат компетентной комиссии"
    ),
    authority: "tax",
    keywords: ["commission locale", "اللجنة المحلية", "contentieux", "تظلم", "dgi"],
  },
  {
    id: "dgi-sursis-paiement-garanties",
    cat: "dgi",
    title: T7(
      "طلب تأجيل الأداء مع تقديم الضمانات",
      "Demande de sursis de paiement avec garanties",
      "Application for payment deferral with guarantees",
      "Solicitud de aplazamiento de pago con garantías",
      "Domanda di sospensione del pagamento con garanzie",
      "Antrag auf Zahlungsaufschub gegen Sicherheiten",
      "Заявление об отсрочке платежа при предоставлении гарантий"
    ),
    desc: D7(
      "طلب تأجيل أداء الديون المتنازع فيها مع تقديم ضمانات لتغطية المبالغ محل النزاع.",
      "Demande de différé de paiement des impositions contestées, assortie de garanties couvrant les sommes litigieuses.",
      "Application to defer payment of disputed assessments, backed by guarantees covering the amounts in dispute.",
      "Solicitud de aplazamiento del pago de liquidaciones impugnadas, respaldada por garantías que cubren los importes controvertidos.",
      "Domanda di differimento del pagamento delle imposte contestate, corredata da garanzie a copertura delle somme contestate.",
      "Antrag auf Stundung angefochtener Steuern, gestützt auf Sicherheiten zur Deckung der streitigen Beträge.",
      "Заявление об отсрочке уплаты оспариваемых сумм с предоставлением гарантий их покрытия."
    ),
    where: W7(
      "تودع لدى المديرية الجهوية للضرائب أو قباضة الضرائب مع تحديد الضمانات المقترحة",
      "À déposer à la direction régionale ou à la recette des impôts, avec précision des garanties proposées",
      "To be filed with the regional directorate or recette des impôts, specifying the guarantees offered",
      "Se presenta en la dirección regional o recaudación de impuestos, indicando las garantías propuestas",
      "Da presentare alla direzione regionale o alla riscossione, indicando le garanzie proposte",
      "Bei der regionalen Direktion oder der Steuerkasse einzureichen, unter Angabe der angebotenen Sicherheiten",
      "Подаётся в региональную дирекцию или кассу с указанием предлагаемых гарантий"
    ),
    authority: "tax",
    keywords: ["sursis de paiement", "تأجيل", "garanties", "dgi", "contentieux"],
  },

  // ─── Entreprises et télédéclaration SIMPL ───
  {
    id: "dgi-identification-fiscale-creation",
    cat: "dgi",
    title: T7(
      "طلب المعرف الجبائي عند إنشاء المقاولة",
      "Demande d'identification fiscale à la création d'entreprise",
      "Tax identification application when creating a business",
      "Solicitud de identificación fiscal al crear una empresa",
      "Domanda di identificazione fiscale alla costituzione dell'impresa",
      "Antrag auf Steuernummer bei Unternehmensgründung",
      "Заявление о присвоении налогового номера при создании компании"
    ),
    desc: D7(
      "طلب يقدمه المؤسس للحصول على المعرف الجبائي اللازم لمزاولة النشاط بشكل قانوني.",
      "Demande déposée par le fondateur en vue d'obtenir l'identifiant fiscal nécessaire à l'exercice légal de l'activité.",
      "Application filed by a founder to obtain the tax identification number required to lawfully operate.",
      "Solicitud presentada por el fundador para obtener el identificador fiscal necesario para ejercer legalmente.",
      "Domanda presentata dal fondatore per ottenere il codice fiscale necessario all'esercizio legale dell'attività.",
      "Antrag des Gründers auf Erteilung der für die rechtmäßige Geschäftstätigkeit erforderlichen Steuernummer.",
      "Заявление учредителя о получении налогового номера, необходимого для законного ведения деятельности."
    ),
    where: W7(
      "الشباك الوحيد أو قباضة الضرائب التابع منها مقر المقاولة",
      "Guichet unique ou recette des impôts du siège de l'entreprise",
      "The one-stop shop (guichet unique) or the recette des impôts for the head office",
      "Ventanilla única o recaudación de impuestos de la sede de la empresa",
      "Sportello unico oppure riscossione delle imposte della sede sociale",
      "Einheitsschalter (Guichet unique) oder die Steuerkasse des Firmensitzes",
      "Единое окно или налоговая касса по месту регистрации офиса"
    ),
    authority: "tax",
    keywords: ["identifiant fiscal", "المعرف الجبائي", "création entreprise", "dgi", "شباك وحيد"],
    popular: true,
  },
  {
    id: "dgi-simpl-adhesion",
    cat: "dgi",
    title: T7(
      "طلب الانخراط في التصريح والتسديد الإلكترونيين عبر SIMPL",
      "Demande d'adhésion à la télédéclaration et au télépaiement SIMPL",
      "Application to join SIMPL e-filing and e-payment",
      "Solicitud de adhesión a la declaración y el pago telemáticos SIMPL",
      "Domanda di adesione alla teledichiarazione e al telepagamento SIMPL",
      "Antrag auf Teilnahme an SIMPL-Erklärungen und -Zahlungen",
      "Заявление о подключении к электронной отчётности и оплате SIMPL"
    ),
    desc: D7(
      "طلب يشترك بموجبه الملزم في خدمات التصريح والتسديد عن بعد عبر منصة المديرية العامة للضرائب.",
      "Demande par laquelle le redevable souscrit aux services de télédéclaration et de télépaiement de la plateforme de la DGI.",
      "Application through which a taxpayer subscribes to the DGI platform's e-filing and e-payment services.",
      "Solicitud mediante la cual el contribuyente se adhiere a los servicios de declaración y pago en línea de la DGI.",
      "Domanda con cui il contribuente aderisce ai servizi di teledichiarazione e telepagamento della piattaforma DGI.",
      "Antrag, mit dem sich der Steuerpflichtige für die Erklärungs- und Zahlungsdienste der DGI-Plattform anmeldet.",
      "Заявление, по которому налогоплательщик подключается к сервисам электронной отчётности и оплаты платформы DGI."
    ),
    where: W7(
      "عبر منصة SIMPL أو لدى المديرية الجهوية للضرائب",
      "Via la plateforme SIMPL ou auprès de la direction régionale des impôts",
      "Through the SIMPL platform or at the regional tax directorate",
      "A través de la plataforma SIMPL o en la dirección regional de impuestos",
      "Tramite la piattaforma SIMPL o presso la direzione regionale delle imposte",
      "Über die SIMPL-Plattform oder bei der regionalen Steuerdirektion",
      "Через платформу SIMPL или в региональной налоговой дирекции"
    ),
    authority: "simpl",
    keywords: ["SIMPL", "التصريح الإلكتروني", "télédéclaration", "dgi", "التسديد الإلكتروني"],
  },
  {
    id: "dgi-changement-adresse-siege",
    cat: "dgi",
    title: T7(
      "التصريح بتغيير عنوان المقر الاجتماعي",
      "Déclaration de changement d'adresse du siège social",
      "Declaration of change of registered office address",
      "Declaración de cambio de domicilio social",
      "Dichiarazione di cambio di indirizzo della sede sociale",
      "Anzeige der Adressänderung des Firmensitzes",
      "Декларация об изменении адреса юридического лица"
    ),
    desc: D7(
      "تصريح يخبر بموجبه الملزم الإدارة الجبائية عن انتقال مقر شركته إلى عنوان جديد.",
      "Déclaration par laquelle le redevable informe l'administration fiscale du transfert du siège de sa société.",
      "Declaration informing the tax administration of the transfer of a company's head office.",
      "Declaración con la que el contribuyente informa a la administración fiscal del traslado de la sede social.",
      "Dichiarazione con cui il contribuente informa l'amministrazione finanziaria del trasferimento della sede.",
      "Erklärung, mit der der Steuerpflichtige die Finanzverwaltung über die Verlegung des Firmensitzes informiert.",
      "Декларация, информирующая налоговое ведомство о переезде головного офиса компании."
    ),
    where: W7(
      "المديرية الجهوية للضرائب أو قباضة الضرائب التابع منها المقر الجديد",
      "Direction régionale des impôts ou recette des impôts de la nouvelle adresse",
      "The regional tax directorate or the recette des impôts for the new address",
      "Dirección regional de impuestos o recaudación de la nueva dirección",
      "Direzione regionale delle imposte oppure riscossione del nuovo indirizzo",
      "Regionale Steuerdirektion oder Steuerkasse der neuen Anschrift",
      "Региональная дирекция или касса по новому адресу"
    ),
    authority: "tax",
    keywords: ["siège social", "المقر الاجتماعي", "changement d'adresse", "dgi"],
  },
  {
    id: "dgi-changement-activite",
    cat: "dgi",
    title: T7(
      "التصريح بتغيير النشاط المزاول",
      "Déclaration de changement d'activité",
      "Declaration of change of business activity",
      "Declaración de cambio de actividad",
      "Dichiarazione di cambio di attività",
      "Anzeige der Tätigkeitsänderung",
      "Декларация об изменении вида деятельности"
    ),
    desc: D7(
      "تصريح يبلغ بموجبه الملزم عن تعديل طبيعة نشاطه التجاري أو المهني لدى المديرية العامة للضرائب.",
      "Déclaration notifiant à la DGI la modification de la nature de l'activité commerciale ou professionnelle exercée.",
      "Declaration notifying the DGI of a change in the nature of the business or professional activity.",
      "Declaración que notifica a la DGI la modificación de la naturaleza de la actividad ejercida.",
      "Dichiarazione che notifica alla DGI la modifica della natura dell'attività esercitata.",
      "Anzeige über die Änderung der Art der ausgeübten Gewerbe- oder Berufstätigkeit an die DGI.",
      "Декларация об уведомлении DGI об изменении характера коммерческой или профессиональной деятельности."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها الملزم",
      "Section ou recette des impôts dont relève le redevable",
      "The tax office or recette des impôts covering the taxpayer",
      "Oficina o recaudación de impuestos a la que pertenece el contribuyente",
      "Ufficio o riscossione delle imposte da cui dipende il contribuente",
      "Steueramt oder Steuerkasse, in deren Zuständigkeit der Pflichtige fällt",
      "Налоговый орган или касса, обслуживающие налогоплательщика"
    ),
    authority: "tax",
    keywords: ["changement d'activité", "نشاط", "dgi", "تصريح"],
  },
  {
    id: "dgi-cessation-activite",
    cat: "dgi",
    title: T7(
      "التصريح بالتوقف عن ممارسة النشاط",
      "Déclaration de cessation d'activité",
      "Declaration of cessation of business",
      "Declaración de cese de actividad",
      "Dichiarazione di cessazione dell'attività",
      "Anzeige der Geschäftsaufgabe",
      "Декларация о прекращении деятельности"
    ),
    desc: D7(
      "تصريح يخبر بموجبه الملزم عن توقيفه النهائي لنشاطه وتحديد تاريخ التوقف المعتمد.",
      "Déclaration informant l'administration de l'arrêt définitif de l'activité et fixant la date de cessation retenue.",
      "Declaration informing the administration of the definitive stop of a business and setting the cessation date.",
      "Declaración que informa a la administración del cese definitivo y fija la fecha de interrupción.",
      "Dichiarazione che informa l'amministrazione della cessazione definitiva e ne fissa la data.",
      "Anzeige über die endgültige Betriebseinstellung unter Angabe des Beendigungsdatums.",
      "Декларация об окончательном прекращении деятельности с указанием даты остановки."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها الملزم داخل الأجل القانوني",
      "Section ou recette des impôts compétente, dans le délai légal",
      "The competent tax office or recette des impôts, within the legal deadline",
      "Oficina o recaudación de impuestos competente, dentro del plazo legal",
      "Ufficio o riscossione delle imposte competente, entro il termine legale",
      "Zuständiges Steueramt oder Steuerkasse, innerhalb der gesetzlichen Frist",
      "Компетентный налоговый орган или касса в установленный законом срок"
    ),
    authority: "tax",
    keywords: ["cessation", "توقف النشاط", "dgi", "تصريح", "entreprise"],
  },
  {
    id: "dgi-liquidation-societe",
    cat: "dgi",
    title: T7(
      "التصريح بحل الشركة وتصفيتها",
      "Déclaration de dissolution et liquidation de société",
      "Declaration of company dissolution and liquidation",
      "Declaración de disolución y liquidación de la sociedad",
      "Dichiarazione di scioglimento e liquidazione della società",
      "Anzeige der Auflösung und Liquidation der Gesellschaft",
      "Декларация о роспуске и ликвидации компании"
    ),
    desc: D7(
      "تصريح يضمن نتائج تصفية الشركة وحدود الأداءات الجبائية المترتبة عن انقضائها.",
      "Déclaration reprenant les résultats de la liquidation et les conséquences fiscales de la dissolution de la société.",
      "Declaration covering the liquidation results and the tax consequences of the company's dissolution.",
      "Declaración que recoge los resultados de la liquidación y las consecuencias fiscales de la disolución.",
      "Dichiarazione che riporta i risultati della liquidazione e le conseguenze fiscali dello scioglimento.",
      "Erklärung über die Liquidationsergebnisse und die steuerlichen Folgen der Auflösung.",
      "Декларация о результатах ликвидации и налоговых последствиях роспуска компании."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها مقر الشركة قبل إغلاق التصفية",
      "Section ou recette des impôts du siège, avant la clôture de la liquidation",
      "The tax office or recette des impôts for the head office, before closing the liquidation",
      "Oficina o recaudación de impuestos de la sede, antes del cierre de la liquidación",
      "Ufficio o riscossione delle imposte della sede, prima della chiusura della liquidazione",
      "Steueramt oder Steuerkasse des Sitzes vor Abschluss der Liquidation",
      "Налоговый орган или касса по месту регистрации до завершения ликвидации"
    ),
    authority: "tax",
    keywords: ["liquidation", "حل الشركة", "dissolution", "dgi", "société"],
  },
  {
    id: "dgi-compte-bancaire-remboursements",
    cat: "dgi",
    title: T7(
      "التصريح بالحساب البنكي لفائدة الاسترجاعات الجبائية",
      "Déclaration du compte bancaire pour les remboursements fiscaux",
      "Bank account declaration for tax refunds",
      "Declaración de la cuenta bancaria para devoluciones fiscales",
      "Dichiarazione del conto bancario per i rimborsi fiscali",
      "Bankkonto-Anzeige für Steuerrückerstattungen",
      "Заявление банковского счёта для налоговых возвратов"
    ),
    desc: D7(
      "تصريح يحدد فيه الملزم حسابه البنكي أو البريدي لتوجيه الاسترجاعات المستحقة له.",
      "Déclaration par laquelle le redevable désigne son compte bancaire ou postal pour recevoir les restitutions dues.",
      "Declaration whereby the taxpayer designates the bank or postal account to receive refunds due.",
      "Declaración con la que el contribuyente designa su cuenta bancaria o postal para recibir las devoluciones.",
      "Dichiarazione con cui il contribuente indica il conto bancario o postale per ricevere i rimborsi.",
      "Erklärung, mit der der Steuerpflichtige sein Bank- oder Postkonto für anstehende Erstattungen benennt.",
      "Декларация, в которой налогоплательщик указывает банковский или почтовый счёт для получения возвратов."
    ),
    where: W7(
      "قباضة الضرائب التابع منها الملزم أو الخدمات الرقمية لمنصة SIMPL",
      "Recette des impôts du redevable ou services numériques de la plateforme SIMPL",
      "The taxpayer's recette des impôts, or the digital services of the SIMPL platform",
      "Recaudación de impuestos del contribuyente o servicios digitales de la plataforma SIMPL",
      "Riscossione delle imposte del contribuente oppure servizi digitali della piattaforma SIMPL",
      "Steuerkasse des Steuerpflichtigen oder die digitalen Dienste der SIMPL-Plattform",
      "Налоговая касса налогоплательщика или цифровые сервисы платформы SIMPL"
    ),
    authority: "tax",
    keywords: ["remboursement", "حساب بنكي", "compte bancaire", "dgi", "استرجاع"],
  },
  {
    id: "dgi-simpl-annulation-declaration",
    cat: "dgi",
    title: T7(
      "طلب إلغاء تصريح أودع عن طريق الخطأ عبر SIMPL",
      "Demande d'annulation d'une télédéclaration déposée par erreur sur SIMPL",
      "Application to cancel a declaration wrongly filed on SIMPL",
      "Solicitud de anulación de una declaración presentada por error en SIMPL",
      "Domanda di annullamento di una teledichiarazione presentata per errore su SIMPL",
      "Antrag auf Stornierung einer irrtümlich über SIMPL eingereichten Erklärung",
      "Заявление об отмене декларации, ошибочно поданной через SIMPL"
    ),
    desc: D7(
      "طلب يرمي إلى إلغاء تصريح أودع خطأ عبر منصة SIMPL قصد تصحيح الوضعية الجبائية.",
      "Demande visant l'annulation d'une déclaration déposée par erreur sur SIMPL afin de régulariser la situation fiscale.",
      "Application to cancel a declaration filed in error on SIMPL in order to regularise the tax position.",
      "Solicitud de anulación de una declaración presentada por error en SIMPL para regularizar la situación fiscal.",
      "Domanda di annullamento di una dichiarazione presentata per errore su SIMPL per regolarizzare la posizione.",
      "Antrag auf Stornierung einer irrtümlich über SIMPL abgegebenen Erklärung zur Bereinigung der Steuersituation.",
      "Заявление об отмене декларации, ошибочно поданной через SIMPL, для исправления налогового статуса."
    ),
    where: W7(
      "منصة SIMPL أو المديرية الجهوية للضرائب",
      "Plateforme SIMPL ou direction régionale des impôts",
      "The SIMPL platform or the regional tax directorate",
      "Plataforma SIMPL o dirección regional de impuestos",
      "Piattaforma SIMPL oppure direzione regionale delle imposte",
      "SIMPL-Plattform oder die regionale Steuerdirektion",
      "Платформа SIMPL или региональная налоговая дирекция"
    ),
    authority: "simpl",
    keywords: ["SIMPL", "إلغاء", "annulation", "télédéclaration", "dgi"],
  },

  // ─── Auto-entrepreneur ───
  {
    id: "dgi-auto-entrepreneur-declaration-trimestrielle",
    cat: "dgi",
    title: T7(
      "التصريح الثلاثي برقم معاملات المقاول الذاتي",
      "Déclaration trimestrielle du chiffre d'affaires de l'auto-entrepreneur",
      "Quarterly turnover declaration of the auto-entrepreneur",
      "Declaración trimestral del volumen de negocios del autónomo",
      "Dichiarazione trimestrale del fatturato dell'auto-imprenditore",
      "Vierteljährliche Umsatzerklärung des Auto-Entrepreneurs",
      "Квартальная декларация оборота самозанятого"
    ),
    desc: D7(
      "تصريح ثلاثي يصرح فيه المقاول الذاتي برقم معاملاته وأدائه الضريبي الموحد عن الفترة المعنية.",
      "Déclaration trimestrielle dans laquelle l'auto-entrepreneur reporte son chiffre d'affaires et verse l'impôt libératoire correspondant.",
      "Quarterly declaration in which the auto-entrepreneur reports turnover and pays the corresponding flat-rate tax.",
      "Declaración trimestral en la que el autónomo declara su volumen de negocios y abona el impuesto liberatorio.",
      "Dichiarazione trimestrale con cui l'auto-imprenditore dichiara il fatturato e versa l'imposta sostitutiva.",
      "Vierteljährliche Erklärung, in der der Auto-Entrepreneur den Umsatz meldet und die Pauschalsteuer entrichtet.",
      "Квартальная декларация, в которой самозанятый указывает оборот и уплачивает единый налог."
    ),
    where: W7(
      "بوابة المقاول الذاتي أو القباضة المختصة",
      "Portail de l'auto-entrepreneur ou recette des impôts compétente",
      "The auto-entrepreneur portal or the competent recette des impôts",
      "Portal del autónomo o recaudación de impuestos competente",
      "Portale dell'auto-imprenditore oppure riscossione delle imposte competente",
      "Portal für Selbstständige oder die zuständige Steuerkasse",
      "Портал самозанятых или компетентная налоговая касса"
    ),
    authority: "tax",
    keywords: ["auto-entrepreneur", "المقاول الذاتي", "رقم المعاملات", "chiffre d'affaires", "dgi"],
    popular: true,
  },
  {
    id: "dgi-auto-entrepreneur-sortie",
    cat: "dgi",
    title: T7(
      "طلب الخروج من نظام المقاول الذاتي",
      "Demande de sortie du régime de l'auto-entrepreneur",
      "Application to leave the auto-entrepreneur scheme",
      "Solicitud de salida del régimen de autónomo",
      "Domanda di uscita dal regime dell'auto-imprenditore",
      "Antrag auf Austritt aus dem Auto-Entrepreneur-Regime",
      "Заявление о выходе из режима самозанятого"
    ),
    desc: D7(
      "طلب يغادر بموجبه المعني بالأمر نظام المقاول الذاتي عند تجاوز السقف أو تغيير الوضعية.",
      "Demande par laquelle l'intéressé quitte le régime de l'auto-entrepreneur en cas de dépassement de plafond ou de changement de situation.",
      "Application whereby the person concerned leaves the auto-entrepreneur scheme on exceeding the ceiling or a change of status.",
      "Solicitud mediante la cual el interesado abandona el régimen de autónomo por exceso del tope o cambio de situación.",
      "Domanda con cui l'interessato esce dal regime dell'auto-imprenditore per superamento del limite o cambiamento di situazione.",
      "Antrag auf Verlassen des Auto-Entrepreneur-Regimes bei Überschreitung der Umsatzgrenze oder Statuswechsel.",
      "Заявление о выходе из режима самозанятого при превышении лимита или изменении статуса."
    ),
    where: W7(
      "بوابة المقاول الذاتي أو المديرية الجهوية للضرائب",
      "Portail de l'auto-entrepreneur ou direction régionale des impôts",
      "The auto-entrepreneur portal or the regional tax directorate",
      "Portal del autónomo o dirección regional de impuestos",
      "Portale dell'auto-imprenditore oppure direzione regionale delle imposte",
      "Portal für Selbstständige oder die regionale Steuerdirektion",
      "Портал самозанятых или региональная налоговая дирекция"
    ),
    authority: "tax",
    keywords: ["auto-entrepreneur", "الخروج", "sortie", "المقاول الذاتي", "dgi"],
  },
  {
    id: "dgi-auto-entrepreneur-attestation",
    cat: "dgi",
    title: T7(
      "شهادة التسجيل في نظام المقاول الذاتي",
      "Attestation d'inscription au régime de l'auto-entrepreneur",
      "Certificate of registration under the auto-entrepreneur scheme",
      "Certificado de inscripción en el régimen de autónomo",
      "Attestato di iscrizione al regime dell'auto-imprenditore",
      "Registrierungsbescheinigung für das Auto-Entrepreneur-Regime",
      "Справка о регистрации в режиме самозанятого"
    ),
    desc: D7(
      "شهادة تثبت تسجيل المقاول الذاتي، تطلب للاستفادة من الخدمات البنكية والإدارية المرتبطة بالنظام.",
      "Attestation justifiant l'inscription au régime, demandée pour bénéficier des services bancaires et administratifs liés au statut.",
      "Certificate proving registration under the scheme, requested to access banking and administrative services tied to the status.",
      "Certificado que acredita la inscripción en el régimen, solicitado para acceder a servicios bancarios y administrativos.",
      "Attestato che comprova l'iscrizione al regime, richiesto per fruire dei servizi bancari e amministrativi collegati.",
      "Bescheinigung über die Registrierung im Regime, beantragt für damit verbundene Bank- und Verwaltungsdienstleistungen.",
      "Справка о регистрации в режиме, требуется для доступа к банковским и административным услугам по статусу."
    ),
    where: W7(
      "تسلم عبر بوابة المقاول الذاتي أو لدى المديرية الجهوية للضرائب",
      "Délivrée via le portail de l'auto-entrepreneur ou auprès de la direction régionale des impôts",
      "Issued via the auto-entrepreneur portal or at the regional tax directorate",
      "Emitida a través del portal del autónomo o en la dirección regional de impuestos",
      "Rilasciata tramite il portale dell'auto-imprenditore o presso la direzione regionale delle imposte",
      "Ausgestellt über das Portal für Selbstständige oder bei der regionalen Steuerdirektion",
      "Выдаётся через портал самозанятых или в региональной налоговой дирекции"
    ),
    authority: "tax",
    keywords: ["auto-entrepreneur", "attestation", "شهادة", "المقاول الذاتي", "dgi"],
  },

  // ─── TVP et taxes assimilées (véhicules, TH et TSC) ───
  {
    id: "dgi-taxe-vehicules-societes",
    cat: "dgi",
    title: T7(
      "التصريح بالضريبة السنوية على سيارات الشركات",
      "Déclaration de la taxe sur les véhicules des sociétés",
      "Declaration of the tax on company vehicles",
      "Declaración del impuesto sobre vehículos de sociedades",
      "Dichiarazione dell'imposta sui veicoli delle società",
      "Erklärung der Steuer auf Gesellschaftsfahrzeuge",
      "Декларация по налогу на автомобили компаний"
    ),
    desc: D7(
      "تصريح سنوي تؤدى بمقتضاه الشركة الضريبة المفروضة على السيارات المملوكة لها أو المكتراة.",
      "Déclaration annuelle au titre de laquelle la société acquitte la taxe frappant les véhicules lui appartenant ou pris en location.",
      "Annual declaration under which a company pays the tax on vehicles it owns or leases.",
      "Declaración anual con la que la sociedad paga el impuesto sobre los vehículos de su propiedad o alquilados.",
      "Dichiarazione annuale con cui la società paga l'imposta sui veicoli di proprietà o presi in locazione.",
      "Jährliche Erklärung, mit der die Gesellschaft die Steuer auf eigene oder gemietete Fahrzeuge entrichtet.",
      "Ежегодная декларация, по которой компания уплачивает налог на принадлежащие или арендуемые автомобили."
    ),
    where: W7(
      "قباضة الضرائب التابع منها مقر الشركة أو التسديد الإلكتروني",
      "Recette des impôts du siège de la société ou télépaiement",
      "The company's recette des impôts, or e-payment",
      "Recaudación de impuestos de la sede social o telepago",
      "Riscossione delle imposte della sede sociale oppure telepagamento",
      "Steuerkasse des Firmensitzes oder elektronische Zahlung",
      "Налоговая касса по месту регистрации компании или онлайн-оплата"
    ),
    authority: "tax",
    keywords: ["taxe véhicules", "سيارات الشركات", "sociétés", "dgi"],
  },
  {
    id: "dgi-th-tsc-degrevement",
    cat: "dgi",
    title: T7(
      "طلب الإبراء من الضريبة على المساكن ورسم الخدمات الجماعية",
      "Demande de dégrèvement de la taxe d'habitation et de la taxe de services communaux",
      "Application for relief from the housing tax and communal services tax",
      "Solicitud de exención del impuesto de vivienda y la tasa de servicios comunales",
      "Domanda di sgravio della tassa di abitazione e del canone per i servizi comunali",
      "Antrag auf Erlass der Wohnsteuer und der Gemeindeabgabensteuer",
      "Заявление об отмене налога на жильё и коммунального сбора"
    ),
    desc: D7(
      "طلب يلتمس إبراء المعني بالأمر من الضريبة على المساكن ورسم الخدمات الجماعية المحتسبة عليه بصفة غير صحيحة.",
      "Demande tendant à la décharge de la taxe d'habitation et de la taxe de services communaux imputées à tort.",
      "Application seeking discharge from housing and communal services taxes wrongly charged.",
      "Solicitud de exoneración del impuesto de vivienda y de la tasa de servicios comunales aplicados indebidamente.",
      "Domanda di sgravio della tassa di abitazione e del canone comunale applicati per errore.",
      "Antrag auf Erlass der zu Unrecht festgesetzten Wohn- und Gemeindeabgabensteuer.",
      "Заявление об отмене ошибочно начисленных налога на жильё и коммунального сбора."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها العقار",
      "Section ou recette des impôts de la situation de l'immeuble",
      "The tax office or recette des impôts for the property's location",
      "Oficina o recaudación de impuestos de la ubicación del inmueble",
      "Ufficio o riscossione delle imposte del luogo dell'immobile",
      "Steueramt oder Steuerkasse am Belegenheitsort des Gebäudes",
      "Налоговый орган или касса по месту нахождения объекта"
    ),
    authority: "tax",
    keywords: ["TH", "TSC", "taxe d'habitation", "الضريبة على المساكن", "dégrèvement", "dgi"],
  },
  {
    id: "dgi-th-tsc-reclamation",
    cat: "dgi",
    title: T7(
      "تظلم بشأن الضريبة على المساكن ورسم الخدمات الجماعية",
      "Réclamation relative à la taxe d'habitation et à la taxe de services communaux",
      "Claim relating to the housing and communal services taxes",
      "Reclamación sobre el impuesto de vivienda y la tasa de servicios comunales",
      "Ricorso relativo alla tassa di abitazione e al canone comunale",
      "Einspruch gegen die Wohnsteuer und die Gemeindeabgabensteuer",
      "Возражение по налогу на жильё и коммунальному сбору"
    ),
    desc: D7(
      "تظلم يقدمه المكلف لمراجعة عناصر احتساب الضريبة على المساكن ورسم الخدمات الجماعية.",
      "Réclamation du contribuable portant sur les éléments de calcul de la taxe d'habitation et de la taxe de services communaux.",
      "Taxpayer's claim concerning the computation elements of the housing and communal services taxes.",
      "Reclamación del contribuyente sobre los elementos de cálculo del impuesto de vivienda y la tasa comunal.",
      "Ricorso del contribuente sugli elementi di calcolo della tassa di abitazione e del canone comunale.",
      "Einspruch des Steuerpflichtigen gegen die Berechnungselemente der Wohn- und Gemeindeabgabensteuer.",
      "Возражение налогоплательщика по элементам расчёта налога на жильё и коммунального сбора."
    ),
    where: W7(
      "المديرية الجهوية للضرائب أو القسم المختص داخل الأجل القانوني",
      "Direction régionale des impôts ou section compétente, dans le délai légal",
      "The regional tax directorate or its competent section, within the legal deadline",
      "Dirección regional de impuestos o sección competente, dentro del plazo legal",
      "Direzione regionale delle imposte o sezione competente, entro il termine legale",
      "Regionale Steuerdirektion oder zuständige Abteilung, innerhalb der gesetzlichen Frist",
      "Региональная дирекция или компетентный отдел в установленный срок"
    ),
    authority: "tax",
    keywords: ["TH", "TSC", "réclamation", "تظلم", "dgi"],
  },

  // ─── Vignette et droit de timbre ───
  {
    id: "dgi-vignette-automobile",
    cat: "dgi",
    title: T7(
      "طلب الوينيت (الضريبة السنوية على السيارات)",
      "Demande de la vignette automobile",
      "Vehicle tax sticker (vignette) application",
      "Solicitud de la viñeta (impuesto anual sobre vehículos)",
      "Domanda della vignetta automobilistica",
      "Antrag auf die Fahrzeugsteuermarke (Vignette)",
      "Заявление на получение виньетки (налога на автомобиль)"
    ),
    desc: D7(
      "طلب الحصول على الوينيت السنوية التي تثبت أداء الضريبة على السيارات قبل جولانها على الطرق.",
      "Demande d'obtention de la vignette annuelle attestant le paiement de la taxe sur les véhicules avant la circulation.",
      "Application for the annual sticker certifying payment of the vehicle tax before driving.",
      "Solicitud de la viñeta anual que acredita el pago del impuesto sobre vehículos antes de circular.",
      "Domanda della vignetta annuale che certifica il pagamento della tassa automobilistica prima della circolazione.",
      "Antrag auf die Jahresmarke, die die Zahlung der Fahrzeugsteuer vor der Teilnahme am Verkehr nachweist.",
      "Заявление на ежегодную виньетку, подтверждающую уплату налога на автомобиль перед выездом."
    ),
    where: W7(
      "قباضة الضرائب أو مواقع التسديد المعتمدة أو الخدمات الرقمية للمديرية العامة للضرائب",
      "Recette des impôts, guichets de paiement agréés ou services numériques de la DGI",
      "The recette des impôts, approved payment outlets, or the DGI's digital services",
      "Recaudación de impuestos, puntos de pago autorizados o servicios digitales de la DGI",
      "Riscossione delle imposte, sportelli di pagamento autorizzati oppure servizi digitali della DGI",
      "Steuerkasse, zugelassene Zahlstellen oder die digitalen Dienste der DGI",
      "Налоговая касса, уполномоченные платёжные пункты или цифровые сервисы DGI"
    ),
    authority: "tax",
    keywords: ["vignette", "الوينيت", "taxe sur les véhicules", "dgi", "سيارة"],
  },
  {
    id: "dgi-timbre-dimension",
    cat: "dgi",
    title: T7(
      "طلب التمبر ذي المقاس (الطابع ذو الأبعاد)",
      "Demande de timbre de dimension",
      "Dimensional stamp duty application",
      "Solicitud de timbre de dimensión",
      "Domanda di bollo dimensionale",
      "Antrag auf Bemessungsstempel (Steuermarke)",
      "Заявление о гербовом сборе с размера"
    ),
    desc: D7(
      "طلب أداء حق التمبر النسبي المفروض على المحررات والعقود الخاضعة للطابع ذي المقاس.",
      "Demande d'acquittement du droit de timbre proportionnel dû sur les écrits et actes soumis au timbre de dimension.",
      "Application to pay the proportional stamp duty due on writings and deeds subject to the dimensional stamp.",
      "Solicitud de pago del timbre proporcional debido sobre documentos y escrituras sujetos al timbre de dimensión.",
      "Domanda di pagamento dell'imposta di bollo proporzionale dovuta sugli atti soggetti a bollo dimensionale.",
      "Antrag auf Entrichtung der proportionalen Stempelsteuer für dem Bemessungsstempel unterliegende Urkunden.",
      "Заявление об уплате пропорционального гербового сбора с документов, подлежащих обложению по размеру."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر عند تقديم المحرر لأداء حقه",
      "Service de l'enregistrement et du timbre lors de la présentation de l'écrit à timbrer",
      "The registration and stamp office when presenting the document for stamping",
      "Oficina de registro y timbre al presentar el documento para su timbrado",
      "Ufficio del registro e del bollo alla presentazione dell'atto da bollare",
      "Registrierungs- und Stempelamt bei Vorlage des zu stempelnden Schriftstücks",
      "Регистрационно-гербовый отдел при предъявлении документа для маркировки"
    ),
    authority: "tax",
    keywords: ["timbre de dimension", "تمبر", "droit de timbre", "dgi"],
  },
  {
    id: "dgi-quittance-droits-timbre",
    cat: "dgi",
    title: T7(
      "طلب وصل أداء رسوم التسجيل والتمبر",
      "Demande de quittance des droits d'enregistrement et de timbre",
      "Request for a receipt of registration and stamp duties",
      "Solicitud de recibo de los derechos de registro y timbre",
      "Domanda di quietanza dei diritti di registrazione e di bollo",
      "Antrag auf Quittung der Registrierungs- und Stempelgebühren",
      "Заявление о квитанции по регистрационным и гербовым пошлинам"
    ),
    desc: D7(
      "طلب تسليم وصل رسمي يثبت أداء رسوم التسجيل أو التمبر المستحقة على عقد معين.",
      "Demande de délivrance d'une quittance officielle attestant le paiement des droits d'enregistrement ou de timbre d'un acte.",
      "Request for an official receipt attesting payment of the registration or stamp duties on a deed.",
      "Solicitud de un recibo oficial que acredite el pago de los derechos de registro o timbre de una escritura.",
      "Domanda di rilascio di una quietanza ufficiale comprovante il pagamento dei diritti di un atto.",
      "Antrag auf eine amtliche Quittung über die Zahlung der Registrierungs- oder Stempelgebühren einer Urkunde.",
      "Заявление о выдаче официальной квитанции, подтверждающей уплату пошлин по документу."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر أو القباضة التي تلقت الأداء",
      "Service de l'enregistrement et du timbre ou recette ayant encaissé le paiement",
      "The registration and stamp office, or the recette that received the payment",
      "Oficina de registro y timbre o recaudación que recibió el pago",
      "Ufficio del registro e del bollo oppure riscossione che ha incassato il pagamento",
      "Registrierungs- und Stempelamt oder die kassierende Steuerkasse",
      "Регистрационно-гербовый отдел или касса, принявшая платёж"
    ),
    authority: "tax",
    keywords: ["quittance", "وصل", "enregistrement", "timbre", "dgi"],
  },
  {
    id: "dgi-timbre-restitution",
    cat: "dgi",
    title: T7(
      "طلب استرجاع حق التمبر المؤدى زيادة",
      "Demande de restitution du droit de timbre payé à tort",
      "Application for refund of stamp duty paid in error",
      "Solicitud de devolución del timbre pagado indebidamente",
      "Domanda di restituzione del bollo pagato per errore",
      "Antrag auf Erstattung der zu Unrecht gezahlten Stempelsteuer",
      "Заявление о возврате ошибочно уплаченного гербового сбора"
    ),
    desc: D7(
      "طلب استرجاع مبالغ التمبر المؤداة دون موجب قانوني أو بصفة زائدة عن المستحق.",
      "Demande de restitution des sommes de timbre versées sans cause légale ou au-delà du montant dû.",
      "Application for refund of stamp amounts paid without legal cause or beyond the amount due.",
      "Solicitud de devolución de los importes de timbre pagados sin causa legal o en exceso.",
      "Domanda di restituzione delle somme di bollo versate senza causa legale o in eccedenza.",
      "Antrag auf Erstattung ohne Rechtsgrund oder übermäßig gezahlter Stempelsteuerbeträge.",
      "Заявление о возврате сумм гербового сбора, уплаченных без правовых оснований или сверх меры."
    ),
    where: W7(
      "مصلحة التسجيل والتمبر أو القباضة المختصة مع إثبات الأداء",
      "Service de l'enregistrement et du timbre ou recette compétente, avec preuve du paiement",
      "The registration and stamp office or competent recette, with proof of payment",
      "Oficina de registro y timbre o recaudación competente, con justificante del pago",
      "Ufficio del registro e del bollo oppure riscossione competente, con prova del versamento",
      "Registrierungs- und Stempelamt oder zuständige Steuerkasse, mit Zahlungsnachweis",
      "Регистрационно-гербовый отдел или компетентная касса с подтверждением оплаты"
    ),
    authority: "tax",
    keywords: ["timbre", "استرجاع", "restitution", "dgi", "تمبر"],
  },

  // ─── TVA immobilière et travaux ───
  {
    id: "dgi-tva-attestation-prise-en-charge-acquisition",
    cat: "dgi",
    title: T7(
      "شهادة تحمل الضريبة على القيمة المضافة في اقتناء عقاري",
      "Attestation de prise en charge de la TVA sur une acquisition immobilière",
      "Certificate of VAT assumption on a property acquisition",
      "Certificado de asunción del IVA en una adquisición inmobiliaria",
      "Attestato di presa in carico dell'IVA su un acquisto immobiliare",
      "Bescheinigung der Mehrwertsteuer-Übernahme bei einem Immobilienkauf",
      "Справка о принятии НДС при приобретении недвижимости"
    ),
    desc: D7(
      "شهادة تثبت تحمل المشتري أو المكلف للضريبة على القيمة المضافة المستحقة عن عملية اقتناء عقاري.",
      "Attestation constatant la prise en charge par l'acquéreur de la TVA exigible sur une opération d'acquisition immobilière.",
      "Certificate evidencing the buyer's assumption of the VAT due on a property acquisition.",
      "Certificado que acredita la asunción por el comprador del IVA exigible en una adquisición inmobiliaria.",
      "Attestato che documenta la presa in carico da parte dell'acquirente dell'IVA dovuta su un acquisto immobiliare.",
      "Bescheinigung über die Übernahme der bei einem Immobilienerwerb geschuldeten Mehrwertsteuer durch den Käufer.",
      "Справка о принятии покупателем НДС, причитающегося при приобретении недвижимости."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع منها المكلف أو مصلحة التسجيل عند توثيق العقد",
      "Service du recouvrement du redevable ou service de l'enregistrement lors de l'acte",
      "The taxpayer's collection office, or the registration office when the deed is signed",
      "Oficina de recaudación del contribuyente u oficina de registro al otorgar la escritura",
      "Ufficio riscossione del contribuente oppure ufficio del registro alla stipula dell'atto",
      "Vollzugsstelle des Pflichtigen oder das Registrierungsamt bei der Beurkundung",
      "Отдел взыскания налогоплательщика либо регистрационный отдел при подписании договора"
    ),
    authority: "tax",
    keywords: ["TVA", "اقتناء عقاري", "acquisition immobilière", "attestation", "dgi"],
  },
  {
    id: "dgi-tva-travaux-rehabilitation",
    cat: "dgi",
    title: T7(
      "طلب تحمل الضريبة على القيمة المضافة عن أشغال التأهيل العقاري",
      "Demande de prise en charge de la TVA sur les travaux de réhabilitation",
      "Application for VAT coverage on rehabilitation works",
      "Solicitud de asunción del IVA en obras de rehabilitación",
      "Domanda di presa in carico dell'IVA sui lavori di riabilitazione",
      "Antrag auf Übernahme der Mehrwertsteuer für Sanierungsarbeiten",
      "Заявление о принятии НДС по работам по реконструкции"
    ),
    desc: D7(
      "طلب يرمي إلى تحمل الضريبة على القيمة المضافة المضمنة في فواتير أشغال تأهيل العقارات القديمة.",
      "Demande visant la prise en charge de la TVA facturée sur les travaux de réhabilitation des logements anciens.",
      "Application seeking coverage of the VAT invoiced on rehabilitation works on old housing.",
      "Solicitud dirigida a la asunción del IVA facturado en las obras de rehabilitación de viviendas antiguas.",
      "Domanda volta alla presa in carico dell'IVA fatturata sui lavori di riabilitazione degli alloggi esistenti.",
      "Antrag auf Übernahme der in Rechnungen für Sanierungsarbeiten alter Wohngebäude ausgewiesenen Mehrwertsteuer.",
      "Заявление о принятии НДС, включённого в счета за работы по реконструкции старого жилья."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل أو مصلحة التسجيل التابع منها العقار مع الفواتير المثبتة",
      "Service du recouvrement ou service de l'enregistrement du bien, avec les factures justificatives",
      "The collection or registration office for the property, with the supporting invoices",
      "Oficina de recaudación o registro del inmueble, con las facturas justificativas",
      "Ufficio riscossione o ufficio del registro dell'immobile, con le fatture di giustificazione",
      "Vollzugs- oder Registrierungsstelle des Objekts, zusammen mit den Belegrechnungen",
      "Отдел взыскания или регистрации по объекту со подтверждающими счетами"
    ),
    authority: "tax",
    keywords: ["TVA", "travaux", "أشغال التأهيل", "réhabilitation", "dgi"],
  },
  {
    id: "dgi-tva-attestation-promoteur",
    cat: "dgi",
    title: T7(
      "شهادة الضريبة على القيمة المضافة لفائدة المنعش العقاري",
      "Attestation de TVA pour le promoteur immobilier",
      "VAT certificate for the property developer",
      "Certificado de IVA para el promotor inmobiliario",
      "Attestato IVA per il promotore immobiliare",
      "Mehrwertsteuer-Bescheinigung für den Bauträger",
      "Справка по НДС для девелопера"
    ),
    desc: D7(
      "شهادة توجه للمنعش العقاري تثبت وضعيته من حيث الضريبة على القيمة المضافة في عملياته.",
      "Attestation délivrée au promoteur immobilier constatant sa situation au regard de la TVA sur ses opérations.",
      "Certificate issued to a property developer confirming his VAT position on his operations.",
      "Certificado emitido al promotor inmobiliario que acredita su situación frente al IVA en sus operaciones.",
      "Attestato rilasciato al promotore immobiliare comprovante la sua posizione IVA sulle operazioni.",
      "Dem Bauträger erteilte Bescheinigung über seine Mehrwertsteuerstellung bei seinen Vorhaben.",
      "Справка для девелопера, подтверждающая его статус по НДС в операциях."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع منها المنعش العقاري",
      "Service du recouvrement dont relève le promoteur immobilier",
      "The collection office covering the property developer",
      "Oficina de recaudación a la que pertenece el promotor inmobiliario",
      "Ufficio riscossione da cui dipende il promotore immobiliare",
      "Die für den Bauträger zuständige Vollzugsstelle",
      "Отдел взыскания, обслуживающий девелопера"
    ),
    authority: "tax",
    keywords: ["TVA", "promoteur", "منعش عقاري", "attestation", "dgi"],
  },
  {
    id: "dgi-tva-option-promotion-immobiliere",
    cat: "dgi",
    title: T7(
      "طلب اختيار خضوع عمليات الإنعاش العقاري للضريبة على القيمة المضافة",
      "Option pour l'assujettissement des opérations de promotion immobilière à la TVA",
      "Option to subject property-development operations to VAT",
      "Opción por la sujeción de las operaciones de promoción inmobiliaria al IVA",
      "Opzione per l'assoggettamento delle operazioni di promozione immobiliare all'IVA",
      "Option zur Unterstellung der Bauträgertätigkeit unter die Mehrwertsteuer",
      "Опция о включении девелоперских операций в НДС"
    ),
    desc: D7(
      "طلب يختار بموجبه المنعش العقاري إخضاع عملياته للضريبة على القيمة المضافة بدل رسوم التسجيل.",
      "Demande par laquelle le promoteur choisit de soumettre ses opérations à la TVA plutôt qu'aux droits d'enregistrement.",
      "Application whereby a developer opts to bring his operations under VAT instead of registration duties.",
      "Solicitud mediante la cual el promotor elige someter sus operaciones al IVA en lugar de a los derechos de registro.",
      "Domanda con cui il promotore sceglie di assoggettare le operazioni all'IVA invece che ai diritti di registrazione.",
      "Antrag, mit dem der Bauträger seine Vorhaben der Mehrwertsteuer statt der Registrierungsgebühren unterstellt.",
      "Заявление, по которому девелопер выбирает обложение операций НДС вместо регистрационных пошлин."
    ),
    where: W7(
      "مصلحة الوعاء والتحصيل التابع منها المنعش مع بيان البرامج العقارية المعنية",
      "Service du recouvrement du promoteur, avec indication des programmes immobiliers concernés",
      "The developer's collection office, with details of the property programmes concerned",
      "Oficina de recaudación del promotor, con indicación de los programas inmobiliarios afectados",
      "Ufficio riscossione del promotore, con indicazione dei programmi immobiliari interessati",
      "Vollzugsstelle des Bauträgers, unter Angabe der betroffenen Bauprojekte",
      "Отдел взыскания девелопера с указанием охваченных строительных программ"
    ),
    authority: "tax",
    keywords: ["TVA", "promotion immobilière", "إنعاش عقاري", "option", "dgi"],
  },
  {
    id: "dgi-tva-attestation-non-assujettissement",
    cat: "dgi",
    title: T7(
      "شهادة عدم الخضوع للضريبة على القيمة المضافة في التصرفات العقارية",
      "Attestation de non-assujettissement à la TVA pour une vente immobilière",
      "Certificate of non-liability to VAT on a property sale",
      "Certificado de no sujeción al IVA en una venta inmobiliaria",
      "Attestato di non assoggettamento all'IVA per una vendita immobiliare",
      "Bescheinigung der Nichtsteuerpflicht (Mehrwertsteuer) bei einem Immobilienverkauf",
      "Справка о необлагаемости НДС при продаже недвижимости"
    ),
    desc: D7(
      "شهادة تثبت أن تصرفا عقاريا معينا لا يدخل في مجال الضريبة على القيمة المضافة.",
      "Attestation constatant qu'une cession immobilière déterminée n'entre pas dans le champ de la TVA.",
      "Certificate stating that a given property transfer falls outside the scope of VAT.",
      "Certificado que acredita que una enajenación inmobiliaria determinada queda fuera del ámbito del IVA.",
      "Attestato che certifica che una determinata cessione immobiliare è fuori dal campo IVA.",
      "Bescheinigung, dass eine bestimmte Grundstücksübertragung nicht in den Anwendungsbereich der Mehrwertsteuer fällt.",
      "Справка о том, что конкретная сделка с недвижимостью не входит в сферу НДС."
    ),
    where: W7(
      "مصلحة التسجيل أو مصلحة الوعاء والتحصيل التابع منها البائع",
      "Service de l'enregistrement ou service du recouvrement du vendeur",
      "The registration office or the seller's collection office",
      "Oficina de registro o de recaudación del vendedor",
      "Ufficio del registro oppure ufficio riscossione del venditore",
      "Registrierungsamt oder Vollzugsstelle des Verkäufers",
      "Регистрационный отдел или отдел взыскания продавца"
    ),
    authority: "tax",
    keywords: ["TVA", "non-assujettissement", "عدم الخضوع", "vente immobilière", "dgi"],
  },

  // ─── Divers ───
  {
    id: "dgi-changement-regime-imposition",
    cat: "dgi",
    title: T7(
      "طلب تغيير نظام الفرض الضريبي",
      "Demande de changement de régime d'imposition",
      "Application to change tax regime",
      "Solicitud de cambio de régimen fiscal",
      "Domanda di cambiamento del regime fiscale",
      "Antrag auf Wechsel des Besteuerungsverfahrens",
      "Заявление о смене налогового режима"
    ),
    desc: D7(
      "طلب يلتمس فيه الملزم الانتقال بين أنظمة الفرض الضريبي المعتمدة حسب طبيعة نشاطه.",
      "Demande sollicitant le passage d'un régime d'imposition à un autre selon la nature de l'activité exercée.",
      "Application seeking to move from one tax regime to another according to the nature of the activity.",
      "Solicitud de paso de un régimen fiscal a otro según la naturaleza de la actividad.",
      "Domanda di passaggio da un regime fiscale a un altro secondo la natura dell'attività.",
      "Antrag auf Übergang von einem Besteuerungsverfahren in ein anderes je nach Art der Tätigkeit.",
      "Заявление о переходе от одного налогового режима к другому в зависимости от характера деятельности."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها الملزم مع موافقة الشركاء عند الاقتضاء",
      "Section ou recette des impôts du redevable, avec accord des associés le cas échéant",
      "The taxpayer's tax office or recette des impôts, with partners' consent where applicable",
      "Oficina o recaudación de impuestos del contribuyente, con consentimiento de los socios si procede",
      "Ufficio o riscossione delle imposte del contribuente, con consenso dei soci ove occorra",
      "Steueramt oder Steuerkasse des Pflichtigen, gegebenenfalls mit Zustimmung der Gesellschafter",
      "Налоговый орган или касса налогоплательщика, при необходимости с согласия партнёров"
    ),
    authority: "tax",
    keywords: ["régime d'imposition", "نظام الضريبة", "changement", "dgi"],
  },
  {
    id: "dgi-option-is",
    cat: "dgi",
    title: T7(
      "طلب اختيار الخضوع للضريبة على الشركات",
      "Option pour l'assujettissement à l'impôt sur les sociétés",
      "Option to become subject to corporate tax",
      "Opción por la sujeción al impuesto sobre sociedades",
      "Opzione per l'assoggettamento all'imposta sulle società",
      "Option zur Unterstellung unter die Körperschaftsteuer",
      "Опция о переходе на налог на прибыль"
    ),
    desc: D7(
      "طلب يختار بموجبه فريق من الشركات غير الخاضعة للضريبة على الشركات أن يخضع لها اختيارا.",
      "Demande par laquelle certaines sociétés non soumises à l'IS optent pour y être assujetties.",
      "Application whereby certain companies not normally subject to corporate tax opt into it.",
      "Solicitud mediante la cual determinadas sociedades no sujetas al impuesto optan por someterse a él.",
      "Domanda con cui talune società non soggette all'imposta optano per assoggettarsi ad essa.",
      "Antrag, mit dem bestimmte nicht körperschaftsteuerpflichtige Gesellschaften deren Unterstellung wählen.",
      "Заявление, по которому некоторые компании, обычно не облагаемые налогом на прибыль, добровольно переходят на него."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها مقر الشركة",
      "Section ou recette des impôts du siège de la société",
      "The tax office or recette des impôts for the company's head office",
      "Oficina o recaudación de impuestos de la sede social",
      "Ufficio o riscossione delle imposte della sede sociale",
      "Steueramt oder Steuerkasse des Gesellschaftssitzes",
      "Налоговый орган или касса по месту регистрации компании"
    ),
    authority: "tax",
    keywords: ["IS", "option", "اختيار", "impôt sur les sociétés", "dgi"],
  },
  {
    id: "dgi-renseignements-fiscaux",
    cat: "dgi",
    title: T7(
      "طلب معلومات جبائية",
      "Demande de renseignements fiscaux",
      "Request for tax information",
      "Solicitud de información fiscal",
      "Domanda di informazioni fiscali",
      "Anfrage zur steuerlichen Auskunft",
      "Запрос налоговой информации"
    ),
    desc: D7(
      "طلب يوجهه المعني بالأمر للحصول على توضيحات حول وضعيته الجبائية أو مسطرة معينة.",
      "Demande adressée en vue d'obtenir des éclaircissements sur sa situation fiscale ou sur une procédure donnée.",
      "Request sent to obtain clarification on one's tax position or on a given procedure.",
      "Solicitud presentada para obtener aclaraciones sobre la situación fiscal o un procedimiento concreto.",
      "Domanda presentata per ottenere chiarimenti sulla propria posizione fiscale o su una procedura.",
      "Anfrage zur Klärung der eigenen Steuersituation oder eines bestimmten Verfahrens.",
      "Запрос разъяснений о собственном налоговом статусе или конкретной процедуре."
    ),
    where: W7(
      "مصلحة الضرائب أو قباضة الضرائب التابع منها المعني بالأمر",
      "Section ou recette des impôts dont relève le demandeur",
      "The tax office or recette des impôts covering the applicant",
      "Oficina o recaudación de impuestos a la que pertenece el solicitante",
      "Ufficio o riscossione delle imposte da cui dipende il richiedente",
      "Steueramt oder zuständige Steuerkasse des Antragstellers",
      "Налоговый орган или касса, обслуживающие заявителя"
    ),
    authority: "tax",
    keywords: ["renseignements", "معلومات جبائية", "information", "dgi"],
  },
  {
    id: "dgi-transfert-dossier-recettes",
    cat: "dgi",
    title: T7(
      "طلب تحويل الملف الجبائي بين القباضات",
      "Demande de transfert de dossier entre recettes des impôts",
      "Application to transfer a file between recettes des impôts",
      "Solicitud de traslado del expediente entre recaudaciones de impuestos",
      "Domanda di trasferimento del fascicolo tra riscossioni delle imposte",
      "Antrag auf Übermittlung der Akte zwischen Steuerkassen",
      "Заявление о передаче дела между налоговыми кассами"
    ),
    desc: D7(
      "طلب يحول بموجبه الملف الجبائي للملزم من قباضة إلى أخرى عند تغيير مقر النشاط أو السكنى.",
      "Demande de transfert du dossier fiscal d'une recette à une autre suite au changement d'adresse d'activité ou de résidence.",
      "Application to move a tax file from one recette to another after a change of business or home address.",
      "Solicitud de traslado del expediente fiscal de una recaudación a otra tras un cambio de dirección.",
      "Domanda di trasferimento del fascicolo fiscale da una riscossione a un'altra dopo il cambio di indirizzo.",
      "Antrag auf Überleitung der Steuerakte von einer Kasse zur anderen nach Adresswechsel.",
      "Заявление о переносе налогового дела из одной кассы в другую после смены адреса."
    ),
    where: W7(
      "يودع الطلب لدى القباضة الأصلية التي تحيله على القباضة الجديدة",
      "À déposer auprès de la recette d'origine, qui le transmet à la nouvelle recette",
      "To be filed with the original recette, which forwards it to the new one",
      "Se presenta en la recaudación de origen, que lo remite a la nueva recaudación",
      "Da presentare alla riscossione d'origine, che lo trasmette alla nuova riscossione",
      "Bei der ursprünglichen Steuerkasse einzureichen, die es an die neue Kasse weiterleitet",
      "Подаётся в исходную кассу, которая пересылает его в новую"
    ),
    authority: "tax",
    keywords: ["transfert", "تحويل الملف", "recette des impôts", "dgi"],
  },
  {
    id: "dgi-agrement-fiscal-investissement",
    cat: "dgi",
    title: T7(
      "طلب الامتياز الجبائي لفائدة الاستثمار",
      "Demande d'agrément fiscal pour avantages liés à l'investissement",
      "Application for tax approval for investment incentives",
      "Solicitud de homologación fiscal para ventajas de inversión",
      "Domanda di autorizzazione fiscale per i vantaggi legati all'investimento",
      "Antrag auf steuerliche Genehmigung für Investitionsvergünstigungen",
      "Заявление о налоговом одобрении инвестиционных льгот"
    ),
    desc: D7(
      "طلب يقدم للحصول على الامتياز المطلوب للاستفادة من نظام جبائي تفضيلي مرتبط بمشروع استثماري.",
      "Demande en vue d'obtenir l'agrément requis pour bénéficier d'un régime fiscal préférentiel lié à un projet d'investissement.",
      "Application to obtain the approval required for a preferential tax regime tied to an investment project.",
      "Solicitud para obtener la homologación requerida para un régimen fiscal preferencial vinculado a un proyecto de inversión.",
      "Domanda per ottenere l'autorizzazione richiesta ai fini di un regime fiscale preferenziale legato a un progetto di investimento.",
      "Antrag auf die für ein präferentielles Steuersystem im Zusammenhang mit einem Investitionsprojekt erforderliche Genehmigung.",
      "Заявление о получении одобрения для льготного налогового режима, связанного с инвестиционным проектом."
    ),
    where: W7(
      "تودع لدى المديرية العامة للضرائب بعد إيداع المشروع لدى المركز الجهوي للاستثمار",
      "À déposer auprès de la DGI après enregistrement du projet auprès du Centre Régional d'Investissement",
      "To be filed with the DGI after the project is registered with the Regional Investment Centre",
      "Se presenta ante la DGI tras registrar el proyecto en el Centro Regional de Inversión",
      "Da presentare alla DGI dopo la registrazione del progetto presso il Centro Regionale per gli Investimenti",
      "Nach Projektregistrierung beim regionalen Investitionszentrum bei der DGI einzureichen",
      "Подаётся в DGI после регистрации проекта в региональном инвестиционном центре"
    ),
    authority: "tax",
    keywords: ["agrément", "امتياز جبائي", "investissement", "CRI", "dgi"],
  },
];
