import React,{Component} from 'react'
import axios from 'axios';
import {NavBar} from 'antd-mobile';

import {connect} from 'react-redux';
import {tabbar,mytab} from '../../actions';// 引入tabbar,infotab，cart封装

import '../../css/pages/login.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMobileAlt,faBookmark,faShekelSign,faUserCircle,faUnlockAlt} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faMobileAlt,faBookmark,faShekelSign,faUserCircle,faUnlockAlt
    )

export class Login extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			title:['手机号码快速登陆','账号密码登陆'],
		}
	    this.handlermytab = this.handlermytab.bind(this);//修改方法的this指向			
   }
	componentWillMount(){
    }
	//切换选项卡
    handlermytab(idx){
//		console.log(idx)
		let selecttab=idx;//选中下标时，样式
		this.props.changeMytabStatus(idx);//redux修改infotab的状态,切换选项卡	
//		console.log(this.props)
		this.setState({
			selecttab
		})
	}
	
	render(){
		return <div className="login">
		                <div className="login_nav">
					        <ul>
						        <li>
						            <i><FontAwesomeIcon key="0" icon="angle-left" /></i>
						        </li>
						        <li>登陆中心</li>
						        <li>
						            <i><FontAwesomeIcon key="1" icon="shopping-cart" /></i>
						            <i><FontAwesomeIcon key="2" icon="list-ul"/></i>
						        </li>
					        </ul>
				        </div>
				        <div className="login_img">
						    <img src="http://m.loho88.com/assets/images/login-banner.png"/>
						</div>
			            <div className="login_tab">
							<ul>
						        {this.state.title.map((items,idx)=>{
						            return <li key={items} onClick={this.handlermytab.bind(this,idx)}
						                       className={idx==this.state.selecttab?'active':''}
						                   >
						                           {items}
						                    </li>
						          })
						        }         
				          </ul>    
			            </div>
			            <div className="login_content">
			                <ul>
			                    <li style={{display:this.props.mytabStatus===0?'block':'none'}}>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="mobile-alt" /></i>
				                        <input type="text" placeholder="请输入你的手机号码"/>
			                        </div>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="shekel-sign" /></i>
				                        <input type="text" placeholder="请输入图片验证码"/>
			                        </div>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="bookmark" /></i>
				                        <input type="text" placeholder="请输入短信验证码"/>
				                        <span>发送验证码</span>
			                        </div>
			                    </li>
			                    <li style={{display:this.props.mytabStatus===1?'block':'none'}}>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="user-circle" /></i>
				                        <input type="text" placeholder="请输入手机号"/>
			                        </div>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="unlock-alt" /></i>
				                        <input type="text" placeholder="请输入密码"/>
			                        </div>
			                        <div>
				                        <i><FontAwesomeIcon key="1" icon="shekel-sign" /></i>
				                        <input type="text" placeholder="请输入验证码"/>
				                        <span>5676</span>
			                        </div>
			                        
			                    </li>
			                </ul>
			            </div>
		
		
		       </div>
	}
}


//获取redux状态
let mapStateToProps=state=>({mytabStatus:state.mytabReducer.mytabStatus});//获取tabbar,infotab状态
let mapDispatchToProps = dispatch=>{//状态更新提交：Dispatch-----修改数据操作
    return {
        changeMytabStatus(status){
        	dispatch(mytab(status));
        }
        
    }
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login);


export default Login;