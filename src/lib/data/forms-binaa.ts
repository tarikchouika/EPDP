// Construction & planning forms — permits, inspections, completion
// declarations, provisional utilities and land use. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsBinaa: DocumentItem[] = [
  // ─── Permis & autorisations de construire ───
  {
    id: "bin-rukhsa-qarawiya",
    cat: "binaa",
    title: T7(
      "طلب رخصة البناء بالعالم القروي",
      "Demande de permis de construire en milieu rural",
      "Application for a building permit in rural areas",
      "Solicitud de licencia de obra en medio rural",
      "Domanda di permesso di costruire in ambito rurale",
      "Antrag auf Baugenehmigung im ländlichen Raum",
      "Заявление на разрешение строительства в сельской местности"
    ),
    desc: D7(
      "طلب رخصة بناء يوجه إلى رئيس الجماعة القروية مشفوعا بالتصميم والوثائق المطلوبة قانونا.",
      "Demande de permis adressée au président de la commune rurale, accompagnée des plans et pièces exigées par la loi.",
      "Permit application addressed to the rural commune president, with the plans and documents required by law.",
      "Solicitud de licencia dirigida al presidente de la comuna rural, con los planos y documentos exigidos por la ley.",
      "Domanda di permesso indirizzata al presidente del comune rurale, con elaborati e documenti richiesti dalla legge.",
      "Antrag an den Präsidenten der Landgemeinde mit den gesetzlich geforderten Plänen und Unterlagen.",
      "Заявление на разрешение главе сельской коммуны с планами и документами по закону."
    ),
    where: W7(
      "رئاسة الجماعة القروية أو مصلحة التهيئة والتعمير بالعمالة",
      "Présidence de la commune rurale ou service d'urbanisme de la préfecture",
      "Rural commune office or the provincial urban planning service",
      "Presidencia de la comuna rural o servicio de urbanismo de la prefectura",
      "Presidenza del comune rurale o servizio urbanistico della prefettura",
      "Büro der Landgemeinde oder Stadtplanungsamt der Präfektur",
      "Администрация сельской коммуны или служба градостроительства префектуры"
    ),
    keywords: ["رخصة البناء", "permis de construire", "building permit", "قروي", "rural", "تعمير"],
    popular: true,
  },
  {
    id: "bin-rukhsa-hadm",
    cat: "binaa",
    title: T7(
      "طلب رخصة هدم بناية",
      "Demande de permis de démolir",
      "Application for a demolition permit",
      "Solicitud de licencia de demolición",
      "Domanda di permesso di demolire",
      "Antrag auf Abbruchgenehmigung",
      "Заявление на разрешение сноса здания"
    ),
    desc: D7(
      "طلب يقدم إلى الوكالة الحضرية أو الجماعة للحصول على ترخيص هدم بناية قائمة كليا أو جزئيا.",
      "Demande adressée à l'agence urbaine ou à la commune pour autoriser la démolition totale ou partielle d'une construction.",
      "Application submitted to the urban agency or commune to authorize the total or partial demolition of a building.",
      "Solicitud presentada ante la agencia urbana o la comuna para autorizar la demolición total o parcial de un edificio.",
      "Domanda presentata all'agenzia urbana o al comune per autorizzare la demolizione totale o parziale di un edificio.",
      "Antrag an die Stadtagentur oder Gemeinde auf Genehmigung des vollständigen oder teilweisen Abbruchs eines Gebäudes.",
      "Заявление в городское агентство или коммуну на разрешение полного или частичного сноса здания."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو رئاسة الجماعة التابع لها العقار.",
      "Service d'urbanisme de l'agence urbaine ou présidence de la commune dont relève le bien.",
      "Urban planning service of the urban agency or the commune where the property is located.",
      "Servicio de urbanismo de la agencia urbana o presidencia de la comuna correspondiente.",
      "Servizio urbanistico dell'agenzia urbana o presidenza del comune competente.",
      "Stadtplanungsamt der Stadtagentur oder Bürgermeisteramt der zuständigen Gemeinde.",
      "Служба градостроительства городского агентства или администрация соответствующей коммуны."
    ),
    keywords: ["رخصة الهدم", "permis de démolir", "demolition permit", "هدم", "démolition"],
  },
  {
    id: "bin-rukhsa-tarmim",
    cat: "binaa",
    title: T7(
      "طلب رخصة ترميم منزل",
      "Demande de permis de réhabiliter une maison",
      "Application for a house renovation permit",
      "Solicitud de licencia de rehabilitación de una vivienda",
      "Domanda di permesso di ristrutturare una casa",
      "Antrag auf Sanierungsgenehmigung für ein Wohnhaus",
      "Заявление на разрешение реконструкции дома"
    ),
    desc: D7(
      "طلب رخصة لإنجاز أشغال ترميم وإصلاح مسكن قائم دون تغيير واجهته أو بنيته العامة.",
      "Demande de permis pour effectuer des travaux de réhabilitation d'un logement existant, sans modification de sa façade.",
      "Permit application to carry out renovation works on an existing dwelling without altering its facade.",
      "Solicitud de permiso para realizar obras de rehabilitación de una vivienda existente sin alterar su fachada.",
      "Domanda di permesso per eseguire lavori di recupero su un'abitazione esistente senza modificarne la facciata.",
      "Genehmigungsantrag für Sanierungsarbeiten an einem bestehenden Wohnhaus ohne Veränderung der Fassade.",
      "Заявление на разрешение ремонтных работ существующего жилого дома без изменения его фасада."
    ),
    where: W7(
      "رئاسة الجماعة أو مصلحة التهيئة والتعمير بالوكالة الحضرية التابع لها المنزل.",
      "Présidence de la commune ou service d'urbanisme de l'agence urbaine dont relève la maison.",
      "Commune office or the urban planning service of the competent urban agency.",
      "Presidencia de la comuna o servicio de urbanismo de la agencia urbana competente.",
      "Presidenza del comune o servizio urbanistico dell'agenzia urbana competente.",
      "Gemeindeamt oder Stadtplanungsamt der zuständigen Stadtagentur.",
      "Администрация коммуны или служба градостроительства компетентного агентства."
    ),
    keywords: ["ترميم", "réhabilitation", "renovation", "إصلاح", "réparer"],
  },
  {
    id: "bin-tarikhiz-idafa-tabiq",
    cat: "binaa",
    title: T7(
      "طلب ترخيص إضافة طابق",
      "Demande d'autorisation de surélévation d'une construction",
      "Application for authorization to add a storey to a building",
      "Solicitud de autorización para añadir una planta a un edificio",
      "Domanda di autorizzazione alla sopraelevazione di un edificio",
      "Antrag auf Genehmigung der Aufstockung eines Gebäudes",
      "Заявление на разрешение надстройки этажа здания"
    ),
    desc: D7(
      "طلب رخصة لإضافة طابق أو توسيع بناية مرخصة، مشفوع بدراسة تقنية تثبت تحمل الأساسات.",
      "Demande de permis pour surélever ou étendre une construction autorisée, accompagnée d'une étude technique des fondations.",
      "Permit application to add a storey to or extend an authorized building, accompanied by a technical study of the foundations.",
      "Solicitud de permiso para sobreedificar o ampliar una construcción autorizada, acompañada de un estudio técnico de los cimientos.",
      "Domanda di permesso per sopraelevare o ampliare una costruzione autorizzata, corredata da uno studio tecnico delle fondazioni.",
      "Antrag auf Aufstockung oder Erweiterung einer genehmigten Baute, begleitet von einer technischen Untersuchung der Fundamente.",
      "Заявление на разрешение надстройки или расширения разрешённого здания с техническим исследованием фундаментов."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو مصلحة التعمير بالعمالة أو الإقليم.",
      "Service d'urbanisme de l'agence urbaine ou service de l'urbanisme de la préfecture ou province.",
      "Urban planning service of the urban agency or of the prefecture or province.",
      "Servicio de urbanismo de la agencia urbana o de la prefectura o provincia.",
      "Servizio urbanistico dell'agenzia urbana o della prefettura o provincia.",
      "Stadtplanungsamt der Stadtagentur bzw. der Präfektur oder Provinz.",
      "Служба градостроительства городского агентства или префектуры (провинции)."
    ),
    keywords: ["إضافة طابق", "surélévation", "storey", "توسيع", "extension", "سطح"],
  },
  {
    id: "bin-rukhsa-tajziya",
    cat: "binaa",
    title: T7(
      "طلب رخصة تجزئة أرض وتقسيمها",
      "Demande de permis de lotir et de morceler un terrain",
      "Application for a land subdivision and parcelling permit",
      "Solicitud de licencia de parcelación y división de un terreno",
      "Domanda di permesso di lottizzare e frazionare un terreno",
      "Antrag auf Teilungs- und Parzellierungsgenehmigung für ein Grundstück",
      "Заявление на разрешение раздела и межевания земельного участка"
    ),
    desc: D7(
      "طلب رخصة لتجزئة أرض أو تقسيمها إلى قطع قصد البيع أو البناء مع احترام تصميم التهيئة.",
      "Demande de permis nécessaire pour diviser un terrain en lots destinés à la vente ou à la construction, conformément au plan d'aménagement.",
      "Permit application required to divide land into plots for sale or construction, in line with the approved development plan.",
      "Solicitud de permiso necesaria para dividir un terreno en parcelas destinadas a la venta o edificación, conforme al plan de ordenación.",
      "Domanda di permesso necessaria per suddividere un terreno in lotti destinati alla vendita o all'edificazione, secondo il piano urbanistico.",
      "Genehmigungsantrag zur Aufteilung eines Grundstücks in verkaufsfähige oder bebaubare Parzellen gemäß Bebauungsplan.",
      "Заявление на разрешение раздела земли на участки для продажи или строительства согласно плану застройки."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التهيئة والتعمير بالعمالة أو الإقليم المختص.",
      "Agence urbaine ou service d'urbanisme de la préfecture ou province compétente.",
      "Urban agency or the urban planning service of the competent prefecture or province.",
      "Agencia urbana o servicio de urbanismo de la prefectura o provincia competente.",
      "Agenzia urbana o servizio urbanistico della prefettura o provincia competente.",
      "Stadtagentur oder Stadtplanungsamt der zuständigen Präfektur bzw. Provinz.",
      "Городское агентство или служба градостроительства компетентной префектуры (провинции)."
    ),
    keywords: ["تجزئة", "lotissement", "subdivision", "تقسيم", "morcellement"],
  },
  {
    id: "bin-rukhsa-hafr-bir",
    cat: "binaa",
    title: T7(
      "طلب رخصة حفر بئر",
      "Demande d'autorisation de forage d'un puits",
      "Application for a well drilling permit",
      "Solicitud de autorización para perforar un pozo",
      "Domanda di autorizzazione alla perforazione di un pozzo",
      "Antrag auf Bohrgenehmigung für einen Brunnen",
      "Заявление на разрешение бурения колодца"
    ),
    desc: D7(
      "طلب إذن يقدم إلى الوكالة الحوضية قبل حفر البئر، مشفوع بالدراسة الهيدروجيولوجية ومراجع الملكية.",
      "Demande d'autorisation déposée auprès de l'agence du bassin hydraulique avant tout forage, accompagnée de l'étude hydrogéologique.",
      "Authorization request filed with the hydraulic basin agency before any drilling, accompanied by the hydrogeological study.",
      "Solicitud de autorización presentada ante la agencia de la cuenca hidráulica antes de perforar, acompañada del estudio hidrogeológico.",
      "Domanda di autorizzazione presentata all'agenzia del bacino idraulico prima della perforazione, corredata dallo studio idrogeologico.",
      "Genehmigungsantrag bei der Agentur des hydraulischen Beckens vor jeder Bohrung, mit hydrogeologischem Gutachten.",
      "Заявление на разрешение в агентство водного бассейна до начала бурения с гидрогеологическим исследованием."
    ),
    where: W7(
      "وكالة الحوض المائي التابع لها موقع البئر المزمع حفره.",
      "Agence du bassin hydraulique dont relève le site du puits projeté.",
      "Hydraulic basin agency covering the location of the planned well.",
      "Agencia de la cuenca hidráulica a la que pertenece el emplazamiento del pozo proyectado.",
      "Agenzia del bacino idraulico di competenza del sito del pozzo previsto.",
      "Agentur des hydraulischen Beckens, in dem der geplante Brunnen liegt.",
      "Агентство водного бассейна, к которому относится место планируемого колодца."
    ),
    keywords: ["حفر بئر", "forage", "well drilling", "ماء", "irrigation", "بئر"],
  },
  {
    id: "bin-rukhsa-mahjar",
    cat: "binaa",
    title: T7(
      "طلب رخصة استغلال محجر",
      "Demande d'autorisation d'exploitation de carrière",
      "Application for a quarry operating permit",
      "Solicitud de autorización de explotación de cantera",
      "Domanda di autorizzazione all'esercizio di una cava",
      "Antrag auf Betriebsgenehmigung für einen Steinbruch",
      "Заявление на разрешение эксплуатации карьера"
    ),
    desc: D7(
      "طلب يقدم إلى السلطة الإقليمية قصد استغلال محجر لمواد البناء، مع ملف تقني وبيئي مطابق للقانون.",
      "Demande adressée au gouverneur pour obtenir l'autorisation d'exploiter une carrière de matériaux de construction, avec dossier environnemental et technique.",
      "Application to the governor for authorization to operate a construction-materials quarry, with an environmental and technical file.",
      "Solicitud dirigida al gobernador para obtener la autorización de explotar una cantera de materiales de construcción, con expediente ambiental y técnico.",
      "Domanda indirizzata al governatore per ottenere l'autorizzazione a esercitare una cava di materiali da costruzione, con dossier ambientale e tecnico.",
      "Antrag an den Gouverneur auf Genehmigung des Betriebs einer Baustoffgrube mit Umwelt- und Technikdossier.",
      "Заявление губернатору на разрешение эксплуатации карьера стройматериалов с экологическим и техническим досье."
    ),
    where: W7(
      "مصلحة المحاجر بالمديرية الإقليمية للتجهيز أو مقر العمالة أو الإقليم.",
      "Service des carrières de la direction provinciale de l'équipement ou siège de la préfecture ou province.",
      "Quarries service of the provincial equipment directorate or the prefecture/province headquarters.",
      "Servicio de canteras de la dirección provincial de equipamiento o sede de la prefectura o provincia.",
      "Servizio cave della direzione provinciale delle attrezzature o sede della prefettura o provincia.",
      "Steinbruchdienst der Provinzialdirektion für Ausrüstung oder Sitz der Präfektur bzw. Provinz.",
      "Служба карьеров провинциального директората оборудования или администрация префектуры (провинции)."
    ),
    keywords: ["محجر", "carrière", "quarry", "مواد البناء", "استغلال"],
  },
  {
    id: "bin-tarikhiz-munshaa-filahiya",
    cat: "binaa",
    title: T7(
      "طلب ترخيص بناء منشأة فلاحية",
      "Demande d'autorisation de construire un bâtiment agricole",
      "Application for authorization to build an agricultural structure",
      "Solicitud de autorización para construir una instalación agrícola",
      "Domanda di autorizzazione a costruire un edificio agricolo",
      "Antrag auf Genehmigung zum Bau einer landwirtschaftlichen Anlage",
      "Заявление на разрешение строительства сельскохозяйственного сооружения"
    ),
    desc: D7(
      "طلب لبناء حظيرة أو مخزن فلاحي على أرض فلاحية، مع بيان نوع التربة والمساحة المزمع شغلها.",
      "Demande pour édifier une bergerie ou un hangar agricole sur une terre agricole, en précisant la nature du sol et la superficie occupée.",
      "Request to erect a livestock shed or agricultural hangar on farmland, specifying the soil type and the footprint.",
      "Solicitud para edificar una nave o establo agrícola en terreno rústico, precisando la naturaleza del suelo y la superficie ocupada.",
      "Richiesta per costruire un ricovero o un capannone agricolo su terreno agricolo, specificando la natura del suolo e la superficie occupata.",
      "Antrag zum Bau eines Stall- oder Agrarschuppens auf Ackerland mit Angabe von Bodenart und bebauter Fläche.",
      "Заявление на строительство скотного двора или сельхозсклада на сельхозземле с указанием типа почвы и площади."
    ),
    where: W7(
      "الجماعة القروية ومصلحة التهيئة والتعمير بالعمالة أو الإقليم.",
      "Commune rurale et service d'urbanisme de la préfecture ou province.",
      "Rural commune and the urban planning service of the prefecture or province.",
      "Comuna rural y servicio de urbanismo de la prefectura o provincia.",
      "Comune rurale e servizio urbanistico della prefettura o provincia.",
      "Landgemeinde und Stadtplanungsamt der Präfektur oder Provinz.",
      "Сельская коммуна и служба градостроительства префектуры (провинции)."
    ),
    keywords: ["منشأة فلاحية", "bâtiment agricole", "agricultural building", "حظيرة", "hangar", "فلاحة"],
  },
  {
    id: "bin-rukhsa-taghyir-wijha",
    cat: "binaa",
    title: T7(
      "طلب رخصة تغيير وجهة استعمال البناية",
      "Demande de permis de changement de destination d'un bâtiment",
      "Application for a change-of-use permit for a building",
      "Solicitud de licencia de cambio de destino de un edificio",
      "Domanda di permesso di cambiamento di destinazione d'uso di un edificio",
      "Antrag auf Genehmigung der Nutzungsänderung eines Gebäudes",
      "Заявление на разрешение изменения назначения здания"
    ),
    desc: D7(
      "طلب تحويل مسكن إلى محل تجاري أو عكسه، يخضع لموافقة مصلحة التعمير قبل أي تغيير.",
      "Demande de transformation d'un local d'habitation en local commercial ou inversement, soumise à l'avis préalable du service d'urbanisme.",
      "Request to convert a dwelling into commercial premises or vice versa, subject to the prior approval of the urban planning service.",
      "Solicitud de transformación de una vivienda en local comercial o viceversa, sujeta a la aprobación previa del servicio de urbanismo.",
      "Richiesta di trasformazione di un'abitazione in locale commerciale o viceversa, soggetta al previo parere del servizio urbanistico.",
      "Antrag auf Umwandlung einer Wohnung in Gewerberäume oder umgekehrt, vorbehaltlich der Zustimmung des Stadtplanungsamts.",
      "Заявление о переводе жилого помещения в нежилое или наоборот с предварительного одобрения службы градостроительства."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالعمالة أو الإقليم أو الوكالة الحضرية المختصة.",
      "Service d'urbanisme de la préfecture ou province ou agence urbaine compétente.",
      "Urban planning service of the prefecture or province, or the competent urban agency.",
      "Servicio de urbanismo de la prefectura o provincia, o agencia urbana competente.",
      "Servizio urbanistico della prefettura o provincia, o agenzia urbana competente.",
      "Stadtplanungsamt der Präfektur oder Provinz bzw. die zuständige Stadtagentur.",
      "Служба градостроительства префектуры (провинции) или компетентное городское агентство."
    ),
    keywords: ["وجهة استعمال", "changement de destination", "change of use", "محل تجاري", "تعمير"],
    popular: true,
  },
  {
    id: "bin-rukhsa-ihtilal-mal-umumi",
    cat: "binaa",
    title: T7(
      "طلب رخصة الاحتلال المؤقت للملك العمومي",
      "Demande d'autorisation d'occupation temporaire du domaine public",
      "Application for temporary occupation of the public domain",
      "Solicitud de autorización de ocupación temporal del dominio público",
      "Domanda di autorizzazione all'occupazione temporanea del demanio",
      "Antrag auf zeitweise Nutzung des öffentlichen Eigentums",
      "Заявление на временное занятие публичного имущества"
    ),
    desc: D7(
      "طلب يقدمه صاحب الورش أو المقاول لاحتلال الرصيف أو الطريق بسقالات ومواد البناء طيلة مدة الأشغال.",
      "Demande déposée par le maître d'ouvrage ou l'entrepreneur pour occuper trottoir ou chaussée avec échafaudages et matériaux durant les travaux.",
      "Application filed by the project owner or contractor to occupy a sidewalk or roadway with scaffolding and materials during the works.",
      "Solicitud presentada por el propietario de la obra o el contratista para ocupar la acera o calzada con andamios y materiales durante las obras.",
      "Domanda presentata dal committente o dall'appaltatore per occupare marciapiede o carreggiata con ponteggi e materiali durante i lavori.",
      "Antrag des Bauherrn oder Unternehmers auf Nutzung von Gehweg oder Fahrbahn mit Gerüsten und Materialien während der Arbeiten.",
      "Заявление заказчика или подрядчика о занятии тротуара или проезжей части лесами и материалами на время работ."
    ),
    where: W7(
      "رئاسة الجماعة الحضرية أو القروية التابع لها الشارع أو الطريق المعني.",
      "Présidence de la commune urbaine ou rurale dont relève la voie concernée.",
      "Office of the urban or rural commune in charge of the affected street or road.",
      "Presidencia de la comuna urbana o rural a la que pertenece la vía afectada.",
      "Presidenza del comune urbano o rurale di competenza della via interessata.",
      "Bürgermeisteramt der zuständigen Stadt- oder Landgemeinde.",
      "Администрация городской или сельской коммуны, отвечающей за соответствующую улицу."
    ),
    keywords: ["الملك العمومي", "domaine public", "public domain", "سقالات", "chantier", "ورشة"],
  },
  // ─── Constatations & réception des travaux ───
  {
    id: "bin-talab-muayana-qabl-taslim",
    cat: "binaa",
    title: T7(
      "طلب معاينة الأشغال قبل التسليم",
      "Demande d'inspection des travaux avant réception",
      "Request for a pre-handover inspection of the works",
      "Solicitud de inspección de las obras antes de la recepción",
      "Richiesta di ispezione dei lavori prima della consegna",
      "Antrag auf Abnahmeprüfung der Arbeiten vor der Übergabe",
      "Заявление на осмотр работ до сдачи объекта"
    ),
    desc: D7(
      "طلب يوجه إلى الوكالة الحضرية لمعاينة البناء قبل التسليم الرسمي وإثبات الملاحظات في محضر.",
      "Demande adressée à l'agence urbaine pour examiner le bâtiment avant la réception officielle et consigner les observations.",
      "Request sent to the urban agency to examine the building before official handover and record any observations.",
      "Solicitud dirigida a la agencia urbana para examinar el edificio antes de la recepción oficial y registrar las observaciones.",
      "Richiesta inviata all'agenzia urbana per esaminare l'edificio prima della consegna ufficiale e verbalizzare le osservazioni.",
      "Antrag an die Stadtagentur zur Prüfung des Gebäudes vor der offiziellen Übergabe und Festhaltung der Befunde.",
      "Заявление в городское агентство на осмотр здания до официальной сдачи с фиксацией замечаний."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو بالعمالة أو الإقليم.",
      "Service d'urbanisme de l'agence urbaine ou de la préfecture ou province.",
      "Urban planning service of the urban agency or of the prefecture or province.",
      "Servicio de urbanismo de la agencia urbana o de la prefectura o provincia.",
      "Servizio urbanistico dell'agenzia urbana o della prefettura o provincia.",
      "Stadtplanungsamt der Stadtagentur bzw. der Präfektur oder Provinz.",
      "Служба градостроительства городского агентства или префектуры (провинции)."
    ),
    keywords: ["معاينة", "réception", "handover", "تسليم", "inspection"],
  },
  {
    id: "bin-mahdar-muayana",
    cat: "binaa",
    title: T7(
      "محضر معاينة الأشغال",
      "Procès-verbal de constatation des travaux",
      "Site inspection report",
      "Acta de inspección de las obras",
      "Verbale di constatazione dei lavori",
      "Bauabnahmeprotokoll",
      "Акт осмотра строительных работ"
    ),
    desc: D7(
      "وثيقة يحررها المهندس أو المراقب لتثبيت حالة الأشغال المنجزة ونسبة التقدم والملاحظات المسجلة.",
      "Document rédigé par l'ingénieur ou le contrôleur pour consigner l'état des travaux réalisés et les remarques de conformité.",
      "Document drafted by the engineer or inspector to record the state of completed works and conformity remarks.",
      "Documento redactado por el ingeniero o el inspector para consignar el estado de las obras y las observaciones de conformidad.",
      "Documento redatto dall'ingegnere o dall'ispettore per rilevare lo stato dei lavori e le osservazioni di conformità.",
      "Vom Ingenieur oder Prüfer erstelltes Dokument über Arbeitsstand und Konformitätshinweise.",
      "Документ, составляемый инженером или инспектором для фиксации состояния работ и замечаний о соответствии."
    ),
    where: W7(
      "يحرر بعين المكان ويودع بمصلحة التعمير التابعة للوكالة الحضرية أو الجماعة.",
      "Rédigé sur place puis déposé au service d'urbanisme de l'agence urbaine ou de la commune.",
      "Drafted on site and filed with the planning service of the urban agency or commune.",
      "Se redacta in situ y se deposita en el servicio de urbanismo de la agencia urbana o comuna.",
      "Redatto in loco e depositato presso il servizio urbanistico dell'agenzia urbana o del comune.",
      "Vor Ort erstellt und beim Stadtplanungsamt der Stadtagentur oder Gemeinde eingereicht.",
      "Составляется на месте и подаётся в службу градостроительства агентства или коммуны."
    ),
    keywords: ["محضر معاينة", "procès-verbal", "inspection report", "أشغال", "travaux"],
  },
  {
    id: "bin-ichhad-mutabaqa",
    cat: "binaa",
    title: T7(
      "إشهاد على مطابقة البناء للرخصة",
      "Attestation de conformité de la construction au permis",
      "Certificate of conformity of the construction to the permit",
      "Certificado de conformidad de la construcción con la licencia",
      "Attestato di conformità della costruzione al permesso",
      "Konformitätsbescheinigung der Baute zur Genehmigung",
      "Свидетельство о соответствии строительства разрешению"
    ),
    desc: D7(
      "إشهاد يسلم بعد معاينة البناية والتأكد من مطابقتها للتصاميم المرخصة، يلزم لربط الماء والكهرباء نهائيا.",
      "Attestation délivrée après examen du bâtiment, confirmant sa conformité aux plans autorisés et exigée pour le branchement définitif.",
      "Certificate issued after examining the building, confirming its conformity to the approved plans and required for the final utility connection.",
      "Certificado emitido tras examinar el edificio, que confirma su conformidad con los planos aprobados y se exige para la conexión definitiva.",
      "Attestato rilasciato dopo l'esame dell'edificio, che ne conferma la conformità ai piani approvati, richiesto per l'allacciamento definitivo.",
      "Bescheinigung nach Prüfung des Gebäudes, die die Übereinstimmung mit den genehmigten Plänen bestätigt; für den Endanschluss erforderlich.",
      "Свидетельство, выдаваемое после осмотра здания, о его соответствии утверждённым планам; нужно для постоянного подключения сетей."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو رئاسة الجماعة المسلمة للرخصة.",
      "Service d'urbanisme de l'agence urbaine ou présidence de la commune ayant délivré le permis.",
      "Urban planning service of the urban agency or the commune that issued the permit.",
      "Servicio de urbanismo de la agencia urbana o presidencia de la comuna que emitió la licencia.",
      "Servizio urbanistico dell'agenzia urbana o presidenza del comune che ha rilasciato il permesso.",
      "Stadtplanungsamt der Stadtagentur oder Bürgermeisteramt der genehmigenden Gemeinde.",
      "Служба градостроительства агентства или администрация коммуны, выдавшей разрешение."
    ),
    keywords: ["مطابقة", "conformité", "conformity", "شهادة", "رخصة البناء"],
  },
  {
    id: "bin-wasl-muaqqat",
    cat: "binaa",
    title: T7(
      "طلب ربط مؤقت بالماء والكهرباء لورشة البناء",
      "Demande de branchement provisoire d'eau et d'électricité pour chantier",
      "Application for temporary water and electricity supply for a construction site",
      "Solicitud de acometida provisional de agua y electricidad para obra",
      "Domanda di allacciamento provvisorio di acqua ed elettricità per il cantiere",
      "Antrag auf provisorischen Wasser- und Stromanschluss für die Baustelle",
      "Заявление на временное подключение воды и электроэнергии к стройплощадке"
    ),
    desc: D7(
      "طلب تزويد الورش بالماء والكهرباء بصورة مؤقتة، يرفق برخصة البناء وتعهد بالأداء بعد نهاية الأشغال.",
      "Demande d'alimentation provisoire du chantier en eau et électricité, accompagnée du permis de construire et d'un engagement de paiement.",
      "Request for temporary water and electricity supply to the site, accompanied by the building permit and a payment undertaking.",
      "Solicitud de suministro provisional de agua y electricidad a la obra, acompañada de la licencia y de un compromiso de pago.",
      "Richiesta di fornitura provvisoria di acqua ed elettricità al cantiere, corredata dal permesso di costruire e da un impegno di pagamento.",
      "Antrag auf provisorische Wasser- und Stromversorgung der Baustelle mit Baugenehmigung und Zahlungszusage.",
      "Заявление на временное водоснабжение и электроснабжение стройплощадки с разрешением на строительство и обязательством оплаты."
    ),
    where: W7(
      "وكالة المكتب الوطني للكهرباء والماء الصالح للشرب (ONEE) التابع لها موقع الورش.",
      "Agence de l'Office National de l'Électricité et de l'Eau potable (ONEE) dont relève le site.",
      "Agency of the National Office of Electricity and Potable Water (ONEE) covering the site.",
      "Agencia de la Oficina Nacional de Electricidad y Agua Potable (ONEE) competente para el sitio.",
      "Agenzia dell'Ufficio Nazionale dell'Elettricità e dell'Acqua Potabile (ONEE) competente per il sito.",
      "Agentur des Nationalamts für Elektrizität und Trinkwasser (ONEE) für den Standort.",
      "Агентство Национального офиса электроэнергии и питьевой воды (ONEE) по месту объекта."
    ),
    authority: "one",
    keywords: ["ربط مؤقت", "branchement provisoire", "temporary supply", "ورشة", "ONEE", "chantier"],
  },
  {
    id: "bin-istirdad-damanat",
    cat: "binaa",
    title: T7(
      "طلب استعادة الضمانات البنكية بعد التسليم",
      "Demande de restitution des garanties bancaires après réception",
      "Request for release of the bank guarantees after handover",
      "Solicitud de devolución de las garantías bancarias tras la recepción",
      "Domanda di svincolo delle garanzie bancarie dopo il collaudo",
      "Antrag auf Freigabe der Bankgarantien nach Abnahme",
      "Заявление о возврате банковских гарантий после сдачи"
    ),
    desc: D7(
      "طلب يقدم إلى البنك أو صاحب المشروع لفك الضمانة البنكية بعد التسليم النهائي للأشغال بصفة قانونية.",
      "Demande adressée à la banque ou au maître d'ouvrage pour libérer la caution bancaire après la réception définitive des travaux.",
      "Request to the bank or project owner to release the bank guarantee after the final handover of the works.",
      "Solicitud dirigida al banco o al propietario del proyecto para liberar la garantía bancaria tras la recepción definitiva de las obras.",
      "Richiesta alla banca o al committente per svincolare la garanzia bancaria dopo il definitivo collaudo dei lavori.",
      "Antrag an die Bank oder den Bauherrn zur Freigabe der Bankgarantie nach endgültiger Abnahme der Arbeiten.",
      "Заявление в банк или заказчику об освобождении банковской гарантии после окончательной сдачи работ."
    ),
    where: W7(
      "الوكالة البنكية المصدرة للضمانة أو مقر صاحب المشروع، مع إرفاق محضر التسليم.",
      "Agence bancaire émettrice de la caution ou siège du maître d'ouvrage, avec le procès-verbal de réception joint.",
      "Bank branch that issued the guarantee or the project owner's office, with the handover report attached.",
      "Sucursal bancaria emisora de la garantía u oficina del propietario del proyecto, adjuntando el acta de recepción.",
      "Filiale bancaria emittente della garanzia o sede del committente, allegando il verbale di collaudo.",
      "Bankfiliale als Garantiegeber oder Büro des Bauherrn, mit beigefügtem Abnahmeprotokoll.",
      "Банк-эмитент гарантии или офис заказчика с приложенным актом сдачи."
    ),
    keywords: ["ضمانة بنكية", "caution bancaire", "bank guarantee", "تسليم", "mainlevée"],
  },
  {
    id: "bin-ajal-idafiya",
    cat: "binaa",
    title: T7(
      "طلب آجال إضافية لإنجاز أشغال البناء",
      "Demande de prorogation du délai d'exécution des travaux",
      "Application for an extension of the works execution deadline",
      "Solicitud de prórroga del plazo de ejecución de las obras",
      "Domanda di proroga del termine di esecuzione dei lavori",
      "Antrag auf Verlängerung der Ausführungsfrist der Arbeiten",
      "Заявление на продление срока выполнения строительных работ"
    ),
    desc: D7(
      "طلب يرفع إلى مصلحة التعمير لتمديد أجل صلاحية رخصة البناء عند تعذر إنجاز الأشغال في الوقت المحدد.",
      "Demande soumise au service d'urbanisme pour prolonger la validité du permis lorsque les travaux ne peuvent aboutir à temps.",
      "Request submitted to the urban planning service to extend the permit's validity when the works cannot be completed on time.",
      "Solicitud presentada al servicio de urbanismo para prolongar la validez de la licencia cuando las obras no pueden terminarse a tiempo.",
      "Richiesta presentata al servizio urbanistico per prorogare la validità del permesso quando i lavori non si concludono in tempo.",
      "Antrag an das Stadtplanungsamt auf Verlängerung der Genehmigungsgültigkeit, wenn die Arbeiten nicht rechtzeitig abgeschlossen werden können.",
      "Заявление в службу градостроительства о продлении срока действия разрешения при невозможности завершить работы вовремя."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو الجماعة التي سلمت الرخصة.",
      "Service d'urbanisme de l'agence urbaine ou de la commune ayant délivré le permis.",
      "Urban planning service of the urban agency or the commune that issued the permit.",
      "Servicio de urbanismo de la agencia urbana o de la comuna que emitió la licencia.",
      "Servizio urbanistico dell'agenzia urbana o del comune che ha rilasciato il permesso.",
      "Stadtplanungsamt der Stadtagentur oder die genehmigende Gemeinde.",
      "Служба градостроительства агентства или выдавшая разрешение коммуна."
    ),
    keywords: ["تمديد الأجل", "prorogation", "extension", "رخصة البناء", "آجال"],
  },
  {
    id: "bin-muayana-binaa-khatar",
    cat: "binaa",
    title: T7(
      "طلب معاينة بناية آيلة للسقوط",
      "Demande d'expertise d'un bâtiment menaçant ruine",
      "Request for inspection of a building threatening collapse",
      "Solicitud de inspección de un edificio en peligro de derrumbe",
      "Domanda di sopralluogo di un edificio in pericolo di crollo",
      "Antrag auf Begutachtung eines einsturzgefährdeten Gebäudes",
      "Заявление на обследование здания, угрожающего обрушением"
    ),
    desc: D7(
      "طلب فحص فني لبناية مهددة بالسقوط من طرف مهندس مختص، قصد اتخاذ التدابير الوقائية اللازمة.",
      "Demande d'examen technique d'un bâtiment menaçant de s'effondrer, confié à un ingénieur compétent aux fins de mesures conservatoires.",
      "Request for a technical examination of a building at risk of collapse by a qualified engineer, leading to protective measures.",
      "Solicitud de examen técnico de un edificio en riesgo de derrumbe por un ingeniero competente, con medidas de protección.",
      "Richiesta di esame tecnico di un edificio a rischio di crollo da parte di un ingegnere competente, con misure di protezione.",
      "Antrag auf technische Prüfung eines einsturzgefährdeten Gebäudes durch einen qualifizierten Ingenieur mit Schutzmaßnahmen.",
      "Заявление на техническое обследование аварийного здания квалифицированным инженером с принятием защитных мер."
    ),
    where: W7(
      "رئاسة الجماعة أو مصلحة التهيئة والتعمير بالعمالة أو الإقليم.",
      "Présidence de la commune ou service d'urbanisme de la préfecture ou province.",
      "Commune office or the urban planning service of the prefecture or province.",
      "Presidencia de la comuna o servicio de urbanismo de la prefectura o provincia.",
      "Presidenza del comune o servizio urbanistico della prefettura o provincia.",
      "Bürgermeisteramt oder Stadtplanungsamt der Präfektur bzw. Provinz.",
      "Администрация коммуны или служба градостроительства префектуры (провинции)."
    ),
    keywords: ["آيلة للسقوط", "menaçant ruine", "collapse", "معاينة", "خطر"],
  },
  // ─── Terrains & documents d'urbanisme ───
  {
    id: "bin-buqa-salaliya",
    cat: "binaa",
    title: T7(
      "طلب الاستفادة من بقعة أرضية سلالية قصد البناء",
      "Demande d'attribution d'une parcelle sur terre soulaliyate en vue de construire",
      "Application for a building plot on soulaliyate collective land",
      "Solicitud de adjudicación de una parcela en tierra colectiva soulaliyate para construir",
      "Domanda di assegnazione di un lotto su terra collettiva soulaliyate per costruire",
      "Antrag auf Zuweisung eines Baugrundstücks auf kollektivem Soulaliyate-Land",
      "Заявление на выделение участка на коллективных землях сулалият для строительства"
    ),
    desc: D7(
      "طلب استفادة من بقعة بأرض سلالية قصد البناء، يعرض على الجمع العام للقبيلة قبل منحه من السلطة المختصة.",
      "Demande de bénéfice d'une parcelle sur terre soulaliyate pour construire, soumise à la délibération de l'assemblée générale de la tribu.",
      "Application for a plot on soulaliyate land for building purposes, subject to deliberation by the tribe's general assembly.",
      "Solicitud de una parcela en tierra soulaliyate para construir, sujeta a la deliberación de la asamblea general de la tribu.",
      "Domanda di un lotto su terra soulaliyate per costruire, soggetta alla deliberazione dell'assemblea generale della tribù.",
      "Antrag auf ein Grundstück auf Soulaliyate-Land zum Bauen, vorbehaltlich des Beschlusses der Stammesversammlung.",
      "Заявление на участок на землях сулалият для строительства по решению общего собрания племени."
    ),
    where: W7(
      "عبر السلطة الإدارية المحلية أو مصلحة الأراضي الجماعية بالعمالة أو الإقليم المعني.",
      "Auprès de l'autorité administrative locale ou du service des terres collectives de la préfecture ou province concernée.",
      "Through the local administrative authority or the collective-lands service of the prefecture or province concerned.",
      "Ante la autoridad administrativa local o el servicio de tierras colectivas de la prefectura o provincia concerniente.",
      "Presso l'autorità amministrativa locale o il servizio delle terre collettive della prefettura o provincia interessata.",
      "Über die örtliche Verwaltungsbehörde oder den Dienst für Kollektivländereien der Präfektur bzw. Provinz.",
      "Через местную административную власть или службу коллективных земель префектуры (провинции)."
    ),
    keywords: ["سلالي", "terres collectives", "collective land", "بقعة أرضية", "attribution"],
  },
  {
    id: "bin-tasallum-buqa",
    cat: "binaa",
    title: T7(
      "طلب تسلم بقعة أرضية من الجماعة",
      "Demande de remise d'un lot de terrain communal",
      "Application to take delivery of a communal land plot",
      "Solicitud de entrega de una parcela comunal",
      "Domanda di consegna di un lotto comunale",
      "Antrag auf Übergabe eines kommunalen Grundstücks",
      "Заявление о передаче земельного участка от коммуны"
    ),
    desc: D7(
      "طلب استلام بقعة مرصدة للمعني بالأمر من طرف الجماعة، يتضمن التعهد بالبناء داخل الأجل القانوني.",
      "Demande de remise effective d'un lot attribué par la commune, comportant l'engagement de bâtir dans le délai légal.",
      "Request for actual delivery of a plot allocated by the commune, including the commitment to build within the legal deadline.",
      "Solicitud de entrega efectiva de una parcela adjudicada por la comuna, con compromiso de edificar en el plazo legal.",
      "Richiesta di consegna effettiva di un lotto attribuito dal comune, con impegno a costruire entro il termine di legge.",
      "Antrag auf tatsächliche Übergabe eines von der Gemeinde zugewiesenen Grundstücks mit Bauerklärung innerhalb der gesetzlichen Frist.",
      "Заявление о фактической передаче участка, выделенного коммуной, с обязательством построить в установленный срок."
    ),
    where: W7(
      "رئاسة الجماعة أو مصلحة أملاك الجماعة المسؤولة عن البقعة المرصدة.",
      "Présidence de la commune ou service des biens communaux responsable du lot attribué.",
      "Commune office or the communal property service in charge of the allocated plot.",
      "Presidencia de la comuna o servicio de bienes comunales responsable de la parcela adjudicada.",
      "Presidenza del comune o servizio dei beni comunali responsabile del lotto attribuito.",
      "Bürgermeisteramt oder Vermögensdienst der Gemeinde, der für das Grundstück zuständig ist.",
      "Администрация коммуны или служба коммунального имущества, отвечающая за участок."
    ),
    keywords: ["تسلم بقعة", "lot communal", "communal plot", "جماعة", "بناء"],
  },
  {
    id: "bin-waraqa-malumat",
    cat: "binaa",
    title: T7(
      "طلب ورقة معلومات عمرانية",
      "Demande de fiche d'information urbanistique",
      "Application for an urban information sheet",
      "Solicitud de ficha de información urbanística",
      "Domanda di scheda di informazione urbanistica",
      "Antrag auf ein städtebauliches Informationsblatt",
      "Заявление на градостроительную информационную справку"
    ),
    desc: D7(
      "وثيقة تحدد المعطيات التنظيمية والشروط المطبقة في مجال البناء والتجزئة والتقسيم بعقار معين.",
      "Document précisant les données réglementaires et les conditions applicables en matière de construction, de lotissement et de morcellement d'un immeuble.",
      "Document specifying the regulatory data and conditions applicable to construction, subdivision and parcelling of a given property.",
      "Documento que precisa los datos normativos y las condiciones aplicables en materia de edificación, parcelación y división de un inmueble.",
      "Documento che specifica i dati normativi e le condizioni applicabili in materia di costruzione, lottizzazione e frazionamento di un immobile.",
      "Dokument mit den Vorschriftsdaten und Bedingungen für Bau, Erschließung und Parzellierung eines bestimmten Grundstücks.",
      "Документ о нормативных данных и условиях строительства, лотизации и межевания конкретного объекта."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التعمير بالعمالة أو الإقليم التابع لها العقار.",
      "Agence urbaine ou service d'urbanisme de la préfecture ou province dont relève l'immeuble.",
      "Urban agency or the planning service of the prefecture or province where the property lies.",
      "Agencia urbana o servicio de urbanismo de la prefectura o provincia a la que pertenece el inmueble.",
      "Agenzia urbana o servizio urbanistico della prefettura o provincia di competenza dell'immobile.",
      "Stadtagentur oder Stadtplanungsamt der Präfektur bzw. Provinz, zu der das Grundstück gehört.",
      "Городское агентство или служба градостроительства префектуры (провинции) по месту объекта."
    ),
    keywords: ["معلومات عمرانية", "fiche urbanistique", "urban information sheet", "FIU", "تعمير"],
  },
  {
    id: "bin-musadaka-tajziya",
    cat: "binaa",
    title: T7(
      "طلب المصادقة على تصميم التجزئة",
      "Demande d'approbation du plan de lotissement",
      "Application for approval of a subdivision plan",
      "Solicitud de aprobación del plan de parcelación",
      "Domanda di approvazione del piano di lottizzazione",
      "Antrag auf Genehmigung des Erschließungsplans",
      "Заявление на утверждение плана лотизации"
    ),
    desc: D7(
      "طلب يرفق بالتصاميم التقنية لتجزئة العقار، يعرض على اللجنة المختلطة قبل تسليم رخصة التجزئة.",
      "Demande accompagnée des plans techniques du lotissement, soumise au comité mixte avant la délivrance du permis de lotir.",
      "Application accompanied by the subdivision's technical plans, submitted to the joint committee before the lotissement permit is issued.",
      "Solicitud acompañada de los planos técnicos de la parcelación, sometida al comité mixto antes de emitir la licencia de parcelación.",
      "Domanda corredata dai piani tecnici della lottizzazione, sottoposta al comitato misto prima del rilascio del permesso di lottizzare.",
      "Antrag mit den technischen Plänen der Aufteilung, dem Gemischten Ausschuss vor Erteilung der Teilungsgenehmigung vorgelegt.",
      "Заявление с техническими планами раздела, рассматриваемое смешанной комиссией до выдачи разрешения на лотизацию."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالعمالة أو الإقليم أو الوكالة الحضرية المختصة.",
      "Service d'urbanisme de la préfecture ou province ou agence urbaine compétente.",
      "Urban planning service of the prefecture or province, or the competent urban agency.",
      "Servicio de urbanismo de la prefectura o provincia, o agencia urbana competente.",
      "Servizio urbanistico della prefettura o provincia, o agenzia urbana competente.",
      "Stadtplanungsamt der Präfektur oder Provinz bzw. die zuständige Stadtagentur.",
      "Служба градостроительства префектуры (провинции) или компетентное городское агентство."
    ),
    keywords: ["تصميم التجزئة", "plan de lotissement", "subdivision plan", "مصادقة", "لجنة مختلطة"],
  },
  {
    id: "bin-tasrih-shuru",
    cat: "binaa",
    title: T7(
      "التصريح بالشروع في البناء",
      "Déclaration d'ouverture de chantier",
      "Declaration of the start of construction work",
      "Declaración de apertura de obra",
      "Dichiarazione di apertura del cantiere",
      "Anzeige des Baubeginns",
      "Уведомление о начале строительных работ"
    ),
    desc: D7(
      "تصريح يقدمه صاحب الرخصة عند بداية الأشغال، يمكّن الوكالة الحضرية من برمجة زيارات المراقبة.",
      "Déclaration faite par le titulaire du permis au début des travaux, permettant à l'agence urbaine de programmer ses visites de contrôle.",
      "Declaration made by the permit holder at the start of works, allowing the urban agency to schedule its monitoring visits.",
      "Declaración hecha por el titular de la licencia al inicio de las obras, que permite a la agencia urbana programar sus visitas de control.",
      "Dichiarazione resa dal titolare del permesso all'inizio dei lavori, che consente all'agenzia urbana di programmare i sopralluoghi.",
      "Anzeige des Genehmigungsinhabers bei Arbeitsbeginn, die der Stadtagentur Kontrollbesuche ermöglicht.",
      "Уведомление владельца разрешения о начале работ, позволяющее агентству планировать контрольные визиты."
    ),
    where: W7(
      "مصلحة التهيئة والتعمير بالوكالة الحضرية أو الجماعة، برسالة مضمونة أو مباشرة.",
      "Service d'urbanisme de l'agence urbaine ou de la commune, par lettre recommandée ou en main propre.",
      "Planning service of the urban agency or commune, by registered mail or in person.",
      "Servicio de urbanismo de la agencia urbana o de la comuna, por carta certificada o en mano.",
      "Servizio urbanistico dell'agenzia urbana o del comune, per raccomandata o a mano.",
      "Stadtplanungsamt der Stadtagentur oder Gemeinde, per Einschreiben oder persönlich.",
      "Служба градостроительства агентства или коммуны — заказным письмом или лично."
    ),
    keywords: ["الشروع في البناء", "ouverture de chantier", "start of works", "تصريح", "chantier"],
    popular: true,
  },
  {
    id: "bin-shahada-umraniya",
    cat: "binaa",
    title: T7(
      "طلب شهادة عمرانية",
      "Demande de certificat urbanistique",
      "Application for an urban planning certificate",
      "Solicitud de certificado urbanístico",
      "Domanda di certificato urbanistico",
      "Antrag auf eine städtebauliche Bescheinigung",
      "Заявление на градостроительный сертификат"
    ),
    desc: D7(
      "شهادة تلخص الوضعية القانونية للعقار في مجال التعمير، وتبين ما إذا كان معرضا لمشروع عمراني أو تحفظ.",
      "Certificat résumant la situation juridique de l'immeuble au regard de l'urbanisme, indiquant son éventuelle exposition à un projet d'aménagement.",
      "Certificate summarising the property's legal situation regarding planning, stating whether it is affected by a development project.",
      "Certificado que resume la situación jurídica del inmueble en materia de urbanismo, indicando su eventual afectación por un proyecto.",
      "Certificato che riassume la situazione giuridica dell'immobile in ambito urbanistico, indicando l'eventuale incidenza di un progetto.",
      "Bescheinigung über die planungsrechtliche Lage des Grundstücks und eine etwaige Betroffenheit durch ein Erschließungsprojekt.",
      "Справка о градостроительном статусе объекта и его возможном затрагивании проектом застройки."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التهيئة والتعمير بالعمالة أو الإقليم.",
      "Agence urbaine ou service d'urbanisme de la préfecture ou province.",
      "Urban agency or the urban planning service of the prefecture or province.",
      "Agencia urbana o servicio de urbanismo de la prefectura o provincia.",
      "Agenzia urbana o servizio urbanistico della prefettura o provincia.",
      "Stadtagentur oder Stadtplanungsamt der Präfektur bzw. Provinz.",
      "Городское агентство или служба градостроительства префектуры (провинции)."
    ),
    keywords: ["شهادة عمرانية", "certificat urbanistique", "urban planning certificate", "تعمير", "عقار"],
  },
  {
    id: "bin-iada-binaa-manhur",
    cat: "binaa",
    title: T7(
      "طلب إعادة بناء منزل منهار",
      "Demande de reconstruction d'une maison effondrée",
      "Application to rebuild a collapsed house",
      "Solicitud de reconstrucción de una casa derrumbada",
      "Domanda di ricostruzione di una casa crollata",
      "Antrag auf Wiederaufbau eines eingestürzten Hauses",
      "Заявление на восстановление обрушившегося дома"
    ),
    desc: D7(
      "طلب رخصة إعادة بناء مسكن انهار كليا أو جزئيا، مشفوع بمحضر معاينة يثبت الضرر الحاصل.",
      "Demande de permis pour rebâtir un logement effondré en totalité ou en partie, appuyée par un procès-verbal constatant le sinistre.",
      "Permit application to rebuild a dwelling that fully or partially collapsed, supported by a report attesting the damage.",
      "Solicitud de permiso para reconstruir una vivienda total o parcialmente derrumbada, avalada por un acta que constata el siniestro.",
      "Domanda di permesso per ricostruire un'abitazione crollata in tutto o in parte, corredata da un verbale che attesta il danno.",
      "Genehmigungsantrag zum Wiederaufbau eines ganz oder teilweise eingestürzten Wohnhauses mit Schadensprotokoll.",
      "Заявление на разрешение восстановить полностью или частично обрушившийся дом с актом о повреждениях."
    ),
    where: W7(
      "رئاسة الجماعة أو مصلحة التهيئة والتعمير بالوكالة الحضرية.",
      "Présidence de la commune ou service d'urbanisme de l'agence urbaine.",
      "Commune office or the urban planning service of the urban agency.",
      "Presidencia de la comuna o servicio de urbanismo de la agencia urbana.",
      "Presidenza del comune o servizio urbanistico dell'agenzia urbana.",
      "Bürgermeisteramt oder Stadtplanungsamt der Stadtagentur.",
      "Администрация коммуны или служба градостроительства городского агентства."
    ),
    keywords: ["إعادة بناء", "reconstruction", "collapsed house", "منهار", "رخصة"],
  },
  {
    id: "bin-nuskha-tasjim-tahyiya",
    cat: "binaa",
    title: T7(
      "طلب نسخة من تصميم التهيئة",
      "Demande de copie du plan d'aménagement",
      "Application for a copy of the development plan",
      "Solicitud de copia del plan de ordenación",
      "Domanda di copia del piano urbanistico",
      "Antrag auf eine Kopie des Bebauungsplans",
      "Заявление на копию плана застройки"
    ),
    desc: D7(
      "طلب الحصول على نسخة أو مقتطف من تصميم التهيئة المعتمد لمعرفة قواعد البناء المطبقة على منطقة معينة.",
      "Demande d'une copie ou d'un extrait du plan d'aménagement approuvé, afin de connaître les règles de construction applicables.",
      "Request for a copy or extract of the approved development plan to know the construction rules applying to an area.",
      "Solicitud de una copia o extracto del plan de ordenación aprobado para conocer las reglas de edificación aplicables.",
      "Richiesta di una copia o di un estratto del piano urbanistico approvato per conoscere le regole edilizie applicabili.",
      "Antrag auf eine Kopie oder einen Auszug des genehmigten Bebauungsplans zur Kenntnis der geltenden Bauvorschriften.",
      "Заявление на копию или выписку из утверждённого плана застройки для ознакомления с действующими нормами."
    ),
    where: W7(
      "الوكالة الحضرية أو مصلحة التعمير المختصة، مباشرة أو بمكتوب مضمون.",
      "Agence urbaine ou service d'urbanisme compétent, directement ou par courrier recommandé.",
      "Urban agency or the competent planning service, in person or by registered mail.",
      "Agencia urbana o servicio de urbanismo competente, directamente o por correo certificado.",
      "Agenzia urbana o servizio urbanistico competente, direttamente o per raccomandata.",
      "Stadtagentur oder zuständiges Stadtplanungsamt, direkt oder per Einschreiben.",
      "Городское агентство или компетентная служба градостроительства — лично или заказным письмом."
    ),
    keywords: ["تصميم التهيئة", "plan d'aménagement", "development plan", "نسخة", "تعمير"],
  },
];
