import API from '@/api'
let api = API.cityItem

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    setData (state, data) {
      state.data = data
    }
  },
  actions: {
    async fetch ({ commit, state }) {
      let data = await api.findAll()
      commit('setData', data)
      return state.data
    }
  }
}
