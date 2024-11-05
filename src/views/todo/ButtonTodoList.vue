<template>
  <div>
    <button :style="{ backgroundImage: props.customGradient }" @click="emitClickEvent">
      <slot name="default"></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const emitEvent = defineEmits(['buttonEventClick'])

function emitClickEvent() {
  emitEvent('buttonEventClick')
}

const props = defineProps({
  customGradient: {
    type: String,
  },
})
</script>

<style scoped>
button {
  font-size: 12px;
  font-weight: bold;
  padding: 8px 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.06);
}

button:focus {
  outline: none;
  box-shadow: 0px 0px 0px 4px rgba(98, 0, 234, 0.4);
}

button:active {
  transform: scale(0.97);
}
</style>
