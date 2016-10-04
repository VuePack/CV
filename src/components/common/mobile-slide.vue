<template>
<div class="show-item webapp"  v-show="content.status == 'Cases'">
    <div class="si-content">
        <img class="mobile-bg" :src="mobileBg" alt="">
        <div class="iframe" >
            <iframe  :src="content.list[currentPage].url"></iframe>
        </div>
        <a class="btn btn-prev" href="javascript:;" @click="slidePrev(content.list.length)">上一个</a>
        <a class="btn btn-next" href="javascript:;" @click="slideNext(content.list.length)">下一个</a>
    </div>
    <div class="si-sidebar"></div>
    <div class="si-qrcode"></div>
</div>
</template>

<script>
export default {

  name: 'mobile-slide',
  data () {
    return {
        currentPage: 0
    };
  },
  props: {
    content: {
        required: true,
        type: Object
    },
    mobileBg: String
  },
  methods:{
    slidePrev(i){
        var currentPage  = this.currentPage;
        this.currentPage = currentPage<= 0 ? 0 : currentPage - 1;
    },
    slideNext(i){
        var currentPage  = this.currentPage;
        this.currentPage = currentPage == i-1 ? i-1 : this.currentPage+=1;
    }
  }
};
</script>

<style lang="scss">
.slide-wrap{
    position: relative;
}
.show-item.webapp{
        .btn{
            position: absolute;
            left: -56px;
            width: 25px;
            background: #71b643;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border: 1px solid #71b643;
            font-size: 20px;
            color: #fff;
            box-sizing: content-box;
            padding: 20px 15px;
            &:hover{
                color: #71b643;
                background: #fff;
            }
        }
        .btn-next{
            top: 300px;
        }
        .btn-prev{
            top: 113px;
        }
        .active{
            color: #71b643;
            background: #fff;
        }

    .iframe{
        /*4 4s*/
        @media only screen and (device-height :480px) and (-webkit-device-pixel-ratio:2){
            top: 130px;
            height: 605px;
            overflow: scroll;
        }

        /*5*/
        @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
            top: 130px;
            height: 605px;
            overflow: scroll;
        }
        /*6*/
        @media (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
        top: 115px;
            height: 505px;
            overflow: scroll;
         }

        /*6+*/
        @media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
            top: 70px;
            height: 305px;
            overflow: scroll;
        }
        position: absolute;
        top: 158px;
        right: 0;
        width: 100%;
        height: 700px;
        border: 0;

    }
    iframe{
        border:0;
        width: 100%;
        height: 100%;
    }
}
</style>
