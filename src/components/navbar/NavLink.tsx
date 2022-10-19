import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
	isExternal?: boolean;
	href: string;
} & LinkProps;

export function NavLink({
	children,
	isExternal,
	href,
	...restProps
}: NavLinkProps) {
	return (
		<Link href={href} passHref>
			<ChakraLink
				_hover={{ textDecoration: "none" }}
				target={`${isExternal === true ? "_blank" : ""}`}
				{...restProps}
			>
				{children}
			</ChakraLink>
		</Link>
	);
}
