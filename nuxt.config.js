// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'manifest', href: '/manifest.json' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
				{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
				{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
				{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
				{ rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
				{ rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
				{ rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
				{ rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
				{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			],
		},
	},
	runtimeConfig: {
		public: {
			fathomSiteId: '',
			hyperloot: {
				apiBase: '',
			},
			recaptcha: {
				v3SiteKey: '6LfzW1klAAAAAEDA8rdOaDJbyHbKUZhTgrRb4OK9',
			},
		}
	},
	modules: [
    	'@nuxt/image-edge',
		'vue-recaptcha/nuxt',
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
