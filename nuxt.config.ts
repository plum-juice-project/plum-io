// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Disable SSR for static hosting on GitHub Pages
  ssr: true,

  nitro: {
    preset: 'github-pages', // Preset for GitHub Pages deployment
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },


  routeRules: {
    // Optional: define rules for prerendering specific routes
    '/*': { prerender: true },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],

  googleFonts: {
    families: {
      Inter: [400, 600, 700],
    },
    display: 'swap',
  },

  css: [
    "~/assets/css/style.css",
    "~/assets/css/home.css"
  ],

  app: {
    head: {
      title: 'Plum Juice',
      meta: [
        { name: 'description', content: 'Plum Juice - a static website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: '/', // Set the base URL to your GitHub repository name
  },

  compatibilityDate: '2024-09-19',
})