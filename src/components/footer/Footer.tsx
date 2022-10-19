import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export function Footer() {
	return (
		<Box
			as="footer"
			w="100%"
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
				mx="auto"
				my="auto"
			>
				<Flex
					flexDir={["column", "row"]}
					justifyContent={["center", "space-between"]}
					alignItems={["initial", "center"]}
				>
					<Text alignSelf={["center", "center"]}>
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
					</Text>
					<Text alignSelf={["center", "center"]}>
						<Link href="https://github.com/AndrisBorbas" isExternal>
							© 2018-{new Date().getFullYear()} AndrisBorbas
						</Link>
					</Text>
				</Flex>
			</Box>
		</Box>
	);
}
