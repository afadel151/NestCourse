<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <!-- Header with Logo -->
        <header class="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div class="container mx-auto flex h-16 items-center px-4 md:px-6">
                <a href="/" class="flex items-center gap-2">
                    <SearchIcon class="h-6 w-6 text-primary" />
                    <span class="text-xl font-bold text-primary">finderr</span>
                </a>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex items-center justify-center p-4 md:p-8">
            <div class="w-full max-w-md">
                <div class="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <!-- Form Header -->
                    <div class="p-6 border-b border-gray-200">
                        <h1 class="text-2xl font-bold text-gray-900">Welcome back</h1>
                        <p class="mt-2 text-sm text-gray-500">
                            Sign in to your account to continue
                        </p>
                    </div>

                    <!-- Login Form -->
                    <form @submit.prevent="handleLogin" class="p-6 space-y-4">
                        <!-- Email Field -->
                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
                            <div class="relative">
                                <MailIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input id="email" v-model="form.email" type="email" placeholder="name@example.com"
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    :class="{ 'border-red-500': errors.email }" required />
                            </div>
                            <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
                        </div>

                        <!-- Password Field -->
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-medium text-gray-700">Password</label>
                                <a href="#" class="text-xs font-medium text-primary hover:underline">Forgot
                                    password?</a>
                            </div>
                            <div class="relative">
                                <LockIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                    placeholder="••••••••"
                                    class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    :class="{ 'border-red-500': errors.password }" required />
                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <EyeIcon v-if="showPassword" class="h-5 w-5" />
                                    <EyeOffIcon v-else class="h-5 w-5" />
                                </button>
                            </div>
                            <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
                        </div>

                        <!-- Remember Me -->
                        <div class="flex items-center">
                            <input id="remember" v-model="rememberMe" type="checkbox"
                                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                            <label for="remember" class="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>

                        <!-- Login Button -->
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            :disabled="isLoading">
                            <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5 mr-2" />
                            {{ isLoading ? 'Signing in...' : 'Sign in' }}
                        </button>

                        <!-- Error Message -->
                        <div v-if="errorMessage" class="p-3 bg-red-50 border border-red-200 rounded-md">
                            <p class="text-sm text-red-500">{{ errorMessage }}</p>
                        </div>
                    </form>

                    <!-- Divider -->
                    <div class="px-6 py-3 flex items-center">
                        <div class="flex-grow border-t border-gray-200"></div>
                        <span class="flex-shrink mx-4 text-sm text-gray-400">or continue with</span>
                        <div class="flex-grow border-t border-gray-200"></div>
                    </div>


                    <!-- Sign Up Link -->
                    <div class="p-6 bg-gray-50 border-t border-gray-200">
                        <p class="text-sm text-center text-gray-600">
                            Don't have an account?
                            <a href="/signup" class="font-medium text-primary hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
    SearchIcon,
    MailIcon,
    LockIcon,
    EyeIcon,
    EyeOffIcon,
    LoaderIcon
} from 'lucide-vue-next'
import { LoginDto } from '~/dtos/login.dto'

definePageMeta({
    layout: false
})
const form = ref<LoginDto>({
    email: '',
    password: '',
})
onBeforeMount(()=>{
    if (!authStore.user) {
        authStore.checkUserAuthentication();
    }
    if (authStore.authenticated) {
        if (authStore.user?.role === 'CLIENT') {
            router.push('/client/profile')
        } else if (authStore.user?.role === 'FREELANCER') {
            router.push('/user/dashboard')
        }
    }
})

const rememberMe = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const errors = reactive({
    email: '',
    password: ''
})
const validateForm = () => {
    let isValid = true

    errors.email = ''
    errors.password = ''

    if (!form.value.email) {
        errors.email = 'Email is required'
        isValid = false
    } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }

    // Validate password
    if (!form.value.password) {
        errors.password = 'Password is required'
        isValid = false
    } else if (form.value.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'
        isValid = false
    }

    return isValid
}
const authStore = useAuthStore();
const router = useRouter();
const handleLogin = async () => {
    if (!validateForm()) return

    isLoading.value = true
    errorMessage.value = ''

    try {
        await authStore.authenticateUser(form.value);
        if (authStore.authenticated) {
            router.push('/user/profile');
        } else {
            console.log('error');
        }
    } catch (error) {
        // Handle login error
        errorMessage.value = 'Invalid email or password. Please try again.'
        console.error('Login error:', error)
    } finally {
        isLoading.value = false
    }
}
</script>
<style scoped>
/* Animation for form elements */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

form>* {
    animation: fadeIn 0.3s ease-out forwards;
}

form>*:nth-child(1) {
    animation-delay: 0.1s;
}

form>*:nth-child(2) {
    animation-delay: 0.2s;
}

form>*:nth-child(3) {
    animation-delay: 0.3s;
}

form>*:nth-child(4) {
    animation-delay: 0.4s;
}
</style> -->

<!-- <script setup lang="ts">
definePageMeta({
    layout:false
})
// import { useForm } from 'vee-validate'

// import { Motion } from 'motion-v';
// import { AuthDto } from '~/dtos/auth.dto';
// import { useAuthStore } from "~/stores/auth";
// const { isFieldDirty, handleSubmit } = useForm({
//   validationSchema: new AuthDto(),
// })
// const isLogin = ref(true);
// const form = ref<AuthDto>({ email: '', password: '', role : 'CLIENT' });
// const router = useRouter();
// const authStore = useAuthStore();

// onBeforeMount(()=>{
//     if (!authStore.user) {
//         authStore.checkUserAuthentication();
//     }
//     if (authStore.authenticated) {
//         router.push('/user/profile')
//     }
// })
// const onSubmit = handleSubmit(async (values) => {
//     await authStore.authenticateUser(form.value);
//     if (authStore.authenticated) {
//         router.push('/user/profile');
//     } else {
//         console.log('error');
//     }
// });
</script> -->