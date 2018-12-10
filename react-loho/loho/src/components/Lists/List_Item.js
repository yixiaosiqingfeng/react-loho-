import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';


import '../../css/pages/list_item.scss';



export class List_Item extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			items:[//下方有三个div，要与之相对应
			   {
                title:'综合',
                path:'/all',
                sort:''
              },
			   {
			   	title:'销量',
			   	path:'/sell',
			   	sort:'o1'
			   },
			   {
			   	title:'价格',
			   	path:'/price',
			   	sort:'o5'
			   },
			   {
			   	title:'筛选',
			   	path:'/choice',
			   	sort:'0'
			   }
			   
			],
			showchoice:false,
			selectnow:0
			
		}
		this.handlertab = this.handlertab.bind(this);
//		this.filter = this.filter.bind(this);
	}
	componentWillMount(){
    }
	handlertab(idx,sort){
//		console.log("sort:",sort);
//		console.log(this.props);
		let {changesort}=this.props;//changesort（）这是从父组件list传过来的方法，在这里调用
		let selectnow=idx;//选中下标时，样式
		if(!idx){
			this.setState({
			selectnow
		    })
			changesort(sort);//调用这个方法
		}
		if(idx==1){
			this.setState({
			selectnow
		    })
			changesort(sort);//调用这个方法
		}
		if(idx==2){
			this.setState({
			selectnow
		    })
			changesort(sort);//调用这个方法
		}
		if(idx==3){
			let showchoice=true;
			this.setState({showchoice})
		}
	}
//	filter(show,filterinfo){
//		//传给子组件的方法
//		this.setState({showchoice,show})
//		console.log(filterinfo)
//	}
	
	render(){
		return <div className="list_item">		
		        <ul>
		        {this.state.items.map((items,idx)=>{
		            return <li key={items.path} onClick={this.handlertab.bind(this,idx,items.sort)}
		                       className={idx==this.state.selectnow?'active':''}
		                   >
		                           {items.title}
		                           
		                    </li>
		          })
		        }         
		          </ul>
		    
		        </div>
	}
}

List_Item = withRouter(List_Item);
export default List_Item;