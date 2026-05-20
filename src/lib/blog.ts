import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: string;
  content: string;
};

export type BlogPostSummary = Omit<BlogPost, "content">;

export const BLOG_PAGE_SIZE = 10;

const blogDirectory = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return { data: new Map<string, string>(), content: source.trim() };
  }

  const data = new Map<string, string>();

  for (const line of match[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    data.set(key, value);
  }

  return { data, content: match[2].trim() };
}

function estimateReadingTime(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} menit baca`;
}

function parseTags(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function readPostFile(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(blogDirectory, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(raw);
  const title = data.get("title") ?? slug.replace(/-/g, " ");
  const description = data.get("description") ?? content.slice(0, 155);
  const date = data.get("date") ?? new Date().toISOString().slice(0, 10);
  const category = data.get("category") ?? "ISO";
  const image = data.get("image") ?? "/hero.png";

  return {
    slug,
    title,
    description,
    date,
    category,
    tags: parseTags(data.get("tags")),
    image,
    readingTime: estimateReadingTime(content),
    content,
  };
}

export function getAllPosts(): BlogPostSummary[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(readPostFile)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ content: _content, ...summary }) => summary);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.md`;
  const filePath = path.join(blogDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readPostFile(filename);
}

export function getPaginatedPosts(page: number) {
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * BLOG_PAGE_SIZE;

  return {
    posts: posts.slice(start, start + BLOG_PAGE_SIZE),
    currentPage,
    totalPages,
    totalPosts: posts.length,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInline(value: string) {
  let html = escapeHtml(value);

  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g,
    '<a href="$2">$1</a>',
  );

  return html;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }

    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    html.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${renderInline(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${renderInline(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h1>${renderInline(trimmed.slice(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      html.push(`<blockquote>${renderInline(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return html.join("\n");
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00+07:00`));
}
