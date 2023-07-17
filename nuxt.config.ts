// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  modules: ["nuxt-quasar-ui", "@vueuse/nuxt", "@unocss/nuxt", "@nuxt/content"],
  css: [
    "~/assets/css/tailwind.css",
    "quasar/animations",
    "quasar/icons",
    "quasar/css",
  ],
  build: {
    transpile: ['quasar']
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
  quasar: {
    plugins: ["Notify"],
    extras: {
      fontIcons: ["material-icons"],
    },
  },
  app: {
    // head
    head: {
      title: "Our website",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "web for our",
          name: "My website",
          content: "For us",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
