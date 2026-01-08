<script setup lang="ts">

    const CardContentProps = defineProps<{
        title?: string
        label:string
        colorReffer?: string
    }>()

</script>

<template>
    <blockquote class="flex flex-col p-4 gap-3">
        <h3 class="text-base font-bold"><b class="reffer">— </b>{{ CardContentProps.title }}</h3>
        <p>{{ CardContentProps.label  ?? "Texto do card"}}</p>
    </blockquote>
</template>

<style scoped>

    .reffer {
        color: v-bind('colorReffer ?? "white"')
    }

</style>