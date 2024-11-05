<template>
  <div class="table-container">
    <table>
      <thead>
      <tr>
        <th v-if="showActionColumn">
          <CheckBoxTodoList v-model="selectAll" @update:modelValue="toggleSelectAll" />
        </th>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        <th v-if="showActionColumn">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableData" :key="item.id">
        <td v-if="showActionColumn">
          <CheckBoxTodoList v-model="item.isChecked" />
        </td>
        <td v-for="column in columns" :key="column.key">
          <template v-if="column.key === 'status'">
            <span :class="`status-tag status-${item.status}`">{{ item.status }}</span>
          </template>
          <template v-else>
            {{ item[column.key] }}
          </template>
        </td>
        <td v-if="showActionColumn">
          <slot name="action" :item="item"></slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'
import CheckBoxTodoList from '@/views/todo/CheckBoxTodoList.vue'

const props = defineProps<{
  tableData: { id: number; taskName: string; status: string; startDate: string; endDate: string; isChecked: boolean }[];
  columns: { key: string; label: string }[];
  showActionColumn: boolean;
}>()

const selectAll = ref(false)
const toggleSelectAll = () => {
  props.tableData.forEach(item => {
    item.isChecked = selectAll.value
  })
}
</script>

<style scoped>
.table-container {
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
  border-radius: 8px;
}

th {
  background: #F1F7F9;
  color: #333;
  font-size: 14px;
  padding: 10px 20px;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

td {
  padding: 12px 20px;
  text-align: left;
  background-color: #ffffff;
}

tr:hover td {
  background-color: #e0f0ff;
}

tr:nth-child(even) td {
  background-color: #f0f0f0;
}

.status-tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
}

.status-todo {
  background-color: #a0f3f3;
  color: blue;
}

.status-done {
  background-color: #bff5bf;
  color: green;
}

.status-reject {
  background-color: #f8c5c5;
  color: red;
}
</style>

