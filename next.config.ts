import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Static export has no image optimizer; screenshots are pre-sized webp.
  images: { unoptimized: true },
};

export default nextConfig;
