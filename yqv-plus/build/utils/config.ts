import path from 'path';
import {outvplusDir} from './paths';
export const buildConfig = {
	esm:{
		module:"ESNExt",//tsconfig 输出的结果es6模块
		format:"esm",// 需要配置格式化后的模块规范
		output:{
			name:"es",//打包到dist目录下的哪里个目录
			path:path.resolve(outvplusDir,'es')
		},
		bundle:{	
			path:'yqv-plus/es'
		},
	},
	cjs:{
		module:"CommonJS",
		format:"cjs",
		output:{
			name:"lib",
			path:path.resolve(outvplusDir,'lib')
		},
		bundle:{	
			path:'yqv-plus/lib'
		},
	}
}
export type BuildConfig = typeof buildConfig;
