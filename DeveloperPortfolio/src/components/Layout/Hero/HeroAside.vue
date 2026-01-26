<script setup>

import { Linkedin, Github, Dribbble, BookOpenCheck } from 'lucide-vue-next';
import { CardIcon, CardContent } from '@/components/UI/Card/index.js';

</script>

<template>
    <aside class="h-full max-h-200 max-w-[50em] grid grid-cols-7 grid-rows-6 gap-x-8 gap-y-10 p-[clamp(1em,5vw,8em)]">
        <div
            class="grid-1 col-span-7 row-span-2  rounded-2xl dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
            <CardContent title="" color-reffer="var(--color-red)" label="" />
        </div>
        <div
            class="grid-2 col-span-4 row-span-2 row-start-3 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
            <img class="h-full w-full object-cover object-[center_20%]"
                src='@/assets/images/profileImg/Mingau The cat.webp' alt="Gato domestico descansando">
        </div>
        <div
            class="grid-3 col-span-3 row-span-4 col-start-5 row-start-3 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
            <img class="h-full w-full object-cover object-center"
                src='@/assets/images/profileImg/Vinicius Campus Party2.webp' alt="Jovem na Campus Party">
        </div>
        <div
            class="grid-4 max-w-[21em] cursor-pointer flex justify-center items-center col-span-2 row-span-2 col-start-3 row-start-5 p-8 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
            <img class="suncode rounded-[50%]" src=" @/assets/images/profileImg/SunCode.svg" alt="SunCode Logotipo">
        </div>
        <a href="https://www.linkedin.com/in/vinny-rbs/" target="_blank" rel="noopener noreferrer">
            <div
                class="grid-5 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-1 row-start-5 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
                <CardIcon :icon="Linkedin" size="75%" backgroundColor="#0077b5" />
            </div>
        </a>
        <a href="https://github.com/vinny-rbs" target="_blank" rel="noopener noreferrer">
            <div
                class="grid-6 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-2 row-start-5 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
                <CardIcon :icon="Github" size="75%" backgroundColor="#2DBA4E" />
            </div>
        </a>
        <a href="https://dribbble.com/vinny_rbs" target="_blank" rel="noopener noreferrer">
            <div
                class="grid-7 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer row-start-6 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
                <CardIcon :icon="Dribbble" size="75%" backgroundColor="#ED4989" />
            </div>
        </a>
        <a href="https://medium.com/@viniciusjunioribeiro05" target="_blank" rel="noopener noreferrer">
            <div
                class="grid-8 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer row-start-6 rounded-2xl overflow-hidden dark:bg-surface dark:border-dark-900 border-3 dark:border-0 dark:shadow-[0px_0px_0px_0px_var(--color-primary-shadow)] shadow-[0px_4px_0px_0px_var(--color-primary-shadow)]">
                <CardIcon :icon="BookOpenCheck" size="75%" dark:color="" backgroundColor="#949494" />
            </div>
        </a>
    </aside>
</template>

<style scoped>
@media (max-width: 1115px) {

    .grid-1 {
        display: none;
    }

    .grid-2 {
        display: none;
    }

    aside {
        height: auto;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 2em;
    }

    .grid-3 {
        grid-column: span 2 / span 2;
        grid-row: span 4 / span 4;
    }

    .grid-4 {
        grid-column: span 2 / span 2;
        grid-row: span 3 / span 3;
        display: none;
    }

    .grid-5 {
        grid-row-start: 2;
        max-width: 6em;
    }

    .grid-6 {
        grid-row-start: 3;
        max-width: 6em;
    }

    .grid-7 {
        grid-row-start: 4;
        max-width: 6em;
    }

    .grid-8 {
        grid-row-start: 1;
        max-width: 6em;
    }
}

@media (max-width: 440px) {

    aside {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    }

    .grid-4 {
        grid-column: span 3 / span 3;
        grid-row: span 6 / span 6;
        padding: 5em;
    }

    .grid-3 {
        display: none;
    }
}
</style>