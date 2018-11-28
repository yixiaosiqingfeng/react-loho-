<template>
	<div class="home">
		<Header></Header>
		<List></List>
		 <router-view></router-view>
	
	</div>
</template>

<script>
	import Header from '../../common/Header'//引入组件
	import List from './List.vue'
	import Dateil from './Dateil.vue'
	export default{
		name:'Home',
		components:{Header,List},//注册
		data(){
			return{
//				name:'首页'
			}
		}
	}
</script>

<style lang="less" scoped>/*scvoped,仅限于这个目录使用*/
@import '../../../style/main.less';/*引入*/
	
</style>