<template>
	<div id="search">
		<div class="search-box">
			<div class="search-left">
				<i class="fa fa-search"></i>
			    <input type="text" id="search-input" v-model="search"  @keyup.enter='submit'
			    	   placeholder="漫画 | 作者  | 资讯 | 漫展"/>
			</div>
			<div class="search-right">
			<span @click="goback">取消</span>
			</div>
		</div>
		<div class="search-border"></div>
		<div class="search-content">
		    <ul>
		    	<li @click="gonews(item)"  v-for="(item,index) in search_list" :key="index">
		    		{{item.title}}
		    	</li>
		    </ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Search',
		components:{},
		data(){
			return{
				search:'',
				search_list:[]
			}
		},
		methods:{
			goback(){
				this.$router.push({path:'/'})
			},
			getsearch(){
				
	            // console.log(this)
	           	this.$axios.get('/api2/dacu_app/app/?c=MainRecommend&a=get_filter_list&userid=0&str='+this.search+'&start=0&click=1&h5_agent=%5B%223.7.0%22%2C10%2C%22iOS%22%2C%2211.0%22%2C%22iPhone%22%2C%22714e59b0af6552770d0204bd9c4d1161%22%2C%22h5_web%22%2C1%2C%22d5c2243db0c4a21031i1i7h162abc25969a50e92%22%5D&ui=0&ui_id=0&_=1543042622071h162abc25969a50e92%22%5D&ui=0&ui_id=0&_=1543042622071')
	           	.then((res)=>{
	//         		console.log(res);
	           		this.search_list=res.data.data;
//	           		console.log(this.search_list);
	       		
	           	})
	           	.catch((err)=>{
	           		console.log(err)
	           	})
           
		},
		submit:function(e){//添加回车事件
			this.getsearch();
//			var inputvalue=e.target.value;
//			console.log(this.search);
			
		},
		gonews(item){
			this.$router.push({name:'Searchnews',params:{item:item}})
		}
		
	},
		created(){
			this.getsearch()
		}
}
</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
#search{
	.width(375);
	.padding(10,10,10,10);
	.search-box{
		.height(40);
		display:flex;
		justify-content: space-between;
		.search-left{
			.width(300);
			border:1px solid #ccc;
			background:rgba(245, 245, 245,.9);
			position: relative;
			display:flex;
		    justify-content: space-between;
			i{
				.font-size(20);
				position: absolute;
	            .top(9);
	            .left(10);
	            color:#999;
		    }
			input{
				display:inline-block;
				.width(250);
				.height(38);
				.font-size(13);
				background:rgba(245, 245, 245,.1);
				position: absolute;
	            .left(40);
			}
		}
		.search-right{
			.font-size(16);
			.line-height(38);
			span{
				
			}
		}
		
	}
	.search-border{
		border: 1px solid #eee;
		.margin(10,0,0,0);
	}
	.search-content{
		ul{
			display:flex;
			flex-direction: column;
			li{
				.height(30);
				.line-height(30);
				.font-size(14);
				color: #333;
				.margin(5,10,15,10);
				border-bottom:1px dashed #eee ;
			}
		}
	}
}
</style>