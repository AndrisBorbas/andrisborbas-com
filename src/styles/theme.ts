import { ColorMode, extendTheme } from "@chakra-ui/react";

const config: { initialColorMode: ColorMode; useSystemColorMode: boolean } = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

export const theme = extendTheme({
	config,
	fonts: {
		Lato: "Lato",
	},
});
