<template>
    <div class="panel-wall clearfix">
        <ul class="wall-left wall-column">
            <li>
                <a href="http://likr.cn/" target="_blank">
                    <div class="item-head"><i class="item-head-avatar"><img src="http://7xnjvz.com1.z0.glb.clouddn.com/avatar.png" alt=""></i></div>
                    <div class="item-body">
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
                    <div class="item-head">
                        <p>折腾案例</p>
                    </div>
                    <div class="item-body"><i class="item-head-avatar"><img src="http://7xnjvz.com1.z0.glb.clouddn.com/2016091494119code.png" alt=""></i></div>
                </a>
            </li>
        </ul>
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
  },
  methods:{
  }
}
</script>
<style lang="scss">
.panel-wall {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 490px;
  height: 300px;
  margin: -145px 0 0 -220px;
  li a{
  display: block;
  width:100%;
  height:100%;
  color: #fff;
}
}

.wall-column {
  float: left;
  width: 150px;
  height: 300px;
  color: #fff;
  margin-right: 20px;
  &:nth-child(3) {
    margin: 0;
  }
  li {
    position: relative;
    width: 150px;
    height: 100px;
    font-size: 18px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: all .3s linear 0s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    }
  }
  .item-head {
      text-align: center;
      padding: 50px 0 40px 0;
    }
    .item-head-avatar {
      display: inline-block;
      width: 60px;
      height: 60px;
    }
    .item-head-avatar img {
      display: block;
      width: 100%;
      height: 100%;
      border: 3px solid #fff;
      border-radius: 100%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }
    .item-body p {
      color: #fff;
    }
}
.wall-middle li, .wall-left li:nth-child(2), .wall-right li:nth-child(1) {
  text-align: center;
  line-height: 100px;
}
.wall-left li:nth-child(1) {
  height: 220px;
  text-align: center;
  background-color: #D8D1CC;
}
.wall-left li:nth-child(2) {
  background-color: #B0A9AC;
}
.wall-middle li:nth-child(1) {
  background-color: #F0EBEC;
}
.wall-middle li:nth-child(2) {
  background-color: #D4C5BA;
}
.wall-middle li:nth-child(3) {
  background-color: #826D68;
}
.wall-right li:nth-child(1) {
  background-color: #5C4743;
}
.wall-right li:nth-child(2) {
  height: 220px;
  text-align: center;
  background-color: #D8D1CC;
}
</style>
