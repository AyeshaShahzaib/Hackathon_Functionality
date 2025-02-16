/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensure standalone deployment



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
