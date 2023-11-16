/** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: "export",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "files.stripe.com",
//       },
//     ],
//   },
// };

module.exports = {
  // output: "export",
  // images: {unoptimized:true}
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
    ],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
