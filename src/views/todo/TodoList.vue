<template>
  <div class="container">
    <ButtonTodoList custom-color="green" @button-event-click="openAddModal">
      <template #default>Add Task</template>
    </ButtonTodoList>

    <ModalTodoList v-if="showModal" @close="closeAddModal" title="Add New Task">
      <template #default>
        <div class="modal-content">
          <InputTodoList v-model="newTask.taskName" placeholder="Task Name" />
          <input
            type="date"
            v-model="newTask.startDate"
            placeholder="Start Date"
            class="custom-input-date"
          />
          <input
            type="date"
            v-model="newTask.endDate"
            placeholder="End Date"
            class="custom-input-date"
          />
          <SelectTodoList
            :options="statusOptions"
            v-model="newTask.status"
            placeholder="Status"
          />
          <ButtonTodoList custom-color="blue" @button-event-click="addTask">
            <template #default>Add Task</template>
          </ButtonTodoList>
        </div>
      </template>
    </ModalTodoList>

    <!-- Modal Update Task -->
    <ModalTodoList v-if="showUpdateModal" @close="closeUpdateModal" title="Update Task">
      <template #default>
        <div class="modal-content">
          <InputTodoList v-model="updateTaskDetails.taskName" placeholder="Task Name" />
          <input
            type="date"
            v-model="updateTaskDetails.startDate"
            placeholder="Start Date"
            class="custom-input-date"
          />
          <input
            type="date"
            v-model="updateTaskDetails.endDate"
            placeholder="End Date"
            class="custom-input-date"
          />
          <SelectTodoList
            :options="statusOptions"
            v-model="updateTaskDetails.status"
            placeholder="Status"
          />
          <ButtonTodoList custom-color="blue" @button-event-click="updateTask">
            <template #default>Update Task</template>
          </ButtonTodoList>
        </div>
      </template>
    </ModalTodoList>

    <div class="search-filter">
      <div class="searchhh">
        <InputTodoList v-model="searchQuery" placeholder="Search Tasks" />
      </div>
      <div>
        <RadioTodoList :options="statusOptions" v-model="filterStatus" />
      </div>
    </div>

    <TableTodoList
      :columns="columns"
      :table-data="filteredTasks"
      show-action-column
    >
      <template #checkbox="{ item }">
        <CheckBoxTodoList v-model="item.isChecked" />
      </template>
      <template #action="{ item }">
        <ButtonTodoList @button-event-click="openUpdateModal(item)">
          <template #default>Update</template>
        </ButtonTodoList>
      </template>
    </TableTodoList>

    <ButtonTodoList
      custom-color="red"
      @button-event-click="deleteSelectedTasks"
    >
      <template #default>Delete Selected</template>
    </ButtonTodoList>
    <ButtonTodoList
      custom-color="red"
      @button-event-click="exportData"
    >
      <template #default>Export</template>
    </ButtonTodoList>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import InputTodoList from '@/views/todo/InputTodoList.vue'
import ButtonTodoList from '@/views/todo/ButtonTodoList.vue'
import CheckBoxTodoList from '@/views/todo/CheckBoxTodoList.vue'
import SelectTodoList from '@/views/todo/SelectTodoList.vue'
import TableTodoList from '@/views/todo/TableTodoList.vue'
import RadioTodoList from '@/views/todo/RadioTodoList.vue'
import ModalTodoList from '@/views/todo/ModalTodoList.vue'

const showModal = ref(false)
const showUpdateModal = ref(false)
const searchQuery = ref('')
const filterStatus = ref('all')
const newTask = reactive({
  taskName: '',
  startDate: '',
  endDate: '',
  status: 'todo',
})
const updateTaskDetails = reactive({
  id: null,
  taskName: '',
  startDate: '',
  endDate: '',
  status: 'todo',
})

const statusOptions = [
  { value: 'all', text: 'All' },
  { value: 'todo', text: 'Todo' },
  { value: 'done', text: 'Done' },
  { value: 'reject', text: 'Rejected' },
]

const tasks = ref([
  {
    id: 1,
    taskName: 'Buy groceries',
    status: 'todo',
    startDate: '2024-11-05',
    endDate: '2024-11-10',
    isChecked: false,
  },
  {
    id: 2,
    taskName: 'Walk the dog',
    status: 'done',
    startDate: '2024-10-30',
    endDate: '2024-10-30',
    isChecked: false,
  },
  {
    id: 3,
    taskName: 'Read a book',
    status: 'todo',
    startDate: '2024-11-10',
    endDate: '2024-11-15',
    isChecked: false,
  },
])

const columns = [
  { key: 'taskName', label: 'Task Name' },
  { key: 'status', label: 'Status' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'endDate', label: 'End Date' },
]

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const matchesQuery = task.taskName
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesStatus =
      filterStatus.value === 'all' || task.status === filterStatus.value
    return matchesQuery && matchesStatus
  })
})

const openAddModal = () => {
  console.log('Opening Add Modal...')
  showModal.value = true
}

const closeAddModal = () => {
  showModal.value = false
}

const closeUpdateModal = () => {
  showUpdateModal.value = false
}

const openUpdateModal = (item) => {
  console.log('Opening Update Modal for:', item)
  updateTaskDetails.taskName = item.taskName
  updateTaskDetails.startDate = item.startDate
  updateTaskDetails.endDate = item.endDate
  updateTaskDetails.status = item.status
  showUpdateModal.value = true
}

const addTask = () => {
  console.log('Adding task:', newTask)
  if (newTask.taskName && newTask.startDate && newTask.endDate && newTask.status) {
    tasks.value.push({
      id: tasks.value.length + 1,
      ...newTask,
      isChecked: false,
    });
    closeAddModal();
    newTask.taskName = '';
    newTask.startDate = '';
    newTask.endDate = '';
    newTask.status = 'todo';
  }
}
function exportData(){
  alert('Data')
}
const updateTask = () => {
  const task = tasks.value.find(task => task.taskName === updateTaskDetails.taskName);
  if (task) {
    task.taskName = updateTaskDetails.taskName;
    task.startDate = updateTaskDetails.startDate;
    task.endDate = updateTaskDetails.endDate;
    task.status = updateTaskDetails.status;
    console.log('Task updated:', task);
    closeUpdateModal();
  }
}

const deleteSelectedTasks = () => {
  tasks.value = tasks.value.filter(task => !task.isChecked)
}
</script>

<style scoped>
.container {
  padding: 40px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.5s ease;
  animation: backgroundAnimation 10s infinite alternate;
}

@keyframes backgroundAnimation {
  0% {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  50% {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
  }
  100% {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-3px);
}

button:active {
  transform: translateY(1px);
}

.custom-input-date, .search-filter input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
}

.custom-input-date:hover, .search-filter input:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

table:hover {
  transform: scale(1.02);
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  transition: background-color 0.3s ease;
}

th {
  background-color: rgba(118, 74, 162, 0.9);
  color: #fff;
}

tr:nth-child(even) td {
  background-color: rgba(245, 245, 245, 0.8);
}

tr:hover td {
  background-color: rgba(204, 204, 255, 0.8);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transform: scale(0.9);
  opacity: 0;
  animation: fadeInModal 0.4s forwards;
}

@keyframes fadeInModal {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-content button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.modal-content button:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.search-filter {
  display: flex;
  gap: 10px;
  margin: 50px;
  justify-content: center;
}

.searchhh {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>

