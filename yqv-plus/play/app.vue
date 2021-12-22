<template>

	 <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
    <span class="radio" :class="{'on':item.isChecked}"></span>
    <input v-model="radio" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">{{item.label}}
  </div>
</template>
<script>


export default {
data() {
  return {
    radio: '1',
    radios:[
      {
        label: '是',
        value:'1',
        isChecked: true,
      },
      {
        label: '否',
        value:'2',
        isChecked: false,
      },
      {
        label: '全部',
        value:'3',
        isChecked: false,
      },
    ]
  }
},
methods: {
  check(index) {
    // 先取消所有选中项
    this.radios.forEach((item) => {
      item.isChecked = false;
    });
    //再设置当前点击项选中
    this.radio = this.radios[index].value;
    // 设置值，以供传递
    this.radios[index].isChecked = true;
    console.log(this.radio);
  }
}
}
</script>

<style lang="css">
	.radio-box{
  display: inline-block;
  position: relative;
  height: 25px;
  line-height: 25px;
  margin-right: 5px;
}
.radio {
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid red;
	position: relative;
	border-radius: 50%;
}
.input-radio {
  display: inline-block;
  position: absolute;
  opacity: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  left: 0px;
  outline: none;
  -webkit-appearance: none;
}
.radio:after{
	position: absolute;
	content: "";
	width: 16px;
	height: 16px;
		border-radius: 50%;
		left: 4px;
		top:4px
}
.radio.on:after{
  background:red;
}
</style>