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
      this.$router.push({
        path: "article"
      });
    },
  }
}
</script>

<style lang="less">
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
