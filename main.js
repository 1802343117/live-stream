import Vue from 'vue'
import App from './App'

import $H from './common/request.js'
Vue.prototype.$H = $H

//引入Vuex并挂载在Vue原型上，使用的时候:this.$store
import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
