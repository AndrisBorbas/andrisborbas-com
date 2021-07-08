import {
	AspectRatio,
	Box,
	BoxProps,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";

export function CVMarker({ children, ...restProps }: BoxProps) {
	return (
		<Box
			background="gray.700"
			ml="auto"
			w="64"
			clipPath="polygon(26px 0, 100% 0, 100% 100%, 26px 100%, 0 50%)"
			p="2"
			pr="0"
			color="white"
			{...restProps}
		>
			<Heading as="h2" size="lg" fontFamily="Lato" textAlign="center">
				{children}
			</Heading>
		</Box>
	);
}
