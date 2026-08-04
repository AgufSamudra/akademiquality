import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
