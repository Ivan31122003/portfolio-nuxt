// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  eslint: {
    config: {
      tooling: true,
      typescript: {
        strict: true,
        tsconfigPath: './tsconfig.json',
      },
    },
  },
})
