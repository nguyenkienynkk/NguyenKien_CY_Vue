<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="data.email" name="email" />
      <hr />
      <br>
      <input type="password" v-model="data.password" name="password" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { userService } from '@/service/userService'

const data = reactive({
  email: '',
  password: ''
})

async function submit() {
  try {
    const response = await userService.login({
      email: data.email,
      password: data.password
    })
    // localStorage.setItem('token',response)
    localStorage.setItem('token',response.token)
    alert('DDang nhap thanh cong')
  }catch (e) {
    console.error(e)
   alert('Falied')
  }
}
</script>

<style scoped>
input {
  border: solid red 1px;
}
</style>
