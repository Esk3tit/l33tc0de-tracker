/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Good for Fly.io
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Skip static generation for these pages
  async generateStaticParams() {
    return []
  }
}

module.exports = nextConfig
