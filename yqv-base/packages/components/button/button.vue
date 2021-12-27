<template>
  <button
	:class="[
      type ? 'yq-button-' + type : '',
      size ? 'yq-button-' + size : '',
      {
        'yq-button-disabled': disabled,
        'yq-button-loading': loading,
        'yq-button-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="disabled"
    @click="hanleClickButton"
  >
	<div class="yq-button_content">
		<i class="yq-icon-loading" v-if="loading"></i>
 		<yq-icon v-if="icon" :icon="icon"></yq-icon>
    <span v-if="icon" class="button-text"><slot></slot></span>
    <slot v-else></slot>
	</div>
  </button>
</template>
<script>
import { iconType, buttonSizeMap } from "../config.js";
export default {
  name: "YqButton",
  props: {
    type: {
			default: iconType.defaults,
    	type: String,
    },
    size: {
      default: buttonSizeMap.large,
      type: String,
    },
    icon: String,
		postion:String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
		iconPosition:{
			type:String,
			default:"left",
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