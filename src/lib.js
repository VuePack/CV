/*
* @Author: kevinli
* @Date:   2016-09-15 22:33:38
* @Last Modified by:   kevinli
* @Last Modified time: 2016-10-03 20:52:29
*/

import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import VueRouter from 'vue-router'
import Flexible from './vendors/flexible.js'


let router;

Vue.use(VueResource);
Vue.use(VueAsyncData);
Vue.use(VueRouter);

window.$ = window.jQuery = jQuery;
window.Vue = Vue;
window.router = router = new VueRouter();

// require('./router.js');
// parseInt(10*Math.random()

var app = new Vue({
  el: '#container',
  render: h => h(App)
})


module.exports={};
