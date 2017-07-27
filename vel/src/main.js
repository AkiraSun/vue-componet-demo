// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import History from './lib/utils/history'
import vmLog from 'vm-log'
import { setupPlatform } from './lib/utils/platform'
import { setupConfig } from './lib/utils/config'

//components

//vuexxxx
import store from './vuex/index'
Vue.config.productionTip = false
const history = new History(router)
const platform = setupPlatform()
const config = setupConfig(platform)
Vue.prototype.$config = config
Vue.prototype.$history = history
Vue.prototype.$platform = platform
// Vue.prototype.$actionSheet = ActionSheet
// use options
Vue.use(VueLazyload)


if(process.env.NODE_ENV == 'development'){
  // Vue.use(vmLog)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  created (){
    console.log(this.$history)
    // console.log(this.$platform)
    console.log(this.$root);
  },
  data: {
    //用于非父子组件通信，bus是中央事件总线
    Bus: new Vue()
  },
  components: { App }
})
