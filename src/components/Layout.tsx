import { Box, InitializeColorMode } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './navbar/Navbar';
import Stripes from './Stripes';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <Stripes />

      <Navbar />

      <Box
        as="main"
        maxW={['100%', '540px', '720px', '960px', '1140px']}
        w="100%"
        flexShrink={0}
        flex="1 0 auto"
        p={0}
        m={0}
        mx={['1rem', 'auto']}
      >
        {children}
      </Box>

      <footer>{/* TODO */}</footer>
    </React.StrictMode>
  );
}
