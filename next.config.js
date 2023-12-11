/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  publicRuntimeConfig: {
    version: process.env.npm_package_version,
  },
};

module.exports = nextConfig;
