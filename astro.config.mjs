// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Obelisk',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withobelisk' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Products',
					autogenerate: { directory: 'products' },
				},
			],
		}),
	],
});
