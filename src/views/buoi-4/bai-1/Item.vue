<template>
  <div class="item">
    {{ props.name }}
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  console.log(`Item has been created with name: ${props.name}`)
})
</script>

<style scoped>
.item {
  font-size: 24px;
  color: blue;
  text-align: center;
}
</style>
