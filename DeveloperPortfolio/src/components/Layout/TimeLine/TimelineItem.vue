<script setup>

import { TimeLineInfo } from '@/data/education'

</script>

<template>
    <div v-for="item in TimeLineInfo" :key="item.title" class="
      w-fit
      max-w-[70em]
      p-6
      rounded-md
      border-2
      border-(--color-text-primary)
      shadow-[0px_4px_0px_var(--color-primary-shadow)]
      break-words
    ">
        <div class="flex flex-col gap-4">
            <h3 class="flex flex-wrap items-baseline gap-1 text-xl md:text-2xl">
                <strong>{{ item.title }}</strong>
                <span>{{ item.subtitle }}</span>
            </h3>

            <span class="text-sm md:text-base">
                {{ item.institution }} | {{ item.period }}
            </span>

            <p class="text-sm md:text-base">
                <strong>Experiência:</strong> {{ item.experience }}
            </p>
        </div>
    </div>
</template>
