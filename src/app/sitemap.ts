import type { MetadataRoute } from "next";

import { getAllBlogPosts } from "@/lib/blog";
import { absoluteUrl, staticRoutes } from "@/lib/seo";
import { getAllTrainings } from "@/lib/trainings";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  const [trainings, posts] = await Promise.all([
    getAllTrainings(),
    getAllBlogPosts(),
  ]);
  const trainingEntries = trainings.map((training) => ({
    url: absoluteUrl(`/trainings/${training.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const postEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...trainingEntries, ...postEntries];
}
