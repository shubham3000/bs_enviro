import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bsenviro.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  compiler: {
    styledComponents: true,
  },

  pageExtensions: ["tsx", "ts", "jsx", "js"],
  output: "export",
};

export default nextConfig;