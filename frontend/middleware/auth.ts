export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie("jwt_token");

    if (!token.value) {
        return navigateTo("/login"); // Redirect if no token
    }
});
