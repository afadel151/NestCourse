<script setup lang="ts">
const { $api } = useNuxtApp();
onMounted(() => {
    fetchUserJobs();
    fetchRecentApplications();
});
import { ref, onMounted } from 'vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PlusCircle, Users, Briefcase, Star, Loader2Icon } from 'lucide-vue-next';
import { useNuxtApp } from '#app';
import { JobDto } from '~/dtos/job.dto';

import { Button } from '@/components/ui/button';
import { ApplicationDto, ApplicationStatus } from '~/dtos/application.dto';

const isLoading = ref(true);
const jobs = ref<JobDto[]>([]);
const applications = ref<ApplicationDto[]>([]);
import { JobStatus } from '~/dtos/job.dto'

async function fetchUserJobs() {
    try {
        const response = await $api<JobDto[]>('/jobs/user', { method: 'GET' });
        jobs.value = response || [];
    } catch (error) {
        console.error('Error fetching jobs:', error);
    } finally {
        isLoading.value = false;
    }
}

async function fetchRecentApplications() {
    try {
        const response = await $api<ApplicationDto[]>('/applications/recent', { method: 'GET' });
        applications.value = response || [];
    } catch (error) {
        console.error('Error fetching applications:', error);
    }
}
</script>

<template>
    <div class="flex min-h-screen w-full p-8">
        <div class="w-full max-w-5xl mx-auto space-y-8">
            <!-- Header & Quick Actions -->
            <div class="flex justify-between items-center p-4">
                <p class="text-3xl font-bold">Dashboard</p>
                <Button class="flex items-center gap-2">
                    <PlusCircle class="w-5 h-5" /> Post a New Job
                </Button>
            </div>

            <!-- Overview Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card class="p-6 flex items-center gap-4">
                    <Briefcase class="w-8 h-8 text-primary" />
                    <div>
                        <p class="text-lg font-semibold">{{ jobs.length }}</p>
                        <p class="text-muted-foreground">Total Job Offers</p>
                    </div>
                </Card>
                <Card class="p-6 flex items-center gap-4">
                    <Users class="w-8 h-8 text-success" />
                    <div>
                        <p class="text-lg font-semibold">{{ applications.length }}</p>
                        <p class="text-muted-foreground">Recent Applications</p>
                    </div>
                </Card>
                <Card class="p-6 flex items-center gap-4">
                    <Star class="w-8 h-8 text-warning" />
                    <div>
                        <p class="text-lg font-semibold">4.5</p>
                        <p class="text-muted-foreground">Average Reviews</p>
                    </div>
                </Card>
            </div>

            <!-- Job Offers -->
            <div>
                <h2 class="text-xl font-semibold mb-4">Your Job Offers</h2>
                <div v-if="isLoading" class="flex justify-center items-center p-4">
                    <Loader2Icon class="h-6 w-6 animate-spin" />
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card v-for="job in jobs.slice(-4)" :key="job.id">
                        <CardHeader>
                            <CardTitle>{{ job.title }}</CardTitle>
                            <CardDescription>{{ job.description }}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p class="text-muted-foreground">{{ job.applications?.length }} applications</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <!-- Recent Applications -->
            <div>
                <h2 class="text-xl font-semibold mb-4">Recent Applications</h2>
                <div v-if="applications.length === 0" class="text-muted-foreground">
                    No recent applications yet.
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card v-for="app in applications" :key="app.id">
                        <CardHeader>
                            <CardTitle>Freelancer {{ app.freelancer?.firstName }} {{ app.freelancer?.lastName }}
                            </CardTitle>
                            <CardDescription>Applied for {{ app.job?.title }}</CardDescription>
                            
                                <Badge class="w-fit"
                                    :variant="app.status === ApplicationStatus.ACCEPTED ? 'success' : app.status === ApplicationStatus.PENDING ? 'info' : 'default'">
                                    {{ app.job?.status.toLocaleLowerCase().replace('_', ' ') }}</Badge>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>
