<script setup lang="ts">

import type { Component } from 'vue';

const IconContentProps = defineProps<{
    icon: Component
    size?: number,
    color?: string,
    strokeWidth?: number,
    backgroundColor?: string
}>();

</script>

<template>
    <div class="CardIcon h-full w-full flex justify-center items-center p-3.5">
        <component :is="icon" :size="size ?? 'clamp(18px, 3vw, 24px)'" :color="color" :strokeWidth="strokeWidth ?? 2" />
    </div>
</template>

<style scoped>
.CardIcon {
    transition: 0.3s all ease-in-out;
}

.CardIcon:hover {
    background-color: v-bind('backgroundColor ?? "transparent"');
    transform: scale(1.25);
}

.CardIcon svg {
    max-height: 42px;
}
</style>