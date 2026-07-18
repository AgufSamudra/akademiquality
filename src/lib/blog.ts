import "server-only";

import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  subcategory: string;
  tags: string[];
  body: string;
};

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "link"; label: string; href: string };

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

async function getBlogFilenames(directory = BLOG_DIRECTORY): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const filenames = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getBlogFilenames(entryPath);
    return entry.name.endsWith(".md") ? [entryPath] : [];
  }));
  return filenames.flat();
}

function readFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { attributes: new Map<string, string>(), body: source };

  const attributes = new Map<string, string>();
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
    attributes.set(key, value);
  }

  return { attributes, body: source.slice(match[0].length).trim() };
}

function parseTags(value = "") {
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ""))
    .filter(Boolean);
}

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const filenames = await getBlogFilenames();
  const posts = await Promise.all(
    filenames.map(async (filename) => {
        const source = await fs.readFile(filename, "utf8");
        const { attributes, body } = readFrontmatter(source);
        return {
          slug: path.basename(filename, ".md"),
          title: attributes.get("title") ?? path.basename(filename, ".md"),
          description: attributes.get("description") ?? "",
          date: attributes.get("date") ?? "",
          category: attributes.get("category") ?? "Artikel",
          subcategory: attributes.get("subcategory") ?? path.basename(path.dirname(filename)),
          tags: parseTags(attributes.get("tags")),
          body,
        } satisfies BlogPost;
      }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
});

export const getBlogPost = cache(async (slug: string) => {
  return (await getAllBlogPosts()).find((post) => post.slug === slug) ?? null;
});

export function parseBlogBody(body: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  const lines = body.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "list", items: list });
    list = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", text: line.slice(3) });
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
      continue;
    }
    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: line.slice(2) });
      continue;
    }
    if (line.startsWith("LINK: ")) {
      flushParagraph();
      flushList();
      const [label, href] = line.slice(6).split("|");
      if (label?.trim() && href?.trim()) blocks.push({ type: "link", label: label.trim(), href: href.trim() });
      continue;
    }
    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}
