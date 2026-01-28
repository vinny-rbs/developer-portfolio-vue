<script setup lang="ts">
import { computed } from 'vue'
import { skills } from '@/data/skills'

const props = defineProps<{
    speed?: number
}>()

const duration = computed(() => `${props.speed ?? 10}s`)
const loopSkills = computed(() => [...skills, ...skills, ...skills, ...skills])
</script>


<template>
    <div class="relative w-full py-2 my-15 fade-edges">
        <div class="carousel-track flex w-max animate-carousel" :style="{ animationDuration: duration }">
            <div v-for="(skill, index) in loopSkills" :key="`${skill.name}-${index}`"
                class="mx-6 flex items-center justify-center skill-item">
                <div :title="skill.name" class="w-20 h-20 rounded-full border-2
                 border-(--color-text-primary)
                 shadow-[0px_4px_0px_var(--color-primary-shadow)]
                 flex items-center justify-center
                 transition-transform duration-300">
                    <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 grayscale contrast-150 brightness-75
                   dark:invert transition-all duration-300" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-edges {
    mask-image: linear-gradient(to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%);

    -webkit-mask-image: linear-gradient(to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%);
}

.fade-edges:hover .carousel-track {
    animation-play-state: paused;
}

.skill-item:hover div {
    transform: scale(1.1);
}
</style>