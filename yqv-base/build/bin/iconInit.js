// 1.引入postcss fs path
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

// 2.用fs 读取 icon.scss文件 注意路径 可以用path
var fontFile = fs.readFileSync(
	path.resolve(__dirname, '../../packages/theme_chalk/src/icon.scss'),
	'utf8'
);

// 3.用postcss将css编译为ast语法树
let nodes = postcss.parse(fontFile).nodes;

// 4.定义一个空数字用来存放icon
var iconList = [];

// 5.循环获取.el-icon-开头的样式，符合条件的放入 classList
nodes.forEach((icon) => {
	var selector = icon.selector || '';
	// 正则匹配
	var match = new RegExp(/\.yq-icon-([^:]+):before/);
	var arr = selector.match(match);
	if (arr && arr[1]) {
		iconList.push(arr[1]);
	}
});

// 6.按 css 文件顺序倒序排列
iconList.reverse();
// 7.将处理好的icon list 写入../../examples/icon.json下['platform-eleme','eleme','delete-solid','delete',...]
fs.writeFile(
	path.resolve(__dirname, '../../examples/icon.json'),
	JSON.stringify(iconList),
	function(err) {
		if (err) {
			return console.log(err);
		}
		console.log('File saved successfully!');
	}
);
