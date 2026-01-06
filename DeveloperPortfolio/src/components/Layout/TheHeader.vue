<script setup>

    import { ref } from 'vue';
    import { Sun } from 'lucide-vue-next';
    import { Moon } from 'lucide-vue-next';
    import Navbar from '../UI/Navbar.vue';
    import DefaultButton from '../UI/DefaultButton.vue';
    import Divider from '../UI/Divider.vue';

    const isDark = ref(true);

</script>

<template>
    <header class="bg-light dark:bg-dark-900 w-dvw h-[clamp(4rem,10vw,7rem)] max-h-32 flex justify-center items-center py-7 px-[clamp(1rem,10vw,8rem)]">
        <Navbar />
        <Divider />
        <DefaultButton @click="isDark = !isDark" :icon="isDark ? Sun : Moon" color="#f5f5f5" >
            <template #icon></template>
        </DefaultButton>
    </header>
</template>