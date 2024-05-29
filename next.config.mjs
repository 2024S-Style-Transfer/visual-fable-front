/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
