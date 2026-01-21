<script setup>

    import Badge from '@/components/UI/Badge.vue';
    import { DefaultButton, ButtonIcon, ButtonContent } from '@/components/UI/DefaultButton/index.js';
    import { AtSign, FileUser } from 'lucide-vue-next';

    const EmailClick = () => {
        window.location.href = 'mailto:viniciusujunioribeiro05@gmail.com'
    }

</script>

<template>
    <article class="h-full flex  flex-col flex-1 gap-8 py-[clamp(3em,10vw,8em)]">
        <div class="flex flex-col gap-1.5">
            <p>Olá, eu sou</p>
            <h2 class="text-5xl">Vinicius Ribeiro da Silva</h2>
        </div>
        <div class="flex gap-4">
            <Badge color="var(--color-blue-500)" label="Desenvolvedor Fullstack" />
            <Badge color="var(--color-orange)" label="Designer UI & UX" />
        </div>
        <p>Vem comigo que eu vou te contar um pouco mais sobre mim. Não sou só desenvolvedor ou designer, sou os dois em um. Mas não vivo só de código e design, também curto música, animais e esportes.</p>
        <p>Engraçado que, no começo, eu odiava programação. Mas bastou dar uma chance pra eu me apaixonar pelas infinitas possibilidades que ela oferece. Fica por aqui e confere alguns dos meus projetos!</p>
        <div class="flex gap-[clamp(1em,4vw,3em)] py-8">
            <DefaultButton @click="EmailClick">
                <template #icon>
                    <ButtonIcon :icon="AtSign" :stroke-width=2.5 />
                </template>
                <template #content>
                    <ButtonContent label="E-mail" />
                </template>
            </DefaultButton>
                    <DefaultButton>
                <template #icon>
                    <ButtonIcon :icon="FileUser" :stroke-width=2.5 />
                </template>
                <template #content>
                    <a href="/CV Vinicius Ribeiro PT.pdf" target="_blank"rel="noopener noreferrer" download="Vinicius Ribeiro currículo">
                        <ButtonContent label="Currículo" />
                    </a>
                </template>
            </DefaultButton>
        </div>
    </article>
</template>

<style scoped>

    @media (max-width: 1115px) {
        article {
            justify-content: center;
            align-items: center;
        }
    }

</style>