<template>
  <div class="item">
    {{ name }}
    <button @click="confirmProduct" :disabled="isChecked === 'Đã xác nhận'">
      Xác nhận sản phẩm
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  isChecked: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['selectProduct'])

function confirmProduct() {
  emit('selectProduct', props.productCode)
}
</script>

<style scoped>
.item {
  font-size: 24px;
  color: blue;
  text-align: center;
  margin-bottom: 10px;
}
button {
  margin-top: 5px;
  padding: 5px 10px;
}
button:disabled {
  background-color: grey;
  cursor: not-allowed;
}
</style>
