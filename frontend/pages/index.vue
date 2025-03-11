<template>
    <div
        class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }" :in-view="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
        }" :transition="{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
    }" class="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
            <div class="text-center text-3xl font-bold md:text-7xl dark:text-white">
                Welcome back !
            </div>
            <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
                And this, is chemical burn.
            </div>
            <div class="flex space-x-4">
                <NuxtLink to="/login">
                    <Button>
                        Log in
                    </Button>
                </NuxtLink>
                <NuxtLink to="/signup">
                    <Button variant="secondary">
                        Sign up
                    </Button>
                </NuxtLink>
            </div>
        </Motion>
        <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
            :staticity="10" refresh />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
}) 
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { Motion } from "motion-v";
const isDark = computed(() => useColorMode().value == "dark");
</script>