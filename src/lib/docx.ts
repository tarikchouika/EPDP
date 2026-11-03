/**
 * Real Office Open XML (.docx) generator — zero dependencies.
 *
 * Why: the previous export wrote an HTML blob with a `.doc` extension, which
 * strict viewers (LibreOffice, WPS, Google Docs, mobile Office apps) reject as
 * corrupted. This module produces a genuine OOXML package (ZIP + WordprocessingML)
 * that opens and stays *editable* in every Word-compatible program.
 *
 * Pure functions only (no DOM) so the output can be unit-tested in Node.
 */

// ─────────────────────────── CRC-32 (IEEE 802.3) ───────────────────────────

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// ─────────────────────────────── ZIP (store) ───────────────────────────────

interface ZipEntry {
  name: string;
  data: Uint8Array;
}

/** Build a valid ZIP archive using the STORE (no compression) method. */
export function buildZip(entries: ZipEntry[]): Uint8Array {
  const enc = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  // Fixed DOS timestamp: 2024-01-01 00:00:00 (deterministic output).
  const dosTime = 0;
  const dosDate = ((2024 - 1980) << 9) | (1 << 5) | 1;

  const u16 = (v: number) => new Uint8Array([v & 0xff, (v >>> 8) & 0xff]);
  const u32 = (v: number) =>
    new Uint8Array([v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff]);

  for (const e of entries) {
    const nameB = enc.encode(e.name);
    const crc = crc32(e.data);
    const localOffset = offset; // offset of THIS entry's local header

    const local = [
      u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate),
      u32(crc), u32(e.data.length), u32(e.data.length), u16(nameB.length), u16(0),
      nameB, e.data,
    ];
    for (const c of local) { chunks.push(c); offset += c.length; }

    // central: sig, verMade, verNeed, flags, method, time, date, crc, comp, uncomp,
    //          nameLen, extraLen, commentLen, diskStart, internalAttr, externalAttr,
    //          localHeaderOffset, name
    central.push(concat([
      u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate),
      u32(crc), u32(e.data.length), u32(e.data.length), u16(nameB.length), u16(0),
      u16(0), u16(0), u16(0), u32(0), u32(localOffset),
      nameB,
    ]));
  }

  const centralBuf = concat(central);
  const eocd = concat([
    u32(0x06054b50), u16(0), u16(0), u16(entries.length), u16(entries.length),
    u32(centralBuf.length), u32(offset), u16(0),
  ]);
  return concat([...chunks, centralBuf, eocd]);
}

function concat(parts: Uint8Array[]): Uint8Array {
  const len = parts.reduce((s, p) => s + p.length, 0);
  const out = new Uint8Array(len);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

// ─────────────────────────────── OOXML parts ───────────────────────────────

/** Escape a string for XML character data / attribute values. */
function xmlEscape(s: string): string {
  return s
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`;

const ROOT_RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

/** One OOXML run of text. RTL runs use the complex-script font + w:rtl. */
function run(text: string, opts: { rtl: boolean; bold?: boolean; size?: number }): string {
  const rPr =
    `<w:rPr>` +
    (opts.rtl ? `<w:rtl/>` : ``) +
    (opts.bold ? `<w:b/>` : ``) +
    `<w:rFonts w:ascii="${opts.rtl ? "Arial" : "Calibri"}" w:hAnsi="${opts.rtl ? "Arial" : "Calibri"}" w:cs="${opts.rtl ? "Traditional Arabic" : "Arial"}"/>` +
    (opts.size ? `<w:sz w:val="${opts.size}"/><w:szCs w:val="${Math.round(opts.size * 1.1)}"/>` : ``) +
    `</w:rPr>`;
  return `<w:r>${rPr}<w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r>`;
}

/** One paragraph. RTL paragraphs get w:bidi so Word lays them out right-to-left. */
function para(runsXml: string, opts: { rtl: boolean; center?: boolean; after?: number; before?: number }): string {
  const spacing =
    (opts.after !== undefined || opts.before !== undefined
      ? `<w:spacing${opts.before !== undefined ? ` w:before="${opts.before}"` : ``}${opts.after !== undefined ? ` w:after="${opts.after}"` : ``}/>`
      : ``);
  const jc = opts.center ? `<w:jc w:val="center"/>` : ``;
  const bidi = opts.rtl ? `<w:bidi/>` : ``;
  return `<w:p><w:pPr>${bidi}${spacing}${jc}</w:pPr>${runsXml}</w:p>`;
}

/** Build word/document.xml for a one-page administrative template. */
export function buildDocumentXml(title: string, content: string, rtl: boolean): string {
  const body: string[] = [];

  // Title — bold, centred, larger.
  body.push(para(run(title, { rtl, bold: true, size: 30 }), { rtl, center: true, after: 240 }));

  // Body — one paragraph per line, preserving blank lines as visual spacing.
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  let prevBlank = false;
  for (const line of lines) {
    const isBlank = line.trim() === "";
    if (isBlank && prevBlank) continue; // collapse 2+ blank lines
    if (isBlank) {
      body.push(para("", { rtl, after: 120 }));
    } else {
      body.push(para(run(line, { rtl, size: 24 }), { rtl, after: 120 }));
    }
    prevBlank = isBlank;
  }

  // A4 portrait page, standard 2 cm margins, RTL section when Arabic.
  const sectPr =
    `<w:sectPr>${rtl ? `<w:bidi/>` : ``}` +
    `<w:pgSz w:w="11906" w:h="16838"/>` +
    `<w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="709" w:footer="709" w:gutter="0"/>` +
    `</w:sectPr>`;

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body.join("")}${sectPr}</w:body></w:document>`;
}

// ─────────────────────────────── public API ────────────────────────────────

/** Generate a genuine .docx package for a template document. */
export function generateDocx(title: string, content: string, rtl: boolean): Uint8Array {
  const enc = new TextEncoder();
  return buildZip([
    { name: "[Content_Types].xml", data: enc.encode(CONTENT_TYPES) },
    { name: "_rels/.rels", data: enc.encode(ROOT_RELS) },
    { name: "word/document.xml", data: enc.encode(buildDocumentXml(title, content, rtl)) },
  ]);
}
