<template>
    <section class="panel-wall">

        <ul class="wall-left wall-column" v-for="item in items" v-if="item.type == 'left'">
            <li v-for="info in item.list" v-if="info.url">
                <a  :href="info.link" target="_blank">
                    <div class="item-head"><i class="avatar"> <img :src="info.url" alt=""></i></div>
                    <div class="item-body">
                        <p>{{info.name}}</p>
                    </div>
                </a>
                <div class="review">
                  <p>{{info.text}}</p>
                </div>
            </li>
            <li  v-else @click="casesShow(info.status)">{{info.name}}</li>
        </ul>

        <ul class="wall-middle wall-column" v-for="item in items" v-if="item.type == 'middle'">

            <template v-for="info in item.list">
              <li v-if="info.status == 'About'">
                  <a href="about.html">{{info.name}}</a>
              </li>
              <li v-if="!info.name"></li>
              <li v-if="info.status == 'Mood'" @click="casesShow(info.status)">{{info.name}}</li>
            </template>
        </ul>

        <ul class="wall-right wall-column" v-for="item in items" v-if="item.type == 'right'">
            <li v-for="info in item.list" v-if="info.url"  @click="casesShow(info.status)" >
                <a>
                    <div class="item-head">
                        <p>{{info.name}}</p>
                    </div>
                    <div class="item-body"><i class="avatar"><img :src="info.url" alt=""></i></div>
                </a>
                <div class="review">
                  <p>{{info.text}}</p>
                </div>
            </li>
            <li v-else @click="casesShow(info.status)">{{info.name}}</li>
        </ul>

      </section>
</template>
<script>


export default {
  data () {
    return {
      items:[
        {
          type:'left',
          list:[
            {name:'个人博客',url:'https://ohv0hyr4v.qnssl.com/avatar.jpg',link:'http://likr.cn',text:'记录零散思绪和成长记录'},
            {name:'JavaScript',status:'JavaScript'}
          ]
        },
        {
          type:'middle',
          list:[
            {name:'杂谈',status:'Mood'},
            {name:''},
            {name:'关于我',status:'About'}
          ]
        },
        {
          type:'right',
          list:[
            {name:'Mobile',status:'Mobile'},
            {name:'折腾案例',url:'https://ohv0hyr4v.qnssl.com/2016091494119code.png',status:'Cases',text:'有趣的idea，疯狂造轮子 ~'}
          ]
        }
      ],
      backgroundImg:[
        {url: 'https://ohv0hyr4v.qnssl.com/bg1.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg2.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg3.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg4.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg5.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg6.png'},
        {url: 'https://ohv0hyr4v.qnssl.com/bg7.png'}
      ]
    }
  },
  props: {
    // currentStatus:String,
    // loadOver: Boolean,
    // loading: Boolean,
    // isShow: Boolean,
    // bgUrl: String
  },
  methods:{
    casesShow(s){
      var parent_data      = this.$parent.$data,
      num                  = parseInt(6 * Math.random());
      parent_data.isShow   = true;
      parent_data.loadOver = false;
      parent_data.loading  = false;
      parent_data.currentStatus = s;
      parent_data.bgUrl    = this.backgroundImg[num].url;
    }
  }
}
</script>
<style lang="scss" scoped>

.panel-wall {
  display: flex;
  justify-content:space-between;
  width: 700px;
  li{
    a{
      display: block;
      width:100%;
      height:100%;
      color: #fff;
    }
  }
}
.wall-column {
  display: flex;
  flex-wrap: wrap;
  align-content:space-around;
  width: 220px;
  height: 475px;
  color: #fff;
  li {
    position: relative;
    width: 100%;
    height: 140px;
    font-size: 26px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: all .3s linear 0s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
      transform: translateY(-1px);
    }
    &:hover .review{
      height: 100px;
      opacity: 1;
    }
  }
  .item-head {
      text-align: center;
      padding: 70px 0 60px 0;
    }
    .avatar {
      display: inline-block;
      width: 85px;
      height: 85px;
    }
    .avatar img {
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
    .review{
      display:flex;
      justify-content:center;
      align-items:center;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      font-size: 12px;
      height: 0;
      line-height: 18px;
      overflow: hidden;
      color: #999;
      background: rgba(255, 255, 255, .9);
      opacity: 0;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;

    }
}
.wall-middle li, .wall-left li:nth-child(2), .wall-right li:nth-child(1) {
  text-align: center;
  line-height: 140px;
}
.wall-left li:nth-child(1) {
  height: 300px;
  text-align: center;
  background-color: #D8D1CC;
}
.wall-left li:nth-child(2) {
  background-color: #B0A9AC;
}
.wall-middle li:nth-child(1) {
  background-color: #D4C5BA;
}
.wall-middle li:nth-child(2) {
  background-color: #F0EBEC;
}
.wall-middle li:nth-child(3) {
  background-color: #826D68;
}
.wall-right li:nth-child(1) {
  background-color: #5C4743;
}
.wall-right li:nth-child(2) {
  height: 300px;
  text-align: center;
  background-color: #D8D1CC;
}

</style>
