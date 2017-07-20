<template>
  <div class="animation">
    <div class="more">></div>
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

  }
}
</script>

<style lang="scss">

.animation {
  background-color: blue;
  width: 100%;
  height: 100%;
}
.more {
  font-family: Arial;
  font-size: 50px;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 30px;
  height: 60px;
  transform: rotate(90deg);
  text-align: center;
  animation:down 1s linear .3s infinite alternate;
  @keyframes down{
    from{bottom:30px;}
    to{bottom:5px;}
  }
}
</style>
