import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageCircle,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { CountUpNumber } from "@/components/CountUpNumber";
import { FeaturedTrainingSections } from "@/components/FeaturedTrainingSections";
import { MobileMenu } from "@/components/MobileMenu";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { TrainingCatalog, type Training, type TrainingPagination } from "@/components/TrainingCatalog";
import { TrainingPricing } from "@/components/TrainingPricing";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

const navItems = [
  { label: "Cari Training", href: "/rekomendasi-training" },
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];

const whatsappHref =
  "https://wa.me/6285139495190?text=Halo%20Akademi%20Quality%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20pelatihan.";

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
    "Siapapun bisa mengeluarkan sertifikat pelatihan dengan mudah, namun kami memberikan pengalaman dan pemahaman yang dibutuhkan peserta di dunia kerja.",
  ],
];

const programOptions = [
  ["Program 01", "Public Training", "Kelas terbuka untuk profesional yang ingin memperkuat kompetensi QHSE dan Rumah Sakit bersama peserta dari berbagai industri.", "/training-program.png"],
  ["Program 02", "Online Training", "Belajar secara interaktif dari mana saja, dengan materi terarah dan sesi bersama praktisi yang mudah diikuti tim Anda.", "/online-zoom.png"],
  ["Program 03", "InHouse Training", "Pelatihan khusus di lingkungan perusahaan atau fasilitas Anda, disusun sesuai kebutuhan operasional dan target tim.", "/corporate-training.png"],
  ["Program 04", "Sertifikasi", "Dukungan pembelajaran untuk membantu peserta mempersiapkan kompetensi dan proses sertifikasi dengan lebih percaya diri.", "/elearning.png"],
] as const;

const testimonials = [
  ["Materi disampaikan dengan runtut dan mudah diikuti. Studi kasusnya membantu kami memahami penerapannya di pekerjaan sehari-hari.", "Rina Prasetya", "Quality Manager"],
  ["Diskusi bersama trainer terasa relevan karena membahas tantangan yang benar-benar kami hadapi di lapangan.", "Andi Saputra", "HSE Coordinator"],
  ["Penyampaian materi terstruktur dan komunikatif. Tim kami jadi memiliki gambaran langkah kerja yang lebih jelas.", "dr. Melati Wardani", "Tim Akreditasi Rumah Sakit"],
  ["Kelas online tetap interaktif dan materi dapat diakses dengan nyaman. Sangat membantu untuk jadwal tim yang padat.", "Fajar Nugroho", "Supervisor Operasional"],
  ["Trainer tidak hanya menjelaskan teori, tetapi juga memberi arahan praktis yang bisa langsung kami diskusikan bersama tim.", "Nadia Putri", "Staff QHSE"],
  ["Fitur AI untuk evaluasi kuis membantu saya memahami bagian materi yang perlu dipelajari kembali setelah kelas selesai.", "Dimas Prakoso", "Fresh Graduate"],
  ["Koordinasi sebelum kelas jelas, pelaksanaannya tertata, dan sesi tanya jawabnya sangat membantu peserta.", "Siti Rahma", "Staf Administrasi"],
  ["Materi yang diberikan relevan untuk memahami kebutuhan kerja di fasilitas pelayanan kesehatan.", "Vina Maharani", "Perawat Rumah Sakit"],
  ["Kami mendapatkan sudut pandang baru untuk meningkatkan kesiapan tim dan membangun kebiasaan kerja yang lebih baik.", "Budi Santoso", "Manajemen Perusahaan"],
] as const;

const faqItems = [
  [
    "Siapa trainer di Akademi Quality?",
    "Trainer kami adalah praktisi berpengalaman di bidang QHSE dan Rumah Sakit yang membawakan materi berdasarkan pengalaman kerja nyata.",
  ],
  [
    "Di mana pelatihan dilaksanakan?",
    "Pelatihan tersedia dalam format online dan tatap muka. Untuk kebutuhan organisasi, kami juga dapat menyelenggarakan kelas di lokasi perusahaan atau fasilitas Anda.",
  ],
  [
    "Siapa yang dapat mengikuti pelatihan?",
    "Program kami terbuka untuk profesional, tim perusahaan, tenaga kesehatan, mahasiswa, maupun fresh graduate yang ingin mengembangkan kompetensi.",
  ],
  [
    "Apakah materi dapat disesuaikan dengan kebutuhan tim?",
    "Ya. Untuk InHouse Training, materi, studi kasus, metode pelaksanaan, dan jadwal dapat disesuaikan dengan kebutuhan organisasi Anda.",
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
        "Provider training sumber daya manusia untuk bidang QHSE dan Rumah Sakit di Indonesia.",
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

async function getTrainings(): Promise<{ trainings: Training[]; pagination: TrainingPagination }> {
  try {
    const response = await fetch(
      "https://myquality.akademiquality.com/api/trainings?limit=12",
      { next: { revalidate: 300 } },
    );

    if (!response.ok) return { trainings: [], pagination: {} };

    const data = (await response.json()) as {
      trainings?: Training[];
      pagination?: TrainingPagination;
    };
    return { trainings: data.trainings ?? [], pagination: data.pagination ?? {} };
  } catch {
    return { trainings: [], pagination: {} };
  }
}

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

export default async function Home() {
  const { trainings, pagination } = await getTrainings();

  return (
    <main className="flex min-h-dvh flex-col bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

      <section className="relative overflow-hidden bg-black px-5 py-14 text-white md:min-h-[700px] md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-start">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              Training SDM Online dan Offline
            </span>
            <h1 className="mt-4 max-w-[680px] text-[42px] font-semibold leading-[1.08] tracking-tight md:text-[65px]">
              Akademi Quality
            </h1>
            <p className="mt-4 text-[20px] font-semibold tracking-tight md:text-[25px]">
              Provider Training SDM untuk QHSE dan Rumah Sakit di Indonesia
            </p>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.7] text-white md:text-[18px]">
              Tingkatkan sumber daya manusia perusahaan Anda bersama para ahli
              di bidangnya. Bentuk tim yang siap menghadapi sertifikasi, audit,
              dan terus meningkatkan kompetensinya.
            </p>
            <a
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 md:mt-10 md:px-8 md:py-4 md:text-[18px]"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
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
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="relative aspect-square">
              <Image
                src="/hero.png"
                alt="Training Akademi Quality"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 590px, calc(100vw - 40px)"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedTrainingSections />

      <TrainingCatalog
        description="Tersedia lebih dari 50 pilihan training yang dapat disesuaikan dengan kebutuhan pengembangan kompetensi tim Anda."
        pagination={pagination}
        trainings={trainings}
      />

      <section className="relative overflow-hidden bg-[#f5f5f2] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.035)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#c84d7c]/8 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-[1200px] overflow-hidden rounded-[34px] border border-[#e5e1e2] bg-white shadow-[0_26px_75px_rgba(0,0,0,0.09)] md:grid-cols-[1.08fr_.92fr]">
          <div className="relative flex flex-col justify-start overflow-hidden px-7 pb-0 pt-10 sm:px-10 md:min-h-[650px] md:px-12 md:py-14 lg:px-14">
            <div className="relative z-10 flex items-center gap-3"><span className="h-px w-9 bg-[#c84d7c]" /><p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#ae4169]">Training Finder</p></div>
            <h2 className="relative z-10 mt-5 max-w-[530px] text-[34px] font-bold leading-[1.08] tracking-tight md:text-[48px]">Masih bingung memilih training yang tepat?</h2>
            <p className="relative z-10 mt-5 max-w-[520px] text-[15px] leading-[1.75] text-[#625a5e]">Jawab beberapa pertanyaan singkat untuk menemukan program yang paling sesuai dengan bidang, tantangan, dan target kompetensi Anda.</p>
            <Link href="/rekomendasi-training" className="relative z-20 mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#c84d7c] px-7 py-4 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(200,77,124,.25)] transition hover:-translate-y-0.5 hover:bg-[#ae4169]">Temukan Training Saya <ArrowRight size={17} /></Link>
            <div className="relative -mb-1 mt-2 h-[235px] w-full md:absolute md:-bottom-3 md:-right-8 md:mt-0 md:h-[330px] md:w-[330px]"><Image src="/mascot/mascot-2.png" alt="Maskot Akademi Quality menunjuk contoh hasil rekomendasi" fill className="object-contain object-bottom mix-blend-multiply" sizes="(min-width: 768px) 330px, 235px" /></div>
          </div>
          <div className="relative overflow-hidden border-t border-[#eee7ea] bg-[radial-gradient(circle_at_72%_22%,rgba(200,77,124,.13),transparent_29%),linear-gradient(145deg,#fbfaf9_0%,#f0ebed_100%)] px-5 pb-6 pt-16 md:min-h-[580px] md:border-l md:border-t-0 md:p-0">
            <div className="absolute right-5 top-5 z-20 rounded-full border border-white bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#ae4169] shadow-sm backdrop-blur">Contoh hasil rekomendasi</div>
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#c84d7c]/10" /><div className="absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-[#c84d7c]/8" />
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_18px_40px_rgba(50,20,32,.14)] md:absolute md:bottom-8 md:left-8 md:right-8 md:top-16 md:aspect-auto md:w-auto md:rotate-[1deg] md:rounded-[22px] md:border-[6px] md:shadow-[0_24px_55px_rgba(50,20,32,.18)] md:transition-transform md:duration-300 md:hover:rotate-0">
              <Image src="/training-recommendation-result.png" alt="Contoh hasil rekomendasi training Akademi Quality" fill className="object-contain object-top" sizes="(min-width: 768px) 340px, calc(100vw - 80px)" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#101010_52%,#251016_100%)] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-[18px] font-bold tracking-tight text-white md:text-[22px]">
              Wujudkan Standar Terbaik Perusahaan Anda!
            </p>
            <h2 className="mt-2 text-[30px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
              Dapatkan pelatihan yang terbukti efektif!
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-relaxed text-white/70 lg:mx-0">
              Bersama trainer berpengalaman, kami membantu tim Anda membangun
              kompetensi yang relevan dan siap menghadapi kebutuhan industri.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([value, label]) => (
              <div
                className="rounded-2xl border border-white/15 bg-white/[0.09] px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
                key={label}
              >
                <CountUpNumber
                  className="block text-[42px] font-semibold leading-none md:text-[50px]"
                  value={value}
                />
                <p className="mt-3 text-[15px] font-semibold text-white/75">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f7f6] px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:74px_74px]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#ae4169]">
              Keunggulan Kami
            </p>
            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-tight text-black md:text-[54px]">
              Mengapa belajar bersama Akademi Quality?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-black/60">
              Kami menyiapkan pengalaman belajar yang praktis dan relevan agar
              kompetensi tim Anda terus berkembang.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {benefits.map(([title, description], index) => (
              <article
                className={`group relative overflow-hidden rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "min-h-[350px] bg-[linear-gradient(135deg,#080808_0%,#231016_100%)] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:col-span-2 lg:row-span-2 lg:p-9"
                    : "min-h-[230px] border border-white/90 bg-white/75 text-black shadow-[0_16px_45px_rgba(0,0,0,0.07)] backdrop-blur-xl hover:bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,0.11)]"
                }`}
                key={title}
              >
                <div
                  className={`absolute right-5 top-4 text-[52px] font-bold leading-none transition-colors ${
                    index === 0 ? "text-white/[0.08]" : "text-black/[0.045] group-hover:text-[#c84d7c]/10"
                  }`}
                >
                  0{index + 1}
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[13px] font-bold ${
                      index === 0 ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c84d7c] to-transparent" />
                </div>
                <div className={index === 0 ? "mt-12 max-w-[470px] lg:mt-20" : "mt-6"}>
                  <h3 className={`text-[24px] font-bold leading-tight tracking-tight ${index === 0 ? "md:text-[36px]" : ""}`}>
                    {title}
                  </h3>
                  <p className={`mt-4 text-[14px] font-medium leading-[1.65] ${index === 0 ? "text-white/70 md:text-[16px]" : "text-black/60"}`}>
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-hidden="true" className="hidden">
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
                  <a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto" href="#pelatihan">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </a>
                  <a className="w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-center text-[14px] font-semibold text-black backdrop-blur-md transition-colors hover:bg-white sm:w-auto" href={whatsappHref} rel="noreferrer" target="_blank">
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
                  <a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto" href={whatsappHref} rel="noreferrer" target="_blank">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </a>
                  <a className="w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-center text-[14px] font-semibold text-black backdrop-blur-md transition-colors hover:bg-white sm:w-auto" href={whatsappHref} rel="noreferrer" target="_blank">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="program" className="relative scroll-mt-24 overflow-hidden bg-[#f7f7f6] px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(200,77,124,0.08),transparent_26%),radial-gradient(circle_at_82%_80%,rgba(0,0,0,0.07),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[650px]">
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#ae4169]">Layanan Kami</p>
              <h2 className="mt-3 text-[38px] font-bold leading-tight tracking-tight text-black md:text-[54px]">Pilih format belajar yang sesuai kebutuhan tim.</h2>
            </div>
            <p className="max-w-[340px] text-[15px] leading-relaxed text-black/60 md:text-right">Fleksibel untuk pengembangan kompetensi QHSE dan Rumah Sakit, dari kelas terbuka hingga kebutuhan organisasi.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {programOptions.map(([label, title, description, image]) => (
              <article className="group relative min-h-[330px] overflow-hidden rounded-[30px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.16)]" key={title}>
                <Image src={image} alt={title} fill className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 640px) 50vw, calc(100vw - 40px)" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_10%,rgba(0,0,0,0.9)_100%)]" />
                <div className="relative flex min-h-[330px] flex-col justify-end p-6 text-white md:p-8">
                  <span className="mb-auto inline-flex w-fit rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md">{label}</span>
                  <h3 className="mt-10 text-[30px] font-bold leading-tight tracking-tight md:text-[36px]">{title}</h3>
                  <p className="mt-3 max-w-[510px] text-[15px] leading-[1.65] text-white/78">{description}</p>
                  <a className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-white transition-transform group-hover:translate-x-1" href={whatsappHref} rel="noreferrer" target="_blank">Diskusikan kebutuhan <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#101010_52%,#251016_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-[1fr_0.82fr] md:gap-14">
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-wide text-white/85 backdrop-blur-md">
              Untuk Mahasiswa & Fresh Graduate
            </span>
            <h2 className="mt-5 max-w-[650px] text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
              Mulai bangun kompetensi sebelum memasuki dunia kerja.
            </h2>
            <p className="mt-5 max-w-[610px] text-[16px] leading-[1.8] text-white/72">
              Program ini membantu mahasiswa dan fresh graduate memahami dasar
              kompetensi yang dibutuhkan di bidang QHSE dan Rumah Sakit, melalui
              pembelajaran praktis bersama trainer berpengalaman.
            </p>
            <div className="mt-7 grid gap-3 text-[14px] font-medium text-white/80 sm:grid-cols-2">
              {["Materi yang relevan dengan dunia kerja", "Pembelajaran berbasis studi kasus", "Sertifikat pelatihan untuk portofolio", "Pilihan kelas online dan tatap muka"].map((item) => (
                <div className="flex items-start gap-2.5" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-white" size={17} />
                  {item}
                </div>
              ))}
            </div>
            <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.14)]" href={whatsappHref} rel="noreferrer" target="_blank">
              Konsultasikan Pilihan Kelas
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative aspect-[1.15/1] w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:rounded-[34px]">
            <div className="relative h-full w-full overflow-hidden rounded-[21px] md:rounded-[27px]">
              <Image
                src="/student.jpg"
                alt="Pelatihan untuk mahasiswa dan fresh graduate"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 420px, calc(100vw - 40px)"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/55 px-4 py-3 text-[12px] font-semibold text-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl md:bottom-6 md:left-6 md:right-6 md:text-[13px]">
              Dari ruang kelas menuju kesiapan profesional.
            </div>
          </div>
        </div>
      </section>

      <TrainingPricing />

      <section id="kontak" className="relative overflow-hidden bg-[#f8f8f7] px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,rgba(200,77,124,0.08),transparent_25%),radial-gradient(circle_at_90%_84%,rgba(0,0,0,0.06),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 overflow-hidden rounded-[32px] border border-white/80 bg-white/68 px-6 py-9 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl md:grid-cols-[1fr_0.75fr] md:gap-12 md:rounded-[40px] md:px-12 md:py-12">
          <div className="absolute -left-24 -top-28 h-64 w-64 rounded-full bg-[#c84d7c]/10 blur-3xl" />
          <div className="relative">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#ae4169]">Akademi Quality</p>
            <h2 className="mt-4 max-w-[620px] text-[36px] font-bold leading-tight tracking-tight text-black md:text-[52px]">Siap melayani kebutuhan pelatihan di seluruh Indonesia.</h2>
          </div>
          <div className="relative md:border-l md:border-black/10 md:pl-12">
            <p className="text-[17px] font-semibold leading-relaxed text-black/75">Konsultasikan kebutuhan tim Anda untuk menentukan format pelatihan yang paling sesuai.</p>
            <p className="mt-3 text-[15px] leading-relaxed text-black/55">Tersedia pilihan kelas online, public training, hingga InHouse Training untuk organisasi.</p>
            <a className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5" href={whatsappHref} rel="noreferrer" target="_blank">
              Hubungi Kami
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#101010_52%,#241017_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#e99ab7]">Testimoni</p>
              <h2 className="mt-4 max-w-[690px] text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]">
                Cerita peserta setelah belajar bersama kami.
              </h2>
            </div>
            <p className="max-w-[410px] text-[15px] leading-relaxed text-white/65 md:justify-self-end md:text-right">
              Temukan pengalaman peserta dari berbagai program pelatihan di Akademi Quality.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([quote, name, role], index) => (
              <article className="flex min-h-[250px] flex-col rounded-[24px] border border-white/15 bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-md" key={`${name}-${index}`}>
                <p className="text-[13px] tracking-[0.28em] text-[#f3b2c8]">★★★★★</p>
                <blockquote className="mt-5 text-[16px] font-medium leading-[1.7] text-white/88">“{quote}”</blockquote>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[12px] font-bold text-black">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[14px] font-bold text-white">{name}</p>
                    <p className="mt-0.5 text-[12px] text-white/55">{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f8f7] px-5 py-20 text-black md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ae4169]">FAQ</p>
            <h2 className="mt-4 text-[38px] font-bold leading-tight tracking-tight md:text-[54px]">Yang ingin Anda ketahui, kami jawab di sini.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-black/60">Informasi seputar trainer, format kelas, dan program pelatihan Akademi Quality.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <details className="group rounded-[22px] border border-white/80 bg-white/70 px-5 shadow-[0_16px_45px_rgba(0,0,0,0.07)] backdrop-blur-md transition-colors hover:bg-white md:px-6" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-[16px] font-bold md:text-[18px]">
                  {question}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black text-white transition-colors group-open:bg-[#c84d7c]">
                    <ChevronDown className="transition-transform group-open:rotate-180" size={18} />
                  </span>
                </summary>
                <p className="pb-6 text-[15px] leading-[1.75] text-black/60">
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black shadow-[0_16px_40px_rgba(255,255,255,0.12)]" href={whatsappHref} rel="noreferrer" target="_blank">Masih ada pertanyaan? Chat kami <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f8f7] px-5 py-20 text-black md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_25%,rgba(200,77,124,0.1),transparent_26%),radial-gradient(circle_at_86%_75%,rgba(0,0,0,0.07),transparent_28%)]" />
        <div className="relative mx-auto max-w-[920px] rounded-[32px] border border-white/80 bg-white/65 px-6 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl md:rounded-[40px] md:px-12 md:py-14">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#ae4169]">Konsultasi Pelatihan</p>
          <h2 className="mt-4 text-[36px] font-bold leading-tight tracking-tight md:text-[52px]">Siap menentukan program terbaik untuk tim Anda?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-black/60">Ceritakan kebutuhan pelatihan Anda. Tim Akademi Quality akan membantu memilih format kelas yang tepat untuk tujuan organisasi.</p>
          <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5" href={whatsappHref} rel="noreferrer" target="_blank">
            Konsultasi via WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="hidden relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#121212_52%,#251016_100%)] px-5 pt-16 text-white md:px-10 md:pt-20">
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
                <a className="transition-colors hover:text-white" href="/">Beranda</a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href="/tentang">Tentang Kami</a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href="#kontak">Hubungi Kami</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Program</p>
            <div className="mt-5 grid gap-y-3 text-[15px] text-white/70">
              <a className="transition-colors hover:text-white" href="#program">Public Training</a>
              <a className="transition-colors hover:text-white" href="#program">Online Training</a>
              <a className="transition-colors hover:text-white" href="#program">InHouse Training</a>
              <a className="transition-colors hover:text-white" href="#program">Sertifikasi</a>
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





