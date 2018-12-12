import React,{Component} from 'react'
import axios from 'axios';
import {Grid} from 'antd-mobile';


import '../../css/pages/reg.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faShoppingCart,faListUl,faMobileAlt,faBookmark,faShekelSign} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faAngleLeft,faShoppingCart,faListUl,faMobileAlt,faBookmark,faShekelSign
    )

export class Reg extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			user:'',
			imgcode:'',
			code:'',
			pass:'',
			surepass:''
			
		}
	    this.handlerGetInput = this.handlerGetInput.bind(this);		
	    this.handlerGoBack = this.handlerGoBack.bind(this);
    }
	componentWillMount(){
//		 console.log(this.props)
   }
	
	handleInputChange(val,e){//获取input的值
		switch (val){//传一个参数，判断值，分别取不一样的值，使这几个input的值之间不影响
			case 'user':
					this.setState({
					user:e.target.value,
				    })
				break;
			case 'imgcode':
					this.setState({
					imgcode:e.target.value,
				    })
				break;
			case 'code':
					this.setState({
					code:e.target.value,
				    })
				break;
			case 'pass':
					this.setState({
					pass:e.target.value,
				    })
				break;
			case 'surepass':
					this.setState({
					surepass:e.target.value,
				    })
				break;
		}
		
	}
	handlerGetInput(){
		let user=this.state.user;
		let imgcode=this.state.imgcode;
		let code=this.state.code;
		let pass=this.state.pass;
		let surepass=this.state.surepass;
		axios.post('http://127.0.0.1:40000/userapi/user/reg',{user:111}
//			params:{
//				user:user,
//				pass:pass
//			}
				
		).then(res=>{
			console.log(res)
               })      
	}
	handlerGoBack(){
        //获取history
//      console.log(this.props);
        let {history} = this.props;
//      console.log(history);
        history.go(-1);
   }
	
	render(){
		return <div className="reg">
		            <div className="reg_nav">
				        <ul>
					        <li onClick={this.handlerGoBack.bind(this)}>
					            <i><FontAwesomeIcon key="0" icon="angle-left" /></i>
					        </li>
					        <li>手机快速注册</li>
					        <li>
					            <i><FontAwesomeIcon key="1" icon="shopping-cart" /></i>
					            <i><FontAwesomeIcon key="2" icon="list-ul"/></i>
					        </li>
				        </ul>
			        </div>
			        <div className="reg_content">
			            <div>
				            <p>手机号</p>
				            <input type="text" placeholder="请输入手机号" value={this.state.user} onChange={this.handleInputChange.bind(this,'user')}/>
			            </div>
			            <div>
				            <p>图形验证码</p>
				            <input type="text" placeholder="请输入图形验证码" value={this.state.imgcode} onChange={this.handleInputChange.bind(this,'imgcode')}/>
				            <span>5676</span>
			            </div>
			            <div>
				            <p>验证码</p>
				            <input type="text" placeholder="请输入短信验证码" value={this.state.code} onChange={this.handleInputChange.bind(this,'code')}/>
				            <span>发送验证码</span>
			            </div>
			            <div>
				            <p>密码</p>
				            <input type="password" placeholder="请输入6-20位数字/字母或符号组合" value={this.state.pass} onChange={this.handleInputChange.bind(this,'pass')}/>
			            </div>
			            <div>
				            <p>确认密码</p>
				            <input type="password" placeholder="请再输入一次" value={this.state.surepass} onChange={this.handleInputChange.bind(this,'surepass')}/>
			            </div>
			                      
					</div>
					<div className="reg_zhuce" onClick={this.handlerGetInput.bind(this)}>
					   <p>注册</p>
					</div>
		       </div>
	}
}


export default Reg;