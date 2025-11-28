import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["https://bsenviro.com/"],
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
