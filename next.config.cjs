/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    images: {
      domains: ["assets.aceternity.com"], // Allow this external domain
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
// export default nextConfig;
