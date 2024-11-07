<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterLink class="nav-link" :to="{ name: 'bai10' }"></RouterLink>
  <RouterView />
</template>
<style scoped></style>
