<!-- icon -->
<template>
  <div :class="['yq-icon', `yq-icon-${icon}`]">
	</div>
</template>

<script>
export default {
  name: "YqIcon",
	props:{
		icon: {
			type:String,
			required:true
		},
	},
};
</script>