// Sale & purchase contracts — vehicles, real estate, businesses,
// equipment and movable property. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsUqudBay: DocumentItem[] = [
  // ─── Véhicules ───
  {
    id: "vb-promesse-vente-vehicule",
    cat: "uqud-bay",
    title: T7(
      "عقد وعد ببيع سيارة",
      "Promesse de vente d'un véhicule",
      "Promise to sell a vehicle",
      "Promesa de venta de un vehículo",
      "Promessa di vendita di un veicolo",
      "Verkaufsversprechen für ein Fahrzeug",
      "Обещание продажи автомобиля"
    ),
    desc: D7(
      "وعد ملزم يحدد ثمن السيارة ومدة صلاحيته قبل تحرير عقد البيع النهائي بين الطرفين.",
      "Promesse engageante fixant le prix du véhicule et sa durée de validité avant la signature du contrat définitif.",
      "Binding promise setting the vehicle's price and validity period before the final contract is signed.",
      "Promesa vinculante que fija el precio del vehículo y su plazo de validez antes del contrato definitivo.",
      "Promessa vincolante che fissa il prezzo del veicolo e la sua validità prima del contratto definitivo.",
      "Verbindliches Versprechen, das Preis und Geltungsdauer des Fahrzeugs vor dem endgültigen Vertrag festlegt.",
      "Обязывающее обещание, определяющее цену автомобиля и срок его действия до подписания итогового договора."
    ),
    where: W7(
      "يحرر بين الواعد والموعود له، ويتلوه عند التنفيذ عقد البيع النهائي ونقل البطاقة الرمادية.",
      "Rédigé entre le promettant et le bénéficiaire, suivi à l'exécution du contrat définitif et du changement de carte grise.",
      "Drawn up between promisor and beneficiary, followed at completion by the final contract and registration-card transfer.",
      "Redactado entre promitente y beneficiario, seguido en su ejecución del contrato definitivo y la transferencia de la tarjeta.",
      "Redatto tra promittente e beneficiario, seguito in fase di esecuzione dal contratto definitivo e dal passaggio di proprietà.",
      "Zwischen Verkäufer und Begünstigtem erstellt; bei Erfüllung folgen der endgültige Vertrag und die Umschreibung.",
      "Составляется между обещателем и выгодоприобретателем, затем следуют итоговый договор и переоформление регистрации."
    ),
    keywords: ["وعد ببيع سيارة", "promesse de vente", "vehicle promise", "سيارة", "véhicule"],
  },
  {
    id: "vb-vente-vehicule-acompte",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع سيارة مع دفعة أولى واعتراف بالدين",
      "Vente de véhicule avec acompte et reconnaissance de dette",
      "Vehicle sale with down payment and acknowledgment of debt",
      "Venta de vehículo con anticipo y reconocimiento de deuda",
      "Vendita di veicolo con acconto e riconoscimento di debito",
      "Fahrzeugverkauf mit Anzahlung und Schuldanerkenntnis",
      "Продажа автомобиля с авансом и признанием долга"
    ),
    desc: D7(
      "بيع سيارة بأداء دفعة أولى فورية، مع اعتراف كتابي بالمتبقي وأجل أدائه وضماناته.",
      "Vente d'un véhicule contre un acompte immédiat, avec reconnaissance écrite du solde et de son échéancier.",
      "Sale of a vehicle against an immediate deposit, with written acknowledgment of the balance and its schedule.",
      "Venta de un vehículo contra anticipo inmediato, con reconocimiento escrito del saldo y su calendario.",
      "Vendita di un veicolo con acconto immediato e riconoscimento scritto del saldo e delle sue scadenze.",
      "Verkauf eines Fahrzeugs gegen sofortige Anzahlung mit schriftlicher Anerkennung des Restbetrags und seines Plans.",
      "Продажа автомобиля с немедленным авансом и письменным признанием остатка долга и его графика."
    ),
    where: W7(
      "يوقع بين البائع والمشتري، ثم يقدم مع الوثائق لمصلحة تسجيل السيارات لنقل البطاقة الرمادية.",
      "Signé entre vendeur et acheteur, puis présenté avec les pièces au service d'immatriculation pour la carte grise.",
      "Signed between seller and buyer, then presented with the papers to the registration service for the card.",
      "Firmado entre vendedor y comprador, luego presentado con los papeles al servicio de matriculación.",
      "Firmato tra venditore e compratore, quindi presentato con i documenti al servizio di immatricolazione.",
      "Zwischen Verkäufer und Käufer unterschrieben, dann mit den Unterlagen der Zulassungsstelle vorgelegt.",
      "Подписывается продавцом и покупателем, затем с документами подаётся в службу регистрации."
    ),
    keywords: ["دفعة أولى", "acompte", "down payment", "اعتراف بالدين", "reconnaissance de dette", "سيارة"],
  },
  {
    id: "vb-cession-carte-grise",
    cat: "uqud-bay",
    title: T7(
      "عقد تنازل من أجل البطاقة الرمادية",
      "Acte de cession aux fins de carte grise",
      "Cession deed for the registration card",
      "Acta de cesión a efectos de la tarjeta de circulación",
      "Atto di cessione agli effetti del libretto",
      "Übergabevertrag für die Zulassungsbescheinigung",
      "Акт передачи для оформления свидетельства о регистрации"
    ),
    desc: D7(
      "وثيقة تنازل ترفق بملف نقل الملكية لدى مصلحة تسجيل السيارات لإصدار بطاقة رمادية جديدة باسم المشتري.",
      "Document de cession joint au dossier de changement de propriétaire pour l'établissement d'une nouvelle carte grise.",
      "Cession document attached to the change-of-owner file for issuing a new registration card to the buyer.",
      "Documento de cesión adjunto al expediente de cambio de titular para emitir una nueva tarjeta al comprador.",
      "Documento di cessione allegato alla pratica di cambio di proprietà per il rilascio di un nuovo libretto.",
      "Übergabeurkunde, die der Halterwechsel-Akte beiliegt, um dem Käufer eine neue Zulassung auszustellen.",
      "Документ о передаче, прилагаемый к делу о смене владельца для выдачи покупателю нового свидетельства."
    ),
    where: W7(
      "يحرر بين الطرفين ويقدم لمكتب تسجيل السيارات التابع له محل سكنى المشتري.",
      "Rédigé entre les parties et déposé au service d'immatriculation du ressort de domicile de l'acheteur.",
      "Drawn up between the parties and filed with the registration service of the buyer's home district.",
      "Redactado entre las partes y presentado en el servicio de matriculación del distrito del comprador.",
      "Redatto tra le parti e presentato al servizio di immatricolazione del circondario del compratore.",
      "Zwischen den Parteien erstellt und bei der Zulassungsstelle des Wohnbezirks des Käufers eingereicht.",
      "Составляется сторонами и подаётся в службу регистрации по месту жительства покупателя."
    ),
    keywords: ["بطاقة رمادية", "carte grise", "registration card", "تنازل", "cession", "نقل الملكية"],
    popular: true,
  },
  {
    id: "vb-recu-prix-vehicule",
    cat: "uqud-bay",
    title: T7(
      "وصل توصيل ثمن سيارة",
      "Reçu de paiement du prix d'un véhicule",
      "Receipt of payment of a vehicle price",
      "Recibo del pago del precio de un vehículo",
      "Ricevuta del pagamento del prezzo di un veicolo",
      "Quittung über die Zahlung des Fahrzeugpreises",
      "Расписка об уплате стоимости автомобиля"
    ),
    desc: D7(
      "وصل يثبت أداء المشتري ثمن السيارة كاملاً أو جزءاً منه، ويحفظ للإثبات عند نقل الملكية.",
      "Reçu constatant le paiement intégral ou partiel du prix par l'acheteur, conservé pour la mutation.",
      "Receipt evidencing the buyer's full or partial payment of the price, kept for the ownership transfer.",
      "Recibo que acredita el pago total o parcial del precio por el comprador, guardado para la transferencia.",
      "Ricevuta che attesta il pagamento integrale o parziale del prezzo, conservata per il passaggio di proprietà.",
      "Quittung über die vollständige oder teilweise Preiszahlung des Käufers, aufbewahrt für die Umschreibung.",
      "Расписка, подтверждающая полную или частичную уплату цены покупателем, хранится для переоформления."
    ),
    where: W7(
      "يحرر بين الطرفين ويحفظ مع عقد البيع، ويقدم ضمن وثائق نقل الملكية للسيارة.",
      "Établi entre les parties et conservé avec le contrat, produit parmi les pièces de la mutation du véhicule.",
      "Issued between the parties and kept with the contract, produced among the vehicle transfer papers.",
      "Emitido entre las partes y guardado con el contrato, se presenta entre los papeles de transferencia.",
      "Emesso tra le parti e conservato con il contratto, prodotto fra i documenti del passaggio di proprietà.",
      "Zwischen den Parteien ausgestellt, beim Vertrag aufbewahrt und den Übergabepapieren beigelegt.",
      "Оформляется сторонами, хранится с договором и прилагается к документам о переоформлении."
    ),
    keywords: ["وصل", "reçu", "receipt", "ثمن السيارة", "prix", "استلام"],
  },
  {
    id: "vb-vente-vehicule-occasion",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع سيارة مستعملة بين الخواص",
      "Vente de véhicule d'occasion entre particuliers",
      "Sale of a used vehicle between individuals",
      "Venta de vehículo de segunda mano entre particulares",
      "Vendita di veicolo usato tra privati",
      "Verkauf eines Gebrauchtwagens zwischen Privatpersonen",
      "Продажа подержанного автомобиля между частными лицами"
    ),
    desc: D7(
      "بيع سيارة مستعملة بين شخصين مع شروط حول حالتها وضماناتها والمسؤولية عن عيوبها الخفية.",
      "Vente d'une voiture d'occasion entre deux personnes, avec clauses sur son état, ses garanties et les vices cachés.",
      "Sale of a used car between two persons, with clauses on its condition, warranties and hidden defects.",
      "Venta de un coche de segunda mano entre dos personas, con cláusulas sobre su estado y sus vicios ocultos.",
      "Vendita di un'auto usata tra due persone, con clausole su stato, garanzie e vizi occulti.",
      "Verkauf eines Gebrauchtwagens zwischen zwei Personen mit Klauseln zu Zustand, Gewährleistung und Mängeln.",
      "Продажа подержанного автомобиля между двумя лицами с условиями о состоянии, гарантиях и скрытых дефектах."
    ),
    where: W7(
      "يوقع بين الخواص ثم يقدم لمصلحة تسجيل السيارات، ويسلم معه تقرير المراقبة التقنية عند الاقتضاء.",
      "Signé entre particuliers puis présenté au service d'immatriculation, avec le rapport du contrôle technique le cas échéant.",
      "Signed between individuals then filed with the registration service, with the technical inspection report where applicable.",
      "Firmado entre particulares y presentado al servicio de matriculación, con la inspección técnica si procede.",
      "Firmato tra privati e presentato al servizio di immatricolazione, con la revisione ove occorra.",
      "Zwischen Privatpersonen unterschrieben und der Zulassungsstelle vorgelegt, gegebenenfalls mit Hauptuntersuchungsbericht.",
      "Подписывается частными лицами и подаётся в службу регистрации, при необходимости с отчётом техосмотра."
    ),
    keywords: ["سيارة مستعملة", "occasion", "used car", "بين الخواص", "vices cachés", "ضمانات"],
    popular: true,
  },
  {
    id: "vb-vente-poids-lourd",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع شاحنة",
      "Vente d'un camion (poids lourd)",
      "Sale of a truck (heavy goods vehicle)",
      "Venta de un camión (vehículo pesado)",
      "Vendita di un autocarro (mezzo pesante)",
      "Verkauf eines Lastwagens (Nutzfahrzeug)",
      "Продажа грузовика (тяжёлого автомобиля)"
    ),
    desc: D7(
      "عقد بيع شاحنة أو وزن ثقيل مع بيان حمولتها ومراقبتها التقنية ومستنداتها لدى النقل.",
      "Contrat de vente d'un poids lourd précisant sa charge utile, son contrôle technique et ses documents de transport.",
      "Contract selling a heavy goods vehicle, stating its payload, technical inspection and transport documents.",
      "Contrato de venta de un vehículo pesado que indica su carga útil, la inspección técnica y los documentos.",
      "Contratto di vendita di un mezzo pesante con indicazione di portata, revisione e documenti di trasporto.",
      "Vertrag über den Verkauf eines Nutzfahrzeugs mit Angabe von Nutzlast, Hauptuntersuchung und Transportpapieren.",
      "Договор продажи грузового автомобиля с указанием грузоподъёмности, техосмотра и транспортных документов."
    ),
    where: W7(
      "يوقع بين الطرفين ثم يسجل لدى مصلحة تسجيل السيارات، مع مراعاة مسطرة النقل للوزن الثقيل.",
      "Signé entre les parties puis immatriculé au service concerné, en observant la procédure de transport des poids lourds.",
      "Signed between the parties then registered with the competent service, observing the heavy-vehicle transport procedure.",
      "Firmado entre las partes y luego matriculado en el servicio competente, observando el procedimiento de transporte.",
      "Firmato tra le parti e poi immatricolato presso il servizio competente, osservando la procedura di trasporto.",
      "Zwischen den Parteien unterschrieben und anschließend zugelassen, unter Beachtung der Verfahren für Nutzfahrzeuge.",
      "Подписывается сторонами и регистрируется в компетентной службе с соблюдением процедур для грузовых перевозок."
    ),
    keywords: ["شاحنة", "camion", "truck", "وزن ثقيل", "poids lourd", "حمولة"],
  },
  {
    id: "vb-vente-tracteur",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع جرار فلاحي",
      "Vente d'un tracteur agricole",
      "Sale of an agricultural tractor",
      "Venta de un tractor agrícola",
      "Vendita di un trattore agricolo",
      "Verkauf eines Ackerschleppers",
      "Продажа сельскохозяйственного трактора"
    ),
    desc: D7(
      "بيع جرار فلاحي مع بيان مرجعه وقوته وملحقاته الفلاحية وحالته التقنية عند التسليم.",
      "Vente d'un tracteur précisant sa marque, sa puissance, ses accessoires agricoles et son état technique.",
      "Sale of a tractor stating its make, power, farm attachments and technical condition at handover.",
      "Venta de un tractor que indica su marca, potencia, accesorios agrícolas y estado técnico.",
      "Vendita di un trattore con indicazione di marca, potenza, accessori agricoli e stato tecnico.",
      "Verkauf eines Schleppers unter Angabe von Marke, Leistung, Anbaugeräten und technischem Zustand.",
      "Продажа трактора с указанием марки, мощности, навесного оборудования и технического состояния."
    ),
    where: W7(
      "يحرر بين الطرفين ويحفظ، مع نقل وثائق الجرار وملحقاته إلى المشتري عند التسليم.",
      "Rédigé entre les parties et conservé, les papiers du tracteur et de ses accessoires étant remis à l'acheteur.",
      "Drawn up between the parties and kept, the tractor's papers and attachments being handed to the buyer.",
      "Redactado entre las partes y guardado, entregándose al comprador los papeles del tractor y sus accesorios.",
      "Redatto tra le parti e conservato, con consegna all'acquirente dei documenti del trattore e degli accessori.",
      "Zwischen den Parteien erstellt und aufbewahrt; Papiere des Schleppers und Zubehör werden dem Käufer übergeben.",
      "Составляется сторонами и хранится; документы трактора и навесное оборудование передаются покупателю."
    ),
    keywords: ["جرار", "tracteur", "tractor", "فلاحي", "agricole", "ملحقات"],
  },
  {
    id: "vb-vente-licence-transport",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع رخصة سيارة النقل",
      "Vente d'une licence de transport",
      "Sale of a transport licence",
      "Venta de una licencia de transporte",
      "Vendita di una licenza di trasporto",
      "Verkauf einer Transportlizenz",
      "Продажа лицензии на перевозки"
    ),
    desc: D7(
      "عقد ينقل بمقابل رخصة نقل بين أشخاص مع شروط استغلالها والالتزامات المرتبطة بها.",
      "Contrat transférant à titre onéreux une licence de transport, avec les conditions de son exploitation.",
      "Contract transferring a transport licence for consideration, with the conditions of its operation.",
      "Contrato que transfiere a título oneroso una licencia de transporte, con las condiciones de su explotación.",
      "Contratto che trasferisce a titolo oneroso una licenza di trasporto, con le condizioni di esercizio.",
      "Vertrag, der eine Transportlizenz entgeltlich überträgt, samt den Bedingungen ihrer künftigen Nutzung.",
      "Договор, возмездно передающий лицензию на перевозки вместе с условиями её использования."
    ),
    where: W7(
      "يحرر بين الطرفين ثم تسجل المعاملة لدى مصالح النقل الطرقية المعنية لنقل الرخصة.",
      "Rédigé entre les parties, puis l'opération est enregistrée auprès des services de transport routier compétents.",
      "Drawn up between the parties, then the operation is registered with the competent road-transport services.",
      "Redactado entre las partes, luego la operación se inscribe ante los servicios de transporte competentes.",
      "Redatto tra le parti, quindi l'operazione si registra presso i servizi di trasporto competenti.",
      "Zwischen den Parteien erstellt; anschließend wird der Vorgang bei den zuständigen Verkehrsdiensten eingetragen.",
      "Составляется сторонами, затем операция регистрируется в компетентных дорожных транспортных службах."
    ),
    keywords: ["رخصة النقل", "licence de transport", "transport licence", "سيارة النقل", "نقل الطرق"],
  },
  {
    id: "vb-vente-vehicule-mensualites",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع سيارة بالتقسيط",
      "Vente d'une voiture à tempérament",
      "Sale of a car by instalments",
      "Venta de un coche a plazos",
      "Vendita di un'auto a rate",
      "Verkauf eines Autos auf Raten",
      "Продажа автомобиля в рассрочку"
    ),
    desc: D7(
      "بيع سيارة بأداء ثمنها على أقساط دورية، مع بيان عددها ومواعيدها وما يترتب عن التخلف عنها.",
      "Vente d'une voiture dont le prix est payé par mensualités, avec leur nombre, leurs échéances et les sanctions de retard.",
      "Sale of a car paid in monthly instalments, stating their number, due dates and default consequences.",
      "Venta de un coche pagado en mensualidades, con su número, vencimientos y consecuencias del impago.",
      "Vendita di un'auto pagata a rate mensili, con numero, scadenze e conseguenze dell'inadempimento.",
      "Verkauf eines Autos in monatlichen Raten, mit Anzahl, Fälligkeiten und Folgen des Verzugs.",
      "Продажа автомобиля с оплатой ежемесячными взносами с указанием их числа, сроков и последствий просрочки."
    ),
    where: W7(
      "يوقع بين البائع والمشتري ويحفظ لديهما، ولا تنقل البطاقة الرمادية إلا بعد أداء الأقساط أو حسب الاتفاق.",
      "Signé entre vendeur et acheteur et conservé par eux, la carte grise n'étant transférée qu'après le paiement des échéances ou selon l'accord.",
      "Signed between seller and buyer and kept by them, the registration card being transferred only after full payment or as agreed.",
      "Firmado entre vendedor y comprador, transfiriéndose la tarjeta solo tras el pago de las cuotas o según el acuerdo.",
      "Firmato tra venditore e compratore, con trasferimento del libretto solo dopo il pagamento delle rate o secondo l'accordo.",
      "Zwischen Verkäufer und Käufer unterschrieben; die Zulassung wird erst nach vollständiger Zahlung übertragen.",
      "Подписывается продавцом и покупателем; регистрация переоформляется только после уплаты взносов или по соглашению."
    ),
    keywords: ["تقسيط", "à tempérament", "instalments", "أقساط", "vente à crédit"],
  },

  // ─── Immobilier ───
  {
    id: "vb-vente-sur-plans",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع على الخريطة (في طور الإنجاز)",
      "Contrat de vente sur plans (VEFA)",
      "Off-plan sale contract (VEFA)",
      "Contrato de venta sobre planos (VEFA)",
      "Contratto di vendita su planimetria (VEFA)",
      "Kaufvertrag vom Plan (VEFA)",
      "Договор продажи по планам (VEFA)"
    ),
    desc: D7(
      "بيع وحدة سكنية وهي في طور الإنجاز، مع بيان مواصفاتها وأجل التسليم وضمانات إنجاز البناء.",
      "Vente d'un logement en cours de construction, précisant ses spécifications, le délai de livraison et les garanties d'achèvement.",
      "Sale of a dwelling under construction, specifying its specifications, delivery deadline and completion guarantees.",
      "Venta de una vivienda en construcción, con sus especificaciones, el plazo de entrega y las garantías de finalización.",
      "Vendita di un'abitazione in costruzione, con specifiche, termine di consegna e garanzie di ultimazione.",
      "Verkauf einer im Bau befindlichen Wohnung mit Spezifikationen, Lieferfrist und Fertigstellungsgarantien.",
      "Продажа жилья на стадии строительства с указанием характеристик, срока сдачи и гарантий завершения."
    ),
    where: W7(
      "يحرر لدى موثق أو العدلين ثم يسجل بالمحافظة العقارية (ANCFCC)، ويتم التسليم عند إنجاز الأشغال.",
      "Rédigé devant un notaire ou les adouls puis inscrit à la conservation foncière (ANCFCC), la livraison intervenant à l'achèvement.",
      "Drawn up before a notary or the adouls then registered with the land registry (ANCFCC), delivery occurring at completion.",
      "Redactado ante notario o adouls y luego inscrito en el registro de la propiedad (ANCFCC), con entrega al terminar.",
      "Redatto davanti a un notaio o agli adouls e poi trascritto alla conservatoria (ANCFCC), con consegna a fine lavori.",
      "Vor einem Notar oder den Adouls erstellt und im Grundbuch (ANCFCC) eingetragen; Übergabe bei Fertigstellung.",
      "Составляется у нотариуса или адулов, регистрируется в кадастровой службе (ANCFCC), передача — по завершении работ."
    ),
    authority: "ancfcc",
    keywords: ["على الخريطة", "VEFA", "off-plan", "في طور الإنجاز", "vente sur plans", "تسليم"],
  },
  {
    id: "vb-vente-appartement",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع شقة",
      "Acte de vente d'un appartement",
      "Deed of sale of an apartment",
      "Escritura de venta de un apartamento",
      "Atto di vendita di un appartamento",
      "Kaufvertrag über eine Wohnung",
      "Договор продажи квартиры"
    ),
    desc: D7(
      "عقد نهائي لبيع شقة في عمارة، يحدد ثمنها وطابقها والمرافق المشتركة الملحقة بها.",
      "Acte définitif de vente d'un appartement en immeuble, précisant son prix, son étage et les parties communes.",
      "Final deed selling an apartment in a building, stating its price, floor and common areas.",
      "Escritura definitiva de venta de un apartamento, con su precio, planta y zonas comunes.",
      "Atto definitivo di vendita di un appartamento in stabile, con prezzo, piano e parti comuni.",
      "Endgültige Urkunde über den Verkauf einer Wohnung, mit Preis, Etage und Gemeinschaftsflächen.",
      "Итоговый акт продажи квартиры в доме с указанием цены, этажа и мест общего пользования."
    ),
    where: W7(
      "يحرر نهائياً أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC) لنقل الملكية للمشتري.",
      "Rédigé en définitif devant les adouls puis inscrit à la conservation foncière (ANCFCC) pour transférer la propriété.",
      "Finalized before the adouls then registered with the land registry (ANCFCC) to transfer ownership to the buyer.",
      "Formalizado ante los adouls y luego inscrito en el registro (ANCFCC) para transferir la propiedad.",
      "Redatto in definitivo davanti agli adouls e poi trascritto alla conservatoria (ANCFCC) per il trasferimento.",
      "Endgültig vor den Adouls beurkundet und im Grundbuch (ANCFCC) eingetragen, um das Eigentum zu übertragen.",
      "Окончательно оформляется у адулов и регистрируется в кадастровой службе (ANCFCC) для передачи права собственности."
    ),
    authority: "ancfcc",
    keywords: ["شقة", "appartement", "apartment", "عمارة", "بيع عقاري", "طابق"],
    popular: true,
  },
  {
    id: "vb-vente-maison",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع منزل",
      "Acte de vente d'une maison",
      "Deed of sale of a house",
      "Escritura de venta de una casa",
      "Atto di vendita di una casa",
      "Kaufvertrag über ein Haus",
      "Договор продажи дома"
    ),
    desc: D7(
      "عقد بيع منزل بأرضه ومرافقه، يبين حدوده وثمنه ومن يتحمل مصاريف التسجيل.",
      "Acte de vente d'une maison avec son terrain et ses dépendances, précisant ses limites, son prix et les frais d'enregistrement.",
      "Deed selling a house with its land and outbuildings, stating boundaries, price and registration fees.",
      "Escritura de venta de una casa con su terreno, indicando linderos, precio y gastos de registro.",
      "Atto di vendita di una casa con il terreno, indicando confini, prezzo e spese di registrazione.",
      "Urkunde über den Verkauf eines Hauses mit Grundstück, mit Grenzen, Preis und Registrierungskosten.",
      "Акт продажи дома с участком и пристройками, с указанием границ, цены и расходов на регистрацию."
    ),
    where: W7(
      "يحرر أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC) باسم المشتري.",
      "Rédigé devant les adouls puis inscrit à la conservation foncière (ANCFCC) au nom de l'acheteur.",
      "Drawn up before the adouls then registered with the land registry (ANCFCC) in the buyer's name.",
      "Redactado ante los adouls y luego inscrito en el registro (ANCFCC) a nombre del comprador.",
      "Redatto davanti agli adouls e poi trascritto alla conservatoria (ANCFCC) a nome dell'acquirente.",
      "Vor den Adouls erstellt und im Grundbuch (ANCFCC) auf den Namen des Käufers eingetragen.",
      "Составляется у адулов и регистрируется в кадастровой службе (ANCFCC) на имя покупателя."
    ),
    authority: "ancfcc",
    keywords: ["منزل", "maison", "house", "بيع عقار", "أرض", "حدود"],
  },
  {
    id: "vb-vente-terrain-agricole",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع أرض فلاحية",
      "Vente d'un terrain agricole",
      "Sale of agricultural land",
      "Venta de un terreno agrícola",
      "Vendita di un terreno agricolo",
      "Verkauf von Ackerland",
      "Продажа сельскохозяйственного участка"
    ),
    desc: D7(
      "بيع أرض فلاحية مع بيان مساحتها وحدودها وحقوق السقي إن وجدت واستغلالها الحالي.",
      "Vente d'une terre agricole précisant sa superficie, ses limites, ses droits d'eau et son exploitation actuelle.",
      "Sale of farm land stating its area, boundaries, water rights and current cultivation.",
      "Venta de tierra agrícola con su superficie, linderos, derechos de agua y cultivo actual.",
      "Vendita di terreno agricolo con superficie, confini, diritti d'acqua e coltura attuale.",
      "Verkauf von Ackerland unter Angabe von Fläche, Grenzen, Wasserrechten und aktueller Bewirtschaftung.",
      "Продажа сельхозземли с указанием площади, границ, прав на воду и текущего использования."
    ),
    where: W7(
      "يحرر أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC)، مع الإشارة إلى الرسوم العقارية المترتبة.",
      "Rédigé devant les adouls puis inscrit à la conservation foncière (ANCFCC), avec mention des droits d'enregistrement dus.",
      "Drawn up before the adouls then registered with the land registry (ANCFCC), stating the registration duties due.",
      "Redactado ante los adouls y luego inscrito en el registro (ANCFCC), indicando los impuestos de registro.",
      "Redatto davanti agli adouls e poi trascritto alla conservatoria (ANCFCC), con indicazione dei tributi dovuti.",
      "Vor den Adouls erstellt und im Grundbuch (ANCFCC) eingetragen, unter Angabe der anfallenden Gebühren.",
      "Составляется у адулов и регистрируется в кадастровой службе (ANCFCC) с указанием причитающихся сборов."
    ),
    authority: "ancfcc",
    keywords: ["أرض فلاحية", "terrain agricole", "agricultural land", "سقي", "استغلال", "مساحة"],
  },
  {
    id: "vb-vente-terrain-constructible",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع أرض للبناء",
      "Vente d'un terrain constructible",
      "Sale of a building plot",
      "Venta de un solar edificable",
      "Vendita di un lotto edificabile",
      "Verkauf eines Baugrundstücks",
      "Продажа участка под застройку"
    ),
    desc: D7(
      "بيع أرض صالحة للبناء داخل تجزئة، مع بيان مساحتها وترقيمها وحدودها وموقعها.",
      "Vente d'un terrain constructible dans un lotissement, précisant sa superficie, son numéro et ses limites.",
      "Sale of a building plot within a subdivision, stating its area, lot number and boundaries.",
      "Venta de un solar en una urbanización, con su superficie, número de lote y linderos.",
      "Vendita di un lotto edificabile in lottizzazione, con superficie, numero e confini.",
      "Verkauf eines Baugrundstücks in einem Neubaugebiet, mit Fläche, Parzellennummer und Grenzen.",
      "Продажа участка под застройку в районе деления с указанием площади, номера и границ."
    ),
    where: W7(
      "يحرر أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC)، وترفق به وثائق التجزئة عند الاقتضاء.",
      "Rédigé devant les adouls puis inscrit à la conservation foncière (ANCFCC), avec les pièces du lotissement le cas échéant.",
      "Drawn up before the adouls then registered with the land registry (ANCFCC), with the subdivision papers where applicable.",
      "Redactado ante los adouls y luego inscrito en el registro (ANCFCC), con los papeles de la urbanización si procede.",
      "Redatto davanti agli adouls e poi trascritto alla conservatoria (ANCFCC), con i documenti della lottizzazione ove occorrano.",
      "Vor den Adouls erstellt und im Grundbuch (ANCFCC) eingetragen, gegebenenfalls mit den Papieren des Baugebiets.",
      "Составляется у адулов и регистрируется в кадастровой службе (ANCFCC), при необходимости с документами о делении."
    ),
    authority: "ancfcc",
    keywords: ["أرض للبناء", "constructible", "building plot", "تجزئة", "lotissement", "ترقيم"],
  },
  {
    id: "vb-vente-immeuble-occupe",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع عقار مشغول",
      "Vente d'un immeuble occupé",
      "Sale of an occupied building",
      "Venta de un edificio ocupado",
      "Vendita di uno stabile occupato",
      "Verkauf eines vermieteten Gebäudes",
      "Продажа здания с арендаторами"
    ),
    desc: D7(
      "بيع عقار مشغول بكرائه، حيث يحل المشتري محل البائع في العقود الجارية مع المكترين.",
      "Vente d'un bien donné en location, l'acquéreur se substituant au vendeur dans les baux en cours.",
      "Sale of a tenanted property, the buyer stepping into the seller's shoes under the running leases.",
      "Venta de un inmueble alquilado, donde el comprador sustituye al vendedor en los contratos vigentes.",
      "Vendita di un immobile locato, con il compratore che subentra al venditore nei contratti in corso.",
      "Verkauf eines vermieteten Objekts, wobei der Käufer in die laufenden Mietverträge eintritt.",
      "Продажа сданного в аренду объекта, где покупатель занимает место продавца в действующих договорах."
    ),
    where: W7(
      "يحرر أمام العدلين مع بيان وضعية الكراء ثم يسجل بالمحافظة العقارية (ANCFCC).",
      "Rédigé devant les adouls avec mention de la situation locative, puis inscrit à la conservation foncière (ANCFCC).",
      "Drawn up before the adouls stating the tenancy situation, then registered with the land registry (ANCFCC).",
      "Redactado ante los adouls indicando la situación de alquiler, luego inscrito en el registro (ANCFCC).",
      "Redatto davanti agli adouls con indicazione della situazione locatizia, poi trascritto alla conservatoria (ANCFCC).",
      "Vor den Adouls erstellt unter Angabe der Mietsituation, dann im Grundbuch (ANCFCC) eingetragen.",
      "Составляется у адулов с указанием ситуации по аренде, затем регистрируется в кадастровой службе (ANCFCC)."
    ),
    authority: "ancfcc",
    keywords: ["مشغول", "occupé", "tenanted", "كراء", "locataires", "مكترون"],
  },
  {
    id: "vb-promesse-vente-etage-surface",
    cat: "uqud-bay",
    title: T7(
      "عقد وعد بالبيع للطابق الأول والثاني والسطح من منزل",
      "Promesse de vente du premier étage, du deuxième étage et de la surface d'une maison",
      "Promise to sell the first floor, second floor and roof of a house",
      "Promesa de venta del primer piso, segundo piso y azotea de una casa",
      "Promessa di vendita del primo piano, secondo piano e terrazza di una casa",
      "Verkaufsversprechen für das erste und zweite Obergeschoss samt Dachterrasse eines Hauses",
      "Обещание продажи первого и второго этажей с крышей дома"
    ),
    desc: D7(
      "وعد بالبيع يحرر بين الموعود والواعد حول أجزاء محددة من عقار مع تحديد الثمن وآجال العقد النهائي.",
      "Promesse de vente entre promettant et bénéficiaire portant sur des parties précises d'un bien, avec prix et délais de l'acte définitif.",
      "Promise to sell between promisor and beneficiary covering precise parts of a property, with price and deadlines for the final deed.",
      "Promesa de venta entre promitente y beneficiario sobre partes precisas de un inmueble, con precio y plazos para la escritura definitiva.",
      "Promessa di vendita tra promittente e beneficiario su parti precise di un immobile, con prezzo e scadenze dell'atto definitivo.",
      "Verkaufsversprechen zwischen Verkäufer und Begünstigtem über konkrete Teile eines Objekts, mit Preis und Fristen für die endgültige Urkunde.",
      "Обещание продажи между обещателем и выгодоприобретателем на конкретные части объекта, с ценой и сроками итогового акта."
    ),
    where: W7(
      "يحرر بين الطرفين ثم يقدم للمحافظة العقارية عند تحرير العقد النهائي (ANCFCC)",
      "Rédigé entre les parties puis présenté à la conservation foncière (ANCFCC) pour l'acte définitif",
      "Drawn up between the parties then presented to the land registry (ANCFCC) for the final deed",
      "Redactado entre las partes y presentado al registro de la propiedad (ANCFCC) para la escritura definitiva",
      "Redatto tra le parti e presentato alla conservatoria (ANCFCC) per l'atto definitivo",
      "Zwischen den Parteien erstellt und für die endgültige Urkunde dem Grundbuchamt (ANCFCC) vorgelegt",
      "Составляется сторонами и подаётся в кадастровую службу (ANCFCC) для итогового акта"
    ),
    authority: "ancfcc",
    keywords: ["وعد بالبيع", "promesse de vente", "promise to sell", "طابق", "سطح", "منزل"],
    popular: true,
  },
  {
    id: "vb-recu-prix-immobilier",
    cat: "uqud-bay",
    title: T7(
      "وصل استلام ثمن عقار",
      "Reçu du prix d'un bien immobilier",
      "Receipt of a property price",
      "Recibo del precio de un inmueble",
      "Ricevuta del prezzo di un immobile",
      "Quittung über den Kaufpreis einer Immobilie",
      "Расписка о получении цены недвижимости"
    ),
    desc: D7(
      "وصل يثبت استلام البائع ثمن العقار كاملاً نقداً أو بصك، ويرفق عند تحرير العقد النهائي.",
      "Reçu attestant que le vendeur a perçu l'intégralité du prix, en espèces ou par chèque, pour l'acte définitif.",
      "Receipt attesting that the seller received the full price, in cash or by cheque, for the final deed.",
      "Recibo que acredita que el vendedor percibió el precio íntegro, en efectivo o cheque, para la escritura.",
      "Ricevuta che attesta l'incasso integrale del prezzo, in contanti o assegno, per l'atto definitivo.",
      "Quittung, die den vollständigen Empfang des Preises in Bar oder per Scheck für die endgültige Urkunde belegt.",
      "Расписка, удостоверяющая получение продавцом полной цены наличными или чеком для итогового акта."
    ),
    where: W7(
      "يحرر بين البائع والمشتري ويحفظ، ثم يقدم للعدلين والمحافظة العقارية عند تحرير العقد النهائي.",
      "Établi entre vendeur et acheteur et conservé, puis produit devant les adouls et la conservation foncière pour l'acte définitif.",
      "Issued between seller and buyer and kept, then produced before the adouls and the land registry for the final deed.",
      "Emitido entre vendedor y comprador y guardado, luego presentado ante los adouls y el registro para la escritura.",
      "Emesso tra venditore e compratore e conservato, quindi prodotto davanti agli adouls e alla conservatoria per l'atto.",
      "Zwischen Verkäufer und Käufer ausgestellt und aufbewahrt, dann den Adouls und dem Grundbuchamt vorgelegt.",
      "Оформляется продавцом и покупателем, хранится и предъявляется адулам и кадастровой службе для итогового акта."
    ),
    keywords: ["وصل استلام الثمن", "reçu du prix", "receipt", "أداء كامل", "prix payé", "نقداً"],
  },
  {
    id: "vb-vente-entree-famille",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع عقار بين أفراد العائلة",
      "Vente d'un bien immobilier entre membres d'une même famille",
      "Property sale between family members",
      "Venta de inmueble entre miembros de una misma familia",
      "Vendita di immobile tra membri della stessa famiglia",
      "Immobilienverkauf zwischen Familienangehörigen",
      "Продажа недвижимости между членами семьи"
    ),
    desc: D7(
      "بيع عقار بين الأقارب بثمن رمزي أو مفضل غالباً، مع بيان الرابطة العائلية بين الطرفين.",
      "Vente d'un bien entre proches à prix symbolique ou préférentiel, en précisant le lien de parenté des parties.",
      "Sale of property between relatives at a symbolic or preferential price, stating the parties' family tie.",
      "Venta de inmueble entre parientes a precio simbólico o preferente, indicando el vínculo familiar.",
      "Vendita di immobile tra parenti a prezzo simbolico o preferenziale, indicando il legame familiare.",
      "Verkauf zwischen Verwandten zu symbolischem oder Vorzugspreis, mit Angabe der Verwandtschaft.",
      "Продажа недвижимости между родственниками по символической или льготной цене с указанием родства сторон."
    ),
    where: W7(
      "يحرر أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC) كما في أي بيع عقاري آخر.",
      "Rédigé devant les adouls puis inscrit à la conservation foncière (ANCFCC) comme toute autre vente immobilière.",
      "Drawn up before the adouls then registered with the land registry (ANCFCC) like any other property sale.",
      "Redactado ante los adouls y luego inscrito en el registro (ANCFCC) como cualquier otra venta.",
      "Redatto davanti agli adouls e poi trascritto alla conservatoria (ANCFCC) come ogni altra vendita immobiliare.",
      "Vor den Adouls erstellt und im Grundbuch (ANCFCC) eingetragen wie bei jedem anderen Immobilienverkauf.",
      "Составляется у адулов и регистрируется в кадастровой службе (ANCFCC), как при любой другой продаже."
    ),
    authority: "ancfcc",
    keywords: ["بين أفراد العائلة", "entre proches", "family sale", "ثمن رمزي", "prix symbolique", "أقارب"],
  },
  {
    id: "vb-echange-biens",
    cat: "uqud-bay",
    title: T7(
      "عقد مبادلة عقارين",
      "Échange de deux biens immobiliers",
      "Exchange of two properties",
      "Permuta de dos inmuebles",
      "Permuta di due immobili",
      "Tausch zweier Immobilien",
      "Обмен двумя объектами недвижимости"
    ),
    desc: D7(
      "مبادلة عقارين مقابل بعضهما مع أداء فرق القيمة إن وجد، وتسجل كما يسجل البيع العقاري.",
      "Permutation de deux biens l'un contre l'autre, avec soulte éventuelle, enregistrée comme une vente.",
      "Swap of two properties for one another, with any balancing payment, registered like a sale.",
      "Permuta de dos inmuebles, con pago de diferencia si la hay, registrada como una venta.",
      "Permuta di due immobili, con eventuale conguaglio, registrata come una vendita.",
      "Tausch zweier Immobilien gegeneinander, mit eventueller Ausgleichszahlung, beurkundet und eingetragen wie ein Verkauf.",
      "Обмен двух объектов друг на друга с доплатой разницы, регистрируется как продажа."
    ),
    where: W7(
      "يحرر أمام العدلين ثم يسجل بالمحافظة العقارية (ANCFCC) بالنسبة للعقارين معاً.",
      "Rédigé devant les adouls puis inscrit à la conservation foncière (ANCFCC) pour les deux biens à la fois.",
      "Drawn up before the adouls then registered with the land registry (ANCFCC) for both properties at once.",
      "Redactado ante los adouls y luego inscrito en el registro (ANCFCC) para ambos inmuebles a la vez.",
      "Redatto davanti agli adouls e poi trascritto alla conservatoria (ANCFCC) per entrambi gli immobili.",
      "Vor den Adouls erstellt und im Grundbuch (ANCFCC) für beide Objekte zugleich eingetragen.",
      "Составляется у адулов и регистрируется в кадастровой службе (ANCFCC) сразу по обоим объектам."
    ),
    authority: "ancfcc",
    keywords: ["مبادلة", "échange", "permuta", "مقايضة", "soulte", "عقارين"],
  },
  {
    id: "vb-vente-hota-irthiya",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع الحصة الإرثية",
      "Vente d'une part successorale",
      "Sale of an inherited share",
      "Venta de una parte hereditaria",
      "Vendita di una quota ereditaria",
      "Verkauf eines Erbanteils",
      "Продажа наследственной доли"
    ),
    desc: D7(
      "بيع وارث حصته الشائعة من تركة عقارية، مع بيان مصدر حقه ومصاريف التسجيل على المشتري.",
      "Vente par un héritier de sa quote-part dans une succession immobilière, avec l'origine de son droit.",
      "Sale by an heir of their undivided share in an estate, stating the origin of the right.",
      "Venta por un heredero de su parte indivisa en la herencia, indicando el origen de su derecho.",
      "Vendita da parte di un erede della sua quota indivisa, con l'origine del suo diritto.",
      "Verkauf des ungeteilten Erbanteils durch einen Erben, mit Angabe der Herkunft des Rechts.",
      "Продажа наследником своей неразделённой доли в имуществе с указанием основания права."
    ),
    where: W7(
      "يحرر أمام العدلين مرفقاً بشهادة الإرث، ثم يسجل بالمحافظة العقارية (ANCFCC).",
      "Rédigé devant les adouls avec l'attestation d'héritage, puis inscrit à la conservation foncière (ANCFCC).",
      "Drawn up before the adouls with the heirship certificate, then registered with the land registry (ANCFCC).",
      "Redactado ante los adouls con el acta de herencia, luego inscrito en el registro (ANCFCC).",
      "Redatto davanti agli adouls con il certificato di eredità, poi trascritto alla conservatoria (ANCFCC).",
      "Vor den Adouls mit dem Erbschein erstellt und im Grundbuch (ANCFCC) eingetragen.",
      "Составляется у адулов со свидетельством о наследстве, затем регистрируется в кадастровой службе (ANCFCC)."
    ),
    authority: "ancfcc",
    keywords: ["حصة إرثية", "part successorale", "inherited share", "تركة", "ميراث", "شائعة"],
  },
  {
    id: "vb-vente-immeuble-complet",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع عمارة كاملة",
      "Vente d'un immeuble complet",
      "Sale of an entire building",
      "Venta de un edificio completo",
      "Vendita di uno stabile intero",
      "Verkauf eines ganzen Gebäudes",
      "Продажа здания целиком"
    ),
    desc: D7(
      "بيع عمارة بجميع طوابقها وشققها والمرافق المشتركة، مع بيان مداخيلها وحالتها القانونية.",
      "Vente d'un immeuble avec tous ses étages et parties communes, en précisant sa consistance et sa situation juridique.",
      "Sale of a building with all its floors and common parts, stating its composition and legal status.",
      "Venta de un edificio con todas sus plantas y zonas comunes, con su descripción y situación jurídica.",
      "Vendita di uno stabile con tutti i piani e le parti comuni, con consistenza e situazione giuridica.",
      "Verkauf eines Gebäudes mit allen Etagen und Gemeinschaftsflächen, mit Bestand und Rechtslage.",
      "Продажа здания со всеми этажами и общими помещениями с указанием состава и правового статуса."
    ),
    where: W7(
      "يحرر أمام العدلين مع بيان عدد الطوابق والشقق ثم يسجل بالمحافظة العقارية (ANCFCC).",
      "Rédigé devant les adouls avec le détail des étages et lots, puis inscrit à la conservation foncière (ANCFCC).",
      "Drawn up before the adouls detailing floors and units, then registered with the land registry (ANCFCC).",
      "Redactado ante los adouls detallando plantas y lotes, luego inscrito en el registro (ANCFCC).",
      "Redatto davanti agli adouls con dettaglio di piani e unità, poi trascritto alla conservatoria (ANCFCC).",
      "Vor den Adouls mit Auflistung der Etagen und Einheiten erstellt, dann im Grundbuch (ANCFCC) eingetragen.",
      "Составляется у адулов с перечислением этажей и помещений, затем регистрируется в кадастровой службе (ANCFCC)."
    ),
    authority: "ancfcc",
    keywords: ["عمارة", "immeuble", "building", "طوابق", "شقق", "مرافق"],
  },
  {
    id: "vb-vente-surface-immeuble",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع سطح من عمارة",
      "Vente de la surface d'un immeuble",
      "Sale of a building rooftop (surface)",
      "Venta de la azotea de un edificio",
      "Vendita della superficie di un edificio",
      "Verkauf der Dachfläche eines Gebäudes",
      "Продажа крыши здания"
    ),
    desc: D7(
      "بيع سطح عمارة لاستغلاله في البناء أو إقامة غرفة، مع تحديد حق المرور والارتقاء عليه.",
      "Vente de la toiture d'un immeuble pour aménagement, en définissant les droits d'accès et de passage.",
      "Sale of a building's rooftop for development, defining the access and passage rights attached to it.",
      "Venta de la azotea de un edificio para su acondicionamiento, definiendo los derechos de acceso y paso.",
      "Vendita della copertura di un edificio per sistemazione, definendo i diritti di accesso e passaggio.",
      "Verkauf der Dachfläche eines Gebäudes zum Ausbau, mit Festlegung der Zugangs- und Wegerechte.",
      "Продажа крыши здания под обустройство с определением прав доступа и прохода."
    ),
    where: W7(
      "يحرر أمام العدلين مع تحديد حدود السطح ثم يسجل بالمحافظة العقارية (ANCFCC).",
      "Rédigé devant les adouls avec délimitation de la surface, puis inscrit à la conservation foncière (ANCFCC).",
      "Drawn up before the adouls delimiting the rooftop, then registered with the land registry (ANCFCC).",
      "Redactado ante los adouls delimitando la azotea, luego inscrito en el registro (ANCFCC).",
      "Redatto davanti agli adouls delimitando la superficie, poi trascritto alla conservatoria (ANCFCC).",
      "Vor den Adouls mit Abgrenzung der Dachfläche erstellt und im Grundbuch (ANCFCC) eingetragen.",
      "Составляется у адулов с обозначением границ крыши, затем регистрируется в кадастровой службе (ANCFCC)."
    ),
    authority: "ancfcc",
    keywords: ["سطح", "surface", "rooftop", "عمارة", "azotea", "ارتقاء"],
  },

  // ─── Fonds de commerce & entreprises ───
  {
    id: "vb-vente-cafe-equipe",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع مقهى مجهز",
      "Vente d'un café équipé",
      "Sale of an equipped café",
      "Venta de una cafetería equipada",
      "Vendita di un bar attrezzato",
      "Verkauf eines eingerichteten Cafés",
      "Продажа оборудованного кафе"
    ),
    desc: D7(
      "بيع مقهى بترخيصه وتجهيزاته وأصله التجاري، مع بيان الرخصة الجارية ووضعية الكراء.",
      "Vente d'un café avec son autorisation, son matériel et son fonds, en précisant le bail en cours.",
      "Sale of a café with its licence, equipment and goodwill, stating the running lease.",
      "Venta de una cafetería con licencia, equipamiento y fondo de comercio, indicando el alquiler vigente.",
      "Vendita di un bar con licenza, attrezzature e avviamento, indicando il contratto d'affitto in corso.",
      "Verkauf eines Cafés mit Lizenz, Ausstattung und Geschäftswert, unter Angabe des laufenden Mietvertrags.",
      "Продажа кафе с лицензией, оборудованием и деловой репутацией с указанием действующей аренды."
    ),
    where: W7(
      "يحرر بين الطرفين بمساعدة مهنية عند الاقتضاء، ثم تسجل المعاملة وتحدث البيانات بالسجل التجاري (OMPIC).",
      "Rédigé entre les parties avec un professionnel si besoin, puis l'opération est inscrite au registre du commerce (OMPIC).",
      "Drawn up between the parties with a professional if needed, then the operation is entered in the commercial register (OMPIC).",
      "Redactado entre las partes con un profesional si hace falta, luego la operación se inscribe en el registro mercantil (OMPIC).",
      "Redatto tra le parti con un professionista se occorre, poi l'operazione si iscrive al registro delle imprese (OMPIC).",
      "Zwischen den Parteien gegebenenfalls mit einem Profi erstellt, dann im Handelsregister (OMPIC) eingetragen.",
      "Составляется сторонами при необходимости с профессионалом, затем сделка вносится в торговый реестр (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["مقهى", "café", "equipped café", "رخصة", "أصل تجاري", "fonds"],
  },
  {
    id: "vb-promesse-vente-fonds",
    cat: "uqud-bay",
    title: T7(
      "عقد وعد ببيع محل تجاري",
      "Promesse de vente d'un fonds de commerce",
      "Promise to sell a business (goodwill)",
      "Promesa de venta de un fondo de comercio",
      "Promessa di vendita di un'azienda",
      "Verkaufsversprechen für ein Geschäft",
      "Обещание продажи бизнеса"
    ),
    desc: D7(
      "وعد يلزم البائع ببيع أصله التجاري لشروط محددة، مع بيان أجل العقد النهائي وشرط جزائي عند الاقتضاء.",
      "Promesse engageant le vendeur à céder son fonds aux conditions fixées, avec délai de l'acte définitif.",
      "Promise binding the seller to transfer the business on fixed terms, with a deadline for the final deed.",
      "Promesa que obliga al vendedor a ceder su negocio en condiciones fijadas, con plazo para la escritura.",
      "Promessa che vincola il venditore a cedere l'azienda a condizioni fissate, con termine per l'atto.",
      "Verbindliches Versprechen, das den Verkäufer zur Übertragung seines Geschäfts zu festen Bedingungen samt Frist verpflichtet.",
      "Обещание, обязывающее продавца передать бизнес на фиксированных условиях со сроком итогового акта."
    ),
    where: W7(
      "يحرر بين الواعد والموعود له، ثم يعقب بعقد نهائي تسجل معه المعاملة بالسجل التجاري (OMPIC).",
      "Rédigé entre promettant et bénéficiaire, suivi d'un acte définitif inscrit au registre du commerce (OMPIC).",
      "Drawn up between promisor and beneficiary, followed by a final deed entered in the commercial register (OMPIC).",
      "Redactado entre promitente y beneficiario, seguido de una escritura definitiva inscrita en el registro (OMPIC).",
      "Redatto tra promittente e beneficiario, seguito da un atto definitivo iscritto al registro (OMPIC).",
      "Zwischen Verkäufer und Begünstigtem erstellt, gefolgt von einer endgültigen Urkunde im Handelsregister (OMPIC).",
      "Составляется между обещателем и выгодоприобретателем, затем итоговый акт вносится в торговый реестр (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["وعد ببيع", "promesse de vente", "business promise", "أصل تجاري", "fonds", "شرط جزائي"],
  },
  {
    id: "vb-cession-parts-sarl",
    cat: "uqud-bay",
    title: T7(
      "عقد تنازل عن حصص اجتماعية",
      "Cession de parts sociales d'une SARL",
      "Transfer of SARL company shares",
      "Cesión de participaciones sociales de una SL",
      "Cessione di quote di una SRL",
      "Übertragung von Gesellschaftsanteilen einer GmbH",
      "Передача долей в компании (SARL)"
    ),
    desc: D7(
      "تنازل شريك عن حصصه في شركة ذات مسؤولية محدودة، يتبعه تحديث بيانات السجل التجاري.",
      "Cession par un associé de ses parts dans une SARL, suivie de la mise à jour du registre du commerce.",
      "Transfer by a partner of their shares in an LLC, followed by updating the commercial register.",
      "Cesión por un socio de sus participaciones en una SL, seguida de la actualización del registro mercantil.",
      "Cessione da parte di un socio delle sue quote, seguita dall'aggiornamento del registro delle imprese.",
      "Übertragung der Anteile eines Gesellschafters, gefolgt von der Aktualisierung des Handelsregisters der Gesellschaft.",
      "Передача участником своих долей с последующим обновлением торгового реестра."
    ),
    where: W7(
      "يحرر أمام موثق ثم يودع بالمحافظة التجارية لتحيين بيانات الشركة (OMPIC).",
      "Rédigé devant un notaire puis déposé à la conservation pour la mise à jour des données de la société (OMPIC).",
      "Drawn up before a notary then filed with the registrar to update the company's records (OMPIC).",
      "Redactado ante notario y luego depositado para actualizar los datos de la sociedad (OMPIC).",
      "Redatto davanti a un notaio e poi depositato per l'aggiornamento dei dati societari (OMPIC).",
      "Vor einem Notar erstellt und dann zur Aktualisierung der Gesellschaftsdaten hinterlegt (OMPIC).",
      "Составляется у нотариуса и подаётся для обновления данных компании (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["حصص اجتماعية", "parts sociales", "SARL", "ش.م.م", "LLC shares", "شريك"],
    popular: true,
  },
  {
    id: "vb-cession-clientele",
    cat: "uqud-bay",
    title: T7(
      "عقد تنازل عن زبناء مهنة حرة",
      "Cession de clientèle (profession libérale)",
      "Transfer of clientele (liberal profession)",
      "Cesión de clientela (profesión liberal)",
      "Cessione di clientela (professione intellettuale)",
      "Übertragung des Klientels (freier Beruf)",
      "Передача клиентуры (частная практика)"
    ),
    desc: D7(
      "تنازل صاحب مهنة حرة عن زبنائه وخبرته لفائدة زميل، مع الالتزام بعدم المنافسة.",
      "Transmission par un professionnel libéral de sa clientèle à un confrère, avec clause de non-concurrence.",
      "Handover of a liberal professional's clientele to a colleague, with a non-compete clause.",
      "Transmisión de la clientela de un profesional liberal a un colega, con cláusula de no competencia.",
      "Trasferimento della clientela di un professionista a un collega, con clausola di non concorrenza.",
      "Übergabe der Kundschaft eines Freiberuflers an einen Kollegen, verbunden mit einem Wettbewerbsverbot.",
      "Передача клиентуры частнопрактикующего специалиста коллеге с условием о недопущении конкуренции."
    ),
    where: W7(
      "يحرر بين المهنيين ويبلغ للهيئة المهنية المعنية، مع احترام حرية الزبناء في الاختيار.",
      "Rédigé entre les professionnels et notifié à l'ordre concerné, dans le respect du libre choix des clients.",
      "Drawn up between the professionals and notified to the concerned order, respecting the clients' free choice.",
      "Redactado entre los profesionales y notificado al colegio correspondiente, respetando la libre elección.",
      "Redatto tra i professionisti e notificato all'ordine competente, nel rispetto della libera scelta.",
      "Zwischen den Berufsträgern erstellt und der zuständigen Kammer mitgeteilt, unter Wahrung der freien Wahl.",
      "Составляется между специалистами и доводится до соответствующей палаты с соблюдением свободы выбора клиентов."
    ),
    keywords: ["زبناء", "clientèle", "clientele", "مهنة حرة", "non-concurrence", "تنازل"],
  },
  {
    id: "vb-vente-local-avec-fonds",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع محل تجاري مع عقاره ونشاطه",
      "Vente d'un local commercial avec murs et fonds",
      "Sale of commercial premises with walls and business",
      "Venta de local comercial con muros y negocio",
      "Vendita di un locale commerciale con muri e azienda",
      "Verkauf eines Geschäftslokals mit Mauern und Geschäft",
      "Продажа нежилого помещения со стенами и бизнесом"
    ),
    desc: D7(
      "بيع محل تجاري ببنائه وأصله في صفقة واحدة، مع بيان الكراء والتراخيص والتجهيزات.",
      "Vente d'un local avec ses murs et son fonds en une seule opération, en précisant le bail et les licences.",
      "Sale of premises with walls and goodwill in one operation, stating the lease and licences.",
      "Venta de local con muros y negocio en una sola operación, indicando el alquiler y las licencias.",
      "Vendita di un locale con muri e azienda in un'unica operazione, indicando affitto e licenze.",
      "Verkauf von Räumen mit Mauern und Geschäft in einem Vorgang, unter Angabe von Miete und Lizenzen.",
      "Продажа помещения со стенами и бизнесом одной сделкой с указанием аренды и лицензий."
    ),
    where: W7(
      "يحرر أمام العدلين بالنسبة للعقار ثم تسجل معاملة الأصل التجاري بالسجل التجاري (OMPIC).",
      "Rédigé devant les adouls pour les murs, puis la cession du fonds est inscrite au registre du commerce (OMPIC).",
      "Drawn up before the adouls for the walls, then the business transfer is entered in the commercial register (OMPIC).",
      "Redactado ante los adouls por los muros, luego la cesión del negocio se inscribe en el registro (OMPIC).",
      "Redatto davanti agli adouls per i muri, poi la cessione dell'azienda si iscrive al registro (OMPIC).",
      "Für die Mauern vor den Adouls erstellt; die Geschäftsübertragung wird im Handelsregister (OMPIC) eingetragen.",
      "Оформляется у адулов в отношении стен, затем передача бизнеса вносится в торговый реестр (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["محل تجاري", "murs et fonds", "walls and business", "أصل تجاري", "local commercial", "كراء"],
  },
  {
    id: "vb-cession-marque",
    cat: "uqud-bay",
    title: T7(
      "عقد تنازل عن علامة تجارية واسم تجاري",
      "Cession d'une marque et d'un nom commercial",
      "Assignment of a trademark and trade name",
      "Cesión de una marca y nombre comercial",
      "Cessione di un marchio e nome commerciale",
      "Übertragung einer Marke und eines Firmennamens",
      "Передача товарного знака и фирменного наименования"
    ),
    desc: D7(
      "تنازل عن علامة مسجلة واسم تجاري مع حق استغلالهما، ويسجل التنازل لدى مصالح الملكية الصناعية.",
      "Cession d'une marque enregistrée et d'un nom commercial, dont l'inscription auprès de l'OMPIC est requise.",
      "Assignment of a registered trademark and trade name, requiring registration with the OMPIC.",
      "Cesión de una marca registrada y nombre comercial, que exige su inscripción ante el OMPIC.",
      "Cessione di un marchio registrato e di un nome commerciale, con obbligo di registrazione all'OMPIC.",
      "Übertragung einer eingetragenen Marke und eines Firmennamens, deren Eintragung beim OMPIC nötig ist.",
      "Передача зарегистрированного товарного знака и фирменного наименования с обязательной регистрацией в OMPIC."
    ),
    where: W7(
      "يحرر بين الطرفين ثم يودع بالمكتب المغربي للملكية الصناعية والتجارية لتسجيل التنازل (OMPIC).",
      "Rédigé entre les parties puis déposé à l'OMPIC pour l'enregistrement de la cession de la marque.",
      "Drawn up between the parties then filed with the OMPIC to register the trademark assignment.",
      "Redactado entre las partes y luego depositado en el OMPIC para registrar la cesión de la marca.",
      "Redatto tra le parti e poi depositato all'OMPIC per registrare la cessione del marchio.",
      "Zwischen den Parteien erstellt und beim OMPIC zur Eintragung der Markenübertragung hinterlegt.",
      "Составляется сторонами и подаётся в OMPIC для регистрации передачи товарного знака."
    ),
    authority: "ompic",
    keywords: ["علامة تجارية", "marque", "trademark", "اسم تجاري", "OMPIC", "ملكية صناعية"],
  },
  {
    id: "vb-vente-stock",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع مخزون البضاعة",
      "Vente du stock de marchandises",
      "Sale of merchandise stock",
      "Venta del stock de mercancías",
      "Vendita delle scorte di merce",
      "Verkauf des Warenlagers",
      "Продажа товарных запасов"
    ),
    desc: D7(
      "بيع رصيد البضاعة الموجود بالمحل جملةً واحدة، مع جرد تفصيلي وقيمته وطريقة أداء ثمنه.",
      "Vente en bloc du stock existant, avec inventaire détaillé, valorisation et modalités de paiement.",
      "Block sale of the existing stock, with a detailed inventory, valuation and payment terms.",
      "Venta en bloque del stock existente, con inventario detallado, valoración y forma de pago.",
      "Vendita in blocco delle scorte esistenti, con inventario dettagliato, valutazione e modalità di pagamento.",
      "Verkauf des bestehenden Lagers en bloc, mit detailliertem Inventar, Bewertung und Zahlungsmodalitäten.",
      "Продажа всего остатка товаров с подробной описью, оценкой и условиями оплаты."
    ),
    where: W7(
      "يحرر بين البائع والمشتري مع جرد موقع من الطرفين، ويحفظ للإثبات المحاسبي والتجاري.",
      "Rédigé entre vendeur et acheteur avec inventaire signé des deux parties, conservé pour la comptabilité.",
      "Drawn up between seller and buyer with an inventory signed by both, kept for accounting purposes.",
      "Redactado entre vendedor y comprador con inventario firmado por ambos, guardado para la contabilidad.",
      "Redatto tra venditore e compratore con inventario sottoscritto da entrambi, conservato ai fini contabili.",
      "Zwischen Verkäufer und Käufer mit beidseitig unterzeichnetem Inventar erstellt, für die Buchführung aufbewahrt.",
      "Составляется продавцом и покупателем с описью, подписанной обеими сторонами, для бухгалтерского учёта."
    ),
    keywords: ["مخزون", "stock", "بضاعة", "inventaire", "جرد"],
  },
  {
    id: "vb-vente-cabinet-medical",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع عيادة طبية",
      "Vente d'un cabinet médical",
      "Sale of a medical practice",
      "Venta de una consulta médica",
      "Vendita di uno studio medico",
      "Verkauf einer Arztpraxis",
      "Продажа врачебной практики"
    ),
    desc: D7(
      "بيع عيادة طبية بتجهيزاتها وزبنائها، مع مراعاة الضوابط المهنية في نقل الملفات الطبية.",
      "Vente d'un cabinet avec son matériel et sa clientèle, dans le respect des règles professionnelles de transmission.",
      "Sale of a practice with its equipment and patients, observing professional rules on handover.",
      "Venta de una consulta con su equipo y pacientes, conforme a las normas profesionales de transmisión.",
      "Vendita di uno studio con attrezzature e pazienti, nel rispetto delle norme professionali.",
      "Verkauf einer Praxis mit Ausstattung und Patienten unter Wahrung der berufsrechtlichen Vorschriften.",
      "Продажа практики с оборудованием и пациентами с соблюдением профессиональных правил передачи."
    ),
    where: W7(
      "يحرر بين الطبيبين ويبلغ للهيئة الوطنية للأطباء، مع حفظ سر الملفات الطبية للمرضى.",
      "Rédigé entre les deux médecins et notifié à l'ordre national des médecins, avec le secret des dossiers.",
      "Drawn up between the two physicians and notified to the national order of physicians, keeping patients' files confidential.",
      "Redactado entre los dos médicos y notificado al colegio nacional de médicos, guardando el secreto.",
      "Redatto tra i due medici e notificato all'ordine nazionale dei medici, con riservatezza delle cartelle.",
      "Zwischen den beiden Ärzten erstellt und der Ärztekammer gemeldet, unter Wahrung der Aktengeheimhaltung.",
      "Составляется между двумя врачами и доводится до национальной палаты врачей при сохранении тайны карт."
    ),
    keywords: ["عيادة", "cabinet médical", "medical practice", "طبيب", "زبناء", "ملفات طبية"],
  },
  {
    id: "vb-cession-entreprise",
    cat: "uqud-bay",
    title: T7(
      "عقد تنازل عن مقاولة فردية",
      "Cession d'une entreprise individuelle (transmission globale)",
      "Transfer of a sole proprietorship (global handover)",
      "Cesión de una empresa individual (transmisión global)",
      "Cessione di un'azienda individuale (trasferimento globale)",
      "Übertragung eines Einzelunternehmens (Gesamtübergang)",
      "Передача индивидуального предприятия (полная)"
    ),
    desc: D7(
      "نقل ملكية مقاولة فردية بكل عناصرها من ذمة إلى أخرى: معدات ومخزون وحق كراء وزبناء.",
      "Transmission de tous les éléments d'une entreprise individuelle : matériel, stock, droit au bail et clientèle.",
      "Handover of all elements of a sole proprietorship: equipment, stock, lease right and clientele.",
      "Transmisión de todos los elementos de una empresa individual: equipo, stock, traspaso y clientela.",
      "Trasferimento di tutti gli elementi dell'azienda: attrezzature, scorte, diritto d'affitto e clientela.",
      "Übergang sämtlicher Elemente eines Einzelunternehmens: Ausstattung, Lager, Mietrecht, Marken und Kundschaft.",
      "Передача всех элементов индивидуального предприятия: оборудования, запасов, права аренды и клиентуры."
    ),
    where: W7(
      "يحرر بمساعدة مهنية ثم تسجل المعاملة وتحدث بيانات السجل التجاري باسم المتنازل إليه (OMPIC).",
      "Rédigé avec l'aide d'un professionnel puis inscrit, le registre du commerce étant mis à jour au nom du repreneur (OMPIC).",
      "Drawn up with professional help then registered, the commercial register being updated in the buyer's name (OMPIC).",
      "Redactado con ayuda profesional y luego inscrito, actualizándose el registro mercantil a nombre del adquirente (OMPIC).",
      "Redatto con l'aiuto di un professionista e poi iscritto, aggiornando il registro a nome dell'acquirente (OMPIC).",
      "Mit fachlicher Hilfe erstellt und dann eingetragen, wobei das Handelsregister auf den Übernehmer umgeschrieben wird (OMPIC).",
      "Составляется с помощью профессионала и регистрируется, торговый реестр обновляется на имя правопреемника (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["مقاولة", "entreprise individuelle", "sole proprietorship", "transmission", "ذمة", "حق الكراء"],
  },
  {
    id: "vb-vente-boulangerie",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع مخبزة مجهزة",
      "Vente d'une boulangerie équipée",
      "Sale of an equipped bakery",
      "Venta de una panadería equipada",
      "Vendita di un panificio attrezzato",
      "Verkauf einer eingerichteten Bäckerei",
      "Продажа оборудованной пекарни"
    ),
    desc: D7(
      "بيع مخبزة بأفرانها وتجهيزاتها وأصلها التجاري، مع بيان رخصة الاستغلال والكراء الجاري.",
      "Vente d'une boulangerie avec ses fours, son matériel et son fonds, en précisant la licence et le bail.",
      "Sale of a bakery with its ovens, equipment and goodwill, stating the licence and lease.",
      "Venta de una panadería con hornos, equipo y fondo de comercio, indicando licencia y alquiler.",
      "Vendita di un panificio con forni, attrezzature e avviamento, indicando licenza e affitto.",
      "Verkauf einer Bäckerei mit Öfen, Ausstattung und Geschäftswert, unter Angabe von Lizenz und Mietvertrag.",
      "Продажа пекарни с печами, оборудованием и деловой репутацией с указанием лицензии и аренды."
    ),
    where: W7(
      "يحرر بين الطرفين بمساعدة مهنية، ثم تحدث بيانات السجل التجاري ورخصة الاستغلال (OMPIC).",
      "Rédigé entre les parties avec un professionnel, puis les données du registre du commerce sont mises à jour (OMPIC).",
      "Drawn up between the parties with a professional, then the commercial register data are updated (OMPIC).",
      "Redactado entre las partes con un profesional, luego se actualizan los datos del registro mercantil (OMPIC).",
      "Redatto tra le parti con un professionista, poi si aggiornano i dati del registro (OMPIC).",
      "Zwischen den Parteien mit einem Profi erstellt, anschließend werden die Registerdaten aktualisiert (OMPIC).",
      "Составляется сторонами с профессионалом, затем данные торгового реестра обновляются (OMPIC)."
    ),
    authority: "ompic",
    keywords: ["مخبزة", "boulangerie", "bakery", "أفران", "رخصة", "أصل تجاري"],
  },

  // ─── Meubles & équipements ───
  {
    id: "vb-vente-equipements-cafe",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع تجهيزات مقهى ومطعم",
      "Vente d'équipements de café et restaurant",
      "Sale of café and restaurant equipment",
      "Venta de equipamiento de cafetería y restaurante",
      "Vendita di attrezzature da bar e ristorante",
      "Verkauf von Café- und Restaurantausstattung",
      "Продажа оборудования кафе и ресторана"
    ),
    desc: D7(
      "بيع تجهيزات المقهى والمطعم من آلات ومقاعد وثلاجات، بمعزل عن الأصل التجاري نفسه.",
      "Vente du matériel du café ou restaurant (machines, sièges, réfrigérateurs), indépendamment du fonds.",
      "Sale of café or restaurant equipment (machines, seating, fridges) apart from the goodwill.",
      "Venta del equipamiento del café o restaurante (máquinas, asientos, frigoríficos), aparte del fondo.",
      "Vendita delle attrezzature di bar o ristorante (macchine, sedute, frigoriferi), separatamente dall'avviamento.",
      "Verkauf der Café- oder Restaurantausstattung (Maschinen, Sitze, Kühlgeräte), getrennt vom eigentlichen Geschäftswert.",
      "Продажа оборудования кафе или ресторана (машины, сиденья, холодильники) отдельно от репутации."
    ),
    where: W7(
      "يحرر بين الطرفين مع لائحة موقعة لكل قطعة، ويحفظ للإثبات عند أي نزاع.",
      "Rédigé entre les parties avec une liste signée pièce par pièce, conservé en cas de litige.",
      "Drawn up between the parties with a signed item-by-item list, kept in case of dispute.",
      "Redactado entre las partes con lista firmada pieza por pieza, guardado en caso de disputa.",
      "Redatto tra le parti con elenco firmato pezzo per pezzo, conservato in caso di contestazione.",
      "Zwischen den Parteien mit Stückliste erstellt und für Streitfälle aufbewahrt.",
      "Составляется сторонами с подписанным перечнем по каждой единице, хранится на случай спора."
    ),
    keywords: ["تجهيزات", "équipements", "equipment", "مقهى", "مطعم", "ثلاجات"],
  },
  {
    id: "vb-vente-materiel-agricole",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع آلات فلاحية",
      "Vente de matériel agricole",
      "Sale of agricultural equipment",
      "Venta de maquinaria agrícola",
      "Vendita di macchinari agricoli",
      "Verkauf von Landmaschinen",
      "Продажа сельскохозяйственной техники"
    ),
    desc: D7(
      "بيع آلات ومعدات فلاحية كالمحراث والحصادة، مع بيان أنواعها وحالتها عند البيع.",
      "Vente d'engins agricoles (charrue, moissonneuse…), avec mention de leur type et leur état.",
      "Sale of farm machinery (plough, harvester…), stating each item's type and condition.",
      "Venta de maquinaria agrícola (arado, cosechadora…), indicando el tipo y el estado de cada equipo.",
      "Vendita di macchine agricole (aratro, mietitrebbia…), con indicazione del tipo e dello stato di ciascuna.",
      "Verkauf von Landmaschinen (Pflug, Mähdrescher…), mit Angabe von Art und Zustand jedes Stücks.",
      "Продажа сельхозмашин (плуг, комбайн…) с указанием типа и состояния каждой."
    ),
    where: W7(
      "يحرر بين البائع والمشتري مع جرد الآلات، ويحفظ لدى الطرفين للإثبات.",
      "Rédigé entre vendeur et acheteur avec inventaire des engins, conservé par les deux parties.",
      "Drawn up between seller and buyer with an inventory of the machinery, kept by both parties.",
      "Redactado entre vendedor y comprador con inventario de la maquinaria, guardado por ambas partes.",
      "Redatto tra venditore e compratore con inventario dei mezzi, conservato da entrambe le parti.",
      "Zwischen Verkäufer und Käufer mit Inventar der Maschinen erstellt, von beiden Parteien aufbewahrt.",
      "Составляется продавцом и покупателем с описью техники, хранится у обеих сторон."
    ),
    keywords: ["آلات فلاحية", "matériel agricole", "farm machinery", "محراث", "engins", "حصادة"],
  },
  {
    id: "vb-vente-animaux",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع حيوانات",
      "Vente d'animaux (bétail)",
      "Sale of animals (livestock)",
      "Venta de animales (ganado)",
      "Vendita di animali (bestiame)",
      "Verkauf von Tieren (Vieh)",
      "Продажа животных (скота)"
    ),
    desc: D7(
      "بيع مواشي وأغنام وأبقار بعدد محدد، مع بيان جنسها وعمرها وحالتها الصحية عند التسليم.",
      "Vente d'un cheptel en nombre déterminé, avec indication de l'espèce, de l'âge et de l'état sanitaire.",
      "Sale of a set number of livestock, stating species, age and health condition at delivery.",
      "Venta de un número determinado de cabezas de ganado, con especie, edad y estado sanitario.",
      "Vendita di un numero determinato di capi, con specie, età e stato sanitario alla consegna.",
      "Verkauf einer bestimmten Anzahl Vieh, mit Angabe von Art, Alter und Gesundheitszustand.",
      "Продажа определённого количества голов скота с указанием вида, возраста и состояния здоровья."
    ),
    where: W7(
      "يحرر بين البائع والمشتري غالباً بمناسبة سوق أو موسم، ويحفظ للإثبات.",
      "Rédigé entre vendeur et acheteur, souvent à l'occasion d'un souk, et conservé pour preuve.",
      "Drawn up between seller and buyer, often at a livestock market, and kept as proof.",
      "Redactado entre vendedor y comprador, a menudo con ocasión de un zoco, y guardado como prueba.",
      "Redatto tra venditore e compratore, spesso in occasione di un souk, conservato come prova.",
      "Zwischen Verkäufer und Käufer erstellt, oft anlässlich eines Souks, und als Nachweis aufbewahrt.",
      "Составляется продавцом и покупателем, часто по случаю рынка (сук), хранится как доказательство."
    ),
    keywords: ["حيوانات", "bétail", "livestock", "أغنام", "أبقار", "ماشية"],
  },
  {
    id: "vb-vente-recolte",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع محصول قائم",
      "Vente de récolte sur pied",
      "Sale of a standing crop",
      "Venta de cosecha en pie",
      "Vendita di raccolto in piedi",
      "Verkauf der stehenden Ernte",
      "Продажа урожая на корню"
    ),
    desc: D7(
      "بيع زرع قائم في أرضه قبل جنيه، مع بيان المساحة وأجل الجذاذ ومآل الأرض بعده.",
      "Vente d'une culture sur pied avant récolte, en précisant la superficie, la date de cueillette et la suite du terrain.",
      "Sale of a standing crop before harvest, stating the area, the harvest deadline and the land's subsequent use.",
      "Venta de cultivo en pie antes de la cosecha, con superficie, plazo de recolección y destino del terreno.",
      "Vendita di coltura in piedi prima del raccolto, con superficie, termine di raccolta e uso del terreno.",
      "Verkauf der stehenden Ernte vor der Ernte, mit Fläche, Erntefrist und anschließender Bodennutzung.",
      "Продажа урожая на корню до сбора с указанием площади, срока уборки и дальнейшего использования земли."
    ),
    where: W7(
      "يحرر بين الفلاح والمشتري على الأرض محل الزرع أو بمناسبة معاينتها، ويحفظ للإثبات.",
      "Rédigé entre l'agriculteur et l'acheteur sur la parcelle ou lors de sa visite, conservé pour preuve.",
      "Drawn up between the farmer and the buyer on the plot or during its inspection, kept as proof.",
      "Redactado entre el agricultor y el comprador en la parcela o durante su inspección, guardado como prueba.",
      "Redatto tra l'agricoltore e il compratore sul fondo o durante l'ispezione, conservato come prova.",
      "Zwischen Landwirt und Käufer auf der Parzelle oder bei der Besichtigung erstellt, als Nachweis aufbewahrt.",
      "Составляется фермером и покупателем на участке или при его осмотре, хранится как доказательство."
    ),
    keywords: ["محصول", "récolte", "crop", "زرع", "جذاذ", "فلاحة"],
  },
  {
    id: "vb-hiba-manqul",
    cat: "uqud-bay",
    title: T7(
      "عقد هبة منقول",
      "Donation d'un bien meuble",
      "Gift of a movable asset",
      "Donación de un bien mueble",
      "Donazione di un bene mobile",
      "Schenkung eines beweglichen Guts",
      "Дарение движимого имущества"
    ),
    desc: D7(
      "تفويت منقول بهبة مجانية دون عوض، مع قبول الموهوب له وتسليم العين الموهوبة إليه.",
      "Transfert gracieux d'un bien meuble sans contrepartie, avec acceptation du donataire et remise du bien.",
      "Gratuitous transfer of a movable asset without consideration, with the donee's acceptance and delivery.",
      "Transmisión gratuita de un bien mueble sin contrapartida, con aceptación del donatario y entrega.",
      "Trasferimento gratuito di un bene mobile, con accettazione del donatario e consegna del bene.",
      "Unentgeltliche Übertragung eines beweglichen Guts, mit Annahme des Beschenkten und Übergabe des Guts.",
      "Безвозмездная передача движимого имущества с согласием одаряемого и вручением вещи."
    ),
    where: W7(
      "يحرر بين الواهب والموهوب له ويتم بالتسليم الفعلي للمنقول الموهوب.",
      "Rédigé entre donateur et donataire et parfait par la remise effective du bien meuble.",
      "Drawn up between donor and donee and perfected by the actual delivery of the movable asset.",
      "Redactado entre donante y donatario y se perfecciona con la entrega efectiva del bien.",
      "Redatto tra donante e donatario e si perfeziona con la consegna effettiva del bene.",
      "Zwischen Schenker und Beschenktem erstellt und durch die tatsächliche Übergabe vollzogen.",
      "Составляется дарителем и одаряемым и совершается фактической передачей имущества."
    ),
    keywords: ["هبة", "donation", "gift", "منقول", "مجاني", "واهب"],
  },
  {
    id: "vb-vente-ameublement",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع أثاث منزل كامل",
      "Vente de l'ameublement complet d'une maison",
      "Sale of a home's complete furnishing",
      "Venta del amueblamiento completo de una casa",
      "Vendita dell'arredamento completo di una casa",
      "Verkauf der kompletten Möblierung eines Hauses",
      "Продажа полной обстановки дома"
    ),
    desc: D7(
      "بيع أثاث منزل كامل جملةً واحدة بمناسبة انتقال أو تغيير سكنى، مع لائحة مفصلة للأثاث.",
      "Vente en bloc de tout le mobilier d'une habitation à l'occasion d'un déménagement, avec liste détaillée.",
      "Bulk sale of a home's entire furniture upon moving out, with a detailed item list.",
      "Venta en bloque de todo el mobiliario de una vivienda al mudarse, con lista detallada.",
      "Vendita in blocco di tutti i mobili di un'abitazione in occasione di un trasloco, con lista dettagliata.",
      "Verkauf der gesamten Möbel einer Wohnung beim Umzug, mit detaillierter Liste.",
      "Продажа всей мебели жилья при переезде с подробным перечнем."
    ),
    where: W7(
      "يحرر بين البائع والمشتري مع لائحة موقعة، ويتم التسليم بالمنزل محل الأثاث.",
      "Rédigé entre vendeur et acheteur avec liste signée, la livraison se faisant sur place.",
      "Drawn up between seller and buyer with a signed list, delivery taking place on the premises.",
      "Redactado entre vendedor y comprador con lista firmada, entregándose en el propio domicilio.",
      "Redatto tra venditore e compratore con lista firmata, con consegna presso l'abitazione.",
      "Zwischen Verkäufer und Käufer mit unterzeichneter Liste; die Übergabe erfolgt vor Ort.",
      "Составляется продавцом и покупателем с подписанным перечнем, передача происходит на месте."
    ),
    keywords: ["أثاث", "ameublement", "furnishing", "انتقال", "déménagement", "جملة"],
  },
  {
    id: "vb-vente-equipement-atelier",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع تجهيزات ورشة",
      "Vente d'équipements d'atelier",
      "Sale of workshop equipment",
      "Venta de equipamiento de taller",
      "Vendita di attrezzature da officina",
      "Verkauf von Werkstattausrüstung",
      "Продажа оборудования мастерской"
    ),
    desc: D7(
      "بيع آلات وعدد ورشة ميكانيكية أو حرفية، مع بيان حالتها وطريقة نقلها وتسليمها للمشتري.",
      "Vente des machines et outillages d'un atelier, en précisant leur état et les conditions de leur enlèvement.",
      "Sale of a workshop's machines and tools, stating their condition and removal arrangements.",
      "Venta de máquinas y herramientas de un taller, indicando su estado y las condiciones de retiro.",
      "Vendita delle macchine e degli attrezzi di un'officina, con stato e modalità di ritiro.",
      "Verkauf der Maschinen und Werkzeuge einer Werkstatt, mit Zustand und Abtransportmodalitäten.",
      "Продажа станков и инструментов мастерской с указанием состояния и условий вывоза."
    ),
    where: W7(
      "يحرر بين الطرفين مع جرد الآلات، ويسلم العدد بالمحل أو ينقل على نفقة المشتري.",
      "Rédigé entre les parties avec inventaire, les outils étant laissés sur place ou enlevés aux frais de l'acheteur.",
      "Drawn up between the parties with an inventory, the tools being left on site or removed at the buyer's expense.",
      "Redactado entre las partes con inventario, quedando las herramientas en el sitio o retirándolas el comprador.",
      "Redatto tra le parti con inventario, con attrezzi lasciati sul posto o ritirati a spese del compratore.",
      "Zwischen den Parteien mit Inventar; Werkzeuge bleiben vor Ort oder werden auf Kosten des Käufers abtransportiert.",
      "Составляется сторонами с описью; инструменты остаются на месте или вывозятся за счёт покупателя."
    ),
    keywords: ["ورشة", "atelier", "workshop", "آلات", "outillage", "ميكانيكية"],
  },
  {
    id: "vb-vente-manqul-mensualites",
    cat: "uqud-bay",
    title: T7(
      "عقد بيع منقول بالتقسيط",
      "Vente d'un bien meuble à tempérament",
      "Sale of a movable asset by instalments",
      "Venta de un bien mueble a plazos",
      "Vendita di un bene mobile a rate",
      "Verkauf eines beweglichen Guts auf Raten",
      "Продажа движимого имущества в рассрочку"
    ),
    desc: D7(
      "بيع منقول بأقساط دورية مع احتفاظ البائع بملكيته إلى حين أداء القسط الأخير كاملاً.",
      "Vente d'un meuble payé par échéances, le vendeur en conservant la propriété jusqu'au dernier versement.",
      "Sale of a movable paid in instalments, the seller retaining ownership until the final payment.",
      "Venta de un mueble pagado en cuotas, conservando el vendedor la propiedad hasta el último pago.",
      "Vendita di un bene mobile a rate, con riserva di proprietà fino all'ultimo versamento.",
      "Verkauf eines beweglichen Guts in Raten, mit Eigentumsvorbehalt bis zur letzten Zahlung.",
      "Продажа движимого имущества в рассрочку с сохранением права собственности до последнего платежа."
    ),
    where: W7(
      "يوقع بين البائع والمشتري ويحفظ لديهما، وتنقل الملكية للمشتري بعد أداء آخر قسط.",
      "Signé entre vendeur et acheteur et conservé par eux, la propriété étant transférée après le dernier versement.",
      "Signed between seller and buyer and kept by them, ownership being transferred after the last instalment.",
      "Firmado entre vendedor y comprador, transfiriéndose la propiedad tras la última cuota.",
      "Firmato tra venditore e compratore, con trasferimento della proprietà dopo l'ultima rata.",
      "Zwischen Verkäufer und Käufer unterschrieben; das Eigentum geht nach der letzten Rate über.",
      "Подписывается продавцом и покупателем; право собственности переходит после последнего взноса."
    ),
    keywords: ["تقسيط", "à tempérament", "instalments", "أقساط", "réserve de propriété", "منقول"],
  },
];
