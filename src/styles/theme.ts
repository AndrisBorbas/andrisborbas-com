import { ColorMode, extendTheme } from "@chakra-ui/react";

const config: { initialColorMode: ColorMode; useSystemColorMode: boolean } = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

export const defaultTheme = extendTheme({
	config,
	fonts: {
		Lato: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
});

export const cvTheme = extendTheme({
	config,
	styles: {
		global: {
			"html, body": {
				minWidth: "1300px",
			},
		},
	},
	fonts: {
		Lato: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		heading:
			'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		body: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
});
