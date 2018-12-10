import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import '../../css/pages/info_more.scss';
import {Grid} from 'antd-mobile';//引入ui框架


export class Info_More extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			goods:[],
		}
	   this.handlerGotoDetails = this.handlerGotoDetails.bind(this);//修改方法的this指向	 		
   }
	componentWillMount(){
		let gid=this.props.match.params.id;
//		console.log(gid)
		axios.get(`api/goods/peddle/${gid}`)
		.then(res=>{
//			console.log(res.data.result)
                   this.setState({
                        goods:res.data.result
                   
                   })
               }) 
    }
	handlerGotoDetails(goods){
//		console.log(this.props);
        let {history} = this.props;
//      console.log(goods.goodsId);
        history.push({
            pathname:'/info/'+goods.goodsId,
            state:goods
        });
        window.location.reload([true]);//自动刷新页面
	}
	
	render(){
		let imgurl='http://image.loho88.com/';
		return <div className="info_more">
		           <div className="remind">
		                <span></span>
		                <span>看了又看</span>
		                <span></span>
		           </div>
		           <div className="more">
		                <Grid
							data={this.state.goods} 
							columnNum={2} 
							activeClassName="active" //点击反馈的自定义类名
							itemStyle={{height:'260px'}}//每个格子的自定义样式
							renderItem={(goods,idx)=>{
								return(
									<div className="info_more_item">
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
		           <div className="remind">
		                <span></span>
		                <span>已经到底啦</span>
		                <span></span>
		           </div>
		
		      </div>
	}
}


Info_More = withRouter(Info_More);
export default Info_More;
                        