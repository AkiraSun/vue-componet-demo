<template>
  <div class="flex">
    <div class="flex-cont">
      <div class="flex-item">
            123
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.flex-cont {
  display: flex;
  justify-content: center;
  .flex-item {
    background-color: red;
    width:100px;
    height: 50px;
    // flex:1;

  }
}
</style>
