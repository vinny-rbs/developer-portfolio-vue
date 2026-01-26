<script setup>

import SkillCarousel from '@/components/Layout/SkillCarousel/SkillCarousel.vue';
import TimeLine from '@/components/Layout/TimeLine/TimeLine.vue';
import TitlePage from '@/components/UI/TitlePage/TitlePage.vue';

</script>

<template>
    <section class="w-screen min-h-[calc(100vh-clamp(4rem,10vw,7rem))]">
        <TitlePage title="Educação" />
        <TimeLine />
        <TitlePage title="Habilidades" />
        <SkillCarousel />
    </section>
</template>