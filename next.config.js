const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	{
		reactStrictMode: true,
		future: {
			// Disable until fixed on vercel
			// webpack5: true,
			strictPostcssConfiguration: true,
			excludeDefaultMomentLocales: true,
		},
	},
);
