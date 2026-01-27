<script setup>

import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Layout/TheHeader.vue';
import CustomCursor from './components/UI/CustomCursor/CustomCursor.vue';

</script>

<template>
  <TheHeader />
  <CustomCursor v-if="$route.meta.cursor !== false" />
  <RouterView />
</template>