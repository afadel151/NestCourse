<script setup lang="ts">
const { $api } = useNuxtApp();
onMounted(() => {
    fetchUserJobs();
});
import { ref, onMounted } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ChevronRight, ChevronsRight, LampDesk, Loader2Icon } from 'lucide-vue-next'
import { useNuxtApp } from '#app'
import { JobDto, JobStatus } from '~/dtos/job.dto'
import { useForm } from 'vee-validate';

const isLoading = ref(true);
const jobs = ref<JobDto[]>([]);

const form = ref<JobDto>(new JobDto());
async function AddNewJob() {
    try {
        const response = await $api<JobDto>('jobs/add',{
            method: 'POST',
            body:JSON.stringify(form.value),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

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
        isLoading.value = false // Update loading state
    }
}
const { isFieldDirty, handleSubmit } = useForm({
    validationSchema: new JobDto(),
})

</script>

<template>
    <div class="flex min-h-screen w-full p-8">

        <div class="w-full max-w-4xl mx-auto space-y-8">
            <div class="w-full   inline-flex justify-between p-4 items-center">
                <p class="text-3xl font-bold ">Your Offers</p>
                <Dialog>
                    <DialogTrigger>
                        <Button>Add a job offer</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add a new job offer </DialogTitle>
                            <DialogDescription>
                                Create a new job offer and wait for freelanders !.
                            </DialogDescription>
                        </DialogHeader>
                        <form @submit="AddNewJob" class="space-y-4 ">
                            <FormField v-slot="{ componentField }" name="email">
                                <FormItem>
                                    <FormLabel>Job title</FormLabel>
                                    <FormControl>
                                        <div class="relative w-full  items-center">
                                            <Input v-model="form.title"  placeholder="Enter job title"
                                                v-bind="componentField" class="pl-10" required
                                                :validate-on-blur="!isFieldDirty" />
                                            <span
                                                class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                                                <LampDesk class="size-6 text-muted-foreground" />
                                            </span>
                                        </div>

                                    </FormControl>
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField }" name="description" :validate-on-blur="!isFieldDirty">
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>

                                        <Textarea v-model="form.description" placeholder="Give it a description" required class="resize-none"
                                            v-bind="componentField" />
                                    </FormControl>
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField }" name="budget"  :validate-on-blur="!isFieldDirty">
                                <FormItem>
                                    <FormLabel>Budget</FormLabel>
                                    <FormControl>
                                        <Input v-model="form.budget" type="number"  placeholder="Enter a budget for your offer"
                                            required v-bind="componentField" />
                                    </FormControl>
                                </FormItem>
                            </FormField>
                            <Button class="w-full " type="submit">Add job offer</Button>
                        </form>

                    </DialogContent>
                </Dialog>
            </div>
            <Card v-if="isLoading" class="flex justify-center items-center p-4">
                <Loader2Icon class="h-6 w-6 animate-spin" />
            </Card>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card v-for="job in jobs" :key="job.id">
                    <CardHeader class="relative">
                        <NuxtLink :href="`/client/jobs/${job.id}`" class="absolute top-5 right-5">
                            <Button size="sm" variant="secondary">
                                <ChevronsRight />
                            </Button>
                        </NuxtLink>
                        <CardTitle>{{ job.title }}</CardTitle>
                        <CardDescription class="mt-2 pr-12"> {{ job.description }}</CardDescription>
                    </CardHeader>
                    <CardContent class="space-x-2">
                        <Badge  :variant="job?.status === JobStatus.OPEN ? 'success'  :  job?.status === JobStatus.IN_PROGRESS ? 'info'  : 'default'">{{ job?.status.toLocaleLowerCase().replace('_',' ') }}</Badge>
                        <Badge variant="secondary">{{ job.applications?.length }} applications</Badge>
                        <Badge variant="secondary">{{ job.reviews?.length }} reviews</Badge>
                    </CardContent>
                </Card>
            </div>


        </div>
    </div>
</template>
