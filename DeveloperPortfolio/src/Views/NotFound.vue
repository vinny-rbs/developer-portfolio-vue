<script setup>

import { DefaultButton, ButtonContent } from '@/components/UI/DefaultButton/index.js';

</script>

<template>
    <div class="flex w-dvw h-[calc(100vh-clamp(4rem,10vw,7rem))] justify-center items-center flex-col gap-6">
        <h2>Erro 404</h2>
        <p>Pagina não encontrada...</p>
        <RouterLink to="/">
            <DefaultButton>
                <template #content>
                    <ButtonContent label="Voltar para a página inicial" />
                </template>
            </DefaultButton>
        </RouterLink>
    </div>
</template>