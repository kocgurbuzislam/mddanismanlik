import type { NextConfig } from "next";

const emptyPolyfill = "./src/lib/empty-polyfill.js";

const polyfillAlias = {
  "next/dist/build/polyfills/polyfill-module": emptyPolyfill,
  "../build/polyfills/polyfill-module": emptyPolyfill,
} as const;

const nextConfig: NextConfig = {
  // Telefondan yerel ağ IP'si ile test için (dev modunda JS/hydration çalışsın)
  allowedDevOrigins: ["192.168.1.35", "172.20.208.1"],
  experimental: {
    inlineCss: true,
    cssChunking: false,
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [50, 75],
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
