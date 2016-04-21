import {
  SET_URL
} from '../mutation-types'

const state = {
  url: ''
}

const mutations = {
  [SET_URL](state, str) {
    state.title = str
  }
}

export default {
  state,
  mutations
}

