<script setup>

    import { DefaultButton, ButtonContent } from '@/components/UI/DefaultButton/index.js';

</script>

<template>
    <div class="flex w-dvw h-dvh justify-center items-center flex-col gap-6">
        <h1>Erro 404</h1>
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