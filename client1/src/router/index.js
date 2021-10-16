import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import News from '../components/News.vue'
import CreateNews from '../components/CreateNews.vue'
// import EditNews from '../components/EditNews.vue'
// import About from '../components/About.vue'
// import hero from "../components/hero.vue"

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/create',
    name: 'CreateNews',
    component: CreateNews
  },
  {
    path: '/edit/:id',
    name: 'EditNews',
    component: ()=>import("../components/EditNews.vue")
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // },
  // {
  //   path: '/hero',
  //   name: 'hero',
  //   component: hero
  // },

  // TArea
  // Agregar ruta para el componente CreateNews
  // Agregar ruta para el componente EditNews
  // {
  //   path: '/news/:id',
  //   name: 'EditNews',
  //   component: EditNews
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
