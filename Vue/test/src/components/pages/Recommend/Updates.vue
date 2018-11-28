<template>
   <div id="recommend">
   	<Header></Header>
   	    <div class="update-nav">
   	    	<router-link tag="li" to="/Home/Recommend">
				<i class="fa fa-long-arrow-left"></i>
			</router-link>
			<p>最近更新</p>
   	    </div>
   	
	   	<div class="contain">
	   		<ul class="godata"
				 v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="10"
				>
				<li @click="goinfo(item)" v-for="(item,index) in newdata" :key='index'>
				<!--<router-link tag='li' :to="{path:'/Inform/'+item.mid}" v-for="(item,index) in newdata" :key='index'>-->
					<img :src="item.logos" alt="" >
					<p>{{item.name}}</p>
					<p class="p">{{item.author}}</p>
				<!--</router-link>-->
				</li>
			</ul>
		</div>
		<top size=""></top>
   	   <router-view></router-view>
   	  
   </div>
</template>

<script>
import Header from '../../commons/Header';
import Vue from 'vue'
import Axios from 'axios'
import {Toast, InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);

	export default{
		name:'recommend',
		components:{Header},
		data(){
			return{
				newdata:[],
			}
		},
		methods:{
			loadMore(){//加载更多
			     this.getData();	
			},
			getData(){
				   this.toast=Toast({
					  message: 'loading',
					  iconClass: '"fa fa-circle-o-notch fa-spin'
					  //fa-spin 在字体库加了以后回转
					});//发起请求
					this.$axios.post('api1/category/ajax_group',{
						__t:new Date()
					})
					.then((res)=>{
//						console.log(res)
						this.newdata=this.newdata.concat(res.datas.items)
	                    this.toast.close();
					})
					.catch((err)=>{
	//					console.log(err)
	                    this.toast.close();
					})
			},
			goinfo(item){//编程式导航，router.push()
				let id=item.mid
                this.item=JSON.stringify(item);
                window.localStorage.setItem('data',this.item);//登录成功后，存储一个login的状态
//              console.log( window.localStorage);
			    this.$router.push({path:'/Inform/'+id})//跳转成这种形式的路由localhost:8080/#/Discuss/217438//跳转成这种形式的路由localhost:8080/#/Discuss/217438
			},
			
		},
		
		created(){
			this.getData()
//			this.goinfo()
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
		.width(375);
	    background:#fff;
		.update-nav{
			.height(37);
			.width(375);
			.line-height(37);
			.font-size(15);
			position: fixed;
			.top(40);
			background: #fff;
			text-align:center;
			border-bottom:1px solid #ccc;
			li{		
				position: relative;
				i{
				.font-size(24);
				.top(3);
				.left(22);
				position:absolute;
				display:inline-block;
				color:#ccc;
			}
			}
			
			span{
				position:absolute;
				.top(0);
				.right(30);
				.font-size(15);
				color:#333;
			}
		
	
		}
		.contain{
			.godata{
				.width(375);
				.padding(30,0,0,0);
				/*.margin(20,0,0,5);*/
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
							.font-size(12);
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