import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

import result from './modules/result'
import share from  './modules/share'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false


export default new Vuex.Store({
  modules: {
    result,
    share
  },
  middlewares,
  strict:debug
})
