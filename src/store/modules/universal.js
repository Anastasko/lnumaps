import API from '@/api'

export default function (path) {
  let api = API[path]
  return {
    namespaced: true,
    state: {
      fetched: false,
      data: []
    },
    mutations: {
      setData (state, data) {
        state.data = data
      },
      fetched (state) {
        state.fetched = true
      }
    },
    actions: {
      async fetch ({ commit, state }) {
        if (state.fetched) {
          return state.data
        }
        commit('fetched')
        let data = await api.findAll()
        commit('setData', data)
        return state.data
      },
      async find ({ commit, state }, id) {
        let data = await api.findOne(id)
        return data
      }
    }
  }
}
