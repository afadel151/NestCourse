export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("jwt_token"); // Retrieve token from cookies

  const api = $fetch.create({
    baseURL: "http://localhost:3333",
    credentials: "include",

    async onRequest({ options }) {
      if (!options.headers) {
        options.headers = new Headers();
      }
      if (!(options.headers instanceof Headers)) {
        options.headers = new Headers(options.headers);
      }
      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        token.value = null; // Clear token if unauthorized
        localStorage.removeItem("jwt_token");
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
