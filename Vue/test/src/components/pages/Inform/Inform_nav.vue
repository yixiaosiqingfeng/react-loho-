<template>
	<div id="info_nav">
		<div class="nav" >
			    <a href="#/Home/OrderBy"><i class="fa fa-long-arrow-left"></i></a>
				<p>{{item.mid}}</p>
				<span class="fa fa-angle-double-down"></span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Axios from 'axios'
	import {Toast, InfiniteScroll} from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	export default{
		name:'Inform_nav',
		components:{},//注册
		data(){
			return{
//				newdata:[]
			}
		},
		methods:{
			getDatas(){
				this.$axios.post("str/ranking/get_data",{
					
				})
				.then((res)=>{
//					console.log(res)
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			getinfo(){
				this.item=JSON.parse(window.localStorage.data);
//			    this.newdata.push(this.item);
//			    this.newdata=this.newdata[0];
//			    console.log(window.localStorage);
			}
		},
		created(){
//			console.log(this.$route.params)
            this.getinfo()
		}
		
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../styles/main.less';
#info_nav{
	.width(375);
    .height(37);
    .padding(0,10,0,10);
    position:fixed;
    .top(40);
    background:#fff;
    z-index:99;
	.nav{
			.height(37);
			display:flex;
			justify-content: space-between;
			.line-height(37);
			.font-size(16);
			text-align:center;
			border-bottom:1px solid #ccc;
			a{
				p{
					
				}
			}
			
			i{
				.font-size(24);
				color:#ccc;
			}
			span{
				.line-height(39);
				.font-size(20);
				color:#ccc;
			}
		}
	}
</style>