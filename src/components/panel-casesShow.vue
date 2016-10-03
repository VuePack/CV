<template>
    <section class="panel-casesShow">
        <nav class="nav-tags">
            <ul>
                <li v-for="tag in tags"><a href="javascript:;">{{tag.name}}</a></li>
            </ul>
        </nav>

        <main class="show-container">
            <div class="show-item webapp">
                <div class="si-content">
                    <img src="http://7xnjvz.com1.z0.glb.clouddn.com/mobile-simulator.png" alt="">
                    <iframe class="iframe" src="http://kevin.coding.io/AppMobile/WebApp/licai1/"></iframe>
                </div>
                <div class="si-sidebar"></div>
                <div class="si-qrcode"></div>
            </div>
        </main>

    </section>
</template>

<script>
export default {

  name: 'casesShow',
  data () {
    return {
        tags:[
            {type:'all',name:'全部标签'},
            {type:'HTML5',name:'HTML5'},
            {type:'CSS3',name:'CSS3'},
            {type:'JavaScript',name:'JavaScript'},
            {type:'webApp',name:'webApp'}
        ]

    };
  },
  mounted(){
    var v_data = this.$parent.$data;
console.log(v_data.loadOver);

  }
};
</script>

<style lang="scss" scoped>
.panel-casesShow{
    display: flex;
    justify-content: space-between;
    width: 980px;
}
.nav-tags{
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
        }
    }
}
.show-container{
}
.show-item{
    position: relative;
    width: 100%;
    .si-content{
        position: relative;
    }
    .webapp{
        .si-content{
            width: 100%;
            height: 504px;
            overflow: scroll
        }
    }

    .iframe{
        @media screen and (max-width: 960px) {
            height: 504px;
        }
        @media screen and (max-width: 640px) {
            height: 504px;
        }
        @media screen and (max-width: 480px) {
            height: 504px;
        }
        position: absolute;
        top: 114px;
        right: 0;
        width: 100%;
        height: 745px;
        border: 0;
        overflow: hidden;
    }
}
</style>
