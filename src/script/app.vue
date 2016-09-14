<template>
  <div id="app">
    <section id="container">
        <div class="mask"></div>
        <div class="intro">
            <p class="msg">爱折腾,爱旅游,热爱生活</p>
            <p class="text">Front-end Developer</p>
            <p class="copyright">©Copyright 2016 - Leon All rights reserved.</p>
        </div>
        <div class="layer">
            <div data-offset="90" class="clouds cover"></div>
        </div>
        <div class="wall clearfix">
            <ul class="wall-left wall-column">
                <li>
                    <a href="http://likr.cn/" target="_blank">
                        <div class="panel-head"><i class="panel-head-avatar"><img src="http://7xnjvz.com1.z0.glb.clouddn.com/avatar.png" alt=""></i></div>
                        <div class="panel-body">
                            <p>个人博客</p>
                        </div>
                    </a>
                </li>
                <li>HTML5</li>
            </ul>
            <ul class="wall-middle wall-column">
                <li></li>
                <li>CSS3</li>
                <li><a href="about.html">关于我</a></li>
            </ul>
            <ul class="wall-right wall-column">
                <li>JavaScript</li>
                <li>
                    <a id="demo">
                        <div class="panel-head">
                            <p>折腾案例</p>
                        </div>
                        <div class="panel-body"><i class="panel-head-avatar"><img src="http://7xnjvz.com1.z0.glb.clouddn.com/2016091494119code.png" alt=""></i></div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section id="tpl_demo">待开发....</section>
</template>
<script>
export default {
  name:'app'
}
</script>

<style lang="css">


</style>
