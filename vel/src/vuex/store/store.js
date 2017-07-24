import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1
}
const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state){
    state.count--
  }
}

const getters = {
  count:state=>state.count+=100
}

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
