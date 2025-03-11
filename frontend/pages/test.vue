<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
  })

 const token = useCookie("jwt_token");
</script>

<template>
    <div>
        {{ token }}
    </div>
</template>