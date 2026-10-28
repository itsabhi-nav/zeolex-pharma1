import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(import.meta.dirname),
  async redirects() {
    return [
      // Legacy 11-page routes consolidated into the new 6-page architecture
      { source: "/why-zoelex", destination: "/about#why-zoelex", permanent: true },
      { source: "/careers", destination: "/about#careers", permanent: true },
      { source: "/products", destination: "/technologies#categories", permanent: true },
      { source: "/services", destination: "/manufacturing#services", permanent: true },
      { source: "/infrastructure-quality", destination: "/manufacturing#quality", permanent: true },
      { source: "/global-reach", destination: "/global", permanent: true },
      { source: "/faqs", destination: "/contact#faqs", permanent: true },
    ];
  },
};

export default nextConfig;
