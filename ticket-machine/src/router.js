import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './pages/Index.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
      { path: '/', component: Index },
      { path: '/hello-world', component: HelloWorld },
    ],
})

