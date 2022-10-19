import { Link, LinkProps } from "@chakra-ui/react";

export function PreviewLink({ href, children, ...restProps }: LinkProps) {
	return (
		<Link
			href={href}
			color="blue.400"
			_hover={{
				textDecoration: "underline",
				color: "blue.300",
			}}
			rel="noopener"
			isExternal
			{...restProps}
		>
			{children}
		</Link>
	);
}
