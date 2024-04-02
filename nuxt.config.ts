// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3012,
  },
  modules: [
    '@element-plus/nuxt'
  ],
  css: [
    '@/assets/css/variables.module.css'
  ],
  elementPlus: { /** Options */ }
})
