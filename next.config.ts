import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Set the sub-path for GitHub Pages
  basePath: isProd ? '/carbide-robotics' : '',
  
  // 2. Fix asset loading (JS/CSS)
  assetPrefix: isProd ? '/carbide-robotics/' : '',

  // 3. Enable Static Export
  output: 'export',

  // 4. Disable image optimization (required for static hosting)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;