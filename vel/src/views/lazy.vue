<template>
  <div class="lazy">
    <!-- <img v-for="img in list" v-lazy="img" /> -->
    <div >
      <ul class="news">
        <li class="news__item" v-for="(news, index) in newslist">
          {{index}}-{{news.title}}
        </li>
        <div  class="loading":class="{seeview:view}">
          加载中
        </div>
      </ul>


    </div>
  </div>
</template>

<script>
import alipayimg from '../assets/alipay.png';
export default {
  name: 'article',
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
      ],
      newslist: [
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'}
        ]
    }
  },
  mounted(){
    var me = this
    var callback = function () {
         var lazy = document.getElementsByClassName('lazy')[0]
         var news = document.getElementsByClassName('news')[0]
         //不是window下的滚动，对单个div监听
         if(lazy.scrollTop + window.innerHeight >= news.offsetHeight) {
           me.view = false
           setTimeout( me.loadMore(),3000)

         }
    }
    var lazy = document.getElementsByClassName('lazy')[0]
    lazy.addEventListener('scroll',callback)
  },
  methods: {
    loadMore() {
    let newAry = [];
    for(let i = 0; i < 10; i++) {
      newAry.push({title: 'hello world'})
    }
    this.newslist = [...this.newslist, ...newAry];
  },
    go(id) {
      this.$router.push({
        path: "scroll"
      });

    },
  },
  created() {
      //  window.addEventListener('scroll', ()=>{
      //    console.log(11);
      //  });
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
