import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import type { AppProps } from 'next/app';
import React from 'react';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const customTheme = {
    ...theme,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
  };
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://cdn.contentful.com" />
      </Helmet>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
