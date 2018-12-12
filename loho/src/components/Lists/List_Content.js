import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
import {cart,tabbar} from '../../actions';//// 引入tabbar封装

import '../../css/pages/list_content.scss';
import {Grid} from 'antd-mobile';//引入ui框架


export class List_Content extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			goods:[]
		}
		this.handlerGotoDetails = this.handlerGotoDetails.bind(this);//修改方法的this指向	
	}
	
	componentWillMount(){
		this.props.changeTabbarStatus(true);//修改Tabbar的状态
		this.getgoodslist('');//在生命周期里执行（一进来就执行）
//		console.log(this.props)
//		let {changesort}=this.props;
	}
	componentWillReceiveProps(changecontent){
//		console.log(this.props)
//		console.log("changecontent:",changecontent.changeurl)
		let changeurl=changecontent.changeurl;//接收从List组件里传过来的参数changeurl
        this.getgoodslist(changeurl)
   }
	
	
	handlerGotoDetails(goods){
        let {history} = this.props;
        console.log(goods);
        history.push({
            pathname:'/info/'+goods.goodsId,
            state:goods
        });
	}
	getgoodslist(changeurl){
	    
        let {state:goods} = this.props.location;//获取存在
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
            let tid=JSON.parse(localStorage.getItem('goods')).tid
            axios.get(`api/search/`,{
			params:{
				e:tid,
				page:1,
				sort:changeurl
			}
		}).then(res=>{
//			console.log(res.data.result.data)
                   this.setState({
                   goods:res.data.result.data,
//                 name:tag
                   
                   })
               })      
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
          
//      }
        this.setState({
            goods
        });
	}
	render(){
		let imgurl='http://image.loho88.com/'
		return <div className="list_content">
		    <Grid
					data={this.state.goods} 
					columnNum={2} 
					activeClassName="active" //点击反馈的自定义类名
					itemStyle={{height:'260px'}}//每个格子的自定义样式
					renderItem={(goods,idx)=>{
						return(
							<div className="list_content_item">
							    <img src={imgurl+goods.img} alt=""/>
							    <p className="title">{goods.title}</p>
								<p className="content">
								  <span>￥{goods.price}</span>
								  <span>{goods.salesNum}人已买</span>
								</p>
								
							</div>
					    )
					}}
					onClick={this.handlerGotoDetails}
			/>
		
		
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
    }
}
List_Content = connect(mapStateToProps,mapDispatchToProps)(List_Content);


List_Content = withRouter(List_Content);
export default List_Content;