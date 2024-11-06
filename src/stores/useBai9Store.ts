import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBai9Store = defineStore('useBai9Store', () => {
  const events = ref([])

  function addEvent(event) {
    events.value.push(event)
  }

  function updateEvent(index, updatedEvent) {
    events.value[index] = updatedEvent
  }

  function deleteEvent(index) {
    events.value.splice(index, 1)
  }

  function getEventsByDate(date) {
    return events.value.filter(event => event.date === date)
  }

  return {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    getEventsByDate,
  }
})
