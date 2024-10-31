<template>
  <div
    class="click_click flex justify-center items-center"
    :style="{ backgroundColor: bgColor }"
    @click="changeColor"
  >
    <div class="total">{{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
const bgColor = ref('#ffffff')

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  counter.value++;
  bgColor.value = getRandomColor();
}
</script>

<style scoped>
.click_click {
  width: 100vw;
  height: 100vh;
  user-select: none;
}
.total {
  font-size: 120px;
  color: white;
}
</style>
