import type { Metadata } from "next";

import { BlogIndex } from "./BlogIndex";
import { getPaginatedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel Akademi Quality tentang training ISO, ISO 9001, ISO 14001, ISO 27001, audit internal, dan corporate training.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Akademi Quality",
    description:
      "Insight praktis untuk memahami ISO dan memilih pelatihan yang tepat.",
    url: "/blog",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Blog Akademi Quality",
      },
    ],
  },
};

export default function BlogPage() {
  const data = getPaginatedPosts(1);

  return <BlogIndex {...data} />;
}
