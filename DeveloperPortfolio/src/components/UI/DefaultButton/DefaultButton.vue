<script setup></script>

<template>
    <button class="flex border-light border-3 gap-4 rounded-[2em] p-2 shadow-[0px_3px_0_var(--color-light)] w-fit h-fit shadow-light">
        <slot name="icon"></slot>
        <slot name="content"></slot>
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