import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
          path: '/home',
          name: 'home',
        component: r => require.ensure([], () => r(require('@/home/home.vue')), 'home')
    },
    {
          path: '/test',
          name: 'test',
        component: r => require.ensure([], () => r(require('@/TestHello/TestHello.vue')), 'test')
    },
      {
          path: '/blackListMgmt',
          name: 'blackListMgmt',
          component: r => require.ensure([], () => r(require('@/blackListMgmt/blackListMgmt.vue')), 'blackListMgmt'),
      },
      {
          path: '/timeSet',
          name: 'timeSet',
          component: r => require.ensure([], () => r(require('@/timeSet/timeSet.vue')), 'timeSet'),
      },
      {
          path: '/reports',
          name: 'reports',
          component: r => require.ensure([], () => r(require('@/reports/reports.vue')), 'reports'),
      }
  ]
})
