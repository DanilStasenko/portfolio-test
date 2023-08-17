/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "95.163.229.14",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
}

module.exports = nextConfig
