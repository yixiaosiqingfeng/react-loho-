<template>
	<div id="share">
		<Header></Header>
		<div class="share-nav">
			<router-link :to="{path:'/Inform/'+item}" v-for="(item,index) in share_list" :key="index">
				<i class="fa fa-long-arrow-left"></i>
			</router-link>
			<p>分享更多</p>
			<span>分享</span>
		</div>
		<div class="share-content">
			
		</div>
	</div>
</template>

<script>
import Header from '../../commons/Header';
	export default{
		name:'Share',
		components:{Header},
		data(){
			return{
				share_list:[]
			}
		},
		methods:{
			submit_getid(){
				let arr=window.location.href.split('/');
//				console.log(arr);
				this.share_list.push(arr[5]);
			}
		},
		created(){
			this.submit_getid()
//			console.log(this.share_list)
		}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../styles/main.less';
#share{
	.width(375);
	.padding(10,10,10,10);
	.share-nav{ 
		    .height(37);
			.width(375);
			.line-height(38);
			.font-size(15);
			text-align:center;
			position:fixed;
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
				.top(0);
				.right(30);
				.font-size(15);
				color:#333;
			}
		
	}
}
</style>