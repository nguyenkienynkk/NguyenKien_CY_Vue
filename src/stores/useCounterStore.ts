import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const data = {
    count: ref(0),
    doubleCount: computed(() => count.value * 2),
    increment: () => {
      count.value++
    },
  }
  return { ...data }
})
