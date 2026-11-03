#!/usr/bin/env python3
# Adds nav.assistant, nav.categories, brand{} and pages{} blocks to all 7 dictionaries.
# Hand-crafted professional translations (not machine translated).
import re
import sys
from pathlib import Path

I18N = Path("/home/z/my-project/src/lib/i18n")

NAV_ADD = {
    "ar": ('    assistant: "ملء الوثائق",\n    categories: "الفئات",\n', '    legal: "القانونية",\n'),
    "en": ('    assistant: "Fill Assistant",\n    categories: "Categories",\n', '    legal: "Legal",\n'),
    "fr": ('    assistant: "Assistant de saisie",\n    categories: "Catégories",\n', '    legal: "Mentions légales",\n'),
    "es": ('    assistant: "Asistente de datos",\n    categories: "Categorías",\n', '    legal: "Legal",\n'),
    "it": ('    assistant: "Assistente dati",\n    categories: "Categorie",\n', '    legal: "Note legali",\n'),
    "de": ('    assistant: "Ausfüllassistent",\n    categories: "Kategorien",\n', '    legal: "Rechtliches",\n'),
    "ru": ('    assistant: "Помощник заполнения",\n    categories: "Категории",\n', '    legal: "Правовая информация",\n'),
}

BLOCKS = {
    "ar": '''
  brand: {
    name: "الكاتب العمومي الرقمي",
    tagline: "EPDP · منصة مغربية مجانية",
  },

  pages: {
    breadcrumb: "مسار التنقل",
    categoriesTitle: "تصفح الفئات الإدارية",
    categoriesSubtitle: "19 فئة تغطي كافة احتياجاتك من الوثائق والنماذج الرسمية: من الضرائب والضمان الاجتماعي إلى العقود والشكايات والتصاريح.",
    popularTitle: "الوثائق الأكثر طلباً",
    popularSubtitle: "الاختيارات الأكثر بحثاً من طرف المواطنين، جاهزة للتحميل والاستعمال الفوري.",
    viewAll: "عرض الكل",
    openCategory: "استعراض الفئة",
    docsCount: "{n} وثيقة",
    relatedDocs: "وثائق ذات صلة",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundDesc: "عذراً، الصفحة التي تبحث عنها غير متاحة أو تم نقلها. يمكنك العودة إلى الصفحة الرئيسية أو تصفح مكتبة الوثائق والنماذج.",
    notFoundCta: "العودة إلى الرئيسية",
    fillWithAssistant: "املأ هذه الوثيقة تلقائياً بمساعدة المساعد الآلي",
    assistantCtaTitle: "دع المساعد الآلي يحرر وثيقتك",
    assistantCtaDesc: "أجب عن أسئلة بسيطة واحدة واحدة، وسيتولى المساعد تحرير وثيقتك ببياناتك بشكل احترافي جاهز للطباعة والتحميل — وبياناتك تبقى في متصفحك فقط.",
    tryAssistant: "جرّب المساعد الآلي",
    keywordsLabel: "كلمات مفتاحية",
  },
''',
    "en": '''
  brand: {
    name: "Digital Public Writer",
    tagline: "EPDP · Free Moroccan platform",
  },

  pages: {
    breadcrumb: "Breadcrumb",
    categoriesTitle: "Browse administrative categories",
    categoriesSubtitle: "19 categories covering every official document need: from taxes and social security to contracts, complaints and declarations.",
    popularTitle: "Most requested documents",
    popularSubtitle: "Citizens' most searched picks, ready to download and use right away.",
    viewAll: "View all",
    openCategory: "Browse category",
    docsCount: "{n} documents",
    relatedDocs: "Related documents",
    notFoundTitle: "Page not found",
    notFoundDesc: "Sorry, the page you are looking for is unavailable or has been moved. Head back to the homepage or browse the document library.",
    notFoundCta: "Back to homepage",
    fillWithAssistant: "Fill this document automatically with the assistant",
    assistantCtaTitle: "Let the assistant draft your document",
    assistantCtaDesc: "Answer simple questions one by one and the assistant will edit your document with your data, professionally prepared for printing and download — your data never leaves your browser.",
    tryAssistant: "Try the assistant",
    keywordsLabel: "Keywords",
  },
''',
    "fr": '''
  brand: {
    name: "Katib Public Numérique",
    tagline: "EPDP · Plateforme marocaine gratuite",
  },

  pages: {
    breadcrumb: "Fil d'Ariane",
    categoriesTitle: "Parcourir les catégories administratives",
    categoriesSubtitle: "19 catégories couvrant tous vos besoins en documents officiels : des impôts et de la sécurité sociale aux contrats, réclamations et déclarations.",
    popularTitle: "Documents les plus demandés",
    popularSubtitle: "Les documents les plus recherchés par les citoyens, prêts à télécharger et à utiliser immédiatement.",
    viewAll: "Voir tout",
    openCategory: "Parcourir la catégorie",
    docsCount: "{n} documents",
    relatedDocs: "Documents similaires",
    notFoundTitle: "Page introuvable",
    notFoundDesc: "Désolé, la page que vous recherchez est indisponible ou a été déplacée. Retournez à l'accueil ou parcourez la bibliothèque de documents.",
    notFoundCta: "Retour à l'accueil",
    fillWithAssistant: "Remplir ce document automatiquement avec l'assistant",
    assistantCtaTitle: "Laissez l'assistant rédiger votre document",
    assistantCtaDesc: "Répondez à des questions simples, une par une, et l'assistant rédigera votre document avec vos données, prêt à imprimer et à télécharger — vos données restent dans votre navigateur.",
    tryAssistant: "Essayer l'assistant",
    keywordsLabel: "Mots-clés",
  },
''',
    "es": '''
  brand: {
    name: "Katib Público Digital",
    tagline: "EPDP · Plataforma marroquí gratuita",
  },

  pages: {
    breadcrumb: "Ruta de navegación",
    categoriesTitle: "Explorar categorías administrativas",
    categoriesSubtitle: "19 categorías que cubren todas tus necesidades de documentos oficiales: desde impuestos y seguridad social hasta contratos, reclamaciones y declaraciones.",
    popularTitle: "Documentos más solicitados",
    popularSubtitle: "Los documentos más buscados por los ciudadanos, listos para descargar y usar de inmediato.",
    viewAll: "Ver todo",
    openCategory: "Explorar categoría",
    docsCount: "{n} documentos",
    relatedDocs: "Documentos relacionados",
    notFoundTitle: "Página no encontrada",
    notFoundDesc: "Lo sentimos, la página que buscas no está disponible o ha sido movida. Vuelve a la página de inicio o explora la biblioteca de documentos.",
    notFoundCta: "Volver al inicio",
    fillWithAssistant: "Rellenar este documento automáticamente con el asistente",
    assistantCtaTitle: "Deja que el asistente redacte tu documento",
    assistantCtaDesc: "Responde preguntas sencillas una a una y el asistente redactará tu documento con tus datos, listo para imprimir y descargar — tus datos nunca salen de tu navegador.",
    tryAssistant: "Probar el asistente",
    keywordsLabel: "Palabras clave",
  },
''',
    "it": '''
  brand: {
    name: "Katib Pubblico Digitale",
    tagline: "EPDP · Piattaforma marocchina gratuita",
  },

  pages: {
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
''',
    "de": '''
  brand: {
    name: "Digitaler Katib Public",
    tagline: "EPDP · Kostenlose marokkanische Plattform",
  },

  pages: {
    breadcrumb: "Navigationspfad",
    categoriesTitle: "Verwaltungskategorien entdecken",
    categoriesSubtitle: "19 Kategorien decken alle Bedürfnisse an offiziellen Dokumenten ab: von Steuern und Sozialversicherung über Verträge bis zu Beschwerden und Erklärungen.",
    popularTitle: "Meistgefragte Dokumente",
    popularSubtitle: "Die am häufigsten gesuchten Dokumente der Bürger — sofort zum Herunterladen und Ausfüllen.",
    viewAll: "Alle anzeigen",
    openCategory: "Kategorie ansehen",
    docsCount: "{n} Dokumente",
    relatedDocs: "Ähnliche Dokumente",
    notFoundTitle: "Seite nicht gefunden",
    notFoundDesc: "Entschuldigung, die gesuchte Seite ist nicht verfügbar oder wurde verschoben. Kehren Sie zur Startseite zurück oder stöbern Sie in der Dokumentbibliothek.",
    notFoundCta: "Zur Startseite",
    fillWithAssistant: "Dieses Dokument automatisch mit dem Assistenten ausfüllen",
    assistantCtaTitle: "Lassen Sie den Assistenten Ihr Dokument erstellen",
    assistantCtaDesc: "Beantworten Sie einfache Fragen, eine nach der anderen — der Assistent erstellt Ihr Dokument mit Ihren Daten, druckfertig und zum Download bereit. Ihre Daten bleiben in Ihrem Browser.",
    tryAssistant: "Assistent testen",
    keywordsLabel: "Schlüsselwörter",
  },
''',
    "ru": '''
  brand: {
    name: "Цифровой публичный катиб",
    tagline: "EPDP · Бесплатная марокканская платформа",
  },

  pages: {
    breadcrumb: "Навигационная цепочка",
    categoriesTitle: "Категории административных документов",
    categoriesSubtitle: "19 категорий покрывают все потребности в официальных документах: от налогов и соцобеспечения до договоров, жалоб и деклараций.",
    popularTitle: "Самые запрашиваемые документы",
    popularSubtitle: "Документы, которые чаще всего ищут граждане — готовы к немедленному скачиванию и использованию.",
    viewAll: "Показать все",
    openCategory: "Открыть категорию",
    docsCount: "{n} документов",
    relatedDocs: "Похожие документы",
    notFoundTitle: "Страница не найдена",
    notFoundDesc: "К сожалению, запрашиваемая страница недоступна или была перемещена. Вернитесь на главную страницу или откройте библиотеку документов.",
    notFoundCta: "На главную",
    fillWithAssistant: "Заполнить этот документ автоматически с помощью ассистента",
    assistantCtaTitle: "Позвольте ассистенту составить ваш документ",
    assistantCtaDesc: "Отвечайте на простые вопросы один за другим — ассистент составит ваш документ с вашими данными, готовый к печати и скачиванию. Ваши данные остаются только в вашем браузере.",
    tryAssistant: "Попробовать ассистента",
    keywordsLabel: "Ключевые слова",
  },
''',
}

COMMON_LAST = {
    "ar": '  common: { close: "إغلاق", menu: "القائمة", top: "أعلى الصفحة" },',
    "en": '  common: { close: "Close", menu: "Menu", top: "Back to top" },',
    "fr": '  common: { close: "Fermer", menu: "Menu", top: "Haut de page" },',
    "es": '  common: { close: "Cerrar", menu: "Menú", top: "Volver arriba" },',
    "it": '  common: { close: "Chiudi", menu: "Menu", top: "Torna su" },',
    "de": '  common: { close: "Schließen", menu: "Menü", top: "Nach oben" },',
    "ru": '  common: { close: "Закрыть", menu: "Меню", top: "Наверх" },',
}

for code in ["ar", "en", "fr", "es", "it", "de", "ru"]:
    path = I18N / f"{code}.ts"
    text = path.read_text(encoding="utf-8")

    # 1) nav additions after the legal line
    add, legal_line = NAV_ADD[code]
    if 'assistant:' not in text.split("hero:")[0]:
        assert legal_line in text, f"{code}: legal line not found"
        text = text.replace(legal_line, legal_line + add, 1)

    # 2) brand + pages blocks before final "};"
    if "pages: {" not in text:
        marker = COMMON_LAST[code]
        assert marker in text, f"{code}: common line not found"
        text = text.replace(
            marker,
            marker + "\n" + BLOCKS[code].rstrip("\n"),
            1,
        )

    path.write_text(text, encoding="utf-8")
    print(f"{code}: OK")

print("All dictionaries updated.")
