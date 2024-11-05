<template>
  <div class="custom-radio-group">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="custom-radio"
      @click="selectOption(option.value)"
      :class="{ selected: selectedValue === option.value }"
    >
      <div class="radio-circle"></div>
      <span>{{ option.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps<{
  options: { value: string; text: string }[];
  modelValue?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const selectedValue = ref(props.modelValue || '');

function selectOption(value: string) {
  selectedValue.value = value;
  emit('update:modelValue', value);
}

watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue;
});
</script>

<style scoped>
.custom-radio-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.custom-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 20px;
  border: 1px solid #333333;
  border-radius: 4px;
  transition: border-color 0.3s, transform 0.2s;
}

.custom-radio:hover {
  border-color: #A568C7;
  transform: scale(1.05);
}

.radio-circle {
  width: 15px;
  height: 15px;
  border: 1px solid #4a90e2;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  transition: background-color 0.3s;
}

.selected .radio-circle {
  background-color: #4a90e2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.selected {
  border-color: #4a90e2;
}
</style>
