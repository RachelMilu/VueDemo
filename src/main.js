import Vue from 'vue'
import VueAsyncData from 'vue-async-data'
import Router from 'vue-router'
import App from './App'

import routerMap from './router'

Vue.use(VueAsyncData)
Vue.use(Router)

const router = new Router()
routerMap(router)
router.start(App,'#root')


new Vue({
  el: 'body',
  components: {App}
})
