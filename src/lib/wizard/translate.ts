/**
 * Offline answer translation — runs 100% in the browser.
 *
 * Privacy promise on the site: "your data is processed locally in your
 * browser only and never sent to any server". This engine keeps that
 * promise while still translating the user's answers into the language of
 * the generated document (ar ↔ fr), fixing the "mixed-language document"
 * bug where French answers were pasted into Arabic documents and vice
 * versa.
 *
 * Layers (all deterministic, no network):
 *   1. Script detection  — decide whether an answer needs translating.
 *   2. Glossaries        — Moroccan cities, professions (both genders),
 *                          common administrative vocabulary, address words.
 *   3. Name dictionary   — the most common Moroccan first/family names with
 *                          their conventional French spellings.
 *   4. Transliteration   — Arabic ⇄ Latin grapheme tables (Moroccan
 *                          passport conventions) for names/words outside
 *                          the dictionaries.
 *   5. Dates & digits    — Arabic-Indic ⇄ Western digits, Moroccan month
 *                          names (يناير…دجنبر ⇄ janvier…décembre).
 *
 * Best-effort by design: every value stays editable in the review step and
 * the UI shows an "auto-translated" notice so users can verify nuance.
 */
import type { Answers } from "./fields";

export type DocLang = "ar" | "fr";

/* ───────────────────────────── script detection ─────────────────────── */

const AR_LETTER = /[\u0621-\u064A\u0660-\u0669\u06F0-\u06F9]/;
const LATIN_LETTER = /[A-Za-zÀ-ÿ]/;

export function detectScript(s: string): "ar" | "latin" | "mixed" | "neutral" {
  let ar = 0;
  let lat = 0;
  for (const c of s) {
    if (AR_LETTER.test(c)) ar++;
    else if (LATIN_LETTER.test(c)) lat++;
  }
  if (ar && lat) return "mixed";
  if (ar) return "ar";
  if (lat) return "latin";
  return "neutral";
}

/* ──────────────────────────────── digits ────────────────────────────── */

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function toWesternDigits(s: string): string {
  return s.replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
}

export function toArabicDigits(s: string): string {
  return s.replace(/[0-9]/g, (d) => AR_DIGITS[Number(d)]);
}

/* ─────────────────────────── glossaries (ar⇄fr) ─────────────────────── */

/** Build a bidirectional lookup from [ar, fr] pairs. */
function bidirectional(pairs: [string, string][]) {
  const ar2fr = new Map<string, string>();
  const fr2ar = new Map<string, string>();
  for (const [ar, fr] of pairs) {
    ar2fr.set(ar, fr);
    if (!fr2ar.has(fr.toLowerCase())) fr2ar.set(fr.toLowerCase(), ar);
  }
  return { ar2fr, fr2ar };
}

/** Moroccan cities, towns and regions (ar ⇄ fr official spellings). */
const CITIES = bidirectional([
  ["الدار البيضاء", "Casablanca"], ["كازا", "Casablanca"], ["الرباط", "Rabat"],
  ["مراكش", "Marrakech"], ["فاس", "Fès"], ["طنجة", "Tanger"], ["أكادير", "Agadir"],
  ["مكناس", "Meknès"], ["وجدة", "Oujda"], ["القنيطرة", "Kénitra"],
  ["تطوان", "Tétouan"], ["سلا", "Salé"], ["تمارة", "Témara"], ["آسفي", "Safi"],
  ["الجديدة", "El Jadida"], ["بني ملال", "Béni Mellal"], ["الناظور", "Nador"],
  ["خريبكة", "Khouribga"], ["سطات", "Settat"], ["العيون", "Laâyoune"],
  ["الداخلة", "Dakhla"], ["الصويرة", "Essaouira"], ["المحمدية", "Mohammedia"],
  ["برشيد", "Berrechid"], ["الخميسات", "Khemisset"], ["تازة", "Taza"],
  ["ورزازات", "Ouarzazate"], ["الرشيدية", "Errachidia"], ["كلميم", "Guelmim"],
  ["طانطان", "Tan-Tan"], ["سيدي قاسم", "Sidi Kacem"], ["وادي زم", "Oued Zem"],
  ["العرائش", "Larache"], ["الحسيمة", "Al Hoceima"], ["أزرو", "Azrou"],
  ["إفران", "Ifrane"], ["شفشاون", "Chefchaouen"], ["أصيلة", "Asilah"],
  ["مرتيل", "Martil"], ["الفنيدق", "Fnideq"], ["المضيق", "M'diq"],
  ["سكيرات", "Skhirat"], ["بوسكورة", "Bouskoura"], ["تزنيت", "Tiznit"],
  ["تارودانت", "Taroudant"], ["زاكورة", "Zagora"], ["تنغير", "Tinghir"],
  ["ميدلت", "Midelt"], ["أزيلال", "Azilal"], ["الفقيه بن صالح", "Fquih Ben Salah"],
  ["سيدي سليمان", "Sidi Slimane"], ["سيدي يحيى", "Sidi Yahya"],
  ["إنزكان", "Inezgane"], ["الدشيرة", "Dcheira"], ["السمارة", "Smara"],
  ["بوجدور", "Boujdour"], ["الخنيفرة", "Khenifra"], ["سيدي بنور", "Sidi Bennour"],
  ["اليوسفية", "Youssoufia"], ["قلعة السراغنة", "Kelâa des Sraghna"],
  ["بركان", "Berkane"], ["تاوريرت", "Taourirt"], ["جرادة", "Jerada"],
  ["فكيك", "Figuig"], ["العرائش", "Larache"], ["القصر الكبير", "Ksar El Kebir"],
  ["مديونة", "Médiouna"], ["النواصر", "Nouaceur"], ["الحي المحمدي", "Hay Mohammadi"],
  ["المعاريف", "Maârif"], ["أكدال", "Agdal"], ["الرياض", "Hay Riad"],
  ["حسان", "Hassan"], ["يعقوب المنصور", "Yacoub El Mansour"],
  ["المغرب", "Maroc"], ["الصحراء", "Sahara"],
]);

/** Professions — masculine and feminine forms, Moroccan French usage. */
const PROFESSIONS = bidirectional([
  ["أستاذ", "professeur"], ["أستاذة", "professeure"],
  ["مهندس", "ingénieur"], ["مهندسة", "ingénieure"],
  ["محاسب", "comptable"], ["محاسبة", "comptable"],
  ["تقني", "technicien"], ["تقنية", "technicienne"],
  ["تاجر", "commerçant"], ["تاجرة", "commerçante"],
  ["سائق", "chauffeur"], ["سائقة", "chauffeuse"],
  ["ممرض", "infirmier"], ["ممرضة", "infirmière"],
  ["طبيب", "médecin"], ["طبيبة", "médecin"],
  ["محام", "avocat"], ["محامية", "avocate"],
  ["موظف", "fonctionnaire"], ["موظفة", "fonctionnaire"],
  ["عامل", "ouvrier"], ["عاملة", "ouvrière"],
  ["ربة بيت", "femme au foyer"], ["ربة البيت", "femme au foyer"],
  ["تلميذ", "élève"], ["تلميذة", "élève"],
  ["طالب", "étudiant"], ["طالبة", "étudiante"],
  ["متقاعد", "retraité"], ["متقاعدة", "retraitée"],
  ["عاطل", "sans emploi"], ["عاطلة", "sans emploi"],
  ["فلاح", "agriculteur"], ["مزارع", "agriculteur"],
  ["صياد", "pêcheur"], ["حرفي", "artisan"], ["حرفية", "artisane"],
  ["حلاق", "coiffeur"], ["ميكانيكي", "mécanicien"],
  ["بناء", "maçon"], ["سباك", "plombier"], ["كهربائي", "électricien"],
  ["خياط", "tailleur"], ["خباز", "boulanger"], ["جزار", "boucher"],
  ["طباخ", "cuisinier"], ["نادل", "serveur"], ["نادلة", "serveuse"],
  ["حارس أمن", "agent de sécurité"], ["شرطي", "policier"],
  ["عسكري", "militaire"], ["جندي", "soldat"],
  ["صحفي", "journaliste"], ["مبرمج", "développeur"],
  ["مطور", "développeur"], ["مدير", "directeur"], ["مديرة", "directrice"],
  ["سكرتير", "secrétaire"], ["سكرتيرة", "secrétaire"],
  ["بائع", "vendeur"], ["بائعة", "vendeuse"],
  ["مستشار", "conseiller"], ["مستشارة", "conseillère"],
  ["ممرضة قانونية", "infirmière diplômée"],
  ["محضر قضائي", "huissier de justice"], ["عدل", "adoul"],
  ["نجار", "menuisier"], ["حداد", "forgeron"], ["صباغ", "peintre"],
  ["مصور", "photographe"], ["مرشد سياحي", "guide touristique"],
  ["عاملة نظافة", "femme de ménage"], ["عامل نظافة", "agent de propreté"],
  ["طيار", "pilote"], ["ملاح", "navigateur"], ["بحار", "marin"],
  ["معد", "cadre"], ["تاجر جملة", "grossiste"],
]);

/** Administrative + everyday vocabulary (word-level phrasebook). */
const PHRASES = bidirectional([
  ["طلب", "demande"], ["الطلب", "demande"], ["طلبات", "demandes"],
  ["شهادة", "attestation"], ["الشهادة", "attestation"], ["الشهادات", "attestations"],
  ["وثيقة", "document"], ["الوثيقة", "document"], ["وثائق", "documents"],
  ["نسخة", "copie"], ["النسخة", "copie"], ["نسخ", "copies"],
  ["رسم الولادة", "acte de naissance"], ["رسم الزواج", "acte de mariage"],
  ["رسم الوفاة", "acte de décès"],
  ["السجل العدلي", "casier judiciaire"], ["بطاقة التعريف", "carte d'identité"],
  ["البطاقة الوطنية", "carte nationale"], ["جواز السفر", "passeport"],
  ["التصريح", "déclaration"], ["تصريح", "déclaration"],
  ["الالتزام", "engagement"], ["التزام", "engagement"],
  ["وكالة", "procuration"], ["الوكالة", "procuration"],
  ["شكاية", "réclamation"], ["الشكاية", "réclamation"], ["شكوى", "plainte"],
  ["تجديد", "renouvellement"], ["استخراج", "délivrance"],
  ["التوقيع", "signature"], ["الإمضاء", "signature"], ["إمضاء", "signature"],
  ["البلدية", "commune"], ["جماعة", "commune"], ["الجماعة", "commune"],
  ["القيادة", "caïdat"], ["الملحقة الإدارية", "annexe administrative"],
  ["المحكمة", "tribunal"], ["الشرطة", "police"], ["الدرك", "gendarmerie"],
  ["المستشفى", "hôpital"], ["المدرسة", "école"], ["الجامعة", "université"],
  ["المستوى", "niveau"], ["بكالوريا", "baccalauréat"], ["الإجازة", "licence"],
  ["إجازة", "licence"], ["ماستر", "master"], ["دكتوراه", "doctorat"],
  ["دبلوم", "diplôme"], ["الشهادة", "diplôme"], ["درهم", "dirhams"],
  ["الشهر", "mois"], ["شهر", "mois"], ["أشهر", "mois"],
  ["السنة", "année"], ["سنة", "an"], ["سنوات", "ans"], ["سنين", "ans"],
  ["يوم", "jour"], ["أيام", "jours"], ["اليوم", "aujourd'hui"],
  ["نعم", "oui"], ["لا", "non"], ["وزارة", "ministère"], ["الوزارة", "ministère"],
  ["المصلحة", "service"], ["مصلحة", "service"], ["السيد", "Monsieur"],
  ["السيدة", "Madame"], ["الآنسة", "Mademoiselle"],
  ["الطالب", "demandeur"], ["الطالبة", "demanderesse"],
  ["المعني", "l'intéressé"], ["المعنية", "l'intéressée"],
  ["موضوع", "objet"], ["الموضوع", "objet"], ["الظروف", "circonstances"],
  ["تفاصيل", "détails"], ["التفاصيل", "détails"], ["وصف", "description"],
  ["العنوان", "adresse"], ["الهاتف", "téléphone"],
  ["البريد الإلكتروني", "e-mail"], ["الولادة", "naissance"],
  ["الزواج", "mariage"], ["الطلاق", "divorce"], ["الوفاة", "décès"],
  ["الأسرة", "famille"], ["الأب", "père"], ["الأم", "mère"],
  ["الابن", "fils"], ["الابنة", "fille"], ["الأخ", "frère"], ["الأخت", "sœur"],
  ["السكن", "logement"], ["الكراء", "loyer"], ["الملكية", "propriété"],
  ["البيع", "vente"], ["الشراء", "achat"], ["التعويض", "indemnité"],
  ["الأجر", "salaire"], ["العمل", "travail"], ["التدريب", "stage"],
  ["الشركة", "société"], ["المقاولة", "entreprise"], ["مقاولة", "entreprise"],
  ["الجمعية", "association"], ["التعاونية", "coopérative"],
  ["البناء", "construction"], ["الرخصة", "autorisation"],
  ["البقعة", "parcelle"], ["الطابق", "étage"], ["فيلا", "villa"],
  ["شقة", "appartement"], ["منزل", "maison"], ["محل تجاري", "local commercial"],
  ["مستودع", "dépôt"], ["الأرض", "terrain"], ["العقار", "bien immobilier"],
  ["التأشيرة", "visa"], ["الحدود", "frontière"], ["الميناء", "port"],
  ["المطار", "aéroport"], ["البريد", "poste"], ["الضمان", "caution"],
  ["الماء", "eau"], ["الكهرباء", "électricité"], ["الصحة", "santé"],
  ["في", "à"], ["منذ", "depuis"], ["مند", "depuis"], ["حتى", "jusqu'à"],
  ["بين", "entre"], ["مع", "avec"], ["بدون", "sans"], ["عن", "sur"],
  ["ال", "el"], ["بن", "ben"], ["عبد", "abd"], ["بو", "bou"],
  ["ثلاث", "trois"], ["اثنين", "deux"], ["واحدة", "une"], ["واحد", "un"],
  ["معلوميات", "informatique"], ["إعلاميات", "informatique"], ["حاسوب", "informatique"],
  ["الثاني", "II"], ["الأول", "I"], ["الثالث", "III"], ["الرابع", "IV"],
  ["الحصول على", "l'obtention de"], ["المطالبة بـ", "la réclamation de"],
]);

/** Address words (street types etc.). */
const ADDR = bidirectional([
  ["شارع", "rue"], ["الشارع", "rue"], ["زنقة", "ruelle"], ["درب", "derb"],
  ["حي", "quartier"], ["الحي", "quartier"], ["تجزئة", "lotissement"],
  ["ساحة", "place"], ["عمارة", "immeuble"], ["طابق", "étage"],
  ["رقم", "n°"], ["باب", "porte"], ["الطريق", "route"], ["زنقة", "ruelle"],
  ["الطابق الأول", "1er étage"], ["الطابق الثاني", "2e étage"],
  ["قرب", "près de"], ["مقابل", "face à"], ["بجانب", "à côté de"],
  ["الدور الأول", "1er étage"], ["الدور الثاني", "2e étage"],
]);

/** Moroccan + MSA month names. */
const MONTHS = bidirectional([
  ["يناير", "janvier"], ["فبراير", "février"], ["مارس", "mars"],
  ["أبريل", "avril"], ["أبريل", "avril"], ["ماي", "mai"], ["مايو", "mai"],
  ["يونيو", "juin"], ["يوليوز", "juillet"], ["يوليو", "juillet"],
  ["غشت", "août"], ["آب", "août"], ["شتنبر", "septembre"],
  ["أيلول", "septembre"], ["سبتمبر", "septembre"], ["أكتوبر", "octobre"],
  ["تشرين الأول", "octobre"], ["نونبر", "novembre"],
  ["تشرين الثاني", "novembre"], ["نوفمبر", "novembre"],
  ["دجنبر", "décembre"], ["كانون الأول", "décembre"],
  ["كانون الثاني", "janvier"], ["شباط", "février"], ["آذار", "mars"],
  ["نيسان", "avril"], ["أيار", "mai"], ["حزيران", "juin"], ["تموز", "juillet"],
]);

/* ─────────────────────── name dictionary (ar→fr) ────────────────────── */

/** Common Moroccan first + family names with their conventional spellings. */
const NAMES_AR_FR: [string, string][] = [
  ["محمد", "Mohamed"], ["أحمد", "Ahmed"], ["محمدي", "Mohamedi"],
  ["الحسن", "Hassan"], ["حسن", "Hassan"], ["الحسين", "Lahoucine"],
  ["عبد الله", "Abdellah"], ["عبدالله", "Abdellah"],
  ["عبد الرحمان", "Abderrahmane"], ["عبد العزيز", "Abdelaziz"],
  ["عبد القادر", "Abdelkader"], ["عبد الحق", "Abdelhak"],
  ["عبد السلام", "Abdessalam"], ["عبد الرزاق", "Abderrazak"],
  ["عبد اللطيف", "Abdellatif"], ["عبد الواحد", "Abdelwahed"],
  ["مصطفى", "Mustapha"], ["إدريس", "Idriss"], ["يوسف", "Youssef"],
  ["ياسين", "Yassine"], ["كريم", "Karim"], ["خالد", "Khalid"],
  ["رشيد", "Rachid"], ["سعيد", "Said"], ["علي", "Ali"], ["عمر", "Omar"],
  ["عثمان", "Otmane"], ["حمزة", "Hamza"], ["براهيم", "Brahim"],
  ["إبراهيم", "Ibrahim"], ["إسماعيل", "Ismail"], ["يحيى", "Yahya"],
  ["زكرياء", "Zakaria"], ["أيوب", "Ayoub"], ["أنس", "Anas"],
  ["طارق", "Tarik"], ["توفيق", "Tewfik"], ["نبيل", "Nabil"],
  ["جمال", "Jamal"], ["الحبيب", "Lahbib"], ["عزيز", "Aziz"],
  ["منير", "Mounir"], ["مهدي", "Mehdi"], ["أمين", "Amine"],
  ["بلال", "Bilal"], ["سفيان", "Soufiane"], ["مراد", "Mourad"],
  ["سلمى", "Salma"],
  ["فاطمة الزهراء", "Fatima Zahra"], ["فاطمة", "Fatima"],
  ["خديجة", "Khadija"], ["عائشة", "Aicha"], ["مريم", "Meryem"],
  ["أسماء", "Asmae"], ["زينب", "Zineb"], ["سعاد", "Souad"],
  ["نعيمة", "Naima"], ["حسناء", "Hasnae"], ["لبنى", "Lebna"],
  ["هدى", "Houda"], ["سناء", "Snane"], ["رانيا", "Rania"],
  ["سارة", "Sara"], ["إيمان", "Imane"], ["خولة", "Khaoula"],
  ["غادة", "Ghita"], ["نادية", "Nadia"], ["سلوى", "Salwa"],
  ["بشرى", "Bouchra"], ["جميلة", "Jamila"], ["لطيفة", "Latifa"],
  ["شيماء", "Chaimae"], ["أميمة", "Ouaimae"], ["نزهة", "Nouzha"],
  ["المنذر", "Moundhir"], ["أنوار", "Anouar"], ["نور الدين", "Nourddine"],
  ["العربي", "Larbi"], ["المختار", "Mokhtar"], ["الحاج", "El Haj"],
  ["إدريسي", "Idrissi"], ["زهراء", "Zahra"], ["إدريس", "Idriss"],
  // family names
  ["العلمي", "Alami"], ["العلمي", "Alami"], ["العلوي", "Alaoui"],
  ["الإدريسي", "El Idrissi"], ["بناني", "Bennani"], ["البقالي", "El Bakkali"],
  ["الفاسي", "El Fassi"], ["الرباطي", "Erbati"], ["الفيلالي", "El Filali"],
  ["الصقلي", "Essekalli"], ["التازي", "Tazi"], ["المرابط", "El Morabet"],
  ["الشرقاوي", "Charkaoui"], ["الغزواني", "El Ghazouani"],
  ["بنكيران", "Benkirane"], ["بنعمر", "Benamar"], ["بوعزة", "Bouazza"],
  ["بوعلام", "Boualam"], ["بوشتى", "Bouchti"], ["بوعيد", "Bouaid"],
  ["المنصوري", "El Mansouri"], ["الهاشمي", "El Hachimi"],
  ["اليعقوبي", "El Yacoubi"], ["اليوسفي", "El Youssfi"],
  ["الزهراوي", "Zahraoui"], ["الودغيري", "El Ouadghiri"],
  ["أزرقان", "Azraqane"],
  ["بلحاج", "Belhaj"], ["بلمهدي", "Belmehdi"], ["بنعبيد", "Benabid"],
  ["الحسني", "El Hassani"], ["الرحماني", "Errahmani"],
  ["الشاوي", "Chaoui"], ["الزموري", "El Zemouri"], ["الطاهري", "El Tahri"],
  ["العمراني", "El Amrani"], ["القاسمي", "El Kassimi"],
  ["المهدي", "El Mehdi"], ["النجاري", "Ennajari"], ["الوزاني", "El Ouazzani"],
  ["الهلالي", "El Hilali"], ["اليوسفي", "El Youssfi"],
  ["اليعقوبي", "El Yacoubi"], ["الهاشمي", "El Hachimi"],
  ["الطيب", "Tayeb"], ["الصقلي", "Essekalli"], ["الصقلي", "Essekalli"],
  ["الرامي", "Erramy"], ["الراضي", "Erradi"], ["الغالي", "El Ghali"],
  ["الفهري", "El Fahri"], ["المسعودي", "El Massoudi"],
  ["الموسوي", "El Moussaoui"], ["الناصري", "Ennaceri"],
  ["بنسعيد", "Bensaid"], ["بنشقرون", "Bencheqroun"],
  ["بنعيسى", "Benessa"], ["بوعزيز", "Bouaziz"], ["حمداوي", "Hamdawi"],
  ["حجاجي", "Hajjaji"], ["خطابي", "Kettabi"], ["دكالي", "Doukkali"],
  ["رامي", "Ramy"], ["زروال", "Zeroual"], ["سعدي", "Saadi"],
  ["سبيهي", "Sebihy"], ["شرقاوي", "Charkaoui"], ["صبري", "Sabri"],
  ["ضريري", "Driri"], ["طالبي", "Talbi"], ["عابد", "Abid"],
  ["عباسي", "Abbassi"], ["عماري", "Amari"], ["عمراني", "Amrani"],
  ["غزالي", "Ghazali"], ["فاضل", "Fadil"], ["قاسمي", "Kassimi"],
  ["كروج", "Kerrouj"], ["لعروسي", "Laaroussi"], ["مومن", "Moumen"],
  ["موساوي", "Moussaoui"], ["ناصري", "Naceri"], ["هاشمي", "Hachimi"],
  ["يوسفي", "Youssfi"], ["يحيياوي", "Yahyaoui"],
];
const NAMES = bidirectional(NAMES_AR_FR.filter((p) => p[0] && p[1]));

/* ─────────────────────── transliteration tables ────────────────────── */

/** Arabic → Latin grapheme table (Moroccan conventions). */
const AR_GRAPH: [string, string][] = [
  ["ث", "th"], ["خ", "kh"], ["ش", "ch"], ["غ", "gh"], ["ذ", "dh"],
  ["ض", "d"], ["ص", "s"], ["ط", "t"], ["ظ", "d"], ["ع", ""],
  ["ء", ""], ["أ", "a"], ["إ", "i"], ["آ", "a"], ["ٱ", "a"],
  ["ا", "a"], ["ب", "b"], ["ت", "t"], ["ج", "j"], ["ح", "h"],
  ["د", "d"], ["ر", "r"], ["ز", "z"], ["س", "s"], ["ف", "f"],
  ["ق", "q"], ["ك", "k"], ["ل", "l"], ["م", "m"], ["ن", "n"],
  ["ه", "h"], ["و", "ou"], ["ؤ", "ou"], ["ي", "i"], ["ى", "a"],
  ["ئ", "i"], ["ة", "a"], ["ـ", ""],
];

/** Latin → Arabic digraph/letter table, greedy longest-match. */
const FR_GRAPH: [string, string][] = [
  ["kh", "خ"], ["gh", "غ"], ["ch", "ش"], ["th", "ث"], ["dh", "ذ"],
  ["ou", "و"], ["ph", "ف"], ["aa", "ا"], ["ee", "ي"], ["ii", "ي"],
  ["a", "ا"], ["b", "ب"], ["c", "ك"], ["d", "د"], ["e", ""],
  ["f", "ف"], ["g", "ك"], ["h", "ه"], ["i", "ي"], ["j", "ج"],
  ["k", "ك"], ["l", "ل"], ["m", "م"], ["n", "ن"], ["o", "و"],
  ["p", "ب"], ["q", "ق"], ["r", "ر"], ["s", "س"], ["t", "ت"],
  ["u", "و"], ["v", "ف"], ["w", "و"], ["x", "كس"], ["y", "ي"],
  ["z", "ز"],
];

const cap = (w: string) => (w ? w[0].toUpperCase() + w.slice(1) : w);

/** Transliterate a single Arabic word to Latin (dictionary first). */
export function arWordToLatin(word: string): string {
  const clean = word.replace(/[^\u0621-\u064A]/g, "");
  if (!clean) return word;
  const known = NAMES.ar2fr.get(clean) ?? PROFESSIONS.ar2fr.get(clean);
  if (known) return known;
  let out = "";
  for (const c of clean) {
    const g = AR_GRAPH.find(([a]) => a === c);
    out += g ? g[1] : c;
  }
  // tidy: collapse doubled letters from dropped ع, trim
  out = out.replace(/^-|-$/g, "");
  return cap(out || word);
}

/** Transliterate a single Latin word to Arabic (dictionaries first). */
export function latinWordToAr(word: string): string {
  const lower = word.toLowerCase().replace(/[^a-zà-ÿ]/g, "");
  if (!lower) return word;
  for (const g of [NAMES, CITIES, PROFESSIONS, PHRASES, ADDR, MONTHS]) {
    const hit = g.fr2ar.get(lower);
    if (hit) return hit;
  }
  // common Moroccan name prefixes
  if (/^(ben|el|abd|bou)/.test(lower)) {
    const m = NAMES.fr2ar.get(lower);
    if (m) return m;
  }
  let out = "";
  let i = 0;
  while (i < lower.length) {
    const two = lower.slice(i, i + 2);
    const dig = FR_GRAPH.find(([a]) => a === two);
    if (dig) {
      out += dig[1];
      i += 2;
      continue;
    }
    const one = lower.slice(i, i + 1);
    const g = FR_GRAPH.find(([a]) => a === one);
    out += g ? g[1] : one;
    i += 1;
  }
  // final silent "e" was mapped to "" — done; tidy leading alif
  return out || word;
}

/* ─────────────────────── word/phrase translation ───────────────────── */

/** Normalize an Arabic word for glossary lookup (strip prefixes/alef). */
function normAr(w: string): string {
  let s = w.replace(/[ًٌٍَُِّْ.,؛:،!?؟()"»«\[\]…\-–]/g, "").trim();
  for (const p of ["وال", "بال", "كال", "فال", "لل", "ال"]) {
    if (s.startsWith(p) && s.length > p.length + 1) {
      s = s.slice(p.length);
      break;
    }
  }
  return s;
}

/** Normalize a French word for glossary lookup. */
function normFr(w: string): string {
  return w
    .toLowerCase()
    .replace(/[.,;:!?"()'’\-–]/g, "")
    .replace(/^(l'|d'|qu')/, "")
    .trim();
}

/** Translate one Arabic word → French using all glossaries (or transliterate). */
function arWordToFr(word: string): string {
  const n = normAr(word);
  if (!n) return word;
  for (const g of [CITIES, PROFESSIONS, PHRASES, ADDR, MONTHS, NAMES]) {
    const hit = g.ar2fr.get(n) ?? g.ar2fr.get(word);
    if (hit) return hit;
  }
  return arWordToLatin(word);
}

/** Translate one French word → Arabic using all glossaries (or transliterate). */
function frWordToAr(word: string): string {
  const n = normFr(word);
  if (!n) return word;
  for (const g of [CITIES, PROFESSIONS, PHRASES, ADDR, MONTHS, NAMES]) {
    const hit = g.fr2ar.get(n) ?? g.fr2ar.get(word.toLowerCase());
    if (hit) return hit;
  }
  return latinWordToAr(word);
}

const AR_PUNCT: [RegExp, string][] = [
  [/،/g, ", "], [/؛/g, "; "], [/؟/g, " ?"], [/(«|»)/g, '"'],
];
const FR_PUNCT: [RegExp, string][] = [
  [/,/g, "،"], [/;/g, "؛"], [/\?/g, "؟"],
];

/** Glossaries searched for multi-word phrase hits, longest phrases first. */
const ALL_GLOSSARIES = [CITIES, PROFESSIONS, PHRASES, ADDR, MONTHS, NAMES];

/** Longest-first list of multi-word ar→fr phrases across every glossary. */
const AR_PHRASES: [string, string][] = ALL_GLOSSARIES.flatMap((g) =>
  [...g.ar2fr].filter(([ar]) => ar.includes(" "))
).sort((a, b) => b[0].length - a[0].length);

/** Longest-first list of multi-word fr→ar phrases across every glossary. */
const FR_PHRASES_LIST: [string, string][] = ALL_GLOSSARIES.flatMap((g) =>
  [...g.fr2ar].filter(([fr]) => fr.includes(" "))
).sort((a, b) => b[0].length - a[0].length);

/** Translate a free-text value ar → fr (phrases first, then word-by-word). */
export function arToFrText(text: string): string {
  let out = toWesternDigits(text);
  for (const [re, rep] of AR_PUNCT) out = out.replace(re, rep);
  // multi-word glossary hits first (cities, professions, legal terms…)
  for (const [ar, fr] of AR_PHRASES) {
    if (out.includes(ar)) out = out.split(ar).join(fr);
  }
  return out
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok.trim()) return tok;
      if (!AR_LETTER.test(tok)) return tok; // digits / Latin stay
      // keep leading/trailing punctuation around the translated core
      const m = tok.match(/^([^\u0621-\u064A]*)([\s\S]*?)([^\u0621-\u064A]*)$/)!;
      const core = m[2];
      if (!core) return tok;
      return m[1] + arWordToFr(core) + m[3];
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

/** Translate a free-text value fr → ar (phrases first, then word-by-word). */
export function frToArText(text: string): string {
  let out = text;
  for (const [re, rep] of FR_PUNCT) out = out.replace(re, rep);
  const lower = out.toLowerCase();
  for (const [fr, ar] of FR_PHRASES_LIST) {
    if (lower.includes(fr)) {
      out = out.replace(new RegExp(fr, "gi"), ar);
      break; // re-scan from the top with the new text
    }
  }
  return out
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok.trim()) return tok;
      if (!LATIN_LETTER.test(tok)) return tok; // digits / Arabic stay
      const m = tok.match(/^([A-Za-zÀ-ÿ0-9'’\-]*)([\s\S]*)$/)!;
      const core = m[1];
      if (!core) return tok;
      return frWordToAr(core) + m[2];
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

/* ───────────────────────────── dates ───────────────────────────────── */

/** Convert a date-ish value between ar/fr (digits, month names). */
export function translateDate(value: string, to: DocLang): string {
  let v = toWesternDigits(value);
  if (to === "fr") {
    // ١٥ مارس ٢٠٢٦ / 15 مارس 2026 → 15 mars 2026
    // multi-word phrases (cities, legal terms) first, then remaining words
    for (const [ar, fr] of AR_PHRASES) {
      if (v.includes(ar)) v = v.split(ar).join(fr);
    }
    v = v.replace(/[\u0621-\u064A]+/g, (w) => {
      const n = normAr(w);
      return MONTHS.ar2fr.get(n) ?? MONTHS.ar2fr.get(w) ?? arWordToFr(w);
    });
    // standalone ب / بـ (place marker) → à
    v = v.replace(/(^|\s)بـ?(\s|$)/g, "$1à$2");
    v = v.replace(/^(في|منذ)\s+/, (m) =>
      m.trim() === "منذ" ? "depuis " : ""
    );
    return v.replace(/\s+/g, " ").trim();
  }
  // fr → ar: "15 mars 2026" → "15 مارس 2026"; keep numeric forms as digits
  v = v.replace(/[A-Za-zÀ-ÿ]+/g, (w) => {
    const n = normFr(w);
    return MONTHS.fr2ar.get(n) ?? MONTHS.fr2ar.get(w.toLowerCase()) ?? frWordToAr(w);
  });
  v = v.replace(/\bà\b/g, "بـ").replace(/\bdepuis\b/g, "منذ").replace(/\ble\b/g, "");
  return v.replace(/\s+/g, " ").trim();
}

/* ─────────────────────── per-field strategies ──────────────────────── */

/** Keys holding person/company names → transliterate (dictionary first). */
const NAME_KEYS = new Set([
  "name", "father", "mother", "concerned", "agent", "landlord", "tenant",
  "seller", "buyer", "creditor", "employer", "employee", "manager",
  "company", "hosted",
]);
/** Keys holding a city/commune → glossary lookup. */
const CITY_KEYS = new Set(["city", "commune"]);
/** Keys holding dates → date conversion. */
const DATE_KEYS = new Set(["date", "birth", "startdate", "incident_date"]);
/** Keys holding identifiers/numbers → never translate (digits only normalised). */
const NEVER_KEYS = new Set([
  "cin", "lost_cin", "grise", "cnssno", "phone", "email", "amount",
  "count", "deposit",
]);

/** Translate ONE answer value into the document language. */
export function translateValue(key: string, value: string, to: DocLang): string {
  if (!value) return value;
  const script = detectScript(value);
  if (script === "neutral") return to === "ar" ? value : toWesternDigits(value);
  const isAr = script === "ar" || (script === "mixed" && to === "fr");

  if (NEVER_KEYS.has(key)) {
    // identifiers stay as typed; normalise digit shapes only
    return to === "ar" ? toWesternDigits(value) : toWesternDigits(value);
  }
  if (DATE_KEYS.has(key)) {
    if (to === "fr" && isAr) return translateDate(value, "fr");
    if (to === "ar" && !isAr) return translateDate(value, "ar");
    return toWesternDigits(value);
  }
  if (to === "fr" && !isAr) return value; // already Latin
  if (to === "ar" && isAr) return value; // already Arabic

  if (to === "fr") {
    // ar → fr
    if (CITY_KEYS.has(key)) {
      const n = normAr(value.trim());
      return CITIES.ar2fr.get(n) ?? CITIES.ar2fr.get(value.trim()) ?? arToFrText(value);
    }
    if (key === "address") return arToFrText(value);
    if (NAME_KEYS.has(key)) {
      // multi-word dictionary names first (فاطمة الزهراء → Fatima Zahra),
      // then word-by-word transliteration for the rest
      let v = value;
      for (const [ar, fr] of NAMES.ar2fr) {
        if (ar.includes(" ") && v.includes(ar)) v = v.split(ar).join(fr);
      }
      return v
        .split(/(\s+)/)
        .map((w) => (w.trim() && AR_LETTER.test(w) ? arWordToLatin(w) : w))
        .join("")
        .replace(/\s+/g, " ")
        .trim();
    }
    return arToFrText(value); // subject, details, dest, position, education…
  }
  // fr → ar
  if (CITY_KEYS.has(key)) {
    const n = normFr(value.trim());
    return CITIES.fr2ar.get(n) ?? CITIES.fr2ar.get(value.trim().toLowerCase()) ?? frToArText(value);
  }
  if (key === "address") return frToArText(value);
  if (NAME_KEYS.has(key)) {
    // multi-word dictionary names first (El Idrissi → الإدريسي)
    let v = value;
    for (const [fr, ar] of NAMES.fr2ar) {
      if (fr.includes(" ") && v.toLowerCase().includes(fr)) {
        v = v.replace(new RegExp(fr, "gi"), ar);
      }
    }
    return v
      .split(/(\s+)/)
      .map((w) => (w.trim() && LATIN_LETTER.test(w) ? latinWordToAr(w) : w))
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }
  return frToArText(value);
}

/** Translate every answer into the document language (offline). */
export function translateAnswers(answers: Answers, to: DocLang): Answers {
  const out: Answers = {};
  for (const [k, v] of Object.entries(answers)) {
    out[k] = typeof v === "string" ? translateValue(k, v, to) : v;
  }
  return out;
}

/** How many answers actually changed (for the UI notice). */
export function translatedCount(original: Answers, translated: Answers): number {
  return Object.keys(original).filter((k) => original[k] !== translated[k]).length;
}
