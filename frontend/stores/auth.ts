import { defineStore } from "pinia";
import { AuthDto } from "~/dtos/auth.dto";
import { UserRole } from "~/dtos/user.dto";

interface LoginResponse {
    access_token: string;
    user : sharedUser
}
interface sharedUser{
    firstName?: string;
    lastName?: string;
    email: string,
    role: UserRole
}
interface sharedState {
    authenticated: boolean,
    loading: boolean,
    user: sharedUser | null
}
export const useAuthStore = defineStore("auth", {
    state: () => (<sharedState>{
        authenticated: false,
        loading: false,
        user: null
    }),
    actions: {
        async authenticateUser({ email, password, role }: AuthDto) {
            const {data}: any = await useFetch<LoginResponse>("http://localhost:3333/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    email,
                    password,
                    role
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
                this.authenticated = true;
                this.user = data.value.user
            }
        },
        async getUserDetails(){
            if (!this.user) {
                const { $api } = useNuxtApp();
                const data = await $api<sharedUser>("/users/details", {
                    method: "GET",
                });
                this.user = data
            }
            return this.user
            
        },
        async checkUserAuthentication() {
            const token = useCookie("jwt_token");
            if (!this.authenticated && token.value) {
                    this.authenticated = true;
            }else if(!token)
            {
                const router = useRouter()
                router.push('/login')
            }
        },
        async signUpUser({ email, password,role }: AuthDto) {
            const {data}: any = await useFetch<LoginResponse>("http://localhost:3333/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    email,
                    password,
                    role
                }
            }).catch((err) => {
                console.log(err);
            });
            console.log(data.value);
            
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
                this.authenticated = true;
            }
        },
        logUserOut() {
            const token = useCookie("jwt_token");
            
            this.authenticated = false;
            token.value = null;
        },
        getUser(){
            if (!this.user) {
                this.getUserDetails();
            }
            return this.user
        }
    },
});