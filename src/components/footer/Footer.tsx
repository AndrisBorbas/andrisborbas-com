import { Box, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export function Footer() {
	return (
		<Box
			as="footer"
			h="60px"
			w="100%"
			position="absolute"
			bottom={0}
			left={0}
			right={0}
			p={4}
			bg="hsla(220, 26%, 10%, 1)"
			mt={8}
			zIndex={1}
			css={css`
				@media print {
					& {
						display: none;
					}
				}
			`}
		>
			<Box
				maxW={["100%", "540px", "720px", "960px", "1140px"]}
				h="100%"
				mx="auto"
				my="auto"
			>
				<Text pb={2} my="auto">
					Built with ❤,{" "}
					<Link href="https://nextjs.org" isExternal>
						Next.JS
					</Link>{" "}
					and{" "}
					<Link href="https://chakra-ui.com/" isExternal>
						Chakra-UI
					</Link>{" "}
					in{" "}
					<span role="img" aria-label="HU" aria-labelledby="HU">
						🇭🇺
					</span>
					<Text as="span" float="right" display={["none", "inherit"]}>
						<Link href="https://twitter.com/AndrisBorbas" isExternal>
							© 2021 AndrisBorbas
						</Link>
					</Text>
				</Text>
			</Box>
		</Box>
	);
}
