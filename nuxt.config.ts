// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Disable SSR for static hosting on GitHub Pages
  ssr: true,

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
    '/about': { prerender: true },
    '/blog': { prerender: true },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    highlight: {
      theme: 'github-dark',

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