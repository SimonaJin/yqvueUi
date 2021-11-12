import  {ZIcon} from '@yqv-plus/components/index';
import type { App } from 'vue';// ts中的优化 只获取类型

const components = [
	ZIcon
]

const install = (app:App) =>{
	//每个组件再编写的时候 都提供了install方法
	components.forEach((component) =>app.use(component))
}
export default {
	install,
};

export * from '@yqv-plus/components';