/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['media.hahalolo.com']
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.hahalolo.com',
        port: '',
        pathname: '/2023/04/21/09/04/b229a2e095cea60f416bcc8852de1af4-1682067856_1080xauto_high.jpg.webp',
      },
    ],
  },
}

module.exports = nextConfig
