<template>
    <section class="panel-copyright">
        <div class="panel-mask"></div>
        <div class="panel-intro">
            <p class="msg">{{message}}</p>
            <p class="text">{{text}}</p>
            <p class="copyright">{{copyright}}</p>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
        message:'爱折腾,爱旅游,热爱生活',
        text:'Front-end Developer',
        'copyright':'©Copyright 2016 - Leon All rights reserved.'
    }
  }
}
</script>

<style  lang="scss" scoped>
.panel-copyright{
    min-width:35%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0
}
// 个人介绍遮罩层
.panel-mask {
    position: relative;
    width: 100%;
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
        font-size: 22px;
    }
    .copyright {
        font-size: 18px;
    }
}
@media screen and (max-width: 960px) {
    .panel-copyright{
        width: 100%;
    }
    .panel-mask{
        background: rgba(0,0,0,.5);
    }
 } /*兼容平板*/
@media screen and (max-width: 640px) {
    .panel-copyright{
        width: 100%;
    }
    .panel-mask{
        background: rgba(0,0,0,.5);
    }
 } /*兼容手机*/
@media screen and (max-width: 480px) {
    .panel-copyright{
        width: 100%;
    }
    .panel-mask{
        background: rgba(0,0,0,.5);
    }
 }
</style>
