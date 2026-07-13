import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";

import { getAllBlogPosts } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

const title = "Artikel ISO dan Pengembangan Kompetensi";
const description =
  "Panduan praktis tentang training ISO, audit internal, QHSE, dan pengembangan kompetensi untuk profesional dan perusahaan.";

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
      <header className="bg-black px-5 py-5 text-white md:px-10">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-5">
          <Link className="text-lg font-bold" href="/">Akademi Quality</Link>
          <nav className="flex items-center gap-5 text-sm text-white/75">
            <Link className="hover:text-white" href="/qhse">QHSE</Link>
            <Link className="hover:text-white" href="/rumah-sakit">Rumah Sakit</Link>
            <Link className="hover:text-white" href="/kontak">Kontak</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[linear-gradient(145deg,#050505_0%,#151115_58%,#2b111b_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1120px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
            <BookOpen size={17} /> Pusat Wawasan
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">Artikel ISO dan pengembangan kompetensi.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article className="flex min-h-[330px] flex-col rounded-[26px] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,.06)]" key={post.slug}>
              <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-[#ae4169]">
                <span>{post.category}</span>
                <time dateTime={post.date}>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(post.date))}</time>
              </div>
              <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight">{post.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-black/60">{post.description}</p>
              <Link className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold" href={`/blog/${post.slug}`}>
                Baca artikel <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-bold">Butuh arahan memilih pelatihan?</h2><p className="mt-2 text-white/65">Diskusikan kebutuhan individu atau tim bersama Akademi Quality.</p></div>
          <Link className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black" href="/kontak">Hubungi Kami <MessageCircle size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
