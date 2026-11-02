// Template token classifier + document generator + validators.
// Fills [..] placeholders in templates from collected answers.
// Language-agnostic: handles Arabic and French token wording.
import type { Answers, WizardField } from "./fields";
import type { Locale } from "@/lib/i18n/types";

export interface FillResult {
  filled: string;
  remaining: string[]; // unresolved slot descriptions, for manual editing
  replaced: number;
}

interface Rule {
  test: RegExp;
  keys: string[]; // first key with an answer wins
}

/** Ordered classification rules — most specific first. */
const RULES: Rule[] = [
  // combined address + city
  { test: /العنوان\s*\/\s*المدينة|Adresse\s*\/\s*Ville/i, keys: ["__addr_city"] },
  // registration numbers (before generic CIN)
  { test: /رقم التسجيل|التسجيل CNSS|N° CNSS|immatriculation|N° d'immatriculation/i, keys: ["cnssno"] },
  { test: /الرمادية|رقم البطاقة الرمادية|carte grise/i, keys: ["grise"] },
  // specific person names before generic name
  { test: /الوكيل|المفوض إليه|mandataire/i, keys: ["agent"] },
  { test: /اسم المعني|المعني بالوثيقة|concerné/i, keys: ["concerned"] },
  { test: /اسم الأب|nom du père/i, keys: ["father"] },
  { test: /اسم الأم|nom de la mère/i, keys: ["mother"] },
  { test: /المكري|bailleur/i, keys: ["landlord"] },
  { test: /المكتري|locataire/i, keys: ["tenant"] },
  { test: /البائع|المتنازل(؟)?\b|vendeur|cédant/i, keys: ["seller"] },
  { test: /المشتري|المتنازل له|acquéreur|cessionnaire/i, keys: ["buyer"] },
  { test: /الدائن|créancier/i, keys: ["creditor"] },
  { test: /المدين(ة)?|débiteur/i, keys: ["name"] }, // "المدين" in dette = debtor
  { test: /المشغل|employeur/i, keys: ["employer"] },
  { test: /الأجير|المستضاف|salarié|hébergé/i, keys: ["employee"] },
  { test: /المسؤول|responsable/i, keys: ["manager"] },
  { test: /المقاولة|تسمية المقاولة|Entreprise|entreprise|société|Raison sociale/i, keys: ["company"] },
  // identity
  { test: /الاسم الكامل|اسم الموقع|اسم(؟)?\s*$|Nom complet|nom et prénom/i, keys: ["name"] },
  { test: /الاسم|الطالب(ة)?\s*$|^\[Nom\]?$|nom$/i, keys: ["name"] },
  { test: /البطاقة(?! الرمادية)|CIN|carte d'identité/i, keys: ["cin", "lost_cin"] },
  { test: /الهاتف|Téléphone|tél\b/i, keys: ["phone"] },
  { test: /البريد|E-mail|email/i, keys: ["email"] },
  { test: /العنوان الكامل|الساكن(ة)? بـ|العنوان(؟)?$|Adresse complète|Habite/i, keys: ["address"] },
  // dates — specific variants before generic
  { test: /الولادة|naissance/i, keys: ["birth"] },
  { test: /التوظيف|الالتحاق|embauche/i, keys: ["startdate"] },
  { test: /الاستحقاق|échéance/i, keys: ["incident_date"] },
  { test: /الواقعة|الحادث|incident|accident/i, keys: ["incident_date"] },
  { test: /التاريخ|تاريخ|Date(?! de naissance)|\bdate\b|اليوم|jour/i, keys: ["date"] },
  // place
  { test: /المكان|المدينة|Lieu|Ville|ville/i, keys: ["city"] },
  // work
  { test: /الوظيفة|المنصب|المسمى الوظيفي|Poste(?! :)|\bposte\b/i, keys: ["position"] },
  { test: /المستوى|niveau/i, keys: ["education"] },
  { test: /المهارات|compétences/i, keys: ["details"] },
  { test: /الخبرات|expériences/i, keys: ["experience"] },
  // money & time
  { test: /المبلغ|Montant|الثمن|prix|Salaire/i, keys: ["amount"] },
  { test: /المدة|durée/i, keys: ["duration"] },
  { test: /عدد|nombre|Nombre/i, keys: ["count"] },
  // subject / destination / details
  { test: /الموضوع|الغرض|Objet|objet/i, keys: ["subject"] },
  { test: /الموجه إليها|الموجه إليه|المرجو من|destinataire|à l'attention/i, keys: ["dest"] },
  { test: /التفاصيل|الظروف|Détails|circonstances|نص التصريح|préciser|Description|description/i, keys: ["details"] },
  // misc old-template tokens
  { test: /الجماعة|commune/i, keys: ["commune", "city"] },
  { test: /المصلحة|direction/i, keys: ["details"] },
  { test: /domaine/i, keys: ["position"] },
  { test: /intitulé/i, keys: ["position"] },
  { test: /السنة|année/i, keys: ["incident_date"] },
  { test: /شعار/i, keys: [] }, // logo → manual
];

/** Context rules for pure-dot slots like [......]. */
const CONTEXT_RULES: { test: RegExp; key: string }[] = [
  { test: /اسم الأب|nom du père/i, key: "father" },
  { test: /اسم الأم|nom de la mère/i, key: "mother" },
  { test: /اسم المعني|concerné/i, key: "concerned" },
  { test: /رقم البطاقة|N° CIN|CIN/i, key: "cin" },
  { test: /الهاتف|Tél/i, key: "phone" },
  { test: /العنوان|Adresse/i, key: "address" },
  { test: /البريد|mail/i, key: "email" },
  { test: /مكان الولادة|lieu de naissance|تاريخ ومكان/i, key: "birth" },
  { test: /التاريخ|Date/i, key: "date" },
  { test: /المكان|المدينة|Lieu|Ville/i, key: "city" },
  { test: /المبلغ|Montant/i, key: "amount" },
  { test: /عدد|nombre/i, key: "count" },
];

const BRACKET = /\[([^\][\n]{1,120})\]/g;

function resolve(keys: string[], answers: Answers): string | null {
  for (const k of keys) {
    if (k === "__addr_city") {
      const a = answers.address?.trim();
      const c = answers.city?.trim();
      if (a && c) return `${a}، ${c}`;
      if (a) return a;
      if (c) return c;
      continue;
    }
    const v = answers[k];
    if (v && v.trim()) return v.trim();
  }
  return null;
}

/** Fill a template from collected answers. */
export function fillTemplate(text: string, answers: Answers): FillResult {
  const remaining: string[] = [];
  let replaced = 0;
  const filled = text.replace(BRACKET, (match, inner: string, offset: number) => {
    const content = String(inner);
    const isBlank = /^[.\s…‑-]*$/.test(content);
    let keys: string[] | null = null;

    // context before the bracket (used by blank slots and generic tokens)
    const lineStart = text.lastIndexOf("\n", offset) + 1;
    const before = text.slice(Math.max(lineStart, offset - 60), offset);

    if (!isBlank) {
      for (const rule of RULES) {
        if (rule.test.test(content)) {
          keys = rule.keys;
          break;
        }
      }
      // "Commune de [nom]" → the commune/city, not the person
      if (
        keys?.includes("name") &&
        /^(nom|الاسم)$/i.test(content) &&
        /commune|الجماعة/i.test(before)
      ) {
        keys = ["commune", "city"];
      }
    } else {
      // blank slot: pick the rule whose match appears CLOSEST to the
      // bracket (handles "الأب: X — الأم: [..]").
      let bestKey: string | null = null;
      let bestPos = -1;
      for (const cr of CONTEXT_RULES) {
        const matches = [...before.matchAll(new RegExp(cr.test.source, "gi"))];
        const last = matches[matches.length - 1];
        if (last && last.index !== undefined) {
          const end = last.index + last[0].length;
          if (end > bestPos) {
            bestPos = end;
            bestKey = cr.key;
          }
        }
      }
      keys = bestKey ? [bestKey] : null;
      // no recognized context: leave the slot for manual editing
    }

    const value = keys ? resolve(keys, answers) : null;
    if (value) {
      replaced++;
      return value;
    }
    const label = isBlank ? "………" : content.replace(/[.…]+$/, "").trim();
    if (label && !remaining.includes(label)) remaining.push(label);
    return match; // keep slot for manual editing
  });

  return { filled, remaining, replaced };
}

export type ValidationErr = "required" | "cin" | "phone" | "email" | "date" | "short" | null;

/** Validate an answer for a field. */
export function validateAnswer(field: WizardField, raw: string): ValidationErr {
  const v = raw.trim();
  if (!v) return field.required ? "required" : null;
  switch (field.type) {
    case "cin": {
      if (!/^[A-Za-z]{1,2}\s?\d{5,6}$/.test(v.replace(/\s+/g, " "))) return "cin";
      break;
    }
    case "phone": {
      const digits = v.replace(/[\s.-]/g, "");
      if (!/^(?:\+212|0)([5-7]\d{8})$/.test(digits)) return "phone";
      break;
    }
    case "email": {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
      break;
    }
    case "date": {
      if (!/^\d{1,2}[/.-]\d{1,2}[/.-]\d{4}$/.test(v) && !/^\d{4}-\d{2}-\d{2}$/.test(v)) return "date";
      break;
    }
    case "textarea": {
      if (v.length < 2) return "short";
      break;
    }
    case "text": {
      if (v.length < 1) return "short";
      break;
    }
    case "number": {
      if (!/^\d+([.,]\d+)?$/.test(v)) return "short";
      break;
    }
  }
  return null;
}

/** Validation error message for the current locale. */
export function errMessage(err: ValidationErr, locale: Locale, msgs: {
  required: string; cin: string; phone: string; email: string; date: string; short: string;
}): string {
  if (!err) return "";
  return msgs[err];
}
