/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  // async rewrites() {
  //   return [
  // {
  //   source: "/v1/search/movie.json/:path*",
  //   destination: "https://openapi.naver.com/v1/search/movie.json/:path*",
  // },
  // {
  // source: "/api/movie/popular",
  // destination: `https://api.themoviedb.org/3/movie/popular?api_key=b0b3f86ffd2bec222e6c58bdde742697/:path*`,
  // },
  // ];
  // },
};
