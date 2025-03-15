<template>
    <div
        class="relative overflow-hidden">
        <div class="h-screen relative flex overflow-hidden  w-full flex-col items-center justify-center   bg-background ">
            <LandingHeader @login="login" />
            <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }" :while-in-view="{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            }" :transition="{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
        }" class="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
                <div class="text-center text-3xl w-[80%] font-bold md:text-6xl dark:text-white">
                    Grow your workforce by leveraging freelancers.
                </div>
                <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
                    The premium freelance solution for businesses
                </div>
                <div class="flex space-x-4">
                    <Button @click="login">
                        Get started
                    </Button>

                </div>
            </Motion>
        </div>
        <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
            :staticity="10" refresh />

        <div class="w-screen px-40 mt-20">
            <p class="text-center text-5xl font-bold">Our Services</p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
})
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { Motion } from "motion-v";
import LandingHeader from "~/components/me/LandingHeader.vue";
const isDark = computed(() => useColorMode().value == "dark");
function login() {
    const router = useRouter();
    const authStore = useAuthStore();
    if (!authStore.user) {
        authStore.checkUserAuthentication();
    }
    if (authStore.authenticated) {
        router.push('/user/profile')
    } else {
        router.push('/login')
    }
}
</script>