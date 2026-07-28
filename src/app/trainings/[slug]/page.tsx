import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart3, BookOpen, CalendarDays, Check, ChevronRight, ClipboardCheck, FileSearch, Handshake, MessageCircle, MessagesSquare, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { MobileMenu } from "@/components/MobileMenu";

import { getTrainingBySlug, normalizeTrainingHtml, parseTrainingContent, toList } from "@/lib/trainings";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { TrainingPricing } from "@/components/TrainingPricing";

type Props = { params: Promise<{ slug: string }> };

const whatsappNumber = "6285139495190";
const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];
const alumni = [
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
const industries = [
  "Manufaktur", "Rumah Sakit", "Laboratorium", "Food & Beverage",
  "Energi", "Pemerintahan", "Konstruksi", "Pertambangan",
  "Logistik & Warehouse", "Farmasi", "Otomotif", "Perbankan & Finansial",
  "Pendidikan", "Teknologi Informasi", "Retail", "Hospitality",
];
const faqs = [
  ["Apakah jadwal training sudah pasti?", "Tim kami akan mengonfirmasi ketersediaan kuota, jadwal, dan lokasi terbaru melalui WhatsApp sebelum pendaftaran."],
  ["Apakah materi dapat disesuaikan?", "Bisa. Untuk in-house training, silabus, studi kasus, durasi, dan metode dapat disesuaikan dengan kebutuhan organisasi."],
  ["Apakah peserta mendapatkan sertifikat?", "Peserta yang mengikuti pelatihan sesuai ketentuan akan memperoleh sertifikat dari Akademi Quality."],
  ["Apakah tersedia kelas online?", "Tersedia pilihan public training online, offline, dan in-house. Hubungi kami untuk rekomendasi format terbaik."],
] as const;
const methodItems = [
  ["Pemaparan Materi", "Penyampaian konsep, standar, dan prinsip utama oleh trainer.", BookOpen],
  ["Diskusi Interaktif", "Sesi tanya jawab dan pembahasan pengalaman peserta.", MessagesSquare],
  ["Studi Kasus", "Analisis kasus yang relevan dengan kondisi nyata di perusahaan.", FileSearch],
  ["Simulasi dan Praktik", "Latihan penerapan materi sesuai topik pelatihan.", ClipboardCheck],
  ["Evaluasi Pemahaman", "Quiz, latihan, atau assessment untuk mengukur pemahaman peserta.", BarChart3],
  ["Konsultasi dengan Trainer", "Pembahasan kendala dan rencana implementasi di tempat kerja.", Handshake],
] as const;
const annualSchedule = [
  ["Januari", ["6–7 Januari 2026", "22–23 Januari 2026"]],
  ["Februari", ["10–11 Februari 2026", "26–27 Februari 2026"]],
  ["Maret", ["3–4 Maret 2026", "12–13 Maret 2026"]],
  ["April", ["7–8 April 2026", "23–24 April 2026"]],
  ["Mei", ["7–8 Mei 2026", "25–26 Mei 2026"]],
  ["Juni", ["9–10 Juni 2026", "25–26 Juni 2026"]],
  ["Juli", ["9–10 Juli 2026", "21–22 Juli 2026"]],
  ["Agustus", ["6–7 Agustus 2026", "18–19 Agustus 2026"]],
  ["September", ["1–2 September 2026", "24–25 September 2026"]],
  ["Oktober", ["6–7 Oktober 2026", "22–23 Oktober 2026"]],
  ["November", ["3–4 November 2026", "26–27 November 2026"]],
  ["Desember", ["1–2 Desember 2026", "17–18 Desember 2026"]],
] as const;
function getText(value: unknown, fallback: string) {
  if (typeof value === "string" && value.trim()) return value;
  return fallback;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const training = await getTrainingBySlug((await params).slug);
  if (!training) return {};
  const description = getText(training.introduction ?? training.description, `Pelatihan ${training.title} bersama Akademi Quality.`);
  return {
    title: training.title,
    description,
    alternates: { canonical: `/trainings/${training.slug}` },
    openGraph: {
      title: `${training.title} | ${SITE_NAME}`,
      description,
      url: `/trainings/${training.slug}`,
      siteName: SITE_NAME,
      locale: "id_ID",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: training.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${training.title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const training = await getTrainingBySlug((await params).slug);
  if (!training) notFound();

  const intro = getText(training.introduction ?? training.description, `Pelatihan ${training.title} dirancang untuk memperkuat kompetensi praktis peserta melalui pembelajaran yang terarah, aplikatif, dan relevan dengan kebutuhan industri.`);
  const contentHtml = typeof training.content_html === "string" ? training.content_html.trim() : "";
  // The course title in the hero is the sole H1. The editor's H1 repeats that
  // title, so it is removed and the article starts at its Pengantar H2.
  const articleHtml = normalizeTrainingHtml(contentHtml);
  const contentSections = parseTrainingContent(articleHtml);
  const articleContentSections = contentSections.filter((section) => section.key !== "method" && section.key !== "schedule");
  const splitAt = Math.ceil(articleContentSections.length / 2);
  const leftContentSections = articleContentSections.slice(0, splitAt);
  const rightContentSections = articleContentSections.slice(splitAt);
  const renderColumnHtml = (sections: typeof contentSections) => sections
    .map((section, index) => `<h2 id="materi-${index}">${section.title}</h2>${section.html}`)
    .join("");
  const hasContentSection = (key: string) => contentSections.some((section) => section.key === key);
  const objectives = toList(training.objectives ?? training.objective);
  const materials = toList(training.materials ?? training.material);
  const participants = toList(training.target_participants ?? training.target_participant);
  const message = encodeURIComponent(`Halo Akademi Quality, saya ingin konsultasi mengenai ${training.title}.`);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${message}`;
  const trainingUrl = absoluteUrl(`/trainings/${training.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: training.title,
        description: intro,
        image: training.image_url,
        url: trainingUrl,
        inLanguage: "id-ID",
        provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Pelatihan", item: absoluteUrl("/#pelatihan") },
          { "@type": "ListItem", position: 3, name: training.title, item: trainingUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <main className="training-detail min-h-dvh bg-white text-black">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <style>{".training-detail > header, .training-detail > footer { display: none; }"}</style>
    <div className="sticky top-0 z-50">
      <SiteHeader />
    </div>
    <header className="sticky top-0 z-50 bg-black px-3 py-3 text-white md:px-11"><div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 bg-black px-4 py-2 md:gap-6 md:px-5"><Link className="shrink-0" href="/" aria-label="Akademi Quality home"><Image src="/logo.png" alt="Akademi Quality" width={198} height={72} className="h-[46px] w-[136px] object-contain md:h-[64px] md:w-[178px]" /></Link><nav className="hidden items-center gap-7 text-[15px] font-normal lg:flex">{navItems.map((item) => <a className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white" href={item.href} key={item.label}>{item.label}</a>)}</nav><MobileMenu items={navItems} /></div></header>

    <section className="relative overflow-hidden bg-black px-5 py-14 text-white md:px-10 md:py-20"><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:72px_72px]" /><div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center"><div><Link href="/#pelatihan" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white"><ArrowLeft size={16}/> Kembali ke pelatihan</Link><p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-[#f6bbcf]">{training.category} · {training.sub_category.replaceAll(";", " · ")}</p><h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{training.title}</h1><p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/75">{intro}</p><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#cf3c74] px-6 py-3.5 font-semibold shadow-[0_15px_35px_rgba(207,60,116,.35)]">Daftar & Konsultasi <ChevronRight size={18}/></a></div><div className="relative aspect-[1.22/1] overflow-hidden rounded-[30px] border border-white/15 bg-white/10 shadow-2xl"><Image src={training.image_url} alt={training.title} fill priority className="object-cover" sizes="(min-width:1024px) 530px, calc(100vw - 40px)" /></div></div></section>

    {!articleHtml && !hasContentSection("introduction") ? <section className="px-5 py-16 md:px-10"><div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Pengantar</p><div><h2 className="text-3xl font-bold tracking-tight md:text-5xl">Belajar untuk siap diterapkan.</h2><p className="mt-6 text-[17px] leading-8 text-black/65">{intro}</p></div></div></section> : null}

    {articleHtml ? <section className="bg-[linear-gradient(135deg,#f5f5f3_0%,#ffffff_52%,#f3f0f1_100%)] px-5 py-14 md:px-10 md:py-20"><div className="mx-auto max-w-[1200px]"><p className="text-center text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Penjelasan pelatihan</p><div className="mt-5 grid overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,.09)] lg:grid-cols-2"><article className="training-article bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_68%,#f3f1f1_100%)] p-6 md:p-12" dangerouslySetInnerHTML={{ __html: renderColumnHtml(leftContentSections) }} />{rightContentSections.length ? <article className="training-article training-article-dark border-t border-white/15 bg-[linear-gradient(145deg,#050505_0%,#151115_55%,#2b111b_100%)] p-6 md:p-12 lg:border-l lg:border-t-0" dangerouslySetInnerHTML={{ __html: renderColumnHtml(rightContentSections) }} /> : null}</div></div></section> : null}

    {!hasContentSection("objectives") ? <section className="bg-[#f7f4f5] px-5 py-16 md:px-10"><div className="mx-auto max-w-[1100px]"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Tujuan pelatihan</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Kompetensi yang dibangun.</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{(objectives.length ? objectives : ["Memahami konsep dan prinsip utama sesuai topik pelatihan.", "Mampu menerapkan pengetahuan ke dalam kebutuhan pekerjaan.", "Meningkatkan kesiapan peserta dalam menghadapi tantangan operasional.", "Membangun langkah tindak lanjut yang terukur."]).map((item, i) => <div key={`${item}-${i}`} className="flex gap-3 rounded-2xl bg-white p-5 text-[15px] leading-7 shadow-sm"><Check className="mt-1 shrink-0 text-[#b63161]" size={18}/>{item}</div>)}</div></div></section> : null}

    {!hasContentSection("materials") ? <section className="px-5 py-16 md:px-10"><div className="mx-auto max-w-[1100px]"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Materi</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Materi pelatihan.</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{(materials.length ? materials : ["Konsep dasar dan standar terkait", "Perencanaan serta implementasi", "Studi kasus dan diskusi praktis", "Evaluasi dan tindak lanjut"]).map((item, i) => <div key={`${item}-${i}`} className="flex items-center gap-4 rounded-2xl border border-black/10 p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-xs font-bold text-white">{String(i + 1).padStart(2, "0")}</span><span className="font-semibold">{item}</span></div>)}</div></div></section> : null}

    {!hasContentSection("participants") ? <section className="bg-black px-5 py-16 text-white md:px-10"><div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-2"><div><Users className="text-[#f6bbcf]" size={28}/><p className="mt-5 text-sm font-bold uppercase tracking-[.15em] text-[#f6bbcf]">Sasaran peserta</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Untuk profesional yang ingin bertumbuh.</h2></div><ul className="space-y-4">{(participants.length ? participants : ["Manajer, supervisor, dan staf terkait", "Tim QHSE, mutu, atau operasional", "Profesional yang ingin memperkuat kompetensi", "Organisasi yang membutuhkan pengembangan tim"]).map((item, i) => <li key={`${item}-${i}`} className="flex gap-3 border-b border-white/15 pb-4 text-white/75"><Check className="shrink-0 text-[#f6bbcf]" size={18}/>{item}</li>)}</ul></div></section> : null}

    <section className="relative overflow-hidden bg-[#f7f5f5] px-5 py-16 md:px-10 md:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_5%,rgba(182,49,97,.1),transparent_26%)]" /><div className="relative mx-auto max-w-[1100px]"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Metode training</p><h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-5xl">Belajar aktif, terarah, dan aplikatif.</h2><p className="mt-4 max-w-2xl text-[16px] leading-7 text-black/60">Setiap sesi dirancang agar peserta memahami konsep sekaligus siap menerapkannya dalam konteks kerja nyata.</p><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{methodItems.map(([title, description, Icon], index) => <article className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.04)] transition-transform duration-300 hover:-translate-y-1" key={title}><span className="absolute right-5 top-4 text-5xl font-bold tracking-tighter text-[#b63161]/12">{String(index + 1).padStart(2, "0")}</span><div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white"><Icon size={20} /></div><h3 className="mt-7 max-w-[220px] text-[20px] font-bold leading-tight">{title}</h3><p className="mt-3 text-[14px] leading-6 text-black/60">{description}</p></article>)}</div></div></section>

    <section className="relative overflow-hidden bg-[linear-gradient(145deg,#050505_0%,#151115_55%,#2b111b_100%)] px-5 py-16 text-white md:px-10 md:py-24"><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" /><div className="relative mx-auto max-w-[1100px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[.15em] text-[#f1a6c1]">Jadwal training</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Jadwal tahunan 2026.</h2></div><p className="max-w-sm text-[15px] leading-7 text-white/65">Pilih periode yang paling sesuai untuk rencana pengembangan kompetensi tim Anda.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{annualSchedule.map(([month, dates], index) => <article className="group rounded-[22px] border border-white/13 bg-white/[.06] p-5 backdrop-blur-sm transition-colors hover:bg-white/[.1]" key={month}><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold">{month}</h3><span className="text-sm font-bold text-[#f1a6c1]">{String(index + 1).padStart(2, "0")}</span></div><div className="mt-5 space-y-2 border-t border-white/12 pt-4">{dates.map((date) => <p className="flex items-center gap-2 text-sm font-medium text-white/75" key={date}><CalendarDays className="shrink-0 text-[#f1a6c1]" size={15}/>{date}</p>)}</div></article>)}</div><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-black">Tanyakan untuk jadwal custom Anda <MessageCircle size={17}/></a></div></section>

    <TrainingPricing />

    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f4f2f3_0%,#ffffff_50%,#f7f7f5_100%)] px-5 py-16 md:px-10 md:py-24"><div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#d64b7d]/10 blur-3xl" /><div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-black/7 blur-3xl" /><div className="relative mx-auto max-w-[1200px] text-center"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">Dipercaya industri</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Partner belajar dari berbagai sektor.</h2><p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-black/60">Program kami dirancang relevan untuk kebutuhan operasional, mutu, keselamatan, dan pengembangan kompetensi lintas industri.</p><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{industries.map((name, index) => <div key={name} className="group relative overflow-hidden rounded-[22px] border border-white/75 bg-white/45 px-4 py-6 shadow-[0_12px_35px_rgba(0,0,0,.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/70 hover:shadow-[0_18px_38px_rgba(0,0,0,.1)]"><span className="absolute right-4 top-3 text-[11px] font-bold tracking-wider text-[#b63161]/35">{String(index + 1).padStart(2, "0")}</span><p className="pr-5 text-[14px] font-bold leading-snug text-black/65 sm:text-[15px]">{name}</p></div>)}</div></div></section>

    <section className="relative overflow-hidden bg-[linear-gradient(145deg,#050505_0%,#151115_55%,#2b111b_100%)] px-5 py-16 text-white md:px-10 md:py-24"><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" /><div className="relative mx-auto max-w-[1200px]"><div className="grid gap-6 md:grid-cols-[1.25fr_.75fr] md:items-end"><div><p className="text-sm font-bold uppercase tracking-[.15em] text-[#f1a6c1]">Testimoni</p><h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">Cerita peserta setelah belajar bersama kami.</h2></div><p className="max-w-md text-[16px] leading-7 text-white/65 md:justify-self-end md:text-right">Temukan pengalaman peserta dari berbagai program pelatihan di Akademi Quality.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{alumni.map(([quote, name, role], index) => <figure key={name} className="flex min-h-[260px] flex-col rounded-[24px] border border-white/20 bg-white/[.09] p-6 shadow-[0_16px_35px_rgba(0,0,0,.13)] backdrop-blur-sm"><div className="text-sm tracking-[.18em] text-[#f1a6c1]">★★★★★</div><blockquote className="mt-6 text-[16px] font-semibold leading-7 text-white/85">“{quote}”</blockquote><figcaption className="mt-auto flex items-center gap-3 pt-7"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-black">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-bold">{name}<span className="mt-1 block text-[12px] font-normal text-white/55">{role}</span></span></figcaption></figure>)}</div></div></section>

    <section className="px-5 py-16 md:px-10"><div className="mx-auto max-w-[900px]"><p className="text-center text-sm font-bold uppercase tracking-[.15em] text-[#b63161]">FAQ</p><h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-5xl">Pertanyaan seputar pelatihan.</h2><div className="mt-8 divide-y divide-black/10 rounded-[24px] border border-black/10 px-6">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">{question}<ChevronRight className="transition-transform group-open:rotate-90" size={19}/></summary><p className="pt-3 leading-7 text-black/65">{answer}</p></details>)}</div></div></section>
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#121212_52%,#251016_100%)] px-5 pt-16 text-white md:px-10 md:pt-20"><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" /><div className="relative mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]"><div><Image src="/logo.png" alt="Akademi Quality" width={198} height={72} className="h-[62px] w-[172px] object-contain md:h-[72px] md:w-[198px]" /><p className="mt-5 max-w-[360px] text-[15px] leading-[1.8] text-white/65">Mengembangkan kompetensi tim melalui pelatihan yang praktis, relevan, dan siap diterapkan di dunia kerja.</p><div className="mt-5 flex gap-3"><a aria-label="Instagram Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.instagram.com/akademiquality/" rel="noreferrer" target="_blank"><span className="text-[13px] font-bold leading-none">ig</span></a><a aria-label="Facebook Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.facebook.com/profile.php?id=61562779364975" rel="noreferrer" target="_blank"><span className="text-[17px] font-bold leading-none">f</span></a><a aria-label="LinkedIn Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.linkedin.com/company/akademi-quality/" rel="noreferrer" target="_blank"><span className="text-[13px] font-bold leading-none">in</span></a></div></div><div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Navigasi</p><ul className="mt-5 space-y-3 text-[15px] text-white/70"><li><a className="transition-colors hover:text-white" href="/">Beranda</a></li><li><a className="transition-colors hover:text-white" href="/tentang">Tentang Kami</a></li><li><a className="transition-colors hover:text-white" href="/kontak">Hubungi Kami</a></li></ul></div><div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Program</p><div className="mt-5 grid gap-y-3 text-[15px] text-white/70"><a className="transition-colors hover:text-white" href="/#program">Public Training</a><a className="transition-colors hover:text-white" href="/#program">Online Training</a><a className="transition-colors hover:text-white" href="/#program">InHouse Training</a><a className="transition-colors hover:text-white" href="/#program">Sertifikasi</a></div></div></div><div className="relative mx-auto mt-14 flex max-w-[1200px] flex-col gap-2 border-t border-white/10 py-5 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between"><span>Copyright &copy; 2026 Akademi Quality</span><span>Provider Training SDM untuk QHSE dan Rumah Sakit</span></div></footer>
    <div>
      <SiteFooter />
    </div>
  </main>;
}
