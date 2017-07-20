<template>
  <div class="segument">
    <button type="button" class="segument-btn" name="button">segument</button>
  </div>
</template>

<script>
export default {
  name: 'segument',
  data() {
    return {

    }
  },
  mounted(){
  },
  methods: {
    print(value) {
      console.log(value)
    }
  },
  created(){
    this.$root.Bus.$on('gridtest', value => {
      this.print(value)
    })
  },
  // 在组件销毁时别忘了解除事件绑定
   beforeDestroy() {
      this.$root.Bus.$off('gridtest')
   },
}
</script>

<style lang="scss">
.segument {
  background-color: blue;
  text-align: center;
}
.segument-btn {
  vertical-align: middle;
  background-color: red;
  height: 20px;
}
</style>
