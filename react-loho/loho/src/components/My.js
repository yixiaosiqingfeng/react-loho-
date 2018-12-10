import React,{Component} from 'react'
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {tabbar,mytab} from '../actions';// 引入tabbar,infotab，cart封装

import Reg from './My/Reg'
import Login from './My/Login'

import axios from 'axios';
import {NavBar,Tabs} from 'antd-mobile';

import '../css/pages/my.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faShoppingCart,faListUl,faMobileAlt,faBookmark,faShekelSign} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faAngleLeft,faShoppingCart,faListUl,faMobileAlt,faBookmark,faShekelSign
    )

export class My extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			selecttab:0,
			reglogin:[
			          {
			          	name:'注册',
			          	path:'/reg'
			          },
			          {
			          	name:'登陆',
			          	path:'/login'
			          }
			]
		}
	    this.handlerGoBack = this.handlerGoBack.bind(this);//修改方法的this指向
	    this.handlerRouterClick = this.handlerRouterClick.bind(this);
   }
	componentWillMount(){
//		 console.log(this.props)
        this.props.changeTabbarStatus(true);//redux修改Tabbar的状态,让底部隐藏
    }
	componentWillUnmount(){//销毁Tabbar的状态（即回复最初）
        this.props.changeTabbarStatus(false);//死掉
    }
	
	 //编程式导航，跳转到上一页
	handlerGoBack(){
        //获取history
        console.log(this.props);
        let {history} = this.props;
//      console.log(history);
        history.go(-1);
   } 
   
    //切换登陆注册二级路由
    handlerRouterClick(tab,idx){//点击时改变url地址
		 let {history,match} = this.props;//里面没有this,所以在初始数据中修改this指向
//		 console.log(this.props);
		 let url = match.path + tab.path
        history.push(url);//那么路径从哪来？onChange,onTabClick都会自动给我们几个参数
		//console.log(a,b,c)//发现他给我们传了{title:"手机"，path:"/phone"},两个参数
		//这个path仅仅是后半段，所以再解构一个match,用来跳转的必须是path,用来匹配的必须是url
	}
	render(){
		let {match}=this.props;
		return <div className="my">
		            <div className="my_footer">
		                  {this.state.reglogin.map((tab,idx)=>{
		                    return <p key={idx} onClick={this.handlerRouterClick.bind(this,tab,idx)}>{tab.name}</p>
		                   })}
		            </div>
		            <Switch>
						<Route path={match.url+"/reg"} component={Reg}/>
						<Route path={match.url+"/login"} component={Login}/>
						<Redirect from='/my' to='/my/login' exact/>
				    </Switch>
		
		       </div>
	}
}

//获取redux状态
let mapStateToProps=state=>({tabbarStatus:state.commonReducer.tabbarStatus,mytabStatus:state.mytabReducer.mytabStatus});//获取tabbar,infotab状态
let mapDispatchToProps = dispatch=>{//状态更新提交：Dispatch-----修改数据操作
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));////状态//在action目录下的index.js抛出的tabbar的action
        },
        changeMytabStatus(status){
        	dispatch(mytab(status));
        }
        
    }
}
My = connect(mapStateToProps,mapDispatchToProps)(My);



My = withRouter(My);
export default My;
