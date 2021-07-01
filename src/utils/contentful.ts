import type { Entry } from "contentful";
import { createClient } from "contentful";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import type { IBlogPost, IBlogPostFields } from "@/@types/generated/contentful";

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
});

function orderEntriesByDate(
	a: Entry<IBlogPostFields>,
	b: Entry<IBlogPostFields>,
): number {
	return Date.parse(b.fields.date) - Date.parse(a.fields.date);
}

export async function getCmsData() {
	const allPosts = await client.getEntries<IBlogPostFields>({
		content_type: "blogPost",
	});

	allPosts.items.sort(orderEntriesByDate);

	const renderedPosts = await Promise.all(
		allPosts.items.map(async (item) => {
			const mdxSource = await serialize(item.fields.previewContent);
			const id = item.fields.title.toLowerCase().replace(/ /g, "");
			return {
				mdxSource,
				id,
				...item,
			} as IBlogPost & {
				id: string;
				mdxSource: MDXRemoteSerializeResult;
			};
		}),
	);

	return {
		posts: renderedPosts,
	};
}
