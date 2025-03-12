<script setup>
</script>

<template>
    <SidebarProvider>
           <MeClientSidebar/>
            <main class="container">
                <SidebarTrigger />
                <div class="row">
                    <div class="col-md-12">
                        <slot />
                    </div>
                </div>
            </main>
    </SidebarProvider>
</template>