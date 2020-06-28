import {
  Box,
  Button,
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
import { css } from '@emotion/core';
import React from 'react';

import favicon from '../../assets/favicon.png';
import NavLink from './NavLink';

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
      bg="hsla(220, 26%, 35%, 0.1875) !important"
      css={css`
        @supports (
          (-webkit-backdrop-filter: none) or (backdrop-filter: none) or
            (-webkit-backdrop-filter: blur(7px)) or (backdrop-filter: blur(7px))
        ) {
          & {
            -webkit-backdrop-filter: blur(7px);
            -ms-backdrop-filter: blur(7px);
            backdrop-filter: blur(7px);
          }
        }
      `}
    >
      <Stack spacing={4} direction="row" align="center">
        <NavLink
          href="#"
          onClick={(): void => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
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
          <MenuButton
            as={Button} /* rightIcon={<Icon name="chevron-down" />} */
          >
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
          </MenuList>
        </Menu>
      </Stack>
    </Box>
  );
}
