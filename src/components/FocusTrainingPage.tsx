import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";
import { TrainingCatalog } from "@/components/TrainingCatalog";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];

const whatsappHref =
  "https://wa.me/6285139495190?text=Halo%20Akademi%20Quality%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20pelatihan.";

export type FocusTrainingPageData = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  stats: Array<[string, string]>;
  outcomes: Array<[string, string]>;
  modules: Array<[string, string]>;
  audiences: Array<[string, string]>;
  formats: Array<[string, string]>;
  ctaTitle: string;
  ctaDescription: string;
  trainingCategory: string;
  trainingCategoryLabel?: string;
  trainingFilters: string[];
};

export function FocusTrainingPage({ data }: { data: FocusTrainingPageData }) {
  return (
    <main className="min-h-dvh bg-white text-black">
      <SiteHeader />
      <header className="hidden sticky top-0 z-50 bg-black px-3 py-3 text-white md:px-11">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2 md:gap-6 md:px-5">
          <Link className="shrink-0" href="/" aria-label="Akademi Quality home">
            <Image
              src="/logo.png"
              alt="Akademi Quality"
              width={198}
              height={72}
              className="h-[46px] w-[136px] object-contain md:h-[64px] md:w-[178px]"
            />
          </Link>
          <nav className="hidden items-center gap-7 text-[15px] font-normal lg:flex">
            {navItems.map((item) => (
              <Link
                className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-black px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[13px] font-semibold text-white/86">
              <ShieldCheck size={16} />
              {data.badge}
            </span>
            <h1 className="mt-6 max-w-[760px] text-[42px] font-semibold leading-[1.06] tracking-tight md:text-[68px]">
              {data.title}{" "}
              <span className="text-[#f05b99]">{data.highlight}</span>
            </h1>
            <p className="mt-6 max-w-[660px] text-[17px] leading-[1.75] text-white/76 md:text-[18px]">
              {data.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Konsultasi Program
                <MessageCircle size={18} />
              </a>
              <Link
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/14 sm:w-auto"
                href="/#program"
              >
                Lihat Training
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-[1.04/1] overflow-hidden rounded-[30px]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-black/8 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/18 bg-black px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] md:left-8 md:right-8">
              <p className="text-[13px] font-semibold leading-relaxed text-white">
                {data.imageCaption}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-[1200px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map(([value, label]) => (
            <div
              className="rounded-3xl border border-white/10 bg-[#151515] px-5 py-5"
              key={label}
            >
              <p className="text-[30px] font-bold leading-none text-white">{value}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <TrainingCatalog
        category={data.trainingCategory}
        description="Pilih sub-category atau cari judul training yang sesuai dengan kebutuhan Anda."
        eyebrow="Pilih Training"
        filterStyle="select"
        filters={data.trainingFilters}
        pagination={{}}
        title={`Pilih training ${data.trainingCategoryLabel ?? data.trainingCategory} yang ingin dipelajari`}
        trainings={[]}
        visibleCategory={data.trainingCategoryLabel}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fbfbfb_48%,#fff2f7_100%)] px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.42]" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#c84d7c]">
              Fokus pembelajaran
            </p>
            <h2 className="mt-3 text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
              Materi disusun untuk kebutuhan kerja yang nyata.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {data.outcomes.map(([title, description], index) => (
              <article
                className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(21,21,21,0.08)]"
                key={title}
              >
                <div className="absolute right-5 top-5 text-[48px] font-bold leading-none text-black/[0.04]">
                  0{index + 1}
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c84d7c] text-white shadow-[0_14px_35px_rgba(200,77,124,0.24)]">
                  <Target size={22} />
                </span>
                <h3 className="relative mt-7 text-[23px] font-bold leading-tight tracking-tight">
                  {title}
                </h3>
                <p className="relative mt-4 text-[15px] leading-[1.75] text-black/64">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_52%,#2b101c_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#f0a0bc]">
              Modul utama
            </p>
            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
              Jalur belajar yang rapi dari konsep sampai praktik.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {data.modules.map(([title, description]) => (
              <article
                className="grid gap-4 rounded-[26px] border border-white/12 bg-[#181616] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:grid-cols-[48px_1fr]"
                key={title}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c84d7c] text-white">
                  <BookOpenCheck size={22} />
                </span>
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-white/64">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#c84d7c]">
              Cocok untuk
            </p>
            <h2 className="mt-3 text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
              Peserta yang butuh kompetensi terarah.
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.8] text-black/58">
              Program dapat dijalankan sebagai kelas publik, online, maupun in-house
              sesuai kebutuhan peserta dan organisasi.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.audiences.map(([title, description]) => (
              <article
                className="rounded-[26px] border border-black/10 bg-[#fafafa] p-6"
                key={title}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                  <UsersRound size={21} />
                </span>
                <h3 className="mt-6 text-[21px] font-bold tracking-tight">{title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-black/62">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbfb] px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#c84d7c]">
                Format kelas
              </p>
              <h2 className="mt-3 text-[34px] font-bold leading-tight tracking-tight md:text-[48px]">
                Fleksibel untuk individu maupun organisasi.
              </h2>
            </div>
            <Link
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
              href="/kontak"
            >
              Diskusikan Kebutuhan
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.formats.map(([title, description]) => (
              <article
                className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.05)]"
                key={title}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff2f7] text-[#c84d7c]">
                  <ClipboardCheck size={21} />
                </span>
                <h3 className="mt-6 text-[21px] font-bold tracking-tight">{title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-black/62">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-9 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_0.72fr] md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-[#242424] px-4 py-2 text-[13px] font-semibold text-white/85">
              Konsultasi Kebutuhan Training
            </span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight md:text-[50px]">
              {data.ctaTitle}
            </h2>
            <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-white/75">
              {data.ctaDescription}
            </p>
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.14)]"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              Hubungi Kami
              <MessageCircle size={17} />
            </a>
          </div>
          <div className="relative grid gap-3">
            {data.outcomes.map(([title]) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#292426] px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
                key={title}
              >
                <CheckCircle2 className="shrink-0 text-[#f0a0bc]" size={20} />
                <p className="text-[15px] font-semibold text-white/88">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="hidden relative mt-10 overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#121212_52%,#251016_100%)] px-5 pt-16 text-white md:px-10 md:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Akademi Quality"
              width={198}
              height={72}
              className="h-[62px] w-[172px] object-contain md:h-[72px] md:w-[198px]"
            />
            <p className="mt-5 max-w-[360px] text-[15px] leading-[1.8] text-white/65">
              Mengembangkan kompetensi tim melalui pelatihan yang praktis,
              relevan, dan siap diterapkan di dunia kerja.
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
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">
              Navigasi
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                <Link className="transition-colors hover:text-white" href="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="/tentang">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="/kontak">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">
              Program
            </p>
            <div className="mt-5 grid gap-y-3 text-[15px] text-white/70">
              <Link className="transition-colors hover:text-white" href="/qhse">
                QHSE
              </Link>
              <Link className="transition-colors hover:text-white" href="/rumah-sakit">
                Rumah Sakit
              </Link>
              <Link className="transition-colors hover:text-white" href="/#program">
                Public Training
              </Link>
              <Link className="transition-colors hover:text-white" href="/#program">
                InHouse Training
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-14 flex max-w-[1200px] flex-col gap-2 border-t border-white/10 py-5 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright &copy; 2026 Akademi Quality</span>
          <span>Provider Training SDM untuk QHSE dan Rumah Sakit</span>
        </div>
      </footer>
      <SiteFooter />

      <a
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-4 text-[15px] font-semibold text-white shadow-lg sm:bottom-6 sm:right-6 sm:px-5"
        href={whatsappHref}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Konsultasi Gratis!</span>
      </a>
    </main>
  );
}
