<template>
	<div class="new">

		
		<div class="type">
			<div class="nav">
				<p>{{this.$route.params.index}}</p>
				<a href="#/home"><i class="fa fa-long-arrow-left"></i></a>
			</div>
			<ul
				 v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="10"
				>
				<router-link tag='li' to="/dateil" v-for="(item,index) in newdata" :key='index'>
					<img :src="item.logos" alt="" >
					<p>{{item.name}}</p>
					<p class="p">更新到:{{item.lastup}}</p>
				</router-link>
				
			</ul>
		</div>
		<top size=""></top>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Axios from 'axios'
	import {Toast, InfiniteScroll} from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	import Dateil from './Dateil'//引入组件
	
	export default{
		name:'New',
		components:{},//注册
		data(){
			return{
				type:'列表页',
				newdata:[]
			}
		},
		methods:{
			loadMore(){
			this.getData();	
			},
			getData(){
				this.toast=Toast({
					  message: 'loading',
					  iconClass: '"fa fa-circle-o-notch fa-spin'
					  //fa-spin 在字体库加了以后回转
					});//发起请求
				
				this.$axios.post('api/category/ajax_group',{
					__t:new Date(),
				})
				.then((res)=>{
//					this.newdata=res.datas.items;
					//concat拼接后面的数据
					this.newdata=this.newdata.concat(res.datas.items)
					console.log(this.newdata)
					console.log(res.datas.items[0].mid)
					this.toast.close();
					
				})
				.catch((err)=>{
					this.toast.close();
					console.log(err)
				})
			}
		},
		created(){
//         this.getData();
//			var array =this.$route.params.index 
			console.log(this.$route.params.index);
			
	}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../style/main.less';/*引入*/
.new{
	.type{
		.padding(44,0,0,0);
		.nav{
			.h(37);
			.w(375);
			.lh(38);
			.fs(16);
			background:#fff;
			text-align:center;
			position:fixed;
			background:#fff;
			border-bottom:1px solid #ccc;
			i{
				.fs(24);
				.top(3);
				.left(22);
				position:absolute;
				display:inline-block;
				color:#ccc;
			}
		}
		ul{
			.w(375);
			.padding(33,0,0,0);
			.margin-left(5);
			.margin-top(15);
			li{
				width:30%;
				.h(218);
				float:left;
				.margin(10,5,10,5);
				
				img{
					.w(108);
					.h(163);
					border:1px solid #ccc;
				}
				p{
					.w(108);
					.fs(14);
					.margin-top(5);
				}
				.p{
					color:#999;
					.fs(13);
				}
			}
		}
	
	}
	
}	
</style>