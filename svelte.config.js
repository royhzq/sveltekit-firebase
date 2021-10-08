import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			style: 'postcss',
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
