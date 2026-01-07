<script setup>

    import HeroArticle from './HeroArticle.vue';
    import HeroAside from './HeroAside.vue';

</script>

<template>
    <main class="h-[calc(100vh-clamp(4rem,10vw,7rem))] w-dvw flex flex-row px-[clamp(2em,10vw,4.5em)] py-4">
        <HeroArticle />
        <HeroAside />
    </main>
</template>