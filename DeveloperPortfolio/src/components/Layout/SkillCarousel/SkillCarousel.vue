<script setup lang="ts">
import { computed } from 'vue'
import { skills } from '@/data/skills'

const props = defineProps<{
    speed?: number // segundos
}>()

const duration = computed(() => `${props.speed ?? 10}s`)
const loopSkills = computed(() => [...skills, ...skills, ...skills, ...skills])
</script>


<template>
    <div class="relative overflow-hidden w-full py-20">
        <div class=" flex w-max animate-carousel" :style="{ animationDuration: duration }">
            <div v-for="(skill, index) in loopSkills" :key="`${skill.name}-${index}`"
                class="mx-6 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full border-2
                 border-(--color-text-primary)
                 shadow-[0px_4px_0px_var(--color-primary-shadow)]
                 flex items-center justify-center">
                    <img :src="skill.icon" :alt="skill.name"
                        class="w-8 h-8 grayscale contrast-150 brightness-75 invert-0 dark:invert" />
                </div>
            </div>
        </div>
    </div>
</template>
