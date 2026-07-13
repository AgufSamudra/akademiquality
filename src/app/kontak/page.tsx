import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Akademi Quality untuk konsultasi pelatihan ISO, corporate training, jadwal kelas, dan informasi sertifikat.",
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Kontak - Akademi Quality",
    description:
      "Butuh bantuan memilih training ISO? Hubungi tim Akademi Quality melalui email atau WhatsApp.",
    url: "/kontak",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kontak Akademi Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak - Akademi Quality",
    description:
      "Butuh bantuan memilih training ISO? Hubungi tim Akademi Quality melalui email atau WhatsApp.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];

const whatsappHref =
  "https://wa.me/6289507639360?text=Hallo%20Akademi%20Quality%2C%20saya%20ingin%20konsultasi%20training%20ISO.";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "akademiquality@gmail.com",
    description: "Kirim kebutuhan training, jadwal, atau pertanyaan kerja sama.",
    href: "mailto:akademiquality@gmail.com",
    action: "Kirim Email",
  },
  {
    icon: MessageCircle,
    label: "Nomor HP/WA",
    value: "0895-0763-9360 (Sarah)",
    description: "Respon cepat untuk konsultasi program dan penawaran harga.",
    href: whatsappHref,
    action: "Chat WhatsApp",
  },
];

const helpTopics = [
  "Konsultasi pilihan program ISO",
  "Informasi jadwal online dan offline",
  "Penawaran corporate training",
  "Pertanyaan sertifikat dan fasilitas",
];

const responseHighlights = [
  ["Respon Terarah", "Tim kami membantu memetakan kebutuhan Anda sebelum merekomendasikan program."],
  ["Fleksibel", "Diskusi dapat dilakukan untuk training individu, mahasiswa, maupun perusahaan."],
  ["Siap Indonesia", "Pelatihan online dan offline tersedia untuk berbagai kota di Indonesia."],
];

const footerTrainings = ["ISO 9001", "ISO 14001", "ISO 27001"];

function SocialMark({ label }: { label: string }) {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px] font-semibold uppercase leading-none">
      {label}
    </span>
  );
}

export default function KontakPage() {
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
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              Konsultasi
              <MessageCircle size={16} />
            </a>
          </div>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_48%,#34131f_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.09]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              <Sparkles size={16} />
              Kontak Akademi Quality
            </span>
            <h1 className="mt-5 max-w-[720px] text-[43px] font-semibold leading-[1.05] tracking-tight md:text-[72px]">
              Butuh bantuan memilih training ISO?
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] leading-[1.75] text-white/78 md:text-[18px]">
              Hubungi tim kami untuk konsultasi jadwal, biaya, metode
              pelatihan, corporate training, dan kebutuhan sertifikasi ISO yang
              paling sesuai untuk Anda atau perusahaan.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Chat Sarah
                <MessageCircle size={18} />
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
                href="mailto:akademiquality@gmail.com"
              >
                Email Kami
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[26px] bg-white p-6 text-black md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-semibold text-[#b84a72]">
                      Jalur komunikasi utama
                    </p>
                    <h2 className="mt-2 text-[28px] font-bold leading-tight md:text-[36px]">
                      Hubungi team kami!
                    </h2>
                  </div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-black text-white">
                    <Phone size={23} />
                  </span>
                </div>

                <div className="mt-7 grid gap-3">
                  {contactCards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        className="group rounded-[24px] border border-black/8 bg-[#f7f7f7] p-5 transition-colors hover:bg-black hover:text-white"
                        href={item.href}
                        key={item.label}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                      >
                        <span className="flex items-center gap-3 text-[14px] font-semibold text-[#5d5659] transition-colors group-hover:text-white/72">
                          <Icon size={18} />
                          {item.label}
                        </span>
                        <strong className="mt-3 block text-[18px] leading-snug md:text-[20px]">
                          {item.value}
                        </strong>
                        <span className="mt-2 block text-[14px] leading-relaxed text-[#5d5659] transition-colors group-hover:text-white/72">
                          {item.description}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/18 bg-black/56 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl md:left-9 md:right-9">
              <p className="flex items-center gap-2 text-[13px] font-semibold leading-relaxed text-white">
                <Clock3 size={16} />
                Tanya langsung untuk kebutuhan spesifik training Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_55%,#fbf7f8_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:74px_74px] opacity-[0.07]" />
        <div className="relative mx-auto grid max-w-[1120px] gap-7 lg:grid-cols-[0.86fr_1.14fr]">
          <article className="rounded-[32px] bg-black p-7 text-white shadow-[0_24px_85px_rgba(0,0,0,0.12)] md:rounded-[42px] md:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
              <ShieldCheck size={22} />
            </span>
            <h2 className="mt-7 text-[34px] font-bold leading-tight tracking-tight md:text-[50px]">
              Ceritakan kebutuhan training Anda.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-white/72 md:text-[17px]">
              Kami akan bantu arahkan program yang cocok, mulai dari kelas
              publik, training online, training offline, sampai program khusus
              perusahaan dengan studi kasus yang relevan.
            </p>
            <div className="mt-8 grid gap-3">
              {helpTopics.map((topic) => (
                <div className="flex items-start gap-3" key={topic}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#25d366]" size={19} />
                  <span className="text-[15px] leading-relaxed text-white/82">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {responseHighlights.map(([title, description]) => (
              <article
                className="rounded-[28px] border border-black/8 bg-white/82 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl md:p-7"
                key={title}
              >
                <h3 className="text-[22px] font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.75] text-[#4c4648]">
                  {description}
                </p>
              </article>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Mulai Konsultasi
                <Send size={17} />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-[15px] font-semibold text-black"
                href="mailto:akademiquality@gmail.com"
              >
                akademiquality@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#101010_0%,#000_62%,#251018_100%)] text-white shadow-[0_24px_85px_rgba(0,0,0,0.13)] md:rounded-[48px]">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 md:p-11">
              <p className="text-[15px] font-semibold text-white/64">
                Siap melayani di seluruh Indonesia
              </p>
              <h2 className="mt-3 max-w-[650px] text-[34px] font-bold leading-tight tracking-tight md:text-[52px]">
                Konsultasi lebih cepat lewat WhatsApp.
              </h2>
              <p className="mt-5 max-w-[590px] text-[16px] leading-[1.8] text-white/72">
                Klik tombol di bawah, sampaikan kebutuhan training Anda, lalu
                tim kami akan membantu memberikan arahan program dan informasi
                berikutnya.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Chat 0895-0763-9360
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src="/hero.png"
                alt="Pelatihan ISO Akademi Quality"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 470px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/14 bg-black/54 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <p className="text-[14px] font-semibold">
                    Online via Zoom atau offline sesuai kebutuhan perusahaan.
                  </p>
                </div>
              </div>
            </div>
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
                <a href="/kontak">Kontak</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] font-medium">Training</h3>
            <div className="mt-4 grid gap-y-2 text-[15px] font-light">
              <a href="/qhse">ISO 9001</a>
              <a href="/qhse">ISO 14001</a>
              <a href="/qhse">ISO 27001</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1120px] border-t border-white/10 py-3 text-[12px]">
          Copyright &copy; 2026 - Akademi Quality
        </div>
      </footer>

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





