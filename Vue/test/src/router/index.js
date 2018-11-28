import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //某一个组件 
import Main_1 from '../components/pages/Home/Main_1' 
import Recommend from '../components/pages/Recommend/Recommend' 
import OrderBy from '../components/pages/OrderBy/OrderBy'
import Tuijian from '../components/pages/Home/Tuijian'
import Search from '../components/pages/Home/Search'
import Setting from '../components/pages/Home/Setting'
import My from '../components/pages/My/My'
import Reg from '../components/pages/My/Reg'
import Login from '../components/pages/My/Login'
import Inform from '../components/pages/Inform/Inform'
import Share from '../components/pages/Inform/Share'
import Collection from '../components/pages/Inform/Collection'
import Submit from '../components/pages/Inform/Submit'
import Discuss from '../components/pages/Inform/Discuss'
import Updates from '../components/pages/Recommend/Updates' 
import Searchnews from '../components/pages/Inform/Searchnews'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',//匹配的hash地址
      redirect:'Home'//重定向，检测到如果是跟路径的话，直接跳到home页面
    },
    {
      path: '/Home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home,// 该路由所引用的组件
      children:[
         {path: '/',name: 'Tuijian',component: Tuijian},//一进去就默认推荐页
    	   {path:'Recommend',name:'Recommend',component:Recommend},
    	   {path:'OrderBy',name:'OrderBy',component:OrderBy},
    	   {path:'Tuijian',name:'Tuijian',component:Tuijian},
    	   ]
    }, 
     {
      path: '/My',//匹配的hash地址
      name: 'My',//路由的名字
      component: My,// 该路由所引用的组件
      children:[
         {path: '/',name: 'Login',component: Login},//一进去就默认登陆页
         {path:'login',name:'Login',component:Login},
    	   {path:'reg',name:'Reg',component:Reg},
    	   
    	   ]
    },
    {
      path: '/Share/:id',//匹配的hash地址
      name: 'Share',//路由的名字
      component: Share,// 该路由所引用的组件
    },
    {
      path: '/Collection',//匹配的hash地址
      name: 'Collection',//路由的名字
      component: Collection,// 该路由所引用的组件
    },
    {
      path: '/Inform/:id',//匹配的hash地址
      name: 'Inform',//路由的名字
      component: Inform,// 该路由所引用的组件
    },
    {
      path: '/Submit/:id',//匹配的hash地址
      name: 'Submit',//路由的名字
      component: Submit,// 该路由所引用的组件
    },
    {
      path: '/Discuss/:id',//匹配的hash地址
      name: 'Discuss',//路由的名字
      component: Discuss,// 该路由所引用的组件
    },
     {
      path: '/Updates',//匹配的hash地址
      name: 'Updates',//路由的名字
      component: Updates,// 该路由所引用的组件
    },
    {
      path: '/Search',//匹配的hash地址
      name: 'Search',//路由的名字
      component: Search,// 该路由所引用的组件
    },
    {
      path: '/Searchnews',//匹配的hash地址
      name: 'Searchnews',//路由的名字
      component: Searchnews,// 该路由所引用的组件
    },
    {
      path: '/Setting',//匹配的hash地址
      name: 'Setting',//路由的名字
      component: Setting,// 该路由所引用的组件
    },
    
    
  ]
  
})