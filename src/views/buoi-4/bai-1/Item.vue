<template>
  <div class="item" @click="selectProduct">
    {{ name }}
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, onMounted } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  productCode: { type: String, required: true },
})
const emit = defineEmits(['selectProduct'])
function selectProduct() {
  emit('selectProduct', props.productCode)
}
onMounted(() => console.log(`Item has been created with name: ${props.name}`))
</script>
<style scoped>
.item {
  font-size: 24px;
  color: blue;
  text-align: center;
  cursor: pointer;
}
</style>
