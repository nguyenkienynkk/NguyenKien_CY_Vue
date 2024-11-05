import { get, post } from '@/service/service.js'

function login(payload) {
  return post('/login', payload)
}

function getLoggedUser() {
  return get('/user')
}

export const userService = {
  login,
  getLoggedUser,
}
