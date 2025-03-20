import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('/AirBnb/Frontend/dist/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'auth' }
    },
    {
      path: '/detalles/:id',
      name: 'Detalles',
      component: DetalleView,
      params: {
        id: String
      }
    }
  ],
})

export default router
