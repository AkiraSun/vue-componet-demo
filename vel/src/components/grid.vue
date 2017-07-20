<template>
  <div class="grid-sub">
    <button @click="gridsub" type="button" class="grid-btn" name="button">grid</button>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data() {
    return {

    }
  },
  mounted(){

  },
  methods: {
    gridsub() {
      this.$root.Bus.$emit('gridtest', 'gridgridgridgrid')
    }
  },
  created() {
  },
}
</script>

<style lang="scss">
.grid-sub {
  background-color: orange;
  text-align: center;
}
.grid-btn {
  vertical-align: middle;
  background-color: red;
  height: 20px;
}
</style>
