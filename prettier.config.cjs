/** @type {import("prettier").Config} */
module.exports = {
	pluginSearchDirs: [__dirname],
	plugins: [require.resolve('prettier-plugin-astro')],

	useTabs: true,
	trailingComma: 'all',

	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.md',
			options: {
				useTabs: false,
				trailingComma: 'none',
			},
		},
	],
}
