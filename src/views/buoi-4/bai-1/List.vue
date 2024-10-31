<template>
  <div v-for="(item, index) in items" :key="index">
    <Item
      :name="item.name"
      :productCode="index"
      :isChecked="item.isChecked"
      @selectProduct="handleSelectProduct"
    />
    <Check :is-checked="item.isChecked" />
  </div>
</template>

<script setup lang="ts">
import Item from '@/views/buoi-4/bai-1/Item.vue'
import Check from '@/views/buoi-4/bai-1/Check.vue'
import { ref } from 'vue'

const items = ref({
  buoi1: {
    name: 'Buổi 1: Xây dựng trang web với Vue.js',
    isChecked: 'Đã xác nhận',
  },
  buoi2: {
    name: 'Buổi 2: Thiết kế và tạo màn hình',
    isChecked: 'Đã xác nhận',
  },
  buoi3: {
    name: 'Buổi 3: Thiết kế và tạo giao diện',
    isChecked: 'Chưa xác nhận',
  },
  buoi4: {
    name: 'Buổi 4: Thiết kế và tạo component',
    isChecked: 'Chưa xác nhận',
  },
  buoi5: {
    name: 'Buổi 5: Thiết kế và tạo API',
    isChecked: 'Đã xác nhận',
  }
})

function handleSelectProduct(productCode: string) {
  const selectedItem = items.value[productCode]
  if (selectedItem.isChecked === 'Chưa xác nhận') {
    selectedItem.isChecked = 'Đã xác nhận'
    alert(`Product with code "${productCode}" has been confirmed!`)
  }
}
</script>

<style scoped>
.list {
  padding: 10px;
  border: 1px solid #000;
}
</style>
