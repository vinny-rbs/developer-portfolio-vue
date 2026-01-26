<script setup>
import { TimeLineInfo } from '@/data/educationTimeline'
</script>

<template>
    <div class="relative flex items-center justify-center h-full py-10">
        <div class="absolute left-1/2 border-t-3 border-b-3 border-(--color-text-primary) -translate-x-1/2 h-full w-2.5"
            style="
                background-image: radial-gradient(circle, var(--color-text-primary) 2px, transparent 3px);
                background-size: 2px 15px;
                background-repeat: repeat-y;
                background-position: center;
            " />
        <div class="flex flex-col justify-between h-full py-8 z-10">
            <div v-for="(_, index) in TimeLineInfo.length" :key="index" class="w-6 h-6 rounded-full border-3 shrink-0"
                style="border-color: var(--color-text-primary); background-color: var(--color-surface);" />
        </div>
    </div>
</template>