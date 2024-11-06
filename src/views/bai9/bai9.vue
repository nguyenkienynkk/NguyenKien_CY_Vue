<template>
  <div class="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Danh sách sự kiện</h2>

    <button
      @click="showAddEventModal"
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
    >
      Thêm sự kiện mới
    </button>

    <div v-for="(event, index) in events" :key="index" class="bg-gray-100 p-3 rounded-lg mb-2 flex justify-between items-center">
      <div>
        <p class="font-semibold text-gray-700">{{ event.date }} - {{ event.time }} - {{ event.title }}</p>
      </div>
      <div class="flex space-x-2">
        <button @click="editEvent(index)" class="text-blue-500 hover:text-blue-700">Sửa</button>
        <button @click="deleteEvent(index)" class="text-red-500 hover:text-red-700">Xóa</button>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          {{ editingIndex !== null ? 'Sửa' : 'Thêm' }} sự kiện
        </h3>

        <input
          v-model="newEvent.date"
          type="date"
          placeholder="Chọn ngày"
          class="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="newEvent.time"
          type="time"
          placeholder="Thời gian"
          class="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="newEvent.title"
          placeholder="Tên sự kiện"
          class="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div class="flex justify-end space-x-2">
          <button @click="closeModal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Hủy</button>
          <button @click="saveEvent" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBai9Store } from '@/stores/useBai9Store.js'

const eventStore = useBai9Store()
const isModalOpen = ref(false)
const newEvent = ref({ title: '', time: '', date: '' })
const editingIndex = ref(null)

const events = ref(eventStore.events)

function showAddEventModal() {
  isModalOpen.value = true
  editingIndex.value = null
  newEvent.value = { title: '', time: '', date: '' }
}

function saveEvent() {
  if (editingIndex.value !== null) {
    eventStore.updateEvent(editingIndex.value, { ...newEvent.value })
  } else {
    eventStore.addEvent({ ...newEvent.value })
  }
  closeModal()
}

function editEvent(index) {
  editingIndex.value = index
  newEvent.value = { ...events.value[index] }
  isModalOpen.value = true
}

function deleteEvent(index) {
  eventStore.deleteEvent(index)
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<style scoped></style>
