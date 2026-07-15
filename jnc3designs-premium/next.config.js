/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: [
    "localhost",
    "localhost:3000",
    "*.app.github.dev",
  ],

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost",
        "localhost:3000",
        "127.0.0.1",
        "127.0.0.1:3000",
        "*.app.github.dev",
      ],
    },
  },
};

module.exports = nextConfig;