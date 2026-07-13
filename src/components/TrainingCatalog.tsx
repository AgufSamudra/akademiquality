"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type Training = {
  id: string;
  slug: string;
  title: string;
  category: string;
  sub_category: string;
  image_url: string;
};

export type TrainingPagination = {
  page?: number;
  totalPages?: number;
  total?: number;
};

const defaultFilters = [
  "All sub-category",
  "ISO",
  "Laboratorium",
  "Food",
  "K3",
  "Mikrobiologi",
  "Warehouse",
  "Akreditasi",
  "Audit",
  "Keperawatan",
  "Keuangan",
  "Manajemen",
  "SDM",
  "Spesialis",
  "Safety",
];

export function TrainingCatalog({
  trainings,
  pagination: initialPagination,
  category,
  filters = defaultFilters,
  eyebrow = "Program Pelatihan",
  title = "Temukan pelatihan yang tepat untuk tim Anda",
  description,
  filterStyle = "chips",
  visibleCategory,
}: {
  trainings: Training[];
  pagination: TrainingPagination;
  category?: string;
  filters?: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
  filterStyle?: "chips" | "select";
  visibleCategory?: string;
}) {
  const [selectedFilter, setSelectedFilter] = useState("All sub-category");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleTrainings, setVisibleTrainings] = useState(trainings);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(Boolean(category && !trainings.length));
  const isInitialLoad = useRef(true);

  const totalPages = pagination.totalPages ?? 1;

  useEffect(() => {
    const controller = new AbortController();

    async function loadTrainings() {
      setIsLoading(true);

      try {
        const query = new URLSearchParams({ limit: "12", page: String(currentPage) });
        if (category) {
          query.set("category", category);
        }
        if (selectedFilter !== "All sub-category") {
          query.set("sub_category", selectedFilter);
        }
        if (searchQuery.trim()) query.set("search", searchQuery.trim());

        const response = await fetch(
          `https://myquality.akademiquality.com/api/trainings?${query}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Gagal memuat pelatihan");

        const data = (await response.json()) as {
          trainings?: Training[];
          pagination?: TrainingPagination;
        };
        setVisibleTrainings(data.trainings ?? []);
        setPagination(data.pagination ?? { totalPages: 1 });
      } catch (error) {
        if ((error as Error).name !== "AbortError") setVisibleTrainings([]);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    if (trainings.length && currentPage === 1 && selectedFilter === "All sub-category" && !searchQuery.trim()) {
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        return () => controller.abort();
      }
    }

    isInitialLoad.current = false;

    const debounce = window.setTimeout(loadTrainings, 250);
    return () => {
      window.clearTimeout(debounce);
      controller.abort();
    };
  }, [category, currentPage, initialPagination, searchQuery, selectedFilter, trainings]);

  function changeFilter(filter: string) {
    setSelectedFilter(filter);
    setCurrentPage(1);
  }

  function changeSearchQuery(query: string) {
    setSearchQuery(query);
    setCurrentPage(1);
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f8f7] px-5 py-16 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:74px_74px]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="max-w-[620px]">
          <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-black/50">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight tracking-tight text-black md:text-[50px]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-[15px] leading-[1.8] text-black/58">
              {description}
            </p>
          ) : null}
        </div>

        {filterStyle === "select" ? (
          <div className="mt-8 grid gap-3 md:grid-cols-[180px_220px_1fr]">
            <label className="block">
              <span className="sr-only">Kategori training</span>
              <select
                className="h-14 w-full cursor-pointer rounded-2xl border border-black/10 bg-white px-5 text-[15px] font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] outline-none focus:border-[#c84d7c]"
                value={visibleCategory ?? category ?? "All category"}
                onChange={() => undefined}
              >
                <option>{visibleCategory ?? category ?? "All category"}</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Sub-category training</span>
              <select
                className="h-14 w-full cursor-pointer rounded-2xl border border-black/10 bg-white px-5 text-[15px] font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] outline-none focus:border-[#c84d7c]"
                onChange={(event) => changeFilter(event.target.value)}
                value={selectedFilter}
              >
                {filters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </label>
            <label className="relative block w-full">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-black/65"
                size={20}
                strokeWidth={2.5}
              />
              <input
                className="h-14 w-full rounded-2xl border border-black/10 bg-white pl-13 pr-5 text-[15px] font-medium text-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] outline-none placeholder:text-black/40 focus:border-[#c84d7c]"
                onChange={(event) => changeSearchQuery(event.target.value)}
                placeholder="Cari training..."
                type="search"
                value={searchQuery}
              />
            </label>
          </div>
        ) : (
          <>
            <label className="relative mt-8 block w-full">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-black/65"
                size={20}
                strokeWidth={2.5}
              />
              <input
                className="h-14 w-full rounded-2xl border border-white/80 bg-white/65 pl-13 pr-5 text-[15px] font-medium text-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] outline-none backdrop-blur-xl placeholder:text-black/40 focus:border-black/25 focus:bg-white"
                onChange={(event) => changeSearchQuery(event.target.value)}
                placeholder="Cari pelatihan yang Anda butuhkan..."
                type="search"
                value={searchQuery}
              />
            </label>

            <div
              aria-label="Filter sub-kategori pelatihan"
              className="-mx-5 mt-4 flex flex-nowrap gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 lg:pb-3 lg:[scrollbar-color:rgba(0,0,0,0.25)_transparent] lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-black/25 lg:[&::-webkit-scrollbar-track]:bg-transparent lg:[&::-webkit-scrollbar]:block lg:[&::-webkit-scrollbar]:h-1.5"
            >
              {filters.map((filter) => {
                const isSelected = filter === selectedFilter;

                return (
                  <button
                    className={`cursor-pointer shrink-0 rounded-full border px-4 py-2.5 text-[14px] font-semibold transition-all ${
                      isSelected
                        ? "border-black bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
                        : "border-white/80 bg-white/55 text-black/65 shadow-[0_10px_28px_rgba(0,0,0,0.06)] backdrop-blur-xl hover:border-black/20 hover:bg-white/80 hover:text-black"
                    }`}
                    key={filter}
                    onClick={() => changeFilter(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {isLoading ? (
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                className="aspect-[0.9/1] animate-pulse rounded-[22px] bg-black/[0.06]"
                key={index}
              />
            ))}
          </div>
        ) : visibleTrainings.length ? (
          <>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibleTrainings.map((training) => (
                <Link
                  aria-label={`Lihat detail ${training.title}`}
                  className="group cursor-pointer overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
                  href={`/trainings/${training.slug}`}
                  key={training.id}
                >
                  <div className="relative aspect-[1.35/1] overflow-hidden bg-black/[0.04]">
                    <Image
                      alt={training.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 285px, (min-width: 640px) 45vw, calc(100vw - 40px)"
                      src={training.image_url}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/45">
                      {training.category}
                    </p>
                    <h3 className="mt-2 line-clamp-2 min-h-[3rem] text-[18px] font-bold leading-snug tracking-tight text-black">
                      {training.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-medium text-black/55">
                      {training.sub_category.replaceAll(";", " · ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Pagination program pelatihan" className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  aria-label="Halaman sebelumnya"
                  className="inline-flex h-11 cursor-pointer items-center gap-1 rounded-full border border-black/10 bg-white px-4 text-[14px] font-semibold text-black transition-colors hover:border-black/25 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => page - 1)}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" size={17} />
                  Sebelumnya
                </button>
                <p aria-live="polite" className="px-2 text-[14px] font-medium text-black/60">
                  Halaman <span className="font-bold text-black">{currentPage}</span> dari {totalPages}
                </p>
                <button
                  aria-label="Halaman berikutnya"
                  className="inline-flex h-11 cursor-pointer items-center gap-1 rounded-full bg-black px-4 text-[14px] font-semibold text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/35"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((page) => page + 1)}
                  type="button"
                >
                  Berikutnya
                  <ChevronRight aria-hidden="true" size={17} />
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="mt-9 rounded-[22px] border border-dashed border-black/15 bg-white px-6 py-12 text-center text-[15px] font-medium text-black/55">
            Belum ada pelatihan pada kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
