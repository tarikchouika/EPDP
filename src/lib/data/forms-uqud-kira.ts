// Lease contracts — residential, commercial, equipped premises,
// vehicles, farmland and receipts. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsUqudKira: DocumentItem[] = [
  // ─── Habitation — appartements, maisons, colocations ───
  {
    id: "vk-kira-appartement",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء شقة",
      "Contrat de location d'un appartement",
      "Lease contract for an apartment",
      "Contrato de alquiler de un apartamento",
      "Contratto di locazione di un appartamento",
      "Mietvertrag für eine Wohnung",
      "Договор аренды квартиры"
    ),
    desc: D7(
      "عقد ينظم كراء شقة داخل عمارة، مع تحديد الكراء الشهري والمدة وواجبات المكتري تجاه المكري.",
      "Contrat organisant la location d'un appartement en immeuble, en fixant le loyer mensuel, la durée et les obligations du locataire.",
      "Contract governing the rental of an apartment in a building, setting the monthly rent, duration and the tenant's obligations.",
      "Contrato que regula el alquiler de un apartamento en edificio, fijando la renta mensual, la duración y las obligaciones del inquilino.",
      "Contratto che disciplina la locazione di un appartamento in stabile, fissando il canone mensile, la durata e gli obblighi del conduttore.",
      "Vertrag zur Miete einer Wohnung im Mehrfamilienhaus, mit Monatsmiete, Dauer und Mieterpflichten.",
      "Договор аренды квартиры в доме: ежемесячная плата, срок и обязанности арендатора."
    ),
    where: W7(
      "يحرر بين المكري والمكتري ويسجل عند الاقتضاء لدى المصلحة الضريبية المحلية",
      "Rédigé entre bailleur et locataire, enregistré le cas échéant auprès du service fiscal local",
      "Drawn up between landlord and tenant, registered where required with the local tax office",
      "Redactado entre arrendador e inquilino, registrado en su caso ante la oficina fiscal local",
      "Redatto tra locatore e conduttore, registrato ove richiesto presso l'ufficio fiscale locale",
      "Zwischen Vermieter und Mieter erstellt, bei Bedarf beim lokalen Finanzamt eingetragen",
      "Составляется арендодателем и арендатором, при необходимости регистрируется в местной налоговой"
    ),
    keywords: ["كراء شقة", "location appartement", "apartment lease", "bail appartement"],
    popular: true,
  },
  {
    id: "vk-kira-maison",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء منزل مستقل",
      "Contrat de location d'une maison individuelle",
      "Lease contract for a detached house",
      "Contrato de alquiler de una casa independiente",
      "Contratto di locazione di una casa indipendente",
      "Mietvertrag für ein freistehendes Haus",
      "Договор аренды отдельного дома"
    ),
    desc: D7(
      "عقد يحدد كراء منزل عائلي مستقل بمرافقه، مع بيان الكراء وآجاله وقواعد الصيانة.",
      "Contrat fixant la location d'une maison familiale indépendante avec ses dépendances, en précisant le loyer, ses échéances et les règles d'entretien.",
      "Contract setting the lease of a standalone family house with its dependencies, specifying rent, due dates and maintenance rules.",
      "Contrato que fija el alquiler de una casa familiar independiente con sus dependencias, precisando renta, vencimientos y normas de mantenimiento.",
      "Contratto che fissa la locazione di una casa familiare indipendente con pertinenze, precisando canone, scadenze e regole di manutenzione.",
      "Vertrag über die Miete eines freistehenden Familienhauses mit Nebengebäuden, samt Miete, Zahlterminen und Pflegeregeln.",
      "Договор аренды отдельного семейного дома с пристройками: плата, сроки и правила содержания."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل عند الاقتضاء لدى المصلحة الضريبية، مع نسخة لكل منهما",
      "Rédigé entre les parties et enregistré le cas échéant au service fiscal, un exemplaire pour chacune",
      "Drawn up between the parties and registered where required with the tax office, one copy each",
      "Redactado entre las partes y registrado en su caso ante la oficina fiscal, un ejemplar para cada una",
      "Redatto tra le parti e registrato ove richiesto all'ufficio fiscale, una copia per ciascuna",
      "Zwischen den Parteien erstellt und bei Bedarf beim Finanzamt eingetragen, je eine Ausfertigung",
      "Составляется сторонами и при необходимости регистрируется в налоговой, по одному экземпляру каждому"
    ),
    keywords: ["كراء منزل", "location maison", "house lease", "منزل مستقل", "maison individuelle"],
  },
  {
    id: "vk-kira-villa",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء فيلا",
      "Contrat de location d'une villa",
      "Lease contract for a villa",
      "Contrato de alquiler de una villa",
      "Contratto di locazione di una villa",
      "Mietvertrag für eine Villa",
      "Договор аренды виллы"
    ),
    desc: D7(
      "عقد ينظم كراء فيلا بحدائقها ومسبحها، مع اشتراط صيانة المرافق وتحمل المصاريف الخاصة بها.",
      "Contrat organisant la location d'une villa avec ses jardins et sa piscine, en imposant l'entretien des équipements et la charge des dépenses y afférentes.",
      "Contract governing the lease of a villa with gardens and pool, requiring upkeep of amenities and coverage of related costs.",
      "Contrato que regula el alquiler de una villa con jardines y piscina, exigiendo el mantenimiento de las instalaciones y el pago de los gastos correspondientes.",
      "Contratto che disciplina la locazione di una villa con giardini e piscina, richiedendo la cura degli impianti e l'onere delle relative spese.",
      "Vertrag zur Miete einer Villa mit Garten und Pool, mit Auflage zur Pflege der Anlagen und Übernahme der Kosten.",
      "Договор аренды виллы с садом и бассейном: содержание удобств и оплата связанных расходов."
    ),
    where: W7(
      "يحرر بين الطرفين، ويسجل عند الاقتضاء لدى المصلحة الضريبية أو الموثق",
      "Rédigé entre les parties, enregistré le cas échéant auprès du service fiscal ou du notaire",
      "Drawn up between the parties, registered where required with the tax office or a notary",
      "Redactado entre las partes, registrado en su caso ante la oficina fiscal o notario",
      "Redatto tra le parti, registrato ove richiesto all'ufficio fiscale o al notaio",
      "Zwischen den Parteien erstellt, bei Bedarf beim Finanzamt oder Notar eingetragen",
      "Составляется сторонами, при необходимости регистрируется в налоговой или у нотариуса"
    ),
    keywords: ["كراء فيلا", "location villa", "villa lease", "فيلا"],
  },
  {
    id: "vk-kira-studio",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء استوديو",
      "Contrat de location d'un studio",
      "Lease contract for a studio",
      "Contrato de alquiler de un estudio",
      "Contratto di locazione di uno studio",
      "Mietvertrag für ein Studio",
      "Договор аренды студии"
    ),
    desc: D7(
      "عقد يغطي كراء استوديو صغير مجهز، مع تحديد الكراء الشهري وحقوق الاستعمال الفردي.",
      "Contrat couvrant la location d'un petit studio équipé, en fixant le loyer mensuel et les conditions d'usage individuel.",
      "Contract covering the lease of a small equipped studio, setting the monthly rent and the terms of single occupancy.",
      "Contrato que cubre el alquiler de un pequeño estudio equipado, fijando la renta mensual y las condiciones de uso individual.",
      "Contratto che copre la locazione di un piccolo studio attrezzato, fissando il canone mensile e le condizioni d'uso individuale.",
      "Vertrag zur Miete eines kleinen ausgestatteten Studios, mit Monatsmiete und Bedingungen der Einzelnutzung.",
      "Договор аренды небольшой оборудованной студии: ежемесячная плата и условия индивидуального пользования."
    ),
    where: W7(
      "يحرر بين الطرفين عند تسليم المفاتيح، وتحفظ نسخة لكل منهما",
      "Rédigé entre les parties à la remise des clés, une copie conservée par chacune",
      "Drawn up between the parties when keys are handed over, a copy kept by each",
      "Redactado entre las partes en la entrega de llaves, una copia para cada una",
      "Redatto tra le parti alla consegna delle chiavi, una copia per ciascuna",
      "Bei der Schlüsselübergabe zwischen den Parteien erstellt, je eine Kopie",
      "Составляется при передаче ключей, копия — у каждой из сторон"
    ),
    keywords: ["كراء استوديو", "location studio", "studio lease", "استوديو"],
  },
  {
    id: "vk-kira-duplex",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء دوبلكس",
      "Contrat de location d'un duplex",
      "Lease contract for a duplex",
      "Contrato de alquiler de un dúplex",
      "Contratto di locazione di un duplex",
      "Mietvertrag für ein Duplex",
      "Договор аренды дуплекса"
    ),
    desc: D7(
      "عقد يرتب كراء شقة على مستويين، مع بيان توزيع الغرف والكراء وواجبات الصيانة.",
      "Contrat réglant la location d'un appartement sur deux niveaux, en décrivant la répartition des pièces, le loyer et les obligations d'entretien.",
      "Contract governing the lease of a two-level apartment, describing the layout of rooms, the rent and upkeep duties.",
      "Contrato que regula el alquiler de un apartamento en dos niveles, describiendo la distribución, la renta y las obligaciones de mantenimiento.",
      "Contratto che disciplina la locazione di un appartamento su due livelli, descrivendo la disposizione degli ambienti, il canone e gli obblighi di manutenzione.",
      "Vertrag zur Miete eines Apartments auf zwei Ebenen, mit Grundriss, Miete und Pflegepflichten.",
      "Договор аренды двухуровневой квартиры: планировка, плата и обязанности по содержанию."
    ),
    where: W7(
      "يحرر بين المكري والمكتري، ويعرض عند الاقتضاء على المصلحة الضريبية للتسجيل",
      "Rédigé entre bailleur et locataire, présenté le cas échéant au service fiscal pour enregistrement",
      "Drawn up between landlord and tenant, submitted where required to the tax office for registration",
      "Redactado entre arrendador e inquilino, presentado en su caso a la oficina fiscal para su registro",
      "Redatto tra locatore e conduttore, presentato ove richiesto all'ufficio fiscale per la registrazione",
      "Zwischen Vermieter und Mieter erstellt, bei Bedarf dem Finanzamt zur Eintragung vorgelegt",
      "Составляется сторонами, при необходимости подаётся в налоговую для регистрации"
    ),
    keywords: ["كراء دوبلكس", "location duplex", "duplex lease", "دوبلكس"],
  },
  {
    id: "vk-kira-chambre-etudiant",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء غرفة لطالب",
      "Contrat de location d'une chambre pour étudiant",
      "Lease contract for a student room",
      "Contrato de alquiler de una habitación para estudiante",
      "Contratto di locazione di una stanza per studente",
      "Mietvertrag für ein Studentenzimmer",
      "Договор аренды комнаты для студента"
    ),
    desc: D7(
      "عقد يخص كراء غرفة داخل سكن مشترك لفائدة طالب، مع تحديد الكراء والمدة الدراسية وقواعد السكن.",
      "Contrat portant sur la location d'une chambre dans un logement partagé au profit d'un étudiant, en fixant le loyer, la période universitaire et les règles de vie.",
      "Contract covering the rental of a room in shared housing for a student, setting the rent, the academic period and house rules.",
      "Contrato sobre el alquiler de una habitación en vivienda compartida para un estudiante, fijando la renta, el período académico y las normas de convivencia.",
      "Contratto relativo alla locazione di una stanza in alloggio condiviso per uno studente, fissando il canone, il periodo accademico e le regole di convivenza.",
      "Vertrag über die Miete eines Zimmers in einer Gemeinschaftswohnung für einen Studierenden, mit Miete, Semesterfrist und Hausregeln.",
      "Договор аренды комнаты в совместном жилье для студента: плата, учебный период и правила проживания."
    ),
    where: W7(
      "يحرر بين المكري والمكتري الطالب أو وليه، وتحفظ نسخة لدى كل طرف",
      "Rédigé entre le bailleur et l'étudiant locataire ou son tuteur, une copie pour chaque partie",
      "Drawn up between the landlord and the student tenant or their guardian, a copy for each party",
      "Redactado entre el arrendador y el estudiante inquilino o su tutor, una copia para cada parte",
      "Redatto tra il locatore e lo studente conduttore o il suo tutore, una copia per ciascuna parte",
      "Zwischen Vermieter und studierendem Mieter bzw. dessen Vormund erstellt, je eine Kopie",
      "Составляется арендодателем и студентом-арендатором или его опекуном, копия — каждой стороне"
    ),
    keywords: ["كراء غرفة", "chambre étudiant", "student room", "طالب", "كراء غرفة طالب"],
  },
  {
    id: "vk-kira-colocation",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مشترك بين شركاء السكن",
      "Contrat de colocation entre colocataires",
      "Flatshare agreement between co-tenants",
      "Contrato de piso compartido entre coinquilinos",
      "Contratto di coabitazione tra coinquilini",
      "WG-Vertrag zwischen Mitbewohnern",
      "Договор совместного проживания между соседями по жилью"
    ),
    desc: D7(
      "عقد يجمع شركاء السكن على توزيع الكراء والمصاريف والواجبات المنزلية وتعويض المتلف.",
      "Contrat unissant des colocataires autour de la répartition du loyer, des charges, des tâches domestiques et de la compensation des dégradations.",
      "Agreement binding co-tenants on splitting rent, charges, household duties and compensation for damage.",
      "Contrato que une a los compañeros de piso en el reparto de la renta, los gastos, las tareas domésticas y la compensación de daños.",
      "Contratto che vincola i coinquilini alla ripartizione di canone, spese, faccende domestiche e risarcimento dei danni.",
      "Vertrag, der Mitbewohner an die Aufteilung von Miete, Nebenkosten, Haushaltspflichten und Schadensersatz bindet.",
      "Договор, связывающий соседей по жилью: раздел аренды, расходов, бытовых обязанностей и возмещения ущерба."
    ),
    where: W7(
      "يحرر بين جميع شركاء السكن، وبموافقة المكري على ترتيب الشركة بينهم",
      "Établi entre tous les colocataires, avec l'approbation du bailleur pour leur arrangement",
      "Established among all the co-tenants, with the landlord's approval of their arrangement",
      "Establecido entre todos los compañeros de piso, con la aprobación del arrendador",
      "Steso tra tutti i coinquilini, con l'approvazione del locatore",
      "Unter allen Mitbewohnern geschlossen, mit Zustimmung des Vermieters",
      "Заключается всеми соседями по жилью с одобрением арендодателя"
    ),
    keywords: ["سكن مشترك", "colocation", "flatshare", "شركاء السكن", "colocataires"],
  },
  {
    id: "vk-kira-saisonnier",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء موسمي (الصيف)",
      "Contrat de location saisonnière (été)",
      "Seasonal lease contract (summer)",
      "Contrato de alquiler de temporada (verano)",
      "Contratto di locazione stagionale (estate)",
      "Mietvertrag auf Zeit (Sommer)",
      "Договор сезонной аренды (лето)"
    ),
    desc: D7(
      "عقد يغطي كراء سكن لفصل الصيف فقط، بكراء اتفاقي وأجل محدد دون تجديد تلقائي.",
      "Contrat couvrant la location d'un logement pour l'été seulement, à loyer convenu et terme fixe sans renouvellement tacite.",
      "Contract covering the rental of a dwelling for the summer only, at an agreed rent and fixed term without tacit renewal.",
      "Contrato que cubre el alquiler de una vivienda solo para el verano, con renta convenida y plazo fijo sin renovación tácita.",
      "Contratto che copre la locazione di un alloggio per la sola estate, a canone concordato e termine fisso senza tacito rinnovo.",
      "Vertrag zur Miete einer Wohnung nur für den Sommer, mit vereinbarter Miete und festem Ende ohne stillschweigende Verlängerung.",
      "Договор аренды жилья только на лето: согласованная плата и фиксированный срок без автоматического продления."
    ),
    where: W7(
      "يوقع بين المكري والمكتري قبل انطلاق الموسم، ويحتفظ به الطرفان",
      "Signé entre bailleur et locataire avant le début de la saison, conservé par les deux parties",
      "Signed between landlord and tenant before the season starts, kept by both parties",
      "Firmado entre arrendador e inquilino antes del inicio de la temporada, custodiado por ambas partes",
      "Firmato tra locatore e conduttore prima dell'inizio della stagione, conservato da entrambe le parti",
      "Vor Saisonbeginn zwischen Vermieter und Mieter unterzeichnet, von beiden Parteien aufbewahrt",
      "Подписывается до начала сезона, хранится у обеих сторон"
    ),
    keywords: ["كراء موسمي", "location saisonnière", "seasonal rental", "الصيف", "كراء صيفي"],
  },
  {
    id: "vk-kira-depot-garantie",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مع ضمان",
      "Contrat de bail avec dépôt de garantie",
      "Lease contract with security deposit",
      "Contrato de alquiler con depósito de garantía",
      "Contratto di locazione con deposito cauzionale",
      "Mietvertrag mit Kaution",
      "Договор аренды с залогом"
    ),
    desc: D7(
      "عقد يشترط وديعة نقدية يرجعها المكري عند خروج المكتري بعد خصم ما قد يثبت من أضرار.",
      "Contrat subordonnant le bail au versement d'une caution remboursée au départ du locataire, déduction faite des dommages éventuels.",
      "Contract conditioning the lease on a cash deposit refunded when the tenant leaves, less any proven damage.",
      "Contrato que supedita el alquiler al depósito de una fianza reembolsada a la salida del inquilino, descontados los daños acreditados.",
      "Contratto che subordina la locazione al versamento di un deposito rimborsato all'uscita del conduttore, detratti gli eventuali danni.",
      "Vertrag, der die Miete von einer Kaution abhängig macht, die beim Auszug erstattet wird, abzüglich belegter Schäden.",
      "Договор аренды с денежным залогом, возвращаемым при выезде арендатора за вычетом подтверждённого ущерба."
    ),
    where: W7(
      "يحرر بين الطرفين، ويرفق به وصل أداء الوديعة يحتفظ به المكتري",
      "Rédigé entre les parties, assorti d'un reçu de la caution conservé par le locataire",
      "Drawn up between the parties, with a receipt for the deposit kept by the tenant",
      "Redactado entre las partes, con recibo de la fianza custodiado por el inquilino",
      "Redatto tra le parti, con ricevuta del deposito conservata dal conduttore",
      "Zwischen den Parteien erstellt, mit Quittung über die Kaution beim Mieter",
      "Составляется сторонами, с распиской о залоге на хранении у арендатора"
    ),
    keywords: ["ضمان الكراء", "dépôt de garantie", "security deposit", "وديعة", "caution"],
  },
  {
    id: "vk-kira-sous-location",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء من الباطن",
      "Contrat de sous-location avec accord du bailleur",
      "Sublease contract with the landlord's consent",
      "Contrato de subarriendo con consentimiento del arrendador",
      "Contratto di sublocazione con consenso del locatore",
      "Untermietvertrag mit Zustimmung des Vermieters",
      "Договор субаренды с согласия арендодателя"
    ),
    desc: D7(
      "عقد يخول المكتري الأصلي كراء جزء من العقار لشخص آخر بموافقة كتابية من المكري.",
      "Contrat permettant au locataire principal de sous-louer une partie du bien à un tiers, avec l'accord écrit du bailleur.",
      "Contract allowing the main tenant to sublet part of the property to a third party, with the landlord's written consent.",
      "Contrato que permite al inquilino principal subarrendar parte del inmueble a un tercero, con consentimiento escrito del arrendador.",
      "Contratto che consente al conduttore principale di sublocare parte dell'immobile a un terzo, con il consenso scritto del locatore.",
      "Vertrag, der dem Hauptmieter die Untervermietung eines Teils der Wohnung an Dritte gestattet, mit schriftlicher Zustimmung des Vermieters.",
      "Договор, позволяющий главному арендатору сдать часть объекта третьему лицу с письменного согласия арендодателя."
    ),
    where: W7(
      "يحرر بين المكتري الأصلي والمكتري من الباطن بعد الحصول على موافقة المكري كتابة",
      "Établi entre le locataire principal et le sous-locataire après obtention de l'accord écrit du bailleur",
      "Drawn up between the main tenant and the subtenant after securing the landlord's written approval",
      "Redactado entre el inquilino principal y el subarrendatario tras obtener la aprobación escrita del arrendador",
      "Redatto tra il conduttore principale e il subconduttore dopo aver ottenuto il consenso scritto del locatore",
      "Zwischen Hauptmieter und Untermieter erstellt, nach schriftlicher Zustimmung des Vermieters",
      "Составляется главным арендатором и субарендатором после письменного согласия арендодателя"
    ),
    keywords: ["كراء من الباطن", "sous-location", "sublease", "موافقة المكري", "sublet"],
  },
  // ─── Locaux commerciaux et professionnels ───
  {
    id: "vk-kira-bureau",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مكتب",
      "Contrat de location d'un bureau",
      "Lease contract for an office",
      "Contrato de alquiler de una oficina",
      "Contratto di locazione di un ufficio",
      "Mietvertrag für ein Büro",
      "Договор аренды офиса"
    ),
    desc: D7(
      "عقد ينظم كراء مكتب لمقاولة أو مهنة حرة، مع بيان المصاريف المشتركة ومدة الكراء.",
      "Contrat organisant la location d'un bureau pour une entreprise ou une profession libérale, en précisant les charges communes et la durée.",
      "Contract governing the lease of an office for a company or self-employed professional, specifying common charges and duration.",
      "Contrato que regula el alquiler de una oficina para empresa o profesional independiente, precisando gastos comunes y duración.",
      "Contratto che disciplina la locazione di un ufficio per impresa o professionista, precisando le spese comuni e la durata.",
      "Vertrag über die Büromiete für Firmen oder Freiberufler, mit Nebenkosten und Laufzeit.",
      "Договор аренды офиса для компании или частнопрактикующего специалиста: общие расходы и срок."
    ),
    where: W7(
      "يحرر بين المالك والمقاولة المكترية، ويسجل عند الاقتضاء لدى المصلحة الضريبية",
      "Rédigé entre le propriétaire et l'entreprise locataire, enregistré le cas échéant au service fiscal",
      "Drawn up between the owner and the tenant company, registered where required with the tax office",
      "Redactado entre el propietario y la empresa inquilina, registrado en su caso ante la oficina fiscal",
      "Redatto tra il proprietario e l'azienda conduttrice, registrato ove richiesto all'ufficio fiscale",
      "Zwischen Eigentümer und mietender Firma erstellt, bei Bedarf beim Finanzamt eingetragen",
      "Составляется собственником и компанией-арендатором, при необходимости регистрируется в налоговой"
    ),
    keywords: ["كراء مكتب", "bail bureau", "office lease", "location bureau"],
  },
  {
    id: "vk-kira-entrepot",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مستودع",
      "Contrat de location d'un entrepôt",
      "Lease contract for a warehouse",
      "Contrato de alquiler de un almacén",
      "Contratto di locazione di un magazzino",
      "Mietvertrag für ein Lager",
      "Договор аренды склада"
    ),
    desc: D7(
      "عقد يحدد كراء مستودع لخزن البضائع، مع تحديد الاستعمال الموافق لطبيعة المحل وواجبات الحراسة.",
      "Contrat fixant la location d'un entrepôt pour le stockage de marchandises, en définissant l'usage conforme à la nature des lieux et les obligations de garde.",
      "Contract setting the lease of a warehouse for storing goods, defining a use consistent with the premises and custodial duties.",
      "Contrato que fija el alquiler de un almacén para guardar mercancías, definiendo un uso conforme al local y las obligaciones de custodia.",
      "Contratto che fissa la locazione di un magazzino per lo stoccaggio di merci, definendo un uso conforme ai locali e gli obblighi di custodia.",
      "Vertrag zur Miete eines Lagers für Warenlagerung, mit zweckgemäßer Nutzung und Obhutspflichten.",
      "Договор аренды склада для хранения товаров: использование по назначению и обязанности по надзору."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل عند الاقتضاء لدى المصلحة الضريبية، مع وصف دقيق للمحل",
      "Rédigé entre les parties et enregistré le cas échéant au service fiscal, avec description précise du local",
      "Drawn up between the parties and registered where required with the tax office, with a precise description of the premises",
      "Redactado entre las partes y registrado en su caso ante la oficina fiscal, con descripción precisa del local",
      "Redatto tra le parti e registrato ove richiesto all'ufficio fiscale, con precisa descrizione del locale",
      "Zwischen den Parteien erstellt und bei Bedarf beim Finanzamt eingetragen, mit genauer Beschreibung der Räume",
      "Составляется сторонами и при необходимости регистрируется в налоговой, с точным описанием помещения"
    ),
    keywords: ["كراء مستودع", "bail entrepôt", "warehouse lease", "location entrepôt", "مستودع"],
  },
  {
    id: "vk-kira-terrain-stockage",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء أرض لتخزين البضائع",
      "Contrat de location d'un terrain (stockage)",
      "Lease contract for a storage yard",
      "Contrato de alquiler de un terreno (almacenaje)",
      "Contratto di locazione di un terreno (deposito)",
      "Mietvertrag für ein Freigelände (Lagerung)",
      "Договор аренды площадки для хранения"
    ),
    desc: D7(
      "عقد يغطي كراء أرض فضاء لتخزين بضائع أو معدات، بتحديد المساحة والمدة والاستعمال.",
      "Contrat couvrant la location d'un terrain pour stocker des marchandises ou du matériel, en délimitant la surface, la durée et l'usage.",
      "Contract covering the lease of an open plot for storing goods or equipment, defining the area, duration and use.",
      "Contrato que cubre el alquiler de un terreno para almacenar mercancías o equipo, delimitando superficie, duración y uso.",
      "Contratto che copre la locazione di un terreno per deposito di merci o attrezzature, delimitando superficie, durata e uso.",
      "Vertrag zur Pacht eines Freigeländes zur Lagerung von Waren oder Geräten, mit Fläche, Dauer und Nutzung.",
      "Договор аренды открытой площадки для хранения товаров или техники: площадь, срок и назначение."
    ),
    where: W7(
      "يحرر بين الطرفين مع تحديد حدود الأرض بدقة، ويسجل عند الاقتضاء لدى المصلحة الضريبية",
      "Rédigé entre les parties avec délimitation précise du terrain, enregistré le cas échéant au service fiscal",
      "Drawn up between the parties with precise boundaries of the plot, registered where required with the tax office",
      "Redactado entre las partes con delimitación precisa del terreno, registrado en su caso ante la oficina fiscal",
      "Redatto tra le parti con precisa delimitazione del terreno, registrato ove richiesto all'ufficio fiscale",
      "Zwischen den Parteien erstellt, mit genauer Abgrenzung des Grundstücks, bei Bedarf beim Finanzamt eingetragen",
      "Составляется сторонами с точным описанием границ участка, при необходимости регистрируется в налоговой"
    ),
    keywords: ["كراء أرض", "bail terrain", "storage yard", "تخزين", "terrain stockage"],
  },
  {
    id: "vk-kira-emplacement-kiosque",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء كشك أو موقف بيع",
      "Contrat de location d'un emplacement ou kiosque",
      "Lease contract for a pitch or kiosk",
      "Contrato de alquiler de un puesto o kiosco",
      "Contratto di locazione di un posteggio o chiosco",
      "Mietvertrag für einen Standplatz oder Kiosk",
      "Договор аренды места или киоска"
    ),
    desc: D7(
      "عقد ينظم كراء موقف أو كشك لممارسة بيع صغير، مع تحديد المكان والكراء والالتزامات.",
      "Contrat organisant la location d'un emplacement ou kiosque pour une petite activité de vente, en fixant l'assiette, le loyer et les engagements.",
      "Contract governing the lease of a pitch or kiosk for small-scale selling, setting the spot, the rent and the commitments.",
      "Contrato que regula el alquiler de un puesto o kiosco para pequeña venta, fijando el emplazamiento, la renta y los compromisos.",
      "Contratto che disciplina la locazione di un posto o chiosco per piccola vendita, fissando la sede, il canone e gli impegni.",
      "Vertrag zur Miete eines Standplatzes oder Kiosks für Kleinverkauf, mit Standort, Miete und Pflichten.",
      "Договор аренды места или киоска для мелкой торговли: площадка, плата и обязательства."
    ),
    where: W7(
      "يحرر بين المكري والمكتري، ويتطلب عند وقوع الكشك بالملك العمومي ترخيصا من الجماعة",
      "Rédigé entre bailleur et locataire, nécessitant une autorisation communale lorsque le kiosque se trouve sur le domaine public",
      "Drawn up between landlord and tenant, requiring a communal permit when the kiosk stands on public land",
      "Redactado entre arrendador e inquilino, exigiendo autorización municipal cuando el kiosco está en dominio público",
      "Redatto tra locatore e conduttore, richiede un'autorizzazione comunale se il chiosco sorge su demanio pubblico",
      "Zwischen Vermieter und Mieter erstellt; bei Kiosken im öffentlichen Bereich ist eine kommunale Genehmigung nötig",
      "Составляется арендодателем и арендатором; для киоска на публичной земле нужно разрешение коммуны"
    ),
    keywords: ["كراء كشك", "kiosque", "kiosk lease", "موقف بيع", "emplacement"],
  },
  {
    id: "vk-kira-fermage",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء أرض فلاحية",
      "Contrat de bail à usage agricole (fermage)",
      "Agricultural lease contract (farm lease)",
      "Contrato de arrendamiento de uso agrícola",
      "Contratto di affitto a uso agricolo",
      "Pachtvertrag für landwirtschaftliche Nutzung",
      "Договор аренды сельхозземли"
    ),
    desc: D7(
      "عقد يحدد كراء أرض فلاحية لاستغلال زراعي أو تربية المواشي، مع بيان المساحة والغرض والمدة.",
      "Contrat fixant la location d'une terre agricole pour exploitation ou élevage, en précisant la superficie, la destination et la durée.",
      "Contract setting the lease of farmland for cropping or livestock, specifying the area, purpose and duration.",
      "Contrato que fija el alquiler de tierra agrícola para cultivo o ganadería, precisando superficie, destino y duración.",
      "Contratto che fissa la locazione di un terreno agricolo per coltivazione o allevamento, precisando superficie, destinazione e durata.",
      "Vertrag zur Pacht von Ackerland für Anbau oder Viehzucht, mit Fläche, Zweck und Dauer.",
      "Договор аренды сельхозземли под посевы или скотоводство: площадь, назначение и срок."
    ),
    where: W7(
      "يحرر بين المالك والمستفيد ويشهد عليه شاهدان، ويسجل عند الاقتضاء لدى المصلحة الضريبية",
      "Rédigé entre le propriétaire et l'exploitant, attesté par deux témoins, enregistré le cas échéant au service fiscal",
      "Drawn up between the owner and the farmer, witnessed by two persons, registered where required with the tax office",
      "Redactado entre el propietario y el agricultor, atestiguado por dos testigos, registrado en su caso ante la oficina fiscal",
      "Redatto tra proprietario e conduttore agricolo, con due testimoni, registrato ove richiesto all'ufficio fiscale",
      "Zwischen Eigentümer und Pächter erstellt, von zwei Zeugen bestätigt, bei Bedarf beim Finanzamt eingetragen",
      "Составляется собственником и арендатором при двух свидетелях, при необходимости регистрируется в налоговой"
    ),
    keywords: ["كراء أرض فلاحية", "fermage", "farm lease", "أرض زراعية", "bail agricole"],
  },
  {
    id: "vk-kira-local-artisanal",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء محل حرفي",
      "Contrat de location d'un local artisanal",
      "Lease contract for an artisanal workshop",
      "Contrato de alquiler de un local artesano",
      "Contratto di locazione di un locale artigiano",
      "Mietvertrag für eine Handwerkswerkstatt",
      "Договор аренды ремесленной мастерской"
    ),
    desc: D7(
      "عقد ينظم كراء محل لممارسة حرفة يدوية كالنجارة أو الخياطة، مع تحديد الكراء والاستعمال.",
      "Contrat organisant la location d'un local destiné à un métier manuel tel que menuiserie ou couture, en fixant le loyer et l'usage.",
      "Contract governing the lease of premises for a manual trade such as carpentry or tailoring, setting rent and use.",
      "Contrato que regula el alquiler de un local para oficio manual como carpintería o sastrería, fijando renta y uso.",
      "Contratto che disciplina la locazione di un locale per mestiere manuale come falegnameria o sartoria, fissando canone e uso.",
      "Vertrag zur Miete einer Werkstatt für Handwerksberufe wie Schreinerei oder Schneiderei, mit Miete und Nutzung.",
      "Договор аренды помещения для ремесла — столярного или швейного: плата и назначение."
    ),
    where: W7(
      "يحرر بين الحرفي والمكري، ويسجل عند الاقتضاء لدى المصلحة الضريبية",
      "Rédigé entre l'artisan et le bailleur, enregistré le cas échéant au service fiscal",
      "Drawn up between the artisan and the landlord, registered where required with the tax office",
      "Redactado entre el artesano y el arrendador, registrado en su caso ante la oficina fiscal",
      "Redatto tra l'artigiano e il locatore, registrato ove richiesto all'ufficio fiscale",
      "Zwischen Handwerker und Vermieter erstellt, bei Bedarf beim Finanzamt eingetragen",
      "Составляется ремесленником и арендодателем, при необходимости регистрируется в налоговой"
    ),
    keywords: ["محل حرفي", "local artisanal", "workshop lease", "حرفة", "atelier"],
  },
  {
    id: "vk-kira-garage",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء كراج",
      "Contrat de location d'un garage",
      "Lease contract for a garage",
      "Contrato de alquiler de un garaje",
      "Contratto di locazione di un box",
      "Mietvertrag für eine Garage",
      "Договор аренды гаража"
    ),
    desc: D7(
      "عقد يغطي كراء كراج لإيواء السيارات أو صيانتها، مع تحديد المساحة والخدمات الملحقة.",
      "Contrat couvrant la location d'un garage pour le stationnement ou l'entretien de véhicules, en précisant la surface et les prestations annexes.",
      "Contract covering the lease of a garage for parking or servicing vehicles, specifying the area and ancillary services.",
      "Contrato que cubre el alquiler de un garaje para estacionar o reparar vehículos, precisando superficie y servicios anexos.",
      "Contratto che copre la locazione di un box per sosta o manutenzione di veicoli, precisando superficie e servizi accessori.",
      "Vertrag zur Garagenmiete zum Abstellen oder Warten von Fahrzeugen, mit Fläche und Zusatzleistungen.",
      "Договор аренды гаража для стоянки или ремонта автомобилей: площадь и дополнительные услуги."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل عند الاقتضاء لدى المصلحة الضريبية، وتحفظ نسخة بملف كل منهما",
      "Rédigé entre les parties, enregistré le cas échéant au service fiscal, une copie versée au dossier de chacun",
      "Drawn up between the parties, registered where required with the tax office, a copy filed by each",
      "Redactado entre las partes, registrado en su caso ante la oficina fiscal, una copia en el expediente de cada una",
      "Redatto tra le parti, registrato ove richiesto all'ufficio fiscale, una copia agli atti di ciascuna",
      "Zwischen den Parteien erstellt, bei Bedarf beim Finanzamt eingetragen, je eine Kopie in den Akten",
      "Составляется сторонами, при необходимости регистрируется в налоговой, копия — в деле каждой стороны"
    ),
    keywords: ["كراء كراج", "bail garage", "garage lease", "كراج سيارات", "location garage"],
  },
  {
    id: "vk-kira-restaurant-equipe",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مطعم مجهز",
      "Contrat de location d'un restaurant équipé",
      "Lease contract for an equipped restaurant",
      "Contrato de alquiler de un restaurante equipado",
      "Contratto di locazione di un ristorante attrezzato",
      "Mietvertrag für ein eingerichtetes Restaurant",
      "Договор аренды оборудованного ресторана"
    ),
    desc: D7(
      "عقد يرتب كراء مطعم مجهز بمطبخه وتجهيزاته، مع بيان حالتها عند التسليم وآجال الأداء.",
      "Contrat réglant la location d'un restaurant avec sa cuisine et son équipement, en décrivant leur état à la remise et les échéances.",
      "Contract governing the lease of a restaurant with its kitchen and equipment, describing their condition at handover and the payment schedule.",
      "Contrato que regula el alquiler de un restaurante con su cocina y equipo, describiendo su estado en la entrega y los plazos de pago.",
      "Contratto che disciplina la locazione di un ristorante con cucina e dotazioni, descrivendone lo stato alla consegna e le scadenze.",
      "Vertrag zur Miete eines Restaurants mit Küche und Ausstattung, mit Zustandsbeschreibung bei Übergabe und Zahlterminen.",
      "Договор аренды ресторана с кухней и оборудованием: состояние при передаче и график платежей."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل عند الاقتضاء لدى المصلحة الضريبية، مع الإشارة إلى بيان التجهيزات",
      "Rédigé entre les parties et enregistré le cas échéant au service fiscal, avec l'inventaire des équipements annexé",
      "Drawn up between the parties and registered where required with the tax office, with the equipment inventory attached",
      "Redactado entre las partes y registrado en su caso ante la oficina fiscal, con el inventario de equipos anexo",
      "Redatto tra le parti e registrato ove richiesto all'ufficio fiscale, con l'inventario delle dotazioni allegato",
      "Zwischen den Parteien erstellt und bei Bedarf beim Finanzamt eingetragen, mit beiliegendem Inventar der Ausstattung",
      "Составляется сторонами и при необходимости регистрируется в налоговой, с приложенной описью оборудования"
    ),
    keywords: ["كراء مطعم", "location restaurant", "restaurant lease", "مطعم مجهز"],
  },
  {
    id: "vk-kira-cafe-equipe",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء مقهى مجهزة",
      "Contrat de location d'un café équipé",
      "Lease contract for an equipped café",
      "Contrato de alquiler de una cafetería equipada",
      "Contratto di locazione di un bar attrezzato",
      "Mietvertrag für ein eingerichtetes Café",
      "Договор аренды оборудованного кафе"
    ),
    desc: D7(
      "عقد يحدد كراء مقهى بعتاده وتجهيزاته مع تحديد الواجبات وآجال الأداء وحالة التجهيزات.",
      "Contrat réglant la location d'un café avec son matériel, en fixant les loyers, les échéances et l'état du matériel.",
      "Contract governing the lease of a café with its equipment, fixing rents, payment terms and the condition of the fittings.",
      "Contrato que regula el alquiler de un café con su equipo, fijando rentas, plazos y estado del ajuar.",
      "Contratto che disciplina la locazione di un bar con relativa attrezzatura, fissando canoni, scadenze e stato del materiale.",
      "Vertrag über die Vermietung eines Cafés samt Ausstattung, mit Miete, Terminen und Zustand der Einrichtung.",
      "Договор аренды кафе с оборудованием: арендная плата, сроки и состояние оснащения."
    ),
    where: W7(
      "يحرر بين المكري والمكتري ويقدم عند الاقتضاء لمصلحة الوعاء الضريبي أو التوثيق",
      "Rédigé entre bailleur et locataire, présenté le cas échéant au service fiscal ou au notaire",
      "Drawn up between landlord and tenant, filed where required with the tax office or a notary",
      "Redactado entre arrendador e inquilino, presentado en su caso ante la oficina fiscal o notario",
      "Redatto tra locatore e conduttore, presentato ove richiesto all'ufficio fiscale o al notaio",
      "Zwischen Vermieter und Mieter erstellt, bei Bedarf dem Finanzamt oder Notar vorgelegt",
      "Составляется арендодателем и арендатором, при необходимости подаётся в налоговую или нотариусу"
    ),
    keywords: ["كراء مقهى", "location café", "café lease", "مقهى مجهزة", "bail équipé"],
    popular: true,
  },
  {
    id: "vk-kira-parking",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء موقف سيارات",
      "Contrat de location d'un parking",
      "Lease contract for a parking space",
      "Contrato de alquiler de un estacionamiento",
      "Contratto di locazione di un parcheggio",
      "Mietvertrag für einen Stellplatz",
      "Договор аренды парковочного места"
    ),
    desc: D7(
      "عقد يخصص أماكن لركن السيارات لفائدة شركة أو إقامة، بكراء شهري محدد.",
      "Contrat attribuant des places de stationnement au profit d'une société ou d'une résidence, à loyer mensuel défini.",
      "Contract allocating parking spaces for a company or a residence, at a defined monthly rent.",
      "Contrato que asigna plazas de estacionamiento a una empresa o residencia, con renta mensual definida.",
      "Contratto che assegna posti auto a un'azienda o a una residenza, con canone mensile definito.",
      "Vertrag über die Zuweisung von Stellplätzen für Firma oder Wohnanlage, zu festgelegter Monatsmiete.",
      "Договор о выделении парковочных мест компании или жилому комплексу с фиксированной месячной платой."
    ),
    where: W7(
      "يحرر بين الطرفين أو بين المكري وعدة مكترين، وتحفظ نسخة لكل منهم",
      "Rédigé entre les parties ou entre le bailleur et plusieurs locataires, une copie pour chacun",
      "Drawn up between the parties or between the landlord and several tenants, a copy for each",
      "Redactado entre las partes o entre el arrendador y varios inquilinos, una copia para cada uno",
      "Redatto tra le parti o tra il locatore e più conduttori, una copia per ciascuno",
      "Zwischen den Parteien oder zwischen Vermieter und mehreren Mietern erstellt, je eine Kopie",
      "Составляется сторонами или арендодателем и несколькими арендаторами, копия — каждому"
    ),
    keywords: ["موقف سيارات", "parking", "parking lease", "كراء موقف", "place de stationnement"],
  },
  {
    id: "vk-kira-salle-sport",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء قاعة رياضية مجهزة",
      "Contrat de location d'une salle de sport équipée",
      "Lease contract for an equipped gym",
      "Contrato de alquiler de un gimnasio equipado",
      "Contratto di locazione di una palestra attrezzata",
      "Mietvertrag für ein ausgestattetes Fitnessstudio",
      "Договор аренды оборудованного фитнес-зала"
    ),
    desc: D7(
      "عقد يغطي كراء قاعة لياقة بعتادها الرياضي، مع اشتراط المحافظة على العتاد والتأمين.",
      "Contrat couvrant la location d'une salle de remise en forme avec son matériel, en exigeant l'entretien des appareils et une assurance.",
      "Contract covering the lease of a fitness room with its equipment, requiring maintenance of the machines and insurance cover.",
      "Contrato que cubre el alquiler de un gimnasio con su equipamiento, exigiendo el mantenimiento de las máquinas y un seguro.",
      "Contratto che copre la locazione di una palestra con le attrezzature, richiedendo la manutenzione degli apparecchi e un'assicurazione.",
      "Vertrag zur Miete eines Fitnessstudios mit Geräten, mit Auflage zur Wartung und Versicherung.",
      "Договор аренды фитнес-зала с оборудованием: обслуживание тренажёров и наличие страховки."
    ),
    where: W7(
      "يحرر بين المكري والمكتري ويسجل عند الاقتضاء لدى المصلحة الضريبية قبل فتح القاعة",
      "Rédigé entre bailleur et locataire, enregistré le cas échéant au service fiscal avant l'ouverture de la salle",
      "Drawn up between landlord and tenant, registered where required with the tax office before the gym opens",
      "Redactado entre arrendador e inquilino, registrado en su caso ante la oficina fiscal antes de la apertura",
      "Redatto tra locatore e conduttore, registrato ove richiesto all'ufficio fiscale prima dell'apertura della sala",
      "Zwischen Vermieter und Mieter erstellt, bei Bedarf vor Eröffnung beim Finanzamt eingetragen",
      "Составляется сторонами, при необходимости регистрируется в налоговой до открытия зала"
    ),
    keywords: ["قاعة رياضية", "salle de sport", "gym lease", "لياقة", "location salle de sport"],
  },
  {
    id: "vk-kira-salle-fetes",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء قاعة أعراس مجهزة",
      "Contrat de location d'une salle des fêtes équipée",
      "Lease contract for an equipped reception hall",
      "Contrato de alquiler de un salón de recepciones equipado",
      "Contratto di locazione di una sala ricevimenti attrezzata",
      "Mietvertrag für einen ausgestatteten Festsaal",
      "Договор аренды оборудованного банкетного зала"
    ),
    desc: D7(
      "عقد ينظم كراء قاعة للمناسبات بتجهيزاتها، مع تحديد الكراء وآجاله وترتيبات ما بعد الاستغلال.",
      "Contrat organisant la location d'une salle de réception avec ses équipements, en fixant le loyer, ses échéances et les arrangements après usage.",
      "Contract governing the lease of a reception hall with its fittings, setting the rent, due dates and post-event arrangements.",
      "Contrato que regula el alquiler de un salón de recepciones con su equipamiento, fijando la renta, vencimientos y disposiciones tras el uso.",
      "Contratto che disciplina la locazione di una sala ricevimenti con arredi, fissando il canone, le scadenze e le disposizioni dopo l'uso.",
      "Vertrag zur Miete eines Festsaals mit Ausstattung, mit Miete, Terminen und Regelungen nach der Nutzung.",
      "Договор аренды банкетного зала с оборудованием: плата, сроки и порядок после мероприятия."
    ),
    where: W7(
      "يحرر بين الطرفين ويسجل عند الاقتضاء لدى المصلحة الضريبية، مع تحديد مواعيد المناسبات",
      "Rédigé entre les parties et enregistré le cas échéant au service fiscal, avec calendrier des manifestations",
      "Drawn up between the parties and registered where required with the tax office, with a schedule of events",
      "Redactado entre las partes y registrado en su caso ante la oficina fiscal, con calendario de eventos",
      "Redatto tra le parti e registrato ove richiesto all'ufficio fiscale, con calendario degli eventi",
      "Zwischen den Parteien erstellt und bei Bedarf beim Finanzamt eingetragen, mit Terminkalender der Veranstaltungen",
      "Составляется сторонами и при необходимости регистрируется в налоговой, с календарём мероприятий"
    ),
    keywords: ["قاعة أعراس", "salle des fêtes", "reception hall lease", "قاعة مناسبات", "salle équipée"],
  },
  // ─── Véhicules et équipements ───
  {
    id: "vk-kira-voiture",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء سيارة بدون سائق",
      "Contrat de location de voiture sans chauffeur",
      "Car rental contract without driver",
      "Contrato de alquiler de coche sin conductor",
      "Contratto di noleggio di un'auto senza conducente",
      "Mietvertrag für ein Auto ohne Fahrer",
      "Договор аренды автомобиля без водителя"
    ),
    desc: D7(
      "عقد يسلم بمقتضاه مكري سيارة للمكتري لاستعمالها بنفسه، مع تحديد المدة وعدد الكيلومترات والتأمين.",
      "Contrat par lequel un loueur remet une voiture au locataire pour la conduire lui-même, en fixant la durée, le kilométrage et l'assurance.",
      "Contract whereby a rental company hands a car to the client to drive personally, setting duration, mileage and insurance.",
      "Contrato por el que una empresa entrega un coche al cliente para conducirlo personalmente, fijando duración, kilometraje y seguro.",
      "Contratto con cui un noleggiatore consegna un'auto al cliente per guidarla personalmente, fissando durata, chilometraggio e assicurazione.",
      "Vertrag, bei dem ein Vermieter dem Mieter ein Auto zur Selbstfahrt überlässt, mit Dauer, Kilometerstand und Versicherung.",
      "Договор, по которому арендодатель передаёт автомобиль клиенту для самостоятельного вождения: срок, пробег и страховка."
    ),
    where: W7(
      "يحرر بين الطرفين عند تسليم السيارة، ويحتفظ كل منهما بنسخة منه",
      "Rédigé entre les parties à la remise de la voiture, chaque partie en conservant un exemplaire",
      "Drawn up between the parties when the car is handed over, each keeping a copy",
      "Redactado entre las partes en la entrega del coche, conservando cada una un ejemplar",
      "Redatto tra le parti alla consegna dell'auto, ciascuna ne conserva una copia",
      "Bei der Fahrzeugübergabe zwischen den Parteien erstellt, jede behält ein Exemplar",
      "Составляется сторонами при передаче автомобиля, каждый хранит свой экземпляр"
    ),
    keywords: ["كراء سيارة", "location voiture", "car rental", "بدون سائق", "sans chauffeur"],
    popular: true,
  },
  {
    id: "vk-kira-voiture-chauffeur-personnel",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء سيارة مع سائق لنقل المستخدمين",
      "Contrat de location d'un véhicule avec chauffeur pour le transport du personnel",
      "Vehicle lease with driver for staff transport",
      "Contrato de alquiler de vehículo con chofer para el transporte del personal",
      "Contratto di noleggio di un veicolo con autista per il trasporto del personale",
      "Mietvertrag über ein Fahrzeug mit Fahrer für den Personentransport",
      "Договор аренды автомобиля с водителем для перевозки персонала"
    ),
    desc: D7(
      "عقد يوفر بمقتضاه مكري سيارة بسائقها لنقل عمال مقاولة يوميا، مع تحديد المسارات والأوقات.",
      "Contrat par lequel un loueur met une voiture avec son chauffeur au service des déplacements quotidiens des employés, en fixant les trajets et les horaires.",
      "Contract whereby a rental firm provides a car with its driver for employees' daily journeys, setting routes and schedules.",
      "Contrato por el que una empresa de alquiler aporta un coche con su chofer para los desplazamientos diarios de los empleados, fijando rutas y horarios.",
      "Contratto con cui un noleggiatore mette un'auto con autista al servizio degli spostamenti quotidiani dei dipendenti, fissando percorsi e orari.",
      "Vertrag, bei dem ein Vermieter ein Auto mit Fahrer für die täglichen Fahrten der Mitarbeiter stellt, mit Routen und Zeiten.",
      "Договор, по которому арендодатель предоставляет автомобиль с водителем для ежедневных поездок сотрудников, с маршрутами и расписанием."
    ),
    where: W7(
      "يحرر بين الشركة المكترية ومكري السيارات، وتحفظ نسخة بملفات كل طرف",
      "Rédigé entre l'entreprise locataire et le loueur, une copie archivée dans les dossiers de chaque partie",
      "Drawn up between the hiring company and the rental firm, a copy filed by each party",
      "Redactado entre la empresa arrendataria y la empresa de alquiler, una copia archivada por cada parte",
      "Redatto tra l'azienda conduttrice e il noleggiatore, una copia archiviata negli schedari di ciascuna parte",
      "Zwischen der mietenden Firma und dem Vermieter erstellt, je eine Kopie in den Akten",
      "Составляется компанией-арендатором и арендодателем, копия — в делах каждой стороны"
    ),
    keywords: ["نقل المستخدمين", "transport du personnel", "staff transport", "سيارة مع سائق", "avec chauffeur"],
  },
  {
    id: "vk-kira-engins-chantier",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء معدات البناء",
      "Contrat de location d'engins de chantier",
      "Construction equipment rental contract",
      "Contrato de alquiler de maquinaria de obra",
      "Contratto di noleggio di macchine da cantiere",
      "Mietvertrag für Baumaschinen",
      "Договор аренды строительной техники"
    ),
    desc: D7(
      "عقد يغطي كراء آلات مثل الجرافة والرافعة، مع بيان حالتها ومصاريف الصيانة والمشغل عند الاقتضاء.",
      "Contrat couvrant la location d'engins comme pelles et grues, en précisant leur état, les frais d'entretien et l'opérateur éventuel.",
      "Contract covering the hire of machinery such as excavators and cranes, stating their condition, upkeep costs and any operator.",
      "Contrato que cubre el alquiler de maquinaria como excavadoras y grúas, indicando su estado, costes de mantenimiento y operador si procede.",
      "Contratto che copre il noleggio di mezzi come escavatori e gru, indicandone lo stato, i costi di manutenzione e l'eventuale operatore.",
      "Vertrag zur Miete von Baumaschinen wie Bagger und Kräne, mit Zustand, Wartungskosten und eventuellem Bediener.",
      "Договор аренды строительной техники — экскаваторов и кранов: состояние, расходы на обслуживание и оператор."
    ),
    where: W7(
      "يحرر بين المكري والمكتري قبل بعث العتاد إلى الورش، مع محضر عن حالته",
      "Rédigé entre le loueur et le locataire avant l'envoi du matériel au chantier, avec constat de son état",
      "Drawn up between the owner and hirer before the machinery is sent to site, with a condition report",
      "Redactado entre arrendador e inquilino antes de enviar la maquinaria a obra, con acta de su estado",
      "Redatto tra noleggiatore e conduttore prima dell'invio dei mezzi al cantiere, con verbale dello stato",
      "Zwischen Vermieter und Mieter vor Versand der Maschinen zur Baustelle erstellt, mit Zustandsprotokoll",
      "Составляется до отправки техники на объект, с актом о её состоянии"
    ),
    keywords: ["معدات بناء", "engins de chantier", "construction equipment", "كراء آلات", "location engins"],
  },
  {
    id: "vk-kira-materiel-agricole",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء عتاد فلاحي",
      "Contrat de location de matériel agricole (tracteur)",
      "Agricultural equipment rental contract (tractor)",
      "Contrato de alquiler de material agrícola (tractor)",
      "Contratto di noleggio di attrezzature agricole (trattore)",
      "Mietvertrag für landwirtschaftliche Geräte (Traktor)",
      "Договор аренды сельхозтехники (трактор)"
    ),
    desc: D7(
      "عقد يخصص كراء جرار وعتاد حرث لفائدة فلاح، مع تحديد المدة وحالة العتاد.",
      "Contrat prévoyant la location d'un tracteur et d'outils de labour au profit d'un agriculteur, en fixant la durée et l'état du matériel.",
      "Contract providing for the hire of a tractor and ploughing tools for a farmer, setting the duration and the equipment's condition.",
      "Contrato que prevé el alquiler de un tractor y aperos de labranza para un agricultor, fijando la duración y el estado del equipo.",
      "Contratto che prevede il noleggio di un trattore e attrezzi da lavoro per un agricoltore, fissando la durata e lo stato del materiale.",
      "Vertrag zur Miete eines Traktors und von Pfluggeräten für einen Landwirt, mit Dauer und Zustand des Materials.",
      "Договор аренды трактора и почвообрабатывающего инвентаря для фермера: срок и состояние техники."
    ),
    where: W7(
      "يحرر بين الطرفين عند تسليم الجرار وعتاده، ويرفق به محضر حالته",
      "Rédigé entre les parties à la remise du tracteur et de ses outils, avec constat de leur état",
      "Drawn up between the parties when the tractor and tools are handed over, with a condition report",
      "Redactado entre las partes en la entrega del tractor y aperos, con acta de su estado",
      "Redatto tra le parti alla consegna del trattore e degli attrezzi, con verbale del loro stato",
      "Zwischen den Parteien bei Übergabe des Traktors und der Geräte erstellt, mit Zustandsprotokoll",
      "Составляется при передаче трактора и инвентаря, с актом об их состоянии"
    ),
    keywords: ["عتاد فلاحي", "matériel agricole", "tractor rental", "جرار", "tracteur"],
  },
  {
    id: "vk-kira-panneaux-publicitaires",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء لوحات إشهارية",
      "Contrat de location de panneaux publicitaires",
      "Advertising panels rental contract",
      "Contrato de alquiler de paneles publicitarios",
      "Contratto di noleggio di pannelli pubblicitari",
      "Mietvertrag für Werbepaneele",
      "Договор аренды рекламных щитов"
    ),
    desc: D7(
      "عقد يخول استغلال حاملات لوحات إشهارية بكراء سنوي، مع تحديد المواقع والمساحات والصيانة.",
      "Contrat accordant l'exploitation de supports publicitaires contre un loyer annuel, en définissant les emplacements, les surfaces et l'entretien.",
      "Contract granting the use of advertising structures for an annual fee, defining locations, surface areas and upkeep.",
      "Contrato que concede la explotación de soportes publicitarios por un alquiler anual, definiendo ubicaciones, superficies y mantenimiento.",
      "Contratto che concede lo sfruttamento di supporti pubblicitari dietro canone annuo, definendo sedi, superfici e manutenzione.",
      "Vertrag über die Nutzung von Werbeflächen gegen Jahresmiete, mit Standorten, Flächen und Pflege.",
      "Договор на использование рекламных конструкций за годовую плату: места, площади и содержание."
    ),
    where: W7(
      "يحرر بين الطرفين، ويتطلب عند وقوع اللوحات بالملك العمومي ترخيصا من الجماعة",
      "Rédigé entre les parties, nécessitant une autorisation communale lorsque les panneaux se trouvent sur le domaine public",
      "Drawn up between the parties, requiring a communal permit when panels stand on public land",
      "Redactado entre las partes, exigiendo autorización municipal cuando los paneles están en dominio público",
      "Redatto tra le parti, richiede autorizzazione comunale se i pannelli sorgono su demanio pubblico",
      "Zwischen den Parteien erstellt; bei Paneelen im öffentlichen Bereich ist eine kommunale Genehmigung nötig",
      "Составляется сторонами; для щитов на публичной земле нужно разрешение коммуны"
    ),
    keywords: ["لوحات إشهارية", "panneaux publicitaires", "advertising panels", "إشهار", "bail publicitaire"],
  },
  {
    id: "vk-kira-camion-chauffeur",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء شاحنة مع سائق",
      "Contrat de location d'un camion avec chauffeur",
      "Truck rental contract with driver",
      "Contrato de alquiler de un camión con chofer",
      "Contratto di noleggio di un autocarro con autista",
      "Mietvertrag für einen Lkw mit Fahrer",
      "Договор аренды грузовика с водителем"
    ),
    desc: D7(
      "عقد يرتب نقل البضائع بشاحنة وسائقها مقابل كراء عن المسافة أو الحمولة، مع تحديد المسؤوليات.",
      "Contrat organisant le transport de marchandises par un camion et son chauffeur, facturé à la distance ou à la charge, en répartissant les responsabilités.",
      "Contract arranging goods transport by a truck and its driver, billed by distance or load, allocating responsibilities.",
      "Contrato que organiza el transporte de mercancías con camión y su chofer, facturado por distancia o carga, repartiendo responsabilidades.",
      "Contratto che organizza il trasporto di merci con autocarro e autista, fatturato a distanza o a carico, ripartendo le responsabilità.",
      "Vertrag über Gütertransport mit Lkw und Fahrer, abgerechnet nach Strecke oder Ladung, mit Aufteilung der Haftung.",
      "Договор перевозки грузов грузовиком с водителем: оплата за расстояние или загрузку, распределение ответственности."
    ),
    where: W7(
      "يحرر بين الناقل والعميل قبل انطلاق النقل، وتحفظ نسخة لدى كل منهما",
      "Rédigé entre le transporteur et le client avant le départ, une copie conservée par chacun",
      "Drawn up between the carrier and the client before departure, a copy kept by each",
      "Redactado entre el transportista y el cliente antes de la salida, una copia para cada uno",
      "Redatto tra vettore e cliente prima della partenza, una copia per ciascuno",
      "Zwischen Frachtführer und Kunde vor Abfahrt erstellt, je eine Kopie",
      "Составляется перевозчиком и клиентом до отправки, копия — у каждого"
    ),
    keywords: ["كراء شاحنة", "camion avec chauffeur", "truck rental", "نقل البضائع", "transport marchandises"],
  },
  {
    id: "vk-kira-machines",
    cat: "uqud-kira",
    title: T7(
      "عقد كراء آلات ومعدات",
      "Contrat de location de machines et équipements",
      "Machinery and equipment rental contract",
      "Contrato de alquiler de máquinas y equipos",
      "Contratto di noleggio di macchine e attrezzature",
      "Mietvertrag für Maschinen und Geräte",
      "Договор аренды машин и оборудования"
    ),
    desc: D7(
      "عقد يشمل كراء آلات إنتاج أو خدمة، مع بيان حالتها عند التسليم ومصاريف الصيانة والرجوع.",
      "Contrat portant sur la location de machines de production ou de service, en décrivant leur état à la remise, l'entretien et la restitution.",
      "Contract covering the hire of production or service machines, describing their condition at handover, upkeep and return.",
      "Contrato sobre el alquiler de máquinas de producción o servicio, describiendo su estado en la entrega, el mantenimiento y la devolución.",
      "Contratto relativo al noleggio di macchine di produzione o di servizio, descrivendone lo stato alla consegna, la manutenzione e la restituzione.",
      "Vertrag zur Miete von Produktions- oder Dienstleistungsmaschinen, mit Zustand bei Übergabe, Wartung und Rückgabe.",
      "Договор аренды производственного или сервисного оборудования: состояние при передаче, обслуживание и возврат."
    ),
    where: W7(
      "يحرر بين الطرفين ويرفق به محضر حالة الآلات عند التسليم",
      "Rédigé entre les parties, assorti d'un constat de l'état des machines à la remise",
      "Drawn up between the parties, with a report on the machines' condition at handover",
      "Redactado entre las partes, con acta del estado de las máquinas en la entrega",
      "Redatto tra le parti, corredato da un verbale sullo stato delle macchine alla consegna",
      "Zwischen den Parteien erstellt, mit Protokoll zum Zustand der Maschinen bei Übergabe",
      "Составляется сторонами с актом о состоянии машин при передаче"
    ),
    keywords: ["كراء آلات", "location machines", "equipment rental", "معدات", "location matériel"],
  },
  // ─── Quittances et états des lieux ───
  {
    id: "vk-kira-etat-entree",
    cat: "uqud-kira",
    title: T7(
      "محضر حالة الأماكن عند الدخول",
      "État des lieux d'entrée",
      "Move-in condition report",
      "Acta de estado de la vivienda (entrada)",
      "Verbale di consegna (ingresso)",
      "Übergabeprotokoll bei Einzug",
      "Акт состояния жилья при въезде"
    ),
    desc: D7(
      "محضر يصف حالة السكن وتجهيزاته عند تسليم المفاتيح، لمرجعية تقييم الضمان عند الخروج.",
      "Procès-verbal décrivant l'état du logement et de ses équipements à la remise des clés, servant de référence au départ.",
      "Report describing the condition of the dwelling and its fittings when keys are handed over, used as the exit benchmark.",
      "Acta que describe el estado de la vivienda y sus equipos al entregar las llaves, como referencia a la salida.",
      "Verbale che descrive lo stato dell'alloggio e delle dotazioni alla consegna delle chiavi, come riferimento all'uscita.",
      "Protokoll, das den Zustand der Wohnung und Ausstattung bei Schlüsselübergabe beschreibt, als Referenz für den Auszug.",
      "Акт, описывающий состояние жилья и оборудования при передаче ключей, как эталон для выезда."
    ),
    where: W7(
      "يحرر من نسختين بين المكري والمكتري يوم تسليم المفاتيح، وتضاف إليه صور عند الاقتضاء",
      "Établi en deux exemplaires entre bailleur et locataire le jour de la remise des clés, avec photos le cas échéant",
      "Drawn up in two copies between landlord and tenant on key handover day, with photos where appropriate",
      "Levantado en dos ejemplares entre arrendador e inquilino el día de la entrega de llaves, con fotos en su caso",
      "Redatto in due copie tra locatore e conduttore il giorno della consegna delle chiavi, con foto ove utile",
      "In zwei Ausfertigungen zwischen Vermieter und Mieter am Tag der Schlüsselübergabe, bei Bedarf mit Fotos",
      "Составляется в двух экземплярах в день передачи ключей, при необходимости с фотографиями"
    ),
    keywords: ["حالة الأماكن دخول", "état des lieux entrée", "move-in report", "تسليم المفاتيح"],
  },
  {
    id: "vk-kira-etat-sortie",
    cat: "uqud-kira",
    title: T7(
      "محضر حالة الأماكن عند الخروج",
      "État des lieux de sortie",
      "Move-out condition report",
      "Acta de estado de la vivienda (salida)",
      "Verbale di riconsegna (uscita)",
      "Übergabeprotokoll bei Auszug",
      "Акт состояния жилья при выезде"
    ),
    desc: D7(
      "محضر يقارن حالة السكن عند الإفراغ بمحضر الدخول، لتسوية الوديعة وتبادل الإبراء.",
      "Procès-verbal comparant l'état du logement à la libération avec celui d'entrée, pour régler la caution et les décharges.",
      "Report comparing the dwelling's condition at move-out with the entry report, to settle the deposit and mutual discharges.",
      "Acta que compara el estado de la vivienda al desalojarla con el de entrada, para liquidar la fianza y las compensaciones.",
      "Verbale che confronta lo stato dell'alloggio al rilascio con quello d'ingresso, per regolare il deposito e le quietanze.",
      "Protokoll, das den Zustand der Wohnung beim Auszug mit dem Eingangsprotokoll vergleicht, um Kaution und Entlastungen zu regeln.",
      "Акт, сравнивающий состояние жилья при выезде с актом въезда, для расчёта по залогу и взаимных расписок."
    ),
    where: W7(
      "يحرر من نسختين بين الطرفين يوم تسليم المفاتيح للمكري، ويرفق بمحضر الدخول",
      "Établi en deux exemplaires entre les parties le jour de la restitution des clés, joint au rapport d'entrée",
      "Drawn up in two copies between the parties when keys are returned, attached to the entry report",
      "Levantado en dos ejemplares entre las partes el día de devolver las llaves, unido al acta de entrada",
      "Redatto in due copie tra le parti il giorno della restituzione delle chiavi, unito al verbale d'ingresso",
      "In zwei Ausfertigungen zwischen den Parteien am Tag der Schlüsselrückgabe erstellt, dem Eingangsprotokoll beigefügt",
      "Составляется в двух экземплярах при возврате ключей, прилагается к акту въезда"
    ),
    keywords: ["حالة الأماكن خروج", "état des lieux sortie", "move-out report", "الضمان", "restitution"],
    popular: true,
  },
  {
    id: "vk-kira-quittance-finale",
    cat: "uqud-kira",
    title: T7(
      "وصل آخر كراء وإبراء الذمة",
      "Quittance de dernier loyer et décharge finale",
      "Final rent receipt and full discharge",
      "Recibo de última renta y finiquito",
      "Quietanza dell'ultimo canone e saldo finale",
      "Quittung über die letzte Miete mit Entlastung",
      "Расписка о последнем арендном платеже с освобождением"
    ),
    desc: D7(
      "وصل يقر بأداء آخر قسط من الكراء وخلود ذمة المكتري من كل مطلب لاحق.",
      "Quittance constatant le paiement du dernier loyer et déchargeant définitivement le locataire de toute réclamation ultérieure.",
      "Receipt acknowledging payment of the last rent instalment and releasing the tenant from any later claim.",
      "Recibo que acredita el pago de la última renta y libera al inquilino de toda reclamación posterior.",
      "Quietanza che attesta il pagamento dell'ultimo canone e solleva il conduttore da ogni pretesa successiva.",
      "Quittung über die letzte Mietzahlung, die den Mieter von späteren Ansprüchen entlastet.",
      "Расписка об уплате последнего арендного платежа, освобождающая арендатора от дальнейших претензий."
    ),
    where: W7(
      "يحرره المكري عند الإفراغ ويحتفظ به المكتري كإثبات لأداء كل الكراءات",
      "Délivré par le bailleur à la libération, conservé par le locataire comme preuve du paiement intégral",
      "Issued by the landlord at move-out, kept by the tenant as proof of full payment",
      "Emitido por el arrendador al desalojo, custodiado por el inquilino como prueba del pago íntegro",
      "Rilasciato dal locatore al rilascio dell'immobile, conservato dal conduttore come prova del saldo integrale",
      "Vom Vermieter beim Auszug ausgestellt, vom Mieter als Nachweis der vollständigen Zahlung aufbewahrt",
      "Выдаётся арендодателем при выезде, хранится у арендатора как подтверждение полной оплаты"
    ),
    keywords: ["وصل آخر كراء", "quittance finale", "final rent receipt", "إبراء الذمة"],
  },
  {
    id: "vk-kira-inventaire-mobilier",
    cat: "uqud-kira",
    title: T7(
      "لائحة الأثاث والتجهيزات",
      "Inventaire du mobilier et des équipements",
      "Furniture and fittings inventory",
      "Inventario del mobiliario y equipos",
      "Inventario del mobilio e delle dotazioni",
      "Inventar der Möbel und Ausstattung",
      "Опись мебели и оборудования"
    ),
    desc: D7(
      "لائحة تحصر الأثاث والتجهيزات المسلمة للمكتري مع حالتها، لتسهيل التسليم عند الخروج.",
      "Liste recensant les meubles et équipements remis au locataire avec leur état, afin de faciliter la restitution au départ.",
      "List recording the furniture and fittings handed to the tenant with their condition, to ease return at move-out.",
      "Lista que registra los muebles y equipos entregados al inquilino con su estado, para facilitar la devolución a la salida.",
      "Elenco che censisce mobili e dotazioni consegnati al conduttore con il relativo stato, per agevolare la restituzione all'uscita.",
      "Liste der dem Mieter übergebenen Möbel und Ausstattung mit Zustand, zur erleichterten Rückgabe beim Auszug.",
      "Перечень мебели и оборудования, переданных арендатору, с состоянием для удобного возврата при выезде."
    ),
    where: W7(
      "ترفق بعقد الكراء أو بمحضر حالة الأماكن، وتوقع من الطرفين عند الدخول",
      "Joint au bail ou à l'état des lieux, signé des deux parties à l'entrée",
      "Attached to the lease or the condition report, signed by both parties at move-in",
      "Se adjunta al contrato o al acta de estado, firmada por ambas partes a la entrada",
      "Allegato al contratto o allo stato degli immobili, firmato da entrambe le parti all'ingresso",
      "Dem Mietvertrag oder dem Übergabeprotokoll beigefügt, bei Einzug von beiden Parteien unterzeichnet",
      "Прилагается к договору или акту состояния, подписывается обеими сторонами при въезде"
    ),
    keywords: ["لائحة الأثاث", "inventaire mobilier", "furniture inventory", "مفروش", "inventaire"],
  },
  {
    id: "vk-kira-quittance-commerciale",
    cat: "uqud-kira",
    title: T7(
      "وصل كراء المحل التجاري مع الإبراء العام",
      "Quittance de loyer commercial avec décharge générale",
      "Commercial rent receipt with general discharge",
      "Recibo de alquiler comercial con carta de pago",
      "Quietanza del canone commerciale con liberatoria",
      "Gewerbemiet-Quittung mit genereller Entlastung",
      "Расписка об аренде коммерческого помещения с общим освобождением"
    ),
    desc: D7(
      "وصل شهري يثبت أداء كراء المحل التجاري ويبرئ ذمة المكري عن الشهر المعني.",
      "Quittance mensuelle attestant le paiement du loyer d'un local commercial et libérant le bailleur pour le mois concerné.",
      "Monthly receipt attesting payment of the commercial premises rent and releasing the landlord for the month concerned.",
      "Recibo mensual que acredita el pago de la renta del local comercial y libera al arrendador por el mes correspondiente.",
      "Quietanza mensile che attesta il pagamento del canone del locale commerciale e solleva il locatore per il mese interessato.",
      "Monatliche Quittung über die Mietzahlung für Geschäftsräume, entlastet den Vermieter für den betreffenden Monat.",
      "Ежемесячная расписка об уплате аренды коммерческого помещения, освобождающая арендодателя за соответствующий месяц."
    ),
    where: W7(
      "يحرره المكري كل شهر، ويحتفظ به المكتري في ملف الكراء",
      "Délivré par le bailleur chaque mois, conservé par le locataire dans le dossier de bail",
      "Issued by the landlord each month, kept by the tenant in the lease file",
      "Emitido por el arrendador cada mes, custodiado por el inquilino en el expediente de alquiler",
      "Rilasciato dal locatore ogni mese, conservato dal conduttore nel fascicolo di locazione",
      "Vom Vermieter monatlich ausgestellt, vom Mieter in der Mietakte aufbewahrt",
      "Выдаётся арендодателем ежемесячно, хранится арендатором в деле аренды"
    ),
    keywords: ["وصل كراء تجاري", "quittance commerciale", "commercial rent receipt", "إبراء عام"],
  },
  {
    id: "vk-kira-releve-quittances",
    cat: "uqud-kira",
    title: T7(
      "كشف وصولات أداء الكراء",
      "Relevé des quittances de loyer (pour la banque)",
      "Rent receipts statement (for the bank)",
      "Extracto de recibos de alquiler (para el banco)",
      "Estratto delle quietanze di affitto (per la banca)",
      "Übersicht der Mietquittungen (für die Bank)",
      "Сводка квитанций об аренде (для банка)"
    ),
    desc: D7(
      "كشف يجمع وصولات الكراء المؤداة خلال مدة معينة، يقدم للبنك عند طلب قرض أو تمويل.",
      "Relevé regroupant les quittances de loyer réglées sur une période donnée, produit à la banque pour une demande de crédit.",
      "Statement gathering rent receipts paid over a given period, submitted to the bank when applying for credit.",
      "Extracto que agrupa los recibos de alquiler pagados durante un periodo, presentado al banco para solicitar crédito.",
      "Estratto che raggruppa le quietanze di affitto versate in un dato periodo, prodotto alla banca per una richiesta di finanziamento.",
      "Aufstellung der in einem Zeitraum bezahlten Mietquittungen, der Bank bei einem Kreditantrag vorgelegt.",
      "Сводка квитанций об оплате аренды за период, подаваемая в банк при заявке на кредит."
    ),
    where: W7(
      "يعد من وصولات الكراء المحفوظة، ويقدم ضمن ملف القرض بالبنك المعني",
      "Compilé à partir des quittances conservées, joint au dossier de crédit auprès de la banque concernée",
      "Compiled from the kept receipts, attached to the credit file at the bank concerned",
      "Elaborado con los recibos guardados, se adjunta al expediente de crédito en el banco correspondiente",
      "Compilato dalle quietanze conservate, allegato alla pratica di credito presso la banca interessata",
      "Aus den aufbewahrten Quittungen zusammengestellt, dem Kreditordner bei der betreffenden Bank beigefügt",
      "Составляется из хранимых квитанций, прилагается к кредитному досье в соответствующем банке"
    ),
    keywords: ["كشف الكراءات", "relevé quittances", "rent receipts statement", "قرض", "crédit"],
  },
];
