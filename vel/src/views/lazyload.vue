<template>
  <div class="lazy">
    <!-- 图片懒加载 -->
    <img v-for="img in list" v-lazy="img" />
  </div>
</template>

<script>
import alipayimg from '../assets/alipay.png';
export default {
  name: 'lazyload',
  data() {
    return {
      view:true,
      open:false,
      locked:false,
      alipayimg:alipayimg,
      list:[
        alipayimg,
        alipayimg,
        alipayimg,
        alipayimg,
        alipayimg,
        alipayimg,
        alipayimg,
        alipayimg
      ]
    }
  },
  mounted(){
  },
  methods: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.news {
  overflow: hidden;
}
.news__item {
    height: 80px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
.index {
  background-color: orange;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 200px;
}
.lazy {
  height: 100%;
}
.loading {
  width: 100%;
  height: 100px;
}
.seeview {
  display: none;
}
</style>
