import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
