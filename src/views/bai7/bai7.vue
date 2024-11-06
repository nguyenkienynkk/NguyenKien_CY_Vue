<template>
  <div id="app" class="flex h-screen">
    <Sidebar />
    <div class="flex-1">
      <MainContent :notes="notes" @selectNote="setSelectedNote" />
      <NoteDetail v-if="selected" :note="selected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/views/bai7/SideBar.vue'
import MainContent from '@/views/bai7/MainContent.vue'
import NoteDetail from '@/views/bai7/PostDetail.vue'
import { ref } from 'vue'

const selected = ref(null)

const notes = [
  { id: 1, title: 'My school notes that need to be sorted', color: '#d9aef9', detail: 'Details...' },
  { id: 2, title: 'Funny jokes', color: '#afffea', detail: 'Details...' },
  { id: 3, title: 'Travel bucket list', color: '#b3e5fc', detail: 'This is my detail' },
  { id: 4, title: 'Random cooking ideas', color: '#fff9c4', detail: 'Detail description function relative' },
  { id: 5, title: 'Album to listen', color: '#ffc1e3', detail: 'Change perform display' },
  { id: 6, title: 'Shopping list', color: '#b3e5fc', detail: 'This is note pate' },
  { id: 7, title: 'Books to listen', color: '#d9aef9', detail: 'No he is im post' },
  { id: 8, title: 'Books ref mis run time', color: '#afffea', detail: 'No he is im post' },
  { id: 9, title: 'Books to location res', color: '#fff9c4', detail: 'No he is im post' },
]

function setSelectedNote(note) {
  selected.value = note
}
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
}
</style>
