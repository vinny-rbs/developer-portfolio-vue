<script setup>

import TimelineItem from './TimelineItem.vue';
import TimelineStraight from './TimelineStraight.vue';

</script>

<template>
    <main class="h-full flex flex-row">
        <aside class="hidden md:flex justify-end w-[20%] p-6 mx-12">
            <TimelineStraight />
        </aside>
        <article class="h-auto flex-1 flex flex-col px-[clamp(2em,5vw,4.5em)] gap-12">
            <TimelineItem />
        </article>
    </main>
</template>