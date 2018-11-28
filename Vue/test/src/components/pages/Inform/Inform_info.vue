<template>
	<div id="inform_info">

		<div class="type" >
			
			<div class="data" >
				<div class="data-top">
					<ul>
						<li>
							<img src="http://m.buka.cn/static/img/star_2.png"/>
							<p>{{item.rate}}</p>
						</li>
						<li>
							<img :src="item.logo"/>
						</li>
						<li>
							<img src="http://m.buka.cn/static/img/fire.png"/>
							<p>{{item.lastchap}}</p>
						</li>
					</ul>
					
				</div>
				<div class="data-center">
					<p class="center-one">{{item.name}}</p>
					<p class="center-two">{{item.author}}</p>
					<p class="center-three">客户端观看</p>
					<p class="center-four">
					[每周二、四、六、日更新]{{item.name}}
					
					</p>
					<!--<i class="fa fa-angle-down" aria-hidden="true"></i>-->
				</div>
				<div class="data-bottom">
					<div class="bottom-one" @click="gopage(item.path)" v-for="(item,index) in sharelist" :key="index">
						<div class="icon">
							<i :class="item.iconClass"></i>
						</div>
						<p>{{item.title}}</p>
					</div>
				</div>
				
				<div class="data-add">
					<span class="add-one">连载话</span>
					<span class="add-two">更新时间：2018-11-17</span>
					<span class="add-three">倒叙<i class="fa fa-long-arrow-down"> </i></span>
				</div>
				
				<div class="data-last">
					<ul>
						<li v-for="(item,index) in data" :class="sel===item?'orange':''" @click="getList(item)" :key="index">{{item}}</li>
						
					</ul>
				</div>
			</div>
		</div>
		
		 <router-view></router-view>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import Axios from 'axios'
//	import {Toast, InfiniteScroll} from 'mint-ui';
//	Vue.use(InfiniteScroll);
	
	export default{
		name:'inform_info',
		components:{},//注册
		data(){
			return{
				sharelist:[{title:'分享',iconClass:'fa fa-share-square-o',path:'/Share'},
							{title:'投稿',iconClass:'fa fa-paper-plane-o',path:'/Submit'},
							{title:'评论',iconClass:'fa fa-commenting',path:'/Discuss'},
				     ],
				type:'列表页',
				data:['周家圣龙','周家圣龙2','周家圣龙3','蟒雀吞龙','蟒雀吞龙2','苏幼微1','苏幼微2','苏幼微3','苏幼微4',
				'苏幼微5','苏幼微6','苏幼微7','苏幼微8','苏幼微9','苏幼微10',
				'苏幼微11','苏幼微12','苏幼微13','苏幼微14','苏幼微15','苏幼微16',
				'神秘之地1','神秘之地2','神秘之地3','神秘之地4','神秘之地5','神秘之地6',
				'寻八脉1','寻八脉2','寻八脉3','寻八脉4','寻八脉5','寻八脉6','寻八脉7',
				'八脉现1','八脉现2','八脉现3','八脉现4','八脉现5','八脉现6','八脉现7',
				'林枫1','林枫2','林枫3','林枫4','林枫5','林枫6','林枫7','林枫8','林枫19','林枫10',
				'林枫11','林枫12','林枫13','林枫14','林枫15','林枫16','林枫17','林枫18','林枫19','林枫20',
				'林枫21',
				],
				sel:'周家圣龙',
//				newdata:[]
			}
		},
		methods:{
			getList(item){
				this.sel=item;
			},
			gopage(path){//编程式导航，router.push()
				this.item=JSON.parse(window.localStorage.getItem('data'))
				let id=this.item.mid;
			    this.$router.push({path:`${path}/${id}`,params:{id:id}})//跳转成这种形式的路由localhost:8080/#/Discuss/217438
			},
			getinfo(){
				this.item=JSON.parse(window.localStorage.getItem('data'));//存储到localStorage，不需要在存到数组了，可以直接获取				
//			    this.newdata.push(this.item);
//			    this.newdata=this.newdata[0];
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
.orange{
	background:#fe960e ;
	color: #fff;
}
#inform_info{
	.width(375);
	.padding(10,10,0,10);
	.margin(20,0,0,0);
	.type{
		.data{
			z-index: -1;
			.data-top{
				.height(150);
				z-index: -1;
				background: url(../../../../static/img/img4.png);
				background-size: cover;
				ul{
					display: flex;
					justify-content: space-around;
					position:relative;
					li:nth-child(1){
						.height(60);
						.width(40);
						position: absolute;
						.top(40);
						.left(30);
						display: flex;
						flex-direction: column;
						align-items: center;
						img{
							.width(30);
							.height(30);
						    .margin(0,0,10,0);
						}
						p{
							.font-size(15);
							color: #fff;
						}
					}
					li:nth-child(2){
						.width(106);
						.height(159);
						border: 2px solid #ccc;
						position: absolute;
						.top(17);
						img{
							.width(106);
						    .height(159);
						}
					}
					li:nth-child(3){
						.height(60);
						.width(40);
						position: absolute;
						.top(40);
						.right(30);
						display: flex;
						flex-direction: column;
						align-items: center;
						img{
							.width(30);
							.height(30);
						    .margin(0,0,10,0);
						}
						p{
							.font-size(15);
							color: #fff;
						}
					}
				}			
			}
			.data-center{
				.margin(30,0,0,0);
				text-align:center;
				z-index: 9999;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				p{
					.font-size(16);
				}
				.center-one{
					color: #333;
					.font-size(14);
					font-weight: bold;
					.margin(8,0,6,0);
				}
				.center-two{
					color:#80cece;
					.margin(0,0,15,0);
					.font-size(12);
				}
				.center-three{
					background:#fe960e;
					color:#fff;
					text-align: center;
					border-radius: 5px;
					.width(335);
					.height(35);
					.line-height(35);
					.font-size(14);
				}
				.center-four{
					.font-size(14);
					.line-height(25);
					.margin(15,20,0,20);
					position:relative;
					color: #333;
				}
				i{
					position: absolute;
					.font-size(22);
					.right(10);
					}
			}
			.data-bottom{
				display: flex;
				justify-content: space-around;
				.margin(20,0,10,0);
				.bottom-one{
					/*.padding(6,2,6,2);*/
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					.icon{
						.width(46);
						.height(46);
						.margin(0,0,10,0);
						border: 1px solid orange;
						border-radius:50%;
						text-align: center;
						.line-height(33);
						i{
						color: rgb(253, 197, 76);
						.font-size(24);
						
					}
					}
					
					p{
						.font-size(12);
						color: #333;
					}
					
				}
			}
			.data-add{
				.font-size(15);
				.margin(20,0,0,0);
				.add-one{
				.margin(0,10,0,10);
				}
				.add-two{
					color: #999;
					.font-size(14)
				}
				.add-three{
					.margin(0,0,0,70);
					color:#fe960e ;
				}
			}
			.data-last{
				.margin(10,0,0,10);
				ul{
					li{
						.width(80);
						.height(37);
						border-radius:3px;
						border:1px solid #ccc;
						display: inline-block;
						.margin(0,5,0,0);
						.margin(0,0,0,5);
						text-align: center;
						.line-height(37);
						color: #333;
						.font-size(12);
						
					}
				}
			}
		}
		
	
	}
	
}	
</style>