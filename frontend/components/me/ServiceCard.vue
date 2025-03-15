<template>
    <div class="service-card p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
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
