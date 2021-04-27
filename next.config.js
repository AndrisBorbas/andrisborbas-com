const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	{
		reactStrictMode: true,
		future: {
			webpack5: true,
			strictPostcssConfiguration: true,
			excludeDefaultMomentLocales: true,
		},
	},
);