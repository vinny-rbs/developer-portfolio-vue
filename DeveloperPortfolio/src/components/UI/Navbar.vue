<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
    mobile?: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

function handleClick() {
    emit('close')
}
</script>

<template>
    <nav>
        <ul :class="mobile
            ? 'flex flex-col gap-8 text-2xl items-center'
            : 'flex justify-end items-end gap-[clamp(1rem,8vw,4rem)]'">
            <li>
                <RouterLink to="/" active-class="active" @click="handleClick">
                    Sobre mim
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" active-class="active" @click="handleClick">
                    Projetos
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/experience" active-class="active" @click="handleClick">
                    Experiência
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
a {
    position: relative;
    display: inline-block;
}

a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

a:hover::after {
    transform: scaleX(1);
}

.active {
    text-shadow: 0.5px 0 0 currentColor, -0.5px 0 0 currentColor;
}
</style>
