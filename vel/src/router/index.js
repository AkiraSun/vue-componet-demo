import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import scroll from '@/views/scroll'
import article from '@/views/article'
import index from '@/views/index'
import lazy from '@/views/lazy'
import lazyload from '@/views/lazyload'
import animation from '@/views/animation'
import bus from '@/views/bus'
import input from '@/views/input'
import vuex from '@/views/vuex'
import flex from '@/views/flex'

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
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: lazyload
    },
    {
      path: '/animation',
      name: 'animation',
      component: animation
    },
    {
      path: '/bus',
      name: 'bus',
      component: bus
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    }
  ]
})
