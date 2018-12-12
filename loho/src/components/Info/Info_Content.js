import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
import {cart,tabbar,tab} from '../../actions';//// 引入tabbar,infotab，cart封装

import '../../css/pages/info_content.scss';

export class Info_Content extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			argument:[],
			pingjia:[
			        {content:'时尚，镜架很轻',cname:'losi_176****3444',time:'2018-11-12 09:08:09',where:'肇庆印象汇店'},
			        {content:'服务不错，价格也优惠，态度也很好',cname:'losi_186****3004',time:'2018-11-11 15:32:09',where:'南京江宁店'},
			        {content:'时尚，镜架很轻',cname:'losi_132****6755',time:'2018-9-12 10:45:11',where:'成都世贸店'},
			        {content:'看了一圈，还是这个款式好看',cname:'losi_156****8898',time:'2018-10-12 19:45:11',where:'广州天河店'}
			]
		}
	}
	componentWillMount(){
//		console.log(this.props)
		let infotabStatus=this.props.infotabStatus;//获取点击选项卡时的状态
		let id=this.props.match.params.id;
		axios.get(`api/goods/${id}`)
		.then(res=>{
//			console.log(res.data.result.arguments)
			let data=res.data.result;
                   this.setState({
                      argument:data.arguments
                   
                   })
               }) 
		
		
   }
	

	
	render(){	return (<div className="info_content">
			        <ul>
			            <li style={{display:this.props.infotabStatus===0?'block':'none'}}>
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033258936253.jpg" />
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033259648839.jpg" />
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033260419391.jpg" />
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033260232967.jpg" />
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033260726241.jpg" />
			               <img src="http://image.loho88.com/images/ueditor/20180927/1538033260444236.jpg" />
			            </li>
			            
					    <li style={{display:this.props.infotabStatus===1?'block':'none'}}>
					    {this.state.pingjia.map((item,idx)=>(
					        <div key={idx}>
						        <p>{item.content}</p>
						        <p>
						            <a>{item.cname}</a>
						            <a>{item.time}</a>
						        </p>
						        <p>{item.where}</p>
					        </div>
					    ))}   
					    </li>
					    
					    {this.state.argument.map((item,idx)=>(
					    	<li style={{display:this.props.infotabStatus===2?'block':'none'}} key={idx}>
					            <span>{item.tname}</span>
					            <span>{item.val}</span>
					        </li>
					    ))}
					    
			        </ul>
		        </div>)
	}
}



let mapStateToProps=state=>({infotabStatus:state.infotabReducer.infotabStatus});
Info_Content = connect(mapStateToProps)(Info_Content);//将获取的tabbar的状态存在connect中，即抛出


Info_Content = withRouter(Info_Content);

export default Info_Content;
