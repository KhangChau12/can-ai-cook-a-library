// Ported from viewer/template.html's slugify() — used to derive stable,
// URL-safe route segments from Vietnamese frontmatter values (module,
// submodule, filename) rather than from on-disk directory names, which are
// inconsistently transliterated (some ASCII, some full diacritics).
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .slice(0, 60);
}
