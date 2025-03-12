<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Calendar, Home, Inbox, LampDesk, Search, Settings } from "lucide-vue-next";

const authStore = useAuthStore();
const user = ref(null); // Make user reactive

onMounted(async () => {
    user.value = await authStore.getUserDetails();
});

const items = [
    { title: "Home", url: "#", icon: Home },
    { title: "Jobs", url: "/client/jobs", icon: LampDesk },
    { title: "Calendar", url: "#", icon: Calendar },
    { title: "Search", url: "#", icon: Search },
    { title: "Settings", url: "#", icon: Settings },
];
</script>

<template>
    <Sidebar>
        <SidebarHeader>
            <div class="px-2 py-2 flex justify-stretch space-x-3 items-center h-full">
                <div class="h-full flex flex-col justify-center items-start w-full">
                    <p class="text-xl text-gray-900 font-bold">My company Inc</p>
                    <p class="text-sm font-semibold">Department</p>
                </div>
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

        <SidebarFooter>
            <div class="px-2 py-2 flex justify-stretch space-x-2 items-center h-full">
                <Avatar class="h-20 w-20">
                    <AvatarImage :src="user?.avatar || '/imgs/default-avatar.jpg'" />
                </Avatar>
                <div class="h-full py-2 w-full">
                    <p v-if="user">
                        <span class="font-bold">{{ user.firstName }} {{ user.lastName }}</span>
                        <br />
                        <span class="text-sm">{{ user.email }}</span>
                        <br />
                        <span class="text-xs text-gray-500">{{ user.role }}</span>
                    </p>
                    <p v-else class="text-sm text-gray-500">Loading user...</p>
                </div>
            </div>
        </SidebarFooter>
    </Sidebar>
</template>
