<script setup>

import TimelineItem from './TimelineItem.vue';
import TimelineStraight from './TimelineStraight.vue';

</script>

<template>
    <main class="h-full flex flex-row w-screen">
        <aside class="w-[20%] py-12">
            <TimelineStraight />
        </aside>
        <article class="flex-1 px-6">
            <TimelineItem />
        </article>
    </main>
</template>

<style scoped>
@media (max-width: 440px) {
    aside {
        display: none;
    }
}
</style>