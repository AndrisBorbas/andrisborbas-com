import { ColorMode, extendTheme } from "@chakra-ui/react";

const config: { initialColorMode: ColorMode; useSystemColorMode: boolean } = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config });
export default theme;
