import type { BoxProps } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";

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
				borderWidth: "0.5rem",
				borderStyle: "solid",
				borderImage:
					"linear-gradient(to right, transparent, hsl(219, 26.38%, 50.69%)) 8",
			}}
		>
			<Heading as="h4" fontSize="2xl" fontWeight="medium" pr={2}>
				{children}
			</Heading>
		</Box>
	);
}
