import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllBlogPosts, getBlogPost, parseBlogBody } from "@/lib/blog";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllBlogPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url,
      siteName: SITE_NAME,
      locale: "id_ID",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost((await params).slug);
  if (!post) notFound();
  const posts = await getAllBlogPosts();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const blocks = parseBlogBody(post.body);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() },
        publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() },
        image: absoluteUrl(DEFAULT_OG_IMAGE),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Artikel", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="min-h-dvh bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <article>
        <header className="bg-[#f5f3f4] px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[860px]">
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#ae4169]" href="/blog"><ArrowLeft size={16} /> Kembali ke artikel</Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-black/55">
              <span className="font-bold text-[#ae4169]">{post.category}</span><span>•</span>
              <time dateTime={post.date}>Dirilis {new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(post.date))}</time>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2"><span className="mr-1 text-xs font-bold uppercase tracking-wider text-black/45">Subkategori</span><span className="rounded-full bg-[#eadbe1] px-3 py-1 text-xs font-semibold text-[#ae4169]">{post.subcategory}</span>{post.tags.map((tag) => <span className="rounded-full bg-black/[.04] px-3 py-1 text-xs font-semibold text-black/55" key={tag}>{tag}</span>)}</div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">{post.description}</p>
          </div>
        </header>

        <div className="mx-auto max-w-[760px] px-5 py-14 md:py-20">
          {blocks.map((block, index) => {
            if (block.type === "heading") return <h2 className="mb-4 mt-10 text-3xl font-bold tracking-tight first:mt-0" key={`${block.type}-${index}`}>{block.text}</h2>;
            if (block.type === "list") return <ul className="my-6 list-disc space-y-3 pl-6 text-[17px] leading-8 text-black/70" key={`${block.type}-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "quote") return <blockquote className="my-8 border-l-4 border-[#ae4169] bg-[#f7f4f5] px-6 py-5 text-lg font-semibold leading-8" key={`${block.type}-${index}`}>{block.text}</blockquote>;
            if (block.type === "link") return <Link className="group my-4 flex w-fit items-center gap-2 border-b border-[#ae4169]/30 pb-2 text-[15px] font-semibold text-[#ae4169] transition-colors hover:border-[#ae4169] hover:text-black" href={block.href} key={`${block.type}-${index}`}><span>{block.label}</span><ArrowRight className="transition-transform group-hover:translate-x-1" size={16} /></Link>;
            return <p className="mb-6 text-[17px] leading-8 text-black/70" key={`${block.type}-${index}`}>{block.text}</p>;
          })}
        </div>
      </article>

      <aside className="bg-[#f7f7f6] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[960px]"><h2 className="text-3xl font-bold">Artikel terkait</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{related.map((item) => <Link className="rounded-2xl border border-black/10 bg-white p-5 font-bold leading-snug" href={`/blog/${item.slug}`} key={item.slug}>{item.title}<ArrowRight className="mt-5" size={17} /></Link>)}</div></div>
      </aside>
      <SiteFooter />
    </main>
  );
}
