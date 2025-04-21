/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// Sentry configuration should be done using the @sentry/nextjs package
// which wraps the standard Next.js config with Sentry features

module.exports = nextConfig; 