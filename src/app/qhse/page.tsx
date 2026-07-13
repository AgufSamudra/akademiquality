import type { Metadata } from "next";

import {
  FocusTrainingPage,
  type FocusTrainingPageData,
} from "@/components/FocusTrainingPage";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Training QHSE",
  description:
    "Program training QHSE Akademi Quality untuk quality, health, safety, dan environment yang relevan dengan kebutuhan kerja.",
  alternates: {
    canonical: "/qhse",
  },
  openGraph: {
    title: "Training QHSE - Akademi Quality",
    description:
      "Bangun kompetensi QHSE melalui pembelajaran praktis bersama Akademi Quality.",
    url: "/qhse",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Training QHSE Akademi Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training QHSE - Akademi Quality",
    description:
      "Bangun kompetensi QHSE melalui pembelajaran praktis bersama Akademi Quality.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const qhsePage: FocusTrainingPageData = {
  badge: "Training QHSE",
  title: "Bangun kompetensi kerja untuk praktik",
  highlight: "QHSE",
  description:
    "Program QHSE dirancang untuk membantu peserta memahami sistem mutu, keselamatan kerja, kesehatan kerja, dan lingkungan dengan pendekatan yang dekat dengan kebutuhan operasional.",
  image: "/corporate-training.png",
  imageAlt: "Pelatihan QHSE Akademi Quality",
  imageCaption:
    "Materi QHSE disusun agar peserta mampu membaca risiko, menerapkan standar, dan mengambil keputusan kerja yang lebih tepat.",
  stats: [
    ["4 area", "Quality, health, safety, dan environment dalam satu jalur belajar."],
    ["Praktis", "Berbasis studi kasus dan tantangan kerja di lapangan."],
    ["Online", "Tersedia kelas online, offline, dan in-house."],
    ["Tim", "Cocok untuk individu, supervisor, dan organisasi."],
  ],
  outcomes: [
    [
      "Memahami sistem manajemen",
      "Peserta mendapat gambaran utuh tentang standar, dokumentasi, audit, dan perbaikan berkelanjutan.",
    ],
    [
      "Membaca risiko operasional",
      "Pembelajaran diarahkan agar peserta mampu mengenali potensi bahaya, dampak lingkungan, dan kontrol yang relevan.",
    ],
    [
      "Menjalankan praktik QHSE",
      "Materi tidak berhenti di konsep, tetapi diarahkan menjadi langkah kerja yang dapat diterapkan bersama tim.",
    ],
  ],
  modules: [
    [
      "Quality Management",
      "Dasar sistem manajemen mutu, pemetaan proses, dokumentasi, sasaran mutu, dan praktik improvement.",
    ],
    [
      "Health & Safety",
      "Identifikasi bahaya, penilaian risiko, pengendalian, investigasi insiden, dan budaya kerja aman.",
    ],
    [
      "Environment",
      "Aspek dampak lingkungan, kepatuhan, pengendalian operasional, dan kebiasaan kerja yang lebih bertanggung jawab.",
    ],
    [
      "Audit & Compliance",
      "Persiapan audit internal, temuan audit, tindakan perbaikan, serta kesiapan menghadapi evaluasi eksternal.",
    ],
  ],
  audiences: [
    [
      "Praktisi QHSE",
      "Untuk staf, officer, koordinator, dan supervisor yang ingin memperkuat dasar maupun praktik kerja.",
    ],
    [
      "Tim Operasional",
      "Untuk tim yang perlu memahami standar mutu, keselamatan, dan lingkungan dalam pekerjaan harian.",
    ],
    [
      "Manajemen",
      "Untuk pemimpin tim yang perlu membaca risiko dan mendorong budaya kerja yang lebih tertata.",
    ],
    [
      "Mahasiswa & Fresh Graduate",
      "Untuk talenta awal yang ingin memiliki fondasi QHSE sebelum masuk ke dunia kerja.",
    ],
  ],
  formats: [
    [
      "Public Training",
      "Kelas terbuka untuk peserta individu yang ingin belajar bersama peserta dari berbagai organisasi.",
    ],
    [
      "Online Training",
      "Sesi interaktif jarak jauh dengan materi terstruktur dan diskusi bersama trainer.",
    ],
    [
      "InHouse Training",
      "Kelas khusus untuk organisasi dengan contoh kasus dan kebutuhan yang dapat disesuaikan.",
    ],
  ],
  ctaTitle: "Siapkan jalur belajar QHSE yang sesuai dengan kebutuhan tim.",
  ctaDescription:
    "Ceritakan kebutuhan pelatihan, level peserta, dan target kompetensi. Kami bantu arahkan format dan materi yang paling relevan.",
  trainingCategory: "QHSE",
  trainingFilters: [
    "All sub-category",
    "ISO",
    "Laboratorium",
    "Food",
    "K3",
    "Mikrobiologi",
    "Warehouse",
  ],
};

export default function QhsePage() {
  return <FocusTrainingPage data={qhsePage} />;
}
