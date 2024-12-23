import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.elaniin.com',
        pathname: '/**', // Permite cualquier ruta dentro del dominio.
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
