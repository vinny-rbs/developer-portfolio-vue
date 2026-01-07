<script setup>

    import { ref } from 'vue';
    import { DefaultButton, ButtonIcon } from '@/components/UI/DefaultButton/index.js';
    import { Sun, Moon } from 'lucide-vue-next';
    import Navbar from '../UI/Navbar.vue';
    import Divider from '../UI/Divider.vue';

    const isDark = ref(true);

</script>

<template>
    <header class="bg-light dark:bg-dark-900 w-dvw h-[clamp(4rem,10vw,7rem)] max-h-32 flex justify-center items-center py-7 px-[clamp(1rem,10vw,8rem)]">
        <Navbar />
        <Divider />
        <DefaultButton @click="isDark = !isDark">
            <template #icon>
                <ButtonIcon :icon="isDark ? Sun : Moon"  />
            </template>
        </DefaultButton>
    </header>
</template>