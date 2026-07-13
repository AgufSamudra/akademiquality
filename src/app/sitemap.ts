import type { MetadataRoute } from "next";

import { absoluteUrl, staticRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  return staticEntries;
}
