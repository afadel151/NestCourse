<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <header class="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div class="container mx-auto flex h-16 items-center px-4 md:px-6">
                <a href="/" class="flex items-center gap-2">
                    <SearchIcon class="h-6 w-6 text-primary" />
                    <span class="text-xl font-bold text-primary">finderr</span>
                </a>
            </div>
        </header>
        <main class="flex-1 flex items-center justify-center p-4 md:p-8">
            <div class="w-full max-w-md">
                <div class="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <div class="p-6 border-b border-gray-200">
                        <h1 class="text-2xl font-bold text-gray-900">Create your account</h1>
                    </div>
                    <form @submit.prevent="onSubmit" class="p-6 space-y-4">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">I want to:</label>
                            <div class="grid grid-cols-2 gap-3">
                                <button type="button" @click="form.role = 'CLIENT'"
                                    class="flex flex-col items-center justify-center p-3 border rounded-md transition-colors"
                                    :class="form.role === 'CLIENT' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 hover:border-gray-300'">
                                    <BriefcaseIcon class="h-6 w-6 mb-1" />
                                    <span class="text-sm font-medium">Hire talent</span>
                                </button>
                                <button type="button" @click="form.role = 'FREELANCER'"
                                    class="flex flex-col items-center justify-center p-3 border rounded-md transition-colors"
                                    :class="form.role === 'FREELANCER' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 hover:border-gray-300'">
                                    <UserIcon class="h-6 w-6 mb-1" />
                                    <span class="text-sm font-medium">Find work</span>
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="space-y-2">
                                <label for="firstName" class="text-sm font-medium text-gray-700">First name</label>
                                <input id="firstName" v-model="form.firstName" type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required />
                            </div>
                            <div class="space-y-2">
                                <label for="lastName" class="text-sm font-medium text-gray-700">Last name</label>
                                <input id="lastName" v-model="form.lastName" type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
                            <div class="relative">
                                <MailIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input id="email" v-model="form.email" type="email" placeholder="name@example.com"
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label for="password" class="text-sm font-medium text-gray-700">Password</label>
                            <div class="relative">
                                <LockIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input id="password" v-model="form.password" placeholder="••••••••"
                                    class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required />

                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" v-model="agreeToTerms"
                                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-medium text-gray-700">
                                    I agree to the
                                    <a href="#" class="text-primary hover:underline">Terms of Service</a>
                                    and
                                    <a href="#" class="text-primary hover:underline">Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                        <div v-if="validationErrors.length" class="p-3 bg-red-50 border border-red-200 rounded-md">
                            <ul class="text-sm text-red-500 list-disc pl-4 space-y-1">
                                <li v-for="(error, i) in validationErrors" :key="i">{{ error }}</li>
                            </ul>
                        </div>
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            :disabled="isLoading">
                            <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5 mr-2" />
                            {{ isLoading ? 'Creating account...' : 'Create account' }}
                        </button>
                    </form>
                    <div class="p-6 bg-gray-50 border-t border-gray-200">
                        <p class="text-sm text-center text-gray-600">
                            Already have an account?
                            <a href="/login" class="font-medium text-primary hover:underline">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
definePageMeta({
    layout: false
})
import {
    SearchIcon,
    MailIcon,
    LockIcon,
    LoaderIcon,
    BriefcaseIcon,
    UserIcon,
} from 'lucide-vue-next'
const router = useRouter();
const agreeToTerms = ref(false)
const validationErrors = ref<string[]>([])

import { useAuthStore } from '@/stores/auth'
import { AuthDto } from '~/dtos/auth.dto'
const form = reactive<AuthDto>({
    role: 'CLIENT',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
})
const isLoading = ref(false)
const errorMessage = ref('')
const authStore = useAuthStore()
const onSubmit = async () => {
    validationErrors.value = []
    if (!form.firstName.trim()) validationErrors.value.push("First name is required.")
    if (!form.lastName.trim()) validationErrors.value.push("Last name is required.")
    const passwordValid = /^(?=.*\d).{8,}$/.test(form.password)
    if (!passwordValid)
        validationErrors.value.push("Password must be at least 8 characters long and contain at least one number.")
    if (!agreeToTerms.value)
        validationErrors.value.push("You must agree to the Terms and Privacy Policy.")
    if (validationErrors.value.length > 0) return
    isLoading.value = true
    errorMessage.value = ''
    try {
        await authStore.signUpUser(form)
        if (authStore.authenticated) {
            router.push('/user/profile');
        } else {
            console.log('error');
        }
    } catch (error: any) {
        errorMessage.value = error?.message || 'Something went wrong.'
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
    animation-delay: 0.15s;
}

form>*:nth-child(3) {
    animation-delay: 0.2s;
}

form>*:nth-child(4) {
    animation-delay: 0.25s;
}

form>*:nth-child(5) {
    animation-delay: 0.3s;
}

form>*:nth-child(6) {
    animation-delay: 0.35s;
}

form>*:nth-child(7) {
    animation-delay: 0.4s;
}
</style>
