export type StackDataItemType = {
  name: string
  data: {
    name: string
    value: number
  }[]
}

export type StackSeriesType = {
  name: string
  type: 'bar'
  color: string
  stack: 'total'
  label: {
    show: boolean
    position: any
    color: string
    fontSize: 12
  }
  emphasis: {
    focus: 'series'
  }
  data: number[]
}
