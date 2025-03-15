<template>
    <div
        class="w-screen fixed pl-20 px-10 flex justify-between items-center top-0 h-20 backdrop-blur-sm bg-white/70 z-10 border-b">
        <h1 class="text-4xl text-gray-700  font-bold">
            finder.
        </h1>
        <div class="flex items-center">
            <Popover>
                <PopoverTrigger>
                    <Button variant="ghost">
                        Services
                        <ArrowDown />
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="space-y-3 w-96 ">
                    <!-- binoculars -->
                    <div
                        class="border  border-slate-200 shadow-sm space-x-4 rounded-lg flex items-center hover:bg-gray-100 hover:cursor-pointer p-3">
                        <img src="/imgs/binoculars.png" class="w-12" alt="">
                        <div>
                            <h1 class="text-xl font-semibold">I'm looking to hire</h1>
                            <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                                solution</p>
                        </div>
                    </div>
                    <div
                        class="border  border-slate-200 shadow-sm space-x-4 rounded-lg flex items-center hover:bg-gray-100 hover:cursor-pointer p-3">
                        <img src="/imgs/settings.png" class="w-12" alt="">
                        <div>
                            <h1 class="text-xl font-semibold">I have service to offer</h1>
                            <p class="text-sm font-normal text-gray-500">I’d like to work on business projects as a Pro
                                freelancer or agency.</p>
                        </div>
                    </div>


                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger>
                    <Button variant="ghost">
                        Explore
                        <ArrowDown />
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-96 p-1">
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Go</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Answers</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Comunity</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Guides</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Podcast</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Learn</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                    <div class="p-2   rounded-md  hover:bg-gray-100 hover:cursor-pointer">
                        <h1 class=" font-bold">Blog</h1>
                        <p class="text-sm font-normal text-gray-500">I needs vetted freelance talents and business
                            solution</p>
                    </div>
                </PopoverContent>
            </Popover>
            <Button variant="ghost">
                Become a Seller
            </Button>
            <Button variant="ghost">
                Sign in
            </Button>
            <Button variant="secondary" @click="login">
                Log in
            </Button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next';
const emit = defineEmits(['login'])
function login() {
    emit('login')
}



</script>
