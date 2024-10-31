<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <RouterLink class="nav-link" :to="{ name: 'app' }"></RouterLink>
  <RouterView />
</template>
<style scoped></style>
