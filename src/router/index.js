import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import home from '@/components/index/home'            // 首页
import strategy from '@/components/strategy/index'    // 攻略
import handbook from '@/components/handbook/index'    // 图鉴
import active from '@/components/active/index'        // 活动
import compose from '@/components/compose/index'      // 信息修改
import search from '@/components/search/index'        // 搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/strategy',
          name: 'strategy',
          component: strategy
        },
        {
          path: '/handbook',
          name: 'handbook',
          component: handbook
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
