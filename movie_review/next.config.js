/** @type {import('next').NextConfig} */

const apiKey = "b0b3f86ffd2bec222e6c58bdde742697";
const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  // next/image 경로 설정
  images: {
    domains: ["image.tmdb.org"],
  },

  // scss 설정
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },

  // cors 해결, api key 노출 방지
  async rewrites() {
    return [
      {
        source: "/movie/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko`,
      },
    ];
  },
};
