"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { allDocuments, getTemplate, type DocumentItem } from "@/lib/data/registry";
import { getPlan, type Answers, type WizardField } from "@/lib/wizard/fields";
import { fillTemplate, validateAnswer, type FillResult } from "@/lib/wizard/fill";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Bot, Search, Sparkles, Send, Check, Copy, Printer, Download,
  PencilLine, RefreshCw, RotateCcw, FileText, Lock,
} from "lucide-react";

interface Msg {
  role: "bot" | "user";
  text: string;
}

type Phase = "idle" | "collect" | "review" | "done";

export function DocumentAssistant() {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const f = dict.filler;

  const [query, setQuery] = useState("");
  const [doc, setDoc] = useState<DocumentItem | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [plan, setPlan] = useState<WizardField[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [docLang, setDocLang] = useState<"ar" | "fr">("ar");
  const [result, setResult] = useState<FillResult | null>(null);
  const [finalText, setFinalText] = useState("");

  const listRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const rtl = locale === "ar";

  /** Documents with a fillable template. */
  const fillable = useMemo(
    () => allDocuments.filter((d) => getTemplate(d.templateId) !== null),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return fillable;
    return fillable.filter((d) =>
      [d.title.ar, d.title.fr, ...d.keywords, d.desc.ar, d.desc.fr, d.desc.en]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query, fillable]);

  const scrollChat = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  const botSay = useCallback(
    (text: string) => {
      setMessages((m) => [...m, { role: "bot", text }]);
      scrollChat();
    },
    [scrollChat]
  );

  /** Start a document. */
  const startDoc = useCallback(
    (d: DocumentItem) => {
      const p = getPlan(d);
      setDoc(d);
      setPlan(p);
      setStep(0);
      setAnswers({});
      setResult(null);
      setFinalText("");
      setEditingKey(null);
      setPhase("collect");
      setMessages([]);
      const title = locale === "fr" ? d.title.fr : d.title.ar;
      botSay(
        locale === "fr"
          ? `Très bien ! Remplissons « ${title} ». J'ai ${p.length} questions à vous poser. Vos données restent dans votre navigateur.`
          : `ممتاز! لنملأ «${title}». لديّ ${p.length} أسئلة. بياناتك تبقى في متصفحك فقط.`
      );
      botSay(`${p[0].label[locale]}${p[0].required ? "" : ` (${f.optional})`}`);
      setDocLang("ar");
      setTimeout(() => inputRef.current?.focus(), 200);
    },
    [locale, f.optional, botSay]
  );

  /** External opener: epdp-open-filler event (from chatbot / doc dialog). */
  useEffect(() => {
    const handler = (e: Event) => {
      const id = ((e as CustomEvent).detail ?? "") as string;
      if (!id) {
        // No specific document: scroll here and nudge the user.
        if (phase === "idle" && messages.length === 0) {
          botSay(dict.filler.idleIntro);
        }
        return;
      }
      const d = allDocuments.find((x) => x.id === id);
      if (!d || !getTemplate(d.templateId)) return;
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      startDoc(d);
    };
    window.addEventListener("epdp-open-filler", handler);
    return () => window.removeEventListener("epdp-open-filler", handler);
  }, [startDoc, phase, messages.length, botSay, dict.filler.idleIntro]);

  const askCurrent = useCallback(
    (idx: number) => {
      const field = plan[idx];
      if (!field) return;
      botSay(`${field.label[locale]}${field.required ? "" : ` (${f.optional})`}`);
    },
    [plan, locale, f.optional, botSay]
  );

  /** Generate the document from answers. */
  const generate = useCallback(
    (lang: "ar" | "fr", ans: Answers) => {
      const tpl = doc ? getTemplate(doc.templateId) : null;
      if (!tpl) return null;
      const r = fillTemplate(tpl[lang], ans);
      setResult(r);
      setFinalText(r.filled);
      setPhase("review");
      return r;
    },
    [doc]
  );

  const submit = () => {
    const text = input.trim();
    if (!text || phase !== "collect") return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    scrollChat();

    const field = plan[step];
    if (!field) return;
    const err = validateAnswer(field, text);
    if (err) {
      botSay(`⚠️ ${f.validation[err === "required" ? "required" : err]}`);
      askCurrent(step);
      return;
    }
    const next = { ...answers, [field.key]: text };
    setAnswers(next);
    const isLast = step + 1 >= plan.length;
    if (isLast) {
      botSay(
        locale === "fr"
          ? "Merci ! J'ai tout ce qu'il faut. Voici la version préliminaire pour vérification et retouche."
          : "شكراً! اكتملت البيانات. هذه مسودة الوثيقة للمراجعة والتحرير."
      );
      generate(docLang, next);
    } else {
      setStep(step + 1);
      askCurrent(step + 1);
    }
  };

  const skip = () => {
    const field = plan[step];
    if (!field || field.required) return;
    setMessages((m) => [...m, { role: "user", text: `— ${f.skip} —` }]);
    const isLast = step + 1 >= plan.length;
    if (isLast) {
      botSay(
        locale === "fr"
          ? "C'est noté. Voici la version préliminaire."
          : "تم التسجيل. إليك المسودة."
      );
      generate(docLang, answers);
    } else {
      setStep(step + 1);
      askCurrent(step + 1);
    }
  };

  /** Re-ask a field for editing (from review chips). */
  const editField = (key: string) => {
    const idx = plan.findIndex((p) => p.key === key);
    if (idx < 0) return;
    setEditingKey(key);
    setPhase("collect");
    setStep(idx);
    botSay(
      locale === "fr"
        ? `Modifions cette donnée : ${plan[idx].label[locale]} (la valeur actuelle : ${answers[key] ?? "—"})`
        : `لنعدّل هذه البيانات: ${plan[idx].label[locale]} (القيمة الحالية: ${answers[key] ?? "—"})`
    );
  };

  const onEditSubmit = () => {
    const text = input.trim();
    if (!text || editingKey === null) return;
    const field = plan[step];
    const err = validateAnswer(field, text);
    if (err) {
      botSay(`⚠️ ${f.validation[err]}`);
      return;
    }
    setInput("");
    const next = { ...answers, [editingKey]: text };
    setAnswers(next);
    setMessages((m) => [...m, { role: "user", text }]);
    setEditingKey(null);
    botSay(
      locale === "fr"
        ? "Modification enregistrée ✓. La version préliminaire est mise à jour."
        : "تم التعديل ✓. تم تحديث المسودة."
    );
    generate(docLang, next);
  };

  const regenerate = () => {
    generate(docLang, answers);
    toast({ description: f.regenerate + " ✓" });
  };

  const switchLang = (lang: "ar" | "fr") => {
    if (lang === docLang) return;
    setDocLang(lang);
    const r = fillTemplate(getTemplate(doc!.templateId)![lang], answers);
    setResult(r);
    setFinalText(r.filled);
  };

  const copyDoc = () => {
    navigator.clipboard.writeText(finalText).then(() => {
      toast({ description: dict.services.copied });
    });
  };

  const downloadWord = () => {
    const title = docLang === "ar" ? doc!.title.ar : doc!.title.fr;
    const escaped = finalText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${title}</title></head><body dir="${docLang === "ar" ? "rtl" : "ltr"}" style="font-family:'Traditional Arabic','Sakkal Majalla','Times New Roman',serif;font-size:14pt;line-height:2.1;white-space:pre-wrap;">${escaped.replace(/\n/g, "<br>")}</body></html>`;
    const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/[\\/:*?"<>|]/g, "-")}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const answeredCount = plan.filter((p) => answers[p.key]).length;
  const progress = plan.length ? Math.round((answeredCount / plan.length) * 100) : 0;

  return (
    <section id="assistant" ref={sectionRef} className="border-y border-border/60 bg-muted/30 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {f.badge}
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
            {f.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">{f.subtitle}</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold text-primary">
            <Lock className="h-3.5 w-3.5" />
            {f.privacy}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Doc picker ── */}
          <div className="flex max-h-[640px] flex-col rounded-2xl border border-border bg-card shadow-sm">
            <div className="border-b border-border/70 px-4 py-3">
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <FileText className="h-4 w-4 text-primary" />
                {f.pickTitle}
              </h3>
              <div className="relative mt-2">
                <Search className="absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={f.pickHint}
                  aria-label={f.pickHint}
                  className="h-11 w-full rounded-xl border border-input bg-background ps-10 pe-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>
            <div className="epdp-scroll flex-1 overflow-y-auto scroll-moroccan p-3" role="listbox" aria-label={f.pickTitle}>
              {filtered.length === 0 && (
                <p className="py-10 text-center text-sm text-muted-foreground">{f.pickNone}</p>
              )}
              <ul className="space-y-2">
                {filtered.slice(0, 60).map((d) => {
                  const active = doc?.id === d.id;
                  return (
                    <li key={d.id}>
                      <button
                        onClick={() => startDoc(d)}
                        className={`w-full rounded-xl border p-3 text-start transition-all ${
                          active
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-border/70 bg-card hover:border-gold hover:bg-muted/40"
                        }`}
                      >
                        <p className="text-sm font-bold leading-6" dir="rtl">{d.title.ar}</p>
                        <p className="text-[11px] font-semibold text-muted-foreground" dir="ltr">{d.title.fr}</p>
                        <span
                          className={`mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold ${
                            active ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {active ? <Check className="h-3 w-3" /> : null}
                          {active ? f.answered + " ✓" : f.open}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ── Chat panel ── */}
          <div className="flex max-h-[640px] min-h-[420px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {/* header */}
            <div className="flex items-center justify-between gap-2 border-b border-border/70 bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <Bot className="h-6 w-6" />
                  <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full border-2 border-primary bg-emerald-400" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold leading-tight">{f.title}</p>
                  <p className="text-[11px] opacity-85" dir="rtl">
                    {doc ? doc.title.ar : f.badge}
                  </p>
                </div>
              </div>
              {doc && (
                <button
                  onClick={() => {
                    setDoc(null);
                    setPhase("idle");
                    setMessages([]);
                    setAnswers({});
                    setResult(null);
                  }}
                  className="rounded-lg bg-primary-foreground/15 px-3 py-1.5 text-[11px] font-bold hover:bg-primary-foreground/25"
                >
                  {f.another}
                </button>
              )}
            </div>

            {/* progress */}
            {phase === "collect" && plan.length > 0 && (
              <div className="border-b border-border/70 bg-muted/40 px-4 py-2" dir={rtl ? "rtl" : "ltr"}>
                <div className="mb-1.5 flex justify-between text-[11px] font-bold text-muted-foreground">
                  <span>{f.answered} {answeredCount} {f.of} {plan.length} {f.questions}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}

            {/* messages */}
            <div ref={listRef} className="epdp-scroll flex-1 space-y-3 overflow-y-auto scroll-moroccan bg-muted/20 px-4 py-4">
              {phase === "idle" && messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-es-sm border border-border bg-card px-4 py-3 text-[13px] leading-6 shadow-sm">
                    {f.idleIntro}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[13px] leading-7 shadow-sm ${
                      m.role === "user"
                        ? "rounded-ee-sm bg-primary text-primary-foreground"
                        : "rounded-es-sm border border-border bg-card text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* review / done panel */}
            {(phase === "review" || phase === "done") && result && (
              <div className="max-h-[46vh] space-y-3 overflow-y-auto scroll-moroccan border-t border-border/70 bg-muted/30 px-4 py-4">
                {/* answered chips */}
                <div>
                  <p className="mb-2 text-[11px] font-bold text-muted-foreground">
                    {f.reviewTitle} — {f.reviewHint}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.filter((p) => answers[p.key]).map((p) => (
                      <button
                        key={p.key}
                        onClick={() => editField(p.key)}
                        className="inline-flex max-w-full items-center gap-1 rounded-full border border-gold/50 bg-accent px-2.5 py-1 text-[11px] font-bold text-primary hover:bg-accent/70"
                      >
                        <PencilLine className="h-3 w-3 shrink-0" />
                        <span dir="auto" className="truncate">
                          {p.label[locale]}: {answers[p.key]}
                        </span>
                      </button>
                    ))}
                    <button
                      onClick={() => generate(docLang, answers)}
                      className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/5 px-2.5 py-1 text-[11px] font-bold text-primary hover:bg-primary/10"
                    >
                      <RefreshCw className="h-3 w-3" />
                      {f.regenerate}
                    </button>
                  </div>
                </div>

                {/* remaining slots */}
                {result.remaining.length > 0 && phase === "review" && (
                  <div className="rounded-xl border border-secondary/40 bg-secondary/5 p-3">
                    <p className="text-[11px] font-bold text-secondary">
                      {f.remaining} ({result.remaining.length})
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{f.remainingHint}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {result.remaining.slice(0, 12).map((r) => (
                        <span key={r} className="inline-flex items-center gap-1 rounded-full border border-secondary/40 bg-card px-2 py-0.5 text-[11px] font-semibold text-secondary" dir="auto">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* doc language + status */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex rounded-lg border border-border bg-card p-1">
                    {(["ar", "fr"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLang(l)}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                          docLang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {l === "ar" ? f.docLangAr : f.docLangFr}
                      </button>
                    ))}
                  </div>
                  {phase === "review" && (
                    <Button size="sm" className="font-bold" onClick={() => setPhase("done")}>
                      <PencilLine className="h-4 w-4" />
                      {f.generate}
                    </Button>
                  )}
                </div>

                {phase === "review" ? (
                  <pre
                    dir={docLang === "ar" ? "rtl" : "ltr"}
                    className="epdp-doc whitespace-pre-wrap rounded-xl border border-border bg-card p-5 text-[13px] leading-8"
                  >
                    {result.filled}
                  </pre>
                ) : (
                  <>
                    <p className="text-[11px] font-bold text-primary">{f.doneTitle} — {f.doneHint}</p>
                    <textarea
                      value={finalText}
                      onChange={(e) => setFinalText(e.target.value)}
                      dir={docLang === "ar" ? "rtl" : "ltr"}
                      rows={10}
                      className="epdp-doc w-full rounded-xl border border-input bg-card p-4 text-[13px] leading-8 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="font-bold" onClick={() => window.print()}>
                        <Printer className="h-4 w-4" />
                        {f.print}
                      </Button>
                      <Button size="sm" variant="outline" className="font-bold" onClick={copyDoc}>
                        <Copy className="h-4 w-4" />
                        {f.copy}
                      </Button>
                      <Button size="sm" variant="outline" className="font-bold" onClick={downloadWord}>
                        <Download className="h-4 w-4" />
                        {f.word}
                      </Button>
                      <Button size="sm" variant="ghost" className="font-bold" onClick={() => setPhase("review")}>
                        <RotateCcw className="h-4 w-4" />
                        {f.editAnswers}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* input */}
            <div className="border-t border-border/70 bg-card p-3">
              {phase === "collect" ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (editingKey !== null) onEditSubmit();
                    else submit();
                  }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={plan[step]?.ph?.[locale] ?? f.pickHint}
                    aria-label={f.send}
                    className="h-11 flex-1 rounded-xl border border-input bg-background px-4 text-[13px] outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {plan[step] && !plan[step].required && (
                    <Button type="button" size="sm" variant="outline" className="h-11 font-bold" onClick={skip}>
                      {f.skip}
                    </Button>
                  )}
                  <Button type="submit" size="sm" className="h-11 w-11 p-0" aria-label={f.send}>
                    {editingKey !== null ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  </Button>
                </form>
              ) : (
                <p className="py-2 text-center text-[11px] font-semibold text-muted-foreground">
                  {f.privacy}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* print-only final document */}
      {phase === "done" && (
        <div id="epdp-print" dir={docLang === "ar" ? "rtl" : "ltr"} className="epdp-print">
          {finalText}
        </div>
      )}
    </section>
  );
}
