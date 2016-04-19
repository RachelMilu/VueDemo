'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home.vue')
    },
    'result': {
      name: 'result',
      component: function (resolve) {
        require(['./components/Result.vue'], resolve)
      }
    },
    'create': {
      name: 'create',
      component: function (resolve) {
        require(['./components/CreateVote.vue'], resolve)
      }
    },
    'share': {
      name: 'share',
      component: function (resolve) {
        require(['./components/Share.vue'], resolve)
      }
    }

  })
}
