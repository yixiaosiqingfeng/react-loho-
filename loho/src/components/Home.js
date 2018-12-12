import React,{Component} from 'react'
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import axios from 'axios';

import {Carousel,Grid,Card} from 'antd-mobile';

import '../css/pages/home.scss';

//引入fantawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStroopwafel,faAngleDown} from '@fortawesome/free-solid-svg-icons'
//list-ul----falist-ul---faListUl
library.add(
    faStroopwafel,faAngleDown
    )

//angle-down
class Home extends Component{
	constructor(){
        super();
        this.state = {
           //轮播图商品
            ad:[],
            //导航栏
            navlist:[],
            //列表
            listdata1:[],
            listdata2:[],
            listdata2_news:[],
        }
        this.handlerGotoList = this.handlerGotoList.bind(this);//修改方法的this指向
        this.handlerGotoDetails = this.handlerGotoDetails.bind(this);
    }
	componentWillMount(){
		axios.get('/api/index'
			
		).then(res=>{
//			console.log(res);
			let data = res.data.result;
			let show=data.classify.map(goods=>{//遍历classify数组，获取所有的show
				return goods.show
			})
//			console.log(show)
			this.setState({
				ad:data.focus,
				navlist:data.cates,
				listdata1:data.popular,
                listdata2:data.classify,
                listdata2_show:show,
//						     
			});
		});
    }
	//编程式导航，跳转到列表页
	handlerGotoList(goods){
        //获取history
//      console.log(this.props);
        let {history} = this.props;
//      console.log(history);
        history.push({
            pathname:'/list/'+goods.cid,
//          +'/'+goods.tid+'/'+goods.tag
            state:goods
        });
    }
	handlerGotoDetails(goods){
//		console.log(this.props);
        let {history} = this.props;
        history.push({
            pathname:'/info/'+goods.gid,
            state:goods
        });
	}
	
	render(){
		return <div className="home">
		            <div>
				        <div className="home-head">
					      <div className="head-left">
						        <p>北京</p>
						         <i><FontAwesomeIcon icon="angle-down" /></i>
					      </div>
					     <h1>LOHO</h1>
					     </div>
				    </div> 
				    <div className="banner">
						<Carousel
				                autoplay={true}
				                infinite
				                itemStyle={{height:'250px'}}
				                >
				                {this.state.ad.map(goods => (
				                    <a
				                    key={goods}
				                    href="#"
				                    style={{height:'206px'}}
				                    >
				                    <img
				                        src={goods.pic}
				                        style={{verticalAlign: 'top' }}
				                        onLoad={() => {
				                            window.dispatchEvent(new Event('resize'));
				                        }}
				                    />
				                    </a>
				                ))}
			            </Carousel>
		            </div>
		            <div className="home-nav">
			            <Grid
				            data={this.state.navlist} 
				            columnNum={4} 
				            hasLine={false}
				            activeClassName="active" //点击反馈的自定义类名
				            itemStyle={{height:'120px'}}//每个格子的自定义样式
				            renderItem={(goods,idx)=>{
				                return(
				                    <div className="goods-item">
				                        <img src={goods.pic} />
				                        <p>{goods.tag}</p>
				                    </div>
				                )
				            }}
				            onClick={this.handlerGotoList}
				        />
		            </div>
		            
                {
                    this.state.listdata2.map((goods,idx)=>{//idx表示，循环获取show里面的值，获取不一样的下标（总共有6组show，每组有4条数组）
                        return  <div className="home-list"
                                  key={goods.title.word}
                                >
			                        <div className="list-head">
			                            <div>
			                                <h4></h4>
							                <h3>{goods.title.word}</h3>
							            </div>    
							            <p>{goods.more.word}</p>
						                
						            </div>
						            <div className="list-img"> 
						               <img src={goods.img.pic}/>
						            </div>
						            <div className="list-content"> 
							            <Grid
									        data={this.state.listdata2_show[idx]} 
									        columnNum={2} 
									        activeClassName="active" //点击反馈的自定义类名
									        itemStyle={{height:'188px'}}//每个格子的自定义样式
									        renderItem={(goods,idx)=>{
									            return(
									                <div className="list-item">
									                    <h4>{goods.tag}</h4>
									                    <p>{goods.tag_en}</p>
									                    <img src={goods.pic} />
									                        
									                </div>
									            )
									        }}
									        onClick={this.handlerGotoDetails}
									    />
								    </div>
			            </div>
                    })
                }
                      
			        
		       </div>   
		
	}
	
		  		
}

Home = withRouter(Home);

export default Home;
