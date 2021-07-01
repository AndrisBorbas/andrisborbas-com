// import "@fontsource/lato/300.css";
// import "@fontsource/lato/400.css";
// import "@fontsource/lato/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { theme } from "@/styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="color-scheme" content="dark light" />
				{/* <link rel="preconnect" href="https://cdn.contentful.com" />
				<link rel="preconnect" href="https://images.ctfassets.net" />
				<link rel="preconnect" href="https://videos.ctfassets.net" /> */}
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
