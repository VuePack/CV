<template>
    <section class="panel-casesShow"  :style="{ justifyContent: justify}">
        <nav class="nav-tags">
            <ul>
                <li v-for="tag in tags">
                    <a v-if="currentStatus == tag.status" class="active" href="javascript:;" @click="checkTags(tag.status)">{{tag.name}}</a>
                    <a v-else href="javascript:;" @click="checkTags(tag.status)">{{tag.name}}</a>
                </li>
            </ul>
            <label class="go-back" for="" @click="goBack"><i class="fa  fa-angle-left"></i> <em>返回首页</em></label>
        </nav>

        <main class="show-container">
            <template v-for="content in contents" >
                <mobile-slide :content="content" :mobileBg="mobileBg" v-if="currentStatus == 'Cases'"></mobile-slide>
                <div class="show-item"  v-else>
                    <article class="post" v-if="content.status == currentStatus">
                        <div class="post-content" v-for="info in content.list">
                            <div class="post-header">
                                <a class="title" :href="info.url" target="_blank"><h2>{{info.title}}</h2></a>
                            </div>
                            <div class="post-meta">
                                <img class="author-thumb" :src="authorThumb" alt="">
                                <span>{{authorName}}</span>
                                <time class="post-date">{{info.time}}</time>
                            </div>
                        </div>
                    </article>
                </div>
            </template>
        </main>

    </section>
</template>

<script>
import MobildSlide from './common/mobile-slide'
// import Articel from './common/articel'


export default {

  name: 'casesShow',
  data () {
    return {
        authorName:'里昂',
        authorThumb:'http://7xnjvz.com1.z0.glb.clouddn.com/author.jpg',
        mobileBg:'http://7xnjvz.com1.z0.glb.clouddn.com/mobile-simulator.png',
        justify:'',
        justify2:'space-between',
        // space-between
        tags:[
            {status:'Cases',name:'折腾案例'},
            {status:'Mobile',name:'Mobile'},
            {status:'JavaScript',name:'JavaScript'},
            {status:'Mood',name:'杂谈'}
        ],
        contents:[
            {
                status:'Cases',
                list: [
                    {url:'http://kevin.coding.io/AppMobile/WebApp/licai1/'},
                    {url:'http://kevin.coding.io/AppMobile/WebApp/licai2/'},
                    {url:'http://kevin.coding.io/AppMobile/H5Mobile/car/'},
                    {url:'http://kevin.coding.io/AppMobile/H5Mobile/salon/'}
                ]
            },
            {
                status:'Mobile',
                list: [
                    {url:'http://likr.cn/2015/12/25/flex新旧混合写法兼容安卓微信x5内核/',title:'flex新旧混合写法兼容安卓微信x5内核',time:' 2015-12-25 09:53:27'},
                    {url:'http://likr.cn/2015/10/23/安卓非微信浏览器呼出高德地图App/',title:'安卓非微信浏览器呼出高德地图App，若没安装高德地图App，打开网页版高德地图解决方案',time:'2015-10-23 12:44:42'},
                    {url:'http://likr.cn/2015/12/02/微信h5踩坑/',title:'微信h5踩坑',time:'2015-12-02 20:43:59'},
                    {url:'http://likr.cn/2015/10/26/微信公共号呼起微信授权页面/',title:'微信公共号呼起微信授权页面',time:'2015-10-26 17:46:54'},
                ]
            },
            {
                status:'JavaScript',
                list: [
                    {url:'http://likr.cn/2016/09/23/VUE学习工作笔记/',title:'VUE学习工作笔记',time:'2016-09-23 20:38:11'},
                    {url:'http://likr.cn/2016/09/14/针对项目思考的前端脚手架/',title:'针对项目思考的前端脚手架',time:'2016-09-14 21:46:48'},
                    {url:'http://likr.cn/2016/08/25/JS获取URL中GET的参数转换为JSON格式/',title:'JS获取URL中GET的参数转换为JSON格式',time:'2016-08-25 19:55:59'},
                    {url:'http://likr.cn/2016/01/08/JS控制cookie，选中复选框下次不再提醒/',title:'JS控制cookie，选中复选框下次不再提醒',time:'2016-01-08 22:27:15'},
                    {url:'http://likr.cn/2015/11/25/pc网站微信登录开发/',title:'pc网站微信登录开发',time:'2015-11-25 15:46:27'},
                ]
            },
            {
                status:'Mood',
                list: [
                    {url:'http://likr.cn/2016/09/18/《七月的安生》/',title:'《七月的安生》',time:'2016-09-18 21:06:57'},
                    {url:'http://likr.cn/2016/08/20/聊聊最近/',title:'聊聊最近',time:'2016-08-20 20:59:03'},
                    {url:'http://likr.cn/2016/01/28/云南记/',title:'云南记',time:'2016-01-28 21:45:26'},
                    {url:'http://likr.cn/2015/12/30/凯锅2015年终总结/',title:'凯锅2015年终总结',time:'2015-12-30 20:00:22'},
                ]
            }
        ]

    };
  },
  methods:{
    checkTags(status){
        this.$parent.$data.currentStatus = status;
    },
    goBack(){
        var parent_data      = this.$parent.$data;
        parent_data.isShow   = false;
        parent_data.loadOver = true;
        parent_data.loading  = false;
        parent_data.bgUrl    = 'http://7xnjvz.com1.z0.glb.clouddn.com/2016091468798code.jpg';
    }
  },
  watch:{
    'currentStatus':function(){
        if(this.currentStatus == 'Cases'){
            this.justify = 'space-between';
        }else{
            this.justify = '';
        }
    }

  },
  components:{
    'mobile-slide': MobildSlide,
    // 'Articel': Articel
  },
  props: {
    currentStatus: String
  },
  mounted(){
    var v_data = this.$parent.$data;

  }
};
</script>

<style lang="scss" >
.go-back{
    position: absolute;
    bottom: 30px;
    left: 0;
    cursor: pointer;
    .fa-angle-left{
        font-size: 35px;
    }
    em{
        padding:0 10px;
        font-size: 25px;
    }
    &:hover{
        color: #f70;
    }
}
.panel-casesShow{
    display: flex;
    width: 980px;
}
.nav-tags{
    position: relative;
    ul{
        li{
            margin-bottom: 15px;
        }
        a{
        position: relative;
        display: inline-block;
        margin: 0 10px 5px 0;
        padding: 0 15px 0 24px;
        border-radius: 0 4px 4px 0;
        background: #333;
        opacity: .5;
        font-size: 28px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
            &:before {
            position: absolute;
            content: '';
            top: 0;
            left: -5px;
            width: 0;
            height: 0;
            border-width: 24px 14px 24px 0;
            border-style: solid;
            }
            &:after {
                position: absolute;
                content: '';
                width: 8px;
                height: 8px;
                top: 20px;
                left: 12px;
                border-radius: 100%;
                background: #fff;
            }
            &:hover{
                background: #f70;
            }
            &.active{
                background: #f70;
            }
        }
    }
}
.show-item{
    position: relative;
    width: 100%;
    .si-content{
        position: relative;
    }
}
.post{
    padding-left: 40px;
}
.post-header{
    .title{
        font-size: 32px;
        color: #4A4A4A;
    }

}
.post-content{
    padding-bottom:15px;
    margin-bottom:15px;
    border-bottom: #EBF2F6 1px dashed;
}
.post-meta{
    color: #fff;
    font-size: 23px;
}
.post-date{
    border-left: #fff 1px solid;
    padding: 0 10px;
}
.author-thumb{
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius:100%;
}
</style>
