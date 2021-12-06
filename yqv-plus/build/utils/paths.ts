import { resolve } from 'path'
export const projRoot = resolve(__dirname, '..', '..')
export const projectRoot = resolve(__dirname,'../../')
/** dist */
export const outDir = resolve(projRoot,'dist')
/** dist/yqv-plus */
export const outvplusDir = resolve(outDir,'yqv-plus')
/** dist/yqv-plus/dist */
export const outfullDir = resolve(outvplusDir,'dist')
export const zpRoot = resolve(projRoot,'packages/yqv-plus')
export const compRoot =  resolve(projectRoot,'packages/components')
export const epPackage = resolve(zpRoot, 'package.json')