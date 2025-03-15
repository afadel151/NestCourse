<script setup lang="ts">
import { Edit, LampDesk } from 'lucide-vue-next';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { JobDto, JobStatus } from '~/dtos/job.dto';

import { useToast } from '@/components/ui/toast/use-toast'
import { ApplicationStatus } from '~/dtos/application.dto';
const { toast } = useToast()
const { $api } = useNuxtApp();
const props = defineProps<{
    job: JobDto;
}>();

const form = ref<JobDto>(new JobDto(props.job));
form.value.id = props.job.id;
const { isFieldDirty } = useForm({
    validationSchema: new JobDto(),
});
const emit = defineEmits(['job_edited']);

async function AddNewJob() {


    try {
        const response = await $api<JobDto>('jobs/edit', {
            method: 'POST',
            body: JSON.stringify(form.value),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        toast({
            title: 'Success',
            description: 'Offer modified successfully',
            variant: 'default',

        });
        emit('job_edited', response);

    } catch (error) {
        console.log(error);

    }
}
function updateStatus(status: JobStatus) {
    console.log(status);
    form.value.status = status as JobStatus;
}
const status = computed(() =>
    Object.values(JobStatus)
);
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="outline">
                <Edit />
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit Job offer</DialogTitle>
                <DialogDescription>
                    Make changes to your job offer here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <form class="space-y-4 " @submit="AddNewJob">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Job title</FormLabel>
                        <FormControl>
                            <div class="relative w-full  items-center">
                                <Input v-model="form.title" placeholder="Enter job title" class="pl-10" required
                                    :validate-on-blur="!isFieldDirty" />
                                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
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
                            <Textarea v-model="form.description" placeholder="Give it a description" required
                                class="resize-none" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="budget" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel>Budget</FormLabel>
                        <FormControl>
                            <Input v-model="form.budget" type="number" placeholder="Enter a budget for your offer"
                                required />
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="status">
                    <FormItem class="flex flex-col">
                        <FormLabel>Status</FormLabel>
                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button class="w-fit" variant="outline">
                                    {{ form.status.toLocaleLowerCase().replace('_',' ') }}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem v-for="stat in status" :key="stat">
                                    <Button @click="updateStatus(stat)">
                                        {{ stat.toLocaleLowerCase().replace('_', ' ') }}
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </FormItem>

                </FormField>
                <DialogFooter>
                    <DialogClose as-child>
                        <Button type="submit">
                            Save changes
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </form>
        </DialogContent>

    </Dialog>
</template>