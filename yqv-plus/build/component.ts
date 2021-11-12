import { parallel, series } from 'gulp'
import path from 'path'
import {sync} from 'fast-glob'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import {rollup, OutputOptions} from 'rollup'
import { buildConfig } from './utils/config';
import { pathRewriter, run } from './utils/index';
import { compRoot, outDir} from "./utils/paths";
import { genTypes } from './component-types' //给每个组件添加类型声明文件
//打包每个组件
const buildEachComponent = async() =>{
	const files = sync('*',{
		cwd: compRoot,
		onlyDirectories:true
	});
	// 分别把component是文件夹下的组件 放到 dist/es/components 下 和 dist/lib/components
	const builds = files.map(async (file:string)=>{
		const input = path.resolve(compRoot,file,'index.ts');// 每个组件的入口
		const config = {
			input,
			plugins:[nodeResolve(),vue(),typescript(),commonjs()],
			external:(id: string)=> /^vue/.test(id) || /^@z-plus/.test(id)
		}
		const options = Object.values(buildConfig).map((config) => ({	
			format:config.format,
			file:path.resolve(config.output.path,`components/${file}/index.js`),
			paths: pathRewriter(config.output.name)
		}));
		let bundle = await rollup(config);

		await Promise.all(
			options.map((option)=>bundle.write(option as OutputOptions))
			)
	});
	return Promise.all(builds)
}

//拷贝文件 types->components 到es/lib下
function copyTypes() {
  const src = path.resolve(outDir, "types/components/");
  const copy = (module) => {
    let output = path.resolve(
      outDir,
      buildConfig[module].output.name,
      "components/"
    );
    return () => run(`cp -r ${src}/* ${output}`);
  };
  return parallel(copy("esm"), copy("cjs"));
}
//打包入口文件
async function buildComponentEntry() {
	const config = {
			input: path.resolve(compRoot, "index.ts"),
			plugins: [typescript()],
			external: () => true,
	};

	const bundle = await rollup(config);
	return Promise.all(
			Object.values(buildConfig)
					.map((config) => ({
							format: config.format,
							file: path.resolve(config.output.path, "components/index.js"),
					}))
					.map((config) => bundle.write(config as OutputOptions))
	);
}

export const buildComponent = series(
	buildEachComponent,
	buildComponentEntry,
	genTypes,
	copyTypes()
)