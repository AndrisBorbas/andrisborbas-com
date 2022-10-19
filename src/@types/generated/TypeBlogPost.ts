import type * as Contentful from "contentful";

export interface TypeBlogPostFields {
	title: Contentful.EntryFields.Symbol;
	date: Contentful.EntryFields.Date;
	previewContent: Contentful.EntryFields.Text;
	previewImage?: Contentful.Asset;
	previewVideo?: Contentful.Asset;
	articleContent?: Contentful.EntryFields.Text;
	articleImages?: Contentful.Asset[];
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;
