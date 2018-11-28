<template>
	<div id="discuss">
		<Header></Header>
		<div class="discuss-nav">		
			<div class="discuss-navlist">
					<p>评论</p>
					<!--<a href="#/Inform>-->
						<router-link :to="{path:'/Inform/'+item}" v-for="(item,index) in discuss_list" :key="index">
						<i class="fa fa-long-arrow-left"></i>
					</router-link>
					<span class="fa fa-commenting"></span>
			</div>
		</div>
		<div class="discuss-content">
			<ul>
				<li v-for="(item,index) in discuss_content" :key="index">
					<div class="content-top">
						<div class="content-top-left">
							<img :src="item.photo"/>
						</div>
						<div class="content-top-right">
							<p>
								<span>{{item.name}}</span>
								<span>{{item.time}}</span>
							</p>
							<p>{{item.content}}</p>
						</div>
					</div>
					<div class="content-bottom">
						<p>{{item.reply}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Header from '../../commons/Header';
	export default{
		name:'Discuss',
		components:{Header},
		data(){
			return{
				discuss_list:[],
				discuss_content:[{photo:'http://i-r7.ibuka.cn/logo/user/head/20170126/6488903-100337_260260.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'不好意思，我笑出了声',reply:'回复:(0)'},
				                 {photo:'http://q.qlogo.cn/qqapp/100314966/C7496DE6CEC4F1A9B246143CA6FAE01B/100',
				                  name:'莫尘埃',time:'今天15:58',content:'不好意思，我笑出了声,哈哈哈哈哈哈',reply:'回复:(0)'},
				                 {photo:'http://i-r7.ibuka.cn/logo/user/head/20140808/2531487-065507_100100.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'卧槽，这是事了拂衣去，深藏功与名',reply:'回复:(0)'},
				                 {photo:'http://i-r7.ibuka.cn/logo/user/head/20180727/14249712-095633_260260.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'神特么，"拿着"',reply:'回复:(0)'},
				                 {photo:'http://i-r7.ibuka.cn/logo/user/head/20170126/6488903-100337_260260.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'不好意思，我笑出了声',reply:'回复:(0)'},
				                 {photo:'http://q.qlogo.cn/qqapp/100314966/C7496DE6CEC4F1A9B246143CA6FAE01B/100',
				                  name:'莫尘埃',time:'今天15:58',content:'不好意思，我笑出了声,哈哈哈哈哈哈',reply:'回复:(0)'},
				                 {photo:'http://i-r7.ibuka.cn/logo/user/head/20140808/2531487-065507_100100.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'卧槽，这是事了拂衣去，深藏功与名',reply:'回复:(0)'},
				                 {photo:'http://i-r7.ibuka.cn/logo/user/head/20180727/14249712-095633_260260.jpg',
				                  name:'莫尘埃',time:'今天15:58',content:'神特么，"拿着"',reply:'回复:(0)'}]
			}
		},
		methods:{
			getid(){
				let arr=window.location.href.split('/');
				console.log(arr);
				this.discuss_list.push(arr[5]);
			}
		},
		created(){
			this.getid()
//			console.log(this.discuss_list)
		}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../styles/main.less';
#discuss{
	.width(375);
	.padding(0,10,0,10);
	.discuss-nav{	
		.height(37);
		position:fixed;
		.top(40);
		z-index:99;
		.discuss-navlist{ 
			    .height(37);
				.width(375);
				.line-height(38);
				.font-size(16);
				text-align:center;
				background:#fff;
				border-bottom:1px solid #ccc;
				i{
					.font-size(24);
					.top(3);
					.left(22);
					position:absolute;
					display:inline-block;
					color:#ccc;
				}
				span{
					position:absolute;
					.top(10);
					.right(30);
					.font-size(20);
					color:#ccc;
				}
			
		}
	}
	.discuss-content{
		.height(70);
		.margin(50,0,0,0);
		ul{
			.height(70);
		    li{
		    	display:flex;
		        flex-direction: column;
		        .margin(10,0,40,0);
		    	.content-top{
		    		.height(50);
		    		display:flex;
		    		.content-top-left{
		    			.width(50);
		    			.margin(0,20,0,0);
		    			img{
		    				.width(45);
		    				.height(45);
		    				border-radius: 50%;
		    			}
		    		}
		    		.content-top-right{
		    			.width(305);
		    			display:flex;
		                flex-direction: column;
		                .line-height(20);
		    			p{
		    				flex:1;
		    				.font-size(14);
		    				display:flex;
		    				span{
		    					.margin(0,14,0,0);
		    				}
		    				span:nth-child(1){
		    					color: #666;
		    					.font-size(12);
		    				}
		    				span:nth-child(2){
		    					color: #999;
		    					.font-size(11);
		    				}
		    			}
		    			p:nth-child(2){
		    				.font-size(13);
		    				color:#555;
		    			}
		    			
		    		}
		    	}
		    	.content-bottom{
		    		position:relative;
		    		.margin(4,0,0,0);
		    		p{
		    			position: absolute;
		    			.top(0);
		    			.right(3);
		    			.font-size(11);
		    			color:#999;
		    		}
		    	}
		    }
		}
	}
}
</style>