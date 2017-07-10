// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import History from './history'
Vue.config.productionTip = false
var history = new History(router)
Vue.prototype.$history = history
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',created (){console.log(this.$history)},
  components: { App }
})
