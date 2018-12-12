import React,{Component} from 'react'
import axios from 'axios';
import {Grid} from 'antd-mobile';

//import '../../css/pages/all.scss';

export class Phone extends Component{//这种写法的引入方式必须为
	constructor(){
		super();
		this.state={
		}
	    		
   }
	componentWillMount(){
    }
	
	
	render(){
     	return <div className="phone">Phone</div>
	}
}


export default Phone;