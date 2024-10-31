<template>
  <div>
    <input type="number" v-model="filterInput" />
    <div v-for="(item, index) in filteredProducts" :key="index">
      <p>Name: {{ item.name }}</p>
      <p>Price: {{ item.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const filterInput = ref(0)

const data = reactive({
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 600,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 700,
    }
  ],
})
const filteredProducts = computed(() => data.products.filter(product => product.price >= filterInput.value))
</script>

<style scoped></style>
