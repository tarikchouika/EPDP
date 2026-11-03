/** Client-side Word (.doc) export for document templates. */
export function downloadWord(title: string, content: string, rtl: boolean) {
  const escaped = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${title}</title></head><body dir="${rtl ? "rtl" : "ltr"}" style="font-family:'Traditional Arabic','Sakkal Majalla','Times New Roman',serif;font-size:14pt;line-height:2.1;white-space:pre-wrap;">${escaped.replace(/\n/g, "<br>")}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.replace(/[\\/:*?"<>|]/g, "-")}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
