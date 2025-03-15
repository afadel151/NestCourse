<template>
    <div class="relative overflow-hidden">
        <div class="h-screen relative flex overflow-hidden w-full flex-col items-center justify-center bg-background">
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
        <div class="w-screen  px-60 mt-20">
            <p class="text-center text-3xl md:text-5xl font-bold">Our Services</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <ServiceCard title="Web Development" description="Hire talented web developers for your projects." />
                <ServiceCard title="Graphic Design" description="Get stunning designs from professional designers." />
                <ServiceCard title="Content Writing" description="Find skilled writers for your content needs." />
                <ServiceCard title="Digital Marketing"
                    description="Boost your business with expert marketing services." />
                <ServiceCard title="Mobile App Development" description="Develop high-quality mobile applications." />
                <ServiceCard title="SEO Services" description="Improve your website's search engine ranking." />
            </div>
        </div>
        <div class="w-screen h-fit py-10 space-x-5 px-52 mt-20 flex items-center justify-center">
            <div
                class="relative flex h-[500px] w-1/2 flex-col items-center  z-10 justify-center overflow-hidden rounded-lg  bg-background ">
                <Icon name="fluent-emoji-flat:globe-showing-europe-africa" size="70" />
                <Orbit class="size-[30px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="20" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="logos:google-developers" size="24" />
                </Orbit>
                <Orbit class="size-[30px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="25" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="logos:adobe-after-effects" size="24" />
                </Orbit>
                <Orbit class="size-[30px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="15" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="logos:meta-icon" size="24" />
                </Orbit>
                <Orbit class="size-[30px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="10" :radius="80" path :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="skill-icons:photoshop" size="24" />
                </Orbit>
                <Orbit class="size-[40px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="35" :radius="120" path>
                    <Icon name="devicon:figma" size="24" />
                </Orbit>
                <Orbit class="size-[40px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="10" :radius="120" path>
                    <Icon name="logos:shopify" size="24" />
                </Orbit>
                <Orbit class="size-[40px] items-center justify-center border-none bg-transparent" :duration="20"
                    :delay="5" :radius="120" path>
                    <Icon name="logos:google-gmail" size="24" />
                </Orbit>
                <Orbit class="size-[50px] items-center justify-center border-none bg-transparent" :radius="190"
                    :duration="20" :delay="25" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="logos:google-drive" size="50" />
                </Orbit>
                <Orbit class="size-[50px] items-center justify-center border-none bg-transparent" :radius="190"
                    :duration="20" :delay="200" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="mdi:github" size="50" />
                </Orbit>
                <Orbit class="size-[50px] items-center justify-center border-none bg-transparent" :radius="190"
                    :duration="20" :delay="150" :direction="ORBIT_DIRECTION.CounterClockwise">
                    <Icon name="logos:google-adsense" size="50" />
                </Orbit>
            </div>
            <div class="w-1/2 h-[450px] flex flex-col items-start justify-start">
                <p class="text-4xl font-bold">Meet worldwide experts</p>
                <p class="mt-4 text-lg">Connect with top professionals from around the globe. Our platform brings
                    together experts in various fields, ensuring you have access to the best talent for your projects.
                    Whether you need developers, designers, writers, or marketers, you'll find the right person for the
                    job.</p>
                <p class="mt-4 text-lg">Join our community and start collaborating with skilled freelancers who can help
                    you achieve your business goals. Experience the benefits of working with a diverse and talented
                    team, no matter where you are in the world.</p>
                <div class="flex-grow flex items-start justify-start w-full">
                    <Button class="self-end justify-self-end"> 
                        See more
                    </Button>
                </div>
            </div>
        </div>
        <footer class="w-full backdrop-blur-sm bg-white/70 z-10 text-gray-900 border-t py-6 mt-20">
            <div class="container mx-auto text-center">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <p>Follow us on
                    <a href="#" class="text-blue-400">Twitter</a>,
                    <a href="#" class="text-blue-600">Facebook</a>, and
                    <a href="#" class="text-pink-400">Instagram</a>.
                </p>
            </div>
        </footer>
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
import ServiceCard from "~/components/me/ServiceCard.vue";
import { ORBIT_DIRECTION } from "~/components/ui/orbit";
import Orbit from "~/components/ui/orbit/Orbit.vue";
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