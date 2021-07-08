const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fontsource/lato"]);

const nextConfig = {
	reactStrictMode: true,
	future: {
		// strictPostcssConfiguration: true,
	},
};

module.exports = withPlugins(
	[withTM, withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
