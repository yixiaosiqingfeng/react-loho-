<template>
	<div id="searchall">
		<div id="search">
			<div class="search-box">
				<div class="search-left">
					<i class="fa fa-search"></i>
				    <input type="text" id="search-input" placeholder="漫画 | 作者  | 资讯 | 漫展"/>
				</div>
				<div class="search-right">
				<span @click="goback">取消</span>
				</div>
			</div>
			<div class="search-border"></div>
		</div>
		<div id="searchnews">
			<ul>
				<li v-for="(item,index) in searchdata" :key="index">
				   <div class="searchnew-left">
				   	  <img :src="item.thumb"/>
				   </div>
				   <div class="searchnew-right">
				   	    <p>{{item.title}}</p>
				   	    <p>{{item.author}}</p>
				   	    <p>评分：{{item.average_score}}</p>
				   	    
				   	    <p>{{item.description}}</p>			   	    			   	   
				   </div>
				</li>
			</ul>
		</div>
</div>
</template>

<script>
	export default{
		name:'inform_info',
		components:{},//注册
		data(){
			return{
				searchdata:[]
			}
		},
		methods:{
			goback(){
				this.$router.push({path:'/'})
			},
			getinfo(){
//				console.log(this.$route.params.item);
//				let item=this.$router.params.item;
			    this.searchdata.push(this.$route.params.item);
//			    this.searchdata=this.searchdata;
//			    console.log(this.searchdata);
			}
		},
		created(){
			//console.log(this.$route.params);//输出传回来的id
			this.getinfo();
		}
		
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../styles/main.less';/*引入*/
#searchall{
	.width(375);

	#search{
		.width(375);
		.padding(10,10,10,10);
		.search-box{
			.height(40);
			display:flex;
			justify-content: space-between;
			.search-left{
				.width(300);
				border:1px solid #ccc;
				background:rgba(245, 245, 245,.9);
				position: relative;
				display:flex;
			    justify-content: space-between;
				i{
					.font-size(20);
					position: absolute;
		            .top(9);
		            .left(10);
		            color:#999;
			    }
				input{
					display:inline-block;
					.width(250);
					.height(38);
					.font-size(13);
					background:rgba(245, 245, 245,.1);
					position: absolute;
		            .left(40);
				}
			}
			.search-right{
				.font-size(16);
				.line-height(38);
				span{
					
				}
			}
			
		}
		.search-border{
			border: 1px solid #eee;
			.margin(10,0,0,0);
		}
		.search-content{
			ul{
				display:flex;
				flex-direction: column;
				li{
					.height(30);
					.line-height(30);
					.font-size(14);
					color: #333;
					.margin(5,10,15,10);
					border-bottom:1px dashed #eee ;
				}
			}
		}
	}
	#searchnews{
		.width(375);
		/*.height(192);*/
		/*border:1px solid #ccc;*/
		.padding(10,10,10,10);
		.margin(10,0,0,0);
		ul{
			.height(192);
			li{
				.height(172);
				display:flex;
				justify-content: space-between;
				.searchnew-left{
					.width(125);
					.height(166);
					img{
						.width(125);
					    .height(166);
					}
				}
				.searchnew-right{
					.width(200);
					.height(166);
					display:flex;
					flex-direction: column;
					justify-content: space-around;
					p:nth-child(1){
						.font-size(15);
						color:#333;
						font-weight: bold;
					}
					p:nth-child(2){
						.font-size(14);
						color:skyblue;
					}
					p:nth-child(3){
						.font-size(12);
						color:#888;
					}
					p:nth-child(4){
						.height(65);
						overflow: hidden;
						.font-size(12);
						color:#888;
					}
					
				}
			}
		}
	}
}
</style>