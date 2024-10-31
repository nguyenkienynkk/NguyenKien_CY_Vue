<template>
  <div v-for="(item, index) in items" :key="index">
    <Item :name="item.name" />
    <Check :is-checked="item.isChecked" />
  </div>
</template>

<script setup lang="ts">
import Item from '@/views/buoi-4/bai-1/Item.vue'
import { ref } from 'vue'
import Check from '@/views/buoi-4/bai-1/Check.vue'

const items = ref({
  buoi: {
    name:'Buổi 1: Xây dựng trang web với Vue.js',
    isChecked: 'Da xac nhan',
  },
  buoi2: {
    name: 'Bu��i 2: Thiết kế và tạo màn hình',
    isChecked: 'Da xac nhan',
  },
  buoi3: {
    name: 'Bu��i 3: Thiết kế và tạo giao diện',
    isChecked: 'Chua xac nhan',
  },
  buoi4: {
    name: 'Bu��i 4: Thiết kế và tạo component',
    isChecked: 'Chua xac nhan',
  },
  buoi5: {
    name: 'Bu��i 5: Thiết kế và tạo API',
    isChecked: 'Da xac nhan',
  }
})

</script>

<style scoped></style>
