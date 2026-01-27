<script setup>

import { useDark, useToggle } from '@vueuse/core';
import { DefaultButton, ButtonIcon } from '@/components/UI/DefaultButton/index.js';
import { Sun, Moon } from 'lucide-vue-next';
import Navbar from '../UI/Navbar.vue';
import Divider from '../UI/Divider.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const isDark = useDark(
    {
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: '',
    }
);
const toggleDark = useToggle(isDark);

</script>

<template>
    <header v-if="route.meta.showHeader !== false"
        class="w-dvw h-[clamp(5rem,10vw,7rem)] max-h-32 flex justify-center items-center py-7 px-[clamp(1rem,10vw,8rem)]">
        <Navbar />
        <Divider />
        <DefaultButton @click="toggleDark()">
            <template #icon>
                <ButtonIcon :icon="isDark ? Sun : Moon" />
            </template>
        </DefaultButton>
    </header>
</template>