<template>
	<div class="top" 
		v-scroll-hide='isShow'  
    	scroll-hide-distance="300"
		
		 v-go-top:click
		>
		<div class="contain" v-show="isShow" >
			<i class="fa fa-arrow-up"></i>
		</div>
	</div>
	<!-- 
v-backtop-hide 通过一个自定义指令来监听页面滚动事件

 --> 
</template>

<script>
	export default{
		name:'top',
		data(){
			return{
				isShow:false
			}
		}
	}
	
</script>

<style lang="less" scoped>

	.top{
			position:fixed;
			bottom:20px;
			right: 20px;
			z-index: 999;
		.contain{
			width: 50px;
			height: 50px;
			color: #fff;
			font-size: 25px;
			line-height: 50px;
			text-align: center;
			background: orange;
			border-radius:50%;
			
		}
		&[size='small']{
			.contain{
			width: 40px;
			height: 40px;
			font-size:25px ;
			}
		}
		&[size='big']{
			.contain{
			width: 80px;
			height: 80px;
			font-size:50px ;
			}
		}
	}
</style>