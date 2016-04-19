import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
  url: ''
}

const mutations = {
  setterUrl: function (state,str) {
    state.url = location.origin + "?code=" + str
  },
  getterUrl: function (state) {
    return state.url
  }
}


Vue.config.debug = true
const debug = process.env.NODE_ENV != 'production'

export default new Vuex.Store({
  state,
  mutations,
  strict:debug,
  moddlewares: debug ? [createLogger()] : []
})
