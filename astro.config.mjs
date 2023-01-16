import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  // Example: Require a trailing slash during development
  trailingSlash: "ignore",
  markdown: {
    drafts: true,
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },

  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
    image(),
    mdx({
      drafts: true,
      extendPlugins: "astroDefaults",
    }),
  ],
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; // remove
