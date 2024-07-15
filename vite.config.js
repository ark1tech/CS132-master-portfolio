import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		// Include any dependencies that need to be pre-bundled
		include: ['svelte-motion']
	},
	build: {
		rollupOptions: {
			// Externalize dependencies that should not be bundled
			external: ['svelte-motion']
		}
	}
});
