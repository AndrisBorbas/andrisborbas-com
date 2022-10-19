import type { BoxProps } from "@chakra-ui/react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type XPProps = {
	level: 1 | 2 | 3;
} & BoxProps;

export function XP({ level, children }: XPProps) {
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
			<Grid pt="8px" templateColumns="1fr 1fr 1fr" gap={2} mr={2}>
				{items}
			</Grid>
			{children}
		</>
	);
}

export type SideBySideProps = {
	title: ReactNode;
	description: ReactNode;
} & BoxProps;

export function SideBySide({ title, description }: SideBySideProps) {
	return (
		<>
			<Heading as="h5" fontSize="2xl" fontWeight="medium" mr={4}>
				{title}
			</Heading>
			<Heading as="h6" fontSize="2xl" fontWeight="light">
				{description}
			</Heading>
		</>
	);
}

export type TwoLinerProps = {
	title: ReactNode;
	description: ReactNode;
} & Omit<BoxProps, "title" | "description">;

export function TwoLiner({ title, description, ...restProps }: TwoLinerProps) {
	return (
		<Box {...restProps}>
			<Heading as="h5" fontSize="2xl" fontWeight="medium">
				{title}
			</Heading>
			<Heading as="h6" size="md" fontWeight="light">
				{description}
			</Heading>
		</Box>
	);
}

export type CVTitleProps = BoxProps;

export function CVTitle({ children }: CVTitleProps) {
	return (
		<Box
			textAlign="right"
			pos="relative"
			mr={4}
			_after={{
				content: '""',
				pos: "absolute",
				top: 0,
				h: "calc(100% + 1rem)",
				w: 4,
				background:
					"linear-gradient(to right, transparent, hsl(219, 26.38%, 50.69%))",
			}}
		>
			<Heading as="h4" fontSize="2xl" fontWeight="medium" pr={2}>
				{children}
			</Heading>
		</Box>
	);
}
