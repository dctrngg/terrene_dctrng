/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // 👇 Chú ý: thay bằng tên repo chính xác của bạn
  basePath: '/terrene_dctrng',
  assetPrefix: '/terrene_dctrng/',
};

export default nextConfig;
