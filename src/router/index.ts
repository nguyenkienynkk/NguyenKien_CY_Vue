import { createRouter, createWebHistory } from 'vue-router'
import InputTodoList from '@/views/todo/InputTodoList.vue'
import ButtonTodoList from '@/views/todo/ButtonTodoList.vue'
import ButtonTableTodoList from '@/views/todo/ButtonTableTodoList.vue'
import CheckBoxTodoList from '@/views/todo/CheckBoxTodoList.vue'
import DropdownTodoList from '@/views/todo/DropdownTodoList.vue'
import RadioTodoList from '@/views/todo/RadioTodoList.vue'
import SelectTodoList from '@/views/todo/SelectTodoList.vue'
import TableTodoList from '@/views/todo/TableTodoList.vue'
import MainTodoList from '@/views/todo/MainTodoList.vue'
import TodoList from '@/views/todo/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
    {
      path: '/input',
      name: 'input',
      component: InputTodoList,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonTodoList,
    },
    {
      path: '/button-table',
      name: 'button-table',
      component: ButtonTableTodoList,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckBoxTodoList,
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropdownTodoList,
    },
    {
      path: '/radio',
      name: 'radio',
      component: RadioTodoList,
    },
    {
      path: '/select',
      name: 'select',
      component: SelectTodoList,
    },
    {
      path: '/table',
      name: 'table',
      component: TableTodoList,
    },
    {
      path: '/main',
      name: 'main',
      component: MainTodoList,
    }
  ],
})

export default router
