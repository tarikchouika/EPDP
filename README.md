# EPDP — منصة الكاتب العمومي الرقمية

<div dir="rtl">

**منصة مغربية لرقمنة خدمات الكاتب العمومي** — وثائق ونماذج إدارية مجانية، دليل المواقع الرسمية، ومساعد ذكي مضبوط بلا هلوسة.

🌐 **مباشر:** [epdp.pages.dev](https://epdp.pages.dev/)

</div>

## ✨ المزايا | Features

<div dir="rtl">

- **128 وثيقة ونموذجاً إدارياً** في 17 فئة (طلبات، شكايات، عقود كراء وبيع وتنازل وفسخ، وكالات، تصاريح بالشرف، عمل وتوظيف…)
- **97 نموذجاً كاملاً** بالنص الكامل بالعربية والفرنسية — تحميل Word ونسخ مجاناً
- **مساعد آلي لملء وتحرير الوثائق (جديد):** يسأل بياناتك حقلًا حقلًا مع التحقق من صحتها، ثم يحرر الوثيقة بشكل احترافي — طباعة/PDF ونسخ وتحميل Word، وجميع البيانات تُعالج محلياً في المتصفح دون أي خادم
- **دليل 38 موقعاً رسمياً** للإدارات والخدمات الرقمية العمومية المغربية (نطاقات رسمية ومؤسسات عمومية موثقة)
- **مساعد ذكي** بقاعدة معرفة مبنية حصراً على المصادر الرسمية — بدون توليد روابط وبدون هلوسة، مع مصدر رسمي لكل جواب
- **7 لغات:** العربية (RTL كامل)، English، Français، Español، Italiano، Deutsch، Русский
- **الوضعان المشع والقاتم** مع هوية بصرية مغربية (الأخضر والأحمر والذهبي وزخرفة الزليج)
- **صفحات قانونية كاملة:** شروط الاستخدام، سياسة الخصوصية، سياسة الكوكيز، إخلاء المسؤولية
- **SEO متقدم:** Metadata شاملة، JSON-LD (Organization/WebSite/Service/FAQPage)، sitemap.xml، robots.txt، hreflang
- متجاوب كلياً مع الهواتف والحواسيب، ومجاني 100% بدون تسجيل

</div>

- **128 administrative documents** across 17 categories with **97 full templates** (Arabic + French, Word download) and an **AI document assistant** that asks for your data and professionally drafts your document — local, private, print/PDF ready
- **Directory of 38 verified official Moroccan government websites**
- **Grounded smart assistant** — answers exclusively from a curated knowledge base of official sources, zero hallucination, official source attached to every answer
- **7 languages** incl. full RTL Arabic, **light/dark modes**, authentic Moroccan visual identity
- **Full legal pages** and **advanced SEO** (JSON-LD, sitemap, robots, hreflang)

## 🛠️ التقنيات | Tech Stack

- Next.js 16 (App Router, static export) + TypeScript
- Tailwind CSS 4 + shadcn/ui + Lucide icons
- next-themes (dark mode)
- Deployed on Cloudflare Pages

## 🚀 التشغيل محلياً | Local Development

```bash
bun install        # أو npm install
bun run dev        # http://localhost:3000
```

## 📦 البناء والنشر | Build & Deploy

```bash
# static export → out/
cp next.config.ts next.config.dev.bak.ts
cp scripts/export-next.config.ts next.config.ts
bunx next build
mv next.config.dev.bak.ts next.config.ts
```

النشر يتم تلقائياً إلى Cloudflare Pages عند كل push على الفرع `main`
عبر GitHub Actions (`.github/workflows/deploy.yml`) — يتطلب سرّي:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 🗂️ البنية | Structure

```
src/
├── app/                 # صفحة واحدة (layout + page + globals.css)
├── components/epdp/     # Header, Hero, Services, DocumentAssistant, Links, FAQ, Legal, Chatbot…
├── lib/
│   ├── i18n/            # 7 قواميس لغات + مزوّد اللغة (RTL/LTR)
│   ├── data/            # الوثائق، الفئات، الروابط الرسمية، الأسئلة الشائعة، النماذج
│   └── chatbot/         # قاعدة معرفة المساعد الذكي (مضبوطة بالمصادر الرسمية)
└── public/              # logo, robots.txt, sitemap.xml, manifest
```

## ⚖️ ملاحظة قانونية | Legal Note

<div dir="rtl">

المنصة مستقلة ولا تنتمي لأي إدارة حكومية. النماذج استرشادية عامة، والمرجع الرسمي النهائي هو الإدارات المختصة عبر مواقعها الرسمية. بعض الوثائق (كالوكالات العقارية) تتطلب قانوناً التوثيق لدى العدول أو موثق معتمد.

</div>

---

© EPDP — صُنع بالمغرب بهوية مغربية 🇲🇦
