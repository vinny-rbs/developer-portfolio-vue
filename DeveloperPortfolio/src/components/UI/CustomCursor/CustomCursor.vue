<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dot = ref<HTMLDivElement | null>(null)
const circle = ref<HTMLDivElement | null>(null)

let mouseX = 0
let mouseY = 0
let x = 0
let y = 0
let frameId = 0

const speed = 0.12


const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0

const lerp = (a: number, b: number, n: number) =>
    a + (b - a) * n

function move(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY

    if (dot.value) {
        dot.value.style.transform =
            `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }
}

function animate() {
    x = lerp(x, mouseX, speed)
    y = lerp(y, mouseY, speed)

    if (circle.value) {
        circle.value.style.transform =
            `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }

    frameId = requestAnimationFrame(animate)
}

onMounted(() => {
    if (isTouchDevice) return

    window.addEventListener('mousemove', move)
    animate()
})

onUnmounted(() => {
    window.removeEventListener('mousemove', move)
    cancelAnimationFrame(frameId)
})

function addHoverEvents() {
    const targets = document.querySelectorAll(
        'a, button, .cursor-hover'
    )

    targets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            circle.value?.classList.add('is-hover')
        })

        el.addEventListener('mouseleave', () => {
            circle.value?.classList.remove('is-hover')
        })
    })
}


</script>

<template>
    <div ref="dot" class="cursor-dot"></div>
    <div ref="circle" class="cursor-circle"></div>
</template>

<style scoped>
.cursor-dot {
    position: fixed;
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 50%;
    pointer-events: none;
    z-index: 11;
}

.cursor-circle {
    position: fixed;
    width: 36px;
    height: 36px;
    border: 2px solid currentColor;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10;
}

.cursor-dot,
.cursor-circle {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

@media (max-width: 1115px) and (hover: none) and (pointer: coarse) {

    .cursor-dot,
    .cursor-circle {
        display: none !important;
    }

    body {
        cursor: auto !important;
    }
}
</style>
