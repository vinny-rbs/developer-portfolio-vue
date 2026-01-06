<script setup>

    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    let liActive = ref("Sobre mim")

</script>

<template>
    <nav class="flex w-full h-full items-center flex-row-reverse border-dashed">
        <ul class="flex justify-around items-center gap-[clamp(2rem,8vw,4rem)]">
            <RouterLink to="/" >
                <li @click="liActive='Sobre mim'" :class="liActive === 'Sobre mim' ? 'active' : ''">Sobre mim</li>
            </RouterLink>
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

    li {
        position: relative;
    }

    li::after {
        content: "";
        position: absolute;
        display: flex;
        width: 100%;
        height: 2px;
        background-color: var(--color-light);
        transition: all 0.5s ease-in-out; 
        transform: rotateY(90deg);
    }

    li:hover::after {
        transform: rotateY(0deg);
    }

</style>