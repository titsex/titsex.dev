import tailwind from '@astrojs/tailwind'

import { defineConfig } from 'astro/config'

export default defineConfig({
	integrations: [tailwind()],
	devToolbar: {
		enabled: false,
	},
	site: 'https://titsex.dev',
	base: '',
})
