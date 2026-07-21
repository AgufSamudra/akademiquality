"use client";

import Link from "next/link";
import { Search } from "lucide-react";
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

export function BlogCatalog({ posts }: { posts: BlogCatalogPost[] }) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePosts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
    if (!normalizedQuery) return posts;
    return posts.filter((post) => post.title.toLocaleLowerCase("id-ID").includes(normalizedQuery));
  }, [posts, query]);
  const totalPages = Math.max(1, Math.ceil(visiblePosts.length / 9));
  const paginatedPosts = visiblePosts.slice((currentPage - 1) * 9, currentPage * 9);

  return (
    <div>
      <div className="relative max-w-xl">
        <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-black/45" size={20} />
        <label className="sr-only" htmlFor="article-search">Cari artikel berdasarkan judul</label>
        <input className="w-full rounded-full border border-black/10 bg-white py-3.5 pl-13 pr-5 text-[15px] outline-none transition-colors placeholder:text-black/40 focus:border-black/35" id="article-search" onChange={(event) => { setQuery(event.target.value); setCurrentPage(1); }} placeholder="Cari artikel berdasarkan judul..." type="search" value={query} />
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <Link className="block cursor-pointer rounded-[26px] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,.10)]" href={"/blog/" + post.slug} key={post.slug}>
            <p className="text-xs font-bold uppercase tracking-wider text-[#ae4169]">Rilis</p>
            <time className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#ae4169]" dateTime={post.date}>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(post.date))}</time>
            <h2 className="mt-7 text-2xl font-bold leading-tight tracking-tight">{post.title}</h2>
            <p className="mt-4 text-[15px] leading-7 text-black/60">{post.description}</p>
          </Link>
        ))}
      </div>

      {!visiblePosts.length ? <div className="mt-7 rounded-[26px] border border-dashed border-black/15 bg-white/60 p-10 text-center text-[15px] text-black/55">Artikel dengan judul tersebut tidak ditemukan.</div> : null}
      {totalPages > 1 ? <nav aria-label="Pagination artikel" className="mt-10 flex flex-wrap items-center justify-center gap-2"><button className="cursor-pointer rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors disabled:cursor-not-allowed disabled:opacity-35" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => page - 1)} type="button">Sebelumnya</button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => <button aria-current={page === currentPage ? "page" : undefined} className={page === currentPage ? "cursor-pointer rounded-full bg-black px-4 py-2 text-sm font-semibold text-white" : "cursor-pointer rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:border-black"} key={page} onClick={() => setCurrentPage(page)} type="button">{page}</button>)}<button className="cursor-pointer rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors disabled:cursor-not-allowed disabled:opacity-35" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => page + 1)} type="button">Berikutnya</button></nav> : null}
    </div>
  );
}
