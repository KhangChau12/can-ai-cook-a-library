import { defineCollection, z } from 'astro:content';
import type { Loader } from 'astro/loaders';
import fg from 'fast-glob';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slugify } from './lib/slugify';
import { renderMarkdown } from './lib/renderMarkdown';
import { parseQuiz } from './lib/quizParser';
import { parseFrontmatter } from './lib/frontmatter';

const CONTENT_ROOT = new URL('../content/', import.meta.url);

function fileSlug(entryPath: string): string {
  const base = path.basename(entryPath);
  return base.replace(/\.mdx$/, '').replace(/\.quiz$/, '');
}

// Custom loader (not the built-in glob loader): lesson/quiz files are plain
// Markdown, never JSX, so they're parsed with gray-matter + our own
// remark/rehype pipeline instead of being routed through Astro's MDX entry
// type, which would try (and fail) to compile literal "<TOKEN>"-style prose
// as JSX. This also lets us derive route-stable IDs from frontmatter
// (module/submodule/title) instead of from inconsistently-transliterated
// on-disk directory names.
function idFor(entry: string, data: Record<string, unknown>): string {
  const isIndex = entry.endsWith('_index.mdx');
  const track = String(data.track ?? entry.split('/')[0]);
  if (isIndex) return `${track}/_index`;
  const moduleSlug = slugify(String(data.module ?? ''));
  const submoduleSlug = data.submodule ? slugify(String(data.submodule)) : '';
  const lessonSlug = slugify(fileSlug(entry).replace(/^\d+-/, ''));
  return [track, moduleSlug, submoduleSlug, lessonSlug].filter(Boolean).join('/');
}

function lessonsLoader(): Loader {
  return {
    name: 'lessons-loader',
    load: async ({ store, generateDigest, logger }) => {
      const root = fileURLToPath(CONTENT_ROOT);
      const files = await fg(['**/*.mdx', '!**/*.quiz.mdx'], { cwd: root });
      store.clear();

      // Pass 1: read frontmatter only, build filename -> route id lookup so
      // in-body links like "(09-backpropagation.mdx)" (a convention that
      // predates real routing and never resolved to anything clickable in
      // the old viewer either) can be rewritten to real lesson URLs.
      const parsed = new Map<string, { data: Record<string, unknown>; content: string; raw: string }>();
      // Keyed by filename-without-numeric-prefix, not raw filename: links in
      // prose reference the pre-restructure global numbering (e.g.
      // "09-backpropagation.mdx"), which no longer matches the current
      // per-module numbering ("02-backpropagation.mdx") after the 2026-07-08
      // module/submodule reorganization. The slug portion is stable across
      // both schemes.
      const filenameToId = new Map<string, string>();
      for (const entry of files) {
        const raw = await fs.readFile(path.join(root, entry), 'utf-8');
        const { meta: data, body: content } = parseFrontmatter(raw);
        parsed.set(entry, { data, content, raw });
        if (!entry.endsWith('_index.mdx')) {
          const key = fileSlug(entry).replace(/^\d+-/, '');
          filenameToId.set(key, idFor(entry, data));
        }
      }

      // Pass 2: render, rewriting internal .mdx links via the lookup above.
      for (const [entry, { data, content, raw }] of parsed) {
        const { html, headings } = await renderMarkdown(content, filenameToId);
        const id = idFor(entry, data);
        const digest = generateDigest({ raw });
        store.set({
          id,
          data: {
            ...data,
            html,
            headings,
            sourcePath: entry,
          },
          digest,
        });
        logger.debug(`Loaded lesson ${id} <- ${entry}`);
      }
    },
  };
}

function quizzesLoader(): Loader {
  return {
    name: 'quizzes-loader',
    load: async ({ store, generateDigest, logger }) => {
      const root = fileURLToPath(CONTENT_ROOT);
      const files = await fg(['**/*.quiz.mdx'], { cwd: root });
      store.clear();
      for (const entry of files) {
        const fullPath = path.join(root, entry);
        const raw = await fs.readFile(fullPath, 'utf-8');
        const { meta: data, body: content } = parseFrontmatter(raw);
        const questions = parseQuiz(content);
        const id = entry.replace(/\.quiz\.mdx$/, '');
        const digest = generateDigest({ raw });
        store.set({
          id,
          data: {
            quiz_for: String(data.quiz_for ?? fileSlug(entry)),
            questions,
            sourcePath: entry,
          },
          digest,
        });
        logger.debug(`Loaded quiz for ${data.quiz_for} <- ${entry}`);
      }
    },
  };
}

const lessons = defineCollection({
  loader: lessonsLoader(),
  schema: z.object({
    title: z.string(),
    track: z.enum(['exam-track', 'foundations-track']),
    module: z.string().optional(),
    submodule: z.string().optional(),
    order: z.coerce.number().optional(),
    status: z.enum(['draft', 'needs-review', 'stable']).optional(),
    prerequisites: z.array(z.string()).default([]),
    summary: z.string().optional(),
    last_touched_by_task: z.string().optional(),
    html: z.string().optional(),
    headings: z
      .array(z.object({ depth: z.number(), text: z.string(), id: z.string() }))
      .default([]),
    sourcePath: z.string(),
  }),
});

const quizzes = defineCollection({
  loader: quizzesLoader(),
  schema: z.object({
    quiz_for: z.string(),
    questions: z.array(
      z.object({
        prompt: z.string(),
        options: z.array(z.object({ text: z.string(), correct: z.boolean() })),
        explanation: z.string(),
      }),
    ),
    sourcePath: z.string(),
  }),
});

export const collections = { lessons, quizzes };
