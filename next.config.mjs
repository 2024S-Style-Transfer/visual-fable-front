/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
