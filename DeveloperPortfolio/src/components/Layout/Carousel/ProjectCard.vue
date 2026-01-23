<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '@/data/projects'
import { DefaultButton, ButtonIcon } from '@/components/UI/DefaultButton'
import { ArrowLeft, ArrowRight, AppWindow } from 'lucide-vue-next'
import Badge from '@/components/UI/Badge.vue'

const currentIndex = ref(0)

const CARD_WIDTH = 360
const GAP = 32

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % projects.length
}

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + projects.length) % projects.length
}
</script>

<template>
    <section class="w-screen min-h-screen px-[clamp(2rem,5vw,4.5rem)] py-10 flex flex-col gap-10">
        <h2 class="text-5xl font-bold">PROJETOS</h2>
        <div class="flex items-center gap-8">
            <DefaultButton @click="prev">
                <template #content>
                    <ButtonIcon :icon="ArrowLeft" />
                </template>
            </DefaultButton>
            <div class="overflow-hidden w-full ">
                <div class="carousel flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] gap-8"
                    :style="{
                        transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`
                    }">
                    <div v-for="project in projects" :key="project.id"
                        class="w-full max-w-[25em] shrink-0 flex flex-col gap-6">
                        <a :href="project.liveDemo" target="_blank" rel="noopener noreferrer"
                            class="relative overflow-hidden rounded-xl group">
                            <img :src="project.image" :alt="project.title"
                                class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity
                       flex flex-col items-center justify-center gap-2 text-white">
                                <AppWindow :size="42" />
                                <span class="text-xl font-semibold text-center">
                                    Conheça o projeto
                                </span>
                            </div>
                        </a>
                        <div class="flex flex-col gap-4">
                            <h3 class="text-2xl font-bold">
                                {{ project.title }}
                            </h3>
                            <p class="text-sm text-zinc-400 line-clamp-3">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <Badge v-for="tech in project.technologies" :key="tech.title" :label="tech.title"
                                    :color="tech.color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultButton @click="next">
                <template #content>
                    <ButtonIcon :icon="ArrowRight" />
                </template>
            </DefaultButton>
        </div>
    </section>
</template>


<style scoped>
h2 {
    font-family: "Bebas Neue";
    letter-spacing: 3px;
}

@media (max-width: 1115px) {

    .carousel {
        flex-wrap: wrap;
        justify-content: center;
    }

    button {
        display: none;
    }
}
</style>
