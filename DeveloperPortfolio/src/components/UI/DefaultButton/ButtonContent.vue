<script setup lang="ts">

const props = defineProps<{
    label: string
}>();

</script>

<template>
    <div class="flex flex-1 px-2">
        <p class="line-clamp-1 font-medium">{{ label }}</p>
    </div>
</template>