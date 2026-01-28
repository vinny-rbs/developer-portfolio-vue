<script setup>

import SkillCarousel from '@/components/Layout/SkillCarousel/SkillCarousel.vue';
import TimeLine from '@/components/Layout/TimeLine/TimeLine.vue';
import TitlePage from '@/components/UI/TitlePage/TitlePage.vue';
import SoftSkillSection from '@/components/UI/SoftSkillSection/SoftSkillSection.vue';
import { softskills } from '@/data/softskill';

</script>

<template>
    <section class="w-screen min-h-[calc(100vh-clamp(4rem,10vw,7rem))]">
        <TitlePage title="Educação" />
        <TimeLine />
        <TitlePage title="Serviços" />
        <div class="flex justify-center gap-12 flex-col px-[clamp(2em,5vw,4.5em)] lg:flex-row flex-1">
            <SoftSkillSection v-for="softskill in softskills" :key="softskill.title" :title="softskill.title"
                :description="softskill.description" />
        </div>
        <SkillCarousel />
    </section>
</template>