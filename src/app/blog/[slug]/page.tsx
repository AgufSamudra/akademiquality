import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  LogIn,
  Mail,
  MessageCircle,
  Sparkles,
  Tag,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  markdownToHtml,
} from "@/lib/blog";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const navItems = [
  { label: "Tentang", href: "/tentang" },
  { label: "Training Program", href: "/training-program" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Sertifikat", href: "https://sertifikat.akademiquality.com/" },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];

const whatsappHref =
  "https://wa.me/6289507639360?text=Hallo%20Akademi%20Quality%2C%20saya%20ingin%20konsultasi%20training%20ISO.";

function SocialMark({ label }: { label: string }) {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px] font-semibold uppercase leading-none">
      {label}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 px-3 py-3 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-11">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_18px_55px_rgba(0,0,0,0.28)] md:gap-6 md:px-5">
        <a href="/" aria-label="Akademi Quality home">
          <Image
            src="/logo.png"
            alt="Akademi Quality"
            width={198}
            height={72}
            className="h-[46px] w-[136px] shrink-0 object-contain md:h-[64px] md:w-[178px]"
          />
        </a>
        <nav className="hidden items-center gap-7 text-[15px] font-normal lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center lg:flex">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
            href="https://sertifikat.akademiquality.com/"
            rel="noreferrer"
            target="_blank"
          >
            Login
            <LogIn size={16} />
          </a>
        </div>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-black px-5 pt-12 text-white md:px-10">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.png"
            alt="Akademi Quality"
            width={198}
            height={72}
            className="h-[62px] w-[172px] object-contain md:h-[72px] md:w-[198px]"
          />
          <p className="mt-5 max-w-[360px] text-[15px] font-light leading-[1.8]">
            Improve your Human Quality melalui pelatihan ISO yang praktis,
            fleksibel, dan relevan untuk kebutuhan industri.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="Instagram Akademi Quality"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
              href="https://www.instagram.com/akademiquality/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-[13px] font-bold leading-none">ig</span>
            </a>
            <a
              aria-label="Facebook Akademi Quality"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
              href="https://www.facebook.com/profile.php?id=61562779364975"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-[17px] font-bold leading-none">f</span>
            </a>
            <a
              aria-label="LinkedIn Akademi Quality"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
              href="https://www.linkedin.com/company/akademi-quality/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-[13px] font-bold leading-none">in</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[22px] font-medium">Page</h3>
          <ul className="mt-4 space-y-2 text-[15px] font-light">
            <li>
              <a href="/tentang">Tentang</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/kontak">Kontak</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[22px] font-medium">Training</h3>
          <div className="mt-4 grid gap-y-2 text-[15px] font-light">
            <a href="/training-iso-9001-online-bersertifikat">ISO 9001</a>
            <a href="/training-iso-14001-online-murah-bersertifikat">ISO 14001</a>
            <a href="/training-iso-27001-online-murah-terjangkau-bersertifikat">ISO 27001</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1120px] border-t border-white/10 py-3 text-[12px]">
        Copyright &copy; 2026 - Akademi Quality
      </div>
    </footer>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - Akademi Quality`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Akademi Quality"],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleHtml = markdownToHtml(post.content);
  const relatedPosts = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <main className="min-h-dvh bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <article>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_50%,#32131f_100%)] px-5 py-14 text-white md:px-10 md:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.09]" />
          <div className="relative mx-auto max-w-[960px]">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/86 backdrop-blur-xl"
              href="/blog"
            >
              <ArrowLeft size={16} />
              Kembali ke Blog
            </a>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px] font-semibold text-white/72">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black">
                <Sparkles size={15} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} />
                {formatPostDate(post.date)}
              </span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-6 text-[40px] font-semibold leading-[1.08] tracking-tight md:text-[68px]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-[820px] text-[17px] leading-[1.75] text-white/76 md:text-[19px]">
              {post.description}
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_55%,#fbf7f8_100%)] px-5 py-12 md:px-10 md:py-16">
          <div className="relative mx-auto max-w-[1040px]">
            <div className="relative aspect-[1.8/1] overflow-hidden rounded-[32px] shadow-[0_24px_90px_rgba(0,0,0,0.12)] md:rounded-[44px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 1040px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
            </div>

            <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div
                className="blog-article rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.07)] md:p-10"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />

              <aside className="space-y-5">
                <div className="rounded-[28px] bg-black p-6 text-white shadow-[0_20px_70px_rgba(0,0,0,0.13)]">
                  <h2 className="text-[24px] font-bold leading-tight">
                    Konsultasi training ISO
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.75] text-white/72">
                    Diskusikan kebutuhan training ISO untuk individu atau
                    perusahaan bersama tim Akademi Quality.
                  </p>
                  <a
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-[14px] font-semibold text-white"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Chat WhatsApp
                    <MessageCircle size={17} />
                  </a>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                  <h2 className="flex items-center gap-2 text-[20px] font-bold">
                    <Tag size={18} />
                    Topik
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        className="rounded-full bg-[#f2eef0] px-3 py-1.5 text-[12px] font-semibold text-[#5b4b52]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="px-5 py-14 md:px-10">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[32px] font-bold tracking-tight md:text-[44px]">
              Artikel Terkait
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <article
                  className="overflow-hidden rounded-[28px] border border-black/8 bg-white p-2 shadow-[0_20px_65px_rgba(0,0,0,0.08)]"
                  key={item.slug}
                >
                  <a
                    className="relative block aspect-[1.48/1] overflow-hidden rounded-[22px]"
                    href={`/blog/${item.slug}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 360px, calc(100vw - 40px)"
                    />
                  </a>
                  <div className="p-5">
                    <p className="text-[13px] font-semibold text-[#b84a72]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-[20px] font-bold leading-tight">
                      <a href={`/blog/${item.slug}`}>{item.title}</a>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}






