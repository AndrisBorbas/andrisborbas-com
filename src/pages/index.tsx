import { Accordion, AccordionItem, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { PostPreview } from "@/components/accordion/PostPreview";
import { Layout } from "@/components/Layout";
import { getPosts } from "@/utils/contentful";

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: {
			posts,
		},
	};
}

export type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: IndexProps) {
	const router = useRouter();
	const [opened, setOpened] = useState([0, 1]);

	function updateOpened(indices: number[]) {
		setOpened(indices);
	}

	const setupOpened = useCallback(
		(id: string) => {
			const linkIndex = posts.findIndex((post) => post.id === id);

			if (linkIndex !== -1 && !opened.includes(linkIndex)) {
				setOpened([...opened, linkIndex]);
			}
		},
		[opened, posts],
	);
	useEffect(() => {
		console.log(opened);
		const id = router.asPath.substring(
			router.asPath.indexOf("#") + 1,
			router.asPath.includes("?")
				? router.asPath.indexOf("?")
				: router.asPath.length,
		);

		setupOpened(id);
		router.push(router.asPath);

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.asPath]);

	return (
		<Layout>
			<Head>
				<title>AndrisBorbas&apos;s home page</title>
			</Head>
			<Heading as="h1" size="2xl" mb={8}>
				Blog Posts
			</Heading>
			<Accordion
				defaultIndex={[0, 1]}
				onChange={(indices) => updateOpened(indices as number[])}
				index={opened}
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
						<AccordionItem key={post.id}>
							<PostPreview
								date={post.fields.date}
								titleText={post.fields.title}
								previewText={post.mdxSource}
								id={post.id}
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
