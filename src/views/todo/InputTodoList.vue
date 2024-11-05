<template>
  <div class="input-container">
    <label class="input-label">
      <input
        type="text"
        v-model="refInput"
        placeholder=""
      />
      <span class="placeholder">{{ placeholder }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
const refInput = defineModel();
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  data: {
    type:String,
    default: '',
  }
});


</script>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-label {
  position: relative;
  width: 100%;
  max-width: 300px;
}

input {
  width: 100%;
  padding: 8px 15px;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
  background-color: #f9f9f9;
}

input:focus {
  outline: none;
  background-color: #ffffff;
}

input:hover {
  border-color: #bbb;
}

input::placeholder {
  color: transparent;
}

.placeholder {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s ease all;
}

input:focus + .placeholder,
input:not(:placeholder-shown) + .placeholder {
  top: -8px;
  left: 12px;
  font-size: 0.85rem;
  color: #3b82f6;
  background: #ffffff;
  padding: 0 4px;
  border-radius: 4px;
}

input:disabled {
  background-color: #f2f2f2;
  color: #999;
  cursor: not-allowed;
}
</style>
