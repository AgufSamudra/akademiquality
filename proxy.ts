import type { NextRequest } from "next/server";

const REMOVED_PATHS = new Set([
  "/login",
  "/feed",
  "/pengantar-prinsip-struktur-iso900",
  "/perusahaan-kecil-perlu-iso-14001",
  "/training-iso-17025-online-bersertifikat",
  "/iso-14001-visa-ekspor-2025",
  "/training-iso-17020-murah-bersertifikat",
  "/ai-quality-management-produktivitas-kerja-hibrida-2026",
  "/ai-quality-management-produktivitas-kerja-hibrida-2026/feed",
  "/apa-itu-iso-22000-keuntungannya",
  "/behavioral-fitness-adventist-health-healthcare-inside-the-ukiah-california-birdeye",
  "/pelatihan-iso-9001-murah-terjangkau",
  "/training-program",
  "/category/blog",
  "/e-learning",
  "/category/1",
  "/pelatihan-iso-170202012-sistem-manajemen-lembaga-inspeksi",
  "/pelatihan-iso-22716-gmp-murah-terjangkau-berserifikat",
  "/pelatihan-iso-26000-corporate-social-responsibility-csr",
  "/training-iso-9001-online-bersertifikat",
  "/casino-online-utan-spelpaus-hur-fungerar-det-for-4",
  "/category/mostbet-kasyn",
  "/category/online-casino",
  "/category/public",
  "/category/training-category",
  "/pelatihan-iso-17025-murah-terjangkau",
  "/pelatihan-iso-170202012-murah-terjangkau",
]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";

  if (!REMOVED_PATHS.has(pathname)) {
    return;
  }

  return new Response("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: [
    "/login",
    "/feed",
    "/pengantar-prinsip-struktur-iso900",
    "/perusahaan-kecil-perlu-iso-14001",
    "/training-iso-17025-online-bersertifikat",
    "/iso-14001-visa-ekspor-2025",
    "/training-iso-17020-murah-bersertifikat",
    "/ai-quality-management-produktivitas-kerja-hibrida-2026",
    "/ai-quality-management-produktivitas-kerja-hibrida-2026/feed",
    "/apa-itu-iso-22000-keuntungannya",
    "/behavioral-fitness-adventist-health-healthcare-inside-the-ukiah-california-birdeye",
    "/pelatihan-iso-9001-murah-terjangkau",
    "/training-program",
    "/category/blog",
    "/e-learning",
    "/category/1",
    "/pelatihan-iso-170202012-sistem-manajemen-lembaga-inspeksi",
    "/pelatihan-iso-22716-gmp-murah-terjangkau-berserifikat",
    "/pelatihan-iso-26000-corporate-social-responsibility-csr",
    "/training-iso-9001-online-bersertifikat",
    "/casino-online-utan-spelpaus-hur-fungerar-det-for-4",
    "/category/mostbet-kasyn",
    "/category/online-casino",
    "/category/public",
    "/category/training-category",
    "/pelatihan-iso-17025-murah-terjangkau",
    "/pelatihan-iso-170202012-murah-terjangkau",
  ],
};
