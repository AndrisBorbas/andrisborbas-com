import { Box, Link, Text } from '@chakra-ui/core';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <Box
      as="footer"
      h="60px"
      w="100%"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      p={4}
      bg="hsla(220, 26%, 10%, 1)"
      mt={8}
      zIndex={1}
    >
      <Box
        maxW={['100%', '540px', '720px', '960px', '1140px']}
        h="100%"
        mx="auto"
        my="auto"
      >
        <Text pb={2} my="auto">
          Built with ❤, <Link href="https://nextjs.org">Next.JS</Link> and{' '}
          <Link href="https://next.chakra-ui.com/">Chakra-UI 1.0</Link> in{' '}
          <span role="img" aria-label="HU" aria-labelledby="HU">
            🇭🇺
          </span>
          <Text as="span" float="right" display={['none', 'inherit']}>
            Copyright © 2020
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
