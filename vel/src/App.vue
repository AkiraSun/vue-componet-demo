<template>
  <div id="app">
    <header class="header">
      <i class="iconfont icon-ic_menu" @click="toggle"></i>
    </header>
    <aside class="aside" :class="{open:open,locked:locked}" @click="toggle()">
      <ul class="">
        <li>首页</li>
        <li>首页</li>
      </ul>
      <div class="cover"></div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      open:false,
      locked:false
    }
  },
  methods: {
    toggle(){
      if(!this.open){
        this.open = true
        this.locked = true
      }else {
        this.open = false
        let me = this
        setTimeout(function(){
          me.locked = false
        },300)

      }
    }
  }
}
</script>

<style lang="less">
  .header {
    width: 100%;
    height: 56px;
    z-index: 9;
    position: fixed;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.51) 95%);
    .iconfont {
			color: #fff;
			font-size: 32px;
			top: 0;
      left: 20px;
			position: relative;
		}
  }
  .aside {
    z-index: 11;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		position: fixed;
		visibility: hidden;
    .cover {
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(172, 185, 201, 0.40);
      transition: opacity 0.3s ease;
    }
    &.open {
      ul {
				transform: translate(0);
			}
    }
    &.locked {
      visibility: visible;
      .cover {
        display: block;
      }
    }
    ul {
      z-index: 12;
      margin: 0;
			float: left;
			width: 60%;
			height: 100%;
			padding: 50px 18px 18px;
			overflow: auto;
			background-color: rgba(91, 116, 146, 0.75);
      -webkit-overflow-scrolling: touch;
      transform: translate(-100%, 0);
      transition: transform 0.3s ease;
      li {
  			cursor: pointer;
  			font-size: 16px;
  			list-style: none;
  			color: #fff;
  			margin-top: 20px;
  			// .iconfont {
  			// 	float: right;
  			// 	font-size: 0.6rem;
  			// }
  			// &.chose {
  			// 	color: #FFD300;
  			// }
		  }
    }
  }
</style>
