<template>
  <div class="article">
    <a class="link" @click="go">home</a>
    <button type="button" name="button" class="action-btn"@click="showAction">actionsheet</button>
    <Actionsheet :show="show"  v-on:hide="hideAction"/>
  </div>
</template>

<script>
import Actionsheet from '@/components/actionsheet.vue'
export default {
  name: 'article',
  data() {
    return {
      open:false,
      locked:false,
      show:false
    }
  },
  methods: {
    go(id) {
      // this.$router.push({
      //   path: "/"
      // });
      //进入首页
      this.$history.toRoot()
    },
    hideAction(){
      this.show = false;
      console.log(123);
    },
    showAction(){
      this.show = true;
    }
  },
  components:{
    'Actionsheet':Actionsheet
  }
}
</script>

<style lang="scss">
.link {
  margin-top: 30px;
  display: inline-block;
}
.article {
  background-color: blue;
  width: 100%;
  height: 100%;
}
.action-btn {
  font-size: 15px;
  background-color: red;
}
</style>
