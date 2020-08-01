import { Link, LinkProps } from '@chakra-ui/core';
import React from 'react';

export default function NavLink({
  children,
  ...restProps
}: LinkProps): JSX.Element {
  return (
    <Link _hover={{ textDecoration: 'none' }} {...restProps}>
      {children}
    </Link>
  );
}
