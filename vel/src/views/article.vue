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

</style>
