/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"plugin:astro/recommended",
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/strict",
		"plugin:eslint-comments/recommended",
		"plugin:tailwindcss/recommended",
		"prettier",
		"prettier/prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		sourceType: "module",
		ecmaVersion: "latest",
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
			},
		},
	],
};
