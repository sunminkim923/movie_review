/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/v1/search/movie.json/:path*",
        destination: "https://openapi.naver.com/v1/search/movie.json/:path*",
      },
    ];
  },
};
