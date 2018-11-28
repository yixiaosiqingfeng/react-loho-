<template>
	<div class="go">
		
		<div class="contain">
			<ul class="godata">
				<router-link tag='li' :to="{path:'Tui/'+item.mid}" v-for="(item,index) in newdata" :key='index'>
					<img :src="item.logos" alt="" >
					<p>{{item.name}}</p>
					<p class="p">{{item.author}}</p>
				</router-link>
				
			</ul>
		</div>
			
		<div class="footer">
			下载客户端
		</div>
		
	</div>
</template>

<script>
import Tui from './Tui.vue'
	var str =''
	export default{
		name:'Go',
		components:{},//注册
		data(){
			return{
				nav:[{name:'推荐',path:'/ee'},
				{name:'排行',path:'/Go'},
				{name:'分类',path:'/home'}
				],
				sel:'分类',
				newdata:[]
			}
		},
		methods:{
			getList(item){
				this.sel=item;
				
			},
			getData(){
				//http://m.buka.cn/
				this.$axios.post('str/ranking/get_data',{
					__t:new Date()
				})
				.then((res)=>{
//					console.log(res)
	//				console.log(res.items[0].img)
					this.newdata=res.datas.items;
				})
				.catch((err)=>{
//					console.log(err)
				})
				}
		},
		created(){
			this.getData()
		}

	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../style/main.less';/*引入*/
a{
	color: #000000;
}
.orange{
		color:orange;
	}
	.go{
		.w(375);
		.padding(44,0,0,0);
		display: inline-block;
		.nav{
			.w(375);
			.h(38);
			border-bottom:1px solid #ccc; 
			position:fixed;
			background:#fff;
			ul{
				display: flex;
				justify-content: space-between;
				.fs(18);
				text-align:center;
				.lh(38);
				.padding(0,40,0,40);
				li{
					
					}
				
			}
		}
		.contain{
		.godata{
			.w(375);
			.padding(38,0,0,0);
			.margin-left(5);
			.margin-top(15);
			 overflow: hidden;/*解决高度塌陷*/
			li{
				width:30%;
				.h(218);
				float:left;
				.margin(10,5,13,5);
				
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
		.footer{
			.w(375);
			.h(100);
			.fs(16);
			.lh(100);
			color:#999;
			text-align: center;
			background: #fff;
		}
		
		
		
	}
</style>