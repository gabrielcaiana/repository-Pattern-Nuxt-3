export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiUrl,
      onRequest: () => {
       // dispatch global loading
      },
      onResponse: () => {
        // stop global loading
      },
      onRequestError: () => {
       // dispatch global loading
      },
    })

    return { 
      provide: { api }
    }
  }
})