// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "Pradipta Chatterjee",
      meta: [
        {
          name: "Pradipta Chatterjee",
          content: "Portfolio",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.css"],
  pages: true,

  devtools: {
    enabled: true,
  },
});
