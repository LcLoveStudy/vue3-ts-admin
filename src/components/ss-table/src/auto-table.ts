import type { FilterMethods } from 'element-plus/es/components/table/src/table-column/defaults'
/**
 * 对table组件的表头配置项的类型限制
 * prop:参数名称
 * label:每列的名称
 * sortable:此列是否可以排序
 * width:此列的宽度
 * filters:是否可以过滤，具体写法查看element-plus的table组件
 * filterMethod:对filters的回调
 */
export interface TableColType {
  prop: string
  label: string
  sortable?: boolean
  width?: string | number
  filters?: Array<{ text: any; value: any }>
  filterMethod?: FilterMethods<any>
}
export interface PageType {
  current: number
  size: number
  total: number
}
