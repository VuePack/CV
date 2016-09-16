<template>
  <div class="panel-layer">
      <div data-offset="90" class="clouds cover"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="scss">
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
