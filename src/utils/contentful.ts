import type { Entry } from "contentful";
import { createClient } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";
import type { MdxRemote } from "next-mdx-remote/types";

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

export default async function getCmsData() {
	const allPosts = await client.getEntries<IBlogPostFields>({
		content_type: "blogPost",
	});

	allPosts.items.sort(orderEntriesByDate);

	const renderedPosts: (IBlogPost & {
		mdxSource: MdxRemote.Source;
	})[] = await Promise.all(
		allPosts.items.map(async (item) => {
			const mdxSource = await renderToString(item.fields.previewContent);
			const r = {
				mdxSource,
				...item,
			} as IBlogPost & { mdxSource: MdxRemote.Source };
			return r;
		}),
	);

	return {
		posts: renderedPosts,
	};
}
