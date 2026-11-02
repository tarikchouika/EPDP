import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const SHOTS = [
  { path: '/tmp/epdp-final-ar-light.png', label: 'Homepage top — Arabic RTL light mode (desktop 1440px)' },
  { path: '/tmp/epdp-services-ar.png', label: 'Documents library section — Arabic RTL light mode' },
  { path: '/tmp/epdp-links-ar.png', label: 'Official links directory section — Arabic RTL light mode' },
  { path: '/tmp/epdp-dark-en.png', label: 'Homepage — English LTR dark mode (desktop)' },
  { path: '/tmp/epdp-mobile-ar.png', label: 'Mobile 375px view' },
];

async function main() {
  const zai = await ZAI.create();
  for (const shot of SHOTS) {
    if (!fs.existsSync(shot.path)) {
      console.log(`=== ${shot.label} ===\nFILE MISSING: ${shot.path}\n`);
      continue;
    }
    const b64 = fs.readFileSync(shot.path).toString('base64');
    try {
      const res = await zai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `You are a strict UI/UX reviewer. This is a screenshot of a Moroccan public-writer services platform (EPDP). Context: ${shot.label}. Answer concisely in English: 1) Does Arabic/English text render correctly (no tofu boxes/mojibake)? 2) Is the layout intact (header, cards, buttons aligned, no overlapping or cut-off elements)? 3) Do the Moroccan colors (green/red/gold identity) show? 4) Any visual defects (blank areas, broken components, misalignment)? End with VERDICT: PASS or FAIL with one-line reason.`,
              },
              { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
            ],
          },
        ],
      });
      console.log(`=== ${shot.label} ===`);
      console.log(res.choices[0].message.content.trim());
      console.log('');
    } catch (e) {
      console.log(`=== ${shot.label} ===\nVLM ERROR: ${e.message}\n`);
    }
  }
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
