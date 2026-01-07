<script setup>

    import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="flex w-full h-full items-center flex-row-reverse border-dashed">
        <ul class="flex justify-around items-center gap-[clamp(2rem,8vw,4rem)]">
            <RouterLink to="/" active-class="active">
                <li>Sobre mim</li>
            </RouterLink>
            <RouterLink to="/projects" active-class="active">
                <li>Projetos</li>
            </RouterLink>
            <RouterLink to="/ability" active-class="active">
                <li>Habilidades</li>
            </RouterLink>
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
        transition: all 0.2s ease-in-out;
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