<script setup>

import { Linkedin, Github, Instagram, Twitter, Dribbble, BookOpenCheck } from 'lucide-vue-next';
import { CardIcon, CardContent } from '@/components/UI/Card/index.js';

</script>

<template>
    <aside class="h-full max-h-200 aspect-6/6 grid grid-cols-7 grid-rows-6 gap-x-8 gap-y-10 p-[clamp(1em,5vw,8em)]">
        <div
            class="grid-1 col-span-7 row-span-2 bg-dark-800 rounded-2xl border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardContent title="" color-reffer="var(--color-red)" label="" />
        </div>
        <div
            class="grid-2 col-span-5 row-span-2 col-start-1 row-start-3 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <img class="h-full w-full object-cover object-[center_20%]"
                src='@/assets/images/profileImg/Mingau The cat.webp' alt="Gato domestico descansando">
        </div>
        <div
            class="grid-3 col-span-2 row-span-4 col-start-6 row-start-3 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <img class="h-full w-full object-cover object-center"
                src='@/assets/images/profileImg/Vinicius Campus Party2.webp' alt="Jovem na Campus Party">
        </div>
        <div
            class="grid-4 max-w-[21em] cursor-pointer flex justify-center items-center col-span-2 row-span-2 p-8 col-start-4 row-start-5 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <img class="suncode rounded-[50%]" src=" @/assets/images/profileImg/SunCode.svg" alt="SunCode Logotipo">
        </div>
        <div
            class="grid-5 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-1 row-start-5 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="Linkedin" size="75%" backgroundColor="#0077b5" />
        </div>
        <div
            class="grid-6 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-1 row-start-6 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="Twitter" size="75%" backgroundColor="#1dcaff" />
        </div>
        <div
            class="grid-7 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-2 row-start-5 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="Github" size="75%" backgroundColor="#2DBA4E" />
        </div>
        <div
            class="grid-8 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-2 row-start-6 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="Dribbble" size="75%" backgroundColor="#ED4989" />
        </div>
        <div
            class="grid-9 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-3 row-start-5 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="Instagram" size="75%" backgroundColor="#5430CE" />
        </div>
        <div
            class="grid-10 max-w-[4.5em] self-center min-w-[4.25em] aspect-square cursor-pointer col-start-3 row-start-6 bg-dark-800 rounded-2xl overflow-hidden border-dark-900 border-3 shadow-[0px_4px_0px_0px_var(--color-dark-900)]">
            <CardIcon :icon="BookOpenCheck" size="75%" backgroundColor="#949494" />
        </div>
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
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(10, 1fr);
        gap: 2em;
    }

    .grid-3 {
        grid-column: span 2 / span 2;
        grid-row: span 10 / span 10;
        grid-column-start: 4;
        grid-row-start: 1;
    }

    .grid-4 {
        grid-column: span 3 / span 3;
        grid-row: span 6 / span 6;
        padding: 5em;
    }

    .grid-5 {
        grid-row: span 2 / span 2;
        grid-column-start: 1;
        grid-row-start: 7;
    }

    .grid-6 {
        grid-row: span 2 / span 2;
        grid-column-start: 1;
        grid-row-start: 9;
    }

    .grid-7 {
        grid-row: span 2 / span 2;
        grid-column-start: 2;
        grid-row-start: 7;
    }

    .grid-8 {
        grid-row: span 2 / span 2;
        grid-column-start: 2;
        grid-row-start: 9;
    }

    .grid-9 {
        grid-row: span 2 / span 2;
        grid-column-start: 3;
        grid-row-start: 7;
    }

    .grid-10 {
        grid-row: span 2 / span 2;
        grid-column-start: 3;
        grid-row-start: 9;
    }
}

@media (max-width: 440px) {

    aside {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
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