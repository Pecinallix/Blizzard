/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.brchallenges.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brchallenges.com'
      }
    ]
  }
};

module.exports = nextConfig;
