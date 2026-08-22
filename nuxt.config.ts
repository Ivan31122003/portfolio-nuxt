// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@vueuse/motion/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  ssr: true,
  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/typography.scss', '~/assets/css/main.scss', '~/assets/css/theme.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/breakpoints.scss" as *;',
        },
      },
    },
  },
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
});
