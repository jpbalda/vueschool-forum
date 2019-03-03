import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CategoryShow from '@/views/CategoryShow'
import ForumShow from '@/views/ForumShow'
import ThreadShow from '@/views/ThreadShow'
import Profile from '@/views/Profile'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'CategoryShow',
      component: CategoryShow,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'ForumShow',
      component: ForumShow,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {
        edit: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
