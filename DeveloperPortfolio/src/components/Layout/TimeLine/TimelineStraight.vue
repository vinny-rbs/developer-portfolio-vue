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
            <div v-for="(_, index) in TimeLineInfo.length" :key="index"
                class="relative flex items-center justify-center w-6 h-6 shrink-0">
                <div class="absolute w-6 h-6 rounded-full border-2" style="border-color: var(--color-text-primary);">
                </div>
                <div class="w-2 h-2 rounded-full" style="background-color: var(--color-text-primary);"></div>
            </div>
        </div>
    </div>
</template>