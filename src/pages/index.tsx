import { Accordion, AccordionItem, Heading, Skeleton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { createClient, Entry } from 'contentful';
import Head from 'next/head';
import React, { lazy, Suspense, useEffect, useState } from 'react';

import { IBlogPost, IBlogPostFields } from '../@types/generated/contentful';
import { Layout } from '../components/Layout';

const PostPreview = lazy(() => import('../components/accordion/PostPreview'));

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

function HomePage(): JSX.Element {
  async function fetchBlogPosts() {
    const entries = await client.getEntries<IBlogPostFields>({
      content_type: 'blogPost',
    });
    return entries.items;
  }

  const [posts, setPosts] = useState<IBlogPost[]>([]);

  function orderPostsByDate(a: IBlogPost, b: IBlogPost): number {
    if (Date.parse(a.fields.date) > Date.parse(b.fields.date)) return -1;
    if (Date.parse(a.fields.date) < Date.parse(b.fields.date)) return 1;
    return 0;
  }

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchBlogPosts();
      // allPosts.sort(orderPostsByDate);
      setPosts([...allPosts.sort(orderPostsByDate)]);

      console.log(allPosts);
    }
    getPosts();
  }, []);

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
              <Suspense fallback={Loading()}>
                <PostPreview
                  date={post.fields.date}
                  titleText={post.fields.title}
                  previewText={post.fields.previewContent}
                  previewImage={post.fields.previewImage}
                  previewVideo={post.fields.previewVideo}
                />
              </Suspense>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Layout>
  );
}

export default HomePage;
