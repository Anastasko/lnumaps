import Vue from 'vue'
import Router from 'vue-router'
import MapView from '@/components/MapView'
import Controls from '@/components/Controls'
import City from '@/components/City'
import CityItemForm from '@/components/forms/CityItemForm'
import PageNotFound from '@/components/PageNotFound'
import Maps from '@/components/Maps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      alias: '/',
      path: '/city',
      component: City
    }, {
      name: 'city',
      path: '/city/:id',
      component: City
    }, {
      path: '/corps',
      component: Maps
    }, {
      path: '/map/:id/view',
      component: MapView
    }, {
      alias: '/cityItem/create',
      path: '/cityItem/edit/:id',
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
