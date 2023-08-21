/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
				pathname: '/**'
      },
      {
        hostname: "s3-alpha-sig.figma.com",
        protocol: "https",
				pathname: '/**'
      },
    ],
  },
	webpack(config) {
		config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
		return config
	}
};

module.exports = nextConfig;
