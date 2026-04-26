/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// REPLACE 'your-repo-name' with the actual name of your GitHub repository
const repoName = 'carbide-robotics'; 

const nextConfig = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  output: 'export', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;