export const SITE_URL = "https://akademiquality.com";
export const SITE_NAME = "Akademi Quality";
export const DEFAULT_OG_IMAGE = "/opengraph-image";

export const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/qhse", priority: 0.9 },
  { path: "/rumah-sakit", priority: 0.9 },
  { path: "/blog", priority: 0.8 },
  { path: "/tentang", priority: 0.7 },
  { path: "/kontak", priority: 0.8 },
  { path: "/sertifikat", priority: 0.7 },
] as const;

export function absoluteUrl(pathname = "/") {
  if (pathname.startsWith("http")) {
    return pathname;
  }

  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
