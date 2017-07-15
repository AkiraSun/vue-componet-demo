import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import scroll from '@/views/scroll'
import article from '@/views/article'
import index from '@/views/index'
import lazy from '@/views/lazy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: lazy
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
