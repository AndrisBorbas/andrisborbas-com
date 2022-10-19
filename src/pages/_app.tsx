// import "@fontsource/lato/300.css";
// import "@fontsource/lato/400.css";
// import "@fontsource/lato/700.css";

import "@/styles/core.css";
import "@/styles/global.scss";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { defaultTheme } from "@/styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<Head>
				<meta name="color-scheme" content="dark light" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{/* <link rel="preconnect" href="https://cdn.contentful.com" />
				<link rel="preconnect" href="https://images.ctfassets.net" />
				<link rel="preconnect" href="https://videos.ctfassets.net" /> */}
			</Head>
			<ChakraProvider theme={defaultTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</React.StrictMode>
	);
}
