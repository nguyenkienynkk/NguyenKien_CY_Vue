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
            {{ item.status }} <!-- Chỉ hiển thị status như một chuỗi văn bản -->
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
/* Gradient nền cho toàn bộ container */
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
  font-size: 18px;
}

th {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 20px;
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

</style>

