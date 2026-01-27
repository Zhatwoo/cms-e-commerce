import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Enable standalone output for Docker deployment
  output: 'standalone',
  turbopack: {
    root: './',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // Use environment variable for backend URL, fallback to localhost for local dev
        destination: process.env.BACKEND_URL || 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
