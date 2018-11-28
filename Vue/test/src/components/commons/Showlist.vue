<template>
	<div id="showlist" v-show="show">
		<!--<transition 
		  enter-active-class='animated slideInBottom'
		  leave-active-class='animated slideOutBottom'
        >-->
			<div class="show-new" v-show="show">
				<div class="yonghu">
					<p>
						<i class="fa fa-times"></i>
					</p>
					<p>用户中心</p>
				</div>
			
				<ul class="xinxi">				
					<!--<router-link tag="li" v-for="(item,index) in list" :key="index" 
						        active-class="red" :to="item.path">
						<i :class="item.iconClass"></i>
						<p>{{item.name}}</p>
					</router-link>-->
					<li @click="gopage(item.path)" v-for="(item,index) in list" :key="index">
						<i :class="item.iconClass"></i>
						<p>{{item.name}}</p>
					</li>
			    </ul>
			</div>
		<!--</transition>-->
		<transition 
		  enter-active-class='animated fadeIn'
		  leave-active-class='animated fadeOut'
       >
			<div class='mask' v-show="show"></div>
		</transition> 
	</div>
       
</template>

<script>
	//上面的:to也可以写成---:to="{path:item.path}"
export default{
		name:'Showlist',
		components:{},
		props:['show'],//给父组件Footer.vue抛出一个参数
		data(){
			return{
				name:'我是Showlist页面',		
				list:[{name:'我的',iconClass:'fa fa-user-plus',path:'/My'},
				      {name:'分享',iconClass:'fa fa-share-alt',path:'/Share'},
				      {name:'收藏中心',iconClass:'fa fa-star-o',path:'/Collection'},
				]
			}
		},
		methods:{
			gopage(path){//编程式导航，router.push()
//				this.show=false
                this.$emit('close')//给父组件传个值，因为我们需要在跳转时把弹框关掉，而我们在这边不能直接修改数据，所以通过父组件来修改
				this.$router.push({path:path})
			}
		}

	}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
#showlist{
	.width(375);
	position:absolute;
	.top(-250);
	.padding(15,0,20,0);
	.show-new{ 
		background:#fff;
		.yonghu{
			.height(50);
			.padding(25,0,20,0);
			display: flex;
			.margin(10,0,15,0);
			p{
				text-align: center;
			}
			p:nth-child(1){
				width: 10%;
				i{
					color: #fe960e;
					.font-size(22);	
				}
			}
			p:nth-child(2){
				width: 90%;
				.font-size(15);	
				font-weight: bold;
			}
			
		}	
		.xinxi{
			.height(160);
			display: flex;
			justify-content: space-between;
			
			li{
				flex:1;
				.width(120);		
				display: flex;
				flex-direction: column;
				align-items: center;
				i{
					.font-size(29);
					.margin(30,0,10,0);
					color: #999;
				}
				p{
					text-align:center;	
					.font-size(13);	
					color: #333;
				}
				
			}
		}
	}
	.mask{
		position: fixed;
		top:0;
		.bottom(40);
 		left:0;
 		right: 0;
 		background: rgba(0,0,0,.4);
 		z-index: -1; 		
	}
	
}

</style>