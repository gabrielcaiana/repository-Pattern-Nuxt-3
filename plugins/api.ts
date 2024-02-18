export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiUrl
      // add more options here
    })

    return { 
      provide: { api }
    }
  }
})