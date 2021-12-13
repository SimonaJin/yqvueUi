- build 负责打包的文件夹 gulp编译ts,打包样式，打包单文件组件
- dist最终生成的打包结果
- packages 放着组件的代码 monorepo
- play 用来测试代码 调试用的
- typings 放上类型声明
- .npmrc 需要增加此文件按照依赖才会正常
- tsconfig ts配置

## pageages
		> components 存放所有组件的 最终通过index.ts 导出所有的组件
		> theme-chalk 做样式的 BEM 
		> utils 主要存放着多个模块之间的公共方法

## build 打包模块 gulp 来控制流程的
pnpm run build
- build 目前实现了打包样式、工具方法

## dist目录打包出整体结果
- es/lib 两种规范
- theme-chalk 
- 最终发布的模块就是dist -> element-plus ->-plus

## yqv-plus 组件库的整合入口
