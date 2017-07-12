<template>
  <div class="article">
    <a class="link" @click="go">home</a>
  </div>
</template>

<script>
export default {
  name: 'article',
  data() {
    return {
      open:false,
      locked:false
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
</style>
