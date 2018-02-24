import Vue from 'vue'
import Vuex from 'vuex'
import UniversalModuleFactory from './modules/universal'

const CityItemModule = UniversalModuleFactory('cityItem')
const MapModule = UniversalModuleFactory('map')
const DomainModule = UniversalModuleFactory('domain.json')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search: [],
    pendingRequests: 0
  },
  modules: {
    cityItem: CityItemModule,
    map: MapModule,
    domain: DomainModule
  },
  getters: {
    loading (state) {
      return state.pendingRequests > 0
    },
    markers (state) {
      return state.cityItem.data.map(item => ({
        id: item.id,
        position: {
          lng: item.longitude,
          lat: item.latitude
        },
        infoText: item.name
      }))
    },
    domain (state) {
      return state.domain.data
    }
  },
  mutations: {
    search (state, payload) {
      state.search = payload
    },
    requestStarted (state) {
      state.pendingRequests += 1
    },
    requestCompleted (state) {
      state.pendingRequests -= 1
    }
  },
  actions: {
    async search ({commit, state, dispatch}, context) {
      let ctx = context.context
      await dispatch(ctx + '/fetch')
      let data = state[ctx].data.map(d => ({id: d.id, text: d.name}))
      commit('search', data)
    }
  }
})

export default store
