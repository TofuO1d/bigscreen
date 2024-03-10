import {
  createRouter,
  createWebHistory
  // createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BigScreenView from '../views/BigScreenView.vue'
const router = createRouter({
  // history:createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/big-screen',
      component: HomeView
    },
    {
      path: '/big-screen',
      name: 'big-screen',
      component: BigScreenView
    }
  ]
})

export default router
