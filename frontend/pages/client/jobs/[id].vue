<script setup lang="ts">
definePageMeta({
  middleware: ["client"]
})
import { ref, onMounted } from 'vue';
import { useRoute, useNuxtApp } from '#app';

import { Loader2Icon, Trash } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { JobDto, JobStatus } from '~/dtos/job.dto';
import JobEdit from '~/components/me/JobEdit.vue';
import { ApplicationStatus } from '~/dtos/application.dto';

const route = useRoute();
const job = ref<JobDto | null>(null);
const isLoading = ref(true);

async function getJob() {
    const { $api } = useNuxtApp();
    try {
        const response = await $api<JobDto>('jobs/get_my_job', {
            method: 'GET',
            params: {
                job_id: route.params.id
            }
        });
        job.value = response;

    } catch (error) {
        console.error('Error fetching job:', error);
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    getJob();
});
function alterJob(newJob: JobDto) {
    job.value = newJob;
}
</script>

<template>
    <div class="p-8  flex justify-center">
        <div class="w-full max-w-3xl border rounded-xl p-6">
            <template v-if="isLoading">
                <div class="flex justify-center items-center">
                    <Loader2Icon class="h-6 w-6 animate-spin text-gray-500" />
                </div>
            </template>

            <template v-else-if="job">
                <h4 class="text-slate-500">title</h4>
                <div class="w-full  flex justify-between">
                    
                    <h1 class="text-3xl font-bold mb-4">{{ job?.title }}</h1>
                    <div class="flex space-x-2 ">

                        <JobEdit
                            :job="job" :job_edited="alterJob(job)" />
                        <Button size="sm" variant="destructive">
                            <Trash />
                        </Button>
                    </div>
                </div>
                <h4 class="text-slate-500 mt-2">description</h4>
                <p class="text-gray-600 mt-1">{{ job?.description }}</p>

                <div class="mt-6 space-x-2">
                    <Badge :variant="job?.status === JobStatus.OPEN ? 'success'  :  job?.status === JobStatus.IN_PROGRESS ? 'info'  : 'default'">{{ job?.status.toLocaleLowerCase().replace('_',' ') }}</Badge>
                    <Badge variant="secondary">Budget: ${{ job?.budget }}</Badge>
                </div>

                <div class="mt-6">
                    <h2 class="text-xl  font-semibold">Applications</h2>
                    <div v-if="job?.applications && job.applications.length > 0" class="mt-4  space-y-4">
                        <div v-for="app in job?.applications" :key="app.freelancer?.email"
                            class="p-4 border bg-slate-50 rounded-lg">
                            <p class="font-semibold">{{ app.freelancer?.firstName }} {{ app.freelancer?.lastName }}</p>
                            <p class="text-sm text-gray-600">{{ app.freelancer?.email }}</p>
                            <p class="mt-2 mb-2">{{ app.coverLetter }}</p>
                            <Badge
                                :variant="app.status === ApplicationStatus.PENDING ? 'destructive' : app.status === ApplicationStatus.ACCEPTED ? 'success' : 'default'">
                                {{ app.status }}
                            </Badge>
                        </div>

                    </div>
                    <p v-else class="text-gray-500">No applications yet.</p>
                </div>

                <div class="mt-6">
                    <h2 class="text-xl font-semibold">Hired Freelancer</h2>
                    <div v-if="job.hiredFreelancer" class="p-4 border rounded-lg">
                        <p class="font-semibold">{{ job?.hiredFreelancer.firstName }} {{ job?.hiredFreelancer.lastName
                            }}</p>
                        <p class="text-sm text-gray-600">{{ job?.hiredFreelancer.email }}</p>
                    </div>
                    <p v-else class="text-gray-500">No freelancer hired yet.</p>
                </div>

                <div class="mt-6">
                    <h2 class="text-xl font-semibold">Reviews</h2>
                    <div v-if="job?.reviews != null && job?.reviews.length > 0" class="mt-2 space-y-4">
                        <div v-for="review in job?.reviews" :key="review.client?.email" class="p-4 border rounded-lg">
                            <p class="font-semibold">{{ review.client?.firstName }} {{ review.client?.lastName }}</p>
                            <p class="text-sm text-gray-600">{{ review.comment }}</p>
                            <p class="mt-1 text-yellow-500">⭐ {{ review.rating }}/5</p>
                        </div>
                    </div>
                    <p v-else class="text-gray-500">No reviews yet.</p>
                </div>
            </template>

            <template v-else>
                <p class="text-red-500 text-center">Job not found.</p>
            </template>
        </div>
    </div>
</template>
