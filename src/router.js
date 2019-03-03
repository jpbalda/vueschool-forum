import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ForumShow from '@/views/ForumShow'
import ThreadShow from '@/views/ThreadShow'
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
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
