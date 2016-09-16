/*
* @Author: kevinli
* @Date:   2016-09-15 22:33:38
* @Last Modified by:   kevinli
* @Last Modified time: 2016-09-16 12:39:23
*/

import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import VueRouter from 'vue-router'
import flexible from './vendors/flexible.js'
import layer from './vendors/layer_mobile/layer.js'



let router;


Vue.use(VueResource);
Vue.use(VueAsyncData);
Vue.use(VueRouter);




window.$ = window.jQuery = jQuery;
window.Vue = Vue;
window.router = router = new VueRouter();


require('./router.js');

// router.start(window.Vue, '#app');

new Vue({
  el: 'body',
  components: { App }
})


module.exports={};
