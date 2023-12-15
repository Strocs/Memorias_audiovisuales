import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/static'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],
	site: 'https://memorias-audiovisuales.vercel.app',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	})
})
