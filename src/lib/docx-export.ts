/**
 * Client-side document export.
 *
 * Exports REAL files (fixes the old corrupted downloads):
 *  • Word  — genuine OOXML .docx built by lib/docx.ts (opens & stays editable
 *            in MS Word, LibreOffice, WPS, Google Docs — verified in CI).
 *  • PDF   — native browser/WebView print of the on-page print area
 *            (real PDF with correct Arabic shaping, produced by the print engine).
 *
 * Android APK: the WebView cannot download blob: URLs, so the app injects
 * `window.EPDPNative` (JavascriptInterface). When present we hand the file to
 * the native bridge (MediaStore → Downloads) and the print job to PrintManager.
 */

import { generateDocx } from "./docx";

/** True when running inside the EPDP Android app (native bridge available). */
export function isNativeApp(): boolean {
  return typeof window !== "undefined" && "EPDPNative" in window;
}

/** Sanitise a file name, keeping Arabic letters (they are valid on all modern OS). */
function safeName(title: string): string {
  const cleaned = title.replace(/[\\/:*?"<>|\n\r\t]+/g, "-").replace(/\s+/g, " ").trim();
  return cleaned.length > 80 ? cleaned.slice(0, 80).trim() : cleaned || "document";
}

/** Download the template as a genuine, editable Word (.docx) file. */
export function downloadWord(title: string, content: string, rtl: boolean) {
  const bytes = generateDocx(title, content, rtl);
  const name = `${safeName(title)}.docx`;

  const native = (window as unknown as { EPDPNative?: { saveFile(n: string, b64: string, m: string): void } }).EPDPNative;
  if (native?.saveFile) {
    // Android app: bytes → base64 → MediaStore/Downloads via the JS bridge.
    let bin = "";
    const step = 0x8000;
    for (let i = 0; i < bytes.length; i += step) {
      bin += String.fromCharCode(...bytes.subarray(i, i + step));
    }
    try {
      native.saveFile(name, btoa(bin), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
      return;
    } catch {
      /* fall through to browser path */
    }
  }

  // Browsers: standard blob download.
  const blob = new Blob([bytes as unknown as BlobPart], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Export the on-page template as PDF via the platform print engine. */
export function downloadPdf() {
  const native = (window as unknown as { EPDPNative?: { print(): void } }).EPDPNative;
  if (native?.print) {
    native.print(); // Android: PrintManager → "Save as PDF"
    return;
  }
  window.print(); // Browsers: print dialog → "Save as PDF"
}
