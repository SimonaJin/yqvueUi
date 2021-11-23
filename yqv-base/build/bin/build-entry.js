// 1.引入所有组件路径components.json
const components = require('../../components.json');
// 2.引入fs
const fs = require('fs');
// 3.引入字符串模板生成器 json-templater/string
const render = require('json-templater/string');
// 4. 引入申明变量用驼峰命名 uppercamelcase
const uppercame = require('uppercamelcase');
// 5. 引入 path
const path = require('path');
// 6. 引入'os' .EOL方法
const osLine = require('os').EOL; // 模块提供了一些基本的系统操作函数
// 定义 出口文件 path
var OUT_PATH = path.join(__dirname, '../../src/index.js');
// 导入模板 import 路径
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/components/{{package}}/index.js\';';
// install模板名称
var INSTALL_TEMPLATE = '	{{name}}';
// 主模板 字符串模板格式
var MAIN_TEMPLATE = `
/* Automatically generated enter file by './build/bin/build-entry.js' */
{{include}}
const plugins = [
{{install}}
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
	version: '{{version}}',
	// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
	install,
{{list}}
}
`;
// 删除组件中font属性
// delete components.font;
// 获取组件对象名称
var componentsNames = Object.keys(components);
// 定义组件模板数组
var includeComponentTemplate = [];
// 定义所有install
var installTemplate = [];
// 定义单独组件install list
var listTemplate = [];
// 组件路径循环，includeComponentTemplate放入所有组件名字
componentsNames.forEach(component => {
// 把组件名字变成驼峰
var componentName = 'Yq' + uppercame(component);
// import引入文件 模板
includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
	name: componentName,
		package: component
}));
// 全局组件install
	if (['Loading', 'MessageBox', 'Notification', 'Message', 'InfiniteScroll'].indexOf(componentName) === -1) {
		installTemplate.push(render(INSTALL_TEMPLATE, {
			name: componentName,
			component: component
		}));
	}
// 单独组件list
	if (componentName !== 'Loading') listTemplate.push(`	${componentName}`);
});
// 定义template = 所有组件属性整合
var template = render(MAIN_TEMPLATE, {
	version: process.env.VERSION || require('../../package.json').version,
	include: includeComponentTemplate.join(osLine),
	install: installTemplate.join(',' + osLine),
	list: listTemplate.join(',' + osLine)
});
// 按照模板写入，输出文件index.js
fs.writeFileSync(OUT_PATH, template);
