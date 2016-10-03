<template>
  <section class="panel-layer">
      <div data-offset="90" class="clouds cover"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.panel-layer {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    right: 0;
    height: 60%;
    div {
        position: absolute;
        bottom: 0
    }
    .cover {
        width: 895px;
        left: 50%;
        margin-left: -447px;
        height: 350px;
        top: 0px;
        background: url('http://7xnjvz.com1.z0.glb.clouddn.com/2016091463899clound.png') no-repeat center;
    }
}
</style>
