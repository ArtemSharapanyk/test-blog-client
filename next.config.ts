import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "decisive-cats-5554c0b542.media.strapiapp.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      }
    ]
  }
};

export default nextConfig;
