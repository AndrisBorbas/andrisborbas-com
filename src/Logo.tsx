import { chakra, ImageProps, keyframes } from '@chakra-ui/core';
import * as React from 'react';

import logo from './logo.svg';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function Logo(props: ImageProps): JSX.Element {
  return (
    <chakra.img
      css={{
        '@media (prefers-reduced-motion: no-preference)': {
          animation: `${spin} infinite 20s linear`,
        },
      }}
      src={logo}
      {...props}
    />
  );
}
