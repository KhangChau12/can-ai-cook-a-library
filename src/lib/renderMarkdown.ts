import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

export interface Heading {
  depth: number;
  text: string;
  id: string;
}

// Lesson/quiz bodies are plain Markdown (never JSX/MDX components — see
// CLAUDE.md 2.2/2.6), so they're rendered through remark/rehype directly
// rather than through an MDX/JSX compiler, which would choke on literal
// "<" in prose (e.g. token names like <SOT> in the Whisper lesson).
function makeProcessor() {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark-dimmed',
      keepBackground: false,
    })
    .use(rehypeStringify);
}

const processor = makeProcessor();

// Base path this site is served under (GitHub Pages project site — see
// astro.config.mjs `base`). Read from env at build time so this stays in
// sync without hardcoding the same string twice; falls back to '/' for
// local dev where BASE_URL isn't the GH Pages prefix.
const SITE_BASE = process.env.ASTRO_BASE_URL || '/can-ai-cook-a-library/';

// Content authors write in-body links like "(09-backpropagation.mdx)" —
// a convention from when lessons lived in a flat single-track directory
// and were never actually clickable (the old viewer didn't resolve them
// either). Now that every lesson has a real route, rewrite these to the
// looked-up route id (keyed by filename-without-numeric-prefix, since the
// prose still references the pre-restructure global numbering) so
// cross-lesson links work.
function rewriteInternalLinks(tree: any, filenameToId: Map<string, string>) {
  visit(tree, 'element', (node: any) => {
    if (node.tagName !== 'a' || !node.properties?.href) return;
    const href = String(node.properties.href);
    if (!href.endsWith('.mdx') || /^([a-z]+:)?\/\//.test(href)) return;
    const filename = href.split('/').pop()!.replace(/\.mdx$/, '').replace(/^\d+-/, '');
    const id = filenameToId.get(filename);
    if (id) node.properties.href = `${SITE_BASE}${id}/`;
  });
}

export async function renderMarkdown(
  body: string,
  filenameToId: Map<string, string> = new Map(),
): Promise<{ html: string; headings: Heading[] }> {
  const tree = processor.parse(body);
  const transformed = await processor.run(tree);

  rewriteInternalLinks(transformed, filenameToId);

  const headings: Heading[] = [];
  visit(transformed as any, 'element', (node: any) => {
    if (/^h[2-3]$/.test(node.tagName)) {
      const id = node.properties?.id;
      if (!id) return;
      const text = collectText(node);
      headings.push({ depth: Number(node.tagName[1]), text, id });
    }
  });

  const html = processor.stringify(transformed as any) as string;
  return { html, headings };
}

function collectText(node: any): string {
  if (node.type === 'text') return node.value;
  if (!node.children) return '';
  return node.children.map(collectText).join('');
}
