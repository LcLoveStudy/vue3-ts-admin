export interface autoColFace {
  prop:string
  label:string
  width?:string
  order?:Number
  sortable?:boolean
  editable?:boolean
  filters?:Array<{
    text:string
    value:string
  }>
  filterMethod?:FilterMethods<any>
}