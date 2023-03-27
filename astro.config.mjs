import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({ config: { applyBaseStyles: false } }),
		solidJs(),
		sitemap(),
		mdx(),
		prefetch(),
		image({ serviceEntryPoint: "@astrojs/image/sharp" }),
	],
	output: "server",
	adapter: vercel(),
});
