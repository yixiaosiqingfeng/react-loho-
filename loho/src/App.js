import React, { Component } from 'react';
import {connect} from 'react-redux';//引入connect
import axios from 'axios';

import {Route,Redirect,Switch,withRouter} from 'react-router-dom';

import Home from './components/Home';
import Group from './components/Group';
import CustomerService from './components/CustomerService';
import NaerList from './components/NaerList';
import My from './components/My';
import List from './components/List';
import Info from './components/Info';

//引入antd-mobile
import { TabBar } from 'antd-mobile';//引入ui框架

//引入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css'
import './css/common/common.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, 
	    faShoppingBag,
	    faBell,
	    faMapMarkerAlt,
	    faUser
        } from '@fortawesome/free-solid-svg-icons'
library.add(
    faHome,
    faShoppingBag,
    faBell,
    faMapMarkerAlt,
    faUser
    )

axios.defaults.baseURL='http://127.0.0.1:40000'

class App extends Component{
	constructor(){
        super();
        this.state = {
            tabs:[
                {
                    title:'首页',
                    path:'/home',
                    icon:'home'
                },
                {
                    title:'团购',
                    path:'/group',
                    icon:'shopping-bag'
                },
                {
                    title:'客服',
                    path:'/customerserviceods',
                    icon:'bell'
                },
                {
                    title:'附近体验店',
                    path:'/naerList',
                    icon:'map-marker-alt'
                },
                {
                    title:'我的',
                    path:'/my',
                    icon:'user'
                }
            ],
            currentTab:0//默认下标
        }
    }
	
	 handlerClick(idx,path){
		this.setState({//修改this.state里的内容，把idx改变
			 currentTab:idx
		});
		//编程式导航
		//获取history的方式
		//(1)、通过Route渲染App
		//(2)、利用withRouter高阶组件实现
		this.props.history.push(path);
//		history.push(path)
	}
	 
	 componentWillMount(){//生命周期
	 	//获取hash值
	 	let hash =window.location.hash.slice(1);//#list
//	 	console.log(window.location.hash);
//	 	console.log(hash);
	 	//找出对应的索引值（刷新时留在当前页）
	 	let currentTab =0//刚开始默认值是0
	 	this.state.tabs.some((item,idx)=>{
	 		if(item.path===hash){//让高亮跟随路由
	 			currentTab=idx
	 		}
//           if(item.path===hash.content(path)){
//           	currentTab=idx
//           }
//			String.prototype.startWith=function(str){     
//			  var reg=new RegExp("^"+list);     
//			  return reg.test(this);        
//			} 
			
	 		return item.path===hash
	 	});
	 	this.setState({
	 		currentTab
	 	});
	 	
	 }
	render(){
		return <div className="container">
		           <div className="content">
					    <Switch>
					        <Route path="/home" component={Home}/>
							<Route path="/group" component={Group}/>
							<Route path="/customerservice" component={CustomerService}/>
							<Route path="/naerList" component={NaerList}/>
							<Route path="/info/:id" component={Info}/>
							<Route path="/list/:id" component={List}/>
							<Route path="/my" component={My}/>
							<Redirect from='/' to='/home' exact/>//exact：精确匹配 //拿到最后面，如果我第一次匹配home,就忽略后面的组件，只有什么都不匹配时，才走重定向
							
					    </Switch>
				    </div>   
				    
					<TabBar
					    tintColor="#f00"
					    noRenderContent={true}
					    hidden={this.props.tabbarStatus}
					>
					   {//想显示什么就放在Item里,TabBar有多少个取决于上面有多少个//js代码都要用花括号
					   	this.state.tabs.map((tab,idx)=>{//tab,idx为参数
					   		return <TabBar.Item
				            title={tab.title}
				            key={tab.path}//只要是唯一的都行
				            icon={<FontAwesomeIcon icon={tab.icon}/>}
			                selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
				            selected={this.state.currentTab === idx}
				            //当前Tab是否等于索引值，高亮
				            onPress={//点击的时候想干嘛？写个方法
				            	this.handlerClick.bind(this,idx,tab.path)//把idx传过去
				            }
				            > 
					       {tab.title}
					        </TabBar.Item>
					   	})
					   }
			          
			             </TabBar>
                 </div>
	}
}

//在末尾声明添加connect：//获取tab状态
let mapStateToProps=state=>({tabbarStatus:state.commonReducer.tabbarStatus});
App = connect(mapStateToProps)(App);//将获取的tabbar的状态存在connect中，即抛出


//利用高阶组件传递路由参数
App = withRouter(App)

export default App;