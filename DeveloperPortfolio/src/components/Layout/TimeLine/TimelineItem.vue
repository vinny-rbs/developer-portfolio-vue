<script setup>

import { TimeLineInfo } from '@/data/education'

</script>

<template>
    <div v-for="item in TimeLineInfo" class="flex w-fit p-6 rounded-md m-10 border-2
                 border-(--color-text-primary)
                 shadow-[0px_4px_0px_var(--color-primary-shadow)]">
        <div class="flex flex-col gap-4">
            <h3 class="inline-flex items-baseline gap-1 text-2xl flex-wrap">
                <strong>{{ item.title }} </strong>{{ item.subtitle }}
            </h3>
            <span>
                {{ item.institution }} | {{ item.period }}
            </span>
            <span>
                <strong>Experiência: </strong>{{ item.experience }}
            </span>
        </div>
    </div>
</template>