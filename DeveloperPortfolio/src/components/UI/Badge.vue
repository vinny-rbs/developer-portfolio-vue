<script setup lang="ts">

const BadgeProps = defineProps<{
    label: string
    color?: string
}>();

</script>

<template>
    <p class="border-3 font-bold w-fit px-2 py-0.75 rounded-4xl text-[0.75rem] select-none line-clamp-1">{{ label }}</p>
</template>

<style scoped>
p {
    background-color: color-mix(in srgb, v-bind('BadgeProps.color'), transparent 85%);
    color: v-bind('BadgeProps.color');
    border-color: v-bind('BadgeProps.color');
}
</style>