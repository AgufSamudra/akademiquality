import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/form/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
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
