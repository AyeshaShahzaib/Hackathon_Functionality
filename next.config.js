/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
