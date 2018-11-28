<template>
	<div id="b_footer">
		<div class="footer">
			<div>
				<!--<router-link tag="div" class="b_footer" to="">-->
					<ul>
						<li @click="gohome">
							<i class="fa fa-home" aria-hidden="true"></i>
							<span>漫展列表</span>
						</li>
						<li @click="goset">
							<i class="fa fa-cog" aria-hidden="true"></i>
							<span>设置</span>
						</li>
						<li @click="toggle">
							<i class="fa fa-user-o" aria-hidden="true"></i>
							<span >用户中心</span>
						</li>
					</ul>	
			</div>		
				<!--</router-link>-->
				<Showlist :show='isShow' @close="closeSlider"></Showlist>
			
		</div>
	</div>
<!--@toggle是创建一个自定义事件，修改父子之间的数据 ，自定义事件调用的就是toggle()方法-->	
<!--@close的close是子组件通过$emit传值过来的，然后触发下面的方法，进行弹框隐藏-->
</template>

<script>
import Showlist from './Showlist';

	export default {
		name: 'Footer',
		components: {Showlist},
		data() {
			return {
				isShow:false

			}
		},
		methods:{
			closeSlider(){
				this.isShow=!this.isShow
			},
			toggle(){
				this.isShow=!this.isShow
//				console.log(111);
			},
			gohome(path){
				this.$router.push('/')//编程式导航，回到首页
			},
			goset(path){
				this.$router.push('/Setting')//编程式导航
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import url("../../styles/main.less");
	#b_footer{
		background:#fff;
	    .width(375);
		.height(40);
		.footer {
			position: fixed;
			.right(0);
			.left(0);
			.bottom(0);
			.width(375);
			.height(40);
			.font-size(16);
			z-index:999;
			background:#fff;
			/*.container{*/
			div {
				.height(40);
				ul {
					.height(40);
					display: flex;
					justify-content: space-around;
					
					li{
						flex:1;
						width:32%;
						border-top: 1px solid #ccc;
						text-align: center;
						.line-height(40);
						i{
							color: #fe960e;
							.font-size(18);				
						}
						span{
							color:#333;
			               .font-size(14);
			               .margin(0,0,0,5);
			               text-shadow: 0,0,5px,red;
							
						}
					}
				}
			}
		}
	}
</style>