<template>
	<div>
		<Header></Header>
		{{name}}
		Collection
	</div>
</template>

<script>
import Header from '../../commons/Header';
	export default {
		name: 'Collection',
		components: {Header},
		data() {
			return {
				name:'我是Collection'
			}
		},
		
	}
</script>

<style>
</style>