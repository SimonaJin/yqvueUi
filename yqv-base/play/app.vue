<template>
<div>
	ceshi 
	<yq-icon icon="tick"></yq-icon>
	<yq-button @click="test" type="primary"> 测试</yq-button>
</div>
</template>
<script>
export default {
	methods: {
		test(){
			console.log("test")
		}
	},
}
</script>