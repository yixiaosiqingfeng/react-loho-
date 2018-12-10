import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
import {cart,tabbar,tab} from '../actions';//// 引入tabbar,infotab，cart封装

import {Grid,Carousel} from 'antd-mobile';


import Info_Tab from './Info/Info_Tab'
import Info_Content from './Info/Info_Content'
import Info_More from './Info/Info_More'


import '../css/pages/info.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faShoppingCart,faListUl,faHome,faShareAlt,faCheck,faChevronRight,faStar,faBell
        } from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faAngleLeft,faShoppingCart,faListUl,faHome,faShareAlt,faCheck,faChevronRight,faStar,faBell
    )

export class Info extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			info_banner:[],
			info_inform:[],
			promiseTag:[],
			models:[],
			unioned:[],
			unioned2:[],
			unioned3:[],
			activecolor:0,
			ifshow:false,
			goods:[],
		}
		this.handlerColor=this.handlerColor.bind(this);	
		this.handlerGoBack=this.handlerGoBack.bind(this);
		this.handlerAddToCart = this.handlerAddToCart.bind(this);
   }
	componentWillMount(){
        console.log(this.props)
        this.props.changeTabbarStatus(true);//redux修改Tabbar的状态,让底部隐藏
        
        let gid=this.props.match.params.id;
        this.setState({
			  	changeidx:0
			});
		axios.get(`/api/goods/${gid}`
			
		).then(res=>{
//			console.log(res);
			let data = res.data.result;
			let unioned=data.unioned;
//			console.log(unioned)
			this.setState({
				info_banner:data.info.pics,
				info_inform:data.info,
				promiseTag:data.info.promiseTag,
				models:data.models,
				
			});
			if(unioned.length>0){//如果unioned存在，就渲染这一块区域，如果没有就不渲染
				let unioned=data.unioned[0];
				this.setState({
					ifshow:true,//设置一个状态，true就表示渲染，false就表示不渲染
					unioned:unioned,
					unioned2:data.unioned[0].goods[0],
					unioned3:data.unioned[0].goods[1],
				})
			}else{
				this.setState({
					ifshow:false
				})
			}
			
		});
    }
	
	componentWillUnmount(){//销毁Tabbar的状态（即回复最初）
           this.props.changeTabbarStatus(false);//死掉
    }
	handlerGoBack(){
        //获取history
//      console.log(this.props);
        let {history} = this.props;
        history.go(-1);
	}
	
	handlerColor(idx){
		let activecolor=idx;
		this.setState({
			activecolor
		    })
	}
	
	// 添加到购物车
    handlerAddToCart(goods){
    	console.log(this.props)
    	this.props.addToCart(goods);
//      let has = this.props.cartlist.filter(item=>{
//          return item.proId == goods.proId
//      });
//      if(has.length){
//          // 存在
//          this.props.changeQty(goods.proId,++goods.qty);
//      }else{
//          goods.qty = 1;
//          this.props.addToCart(goods);
//      }
       
    }
	
	render(){
//		console.log(this.state.info_inform)
		let imgurl='http://image.loho88.com/'
		let goods = this.state.info_inform;
//		console.log(goods)
		return <div className="info">
		            <div className="info_nav">
					    <ul>
					        <li onClick={this.handlerGoBack.bind(this)}>
					            <i><FontAwesomeIcon key="0" icon="angle-left" /></i>
					        </li>
					        <li></li>
					        <li>
					            <i><FontAwesomeIcon key="1" icon="shopping-cart" /></i>,
							    <i><FontAwesomeIcon key="2" icon="list-ul"/></i>
					        </li>
				        </ul>				    
					</div>
					<div className="info_banner">
					    <Carousel
				                autoplay={true}
				                infinite
				                itemStyle={{height:'250px'}}
				                dotActiveStyle={{background:'red'}}
				                >
				                {this.state.info_banner.map(goods => (
				                    <a
				                    key={goods}
				                    href="#"
				                    style={{height:'206px'}}
				                    >
				                    <img
				                        src={imgurl+goods}
				                        style={{verticalAlign: 'top' }}
				                        onLoad={() => {
				                            window.dispatchEvent(new Event('resize'));
				                        }}
				                    />
				                    </a>
				                ))}
			            </Carousel>
					</div>
					<div className="info_inform">
					     <ul>
					        <li>
					            <p>{this.state.info_inform.goodsName}</p>
					            <p>
					               <i><FontAwesomeIcon key="3" icon="share-alt"/></i>
					               <span>分享</span>
					            </p>
					        </li>
					        <li>
					            <p>￥{this.state.info_inform.shopPrice}</p>
					            <p>快递:  免运费</p>
					            <p>{this.state.info_inform.salesNum}已买</p>
					        </li>
					        <li>
					        {this.state.promiseTag.map((goods,idx) => (
					        	<p key={idx}>
						        	<i><FontAwesomeIcon key="3" icon="check"/></i>
						            <span>{goods}</span>
					            </p>
					        ))}
					        </li>
					        <li>
					            <p>颜色选择</p>
					            <p>
					            {this.state.models.map((goods,idx) => (
					               <span key={idx} onClick={this.handlerColor.bind(this,idx)} 
					                     className={idx==this.state.activecolor?'actcolor':''} >{goods.color}</span>
					               ))}
					            </p>
					            
					        </li>
					        {this.state.ifshow?<li>
					            <p><img src={imgurl+this.state.unioned2.goodsThumbMin} /></p>
					            <p>+</p>
					            <p><img src={imgurl+this.state.unioned3.goodsThumbMin} /></p>
					            <p>
					            	<span>{this.state.unioned.tname}</span>
					                <span>￥{this.state.unioned.price}</span>
					            </p>
					            <p><FontAwesomeIcon key="4" icon="chevron-right"/></p>
					            
					        </li>:''}
					    </ul>
					</div>
					<Info_Tab></Info_Tab>
					<Info_Content></Info_Content>
					<Info_More></Info_More>
					<div className="info_footer">
			           <ul>
			               <li className="info_icon">
			                   <i><FontAwesomeIcon key="0" icon="bell" /></i>
			                   <span>客服</span>
			               </li>
			               <li className="info_icon">
			                    <i><FontAwesomeIcon key="1" icon="star" /></i>
			                    <span>收藏</span>
			               </li>
			               <li className="info_title">预约附近验光点</li>
			               <li className="info_cart" onClick={this.handlerAddToCart.bind(this,goods)}>加入购物车</li>
			           </ul>
		
		            </div>
		       </div>
	}
}

//redux
let mapStateToProps=state=>({tabbarStatus:state.commonReducer.tabbarStatus,
	                        infotabStatus:state.infotabReducer.infotabStatus});//获取tabbar状态
let mapDispatchToProps = dispatch=>{//状态更新提交：Dispatch-----修改数据操作
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));////状态//在action目录下的index.js抛出的tabbar的action
        },
        addToCart(goods){
            dispatch(cart.add(goods))
        },
//      changeQty(proId,qty){
//          dispatch(cart.change(proId,qty))
//      }
    }
}
Info = connect(mapStateToProps,mapDispatchToProps)(Info);




//引入高阶组件
Info = withRouter(Info);

export default Info;
