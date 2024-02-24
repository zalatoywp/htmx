import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

//https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  integrations: [react(), tailwind()],
  output: "static",
  adapter: vercel(),
});