/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      "www.bedsdivans.co.uk",
      "cdn.shopify.com",
      "api.dbzbeds.co.uk",
      "api1.bedsdivans.co.uk",
    ],
  },
  rewrites: async () => [
    {
      source: "/public/amazon-pay-button.html",
      destination: "/pages/api/test.js",
    },
  ],
};

module.exports = nextConfig;
