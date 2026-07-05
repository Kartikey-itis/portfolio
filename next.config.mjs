/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(isProd && !isVercel ? { basePath: '/portfolio', assetPrefix: '/portfolio/' } : {}),
};

export default nextConfig;
