import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import Students from './views/Students.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/students', name: 'Students', component: Students }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
