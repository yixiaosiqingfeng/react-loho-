<template>
	<div class="list">
		<div class="nav">
			<ul>
				<li  v-for="(item,index) in nav" >
					<!--{{item.path}}-->
					<router-link active-class='orange' tag='a' :to='item.path'>{{item.name}}</router-link></li >
			</ul>
		</div>
		<router-link class="list-a" :to="{path:'new/'+item.title}" tag='div' v-for="(item,index) in getDatas" :key='index'>
			<div class="list-img">
				<img :src="item.img"/>
			</div>
			<div class="list-title">
				{{item.title}}
			</div>
			
		</router-link>
		<div class="footer">
			下载客户端
		</div>
	</div>
</template>

<script>
	var str =''
	export default{
		name:'List',
		components:{},//注册
		data(){
			return{
				nav:[{name:'推荐',path:'/ee'},
				{name:'排行',path:'/Go'},
				{name:'分类',path:'/home'}
				],
				sel:'分类',
				getDatas:[]
			}
		},
		methods:{
			getList(item){
				this.sel=item;
				
			},
			getData(){
				this.$axios.get('/text/api/getData/Data')
				.then((res)=>{
					console.log(res)
	//				console.log(res.items[0].img)
					this.getDatas=res.items;
					 console.log(res.items[0].title)
//					var storage = window.localStorage
//						storage.setItem('data', str)
				})
				.catch((err)=>{
					console.log(err)
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
	.list{
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
				.orange{
					color:orange;
				}
			}
		}
		.list-a{
			.padding(30,0,0,0);
			display: inline-block;
			.h(106);
			.w(104);
			.margin(15,0,-20,15);
			.list-img{
				.w(77);
				.h(77);	
				.margin-left(15);
				img{
				.w(77);
				.h(77);	
				border-radius:50%;
				}
			}
			.list-title{
			
			.fs(14);
			.margin-top(18);
			.margin-left(25);
			}
			
		}
		.footer{
			.w(375);
			.h(100);
			.fs(16);
			.lh(100);
			color:#999;
			text-align: center;
			/*border-top: 1px dashed #ccc;*/
			background: #fff;
		}
		
		
		
	}
</style>