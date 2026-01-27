<script setup lang="ts">

const props = defineProps<{
    title: string,
}>();

</script>

<template>
    <h3 class="text-5xl font-bold">{{ props.title }}</h3>
</template>