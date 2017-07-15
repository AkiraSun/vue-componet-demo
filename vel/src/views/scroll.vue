<template>
  <div class="home">
      <a class="link" @click="go">article</a>
    <section >
      <div class="myscroll" ref="myscroll">
        <ul>
          <li v-for="item in lilist">{{item}}</li>
        </ul>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data() {
    return {
      open:false,
      locked:false,
      jsScrollInstance: null,         // js滚动的实例，better-scroll实例
      lilist:[1,2,3,4,5,6,7,8,94,11,2,3,4,4,5,6,1,2,34,5,6,2,2,2,2]
    }
  },
  computed: {
    myscrollbox () {
      return this.$refs.myscroll
    }
  },
  mounted () {
    window.setTimeout(()=>{
      this.initJsScroll()
    },1000)
  },
  methods: {
    initJsScroll() {
      let JsScroll = require('better-scroll')
      let me = this
      if(typeof JsScroll !== 'undefined'){
        this.jsScrollInstance = new JsScroll(me.myscrollbox)
      }else {
        console.log('没有初始化');
      }
    },
    go(id) {
			this.$router.push({
				path: "article"
			});
		},
  }
}
</script>

<style lang="scss" scoped>
.link {
  margin-top: 30px;
  display: inline-block;
}
.home {
  background-color: red;
  width: 100%;
  height: 100%;
}
.myscroll {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
}
ul {
  width: 100%;
  position: absolute;
  text-align: left;
}
</style>
