// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  routeRules: {
    '/': { prerender: true }
  },


  googleFonts: {
    families: {
      // Import specific Google Fonts
      Inter: [400, 600, 700], // Regular, Semi-bold, Bold
    },
    display: 'swap', // Improves page performance by rendering text immediately
  },

  css: [
    "~/assets/css/style.css",
    "~/assets/css/home.css"
  ],
  // Defaults options
  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'My Nuxt.js app' }
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
      //   },]
    },
  },
})