/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'via.placeholder.com' },
      { hostname: 's3.eu-central-1.amazonaws.com' },
      { hostname: 'ui-avatars.com' },
    ],
  },
}

module.exports = nextConfig
