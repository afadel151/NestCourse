<script setup>
import { useRouter } from 'vue-router';
definePageMeta({
  layout: false,
}) 
const router = useRouter();

function goBack() {
    router.back();
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-4">
        <div class="max-w-lg text-center bg-white shadow-lg rounded-2xl p-8">
            <h1 class="text-4xl font-bold text-red-600">Access Denied</h1>
            <p class="mt-4 text-lg">You are not authorized to view this page.</p>
            <p class="mt-2 text-gray-600">Only Admin users can access this content.</p>
            
            <!-- <img src="/imgs/unauthorized.svg" alt="Unauthorized Access" class="w-64 mx-auto mt-6"> -->

            <div class="mt-6 space-x-4">
                <Button @click="goBack" >
                    Go Back
                </Button>
                <a href="/" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Go to Home
                </a>
            </div>
        </div>
    </div>
</template>
