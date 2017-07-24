<template>
  <div class="input">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h2>{{msg}}</h2>
    <h3>{{count}}</h3>
    <p>
      <button @click="add(4)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'input',
  data() {
    return {
      msg:'hello'
    }
  },
  computed:{
    ...mapState(['count']),
    // ...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

<style lang="scss">
.input {
  background-color: gray;
}
</style>
