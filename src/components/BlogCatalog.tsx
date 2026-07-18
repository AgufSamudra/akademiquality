"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type BlogCatalogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  subcategory: string;
  tags: string[];
};

const subcategories = ["Semua", "ISO", "Laboratorium", "Food", "K3", "Mikrobiologi", "Warehouse", "Akreditasi", "Audit", "Keperawatan", "Keuangan", "Manajemen", "SDM", "Spesialis", "Safety"];

export function BlogCatalog({ posts }: { posts: BlogCatalogPost[] }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState("Semua");
  const visiblePosts = useMemo(() => selectedSubcategory === "Semua" ? posts : posts.filter((post) => post.subcategory === selectedSubcategory), [posts, selectedSubcategory]);

  return (
    <div>
      <div className="overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:thin]">
        <div className="flex w-max gap-2">
          {subcategories.map((subcategory) => {
            const isSelected = subcategory === selectedSubcategory;
            return <button className={isSelected ? "cursor-pointer rounded-full border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition-colors" : "cursor-pointer rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-black/60 transition-colors hover:border-black/20 hover:text-black"} key={subcategory} onClick={() => setSelectedSubcategory(subcategory)} type="button">{subcategory}</button>;
          })}
        </div>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <Link className="block cursor-pointer rounded-[26px] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,.10)]" href={"/blog/" + post.slug} key={post.slug}>
            <p className="text-xs font-bold uppercase tracking-wider text-[#ae4169]">Rilis</p>
            <time className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#ae4169]" dateTime={post.date}>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(post.date))}</time>
            <h2 className="mt-7 text-2xl font-bold leading-tight tracking-tight">{post.title}</h2>
            <p className="mt-4 text-[15px] leading-7 text-black/60">{post.description}</p>
          </Link>
        ))}
      </div>

      {!visiblePosts.length ? <div className="mt-7 rounded-[26px] border border-dashed border-black/15 bg-white/60 p-10 text-center text-[15px] text-black/55">Artikel untuk subkategori ini sedang disiapkan.</div> : null}
    </div>
  );
}
