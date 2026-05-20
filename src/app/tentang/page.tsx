import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  LogIn,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Tentang Akademi Quality, visi, misi, dan komitmen kami dalam menyediakan pelatihan ISO yang aplikatif untuk profesional, mahasiswa, dan perusahaan.",
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    title: "Akademi Quality - Tentang",
    description:
      "Akademi Quality bercita-cita menjadi standar emas pelatihan ISO yang aplikatif dan relevan untuk kebutuhan industri.",
    url: "/tentang",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Tentang Akademi Quality",
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

const missions = [
  "Menyajikan kurikulum yang selalu up-to-date, relevan dengan studi kasus industri terkini dan perkembangan standar ISO global.",
  "Menghadirkan praktisi industri berpengalaman sebagai mentor, untuk memastikan ilmu yang didapat 100% aplikatif di lapangan.",
  "Membangun komunitas praktisi eksklusif sebagai wadah networking dan problem-solving berkelanjutan antar alumni.",
];

const audienceCards = [
  {
    icon: UsersRound,
    title: "Untuk Profesional",
    description:
      "Kami menyasar para profesional yang ingin menjadi penggerak perubahan di organisasinya. Setiap peserta dibekali skill aplikatif untuk menerapkan ISO secara efektif dan efisien.",
  },
  {
    icon: GraduationCap,
    title: "Untuk Mahasiswa",
    description:
      "Akademi Quality hadir sebagai jembatan ke dunia kerja bagi mahasiswa melalui pemahaman ISO yang praktis, bersertifikat, dan relevan dengan kebutuhan perusahaan.",
  },
  {
    icon: ShieldCheck,
    title: "Untuk Perusahaan",
    description:
      "Program kami membantu organisasi meningkatkan daya saing, kredibilitas bisnis, dan kesiapan tim dalam membangun sistem manajemen berstandar internasional.",
  },
];

const strengths = [
  ["Standar Nasional", "Visi besar untuk menjadi rujukan pelatihan ISO yang dipercaya di Indonesia."],
  ["Aplikatif", "Materi dibangun agar peserta bisa langsung menerapkan ISO di lingkungan kerja."],
  ["Berbasis Komunitas", "Alumni mendapat ruang untuk berdiskusi dan berkembang setelah pelatihan selesai."],
  ["Siap Industri", "Fokus pada kebutuhan nyata perusahaan, audit, efisiensi, dan kredibilitas bisnis."],
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

export default function TentangPage() {
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

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#060606_0%,#101010_50%,#2a1018_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.04fr_0.96fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              <Sparkles size={16} />
              Tentang Akademi Quality
            </span>
            <h1 className="mt-5 max-w-[720px] text-[42px] font-semibold leading-[1.06] tracking-tight md:text-[68px]">
              Standar emas pelatihan ISO yang siap diterapkan.
            </h1>
            <p className="mt-6 max-w-[660px] text-[17px] leading-[1.75] text-white/78 md:text-[18px]">
              Kami bercita-cita menjadi standar emas pelatihan ISO yang diakui
              secara nasional, menciptakan profesional yang menguasai teori dan
              mampu menggunakan ISO sebagai strategi untuk efisiensi operasional
              serta standar bisnis kelas dunia.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href="/kontak"
              >
                Hubungi Kami
                <MessageCircle size={18} />
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
                href="#misi"
              >
                Lihat Misi
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-[1.04/1] overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/hero.png"
                  alt="Pelatihan ISO Akademi Quality"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/5 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/18 bg-black/50 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl md:left-8 md:right-8">
              <p className="text-[13px] font-semibold leading-relaxed text-white">
                Teori yang kuat, studi kasus nyata, dan pendampingan dari
                praktisi industri berpengalaman.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_55%,#fbf7f8_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:74px_74px] opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-[1120px] gap-7 md:grid-cols-[0.9fr_1.1fr]">
          <article className="overflow-hidden rounded-[30px] border border-white/70 bg-white/70 p-7 shadow-[0_24px_85px_rgba(0,0,0,0.08)] backdrop-blur-xl md:rounded-[38px] md:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)]">
              <Award size={22} />
            </span>
            <h2 className="mt-7 text-[34px] font-bold leading-tight tracking-tight md:text-[52px]">
              Visi
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-[#444040] md:text-[17px]">
              Menjadi standar emas pelatihan ISO yang diakui secara nasional.
              Kami ingin menciptakan generasi profesional yang tidak hanya
              menguasai teori, tetapi mampu mengaplikasikan ISO sebagai senjata
              strategis untuk mencapai efisiensi operasional dan standar bisnis
              kelas dunia.
            </p>
          </article>

          <article
            id="misi"
            className="overflow-hidden rounded-[30px] border border-white/70 bg-white/70 p-7 shadow-[0_24px_85px_rgba(0,0,0,0.08)] backdrop-blur-xl md:rounded-[38px] md:p-10"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c84d7c] text-white shadow-[0_14px_35px_rgba(200,77,124,0.2)]">
              <BookOpenCheck size={22} />
            </span>
            <h2 className="mt-7 text-[34px] font-bold leading-tight tracking-tight md:text-[52px]">
              Misi
            </h2>
            <ul className="mt-6 grid gap-4">
              {missions.map((mission) => (
                <li
                  className="flex items-start gap-3 text-[15px] leading-[1.75] text-[#444040] md:text-[16px]"
                  key={mission}
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-[#c84d7c]" size={20} />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <SectionTitle
          eyebrow="Siapa yang kami bantu?"
          title="Pelatihan ISO untuk kebutuhan nyata industri."
        />
        <div className="mx-auto mt-11 grid max-w-[1120px] gap-6 md:grid-cols-3">
          {audienceCards.map(({ icon: Icon, title, description }, index) => (
            <article
              className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/72 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
              key={title}
            >
              <div className="absolute right-5 top-5 text-[52px] font-bold leading-none text-black/[0.04] transition-colors group-hover:text-[#c84d7c]/10">
                0{index + 1}
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
                <Icon size={22} />
              </span>
              <h3 className="relative mt-7 text-[24px] font-bold tracking-tight">
                {title}
              </h3>
              <p className="relative mt-4 text-[15px] leading-[1.75] text-[#444040]">
                {description}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-black via-[#c84d7c] to-black opacity-0 transition-opacity group-hover:opacity-80" />
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-x-0 top-20 h-[460px] bg-[radial-gradient(circle_at_18%_18%,rgba(200,77,124,0.045),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(0,0,0,0.035),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-9 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[1.15/1] overflow-hidden rounded-[30px] border border-white/80 bg-white/70 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl md:rounded-[38px]">
            <div className="relative h-full w-full overflow-hidden rounded-[24px] md:rounded-[30px]">
              <Image
                src="/training-program.png"
                alt="Training Program Akademi Quality"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-black/42 px-4 py-3 text-[13px] font-semibold text-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              Improve your Human Quality melalui pembelajaran ISO yang praktis.
            </div>
          </div>

          <div>
            <SectionTitle
              centered={false}
              eyebrow="Cara kami bekerja"
              title="Dibangun untuk hasil yang bisa dipakai, bukan sekadar sertifikat."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map(([title, description]) => (
                <article
                  className="rounded-[24px] border border-black/8 bg-white/72 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-xl"
                  key={title}
                >
                  <h3 className="text-[18px] font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#444040]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-9 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_0.74fr] md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/85 backdrop-blur-md">
              Konsultasi Kebutuhan Training
            </span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight md:text-[50px]">
              Siap membangun kompetensi ISO yang relevan untuk tim Anda?
            </h2>
            <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-white/75">
              Ceritakan kebutuhan pelatihan Anda. Kami bantu susun pendekatan
              yang sesuai untuk individu, mahasiswa, maupun perusahaan.
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
            {["ISO 9001", "ISO 14001", "ISO 27001"].map((item) => (
              <div
                className="relative rounded-2xl border border-white/12 bg-white/[0.09] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                key={item}
              >
                <p className="text-[20px] font-semibold">{item}</p>
                <p className="mt-1 text-[12px] text-white/62">
                  Pelatihan sistem manajemen berstandar internasional.
                </p>
              </div>
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





