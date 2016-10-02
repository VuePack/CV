<template>
  <div id="app" @mousemove="moveLayer($event)">
    <section v-show="loading">
      <c-loader></c-loader>
    </section>
    <section v-show="content" v-bind:style="styleMask">
     <c-intro></c-intro>
    </section>
    <section v-show="content">
      <c-layer></c-layer>
    </section>
    <section v-show="content">
      <c-wall></c-wall>
    </section>
    <section id="tpl_demo">待开发....</section>
  </div>
</template>

<script>
import common from './assets/common/base.scss'
import Loader from './components/loader'
import Layer from './components/panel-layer'
import Intro from './components/panel-intro'
import Wall from './components/panel-wall'


export default {
  data(){
    return {
      loading: true,
      content: false,
      styleMask:{
        width: '100%',
        height: '100%'
      }
    }
  },
  components: {
    "c-loader":Loader,
    "c-intro":Intro,
    "c-layer":Layer,
    "c-wall":Wall
  },
  mounted(){
    var _this = this;
   $(window).load(function() {
       _this.loading = false;
       _this.content = true;
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
  width: inherit;
  height: inherit;
  background: url(http://7xnjvz.com1.z0.glb.clouddn.com/2016091468798code.jpg) top center;
  background-size: cover;
}
#tpl_demo{
  display: none;
  background:#fff;
}
</style>
