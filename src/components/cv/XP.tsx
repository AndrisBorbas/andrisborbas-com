import type { BoxProps } from "@chakra-ui/react";
import { Box, Grid, Heading } from "@chakra-ui/react";

export type XPProps = {
	level: 1 | 2 | 3;
	title: string;
	description: string;
} & BoxProps;

export function XP({ title, description, level }: XPProps) {
	const items = [];
	for (let i = 0; i < level; i++) {
		items.push(
			<Box
				key={i}
				w={4}
				h={4}
				border="3px solid"
				borderRadius="100%"
				borderColor="gray.800"
				backgroundColor="gray.800"
			/>,
		);
	}
	for (let i = 0; i < 3 - level; i++) {
		items.push(
			<Box
				key={3 - i}
				w={4}
				h={4}
				border="3px solid"
				borderRadius="100%"
				borderColor="gray.800"
				backgroundColor="white"
			/>,
		);
	}
	return (
		<>
			<Grid
				pt="2px"
				templateColumns="1fr 1fr 1fr"
				alignContent="center"
				gap={2}
				mr={2}
			>
				{items}
			</Grid>
			<Heading as="h5" fontSize="2xl" fontWeight="medium" mr={4}>
				{title}
			</Heading>
			<Heading as="h6" fontSize="2xl" fontWeight="light">
				{description}
			</Heading>
		</>
	);
}
