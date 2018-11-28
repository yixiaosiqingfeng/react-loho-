<template>
   <div id="recommend">
   	
	   	<div class="contain">
			<ul class="godata">
				<!--<router-link tag='li' :to="{path:'/Inform/'+item.mid}" @click="goinfo(item)" v-for="(item,index) in newdata" :key='index'>-->
				<li @click="goinfo(item)" v-for="(item,index) in newdata" :key='index'>
					<img :src="item.logos" alt="" >
					<p>{{item.name}}</p>
					<p class="p">{{item.author}}</p>
				</li>	
				<!--</router-link>-->
					
			</ul>
		</div>
		
   	   <router-view></router-view>
   	  
   </div>
</template>

<script>
	export default{
		name:'recommend',
		components:{},
		data(){
			return{
				newdata:[]
			}
		},
		methods:{
			getData(){
	//				http://m.buka.cn/ranking/get_data
					this.$axios.post('api1/ranking/get_data',{
						__t:new Date()
					})
					.then((res)=>{
//						console.log(res)
						this.newdata=res.datas.items;
//						console.log(this.newdata)
					})
					.catch((err)=>{
	//					console.log(err)
					})
			},
			goinfo(item){//编程式导航，router.push()
				let id=item.mid;
                this.item=JSON.stringify(item);
                window.localStorage.setItem('data',this.item);//登录成功后，存储一个login的状态
//              console.log( window.localStorage);
			    this.$router.push({path:'/Inform/'+id})//跳转成这种形式的路由localhost:8080/#/Discuss/217438
//              this.$router.push({name:'Inform',params:{id:id}})//name方法传id
			}
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
.orange{
		color:orange;
	}
	#recommend{
		.margin(6,0,0,0);
			.contain{
				.godata{
					.width(375);
					.width(375);
					.padding(30,0,0,0);
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					li{
						width:30%;
						.height(218);
						.margin(10,0,25,0);
						img{
							.width(108);
							.height(163);
							border:1px solid #ccc;
						}
						p{
							.width(108);
							.font-size(14);
							.margin(5,0,0,0);
						}
						.p{
							color:#999;
							.font-size(13);
						}
					}
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