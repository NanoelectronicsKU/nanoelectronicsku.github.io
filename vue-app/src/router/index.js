import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Research from '../views/Research.vue'
import Professor from '../views/Professor.vue'
import Members from '../views/Members.vue'
import Alumni from '../views/Alumni.vue'
import Publications from '../views/Publications.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/professor',
    name: 'Professor',
    component: Professor
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/alumni',
    name: 'Alumni',
    component: Alumni
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
