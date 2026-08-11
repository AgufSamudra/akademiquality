import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Tentang Akademi Quality, partner pengembangan kompetensi untuk bidang QHSE dan Rumah Sakit.",
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    title: "Akademi Quality - Tentang",
    description:
      "Akademi Quality membantu individu dan organisasi membangun kompetensi QHSE dan Rumah Sakit yang relevan dengan kebutuhan kerja.",
    url: "/tentang",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tentang Akademi Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akademi Quality - Tentang",
    description:
      "Akademi Quality membantu individu dan organisasi membangun kompetensi QHSE dan Rumah Sakit yang relevan dengan kebutuhan kerja.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];

const missions = [
  "Menyusun pembelajaran yang relevan dengan regulasi, standar, dan tantangan operasional di lapangan.",
  "Menghadirkan praktisi berpengalaman agar peserta mendapat perspektif yang dapat langsung diterapkan.",
  "Mendampingi individu dan organisasi membangun budaya kerja yang lebih aman, berkualitas, dan berkelanjutan.",
];

const audienceCards = [
  {
    icon: UsersRound,
    title: "Praktisi QHSE",
    description:
      "Mengembangkan kompetensi untuk quality, health, safety, dan environment melalui materi yang dekat dengan kebutuhan kerja.",
  },
  {
    icon: HeartPulse,
    title: "Tim Rumah Sakit",
    description:
      "Mendukung tenaga dan manajemen fasilitas kesehatan dalam meningkatkan mutu layanan, keselamatan pasien, serta kesiapan akreditasi.",
  },
  {
    icon: ShieldCheck,
    title: "Organisasi & Talenta",
    description:
      "Program terbuka dan in-house untuk organisasi yang ingin membangun tim adaptif, kompeten, dan siap menghadapi perubahan.",
  },
  {
    icon: GraduationCap,
    title: "Kampus & Mahasiswa",
    description:
      "Membantu kampus dan mahasiswa membangun fondasi kompetensi praktis sebagai bekal memasuki dunia kerja.",
  },
];

const focusAreas = [
  ["QHSE", "Memperkuat praktik mutu, kesehatan, keselamatan, dan lingkungan untuk kebutuhan operasional organisasi."],
  ["Rumah Sakit", "Mendukung peningkatan mutu layanan, keselamatan pasien, dan kesiapan fasilitas kesehatan."],
  ["Mahasiswa", "Membekali talenta awal dengan pemahaman praktis sebagai pijakan memasuki dunia kerja."],
  ["Sertifikasi", "Melengkapi perjalanan belajar dengan persiapan kompetensi dan pengakuan yang relevan."],
] as const;

export default function TentangPage() {
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
              <a
                className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-black px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h1 className="mt-5 max-w-[720px] text-[42px] font-semibold leading-[1.06] tracking-tight md:text-[68px]">
              Mengembangkan kompetensi untuk dampak kerja yang lebih baik.
            </h1>
            <p className="mt-6 max-w-[660px] text-[17px] leading-[1.75] text-white/78 md:text-[18px]">
              Akademi Quality adalah partner pembelajaran bagi individu dan organisasi
              di bidang QHSE dan Rumah Sakit. Kami menghubungkan pengetahuan,
              pengalaman praktisi, dan kebutuhan nyata di tempat kerja.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href="/kontak"
              >
                Hubungi Kami
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-[1.04/1] overflow-hidden rounded-[30px]">
              <Image
                src="/hero.png"
                alt="Pelatihan Akademi Quality"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/5 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/18 bg-black px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] md:left-8 md:right-8">
              <p className="text-[13px] font-semibold leading-relaxed text-white">
                Pembelajaran yang praktis untuk membantu tim menjaga mutu,
                keselamatan, dan performa layanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fbfbfb_48%,#fff2f7_100%)] px-5 py-20 text-black md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.45]" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#c84d7c]">Arah Akademi Quality</p>
              <h2 className="mt-3 text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">Visi yang jelas, misi yang dapat dijalankan.</h2>
            </div>
            <p className="max-w-[360px] text-[15px] leading-relaxed text-black/58 md:text-right">Landasan kami untuk membuat proses belajar terus relevan bagi manusia dan organisasi.</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <article className="relative overflow-hidden rounded-[30px] border border-[#f1b8cc] bg-white p-7 shadow-[0_24px_80px_rgba(21,21,21,0.08)] md:p-10">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#fff2f7]" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c84d7c] text-white shadow-[0_14px_35px_rgba(200,77,124,0.28)]">
                <Award size={22} />
              </span>
              <p className="relative mt-8 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c84d7c]">Visi · 01</p>
              <h3 className="relative mt-3 text-[34px] font-bold leading-tight tracking-tight md:text-[46px]">Menjadikan kompetensi sebagai dampak nyata.</h3>
              <p className="relative mt-6 text-[16px] leading-[1.8] text-black/68">
                Menjadi partner pembelajaran yang dipercaya untuk membangun kompetensi QHSE dan Rumah Sakit di Indonesia, agar setiap peserta mampu mengubah pengetahuan menjadi keputusan dan praktik kerja yang berdampak.
              </p>
            </article>

            <article id="misi" className="rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(21,21,21,0.08)] md:p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1b8cc] bg-[#fff2f7] text-[#c84d7c]">
                  <BookOpenCheck size={22} />
                </span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#c84d7c]">Misi · 02</p>
                  <h3 className="mt-1 text-[32px] font-bold leading-tight tracking-tight md:text-[42px]">Membuat belajar bergerak ke depan.</h3>
                </div>
              </div>
              <ol className="mt-8 grid gap-3">
                {missions.map((mission, index) => (
                  <li className="grid gap-4 rounded-2xl border border-black/8 bg-[#fafafa] p-4 sm:grid-cols-[42px_1fr] sm:items-start" key={mission}>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c84d7c] text-[13px] font-bold text-white">0{index + 1}</span>
                    <p className="pt-1 text-[15px] leading-[1.7] text-black/66">{mission}</p>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_52%,#2b101c_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c84d7c]/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#f0a0bc]">
              Siapa yang kami bantu?
            </p>
            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
              Kompetensi untuk kebutuhan nyata di lapangan.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/65">
              Program kami disusun untuk mendampingi peran, layanan, dan organisasi yang terus berkembang.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audienceCards.map(({ icon: Icon, title, description }, index) => (
            <article
              className="group relative min-h-[310px] overflow-hidden rounded-[28px] border border-white/12 bg-[#181616] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e681a7]/60 hover:bg-[#21191d]"
              key={title}
            >
              <div className="absolute right-5 top-5 text-[52px] font-bold leading-none text-white/[0.06] transition-colors group-hover:text-[#f0a0bc]/20">
                0{index + 1}
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c84d7c] text-white shadow-[0_12px_30px_rgba(200,77,124,0.26)]">
                <Icon size={22} />
              </span>
              <h3 className="relative mt-7 text-[24px] font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="relative mt-4 text-[15px] leading-[1.75] text-white/65">
                {description}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#e681a7] to-transparent opacity-70" />
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-9 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_0.74fr] md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-[#242424] px-4 py-2 text-[13px] font-semibold text-white/85">
              Konsultasi Kebutuhan Training
            </span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight md:text-[50px]">
              Satu perjalanan belajar, untuk kebutuhan kompetensi yang berbeda.
            </h2>
            <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-white/75">
              Dari persiapan mahasiswa hingga penguatan praktik QHSE, mutu layanan
              Rumah Sakit, dan sertifikasi, kami membantu memilih jalur belajar yang tepat.
            </p>
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.14)]"
              href="/kontak"
            >
              Hubungi Kami
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {focusAreas.map(([title, description]) => (
              <div
                className="relative rounded-2xl border border-white/15 bg-[#292426] px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
                key={title}
              >
                <p className="text-[20px] font-semibold">{title}</p>
                <p className="mt-1 text-[12px] text-white/62">
                  {description}
                </p>
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
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Navigasi</p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                <Link className="transition-colors hover:text-white" href="/">Beranda</Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="/tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="/kontak">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Program</p>
            <div className="mt-5 grid gap-y-3 text-[15px] text-white/70">
              <Link className="transition-colors hover:text-white" href="/#program">Public Training</Link>
              <Link className="transition-colors hover:text-white" href="/#program">Online Training</Link>
              <Link className="transition-colors hover:text-white" href="/#program">InHouse Training</Link>
              <Link className="transition-colors hover:text-white" href="/#program">Sertifikasi</Link>
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
        href="/kontak"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Konsultasi Gratis!</span>
      </a>
    </main>
  );
}





