var path = require('path');

// 设置别名
exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
	'yqv-base': path.resolve(__dirname, '../')
};
// js
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
