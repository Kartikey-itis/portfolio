/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(isProd ? { basePath: '/portfolio', assetPrefix: '/portfolio/' } : {}),
};

export default nextConfig;
