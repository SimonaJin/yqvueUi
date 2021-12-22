<template>
	<div>
	
		<yq-button type="info" @click="buttonClick">点击</yq-button>
		<yq-button type="primary" size="large" icon="tick">提交</yq-button>
		<yq-button type="success" size="normal">提交</yq-button>
		<yq-button type="warning" size="small">提交</yq-button>
		<yq-button type="danger" size="mini"  icon="comments" icon-position="right">提交</yq-button>
	</div>
</template>
<script>
export default {
	name:"test1",
	methods:{
		buttonClick(){
			console.log("buttonClick")
		}
	}
}
</script>