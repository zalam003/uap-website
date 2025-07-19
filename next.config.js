/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
  // Enable strict mode
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
