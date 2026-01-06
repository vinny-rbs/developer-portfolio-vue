<script setup>

    import { DefaultButton, ButtonContent } from '@/components/UI/DefaultButton/index.js';

</script>

<template>
    <DefaultButton content="asdasd">
        <template #content>
            <ButtonContent label="asdasd" />
        </template>
    </DefaultButton>
</template>