<script setup lang="ts">
const props = defineProps({
  isChecked: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="check">{{props.isChecked}}</div>
</template>

<style scoped>
.check {
  color: red;
}
</style>
