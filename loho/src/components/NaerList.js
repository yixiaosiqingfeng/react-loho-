import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import Maplist from './Home/Maplist'
import Map from './Home/Map'

import axios from 'axios';

import {NavBar,Tabs } from 'antd-mobile';//引入ui框架

import '../css/pages/fujin.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faShoppingCart,faListUl} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faAngleLeft,faShoppingCart,faListUl
    )

export class NaerList extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			tabs:[//下方有三个div，要与之相对应
			   {
                    title:'列表',
                    path:'/nearbylist'
                },
			   {
			   	title:'地图',
			   	path:'/nearbymap'
			   }
			   
			],
			name:[],
			goods:[]
		}
		this.handlerGoBack = this.handlerGoBack.bind(this);//修改方法的this指向
		this.handlerTabClick = this.handlerTabClick.bind(this);
	}
	
	componentWillMount(){
    }
	
    //编程式导航，跳转到上一页
	handlerGoBack(){
        //获取history
//      console.log(this.props);
        let {history} = this.props;
//      console.log(history);
        history.go(-1);
    }
    
    handlerTabClick(tab,idx,goods){//点击时改变url地址
		 let {history,match} = this.props;//里面没有this,所以在初始数据中修改this指向
		 let tid=localStorage.getItem('tid')
//		 console.log(tid);
		 let url = match.url + tab.path
        history.push({
            pathname:url,
            state:goods
        });

	}

	render(){
		let {match}=this.props;
//		console.log(match.url)
		    return  <div className="list">
			            <div className="list_nav">
					        <ul>
						        <li onClick={this.handlerGoBack.bind(this)}>
						            <i><FontAwesomeIcon key="0" icon="angle-left" /></i>
						        </li>
						        <li>附近体验店</li>
						        <li>
						            <i><FontAwesomeIcon key="1" icon="shopping-cart" /></i>,
								    <i><FontAwesomeIcon key="2" icon="list-ul"/></i>
						        </li>
				            </ul>
						</div>
						
						<Tabs tabs={this.state.tabs}
					      initialPage={0}//initialPage:初始化tab,index or key(要默认显示哪一个index)
					      onChange={(tab, index) => {  }}//onChange：变化时触发
					      onTabClick={this.handlerTabClick}//onTabClick：点击时触发
					    >
						</Tabs>    
						<Switch>
							<Route path={match.url+"/maplist"} component={Maplist}/>///list/phone
							<Route path={match.url+"/map"} component={Map}/>
					    </Switch>
		        </div>
		      
	}
	
		  		
}

NaerList = withRouter(NaerList);

export default NaerList;//可以两种形式引入

