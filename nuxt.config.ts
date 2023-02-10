export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible'],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'nuxt-appwrite.etiennemoureton.fr'
      },
    }
  }
})
