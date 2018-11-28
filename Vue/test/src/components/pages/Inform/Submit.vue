<template>
	<div id="sumit">
		<Header></Header>
		<div class="sumit-nav">
			<router-link :to="{path:'/Inform/'+item}" v-for="(item,index) in submit_list" :key="index">
				<i class="fa fa-long-arrow-left"></i>
			</router-link>
			<p>漫画投稿</p>
			<span>须知</span>
		</div>
		<div class="sumit-content">
			<ul>
				<li v-for="(item,index) in submit_cont" :key="index">
					<div class="content-left">
						<div class="content-left-left">
							<img :src="item.img"/>
						</div>
						<div class="content-left-right">
							<p>
							    {{item.name}}
							</p>
							<p>
								{{item.time}}
							</p>
						</div>
					</div>
					<div class="content-right">
						{{item.chapter}}
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
				submit_list:[],
				submit_cont:[{img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-11-8',chapter:'投递了31话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-11-15',chapter:'投递了32话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-11-22',chapter:'投递了33话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-11-29',chapter:'投递了34话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-5',chapter:'投递了35话'},{img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-7',chapter:'投递了36话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-15',chapter:'投递了37话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-21',chapter:'投递了38话'},{img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-26',chapter:'投递了39话'},
				              {img:'http://i-r7.ibuka.cn/logo/user/head/20180722/14184446-155909_260260.jpg',
				              name:'常盘勇者',time:'2018-12-31',chapter:'投递了40话'}]
			}
		},
		methods:{
			submit_getid(){
				let arr=window.location.href.split('/');
//				console.log(arr);
				this.submit_list.push(arr[5]);
			}
		},
		created(){
			this.submit_getid()
//			console.log(this.submit_list)
		}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../styles/main.less';
#sumit{
	.width(375);
	/*.padding(10,10,10,10);*/
	.sumit-nav{ 
		    .height(37);
			.width(375);
			.line-height(38);
			.font-size(15);
			text-align:center;
			position:fixed;
			.top(40);
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
	.sumit-content{
		.height(60);
		.margin(50,0,0,0);
		.padding(0,13,0,13);
		ul{
			.height(60);
			li{
				.height(60);
				display:flex;
				justify-content: space-between;
				.margin(10,0,30,0);
				.content-left{
					width: 35%;
					display:flex;
				    justify-content: space-between;
				    .content-left-left{
				    	width: 30%;
				    	.margin(0,20,0,0);
				    	text-align:center;
				    	img{
				    		.height(40);
				    		.width(40);
				    	}
				    }
				    .content-left-right{
				    	width: 55%;
				    	display:flex;
				    	flex-direction: column;
				    	.line-height(27);
				    	p{
				    		flex:1;
				    		
				    	}
				    	p:nth-child(1){
				    		.font-size(15);
				    		color:#333;
				    	}
				    	p:nth-child(2){
				    		.font-size(12);
				    		color:#999;
				    	}
				    }
				}
				.content-right{
					width: 35%;
					.padding(0,10,0,0);
					box-sizing: border-box;
					.font-size(15);
				    color:#666;
				    .line-height(58);
				    text-align: right;
				}
			}
		}
	}
}
</style>