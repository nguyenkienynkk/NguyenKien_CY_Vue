import { computed, ref } from 'vue'

const counter = ref(0)
const counterDouble = computed({
  get() {
    return counter.value * 2
  },
})
export default counterDouble
