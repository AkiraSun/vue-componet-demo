<template>
  <div class="index">
    <a class="link" @click="go">index</a>
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
        path: "scroll"
      });

    },
  }
}
</script>

<style lang="scss">
.link {
  margin-top: 30px;
  display: inline-block;
}
.index {
  background-color: yellow;
  width: 100%;
  height: 100%;
}
</style>
