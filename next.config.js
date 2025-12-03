/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable Turbopack with empty config
  turbopack: {},
  // Remove experimental.optimizeFonts as it's not needed in Next.js 16
  experimental: {},
  // Configure webpack for font loading
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

// Set the workspace root for Turbopack
if (process.env.TURBOPACK) {
  nextConfig.turbopack = {
    ...nextConfig.turbopack,
    root: __dirname,
  };
}

module.exports = nextConfig;
