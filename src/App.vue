<template>
  <div id="app" @mousemove="moveLayer($event)" :style="{ 'background': 'url(' + bgUrl + ') top center /cover'}">
      <!-- loading动画 -->
      <panel-loader v-show="loading == true"></panel-loader>

      <!-- 介绍面板 -->
      <panel-intro v-show="loadOver == true"></panel-intro>

      <!-- 浮动云层 -->
      <transition name="custom-classes-transition"
        enter-active-class="animated slideInDown"
        leave-active-class="animated bounceOutRight">
        <panel-layer v-show="loadOver == true"></panel-layer>
      </transition>

      <!-- 主面板 -->
      <transition name="custom-classes-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated bounceOutRight">
        <panel-wall v-show="loadOver == true"></panel-wall>
      </transition>

      <!-- 案例面板 -->
      <transition name="custom-classes-transition"
        enter-active-class="animated2 fadeIn"
        leave-active-class="animated bounceOutRight">
        <panel-casesShow v-show="isShow == true" :currentStatus="currentStatus"></panel-casesShow>
      </transition>
  </div>
</template>

<script>
import common from './assets/common/base.scss'
import Animate from 'animate.css'
import Loader from './components/panel-loader'
import Layer from './components/panel-layer'
import Intro from './components/panel-intro'
import Wall from './components/panel-wall'
import CasesShow from './components/panel-casesShow'

// import fontAwesome from 'font-awesome/css/font-awesome.css'


export default {
  name: 'app',
  data(){
    return {
      currentStatus : "",
      firstShow     : true,
      bgUrl: 'https://ohv0hyr4v.qnssl.com/2016091468798code.jpg',
      loading   : true,
      loadOver  : false,
      isShow    : false,
      styleMask : {
        width  : '100%',
        height : '100%'
      }
    }
  },
  components: {
    "panel-loader"    : Loader,
    "panel-intro"     : Intro,
    "panel-layer"     : Layer,
    "panel-wall"      : Wall,
    "panel-casesShow" : CasesShow
  },
  mounted(){
    var _this = this;
   $(window).load(function() {
       _this.loading = false;
       _this.loadOver = true;
    });
  },
  methods:{
    moveLayer:function(e){
      var w = $(window).width();
      var h = $(window).height();
      var offsetX = 0.5 - e.pageX / w;
      var offsetY = 0.5 - e.pageY / h;

      $(".cover").each(function(i, el) {
          var offset = parseInt($(el).data('offset'));
          var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

          $(el).css({
              '-webkit-transform': translate,
              'transform': translate,
              'moz-transform': translate
          });
      });
    }
  }
}
</script>

<style lang="scss">

#app{
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
      position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
}
.animated2 {
  -webkit-animation-duration: 1.6s;
  animation-duration: 1.6s;
  animation-delay:1.3s;
-webkit-animation-delay:1.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
