<template>
	<div id="setting_up">
		<Header></Header>
		<div class="setting" v-show="islogin">
			<div>
			   <p>
			   	   <img src="../../../../static/img/tuxiang.jpg"/>
			   </p>
			   <p>{{userName}}</p>
			</div>
			<div @click="loginout">退出登录</div>
		</div>
		<div class="setting_else" v-show="!islogin">
			<div @click="gologin">欢迎登录</div>
		</div>
	</div>
</template>

<script>
import Header from '../../commons/Header';

	export default{
		name:'Setting',
		components: {Header},
		data() {
			return {
				userName:'',
				islogin:false
			}
		},
		methods: {
			getuserName(){
//				console.log(window.localStorage);
				
				this.login=this.$store.state.login//获取存在vuex里的状态
				this.userName=window.localStorage.userName;//获取存储在localstorage里的username值
//				console.log(this.userName)
				if(this.login){//如果login为true
					this.islogin=!this.islogin//取反
				}
			},
			loginout(){
				 //localStorage删除指定键对应的值
                localStorage.removeItem('login');//移除localStorage
//              console.log(window.localStorage);
                this.islogin=!this.islogin//取反
//              console.log(this.$store);
                location.reload([true]);//自动刷新页面
                
			},
			gologin(){
				this.$router.push({path:'/My'})
			}
		},
		created(){
			this.getuserName()
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	#setting_up{
		.width(375);
		.margin(40,0,0,0);
		.padding(0,10,0,10);
		.setting{
			display:flex;
			flex-direction: column;
			div:nth-child(1){
				flex:1;
				display:flex;
				text-align:center;
				.line-height(65);
				.padding(0,0,20,0);
				border-bottom:1px solid #eee;
				p:nth-child(1){
					.width(65);
					.height(65);
					img{
						.width(65);
					    .height(65);
					    border-radius: 50%;
					}
				}
				p:nth-child(2){
					.font-size(22);
					.margin(0,10,0,40);
					color:#333;
				}
			}
			div:nth-child(2){
			    .height(35);
			    .margin(120,0,0,0);
			    text-align:center;
			    .line-height(35);
				.font-size(17);
				color:#fff;
				background:#fe960e;
			}
		}
		.setting_else{
			.height(35);
			div{
				.height(35);
				.margin(150,0,0,0);
			    text-align:center;
			    .line-height(35);
				.font-size(17);
				color:#fff;
				background:#fe960e;
			}
		}
	}
</style>