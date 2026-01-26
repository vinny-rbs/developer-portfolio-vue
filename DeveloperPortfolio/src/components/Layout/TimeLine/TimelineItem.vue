<script setup>

import { TimeLineInfo } from '@/data/educationTimeline'

</script>

<template>
    <div v-for="item in TimeLineInfo" class="flex m-10">
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