// Verify no horizontal overflow in ALL locales at given widths, on the LOCAL export.
// Usage: node scripts/verify-overflow.mjs [baseUrl]
// Requires agent-browser running; drives it via child_process.
import { execSync } from "child_process";

const BASE = process.argv[2] || "http://127.0.0.1:8788";
const LOCALES = ["ar", "fr", "en", "es", "it", "de", "ru"];
const WIDTHS = [
  [360, 740], // common Android
  [320, 568], // small phones (iPhone SE)
];

const sh = (cmd) => execSync(cmd, { encoding: "utf-8", timeout: 120000 }).trim();

// set locale via localStorage before page scripts run: navigate with ?lang= then it persists
let failures = 0;
for (const [w, h] of WIDTHS) {
  console.log(`\n=== viewport ${w}x${h} ===`);
  for (const loc of LOCALES) {
    sh(`agent-browser set viewport ${w} ${h}`);
    // open root, set locale through the UI-independent path: localStorage key used by i18n context
    sh(`agent-browser open "${BASE}"`);
    sh(`agent-browser eval "localStorage.setItem('epdp-lang','${loc}'); location.reload()"`);
    execSync("sleep 3");
    const out = sh(
      `agent-browser eval "JSON.stringify((()=>{const vw=document.documentElement.clientWidth;const doc=document.documentElement;const off=[];for(const el of document.querySelectorAll('body *')){const r=el.getBoundingClientRect();if(r.width===0||r.height===0)continue;if(Math.round(r.right)-vw>1){off.push({tag:el.tagName.toLowerCase(),cls:(typeof el.className==='string'?el.className:'').split(' ').slice(0,3).join('.'),text:(el.textContent||'').trim().slice(0,30),right:Math.round(r.right)});}}return{lang:document.documentElement.lang,scrollW:doc.scrollWidth,vw,off:off.sort((a,b)=>b.right-a.right).slice(0,5)};})())"`
    );
    try {
      const j = JSON.parse(out.replace(/^"|"$/g, "").replace(/\\"/g, '"'));
      const bad = j.scrollW > j.vw + 1 || j.off.length > 0;
      if (bad) {
        failures++;
        console.log(`FAIL ${loc}: scrollW=${j.scrollW} vw=${j.vw}`, JSON.stringify(j.off));
      } else {
        console.log(`PASS ${loc} (lang=${j.lang})`);
      }
    } catch (e) {
      failures++;
      console.log(`ERROR ${loc}: could not parse`, out.slice(0, 200));
    }
  }
}
console.log(failures === 0 ? "\nALL LOCALES CLEAN" : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
