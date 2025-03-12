<script setup lang="ts">
import { Motion } from 'motion-v'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2Icon } from 'lucide-vue-next'
import { useNuxtApp } from '#app'
import { JobDto } from '~/dtos/job.dto'
import type { ApplicationDto } from '~/dtos/application.dto'

const { $api } = useNuxtApp();
const isLoading = ref(true);
const jobs = ref<JobDto[]>([]);
const applications = ref<ApplicationDto[]>([]);

async function fetchUserJobs() {
    try {
        const response = await $api<JobDto[]>('/jobs/user', {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
        jobs.value = response || [];
    } catch (error) {
        console.error('Error fetching jobs:', error);
    } finally {
        isLoading.value = false;
    }
}

async function fetchUserApplications() {
    try {
        const response = await $api<ApplicationDto[]>('/applications/user', { method: 'GET' });
        applications.value = response || [];
    } catch (error) {
        console.error('Error fetching applications:', error);
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    fetchUserJobs();
    fetchUserApplications();
});
</script>

<template>
    <div class="flex min-h-screen w-full p-8">
        <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
            :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }" class="w-full max-w-4xl mx-auto space-y-8">

            <h1 class="text-3xl font-bold">Your Jobs</h1>
            <Card v-if="isLoading" class="flex justify-center items-center p-4">
                <Loader2Icon class="h-6 w-6 animate-spin" />
            </Card>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card v-for="job in jobs" :key="job.id">
                    <CardHeader>
                        <CardTitle>{{ job.title }}</CardTitle>
                        <CardDescription>{{ job.description }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge variant="secondary">{{ job.status }}</Badge>
                    </CardContent>
                </Card>
            </div>

            <h1 class="text-3xl font-bold">Your Applications</h1>
            <Card v-if="isLoading" class="flex justify-center items-center p-4">
                <Loader2Icon class="h-6 w-6 animate-spin" />
            </Card>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card v-for="app in applications" :key="app.id">
                    <CardHeader>
                        <CardTitle>{{ app.job?.title }}</CardTitle>
                        <CardDescription>{{ app.job?.description }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge :variant="app.status === 'ACCEPTED' ? 'default' : 'secondary'">{{ app.status }}</Badge>
                        <p class="mt-2 text-sm">Applied on: {{ new Date(app.createdAt).toLocaleDateString() }}</p>
                    </CardContent>
                </Card>
            </div>
        </Motion>
    </div>
</template>
