import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import CityItemModule from './modules/cityItem'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search: [],
    pendingRequests: 0
  },
  modules: {
    cityItem: CityItemModule
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
    },
    async fetchMaps () {
      let maps = await api['map'].findAll()
      console.log(maps)
    }
  }
})

export default store
