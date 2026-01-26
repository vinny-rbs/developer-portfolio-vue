<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="flex w-full h-full items-center flex-row-reverse border-dashed">
        <ul class="flex justify-around items-center gap-[clamp(1rem,8vw,4rem)]">
            <li>
                <RouterLink to="/" active-class="active">Sobre mim</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" active-class="active">Projetos</RouterLink>
            </li>
            <li>
                <RouterLink to="/ability" active-class="active">Habilidades</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
a {
    position: relative;
    display: inline-block;
    transition: all 0.2s ease-in-out;
}

a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: center;
}

a:hover::after {
    transform: scaleX(1);
}

.active {
    text-shadow: 0.5px 0 0 currentColor, -0.5px 0 0 currentColor;
}
</style>