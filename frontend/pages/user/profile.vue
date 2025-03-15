<script setup lang="ts">
import { Motion } from 'motion-v'
import { PencilIcon, XIcon, Loader2Icon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { UserDto } from '~/dtos/user.dto';
import { useAuthStore } from '~/stores/auth';

const { $api } = useNuxtApp();
const authStore = useAuthStore();

const router = useRouter();
const fetchedUser = ref<UserDto>({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    skills: [],
    avatar: null,
    jobs: [],
    applications: [],
    reviewsReceived: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: 'CLIENT'
});
const token = useCookie('jwt_token');
async function getUserDetails() {
    try {
        let response = await $api<UserDto>('/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response) {
            fetchedUser.value = {
                ...response,
                jobs: response.jobs || [],
                applications: response.applications || [],
                reviewsReceived: response.reviewsReceived || [],
            };

        } else {
            router.push('/login');
        }
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    getUserDetails();
})

const form = computed(() => fetchedUser.value);

const skillInput = ref('')
const isSubmitting = ref(false)

const { handleSubmit } = useForm({
    validationSchema: new UserDto()
})

// Computed property for avatar fallback
const getInitials = computed(() => {
    return `${fetchedUser.value.firstName[0]}${fetchedUser.value.lastName[0]}`
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
        isSubmitting.value = true;
        await $api('/users/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });
        alert('Profile updated successfully');
    } catch (error) {
        console.log(error);
    } finally {
        isSubmitting.value = false;
    }
})

// Logout function
const logout = () => {
    authStore.logUserOut();
    router.push('/login');
}

// Delete account function
const deleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        try {
            await $api('/users/profile', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            authStore.logUserOut();
            router.push('/signup');
        } catch (error) {
            console.log(error);
        }
    }
}
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
                            <AvatarImage :src="fetchedUser.avatar || '/imgs/default-avatar.jpg'" />
                            <AvatarFallback>{{ getInitials }}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="icon" class="absolute bottom-0 right-0 rounded-full">
                            <PencilIcon class="h-4 w-4" />
                        </Button>
                    </div>
                    <div>
                        <h1 class="text-3xl font-bold">{{ fetchedUser.firstName }} {{ fetchedUser.lastName }}</h1>
                        <p class="text-muted-foreground">{{ fetchedUser.email }}</p>
                    </div>
                </div>

                <Card>
                    <div>

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
                                                <Input v-model="form.firstName" placeholder="Enter your first name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </FormField>

                                    <FormField v-slot="{ componentField }" name="lastName">
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input v-model="form.lastName" placeholder="Enter your last name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </FormField>
                                </div>

                                <FormField v-slot="{ componentField }" name="bio">
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea v-model="form.bio" placeholder="Tell us about yourself..."
                                                rows="4" />
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
                                                    @keydown.enter.prevent="addSkill" />
                                                <div class="flex flex-wrap gap-2">
                                                    <Badge v-for="skill in form?.skills || []" :key="skill"
                                                        variant="secondary" class="flex items-center gap-1 py-1 px-3">
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
                    </div>
                </Card>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ fetchedUser.jobs?.length || 0 }}</CardTitle>
                            <CardDescription>Jobs Posted</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ fetchedUser.applications?.length || 0 }}</CardTitle>
                            <CardDescription>Applications</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader class="space-y-1">
                            <CardTitle class="text-2xl">{{ fetchedUser.reviewsReceived?.length || 0 }}</CardTitle>
                            <CardDescription>Reviews Received</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <!-- Logout and Delete Account Buttons -->
                <div class="flex justify-between mt-8">
                    <Button variant="outline" @click="logout">Logout</Button>
                    <Button variant="destructive" @click="deleteAccount">Delete Account</Button>
                </div>
            </Motion>
        </div>
    </div>
</template>
