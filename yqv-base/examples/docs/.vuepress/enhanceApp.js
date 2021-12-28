import Vue from 'vue'
// import components from './components'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import YqvBaseUi from 'yqv-base';
//import {YqButton} from 'yqv-base';
import 'yqv-base/lib/theme-chalk/css/index.css';

Vue.directive('highlight',function(el){
	let blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
		hljs.highlightBlock(block)
	})
})
export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
})=>{
	Vue.use(YqvBaseUi)
			// import('yqv-base').then(m => {
			// 	Vue.use(m.default)
			// })
	
			// components.forEach(({name, component}) => Vue.component(name, component))
}