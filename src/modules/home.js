import {
  HOME_TITLE
} from '../vuex/mutation-types'

const state = {
  title: 'default'
}

const mutations = {
  [HOME_TITLE](statr, newTitle) {
    state.title = newTitle
  }
}

export default {
  state,
  mutations
}
