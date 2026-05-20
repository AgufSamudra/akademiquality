import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogIndex } from "../../BlogIndex";
import { getPaginatedPosts } from "@/lib/blog";

type BlogPaginationPageProps = {
  params: Promise<{
    page: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPaginationPageProps): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);
  const { totalPages } = getPaginatedPosts(pageNumber);

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    return {};
  }

  return {
    title: `Blog Halaman ${pageNumber}`,
    description:
      "Arsip artikel Akademi Quality tentang training ISO, audit internal, dan sistem manajemen.",
    alternates: {
      canonical: `/blog/page/${pageNumber}`,
    },
    openGraph: {
      title: `Blog Halaman ${pageNumber} - Akademi Quality`,
      description:
        "Arsip artikel ISO dari Akademi Quality untuk pengembangan kompetensi profesional dan perusahaan.",
      url: `/blog/page/${pageNumber}`,
    },
  };
}

export function generateStaticParams() {
  const { totalPages } = getPaginatedPosts(1);

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export default async function BlogPaginationPage({
  params,
}: BlogPaginationPageProps) {
  const { page } = await params;
  const pageNumber = Number(page);
  const data = getPaginatedPosts(pageNumber);

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > data.totalPages) {
    notFound();
  }

  return <BlogIndex {...data} />;
}
