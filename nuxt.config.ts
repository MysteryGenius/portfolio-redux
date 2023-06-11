// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
  ],
  css: [
    '@/assets/css/index.css',
    "aos/dist/aos.css",
  ],
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],
  ssr: false,
})
