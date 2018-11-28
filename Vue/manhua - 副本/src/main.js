// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/base.css'
import '../static/css/font-awesome.css'
import '../static/css/base.css'

import Vue from 'vue'
//es6引入vue模块
import App from './App'

// 引入自研ui框架

import MH from '../MH/index.js';
Vue.use(MH)// 调用模块 里的 install 方法  并且将 Vue 实例进行传递

//引入app组件
import router from './components/router/index.js'
//引入axios
import Axios from 'axios'

//引入
//请求拦截

Axios.interceptors.request.use(function (config) {
	console.log(config)
    return config;
 }, function (error) {
    return Promise.reject(error);
});
  
Axios.interceptors.response.use(function (response) {

    return response.data;
 }, function (error) {
    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios//挂在axios,便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//挂载APP组件
template: '<App/>'
//相当于<APP></APP>  //作用是：替换掉index.html中的<div id="app"></div>,
//避免重复
})
