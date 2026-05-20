import type { Metadata } from "next";
import "./globals.css";

import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  title: {
    default: `${SITE_NAME} - Provider Training ISO Top di Indonesia`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Akademi Quality menyediakan pelatihan ISO 9001, ISO 14001, dan ISO 27001 secara online, offline, dan corporate training dengan trainer berpengalaman.",
  keywords: [
    "pelatihan ISO",
    "training ISO",
    "pelatihan ISO 9001",
    "pelatihan ISO 14001",
    "pelatihan ISO 27001",
    "training ISO online",
    "corporate training ISO",
    "Akademi Quality",
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} - Provider Training ISO Top di Indonesia`,
    description:
      "Pelatihan ISO 9001, ISO 14001, dan ISO 27001 untuk individu, mahasiswa, dan perusahaan.",
    url: "/",
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Akademi Quality Training ISO",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Provider Training ISO Top di Indonesia`,
    description:
      "Pelatihan ISO 9001, ISO 14001, dan ISO 27001 secara online, offline, dan corporate training.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/favicon-aq.png",
    shortcut: "/favicon-aq.png",
    apple: "/favicon-aq.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
