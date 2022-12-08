/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_APP_GOOGLE_MAP_KEY: process.env.NEXT_APP_GOOGLE_MAP_KEY,
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY,
  },
};

module.exports = nextConfig;
