/** 单个柱子的柱状图的柱子颜色校验规则 */
export type RuleType = {
  min: number
  max: number
  color: string
}

/** 多个柱子时的series属性 */
export type SeriesType = {
  name: string
  color?: string
  data: number[]
}
