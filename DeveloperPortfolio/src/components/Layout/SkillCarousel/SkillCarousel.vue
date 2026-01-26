<script setup lang="ts">
import { computed } from 'vue'
import { skills } from '@/data/skills'

const repeatedSkills = computed(() => {
    const minItems = 30
    const times = Math.ceil(minItems / skills.length)
    return Array.from({ length: times }, () => skills).flat()
})
</script>


<template>
    <div class="relative flex justify-center items-center min-h-[10em] py-20 h-auto w-full">
        <div class="
        flex w-max
        animate-carousel
        hover:[animation-play-state:paused]
      ">
            <div v-for="(skill, index) in [...repeatedSkills, ...repeatedSkills]" :key="index"
                class="mx-6 flex items-center justify-center">
                <div :title="skill.name" class="
            w-20 h-20 rounded-full border-2
            dark:border-(--text-primary)
            shadow-[0px_4px_0px_var(--color-primary-shadow)]
            dark:shadow-[0px_4px_0px_var(--color-primary-shadow)]
            flex items-center justify-center
          ">
                    <img :src="skill.icon" :alt="skill.name" class="
              w-8 h-8
              grayscale brightness-90 opacity-90
              invert-0 dark:invert
              transition-all duration-300
            " />
                </div>
            </div>
        </div>
    </div>
</template>
