<template>
	<div class="demo-block">
		<!-- 代码内容 -->
			<!-- 组件展示 -->
			<div class="demo-intro">
				<slot name="source"></slot>
			</div>
			<div class="meta" ref="meta" :style="{height:metaHeight+'px'}">
					<!-- 组件说明 -->
				<div class="demo-text"  ref="demoText">
						<slot name="text"></slot>
					</div>
					<!-- 组件html -->
					<div class="demo-html" ref="demoHtml">
						<slot name="highlight"></slot>
					</div>
			</div>
		<!-- 展示和隐藏 -->
		<div class="demo-block-control" @click="handelHtmlShow">
			<i :class='`yq-icon ${icon}`'></i>
			<span>{{controlText}}</span>
		</div>
	</div>
</template>
<script>
export default {
	name:"demoBlock",
	data(){
		return{
			icon:"yq-icon-jiantouarrow486",
			metaHeight:0,
			controlText:"显示代码",
			controlShow:false
		}
	},
	methods:{
		handelHtmlShow(){
			this.controlShow = !this.controlShow
			if(this.controlShow){
				//获取高度
					let height = this.$refs.demoText.offsetHeight + this.$refs.demoHtml.offsetHeight
					this.metaHeight= height + 30
					this.controlText ="隐藏代码"
					this.icon ='yq-icon-jiantouarrow492'
			}else{
					this.metaHeight= 0
					this.controlText ="显示代码"
					this.icon ='yq-icon-jiantouarrow486'
			}
		
		}
	}
}
</script>
