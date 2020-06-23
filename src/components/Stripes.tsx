import { Box, Grid } from '@chakra-ui/core';
import React from 'react';

export default function Stripes(): JSX.Element {
  return (
    <Grid
      position="absolute"
      top={0}
      h="fit-content"
      w="100%"
      zIndex={-1}
      grid="repeat(5, 175px)/repeat(10, 1fr)"
      transformOrigin={0}
      transform="skewY(-12deg)"
      background="linear-gradient(175grad, hsl(219, 26%, 40%), hsla(219, 26%, 10%, 0.8) 10%, hsla(219, 26%, 23%, 0.8) 34%, hsla(219, 26%, 23%, 0.6) 50%, hsla(220, 26%, 14%, 0.4) 82%, hsla(220, 26%, 14%, 0))"
    >
      <Box
        as="span"
        gridColumn="span 7"
        bg="linear-gradient(100grad, hsla(220, 26%, 32%, 1), hsla(220, 26%, 32%, 0.1))"
      />
      <Box
        as="span"
        gridArea="3 / span 4 / auto / 8"
        bg="linear-gradient(100grad, rgba(43, 54, 74, 0.3), rgba(43, 54, 74, 1))"
      />
      <Box
        as="span"
        gridRow={4}
        gridColumn="span 3"
        bg="linear-gradient(100grad, hsla(220, 26%, 25%, 0), hsla(220, 26%, 40%, 0.4))"
      />
      <Box
        as="span"
        gridArea="4 / span 8 / 5 / 3"
        bg="linear-gradient(100grad, hsla(220, 26%, 12%, 0.4), hsla(220, 26%, 25%, 1) 72%, hsla(220, 26%, 17%, 0.1))"
      />
      <Box
        as="span"
        gridArea="5 / span 10 / auto / 1"
        bg="linear-gradient(100grad, hsla(220, 26%, 14%, 0), hsla(220, 26%, 25%, 1))"
      />
    </Grid>
  );
}
