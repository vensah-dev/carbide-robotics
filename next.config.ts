 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // 👈 this is the fix
  },
};

module.exports = nextConfig