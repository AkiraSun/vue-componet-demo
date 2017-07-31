//单例模块学习  对应input.vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1
}

//同步方法
const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state){
    state.count--
  }
}

//vuex内部过滤器,在执行action之前先执行getters
const getters = {
  count:state=>state.count+=100
}

//action可以异步触发mutations
const actions = {
  addAction(context){
    context.commit('add',12)
    setTimeout(()=>{
      context.commit('reduce')
    },2000)
  },
  reduceAction({commit}){
    commit('reduce')
  }
}
export default new Vuex.Store({
	state,
  mutations,
  getters,
  actions
})
