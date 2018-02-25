import Vue from 'vue'
import Vuex from 'vuex'
import UniversalModuleFactory from './modules/universal'

const CityItemModule = UniversalModuleFactory('cityItem')
const MapModule = UniversalModuleFactory('map')
const DomainModule = UniversalModuleFactory('domain.json')
const ItemKindModule = UniversalModuleFactory('itemKind')
const AndroidIconModule = UniversalModuleFactory('androidIcon')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showSearch: false,
    searchSelected: null,
    search: [],
    pendingRequests: 0
  },
  modules: {
    cityItem: CityItemModule,
    map: MapModule,
    domain: DomainModule,
    itemKind: ItemKindModule,
    androidIcon: AndroidIconModule
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
        infoText: item.name,
        kind: item.kind
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
    },
    'search-box-selected': function (state, item) {
      state.searchSelected = item
    },
    toggleSearch (state) {
      state.showSearch = !state.showSearch
    },
    hideSearch (state) {
      state.showSearch = false
    }
  },
  actions: {
    async search ({commit, state, dispatch}, context) {
      commit('hideSearch')
      let ctx = context.context
      await dispatch(ctx + '/fetch')
      let data = state[ctx].data.map(d => ({id: d.id, text: d.name}))
      commit('search', data)
    }
  }
})

export default store
