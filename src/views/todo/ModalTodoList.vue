<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <header class="modal-header">
        <h2>{{ props.title }}</h2>
        <button @click="closeModal" class="close-button">✖</button>
      </header>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Modal Title',
  },
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<style scoped>
 .modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.7);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
 }

.modal-content {
  background: white;
  padding: 20px;
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 10px;
}

.modal-content button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s;
}

.modal-content button:hover {
  background-color: #3b7dd8;
}

.modal-content input,
.modal-content select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  transition: border-color 0.3s;
}

.modal-content input:focus,
.modal-content select:focus {
  border-color: #4a90e2;
}

@media (max-width: 500px) {
  .modal-content {
    width: 95%;
    padding: 15px;
  }
}

</style>
