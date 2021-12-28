
/* Automatically generated enter file by './build/bin/build-entry.js' */
import YqButton from '../packages/components/button/index.js';
import YqIcon from '../packages/components/icon/index.js';
const plugins = [
	YqButton,
	YqIcon
]
const install = function(Vue){
	if (install.installed) return
  install.installed = true
	 // 遍历注册所有组件
	plugins.map(plugins => Vue.component(plugins.name, plugins))
}
// 组件有可能会通过script标签的方法引用
if(typeof window !== 'undefined'&& window.Vue){
	install(window.Vue)
}
// loading alert message
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
export default {
	version: '1.0.9',
	// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
	install,
	YqButton,
	YqIcon
}
