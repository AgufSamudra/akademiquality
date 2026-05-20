import type { MetadataRoute } from "next";

import { BLOG_PAGE_SIZE, getAllPosts } from "@/lib/blog";
import { absoluteUrl, staticRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();
  const totalBlogPages = Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  const paginatedBlogEntries = Array.from(
    { length: Math.max(0, totalBlogPages - 1) },
    (_, index) => ({
      url: absoluteUrl(`/blog/page/${index + 2}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }),
  );

  const blogEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00+07:00`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...paginatedBlogEntries, ...blogEntries];
}
