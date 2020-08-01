import { Accordion, AccordionItem, Heading } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { createClient, Entry } from 'contentful';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import { IBlogPost, IBlogPostFields } from '../@types/generated/contentful';
import PostPreview from '../components/accordion/PostPreview';
import { Layout } from '../components/Layout';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

function HomePage(): JSX.Element {
  async function fetchBlogPosts() {
    const entries = await client.getEntries<IBlogPostFields>({
      content_type: 'blogPost',
    });
    console.log(entries.items);
    return entries.items;
  }

  const [posts, setPosts] = useState<IBlogPost[]>([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchBlogPosts();
      console.log(allPosts);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <Layout>
      <Head>
        <title>AndrisBorbas&apos;s home page</title>
      </Head>
      <Heading as="h1" size="2xl" mb={8}>
        Home Page
      </Heading>
      <Accordion
        defaultIndex={[0, 1, 2]}
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
        {posts.map((post) => {
          return (
            <AccordionItem key={post.sys.id}>
              <PostPreview
                date={post.fields.date}
                titleText={post.fields.title}
                previewText={post.fields.previewContent}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </Layout>
  );
}

export default HomePage;
