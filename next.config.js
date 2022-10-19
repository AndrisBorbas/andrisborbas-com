const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fontsource/lato"]);
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
	},
});

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net"],
	},
	experimental: {
		newNextLinkBehavior: true,
		images: { allowFutureImage: true },
	},
	swcMinify: true,
};

module.exports = withPlugins(
	[
		[withTM],
		[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
		[
			withMDX,
			{
				pageExtensions: ["tsx", "mdx", "ts"],
			},
		],
	],
	nextConfig,
);
