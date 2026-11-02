// Business & invoicing forms — invoices, quotes, orders, company
// registers, self-employment and HR papers. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsMuqawalat: DocumentItem[] = [
  // ─── الفواتير · Factures ───
  {
    id: "mq-fatoura-tva-arabiya",
    cat: "muqawalat",
    title: T7(
      "نموذج فاتورة بالعربية (مع الضريبة على القيمة المضافة)",
      "Modèle de facture en arabe (avec TVA)",
      "Invoice template in Arabic (with VAT)",
      "Modelo de factura en árabe (con IVA)",
      "Modello di fattura in arabo (con IVA)",
      "Rechnungsvorlage auf Arabisch (mit MwSt)",
      "Шаблон счёта на арабском (с НДС)"
    ),
    desc: D7(
      "فاتورة تجارية بالعربية تحسب الضريبة على القيمة المضافة وفق نموذج المديرية العامة للضرائب.",
      "Facture commerciale en arabe appliquant la TVA selon le modèle de la Direction Générale des Impôts.",
      "Commercial invoice in Arabic applying VAT per the DGI model.",
      "Factura comercial en árabe que aplica el IVA según el modelo de la DGI.",
      "Fattura commerciale in arabo con applicazione dell'IVA secondo il modello della DGI.",
      "Geschäftsrechnung auf Arabisch mit MwSt nach dem Muster der DGI.",
      "Коммерческий счёт на арабском с НДС по образцу DGI."
    ),
    where: W7(
      "تصدر من المقاولة وتقدم للمكلف أو الزبون مع الاحتفاظ بنسخة للتصريح الضريبي",
      "Émise par l'entreprise et remise au client, une copie étant conservée pour la déclaration fiscale",
      "Issued by the business and given to the client, a copy kept for the tax filing",
      "Emitida por la empresa y entregada al cliente, conservando copia para la declaración fiscal",
      "Emessa dall'azienda e consegnata al cliente, con copia per la dichiarazione fiscale",
      "Vom Unternehmen ausgestellt und dem Kunden übergeben, Kopie für die Steuererklärung",
      "Выставляется компанией клиенту, копия хранится для налоговой отчётности"
    ),
    authority: "tax",
    keywords: ["فاتورة", "facture", "invoice", "TVA", "ضريبة القيمة المضافة", "نموذج"],
    popular: true,
  },
  {
    id: "mq-fatoura-bidun-tva",
    cat: "muqawalat",
    title: T7(
      "فاتورة دون ضريبة القيمة المضافة (معفاة)",
      "Facture sans TVA (exonérée)",
      "Invoice without VAT (exempt)",
      "Factura sin IVA (exenta)",
      "Fattura senza IVA (esente)",
      "Rechnung ohne MwSt (befreit)",
      "Счёт без НДС (освобождён)"
    ),
    desc: D7(
      "فاتورة للأنشطة المعفاة من الضريبة على القيمة المضافة مع الإشارة إلى مرجع الإعفاء.",
      "Facture destinée aux activités exonérées de TVA, mentionnant la référence légale de l'exonération.",
      "Invoice for activities exempt from VAT, stating the legal reference of the exemption.",
      "Factura para actividades exentas de IVA, con mención de la referencia legal de la exención.",
      "Fattura per attività esenti da IVA, con indicazione del riferimento normativo dell'esenzione.",
      "Rechnung für mehrwertsteuerbefreite Tätigkeiten mit Angabe der gesetzlichen Befreiungsgrundlage.",
      "Счёт для деятельности, освобождённой от НДС, с указанием правового основания освобождения."
    ),
    where: W7(
      "تصدرها المقاولة المعفاة وعليها عبارة الضريبة غير المطبقة مع الاحتفاظ بنسخة محاسبية.",
      "Émise par l'entreprise exonérée avec la mention « TVA non applicable », une copie étant conservée pour la comptabilité.",
      "Issued by the exempt business bearing the mention 'VAT not applicable', a copy kept for accounting.",
      "Emitida por la empresa exenta con la mención «IVA no aplicable», conservando copia para contabilidad.",
      "Emessa dall'azienda esente con la dicitura «IVA non applicabile», con copia per la contabilità.",
      "Vom befreiten Unternehmen mit dem Vermerk „MwSt nicht anwendbar“ ausgestellt, Kopie für die Buchhaltung.",
      "Выставляется освобождённой компанией с пометкой «НДС не применяется», копия хранится для бухгалтерии."
    ),
    authority: "tax",
    keywords: ["فاتورة", "إعفاء", "facture sans TVA", "exonérée", "exempt invoice"],
  },
  {
    id: "mq-fatoura-proforma",
    cat: "muqawalat",
    title: T7(
      "فاتورة أولية (بروفورما)",
      "Facture proforma",
      "Proforma invoice",
      "Factura proforma",
      "Fattura proforma",
      "Proforma-Rechnung",
      "Проформа-счёт"
    ),
    desc: D7(
      "وثيقة تقديرية تبين قيمة السلع أو الخدمات لطلبات العروض والمعاملات الجمركية أو طلب التسبيق.",
      "Document provisoire indiquant la valeur des marchandises ou services pour les appels d'offres, la douane ou une demande d'acompte.",
      "Provisional document stating the value of goods or services for tenders, customs or advance-payment requests.",
      "Documento provisional que indica el valor de bienes o servicios para licitaciones, aduana o anticipos.",
      "Documento provvisorio che indica il valore di beni o servizi per gare, dogana o richieste di acconto.",
      "Vorläufiges Dokument mit dem Wert von Waren oder Dienstleistungen für Ausschreibungen, Zoll oder Anzahlungen.",
      "Предварительный документ с указанием стоимости товаров или услуг для тендеров, таможни или авансов."
    ),
    where: W7(
      "يعدها البائع لفائدة الزبون دون قيد محاسبي ولا تعتبر فاتورة نهائية.",
      "Préparée par le vendeur à l'attention du client, sans enregistrement comptable et sans valeur de facture définitive.",
      "Prepared by the seller for the client, with no accounting entry and no final invoice value.",
      "Preparada por el vendedor para el cliente, sin asiento contable ni valor de factura definitiva.",
      "Preparata dal venditore per il cliente, senza registrazione contabile né valore di fattura definitiva.",
      "Vom Verkäufer für den Kunden erstellt, ohne Buchungseintrag und ohne endgültigen Rechnungswert.",
      "Готовится продавцом для клиента, без бухгалтерской записи и без силы окончательного счёта."
    ),
    authority: "tax",
    keywords: ["فاتورة أولية", "proforma", "proforma invoice", "تقديري"],
    popular: true,
  },
  {
    id: "mq-fatoura-avoir",
    cat: "muqawalat",
    title: T7(
      "فاتورة إرجاع (فاتورة دائنة)",
      "Facture d'avoir",
      "Credit note (credit invoice)",
      "Factura rectificativa (nota de crédito)",
      "Nota di credito",
      "Gutschrift (Korrekturrechnung)",
      "Кредит-нота (сторно-счёт)"
    ),
    desc: D7(
      "فاتورة تصحح أو تلغي فاتورة سابقة وترجع المبالغ مع تسوية الضريبة على القيمة المضافة.",
      "Facture rectificative qui annule ou corrige une facture antérieure et restitue les montants avec régularisation de la TVA.",
      "Corrective invoice cancelling or amending a previous invoice and refunding amounts with VAT adjustment.",
      "Factura correctiva que anula o modifica una factura anterior y devuelve importes con ajuste del IVA.",
      "Fattura correttiva che annulla o rettifica una fattura precedente e rimborsa importi con conguaglio IVA.",
      "Korrekturrechnung, die eine frühere Rechnung annulliert oder berichtigt und Beträge mit MwSt-Ausgleich erstattet.",
      "Корректировочный счёт, аннулирующий или исправляющий предыдущий счёт и возвращающий суммы с корректировкой НДС."
    ),
    where: W7(
      "يصدرها المورد ويرسلها للزبون مع نسخة للتصحيح المحاسبي والتصريح الضريبي.",
      "Émise par le fournisseur et adressée au client, une copie servant à la correction comptable et fiscale.",
      "Issued by the supplier and sent to the client, a copy used for accounting and tax correction.",
      "Emitida por el proveedor y enviada al cliente, con copia para la corrección contable y fiscal.",
      "Emessa dal fornitore e inviata al cliente, con copia per la correzione contabile e fiscale.",
      "Vom Lieferanten ausgestellt und dem Kunden übersandt, Kopie zur Buch- und Steuerkorrektur.",
      "Выставляется поставщиком и направляется клиенту, копия — для бухгалтерской и налоговой корректировки."
    ),
    authority: "tax",
    keywords: ["فاتورة إرجاع", "facture d'avoir", "credit note", "تصحيح", "إلغاء"],
  },
  {
    id: "mq-fatoura-acompte",
    cat: "muqawalat",
    title: T7(
      "فاتورة تسبيق",
      "Facture d'acompte",
      "Deposit invoice (advance payment)",
      "Factura de anticipo",
      "Fattura di acconto",
      "Anzahlungsrechnung",
      "Счёт на аванс"
    ),
    desc: D7(
      "فاتورة لأداء تسبيق قبل انطلاق الأشغال أو الخدمات مع تسوية الضريبة عند كل دفعة.",
      "Facture établissant un acompte exigible avant le démarrage des travaux ou services, la TVA étant régularisée à chaque versement.",
      "Invoice establishing an advance due before works or services start, VAT being regularised on each payment.",
      "Factura que establece un anticipo exigible antes de iniciar obras o servicios, regularizando el IVA en cada pago.",
      "Fattura che stabilisce un acconto dovuto prima dell'inizio di lavori o servizi, con conguaglio IVA a ogni versamento.",
      "Rechnung über eine vor Beginn der Arbeiten oder Leistungen fällige Anzahlung, MwSt wird je Zahlung verrechnet.",
      "Счёт на аванс до начала работ или услуг, с уточнением НДС при каждом платеже."
    ),
    where: W7(
      "يصدرها المقاول أو مقدم الخدمة بعد توقيع العقد وتؤدى قبل تسليم الأشغال.",
      "Émise par l'entrepreneur ou le prestataire après signature du contrat et réglée avant la livraison.",
      "Issued by the contractor or provider after contract signature and settled before delivery.",
      "Emitida por el contratista o prestador tras la firma del contrato y pagada antes de la entrega.",
      "Emessa dall'appaltatore o dal prestatore dopo la firma del contratto e saldata prima della consegna.",
      "Vom Unternehmer oder Dienstleister nach Vertragsunterzeichnung ausgestellt und vor Lieferung beglichen.",
      "Выставляется подрядчиком или исполнителем после подписания договора и оплачивается до сдачи работ."
    ),
    authority: "tax",
    keywords: ["تسبيق", "acompte", "deposit", "دفعة مقدمة", "facture d'acompte"],
  },
  {
    id: "mq-fatoura-khadamat",
    cat: "muqawalat",
    title: T7(
      "فاتورة خدمات",
      "Facture de prestation de services",
      "Service invoice",
      "Factura de servicios",
      "Fattura di prestazione di servizi",
      "Dienstleistungsrechnung",
      "Счёт за услуги"
    ),
    desc: D7(
      "فاتورة تفصل أتعاب الخدمات ومددها ومصاريفها مع الضريبة المستحقة.",
      "Facture détaillant les honoraires, la durée et les frais d'une prestation avec la TVA applicable.",
      "Invoice detailing the fees, duration and expenses of a service with applicable VAT.",
      "Factura que detalla honorarios, duración y gastos de un servicio con el IVA aplicable.",
      "Fattura che dettaglia compensi, durata e spese di una prestazione con l'IVA applicabile.",
      "Rechnung mit detaillierten Honoraren, Dauer und Spesen einer Leistung einschließlich MwSt.",
      "Счёт с детализацией вознаграждения, сроков и расходов за услугу с учётом НДС."
    ),
    where: W7(
      "يرسلها مقدم الخدمة إلى الزبون عند نهاية المهمة مرفقة بشروط الأداء.",
      "Adressée par le prestataire au client à la fin de la mission, accompagnée des conditions de règlement.",
      "Sent by the provider to the client at mission end, accompanied by payment terms.",
      "Enviada por el prestador al cliente al finalizar la misión, con las condiciones de pago.",
      "Inviata dal prestatore al cliente al termine della missione, con le condizioni di pagamento.",
      "Vom Dienstleister am Ende des Auftrags dem Kunden übersandt, mit Zahlungsbedingungen.",
      "Направляется исполнителем клиенту по завершении задания с условиями оплаты."
    ),
    authority: "tax",
    keywords: ["خدمات", "prestation", "service invoice", "أتعاب", "TVA"],
  },
  {
    id: "mq-fatoura-muqawil-dhati",
    cat: "muqawalat",
    title: T7(
      "فاتورة المقاول الذاتي",
      "Facture auto-entrepreneur",
      "Auto-entrepreneur invoice",
      "Factura de auto-emprendedor",
      "Fattura per auto-imprenditore",
      "Auto-Entrepreneur-Rechnung",
      "Счёт самозанятого (auto-entrepreneur)"
    ),
    desc: D7(
      "فاتورة مبسطة باسم المقاول الذاتي تحمل رقم تسجيله دون تطبيق الضريبة على القيمة المضافة.",
      "Facture simplifiée au nom de l'auto-entrepreneur portant son numéro d'inscription, sans application de la TVA.",
      "Simplified invoice in the auto-entrepreneur's name bearing their registration number, with no VAT applied.",
      "Factura simplificada a nombre del auto-emprendedor con su número de inscripción y sin aplicación del IVA.",
      "Fattura semplificata a nome dell'auto-imprenditore con il suo numero di iscrizione e senza applicazione dell'IVA.",
      "Vereinfachte Rechnung auf den Namen des Auto-Entrepreneurs mit dessen Registernummer und ohne MwSt.",
      "Упрощённый счёт от имени самозанятого с его регистрационным номером, без НДС."
    ),
    where: W7(
      "تحرر من حساب المقاول الذاتي أو من نموذج جاهز مع ذكر رقم التسجيل في السجل الوطني.",
      "Générée depuis le compte de l'auto-entrepreneur ou un modèle prêt à l'emploi, avec mention du numéro d'inscription national.",
      "Generated from the auto-entrepreneur's account or a ready template, mentioning the national registration number.",
      "Generada desde la cuenta del auto-emprendedor o una plantilla lista, con mención del número nacional de inscripción.",
      "Generata dal conto dell'auto-imprenditore o da un modello pronto, con indicazione del numero nazionale di iscrizione.",
      "Erstellt aus dem Konto des Auto-Entrepreneurs oder einer Vorlage, unter Angabe der nationalen Registernummer.",
      "Создаётся из кабинета самозанятого или по шаблону с указанием национального регистрационного номера."
    ),
    authority: "tax",
    keywords: ["مقاول ذاتي", "auto-entrepreneur", "فاتورة", "facture AE", "self-employed invoice"],
  },
  {
    id: "mq-bon-talab",
    cat: "muqawalat",
    title: T7(
      "سند الطلب (طلب شراء)",
      "Bon de commande",
      "Purchase order",
      "Orden de compra",
      "Ordine d'acquisto (buono d'ordine)",
      "Bestellschein",
      "Заказ на поставку"
    ),
    desc: D7(
      "وثيقة يحدد فيها الزبون السلع المطلوبة وكمياتها وأثمانها قبل التوريد.",
      "Document par lequel le client précise les marchandises demandées, leurs quantités et leurs prix avant toute livraison.",
      "Document whereby the client specifies the goods requested, their quantities and prices before any delivery.",
      "Documento en el que el cliente especifica las mercancías solicitadas, sus cantidades y precios antes de la entrega.",
      "Documento con cui il cliente specifica le merci richieste, le quantità e i prezzi prima della consegna.",
      "Dokument, in dem der Kunde die bestellten Waren, Mengen und Preise vor der Lieferung festlegt.",
      "Документ, в котором клиент указывает запрашиваемые товары, их количество и цены до поставки."
    ),
    where: W7(
      "يرسله المشتري إلى المورد بعد المصادقة عليه وتحفظ نسخة في ملف المشتريات.",
      "Adressé par l'acheteur au fournisseur après validation, une copie étant archivée dans le dossier achats.",
      "Sent by the buyer to the supplier after validation, a copy archived in the purchasing file.",
      "Enviado por el comprador al proveedor tras su validación, archivando copia en el expediente de compras.",
      "Inviato dall'acquirente al fornitore dopo la convalida, con copia archiviata nel fascicolo acquisti.",
      "Vom Käufer nach Freigabe an den Lieferanten gesandt, Kopie in der Einkaufsakte abgelegt.",
      "Направляется покупателем поставщику после согласования, копия хранится в деле закупок."
    ),
    keywords: ["سند الطلب", "bon de commande", "purchase order", "شراء", "توريد"],
    popular: true,
  },
  {
    id: "mq-bon-taslim",
    cat: "muqawalat",
    title: T7(
      "سند التسليم",
      "Bon de livraison",
      "Delivery note",
      "Albarán de entrega",
      "Documento di trasporto (bolla)",
      "Lieferschein",
      "Накладная на доставку"
    ),
    desc: D7(
      "وثيقة ترافق البضاعة المنقولة ويوقعها المستلم لإثبات استلامها كملا وكيفا.",
      "Document accompagnant les marchandises transportées, signé par le destinataire pour confirmer leur réception en quantité et en qualité.",
      "Document accompanying transported goods, signed by the recipient to confirm their receipt in quantity and quality.",
      "Documento que acompaña a las mercancías transportadas, firmado por el destinatario para confirmar su recepción en cantidad y calidad.",
      "Documento che accompagna le merci trasportate, firmato dal destinatario per confermarne il ricevimento in quantità e qualità.",
      "Beleg, der die transportierten Waren begleitet und vom Empfänger zur Bestätigung von Menge und Beschaffenheit unterschrieben wird.",
      "Документ, сопровождающий перевозимые товары, подписываемый получателем для подтверждения приёмки по количеству и качеству."
    ),
    where: W7(
      "يحمله السائق أو المورد ويوقع ويختم من الزبون ثم يعاد إلى المورد كإثبات.",
      "Transporté par le livreur, signé et tamponné par le client, puis retourné au fournisseur comme preuve.",
      "Carried by the delivery driver, signed and stamped by the client, then returned to the supplier as proof.",
      "Llevado por el transportista, firmado y sellado por el cliente, y devuelto al proveedor como prueba.",
      "Consegnato dal trasportatore, firmato e timbrato dal cliente e poi restituito al fornitore come prova.",
      "Vom Fahrer mitgeführt, vom Kunden unterschrieben und gestempelt, dann dem Lieferanten als Nachweis zurückgegeben.",
      "Передаётся водителем, подписывается и штампуется клиентом, затем возвращается поставщику как подтверждение."
    ),
    keywords: ["سند التسليم", "bon de livraison", "delivery note", "استلام البضاعة", "توصيل"],
  },
  {
    id: "mq-fatoura-bidaa",
    cat: "muqawalat",
    title: T7(
      "فاتورة بيع البضائع",
      "Facture de vente de marchandises",
      "Goods sales invoice",
      "Factura de venta de mercancías",
      "Fattura di vendita di merci",
      "Warenverkaufsrechnung",
      "Счёт на продажу товаров"
    ),
    desc: D7(
      "فاتورة تجارية تبين البضائع المبيعة وثمن الوحدة والضريبة والمجموع المستحق.",
      "Facture commerciale détaillant les marchandises vendues, les prix unitaires, la TVA et le total dû.",
      "Commercial invoice itemising the goods sold, unit prices, VAT and the total due.",
      "Factura comercial que detalla las mercancías vendidas, los precios unitarios, el IVA y el total adeudado.",
      "Fattura commerciale che dettaglia le merci vendute, i prezzi unitari, l'IVA e il totale dovuto.",
      "Geschäftsrechnung mit Auflistung der verkauften Waren, Einzelpreise, MwSt und fälligem Gesamtbetrag.",
      "Коммерческий счёт с перечислением проданных товаров, цен за единицу, НДС и итоговой суммы."
    ),
    where: W7(
      "تصدر من البائع عند كل عملية بيع وتقيد في دفتر المبيعات لأغراض ضريبية.",
      "Établie par le vendeur à chaque vente et reportée dans le journal des ventes à des fins fiscales.",
      "Issued by the seller at each sale and recorded in the sales journal for tax purposes.",
      "Emitida por el vendedor en cada venta y registrada en el libro de ventas a efectos fiscales.",
      "Emessa dal venditore a ogni vendita e registrata nel giornale vendite ai fini fiscali.",
      "Vom Verkäufer bei jedem Verkauf ausgestellt und für Steuerzwecke im Verkaufsjournal erfasst.",
      "Выставляется продавцом при каждой продаже и фиксируется в книге продаж для налоговых целей."
    ),
    authority: "tax",
    keywords: ["بيع", "فاتورة تجارية", "facture de vente", "sales invoice", "marchandises"],
  },
  {
    id: "mq-fatoura-situation",
    cat: "muqawalat",
    title: T7(
      "فاتورة وضعية الأشغال",
      "Facture de situation (travaux)",
      "Progress billing invoice (construction)",
      "Factura de avance de obra",
      "Stato avanzamento lavori (fattura)",
      "Bauabschlagsrechnung",
      "Счёт за этап работ"
    ),
    desc: D7(
      "فاتورة دورية عن جزء الأشغال المنجز حسب تقدم الورشة ومصادقة المهندس أو المشرف.",
      "Facture périodique portant sur la part des travaux réalisée selon l'avancement du chantier et la validation du maître d'œuvre.",
      "Periodic invoice covering the portion of works completed according to site progress and supervisor approval.",
      "Factura periódica que cubre la parte de obra ejecutada según el avance del sitio y la validación de la supervisión.",
      "Fattura periodica relativa alla quota di lavori completati secondo l'avanzamento del cantiere e la validazione della direzione dei lavori.",
      "Periodische Rechnung über den vollendeten Teil der Arbeiten gemäß Baufortschritt und Freigabe durch die Bauleitung.",
      "Периодический счёт за выполненную часть работ согласно прогрессу стройки и согласованию надзора."
    ),
    where: W7(
      "يحررها المقاول عند كل مرحلة وتصادق عليها الجهة المكلفة بالمراقبة قبل الأداء.",
      "Établie par l'entrepreneur à chaque échéance et validée par le maître d'œuvre avant tout paiement.",
      "Drawn up by the contractor at each stage and approved by the supervising party before payment.",
      "Elaborada por el contratista en cada etapa y validada por la supervisión antes del pago.",
      "Redatta dall'appaltatore a ogni scadenza e convalidata dalla direzione dei lavori prima del pagamento.",
      "Vom Bauunternehmer zu jedem Abschnitt erstellt und vor Zahlung von der Bauüberwachung freigegeben.",
      "Составляется подрядчиком на каждом этапе и утверждается надзирающей стороной до оплаты."
    ),
    authority: "tax",
    keywords: ["أشغال", "فاتورة وضعية", "facture de situation", "progress billing", "BTP", "ورشة"],
  },
  {
    id: "mq-fatoura-atayat",
    cat: "muqawalat",
    title: T7(
      "فاتورة الأتعاب",
      "Facture d'honoraires",
      "Professional fees invoice",
      "Factura de honorarios",
      "Fattura di onorari professionali",
      "Honorarrechnung",
      "Счёт за профессиональные услуги"
    ),
    desc: D7(
      "فاتورة يحررها المهنيون الأحرار عن أتعاب الاستشارات أو الخبرة أو المحاسبة.",
      "Facture établie par les professionnels libéraux pour leurs honoraires de conseil, d'expertise ou de comptabilité.",
      "Invoice issued by liberal professionals for their consulting, expertise or accounting fees.",
      "Factura emitida por profesionales liberales por sus honorarios de asesoría, peritaje o contabilidad.",
      "Fattura emessa dai professionisti per i compensi di consulenza, perizia o contabilità.",
      "Rechnung freiberuflicher Professionisten über Beratungs-, Gutachter- oder Buchhaltungshonorare.",
      "Счёт, выставляемый частнопрактикующими специалистами за консультации, экспертизу или бухгалтерские услуги."
    ),
    where: W7(
      "تصدر من المكتب المهني إلى الزبون مع تفصيل الأتعاب والضريبة المستحقة.",
      "Émise par le cabinet professionnel à l'attention du client, avec détail des honoraires et de la TVA applicable.",
      "Issued by the professional practice to the client, detailing the fees and applicable VAT.",
      "Emitida por el despacho profesional al cliente, detallando los honorarios y el IVA aplicable.",
      "Emessa dallo studio professionale al cliente, con dettaglio dei compensi e dell'IVA applicabile.",
      "Vom Berufsbüro an den Kunden ausgestellt, mit Aufschlüsselung der Honorare und der anfallenden MwSt.",
      "Выставляется профессиональным бюро клиенту с детализацией гонорара и применимого НДС."
    ),
    authority: "tax",
    keywords: ["أتعاب", "honoraires", "fees invoice", "مهني حر", "استشارة"],
  },
  // ─── عروض الأسعار · Devis ───
  {
    id: "mq-devis-achghal-btp",
    cat: "muqawalat",
    title: T7(
      "عرض سعر أشغال البناء",
      "Devis travaux (BTP)",
      "Construction works quote (BTP)",
      "Presupuesto de obras (construcción)",
      "Preventivo lavori edili",
      "Bauarbeiten-Angebot (BTP)",
      "Смета на строительные работы"
    ),
    desc: D7(
      "عرض سعر تفصيلي لأشغال البناء يبين المواد واليد العاملة والأثمان الوحدوية لكل بند.",
      "Devis détaillé des travaux de construction précisant les matériaux, la main-d'œuvre et les prix unitaires par lot.",
      "Detailed construction quote specifying materials, labour and unit prices per work package.",
      "Presupuesto detallado de obra que especifica materiales, mano de obra y precios unitarios por partida.",
      "Preventivo edilizio dettagliato che specifica materiali, manodopera e prezzi unitari per categoria.",
      "Detailliertes Bauangebot mit Angaben zu Materialien, Arbeitskräften und Einzelpreisen je Gewerk.",
      "Детальная смета строительных работ с указанием материалов, рабочей силы и расценок по разделам."
    ),
    where: W7(
      "يحرره المقاول بعد زيارة الورشة ويوقعه الزبون قبل انطلاق الأشغال.",
      "Établi par l'entrepreneur après visite du chantier et signé par le client avant le début des travaux.",
      "Drawn up by the contractor after the site visit and signed by the client before works start.",
      "Elaborado por el contratista tras la visita a la obra y firmado por el cliente antes de iniciar los trabajos.",
      "Redatto dall'impresa dopo il sopralluogo e firmato dal cliente prima dell'inizio dei lavori.",
      "Vom Bauunternehmer nach Begehung erstellt und vom Kunden vor Baubeginn unterzeichnet.",
      "Составляется подрядчиком после осмотра объекта и подписывается клиентом до начала работ."
    ),
    keywords: ["بناء", "أشغال", "devis travaux", "construction quote", "BTP", "مقاول"],
  },
  {
    id: "mq-devis-siyana",
    cat: "muqawalat",
    title: T7(
      "عرض سعر الصيانة",
      "Devis de maintenance",
      "Maintenance quote",
      "Presupuesto de mantenimiento",
      "Preventivo di manutenzione",
      "Wartungsangebot",
      "Смета на техобслуживание"
    ),
    desc: D7(
      "عرض سعر لصيانة التجهيزات أو المحلات يحدد فترات الزيارة والتعريفات وقطع الغيار.",
      "Offre de maintenance d'équipements ou de locaux précisant la périodicité des interventions, les tarifs et les pièces détachées.",
      "Maintenance quote for equipment or premises specifying intervention frequency, rates and spare parts.",
      "Oferta de mantenimiento de equipos o locales que especifica frecuencia de intervención, tarifas y repuestos.",
      "Offerta di manutenzione di apparecchiature o immobili con frequenza degli interventi, tariffe e ricambi.",
      "Wartungsangebot für Anlagen oder Räumlichkeiten mit Eingriffshäufigkeit, Tarifen und Ersatzteilen.",
      "Смета на обслуживание оборудования или помещений с указанием периодичности, тарифов и запчастей."
    ),
    where: W7(
      "يقدم من شركة الخدمات إلى الزبون قصد المصادقة قبل إبرام عقد الصيانة.",
      "Présenté par la société de services au client pour approbation avant la signature du contrat de maintenance.",
      "Submitted by the service company to the client for approval before signing the maintenance contract.",
      "Presentado por la empresa de servicios al cliente para su aprobación antes de firmar el contrato de mantenimiento.",
      "Presentato dalla società di servizi al cliente per l'approvazione prima della firma del contratto di manutenzione.",
      "Vom Dienstleistungsunternehmen dem Kunden zur Freigabe vor Unterzeichnung des Wartungsvertrags vorgelegt.",
      "Предоставляется сервисной компанией клиенту на согласование перед подписанием договора обслуживания."
    ),
    keywords: ["صيانة", "maintenance", "devis", "تجهيزات", "عقد صيانة"],
  },
  {
    id: "mq-devis-tarmim",
    cat: "muqawalat",
    title: T7(
      "عرض سعر الترميم",
      "Devis de rénovation",
      "Renovation quote",
      "Presupuesto de renovación",
      "Preventivo di ristrutturazione",
      "Renovierungsangebot",
      "Смета на ремонт и обновление"
    ),
    desc: D7(
      "تقدير مفصل لأشغال الهدم والتشطيبات ومواد الترميم وتكاليف اليد العاملة.",
      "Estimation détaillée des travaux de démolition, des finitions, des matériaux de rénovation et de la main-d'œuvre.",
      "Detailed estimate of demolition works, finishes, renovation materials and labour costs for a dwelling.",
      "Estimación detallada de demolición, acabados, materiales de renovación y costes de mano de obra.",
      "Stima dettagliata di demolizioni, finiture, materiali di ristrutturazione e costi di manodopera.",
      "Detaillierte Kostenschätzung von Abbrucharbeiten, Verputz, Renovierungsmaterialien und Lohnkosten.",
      "Детальная оценка демонтажных работ, отделки, материалов и затрат на рабочую силу."
    ),
    where: W7(
      "يعده الحرفي أو المقاول بعد معاينة المحل ويظل صالحا للمدة المذكورة فيه.",
      "Préparé par l'artisan ou l'entrepreneur après inspection des lieux et valable pour la durée indiquée.",
      "Prepared by the craftsman or contractor after inspecting the premises and valid for the stated period.",
      "Preparado por el artesano o contratista tras inspeccionar el inmueble y válido por el plazo indicado.",
      "Preparato dall'artigiano o dall'impresa dopo l'ispezione dell'immobile e valido per il periodo indicato.",
      "Vom Handwerker oder Unternehmer nach Besichtigung erstellt und für die angegebene Frist gültig.",
      "Готовится мастером или подрядчиком после осмотра помещения и действует указанный срок."
    ),
    keywords: ["ترميم", "rénovation", "renovation quote", "تشطيب", "devis"],
  },
  {
    id: "mq-devis-majani",
    cat: "muqawalat",
    title: T7(
      "عرض سعر مجاني دون التزام",
      "Devis gratuit (sans engagement)",
      "Free quote (no commitment)",
      "Presupuesto gratuito (sin compromiso)",
      "Preventivo gratuito (senza impegno)",
      "Kostenloses Angebot (unverbindlich)",
      "Бесплатная смета (без обязательств)"
    ),
    desc: D7(
      "تقدير مجاني لتكلفة خدمة أو توريد لا يلزم الطرفين بأي التزام تعاقدي.",
      "Estimation gratuite du coût d'une prestation ou d'une fourniture, sans obliger les parties à un engagement contractuel.",
      "Free estimate of the cost of a service or supply, binding neither party to any commitment.",
      "Estimación gratuita del coste de un servicio o suministro, sin obligar a las partes a compromiso alguno.",
      "Stima gratuita del costo di un servizio o fornitura, senza vincolare le parti ad alcun impegno.",
      "Kostenlose Kostenschätzung für eine Leistung oder Lieferung, die keine Partei bindet.",
      "Бесплатная оценка стоимости услуги или поставки, не обязывающая стороны ни к каким обязательствам."
    ),
    where: W7(
      "يسلمه مقدم الخدمة عند الطلب ويظل التقدير قابلا للتعديل بعد المعاينة.",
      "Remis par le prestataire sur demande, l'estimation restant modifiable après visite technique.",
      "Delivered by the provider on request, the estimate remaining adjustable after a site visit.",
      "Entregado por el prestador a petición, quedando la estimación modificable tras la visita.",
      "Consegnato dal prestatore su richiesta, con stima modificabile dopo il sopralluogo.",
      "Vom Dienstleister auf Anforderung übergeben, die Schätzung bleibt nach Begehung anpassbar.",
      "Выдаётся исполнителем по запросу, оценка может корректироваться после выезда."
    ),
    keywords: ["مجاني", "devis gratuit", "free quote", "تقدير", "دون التزام"],
  },
  {
    id: "mq-devis-istishara",
    cat: "muqawalat",
    title: T7(
      "عرض سعر خدمات استشارية",
      "Devis de prestation intellectuelle",
      "Consulting services quote",
      "Presupuesto de servicios de consultoría",
      "Preventivo di consulenza",
      "Beratungsangebot",
      "Смета на консультационные услуги"
    ),
    desc: D7(
      "عرض سعر يحدد مهام الاستشارة ومخرجاتها وثمن اليوم وأجال الإنجاز.",
      "Offre de conseil précisant les missions, les livrables, le tarif journalier et les délais d'exécution.",
      "Quote specifying the consulting assignments, their deliverables, the daily rate and completion deadlines.",
      "Oferta que especifica las misiones de consultoría, sus entregables, la tarifa diaria y los plazos.",
      "Offerta che specifica le missioni di consulenza, i deliverable, il compenso giornaliero e i tempi.",
      "Angebot mit Angaben zu Beratungsaufträgen, Ergebnissen, Tagessatz und Umsetzungsfristen.",
      "Смета с указанием консультационных задач, результатов, дневной ставки и сроков выполнения."
    ),
    where: W7(
      "يرسله المستشار إلى الشركة ويوقع من الطرفين قبل انطلاق المهمة.",
      "Adressé par le consultant à l'entreprise et signé par les deux parties avant le démarrage de la mission.",
      "Sent by the consultant to the company and signed by both parties before the mission starts.",
      "Enviado por el consultor a la empresa y firmado por ambas partes antes de iniciar la misión.",
      "Inviato dal consulente all'azienda e firmato da entrambe le parti prima dell'avvio della missione.",
      "Vom Berater an das Unternehmen gesandt und von beiden Parteien vor Auftragsbeginn unterzeichnet.",
      "Направляется консультантом компании и подписывается обеими сторонами до начала работы."
    ),
    keywords: ["استشارة", "consulting", "devis", "prestation intellectuelle", "مستشار"],
  },
  // ─── السجلات والشركات · Registres et société ───
  {
    id: "mq-rc-istikhraj",
    cat: "muqawalat",
    title: T7(
      "طلب استخراج السجل التجاري",
      "Demande d'extrait du registre de commerce",
      "Request for a commercial register extract",
      "Solicitud de certificado del registro mercantil",
      "Richiesta di certificato del registro delle imprese",
      "Antrag auf Handelsregisterauszug",
      "Заявление на выписку из торгового реестра"
    ),
    desc: D7(
      "طلب الحصول على نسخة رسمية من قيد الشركة في السجل التجاري لتقديمها للإدارات أو الشركاء.",
      "Demande en vue d'obtenir une copie certifiée de l'inscription d'une société au registre de commerce.",
      "Request to obtain a certified copy of a company's entry in the commercial register.",
      "Solicitud para obtener una copia certificada de la inscripción de una sociedad en el registro mercantil.",
      "Richiesta per ottenere una copia autenticata dell'iscrizione di una società nel registro delle imprese.",
      "Antrag auf eine beglaubigte Abschrift der Eintragung einer Gesellschaft im Handelsregister.",
      "Заявление на получение заверенной копии записи о компании в торговом реестре."
    ),
    where: W7(
      "يودع عبر بوابة OMPIC أو بكتابة ضبط المحكمة التجارية مقابل أداء الرسوم.",
      "Déposée via le portail de l'OMPIC ou au greffe du tribunal de commerce contre paiement des droits.",
      "Filed through the OMPIC portal or at the commercial court registry upon payment of the fees.",
      "Presentada por el portal de la OMPIC o en el registro del tribunal de comercio previo pago de tasas.",
      "Presentata tramite il portale OMPIC o alla cancelleria del tribunale commerciale con pagamento dei diritti.",
      "Über das OMPIC-Portal oder beim Register des Handelstribunals gegen Gebühr eingereicht.",
      "Подаётся через портал OMPIC или в канцелярию торгового суда с уплатой пошлины."
    ),
    authority: "ompic",
    keywords: ["السجل التجاري", "registre de commerce", "extrait", "OMPIC", "commercial register"],
    popular: true,
  },
  {
    id: "mq-rc-tajdid",
    cat: "muqawalat",
    title: T7(
      "طلب تجديد قيد السجل التجاري",
      "Demande de renouvellement d'inscription au registre de commerce",
      "Commercial register renewal application",
      "Solicitud de renovación de la inscripción registral",
      "Domanda di rinnovo dell'iscrizione al registro",
      "Antrag auf Erneuerung der Handelsregisteranmeldung",
      "Заявление о продлении регистрации в торговом реестре"
    ),
    desc: D7(
      "طلب تجديد قيد الشركة في السجل التجاري عند انتهاء مدته أو تحيين بياناته.",
      "Demande de renouvellement de l'inscription de la société au registre de commerce à l'échéance ou lors de la mise à jour de ses données.",
      "Application renewing the company's entry in the commercial register at expiry or upon data update.",
      "Solicitud de renovación de la inscripción de la sociedad en el registro mercantil al vencimiento o al actualizar datos.",
      "Domanda di rinnovo dell'iscrizione della società al registro delle imprese alla scadenza o all'aggiornamento dei dati.",
      "Antrag auf Erneuerung des Handelsregistereintrags der Gesellschaft bei Fristablauf oder Datenaktualisierung.",
      "Заявление о продлении записи компании в торговом реестре по истечении срока или при обновлении данных."
    ),
    where: W7(
      "يودع لدى كتابة ضبط المحكمة المختصة أو عبر خدمات OMPIC مع الوثائق المطلوبة.",
      "Déposée au greffe du tribunal compétent ou via les services de l'OMPIC avec les pièces justificatives.",
      "Filed at the competent court registry or via OMPIC services with the required supporting documents.",
      "Presentada en el registro del tribunal competente o vía servicios de la OMPIC con la documentación requerida.",
      "Depositata alla cancelleria del tribunale competente o tramite i servizi OMPIC con la documentazione richiesta.",
      "Beim Register des zuständigen Gerichts oder über OMPIC-Dienste mit den erforderlichen Nachweisen eingereicht.",
      "Подаётся в канцелярию компетентного суда или через сервисы OMPIC с необходимыми документами."
    ),
    authority: "ompic",
    keywords: ["تجديد", "registre de commerce", "renouvellement", "قيد", "renewal"],
  },
  {
    id: "mq-pv-jamia-aamiya",
    cat: "muqawalat",
    title: T7(
      "محضر الجمع العام العادي",
      "Procès-verbal d'assemblée générale ordinaire",
      "Minutes of the ordinary general meeting",
      "Acta de la junta general ordinaria",
      "Verbale dell'assemblea generale ordinaria",
      "Protokoll der ordentlichen Hauptversammlung",
      "Протокол очередного общего собрания"
    ),
    desc: D7(
      "محضر يوثق مداولات الجمع العام السنوي ومصادقته على الحسابات وتقرير التسيير.",
      "Procès-verbal consignant les délibérations de l'assemblée annuelle et l'approbation des comptes et du rapport de gestion.",
      "Minutes recording the deliberations of the annual meeting and approval of the accounts and management report.",
      "Acta que recoge las deliberaciones de la junta anual y la aprobación de las cuentas y del informe de gestión.",
      "Verbale che documenta le deliberazioni dell'assemblea annuale e l'approvazione dei conti e del rapporto di gestione.",
      "Protokoll über die Beratungen der Jahresversammlung und die Genehmigung von Jahresabschluss und Lagebericht.",
      "Протокол, фиксирующий обсуждения годового собрания и утверждение отчётности и отчёта об управлении."
    ),
    where: W7(
      "يحرر ويوقع من الشركاء ويحفظ بالمقر الاجتماعي ويودع لدى كتابة الضبط عند الاقتضاء.",
      "Rédigé et signé par les associés, conservé au siège social et déposé au greffe lorsque la loi l'exige.",
      "Drafted and signed by the partners, kept at the registered office and filed with the court registry when required.",
      "Redactado y firmado por los socios, conservado en el domicilio social y depositado en el registro cuando la ley lo exige.",
      "Redatto e firmato dai soci, conservato presso la sede sociale e depositato in cancelleria quando previsto.",
      "Von den Gesellschaftern verfasst und unterzeichnet, am Sitz verwahrt und bei gesetzlicher Anforderung zum Register hinterlegt.",
      "Составляется и подписывается участниками, хранится в юридическом адресе и сдаётся в канцелярию суда при необходимости."
    ),
    keywords: ["جمع عام", "assemblée générale", "PV", "general meeting", "حسابات"],
  },
  {
    id: "mq-taqrir-tasyir",
    cat: "muqawalat",
    title: T7(
      "تقرير التسيير السنوي",
      "Rapport de gestion annuel",
      "Annual management report",
      "Informe anual de gestión",
      "Relazione annuale sulla gestione",
      "Jahreslagebericht (Geschäftsbericht)",
      "Годовой отчёт об управлении"
    ),
    desc: D7(
      "تقرير يعرضه المسير على الشركاء حول نشاط الشركة ونتائجها وآفاقها.",
      "Rapport présenté par le gérant aux associés sur l'activité, les résultats et les perspectives de la société.",
      "Report presented by the manager to the partners on the company's activity, results and outlook.",
      "Informe presentado por el gerente a los socios sobre la actividad, los resultados y las perspectivas de la sociedad.",
      "Relazione presentata dal gestore ai soci su attività, risultati e prospettive della società.",
      "Bericht des Geschäftsführers an die Gesellschafter über Tätigkeit, Ergebnis und Perspektiven der Gesellschaft.",
      "Отчёт управляющего перед участниками о деятельности, результатах и перспективах компании."
    ),
    where: W7(
      "يعده المسير أو مجلس الإدارة ويعرض على الجمع العام السنوي ويحفظ بوثائق الشركة.",
      "Préparé par le gérant ou le conseil d'administration, présenté à l'assemblée annuelle et versé aux archives de la société.",
      "Prepared by the manager or the board, presented at the annual meeting and filed in the company records.",
      "Preparado por el gerente o el consejo de administración, presentado en la junta anual y archivado en los documentos de la sociedad.",
      "Preparato dal gestore o dal consiglio di amministrazione, presentato all'assemblea annuale e archiviato negli atti sociali.",
      "Vom Geschäftsführer oder Vorstand erstellt, in der Jahresversammlung vorgelegt und in den Unternehmensunterlagen abgelegt.",
      "Готовится управляющим или советом директоров, представляется на годовом собрании и хранится в документах компании."
    ),
    keywords: ["تقرير التسيير", "rapport de gestion", "management report", "نتائج", "شركة"],
  },
  {
    id: "mq-bilagh-nataij",
    cat: "muqawalat",
    title: T7(
      "إيداع بلاغ النتائج والحسابات السنوية",
      "Dépôt des états de synthèse et des résultats annuels",
      "Filing of annual accounts and results",
      "Depósito de las cuentas y resultados anuales",
      "Deposito dei bilanci e dei risultati annui",
      "Einreichung von Jahresabschluss und Ergebnissen",
      "Подача годовой отчётности и результатов"
    ),
    desc: D7(
      "ملخص الحسابات السنوية الذي تودعه الشركة وتنشره وفقا لمقتضيات مدونة التجارة.",
      "Synthèse des comptes annuels que la société dépose et publie conformément aux dispositions du Code de commerce.",
      "Summary of the annual accounts that the company files and publishes under the Commercial Code provisions.",
      "Síntesis de las cuentas anuales que la sociedad deposita y publica conforme al Código de Comercio.",
      "Sintesi dei conti annuali che la società deposita e pubblica ai sensi del Codice di commercio.",
      "Übersicht der Jahresabschlüsse, die die Gesellschaft gemäß Handelsgesetzbuch einreicht und veröffentlicht.",
      "Сводка годовой отчётности, которую компания подаёт и публикует согласно Торговому кодексу."
    ),
    where: W7(
      "يودع لدى كتابة ضبط المحكمة التجارية وينشر بالجريدة المخصصة للإعلانات القانونية.",
      "Déposé au greffe du tribunal de commerce et publié dans le journal habilité aux annonces légales.",
      "Filed with the commercial court registry and published in the journal authorised for legal notices.",
      "Depositado en el registro del tribunal de comercio y publicado en el periódico de anuncios legales.",
      "Depositato alla cancelleria del tribunale commerciale e pubblicato nel giornale degli annunci legali.",
      "Beim Register des Handelstribunals eingereicht und im Blatt für gesetzliche Bekanntmachungen veröffentlicht.",
      "Подаётся в канцелярию торгового суда и публикуется в издании официальных уведомлений."
    ),
    keywords: ["الحسابات السنوية", "états de synthèse", "annual accounts", "بلاغ النتائج", "مدونة التجارة"],
  },
  {
    id: "mq-aqd-kira-maqarr",
    cat: "muqawalat",
    title: T7(
      "عقد كراء مقر الشركة",
      "Contrat de bail du siège social",
      "Registered office lease contract",
      "Contrato de alquiler del domicilio social",
      "Contratto di locazione della sede sociale",
      "Mietvertrag für den Gesellschaftssitz",
      "Договор аренды юридического адреса компании"
    ),
    desc: D7(
      "عقد كراء المحل الذي يتخذ مقرا اجتماعيا للشركة لقيد السجل التجاري.",
      "Contrat de bail du local retenu comme siège social de la société pour les besoins du registre de commerce.",
      "Lease contract for the premises used as the company's registered office for commercial register purposes.",
      "Contrato de alquiler del local usado como domicilio social de la sociedad para el registro mercantil.",
      "Contratto di locazione dell'immobile adibito a sede sociale ai fini del registro delle imprese.",
      "Mietvertrag über die Räumlichkeiten, die als Gesellschaftssitz für das Handelsregister dienen.",
      "Договор аренды помещения, используемого как юридический адрес компании для торгового реестра."
    ),
    where: W7(
      "يوقع بين المالك والشركة ويقدم عند القيد في السجل التجاري أو تغيير المقر.",
      "Signé entre le propriétaire et la société et produit lors de l'immatriculation au registre de commerce ou d'un changement de siège.",
      "Signed between the owner and the company and produced upon commercial register inscription or office change.",
      "Firmado entre el propietario y la sociedad y presentado al inscribirse en el registro mercantil o al cambiar de domicilio.",
      "Firmato tra il proprietario e la società e prodotto all'iscrizione al registro o al cambio di sede.",
      "Zwischen Eigentümer und Gesellschaft unterzeichnet und bei Handelsregisteranmeldung oder Sitzverlegung vorgelegt.",
      "Подписывается собственником и компанией и предоставляется при регистрации в реестре или смене адреса."
    ),
    keywords: ["كراء", "bail", "siège social", "مقر", "lease"],
  },
  {
    id: "mq-taghyir-maqarr",
    cat: "muqawalat",
    title: T7(
      "طلب تغيير المقر الاجتماعي",
      "Demande de changement de siège social",
      "Registered office change application",
      "Solicitud de cambio de domicilio social",
      "Domanda di trasferimento della sede sociale",
      "Antrag auf Sitzverlegung",
      "Заявление о смене юридического адреса"
    ),
    desc: D7(
      "طلب تعديل مقر الشركة الاجتماعي في النظام الأساسي والسجل التجاري بعد قرار الشركاء.",
      "Demande de modification du siège social de la société dans les statuts et le registre de commerce après décision des associés.",
      "Application amending the company's registered office in the statutes and commercial register after the partners' decision.",
      "Solicitud de modificación del domicilio social en los estatutos y el registro mercantil tras la decisión de los socios.",
      "Domanda di modifica della sede sociale nello statuto e nel registro dopo la decisione dei soci.",
      "Antrag auf Änderung des Gesellschaftssitzes in Satzung und Handelsregister nach Beschluss der Gesellschafter.",
      "Заявление об изменении юридического адреса компании в уставе и торговом реестре после решения участников."
    ),
    where: W7(
      "يودع بعد قرار الجمع العام لدى كتابة الضبط ويحدث القيد لدى OMPIC مع نشر إعلان قانوني.",
      "Déposée après l'assemblée générale au greffe, l'inscription étant mise à jour auprès de l'OMPIC avec publication d'un avis légal.",
      "Filed with the court registry after the general meeting, the entry updated at OMPIC with legal notice publication.",
      "Presentada en el registro tras la junta general, actualizándose la inscripción en la OMPIC con publicación de aviso legal.",
      "Depositata in cancelleria dopo l'assemblea, con aggiornamento dell'iscrizione presso OMPIC e pubblicazione dell'avviso legale.",
      "Nach der Hauptversammlung zum Register eingereicht, Eintrag bei OMPIC aktualisiert mit gesetzlicher Bekanntmachung.",
      "Подаётся в канцелярию суда после собрания, запись обновляется в OMPIC с публикацией уведомления."
    ),
    authority: "ompic",
    keywords: ["تغيير المقر", "siège social", "office change", "تعديل", "OMPIC"],
  },
  {
    id: "mq-idafa-nachat",
    cat: "muqawalat",
    title: T7(
      "طلب إضافة نشاط تجاري",
      "Demande d'ajout d'activité au registre de commerce",
      "Application to add a business activity",
      "Solicitud de añadido de actividad al registro",
      "Domanda di aggiunta di attività al registro",
      "Antrag auf Ergänzung einer Tätigkeit im Handelsregister",
      "Заявление о добавлении вида деятельности"
    ),
    desc: D7(
      "طلب إضافة نشاط تجاري جديد إلى قيد الشركة القائم بالسجل التجاري.",
      "Demande tendant à ajouter une nouvelle activité commerciale à l'inscription existante de la société au registre de commerce.",
      "Application to add a new commercial activity to the company's existing commercial register entry.",
      "Solicitud para añadir una nueva actividad comercial a la inscripción existente de la sociedad en el registro mercantil.",
      "Domanda per aggiungere una nuova attività commerciale all'iscrizione esistente della società nel registro.",
      "Antrag auf Ergänzung einer neuen Geschäftstätigkeit zum bestehenden Handelsregistereintrag der Gesellschaft.",
      "Заявление о добавлении нового вида деятельности к существующей записи компании в торговом реестре."
    ),
    where: W7(
      "يودع لدى كتابة الضبط أو عبر OMPIC مرفقا بالنظام الأساسي المعدل والوثائق المثبتة.",
      "Déposée au greffe ou via l'OMPIC, accompagnée des statuts modifiés et des pièces justificatives.",
      "Filed at the court registry or via OMPIC, accompanied by amended statutes and supporting documents.",
      "Presentada en el registro o vía OMPIC, acompañada de los estatutos modificados y la documentación justificativa.",
      "Depositata in cancelleria o tramite OMPIC, con statuto modificato e documentazione giustificativa.",
      "Beim Register oder über OMPIC eingereicht, mit geänderter Satzung und Nachweisen.",
      "Подаётся в канцелярию суда или через OMPIC с изменённым уставом и подтверждающими документами."
    ),
    authority: "ompic",
    keywords: ["نشاط تجاري", "activité", "ajout", "السجل التجاري", "OMPIC"],
  },
  {
    id: "mq-istiqala-musir",
    cat: "muqawalat",
    title: T7(
      "إشعار الاستقالة من التسيير",
      "Notification de démission du gérant",
      "Resignation notice of the manager",
      "Notificación de dimisión del gerente",
      "Comunicazione di dimissioni del gestore",
      "Rücktrittsanzeige des Geschäftsführers",
      "Уведомление об отставке управляющего"
    ),
    desc: D7(
      "إشعار رسمي باستقالة المسير يوجه إلى الشركاء ويحدد آثاره القانونية.",
      "Notification formelle de la démission du gérant, adressée aux associés et fixant ses effets juridiques.",
      "Formal notice of the manager's resignation, addressed to the partners and setting its legal effects.",
      "Notificación formal de la dimisión del gerente, dirigida a los socios y con fijación de sus efectos jurídicos.",
      "Comunicazione formale delle dimissioni del gestore, indirizzata ai soci con indicazione degli effetti giuridici.",
      "Förmliche Rücktrittsanzeige des Geschäftsführers, gerichtet an die Gesellschafter, mit rechtlicher Wirkung.",
      "Официальное уведомление об отставке управляющего, адресуемое участникам с указанием правовых последствий."
    ),
    where: W7(
      "يرسل إلى الشركاء برسالة مضمونة ويثبت في محضر الجمع العام ويخبر به كتابة الضبط.",
      "Envoyée aux associés par lettre recommandée, constatée au procès-verbal de l'assemblée et notifiée au greffe.",
      "Sent to the partners by registered mail, recorded in the meeting minutes and notified to the court registry.",
      "Enviada a los socios por carta certificada, constatada en el acta de la junta y notificada al registro.",
      "Inviata ai soci con raccomandata, verbalizzata nell'assemblea e notificata alla cancelleria.",
      "Per Einschreiben an die Gesellschafter gesandt, im Versammlungsprotokoll festgehalten und dem Register mitgeteilt.",
      "Направляется участникам заказным письмом, фиксируется в протоколе собрания и сообщается в канцелярию суда."
    ),
    keywords: ["استقالة", "démission", "resignation", "مسير", "gérant"],
  },
  {
    id: "mq-sijil-mustafidin",
    cat: "muqawalat",
    title: T7(
      "سجل المستفيدين الفعليين",
      "Registre des bénéficiaires effectifs",
      "Register of beneficial owners",
      "Registro de titulares reales",
      "Registro dei beneficiari effettivi",
      "Register der wirtschaftlich Berechtigten",
      "Реестр бенефициарных владельцев"
    ),
    desc: D7(
      "سجل إلزامي يحدد المستفيدين الفعليين للشركة طبقا لمقتضيات مكافحة غسل الأموال.",
      "Registre obligatoire identifiant les bénéficiaires effectifs de la société conformément à la législation anti-blanchiment.",
      "Mandatory register identifying the natural persons who are the company's beneficial owners under anti-money-laundering law.",
      "Registro obligatorio que identifica a las personas físicas titulares reales de la sociedad según la ley antiblanqueo.",
      "Registro obbligatorio che identifica le persone fisiche beneficiarie effettive della società secondo la normativa antiriciclaggio.",
      "Obligatorisches Register, das die natürlichen Personen als wirtschaftlich Berechtigte der Gesellschaft gemäß Anti-Geldwäsche-Recht ausweist.",
      "Обязательный реестр, определяющий физических лиц — бенефициарных владельцев компании согласно антиотмывочному законодательству."
    ),
    where: W7(
      "يحفظ بالمقر الاجتماعي ويحدث عند كل تغيير ويوضع رهن إشارة السلطات المختصة.",
      "Conservé au siège social, mis à jour à chaque changement et tenu à la disposition des autorités compétentes.",
      "Kept at the registered office, updated upon each change and held at the disposal of the competent authorities.",
      "Conservado en el domicilio social, actualizado en cada cambio y a disposición de las autoridades competentes.",
      "Conservato presso la sede sociale, aggiornato a ogni variazione e a disposizione delle autorità competenti.",
      "Am Gesellschaftssitz verwahrt, bei jeder Änderung aktualisiert und den zuständigen Behörden auf Verlangen vorgelegt.",
      "Хранится по юридическому адресу, обновляется при каждом изменении и предоставляется компетентным органам."
    ),
    keywords: ["مستفيد فعلي", "bénéficiaire effectif", "beneficial owner", "غسل الأموال", "سجل"],
  },
  // ─── المقاول الذاتي والمهن · Auto-entrepreneur et métiers ───
  {
    id: "mq-ae-tasjil",
    cat: "muqawalat",
    title: T7(
      "طلب التسجيل في نظام المقاول الذاتي",
      "Demande d'inscription au régime de l'auto-entrepreneur",
      "Auto-entrepreneur regime registration application",
      "Solicitud de inscripción en el régimen de auto-emprendedor",
      "Domanda di iscrizione al regime di auto-imprenditore",
      "Antrag auf Registrierung im Auto-Entrepreneur-System",
      "Заявление о регистрации в режиме самозанятости"
    ),
    desc: D7(
      "طلب قيد الشخص الذاتي في نظام المقاول الذاتي مع بيان طبيعة نشاطه.",
      "Demande d'immatriculation d'une personne physique au régime de l'auto-entrepreneur avec description de son activité.",
      "Application registering a natural person in the auto-entrepreneur regime with a description of their activity.",
      "Solicitud de inscripción de una persona física en el régimen de auto-emprendedor con descripción de su actividad.",
      "Domanda di iscrizione di una persona fisica al regime di auto-imprenditore con descrizione dell'attività.",
      "Antrag auf Eintragung einer natürlichen Person in das Auto-Entrepreneur-System mit Beschreibung der Tätigkeit.",
      "Заявление о регистрации физического лица в режиме самозанятого с описанием его деятельности."
    ),
    where: W7(
      "يقدم إلكترونيا عبر بوابة السجل الوطني للمقاول الذاتي مع البطاقة الوطنية وإثبات النشاط.",
      "Déposée en ligne sur le portail du registre national de l'auto-entrepreneur, avec la carte nationale et la preuve d'activité.",
      "Submitted online on the national auto-entrepreneur register portal with the national ID card and activity proof.",
      "Presentada en línea en el portal del registro nacional de auto-emprendedores con el DNI y la prueba de actividad.",
      "Presentata online sul portale del registro nazionale degli auto-imprenditori con documento d'identità e prova dell'attività.",
      "Online über das Portal des nationalen Auto-Entrepreneur-Registers mit Personalausweis und Tätigkeitsnachweis eingereicht.",
      "Подаётся онлайн через портал национального реестра самозанятых с удостоверением личности и подтверждением деятельности."
    ),
    keywords: ["مقاول ذاتي", "auto-entrepreneur", "inscription", "تسجيل", "AE"],
  },
  {
    id: "mq-ae-sijil-madakhil",
    cat: "muqawalat",
    title: T7(
      "سجل المداخيل والمصاريف",
      "Livre des recettes et des dépenses",
      "Register of receipts and expenses",
      "Libro de ingresos y gastos",
      "Registro delle entrate e delle uscite",
      "Einnahmen- und Ausgabenbuch",
      "Книга доходов и расходов"
    ),
    desc: D7(
      "سجل ترتيبي يدون فيه المقاول الذاتي مداخيله ومصاريفه بانتظام.",
      "Registre chronologique dans lequel l'auto-entrepreneur consigne régulièrement ses recettes et ses dépenses.",
      "Chronological register in which the auto-entrepreneur regularly records their receipts and expenses.",
      "Registro cronológico en el que el auto-emprendedor anota regularmente sus ingresos y gastos.",
      "Registro cronologico in cui l'auto-imprenditore annota regolarmente incassi e spese.",
      "Chronologisches Verzeichnis, in dem der Auto-Entrepreneur seine Einnahmen und Ausgaben fortlaufend erfasst.",
      "Хронологический журнал, в котором самозанятый регулярно фиксирует свои доходы и расходы."
    ),
    where: W7(
      "يمسكه المقاول الذاتي ويحدثه بعد كل عملية ويقدم عند المراقبة أو التصريح السنوي.",
      "Tenu par l'auto-entrepreneur, mis à jour après chaque opération et présenté en cas de contrôle ou de déclaration annuelle.",
      "Maintained by the auto-entrepreneur, updated after each transaction and produced during audits or annual filing.",
      "Llevado por el auto-emprendedor, actualizado tras cada operación y presentado ante controles o declaración anual.",
      "Tenuto dall'auto-imprenditore, aggiornato dopo ogni operazione e prodotto in caso di controllo o dichiarazione annuale.",
      "Vom Auto-Entrepreneur geführt, nach jedem Geschäftsvorfall aktualisiert und bei Prüfung oder Jahreserklärung vorgelegt.",
      "Ведётся самозанятым, обновляется после каждой операции и предъявляется при проверке или годовой декларации."
    ),
    authority: "tax",
    keywords: ["مداخيل", "recettes", "دخل", "livre", "dépenses", "register"],
  },
  {
    id: "mq-ae-shahada",
    cat: "muqawalat",
    title: T7(
      "طلب شهادة تسجيل مقاول ذاتي",
      "Demande d'attestation d'inscription (auto-entrepreneur)",
      "Auto-entrepreneur registration certificate request",
      "Solicitud de certificado de inscripción (auto-emprendedor)",
      "Richiesta di attestato di iscrizione (auto-imprenditore)",
      "Antrag auf Registrierungsbescheinigung (Auto-Entrepreneur)",
      "Заявление на справку о регистрации самозанятого"
    ),
    desc: D7(
      "طلب الحصول على شهادة تثبت القيد في نظام المقاول الذاتي لتقديمها للزبناء والإدارات.",
      "Demande d'une attestation certifiant l'inscription au régime de l'auto-entrepreneur, destinée aux clients et aux administrations.",
      "Request for a certificate confirming enrolment in the auto-entrepreneur regime, for clients and administrations.",
      "Solicitud de un certificado que acredita la inscripción en el régimen de auto-emprendedor, para clientes y administraciones.",
      "Richiesta di un attestato che certifica l'iscrizione al regime di auto-imprenditore, per clienti e pubbliche amministrazioni.",
      "Antrag auf eine Bescheinigung der Einschreibung ins Auto-Entrepreneur-System, für Kunden und Behörden.",
      "Заявление на справку, подтверждающую регистрацию в режиме самозанятого, для клиентов и ведомств."
    ),
    where: W7(
      "يحمل من حساب المقاول الذاتي بالبوابة الوطنية أو يطلب من المصلحة المختصة.",
      "Téléchargeable depuis le compte de l'auto-entrepreneur sur le portail national ou demandée auprès du service compétent.",
      "Downloadable from the auto-entrepreneur account on the national portal or requested from the competent service.",
      "Descargable desde la cuenta del auto-emprendedor en el portal nacional o solicitada al servicio competente.",
      "Scaricabile dal conto dell'auto-imprenditore sul portale nazionale o richiesta al servizio competente.",
      "Über das Auto-Entrepreneur-Konto im nationalen Portal abrufbar oder beim zuständigen Dienst anzufordern.",
      "Скачивается из кабинета самозанятого на национальном портале или запрашивается в компетентной службе."
    ),
    keywords: ["شهادة", "attestation", "certificate", "مقاول ذاتي", "auto-entrepreneur"],
  },
  {
    id: "mq-sinai-taqlidi",
    cat: "muqawalat",
    title: T7(
      "طلب الاعتماد كصانع تقليدي",
      "Demande de carte d'artisan",
      "Artisan card application",
      "Solicitud de tarjeta de artesano",
      "Domanda di tessera di artigiano",
      "Antrag auf Handwerkerkarte",
      "Заявление на карту ремесленника"
    ),
    desc: D7(
      "طلب بطاقة الصانع التقليدي التي تعترف بمزاولة الحرفة وجودة الإنتاج.",
      "Demande de la carte d'artisan reconnaissant l'exercice du métier artisanal et la qualité de la production.",
      "Application for the artisan card recognising the practice of the craft and production quality.",
      "Solicitud de la tarjeta de artesano que reconoce el ejercicio del oficio y la calidad de la producción.",
      "Domanda della tessera di artigiano che riconosce l'esercizio del mestiere e la qualità della produzione.",
      "Antrag auf die Handwerkerkarte, die die Ausübung des Handwerks und die Produktqualität anerkennt.",
      "Заявление на карту ремесленника, подтверждающую занятие ремеслом и качество продукции."
    ),
    where: W7(
      "يودع لدى المديرية الإقليمية للصناعة التقليدية مع ما يثبت المهنة والتكوين.",
      "Déposée auprès de la direction provinciale de l'artisanat avec les justificatifs du métier et de la formation.",
      "Filed with the provincial handicrafts directorate with proof of the trade and training.",
      "Presentada en la dirección provincial de artesanía con justificantes del oficio y la formación.",
      "Depositata presso la direzione provinciale dell'artigianato con prova del mestiere e della formazione.",
      "Bei der Provinzialdirektion für Handwerk mit Nachweisen zu Beruf und Ausbildung eingereicht.",
      "Подаётся в провинциальное управление ремёсел с подтверждением профессии и обучения."
    ),
    keywords: ["صانع تقليدي", "artisan", "بطاقة", "صناعة تقليدية", "craft"],
  },
  // ─── الموارد البشرية · RH et gestion ───
  {
    id: "mq-jadwal-tatabbu",
    cat: "muqawalat",
    title: T7(
      "جدول تتبع المستخدمين (حضور، غياب، عطل)",
      "Tableau de suivi du personnel (présence, absences, congés)",
      "Staff tracking sheet (attendance, absences, leave)",
      "Tabla de seguimiento del personal (asistencia, ausencias, permisos)",
      "Tabella di gestione del personale (presenze, assenze, ferie)",
      "Personalkontrollblatt (Anwesenheit, Abwesenheit, Urlaub)",
      "Таблица учёта персонала (посещаемость, отсутствия, отпуска)"
    ),
    desc: D7(
      "جدول شهري يتتبع حضور المستخدمين وغياباتهم وعطلهم مع حصر المجموع لأجل الأداء.",
      "Tableau mensuel suivant la présence, les absences et les congés des employés, avec totaux calculés pour la paie.",
      "Monthly sheet tracking employees' attendance, absences and leave, with totals computed for payroll.",
      "Tabla mensual que sigue la asistencia, ausencias y permisos de los empleados, con totales para la nómina.",
      "Tabella mensuale che monitora presenze, assenze e ferie dei dipendenti, con totali per il pagamento.",
      "Monatsblatt zur Erfassung von Anwesenheit, Abwesenheit und Urlaub der Beschäftigten, mit Summen für die Lohnabrechnung.",
      "Месячная таблица учёта посещаемости, отсутствий и отпусков сотрудников с итогами для расчёта зарплаты."
    ),
    where: W7(
      "تملأ من طرف مصلحة الموارد البشرية وتصادق عليها شهريا وتحفظ في ملف الأجور.",
      "Renseigné par le service des ressources humaines, validé chaque mois et archivé dans le dossier de paie.",
      "Filled in by the human resources department, validated monthly and archived in the payroll file.",
      "Rellenado por el departamento de recursos humanos, validado mensualmente y archivado en el expediente de nómina.",
      "Compilato dall'ufficio risorse umane, convalidato ogni mese e archiviato nel fascicolo paga.",
      "Vom Personalwesen ausgefüllt, monatlich freigegeben und im Lohndossier abgelegt.",
      "Заполняется отделом кадров, ежемесячно утверждается и хранится в платёжной документации."
    ),
    keywords: ["تتبع", "presence", "attendance", "موارد بشرية", "congés", "عطل"],
  },
  {
    id: "mq-wasl-atad",
    cat: "muqawalat",
    title: T7(
      "وصل استلام عتاد العمل",
      "Reçu de remise de matériel de travail",
      "Work equipment handover receipt",
      "Recibo de entrega de material de trabajo",
      "Ricevuta di consegna di attrezzatura di lavoro",
      "Quittung über Arbeitsmittelübergabe",
      "Расписка о получении рабочего оборудования"
    ),
    desc: D7(
      "وصل يثبت تسليم عتاد للمستخدم مع التعهد بإرجاعه سليما.",
      "Reçu attestant la remise d'un équipement à l'employé, qui s'engage à le restituer en bon état.",
      "Receipt attesting to equipment handed to the employee, who undertakes to return it in good condition.",
      "Recibo que acredita la entrega de un equipo al empleado, que se compromete a devolverlo en buen estado.",
      "Ricevuta che attesta la consegna di un'attrezzatura al dipendente, che si impegna a restituirla in buono stato.",
      "Quittung über die Übergabe einer Ausrüstung an den Arbeitnehmer, der deren Rückgabe in gutem Zustand zusichert.",
      "Расписка, подтверждающая передачу оборудования сотруднику, который обязуется вернуть его в исправном состоянии."
    ),
    where: W7(
      "يوقع في نسختين عند التشغيل أو تسليم العتاد وتحفظ نسخة لدى المشغل.",
      "Signé en deux exemplaires à l'embauche ou lors de la remise du matériel, un exemplaire restant à l'employeur.",
      "Signed in two copies at hiring or equipment handover, one copy retained by the employer.",
      "Firmado por duplicado al contratar o entregar el material, conservando el empleador una copia.",
      "Firmato in duplice copia all'assunzione o alla consegna, con una copia trattenuta dal datore di lavoro.",
      "Bei Einstellung oder Übergabe in zweifacher Ausfertigung unterschrieben, ein Exemplar verbleibt beim Arbeitgeber.",
      "Подписывается в двух экземплярах при найме или передаче, один хранится у работодателя."
    ),
    keywords: ["عتاد", "matériel", "equipment", "استلام", "remise"],
  },
  {
    id: "mq-indhar",
    cat: "muqawalat",
    title: T7(
      "إنذار عامل",
      "Lettre d'avertissement (employé)",
      "Employee warning letter",
      "Carta de amonestación (empleado)",
      "Lettera di richiamo (dipendente)",
      "Abmahnungsschreiben (Arbeitnehmer)",
      "Письмо-предупреждение сотруднику"
    ),
    desc: D7(
      "رسالة إنذار موجهة لعامل بسبب خطأ أو إخلال بالتزاماته المهنية.",
      "Lettre d'avertissement adressée à un employé en raison d'une faute ou d'un manquement à ses obligations professionnelles.",
      "Warning letter addressed to an employee for a fault or breach of professional obligations.",
      "Carta de amonestación dirigida a un empleado por una falta o incumplimiento de sus obligaciones profesionales.",
      "Lettera di richiamo rivolta a un dipendente per una mancanza o inadempienza dei suoi obblighi.",
      "Abmahnung an einen Arbeitnehmer wegen eines Verstoßes oder einer Verletzung berufsbezogener Pflichten.",
      "Предупреждающее письмо сотруднику за проступок или нарушение служебных обязанностей."
    ),
    where: W7(
      "تسلم من المشغل ويوقع عليها العامل أو في حضور شاهدين وتحفظ بملفه.",
      "Remise par l'employeur, signée par le salarié ou en présence de deux témoins, et versée à son dossier.",
      "Handed by the employer, signed by the employee or witnessed by two people, and filed in their record.",
      "Entregada por el empleador, firmada por el trabajador o ante dos testigos, y archivada en su expediente.",
      "Consegnata dal datore di lavoro, firmata dal lavoratore o davanti a due testimoni, e inserita nel suo fascicolo.",
      "Vom Arbeitgeber übergeben, vom Arbeitnehmer oder vor zwei Zeugen unterzeichnet und in dessen Personalakte abgelegt.",
      "Вручается работодателем, подписывается работником или при двух свидетелях и подшивается в его личное дело."
    ),
    keywords: ["إنذار", "avertissement", "warning", "تأديب", "عامل"],
  },
  {
    id: "mq-badal-masari",
    cat: "muqawalat",
    title: T7(
      "ورقة المصاريف المهنية (تعويض المأمونيات)",
      "Note de frais (déplacements)",
      "Expense report (travel costs)",
      "Hoja de gastos (desplazamientos)",
      "Nota spese (trasferte)",
      "Spesenabrechnung (Reisekosten)",
      "Отчёт о расходах (командировочные)"
    ),
    desc: D7(
      "ورقة يدرج فيها المستخدم مصاريف مأمونياته مرفقة بالوصولات قصد التعويض.",
      "Feuille où l'employé détaille ses frais de mission, justifiés par des reçus, en vue de leur remboursement.",
      "Sheet where the employee lists mission expenses, supported by receipts, for reimbursement.",
      "Hoja en la que el empleado detalla sus gastos de misión, justificados con recibos, para su reembolso.",
      "Foglio in cui il dipendente dettaglia le spese di missione, documentate da ricevute, per il rimborso.",
      "Formular, in dem der Arbeitnehmer seine Reisekosten mit Belegen für die Erstattung auflistet.",
      "Форма, в которой сотрудник перечисляет командировочные расходы с чеками для возмещения."
    ),
    where: W7(
      "تملأ شهريا من المستخدم مع الوصولات وتصادق عليها المسؤول قبل الأداء.",
      "Remplie mensuellement par l'employé avec les justificatifs et validée par le responsable avant remboursement.",
      "Completed monthly by the employee with receipts and approved by the manager before reimbursement.",
      "Cumplimentada mensualmente por el empleado con recibos y validada por el responsable antes del reembolso.",
      "Compilata mensilmente dal dipendente con le ricevute e approvata dal responsabile prima del rimborso.",
      "Monatlich vom Arbeitnehmer mit Belegen ausgefüllt und vor Erstattung vom Vorgesetzten freigegeben.",
      "Заполняется сотрудником ежемесячно с чеками и утверждается руководителем до возмещения."
    ),
    keywords: ["مصاريف", "note de frais", "expenses", "مأمونية", "تعويض"],
  },
];
