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
  <transition :name="transitionName">
  <!-- <transition :name="pageTransitionName"> -->
		<keep-alive>
			<router-view class="app-view">
      </router-view>
		</keep-alive>
	</transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
      // 转场动画名称
      // ios-transition/fade-bottom-transition/zoom-transition/fade-right-transition/fade-transition
      pageTransition: {
        type: String,
        default () { return 'zoom-transition' }
      }
    },
  data() {
    return {
      open:false,
      locked:false,
      transitionName: 'slide-right',
      // pageTransitionName: null,
    }
  },
  created(){
    this.init()
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
    },
    init(){
      var me = this
      // this.$router.beforeEach((to, from, next) => {
      //     me.pageTransitionName = `${me.pageTransition}-${me.$history.getDirection()}`
      //     // vm.$app && vm.$app.setEnabled(false, 500)
      //     next()
      //   })
      this.$router.beforeEach((to, from, next) => {
        console.log(me.$history.getDirection());
        if(me.$history.getDirection() === 'forward'){
          me.transitionName = 'slide-left'
        }else{
          me.transitionName = 'slide-right'
        }

        next()
      })
    }

  }
}
</script>

<style lang="scss">
@import "./src/style/normalize.scss";
#app {
  height: 100%;
}
.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(50vw, 0);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0.1;
		-webkit-transform: translate(-50vw, 0);
	}

	.app-view {
    margin-top: 56px;
		z-index: 1;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		position: absolute;
		transition: transform 0.3s ease;
		-webkit-overflow-scrolling: touch;
	}
// .child-view {
//   position: absolute;
//   width:100%;
//   transition: all .8s cubic-bezier(.55,0,.1,1);
//   }
// .slide-left-enter, .slide-right-leave-active {
//   opacity: 0;
//   -webkit-transform: translate(50px, 0);
//   transform: translate(50px, 0);
// }
// .slide-left-leave-active, .slide-right-enter {
//   opacity: 0;
//   -webkit-transform: translate(-50px, 0);
//   transform: translate(-50px, 0);
// }

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
