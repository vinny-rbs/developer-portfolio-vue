<script setup lang="ts">

    import type { Component } from 'vue'

    const ButtonProps = defineProps<{
        icon: Component,
        size: number,
        color: string,
    }>();

</script>

<template>
    <component :is="icon" :size="size ?? 24" :color="color ?? 'currentColor'" />
</template>