<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'

import Navbar from '../UI/Navbar.vue'
import Divider from '../UI/Divider.vue'
import DefaultButton from '@/components/UI/DefaultButton/DefaultButton.vue'
import ButtonIcon from '@/components/UI/DefaultButton/ButtonIcon.vue'

const route = useRoute()

const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
})
const toggleDark = useToggle(isDark)

const menuOpen = ref(false)

function closeMenu() {
    menuOpen.value = false
}

</script>

<template>
    <header v-if="route.meta.showHeader !== false"
        class="w-full h-[clamp(5rem,10vw,7rem)] flex items-center justify-end px-4 sm:px-8 lg:px-24">
        <div class="hidden lg:flex flex-1 justify-end">
            <Navbar />
        </div>
        <Divider />
        <div class="w-full lg:w-auto flex items-center justify-between gap-4">
            <DefaultButton @click="toggleDark()">
                <template #icon>
                    <ButtonIcon :icon="isDark ? Sun : Moon" />
                </template>
            </DefaultButton>
            <DefaultButton class="lg:hidden" aria-label="Abrir menu" @click="menuOpen = !menuOpen">
                <template #icon>
                    <ButtonIcon :icon="menuOpen ? X : Menu" />
                </template>
            </DefaultButton>
        </div>
        <transition name="fade">
            <div v-if="menuOpen" class="fixed inset-0 z-50 lg:hidden flex flex-col items-center justify-center
               bg-white/60 dark:bg-black/60 backdrop-blur-md">
                <Navbar mobile @close="closeMenu" />
                <DefaultButton class="lg:hidden absolute top-[3%] right-[3.2%]" aria-label="Abrir menu"
                    @click="menuOpen = !menuOpen">
                    <template #icon>
                        <ButtonIcon :icon="menuOpen ? X : Menu" />
                    </template>
                </DefaultButton>
            </div>
        </transition>
    </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
