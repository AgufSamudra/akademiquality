import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LogIn,
  Mail,
  MessageCircle,
} from "lucide-react";

import Image from "next/image";
import { CountUpNumber } from "@/components/CountUpNumber";
import { MobileMenu } from "@/components/MobileMenu";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

const navItems = [
  { label: "Tentang", href: "/tentang" },
  { label: "Training Program", href: "/training-program" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Sertifikat", href: "https://sertifikat.akademiquality.com/" },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];

const categories = [
  ["ISO 9001", "Sistem Manajemen Mutu"],
  ["ISO 14001", "Sistem Manajemen Lingkungan"],
  ["ISO 27001", "Sistem Manajemen Keamanan Informasi"],
];

const stats = [
  ["350+", "Pelatihan Dilaksanakan"],
  ["500+", "Peserta Mengikuti"],
  ["80+", "Materi Pelatihan"],
  ["90+", "Seluruh Kota"],
];

const benefits = [
  [
    "Qualitas Pelatihan",
    "Kami percaya bahwa kualitas adalah kunci kesuksesan. Setiap modul pelatihan kami dirancang agar Anda tidak hanya belajar, tetapi juga siap menghadapi tantangan nyata di dunia kerja.",
  ],
  [
    "Terjangkau & Bersaing",
    "Investasi masa depan, dengan biaya yang terjangkau dan kompetitif, Anda bisa mendapatkan pelatihan berkualitas yang memberi nilai lebih besar dibandingkan biaya yang Anda keluarkan.",
  ],
  [
    "Trainer Pengalaman",
    "Belajar langsung dari praktisi berpengalaman! Trainer kami memiliki lebih dari 10+ tahun pengalaman di industri, siap membagikan ilmu, tips, dan strategi berharga.",
  ],
  [
    "Sistem Integrasi AI",
    "Dapatkan pengalaman belajar yang berlanjut setelah pelatihan! Kami menyediakan aplikasi pendukung berbasis AI yang akan membantu Anda mereview materi dan latihan soal.",
  ],
  [
    "Sertifikat Pelatihan",
    "Siapapun bisa mengeluarkan sertifikat pelatihan dengan mudah, namun kami memberikan pengalaman dan pemahaman yang dibutuhkan peserta dalam dunia industri ISO.",
  ],
];

const whyItems = [
  "Pelatihan yang Fleksibel",
  "Dukungan bersama Komunitas",
  "Materi pelatihan selalu di update",
  "Memiliki Trainer berpengalaman 10+ Tahun",
  "E-Sertfikat yang terintegrasi dengan Website kami",
];

const courses = [
  "Pelatihan ISO 9001:2015 Terjangkau Bersertifikat - Akademi Quality",
  "Pelatihan ISO 14001:2015 - Harga Terjangkau dan Bersertifikat",
  "Pelatihan ISO 27001 Harga Terjangkau dan Bersertifikat",
];

const courseImages = ["/ISO-9001.png", "/ISO-14001.png", "/ISO-27001.png"];
const courseHrefs = [
  "/training-iso-9001-online-bersertifikat",
  "/training-iso-14001-online-murah-bersertifikat",
  "/training-iso-27001-online-murah-terjangkau-bersertifikat",
];

const faqItems = [
  [
    "Siapa Narasumber di Akademi Quality?",
    "Narasumber kami merupakan ahli praktisi di bidang ISO yang sudah memiliki pengalaman minimal 10+ Tahun di dunia industri!",
  ],
  [
    "Dimana Training di Laksanakan?",
    "Training dilaksanakan dengan dua metode, yaitu Online dan Offline. Online dilaksanakan via Zoom dan offline dilaksanakan di Hotel Berbintang. Kami siap melayani ke seluruh daerah di Indonesia.",
  ],
  [
    "Siapa saja yang bisa mengikuti Pelatihan ISO?",
    "Semua kalangan bisa mengikuti pelatihan ISO. ISO bersifat umum dan bisa diterapkan di berbagai industri, jadi semua kalangan siap kami layani.",
  ],
  [
    "Apakah bisa menyesuaikan dengan kebutuhan training ISO nya?",
    "Yaa tentu anda bisa. Kami bisa menyesuaikan kebutuhan industri anda untuk training ISO di Akademi Quality.",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/logo.png"),
      description:
        "Provider training ISO untuk ISO 9001, ISO 14001, dan ISO 27001 di Indonesia.",
      sameAs: [
        "https://www.instagram.com/akademiquality/",
        "https://www.facebook.com/profile.php?id=61562779364975",
        "https://www.linkedin.com/company/akademi-quality/",
      ],
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "id-ID",
    },
    {
      "@type": "ItemList",
      name: "Program Pelatihan ISO Akademi Quality",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Course",
            name: "Pelatihan ISO 9001",
            description:
              "Pelatihan sistem manajemen mutu ISO 9001 dari Akademi Quality.",
            provider: {
              "@type": "Organization",
              name: "Akademi Quality",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            name: "Pelatihan ISO 14001",
            description:
              "Pelatihan sistem manajemen lingkungan ISO 14001 dari Akademi Quality.",
            provider: {
              "@type": "Organization",
              name: "Akademi Quality",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Course",
            name: "Pelatihan ISO 27001",
            description:
              "Pelatihan sistem manajemen keamanan informasi ISO 27001 dari Akademi Quality.",
            provider: {
              "@type": "Organization",
              name: "Akademi Quality",
            },
          },
        },
      ],
    },
  ],
};

function BlankCanvas({
  className = "",
  label = "Area gambar kosong",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-white ${className}`}
      aria-label={label}
      role="img"
    >
      <canvas className="absolute inset-0 h-full w-full" />
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-2 text-[18px] font-bold tracking-tight text-black md:text-[22px]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[30px] font-bold leading-tight tracking-tight text-black md:text-[50px]">
        {title}
      </h2>
    </div>
  );
}

function SocialMark({ label }: { label: string }) {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px] font-semibold uppercase leading-none">
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 bg-black/70 px-3 py-3 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-11">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_18px_55px_rgba(0,0,0,0.28)] md:gap-6 md:px-5">
          <Image
            src="/logo.png"
            alt="Akademi Quality"
            width={198}
            height={72}
            className="h-[46px] w-[136px] shrink-0 object-contain md:h-[64px] md:w-[178px]"
          />
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
              href="/login"
            >
              Login
              <LogIn size={16} />
            </a>
          </div>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#060606_0%,#101010_48%,#251016_100%)] px-5 py-14 text-white md:min-h-[700px] md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col items-start">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              Training ISO Online & Offline
            </span>
            <h1 className="mt-4 max-w-[680px] text-[42px] font-semibold leading-[1.08] tracking-tight md:text-[65px]">
              Akademi Quality
            </h1>
            <p className="mt-4 text-[20px] font-semibold tracking-tight md:text-[25px]">
              Provider Training ISO Top di Indonesia
            </p>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.7] text-white md:text-[18px]">
              Kami membantu perusahaan menerapkan standar ISO secara mudah dan
              efektif, mencakup ISO 9001, 14001, dan 27001. Memastikan tim Anda
              siap audit, lebih efisien, dan dipercaya pelanggan.
            </p>
            <a
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 md:mt-10 md:px-8 md:py-4 md:text-[18px]"
              href="#kontak"
            >
              Hubungi Kami
              <MessageCircle size={19} />
            </a>
            <div className="mt-8 grid w-full max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-3 md:mt-9">
              {stats.slice(0, 3).map(([value, label]) => (
                <div
                  className="rounded-2xl border border-white/12 bg-white/[0.09] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                  key={label}
                >
                  <CountUpNumber
                    className="block text-[22px] font-semibold leading-none"
                    value={value}
                  />
                  <p className="mt-2 text-[11px] leading-snug text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[540px] pb-5">
            <div className="relative aspect-[1.1/1] overflow-hidden rounded-[26px] shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:rounded-[32px]">
              <Image
                src="/hero.png"
                alt="Training ISO Akademi Quality"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-4 right-4 rounded-2xl border border-white/18 bg-black/45 px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl md:-bottom-5 md:left-8 md:right-8 md:px-5 md:py-4">
              <p className="text-[12px] font-semibold text-white md:text-[13px]">
                Siap audit, lebih efisien, dan dipercaya pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_52%,#fbf7f8_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:74px_74px] opacity-[0.08]" />
        <div className="relative mx-auto max-w-[1120px] rounded-[28px] border border-black/8 bg-white/55 px-4 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl md:rounded-[38px] md:px-10 md:py-14">
          <SectionTitle
            eyebrow="Kategori Pelatihan ISO"
            title="Temukan pelatihan ISO Anda!"
          />
          <div className="mx-auto mt-10 grid max-w-[1000px] gap-6 md:grid-cols-3">
            {categories.map(([title, subtitle], index) => (
              <article
                className="group relative min-h-[190px] overflow-hidden rounded-[26px] border border-white/70 bg-white/55 px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:bg-white/75 hover:shadow-[0_28px_75px_rgba(0,0,0,0.12)]"
                key={title}
              >
                <div className="absolute right-5 top-5 text-[54px] font-bold leading-none text-black/[0.05] transition-colors group-hover:text-[#c84d7c]/10">
                  0{index + 1}
                </div>
                <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                  ISO
                </div>
                <h3 className="relative text-[23px] font-bold tracking-tight text-black">
                  {title}
                </h3>
                <p className="relative mt-2 max-w-[250px] text-[15px] font-medium leading-[1.45] text-[#444040]">
                  {subtitle}
                </p>
                <a
                  className="relative mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-black transition-colors hover:text-[#b84a72]"
                  href="#kontak"
                >
                  Lihat program
                  <ArrowRight size={15} />
                </a>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-black via-[#c84d7c] to-black opacity-0 transition-opacity group-hover:opacity-80" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10">
        <SectionTitle
          eyebrow="Wujudkan Standar Terbaik Perusahaan Anda!"
          title="Dapatkan pelatihan ISO yang terbukti efektif!"
        />
        <div className="mx-auto mt-11 grid max-w-[950px] gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <CountUpNumber
                className="block text-[42px] font-semibold leading-none md:text-[50px]"
                value={value}
              />
              <p className="mt-3 text-[18px] font-semibold text-[#444040]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 pb-16 md:px-10 md:pb-24">
        <div className="absolute inset-x-0 top-16 h-[360px] bg-[radial-gradient(circle_at_20%_20%,rgba(200,77,124,0.045),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.035),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[1120px] gap-5 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map(([title, description], index) => (
            <article
              className="group relative overflow-hidden rounded-[26px] border border-white/80 bg-white/72 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/88 hover:shadow-[0_28px_80px_rgba(0,0,0,0.1)] lg:min-h-[360px]"
              key={title}
            >
              <div className="absolute right-4 top-4 text-[44px] font-bold leading-none text-black/[0.04] transition-colors group-hover:text-[#c84d7c]/10">
                0{index + 1}
              </div>
              <div className="mb-8 h-1.5 w-14 rounded-full bg-gradient-to-r from-black to-[#c84d7c]" />
              <h3 className="relative text-[22px] font-bold leading-tight tracking-tight text-black">
                {title}
              </h3>
              <p className="relative mt-5 text-[14px] font-medium leading-[1.6] text-[#444040]">
                {description}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-black via-[#c84d7c] to-black opacity-0 transition-opacity group-hover:opacity-80" />
            </article>
          ))}
        </div>
      </section>

      <section id="program" className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-x-0 top-24 h-[520px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,0,0,0.045),transparent_34%),radial-gradient(circle_at_82%_32%,rgba(200,77,124,0.035),transparent_36%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionTitle eyebrow="Berbagai Program" title="Akademi Quality" />
          <div className="mt-10 grid gap-7 md:mt-14">
            <article className="group grid items-center gap-7 overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_32px_95px_rgba(0,0,0,0.11)] md:grid-cols-[0.92fr_1.08fr] md:gap-8 md:rounded-[34px] md:p-7">
              <div className="relative order-2 aspect-[1.1/1] overflow-hidden rounded-[28px] md:order-1">
                <Image
                  src="/training-program.png"
                  alt="Training Program Akademi Quality"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur-xl">
                  Live Online & Offline
                </span>
              </div>
              <div className="order-1 md:order-2 md:px-3">
                <span className="inline-flex rounded-full bg-black px-4 py-2 text-[12px] font-semibold uppercase text-white">
                  Program 01
                </span>
                <h3 className="mt-5 text-[30px] font-bold leading-tight tracking-tight md:text-[44px]">
                  Training Program
                </h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#444040]">
                  Belajar langsung dari Trainer Profesional Industri melalui kelas
                  Live Online maupun Offline. Dirancang praktis, fokus studi kasus
                  nyata, dan mendukung pengembangan portofolio Anda.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto" href="/training-program">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </a>
                  <a className="w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-center text-[14px] font-semibold text-black backdrop-blur-md transition-colors hover:bg-white sm:w-auto" href="#kontak">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </article>

            <article className="group grid items-center gap-7 overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_32px_95px_rgba(0,0,0,0.11)] md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:rounded-[34px] md:p-7">
              <div className="md:px-3">
                <span className="inline-flex rounded-full bg-black px-4 py-2 text-[12px] font-semibold uppercase text-white">
                  Program 02
                </span>
                <h3 className="mt-5 text-[30px] font-bold leading-tight tracking-tight md:text-[44px]">
                  E-Learning
                  <span className="ml-3 align-middle text-[13px] font-semibold text-[#535353]">
                    Coming Soon
                  </span>
                </h3>
                <ul className="mt-6 grid gap-4 text-[16px] leading-[1.65] text-[#444040]">
                  {[
                    "Belajar secara fleksibel melalui bahan bacaan, projek dan Studi Kasus",
                    "Belajar secara bertahap mulai dari pengenalan sampai practical",
                    "Dukungan komunitas life-time untuk saling berdiskusi terkait materi",
                  ].map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-1 shrink-0 text-black" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[1.18/1] overflow-hidden rounded-[28px]">
                <Image
                  src="/elearning.png"
                  alt="E-Learning Akademi Quality"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-black/38 px-4 py-3 text-[13px] font-semibold text-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  Materi digital, latihan soal, dan progress belajar.
                </div>
              </div>
            </article>

            <article className="group grid items-center gap-7 overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_32px_95px_rgba(0,0,0,0.11)] md:grid-cols-[0.92fr_1.08fr] md:gap-8 md:rounded-[34px] md:p-7">
              <div className="relative order-2 aspect-[1.1/1] overflow-hidden rounded-[28px] md:order-1">
                <Image
                  src="/corporate-training.png"
                  alt="Corporate Training Akademi Quality"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur-xl">
                  Custom untuk perusahaan
                </span>
              </div>
              <div className="order-1 md:order-2 md:px-3">
                <span className="inline-flex rounded-full bg-black px-4 py-2 text-[12px] font-semibold uppercase text-white">
                  Program 03
                </span>
                <h3 className="mt-5 text-[30px] font-bold leading-tight tracking-tight md:text-[44px]">
                  Corporate Training
                </h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#444040]">
                  Program pelatihan khusus perusahaan dengan pendekatan aplikatif
                  dan relevan industri. Membantu tim meningkatkan kompetensi dan
                  siap diterapkan di lingkungan kerja.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto" href="/corporate-training">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </a>
                  <a className="w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-center text-[14px] font-semibold text-black backdrop-blur-md transition-colors hover:bg-white sm:w-auto" href="#kontak">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="text-[18px] font-semibold text-[#535353]">
              Your Future
            </p>
            <h2 className="mt-2 text-[34px] font-bold leading-tight tracking-tight md:text-[50px]">
              Tingkatkan Pemahaman Terkait Pentingnya ISO
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-[#444040]">
              Gabunglah bersama yang lain untuk mempelajari bagaimana ISO dapat
              meningkatkan kualitas dan kredibilitas bisnis. Kami siap membantu
              setiap langkah perjalanan Anda menuju lebih baik.
            </p>
          </div>
          <div>
            <h3 className="text-[28px] font-bold">
              Kenapa Memilih Kami Sebagai Penyedia Pelatihan ?
            </h3>
            <ul className="mt-7 space-y-4">
              {whyItems.map((item) => (
                <li className="flex items-start gap-3 text-[16px] font-medium text-[#444040]" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff0030]" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-2 md:gap-10 md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/85 backdrop-blur-md">
              Online Training
            </span>
            <h2 className="mt-5 text-[34px] font-bold leading-tight tracking-tight md:text-[50px]">
              Pelatihan Lebih Fleksibel Dengan Online Training
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-white/75">
              Pelatihan ISO dimana saja dengan Online Training, Jadwal yang bisa
              di custom sesuai dengan kebutuhan Anda! Atur waktu anda bersama
              kami.
            </p>
            <a className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.14)]" href="#kontak">
              Atur Jadwal
            </a>
          </div>
          <div className="relative aspect-[1.5/1] w-full overflow-hidden rounded-[22px] border border-white/12 bg-white/10 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:rounded-[28px]">
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
              <Image
                src="/online-zoom.png"
                alt="Online Training Akademi Quality"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] border border-black/8 bg-[linear-gradient(135deg,#ffffff_0%,#fafafa_62%,#fbf8f9_100%)] px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:grid-cols-[1fr_0.78fr] md:gap-10 md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#c84d7c]/6 blur-3xl" />
          <div className="relative">
            <SectionTitle
              centered={false}
              eyebrow="Hadir untuk Mahasiswa!"
              title="Pelatihan ISO kini juga terbuka untuk mahasiswa."
            />
            <p className="mt-5 max-w-[760px] text-[16px] leading-[1.8] text-[#444040]">
              Belajar sejak dini agar lebih siap menghadapi dunia profesional
              dengan pengetahuan dan keterampilan berstandar internasional.
            </p>
            <p className="mt-2 text-[13px] text-[#535353]">
              syarat dan ketentuan berlaku
            </p>
            <a className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]" href="#kontak">
              Hubungi Kami
            </a>
          </div>
          <div className="relative aspect-[1.15/1] w-full overflow-hidden rounded-[24px] border border-white/75 bg-white/50 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl md:rounded-[30px]">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/student.jpg"
                alt="Pelatihan ISO untuk mahasiswa"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 420px, calc(100vw - 40px)"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/35 bg-black/45 px-4 py-3 text-[12px] font-semibold text-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl md:bottom-6 md:left-6 md:right-6 md:text-[13px]">
              Siap lebih awal untuk dunia profesional.
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10">
        <div className="absolute inset-x-0 top-24 h-[420px] bg-[radial-gradient(circle_at_20%_20%,rgba(200,77,124,0.04),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.035),transparent_36%)]" />
        <div className="relative">
          <SectionTitle
            title="Pilih Pelatihan ISO Sesuai Kebutuhan Anda"
          />
          <p className="mx-auto mt-4 max-w-[860px] text-center text-[16px] leading-[1.8] text-[#444040]">
            Sesuaikan kebutuhan anda terkait pelatihan iso di Akademi Quality,
            kami memiliki sembilan jenis pelatihan iso yang kami siapkan untuk
            anda! Bergabung bersama kami dan yang lainnya untuk saling berbagi
            pengetahuan.
          </p>
          <div className="mx-auto mt-10 grid max-w-[1120px] gap-6 md:grid-cols-3">
            {courses.map((course, index) => (
              <article className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/65 p-2 shadow-[0_22px_70px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]" key={course}>
                <div className="relative aspect-[1.39/1] w-full overflow-hidden rounded-[22px]">
                  <Image
                    src={courseImages[index]}
                    alt={course}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 360px, calc(100vw - 40px)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-xl">
                    ISO {index === 0 ? "9001" : index === 1 ? "14001" : "27001"}
                  </span>
                </div>
                <div className="px-4 py-5">
                  <h3 className="text-[18px] font-bold leading-snug text-black">
                    {course}
                  </h3>
                  <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white" href={courseHrefs[index]}>
                    Lihat Detail
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="px-5 py-16 md:px-10">
        <div className="mx-auto flex min-h-[255px] max-w-[1120px] flex-col items-center justify-center rounded-[32px] bg-black px-5 py-10 text-center text-white md:rounded-[50px] md:px-6 md:py-12">
          <h2 className="text-[32px] font-bold leading-tight md:text-[50px]">
            Siap Melayani Di Seluruh Indonesia
          </h2>
          <p className="mt-3 text-[19px] font-medium md:text-[22px]">Tunggu apa lagi?</p>
          <p className="mt-1 text-[19px] font-medium md:text-[22px]">
            Belajar langsung dengan ahlinya
          </p>
          <a className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-black" href="/kontak">
            Hubungi Kami
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[920px]">
          <h2 className="mb-8 text-center text-[34px] font-bold tracking-tight md:text-[40px]">
            FAQ
          </h2>
          <div className="divide-y divide-[#cecece] border-y border-[#cecece]">
            {faqItems.map(([question, answer]) => (
              <details className="group py-5" key={question} open={question === faqItems[0][0]}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[18px] font-semibold">
                  {question}
                  <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={21} />
                </summary>
                <p className="mt-4 text-[15px] leading-[1.75] text-[#444040]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-16 bg-black px-5 pt-12 text-white md:px-10">
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





