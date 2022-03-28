import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import NotFound from '@/views/NotFound.vue'
// 위 대신해서 하단의 component: () = > import ~ 사용 가능

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
