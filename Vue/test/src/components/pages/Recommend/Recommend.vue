<template>
   <div id="b_orderby">
	   	<router-link class="list-a" to="/Updates" tag='div' v-for="(item,index) in getDatas" :key='index'>
				<div class="list-img">
					<img :src="item.img"/>
				</div>
				<div class="list-title">
					{{item.title}}
				</div>
				
		</router-link>
		<div class="footer">
			下载客户端
		</div>
   	   <router-view></router-view>
   	   
   </div>
</template>

<script>
	export default{
		name:'OrderBy',
		components:{},
		data(){
			return{
				getDatas:[],
				
			}
		},
		methods:{
			getData(){
					this.$axios.get('/text/api/getData/Data')
					.then((res)=>{
	//					console.log(res)
						this.getDatas=res.items;						
	//					var storage = window.localStorage
	//						storage.setItem('data', str)
					})
					.catch((err)=>{
						console.log(err)
					})
			},
			
		},
		created(){
			this.getData()

		}

	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");
a{
	color: #000000;
}
    #b_orderby{
    	.margin(20,0,0,0);
    	display: inline-block;
    	.list-a{
			.padding(30,0,0,0);
			display: inline-block;
			.height(106);
			.width(104);
			.margin(15,0,-20,15);
			.list-img{
				.width(77);
				.height(77);	
				.margin(0,0,10,15);
				img{
				.width(77);
				.height(77);	
				border-radius:50%;
				}
			}
			.list-title{
			    .font-size(14);
				.margin(18,0,0,25);
			}
			
		}
		.footer{
			.width(375);
			.height(100);
			.font-size(16);
			.line-height(100);
			color:#999;
			text-align: center;
			background: #fff;
		}
    }
</style>