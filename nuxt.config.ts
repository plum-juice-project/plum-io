// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,
  components: true,


  // I  think this is not used, since we don't use github actions
  nitro: {
    preset: 'github-pages', // Preset for GitHub Pages deployment
    debug: true,
    prerender: {
      crawlLinks: true,
      concurrency: 1,
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/team': { prerender: true },
    '/contacts': { prerender: true },
    '/blog': { prerender: true },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/content-theme-docs',
    '@nuxtjs/color-mode',
  ],

  content: {
    highlight: {
      theme: {
        default: "one-dark-pro",
      },

      preload: ['c', 'bash', 'python']
    },
    markdown: {
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: 'public/icons',
      },
    ],

    clientBundle: {
      scan: {
        // note that when you specify those values, the default behavior will be overridden
        globInclude: ['**icons/*.svg'],
      },
      includeCustomCollections: true,

    },
  },

  css: [
    "~/assets/css/style.css",
    "~/assets/css/home.css"
  ],
  app: {
    head: {
      title: 'Plum Juice',
      meta: [
        { name: 'PlumJuice', content: 'Plum Juice - it\'s not just a Rapsberry Pi cluster' }
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: './favicon.ico' }
      ],
    },
    baseURL: process.env.BASE_URL || '/',
  },

  compatibilityDate: '2024-09-19',
})
