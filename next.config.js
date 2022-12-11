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
  },
  darkMode: "class",
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
