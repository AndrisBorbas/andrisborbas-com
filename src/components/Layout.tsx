import { Box } from "@chakra-ui/react";
import React, { HTMLProps } from "react";

import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Stripes } from "./Stripes";

export type LayoutProps = HTMLProps<HTMLDivElement>;

export function Layout({ children }: LayoutProps) {
	return (
		<React.StrictMode>
			<Stripes />

			<Navbar />
			<Box
				position="relative"
				display="flex"
				flexDirection="column"
				h="100%"
				pb="76px"
				minH="1050px"
			>
				<Box
					as="main"
					maxW={["100%", "540px", "720px", "960px", "1140px"]}
					w="100%"
					flexShrink={0}
					flex="1 0 auto"
					p={0}
					m={0}
					mx={["0", "auto"]}
					px={[4, 0]}
				>
					{children}
				</Box>

				<Footer />
			</Box>
		</React.StrictMode>
	);
}
