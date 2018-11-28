<template>

	<div id="b_main_1">
		<div class="strongly">
			<h2>强力推荐</h2>
			<router-link tag="div" class="main_1_1" to="">
				<!--<ul v-for="(item,index) in strongly_big_1" :key="index" @click="go">-->
					<router-link tag="ul" v-for="(item,index) in strongly_big_1" :key="index" :to="{path:'/Inform/'+item.id}">
					<li>
						<img :src="item.pic_url"/>
					</li>
					<li>{{item.title}}</li>
				<!--</ul>-->
			</router-link>
			</router-link>
			<router-link tag="div" class="main_1_2" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in strongly_small" :key="index" @click="goinform(item)">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							<h3>
					     	    <i class="fa fa-star" aria-hidden="true" @click='addcollection(item)'></i>
					             <span>{{item.summary}}</span>
							</h3>
						</div>

					</li>
				</ul>
			</router-link>
			<router-link tag="div" class="main_1_3" to="" v-for="(item,index) in strongly_big_2" :key="index">
				<p>
					<img :src="item.pic_url" />
				</p>
				<p>{{item.title}}</p>
				<p>{{item.subtitle}}</p>
			</router-link>
		</div>
		<div class="lily">
			<router-link tag="div" class="lily_1" to="">
				<ul>
					<li  v-for="(item,index) in lily_small" :key="index">
						<img :src="item.pic_url" />
					</li>
				</ul>
			</router-link>
		</div>
		<div class="newwork">
			<router-link tag="div" class="new_work" to="">
				<h2>新作的首展秀</h2>
				<router-link tag="div" class="new_work_1" to="" v-for="(item,index) in newwork_big_1" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>
				<router-link tag="div" class="new_work_2" to="">
					<ul>
						<li>
							<div v-for="(item,index) in newwork_small" :key="index">
								<p>
									<img :src="item.pic_url" />
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
								<h3>
					     	    <i class="fa fa-star" aria-hidden="true"></i>
					             <span>{{item.summary}}</span>
							</h3>
							</div>
						</li>	
					</ul>
				</router-link>
				<router-link tag="div" class="new_work_3" to="" v-for="(item,index) in newwork_big_2" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>

			</router-link>
		</div>
		<div class="vipbook">
			<router-link tag="div" class="vip" to="">
				<h2>VIP图书馆</h2>
				<router-link tag="div" class="vip_1" to="" v-for="(item,index) in vip_big" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
				</router-link>
				<router-link tag="div" class="vip_2" to="">
					<ul>
						<li>
							<div v-for="(item,index) in vip_small" :key="index">
								<p>
									<img :src="item.pic_url" />
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
							</div>
						</li>
					</ul>
				</router-link>
			</router-link>
		</div>
		<div class="willfree">
			<router-link tag="div" class="free" to="">
				<ul>
					<li v-for="(item,index) in free_small" :key="index">
						<img :src="item.pic_url"/>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="hotblood">
			<router-link tag="div" class="blood" to="">
				<router-link tag="div" class="blood_1" to="" v-for="(item,index) in blood_big" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>
				<router-link tag="div" class="blood_2" to="" >
					<ul>
						<li>
							<div v-for="(item,index) in blood_small" :key="index">
								<p>
									<img :src="item.pic_url" />
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
							</div>
						</li>
				    </ul>
				</router-link>
				
			</router-link>
		</div>
	</div>
</template>

<script>
//import '../Inform/Inform'
	export default {
		name: 'Main_1',
		components: {},
		data() {
			return {
				name: '我是Main_1',
				strongly_big_1:[],
				strongly_small:[],
				strongly_big_2:[],
				lily_small:[],
				newwork_big_1:[],
				newwork_big_2:[],
				newwork_small:[],
				vip_big:[],
				vip_small:[],
				free_small:[],
				blood_big:[],
				blood_small:[],
				
			}
		},
		methods:{
           getMain(){
           	this.$axios.get('/api1/api/v3/home',{params:{
           		page:1
           	}})
           	.then((res)=>{
//         		console.log(res);
                this.data_strongly=res.datas.items[1].items;
                this.data_lily=res.datas.items[2].items;
                this.data_newwork=res.datas.items[3].items;
                this.data_vip=res.datas.items[4].items;
                this.data_free=res.datas.items[6].items;
                this.data_blood_1=res.datas.items[7].items;
                this.data_blood_2=res.datas.items[8].items;
//              console.log(this.data_blood_1);
           		this.strongly_big_1.push(this.data_strongly[0]);           		
           		this.strongly_small.push(this.data_strongly[1],this.data_strongly[2],this.data_strongly[3],this.data_strongly[4]);          		
         		this.strongly_big_2.push(this.data_strongly[5]);
           		this.lily_small.push( this.data_lily[0], this.data_lily[1]);
           		this.newwork_big_1.push(this.data_newwork[0]);
           		this.newwork_small.push(this.data_newwork[1],this.data_newwork[2],this.data_newwork[3],this.data_newwork[4]);
           		this.newwork_big_2.push(this.data_newwork[5],this.data_newwork[6]);
           		this.vip_big.push( this.data_vip[0], this.data_vip[3]);
           		this.vip_small.push(this.data_vip[1],this.data_vip[2]);
           		this.free_small.push(this.data_free[0],this.data_free[1],this.data_free[2]);
           		this.blood_big.push(this.data_blood_1[0],this.data_blood_2[2]);
           		this.blood_small.push( this.data_blood_1[1], this.data_blood_1[2], this.data_blood_1[3], this.data_blood_1[4],
           		                        this.data_blood_1[5], this.data_blood_1[6],this.data_blood_2[0],this.data_blood_2[1]);       		
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
           },
           goinform(item){
           	    let id=item.id;
//				console.log(id);
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
	#b_main_1 {
		.width(375);
		.height(685);
		.margin(10,0,0,0);
		.padding(0,10,0,10);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.font-size(16);
		.strongly {
			h2 {
				.height(20);
				border-left: 3px solid #fe960e;
				.margin(0,0,6,0);
				.padding(0,0,0,20);
				.line-height(18);
				.font-size(15);
				color: #333;
			}
			.main_1_1 {
				.width(355);
				.margin(10,0,0,0);
				.height(210);
				ul {
					display: flex;
					flex-direction: column;
					li {
						flex: 1;
						.margin(0,0,6,0);
						img {
							width: 100%;
							.height(180);
							.border-radius(3);
						}
					}
					li:nth-child(2) {
						.height(20);
						.line-height(20);
						.font-size(15);
						color: #333;
					}
				}
			}
			.main_1_2 {
				.width(355);
				.height(356);
				.margin(16,0,0,0);
				ul {
					.width(355);
					.height(356);
					.padding(0,0,0,0);
					display: flex;
					flex-direction: column;
					
					li {
						.height(175);
						flex-wrap: wrap;
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							.margin(0,0,14,0);
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
							h3 {
								.padding(0,0,0,5);
								box-sizing:border-box;
								background: rgba(0, 0, 0, .6);
								box-sizing: border-box;
								.font-size(12);
								text-align: center;
								.border-top-left-radius(10);
								.border-top-right-radius(0);
								.border-bottom-right-radius(0);
								.border-bottom-left-radius(10);
								position: absolute;
								.right(0);
								.bottom(60);
								i {
									color: #fff;
								}
								span {
									.padding(3,3,3,3);
									color: #fff;
								}
							}
						}
					}
				}
			}
			.main_1_3 {
				.height(260);
				display: flex;
				flex-direction: column;
				.margin(22,0,0,0);
				p {
					.margin(0,0,5,0);
				}
				p:nth-child(1) {
					img {
						.width(355);
						.height(180);
						.border-radius(3);
					}
				}
				p:nth-child(2) {
					.font-size(14);
					color: #333;
				}
				p:nth-child(3) {
					.font-size(12);
					color: #999;
				}
			}
		}
		.lily {
			.height(120);
			.lily_1 {
				.height(120);
				ul {
					.height(120);
					display: flex;
					display: flex;
					justify-content: space-between;
					li {
						.width(173);
						.height(117);
						img {
							.width(173);
							.height(117);
							.border-radius(3);
						}
						
					}
				}
			}
		}
		.newwork {
			.height(1100);
			.margin(25,0,0,0);
			.new_work {
				.height(1100);
				h2 {
					.height(20);
					border-left: 3px solid #fe960e;
					.margin(0,0,15,0);
					.padding(0,0,0,20);
					.line-height(18);
					.font-size(15);
					color: #333;
			    }
				.new_work_1,.new_work_3,.new_work_4 {
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
					p:nth-child(3) {
						.font-size(12);
						color: #999;
					}
				}
				.new_work_2 {
					.width(355);
					.height(356);
					.margin(16,0,0,0);
				ul {
					.width(355);
					.height(356);
					.padding(0,0,0,0);
					display: flex;
					li {
						.height(175);
						flex-wrap: wrap;
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							display: flex;
							flex-direction: column;
							position: relative;
							.margin(0,0,20,0);
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
							h3 {
								.width(66);
								background: rgba(0, 0, 0, .6);
								box-sizing: border-box;
								.font-size(12);
								text-align: center;
								.border-top-left-radius(10);
								.border-top-right-radius(0);
								.border-bottom-right-radius(0);
								.border-bottom-left-radius(10);
								position: absolute;
								.right(0);
								.bottom(60);
								i {
									color: #fff;
								}
								span {
									.padding(3,3,3,3);
									color: #fff;
								}
							}
						}
					}
				  }
				}	
			}
		}
		.vipbook{
			.height(685);
			.margin(35,0,0,0);
			.vip{
				.height(645);
				h2 {
					.height(20);
					border-left: 3px solid #fe960e;
					.margin(0,0,17,0);
					.padding(0,0,0,20);
					.line-height(18);
					.font-size(15);
					color: #333;
			    }
				.vip_1,.vip_3{
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
				}
				.vip_2{
					.width(355);
					.height(175);
					.margin(16,0,0,0);
					ul {
						.width(355);
						.height(175);
						.padding(0,0,0,0);
						display: flex;
						flex-direction: column;
						li {
							.height(175);
							display: flex;
							justify-content: space-between;
							.margin(0,0,10,0);
							div {
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
		}
		.willfree{
			.height(220);
			.margin(55,0,0,0);
			.free{
				.height(220);
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
		.hotblood{
			.height(1240);
			.margin(15,0,0,0);
			.blood{
				.height(1240);
				.blood_1{
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(15,0,34,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
					p:nth-child(3) {
						.font-size(12);
						color: #999;
					}
				
				}
				.blood_2{
					
				.width(355);
				.height(712);
				.margin(16,0,0,0);
				ul {
					.width(355);
					.height(712);
					.padding(0,0,0,0);
					display: flex;
					li {
						.height(175);
						flex-wrap: wrap;
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							.margin(0,0,18,0);
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
		}
	}
</style>