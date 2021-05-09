import { Accordion, AccordionItem, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";

import PostPreview from "@/components/accordion/PostPreview";
import PreviewLink from "@/components/accordion/PreviewLink";
import { Layout } from "@/components/Layout";
import getCmsData from "@/utils/contentful";

export const getStaticProps = async () => {
	const { posts } = await getCmsData();

	return {
		props: {
			posts,
		},
	};
};

function HomePage({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const hydratedPosts = posts.map((post) => {
		const content = hydrate(post.mdxSource, {
			components: { a: PreviewLink },
		});
		return { ...post, content };
	});
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
				{hydratedPosts.map((post) => {
					return (
						<AccordionItem key={post.sys.id}>
							<PostPreview
								date={post.fields.date}
								titleText={post.fields.title}
								previewText={post.content}
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
