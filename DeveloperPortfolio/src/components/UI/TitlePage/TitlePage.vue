<script setup lang="ts">

const props = defineProps<{
    title: string
}>();

</script>

<template>
    <h2 class="text-5xl font-bold mx-[clamp(2rem,5vw,4.5rem)] py-[clamp(1rem,3vw,2.5rem)]">
        {{ props.title }}
    </h2>
</template>

<style scoped>
h2 {
    font-family: "Bebas Neue";
    letter-spacing: 3px;
}
</style>