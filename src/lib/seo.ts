export const SITE_URL = "https://akademiquality.com";
export const SITE_NAME = "Akademi Quality";
export const DEFAULT_OG_IMAGE = "/hero.png";

export const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/training-program", priority: 0.9 },
  { path: "/corporate-training", priority: 0.9 },
  { path: "/training-iso-9001-online-bersertifikat", priority: 0.9 },
  { path: "/training-iso-14001-online-murah-bersertifikat", priority: 0.9 },
  {
    path: "/training-iso-27001-online-murah-terjangkau-bersertifikat",
    priority: 0.9,
  },
  { path: "/tentang", priority: 0.7 },
  { path: "/kontak", priority: 0.8 },
] as const;

export function absoluteUrl(pathname = "/") {
  if (pathname.startsWith("http")) {
    return pathname;
  }

  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
