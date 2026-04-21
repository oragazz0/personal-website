const path = require('path')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  allowedDevOrigins: ['local-origin.dev', 'localhost'],
  turbopack: {
    root: __dirname,
  },
  output: 'standalone',
}

module.exports = nextConfig
