// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  './styles/common/base.css'
import '../node_modules/animate.css/animate.css'

import Vue from 'vue'//引入vue模块
import store from './store/index.js'
import App from './App'//引入app组件

import MH from '../MH/index.js';
Vue.use(MH)// 调用模块 里的 install 方法  并且将 Vue 实例进行传递

import router from './router/index.js'


//引入axios
import Axios from 'axios'
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
    // Do something with response error
    return Promise.reject(error);
});
  

  
  
  
  
Vue.prototype.$axios=Axios//挂载axios，便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//挂载app组件
  template: '<App/>'
})
