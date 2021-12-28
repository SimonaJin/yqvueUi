const path = require('path')
module.exports = {
	title: 'yq-ui', // 设置网站标题
	description: 'ui组件库', //描述
	dest: './dist', // 设置输出目录
	base:'/yqvueUi/',//打包静态资源根目录, 部署到github相关配置
	port:'9600',
	plugins: ['autobar',['@vuepress/plugin-back-to-top', false]],
	themeConfig: { //主题配置
			nav: [//头
					{ text: '主页', link: '/' },
					// { text: '联系我', link: '/contact/' },
					// { text: '我的博客', link: 'https://' },
			],
			// 为以下路由添加侧边栏		
			sidebar: {
				'/guide/': [
					{    // 分组名
						title: '开发指南',
						sidebarDepth: 1,
						collapsable: false, // 可选的, 默认值是 true
						//分组下文件['文件名','显示名称']
						children: [
							'installation','quickstart'
						]
					},
					{    // 分组名
						title: '组件',
						collapsable: false, // 可选的, 默认值是 true
						//分组下文件['文件名','显示名称']
						children: [
							'button','icon'
						]
					}
				],
			}
	},
	chainWebpack: config => {
		config.resolve.alias.set('core-js/library/fn', 'core-js/features')
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@src': path.resolve(__dirname, '../../src/'),
			}
		}
	}
}