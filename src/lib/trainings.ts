import { cache } from "react";

export type TrainingSummary = {
  id: string;
  slug: string;
  title: string;
  category: string;
  sub_category: string;
  image_url: string;
};

export type TrainingDetail = TrainingSummary & {
  content_html?: string;
  introduction?: string;
  description?: string;
  objective?: string | string[];
  objectives?: string | string[];
  material?: string | string[];
  materials?: string | string[];
  target_participant?: string | string[];
  target_participants?: string | string[];
  training_method?: string | string[];
  method?: string | string[];
  schedule?: string | string[];
  [key: string]: unknown;
};

const API_URL = "https://myquality.akademiquality.com/api/trainings";

const localTrainings: TrainingDetail[] = [
  {
    id: "featured-hiradc",
    slug: "training-hiradc-hazard-identification-risk-assessment",
    title: "Training HIRADC - Hazard Identification & Risk Assessment",
    category: "qhse",
    sub_category: "K3;Risk Assessment",
    image_url: "/training-program.png",
    introduction:
      "Pelatihan HIRADC membantu peserta mengidentifikasi bahaya, menilai tingkat risiko, menentukan pengendalian yang tepat, dan menyusun tindak lanjut yang dapat diterapkan di tempat kerja.",
    objectives: [
      "Memahami prinsip identifikasi bahaya dan penilaian risiko K3.",
      "Mampu menentukan tingkat risiko secara konsisten.",
      "Mampu memilih pengendalian berdasarkan hierarchy of controls.",
      "Menyusun dan meninjau dokumen HIRADC yang aplikatif.",
    ],
    materials: [
      "Konsep bahaya, risiko, dan pengendalian K3",
      "Teknik identifikasi bahaya pada aktivitas kerja",
      "Penilaian likelihood, severity, dan risk level",
      "Penentuan pengendalian dan penyusunan dokumen HIRADC",
    ],
    target_participants: [
      "Tim HSE, K3, QHSE, dan operasional",
      "Supervisor dan penanggung jawab area kerja",
      "Auditor internal dan anggota P2K3",
      "Profesional yang terlibat dalam manajemen risiko K3",
    ],
  },
];

function withLocalTrainings(trainings: TrainingSummary[]) {
  const slugs = new Set(trainings.map((training) => training.slug));
  return [...trainings, ...localTrainings.filter((training) => !slugs.has(training.slug))];
}

export const getAllTrainings = cache(async (): Promise<TrainingSummary[]> => {
  try {
    const firstResponse = await fetch(`${API_URL}?limit=50`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!firstResponse.ok) return withLocalTrainings([]);

    const firstData = (await firstResponse.json()) as {
      trainings?: TrainingSummary[];
      pagination?: { totalPages?: number };
    };
    const totalPages = firstData.pagination?.totalPages ?? 1;
    const remainingPages = await Promise.all(
      Array.from({ length: Math.max(0, totalPages - 1) }, async (_, index) => {
        try {
          const response = await fetch(`${API_URL}?limit=50&page=${index + 2}`, {
            next: { revalidate: 300 },
            signal: AbortSignal.timeout(5000),
          });
          if (!response.ok) return [];
          const data = (await response.json()) as { trainings?: TrainingSummary[] };
          return data.trainings ?? [];
        } catch {
          return [];
        }
      }),
    );

    return withLocalTrainings([...(firstData.trainings ?? []), ...remainingPages.flat()]);
  } catch {
    return withLocalTrainings([]);
  }
});

export const getTrainingBySlug = cache(async (slug: string): Promise<TrainingDetail | null> => {
  const localTraining = localTrainings.find((item) => item.slug === slug);
  if (localTraining) return localTraining;

  const training = (await getAllTrainings()).find((item) => item.slug === slug);
  if (!training) return null;

  try {
    const detailResponse = await fetch(`${API_URL}/${training.id}`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!detailResponse.ok) return training;

    const data = (await detailResponse.json()) as TrainingDetail | { training?: TrainingDetail };
    return "training" in data && data.training
      ? { ...training, ...data.training }
      : { ...training, ...data };
  } catch {
    return training;
  }
});

export function toList(value: unknown) {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string" && Boolean(item.trim()));
  if (typeof value !== "string") return [];
  return value.split(/\n|;|\r/).map((item) => item.trim()).filter(Boolean);
}

export type TrainingContentSection = {
  title: string;
  html: string;
  key: "introduction" | "objectives" | "materials" | "participants" | "method" | "schedule" | "additional";
};

const sectionMatchers: Array<[TrainingContentSection["key"], RegExp]> = [
  ["introduction", /pengantar|pendahuluan|deskripsi|latar belakang/i],
  ["objectives", /tujuan|objective/i],
  ["materials", /materi|silabus|kurikulum|pokok bahasan/i],
  ["participants", /sasaran peserta|peserta (yang )?(dianjurkan|dituju)|target peserta/i],
  ["method", /metode|metodologi|cara (pelaksanaan|belajar)/i],
  ["schedule", /jadwal|waktu pelaksanaan|durasi/i],
];

function headingText(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function sectionKey(title: string): TrainingContentSection["key"] {
  return sectionMatchers.find(([, matcher]) => matcher.test(title))?.[0] ?? "additional";
}

/**
 * Splits CMS HTML into meaningful page sections while preserving its rich body
 * (lists, tables, links, images, and nested headings). The page title remains
 * the only H1; headings from the CMS start at H2 for a clean SEO hierarchy.
 */
export function parseTrainingContent(contentHtml: string): TrainingContentSection[] {
  const content = contentHtml.trim();
  if (!content) return [];

  // H1 and H2 delimit the primary document sections. H3-H6 remain inside
  // their parent section so the original heading hierarchy is preserved.
  const headingPattern = /<h([1-2])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = Array.from(content.matchAll(headingPattern));
  if (!matches.length) {
    return [{ title: "Detail Pelatihan", html: content, key: "additional" }];
  }

  const sections: TrainingContentSection[] = [];
  const preface = content.slice(0, matches[0].index).trim();
  if (preface) sections.push({ title: "Pengantar", html: preface, key: "introduction" });

  matches.forEach((match, index) => {
    const bodyStart = (match.index ?? 0) + match[0].length;
    const bodyEnd = index + 1 < matches.length ? (matches[index + 1].index ?? content.length) : content.length;
    const title = headingText(match[2]) || "Detail Pelatihan";
    const body = content.slice(bodyStart, bodyEnd).trim();

    // An H1 from the editor is a document title, not a second page H1.
    // Keep its content under an H2 section only when it has a body.
    if (body) sections.push({ title, html: body, key: sectionKey(title) });
  });

  return sections;
}

// Exact labels only. Do not match a word such as “metode” inside ordinary
// explanatory text, otherwise a paragraph could accidentally become an H2.
const editorHeadings = /^(?:pengantar|pendahuluan|tujuan(?:\s+pelatihan)?|materi(?:\s+pelatihan)?|sasaran(?:\s+peserta)?|peserta(?:\s+yang\s+dianjurkan)?|metode(?:\s+training)?|jadwal(?:\s+pelatihan)?|durasi)$/i;
const listHeadings = /^(?:tujuan|tujuan\s+pelatihan|materi|materi\s+pelatihan|sasaran|sasaran\s+peserta|peserta(?:\s+yang\s+dianjurkan)?|metode|metode\s+training)$/i;
const introHeading = /^(?:pengantar|pendahuluan)$/i;

function decodeEditorHtml(value: string) {
  // Some editor/API combinations serialize HTML entities instead of raw tags.
  return value
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&amp;/gi, "&");
}

/**
 * Normalizes common rich-text-editor output into semantic article HTML.
 * Plain paragraph labels such as “Tujuan Pelatihan” become H2s, and a
 * consecutive set of paragraph items under list-oriented sections becomes UL.
 */
export function normalizeTrainingHtml(contentHtml: string) {
  let html = decodeEditorHtml(contentHtml.trim());

  // The page hero owns the document H1. Do not repeat the editor title.
  html = html.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi, "");

  // Content entered as a normal/strong paragraph is still a semantic section
  // label; turn it into a real heading for readers and search engines.
  html = html.replace(
    /<(p|div)\b[^>]*>\s*(?:<(?:strong|b)\b[^>]*>)?\s*([^<]+?)\s*(?:<\/(?:strong|b)>)?\s*<\/\1>/gi,
    (full, _tag, label: string) => editorHeadings.test(label.trim()) ? `<h2>${label.trim()}</h2>` : full,
  );

  // A few editor templates wrap the introductory paragraph in H2. Keep the
  // “Pengantar” heading, then demote any non-section H2s until the next real
  // section heading (for example, “Tujuan Pelatihan”) back to paragraphs.
  let insideIntroduction = false;
  html = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (full, attributes, content: string) => {
    const label = headingText(content);
    if (introHeading.test(label)) {
      insideIntroduction = true;
      return full;
    }
    if (editorHeadings.test(label)) {
      insideIntroduction = false;
      return full;
    }
    return insideIntroduction ? `<p${attributes}>${content}</p>` : full;
  });

  const headingPattern = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
  const headings = Array.from(html.matchAll(headingPattern));
  if (!headings.length) return html;

  let result = "";
  let cursor = 0;
  headings.forEach((heading, index) => {
    const end = index + 1 < headings.length ? (headings[index + 1].index ?? html.length) : html.length;
    const blockStart = heading.index ?? 0;
    result += html.slice(cursor, blockStart) + heading[0];
    const body = html.slice(blockStart + heading[0].length, end);
    const label = headingText(heading[1]);
    const paragraphs = Array.from(body.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi));
    const leftovers = body.replace(/<p\b[^>]*>[\s\S]*?<\/p>/gi, "").trim();

    if (listHeadings.test(label) && paragraphs.length > 1 && !leftovers) {
      result += `<ul>${paragraphs.map((item) => `<li>${item[1].trim()}</li>`).join("")}</ul>`;
    } else {
      result += body;
    }
    cursor = end;
  });
  return result;
}
