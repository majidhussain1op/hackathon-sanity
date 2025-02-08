/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Sanity's image hosting domain
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
