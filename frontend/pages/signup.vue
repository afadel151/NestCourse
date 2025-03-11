<template>
    <div class="flex h-screen w-full">
        <!-- Left Side - Astronomy Image -->
        <div class="hidden   md:flex  p-24 w-1/2 h-full bg-cover bg-center">
            <div class="relative w-full h-fit p-1 rounded-[10px]">
                <img src="/imgs/astro.jpg"  class="rounded-[5px]" alt="">
                <BorderBeam :size="250" :duration="12" :delay="9" :border-width="4" />
            </div>
        </div>

        <!-- Right Side - Form -->
        <div class="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
                :in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }" class="w-full max-w-md space-y-20">
                
                <div class="text-center text-balance text-4xl font-bold dark:text-white">
                    Create an
                    <TextHighlight class="bg-gradient-to-r from-indigo-300 to-purple-300" >account</TextHighlight>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-8">
                    <FormField v-slot="{ componentField }" name="email">

                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input v-model="form.email" type="email" placeholder="Enter your email" required />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">

                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input v-model="form.password" type="password" placeholder="Enter your password"
                                    required />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">

                    <FormItem>
                        <FormLabel>Password confirmation</FormLabel>
                        <FormControl>
                            <Input v-model="passwdConf" type="password" placeholder="Confirm your password"
                                required />
                        </FormControl>
                    </FormItem>
                    </FormField>
                    <Button class="w-full" type="submit">Sign up</Button>
                </form>

                <div class="text-sm text-center dark:text-neutral-300">
                    Already have an account?
                    <NuxtLink :to="'/login'" class="text-primary font-medium">
                        Log in
                    </NuxtLink>
                </div>
            </Motion>
        </div>
    </div>
</template>

<script setup lang="ts">

const { $api } = useNuxtApp()
import { useRoute } from 'vue-router';
import { Motion } from 'motion-v';
import { AuthDto } from '~/dtos/auth.dto';
const passwdConf = ref('');
const route = useRoute();
const isLogin = ref(true);
const form = ref<AuthDto>({ email: '', password: '' });
interface LoginResponse {
    access_token: string;
}

const handleSubmit = async () => {
    if (isLogin.value) {
        try {
            let response = await $api<LoginResponse>('auth/login', {
                method: 'POST',
                body: JSON.stringify(form.value)
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('Signing up', form.value);
    }
};
</script>