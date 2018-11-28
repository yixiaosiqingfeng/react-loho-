<template>
	<div>
		<Banner></Banner>
   	    <Main_1></Main_1>
   	    <Main_2></Main_2>
   	    
	</div>
       
</template>

<script>
import Banner from '../../commons/Banner.vue';
import Main_1 from './Main_1';
import Main_2 from './Main_2';

export default{
		name:'Tuijian',
		components:{Banner,Main_1,Main_2},
		data(){
			return{
				name:'我是Tuijian页面',		
				
			}
		},
	}
</script>

<style>
</style>