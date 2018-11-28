<template>
	<div id="login">
		<Header></Header>
		<div class="denglu">登陆布卡漫画</div>
		<div class="news">
			<form action="#" method="post">
				<div class="user">
					<i class="fa fa-mobile" aria-hidden="true"></i>
					<input type="text" id="login_user" v-model="userName" placeholder="请输入手机号"/>
				</div>
				<div class="password">
					<i class="fa fa-key" aria-hidden="true"></i>
					<input type="password" id="login_password" v-model="userPass" placeholder="请输入密码"/>
				</div>
				<div class="forget">
					<p>忘记密码？</p>
				</div>
				<div class="login_sb" @click="getuser">
					<a>登陆</a>
				</div>
				<div class="goreg">
					<router-link tag="p" to="/My/Reg">手机号快速注册</router-link>
					
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
					userName:'',
				    userPass:''

			}
		},
		methods:{
			getuser(){
				this.user=JSON.parse(window.localStorage.getItem('user'));
//			    console.log(this.user);
			    if(this.userName && this.userPass){
			    	if(this.userName==this.user.userName){
//			    		console.log(111);
			    		if(this.userPass == this.user.userPass){
			    			window.localStorage.setItem('login',true);//登录成功后，存储一个login的状态
			    			window.localStorage.setItem('userName',this.userName);
//			    			console.log(window.localStorage);
                            this.$router.replace('/Home');
                             location.reload([true]);//自动刷新页面
			    		}else{
			    			alert('密码错误');
			    		}
			    	}else{
			    		alert('用户名错误');
			    	}
			    }else{
			    	alert('用户名和密码不能为空');
			    }
			}
//              
        }
		
	}
</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
#login{
	.width(375);
	.denglu{
		.height(45);
		.font-size(19);
		text-align: center;
		.line-height(45);
		color:#333;
		
	}
	.news{
			.height(270);
			.margin(30,0,10,0);
			display:flex;
			justify-content: center;
            align-items: center;
			form{
				.width(270);
				display:flex;
				flex-direction: column;
				.user,.password{
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
				.forget{
					.height(20);
					position: relative;
					p{
						text-align: center;
						.line-height(20);
						.font-size(14);
						position: absolute;
                        .top(0);
                        .right(2);
                        .bottom(2);
					}
				}
				.login_sb{
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
				.goreg{
					.height(20);
					text-align: center;
					p{
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