import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Components from '@/components/Components'
import City from '@/components/City'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/city',
      component: City
    }, {
      path: '/components',
      component: Components
    }, {
      path: '*',
      component: PageNotFound
    }
  ]
})
