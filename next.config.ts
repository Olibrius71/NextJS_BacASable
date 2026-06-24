import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // On autorise explicitement ton serveur d'images
        pathname: '/websites/**',
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

export default nextConfig;
