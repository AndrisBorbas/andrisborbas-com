import { Box, css, Heading, Image, Link, Stack } from '@chakra-ui/core';
import React from 'react';

import favicon from '../../assets/favicon.png';
// import { css } from '@emotion/core';

export default function Navbar(): JSX.Element {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      mb={4}
      p={4}
      background="linear-gradient(rgba(144, 144, 144, 0.8125), rgba(80, 80, 80, 0.75))"
      css={css`
        @supports (
          (-webkit-backdrop-filter: none) or (backdrop-filter: none) or
            (-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px))
        ) {
          & {
            -webkit-backdrop-filter: blur(6px);
            backdrop-filter: blur(6px);
            background: rgba(144, 144, 144, 0.1875) !important;
            background: #9993 !important;
          }
        }
      `}
    >
      <Stack spacing={4} direction="row" align="center">
        <Link href="/">
          <Image src={favicon} w="30px" borderRadius="5px" />
        </Link>
        <Link href="/">
          <Heading as="h3" size="sm">
            Home
          </Heading>
        </Link>
        <Link href="https://github.com/AndrisBorbas">
          <Heading as="h3" size="sm">
            My GitHub
          </Heading>
        </Link>
      </Stack>
    </Box>
  );
}
