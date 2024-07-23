import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			'$lib/*': './src/lib/*',
			'$components/*': './src/lib/components/*',
			'$server/*': './src/lib/server/*',
			'$assets/*': './src/lib/assets/*',
			'$stores/*': './src/lib/stores/*'
		},
		adapter: adapter(),
		prerender: {
			entries: [
				'/sdg-1/projects',
				'/sdg-2/projects',
				'/sdg-3/projects',
				'/sdg-4/projects',
				'/sdg-5/projects',
				'/sdg-6/projects',
				'/sdg-7/projects',
				'/sdg-8/projects',
				'/sdg-9/projects',
				'/sdg-10/projects',
				'/sdg-11/projects',
				'/sdg-13/projects',
				'/sdg-14/projects',
				'/sdg-15/projects',
				'/sdg-16/projects'
			]
		}
	}
};

export default config;
