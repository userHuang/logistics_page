import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require(['@/pages/home'], r),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/contact',
      component: r => require(['@/pages/contact'], r),
      meta: {
        keepAlive: false
      }
    }
  ]
})
