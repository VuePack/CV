webpackJsonp([1,0],[function(t,e,a){"use strict";a(8)},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(11),i=(s(n),a(10)),r=(s(i),a(26)),o=s(r),l=a(25),c=s(l),u=a(24),d=s(u),f=a(27),p=s(f),m=a(23),h=s(m);e.default={name:"app",data:function(){return{currentStatus:"",firstShow:!0,bgUrl:"http://7xnjvz.com1.z0.glb.clouddn.com/2016091468798code.jpg",loading:!0,loadOver:!1,isShow:!1,styleMask:{width:"100%",height:"100%"}}},components:{"panel-loader":o.default,"panel-intro":d.default,"panel-layer":c.default,"panel-wall":p.default,"panel-casesShow":h.default},mounted:function(){var t=this;$(window).load(function(){t.loading=!1,t.loadOver=!0})},methods:{moveLayer:function(t){var e=$(window).width(),a=$(window).height(),s=.5-t.pageX/e,n=.5-t.pageY/a;$(".cover").each(function(t,e){var a=parseInt($(e).data("offset")),i="translate3d("+Math.round(s*a)+"px,"+Math.round(n*a)+"px, 0px)";$(e).css({"-webkit-transform":i,transform:i,"moz-transform":i})})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mobile-slide",data:function(){return{currentPage:0}},props:{content:{required:!0,type:Object},mobileBg:String},methods:{slidePrev:function(t){var e=this.currentPage;this.currentPage=e<=0?0:e-1},slideNext:function(t){var e=this.currentPage;this.currentPage=e==t-1?t-1:this.currentPage+=1}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(22),i=s(n);e.default={name:"casesShow",data:function(){return{authorName:"里昂",authorThumb:"https://ohv0hyr4v.qnssl.com/avatar.jpg",mobileBg:"https://ohv0hyr4v.qnssl.com/mobile-simulator.png",justify:"",justify2:"space-between",tags:[{status:"Cases",name:"折腾案例"},{status:"Mobile",name:"Mobile"},{status:"JavaScript",name:"JavaScript"},{status:"Mood",name:"杂谈"}],contents:[{status:"Cases",list:[{url:""},{url:""},{url:""},{url:""}]},{status:"Mobile",list:[{url:"https://likr.cn/2015/12/25/flex新旧混合写法兼容安卓微信x5内核/",title:"flex新旧混合写法兼容安卓微信x5内核",time:" 2015-12-25 09:53:27"},{url:"https://likr.cn/2015/10/23/安卓非微信浏览器呼出高德地图App/",title:"安卓非微信浏览器呼出高德地图App，若没安装高德地图App，打开网页版高德地图解决方案",time:"2015-10-23 12:44:42"},{url:"https://likr.cn/2015/12/02/微信h5踩坑/",title:"微信h5踩坑",time:"2015-12-02 20:43:59"},{url:"https://likr.cn/2015/10/26/微信公共号呼起微信授权页面/",title:"微信公共号呼起微信授权页面",time:"2015-10-26 17:46:54"}]},{status:"JavaScript",list:[{url:"https://likr.cn/2016/09/23/VUE学习工作笔记/",title:"VUE学习工作笔记",time:"2016-09-23 20:38:11"},{url:"https://likr.cn/2016/09/14/针对项目思考的前端脚手架/",title:"针对项目思考的前端脚手架",time:"2016-09-14 21:46:48"},{url:"https://likr.cn/2016/08/25/JS获取URL中GET的参数转换为JSON格式/",title:"JS获取URL中GET的参数转换为JSON格式",time:"2016-08-25 19:55:59"},{url:"https://likr.cn/2016/01/08/JS控制cookie，选中复选框下次不再提醒/",title:"JS控制cookie，选中复选框下次不再提醒",time:"2016-01-08 22:27:15"},{url:"https://likr.cn/2015/11/25/pc网站微信登录开发/",title:"pc网站微信登录开发",time:"2015-11-25 15:46:27"}]},{status:"Mood",list:[{url:"https://likr.cn/2016/09/18/《七月的安生》/",title:"《七月的安生》",time:"2016-09-18 21:06:57"},{url:"https://likr.cn/2016/08/20/聊聊最近/",title:"聊聊最近",time:"2016-08-20 20:59:03"},{url:"https://likr.cn/2016/01/28/云南记/",title:"云南记",time:"2016-01-28 21:45:26"},{url:"https://likr.cn/2015/12/30/凯锅2015年终总结/",title:"凯锅2015年终总结",time:"2015-12-30 20:00:22"}]}]}},methods:{checkTags:function(t){this.$parent.$data.currentStatus=t},goBack:function(){var t=this.$parent.$data;t.isShow=!1,t.loadOver=!0,t.loading=!1,t.bgUrl="https://ohv0hyr4v.qnssl.com/2016091468798code.jpg"}},watch:{currentStatus:function(){"Cases"==this.currentStatus?this.justify="space-between":this.justify=""}},components:{"mobile-slide":i.default},props:{currentStatus:String},mounted:function(){this.$parent.$data}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"爱折腾,爱旅游,热爱生活",text:"Front-end Developer",copyright:"©Copyright 2016 - Leon All rights reserved."}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},ready:function(){}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{type:"left",list:[{name:"个人博客",url:"https://ohv0hyr4v.qnssl.com/avatar.jpg",link:"https://likr.cn",text:"记录零散思绪和成长记录"},{name:"JavaScript",status:"JavaScript"}]},{type:"middle",list:[{name:"杂谈",status:"Mood"},{name:""},{name:"关于我",status:"About"}]},{type:"right",list:[{name:"Mobile",status:"Mobile"},{name:"折腾案例",url:"https://ohv0hyr4v.qnssl.com/2016091494119code.png",status:"Cases",text:"有趣的idea，疯狂造轮子 ~"}]}],backgroundImg:[{url:"https://ohv0hyr4v.qnssl.com/bg1.png"},{url:"https://ohv0hyr4v.qnssl.com/bg2.png"},{url:"https://ohv0hyr4v.qnssl.com/bg3.png"},{url:"https://ohv0hyr4v.qnssl.com/bg4.png"},{url:"https://ohv0hyr4v.qnssl.com/bg5.png"},{url:"https://ohv0hyr4v.qnssl.com/bg6.png"},{url:"https://ohv0hyr4v.qnssl.com/bg7.png"}]}},props:{},methods:{casesShow:function(t){var e=this.$parent.$data,a=parseInt(6*Math.random());e.isShow=!0,e.loadOver=!1,e.loading=!1,e.currentStatus=t,e.bgUrl=this.backgroundImg[a].url}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(37),i=s(n),r=a(21),o=s(r),l=a(19),c=s(l),u=a(35),d=s(u),f=a(20),p=s(f),m=a(36),h=s(m),v=a(9),g=(s(v),void 0);i.default.use(d.default),i.default.use(p.default),i.default.use(h.default),window.$=window.jQuery=c.default,window.Vue=i.default,window.router=g=new h.default;new i.default({el:"#container",render:function(t){return t(o.default)}});t.exports={}},function(t,e){"use strict";!function(t,e){function a(){var e=i.getBoundingClientRect().width;e/l>540&&(e=540*l);var a=e/10;i.style.fontSize=a+"px",u.rem=t.rem=a}var s,n=t.document,i=n.documentElement,r=n.querySelector('meta[name="viewport"]'),o=n.querySelector('meta[name="flexible"]'),l=0,c=0,u=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),l=parseInt(1/c))}else if(o){var f=o.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(l=parseFloat(p[1]),c=parseFloat((1/l).toFixed(2))),m&&(l=parseFloat(m[1]),c=parseFloat((1/l).toFixed(2)))}}if(!l&&!c){var h=t.navigator.userAgent,v=(!!h.match(/android/gi),!!h.match(/iphone/gi)),g=v&&!!h.match(/OS 9_3/),b=t.devicePixelRatio;l=v&&!g?b>=3&&(!l||l>=3)?3:b>=2&&(!l||l>=2)?2:1:1,c=1/l}if(i.setAttribute("data-dpr",l),!r)if(r=n.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(r);else{var w=n.createElement("div");w.appendChild(r),n.write(w.innerHTML)}t.addEventListener("resize",function(){clearTimeout(s),s=setTimeout(a,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(s),s=setTimeout(a,300))},!1),"complete"===n.readyState?n.body.style.fontSize=12*l+"px":n.addEventListener("DOMContentLoaded",function(){n.body.style.fontSize=12*l+"px"},!1),a(),u.dpr=t.dpr=l,u.refreshRem=a,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){var s,n;a(13),s=a(1);var i=a(29);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(14),s=a(2);var i=a(30);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(16),s=a(3);var i=a(32);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(18),s=a(4);var i=a(34);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-ab553804",t.exports=s},function(t,e,a){var s,n;a(12),s=a(5);var i=a(28);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-132dd863",t.exports=s},function(t,e,a){var s,n;a(17),s=a(6);var i=a(33);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-69b75f71",t.exports=s},function(t,e,a){var s,n;a(15),s=a(7);var i=a(31);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-489ae728",t.exports=s},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("section",{staticClass:"panel-layer"},[e("div",{staticClass:"clouds cover",attrs:{"data-offset":"90"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{style:{background:"url("+t.bgUrl+") top center /cover"},attrs:{id:"app"},on:{mousemove:function(e){t.moveLayer(e)}}},[e("panel-loader",{directives:[{name:"show",rawName:"v-show",value:1==t.loading,expression:"loading == true"}]})," "," ",e("panel-intro",{directives:[{name:"show",rawName:"v-show",value:1==t.loadOver,expression:"loadOver == true"}]})," "," ",e("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInDown","leave-active-class":"animated bounceOutRight"}},[e("panel-layer",{directives:[{name:"show",rawName:"v-show",value:1==t.loadOver,expression:"loadOver == true"}]})])," "," ",e("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInUp","leave-active-class":"animated bounceOutRight"}},[e("panel-wall",{directives:[{name:"show",rawName:"v-show",value:1==t.loadOver,expression:"loadOver == true"}]})])," "," ",e("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated2 fadeIn","leave-active-class":"animated bounceOutRight"}},[e("panel-casesShow",{directives:[{name:"show",rawName:"v-show",value:1==t.isShow,expression:"isShow == true"}],attrs:{currentStatus:t.currentStatus}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{directives:[{name:"show",rawName:"v-show",value:"Cases"==t.content.status,expression:"content.status == 'Cases'"}],staticClass:"show-item webapp"},[e("div",{staticClass:"si-content"},[e("img",{staticClass:"mobile-bg",attrs:{src:t.mobileBg,alt:""}})," ",e("div",{staticClass:"iframe"},[e("iframe",{attrs:{src:t.content.list[t.currentPage].url}})])," ",e("a",{staticClass:"btn btn-prev",attrs:{href:"javascript:;"},on:{click:function(e){t.slidePrev(t.content.list.length)}}},["上一个"])," ",e("a",{staticClass:"btn btn-next",attrs:{href:"javascript:;"},on:{click:function(e){t.slideNext(t.content.list.length)}}},["下一个"])])," ",e("div",{staticClass:"si-sidebar"})," ",e("div",{staticClass:"si-qrcode"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{staticClass:"panel-wall"},[t._l(t.items,function(a){return"left"==a.type?e("ul",{staticClass:"wall-left wall-column"},[t._l(a.list,function(a){return a.url?e("li",[e("a",{attrs:{href:a.link,target:"_blank"}},[e("div",{staticClass:"item-head"},[e("i",{staticClass:"avatar"},[e("img",{attrs:{src:a.url,alt:""}})])])," ",e("div",{staticClass:"item-body"},[e("p",[t._s(a.name)])])])," ",e("div",{staticClass:"review"},[e("p",[t._s(a.text)])])]):e("li",{on:{click:function(e){t.casesShow(a.status)}}},[t._s(a.name)])})," "]):t._e()})," ",t._l(t.items,function(a){return"middle"==a.type?e("ul",{staticClass:"wall-middle wall-column"},[t._l(a.list,function(a){return["About"==a.status?e("li",[e("a",{attrs:{href:"about.html"}},[t._s(a.name)])]):t._e()," ",a.name?t._e():e("li")," ","Mood"==a.status?e("li",{on:{click:function(e){t.casesShow(a.status)}}},[t._s(a.name)]):t._e()]})]):t._e()})," ",t._l(t.items,function(a){return"right"==a.type?e("ul",{staticClass:"wall-right wall-column"},[t._l(a.list,function(a){return a.url?e("li",{on:{click:function(e){t.casesShow(a.status)}}},[e("a",[e("div",{staticClass:"item-head"},[e("p",[t._s(a.name)])])," ",e("div",{staticClass:"item-body"},[e("i",{staticClass:"avatar"},[e("img",{attrs:{src:a.url,alt:""}})])])])," ",e("div",{staticClass:"review"},[e("p",[t._s(a.text)])])]):e("li",{on:{click:function(e){t.casesShow(a.status)}}},[t._s(a.name)])})," "]):t._e()})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{staticClass:"panel-casesShow",style:{justifyContent:t.justify}},[e("nav",{staticClass:"nav-tags"},[e("ul",[t._l(t.tags,function(a){return e("li",[t.currentStatus==a.status?e("a",{staticClass:"active",attrs:{href:"javascript:;"},on:{click:function(e){t.checkTags(a.status)}}},[t._s(a.name)]):e("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.checkTags(a.status)}}},[t._s(a.name)])," "])})])," ",e("label",{staticClass:"go-back",attrs:{for:""},on:{click:t.goBack}},[e("i",{staticClass:"fa  fa-angle-left"})," ",e("em",["返回首页"])])])," ",e("main",{staticClass:"show-container"},[t._l(t.contents,function(a){return["Cases"==t.currentStatus?e("mobile-slide",{attrs:{content:a,mobileBg:t.mobileBg}}):e("div",{staticClass:"show-item"},[a.status==t.currentStatus?e("article",{staticClass:"post"},[t._l(a.list,function(a){return e("div",{staticClass:"post-content"},[e("div",{staticClass:"post-header"},[e("a",{staticClass:"title",attrs:{href:a.url,target:"_blank"}},[e("h2",[t._s(a.title)])])])," ",e("div",{staticClass:"post-meta"},[e("img",{staticClass:"author-thumb",attrs:{src:t.authorThumb,alt:""}})," ",e("span",[t._s(t.authorName)])," ",e("time",{staticClass:"post-date"},[t._s(a.time)])])])})]):t._e()])," "]})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("section",{staticClass:"panel-loader"},[e("div",{staticClass:"loader-inner"},[e("span",{staticClass:"double-bounce1"})," ",e("span",{staticClass:"double-bounce2"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{staticClass:"panel-copyright"},[e("div",{staticClass:"panel-mask"})," ",e("div",{staticClass:"panel-intro"},[e("p",{staticClass:"msg"},[t._s(t.message)])," ",e("p",{staticClass:"text"},[t._s(t.text)])," ",e("p",{staticClass:"copyright"},[t._s(t.copyright)])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.b7ca572cf5df5a7dfcb2.js.map