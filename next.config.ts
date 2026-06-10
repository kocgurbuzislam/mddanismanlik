import type { NextConfig } from "next";

const emptyPolyfill = "./src/lib/empty-polyfill.js";

const polyfillAlias = {
  "next/dist/build/polyfills/polyfill-module": emptyPolyfill,
  "../build/polyfills/polyfill-module": emptyPolyfill,
} as const;

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    cssChunking: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    resolveAlias: polyfillAlias,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...polyfillAlias,
    };
    return config;
  },
};

export default nextConfig;
