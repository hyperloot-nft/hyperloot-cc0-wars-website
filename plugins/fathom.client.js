import { defineNuxtPlugin } from '#app';
import VueFathom from '@ubclaunchpad/vue-fathom';
 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: nuxtApp.$config.public.fathomSiteId,
    settings: {
      spa: 'history',
    },
  });
});