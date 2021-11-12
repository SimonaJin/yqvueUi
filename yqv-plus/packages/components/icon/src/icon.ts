//放置组件的props 以及公共方法
import type {ExtractPropTypes} from 'vue'
export const icionProps = {
	size:{
		type:Number
	},
	color:{
		type:String
	}
}

export type icionProps = ExtractPropTypes<typeof icionProps>