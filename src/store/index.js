import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 7
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    async fetchMaps () {
      let maps = await api['map'].findAll()
      console.log(maps)
    }
  }
})

export default store
