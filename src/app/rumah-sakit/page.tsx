import type { Metadata } from "next";

import {
  FocusTrainingPage,
  type FocusTrainingPageData,
} from "@/components/FocusTrainingPage";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Training Rumah Sakit",
  description:
    "Program training Rumah Sakit Akademi Quality untuk mutu layanan, keselamatan pasien, akreditasi, dan penguatan kompetensi tim fasilitas kesehatan.",
  alternates: {
    canonical: "/rumah-sakit",
  },
  openGraph: {
    title: "Training Rumah Sakit - Akademi Quality",
    description:
      "Bangun kompetensi tim Rumah Sakit melalui pembelajaran praktis bersama Akademi Quality.",
    url: "/rumah-sakit",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Training Rumah Sakit Akademi Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Rumah Sakit - Akademi Quality",
    description:
      "Bangun kompetensi tim Rumah Sakit melalui pembelajaran praktis bersama Akademi Quality.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const hospitalPage: FocusTrainingPageData = {
  badge: "Training Rumah Sakit",
  title: "Bangun mutu layanan dan kesiapan tim",
  highlight: "Rumah Sakit",
  description:
    "Program Rumah Sakit membantu tenaga kesehatan, manajemen, dan tim pendukung memahami mutu layanan, keselamatan pasien, akreditasi, serta praktik operasional yang lebih tertata.",
  image: "/training-program.png",
  imageAlt: "Pelatihan Rumah Sakit Akademi Quality",
  imageCaption:
    "Pembelajaran dirancang untuk membantu tim fasilitas kesehatan menerjemahkan standar menjadi praktik layanan yang konsisten.",
  stats: [
    ["Mutu", "Fokus pada peningkatan kualitas layanan dan pengalaman pasien."],
    ["Pasien", "Menguatkan pemahaman keselamatan pasien dalam proses kerja."],
    ["Akreditasi", "Membantu tim lebih siap menghadapi standar dan evaluasi."],
    ["Tim", "Cocok untuk tenaga kesehatan, manajemen, dan unit pendukung."],
  ],
  outcomes: [
    [
      "Memperkuat mutu layanan",
      "Peserta memahami cara melihat proses layanan, mengurangi variasi, dan menjalankan perbaikan yang terukur.",
    ],
    [
      "Menjaga keselamatan pasien",
      "Pembelajaran membantu peserta mengenali risiko layanan dan membangun kontrol yang relevan di unit kerja.",
    ],
    [
      "Menyiapkan akreditasi",
      "Materi diarahkan agar tim memahami standar, bukti implementasi, dan kebiasaan kerja yang perlu dijaga.",
    ],
  ],
  modules: [
    [
      "Mutu Layanan Kesehatan",
      "Pengantar manajemen mutu, indikator layanan, pemetaan proses, dan perbaikan berkelanjutan.",
    ],
    [
      "Keselamatan Pasien",
      "Identifikasi risiko layanan, pelaporan insiden, pembelajaran dari kejadian, dan penguatan budaya aman.",
    ],
    [
      "Akreditasi Rumah Sakit",
      "Pemahaman standar, persiapan dokumen, bukti implementasi, dan koordinasi lintas unit.",
    ],
    [
      "Komunikasi & Kolaborasi",
      "Penguatan koordinasi antarprofesi agar proses layanan lebih konsisten, jelas, dan mudah dievaluasi.",
    ],
  ],
  audiences: [
    [
      "Tenaga Kesehatan",
      "Untuk perawat, bidan, tenaga penunjang, dan profesional kesehatan yang terlibat langsung dalam layanan.",
    ],
    [
      "Tim Mutu",
      "Untuk tim mutu dan akreditasi yang mengelola standar, indikator, dokumen, dan program perbaikan.",
    ],
    [
      "Manajemen Rumah Sakit",
      "Untuk pimpinan dan koordinator unit yang perlu menjaga layanan tetap aman, tertata, dan terukur.",
    ],
    [
      "Unit Pendukung",
      "Untuk administrasi, SDM, umum, dan unit lain yang berperan dalam kelancaran operasional fasilitas kesehatan.",
    ],
  ],
  formats: [
    [
      "Public Training",
      "Kelas terbuka untuk peserta individu dari fasilitas kesehatan yang ingin memperkuat kompetensi.",
    ],
    [
      "Online Training",
      "Belajar jarak jauh dengan diskusi, studi kasus, dan materi yang dapat diikuti tanpa meninggalkan unit terlalu lama.",
    ],
    [
      "InHouse Training",
      "Kelas khusus untuk Rumah Sakit dengan kebutuhan materi, jadwal, dan contoh kasus yang dapat disesuaikan.",
    ],
  ],
  ctaTitle: "Susun program belajar untuk mutu layanan Rumah Sakit yang lebih siap.",
  ctaDescription:
    "Ceritakan kebutuhan tim, fokus unit, dan target pembelajaran. Kami bantu pilih format kelas dan materi yang paling tepat.",
  trainingCategory: "rumah-sakit",
  trainingCategoryLabel: "Rumah Sakit",
  trainingFilters: [
    "All sub-category",
    "Akreditasi",
    "Audit",
    "Keperawatan",
    "Keuangan",
    "Manajemen",
    "SDM",
    "Spesialis",
    "Safety",
  ],
};

export default function RumahSakitPage() {
  return <FocusTrainingPage data={hospitalPage} />;
}
