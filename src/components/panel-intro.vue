<template>
    <div style="width:100%;height:100%">
        <div class="panel-mask"></div>
        <div class="panel-intro">
            <p class="msg">爱折腾,爱旅游,热爱生活</p>
            <p class="text">Front-end Developer</p>
            <p class="copyright">©Copyright 2016 - Leon All rights reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  lang="scss">
// 个人介绍遮罩层
.panel-mask {
    position: relative;
    width: 38%;
    min-width: 630px;
    height: 100%;
    background: linear-gradient(-109deg, transparent 28.5em, #000 0);
    opacity: .3;
}

.panel-intro {
    position: absolute;
    color: #fff;
    left: 35px;
    bottom: 30px;
    p {
        margin-bottom: 5px;
    }
    .msg,
    .text {
        font-size: 14px;
    }
    .copyright {
        font-size: 13px;
    }
}
</style>
