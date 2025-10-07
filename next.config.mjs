/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bắt buộc để Next export ra HTML tĩnh
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '', // Nếu deploy subfolder, ví dụ '/myapp'
  assetPrefix: './',
};

export default nextConfig;
