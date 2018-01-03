import Vue from 'vue'
import Router from 'vue-router'
import active from '@/components/active/index'
import compose from '@/components/compose/index'
import index from '@/components/index/index'
import search from '@/components/search/index'
import strategy from '@/components/strategy/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/compose',
      name: 'compose',
      component: compose
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: strategy
    }
  ]
})
