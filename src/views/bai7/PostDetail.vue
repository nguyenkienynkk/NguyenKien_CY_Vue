<template>
  <div class="note-detail p-8 bg-white rounded-xl mx-auto mt-10 max-w-4xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
    <h2 class="text-5xl font-extrabold text-indigo-600 tracking-wide">{{ note.title }}</h2>
    <p class="mt-6 text-lg text-gray-700">{{ note.detail }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const note = ref(null)

const notes = [
  { id: 1, title: 'My school notes that need to be sorted', color: '#d9aef9', detail: 'Details...' },
  { id: 2, title: 'Funny jokes', color: '#afffea', detail: 'Details...' },
  { id: 3, title: 'Travel bucket list', color: '#b3e5fc', detail: 'This is my detail' },
  { id: 4, title: 'Random cooking ideas', color: '#fff9c4', detail: 'Detail description function relative' },
  { id: 5, title: 'Album to listen', color: '#ffc1e3', detail: 'Change perform display' },
  { id: 6, title: 'Shopping list', color: '#b3e5fc', detail: 'This is note pate' },
  { id: 7, title: 'Books to listen', color: '#d9aef9', detail: 'No he is im post' },
]

watch(
  () => route.params.id,
  (newId) => {
    const noteId = Number(newId)
    note.value = notes.find((n) => n.id === noteId)
  },
  { immediate: true }
)
</script>

<style scoped>
.note-detail {
  padding: 32px;
  background-color: #fff;
  border-radius: 15px;
  color: #211946;
  font-size: 1.25rem;
  max-width: 700px;
  margin: 30px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.note-detail:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #4c51bf;
  letter-spacing: 1px;
  line-height: 1.3;
}

p {
  margin-top: 20px;
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.6;
}

h2, p {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
