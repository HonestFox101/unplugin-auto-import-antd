import { antdBuiltInComponents } from './preset'

// 处理特殊的组件名（非大驼峰）
export function getComponentName(name: string) {
  if (name === 'theme') {
    return 'Theme'
  }
  if (name === 'message') {
    return 'Message'
  }
  if (name === 'notification') {
    return 'Notification'
  }
  return name
}

// 获取添加前缀后的组件名映射
export function getAntdComponentsMap(prefix?: string, preset?: string[]): Map<string, string> {
  const components = preset ?? [...antdBuiltInComponents]
  return components.reduce(
    (map, name) => map.set(`${prefix ?? ''}${getComponentName(name)}`, name),
    new Map()
  )
}
