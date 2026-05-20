import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  GraduationCap,
  LogIn,
  Mail,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";

const pageUrl = "/training-iso-27001-online-murah-terjangkau-bersertifikat";
const whatsappHref =
  "https://wa.me/6289507639360?text=Hallo%20Akademi%20Quality%2C%20saya%20ingin%20konsultasi%20Training%20ISO%2027001.";

export const metadata: Metadata = {
  title: "Training ISO 27001 Online Murah Terjangkau dan Bersertifikat",
  description:
    "Training ISO 27001:2022 Sistem Manajemen Keamanan Informasi Online dengan harga murah dan terjangkau. Provider training khusus ISO.",
  keywords: [
    "training ISO 27001",
    "pelatihan ISO 27001",
    "training ISO 27001 online",
    "pelatihan ISO 27001 bersertifikat",
    "sistem manajemen keamanan informasi",
    "ISO 27001 2022",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Training ISO 27001 Online Murah Terjangkau dan Bersertifikat",
    description:
      "Pelatihan ISO 27001:2022 Sistem Manajemen Keamanan Informasi dengan metode online, offline, dan inhouse bersama trainer berpengalaman.",
    url: pageUrl,
    images: [
      {
        url: "/ISO-27001.png",
        width: 1200,
        height: 630,
        alt: "Training ISO 27001 Akademi Quality",
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

const trainingMethods = [
  "Online Training",
  "Offline Training",
  "InHouse Online Training",
  "InHouse Offline Training",
];

const learningOutcomes = [
  "Memahami prinsip dasar Sistem Manajemen Keamanan Informasi ISO 27001:2022.",
  "Membaca klausul ISO 27001 dan menghubungkannya dengan perlindungan informasi.",
  "Mengidentifikasi aset informasi, risiko keamanan informasi, dan kontrol yang relevan.",
  "Menyiapkan dokumentasi, bukti kepatuhan, dan kesiapan audit keamanan informasi.",
  "Menerapkan peningkatan berkelanjutan untuk menjaga kerahasiaan, integritas, dan ketersediaan informasi.",
];

const modules = [
  "Pengantar ISO 27001:2022",
  "Lingkup ISO 27001",
  "Terminologi dan Definisi",
  "Perencanaan Sistem Manajemen Keamanan Informasi",
  "Aset Informasi dan Klasifikasi",
  "Pengelolaan Risiko Keamanan Informasi",
  "Keamanan Fisik dan Lingkungan",
  "Keamanan Operasional",
  "Keamanan Komunikasi",
  "Keamanan Pengembangan Sistem",
  "Manajemen Insiden Keamanan Informasi",
];

const benefits = [
  {
    icon: FileCheck2,
    title: "Sertifikat",
    description:
      "Peserta mendapatkan e-sertifikat sebagai bukti mengikuti pelatihan dan evaluasi pemahaman.",
  },
  {
    icon: MonitorPlay,
    title: "Zoom Recording",
    description:
      "Kelas online dilengkapi rekaman agar peserta dapat mengulang materi setelah training selesai.",
  },
  {
    icon: BookOpenCheck,
    title: "Materi Update",
    description:
      "Materi disusun agar relevan dengan kebutuhan industri dan praktik penerapan ISO saat ini.",
  },
  {
    icon: UsersRound,
    title: "Dukungan Komunitas",
    description:
      "Peserta mendapat ruang diskusi lanjutan untuk bertanya dan berbagi pengalaman implementasi.",
  },
  {
    icon: Sparkles,
    title: "LISSA AI Assistant",
    description:
      "Asisten AI untuk membantu peserta memahami standar ISO dengan penjelasan yang mudah dicerna.",
  },
  {
    icon: Award,
    title: "Quiz & Bank Soal",
    description:
      "Latihan soal membantu peserta mengukur pemahaman dan memperkuat bukti kompetensi.",
  },
];

const pricing = [
  {
    title: "Online Training",
    originalPrice: "Rp. 3.800.000",
    price: "Rp. 3.000.000",
    suffix: "/1 Peserta",
    features: [
      "E-Sertifikat",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Zoom Recording",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
    ],
  },
  {
    title: "Offline Training",
    originalPrice: "Rp. 5.200.000",
    price: "Rp. 4.200.000",
    suffix: "/1 Peserta",
    features: [
      "E-Sertifikat",
      "Training Kit",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
      "Di Hotel Berbintang",
    ],
  },
  {
    title: "InHouse Online",
    originalPrice: "Rp. 13.000.000",
    price: "Rp. 10.000.000",
    suffix: "/10 Peserta",
    features: [
      "E-Sertifikat",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Zoom Recording",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
    ],
  },
  {
    title: "InHouse Offline",
    originalPrice: "Rp. 15.000.000",
    price: "Rp. 13.000.000",
    suffix: "/10 Peserta",
    features: [
      "E-Sertifikat",
      "Training Kit",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
      "Di Hotel / Tempat Langsung",
    ],
  },
];

const studentPricing = [
  {
    title: "Online Training",
    originalPrice: "Rp. 3.500.000",
    price: "Rp. 2.300.000",
    suffix: "/1 Peserta",
    features: [
      "E-Sertifikat",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Zoom Recording",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
    ],
  },
  {
    title: "Offline Training",
    originalPrice: "Rp. 5.200.000",
    price: "Rp. 2.900.000",
    suffix: "/1 Peserta",
    features: [
      "E-Sertifikat",
      "Training Kit",
      "Konsultasi Gratis",
      "Softcopy Materi",
      "Akses Quizz App",
      "Akses Pijar Dashboard",
    ],
  },
];

const faqItems = [
  [
    "Apa itu Training ISO 27001:2022?",
    "Training ISO 27001:2022 adalah pelatihan Sistem Manajemen Keamanan Informasi yang membantu peserta memahami persyaratan standar, aset informasi, klasifikasi, pengelolaan risiko, kontrol keamanan, dokumentasi, audit, dan peningkatan berkelanjutan.",
  ],
  [
    "Apakah training ini bisa diikuti pemula?",
    "Bisa. Materi disusun bertahap dari pengenalan ISO 27001, lingkup, terminologi, risiko keamanan informasi, sampai contoh penerapan sistem manajemen keamanan informasi di organisasi.",
  ],
  [
    "Apakah tersedia online dan offline?",
    "Ya. Program tersedia dalam format Online Training, Offline Training, InHouse Online Training, dan InHouse Offline Training.",
  ],
  [
    "Apa yang didapat peserta?",
    "Peserta mendapatkan materi pelatihan, e-sertifikat, quiz test, akses Quizz App, akses Pijar Dashboard, dan fasilitas pendukung seperti recording untuk kelas online.",
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

function PricingCard({
  title,
  originalPrice,
  price,
  suffix,
  features,
}: {
  title: string;
  originalPrice: string;
  price: string;
  suffix: string;
  features: string[];
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-black/12 bg-white/72 px-5 py-7 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/86 hover:shadow-[0_34px_100px_rgba(0,0,0,0.14)] md:px-6 md:py-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black via-[#c84d7c] to-black" />
      <h3 className="relative mx-auto max-w-[190px] text-[25px] font-bold leading-tight tracking-tight md:text-[29px]">
        {title}
      </h3>
      <div className="relative mx-auto mt-6 h-px w-full max-w-[190px] bg-black/14" />
      <div className="relative mt-7">
        <p className="text-[17px] font-medium text-[#9b9b9b] line-through">
          {originalPrice}
        </p>
        <p className="mt-1 text-[27px] font-semibold leading-none text-black md:text-[30px]">
          {price}
        </p>
        <p className="mt-2 text-[13px] font-semibold text-[#b84a72]">{suffix}</p>
      </div>
      <ul className="relative mt-7 grid gap-3 text-left">
        {features.map((feature) => (
          <li
            className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white/62 px-3.5 py-3 text-[14px] leading-snug text-[#4f5665] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md"
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
  );
}

export default function Iso27001TrainingDetailPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Training ISO 27001 Online Murah Terjangkau dan Bersertifikat",
    description:
      "Training ISO 27001:2022 Sistem Manajemen Keamanan Informasi dengan metode online, offline, dan inhouse bersama Akademi Quality.",
    provider: {
      "@type": "Organization",
      name: "Akademi Quality",
      sameAs: "https://akademiquality.com",
    },
    url: `https://akademiquality.com${pageUrl}`,
    courseMode: ["online", "onsite", "inhouse"],
  };

  return (
    <main className="min-h-dvh bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_48%,#33131f_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.09]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              Training ISO 27001:2022
            </span>
            <h1 className="mt-5 max-w-[760px] text-[42px] font-semibold leading-[1.05] tracking-tight md:text-[70px]">
              Sistem Manajemen Keamanan Informasi - Murah Terjangkau
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.75] text-white/78 md:text-[18px]">
              Pelatihan ISO 27001:2022 untuk membantu profesional dan
              perusahaan memahami sistem manajemen keamanan informasi,
              perlindungan data, pengelolaan risiko, dokumentasi, dan
              kesiapan audit.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trainingMethods.map((method) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.09] px-4 py-3 text-[14px] font-semibold text-white/88 backdrop-blur-xl"
                  key={method}
                >
                  <CheckCircle2 className="shrink-0 text-[#25d366]" size={18} />
                  {method}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Daftar Sekarang
                <MessageCircle size={18} />
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
                href="#materi"
              >
                Lihat Materi
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] pb-5">
            <div className="relative aspect-[1.08/1] overflow-hidden rounded-[32px] border border-white/12 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                <Image
                  src="/ISO-27001.png"
                  alt="Training ISO 27001 Akademi Quality"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute bottom-0 left-4 right-4 rounded-2xl border border-white/18 bg-black/56 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl md:-bottom-5 md:left-8 md:right-8">
              <p className="text-[13px] font-semibold leading-relaxed text-white">
                Belajar langsung dengan ahlinya, dilengkapi sertifikat, quiz,
                materi, dan dukungan komunitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1120px] items-start gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionTitle
              centered={false}
              eyebrow="Tentang ISO 27001:2022"
              title="Standar sistem manajemen keamanan informasi untuk melindungi data penting."
            />
            <p className="mt-5 text-[16px] leading-[1.85] text-[#444040]">
              Dalam era digital yang semakin kompleks dan terhubung, keamanan
              informasi menjadi salah satu pilar penting yang menentukan
              kesuksesan sebuah organisasi. ISO/IEC 27001:2022 merupakan
              standar internasional yang menetapkan persyaratan untuk sistem
              manajemen keamanan informasi (SMKI).
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-[#444040]">
              Adopsi dan sertifikasi ISO 27001 tidak hanya menunjukkan
              komitmen terhadap keamanan informasi, tetapi juga memperkuat
              posisi organisasi di pasar global sebagai organisasi yang dapat
              diandalkan dan profesional dalam melindungi data dan informasi
              sensitif.
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-[#444040]">
              Organisasi yang terakreditasi ISO 27001 diakui memiliki sistem
              manajemen keamanan informasi yang handal, memastikan informasi
              yang dikelola terlindungi dari ancaman internal dan eksternal.
              Ini membantu meningkatkan kepercayaan pelanggan dan pemangku
              kepentingan.
            </p>
          </div>
          <div className="grid content-start gap-3 lg:pt-2">
            {learningOutcomes.map((item) => (
              <div
                className="flex items-start gap-4 rounded-[20px] border border-black/8 bg-white px-5 py-4 shadow-[0_14px_45px_rgba(0,0,0,0.055)]"
                key={item}
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#25d366]/10 text-[#16a34a]">
                  <CheckCircle2 size={19} strokeWidth={2.6} />
                </span>
                <p className="text-[15px] font-medium leading-[1.7] text-[#292527]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="materi"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#151015_46%,#2b0f1a_100%)] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:78px_78px] opacity-[0.08]" />
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#c84d7c]/24 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#25d366]/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-[16px] font-bold tracking-tight text-[#ff8db6] md:text-[19px]">
              Materi Training ISO 27001:2022
            </p>
            <h2 className="text-[31px] font-bold leading-tight tracking-tight text-white md:text-[50px]">
              Materi dirancang praktis dan relevan untuk dunia kerja.
            </h2>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-2">
            {modules.map((module, index) => (
              <article
                className="group relative overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.09] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.13] hover:shadow-[0_34px_100px_rgba(0,0,0,0.36)]"
                key={module}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/16 bg-white/12 text-[14px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-6 text-[20px] font-bold leading-snug text-white md:text-[22px]">
                  {module}
                </h3>
                <div className="relative mt-6 h-px w-full bg-white/10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle
            eyebrow="Apa saja yang didapat?"
            title="Benefit eksklusif untuk meningkatkan produktivitas belajar."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.07)]"
                  key={item.title}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-[23px] font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-[#4c4648]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfb] px-5 py-16 md:px-10 md:py-24">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[32px] bg-black p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[0.9fr_1.1fr] md:rounded-[44px] md:p-10">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
              <GraduationCap size={22} />
            </span>
            <h2 className="mt-7 text-[34px] font-bold leading-tight tracking-tight md:text-[50px]">
              Sertifikat dengan kredibilitas pemahaman.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-white/72">
              Siapa saja bisa mengeluarkan sertifikat pelatihan. Akademi
              Quality menambahkan quiz test untuk membantu memastikan peserta
              benar-benar memahami materi yang dipelajari. Sertifikat dan
              hasil nilai Quizz Test peserta akan tercatat di website kami.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Pengalaman", "Skill", "Bukti"].map((item) => (
              <div
                className="rounded-[24px] border border-white/12 bg-white/[0.09] p-5 text-center backdrop-blur-xl"
                key={item}
              >
                <ShieldCheck className="mx-auto text-[#25d366]" size={28} />
                <p className="mt-4 text-[16px] font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-end gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <SectionTitle
              centered={false}
              eyebrow="Pilih Paket"
              title="Pilih paket dan sesuaikan kebutuhan Anda."
            />
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.8] text-[#444040]">
              Tersedia paket online, offline, inhouse online, dan inhouse
              offline. Untuk kebutuhan perusahaan atau kelas khusus, hubungi
              admin agar paket dapat disesuaikan dengan jumlah peserta.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pricing.map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-16 grid items-start gap-8 rounded-[30px] border border-black/10 bg-[#f8f7f5] px-5 py-8 md:px-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="text-[16px] font-bold tracking-tight text-[#b84a72] md:text-[19px]">
                Harga Spesial Untuk Mahasiswa
              </p>
              <h3 className="mt-2 text-[29px] font-bold leading-tight tracking-tight text-black md:text-[42px]">
                Lebih terjangkau tanpa mengurangi layanan.
              </h3>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#444040]">
                Nikmati harga khusus untuk mahasiswa, instansi pendidikan, atau
                individu yang ingin memahami pentingnya ISO 27001.
              </p>
              <a
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Tanya Paket Mahasiswa
                <MessageCircle size={17} />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {studentPricing.map((item) => (
                <PricingCard key={`student-${item.title}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#090909_0%,#191919_55%,#2a1018_100%)] px-5 py-9 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_0.74fr] md:rounded-[44px] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.08]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/85 backdrop-blur-md">
              Daftar Training
            </span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight md:text-[50px]">
              Tunggu apa lagi? Belajar langsung dengan ahlinya.
            </h2>
            <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-white/75">
              Hubungi admin Akademi Quality untuk jadwal, harga spesial,
              kebutuhan inhouse, dan rekomendasi metode training paling sesuai.
            </p>
          </div>
          <div className="relative grid gap-3">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-[15px] font-semibold text-white"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              Chat WhatsApp
              <MessageCircle size={18} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black"
              href="/kontak"
            >
              Halaman Kontak
              <ArrowRight size={18} />
            </a>
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
    </main>
  );
}





