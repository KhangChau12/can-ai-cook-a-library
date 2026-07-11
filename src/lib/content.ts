import { getCollection, type CollectionEntry } from 'astro:content';
import { slugify } from './slugify';
import modulesMeta from '../../content/modules.json';

export type Track = 'exam-track' | 'foundations-track';
export type Lesson = CollectionEntry<'lessons'>;
export type Quiz = CollectionEntry<'quizzes'>;

export interface ModuleMeta {
  description: string;
  submodules: Record<string, string>;
}

const TRACK_LABELS: Record<Track, string> = {
  'exam-track': 'Bổ trợ thi đấu',
  'foundations-track': 'Nền tảng',
};

export function trackLabel(track: Track): string {
  return TRACK_LABELS[track];
}

export type ModuleLevel = 'foundation' | 'intermediate' | 'advanced';

export const LEVEL_LABELS: Record<ModuleLevel, string> = {
  foundation: 'Cơ bản',
  intermediate: 'Trung cấp',
  advanced: 'Nâng cao',
};

// Curriculum-position heuristic, not stored in frontmatter: modules that
// gate on an entire other module (LLM needs NLP; RL's Advanced Topics needs
// all 3 RL branches; Audio's SSL leans on representation-learning ideas) are
// 'advanced'. Modules needing only DL Nền tảng are 'intermediate'. The 2
// truly prerequisite-free math/DL modules are 'foundation'. Human-reviewed
// 2026-07-10 — update by hand if module.json's module set changes shape.
const MODULE_LEVELS: Record<string, ModuleLevel> = {
  'Hướng dẫn dùng nền tảng': 'foundation',
  'Kỹ thuật thi đấu nâng cao': 'advanced',
  'Nền tảng Toán & ML cổ điển': 'foundation',
  'Deep Learning Nền tảng': 'foundation',
  'Computer Vision': 'intermediate',
  NLP: 'intermediate',
  'Generative Models': 'intermediate',
  'Recommendation Systems': 'intermediate',
  LLM: 'advanced',
  'Reinforcement Learning': 'advanced',
  Audio: 'advanced',
};

export function moduleLevel(moduleName: string): ModuleLevel {
  return MODULE_LEVELS[moduleName] ?? 'intermediate';
}

// Lucide icon names (see src/components/icons.ts for the stroke-path data) —
// one per module, used as a watermark on ModuleCard. Purely decorative; pick
// by topic association, no other significance.
const MODULE_ICONS: Record<string, string> = {
  'Hướng dẫn dùng nền tảng': 'compass',
  'Kỹ thuật thi đấu nâng cao': 'trophy',
  'Nền tảng Toán & ML cổ điển': 'sigma',
  'Deep Learning Nền tảng': 'brain-circuit',
  'Computer Vision': 'eye',
  NLP: 'message-square',
  LLM: 'sparkles',
  'Reinforcement Learning': 'gamepad-2',
  'Generative Models': 'image',
  Audio: 'audio-waveform',
  'Recommendation Systems': 'thumbs-up',
};

export function moduleIcon(moduleName: string): string {
  return MODULE_ICONS[moduleName] ?? 'book-open';
}

export function getModuleMeta(track: Track, moduleName: string): ModuleMeta | undefined {
  const trackMeta = (modulesMeta as Record<string, Record<string, ModuleMeta>>)[track];
  return trackMeta?.[moduleName];
}

async function allLessons(): Promise<Lesson[]> {
  const lessons = await getCollection('lessons');
  return lessons.filter((l) => !l.id.endsWith('/_index'));
}

// `order` in frontmatter is local to a module/submodule (see CLAUDE.md 2.3),
// not a track-wide sequence number — sorting the whole track by it directly
// interleaves unrelated modules. Module/submodule sequence instead comes
// from content/modules.json's key insertion order (already curriculum
// order), and within a module/submodule from the on-disk numeric filename
// prefix (sourcePath), which is stable and matches how the corpus is
// actually authored/organized.
export async function getTrackLessons(track: Track): Promise<Lesson[]> {
  const lessons = await allLessons();
  return lessons.filter((l) => l.data.track === track).sort((a, b) => a.data.sourcePath.localeCompare(b.data.sourcePath));
}

function moduleSequence(track: Track): string[] {
  const trackMeta = (modulesMeta as Record<string, Record<string, ModuleMeta>>)[track] ?? {};
  return Object.keys(trackMeta);
}

export async function getIndexPage(track: Track): Promise<Lesson | undefined> {
  const lessons = await getCollection('lessons');
  return lessons.find((l) => l.id === `${track}/_index`);
}

export interface ModuleGroup {
  name: string;
  slug: string;
  track: Track;
  level: ModuleLevel;
  icon: string;
  meta?: ModuleMeta;
  lessons: Lesson[];
  submodules: SubmoduleGroup[];
}

export interface SubmoduleGroup {
  name: string;
  slug: string;
  description?: string;
  lessons: Lesson[];
}

// Groups a track's lessons into module -> (submodule ->) lesson tree.
// Module sequence comes from modules.json (canonical curriculum order);
// any module present in content but missing from modules.json falls back
// to appending in first-appearance order so nothing silently disappears.
export async function getModuleGroups(track: Track): Promise<ModuleGroup[]> {
  const lessons = await getTrackLessons(track);
  const canonicalOrder = moduleSequence(track);
  const moduleOrder: string[] = [...canonicalOrder];
  const byModule = new Map<string, Lesson[]>();

  for (const lesson of lessons) {
    const mod = lesson.data.module ?? 'Khác';
    if (!byModule.has(mod)) {
      byModule.set(mod, []);
      if (!moduleOrder.includes(mod)) moduleOrder.push(mod);
    }
    byModule.get(mod)!.push(lesson);
  }

  return moduleOrder
    .filter((name) => byModule.has(name))
    .map((name) => {
    const modLessons = byModule.get(name)!;
    const meta = getModuleMeta(track, name);

    const submoduleOrder: string[] = [];
    const bySubmodule = new Map<string, Lesson[]>();
    const flatLessons: Lesson[] = [];

    for (const lesson of modLessons) {
      const sub = lesson.data.submodule;
      if (!sub) {
        flatLessons.push(lesson);
        continue;
      }
      if (!bySubmodule.has(sub)) {
        bySubmodule.set(sub, []);
        submoduleOrder.push(sub);
      }
      bySubmodule.get(sub)!.push(lesson);
    }

    const submodules: SubmoduleGroup[] = submoduleOrder.map((subName) => ({
      name: subName,
      slug: slugify(subName),
      description: meta?.submodules?.[subName],
      lessons: bySubmodule.get(subName)!,
    }));

    return {
      name,
      slug: slugify(name),
      track,
      level: moduleLevel(name),
      icon: moduleIcon(name),
      meta,
      lessons: flatLessons,
      submodules,
    };
  });
}

export async function getModuleGroup(track: Track, moduleSlug: string): Promise<ModuleGroup | undefined> {
  const groups = await getModuleGroups(track);
  return groups.find((g) => g.slug === moduleSlug);
}

// All modules across both tracks, in level order (foundation -> intermediate
// -> advanced) for the unified home page's "Cơ bản" side. exam-track is
// shown as its own section ahead of the level tiers (see getHomeSections),
// not folded into them.
const LEVEL_ORDER: ModuleLevel[] = ['foundation', 'intermediate', 'advanced'];

export async function getAllModuleGroups(): Promise<Record<ModuleLevel, ModuleGroup[]>> {
  const foundationGroups = await getModuleGroups('foundations-track');
  const byLevel = {} as Record<ModuleLevel, ModuleGroup[]>;
  for (const level of LEVEL_ORDER) {
    byLevel[level] = foundationGroups.filter((g) => g.level === level);
  }
  return byLevel;
}

export interface HomeSections {
  examGroups: ModuleGroup[];
  byLevel: Record<ModuleLevel, ModuleGroup[]>;
}

// Home page data: exam-track rendered as its own section first, then
// foundations-track split into level tiers.
export async function getHomeSections(): Promise<HomeSections> {
  const [examGroups, byLevel] = await Promise.all([getModuleGroups('exam-track'), getAllModuleGroups()]);
  return { examGroups, byLevel };
}

// Flattened reading order for a track (module -> submodule -> lesson,
// matching sidebar order) — used for prev/next navigation.
export async function getReadingOrder(track: Track): Promise<Lesson[]> {
  const groups = await getModuleGroups(track);
  const ordered: Lesson[] = [];
  for (const group of groups) {
    ordered.push(...group.lessons);
    for (const sub of group.submodules) {
      ordered.push(...sub.lessons);
    }
  }
  return ordered;
}

export async function getPrevNext(track: Track, lessonId: string): Promise<{ prev?: Lesson; next?: Lesson }> {
  const ordered = await getReadingOrder(track);
  const idx = ordered.findIndex((l) => l.id === lessonId);
  if (idx === -1) return {};
  return { prev: ordered[idx - 1], next: ordered[idx + 1] };
}

export async function getQuizFor(lesson: Lesson): Promise<Quiz | undefined> {
  const quizzes = await getCollection('quizzes');
  const lessonFileSlug = lesson.data.sourcePath
    .split('/')
    .pop()!
    .replace(/\.mdx$/, '');
  return quizzes.find((q) => q.data.quiz_for === lessonFileSlug);
}

export function lessonUrl(lesson: Lesson): string {
  return `/${lesson.id}/`;
}

export function moduleUrl(track: Track, moduleSlug: string): string {
  return `/${track}/${moduleSlug}/`;
}
