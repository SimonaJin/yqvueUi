import { series, parallel } from 'gulp';
import { withTaskName, run } from './utils/index';
import { outDir, zpRoot } from './utils/paths'
import { genTypes, copyEntryTypes } from './gen-types';
//gulp 不叫打包 叫做
//1.清理文件
//2.打包工具方法
//3.打包样式
//4.打包所有组件
//5.打包单个组件
//6.生成一个组件库
//7.发布组件库
export default series(
	withTaskName('clean', async () => run('rm -rf ./dist')), //rm -rf ./dist
	parallel(
		withTaskName('buildPachages', () => run('pnpm run --filter ./packages --parallel build')),
		withTaskName('buildFullComponent', () => run('pnpm run build buildFullComponent')), //执行build 命令时会调用rollup，rollup传递参数 buildFullComponent 会执行任务叫
		withTaskName('buildComponent', () => run('pnpm run build buildComponent'))
	),
	parallel(
		genTypes, copyEntryTypes()
	)
)



export * from './full-component';
export * from './component';