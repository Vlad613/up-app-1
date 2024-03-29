const axios = require('axios')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'up-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google-site-verification', content: 'QVnqpRH1zrIJaZQhlh4GTT_yHKlc0whJ6hhs5t9ToYE'}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    './assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr.css',
    './assets/fonts/HelvetikaNow/HelveticaNowDisplay.css',
    './assets/fonts/SFProDisplay/SFProDisplay.css',
    './assets/fonts/Garamond/Garamond.css',
    './assets/styles/reset.scss',
    './assets/styles/text.scss',
    './assets/styles/main.scss',
    './assets/styles/process.scss',
    './assets/styles/item_project.scss'
    // 'swiper/css/swiper.css',
  ],

  plugins: [
    { src: '~/plugins/vue-intersect.js', ssr: false },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    "~/plugins/gtag"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/sitemap'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  sitemap: {
    hostname: 'https://uparchitecture.nl',
    gzip: true,
    routes: async () => {
      const { data } = await axios.get('https://strapi.uparchitecture.nl/projects-lists')
      return data.map((project) => `/project/${project.id}`)
    }
  }
};
