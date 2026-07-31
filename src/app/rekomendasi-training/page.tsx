import type { Metadata } from "next";
import { Suspense } from "react";

import { Recommender } from "@/components/Recommender";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllTrainings } from "@/lib/trainings";

export const metadata: Metadata = {
  title: "Cari Training yang Tepat",
  description: "Temukan rekomendasi training Akademi Quality berdasarkan kebutuhan, tantangan, dan target kompetensi Anda.",
  alternates: { canonical: "/rekomendasi-training" },
};

export default async function RecommenderPage() {
  const trainings = await getAllTrainings();

  return (
    <main className="flex min-h-dvh flex-col bg-[#f8f8f7] text-black">
      <SiteHeader />
      <Suspense fallback={<div className="min-h-[60vh] bg-[#f8f8f7]" />}>
        <Recommender trainings={trainings} />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
