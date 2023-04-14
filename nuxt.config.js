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
		}
	},
	modules: [
    	'@nuxt/image-edge',
		'@nuxtjs/google-fonts',
		[
			'@nuxtjs/i18n',
			{
				vueI18n: {
					runtimeOnly: false,
					messages: {
						en: {
							home: {
								info: {
									tagline1: "Community-owned.",
									tagline2: "Team-based multiplayer.",
									tagline3: "Fast-paced action strategy.",
									partner: {
										title: "Streamer and influencer partnership",
										email: "creators{'@'}cc0wars.com",
										emailLink: "mailto:creator{'@'}cc0wars.com?subject=Creator Partnership",
									},
									business: {
										title: "Business inquiry",
										email: "business{'@'}cc0wars.com",
										emailLink: "mailto:business{'@'}cc0wars.com?subject=Business inquiry",
									},
								},
								signUp: {
									title: "Prepare for Battle",
									description: "Sign up today for a chance to be among the first to play HyperLoot: CC0 Wars beta and receive special in-game items and exclusive digital collectibles.",
									button: "Sign up",
									placeholderEmail: "Enter your email",
									invalidEmail: "Please enter a valid email.",
									formSubmitted: "You're all set. Thank you!",
									formError: "Sorry, something went wrong. Please try again later.",
									formAgreement: "By signing up, you agree to receive marketing emails from us.",
								},
							},
						},
					},
				},
				legacy: false,
				defaultLocale: 'en',
			},
		],
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/styles/global.scss" as global;
						@use "include-media" as query;
					`,
				}
			}
		}
	},
	googleFonts: {
		families: {
			Vollkorn: [400, 500, 600],
		}
	}
});
