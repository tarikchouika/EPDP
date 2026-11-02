import type { Dict } from "./types";

export const fr: Dict = {
  dir: "ltr",
  localeName: "Français",
  englishName: "French",

  nav: {
    home: "Accueil",
    services: "Documents",
    links: "Liens officiels",
    how: "Fonctionnement",
    faq: "FAQ",
    about: "À propos",
    legal: "Mentions légales",
  },

  hero: {
    badge: "Plateforme marocaine · 100% gratuite",
    title: "Vos documents administratifs,",
    titleAccent: "prêts en quelques secondes",
    subtitle:
      "La plateforme numérique du katib public (EPDP) numérise les services du kâtib el 'âm avec professionnalisme : plus de 125 modèles et documents officiels en arabe et en français — demandes, réclamations, contrats de bail et de vente, procurations, déclarations sur l'honneur, CV — avec un répertoire complet des sites officiels des administrations marocaines, un assistant intelligent qui répond uniquement à partir de sources officielles vérifiées sans hallucination, et un assistant IA qui recueille vos données et rédige votre document professionnellement.",
    ctaPrimary: "Parcourir les documents",
    ctaSecondary: "Sites officiels",
    trust: "Entièrement gratuit · Sans inscription · 7 langues · Sources officielles vérifiées",
    searchPlaceholder: "Rechercher : déclaration sur l'honneur, contrat de bail, réclamation…",
  },

  stats: {
    documents: "documents et modèles prêts",
    categories: "catégories administratives",
    languages: "langues mondiales",
    official: "organismes officiels vérifiés",
  },

  services: {
    title: "Bibliothèque de documents et modèles",
    subtitle:
      "Parcourez par catégorie ou recherchez directement. Chaque modèle est rédigé dans un style administratif professionnel, téléchargeable et copiable gratuitement, avec l'autorité de dépôt clairement indiquée.",
    search: "Rechercher un document…",
    all: "Toutes les catégories",
    popular: "Les plus demandés",
    results: "documents",
    noResults: "Aucun résultat correspondant",
    noResultsHint: "Essayez un autre mot-clé : demande, réclamation, contrat, déclaration…",
    viewDoc: "Voir le document",
    aboutDoc: "À propos de ce document",
    templateTab: "Modèle",
    detailsTab: "Détails et dépôt",
    copy: "Copier le texte",
    copied: "Copié avec succès",
    download: "Télécharger Word",
    arabicVersion: "Version arabe",
    frenchVersion: "Version française",
    requiredInfo: "Informations requises",
    destination: "Où déposer ce document",
    officialSource: "Source officielle",
    freeTag: "Gratuit",
    note: "Remarque : les modèles sont indicatifs ; confirmez les exigences auprès de l'autorité compétente ou de son site officiel avant tout dépôt.",
  },

  links: {
    title: "Répertoire des sites officiels marocains",
    subtitle:
      "Liens officiels vérifiés vers les départements gouvernementaux et services publics numériques marocains, soigneusement vérifiés et mis à jour régulièrement.",
    visit: "Visiter le site",
    officialBadge: "Officiel",
    verifiedNote: "Tous les liens appartiennent à des domaines officiels (gov.ma) ou à des institutions publiques marocaines reconnues.",
    copyUrl: "Copier le lien",
    copiedUrl: "Lien copié",
  },

  how: {
    title: "Comment fonctionne la plateforme ?",
    subtitle: "Quatre étapes simples entre vous et votre document administratif prêt",
    steps: [
      {
        title: "Choisissez votre document",
        desc: "Parcourez les seize catégories ou recherchez par mot-clé le document dont vous avez besoin.",
      },
      {
        title: "Consultez le modèle",
        desc: "Lisez le texte intégral en arabe et en français, avec la liste des informations requises.",
      },
      {
        title: "Téléchargez ou copiez",
        desc: "Téléchargez directement au format Word ou copiez le texte, puis complétez vos informations personnelles.",
      },
      {
        title: "Déposez votre document",
        desc: "Déposez-le auprès de l'autorité indiquée dans les détails de chaque document, avec le lien officiel lorsque disponible.",
      },
    ],
  },

  faq: {
    title: "Questions fréquentes",
    subtitle: "Réponses vérifiées aux questions les plus courantes sur les documents et démarches administratifs au Maroc.",
  },

  about: {
    title: "À propos de la plateforme numérique du katib public",
    paragraphs: [
      "La plateforme numérique du katib public (EPDP) est un projet marocain visant à numériser les services du kâtib el 'âm et à les mettre à la disposition de tous les citoyens et résidents, sur mobile et ordinateur, en sept langues, avec une identité visuelle marocaine authentique.",
      "La plateforme met à disposition une riche bibliothèque de modèles administratifs rédigés dans un style officiel professionnel en arabe et en français, un répertoire complet des sites officiels marocains, et un assistant intelligent qui guide les utilisateurs exclusivement à partir des sources officielles.",
      "Nous nous engageons en faveur de l'exactitude : nous n'inventons aucune information et ne générons aucun lien ; tout ce que fournit l'assistant intelligent repose sur une base de connaissances construite à partir des sites officiels des institutions publiques marocaines.",
    ],
    values: [
      {
        title: "L'exactitude avant tout",
        desc: "Chaque information et chaque lien est soigneusement vérifié par rapport aux sources officielles marocaines.",
      },
      {
        title: "Gratuit pour tous",
        desc: "Tous les modèles et services sont entièrement gratuits, sans inscription ni frais cachés.",
      },
      {
        title: "L'accès pour tous",
        desc: "Sept langues, un design adapté au mobile et à l'ordinateur, et des modes clair et sombre pour votre confort.",
      },
    ],
  },

  legal: {
    title: "Pages légales",
    subtitle: "Les textes juridiques régissant l'utilisation de la plateforme numérique du katib public.",
    updated: "Dernière mise à jour : novembre 2026",
    docs: [
      {
        id: "terms",
        title: "Conditions d'utilisation",
        sections: [
          {
            h: "1. Acceptation des conditions",
            body: [
              "En utilisant la plateforme numérique du katib public (EPDP), vous reconnaissez avoir lu, compris et accepté les présentes conditions. Si vous n'acceptez pas l'une de leurs dispositions, veuillez cesser d'utiliser la plateforme.",
              "Les présentes conditions sont régies par le droit marocain, et tout litige né de l'utilisation de la plateforme est soumis aux lois en vigueur au Royaume du Maroc.",
            ],
          },
          {
            h: "2. Description du service",
            body: [
              "La plateforme fournit des modèles administratifs prêts à l'emploi (demandes, réclamations, contrats, procurations, déclarations, etc.) en arabe et en français, un répertoire des sites administratifs officiels marocains et un assistant intelligent d'orientation administrative.",
              "La plateforme est totalement indépendante ; elle n'appartient à aucun département gouvernemental qu'elle ne représente, et ne se substitue pas à un conseil juridique ou notarial spécialisé.",
            ],
          },
          {
            h: "3. Utilisation autorisée",
            body: [
              "La plateforme est réservée à un usage personnel et légitime. Il est interdit d'utiliser les modèles à des fins frauduleuses ou trompeuses, de saisir de fausses informations ou d'exploiter commercialement le contenu sans autorisation écrite préalable.",
              "Vous vous engagez à ne pas détourner l'assistant intelligent en sollicitant des informations trompeuses ou illicites.",
            ],
          },
          {
            h: "4. Propriété intellectuelle",
            body: [
              "La conception de la plateforme, son identité visuelle et ses contenus rédactionnels appartiennent à la plateforme numérique du katib public. Les modèles administratifs sont disponibles pour un usage personnel gratuit.",
              "Les liens et références cités demeurent la propriété de leurs ayants droit parmi les administrations et institutions officielles marocaines.",
            ],
          },
          {
            h: "5. Limitation de responsabilité",
            body: [
              "La plateforme fournit des modèles indicatifs généraux et ne garantit pas l'acceptation d'un document déposé par une quelconque administration ; elle n'est pas responsable des erreurs ou omissions dans les informations remplies par l'utilisateur.",
              "Des efforts raisonnables sont déployés pour actualiser les liens officiels, mais la plateforme n'est pas responsable des modifications survenues sur des sites tiers.",
            ],
          },
          {
            h: "6. Modification des conditions",
            body: [
              "La plateforme se réserve le droit de modifier les présentes conditions à tout moment ; les modifications prennent effet dès leur publication sur cette page. La poursuite de l'utilisation de la plateforme après modification vaut acceptation.",
            ],
          },
        ],
      },
      {
        id: "privacy",
        title: "Politique de confidentialité",
        sections: [
          {
            h: "1. Données collectées",
            body: [
              "La plateforme ne nécessite ni compte ni inscription et ne collecte aucune donnée personnelle identifiante (nom, e-mail, téléphone), sauf si vous nous contactez volontairement.",
              "La plateforme collecte des statistiques d'utilisation anonymes (nombre de visites, pages les plus consultées) uniquement pour améliorer la qualité du service, sans identifier aucun utilisateur.",
            ],
          },
          {
            h: "2. Données jamais collectées",
            body: [
              "Nous ne demandons ni ne stockons de données sensibles (numéro de la carte nationale, coordonnées bancaires, copies de documents officiels) via la plateforme.",
              "Les informations que vous saisissez dans les modèles restent sur votre appareil et ne sont jamais transmises lors du téléchargement ou de la copie.",
            ],
          },
          {
            h: "3. Utilisation et partage",
            body: [
              "Les statistiques anonymes servent exclusivement à améliorer la plateforme ; elles ne sont ni vendues ni partagées avec un tiers commercial.",
            ],
          },
          {
            h: "4. Vos droits",
            body: [
              "Vous pouvez vous renseigner sur toute donnée vous concernant via la page de contact, et refuser à tout moment les cookies non essentiels depuis les réglages de votre navigateur.",
            ],
          },
          {
            h: "5. Liens externes",
            body: [
              "La plateforme contient des liens vers des sites officiels marocains externes ; en quittant notre plateforme, les politiques de confidentialité de ces sites s'appliquent et nous vous conseillons de les consulter.",
            ],
          },
        ],
      },
      {
        id: "cookies",
        title: "Politique relative aux cookies",
        sections: [
          {
            h: "1. Qu'est-ce qu'un cookie ?",
            body: [
              "Les cookies sont de petits fichiers texte enregistrés par votre navigateur sur votre appareil pour mémoriser vos préférences (langue, mode sombre ou clair) entre les visites.",
            ],
          },
          {
            h: "2. Types utilisés",
            body: [
              "Cookies fonctionnels essentiels : ils enregistrent uniquement vos choix de langue et de mode d'affichage, et ne peuvent être désactivés sans affecter votre expérience.",
              "La plateforme n'utilise aucun cookie publicitaire ni traceur commercial, quel qu'il soit.",
            ],
          },
          {
            h: "3. Gestion des cookies",
            body: [
              "Vous pouvez supprimer ou bloquer les cookies à tout moment depuis les réglages de votre navigateur ; seules vos préférences enregistrées seront réinitialisées, tous les services restant accessibles.",
            ],
          },
        ],
      },
      {
        id: "disclaimer",
        title: "Avertissement légal",
        sections: [
          {
            h: "1. Nature de la plateforme",
            body: [
              "La plateforme numérique du katib public est un service indépendant facilitant l'accès aux documents administratifs ; elle n'est ni un département gouvernemental, ni un cabinet d'avocats, ni une étude notariale, et ne représente aucun organisme officiel.",
            ],
          },
          {
            h: "2. Modèles indicatifs",
            body: [
              "Les modèles disponibles sur la plateforme sont des guides généraux rédigés dans un style administratif standard, mais ils ne remplacent pas un conseil juridique dans les cas particuliers ou complexes.",
              "Avant tout dépôt, confirmez les exigences de l'autorité compétente via son site officiel ou directement auprès de ses services.",
            ],
          },
          {
            h: "3. Exactitude des sources",
            body: [
              "L'assistant intelligent et le répertoire de liens s'appuient sur une base de connaissances constituée exclusivement des sites officiels marocains ; la plateforme ne génère jamais de liens ni d'informations de sa propre initiative.",
              "Néanmoins, les administrations demeurent la référence finale unique de l'information officielle, et les procédures peuvent évoluer sans préavis.",
            ],
          },
          {
            h: "4. Procurations et contrats notariés",
            body: [
              "Certains documents (tels que les procurations immobilières et certains contrats) doivent, en vertu du droit marocain, être rédigés ou notariés devant un notaire ou adoul accrédité ; les modèles proposés ici servent de guide pour les documents simples non soumis à cette exigence.",
            ],
          },
        ],
      },
    ],
  },

  chat: {
    openLabel: "Ouvrir l'assistant intelligent",
    title: "Assistant intelligent",
    subtitle: "Réponses issues de sources officielles · sans hallucination",
    placeholder: "Posez votre question administrative…",
    greeting:
      "Bienvenue ! Je suis l'assistant intelligent de la plateforme numérique du katib public. Je réponds à vos questions administratives exclusivement à partir d'une base de connaissances fondée sur les sites officiels marocains. Comment puis-je vous aider ?",
    suggestionsTitle: "Questions suggérées",
    sourcesLabel: "Source officielle",
    fallback:
      "Je ne dispose pas actuellement d'une réponse vérifiée identifiant l'autorité responsable pour cette question. Je vous recommande de consulter le répertoire des liens officiels ci-dessous ou d'effectuer une recherche dans la bibliothèque de documents. Je ne fournis jamais une information dont je ne peux confirmer la source officielle.",
    disclaimer: "L'assistant s'appuie sur les sources officielles marocaines et ne génère aucun lien ni information non vérifiés.",
    sendLabel: "Envoyer",
    youLabel: "Vous",
    botLabel: "Assistant",
  },

  footer: {
    tagline: "Numériser les services du katib public marocain avec exactitude et professionnalisme, accessibles à tous en sept langues.",
    quickLinks: "Liens rapides",
    legalTitle: "Légal",
    officialTitle: "Portails officiels",
    rights: "Tous droits réservés",
    disclaimer: "Plateforme indépendante non affiliée à un département gouvernemental. Les modèles sont indicatifs ; les administrations demeurent la référence officielle.",
    madeIn: "Conçu au Maroc avec une identité marocaine",
  },

  filler: {
    badge: "Assistant intelligent",
    title: "Remplissez votre document avec l'assistant IA",
    subtitle:
      "Choisissez un document ; l'assistant vous demande ses données champ par champ avec validation, puis le rédige professionnellement, prêt à imprimer.",
    ctaCard: "Remplir ce document avec l'assistant IA",
    privacy: "Vos données sont traitées localement dans votre navigateur et ne sont envoyées à aucun serveur ; elles sont effacées à la fermeture de la page.",
    pickTitle: "Choisir un document",
    pickHint: "Rechercher par nom ou mot-clé…",
    pickNone: "Aucun document correspondant",
    open: "Commencer",
    idleIntro:
      "Bonjour ! Je suis l'assistant IA de remplissage. Choisissez un document ; je vous poserai les questions une par une avec validation, puis je rédigerai le document professionnellement.",
    docLang: "Langue du document",
    docLangAr: "Arabe",
    docLangFr: "Français",
    optional: "Facultatif",
    skip: "Passer",
    send: "Envoyer",
    editAnswer: "Modifier une réponse précédente",
    editAnswers: "Modifier les données",
    answered: "Répondu à",
    of: "sur",
    questions: "questions",
    reviewTitle: "Vérification et modification",
    reviewHint: "Cliquez sur une réponse pour la modifier, puis régénérez.",
    remaining: "Champs restant à remplir manuellement",
    remainingHint: "Non demandés par l'assistant ; modifiez-les directement dans le texte.",
    generate: "Générer le document",
    regenerate: "Régénérer",
    doneTitle: "Votre document est prêt",
    doneHint: "Relisez et modifiez librement le texte, puis imprimez ou téléchargez.",
    print: "Imprimer / PDF",
    copy: "Copier",
    word: "Télécharger Word",
    another: "Autre document",
    validation: {
      required: "Ce champ est obligatoire.",
      cin: "Le numéro de CIN doit être en lettres latines et chiffres (ex. JA123456).",
      phone: "Saisissez un numéro valide (ex. 0612345678).",
      email: "Saisissez une adresse e-mail valide.",
      date: "Saisissez une date valide (ex. 15/03/2026).",
      short: "La réponse est trop courte ; reformulez.",
    },
  },

  theme: {
    light: "Mode clair",
    dark: "Mode sombre",
    system: "Système",
    toggle: "Changer de mode",
  },
  language: { label: "Langue" },
  common: { close: "Fermer", menu: "Menu", top: "Haut de page" },
};
