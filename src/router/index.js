import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Controls from '@/components/Controls'
import City from '@/components/City'
import CityItemForm from '@/components/forms/CityItemForm'
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
      path: '/cityItem/:id',
      component: CityItemForm
    }, {
      path: '/controls',
      component: Controls
    }, {
      path: '*',
      component: PageNotFound
    }
  ]
})
