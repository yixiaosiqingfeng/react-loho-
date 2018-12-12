import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

//react-redux
import {connect} from 'react-redux';
import {cart,tabbar,tab} from '../../actions';//// 引入tabbar,infotab，cart封装

import '../../css/pages/info_tab.scss';



export class Info_Tab extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			items:['图文详情','商品评价','商品参数'],
			selecttab:0,
			
		}
		this.handlerinfotab = this.handlerinfotab.bind(this);
	}
	componentWillMount(){
    }
	
	handlerinfotab(idx){
//		console.log(idx)
		this.props.changeInfotabStatus(idx);//redux修改infotab的状态,切换选项卡	
//		console.log(this.props)
		let selecttab=idx;//选中下标时，样式
		this.setState({
			selecttab
		})
	}

	componentWillUnmount(){//销毁Tabbar的状态（即回复最初）
           this.props.changeInfotabStatus(0);//死掉
    }
	render(){
		return <div className="info_tab">		
		        <ul>
		        {this.state.items.map((items,idx)=>{
		            return <li key={items} onClick={this.handlerinfotab.bind(this,idx)}
		                       className={idx==this.state.selecttab?'active':''}
		                   >
		                           {items}
		                    </li>
		          })
		        }         
		          </ul>
		    
		        </div>
	}
}

//redux
let mapStateToProps=state=>({infotabStatus:state.infotabReducer.infotabStatus});//获取infotab状态
let mapDispatchToProps = dispatch=>{//状态更新提交：Dispatch-----修改数据操作
    return {
        // 把changeTabbarStatus方法映射到props
        changeInfotabStatus(status){
            dispatch(tab(status));////状态//在action目录下的index.js抛出的tabbar的action
        },
    }
}
Info_Tab = connect(mapStateToProps,mapDispatchToProps)(Info_Tab);


Info_Tab = withRouter(Info_Tab);
export default Info_Tab;