<script setup lang="ts">
import { Motion } from 'motion-v'
import { PencilIcon, XIcon, Loader2Icon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { z } from 'zod'

const { $api } = useNuxtApp();
const profileSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    bio: z.string().optional(),
    skills: z.array(z.string())
})
const fetchedUser = ref(null);
const token = useCookie('jwt_token');
async function getUserDetails() {
    try {
        let response = await $api('/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
                
    } catch (error) {
        console.log(error);
    }   
}
onMounted(() => {
    getUserDetails();
})
const user = ref({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    bio: 'Full-stack developer with a passion for building great user experiences.',
    skills: ['Vue.js', 'TypeScript', 'Node.js'],
    avatar: null,
    jobs: [],
    applications: [],
    reviewsReceived: []
})
const form = ref({
    firstName: user.value.firstName,
    lastName: user.value.lastName,
    bio: user.value.bio,
    skills: [...user.value.skills]
})

const skillInput = ref('')
const isSubmitting = ref(false)

const { handleSubmit } = useForm({
    validationSchema: profileSchema
})

// Computed property for avatar fallback
const getInitials = computed(() => {
    return `${user.value.firstName[0]}${user.value.lastName[0]}`
})

// Skills management
const addSkill = () => {
    const skill = skillInput.value.trim()
    if (skill && !form.value.skills.includes(skill)) {
        form.value.skills.push(skill)
        skillInput.value = ''
    }
}

const removeSkill = (skillToRemove: string) => {
    form.value.skills = form.value.skills.filter(skill => skill !== skillToRemove)
}

// Form submission
const onSubmit = handleSubmit(async (values) => {
    try {
        isSubmitting.value = true
        // Implement your profile update logic here
        console.log('Updating profile:', values)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        // Update local user data
        Object.assign(user.value, values)
    } catch (error) {
        console.error('Error updating profile:', error)
    } finally {
        isSubmitting.value = false
    }
})
</script>
<template>
    <div class="flex min-h-screen w-full">
        <div class="w-full flex flex-col p-8">
            <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
                :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }"
                class="w-full max-w-4xl mx-auto space-y-8">

                <div class="flex items-center gap-6">
                    <div class="relative">
                        <Avatar class="h-24 w-24">
                            <AvatarImage :src="user.avatar || '/imgs/default-avatar.jpg'" />
                            <AvatarFallback>{{ getInitials }}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="icon" class="absolute bottom-0 right-0 rounded-full">
                            <PencilIcon class="h-4 w-4" />
                        </Button>
                    </div>
                    <div>
                        <h1 class="text-3xl font-bold">{{ user.firstName }} {{ user.lastName }}</h1>
                        <p class="text-muted-foreground">{{ user.email }}</p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Update your personal information and skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form @submit.prevent="onSubmit" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField v-slot="{ componentField }" name="firstName">
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input v-model="form.firstName" placeholder="Enter your first name"
                                                v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="lastName">
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input v-model="form.lastName" placeholder="Enter your last name"
                                                v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>

                            <FormField v-slot="{ componentField }" name="bio">
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea v-model="form.bio" placeholder="Tell us about yourself..." rows="4"
                                            v-bind="componentField" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>

                            <FormField v-slot="{ componentField }" name="skills">
                                <FormItem>
                                    <FormLabel>Skills</FormLabel>
                                    <FormControl>
                                        <div class="space-y-2">
                                            <Input v-model="skillInput" placeholder="Add a skill (press Enter)"
                                                @keydown.enter.prevent="addSkill" v-bind="componentField" />
                                            <div class="flex flex-wrap gap-2">
                                                <Badge v-for="skill in form.skills" :key="skill" variant="secondary"
                                                    class="flex items-center gap-1 py-1 px-3">
                                                    {{ skill }}
                                                    <Button variant="ghost" size="icon"
                                                        class="h-4 w-4 hover:bg-transparent"
                                                        @click="removeSkill(skill)">
                                                        <XIcon class="h-3 w-3" />
                                                    </Button>
                                                </Badge>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>

                            <div class="flex justify-end">
                                <Button type="submit" :disabled="isSubmitting">
                                    <Loader2Icon v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ user.jobs?.length || 0 }}</CardTitle>
                            <CardDescription>Jobs Posted</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ user.applications?.length || 0 }}</CardTitle>
                            <CardDescription>Applications</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ user.reviewsReceived?.length || 0 }}</CardTitle>
                            <CardDescription>Reviews Received</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </Motion>
        </div>


    </div>
</template>
