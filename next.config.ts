import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/training-program",
        destination: "/#program",
        permanent: true,
      },
      {
        source: "/corporate-training",
        destination: "/#program",
        permanent: true,
      },
      {
        source: "/training-iso-9001-online-bersertifikat",
        destination: "/qhse",
        permanent: true,
      },
      {
        source: "/training-iso-14001-online-murah-bersertifikat",
        destination: "/qhse",
        permanent: true,
      },
      {
        source: "/training-iso-27001-online-murah-terjangkau-bersertifikat",
        destination: "/qhse",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hiipgoqfwhdfqqxayvlt.supabase.co",
        pathname: "/storage/v1/object/public/training-image/**",
      },
    ],
  },
};

export default nextConfig;
