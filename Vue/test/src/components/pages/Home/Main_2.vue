<template>
    <div id="b_main_2">
		<div class="falllove">
			<router-link tag="div" class="love_1" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in love_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							
						</div>

					</li>
					<li>
						<div v-for="(item,index) in love_2" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="start">
			<h2>强势首发</h2>
			<router-link tag="div" class="start_1" to="" >
				<ul>
					<li>
						<div  v-for="(item,index) in start_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							
						</div>

					</li>
					<li>
						<div v-for="(item,index) in start_2" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="easily">
			<h2>轻松一刻</h2>
			<router-link tag="div" class="easily_1" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in easily_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							
						</div>

					</li>
					<li>
						<div v-for="(item,index) in easily_2" :key="index">
							<p>
								<img :src="item.pic_url"/>
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
						
					</li>
				</ul>
			</router-link>
		</div>
		<div class="highmarks">
			<h2>高分精选</h2>
			<router-link tag="div" class="high" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in highmarks_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							
						</div>

					</li>
					<li>
						<div v-for="(item,index) in highmarks_2" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="finish">
			<h2>完结漫画，一口气看完的快感！</h2>
			<router-link tag="div" class="finish_1" to="">
				<ul>
					<li v-for="(item,index) in finish" :key="index">
						<img :src="item.pic_url"/>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="shortstory">
			<h2>短片大合集，五分钟的漫画世界</h2>
			<router-link tag="div" class="short_1" to="">
				<ul>
					<li v-for="(item,index) in shortstory" :key="index">
						<img :src="item.pic_url"/>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="dena">
			<h2>DENA漫画</h2>
			<router-link tag="div" class="dena_1" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in dena_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							
						</div>

					</li>
					<li>
						<div v-for="(item,index) in dena_2" :key="index" @click="goinform(item)">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="foot">	
			<p>下载客户端</p>
			<p>Copyright@buka.cn</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Main_2',
		components: {},
		data() {
			return {
				name: '我是Main_2',
				love_1:[],
				love_2:[],
				start_1:[],
				start_2:[],
				easily_1:[],
				easily_2:[],
				highmarks_1:[],
				highmarks_2:[],
				finish:[],
				shortstory:[],
				dena_1:[],
				dena_2:[],
			}
		},
		methods:{
           getMain(){
           	this.$axios.get('/api1/api/v3/home',{params:{
           		page:2
           	}})
           	.then((res)=>{
//         		console.log(res);
           		this.love_1.push(res.datas.items[1].items[0],res.datas.items[1].items[1]);
           		this.love_2.push(res.datas.items[1].items[2]);  
           		this.start_1.push(res.datas.items[2].items[0],res.datas.items[2].items[1]);
           		this.start_2.push(res.datas.items[2].items[2],res.datas.items[2].items[3]);
           		this.easily_1.push(res.datas.items[3].items[0],res.datas.items[3].items[1]);
           		this.easily_2.push(res.datas.items[3].items[2],res.datas.items[3].items[3]);
           		this.highmarks_1.push(res.datas.items[4].items[0],res.datas.items[4].items[1]);
           		this.highmarks_2.push(res.datas.items[4].items[2],res.datas.items[4].items[3]);
           		this.finish.push(res.datas.items[5].items[0],res.datas.items[5].items[1],res.datas.items[5].items[2]);
           		this.shortstory.push(res.datas.items[6].items[0],res.datas.items[6].items[1],res.datas.items[6].items[2]); 
           		this.dena_1.push(res.datas.items[7].items[0],res.datas.items[7].items[1]);
           		this.dena_2.push(res.datas.items[7].items[2],res.datas.items[7].items[3]);
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
           },
           goinform(item){
           	    let id=item.id;
//				console.log(id);
                console.log(21);
//				console.log(this.strongly_small)
                this.item=JSON.stringify(item);
                window.localStorage.setItem('data',this.item);//登录成功后，存储一个login的状态
                console.log( window.localStorage);
                this.$router.push({name:'Inform',params:{id:id}})
           }
           
		},
		created(){
			this.getMain()
		},
	}
</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
#b_main_2{
	.width(355);
	/*.height(840);*/
	.margin(3725,10,0,10);
	/*.margin(0,10,0,10);*/
	/*border:1px solid red;*/
	display: flex;
	flex-direction: column;
	.falllove{
		.height(356);	
		.love_1{
			.height(356);
			ul{
				.height(356);
				display:flex;
				flex-direction: column;
				li{
					flex: 1;
					.margin(0,0,6,0);
					display: flex;
					justify-content: space-between;
					.margin(0,0,10,0);
					div{
						.width(172);
						display: flex;
						flex-direction: column;
						position: relative;
						p:nth-child(1) {
								img {
									.width(172);
									.height(117);
									.border-radius(3);
								}
							}
							p:nth-child(2) {
								.font-size(14);
								color: #333;
								.margin(5,0,5,0);
							}
							p:nth-child(3) {
								.font-size(12);
								color: #999;
							}
					}
				}
			}
		}	
	}
	.start,.easily,.highmarks,.dena{
		.height(372);
		.margin(20,0,0,0);
		h2 {
				.height(18);
				border-left: 3px solid #fe960e;
				.margin(0,0,10,0);
				.padding(0,0,0,20);
				.line-height(18);
				.font-size(15);
				color: #333;
		}
		.start_1,.easily_1,.high,.dena_1{
			.height(372);
			ul{
				
				.height(356);
				display:flex;
				flex-direction: column;
				li{
					flex: 1;
					.margin(0,0,6,0);
					display: flex;
					justify-content: space-between;
					.margin(0,0,10,0);
					div{
						.width(172);
						display: flex;
						flex-direction: column;
						position: relative;	
						p:nth-child(1) {
								img {
									.width(172);
									.height(117);
									.border-radius(3);
								}
							}
							p:nth-child(2) {
								.font-size(14);
								color: #333;
								.margin(5,0,5,0);
							}
							p:nth-child(3) {
								.font-size(12);
								color: #999;
							}
					}
				}
			
			}
		}
		
	}
	.finish,.shortstory{
			.height(235);
			.margin(20,0,0,0);
			h2 {
				.height(18);
				border-left: 3px solid #fe960e;
				.margin(0,0,6,0);
				.padding(0,0,0,20);
				.line-height(18);
				.font-size(15);
				color: #333;
		    }
			.finish_1,.short_1{
				.height(235);
				ul{
					.height(220);
					display: flex;
					justify-content: space-between;
					li{
						.width(112);
				        .height(220);
				        display: flex;
				        flex-direction: column;
				        img{
				        	.width(112);
				            .height(177);
				            .margin(0,0,6,0);
				            .border-radius(3);
				        }
				        p{
				        	.height(20);
				        	.font-size(14);
				        	color: #333;
				        }
					}
				}
			}
		
		}	
		.foot{
			.height(130);
			.margin(20,0,0,0);		
			p:nth-child(1){
				.height(40);
				.line-height(40);
				text-align:center;
				.font-size(15);
				color:#fff;
				background:#fe960e;
				.margin(0,0,10,0);	
			}	
			p:nth-child(2){
				.height(20);
				.line-height(20);
				text-align:center;
				.font-size(13);
				color:#333;
			}
			
		}
	
}
</style>