import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://bobbin.app/',
  integrations: [tailwind(), mdx(), sitemap(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })],
  output: 'server',
  adapter: netlify(),
});
