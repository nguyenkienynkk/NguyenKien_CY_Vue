<template>
  <div class="register-form">
    <h2>Đăng Ký</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Tên:</label>
        <input type="text" v-model="name" id="name" />
        <p v-if="nameError" class="error">{{ nameError }}</p>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" />
        <p v-if="emailError" class="error">{{ emailError }}</p>
      </div>

      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input type="password" v-model="password" id="password" />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>
      </div>

      <button type="submit" :disabled="!isFormValid" class="submit-button">Đăng Ký</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const nameError = ref('')
const emailError = ref('')
const passwordError = ref('')

const validateEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

const submitForm = () => {
  if (isFormValid.value) {
    alert('Đăng ký thành công!')
    name.value = ''
    email.value = ''
    password.value = ''
    nameError.value = ''
    emailError.value = ''
    passwordError.value = ''
  }
}

const validateForm = () => {
  nameError.value = name.value ? '' : 'Vui lòng nhập tên.'
  emailError.value = validateEmail(email.value) ? '' : 'Email không hợp lệ.'
  passwordError.value = password.value.length >= 6 ? '' : 'Mật khẩu phải có ít nhất 6 ký tự.'
}

const isFormValid = computed(() => {
  return !nameError.value && !emailError.value && !passwordError.value
})

watch([name, email, password], () => {
  validateForm()
})
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007BFF;
  outline: none;
}

.error {
  color: red;
  font-size: 0.85em;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-1px);
}
</style>
