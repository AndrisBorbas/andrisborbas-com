import { Accordion, AccordionItem } from '@chakra-ui/accordion';
import { Box, Heading } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import articles from '../../data/articles.json';
import ArticleContent from '../components/accordion/ArticleContent';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "mp4" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Heading as="h1" size="2xl" mb={8}>
        Home Page
      </Heading>
      <Accordion
        defaultIndex={[0, 1]}
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
          const link = data.allFile.edges.find(
            (file: { node: { name: string } }) =>
              file.node.name === article.fileName,
          );
          return (
            <AccordionItem key={article.id}>
              <ArticleContent
                titleText={article.title}
                contentText={article.content}
                imagePath={article.image}
                videoPath={article.video}
                height={article.minHeight}
                width={article.imageWidth}
                buttonText={article.buttonText}
                buttonLink={
                  article.buttonLink === ''
                    ? link.node.publicURL
                    : article.buttonLink
                }
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </Layout>
  );
}
