import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brandmaina.com',
        port: '',
        pathname: '/**', // optional, use if loading specific folders
      },
    ],
  },
};


export default nextConfig;