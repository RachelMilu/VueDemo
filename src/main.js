import Vue from 'vue'
import VueAsyncData from 'vue-async-data'
import Router from 'vue-router'

import { sync } from 'vuex-router-sync'
import store from './vuex/store'


import App from './App'
import routerMap from './router'
//import {setterUrl, getterUrl} from './vuex/actions'

Vue.use(VueAsyncData)
Vue.use(Router)

const router = new Router()
routerMap(router)

sync(store, router)

router.start(App,'#root')


new Vue({
  el: 'body',
  components: {App}
})
