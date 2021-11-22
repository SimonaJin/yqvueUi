<template>
<div>
	ceshi 
	<yq-icon icon="tick"></yq-icon>
	<yq-button @click="test" type="primary">置顶</yq-button>

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
<style scoped>
.contentBox{
	height: 400px;
		overflow-y: scroll;
}

</style>