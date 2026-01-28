<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <h3 class="
      font-bold
      text-3xl sm:text-4xl lg:text-5xl
      wrap-break-word
      leading-tight
      max-w-full
    ">
        {{ title }}
    </h3>
</template>
