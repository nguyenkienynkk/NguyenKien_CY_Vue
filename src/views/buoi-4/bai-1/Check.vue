<template>
  <div class="check">{{ props.isChecked }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  isChecked: {
    type: String,
    required: true,
  },
})
</script>
<style scoped>
.check {
  color: red;
}
</style>
