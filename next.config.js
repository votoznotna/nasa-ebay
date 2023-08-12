/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "mars.nasa.gov",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mars.nasa.gov",
        port: "",
      },
      {
        protocol: "http",
        hostname: "mars.jpl.nasa.gov",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mars.jpl.nasa.gov",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
