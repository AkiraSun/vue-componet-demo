<template>
  <div class="action-sheet">
    <transition name="fade">
        <div class="action_mask" show="show" v-show="show" @click="hideAction" ></div>
    </transition>
    <transition name="bounce">
        <div class="action" :show="show" v-show="show">
            <div class="action_title">这是一个标题</div>
            <div class="action_content">
                <div class="item">第一个选项</div>
                <div class="item">第二个选项</div>
                <div class="item">第三个选项</div>
                <div class="item">第四个选项</div>
            </div>
            <div class="action_btn" @click="hideAction">取消</div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Actionsheet',
  props:['show'],
  data() {
    return {

    }
  },
  methods: {
    hideAction(){
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">

.action{
    font-size: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    // height: 200px;
    background-color: #efefef;
    z-index: 9;
    .action_title{
        padding: 0 20px;
        color: #888;
        border-bottom: 1px solid #efefef;
        height: 40px;
         background-color: #fff;
         line-height: 40px;
    }
    .action_content{
        color: #666;
        .item{
            padding: 0 20px;
            border-bottom: 1px solid #efefef;
            line-height: 2.6;
            background-color: #fff;
        }
    }
    .action_btn{
        padding: 0 20px;
        height: 40px;
       background-color: #fff;
       line-height: 40px;
    }
}

.action_mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 8;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(300px);
  }

  100% {
    transform: translateY(0px);
  }
}
@keyframes bounce-out {
   0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(300px);
  }
}

.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-out .5s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
}
@keyframes fade-out {
   0% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}
</style>
