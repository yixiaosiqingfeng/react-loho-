import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../page/Home/Home' //某一个组件
import New from '../page/Home/New' //某一个组件
import Dateil from '../page/Home/Dateil' //某一个组件
import Go from '../page/Home/Go' //某一个组件
import Tui from '../page/Home/Tui' //某一个组件
Vue.use(Router)

export default new Router({
  routes: [
	  {
      path: '/',//匹配的hash地址
	  	redirect:'/home'
	  },
    {
      path: '/home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
    },
    {
      path: '/new/:index',
      name: 'New',
      component: New
   
    },
    {	 
		     path:'/Tui/:id',
		     name:'Tui',
		     component:Tui
		     
    },
    {	 
		      path: '/Go',
		      name: 'Go',
		      component: Go
     },
    
    {
      path: '/dateil',
      name: 'Dateil',
      component: Dateil
    }
   
    
  ]
})

/*
下载路由插件  vue init  webpack  
通过<router-view> 开辟一片空间
检测hash变化 地址栏#后边那一块
匹配相应的组件信息  进行挂载显示

要在vue的实例中挂载router

a 标签可以实现跳转  一般我们用内置的router-link
<router-link  tag='li' class="fa fa-bars"  to="/movie">
to 跳转hash
tag 渲染元素

*/  

