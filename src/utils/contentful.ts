import { createClient } from "contentful";
import { serialize } from "next-mdx-remote/serialize";

import type { TypeBlogPostFields } from "@/@types/generated/index";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken:
		(process.env.VERCEL_ENV === "production"
			? process.env.CONTENTFUL_ACCESS_TOKEN
			: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? "ErrorNoAccessToken",
	host:
		process.env.VERCEL_ENV === "production"
			? "cdn.contentful.com"
			: "preview.contentful.com",
}).withoutUnresolvableLinks;

export async function getPosts() {
	const allPosts = await client.getEntries<TypeBlogPostFields>({
		content_type: "blogPost",
		order: "-fields.date",
	});

	const renderedPosts = await Promise.all(
		allPosts.items.map(async (post) => {
			const mdxSource = await serialize(post.fields.previewContent);
			const id = post.fields.title.toLowerCase().replace(/ /g, "");
			return {
				mdxSource,
				id,
				...post,
			};
		}),
	);

	return renderedPosts;
}
