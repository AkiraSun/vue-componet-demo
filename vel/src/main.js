// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import History from './history'
import { setupPlatform } from './platform'
Vue.config.productionTip = false
const history = new History(router)

const platform = setupPlatform()
Vue.prototype.$history = history
Vue.prototype.$platform = platform
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',created (){
    console.log(this.$history)
    console.log(this.$platform)
  },
  components: { App }
})
