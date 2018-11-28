<template>
  <div id="app">
     <Header></Header>
  	 <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/common/Header'//引入组件
//import Home from './components/page/Home/Home.vue'//引入组件
//import New from './components/page/Home/New.vue'//引入组件
//import Dateil from './components/page/Home/Dateil.vue'//引入组件
export default {//es6中挂载组件
  name: 'App',//当前组件的名字
  components: {
    Header//,。。。,可以引入多个
    },
    data(){
    	return{
    		name:111
    	}
    },
    methods:{
    	add(){
    		this.name++
    	}
    },
    created(){
    	console.log('created');
    },
    mounted(){
    	console.log('mounted');
    },
    updated(){
    	console.log('updata');
    }
    
}
</script>

<style>
#app {
 
}
</style>
