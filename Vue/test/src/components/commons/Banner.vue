<template>
   <!--{{name}}-->
   	<div id="banner">
      <div class="swiper-container">
	    <!-- Additional required wrapper -->
	    <div class="swiper-wrapper">
	        <!-- Slides -->
	        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
				<img  :src="item.pic_url" alt="" >
                 
	       </div>

	    </div>
	    <div class="swiper-pagination"></div>
	</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import Vue from 'vue';

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				name: '我是Banner',
				list:[]
			}
		},
		methods:{
           getBanner(){
//         	console.log(this)
           	this.$axios.get('/api1/api/v3/home',{params:{
           		page:1
           	}})
           	.then((res)=>{
//         		console.log(res);
           		this.list=res.datas.items[0].items
//         		console.log(this.list)
           		
           		Vue.nextTick(()=>{
           			this.mySwiper = new Swiper('.swiper-container', {
							loop: true,
							autoplay : 1000,
//							autoplayDisableOnInteraction : false,
						});	
						
           		})
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
           }
		},
		mounted(){
			
		},
		created(){
			this.getBanner()
		},
		destroyed(){
            // this.mySwiper=null
            delete this.mySwiper
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	@import '../../../node_modules/swiper/dist/css/swiper.css';
	
	#banner{
	.height(240);
	.margin(44,7,0,7);
	.swiper-slide{
		.width(360);
		.height(240);
		img{
			.width(360);
			.height(240);
		}
	}
}
</style>