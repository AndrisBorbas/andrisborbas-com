import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import { defaultTheme } from "@/styles/theme";

export default class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<ColorModeScript
						initialColorMode={defaultTheme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
