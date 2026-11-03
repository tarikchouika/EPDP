#!/usr/bin/env python3
"""Rebrand i18n dictionaries (7 locales + types.ts).

Every replacement asserts it applies exactly once — the script fails loudly
instead of silently corrupting a file.
"""
import sys

B = "src/lib/i18n/"

# ---------------- per-locale payload ------------------------------------------
DATA = {
    "ar": dict(
        tagline="كاتبك الرقمي",
        old_name="الكاتب العمومي الرقمي",
        old_tagline="EPDP · منصة مغربية مجانية",
        assistant='    assistant: "ملء الوثائق",',
        nav_add='    portals: "بوابات رسمية",\n    docsIndex: "فهرس الوثائق",',
        links_old="الروابط الرسمية الموثقة للإدارات الحكومية والخدمات الرقمية العمومية بالمملكة المغربية، مراجعة بعناية ومحدثة بانتظام.",
        links_new="الروابط الرسمية الموثقة للمؤسسات والهيئات العمومية المغربية (الضمان الاجتماعي، التشغيل، الاقتصاد والمالية، المرافق)، مراجعة بعناية ومحدثة بانتظام.",
        faq_old='    title: "الأسئلة الشائعة",',
        faq_new='    title: "كيف تعمل — الأسئلة الشائعة",',
        about_old='    title: "عن منصة الكاتب العمومي الرقمية",',
        about_new='    title: "عن منصة EPDP — كاتبك الرقمي",',
        portals_title="بوابات رسمية",
        portals_sub="البوابات الحكومية والمنصات الرقمية العمومية الرسمية لإنجاز إجراءاتك الإدارية عن بعد، موثقة ومحدثة بانتظام.",
        docs_title="فهرس الوثائق",
        docs_sub="الفهرس الشامل لجميع النماذج والوثائق الإدارية حسب الفئة، مع رابط مباشر لكل وثيقة.",
        related="صفحات ذات صلة",
    ),
    "fr": dict(
        tagline="Votre écrivain public numérique",
        old_name="Katib Public Numérique",
        old_tagline="EPDP · Plateforme marocaine gratuite",
        assistant='    assistant: "Assistant de saisie",',
        nav_add='    portals: "Portails officiels",\n    docsIndex: "Index des documents",',
        links_old="Liens officiels vérifiés vers les départements gouvernementaux et services publics numériques marocains, soigneusement vérifiés et mis à jour régulièrement.",
        links_new="Liens officiels vérifiés des organismes et établissements publics marocains (sécurité sociale, emploi, économie et finances, services), soigneusement vérifiés et mis à jour régulièrement.",
        faq_old='    title: "Questions fréquentes",',
        faq_new='    title: "Comment ça marche — Questions fréquentes",',
        about_old='    title: "À propos de la plateforme numérique du katib public",',
        about_new='    title: "À propos d’EPDP — votre écrivain public numérique",',
        portals_title="Portails officiels",
        portals_sub="Portails gouvernementaux et plateformes numériques publiques officiels pour accomplir vos démarches à distance, vérifiés et mis à jour régulièrement.",
        docs_title="Index des documents",
        docs_sub="Index complet de tous les modèles et documents administratifs par catégorie, avec un lien direct vers chaque document.",
        related="Pages liées",
    ),
    "en": dict(
        tagline="Your digital public writer",
        old_name="Digital Public Writer",
        old_tagline="EPDP · Free Moroccan platform",
        assistant='    assistant: "Fill Assistant",',
        nav_add='    portals: "Official portals",\n    docsIndex: "Documents index",',
        links_old="Verified official links to Moroccan government departments and digital public services, carefully reviewed and regularly updated.",
        links_new="Verified official links to Moroccan public institutions and bodies (social security, employment, economy & finance, utilities), carefully reviewed and regularly updated.",
        faq_old='    title: "Frequently Asked Questions",',
        faq_new='    title: "How It Works — FAQ",',
        about_old='    title: "About the Digital Public Writer Platform",',
        about_new='    title: "About EPDP — your digital public writer",',
        portals_title="Official portals",
        portals_sub="Official government portals and public digital platforms to complete your administrative procedures remotely, verified and regularly updated.",
        docs_title="Documents index",
        docs_sub="Complete index of all administrative forms and documents by category, with a direct link to every document.",
        related="Related pages",
    ),
    "es": dict(
        tagline="Tu escribano público digital",
        old_name="Katib Público Digital",
        old_tagline="EPDP · Plataforma marroquí gratuita",
        assistant='    assistant: "Asistente de datos",',
        nav_add='    portals: "Portales oficiales",\n    docsIndex: "Índice de documentos",',
        links_old="Enlaces oficiales verificados a los departamentos gubernamentales y servicios públicos digitales de Marruecos, revisados con cuidado y actualizados regularmente.",
        links_new="Enlaces oficiales verificados de los organismos e instituciones públicas marroquíes (seguridad social, empleo, economía y finanzas, servicios), revisados con cuidado y actualizados regularmente.",
        faq_old='    title: "Preguntas frecuentes",',
        faq_new='    title: "Cómo funciona — Preguntas frecuentes",',
        about_old='    title: "Acerca de la plataforma digital del escribano público",',
        about_new='    title: "Sobre EPDP — tu escribano público digital",',
        portals_title="Portales oficiales",
        portals_sub="Portales gubernamentales y plataformas digitales públicas oficiales para realizar tus trámites a distancia, verificados y actualizados regularmente.",
        docs_title="Índice de documentos",
        docs_sub="Índice completo de todos los modelos y documentos administrativos por categoría, con enlace directo a cada documento.",
        related="Páginas relacionadas",
    ),
    "it": dict(
        tagline="Il tuo scrivano pubblico digitale",
        old_name="Katib Pubblico Digitale",
        old_tagline="EPDP · Piattaforma marocchina gratuita",
        assistant='    assistant: "Assistente dati",',
        nav_add='    portals: "Portali ufficiali",\n    docsIndex: "Indice dei documenti",',
        links_old="Link ufficiali verificati di dipartimenti governativi e servizi pubblici digitali del Marocco, esaminati con cura e aggiornati regolarmente.",
        links_new="Collegamenti ufficiali verificati agli organismi e istituti pubblici marocchini (previdenza, lavoro, economia e finanze, servizi), esaminati con cura e aggiornati regolarmente.",
        faq_old='    title: "Domande frequenti",',
        faq_new='    title: "Come funziona — Domande frequenti",',
        about_old='    title: "La piattaforma digitale dello scrivano pubblico",',
        about_new='    title: "Su EPDP — il tuo scrivano pubblico digitale",',
        portals_title="Portali ufficiali",
        portals_sub="Portali governativi e piattaforme digitali pubbliche ufficiali per svolgere le pratiche a distanza, verificati e aggiornati regolarmente.",
        docs_title="Indice dei documenti",
        docs_sub="Indice completo di tutti i moduli e documenti amministrativi per categoria, con collegamento diretto a ciascun documento.",
        related="Pagine correlate",
    ),
    "de": dict(
        tagline="Dein digitales Schreibbüro",
        old_name="Digitaler Katib Public",
        old_tagline="EPDP · Kostenlose marokkanische Plattform",
        assistant='    assistant: "Ausfüllassistent",',
        nav_add='    portals: "Offizielle Portale",\n    docsIndex: "Dokumentenindex",',
        links_old="Verifizierte offizielle Links zu marokkanischen Ministerien und digitalen öffentlichen Diensten, sorgfältig geprüft und regelmäßig aktualisiert.",
        links_new="Verifizierte offizielle Links zu marokkanischen öffentlichen Institutionen und Einrichtungen (Sozialversicherung, Beschäftigung, Wirtschaft und Finanzen, Versorger), sorgfältig geprüft und regelmäßig aktualisiert.",
        faq_old='    title: "Häufig gestellte Fragen",',
        faq_new='    title: "So funktioniert es — Häufig gestellte Fragen",',
        about_old='    title: "Über die digitale Plattform für öffentliche Schreiber",',
        about_new='    title: "Über EPDP — dein digitales Schreibbüro",',
        portals_title="Offizielle Portale",
        portals_sub="Offizielle Regierungsportale und öffentliche digitale Plattformen, um Ihre Verwaltungsvorgänge aus der Ferne zu erledigen, geprüft und regelmäßig aktualisiert.",
        docs_title="Dokumentenindex",
        docs_sub="Vollständiges Verzeichnis aller Verwaltungsvorlagen und -dokumente nach Kategorie, mit Direktlink zu jedem Dokument.",
        related="Verwandte Seiten",
    ),
    "ru": dict(
        tagline="Ваш цифровой писарь",
        old_name="Цифровой публичный катиб",
        old_tagline="EPDP · Бесплатная марокканская платформа",
        assistant='    assistant: "Помощник заполнения",',
        nav_add='    portals: "Официальные порталы",\n    docsIndex: "Указатель документов",',
        links_old="Проверенные официальные ссылки на государственные учреждения и цифровые публичные услуги Марокко, тщательно проверенные и регулярно обновляемые.",
        links_new="Проверенные официальные ссылки на марокканские государственные учреждения и организации (соцстрах, занятость, экономика и финансы, ЖКХ), тщательно проверяемые и регулярно обновляемые.",
        faq_old='    title: "Часто задаваемые вопросы",',
        faq_new='    title: "Как это работает — Частые вопросы",',
        about_old='    title: "О цифровой платформе общественного писца",',
        about_new='    title: "О платформе EPDP — ваш цифровой писарь",',
        portals_title="Официальные порталы",
        portals_sub="Официальные правительственные порталы и публичные цифровые платформы для удалённого оформления процедур, проверяемые и регулярно обновляемые.",
        docs_title="Указатель документов",
        docs_sub="Полный указатель всех административных бланков и документов по категориям с прямой ссылкой на каждый документ.",
        related="Связанные страницы",
    ),
}


def apply(path, reps):
    """reps: list of (old, new). Each must match exactly once."""
    with open(path, encoding="utf-8") as f:
        txt = f.read()
    for i, (old, new) in enumerate(reps):
        n = txt.count(old)
        if n != 1:
            print(f"FAIL {path} rep#{i}: found {n}x: {old[:70]!r}")
            sys.exit(1)
        txt = txt.replace(old, new)
    with open(path, "w", encoding="utf-8") as f:
        f.write(txt)
    print(f"OK {path} ({len(reps)} replacements)")


for code, d in DATA.items():
    p = B + code + ".ts"
    sections = (
        "  portals: {\n"
        f"    title: \"{d['portals_title']}\",\n"
        "    subtitle:\n"
        f"      \"{d['portals_sub']}\",\n"
        "  },\n\n"
        "  docsIndex: {\n"
        f"    title: \"{d['docs_title']}\",\n"
        "    subtitle:\n"
        f"      \"{d['docs_sub']}\",\n"
        "  },\n\n"
        "  how: {"
    )
    reps = [
        (f'    name: "{d["old_name"]}",', '    name: "EPDP",'),
        (f'    tagline: "{d["old_tagline"]}",', f'    tagline: "{d["tagline"]}",'),
        (d["assistant"], d["assistant"] + "\n" + d["nav_add"]),
        (f'      "{d["links_old"]}",', f'      "{d["links_new"]}",'),
        (d["faq_old"], d["faq_new"]),
        (d["about_old"], d["about_new"]),
        ("  how: {", sections),
        ("  pages: {", f'  pages: {{\n    related: "{d["related"]}",'),
    ]
    apply(p, reps)

# types.ts
apply(
    B + "types.ts",
    [
        (
            "    assistant: string;\n    categories: string;",
            "    assistant: string;\n    portals: string;\n    docsIndex: string;\n    categories: string;",
        ),
        (
            "  how: {\n    title: string;",
            "  portals: {\n    title: string;\n    subtitle: string;\n  };\n\n"
            "  docsIndex: {\n    title: string;\n    subtitle: string;\n  };\n\n"
            "  how: {\n    title: string;",
        ),
        (
            "  pages: {\n    breadcrumb: string;",
            "  pages: {\n    related: string;\n    breadcrumb: string;",
        ),
    ],
)
print("ALL DONE")
