import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  const inputValue = ref('')

  function setInputvalue(input) {
    inputValue.value = input
  }


  return { count, doubleCount, increment, inputValue,setInputvalue }
})
