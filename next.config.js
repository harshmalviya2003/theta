/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack5: false, // Disable webpack 5 caching to resolve file system issues
};
module.exports = {
  transpilePackages: ['three'],
}
module.exports = nextConfig;