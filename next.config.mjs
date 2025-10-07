// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bắt buộc để tạo thư mục /out
  images: { unoptimized: true }, // Nếu bạn dùng <Image>
  basePath: '/terrene_dctrng',
  assetPrefix: '/terrene_dctrng/',
};

export default nextConfig;
