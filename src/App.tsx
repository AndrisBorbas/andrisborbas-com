import {
  Box,
  ChakraProvider,
  Code,
  CSSReset,
  Grid,
  Link,
  Text,
  VStack,
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import * as React from 'react';

import Logo from './Logo';

const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box textAlign="center" fontSize="xl">
      <Grid
        minH="100vh"
        p={3}
        direction="column"
        align="center"
        justify="center"
      >
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

export default App;
