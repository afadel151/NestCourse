<template>
    <div class="service-card p-4 border rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
        <p class="text-base font-light">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.service-card {
    background-color: var(--bg-color);
    color: var(--text-color);
}
</style>
