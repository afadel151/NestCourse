import { UserRole } from "~/dtos/user.dto";


export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    if(!authStore.authenticated){
        await authStore.checkUserAuthentication();
    }
    if (!authStore.authenticated && to.path !== "/login") {
        return navigateTo("/login");
    }
    if (!(authStore.user?.role == 'CLIENT')) {
        return navigateTo("/unauthorized/clients")
    }
});
