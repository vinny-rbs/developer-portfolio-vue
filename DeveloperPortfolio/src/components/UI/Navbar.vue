<script setup>

    import { ref } from 'vue';

    let liActive = ref("Sobre mim")

</script>

<template>
    <nav class="flex w-full h-full items-center flex-row-reverse border-dashed">
        <ul class="flex justify-around items-center gap-[clamp(2rem,8vw,4rem)]">
            <li @click="liActive='Sobre mim'" :class="liActive === 'Sobre mim' ? 'active' : ''">Sobre mim</li>
            <li @click="liActive='Projetos'"  :class="liActive === 'Projetos' ? 'active' : ''">Projetos</li>
            <li @click="liActive='Habilidades'"  :class="liActive === 'Habilidades' ? 'active' : ''">Habilidades</li>
        </ul>
    </nav>
</template>

<style scoped>

    .active {
        text-shadow: 0.5px 0 0 currentColor, -0.5px 0 0 currentColor;
        transition: all 0.2s ease-in-out; 
    }

</style>