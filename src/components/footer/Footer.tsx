import { Box, Heading, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';

export default function Footer() {
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
      <Box maxW={['100%', '540px', '720px', '960px', '1140px']} mx="auto">
        <Text float="right">Copyright © 2020</Text>
      </Box>
    </Box>
  );
}
