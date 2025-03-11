import { defineStore } from "pinia";
import { AuthDto } from "~/dtos/auth.dto";

interface LoginResponse {
    access_token: string;
}
export const useAuthStore = defineStore("auth", {
    state: () => ({
        authenticated:  false,
        loading: false,
    }),
    actions: {
        async authenticateUser({ email, password }: AuthDto) {
            const {data}: any = await useFetch<LoginResponse>("http://localhost:3333/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    email,
                    password,
                }
            }).catch((err) => {
                console.log(err);
            });
            const access_token = data.value.access_token;
            
            if (!access_token) {
                throw createError({
                    statusCode: 404,
                    statusMessage: "Unauthenticated",
                });
            }
            if (access_token) {
                const token = useCookie("jwt_token"); 
                token.value = access_token; 
                if (import.meta.client) {
                    localStorage.setItem('jwt_token', JSON.stringify(access_token));
                }
                this.authenticated = true;
            }
        },
        async checkUserAuthentication() {
            const token = useCookie("jwt_token");
            if (token.value) {
                this.authenticated = true;
            }
        },
        async signUpUser({ email, password }: AuthDto) {
            const {data}: any = await useFetch<LoginResponse>("http://localhost:3333/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    email,
                    password,
                }
            }).catch((err) => {
                console.log(err);
            });
            const access_token = data.value.access_token;
            
            if (!access_token) {
                throw createError({
                    statusCode: 404,
                    statusMessage: "Unauthenticated",
                });
            }
            if (access_token) {
                const token = useCookie("jwt_token"); 
                token.value = access_token; 
                if (import.meta.client) {
                    localStorage.setItem('jwt_token', JSON.stringify(access_token));
                }
                this.authenticated = true;
            }
        },
        logUserOut() {
            const token = useCookie("jwt_token");
            if (import.meta.client) {
                localStorage.removeItem('jwt_token');
            }
            this.authenticated = false;
            token.value = null;
        },
    },
});