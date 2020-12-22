/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
	mount: {
		public: '/',
		src: '/_dist_',
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
		// '@snowpack/plugin-typescript',
		'@snowpack/plugin-sass',
	],
	install: [
		/* ... */
	],
	installOptions: {
		/* ... */
	},
	devOptions: {
		open: 'firefox',
	},
	buildOptions: {
		/* ... */
	},
	proxy: {
		/* ... */
	},
	alias: {
		/* ... */
	},
};
