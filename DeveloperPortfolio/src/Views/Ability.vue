<script setup>

import SkillCarousel from '@/components/Layout/SkillCarousel/SkillCarousel.vue';
import TimeLine from '@/components/Layout/TimeLine/TimeLine.vue';
import TitlePage from '@/components/UI/TitlePage/TitlePage.vue';
import SoftSkillSection from '@/components/UI/SoftSkillSection/SoftSkillSection.vue';
import { softskills } from '@/data/softskill';

</script>

<template>
    <section class="w-screen min-h-[calc(100vh-clamp(4rem,10vw,7rem))]">
        <TitlePage title="Educação | Habilidades" />
        <TimeLine />
        <SkillCarousel />
    </section>
</template>