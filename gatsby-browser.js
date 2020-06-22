/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import React from 'react';

import theme from './src/gatsby-plugin-chakra-ui/theme';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  );
};
