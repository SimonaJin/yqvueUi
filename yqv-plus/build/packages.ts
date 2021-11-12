import { withTaskName } from './utils/index';
import { outDir, projectRoot } from './utils/paths';
import { buildConfig } from './utils/config';
//专门打包utIl ,指令 hook的
import {series, parallel, src, dest} from 'gulp'
import path from 'path'
import ts from 'gulp-typescript'

export const buildPackages = (dirname:string, name:string) =>{
	//打包的格式需要什么类型？  模块规范 umd ,commjs es模块规范
	//umd 是在浏览器中用的
	
	//rollup 多个小模块合并大模块
	//可以用 rollup ts->js
	const tasks = Object.entries(buildConfig).map(([module,config])=>{
		const output = path.resolve(dirname,config.output.name)
		return series(
			withTaskName(`build:${dirname}`,()=>{
				const tsConfig = path.resolve(projectRoot,'tsconfig.json'); //ts的配置文件的路径
				const inputs = ['**/*.ts','!gulpfile.ts','!node_modules'];
				return src(inputs).pipe(ts.createProject(tsConfig, {
					declaration:true, //需要生成声明文件
					strict:false,
					module:config.module
				})()).pipe(dest(output))
			}),
			withTaskName(`copy:${dirname}`, ()=>{
				//放到es->utils 和lib ->utils
				return src(`${output}/**`).pipe(dest(path.resolve(outDir,config.output.name,name)))
			})
			)
	})
	return parallel(...tasks)
}
