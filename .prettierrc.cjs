/** @type {import("prettier").Config} */
module.exports = {
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	useTabs: true,
	trailingComma: "all",
	tabWidth: 2,
	endOfLine: "lf",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.md",
			options: {
				useTabs: false,
				trailingComma: "none",
			},
		},
	],
};
