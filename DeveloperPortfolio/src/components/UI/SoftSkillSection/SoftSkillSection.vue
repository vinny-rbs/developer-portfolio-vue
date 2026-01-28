<script setup lang="ts">

import { SoftSkillTitle, SoftSkillDescription } from './index.js';

const props = defineProps<{
    title: string,
    description: string
}>();

</script>

<template>
    <div class="
      flex flex-col gap-6
      w-full p-6
      rounded-md
      border-2 border-(--color-text-primary)
      shadow-[0px_4px_0px_var(--color-primary-shadow)]
    ">
        <SoftSkillTitle :title="props.title" />
        <SoftSkillDescription :description="props.description" />
    </div>
</template>