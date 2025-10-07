/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/terrene_dctrng',  // ví dụ: '/terrene' (nếu repo bạn tên là 'terrene')
  assetPrefix: '/terrene_dctrng'
};

export default nextConfig;
