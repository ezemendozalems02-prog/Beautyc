/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    browserToTerminal: true,
  },
  experimental: {
    transitionIndicator: true,
    serverActions: {
      allowedOrigins: [
        '*.vusercontent.net',
      ],
    },
  },
};

export default nextConfig;
