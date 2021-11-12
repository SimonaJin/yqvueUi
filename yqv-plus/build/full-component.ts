import { pathRewriter } from './utils/index';
import { buildConfig } from './utils/config';
import { outDir, zpRoot } from './utils/paths';
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { parallel } from 'gulp'
import path from 'path'
import {rollup, OutputOptions} from 'rollup'
import fs from 'fs/promises'

const buildFull = async () =>{
	const config = {
		input: path.resolve(zpRoot,'index.ts'),//打包入口
		plugins:[nodeResolve(),typescript(),vue(),commonjs()],
		external:(id)=> /^vue/.test(id)//表示打包的时候不打包vue代码
	}
	// 整个组件库 两种使用方式 import 导入组件库 在浏览器中使用 script
	//esm  umd

	const buildConfig =[
		{
			format:'umd',
			file:path.resolve(outDir,'index.js'),
			name:'yqvPlus',//全局名字
			exports:"named",//导出的名字 用命名的方式导出
			globals:{
				vue:"Vue"
			}
		},
		{
			format:'esm',
			file:path.resolve(outDir,'index.esm.js'),
		}
	]
	let bundle = await rollup(config);
	return Promise.all(buildConfig.map(config=>bundle.write(config as OutputOptions)))

}

//打包组件库入口`yqv-plus`
async function buildEntry() {
  const entryFiles = await fs.readdir(zpRoot, { withFileTypes: true });
  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !["package.json"].includes(f.name))
    .map((f) => path.resolve(zpRoot, f.name));

  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), typescript()],
    external: (id: string) => /^vue/.test(id) || /^@yqv-plus/.test(id),
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),
      }))
      .map((option) => bundle.write(option as OutputOptions))
  );
}
// buildFullComponent 任务名
export const buildFullComponent = parallel(
	buildFull,
	buildEntry
)