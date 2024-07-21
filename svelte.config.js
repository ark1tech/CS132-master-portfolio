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
		adapter: adapter()
	}
};

export default config;
