<template>
  <div class="vuex">
    <button @click="loginIn">login in</button>
    <button @click="loginOut">login out</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'vuex',
  data() {
    return {

    }
  },
  mounted(){
    // console.log(this.$store);
    //可以用dispatch直接来触发action
    this.$store.dispatch('loginStatu')
  },
  methods: {
    //...语法糖方便多种一起写
    ...mapActions(['loginIn','loginOut'])
  }
}
</script>

<style lang="scss">
// @import "../style/style";
  .vuex {
    background-color: gray;
    font-size: 0;
    button {
      background-color: blue;
      font-size: 50px;
      width: 250px;
      height: 100px;
    }
  }
</style>
