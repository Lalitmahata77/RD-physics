import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // dynamicIO: true,
    authInterrupts: true,
    useCache: true,
  },
};

export default nextConfig;
