<script setup lang="ts">

const props = defineProps<{
    description: string,
}>();

</script>

<template>
    <p><strong>Sobre: </strong>{{ props.description }}</p>
</template>