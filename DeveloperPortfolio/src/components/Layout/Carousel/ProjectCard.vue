<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import { DefaultButton, ButtonIcon } from '@/components/UI/DefaultButton/index'
import { ArrowLeft, ArrowRight, AppWindow } from 'lucide-vue-next';
import Badge from '@/components/UI/Badge.vue';

const currentIndex = ref(0)

const currentProject = computed(() => {
    return projects[currentIndex.value]
})

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % projects.length
}

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + projects.length) % projects.length
}

</script>

<template>
    <section class="h-[calc(100vh-clamp(4rem,10vw,7rem))] w-dvw flex flex-col px-[clamp(2em,8vw,4.5em)] py-4 gap-8">
        <div class="w-screen">
            <h2 class="text-5xl ">Projetos</h2>
        </div>
        <div class="w-full h-full flex justify-center items-center gap-12">
            <DefaultButton @click="prev">
                <template #content>
                    <ButtonIcon :icon="ArrowLeft" />
                </template>
            </DefaultButton>
            <main v-if="currentProject" class="flex flex-col justify-center items-center gap-4">
                <a :href="currentProject.liveDemo" target="_blank" rel="noopener noreferrer" class="img-wrapper"
                    :aria-label="`Abrir o projeto ${currentProject.title} em uma nova aba`"
                    :title="`Abrir ${currentProject.title}`">
                    <img class="aspect-square w-[clamp(15em,30vw,25em)] max-w-[25em] rounded-xl"
                        :src="currentProject.image" :alt="currentProject.title" />
                    <div class="overlay-content">
                        <AppWindow class="overlay-icon" :size=42 />
                        <span class="overlay-text text-2xl">Conheça o meu projeto</span>
                    </div>
                </a>
                <h3 class="text-2xl font-bold">{{ currentProject.title }}</h3>
                <p class="text-sm">{{ currentProject.description }}</p>
                <div class="flex gap-2">
                    <div v-for="tech in currentProject.technologies" :key="tech">
                        <Badge :label="tech" color="var(--color-blue-500)" />
                    </div>
                </div>
            </main>
            <DefaultButton @click="next">
                <template #content>
                    <ButtonIcon :icon="ArrowRight" />
                </template>
            </DefaultButton>
        </div>
    </section>
</template>

<style scoped>
button {
    border-radius: 1em;
}

.img-wrapper {
    position: relative;
    display: inline-block;
    border-radius: 0.75rem;
}

.img-wrapper img {
    display: block;
    transition: transform 0.3s ease;
}

.img-wrapper::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    opacity: 0;
    transition: opacity 0.3s ease;
    transform: scale(1.05);
}

.img-wrapper:hover::after {
    opacity: 1;
}

.img-wrapper:hover img {
    transform: scale(1.05);
}

.overlay-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--color-light);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
}



.img-wrapper:hover .overlay-content {
    opacity: 1;
}

@media (max-width: 1115px) {
    section {
        height: auto;
    }
}
</style>