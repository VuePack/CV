<template>
  <div id="app" @mousemove="moveLayer($event)" :style="{ 'background': 'url(' + bgUrl + ') top center /cover'}">
      <panel-loader v-show="loading == true"></panel-loader>
      <panel-intro v-show="loadOver == true"></panel-intro>

      <transition name="custom-classes-transition"
        enter-active-class="animated slideInDown"
        leave-active-class="animated bounceOutRight">
        <panel-layer v-show="loadOver == true"></panel-layer>
      </transition>

      <transition name="custom-classes-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated bounceOutRight">
        <panel-wall v-show="loadOver == true"></panel-wall>
      </transition>

      <transition name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated bounceOutRight">
        <panel-casesShow v-show="isShow == true"></panel-casesShow>
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


export default {
  name: 'app',
  data(){
    return {
      bgUrl: 'http://7xnjvz.com1.z0.glb.clouddn.com/2016091468798code.jpg',
      loading   : true,
      loadOver  : false,
      isShow    : false,
      styleMask : {
        width: '100%',
        height: '100%'
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
}
</style>
