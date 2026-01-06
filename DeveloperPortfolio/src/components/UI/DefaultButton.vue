<script setup lang="ts">
    
import type { Component } from 'vue'

    const ButtonProps = defineProps<{
        icon: Component,
        size: number,
        color: string,
        content: string
    }>();
    
</script>

<template>
    <button class="border-light border-3 rounded-[50%] p-2 shadow-[0px_3px_0_var(--color-light)] shadow-light">
        <slot name="icon">
            <component :is="icon" :size="size ?? 24" :color="color ?? 'currentColor'" />
        </slot>
        <slot name="content">
            <p>{{ content }}</p>
        </slot>
    </button>
</template>

<style scoped>

    button {
        transition: all 0.2s ease-in-out; 
    }

    button:hover {
        transform: translateY(-4px);
        box-shadow: 0px 4px 0 var(--color-light);
    }

    button:active {
        transform: translateY(2px);
        box-shadow: 0px 0px 0 var(--color-light);
    }

</style>