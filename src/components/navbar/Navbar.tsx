import {
  Box,
  Button,
  css,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
} from '@chakra-ui/core';
import React from 'react';

import favicon from '../../assets/favicon.png';
import Stripes from '../Stripes';
import NavLink from './NavLink';
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
      // background="linear-gradient(rgba(144, 144, 144, 0.8125), rgba(80, 80, 80, 0.75))"
      css={css`
        & {
          -webkit-backdrop-filter: blur(7px);
          -ms-backdrop-filter: blur(7px);
          backdrop-filter: blur(7px);
          background: hsla(220, 26%, 35%, 0.1875) !important;
        }
      `}
    >
      <Stack spacing={4} direction="row" align="center">
        <NavLink href="/">
          <Image src={favicon} w="30px" borderRadius="5px" />
        </NavLink>
        <NavLink href="/">
          <Heading as="h3" size="sm">
            Home
          </Heading>
        </NavLink>
        <NavLink href="https://github.com/AndrisBorbas" target="blank">
          <Heading as="h3" size="sm">
            My GitHub
          </Heading>
        </NavLink>
        <Menu>
          <MenuButton as={Button} rightIcon={<Icon name="chevron-down" />}>
            Projects
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink
                href="https://andrisborbas.github.io/FactorioRatioCounter"
                target="blank"
              >
                Factorio Ratio Counter
              </NavLink>
            </MenuItem>
            <MenuDivider />
          </MenuList>
        </Menu>
      </Stack>
    </Box>
  );
}
