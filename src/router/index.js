import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import lizi from '@/views/lizi.vue'
import Counter from '@/components/Counter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/lizi',
      name: 'lizi',
      component: lizi
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Search
    }
  ]
})