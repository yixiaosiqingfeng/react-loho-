<template>
   <div id="Inform">
   	    <Header></Header>
   	   <Inform_nav></Inform_nav>
   	   <Inform_info></Inform_info>
   </div>
</template>

<script>
import Header from '../../commons/Header';
import Inform_nav from './Inform_nav';
import Inform_info from './Inform_info';


	export default{
		name:'Inform',
		components:{Header,Inform_nav,Inform_info},
		data(){
			return{
				name:'我是Inform页面',
//				list_info:[]
			}
		},
		methods:{
//			getinfo(){
//				let item=this.$router.history.current.params;
//			    this.list_info.push(list_info);
//			    console.log(list_info);
//			}
		},
		created(){
//			this.getinfo();
//			console.log(this.$router)
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
    #Inform{
    	/*color:@bg-color;*/
    }
</style>