<template>
  <div class="home">
    <a class="link" @click="go">article</a>
  </div>
</template>

<script>
export default {
  name: 'home',
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
.home {
  background-color: red;
  width: 100%;
  height: 100%;
}
</style>
