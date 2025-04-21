import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

const site = "https://wwww.gptsurl.com";

// https://astro.build/config
export default defineConfig({
  site,
  output: "server",
  adapter: netlify(),
  integrations: [tailwind()]
});
