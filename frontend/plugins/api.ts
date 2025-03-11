export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: 'http://127.0.0.1:3333',
    credentials: 'include',
    
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    }
  })
  return {
    provide: {
      api
    }
  }
})
