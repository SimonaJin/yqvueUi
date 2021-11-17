<template>
  <button
		:class="btnClass"
    :disabled="disabled"
    @click="hanleClickButton"
  >
	<div class="yq-button_content">
 		<yq-icon v-if="icon" :icon="icon"></yq-icon>
    <span v-if="icon" class="button-text"><slot></slot></span>
    <slot v-else></slot>
	</div>
  </button>
</template>
<script>
import { iconType, buttonSizeMap } from "../config.js";
export default {
  name: "yqButton",
  props: {
    type: {
			default: iconType.defaults,
    	type: String,
			validator(type){
				if(type && !['warning','success','danger','info','primary'].includes(type)){
					console.error('type类型必须是：'+['warning','success','danger','info','primary'].join('、'))
				}
				return true
			}
    },
    size: {
      default: buttonSizeMap.large,
      type: String,
    },
    plain: {
      default: false,
      type: Boolean,
    },
    icon: String,
		postion:String,
    disabled: Boolean,
		iconPosition:{
			type:String,
			default:"left",
			validator(type){
					if(type && !['left','right'].includes(type)){
					console.error('iconPosition的值必须是：'+['left','right'].join('、'))
				}
				return true
			}
		}
  },
	computed:{
		btnClass(){
			let classes = ['yq-button'];
			if(this.type){
				classes.push(`yq-button-${this.type}`)
			}
			if(this.size){
				classes.push(`yq-button-${this.size}`)
			}
			if(this.plain){
				classes.push(`yq-button-${this.plain}`)
			}
			if(this.disabled){
				classes.push(`yq-button-${this.disabled}`)
			}
			if(this.icon){
				classes.push(`yq-button-${this.icon}`)
			}
			if(this.iconPosition){
				classes.push(`yq-button-${this.iconPosition}`)
			}
			return classes;
		}
	},
  methods: {
    hanleClickButton(event) {
      this.$emit("click", event);
    },
  },
};
</script>