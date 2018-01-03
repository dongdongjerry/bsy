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
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/strategy',
          name: 'strategy',
          component: strategy
        },
        {
          path: '/compose',
          name: 'compose',
          component: compose
        },
        {
          path: '/active',
          name: 'active',
          component: active
        }
      ]
    }, 
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
