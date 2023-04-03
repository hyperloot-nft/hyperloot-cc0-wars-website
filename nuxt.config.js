// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			hyperloot: {
				apiBase: '',
			},
		}
	},
	modules: [
    	'@nuxt/image-edge',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as global;',
				}
			}
		}
	}
});
