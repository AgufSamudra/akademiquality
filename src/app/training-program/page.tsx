import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ShieldCheck,
  ChevronDown,
  Clock3,
  LogIn,
  Mail,
  Settings2,
  Building2,
  MapPin,
  MessageCircle,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Training Program",
  description:
    "Training Program Akademi Quality berfokus pada praktik dan studi kasus industri untuk pelatihan ISO online maupun offline bersama trainer berpengalaman.",
  alternates: {
    canonical: "/training-program",
  },
  openGraph: {
    title: "Training Program - Akademi Quality",
    description:
      "Pelatihan ISO online/offline semi-private, fokus praktikal dan studi kasus industri.",
    url: "/training-program",
    images: [
      {
        url: "/training-program.png",
        width: 1200,
        height: 630,
        alt: "Training Program Akademi Quality",
      },
    ],
  },
};

const navItems = [
  { label: "Tentang", href: "/tentang" },
  { label: "Training Program", href: "/training-program" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Sertifikat", href: "https://sertifikat.akademiquality.com/" },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
];

const scheduleItems = [
  ["Training ISO 9001", "Silakan hubungi admin", "Zoom Meetings (Online)"],
  ["Training ISO 14001", "Silakan hubungi admin", "Zoom Meetings (Online)"],
  ["Training ISO 27001", "Silakan hubungi admin", "Zoom Meetings (Online)"],
];

const featuredPrograms = [
  {
    title: "ISO 9001 - Sistem Manajemen Mutu",
    description:
      "Banyak masalah kerja muncul karena proses yang tidak konsisten. ISO 9001 memberikan kerangka kerja mutu yang dibutuhkan oleh profesional di berbagai sektor industri.",
    image: "/ISO-9001.png",
    href: "/training-iso-9001-online-bersertifikat",
  },
  {
    title: "ISO 14001 - Sistem Manajemen Lingkungan",
    description:
      "ISO 14001 menjadi standar penting di dunia industri saat ini. Memahaminya membantu Anda menghadapi tuntutan pengelolaan lingkungan yang semakin ketat.",
    image: "/ISO-14001.png",
    href: "/training-iso-14001-online-murah-bersertifikat",
  },
  {
    title: "ISO 27001 - Sistem Manajemen Keamanan Informasi",
    description:
      "Keamanan informasi bukan lagi urusan tim IT semata. ISO 27001 dibutuhkan oleh banyak peran profesional untuk menjaga data, kepercayaan, dan kelangsungan bisnis.",
    image: "/ISO-27001.png",
    href: "/training-iso-27001-online-murah-terjangkau-bersertifikat",
  },
];

const pricing = [
  {
    title: "Online Training",
    originalPrice: "Rp.3.800.000",
    price: "Rp.2.900.000",
    features: [
      "E-Sertifikat",
      "Softcopy Materi",
      "Zoom Recording",
      "Komunitas",
      "Konsultasi Pasca Training",
    ],
  },
  {
    title: "Offline Training",
    originalPrice: "Rp.5.500.000",
    price: "Rp.4.200.000",
    features: [
      "E-Sertifikat",
      "Softcopy Materi",
      "Training Kit",
      "Konsultasi Pasca Training",
    ],
  },
];

const faqItems = [
  [
    "Apa itu Program Training di Akademi Quality?",
    "Program Training merupakan kelas pelatihan terjadwal yang dilaksanakan secara kolektif, ditujukan bagi peserta individu yang ingin meningkatkan kompetensi profesional tanpa terikat program pelatihan perusahaan.",
  ],
  [
    "Siapa Narasumber di Akademi Quality?",
    "Narasumber kami merupakan ahli praktisi di bidang ISO yang sudah memiliki pengalaman minimal 10+ tahun di dunia industri.",
  ],
  [
    "Dimana Training dilaksanakan?",
    "Training dilaksanakan dengan dua metode, yaitu online dan offline. Online dilaksanakan via Zoom, sedangkan offline dilaksanakan di hotel berbintang dan dapat melayani berbagai daerah di Indonesia.",
  ],
  [
    "Apakah ada penawaran khusus untuk mahasiswa?",
    "Tersedia penawaran khusus untuk mahasiswa. Peserta dapat langsung menghubungi admin via WhatsApp untuk informasi syarat dan ketentuan.",
  ],
];

function SocialMark({ label }: { label: string }) {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px] font-semibold uppercase leading-none">
      {label}
    </span>
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
        <p className="mb-2 text-[16px] font-bold tracking-tight text-[#b84a72] md:text-[19px]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[31px] font-bold leading-tight tracking-tight text-black md:text-[50px]">
        {title}
      </h2>
    </div>
  );
}

export default function TrainingProgramPage() {
  return (
    <main className="min-h-dvh bg-white text-black">
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
              href="/login"
            >
              Login
              <LogIn size={16} />
            </a>
          </div>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#060606_0%,#101010_48%,#251016_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              <Sparkles size={16} />
              Training ISO Online & Offline
            </span>
            <h1 className="mt-5 max-w-[760px] text-[42px] font-semibold leading-[1.06] tracking-tight md:text-[66px]">
              Training Program - Fokus Praktikal dan Studi Kasus Industri
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.75] text-white/78 md:text-[18px]">
              Pelatihan online/offline semi-private bersama trainer
              berpengalaman 10+ tahun di industri, fokus praktik dan studi
              kasus dunia kerja.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href="#kontak-training"
              >
                Hubungi Kami
                <MessageCircle size={18} />
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
                href="#jadwal"
              >
                Lihat Jadwal
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] pb-5">
            <div className="relative aspect-[1.06/1] overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/training-program.png"
                  alt="Training Program Akademi Quality"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/5 to-transparent" />
              </div>
            </div>
            <div className="absolute bottom-0 left-4 right-4 rounded-2xl border border-white/18 bg-black/50 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl md:-bottom-5 md:left-8 md:right-8">
              <p className="text-[13px] font-semibold leading-relaxed text-white">
                Semi-private, interaktif, dan diarahkan untuk kebutuhan
                profesional di lapangan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jadwal" className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle
            eyebrow="Jadwal Pelatihan Terdekat"
            title="Pilih kelas terjadwal sesuai kebutuhan Anda."
          />
          <div className="mt-10 overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <div className="hidden grid-cols-[1fr_0.82fr_0.9fr] bg-black px-6 py-4 text-[13px] font-semibold uppercase text-white/82 md:grid">
              <span>Pelatihan</span>
              <span>Tanggal</span>
              <span>Metode</span>
            </div>
            {scheduleItems.map(([training, date, method]) => (
              <div
                className="grid gap-4 border-t border-black/8 px-5 py-5 text-[15px] md:grid-cols-[1fr_0.82fr_0.9fr] md:items-center md:px-6"
                key={training}
              >
                <div className="flex items-center gap-3 font-semibold">
                  <CalendarDays className="shrink-0 text-[#c84d7c]" size={19} />
                  {training}
                </div>
                <div className="flex items-center gap-3 text-[#444040]">
                  <Clock3 className="shrink-0 text-black/50" size={18} />
                  {date}
                </div>
                <div className="flex items-center gap-3 text-[#444040]">
                  <MapPin className="shrink-0 text-black/50" size={18} />
                  {method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-x-0 top-24 h-[520px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,0,0,0.045),transparent_34%),radial-gradient(circle_at_82%_32%,rgba(200,77,124,0.035),transparent_36%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionTitle
            eyebrow="Pilihan Pelatihan"
            title="ISO di Akademi Quality"
          />
          <div className="mt-10 grid gap-7 md:mt-14">
            {featuredPrograms.map((program, index) => (
              <article
                className="group grid items-center gap-7 overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_32px_95px_rgba(0,0,0,0.11)] md:grid-cols-2 md:gap-8 md:rounded-[34px] md:p-7"
                key={program.title}
              >
                <div
                  className={`relative aspect-[1.35/1] overflow-hidden rounded-[28px] ${
                    index === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur-xl">
                    Program 0{index + 1}
                  </span>
                </div>
                <div className={index === 1 ? "md:order-1 md:px-3" : "md:px-3"}>
                  <span className="inline-flex rounded-full bg-black px-4 py-2 text-[12px] font-semibold uppercase text-white">
                    Training ISO
                  </span>
                  <h3 className="mt-5 text-[29px] font-bold leading-tight tracking-tight md:text-[42px]">
                    {program.title}
                  </h3>
                  <p className="mt-5 max-w-[570px] text-[16px] leading-[1.75] text-[#444040]">
                    {program.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
                      href={program.href}
                    >
                      Lihat Detail
                      <ArrowRight size={16} />
                    </a>
                    <a
                      className="w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-center text-[14px] font-semibold text-black backdrop-blur-md transition-colors hover:bg-white sm:w-auto"
                      href="#kontak-training"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative mx-auto w-full max-w-[620px]">
            <Image
              src="/pricing-section.png"
              alt="Suasana training Akademi Quality"
              width={900}
              height={720}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
            />
          </div>

          <div>
            <h2 className="max-w-[660px] text-[34px] font-bold leading-tight tracking-tight text-black md:text-[48px]">
              Mulai Training dengan Harga yang Terjangkau!
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {pricing.map(({ title, originalPrice, price, features }) => (
                <article
                  className="relative overflow-hidden rounded-[30px] border border-black/12 bg-white/72 px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/86 hover:shadow-[0_34px_100px_rgba(0,0,0,0.14)] md:px-8 md:py-10"
                  key={title}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black via-[#c84d7c] to-black" />
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#c84d7c]/10 blur-3xl" />
                  <h3 className="relative mx-auto max-w-[190px] text-[29px] font-bold leading-tight tracking-tight md:text-[34px]">
                    {title}
                  </h3>
                  <div className="relative mx-auto mt-7 h-px max-w-[190px] bg-black/14" />
                  <div className="relative mt-9">
                    <p className="text-[18px] font-medium text-[#9b9b9b] line-through">
                      {originalPrice}
                    </p>
                    <p className="mt-1 text-[30px] font-semibold leading-none text-black">
                      {price}
                    </p>
                  </div>
                  <div className="relative mx-auto mt-7 h-px max-w-[190px] bg-black/8" />
                  <ul className="relative mt-6 grid gap-3 text-left">
                    {features.map((feature) => (
                      <li
                        className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white/62 px-4 py-3 text-[15px] leading-snug text-[#4f5665] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md"
                        key={feature}
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)]">
                          <Check size={18} strokeWidth={3.2} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-x-0 top-20 h-[420px] bg-[radial-gradient(circle_at_20%_20%,rgba(200,77,124,0.04),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.035),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl md:grid-cols-[0.95fr_1.05fr] md:rounded-[36px] md:p-10">
          <div>
            <SectionTitle
              centered={false}
              eyebrow="Pembayaran Lebih Mudah"
              title="Praktis & Fleksibel"
            />
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.8] text-[#444040]">
              Kami menghadirkan solusi pembayaran fleksibel yang mendukung
              berbagai metode. Transaksi kini lebih simpel, cepat, dan aman,
              sesuai dengan gaya dan kenyamanan Anda.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Aman", ShieldCheck],
              ["Fleksibel", Settings2],
              ["Corporate", Building2],
            ].map(([label, Icon]) => (
              <div
                className="rounded-[24px] border border-black/8 bg-white/76 p-5 text-center shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-md"
                key={label as string}
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                  <Icon size={22} />
                </span>
                <p className="mt-4 text-[15px] font-semibold text-black">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div
          id="kontak-training"
          className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-9 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_0.74fr] md:rounded-[36px] md:px-10 md:py-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/85 backdrop-blur-md">
              Konsultasi Training
            </span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight md:text-[50px]">
              Siap ikut kelas ISO terdekat?
            </h2>
            <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-white/75">
              Hubungi admin untuk jadwal, biaya, promo mahasiswa, dan
              rekomendasi program yang paling sesuai dengan kebutuhan Anda.
            </p>
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.14)]"
              href="/kontak"
            >
              Hubungi Kami
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="relative grid gap-3">
            {["Semi-Private", "Online via Zoom", "Offline di Hotel"].map((item) => (
              <div
                className="relative flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.09] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                key={item}
              >
                <UsersRound className="shrink-0 text-white" size={19} />
                <p className="text-[16px] font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[920px]">
          <h2 className="mb-8 text-center text-[34px] font-bold tracking-tight md:text-[40px]">
            FAQ
          </h2>
          <div className="divide-y divide-[#cecece] border-y border-[#cecece]">
            {faqItems.map(([question, answer], index) => (
              <details className="group py-5" key={question} open={index === 0}>
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

      <footer className="mt-10 bg-black px-5 pt-12 text-white md:px-10">
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
                <a href="/training-program">Training Program</a>
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





