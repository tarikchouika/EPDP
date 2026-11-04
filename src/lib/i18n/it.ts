import type { Dict } from "./types";

export const it: Dict = {
  dir: "ltr",
  localeName: "Italiano",
  englishName: "Italian",

  nav: {
    home: "Home",
    services: "Documenti",
    links: "Siti ufficiali",
    how: "Come funziona",
    faq: "FAQ",
    about: "Chi siamo",
    legal: "Note legali",
    assistant: "Assistente dati",
    portals: "Portali ufficiali",
    docsIndex: "Indice dei documenti",
    categories: "Categorie",
    androidApp: "App Android",
  },

  hero: {
    badge: "Piattaforma marocchina · 100% gratuita",
    title: "I tuoi documenti amministrativi,",
    titleAccent: "pronti in pochi secondi",
    subtitle:
      "La piattaforma digitale dello scrivano pubblico (EPDP) digitalizza i servizi del katib pubblico con professionalità: {docs} modelli e documenti ufficiali in arabo e francese — richieste, reclami, contratti di locazione e vendita, procure, dichiarazioni giurate, curriculum — oltre a una guida completa dei siti ufficiali delle amministrazioni marocchine, un assistente intelligente che risponde solo da fonti ufficiali verificate senza allucinazioni, e un assistente IA che raccoglie i tuoi dati e redige il documento professionalmente.",
    ctaPrimary: "Sfoglia i documenti",
    ctaSecondary: "Siti ufficiali",
    trust: "Completamente gratuito · Senza registrazione · 7 lingue · Basato su fonti ufficiali",
    searchPlaceholder: "Cerca: dichiarazione giurata, contratto di locazione, reclamo…",
  },

  stats: {
    documents: "documenti e modelli pronti",
    categories: "categorie amministrative",
    languages: "lingue internazionali",
    official: "enti ufficiali verificati",
  },

  services: {
    title: "Libreria di documenti e modelli",
    subtitle:
      "Sfoglia per categoria o cerca direttamente. Ogni scheda indica l'autorità di presentazione e la fonte ufficiale; i modelli pronti sono redatti in linguaggio amministrativo professionale, scaricabili e copiabili gratuitamente.",
    search: "Cerca documenti…",
    all: "Tutte le categorie",
    popular: "Più richiesti",
    results: "documenti",
    noResults: "Nessun risultato corrispondente",
    noResultsHint: "Prova un'altra parola chiave: richiesta, reclamo, contratto, dichiarazione…",
    viewDoc: "Visualizza documento",
    aboutDoc: "Informazioni sul documento",
    templateTab: "Modello",
    detailsTab: "Dettagli e presentazione",
    copy: "Copia testo",
    copied: "Copiato con successo",
    download: "Scarica Word",
    downloadPdf: "Scarica PDF",
    verifiedSource: "Modello verificato alla fonte",
    arabicVersion: "Versione araba",
    frenchVersion: "Versione francese",
    requiredInfo: "Informazioni richieste",
    destination: "Dove presentare il documento",
    officialSource: "Fonte ufficiale",
    freeTag: "Gratuito",
    note: "Nota: i modelli sono indicativi; conferma i requisiti con l'autorità competente o sul suo sito ufficiale prima di presentare.",
  },

  catalog: {
    showing: "Visualizzazione di {from}–{to} su {total} documenti",
    prev: "Precedente",
    next: "Successiva",
    first: "Prima",
    last: "Ultima",
    pageAria: "Vai alla pagina {n}",
    currentPage: "Pagina {page} di {pages}",
    sortLabel: "Ordina",
    sortPopular: "Più richiesti",
    sortAlpha: "Alfabetico",
    officialTitle: "Denominazione ufficiale del documento",
    officialAr: "In arabo",
    officialFr: "In francese",
    filterAria: "Filtra per categoria",
    clearFilters: "Cancella filtri",
  },

  links: {
    title: "Guida ai siti ufficiali marocchini",
    subtitle:
      "Collegamenti ufficiali verificati agli organismi e istituti pubblici marocchini (previdenza, lavoro, economia e finanze, servizi), esaminati con cura e aggiornati regolarmente.",
    visit: "Visita il sito",
    officialBadge: "Ufficiale",
    verifiedNote: "Tutti i link appartengono a domini ufficiali (gov.ma) o a note istituzioni pubbliche marocchine.",
    count: "{n} collegamenti",
    copyUrl: "Copia link",
    copiedUrl: "Link copiato",
  },

  portals: {
    title: "Portali ufficiali",
    subtitle:
      "Portali governativi e piattaforme digitali pubbliche ufficiali per svolgere le pratiche a distanza, verificati e aggiornati regolarmente.",
  },

  docsIndex: {
    title: "Indice dei documenti",
    subtitle:
      "Indice completo di tutti i moduli e documenti amministrativi per categoria, con collegamento diretto a ciascun documento.",
  },

  how: {
    title: "Come funziona la piattaforma?",
    subtitle: "Quattro semplici passi tra te e il tuo documento amministrativo pronto",
    steps: [
      {
        title: "Scegli il documento",
        desc: "Sfoglia le sedici categorie o cerca per parola chiave il documento che ti serve.",
      },
      {
        title: "Esamina il modello",
        desc: "Leggi il testo completo in arabo e francese, insieme all'elenco dei dati richiesti.",
      },
      {
        title: "Scarica o copia",
        desc: "Scarica direttamente in formato Word o copia il testo, poi compila i tuoi dati personali nei campi indicati.",
      },
      {
        title: "Presenta il documento",
        desc: "Presentalo all'autorità indicata nei dettagli di ogni documento, con il link ufficiale quando disponibile.",
      },
    ],
  },

  faq: {
    title: "Come funziona — Domande frequenti",
    subtitle: "Risposte verificate alle domande più comuni su documenti e procedure amministrative in Marocco.",
  },

  about: {
    title: "Su EPDP — il tuo scrivano pubblico digitale",
    paragraphs: [
      "La piattaforma digitale dello scrivano pubblico (EPDP) è un progetto marocchino che mira a digitalizzare i servizi dello scrivano pubblico e renderli disponibili a tutti i cittadini e residenti, su mobile e desktop, in sette lingue, con un'identità visiva marocchina autentica.",
      "La piattaforma offre una ricca libreria di modelli amministrativi redatti in un linguaggio ufficiale professionale in arabo e francese, una guida completa dei siti ufficiali marocchini e un assistente intelligente che orienta gli utenti esclusivamente sulla base di fonti ufficiali.",
      "Ci impegniamo per l'accuratezza: non inventiamo mai informazioni né generiamo link; tutto ciò che fornisce l'assistente intelligente si basa su una base di conoscenza costruita dai siti ufficiali delle istituzioni pubbliche marocchine.",
    ],
    values: [
      {
        title: "Accuratezza prima di tutto",
        desc: "Ogni informazione e ogni link è accuratamente verificato rispetto alle fonti ufficiali marocchine.",
      },
      {
        title: "Gratuito per tutti",
        desc: "Tutti i modelli e servizi sono completamente gratuiti, senza registrazione e senza costi nascosti.",
      },
      {
        title: "Accesso per tutti",
        desc: "Sette lingue, design responsive per mobile e desktop, e modalità chiara e scura per il tuo comfort.",
      },
    ],
  },

  legal: {
    title: "Pagine legali",
    subtitle: "I testi giuridici che regolano l'uso della piattaforma digitale dello scrivano pubblico.",
    updated: "Ultimo aggiornamento: novembre 2026",
    docs: [
      {
        id: "terms",
        title: "Termini di utilizzo",
        sections: [
          {
            h: "1. Accettazione dei termini",
            body: [
              "Utilizzando la piattaforma digitale dello scrivano pubblico (EPDP), dichiari di aver letto, compreso e accettato i presenti termini. Se non accetti alcuna disposizione, ti invitiamo a cessare l'utilizzo della piattaforma.",
              "I presenti termini sono regolati dalla legge marocchina e qualsiasi controversia derivante dall'uso della piattaforma è soggetta alle leggi vigenti nel Regno del Marocco.",
            ],
          },
          {
            h: "2. Descrizione del servizio",
            body: [
              "La piattaforma fornisce modelli amministrativi pronti (richieste, reclami, contratti, procure, dichiarazioni, ecc.) in arabo e francese, una guida dei siti amministrativi ufficiali marocchini e un assistente intelligente per l'orientamento amministrativo.",
              "La piattaforma è completamente indipendente; non appartiene né rappresenta alcun dipartimento governativo e non sostituisce la consulenza legale o notarile specializzata.",
            ],
          },
          {
            h: "3. Uso consentito",
            body: [
              "La piattaforma è per uso personale e legittimo. È vietato utilizzare i modelli per scopi fraudolenti o ingannevoli, inserire informazioni false o sfruttare commercialmente i contenuti senza previa autorizzazione scritta.",
              "Ti impegni a non usare impropriamente l'assistente intelligente richiedendo informazioni fuorvianti o illecite.",
            ],
          },
          {
            h: "4. Proprietà intellettuale",
            body: [
              "Il design della piattaforma, la sua identità visiva e i suoi contenuti editoriali appartengono alla piattaforma digitale dello scrivano pubblico. I modelli amministrativi sono disponibili per uso personale gratuito.",
              "I link e i riferimenti citati restano di proprietà dei rispettivi titolari tra le amministrazioni e istituzioni ufficiali marocchine.",
            ],
          },
          {
            h: "5. Limitazione di responsabilità",
            body: [
              "La piattaforma fornisce modelli indicativi generali e non garantisce l'accettazione di alcun documento presentato, né è responsabile di errori o omissioni nelle informazioni compilate dall'utente.",
              "Vengono compiuti sforzi ragionevoli per aggiornare i link ufficiali, ma la piattaforma non è responsabile delle modifiche apportate ai siti di terzi.",
            ],
          },
          {
            h: "6. Modifiche",
            body: [
              "La piattaforma si riserva il diritto di modificare i presenti termini in qualsiasi momento; le modifiche hanno effetto dalla loro pubblicazione su questa pagina. L'utilizzo continuato della piattaforma dopo la modifica costituisce accettazione.",
            ],
          },
        ],
      },
      {
        id: "privacy",
        title: "Informativa sulla privacy",
        sections: [
          {
            h: "1. Dati che raccogliamo",
            body: [
              "La piattaforma non richiede account né registrazione e non raccoglie dati personali identificativi (nome, email, telefono), a meno che tu non ci contatti volontariamente.",
              "La piattaforma raccoglie statistiche di uso anonime (numero di visite, pagine più viste) al solo scopo di migliorare la qualità del servizio, senza identificare alcun utente.",
            ],
          },
          {
            h: "2. Dati che non raccogliamo mai",
            body: [
              "Non richiediamo né conserviamo dati sensibili (numero di carta d'identità, dati bancari, copie di documenti ufficiali) attraverso la piattaforma.",
              "I dati che inserisci nei modelli restano sul tuo dispositivo e non vengono mai inviati ad alcuno durante il download o la copia.",
            ],
          },
          {
            h: "3. Uso e condivisione",
            body: [
              "Le statistiche anonime sono utilizzate al solo scopo di migliorare la piattaforma; non vengono mai vendute né condivise con terzi commerciali.",
            ],
          },
          {
            h: "4. I tuoi diritti",
            body: [
              "Puoi chiedere informazioni su qualsiasi dato che ti riguarda tramite la pagina di contatto e rifiutare in qualsiasi momento i cookie non essenziali dalle impostazioni del browser.",
            ],
          },
          {
            h: "5. Link esterni",
            body: [
              "La piattaforma contiene link a siti ufficiali marocchini esterni; quando lasci la nostra piattaforma si applicano le informative sulla privacy di tali siti, che ti invitiamo a consultare.",
            ],
          },
        ],
      },
      {
        id: "cookies",
        title: "Politica sui cookie",
        sections: [
          {
            h: "1. Cosa sono i cookie?",
            body: [
              "I cookie sono piccoli file di testo che il browser salva sul tuo dispositivo per ricordare le tue preferenze (lingua, modalità scura o chiara) tra le visite.",
            ],
          },
          {
            h: "2. Tipi utilizzati",
            body: [
              "Cookie funzionali essenziali: memorizzano solo le tue scelte di lingua e modalità colore e non possono essere disattivati senza compromettere l'esperienza.",
              "La piattaforma non utilizza cookie pubblicitari né tracker commerciali di alcun tipo.",
            ],
          },
          {
            h: "3. Gestione dei cookie",
            body: [
              "Puoi eliminare o bloccare i cookie in qualsiasi momento dalle impostazioni del browser; verranno ripristinate solo le tue preferenze salvate, restando tutti i servizi disponibili.",
            ],
          },
        ],
      },
      {
        id: "disclaimer",
        title: "Avvertenza legale",
        sections: [
          {
            h: "1. Natura della piattaforma",
            body: [
              "La piattaforma digitale dello scrivano pubblico è un servizio indipendente che facilita l'accesso ai documenti amministrativi; non è un dipartimento governativo, né uno studio legale, né uno studio notarile, e non rappresenta alcun organismo ufficiale.",
            ],
          },
          {
            h: "2. Modelli indicativi",
            body: [
              "I modelli disponibili sulla piattaforma sono guide generali redatte in un linguaggio amministrativo standard, ma non sostituiscono la consulenza legale nei casi particolari o complessi.",
              "Prima di presentare qualsiasi documento, conferma i requisiti dell'autorità competente tramite il suo sito ufficiale o direttamente presso i suoi uffici.",
            ],
          },
          {
            h: "3. Accuratezza delle fonti",
            body: [
              "L'assistente intelligente e la guida dei link si basano su una base di conoscenza costruita esclusivamente dai siti ufficiali marocchini; la piattaforma non genera mai link o informazioni di propria iniziativa.",
              "Tuttavia, le amministrazioni restano l'unica riferimento finale per l'informazione ufficiale e le procedure possono cambiare senza preavviso.",
            ],
          },
          {
            h: "4. Procure e contratti notarili",
            body: [
              "Alcuni documenti (come le procure immobiliari e alcuni contratti) devono, per legge marocchina, essere redatti o autenticati davanti a un notaio o adoul accreditato; i modelli qui presenti servono da guida per i documenti semplici non soggetti a tale requisito.",
            ],
          },
        ],
      },
    ],
  },

  app: {
    subtitle: "Scarica l'app ufficiale della piattaforma EPDP sul tuo Android",
    badge: "App ufficiale · completamente gratuita",
    intro: "Tutta la piattaforma in un'unica app: oltre 1180 moduli e documenti amministrativi marocchini, l'assistente digitale e la directory dei siti ufficiali — in un'esperienza a schermo intero.",
    downloadTitle: "Scarica l'applicazione",
    downloadDesc: "Scarica l'APK firmato ufficialmente dal link diretto della piattaforma. Se il download non riesce, usa il link di riserva su GitHub.",
    downloadPrimary: "Scarica dalla piattaforma (link diretto)",
    downloadAlt: "Link di riserva — GitHub",
    sizeNote: "Dimensione approssimativa: 3 MB",
    autoBuild: "L'app viene ricostruita automaticamente a ogni aggiornamento della piattaforma; questo link fornisce sempre l'ultima versione.",
    featuresTitle: "Caratteristiche dell'app",
    features: [
      { t: "Schermo intero immersivo", d: "La modalità immersiva nasconde le barre di stato e navigazione; riappaiono brevemente scorrendo verso l'alto o il basso." },
      { t: "Sempre aggiornata", d: "L'app mostra la versione live della piattaforma: nuovi documenti e moduli subito disponibili, senza aggiornamenti manuali." },
      { t: "L'identità della piattaforma", d: "Il logo della piattaforma sull'icona e nella schermata di avvio, modalità scura e chiara, e sette lingue." },
    ],
    stepsTitle: "Installazione passo per passo",
    stepsIntro: "L'app non è distribuita su Google Play, quindi si installa direttamente dal file APK ufficiale:",
    steps: [
      { t: "Scarica il file APK", d: "Tocca il pulsante di download qui sopra dal browser del telefono e attendi il termine (circa 3 MB)." },
      { t: "Consenti l'installazione", d: "All'apertura del file Chrome può chiedere l'autorizzazione: apri le Impostazioni, attiva «Consenti da questa fonte» per quel browser, poi riapri il file." },
      { t: "Supera l'avviso di Play Protect", d: "Può comparire «App bloccata» di Play Protect perché l'app non proviene dal Play Store. Tocca «Più dettagli» e scegli «Installa comunque»." },
      { t: "Tocca Installa", d: "Completa l'installazione e attendi qualche secondo finché l'icona EPDP appare tra le tue app." },
      { t: "Apri l'app", d: "Compare la schermata di avvio con il logo della piattaforma e poi la home — senza registrazione né pubblicità." },
    ],
    protectTitle: "Perché compare l'avviso di Play Protect?",
    protectBody: "Google Play Protect mostra questo avviso per impostazione predefinita per ogni app che non proviene dal Play Store — non perché l'app sia pericolosa. La nostra app è firmata digitalmente e i suoi file sono pubblicati solo dai link noti della piattaforma e di GitHub. Finché scarichi il file da epdp.pages.dev o dal repository GitHub ufficiale, è sicura.",
    protectStep1: "Nella schermata «App bloccata»: tocca «Più dettagli»",
    protectStep2: "Poi tocca «Installa comunque» per continuare",
    certTitle: "Certificato digitale di proprietà",
    certBody: "L'app è firmata con un certificato digitale che ne attesta la proprietà e garantisce l'integrità degli aggiornamenti: le nuove versioni si installano sopra la precedente e ogni versione senza questa firma verrà rifiutata.",
    certOwner: "Proprietario: CN=TARIK CHOUIKA",
    certValidity: "Validità: 30 anni (fino a novembre 2056)",
    qrTitle: "Scarica dal tuo telefono",
    qrBody: "Inquadra questo codice con la fotocamera del telefono per aprire questa pagina sul tuo dispositivo.",
    versionNote: "La versione si aggiorna automaticamente a ogni aggiornamento del repository.",
  },

  chat: {
    openLabel: "Apri l'assistente intelligente",
    title: "Assistente intelligente",
    subtitle: "Risposte da fonti ufficiali · senza allucinazioni",
    placeholder: "Scrivi la tua domanda amministrativa…",
    greeting:
      "Benvenuto! Sono l'assistente intelligente della piattaforma digitale dello scrivano pubblico. Rispondo alle tue domande amministrative esclusivamente da una base di conoscenza costruita sui siti ufficiali marocchini. Come posso aiutarti?",
    suggestionsTitle: "Domande suggerite",
    sourcesLabel: "Fonte ufficiale",
    fallback:
      "Non dispongo attualmente di una risposta verificata che identifichi l'autorità competente per questa domanda. Ti consiglio di consultare la guida ai link ufficiali in basso o di cercare nella libreria dei documenti. Non fornisco mai informazioni di cui non posso confermare la fonte ufficiale.",
    disclaimer: "L'assistente si basa sulle fonti ufficiali marocchine e non genera mai link o informazioni non verificate.",
    sendLabel: "Invia",
    youLabel: "Tu",
    botLabel: "Assistente",
  },

  footer: {
    tagline: "Digitalizzare i servizi dello scrivano pubblico marocchino con precisione e professionalità, accessibili a tutti in sette lingue.",
    quickLinks: "Link rapidi",
    legalTitle: "Legale",
    officialTitle: "Portali ufficiali",
    rights: "Tutti i diritti riservati",
    disclaimer: "Piattaforma indipendente non affiliata ad alcun dipartimento governativo. I modelli sono indicativi; le amministrazioni restano il riferimento ufficiale.",
    madeIn: "Realizzato in Marocco con identità marocchina",
  },

  filler: {
    badge: "Assistente intelligente",
    title: "Compila il tuo documento con l'assistente IA",
    subtitle:
      "Scegli un documento; l'assistente ti chiede i dati campo per campo con convalida, poi lo redige professionalmente, pronto per la stampa.",
    ctaCard: "Compila questo documento con l'assistente IA",
    privacy: "I tuoi dati sono elaborati solo nel tuo browser e non vengono inviati ad alcun server; vengono cancellati alla chiusura della pagina.",
    pickTitle: "Scegli un documento",
    pickHint: "Cerca per nome o parola chiave…",
    pickNone: "Nessun documento corrispondente",
    open: "Inizia",
    idleIntro:
      "Ciao! Sono l'assistente IA per i documenti. Scegli un documento; ti farò le domande una alla volta con convalida, poi redigerò il documento professionalmente.",
    startMsg: "Perfetto! Compiliamo «{title}». Ho {n} domande; i tuoi dati restano solo nel tuo browser.",
    collectDoneMsg: "Grazie! Ho tutto il necessario. Ecco la bozza per revisione e modifica.",
    skipDoneMsg: "Annotato. Ecco la bozza.",
    editFieldMsg: "Modifichiamo questo dato: {label} (valore attuale: {value})",
    editSavedMsg: "Modifica salvata. La bozza è stata aggiornata.",
    docLang: "Lingua del documento",
    docLangAr: "Arabo",
    autoTranslated: "{n} delle tue risposte sono state tradotte automaticamente nella lingua del documento (modificabili prima del download).",
    docLangFr: "Francese",
    optional: "Facoltativo",
    skip: "Salta",
    send: "Invia",
    editAnswer: "Modifica una risposta precedente",
    editAnswers: "Modifica dati",
    answered: "Risposte",
    of: "di",
    questions: "domande",
    reviewTitle: "Revisione e modifica",
    reviewHint: "Clicca una risposta per cambiarla, poi rigenera.",
    remaining: "Campi da modificare manualmente",
    remainingHint: "Non richiesti dall'assistente; modificali direttamente nel testo.",
    generate: "Genera documento",
    regenerate: "Rigenera",
    doneTitle: "Il tuo documento è pronto",
    doneHint: "Rivedi e modifica liberamente il testo, poi stampa o scarica.",
    print: "Stampa / PDF",
    copy: "Copia",
    word: "Scarica Word",
    another: "Altro documento",
    validation: {
      required: "Questo campo è obbligatorio.",
      cin: "Il numero di CIN deve essere in lettere latine e cifre (es. JA123456).",
      phone: "Inserisci un numero valido (es. 0612345678).",
      email: "Inserisci un'e-mail valida.",
      date: "Inserisci una data valida (es. 15/03/2026).",
      short: "Risposta troppo breve; riformula.",
    },
  },

  theme: {
    light: "Modalità chiara",
    dark: "Modalità scura",
    system: "Sistema",
    toggle: "Cambia modalità",
  },
  language: { label: "Lingua" },
  common: { close: "Chiudi", menu: "Menu", top: "Torna su" },

  brand: {
    name: "EPDP",
    shortTagline: "Scrivano digitale",
    tagline: "Il tuo scrivano pubblico digitale",
  },

  meta: {
    tabTitle: "EPDP — Il tuo scrivano pubblico digitale | Moduli e documenti amministrativi marocchini gratuiti",
  },

  pages: {
    related: "Pagine correlate",
    breadcrumb: "Percorso di navigazione",
    categoriesTitle: "Sfoglia le categorie amministrative",
    categoriesSubtitle: "19 categorie che coprono ogni esigenza di documenti ufficiali: dalle tasse e dalla previdenza sociale ai contratti, reclami e dichiarazioni.",
    popularTitle: "Documenti più richiesti",
    popularSubtitle: "I documenti più cercati dai cittadini, pronti da scaricare e usare subito.",
    viewAll: "Vedi tutto",
    openCategory: "Sfoglia categoria",
    docsCount: "{n} documenti",
    relatedDocs: "Documenti correlati",
    notFoundTitle: "Pagina non trovata",
    notFoundDesc: "Spiacenti, la pagina che cerchi non è disponibile o è stata spostata. Torna alla home o sfoglia la biblioteca dei documenti.",
    notFoundCta: "Torna alla home",
    fillWithAssistant: "Compila questo documento automaticamente con l'assistente",
    assistantCtaTitle: "Lascia che l'assistente rediga il tuo documento",
    assistantCtaDesc: "Rispondi a semplici domande, una alla volta, e l'assistente redigerà il tuo documento con i tuoi dati, pronto per la stampa e il download — i tuoi dati restano nel tuo browser.",
    tryAssistant: "Prova l'assistente",
    keywordsLabel: "Parole chiave",
  },
};
