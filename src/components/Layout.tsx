import { Box } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './footer/Footer';
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
        position="relative"
        display="flex"
        flexDirection="column"
        h="100%"
        pb="76px"
        minH="1050px"
      >
        <Box
          as="main"
          maxW={['100%', '540px', '720px', '960px', '1140px']}
          w="100%"
          flexShrink={0}
          flex="1 0 auto"
          p={0}
          m={0}
          mx={['0', 'auto']}
          px={[4, 0]}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </React.StrictMode>
  );
}
