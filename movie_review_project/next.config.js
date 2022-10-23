/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://openapi.naver.com/v1/search/:path*",
      },
    ];
  },
};
