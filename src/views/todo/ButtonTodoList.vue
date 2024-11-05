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
    default: 'linear-gradient(135deg, #6a11cb, #2575fc)',
  },
})
</script>

<style scoped>
button {
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,151,255,0.31985294117647056) 77%);
  transition: all 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  font-weight: 600;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.06);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

button:focus {
  outline: none;
  box-shadow: 0px 0px 0px 4px rgba(98, 0, 234, 0.4);
}

button:active {
  transform: scale(0.97);
}
</style>
