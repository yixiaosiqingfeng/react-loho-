<template>
	<div class="tui">

		<div class="type" >
			<div class="nav">
				<p>{{this.$route.params.id}}</p>
				<a href="#/Go"><i class="fa fa-long-arrow-left"></i></a>
				<span class="fa fa-angle-double-down"></span>
			</div>
			<div class="data" >
				<div class="data-top">
					<div class="imgone">
						<img  src="../../../../img/star_2.png"/>
						<p>4.7</p>
					</div>
					<div class="imgtwo" >
						<img src="../../../../img/32h.jpg"/>
					</div>
					<div class="imgthree">
						<img  src="../../../../img/fire.png"/>
						<p>2783万</p>
					</div>
					
				</div>
				<div class="data-center">
					<p class="center-one">元尊</p>
					<p class="center-two">天蚕土豆/Dr.大吉</p>
					<p class="center-three">客户端观看</p>
					<p class="center-four" >
					[每周二、四、六、日更新]《元尊》漫画官方交流QQ群：
					387515261此漫画由天蚕土豆热门小说《元尊》改编。
					少年执笔，龙蛇舞动；劈开乱世，点亮苍穹。
					气掌干坤的世界里，究竟是蟒雀吞龙，还是圣龙崛起？！
					
					</p>
					<i class="fa fa-angle-down" aria-hidden="true"></i>
				</div>
				<div class="data-bottom">
					<div class="bottom-one">
						<img src="../../../../img/share_icon.png"/>
						<p>分享</p>
					</div>
					<div bottom-two>
						<img src="../../../../img/toudi.png"/>
						<p>投稿</p>
					</div>
					<div bottom-three>
						<img src="../../../../img/share_icon.png"/>
						<p>评论(6666)</p>
					</div>
				</div>
				
				<div class="data-add">
					<span class="add-one">连载(话)</span>
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
	import {Toast, InfiniteScroll} from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	export default{
		name:'Tui',
		components:{},//注册
		data(){
			return{
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
				newdata:[]
			}
		},
		methods:{
			getList(item){
				this.sel=item;
			},
			getDatas(){
				//http://m.buka.cn/
//				var arr = this.$route.params.id;
//				console.log(arr)
///res.datas.items?mid:id
				this.$axios.post("str/ranking/get_data",{
					
				})
				.then((res)=>{
					console.log(res)
//					console.log(mid)
					this.newdata=res.datas.items
					console.log(newdata)
				})
				.catch((err)=>{
//					console.log(err)
				})
				}
		},
		created(){
			console.log(this.$route.params)
			
			this.getDatas()
		}
		
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../style/main.less';/*引入*/
.orange{
	background:#fe960e ;
	color: #fff;
}
.tui{
	.type{
		.padding(44,0,0,0);
		.nav{
			.h(37);
			.w(375);
			.lh(38);
			.fs(16);
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
			span{
				position:absolute;
				.top(10);
				.right(30);
				.fs(20);
				color:#ccc;
			}
		}
		.data{
			.margin-top(37);
			z-index: -1;
			.data-top{
				.w(375);
				.h(150);
				z-index: -1;
				background:#ccc;
				position:relative;
				.imgtwo{
					display:inline-block;
					img{
					.w(106);
					.h(159);
					.top(20);
					.left(130);
					z-index: -1;
					position:absolute;
					}
				}
				.imgone{
					display:inline-block;
					.margin-top(25);
					.margin-left(30);
					img{
					.w(30);
					.h(30);
					
					}
					p{
						.fs(18);
						color:#fff;
						z-index: -1;
					}
				}
				.imgthree{
					display:inline-block;
					float:right;
					.margin-top(25);
					.margin-right(20);
					img{
					.w(30);
					.h(30);
					}
					p{
						.fs(16);
						color:#fff;
					}
				}
			}
			.data-center{
				.margin-top(50);
				text-align:center;
				z-index: 9999;
				p{
					.fs(16);
					.margin(10,0,10,0);
				}
				.center-one{
					
				}
				.center-two{
					color:#80cece;
				}
				.center-three{
					background:#fe960e;
					color:#fff;
					text-align: center;
					border-radius: 5px;
					.margin-left(22);
					.w(335);
					.h(35);
					.lh(35);
				}
				.center-four{
					.fs(14);
					.margin(15,20,0,20);
					position:relative;
					/*.h(20);
					overflow: hidden;*/
				}
				i{
					position: absolute;
					.fs(22);
					.right(10);
					}
			}
			.data-bottom{
				div{
					display: inline-block;
					.margin-top(20);
					img{
						.w(42);
						.h(42);
						.margin-left(35);
						.margin-right(30);
					}
					p{
						.fs(16);
						.margin-left(30);
						.margin-top(10);
					}
					
				}
			}
			.data-add{
				.fs(15);
				.margin-top(20);
				.add-one{
				.margin(0,10,0,10);
				}
				.add-two{
					color: #999;
					.fs(14)
				}
				.add-three{
					.margin-left(70);
					color:#fe960e ;
				}
			}
			.data-last{
				.margin-top(10);
				.margin-left(10);
				ul{
					li{
						.w(80);
						.h(37);
						border-radius:3px;
						border:1px solid #999;
						display: inline-block;
						.fs(15);
						.margin-right(5);
						.margin-left(5);
						text-align: center;
						.lh(37);
						color: #666;
						
					}
				}
			}
		}
		
	
	}
	
}	
</style>