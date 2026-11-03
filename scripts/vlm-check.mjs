// VLM check helper: node scripts/vlm-check.mjs <image-path> "<prompt>"
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const [file, prompt] = process.argv.slice(2);
if (!file || !fs.existsSync(file)) {
  console.error('usage: vlm-check.mjs <image> <prompt>');
  process.exit(1);
}
const b64 = fs.readFileSync(file).toString('base64');
const zai = await ZAI.create();
const response = await zai.chat.completions.createVision({
  model: 'glm-4.6v',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: prompt ?? 'Describe this image concisely.' },
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
      ],
    },
  ],
  thinking: { type: 'disabled' },
});
console.log(response.choices?.[0]?.message?.content?.trim() ?? JSON.stringify(response).slice(0, 500));
