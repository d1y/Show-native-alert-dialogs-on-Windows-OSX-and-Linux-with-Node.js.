import * as child_process from 'child_process'
import { ExecaConf } from './interface'


export default (conf: ExecaConf | string): string=> {
  let result: string = ''
  if (typeof conf != 'string') {
    let { exe, cmds } = (conf as ExecaConf)
    cmds.unshift(exe)
    result = cmds.join(' ')
  } else result = (conf as string)
  console.log(result);
  return ''
  const data: Buffer | string = child_process.execSync(result)
  let value: string = data.toString('utf-8')
  let index = value.lastIndexOf('\n')
  if (index >= 0) return value.slice(0, index)
  return value
}