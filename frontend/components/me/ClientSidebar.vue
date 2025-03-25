<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Calendar, Home, Inbox, LampDesk, Search, Settings, User } from "lucide-vue-next";

const authStore = useAuthStore();
const user = ref(null); // Make user reactive

onMounted(async () => {
    user.value = await authStore.getUserDetails();
});

const items = [
    { title: "Home", url: "/client/home", icon: Home },
    { title: "Jobs", url: "/client/jobs", icon: LampDesk },
    { title: "Calendar", url: "#", icon: Calendar },
    { title: "Search", url: "#", icon: Search },
    { title: "Profile", url: "/user/profile", icon: User },
];
</script>

<template>
    <Sidebar>
        <SidebarHeader>
            <div class="pl-2 pt-5 flex justify-start  items-center h-full">
                <NuxtLink href="/" >

                    <h1 class="text-4xl text-gray-700  font-bold">
                        finder.
                    </h1>
                </NuxtLink>
            </div>
        </SidebarHeader>

        <SidebarContent class="mx-2">
            <SidebarGroup />
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem v-for="item in items" :key="item.title">
                        <SidebarMenuButton asChild>
                            <NuxtLink :href="item.url">
                                <component :is="item.icon" />
                                <span>{{ item.title }}</span>
                            </NuxtLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroup />
        </SidebarContent>


    </Sidebar>
</template>
