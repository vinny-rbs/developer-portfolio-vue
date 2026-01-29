<script setup>

import HeroArticle from './HeroArticle.vue';
import HeroAside from './HeroAside.vue';

</script>

<template>
    <main
        class="min-h-[calc(100vh-clamp(4rem,10vw,7rem))] h-auto w-dvw flex flex-row justify-center items-center px-[clamp(2em,8vw,4.5em)] py-4">
        <HeroArticle />
        <HeroAside />
    </main>
</template>

<style scoped>
@media (max-width: 1115px) {
    main {
        flex-direction: column;
    }
}
</style>