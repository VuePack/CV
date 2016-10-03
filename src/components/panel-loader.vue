<template>
    <section class="panel-loader">
        <div class="loader-inner"><span class="double-bounce1"></span> <span class="double-bounce2"></span></div>
    </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  ready(){
  }
}
</script>

<style lang="scss" scoped>
.panel-loader {
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #E7D0B5;
  z-index: 999;
}
.loader-inner {
  width: 80px;
  height: 80px;
  margin: -20px 0 0 -20px;
}
.double-bounce1, .double-bounce2 {
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}
.double-bounce2 {
  margin-top: -100px;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
@-webkit-keyframes bounce {
  0%, 100% {
    -webkit-transform: scale(0.0)
  }
  50% {
    -webkit-transform: scale(1.0)
  }
}
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

</style>
