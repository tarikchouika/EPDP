// Shared resolved types for locale-complete data.
// Runtime completeness of all 7 locales is guaranteed by the i18n overlays
// and enforced by scripts/validate-forms.ts.
import type { OfficialLink } from "./official-links";
import type { L } from "./categories";

/** An official link whose name resolves in every UI locale. */
export interface ResolvedLink extends Omit<OfficialLink, "name"> {
  name: L;
}
