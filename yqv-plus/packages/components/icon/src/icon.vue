<template>
	<i class="z-icon" :style="style">	<slot></slot></i>

</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { icionProps } from "./icon";

export default defineComponent({
	name:"ZIcon",
	props:icionProps,
	setup(props){
		const style = computed(()=>{
			if(!props.size && !props.color){
				return {}
			}
			return{
				...(props.size?{'font-size':props.size+'px'}:''),
				...(props.color?{'color':props.color}:'')
			}
		})
		return {
			style
		}
	}
})
</script>