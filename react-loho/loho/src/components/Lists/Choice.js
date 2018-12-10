import React,{Component} from 'react'
import axios from 'axios';
import {Accordion } from 'antd-mobile';


export class Choice extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
			goods:[],
			data:[],
			tagList:[],
			tag:[],
//			idx:[],
		}
	    
		this.handlerGotoDetails = this.handlerGotoDetails.bind(this);//修改方法的this指向		
   }
	componentWillMount(){
// 判断是否传入商品信息   
        let {state:goods} = this.props.location;
        if(goods){
            //本地存储
            localStorage.setItem('goods',JSON.stringify(goods));
        }else{
            // 如果没有传入，则重新发起请求，将id传给接口，查找对应的数据
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
            let cid=JSON.parse(localStorage.getItem('goods')).cid;
            axios.get(`api/classify/${cid}`)
            .then(res=>{
//			       console.log(res.data.result)
			       let data=res.data.result;
			       console.log(data);;
			       let tagList=data.map(goods=>{//遍历classify数组，获取所有的show
						return goods.tagList;
					})
//			       let idx=tagList.length-1;
//			       let tag=tagList[idx].map(goods=>{//遍历classify数组，获取所有的show
//						return goods.tag
//					})
//			       console.log(data[0].tagList[0].tag)
                   this.setState({
                       data:data,
                       tagList:tagList,
                   
                   })
               })      
            goods = JSON.parse(localStorage.getItem('goods'));//获取数据
        
        }
        this.setState({
            goods
        });
//      console.log(this.state.data)
    }
	
	handlerGotoDetails(){//点击时改变url地址
		 

	}
	
	render(){
//		console.log(this.state.tagList.tag)
		return <div className="alllist">
		      {<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
		      {this.state.data.map((goods,idx)=>{
          
		        return  <Accordion.Panel header={goods.category} className="pad">
		                     <div>{goods.remark}</div>
		                </Accordion.Panel>
		                 
          })
         }
        </Accordion>
       }
		
		
		</div>
	}
}


export default Choice;
