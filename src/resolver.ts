import type { Resolver } from 'unplugin-auto-import/types'

import type { AntdResolverOptions } from './types'
import { antdBuiltInComponents } from './preset'
import { getAntdComponentsMap } from './utils'

export function antdResolver(options: AntdResolverOptions = {}): Resolver {
  const { prefix, packageName: from = 'antd', preset = antdBuiltInComponents } = options
  const antdComponentsMap = getAntdComponentsMap(prefix, preset)
  return {
    type: 'component',
    resolve: (originName: string) => {
      if (!prefix) {
        if (preset.includes(originName)) {
          return {
            from,
            name: originName
          }
        }
      } else {
        // 如果设定前缀，则重命名引入
        const name = antdComponentsMap.get(originName)
        if (name) {
          return {
            from,
            name,
            as: originName
          }
        }
      }
      return undefined
    }
  }
}
