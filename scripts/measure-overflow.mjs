// Measure horizontal overflow: node scripts/measure-overflow.mjs <url> [locale]
// Used inside agent-browser context via eval — this file documents/duplicates the injected JS.
const MEASURE_JS = `
(() => {
  const vw = document.documentElement.clientWidth;
  const doc = document.documentElement;
  const out = { viewport: vw, scrollW: doc.scrollWidth, overflow: doc.scrollWidth > vw + 1, offenders: [] };
  const all = document.querySelectorAll('body *');
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const over = Math.round(r.right - vw);
    if (over > 1) {
      const cs = getComputedStyle(el);
      out.offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && typeof el.className === 'string' ? el.className : '').split(' ').slice(0,4).join('.'),
        text: (el.textContent || '').trim().slice(0, 40),
        right: Math.round(r.right), w: Math.round(r.width),
        overflowWrap: cs.overflowWrap, whiteSpace: cs.whiteSpace,
      });
    }
  }
  // dedupe: keep top 12 by overflow
  out.offenders = out.offenders.sort((a,b) => b.right - a.right).slice(0, 12);
  return JSON.stringify(out);
})()
`;
console.log(MEASURE_JS);
