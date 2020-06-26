import { Accordion, AccordionItem } from '@chakra-ui/accordion';
import { Box, Heading } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';

import articles from '../../data/articles.json';
import ArticleContent from '../components/accordion/ArticleContent';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Heading as="h1" size="2xl" mb={8}>
        Home Page
      </Heading>
      <Accordion
        defaultIndex={[1, 3]}
        allowMultiple
        bg="hsla(220, 26%, 35%, 0.1875) !important"
        css={css`
          @supports (
            (-webkit-backdrop-filter: none) or (backdrop-filter: none) or
              (-webkit-backdrop-filter: blur(7px)) or
              (backdrop-filter: blur(7px))
          ) {
            & {
              -webkit-backdrop-filter: blur(7px);
              -ms-backdrop-filter: blur(7px);
              backdrop-filter: blur(7px);
            }
          }
        `}
      >
        {articles.map((article) => {
          return (
            <AccordionItem key={article.id}>
              <ArticleContent
                titleText={article.title}
                contentText={article.content}
                imagePath={article.image}
                videoPath={article.video}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
      <Box minH={1000} />
    </Layout>
  );
}
