<script setup>
import { TimeLineInfo } from '@/data/education'
</script>

<template>
    <div class="relative flex items-center justify-center h-full py-10">
        <div class="absolute left-1/2 border-y-0 border-(--color-text-primary) -translate-x-1/2 h-full w-1" style="
                background-image: radial-gradient(circle, var(--color-text-primary) 2px, transparent 2px);
                background-size: 4px 15px;
                background-repeat: repeat-y;
                background-position: center;
            " />
        <div class="flex flex-col justify-between h-[109%] z-1">
            <div v-for="(_, index) in TimeLineInfo.length" :key="index" class="w-3 h-3 rounded-xs border-3 shrink-0"
                style="border-color: var(--color-text-primary); background-color: var(--color-text-primary);" />
        </div>
    </div>
</template>