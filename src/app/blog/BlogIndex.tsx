import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  LogIn,
  Mail,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";
import { formatPostDate, getAllPosts, type BlogPostSummary } from "@/lib/blog";

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

function PostCard({ post, featured = false }: { post: BlogPostSummary; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-[34px] border border-white/75 bg-white/78 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.09)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white md:grid-cols-[0.95fr_1.05fr]"
          : "group overflow-hidden rounded-[28px] border border-white/75 bg-white/78 p-2 shadow-[0_20px_65px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white"
      }
    >
      <a
        className={featured ? "relative min-h-[300px] overflow-hidden rounded-[28px]" : "relative block aspect-[1.48/1] overflow-hidden rounded-[22px]"}
        href={`/blog/${post.slug}`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(min-width: 768px) 520px, calc(100vw - 40px)" : "(min-width: 768px) 360px, calc(100vw - 40px)"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/5 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/38 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-xl">
          {post.category}
        </span>
      </a>
      <div className={featured ? "flex flex-col justify-center p-6 md:p-9" : "p-5"}>
        <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-[#6a6265]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={15} />
            {formatPostDate(post.date)}
          </span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className={featured ? "mt-4 text-[30px] font-bold leading-tight tracking-tight md:text-[44px]" : "mt-3 text-[22px] font-bold leading-tight tracking-tight"}>
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h2>
        <p className={featured ? "mt-5 text-[16px] leading-[1.8] text-[#4c4648]" : "mt-3 text-[15px] leading-[1.7] text-[#4c4648]"}>
          {post.description}
        </p>
        <a
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white"
          href={`/blog/${post.slug}`}
        >
          Baca Artikel
          <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export function BlogIndex({
  posts,
  currentPage,
  totalPages,
  totalPosts,
}: {
  posts: BlogPostSummary[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}) {
  const featured = currentPage === 1 ? posts[0] : null;
  const visiblePosts = featured ? posts.slice(1) : posts;
  const categories = Array.from(new Set(getAllPosts().map((post) => post.category))).slice(0, 8);
  const previousHref = currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`;
  const nextHref = `/blog/page/${currentPage + 1}`;

  return (
    <main className="min-h-dvh bg-white text-black">
      <Header />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_50%,#32131f_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.09]" />
        <div className="relative mx-auto max-w-[1120px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
            <Sparkles size={16} />
            Blog Akademi Quality
          </span>
          <div className="mt-6 grid items-end gap-8 md:grid-cols-[1fr_0.65fr]">
            <div>
              <h1 className="max-w-[820px] text-[43px] font-semibold leading-[1.05] tracking-tight md:text-[72px]">
                Insight ISO untuk bantu keputusan training Anda.
              </h1>
              <p className="mt-6 max-w-[710px] text-[17px] leading-[1.75] text-white/76 md:text-[18px]">
                Artikel praktis tentang ISO 9001, ISO 14001, ISO 27001,
                audit internal, corporate training, dan pengembangan kompetensi
                tim.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                  <Search size={21} />
                </span>
                <div>
                  <p className="text-[27px] font-bold leading-none">{totalPosts}</p>
                  <p className="mt-1 text-[13px] text-white/68">artikel tersedia</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[12px] font-semibold text-white/82"
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_55%,#fbf7f8_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:74px_74px] opacity-[0.07]" />
        <div className="relative mx-auto max-w-[1120px]">
          {featured ? <PostCard post={featured} featured /> : null}

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <PostCard post={post} key={post.slug} />
            ))}
          </div>

          {totalPages > 1 ? (
            <nav className="mt-12 flex flex-wrap items-center justify-center gap-3" aria-label="Pagination blog">
              {currentPage > 1 ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-[14px] font-semibold text-black shadow-[0_14px_45px_rgba(0,0,0,0.06)]"
                  href={previousHref}
                >
                  <ArrowLeft size={16} />
                  Sebelumnya
                </a>
              ) : null}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <a
                  aria-current={page === currentPage ? "page" : undefined}
                  className={
                    page === currentPage
                      ? "grid h-11 w-11 place-items-center rounded-full bg-black text-[14px] font-semibold text-white"
                      : "grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[14px] font-semibold text-black"
                  }
                  href={page === 1 ? "/blog" : `/blog/page/${page}`}
                  key={page}
                >
                  {page}
                </a>
              ))}
              {currentPage < totalPages ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_45px_rgba(0,0,0,0.13)]"
                  href={nextHref}
                >
                  Berikutnya
                  <ArrowRight size={16} />
                </a>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>

      <section className="px-5 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 rounded-[34px] bg-black px-6 py-10 text-center text-white md:flex-row md:rounded-[46px] md:px-10 md:text-left">
          <div>
            <h2 className="text-[30px] font-bold leading-tight md:text-[42px]">
              Butuh rekomendasi training ISO?
            </h2>
            <p className="mt-3 max-w-[620px] text-[15px] leading-[1.8] text-white/72">
              Diskusikan kebutuhan tim Anda dengan Akademi Quality.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-[15px] font-semibold text-white"
            href={whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            Konsultasi Gratis
            <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}






