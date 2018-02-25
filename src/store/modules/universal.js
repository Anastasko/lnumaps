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
      async find ({ commit, state }, item) {
        if (!item) {
          throw new Error('provide id for find.')
        }
        if ((typeof item === 'number') || (typeof item === 'string')) {
          item = {id: item}
        }
        if (!item.id) {
          throw new Error('provide item.id for find.')
        }
        let cached = state.data.find(i => i.id === item.id)
        if (cached) {
          return cached
        }
        let data = await api.findOne(item.id)
        return data
      }
    }
  }
}
