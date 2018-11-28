<template>
	<div>
		<Header></Header>
		<router-view></router-view>
		<!--<Login></Login>-->
		<!--<Reg></Reg>-->
	</div>
</template>

<script>
import Header from '../../commons/Header';	
	
import Login from './Login'
import Reg from './Reg'
	export default {
		name: 'My',
		components: {Login,Reg},
		data() {
			return {
				name:'我是my'
			}
		},
		
	}
</script>

<style>
</style>