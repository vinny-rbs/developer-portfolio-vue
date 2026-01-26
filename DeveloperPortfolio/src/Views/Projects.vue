<script setup>
import ProjectCard from '@/components/Layout/ProjectCarousel/ProjectCard.vue'
import TitlePage from '@/components/UI/TitlePage/TitlePage.vue';

</script>

<template>
    <section class="w-screen min-h-[calc(100vh-clamp(4rem,10vw,7rem))]">
        <TitlePage title="PROJETOS" />
        <ProjectCard />
    </section>
</template>