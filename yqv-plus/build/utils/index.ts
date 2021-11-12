import {spawn} from "child_process";
import {projectRoot} from './paths'

export const withTaskName = <T>(name:string,fn:T) => Object.assign(fn,{displayName:name});

// 在node使用子进程来运行脚本
export const run = async (command:string)=>{
	return new Promise((resolve)=>{
		const [cmd, ...args]= command.split(' ');
		const app = spawn(cmd,args,{
			cwd:projectRoot,
			stdio:'inherit', //直接将这个子进程的输出
			shell: true,// 默认情况下 linux才支持 rm -rf （window按照 git bash）
		})
		app.on('close',resolve)
	})
}
export const pathRewriter = (format)=>{
	return (id:string)=>{
		id = id.replace("@yqv-plus",`yqv-plus/${format}`)
		return id;
	}
}
