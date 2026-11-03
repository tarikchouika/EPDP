# Real-forms continuation runbook (scheduled rounds)

Goal: give every templated document (83 total, list in `catalog.json`) a
**real-world template text** verified against katib.ma / onebox.ma /
namodaj.ma, plus a provenance link — replacing generic wording with the
actual Moroccan administrative practice.

## State files

- `scripts/real-forms/catalog.json` — all 83 templated docs (id, ar, fr, popular)
- `scripts/real-forms/queue.json` — URL discovery state (per doc)
- `scripts/real-forms/fetched/*.json` — fetched real texts (one file per doc)
- `scripts/real-forms/sources-only.json` — provenance links without text yet
- `src/lib/data/real-templates.ts` — GENERATED (do not edit)
- `src/lib/data/real-sources.ts` — GENERATED (do not edit)

## Procedure per round

1. **Pick the next batch** — docs in `catalog.json` (popular first) that have
   no file in `fetched/` yet. Aim for 10–15 docs per round.

2. **Find the source URL** for each doc:
   - katib.ma slugs are the Arabic title with `-` separators:
     `https://katib.ma/document/<title-with-dashes>/` (URL-encoded).
   - Verify/match via `WebFetch` on the URL, or `z-ai function -n web_search
     -a '{"query":"site:katib.ma <title>","num":5}'`.
   - namodaj.ma / onebox.ma: same approach (`site:namodaj.ma …`).
   - If nothing matches, record `"status": "notfound"` in queue.json and skip.

3. **Fetch the real text** with the `WebFetch` tool on the document page.
   Prompt to use (keeps answers small):
   > Quote ONLY the document template text shown on this page (the fillable
   > administrative form content, from first line to signature line). If this
   > is an error page or 404, reply exactly: PAGE NOT FOUND.

4. **Save** to `scripts/real-forms/fetched/<doc-id>.json`:
   ```json
   {"id": "<doc-id>", "source": "katib.ma", "url": "<page url>",
    "lang": "ar" | "fr", "text": "<real template text>"}
   ```
   If both AR and FR pages exist, save two files: `<id>.json` and `<id>.fr.json`
   with the right `lang`. Keep katib's wording EXACTLY (it is the real practice).

5. **Apply + measure**: `python3 scripts/real-forms/apply.py`
   (regenerates real-templates.ts / real-sources.ts, prints coverage %).

6. **Rebuild + verify**:
   ```
   cp next.config.ts /tmp/nc.bak && cp scripts/export-next.config.ts next.config.ts
   bunx next build && mv /tmp/nc.bak next.config.ts
   python3 scripts/qa-scan.py
   bunx tsx scripts/validate-forms.ts
   ```

7. **Commit + push** (triggers Cloudflare Pages deploy):
   ```
   git add -A && git commit -m "real-forms: batch N — <count> verified templates (coverage X%)" && git push <remote> main
   ```

8. **When ALL 83 docs have real texts** (coverage 100%): delete this cron job
   (name: "EPDP real-forms continuation") and report final coverage.

## Rules

- NEVER invent template text — only what WebFetch actually returned.
- Keep existing achievements intact (CJK-clean, 7-locale i18n, mobile no-overflow).
- If WebFetch hits its per-message limit, that round just does fewer docs —
  the next scheduled round continues automatically.
- If a push fails on credentials, stop and report (do not loop).
