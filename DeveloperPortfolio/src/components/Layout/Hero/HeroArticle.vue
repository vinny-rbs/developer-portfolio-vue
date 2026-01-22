<script setup>

import Badge from '@/components/UI/Badge.vue';
import { DefaultButton, ButtonIcon, ButtonContent } from '@/components/UI/DefaultButton/index.js';
import { AtSign, FileUser } from 'lucide-vue-next';

const EmailClick = () => {
    window.location.href = 'mailto:viniciusujunioribeiro05@gmail.com'
}

</script>

<template>
    <article class="h-full flex  flex-col w-[50%] gap-8 py-[clamp(3em,10vw,8em)]">
        <div class="flex flex-col gap-1.5">
            <p>Olá, eu sou</p>
            <h1 class="text-5xl">Vinicius Ribeiro da Silva</h1>
        </div>
        <div class="flex gap-4">
            <Badge color="var(--color-blue-500)" label="Desenvolvedor Fullstack" />
            <Badge color="var(--color-orange)" label="Designer UI & UX" />
        </div>
        <p> Sou desenvolvedor Fullstack com mais de 3 anos de experiência freelancer, especializado em Vue.js e na
            criação de interfaces modernas, funcionais e agradaveis. Tenho afinidade com UI/UX Design, prototipando
            no Figma com foco em usabilidade e experiência do usuário. Também possuo conhecimentos em APIs REST,
            backend e integração com bancos de dados, permitindo a construção de soluções completas.
        </p>
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
                    <a href="/CV Vinicius Ribeiro PT.pdf" target="_blank" rel="noopener noreferrer"
                        download="Vinicius Ribeiro currículo">
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
        width: 100%;
    }
}
</style>