import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

//react-redux
import {connect} from 'react-redux';
import {cart,tabbar} from '../actions';//// 引入tabbar封装

import Choice from './Lists/Choice'
import List_Item from './Lists/List_Item'
import List_Content from './Lists/List_Content'

import axios from 'axios';

import {NavBar,Tabs } from 'antd-mobile';//引入ui框架

import '../css/pages/list.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faShoppingCart,faListUl,faHome} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faAngleLeft,faShoppingCart,faListUl,faHome
    )

export class List extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={			
			name:[],
			goods:[],
			isshow:'none',
			showtabs:[
			   {
			   	title:'会员中心',
			   	icon:'user',
			   	path:'/login'
			   },
			   {
			   	title:'首页',
			   	icon:'home',
			   	path:'/home'
			   },
			],
			showtab:false,
		}
		this.handlerGoBack = this.handlerGoBack.bind(this);//修改方法的this指向
		this.handlerTabClick = this.handlerTabClick.bind(this);
		this.showIt = this.showIt.bind(this);
		this.hideIt = this.hideIt.bind(this);
		this.handlerShow = this.handlerShow.bind(this);
		this.changesort=this.changesort.bind(this)
	}
	
	componentWillMount(){
        // 判断是否传入商品信息
        console.log(this.props)
        this.props.changeTabbarStatus(true);//修改Tabbar的状态
        let {state:goods} = this.props.location;
        if(goods){
            //本地存储
            localStorage.setItem('goods',JSON.stringify(goods));
        }else{
            // 如果没有传入，则重新发起请求，将id传给接口，查找对应的数据
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
            let tid=JSON.parse(localStorage.getItem('goods')).tid     
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
          
        }
        this.setState({
            goods,
            changeurl:''//设置一个空的url,等会接收从list_item里传过来的接口参数sort
        });
//      console.log(goods)
    }
	componentWillUnmount(){//销毁Tabbar的状态（即回复最初）
           this.props.changeTabbarStatus(false);//死掉
    }
	
    //编程式导航，跳转到上一页
	handlerGoBack(){
        //获取history
//      console.log(this.props);
        let {history} = this.props;
//      console.log(history);
        history.go(-1);
    }  
    
    handlerShow(showtabs){
//  	console.log(333)
		this.props.history.push(showtabs.path);
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
    showIt(){
//  	console.log(111);
    	this.setState({
            isshow:'block'
        });
    }
    hideIt(){
//  	console.log(222);
    	if(this.state.isshow=='block'){
    		this.setState({
            isshow:'none'
            });
    	}
    }
    changesort(sort){//传给子组件list_item一个方法，传进一个形参，然后在下方子组件挂载处传进这个方法，传给子组件//tab选项卡
//       console.log(sort)
         this.setState({changeurl:sort})//重新赋值
    }

	render(){
		let {match}=this.props;
//		console.log(match.url)
		    return  <div className="list" onClick={this.hideIt.bind(this)}>
		        
				    <div className="list_nav">
					    <ul>
					        <li onClick={this.handlerGoBack.bind(this)}>
					            <i><FontAwesomeIcon key="0" icon="angle-left" /></i>
					        </li>
					        <li>{this.state.goods.tag}</li>
					        <li>
					            <i><FontAwesomeIcon key="1" icon="shopping-cart" /></i>,
							    <i><FontAwesomeIcon key="2" icon="list-ul" onClick={this.showIt.bind(this)}/></i>
					        </li>
				        </ul>				    
					</div>
					<div className="showItem" style={{display:this.state.isshow}}>
					    <span></span>
					    {
					    	this.state.showtabs.map((showtabs,idx)=>{
					    		return <div  key={idx}
					    		className="show-content" onClick={this.handlerShow.bind(this)}>
							    		    <i><FontAwesomeIcon key="0" icon={showtabs.icon} /></i>
							    		    <p>{showtabs.title}</p>
					    		        </div>
					    	})
					    }
					   
					</div>
					<List_Item changesort={this.changesort}></List_Item>
					<List_Content changeurl={this.state.changeurl}></List_Content>					
		        </div>
		      
	}
	
		  		
}
//redux
let mapStateToProps=state=>({tabbarStatus:state.commonReducer.tabbarStatus});//获取tabbar状态
let mapDispatchToProps = dispatch=>{//状态更新提交：Dispatch-----修改数据操作
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));////状态//在action目录下的index.js抛出的tabbar的action
        },
//      addToCart(goods){
//          dispatch(cart.add(goods))
//      },
//      changeQty(proId,qty){
//          dispatch(cart.change(proId,qty))
//      }
    }
}
List = connect(mapStateToProps,mapDispatchToProps)(List);


//引入高阶组件
List = withRouter(List);

export default List;//可以两种形式引入