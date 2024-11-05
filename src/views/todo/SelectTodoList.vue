<template>
  <div class="custom-select">
    <div class="selected" @click="toggleDropdown">
      {{ selectedText || 'Select an option' }}
      <span class="arrow" :class="{ 'fa-chevron-up': isOpen, 'fa-chevron-down': !isOpen }" aria-hidden="true"></span>
    </div>
    <div v-if="isOpen" class="options">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="option"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from 'vue'
const props = defineProps<{
  options: { value: string; text: string }[];
  modelValue?: string;
}>();

const emit = defineEmits(['update:modelValue', 'emitSelectChange']);

const selected = ref(props.modelValue || '');
const isOpen = ref(false);

const selectedText = computed(() => {
  const selectedOption = props.options.find(option => option.value === selected.value);
  return selectedOption ? selectedOption.text : '';
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option: { value: string; text: string }) {
  selected.value = option.value;
  emit('emitSelectChange', option.value);
  emit('update:modelValue', option.value);
  isOpen.value = false;
}

watch(() => props.modelValue, (newValue) => {
  selected.value = newValue;
});
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
}

.selected:hover {
  border-color: #357ab8;
  background-color: #e7f3ff;
}

.arrow {
  margin-left: 10px;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  transition: transform 0.3s ease;
}

.options {
  position: absolute;
  z-index: 1000;
  width: 100%;
  background-color: white;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  max-height: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease;
  bottom: 100%;
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.option {
  padding: 10px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

.option:hover {
  background-color: #e0f0ff;
  font-weight: bold;
}
</style>
