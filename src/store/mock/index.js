import Vue from 'vue'
import Vuex from 'vuex'
import CityItemModule from './modules/cityItem'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search: []
  },
  modules: {
    cityItem: CityItemModule
  },
  getters: {
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
