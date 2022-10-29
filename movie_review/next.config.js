/** @type {import('next').NextConfig} */

const apiKey = "b0b3f86ffd2bec222e6c58bdde742697";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/movie/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko`,
      },
    ];
  },
};
