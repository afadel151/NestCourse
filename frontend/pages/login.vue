<template>
    <div class="flex h-screen w-full">
        <!-- Left Side - Astronomy Image -->
        <div class="hidden   md:flex  p-24 w-1/2 h-full bg-cover bg-center">
            <div class="relative w-full h-fit p-1 rounded-[10px]">
                <img src="/imgs/astro.jpg" class="rounded-[5px]" alt="">
                <BorderBeam :size="250" :duration="12" :delay="9" :border-width="4" />
            </div>
        </div>

        <!-- Right Side - Form -->
        <div class="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
                :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }" class="w-full max-w-md space-y-20">

                <div class="text-center text-balance text-4xl font-bold dark:text-white">
                    {{ isLogin ? 'Log in to your ' : 'Create an ' }}
                    <TextHighlight class="bg-gradient-to-r from-indigo-300 to-purple-300">account</TextHighlight>
                </div>

                <form @submit="onSubmit" class="space-y-8">
                    <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">

                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input v-model="form.email" type="email" placeholder="Enter your email" v-bind="componentField" required />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input v-model="form.password" type="password" placeholder="Enter your password"
                                    required v-bind="componentField" />
                            </FormControl>
                        </FormItem>
                    </FormField>

                    <Button class="w-full" type="submit">{{ isLogin ? 'Log in' : 'Sign up' }}</Button>
                </form>

                <div class="text-sm text-center dark:text-neutral-300">
                    Or create a new account
                    <NuxtLink href="/signup" class="text-primary font-medium">
                        Sign up
                    </NuxtLink>
                </div>
            </Motion>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:false
})
import { useForm } from 'vee-validate'

import { Motion } from 'motion-v';
import { AuthDto } from '~/dtos/auth.dto';
import { useAuthStore } from "~/stores/auth";
const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: new AuthDto(),
})
const isLogin = ref(true);
const form = ref<AuthDto>({ email: '', password: '' });
const router = useRouter();
const authStore = useAuthStore();

onBeforeMount(()=>{
    if (!authStore.user) {
        authStore.checkUserAuthentication();
    }
    if (authStore.authenticated) {
        router.push('/user/profile')
    }
})
const onSubmit = handleSubmit(async (values) => {
    await authStore.authenticateUser(form.value);
    if (authStore.authenticated) {
        router.push('/user/profile');
    } else {
        console.log('error');
    }
});
</script>