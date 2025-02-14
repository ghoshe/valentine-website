import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Optional: Add allowed domains if loading images from external sources
    // domains: [],

    // This helps resolve path issues
    unoptimized: false
  },

  // Optional: Webpack configuration if needed
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;