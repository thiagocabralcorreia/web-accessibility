/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    appDir: true,
    swcMinifyDebugOptions: {
      compress: {
        defaults: true,
        side_effects: false,
      },
    },
  },
  darkMode: "class",
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
