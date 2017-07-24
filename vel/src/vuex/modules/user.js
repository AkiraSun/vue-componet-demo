/**
* 用户配置  模块化写法  文件module,index.js,vuex.vue,main.js倒入
* 例子  https://github.com/hzzly/xyy-vue
**/

const state = {
  loginStatus:true
}

const mutations = {
  loginIn(state){
    state.loginStatus = true
    console.log(state.loginStatus)
  },
  loginOut(state){
    state.loginStatus = false
    console.log(state.loginStatus)
  },
  loginStatu(state){
    console.log('登陆状态',state.loginStatus);
  }
}

const actions = {
  loginIn({commit}){
    commit('loginIn')
  },
  loginOut({commit}){
    commit('loginOut')
  },
  loginStatu({commit}){
    commit('loginStatu')
  }
}

export default {
  state,
  mutations,
  actions
}
