<template>
	<div id="reg">
		<Header></Header>
		<div class="denglu">注册布卡漫画</div>
		<div class="reg_news">
			<form action="#" method="post">
				<div class="reg_user">
					<i class="fa fa-mobile" aria-hidden="true"></i>
					<input type="text" id="reg_user" v-model="user.userName" placeholder="请输入手机号"/>
				</div>
				<div class="reg_password">
					<i class="fa fa-key" aria-hidden="true"></i>
					<input type="password" id="reg_password" v-model="user.userPass" placeholder="请输入密码"/>
				</div>
				<div class="surepassword">
					<i class="fa fa-key" aria-hidden="true"></i>
					<input type="password" id="reg_surepassword" v-model="user.surePass" placeholder="请确认密码"/>
				</div>
				<div class="reg_zuce" @click="saveUser">
					<a>注册</a>
				</div>
				<div class="gologin">
					<router-link tag="p" to="/My/Login">已注册，去登陆</router-link>
					
				</div>
				
			</form>
		</div>
		<div class="elseif">使用以下账号登陆</div>
   	    <div class="else-method">
   	    	<ul>
   	    		<li v-for="(item,index) in login_list" :key="index"> 
   	    			<i :class="item.iconclass" aria-hidden="true"></i>
   	    			<p>{{item.title}}</p>
   	    		</li>
   	    	</ul>
   	    </div>
   	    <router-view></router-view>
	</div>
       
</template>

<script>
import Header from '../../commons/Header';	

export default{
		name:'Login',
		components:{Header},
		data(){
			return{
				name:'我是Login页面',		
				login_list:[{iconclass:"fa fa-envelope-o",title:'邮箱'},
				            {iconclass:"fa fa-qq",title:'QQ'},
				            {iconclass:"fa fa-weibo",title:'新浪'}
				            ],
				user:{
					userName:'',
					userPass:'',
					surePass:'',
				}
			}
		},
		methods:{
			saveUser(){
				this.user.userName=this.user.userName;
				this.user.userPass=this.user.userPass;
				this.user.surePass=this.user.surePass;
				this.user=JSON.stringify(this.user);//转成字符串，因为localStorage只能存字符串类型的
//				console.log(this.user);
                window.localStorage.setItem('user',this.user);
                console.log(window.localStorage);
//				if(window.localStorage.surePass!==window.localStorage.userPass){
//              	alert('密码不一致')
//              	console.log(1111)
//             }else{
//                  console.log(2222)
					alert('注册成功')
//				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
#reg{
	.width(375);
	.denglu{
		.height(45);
		.font-size(19);
		text-align: center;
		.line-height(45);
		color:#333;
		
	}
	.reg_news{
			.height(270);
			.margin(30,0,10,0);
			display:flex;
			justify-content: center;
            align-items: center;
			form{
				.width(270);
				display:flex;
				flex-direction: column;
				.reg_user,.reg_password,.surepassword{
					.height(40);
					border:1px solid #ccc;
					.margin(5,0,10,0);
					position: relative;
					text-align:center;
					i{
						.font-size(28);
						color:#ddd;
						position: absolute;
                        .top(2);
                        .left(7);
                        .bottom(2);
					}
					input{
						display: inline-block;
						.height(30);
						position: absolute;
                        .top(2);
                        .left(45);
                        .bottom(2);
					}
				}
				.reg_zuce{
					.height(40);
					.margin(30,0,20,0);
					text-align: center;
					background:#fe960e;
					.line-height(25);
					a{
						.font-size(16);
						background:#fe960e;
						color:#fff;
						.letter-spacing(5);
					}
				}
				.gologin{
					.height(20);
					text-align: center;
					p{
						z-index:999;
						.height(20);
						.line-height(20);
						.font-size(14);
						color:#333;
						
					}
				}
			}
		}
		.elseif{
			.height(30);
			.line-height(30);
			text-align: center;
			.font-size(12);
			color:#ddd;
			.margin(20,0,10,0);
			border-top:1px solid #eee;
		}
		.else-method{
			.height(90);
			display:flex;
			justify-content: center;
            align-items: center;
			ul{
				.width(270);
				display:flex;
				li{
					flex:1;
					display:flex;
				    flex-direction: column;
					justify-content: center;
                    align-items: center;
					i{
						.font-size(32);
						color:#fe960e;
					}
					p{
						.font-size(12);
						color:#999;
						.margin(5,0,10,0);
					}
				}
			}
		}
		
}
</style>