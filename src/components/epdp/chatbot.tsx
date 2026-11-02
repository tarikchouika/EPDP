"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { chatIntents, findIntent } from "@/lib/chatbot/knowledge";
import { getLink } from "@/lib/data/official-links";
import { Button } from "@/components/ui/button";
import { Bot, Send, X, Landmark, MessageCircle, ExternalLink, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
  sources?: string[]; // official link ids
  suggestions?: string[];
  action?: "open-filler";
}

const initialSuggestions = ["carte-nationale", "passeport", "amo-tadamon", "acte-naissance", "cnss"];

export function Chatbot() {
  const { dict, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ role: "bot", text: dict.chat.greeting, suggestions: initialSuggestions }]);
  }, [locale, dict.chat.greeting]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);

    setTimeout(
      () => {
        const intent = findIntent(text, locale);
        const reply: Message = intent
          ? {
              role: "bot",
              text: intent.answer[locale],
              sources: intent.sources,
              suggestions: intent.suggestions,
              action: intent.id === "fill-document" ? "open-filler" : undefined,
            }
          : { role: "bot", text: dict.chat.fallback, suggestions: ["official-links", "documents"] };
        setTyping(false);
        setMessages((m) => [...m, reply]);
      },
      600 + Math.random() * 500
    );
  };

  const suggestionIntent = (id: string) => {
    const intent = chatIntents.find((i) => i.id === id);
    if (!intent) return;
    const label = intent.keywords[locale]?.[0] ?? intent.keywords.ar?.[0] ?? "";
    send(label);
  };

  const lastBot = [...messages].reverse().find((m) => m.role === "bot");
  const chips = typing ? [] : lastBot?.suggestions ?? initialSuggestions;

  return (
    <>
      {/* Floating toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? dict.common.close : dict.chat.openLabel}
        className={`fixed bottom-5 end-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all ${
          open
            ? "bg-secondary text-secondary-foreground rotate-0"
            : "bg-primary text-primary-foreground hover:scale-105"
        }`}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 end-5 z-50 flex h-[min(600px,75vh)] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          role="dialog"
          aria-label={dict.chat.title}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b bg-primary px-4 py-3.5 text-primary-foreground">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Bot className="h-6 w-6" />
              <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full border-2 border-primary bg-emerald-400" />
            </span>
            <div className="min-w-0">
              <p className="font-display font-bold text-sm leading-tight">{dict.chat.title}</p>
              <p className="text-[11px] opacity-85">{dict.chat.subtitle}</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto scroll-moroccan bg-muted/20 px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%]">
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-[13px] leading-6 shadow-sm ${
                      m.role === "user"
                        ? "rounded-ee-sm bg-primary text-primary-foreground"
                        : "rounded-es-sm border border-border bg-card text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.action === "open-filler" && (
                    <button
                      onClick={() => {
                        document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
                        window.dispatchEvent(new CustomEvent("epdp-open-filler", { detail: "" }));
                      }}
                      className="mt-2 inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
                    >
                      <Sparkles className="h-4 w-4 text-gold" />
                      {dict.filler.title}
                    </button>
                  )}

                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 space-y-1.5">
                      <p className="text-[10px] font-bold text-muted-foreground">
                        {dict.chat.sourcesLabel}:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.sources.map((id) => {
                          const link = getLink(id);
                          if (!link) return null;
                          return (
                            <a
                              key={id}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/5 px-2.5 py-1 text-[10px] font-bold text-primary hover:bg-primary/10"
                            >
                              <Landmark className="h-3 w-3" />
                              <span dir="auto">
                                {locale === "fr" ? link.name.fr : link.name.en}
                              </span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-es-sm border border-border bg-card px-4 py-3 shadow-sm">
                  <span className="epdp-dot h-2 w-2 rounded-full bg-primary" />
                  <span className="epdp-dot h-2 w-2 rounded-full bg-primary" />
                  <span className="epdp-dot h-2 w-2 rounded-full bg-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestion chips */}
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-border/60 bg-card px-3 py-2.5">
              {chips.slice(0, 4).map((id) => {
                const intent = chatIntents.find((i) => i.id === id);
                if (!intent) return null;
                return (
                  <button
                    key={id}
                    onClick={() => suggestionIntent(id)}
                    className="rounded-full border border-gold/50 bg-accent px-3 py-1 text-[11px] font-bold text-primary hover:bg-accent/70"
                  >
                    {intent.keywords[locale]?.[0] ?? intent.keywords.ar?.[0] ?? id}
                  </button>
                );
              })}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border bg-card p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={dict.chat.placeholder}
                aria-label={dict.chat.placeholder}
                className="h-11 flex-1 rounded-xl border border-input bg-background px-4 text-[13px] outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              <Button type="submit" size="sm" className="h-11 w-11 p-0" aria-label={dict.chat.sendLabel}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-2 text-center text-[10px] leading-4 text-muted-foreground">
              {dict.chat.disclaimer}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
