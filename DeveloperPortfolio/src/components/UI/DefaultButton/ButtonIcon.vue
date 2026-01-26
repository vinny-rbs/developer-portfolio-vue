<script setup lang="ts">

import type { Component } from 'vue'

const ButtonProps = defineProps<{
    icon: Component,
    size?: number,
    color?: string,
    strokeWidth?: number,
}>();

</script>

<template>
    <component :is="icon" :size="size ?? 'clamp(18px, 3vw, 24px)'" dark:color="color ?? '#f5f5f5'"
        :strokeWidth="strokeWidth ?? 2" />
</template>