<script setup lang="ts">

import { SoftSkillTitle, SoftSkillDescription } from './index.js';

const props = defineProps<{
    title: string,
    description: string
}>();

</script>

<template>
    <div class="flex flex-col flex-1 gap-6 max-w-[30em]">
        <SoftSkillTitle :title="props.title" />
        <SoftSkillDescription :description="props.description" />
    </div>
</template>