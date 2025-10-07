/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Nếu deploy lên Vercel - để mặc định
  output: 'standalone',
  
  // Nếu có dùng images từ external sources
  images: {
    unoptimized: false,
    remotePatterns: [
      // Thêm domains nếu bạn load images từ bên ngoài
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },

  // Experimental features (cho next-view-transitions)
  experimental: {
    // Có thể cần thêm config cho view transitions nếu dùng
  },
};

export default nextConfig;