import { Accordion, AccordionItem, Heading, Skeleton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { createClient, Entry } from 'contentful';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { lazy, Suspense, useEffect, useState } from 'react';

import { IBlogPost, IBlogPostFields } from '../@types/generated/contentful';
import PostPreview from '../components/accordion/PostPreview';
import { Layout } from '../components/Layout';

const LazyPostPreview = lazy(() => {
  return import('../components/accordion/PostPreview');
});

export const getStaticProps: GetStaticProps<{
  posts: Array<Entry<IBlogPostFields>>;
}> = async (context) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  });

  async function fetchBlogPosts() {
    const entries = await client.getEntries<IBlogPostFields>({
      content_type: 'blogPost',
    });
    return entries.items;
  }

  function orderPostsByDate(a: IBlogPost, b: IBlogPost): number {
    if (Date.parse(a.fields.date) > Date.parse(b.fields.date)) return -1;
    if (Date.parse(a.fields.date) < Date.parse(b.fields.date)) return 1;
    return 0;
  }

  // const allPosts = await fetchBlogPosts();
  const allPosts = await client.getEntries<IBlogPostFields>({
    content_type: 'blogPost',
  });

  return { props: { posts: allPosts.items } };
};

function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // const [posts, setPosts] = useState<IBlogPost[]>([]);

  // useEffect(() => {}, []);

  function Loading() {
    return <Skeleton />;
  }

  return (
    <Layout>
      <Head>
        <title>AndrisBorbas&apos;s home page</title>
      </Head>
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
        {posts.map((post) => {
          return (
            <AccordionItem key={post.sys.id}>
              <PostPreview
                date={post.fields.date}
                titleText={post.fields.title}
                previewText={post.fields.previewContent}
                previewImage={post.fields.previewImage}
                previewVideo={post.fields.previewVideo}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </Layout>
  );
}

export default HomePage;
