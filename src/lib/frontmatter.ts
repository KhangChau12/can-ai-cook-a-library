// Ported from viewer/build-data.js's parseFrontmatter(). Deliberately NOT a
// real YAML parser: frontmatter values routinely contain unescaped colons
// (Vietnamese prose with "?", ":", titles like "X — Y: Z") that are valid
// under this lenient line-based convention but reject under strict YAML
// (verified: every one of the 121 lesson files fails js-yaml/gray-matter
// parsing for this exact reason). This line-based parser is the one the
// entire corpus was actually authored against, so it's the correct choice
// here rather than "more standard."
export interface ParsedFrontmatter {
  meta: Record<string, string | string[]>;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedFrontmatter {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const [, fmBlock, body] = match;
  const meta: Record<string, string | string[]> = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) continue;
    let [, key, value] = m;
    value = value.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      meta[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body: body.trim() };
}
