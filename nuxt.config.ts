// https://v3.nuxtjs.org/api/configuration/nuxt.config
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000'
    }
  },
  devServer: {
    port: 5001
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  }
});
