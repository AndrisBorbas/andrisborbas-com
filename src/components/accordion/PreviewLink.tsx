import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export default function PreviewLink({
	href,
	children,
	...restProps
}: LinkProps) {
	return (
		<ChakraLink href={href} color="blue.400" {...restProps}>
			{children}
		</ChakraLink>
	);
}
