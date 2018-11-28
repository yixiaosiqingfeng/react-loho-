<template>
	<div class="header">
	
		<div class="head">
			<a class="head-a1">
			<img src="data:image/png;base64,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"/>
			</a>
			<a class="head-a2">
				<span>安装APP</span>
			</a>
			<div class="search">
				<i class="fa fa-search"></i>
			</div>
		</div>
		
		
	</div>
</template>
<script>
	export default{
		name:'Header',
		components:{},
		data(){
			return{
				name:'header'
			}
		}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../style/main.less';/*引入*/
.header{
	.w(375);
	.h(44);
	position:fixed;
	background:#fff;
	.head{
		.margin(0,20,0,20);
		.head-a1{
			position:relative;
			img{
				.w(60);
				.h(29);
				.top(4);
				position:absolute;
				/*.margin(5,0,24,0);*/
			}
		}
		.head-a2{
			position:relative;
			span{
			position:absolute;
			.fs(12);
			.w(75);
			.h(28);
			.lh(28);
			.top(8);
			.left(76);
			background:#fe960e;
			border-radius:5px;
			color:#fff;
			text-align:center;
			}
		}
		.search{
			display: inline-block;
			float:right;
			position:relative;
			.w(120);
			.h(44);
			i{
			.w(26);
			.h(26);
			.lh(26);
			.fs(26);
			.left(90);
			color:#fe960e;
			position:absolute;
			float:right;
			.margin(8,0,0,0);
			}
		}
	}
	
}
</style>