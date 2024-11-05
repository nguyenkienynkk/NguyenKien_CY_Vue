<template>
  <div class="custom-checkbox" @click="toggleCheckbox">
    <div class="checkbox" :class="{ checked: modelValue }">
      <span v-if="modelValue" class="checkmark">✔</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

function toggleCheckbox() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  transition: background-color 0.3s, border-color 0.3s;
  border:solid 2px royalblue;
}
.checkmark {
  color: white;
}
</style>
