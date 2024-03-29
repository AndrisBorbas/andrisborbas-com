import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { HTMLProps } from "react";

import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Stripes } from "./Stripes";

export type LayoutProps = BoxProps;

export function Layout({ children, ...restProps }: LayoutProps) {
	return (
		<>
			<Stripes />

			<Navbar />
			<Box
				position="relative"
				display="flex"
				justifyContent="space-between"
				flexDirection="column"
				minH="calc(100vh - 88px)"
				{...restProps}
			>
				<Box
					id="#"
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
		</>
	);
}
