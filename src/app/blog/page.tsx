import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { BlogCatalog } from "@/components/BlogCatalog";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllBlogPosts } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

const title = "Artikel QHSE dan Rumah Sakit";
const description =
  "Wawasan praktis seputar QHSE, Rumah Sakit, pelatihan profesional, dan pengembangan kompetensi untuk individu maupun perusahaan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/blog",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="min-h-dvh bg-[#f7f7f6] text-black">
      <SiteHeader />

      <section className="bg-[linear-gradient(145deg,#050505_0%,#151115_58%,#2b111b_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">Wawasan QHSE dan Rumah Sakit untuk berkembang.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1120px]"><BlogCatalog posts={posts} /></div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-bold">Butuh arahan memilih pelatihan?</h2><p className="mt-2 text-white/65">Diskusikan kebutuhan individu atau tim bersama Akademi Quality.</p></div>
          <Link className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black" href="/kontak">Hubungi Kami <MessageCircle size={18} /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
